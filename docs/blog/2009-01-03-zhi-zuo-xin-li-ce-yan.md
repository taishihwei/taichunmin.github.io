---
title: 製做心理測驗
date: 2009-01-03T15:53:00+08
tags:
  - CMD程式
---
# 製做心理測驗

急))想知道如何用C語言 製做心理測驗!!! 煉乳....低調是吧?! XDD  
![回上一層(熱鍵:b)](http://f6.wretch.yimg.com/lovelyvp/1/1861113247.jpg)  
  
  
/\*http://tw.knowledge.yahoo.com/question/question?qid=1609010301019  
抱歉，我只會C++。如果你看得懂的話也可以把他改寫成C語言。  
就這樣啦  
\*/  
#include  
#define MAX\_OPT 21  
using namespace std;  
  
int main()  
{  
  int ia=1;  
  int va\[MAX\_OPT-2\]\[2\]={{0,0},{2,8},{3,13},{4,14},{5,15},{6,7},{7,20},{19,20},  
  //                    0     1     2      3      4      5     6      7  
                        {9,13},{10,17},{11,17},{12,18},{21,18},{14,17},{15,16},  
  //                    8       9       10      11      12      13      14  
                        {6,7},{6,18},{11,16},{21,20}};//這裡是紀錄是或否的目標  
  //                    15      16   17      18  
  string sa\[MAX\_OPT+1\]={"",//這裡是紀錄內容  
                        "1",//1  
                        "2",//2  
                        "3",//3  
                        "4",//4  
                        "5",//5  
                        "6",//6  
                        "7",//7  
                        "8",//8  
                        "9",//9  
                        "10",//10  
                        "11",//11  
                        "12",//12  
                        "13",//13  
                        "14",//14  
                        "15",//15  
                        "16",//16  
                        "17",//17  
                        "18",//18  
                        "19",//19  
                        "20",//20  
                        "21",};//21  
  string sb;  
  bool ba;  
  while(1)  
  {  
    system("cls");  
    cout< if(ia==19 || ia==20 || ia==21)  
    {  
      system("pause");  
      break;  
    }  
    ba=true;  
    do  
    {  
      cout<<"請選擇(y/n) -> ";  
      getline(cin,sb);  
      if(sb.size()==1 && (sb\[0\]=='Y' || sb\[0\]=='y' || sb\[0\]=='N' || sb\[0\]=='n'))  
      {  
        if(sb\[0\]=='Y' || sb\[0\]=='y')ia=va\[ia\]\[0\];  
        else ia=va\[ia\]\[1\];  
        ba=false;  
      }  
    }while(ba);  
  }  
}