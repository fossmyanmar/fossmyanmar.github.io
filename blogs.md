---
layout: blog
title: Blog
permalink: /blog/
---

{% for post in site.posts %}
<div class="col-md-12">
	<h1 style="font-size: 27px;  margin: 10px 0;"><a href="{{ post.url }}">{{ post.title }}</a></h1>
	<p> {{ post.excerpt }}</p>
</div>
{% endfor %}


