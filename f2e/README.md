# MX development guide

## README.md
- 一定要寫，不要留白
- 樣版
``` 
# 我是專案名稱
- 正式站：
- 測試站：
- 總表：

## Team Member
- AM：
- 創意：
- 前端：
- 後端：
```

## 線上 guide.html Demo
- https://medialanddev.github.io/MX_Style_Guides/guide.html
 

## Gitflow
- 採用米蘭科技部門討論過的 gitflow
    > https://knowledge.medialand.com.tw/pages/5bbabdb02cac5f10d8000bf3
- 上線一定要合拼回 master


## eslint
- JS 用 airbnb base
- Vue 用 plugin:vue/recommended
- eslint 有紅字請修正

## npm script
- 啟動：npm run start
- 打包：npm run build
- 測試：npm run test
- storybook：npm run storybook

## development 
- 專案都以 webpack 開發
- 除了和第三方廠商配合，我們切版，對方套程式，才用 gulp
- 測試站一率都要放 robots.txt, 檔案在 guide/robots.txt

## Javascript Guide
- 採用 js es6
- 導入 flowjs
- 導入 jest 測試程式
- 導入 e2e puppeteer test

## 測試程式
- unit test
- component test
- e2e test

## Style Guide
- 採用 stylus
- 檔案命名可以參考 boostrap 或是 https://tailwindcss.com/

### Repository

```
    /css
        /base - 所有專案共用 mixins/extends, 全站共用樣式各個細項
        /handlebars - hbs file etc. (spritesmith用)
        
        /mixins - 放 stylus 變數、function、不包含實際的 .class, 檔名都加 _ 開頭

        /modules - 個別 dom 物件/components 樣式
            命名可以參考 https://tailwindcss.com/
        /vendors - 外部套件樣式
        common.styl - 全站共用樣式 (挑選需要的 modules & vendors include)
        {pagename}.styl - 頁面樣式 (需include common.styl)

```

### CSS Naming
- 目前檔案使用 `B(Block)-E(Element)-E(Element)`
- 表示執行狀態的Modifier class，前綴 `is-`，需與 Element Class 併用
- 表示另一版本樣式的class，前綴 `style-`，需與 Element Class 併用
    - Modifier Example
        - (X) .nav__open { z-index: 10; }
        - (X) .is-open { z-index: 10; }
        - (O) nav.is-open { z-index: 10; }
        - (X) .style-dark { background-color: #333; color: white; }
        - (O) button.style-dark { background-color: #333; color: white; }


#### CSS Naming Examples:
- .nav
- .nav-item
- .nav-item-zhname
- .nav-item-enname
- .nav-item.is-active
- .nav.is-sticked
- .btn
- .btn.is-disabled
- .btn.style-large


### CSS Styles

#### Reset
- 使用 Reset CSS (Meyer)
- 或是直接導入 boostrap4

#### Box-Sizing
- 一律使用border-box ( = padding 含在寬高內)
- 或是直接導入 boostrap4

#### Typography
- 傾向將用於文字排版的樣式設定在 article 的子元素。
    - 因文字段落的量一般比非文字元素少很多，限縮在 article 內方便管理，不會影響全局排版。
    - h1-h6 另設 class 寫樣式，便於調整SEO。
    - Example
        - (X) h1 { line-height: 1.6 }
        - (O) article h1, .h1 { line-height: 1.6 }
        - (O) .title-bordered { line-height: 1.6 }
        - (O) article p { line-height: 1.6 }

- Font-Size
    - html
        - 使用 100%
    - h1-h6, p, text elements
        - 使用單位: px ( follow 專案視覺 guideline )
        - 因 RWD 各 breakpoint 視覺內訂定的標題/文字尺寸一般以 px 標、且不一定互成比例，所以不傾向使用em/rem。

    - input, textarea, form elements
        - 使用單位: px ( follow 專案視覺 guideline )
        - 若為 16px ，則設為 1rem。

- Line-Height
    - 使用無單位( = em )標記
        - 因同一文字元素在各 breakpoint 視覺內訂定的行高一般相同。視覺修調前後的行高一般也會依比例修改，所以傾向使用 em。
    - 非文字元素： reset 為 1。

#### Breakpoints
- import bootstrap.css (v4.4.1) - 768px, 992px, 1200px

#### Colors
- 不 follow Bootstrap。
- 不傾向以業務邏輯命名顏色。
- 直接以顏色名稱加前綴來命名變數。
- Example
    - (X) color-primary
    - (O) color-red
    - (O) c-red

#### Grid System
- import bootstrap.css (v4.4.1)
- 未經 customize (gutter: 30px)
- 已新增 .gutter-{size} class 於 size.styl 可使用

#### 其他
- 除了 h1 - h6，不要針對 tag 直接寫 style
- Example
    - (X) button { width: 100px; }
    - (O) .custom-btn { width: 100px; }