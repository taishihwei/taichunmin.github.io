---
layout: default
title: {{ site.name }}
---

# 建置中

這個部落格正在建置中，希望能把以前四散在各地的部落格資料都集中放到這裡。

# Blog Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
