# My Personal Card

我的個人數位名片頁面，使用 **React** 與 **Vite** 建置，支援淺／深色主題、打字機自介、玻璃擬態卡片與 3D 傾斜等互動。

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)

## 本機開發

### 需求

- [Node.js](https://nodejs.org/)（建議 LTS 版本）
- npm（隨 Node 安裝）

### 安裝與指令

```bash
npm install
```

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器（預設 `http://localhost:5173`） |
| `npm run build` | 產出正式環境靜態檔至 `dist/` |
| `npm run preview` | 在本機預覽建置結果（需先執行 `build`） |

## 檔案架構

```
my-personal-card/
├── index.html              # HTML 入口（掛載 #root）
├── vite.config.js          # Vite 設定
├── package.json
├── public/                 # 靜態資源，會原樣複製到網站根目錄
│   └── image/              # 大頭照等，例如 1.jpg → 網址 /image/1.jpg
├── src/
│   ├── main.jsx            # React 進入點
│   ├── App.jsx             # 根元件（版面、主題、Toast）
│   ├── constants/
│   │   └── content.js      # 文案、連結、Email、大頭照路徑（主要改這裡）
│   ├── components/         # UI 區塊元件
│   │   ├── BackgroundBlobs.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── PersonalCard.jsx
│   │   ├── AvatarSection.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── EmailButton.jsx
│   │   └── Toast.jsx
│   ├── hooks/              # 自訂 Hooks（主題、打字、卡片傾斜、Toast）
│   ├── utils/              # 小工具（剪貼簿、按鈕光暈）
│   └── styles/             # 樣式（依區塊拆分多個 CSS 檔）
│       ├── index.css       # 匯入其餘樣式
│       ├── variables.css   # CSS 變數與深色主題
│       ├── base.css
│       ├── background.css
│       ├── layout.css
│       ├── card.css
│       └── ui.css
└── dist/                   # `npm run build` 產出（勿手動維護，可加入 .gitignore）
```

### 自訂內容建議

- **文字與連結**：編輯 `src/constants/content.js`（姓名、自介、GitHub／LinkedIn／Instagram、Email 等）。
- **大頭照**：將圖片放到 `public/image/`，並在 `content.js` 的 `AVATAR_SRC` 使用對應路徑（例如 `/image/1.jpg`）。

## 部署方式

此專案為 **純前端靜態網站**，建置後只需上傳 `dist/` 目錄內的檔案到任一靜態主機。

### 1. 建置

```bash
npm run build
```

產物在專案根目錄的 `dist/`。

### 2. 常見部署選項

| 平台 | 作法摘要 |
|------|----------|
| **GitHub Pages** | 將儲存庫接上 Pages；若網址為 `https://<user>.github.io/<repo>/`，需在 `vite.config.js` 設定 `base: '/<repo>/'` 後再建置。 |
| **Netlify / Vercel** | 連結 Git 儲存庫：建置指令 `npm run build`，發布目錄 `dist`。 |
| **Cloudflare Pages** | 同上，輸出目錄選 `dist`。 |
| **自有主機 / NAS** | 將 `dist/` 內容上傳到網站根目錄或子目錄；若放在子目錄，同樣需設定 Vite `base`。 |

### 子路徑部署（非網站根目錄）

若網址不是 `https://網域/` 而是 `https://網域/子路徑/`，在 `vite.config.js` 加入：

```js
export default defineConfig({
  base: '/子路徑/',
  plugins: [react()],
});
```

再重新執行 `npm run build`。