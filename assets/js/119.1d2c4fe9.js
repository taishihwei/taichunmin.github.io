(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{495:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"zhui-zong-shi-yong-zhe-you-mei-you-kan-line-xun-xi-kai-xin-lu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zhui-zong-shi-yong-zhe-you-mei-you-kan-line-xun-xi-kai-xin-lu"}},[t._v("#")]),t._v(" 追蹤使用者有沒有看 LINE 訊息 (開信率)")]),t._v(" "),a("p",[t._v("過去在寄送 E-mail 廣告信的時代，「開信率」一直是一個很重要的指標，在 LINE chatbot 中，我們也可以透過 Google Analytics 來追蹤使用者是否有打開聊天室並看到 Flex 訊息！")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你還沒有看過前幾篇相關文章，建議你先看過一遍：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-04-28-lintbot-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("讓聊天機器人也能看 Google Analytics (1)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-06-15-line-push-template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("能使用變數的 LINE 訊息推送小工具"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("輔助開發 LINE Flex 訊息的工具"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"chan-sheng-zhui-zong-wang-zhi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chan-sheng-zhui-zong-wang-zhi"}},[t._v("#")]),t._v(" 產生追蹤網址")]),t._v(" "),a("p",[t._v("我們可以用 Google Analytics Measurement Protocol 來產生一個追蹤網址：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// include Qs")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gaScreenView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("lineId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://www.google-analytics.com/collect?")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    an"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My App'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 畫面名稱,")]),t._v("\n    cid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lineId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^U(\\w{8})(\\w{4})(\\w{4})(\\w{4})(\\w{12})$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$1-$2-$3-$4-$5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// client id")]),t._v("\n    ds"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 資料來源，填寫為 app")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'screenview'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UA-xxxxxxxxx-1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GA 追蹤代碼")]),t._v("\n    uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lineId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// LINE userId")]),t._v("\n    ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-tw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// locale")]),t._v("\n    v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api version")]),t._v("\n    z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.google-analytics.com/collect?an=My%20App&ds=app&tid=UA-xxxxxxxxx-1&ul=zh-tw&v=1&uid=Udeadbeefdeadbeefdeadbeefdeadbeef&cid=deadbeef-dead-beef-dead-beefdeadbeef&t=screenview&cd=a&z=1592381805597")]),t._v("\n")])])]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/protocol/v1",target:"_blank",rel:"noopener noreferrer"}},[t._v("點此可查看 Google Analytics Measurement Protocol 的文件"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"ce-shi-flex-xun-xi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ce-shi-flex-xun-xi"}},[t._v("#")]),t._v(" 測試 Flex 訊息")]),t._v(" "),a("p",[t._v("我們可以先使用一個簡單的 Flex 訊息來測試是否成功：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"altText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"altText"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bubble"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"layout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertical"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"width"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aspectMode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cover"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aspectRatio"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1:1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.google-analytics.com/collect?an=My%20App&ds=app&tid=UA-xxxxxxxxx-1&ul=zh-tw&v=1&uid=Udeadbeefdeadbeefdeadbeefdeadbeef&cid=deadbeef-dead-beef-dead-beefdeadbeef&t=screenview&cd=a&z=1592381805597"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然後丟到"),a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("這篇文章介紹過"),a("OutboundLink")],1),t._v("的「DEMO 開發 Flex」這個測試用的機器人：")]),t._v(" "),a("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/KFz1lgo.jpg"}}),t._v(" "),a("p",[t._v("然後在手機內瀏覽後，要能在 Google Analytics 的即時頁面看到追蹤資訊：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/US2GHTI.png",alt:""}})]),t._v(" "),a("p",[t._v("當使用者每一個裝置第一次看到這個 Flex 訊息時，Google Analytics 就會成功追蹤到使用者看到訊息，但是因為 LINE 的圖片會有快取機制，所以每一個裝置只能追蹤到第一次的瀏覽。")]),t._v(" "),a("h2",{attrs:{id:"zai-flex-xun-xi-zhong-yin-cang-zhui-zong-lian-jie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zai-flex-xun-xi-zhong-yin-cang-zhui-zong-lian-jie"}},[t._v("#")]),t._v(" 在 Flex 訊息中隱藏追蹤連結")]),t._v(" "),a("p",[t._v("我們要先來準備一個正式的 Flex 訊息，在此我偷懶直接用"),a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-06-15-line-push-template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("這篇文章"),a("OutboundLink")],1),t._v("的"),a("a",{attrs:{href:"https://gist.github.com/taichunmin/725af44befc5366962d83d380a74f564",target:"_blank",rel:"noopener noreferrer"}},[t._v("擲骰結果  template"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("請記得把這個圖片追蹤網址好好的隱藏在 Flex 訊息中，在此推薦使用 "),a("code",[t._v("position: absolute")]),t._v(" 搭配 "),a("code",[t._v("offsetTop")]),t._v(" 及 "),a("code",[t._v("offsetStart")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"layout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertical"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"offsetStart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"offsetTop"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"position"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"absolute"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"width"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aspectMode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cover"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aspectRatio"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1:1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"${gaScreenView(line_id, '瀏覽畫面')}\"")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然後就可以透過"),a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-06-15-line-push-template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("這篇文章"),a("OutboundLink")],1),t._v("介紹過的工具來推給使用者囉！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/9nWGiUD.jpg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://gist.github.com/taichunmin/cf896614f97546e981d83aa1cde080e0",target:"_blank",rel:"noopener noreferrer"}},[t._v("請點此查看完整的 template"),a("OutboundLink")],1),t._v("，並記得把 "),a("code",[t._v("tid")]),t._v(" 換成自己的追蹤 ID")])]),t._v(" "),a("h2",{attrs:{id:"yuan-shi-ma-ji-can-kao-lian-jie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yuan-shi-ma-ji-can-kao-lian-jie"}},[t._v("#")]),t._v(" 原始碼及參考連結")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("本文範例程式的原始碼授權為 MIT License。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-06-29-linebot-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("追蹤 LINE Notify 的閱讀率 (開信率)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.oxxostudio.tw/articles/201706/google-analytics-tracking-email.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Analytics 追蹤 Email 與點擊成效"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://engineering.linecorp.com/zh-hant/blog/line-developer-meetup-12/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE Developer Meetup #12 開發者小聚活動後分享"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);