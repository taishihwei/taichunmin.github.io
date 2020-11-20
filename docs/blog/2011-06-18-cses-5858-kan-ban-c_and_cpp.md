---
title: cses (5858)、看板:C_and_CPP
date: 2011-06-18T11:29:00+08
tags:
  - CMD程式
  - c++
  - cses
---
# cses (5858)、看板:C_and_CPP

 作者  cses (5858)                                            看板  C\_and\_CPP  
 標題  \[問題\] 關於 xa xb 的猜數字遊戲AI  
 時間  Fri Jun 17 23:49:07 2011  
───────────────────────────────────────  
  
其實是最近老師開了這個題目給我們  
  
要我們寫出一個簡單的AI來讓電腦跟我們玩 幾A幾B的猜數字遊戲  
  
就是...我們自訂一組數字，而電腦就是隨機產生一組亂數來問我們幾A幾B  
  
我們回答他幾A幾B ， 一直到猜出數字 4A 0B 這樣  
  
之前爬文有看到隨機產生1~9亂數這部分有看到一種方法是"增加某數字出現的權重"  
  
想問問這種語法要怎麼寫呢 ?  
  
由於本人是C的無敵新手，只看著課本找到srand()這個亂數函式  
  
想問  那種可以控制亂數出現比例的方法 要怎麼寫...  
  
又或著有更好的方法 可以把幾A幾B的AI寫出來呢 :)?  
\--  
※ 發信站: 批踢踢實業坊(ptt.cc)  
◆ From: 163.17.22.253  
推 PRAM:老師出作業就是你要去思考，你不應該來這裡問                 06/18 00:20  
→ firejox:先完成基礎 再做改良                                     06/18 00:24  
→ cses:其實我也只是想問問，那種可以加權的數字產生法而已           06/18 00:50

- - -

程式碼如下，請務必看懂程式碼，看不懂可留言發問。

```cpp
#include <iostream>
using namespace std;
#define SIZE 45
int main(void)
{
  int va[SIZE]={1,
                2,2,
                3,3,3,
                4,4,4,4,
                5,5,5,5,5,
                6,6,6,6,6,6,
                7,7,7,7,7,7,7,
                8,8,8,8,8,8,8,8,
                9,9,9,9,9,9,9,9,9};
  //簡單的增加權重方法 陣列對應 
  while(cin.get())
    cout<<va[rand()%SIZE]<<endl;
  system("pause");
}
```

```cpp
#include<iostream>
#include<fstream>
using namespace std;
string itos(int ia,int ib=0)//整數 轉 string
{
  string sb;
  while(ia>0)
  {
    sb+=(char)(ia%10+'0');
    ia/=10;
  }
  for(int i=0;i<sb.size()/2;i++)sb[i]^=sb[sb.size()-1-i]^=sb[i]^=sb[sb.size()-1-i];
  if(sb.size()==0)sb="0";
  for(int i=sb.size();i<ib;i++)sb="0"+sb;
  return sb;
}
int check(int ia,int ib)
{
  string sa=itos(ia,4),sb=itos(ib,4);
  int result=0;
  for(int i=0;i<4;i++)
    for(int j=0;j<4;j++)
      if(sa[i]==sb[j])
        if(i==j)result+=10;
        else result+=1;
  return result;
}
int main()
{
    string sa;
    int round=0;
    while(true)
    {
      round++;
      int va[5040];
      int icount=0,guess,result;
      for(int i=0;i<10;i++)
        for(int j=0;j<10;j++)
          for(int k=0;k<10 && j!=i;k++)
            for(int m=0;m<10 && k!=i && k!=j;m++)
              if(m!=i && m!=j && m!=k)
                va[icount++]=i*1000+j*100+k*10+m;
      while(icount>0)
      {
        guess=va[0];
        if(icount==1)break;
        cout<<itos(guess,4)<<endl;
        cin>>result;
        if(result==40 || result<0)break;
        va[0]=va[icount-1];
        icount--;
        for(int i=0;i<icount;i++)
          if(check(guess,va[i])!=result)
          {
            va[i]=va[icount-1];
            i--;
            icount--;
          }
      }
      if(result<0)break; //無解 結束 
      cout<<itos(guess,4)<<endl;
    }
    system("pause");
}
```