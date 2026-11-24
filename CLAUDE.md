# pocket-notes — 給 Claude 的說明

一律用正體中文回覆。

- 這是**公開** repo，只放閱讀器程式（`index.html` 單檔、`sw.js`、`manifest.webmanifest`、圖示）。
- 不能出現：任何內容文字、內容主題的字詞、資料 repo 的名稱或 owner/name、token。資料 repo 名稱只能由使用者在設備上輸入。
- README、commit 訊息、註解、頁面標題也一樣保持中性。推送前先跑使用者私人 repo 裡的檢查腳本。
- 安全：維持 CSP（不載入任何外部程式，connect-src 只有 api.github.com）；內容放在 sandbox iframe（不給 allow-same-origin），讓內容頁讀不到 token。
- 改了殼的檔案要把 `sw.js` 的 `pn-shell-vN` 加一，手機才會換新版。
