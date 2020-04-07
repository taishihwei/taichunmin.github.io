---
date: "2020-04-07 00:00"
title: 在 LIFF 傳送隱藏資料
description: Postback 可以附帶隱藏資料，但是如何在 LIFF 做到類似的事呢？
meta:
- name: keywords
  content: LINE,LIFF,postback
- property: og:url
  content: https://taichunmin.idv.tw/blog/2020-04-07-line-liff-send-hidden-data.html
- property: og:title
  content: 在 LIFF 傳送隱藏資料
- property: og:description
  content: Postback 可以附帶隱藏資料，但是如何在 LIFF 做到類似的事呢？
- property: og:image
  content: https://i.imgur.com/eypFnfy.png
- property: og:type
  content: article
tags: ["LINE"]
---

# 如何在 LIFF 傳送隱藏資料給機器人

在 LINE 的聊天機器人中，如果你希望使用者按下按鈕後看不到你傳的資料，你可以使用 postback 這個 action 來傳送隱藏資料，同時你也會拿到一個 replyToken 讓你回傳訊息。但是在 LIFF 中該怎麼做到類似的事情呢？

我們直接先用範例程式來試玩看看吧！

[![](https://i.imgur.com/VsOitU7.png)](https://line.me/R/ti/p/%40336zwcug)

> 由於後端採用 Google Cloud Function，為了避免用量過高被收錢，所以有鎖執行上限，如果無回應的話，可以考慮建立自己專用的機器人或是重新傳送訊息試試喔！

## 範例程式

## 運作原理

首先，我們需要準備一張 `2x1` 的透明 png 圖：

```
https://i.imgur.com/WN88L3I.png
```

然後把隱藏資料放在 Image 的網址中：

```
https://i.imgur.com/WN88L3I.png?sender=Brown
```

接著，就可以在 LIFF 中呼叫 `liff.sendMessages()` 來把 Image 送給機器人：

```js
await liff.sendMessages([{
  type: 'image',
  originalContentUrl: 'https://i.imgur.com/WN88L3I.png?a=1&b=2',
  previewImageUrl: 'https://i.imgur.com/WN88L3I.png?a=1&b=2'
}])
```

然後在聊天機器人中就會收到類似這樣的 Event：

```json
{
  "type": "message",
  "replyToken": "bfd16af576304062931ee39249d1c362",
  "source": {
    "userId": "Udeadbeefdeadbeefdeadbeefdeadbeef",
    "type": "user"
  },
  "timestamp": 1586196950201,
  "mode": "active",
  "message": {
    "type": "image",
    "id": "11738027154079",
    "contentProvider": {
      "type": "external",
      "originalContentUrl": "https://i.imgur.com/WN88L3I.png?sender=Brown",
      "previewImageUrl": "https://i.imgur.com/WN88L3I.png?sender=Brown"
    }
  }
}
```

這時候聊天機器人就可以把 `event.message.contentProvider.originalContentUrl` 資料解析出來處理，並且還有 replyToken 可以使用喔！

## 原始碼

* 後端: https://gist.github.com/taichunmin/684839958fed6ff9b4f368c3d23a385b
* LIFF 網頁: https://taichunmin.idv.tw/pug/line-liff-20200406.html
