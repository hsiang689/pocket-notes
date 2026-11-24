// 只快取這個頁面本身的檔案；內容由頁面另外存在 pn-data-v1，這裡不處理。
const C = 'pn-shell-v1';
const F = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(C).then((c) => c.addAll(F)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('pn-shell-') && k !== C).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.includes('/__pn/')) return;
  // 先拿網路上的新版，離線時用快取
  e.respondWith(fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(C).then((c) => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then((r) => r || caches.match('./index.html'))));
});
