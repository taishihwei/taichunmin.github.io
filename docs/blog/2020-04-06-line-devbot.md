---
tags: LINE
---

# 輔助開發 LINE Flex 訊息的工具

在開發 Message API 訊息的時候，透過官方 [Flex Message Simulator](https://developers.line.biz/flex-simulator/) 看到的結果，不一定跟手機上面顯示的相同，如果你想要在手機上面看到顯示結果，你可以考慮使用本文要分享的小技巧喔！

本文會教你建立一個聊天機器人，只要你使用桌面版的 LINE 對它送出 JSON 字串，它就會嘗試使用 replyMessage 把資料送出，你就可以在手機版 iOS 和 Android 的 LINE 上面看到顯示結果！

廢話不多說，馬上試用看看吧！

![](https://i.imgur.com/gLaoyur.png)

> 由於後端採用 Google Cloud Function，為了避免用量過高被收錢，所以有鎖執行上限，如果無回應直接重新傳送訊息即可。

## 直接把 message 回傳

加入聊天機器人好友後，請傳送以下的訊息：

```json
{
  "type": "text",
  "text": "Hello world"
}
```

然後機器人應該就會直接回應一個純文字訊息：

![](https://i.imgur.com/UhMp3bW.png)

同時你也可以在手機中看到結果：

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/pCQy2Jd.jpg) | ![](https://i.imgur.com/m0mf4mR.png) |

接下來我們來測試直接從 [Flex Message Simulator](https://developers.line.biz/flex-simulator/) 複製下來的輸出：

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/qggoRYv.jpg) | ![](https://i.imgur.com/1YK41xj.png) |

## 顯示收到的 Event

如果你對它傳送一些非 JSON 的訊息，他就會原封不動的把內容回傳喔！

![](https://i.imgur.com/uSuzESF.png)

## 原始碼

<https://github.com/taichunmin/gcf-line-devbot>

為了要節省後端伺服器的費用，所以這個聊天機器人是直接放在 Google Cloud Function 上面的，如果大家想要自己依樣畫葫蘆建立一個自己使用的機器人，你可以把這個原始碼的 `index.js` 和 `package.json` 放到 Cloud Function 上面就行囉！

| 1 | 2 |
| :-----: | :-: |
| ![](https://i.imgur.com/YO1cXYP.jpg) | ![](https://i.imgur.com/HXTyozq.png) |

把程式放到 Cloud Function 上面以後，他就會給你一個 HTTPS 的網址，你就要去 LINE Developer Console 裡面把這個網址設定到 Webhook：

![](https://i.imgur.com/jvDanyQ.png)

![](https://i.imgur.com/1Rld5iD.png)

## 後記

這是受到卡米哥啟發而寫出來的工具，至於為什麼需要特別查看每個平台的顯示結果呢？因為有時候你會發現顯示出來的內容會有差異：

![](https://i.imgur.com/081PCxy.png)

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/IL4NbGe.jpg) | ![](https://i.imgur.com/t9Aeh2n.png) |

有發現哪裡不太對勁嗎？大家來找碴吧！
