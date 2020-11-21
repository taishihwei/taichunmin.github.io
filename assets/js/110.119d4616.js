(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{486:function(e,t,r){"use strict";r.r(t);var n=r(8),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"it-bang-bang-mang-tie-ren-sai-day-31-wan-sai-xin-de"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#it-bang-bang-mang-tie-ren-sai-day-31-wan-sai-xin-de"}},[e._v("#")]),e._v(" iT 邦幫忙鐵人賽 Day 31 完賽心得")]),e._v(" "),r("p",[e._v("今年鐵人賽成功完賽，完賽以後就是不免俗的要來講點這次參賽的心得啦！")]),e._v(" "),r("p",[e._v("筆者目前在台中市微程式資訊有限公司上班，由於公司提供了一個免費給資訊社群借場地辦活動的場地「夢森林」（想辦活動請跟 "),r("a",{attrs:{href:"https://www.facebook.com/mpdreamforest",target:"_blank",rel:"noopener noreferrer"}},[e._v("夢森林粉絲專頁小編"),r("OutboundLink")],1),e._v(" 聯絡），所以我有很多可以參加台中社群的活動機會，筆者也因此加入"),r("a",{attrs:{href:"https://www.facebook.com/groups/Agile.Taichung/",target:"_blank",rel:"noopener noreferrer"}},[e._v("台中敏捷社群"),r("OutboundLink")],1),e._v("的志工，在今年的時候，偶然得知好友"),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20103676/profile",target:"_blank",rel:"noopener noreferrer"}},[e._v("若虛"),r("OutboundLink")],1),e._v("要被邀請"),r("a",{attrs:{href:"https://agile-taichung.kktix.cc/events/scrum-team",target:"_blank",rel:"noopener noreferrer"}},[e._v("來台中敏捷分享"),r("OutboundLink")],1),e._v("，才知道原來他在去年的鐵人賽中得到冠軍。")]),e._v(" "),r("p",[e._v("在今年的鐵人賽開始前，因為公司的專案寫了幾個"),r("a",{attrs:{href:"https://line.me/R/ti/p/@raq6533f",target:"_blank",rel:"noopener noreferrer"}},[e._v("聊天機器人"),r("OutboundLink")],1),e._v("，因此認識了 "),r("a",{attrs:{href:"https://www.facebook.com/groups/chatbot.tw/",target:"_blank",rel:"noopener noreferrer"}},[e._v("chatbot.tw 社群"),r("OutboundLink")],1),e._v("的幾個熱血主揪 Fly、Ninja、佳新，他們也在找團隊一起參加，於是我就在猶豫要不要參賽，第一個原因是一直在思考到底有什麼主題可以讓我寫夠 30 天的…後來就想到或許可以來寫個 VS Code，因為這種東西還太新，相信也沒多少中文資源，雖然說不用學也能簡單使用，但如果想學習它就只能從英文資源下去學習，順便讓自己可以來完整學一次。")]),e._v(" "),r("p",[e._v("除了找主題的原因之外，還有另外一個原因就是我 9/25 到 9/28 要去韓國員工旅遊，所以能不能每天準時發文真的是非常的有挑戰性阿，我在跟若虛聊了我這個擔憂以後，他就把"),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10191096",target:"_blank",rel:"noopener noreferrer"}},[e._v("去年有人寫爬蟲自動發文的文章"),r("OutboundLink")],1),e._v("找出來給我，剛好我自己對寫爬蟲也算是略有所得，所以就決定靠機器人自動發文啦！")]),e._v(" "),r("p",[e._v("由於我開賽前要去 "),r("a",{attrs:{href:"https://coscup.org/2019/programs/df839599-e969-498b-a050-002241988ffa",target:"_blank",rel:"noopener noreferrer"}},[e._v("COSCUP 2019 上台演講"),r("OutboundLink")],1),e._v("，所以我在 8/27 才開始準備存稿，為了要讓存稿更多，所以我就決定要晚點開賽。在準備第 2 天文章的時候，我原本是在 HACKMD 上面先寫的，然後貼到鐵人賽的網站後，發現一個很嚴重的問題，就是鐵人賽的 markdown 語法居然封鎖 HTML，所以常用來表示按鈕的 "),r("code",[e._v("<kbd>")]),e._v(" 元素就不能用了！這其實讓我有點傻眼，因為按鍵用程式碼的 "),r("code",[e._v("<code>")]),e._v(" 區塊表示的話感覺就是不太對，後來我就決定全部截圖！所以這幾天的文章中，我都把快捷鍵全部透過截圖來顯示，並且還貼心的把快捷鍵所支援的平台標在前面，雖然我沒有把每個系統的快捷鍵都查出來 XD")]),e._v(" "),r("p",[e._v("為了要解決出國的問題，所以我就決定來寫自動發文的爬蟲，在看過前人的研究以後，我決定用 Google Cloud Function 來達成這個程式，因為一天只執行一次，開一台伺服器實在是太奢侈了。一開始在考慮寫好的文章要先存在何處，原本是想用 Google Cloud Storage，但是後來想到了一個更好用的做法，就是 Google Spreadsheets 可以直接用 csv 格式發佈資料到網路上，所以我的爬蟲就只需要抓 csv 下來就完成了，而且在 Google Spreadsheets 上面編輯超級方便！最後，就是要搭配 Google Cloud Scheduler 和 Google Cloud Pub/Sub 來達成每天自動觸發一次的功能了。把爬蟲寫完以後，我就把程式碼"),r("a",{attrs:{href:"https://github.com/taichunmin/gcf-ithelp-ironman",target:"_blank",rel:"noopener noreferrer"}},[e._v("傳到了 GitHub 上"),r("OutboundLink")],1),e._v("並分享給幾個我知道有參賽的朋友，希望這程式有幫到他們。當然這 30 天下來，自動發文機器人還是有出現一些意外，下圖中紅色的就是執行失敗的，這次我是每天人工檢查有沒有發文成功，因為沒有開發失敗通知的功能 XD")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/o5beAcQ.png",alt:""}})]),e._v(" "),r("p",[e._v("最後，還是很開心能夠完賽，雖然寫完以後還是覺得有點心虛，因為我連官方 VS Code 的教學文章都沒翻譯完，只有涵蓋到其中的一部分主題而已，或許以後還是會繼續發在"),r("a",{attrs:{href:"https://taichunmin.idv.tw",target:"_blank",rel:"noopener noreferrer"}},[e._v("筆者自己的部落格"),r("OutboundLink")],1),e._v("，但是肯定會先休息一陣子，為了參加鐵人賽，我已經有一個月沒有玩 steam 買的遊戲啦！歡迎大家"),r("a",{attrs:{href:"https://steamcommunity.com/id/taichunmin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("加我 Steam 好友"),r("OutboundLink")],1),e._v(" XD")])])}),[],!1,null,null,null);t.default=o.exports}}]);