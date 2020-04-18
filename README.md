# dd105g4
## 安裝方式
1. `npm i ` 
2. `gulp`

## SASS 基本設定
1. 主要都用 `main.scss` 這隻在控管
2. 設定檔都在 `base/setting.scss`
   > 字體設定 / 斷點 / 套件使用 我都放在設定檔裡
3. 顏色變數設定 `base/color.scss`
4. 網站的 css reset -> `base/reset.scss`
5. 一些常用或是共用的，可以放在 -> `base/common.scss`


## RWD 開發使用
Page 有分 `_desktop.scss` / `_medium.scss` (平板) / `_small.scss` (手機)

每頁的邏輯可以照這個走

### 加入新增的頁面 
- 桌機: `respond/desktop `
- 平板: `respond/medium`
- 手機: `respond/small`

## CSS 共用組件的新增

每個常用的組件可以新增在 `modules/...` 裡. Please refer to  btn 範例
