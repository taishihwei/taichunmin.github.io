(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{406:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"php-curl-shi-yong-https-yu-dao-ssl-certificate-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-curl-shi-yong-https-yu-dao-ssl-certificate-problem"}},[t._v("#")]),t._v(" PHP curl 使用 https 遇到 SSL certificate problem")]),t._v(" "),a("p",[t._v("問題：")]),t._v(" "),a("p",[t._v("在 PHP 的 curl 中抓取 https 的時候，遇到底下的錯誤訊息：")]),t._v(" "),a("p",[t._v("SSL certificate problem, verify that the CA cert is OK.")]),t._v(" "),a("p",[t._v("解法：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_SSL_VERIFYHOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_SSL_VERIFYPEER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("p",[t._v("這可用來跳過驗證網站。")]),t._v(" "),a("p",[t._v("最近在寫 gCalMsg，一直遇到 curl 抓取不到 https 網頁的問題，")]),t._v(" "),a("p",[t._v("使用了 "),a("code",[t._v("curl_error")]),t._v(" 之後 就輸出了上面的訊息")]),t._v(" "),a("p",[t._v("Google 一下就有答案了XD")]),t._v(" "),a("p",[t._v("資料來源：")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.bsdlover.cn/html/43/n-5943.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.bsdlover.cn/html/43/n-5943.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.php.net/manual/en/function.curl-setopt.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.php.net/manual/en/function.curl-setopt.php"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);