# 如何寫新網誌文章

1. 於 `docs/blog/` 新增檔案
2. 撰寫 Front Matter
    ```yaml
    date: "2019-12-24 00:00"
    description: 當前頁面的描述
    fluid: true # 設定當前頁面的 layout 為 .container-fluid 而不是 .container
    lang: zh-TW
    metaTitle: 重寫默認的 meta title
    permalink: 参考 https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#permalink
    tags: ['文章的標籤']
    title: 當前頁面的標題
    meta:
      - name: keywords
        content: 給 SEO 使用的 keywords，以空格分隔
    ```
