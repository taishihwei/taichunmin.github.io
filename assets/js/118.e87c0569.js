(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{494:function(t,e,r){"use strict";r.r(e);var a=r(8),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"neng-shi-yong-bian-shu-de-line-xun-xi-tui-song-xiao-gong-ju"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#neng-shi-yong-bian-shu-de-line-xun-xi-tui-song-xiao-gong-ju"}},[t._v("#")]),t._v(" 能使用變數的 LINE 訊息推送小工具")]),t._v(" "),r("p",[t._v("之前在公司的「YouBike Today - 小幫手」聊天機器人中，舉辦過一個抽獎活動，因為有報稅問題，所以需要跟使用者索取一些個資，但是由於這個聊天機器人不是開啟「聊天模式」，沒辦法跟使用者對話，所以我們想到了一個辦法，就是請使用者憑中獎通知的截圖到 Facebook 粉絲專頁去跟我們兌獎。")]),t._v(" "),r("p",[t._v("但是，要如何證明使用者的身份呢？於是，我對中獎的使用者傳送一個專屬的訊息，並且在訊息內寫出使用者的 LINE 名稱，透過這樣來判斷身份。")]),t._v(" "),r("p",[t._v("但是如果使用 pushMessage API 要推送不同訊息給不同使用者實在是太麻煩，於是我就寫出了這個小工具啦！")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("img",{attrs:{src:"https://i.imgur.com/LpoN8bg.jpg",alt:""}})]),t._v(" "),r("th",[r("img",{attrs:{src:"https://i.imgur.com/qXcYyTw.jpg",alt:""}})])])]),t._v(" "),r("tbody",[r("tr",[r("td"),t._v(" "),r("td")])])]),t._v(" "),r("blockquote",[r("p",[t._v("這個小工具會透過 "),r("a",{attrs:{href:"https://github.com/Rob--W/cors-anywhere",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS Anywhere"),r("OutboundLink")],1),t._v(" 來呼叫 LINE pushMessage API，如果擔心 Access Token 外洩的話請不要使用此工具。")])]),t._v(" "),r("h2",{attrs:{id:"shi-yong-jiao-xue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-jiao-xue"}},[t._v("#")]),t._v(" 使用教學")]),t._v(" "),r("h3",{attrs:{id:"liu-cheng-tu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#liu-cheng-tu"}},[t._v("#")]),t._v(" 流程圖")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/mnTppgA.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"zhun-bei-ming-dan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zhun-bei-ming-dan"}},[t._v("#")]),t._v(" 準備名單")]),t._v(" "),r("p",[t._v("首先，我們需要先準備一份 CSV 當作資料來源，大家可以直接使用 "),r("a",{attrs:{href:"https://www.google.com.tw/intl/zh-TW/sheets/about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Sheets"),r("OutboundLink")],1),t._v(" 來製作：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/0NJv7s7.png",alt:""}})]),t._v(" "),r("p",[t._v("請記得第一列要遵守 JS 的"),r("a",{attrs:{href:"https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/var_const_naming.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("命名規則"),r("OutboundLink")],1),t._v("，因為等等會當成變數名稱使用！")]),t._v(" "),r("p",[t._v("我在這份 CSV 中把使用者的 userId 放在 "),r("code",[t._v("line_id")]),t._v(" 中，暱稱則放在 "),r("code",[t._v("nick_name")]),t._v(" 中，這裡就是大家可以自由發揮的地方啦，例如說每個使用者發送不同的 "),r("a",{attrs:{href:"https://www.linebiz.com/tw/service/line-points/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE POINTS"),r("OutboundLink")],1),t._v(" 的兌換連結之類的。")]),t._v(" "),r("h3",{attrs:{id:"qu-de-csv-de-gong-kai-wang-zhi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qu-de-csv-de-gong-kai-wang-zhi"}},[t._v("#")]),t._v(" 取得 CSV 的公開網址")]),t._v(" "),r("p",[t._v("在 "),r("a",{attrs:{href:"https://www.google.com.tw/intl/zh-TW/sheets/about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Sheets"),r("OutboundLink")],1),t._v(" 準備好要發送的資料以後，你就可以把 CSV 發布到網路上，以便讓這個小工具可以取得你準備的資料喔！")]),t._v(" "),r("p",[t._v("點選「檔案」➜「發布到網路」：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/s37wJWs.png",alt:""}})]),t._v(" "),r("p",[t._v("然後選擇你的工作表名稱「表單回應 1」，確認發布格式是「逗號分隔值 (.csv)」，然後在確認底下有勾選「內容有所變更時自動重新發布」，都確認以後就可以按下「發布」按鈕囉：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/dr2cuIp.png",alt:""}})]),t._v(" "),r("p",[t._v("發布成功以後，你就會看到一個網址，把它直接複製下來吧！")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/HclIWYq.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[t._v("由於 Google Sheets 的「發布到網路」所發布的 CSV 會有 5 分鐘的快取，如果不想等的話，建議可以直接建立新的工作表，然後重新「發布到網路」喔！")])]),t._v(" "),r("h3",{attrs:{id:"bian-xie-xun-xi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bian-xie-xun-xi"}},[t._v("#")]),t._v(" 編寫訊息")]),t._v(" "),r("p",[t._v("你可以參考"),r("a",{attrs:{href:"https://developers.line.biz/en/reference/messaging-api/#flex-message",target:"_blank",rel:"noopener noreferrer"}},[t._v("「LINE 訊息文件」"),r("OutboundLink")],1),t._v("以及"),r("a",{attrs:{href:"https://developers.line.biz/flex-simulator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("「Flex 訊息模擬器」"),r("OutboundLink")],1),t._v("來寫出你想要的訊息內容。")]),t._v(" "),r("p",[t._v("為了要針對每位使用者傳送不同的資料，這個工具中使用了來自 Lodash 的 "),r("code",[t._v("_.template")]),t._v(" 函式，這個函式可以使用的語法很像 JS，如果需要這個函式的"),r("a",{attrs:{href:"https://lodash.com/docs/#template",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用說明請點此"),r("OutboundLink")],1),t._v("。此外，這個工具中也能夠使用所有 Lodash 中所提供的函式喔！")]),t._v(" "),r("p",[t._v("在此我們把使用者的名稱使用 "),r("code",[t._v("${nick_name}")]),t._v(" 帶入，然後在每顆骰子的擲骰結果內寫上亂數函式 "),r("code",[t._v("${_.random(1,4)}")]),t._v("，寫好以後我們就可以從右上角的「View as JSON」複製寫好的 JSON！"),r("a",{attrs:{href:"https://gist.github.com/taichunmin/725af44befc5366962d83d380a74f564",target:"_blank",rel:"noopener noreferrer"}},[t._v("(本文範例 JSON 在此)"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/MUtSjBT.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[t._v("這個工具支援 "),r("a",{attrs:{href:"https://json5.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON5 格式"),r("OutboundLink")],1),t._v("喔！")]),t._v(" "),r("div",{staticClass:"language-json5 extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json5"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// comments")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("unquoted")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'and you can quote me on that'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("singleQuotes")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I can use \"double quotes\" here'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("lineBreaks")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Look, Mom! \\\nNo \\\\n\'s!"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("hexadecimal")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xdecaf")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("leadingDecimalPoint")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v(".8675309")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("andTrailing")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("8675309.")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("positiveSign")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("+1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("trailingComma")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'in objects'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("andIn")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arrays'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"backwardsCompatible"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"with JSON"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),r("h3",{attrs:{id:"xun-xi-tui-song-gong-ju"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xun-xi-tui-song-gong-ju"}},[t._v("#")]),t._v(" 訊息推送工具")]),t._v(" "),r("p",[t._v("把剛剛上面的東西都準備好以後，我們就可以開始推送訊息啦：")]),t._v(" "),r("p",[t._v("訊息推送工具網址："),r("a",{attrs:{href:"https://taichunmin.idv.tw/pug/line-push-template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://taichunmin.idv.tw/pug/line-push-template.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("再次提醒：這個小工具會透過 "),r("a",{attrs:{href:"https://github.com/Rob--W/cors-anywhere",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS Anywhere"),r("OutboundLink")],1),t._v(" 來呼叫 LINE pushMessage API，如果擔心 Access Token 外洩的話請不要使用此工具。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/2qFHdsW.png",alt:""}})]),t._v(" "),r("p",[t._v("打開工具後，你應該會看到以下幾個欄位需要填寫：")]),t._v(" "),r("ul",[r("li",[t._v("CSV 網址：請填寫 Google Sheets 「發布到網路」所拿到的 CSV 網址")]),t._v(" "),r("li",[t._v("傳送給：如果在 CSV 中使用者 userId 的欄位名稱是 "),r("code",[t._v("line_id")]),t._v(" 在這裡就填 "),r("code",[t._v("${line_id}")])]),t._v(" "),r("li",[t._v("Access Token：請填寫頻道的 Access Token")]),t._v(" "),r("li",[t._v("訊息內容 JSON：請貼上你從 Flex 訊息模擬器複製出來的 JSON")])]),t._v(" "),r("p",[t._v("這些欄位都填完以後，就可以按下左下的「推送訊息」按鈕囉！以下是本文送出的擲骰結果範例：")]),t._v(" "),r("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/OuqBL2f.jpg"}}),t._v(" "),r("h2",{attrs:{id:"yuan-shi-ma-ji-can-kao-lian-jie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yuan-shi-ma-ji-can-kao-lian-jie"}},[t._v("#")]),t._v(" 原始碼及參考連結")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("本文範例程式的原始碼授權為 MIT License。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/taichunmin/pug/blob/master/src/line-push-template.pug",target:"_blank",rel:"noopener noreferrer"}},[t._v("推送小工具原始碼"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Rob--W/cors-anywhere",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS Anywhere"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hackmd.io/@taichunmin/B1rUayhjr",target:"_blank",rel:"noopener noreferrer"}},[t._v("當初在台中 chatbot.tw 分享的投影片"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developers.line.biz/en/reference/messaging-api/#flex-message",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE 訊息文件"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developers.line.biz/flex-simulator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex 訊息模擬器"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://lodash.com/docs/4.17.15#template",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("_.template")]),t._v(" 變數語法說明"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);