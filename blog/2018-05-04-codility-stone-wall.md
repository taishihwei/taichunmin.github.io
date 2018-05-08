---
date: "2018-05-04 14:52"
tags: [codility, C++, stack]
---
# codility: StoneWall 石牆

::: success 這是我的解題結果 (含答案)
https://app.codility.com/demo/results/training2XUR79-PZX/
:::

::: info
這題的敘述如果改成在牆上貼瓷磚會比較貼切，所以我就直接用貼瓷磚來描述了。
:::

今天你想要在牆上貼寬度為 `N` 公尺的瓷磚，題目會給 `N` 個大於 `0` 的整數陣列 `H`，代表瓷磚每公尺的高度，高度可能不同。

你現在有任意長寬的長方形瓷磚，請問如何用最少的瓷磚數量來貼出符合 `H` 的瓷磚牆呢?

## 測資說明

* `1 <= N <= 100000`, `N` 是整數
* 陣列 `H` 中的每個元素 `1 <= H[i] <= 1000000000`, `H[i]` 是整數

## 範例

題目給定一個 `N=9` 的陣列 `H` 如下:

```
H = [8, 8, 5, 7, 9, 8, 7, 4, 8]
```

則最少要用七塊長方形瓷磚來拼出符合 `H` 的瓷磚牆。

![Imgur](https://i.imgur.com/PcZmeFK.png)
