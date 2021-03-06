---
date: "2019-10-16T00:05:00+08"
tags: [ithelp-ironman]
---
# iT 邦幫忙鐵人賽 DAY 7~15 互動式遊樂場

在 VS Code 的 Welcome 頁面中，有一個 Interactive Playground，可以幫助你認識 VS Code 加速開發的一些功能，我也是這一次為了 IT 鐵人賽，所以決定完整看過 VS Code 的官方文件，才發現原來 VS Code 有提供這個讓你熟悉的遊樂場，但是由於這個頁面都是英文的，所以這幾天我就會把上面的教學稍微翻成中文，以便你可以快速看懂這個遊樂場裡面的內容！

## 開啟互動式遊樂場

從工具列的「說明(H)」中選擇「互動式遊樂場」就可以成功開啟互動式遊樂場囉！

![](https://i.imgur.com/wPgwUGg.png)

或者是你也可以從 Welcome 頁面的右下角會有一個地方可以進到「互動式遊樂場」中。

![](https://i.imgur.com/fgrF37i.png)

點進遊樂場以後，上面第一行寫說 VS Code 已經內建很多功能了，這個遊樂場會介紹其中的一些功能，並且提供給你一個可以直接嘗試看看的地方。

![](https://i.imgur.com/QkaER2h.png)

## 多重游標編輯 Multi-cursor Editing

![](https://i.imgur.com/es2SmVc.png)

這個多重游標編輯主要是指區塊選擇、選擇所有相同的選取內容或是加入下一個相同的選取內容。

這功能可以讓你一次修改文件的多個部份，非常有效的增加你的開發速度，你可以在遊樂場底下的內嵌編輯器中嘗試看看。

1. **區塊選擇**：透過按下以下其中一個快捷鍵 ![](https://i.imgur.com/9Ln1oaN.png) ![](https://i.imgur.com/ItiXO8x.png) ![](https://i.imgur.com/Ca7OJMn.png) ![](https://i.imgur.com/aclO62X.png) 來選取一個區塊的文字。除此之外，你還可以透過 ![](https://i.imgur.com/ZwKLIKy.png) 或 ![](https://i.imgur.com/nkxy2uG.png) 來選擇一個區塊的文字。
2. **新增一個游標**：透過按下 ![](https://i.imgur.com/IuSWzgv.png) 或是 ![](https://i.imgur.com/aGgwd2i.png) 來往上或往下新增一個游標，你也可以用 ![](https://i.imgur.com/p1S7wSk.png) 在你所點選的地方新增一個游標。
3. **把相同文字的都選起來**：你可以選擇其中一個重複的字串（如 `background-color`），然後按下 ![](https://i.imgur.com/zCCtttL.png)，VS Code 會自動找到所有跟你目前選取的文字相同的其他文字，並且全部幫你選起來。在 VS Code 幫你選取所有文字以後，你就可以對這些文字同步進行修改！

在這裡提到的三個功能只是其中的冰山一角，如果你想要知道更多類似的功能，請直接去看「選取項目(S)」選單或是去看 DAY 4 提到的快捷鍵小抄。

![](https://i.imgur.com/NaYA5HQ.png)

> CSS 小技巧：你可能還會注意到上面的範例中，VS Code 還為 CSS 提供了行內的調色板，還有，如果你把滑鼠移動到任何選擇器上面（如：`#p1`），VS Code 還會幫你顯示出這個選擇器會在 HTML 中選到什麼樣子的元素。這些行內的調色板可以成為顏色選取器，讓你可以很簡單的修改色碼，這只是一個針對特定語言的簡單編輯器功能範例。

## 解決 Suggest 功能快捷鍵和中文輸入法衝突

由於 Windows 預設的 `editor.action.triggerSuggest` 和 `toggleSuggestionDetails` 是使用 ![](https://i.imgur.com/hD13BiA.png) 會和中文輸入法衝突，所以在此我改成 ![](https://i.imgur.com/DObpGHI.png)，如果你有自己喜歡的快捷鍵可以換成自己喜歡的。

![](https://i.imgur.com/ql6RqYp.png)

![](https://i.imgur.com/fFDuoNK.png)

## 智能提示 IntelliSence

![](https://i.imgur.com/ObOldmt.png)

對於 JavaScript 和 TypeScript，VS Code 內建了強大的智能提示功能，在底下的範例中，把游標移動到 `${req.}` 的小數點後面，然後按下 ![](https://i.imgur.com/IxWVJRh.png) 來呼叫出智能提示的視窗。你可以看到智能提示的視窗會自動顯示出 express 框架的 Request 物件可用的成員。

![](https://i.imgur.com/nA96Neo.png)

![](https://i.imgur.com/swHRjEk.png)

> 小技巧：雖然 VS Code 預設只內建 JavaScript 和 TypeScript 的智能提示，但是你可以透過安裝擴充功能來支援或強化其他程式語言的智能提示喔！

## 單行動作 Line Action

![](https://i.imgur.com/TD3BVsQ.png)

因為在寫程式的時候，我們真的會很常對某一行內的所有文字一些動作，所以 VS Code 提供了一些很好用的快捷鍵來輔助我們開發。

1. 你可以用 ![](https://i.imgur.com/OABMCYA.png) 複製一整行文字的內容並且貼上至目前游標的下方。
2. 你可以用 ![](https://i.imgur.com/2x0q1E8.png) 和 ![](https://i.imgur.com/fojiro9.png) 將目前游標所在的行往上或往下移動
3. 你可以用 ![](https://i.imgur.com/F6Q7qbx.png) 或是在沒有選取文字的狀態下按下 ![](https://i.imgur.com/Rw8cdqN.png) 刪除整行文字

> 小技巧：還有一個非常常用的功能，就是針對程式碼切換註解，切換單行註解快捷鍵是 ![](https://i.imgur.com/QJHLbmj.png)，切換區塊註解的快捷鍵是 ![](https://i.imgur.com/T1mDe2Y.png)。

## 程式改名重構 Rename Refactoring

![](https://i.imgur.com/oc84eII.png)

如果你想要統一修改一個函式或變數的名字，你可以先把游標移動到你想修改的名字中（如 `Book`）然後按下 ![](https://i.imgur.com/fgCx9t6.png) 來一次修改全部的名字，這個修改名字的動作將會套用到整個專案中的所有檔案。

你也可以透過右鍵選單來使用這個功能。

![](https://i.imgur.com/qhddO4E.png)

> JSDoc 小技巧：VS Code 的智能提示會使用 JSDoc 註解來產生更豐富的建議，當你把滑鼠移動到 `Book` 上面的時候，它能接受的參數型態以及 JSDoc 註解中的文件會顯示在上面。

## 程式碼自動排版 Formatting

![](https://i.imgur.com/0OYfkZh.png)

如果你沒有用程式碼自動排版的工具，你想要保持程式碼的整齊是一件非常麻煩的事情，你可以按下 ![](https://i.imgur.com/BQRy5R2.png) 來針對整個檔案進行排版，或是輸入 ![](https://i.imgur.com/ufY0jbr.png) 來針對你所選取的程式碼進行排版。這兩個程式碼自動排版的動作你也都可以透過右鍵選單進行喔！

![](https://i.imgur.com/tU0eXQr.png)

> 小技巧：除了內建的幾個程式碼排版工具之外，你還可以透過安裝擴充功能來新增其他程式碼排版工具喔！你還可以在設定中調整一些跟自動排版有關的選項喔！例如：`editor.farmatOnSave` 就是設定是否要在存檔時自動排版一次。

## 程式碼摺疊 Code Folding

![](https://i.imgur.com/5dTb84w.png)

在編輯一份大檔案時，你可以把區塊內的程式碼摺疊來增加程式碼的可讀性，把目前游標的程式碼摺疊的快捷鍵是 ![](https://i.imgur.com/ktLWl1i.png)，把目前游標的程式碼取消摺疊的快捷鍵是 ![](https://i.imgur.com/iXVLviO.png)。除了使用快捷鍵以外，你還可以在程式碼左邊行號的地方按下 ![](https://i.imgur.com/6FVuWob.png) 或 ![](https://i.imgur.com/qWR3Tob.png) 的按鈕來摺疊或取消摺疊。如果你想要把整個檔案內可摺疊的程式碼都摺疊的話，快捷鍵是 ![](https://i.imgur.com/rcSRjUR.png)。

> 小技巧：程式碼摺疊是根據縮排，所以在所有的程式語言上面都可以使用，你只要把你的程式碼適當縮排，就可以建立一個可以摺疊的區塊，你還可以指定要摺疊深度多少的程式碼喔！快捷鍵是 ![](https://i.imgur.com/tECGAfF.png) 到 ![](https://i.imgur.com/DZBlbFj.png)。

> 備註：我在測試這個功能的時候，好像有些小 bug 存在，目前不知道其他人的電腦是不是也和我有一樣的 bug。

## 錯誤及警告 Errors and Warnings

![](https://i.imgur.com/gRHx0Rq.png)

當你在編輯程式碼的時候，錯誤和警告都會用波浪底線來突顯出來，在這個範例中，你可以看到有很多語法錯誤，你可以按 ![](https://i.imgur.com/hFPqqDG.png) 來依序跳到每個錯誤，並且還可以查看錯誤的詳細資訊。當你修正這些錯誤以後，這些錯誤和警告的波浪底線就會自動消失，然後在右邊滾動條部份的紅色色塊也會消失。

![](https://i.imgur.com/lVh5LYb.png)

![](https://i.imgur.com/LzIP07F.png)

## 程式碼片段 Snippets

![](https://i.imgur.com/RMKB9K0.png)

程式碼片段就是一小段事先定義好的程式碼，當你需要的時候，就可以打入程式碼片段所定義的關鍵字，就可以在游標所在的地方把你的程式碼插入。透過使用程式碼片段，你可以讓你的開發速度加速非常多。你可以在底下的輸入框中輸入 `try` 然後在智能提示的選單中選擇 `trycatch` 然後按下 ![](https://i.imgur.com/Wwx51QW.png) 鍵。你將會看到你的游標會停在 `error` 的文字上面以便你修改，如果程式碼片段中有多個等待修改的地方，你可以繼續按下 ![](https://i.imgur.com/Wwx51QW.png) 鍵來依序跳到這些待修改的地方。

> 小技巧：你可以透過擴充功能來安裝更多的程式碼片段，通常每一款程式語言或框架都已經有人做出擴充功能並分享到擴充功能市集上了，如果你覺的現有的擴充功能都沒有你需要的程式碼片段，你還可以自己製作你自己的程式碼片段喔！

## Emmet

![](https://i.imgur.com/7MBJSLk.png)

Emmet 讓程式碼片段的功能更上層樓！你可以透過打出很像 CSS 的關鍵字，然後這個關鍵字會被動態解析，然後產生相對應的程式碼片段插入你目前游標所在的位置。你可以將你的游標移動到底下的 `ul>li.item$*5` 後面，然後按下工具列「編輯(E)」內的「Emmet: 展開縮寫」，然後你就會看到你原本打的縮寫變成了 HTML 程式碼囉！

> 小技巧：你可以透過 [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/) 來找到更多 Emmet 可以使用的關鍵字，除了從工具列的「Emmet: 展開縮寫」之外，你還可以用 ![](https://i.imgur.com/Wwx51QW.png) 來展開縮寫喔！更詳細的說明你可以看 [Emmet in VS Code](https://code.visualstudio.com/docs/editor/emmet) 文件。

## JS 型態檢查 JavaScript Type Checking

![](https://i.imgur.com/PWeb0Y2.png)

有時候對你的 JavaScript 程式做型態檢查可以幫你找到你之前沒找到的錯誤，你可以讓 VS Code 對你的 JavaScript 程式碼執行 TypeScript 的型態檢查，你只需要在程式碼第一行加上 `// @ts-check` 就可以了。

> 小技巧：你還可以透過修改工作區或使用者的設定檔，修改 `"javascript.implicitProjectConfig.checkJs": true` 來對你的工作區或是你的使用者啟用型態檢查，這時候如果你有某些檔案需要忽略這個檢查，你就要在程式碼第一行加上 `// @ts-nocheck` 或是 `// @ts-ignore`，你可以在 [JavaScript in VS Code](https://code.visualstudio.com/docs/languages/javascript) 找到更多相關說明。

## 感謝 Thanks!

相信當你看到這裡的時候，你已經接觸了不少 VS Code 中的一些編輯相關的功能，但是別止步於此！VS Code 還有提供額外的[文件](https://code.visualstudio.com/docs)、[介紹影片](https://code.visualstudio.com/docs/getstarted/introvideos) 和 [小提示與小技巧](https://go.microsoft.com/fwlink/?linkid=852118)。這些東西可以幫助你學習如何進一步的使用 VS Code。然後這裡還有一些額外的東西可以讓你嘗試看看：

* 透過快速鍵 ![](https://i.imgur.com/izURn5b.png) 打開「整合式終端機」，並且查看 [整合式終端機文件](https://code.visualstudio.com/docs/editor/integrated-terminal) 來學習它可以做什麼。
* 透過快速鍵 ![](https://i.imgur.com/22WXDEg.png) 打開「原始程式碼管理」，並且配合 [文件](https://code.visualstudio.com/docs/editor/versioncontrol) 來學習如何 stage、commit、change branches、view diffs…等
* 透過快速鍵 ![](https://i.imgur.com/kxAUO1J.png) 打開「管理擴充功能」來查看 VS Code 中數以千計的擴充功能，並且配合 [文件](https://code.visualstudio.com/docs/editor/extension-gallery) 來學習如何查看最熱門的擴充功能，以及如何安裝及停用之類的功能。

互動式遊樂場到此結束啦，祝你開發愉快！

> 備註：我的鐵人賽的文章當然還沒結束，上面的翻譯是為了忠於原文啦！我再來幾天會陸續介紹這個段落裡面提到的東西喔！
