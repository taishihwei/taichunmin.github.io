(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{467:function(s,a,e){"use strict";e.r(a);var t=e(8),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql-5.7-your-password-has-expired"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5.7-your-password-has-expired"}},[s._v("#")]),s._v(" MySQL 5.7+ Your password has expired")]),s._v(" "),e("h2",{attrs:{id:"can-kao-lian-jie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-kao-lian-jie"}},[s._v("#")]),s._v(" 參考連結")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://cameong.hatenablog.com/entry/2016/03/03/172003",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://cameong.hatenablog.com/entry/2016/03/03/172003"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://yoku0825.blogspot.tw/2015/06/mysql-574defaultpasswordlifetime.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://yoku0825.blogspot.tw/2015/06/mysql-574defaultpasswordlifetime.html"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/password-expiration-policy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/refman/5.7/en/password-expiration-policy.html"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"si-fu-qi-gua-liao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#si-fu-qi-gua-liao"}},[s._v("#")]),s._v(" 伺服器掛了")]),s._v(" "),e("p",[s._v("今天一早收到了伺服器掛掉的資訊"),e("br"),s._v("\n一查發現了沒見過的錯誤訊息")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("MySQLi connect failed: Your password has expired. To log in you must change it using a client that supports expired passwords.\n")])])]),e("p",[s._v("看到這個錯誤訊息以後，馬上使用 HeidiSQL 登入，居然提示我要修改密碼！火速改好密碼以後，開始檢查原因所在，發現這個密碼過期的功能，是 MySQL 5.7 的新功能！")]),s._v(" "),e("h2",{attrs:{id:"password-expiration-policy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#password-expiration-policy"}},[s._v("#")]),s._v(" Password Expiration Policy")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/password-expiration-policy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/refman/5.7/en/password-expiration-policy.html"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("在此節錄一些重點")]),s._v(" "),e("ul",[e("li",[s._v("可以幫帳號設定過期或不過期，以及確認目前期限的指令")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jeffrey'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" PASSWORD EXPIRE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'script'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" PASSWORD EXPIRE NEVER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("User")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Host"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password_last_changed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password_lifetime "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("ul",[e("li",[e("p",[s._v("多了一個 global variable "),e("code",[s._v("default_password_lifetime")])]),s._v(" "),e("ul",[e("li",[s._v("文件上寫說預設是 0 (無限期)")]),s._v(" "),e("li",[s._v("但是在 "),e("code",[s._v("5.7.4")]),s._v(" 到 "),e("code",[s._v("5.7.10")]),s._v(" 是預設 360")])])]),s._v(" "),e("li",[e("p",[s._v("在 aws 上的 rds 我是用 "),e("code",[s._v("5.7.11")]),s._v(" ，但是 "),e("code",[s._v("default_password_lifetime")]),s._v(" 還是 360 (抓到元兇)")])])]),s._v(" "),e("h2",{attrs:{id:"cha-xun-aws-de-rds-she-ding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cha-xun-aws-de-rds-she-ding"}},[s._v("#")]),s._v(" 查詢 aws 的 rds 設定")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@default_password_lifetime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> select @@default_password_lifetime;\n+-----------------------------+\n| @@default_password_lifetime |\n+-----------------------------+\n|                         360 |\n+-----------------------------+\n1 row in set (0.01 sec)\n")])])]),e("h2",{attrs:{id:"she-ding-mysql-de-default_password_lifetime-aws-bu-shi-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#she-ding-mysql-de-default_password_lifetime-aws-bu-shi-yong"}},[s._v("#")]),s._v(" 設定 mysql 的 default_password_lifetime (AWS 不適用)")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("my.cnf")])])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[mysqld]\ndefault_password_lifetime=0\n")])])]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" default_password_lifetime "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h2",{attrs:{id:"she-ding-aws-rds-de-default_password_lifetime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#she-ding-aws-rds-de-default_password_lifetime"}},[s._v("#")]),s._v(" 設定 aws rds 的 default_password_lifetime")]),s._v(" "),e("p",[s._v("好死不死 aws 的 rds 不提供 "),e("code",[s._v("SET GLOBAL")]),s._v(" 的 SUPER 權限，所以必須用其他的方法來設定。")]),s._v(" "),e("ol",[e("li",[s._v("先進到 aws 的 rds 管理頁面")]),s._v(" "),e("li",[s._v("切到 Parameter Groups")]),s._v(" "),e("li",[s._v("如果沒有自訂 Parameter Groups 的就新建一個 (Create Parameter Group)")]),s._v(" "),e("li",[s._v("在 Parameter Group 內的 Parameters 分頁篩選出 "),e("code",[s._v("default_password_lifetime")])]),s._v(" "),e("li",[s._v("將自己的 Parameter Group 與預設的 "),e("code",[s._v("default.mysql5.7")]),s._v(" 進行比較 (選取兩個然後點 Compare Parameters) (我又順手改了一些 "),e("code",[s._v("charset")]),s._v(" 和 "),e("code",[s._v("innodb_purge_threads=4")]),s._v(" 設定)\n"),e("img",{attrs:{src:"http://i.imgur.com/coKeBDR.png",alt:""}})]),s._v(" "),e("li",[s._v("確認以後回到 instance")]),s._v(" "),e("li",[s._v("對 instance 點選 "),e("code",[s._v("instance Actions")]),s._v(" > "),e("code",[s._v("Modify")])]),s._v(" "),e("li",[s._v("DB Parameter Group 設定為你新建立的 Parameter Group\n"),e("img",{attrs:{src:"http://i.imgur.com/1D4kbvv.png",alt:""}})]),s._v(" "),e("li",[s._v("重啟 instance")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> select @@default_password_lifetime;\n+-----------------------------+\n| @@default_password_lifetime |\n+-----------------------------+\n|                           0 |\n+-----------------------------+\n1 row in set (0.00 sec)\n")])])]),e("h2",{attrs:{id:"she-ding-te-ding-zhang-hao-wei-bu-guo-qi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#she-ding-te-ding-zhang-hao-wei-bu-guo-qi"}},[s._v("#")]),s._v(" 設定特定帳號為不過期")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'script'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" PASSWORD EXPIRE NEVER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);