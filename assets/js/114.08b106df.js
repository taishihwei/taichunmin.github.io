(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{490:function(a,t,e){"use strict";e.r(t);var i=e(8),r=Object(i.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"ru-he-zhui-zong-shi-yong-zhe-cong-na-li-jia-ru-line-guan-fang-zhang-hao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-zhui-zong-shi-yong-zhe-cong-na-li-jia-ru-line-guan-fang-zhang-hao"}},[a._v("#")]),a._v(" 如何追蹤使用者從哪裡加入 LINE 官方帳號")]),a._v(" "),e("p",[a._v("這是一篇在臉書社團看到的問題 "),e("a",{attrs:{href:"https://www.facebook.com/groups/chatbot.tw/permalink/1545595372285499/",target:"_blank",rel:"noopener noreferrer"}},[a._v("(提問網址1)"),e("OutboundLink")],1),a._v(" "),e("a",{attrs:{href:"https://www.facebook.com/groups/linebot/permalink/2481273445536560/",target:"_blank",rel:"noopener noreferrer"}},[a._v("(提問網址2)"),e("OutboundLink")],1),a._v("，追蹤使用者從哪個管道加入的需求，可以很容易的用 LIFF v2 來達成！")]),a._v(" "),e("p",[a._v("在這裡我直接用我前陣子辦過的活動來舉例，因為公司的產品想要衝好友數，所以就決定辦一個活動時間內邀請好友就送獎品的活動，雖然活動時間已經結束，但是大家還是可以點選這個連結來試玩：")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://liff.line.me/1653958047-59ZK2VNQ/referral?inviter=U118213b77e8b7d7ae0e38c454bbd6dc2",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://liff.line.me/1653958047-59ZK2VNQ/referral?inviter=U118213b77e8b7d7ae0e38c454bbd6dc2"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"fan-li-ji-hua-mian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fan-li-ji-hua-mian"}},[a._v("#")]),a._v(" 範例及畫面")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("畫面")]),a._v(" "),e("th",[a._v("說明")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("img",{attrs:{src:"https://i.imgur.com/WAV0gAB.png",alt:""}})]),a._v(" "),e("td",[a._v("在打開上面的那個邀請連結後，如果使用者沒登入，會先要求使用者登入")])]),a._v(" "),e("tr",[e("td",[e("img",{attrs:{src:"https://i.imgur.com/uQinqAK.png",alt:""}})]),a._v(" "),e("td",[a._v("登入以後就會看到 LIFF 的授權頁面。")])]),a._v(" "),e("tr",[e("td",[e("img",{attrs:{src:"https://i.imgur.com/G2etpab.png",alt:""}})]),a._v(" "),e("td",[a._v("這時候往下滑，就能看到在授權頁面也會幫你加入 LINE 官方帳號，這個就是 LINE v2 的專屬新功能 "),e("a",{attrs:{href:"https://developers.line.biz/en/docs/line-login/link-a-bot/#displaying-the-option-to-add-your-line-official-account-as-a-friend",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bot link feature"),e("OutboundLink")],1)])]),a._v(" "),e("tr",[e("td",[e("img",{attrs:{src:"https://i.imgur.com/b01Fla8.png",alt:""}})]),a._v(" "),e("td",[a._v("這時候就會開啟 LIFF 畫面，通常沒意外的話，使用者也同時加入 LINE 官方帳號了。在此處我多放了一個連結，方便使用者按下去後可以直接打開 LINE 官方帳號。")])])])]),a._v(" "),e("h2",{attrs:{id:"yun-zuo-yuan-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yun-zuo-yuan-li"}},[a._v("#")]),a._v(" 運作原理")]),a._v(" "),e("p",[a._v("為了實現好友邀請的需求，所以我需要把邀請人放到 LIFF 的參數之中：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("?inviter=U118213b77e8b7d7ae0e38c454bbd6dc2\n")])])]),e("p",[a._v("當使用者打開邀請連結以後，LIFF 會先把網址導向 LIFF 所設定的 Endpoint URL：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://example.com/liff/full?liff.state=%2Freferral%3Finviter%3DU118213b77e8b7d7ae0e38c454bbd6dc2\n")])])]),e("p",[a._v("我為了避免 LIFF v2 的 js SDK 跳轉第二次，所以在後端直接解析 "),e("code",[a._v("liff.state")]),a._v(" 中的資料，並且將 "),e("code",[a._v("liff.state")]),a._v(" 的參數移除，最後讓後端改傳 "),e("code",[a._v("302 Found")]),a._v(" 並且透過 Header 的 "),e("code",[a._v("Location")]),a._v(" 給予新的網址：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Location: https://example.com/liff/full?lp=%2Freferral&inviter=U118213b77e8b7d7ae0e38c454bbd6dc2\n")])])]),e("p",[a._v("最後，再從 LIFF 中呼叫 "),e("code",[a._v("liff.getProfile()")]),a._v(" 取得使用者的 userId，在透過 AJAX 傳送 inviter 和 userId 給予後端，這樣就成功記錄是誰邀請這個使用者的囉！")]),a._v(" "),e("h2",{attrs:{id:"shi-zuo-guo-cheng-xu-yao-zhu-yi-de-di-fang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shi-zuo-guo-cheng-xu-yao-zhu-yi-de-di-fang"}},[a._v("#")]),a._v(" 實作過程需要注意的地方")]),a._v(" "),e("h3",{attrs:{id:"ji-de-jiang-line-login-gai-cheng-publish"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-de-jiang-line-login-gai-cheng-publish"}},[a._v("#")]),a._v(" 記得將 LINE Login 改成 Publish")]),a._v(" "),e("p",[a._v("剛建立完 LINE Login 時，預設會是開發中的狀態，開發時因為自己是開發者所以都能正常執行，每次都是要給別人用的時候才想到忘記開成 Published。")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("1")]),a._v(" "),e("th",[a._v("2")]),a._v(" "),e("th",[a._v("3")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("img",{attrs:{src:"https://i.imgur.com/nRWSRHL.jpg",alt:""}})]),a._v(" "),e("td",[e("img",{attrs:{src:"https://i.imgur.com/mKgB0cd.jpg",alt:""}})]),a._v(" "),e("td",[e("img",{attrs:{src:"https://i.imgur.com/4MM8drZ.jpg",alt:""}})])])])]),a._v(" "),e("h3",{attrs:{id:"xiao-xin-liff-v2-liff.state-hui-diao-can-shu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xiao-xin-liff-v2-liff.state-hui-diao-can-shu"}},[a._v("#")]),a._v(" 小心 LIFF v2 "),e("code",[a._v("liff.state")]),a._v(" 會掉參數")]),a._v(" "),e("p",[a._v("上線前務必親自測試，到底什麼參數能夠成功帶過去，特別注意 iOS 和 Android 平台最好都測試過。")]),a._v(" "),e("h3",{attrs:{id:"wu-bi-shi-yong-tong-yi-ge-provider-lai-jian-li-line-login-ji-guan-fang-zhang-hao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wu-bi-shi-yong-tong-yi-ge-provider-lai-jian-li-line-login-ji-guan-fang-zhang-hao"}},[a._v("#")]),a._v(" 務必使用同一個 Provider 來建立 LINE Login 及官方帳號")]),a._v(" "),e("p",[a._v("不然在 "),e("code",[a._v("liff.getProfile()")]),a._v(" 會抓到不同的 userId 喔！")]),a._v(" "),e("h3",{attrs:{id:"normal-v.s.-aggressive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#normal-v.s.-aggressive"}},[a._v("#")]),a._v(" Normal v.s. Aggressive")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/cPEk26g.png",alt:""}})]),a._v(" "),e("p",[a._v("Bot link feature 提供了兩種方式可以提示使用者來加入 LINE 官方帳號，這個可以自行決定要用哪一個喔！")]),a._v(" "),e("h3",{attrs:{id:"shi-yong-zhe-ke-neng-hui-mei-jia-ru-line-guan-fang-zhang-hao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-zhe-ke-neng-hui-mei-jia-ru-line-guan-fang-zhang-hao"}},[a._v("#")]),a._v(" 使用者可能會沒加入 LINE 官方帳號")]),a._v(" "),e("p",[a._v("Bot link feature 的授權頁面中，是允許使用者不加入的，所以如果需要要求使用者加入 LINE 官方帳號的話，需要後端額外判斷喔！")]),a._v(" "),e("h2",{attrs:{id:"yuan-shi-ma-ji-can-kao-lian-jie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yuan-shi-ma-ji-can-kao-lian-jie"}},[a._v("#")]),a._v(" 原始碼及參考連結")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("本文範例程式的原始碼授權為 MIT License。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);