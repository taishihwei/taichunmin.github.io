---
title: 糟糕！越混越回去？
date: 2009-10-26T22:12:00+08
tags:
  - Diary
---
# 糟糕！越混越回去？

今天晚上又依照慣例跑去程式設計的助教時間  
裡面除了2個常客之外  
又多了一個佐任  
都是被我拉來解zerojudge的人 :-）  
  
話說  
我今天「又」被考倒了...  
我以前好像常常在慫恿電研的學弟  
要把教學長考倒  
教學長好像常常會被我偷射暗箭xd  
他們有沒有中鏢我是不知道啦  
可是我知道自己是中鏢了...  
再次的被問倒  
而且...都是同一個人的問題...  
  
他今天在解zerojudge  
可是...  
一題a032就是怎麼解也解不過  
到第14行就錯了  
原因是溢位  
程式碼：  

```cpp
#include<stdio.h>

int main()
{
 long long ib;
 int ia,fia;
 //printf("%d\n",sizeof(ib));
 while(scanf("%d", &ia)!=EOF)
 {
  if(ia<2) printf("1\n");
  else
  {
   ib=1;
   for(fia=2; fia<=ia; fia++) ib*=fia;
   printf("%lld\n", ib);
  }
 }
}
```

  
這個問題我被難倒了＝ ＝  
因為換了 long long 型態  
還是一樣會錯誤  
還是一樣溢位  
最奇怪的就是  
換成長整數型態之後  
好像所有的判斷式都失靈了  
然後  
程式就開始執行無窮迴圈  
因為迴圈的計數器是長整數型態...  
把程式改成如上的程式碼之後  
還是到了13就會溢位了  
明明是以c++的編譯器來編譯的阿  
  
我不知道怎麼解決的情況下  
就來病急亂投醫吧  
跑去問助教學長  
可是和我想的一樣  
他也解決不了  
看到他很認真的去網路搜尋資料  
真的是很想笑  
奇摩知識加哪有可能會有什麼太過深入的資料阿  
我才不信勒  
會去問知識加的人  
超過半數都是會了趕作業去問的吧  
我偷偷地慫恿助教學長去問拉拉中  
可是...學長不想去  
果然是老鳥阿  
深深地知道拉拉中的厲害  
我可是試過一次之後我就不想去試了  
一個只有10幾張頁面的投影片  
他可以講三個小時！  
他的嘴泡功已經練到究級了（噓～  
那這個奇怪的程式碼勒？？  
只好帶回來好好研究啦  
可是我相信  
我應該還是研究不出啥結果吧  
  
至於剛剛我為什麼會講說我又再次被問倒了勒？  
因為上次餅乾在他的電腦  
安裝了Dev-C++之後  
就msn來問我說為什麼他打的程式碼都不能執行  
然後我執行下去明明都可以....  
當時我有點被耍的感覺  
我就叫他截Dev-C++編譯錯誤的圖給我看  
沒想到還真的不能編譯  
可是他的錯誤訊息很其怪  
居然是中文的錯誤訊息...  
然後是我沒看過的  
想當然我也解決不了啦  
只好叫他重安裝  
可是問題依然存在  
我就直接放棄了...  
聽說後來是助教學長解決的  
好像是加了一個Windows的環境變數  
就成功解決了  
  
好啦  
這個程式碼  
傑民如果有看到的話  
幫我想想看吧  
為什麼會溢位？？