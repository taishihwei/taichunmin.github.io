---
date: "2019-10-16T00:04:00+08"
tags: [ithelp-ironman]
---
# iT 邦幫忙鐵人賽 DAY 6 喜好設定

今天我打算來介紹一下我自己喜歡的喜好設定，基本上喜好設定這種東西因人而異，我今天介紹的東西，如果你覺得喜歡就可以直接設定到你的 VS Code 中，如果不喜歡的話就直接忽略吧！

## 認識兩種設定檔

要打開編輯器的設定畫面，有好幾種方法：你可以點選左下角的齒輪，然後點選「設定」；或是你可以直接按快捷鍵 ![](https://i.imgur.com/2sQY7FN.png)。

![](https://i.imgur.com/BMVga7L.png)

進到設定頁面以後，你應該會看到跟下圖很像的畫面：

![](https://i.imgur.com/LvC6h8i.png)

設定檔有分兩種，一個是使用者設定，另一個是工作區設定。工作區設定的優先權會比較高，換句話說，就是如果工作區設定指定字體大小是 14，那不管使用者設定的字體大小是多少都會被忽略。但是工作區設定只有在相對應的工作區被打開的時候才會生效。

通常我們都應該在使用者設定上面設定你的喜好設定，除非極為特殊的狀況才會在工作區設定上設定。如果你現在正在使用者設定，那麼分頁的底線會是白色的如下：

![](https://i.imgur.com/LEuYAFq.png)

## 我的私房設定

以下是我喜歡的私房設定，我也會稍微解釋一下這個設定是在做啥的。

* `"editor.wordWrap": "on",`
    這個設定就是幫你把超出螢幕的程式碼自動換行，因為我非常不喜歡需要左右移動才能把太長的程式碼看完，因為滑鼠通常不會有左右滾輪，在鍵盤上想要左右移動也很困難，所以才使用這個設定。
* `"editor.tabSize": 2,`
    自從開始寫 html 以後，tab 的長度都喜歡用 2 格，不然很容易因為太多層縮排而超出螢幕。
* `"terminal.external.windowsExec": "C:\\Program Files\\Git\\git-bash.exe",`
* `"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",`
* `"terminal.integrated.shellArgs.windows": ["-l"],`
    這三個設定檔是 Windows 專屬的設定，而且通常是三個一起設定，因為我在 Windows 中還是非常不習慣使用 `cmd.exe` 和 `PowerShell`，而且我 Windows 電腦中通常都會裝 [Git For Windows][git-windows]，所以我就直接使用 [Git For Windows][git-windows] 提供的 Git Bash。
* ```"editor.wordSeparators": "`~!@#$%^&*()=+[{]}\\|;:'\",.<>/?",```
   因為我很常在 VS Code 內開發 PHP 和 HTML，所以我把清單中的 PHP 變數起始符號 `$` 和 HTML 中 class 內的減號 `-` 兩個符號刪掉，讓我在左鍵連點時，可以快速把整個單字選起來。
* `"files.autoSave": "onFocusChange",`
    我現在在開發程式碼基本上都有用 git 來做版本管理，所以我就把編輯器設定成只要檔案失去焦點就會自動儲存，這樣就能避免電腦斷電沒存檔之類的悲劇了，而且因為有 git，所以如果想還原回沒存檔之前也沒有問題。

[git-windows]: https://gitforwindows.org/ "Git For Windows"
