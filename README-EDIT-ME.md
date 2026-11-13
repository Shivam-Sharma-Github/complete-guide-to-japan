# Your Website — Separate Files Version 📖
### So simple, a 10-year-old can edit it

This is your **live website (all 13 guides)**, split into separate files.
Before, everything was packed inside ONE giant file (2.2 MB) — nobody could edit it.
Now every part has its own file:

| File / Folder | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The **building** — what is on the page | Almost never |
| `data.js` | **ALL THE WORDS** — guide titles, answers, steps, course days (English + Hindi) | ✅ **YES — 99% of edits happen here** |
| `style.css` | The **paint** — colours and design | Only for colours |
| `script.js` | The **working** — buttons, search, language change | ❌ Never |
| `images/` | **All the photos** (8 photos, with clear names) | Only to change a photo |

---

## 👀 How to SEE it
Double-click `index.html`. It opens in your browser.
After every edit: save the file (Ctrl+S), then press F5 in the browser to refresh.

## ✏️ EDIT 1 — Change any word (1 minute)
1. Open `data.js` in any text editor
2. Find the word with Ctrl+F
3. Change ONLY the words inside the `"quotes"`
4. Save → refresh → done!

## ➕ EDIT 2 — Add a NEW GUIDE (3 minutes)
1. Open `data.js`, find the `GUIDES` list
2. Copy one whole guide block — from `{` to `},`
3. Paste the copy, then change its `id` (new small name, no spaces), `title`, `answer`/`steps` and `source`
4. Save → refresh. Your new guide is on the website.

## 🎨 EDIT 3 — Change a colour (1 minute)
1. Open `style.css`
2. At the top, in the `:root` list, change a colour's `#` code
   (example: `--accent: #b9552f;` is the main button/heading colour)
3. Save → refresh.

## 🖼️ EDIT 4 — Change a photo (1 minute)
Put your new photo in the `images/` folder with the **same name** as the old one
(example: replace `images/hero-wagasa.jpg`). Save → refresh. Done — no code to touch.

---

## ⚠️ The ONLY 3 rules (so nothing breaks)
1. **Only change words inside `"quotes"`.**
2. **Never delete** commas `,` brackets `[ ]` or braces `{ }`.
3. Page went blank after an edit? Press **Ctrl+Z** (undo) in the editor until it works again.

## 🌐 Making your edits LIVE
This folder is your editing copy. The live website still runs the old one-file version.
When you finish editing and want it live, just tell Muse:
> "Separate-files wala version live kar do"
and Muse will put these same separate files on GitHub Pages, after you approve.
