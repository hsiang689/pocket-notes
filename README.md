# pocket-notes

A small, private notes reader for phones and desktops.

- This repository contains **only the reader code**. No notes are stored here.
- Notes are loaded at runtime from a private GitHub repository of your own, using a fine-grained token you enter on your own device. The token and repository name are kept in that browser's local storage and are never written to this repository.
- Strict Content Security Policy: no third-party scripts, and the only network destination is `api.github.com`.
- Note pages are shown in a sandboxed iframe, so they cannot read the token.

Hosted with GitHub Pages (deploy from `main`, root).
