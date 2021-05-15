# 211 html头部link-meta

视频序号121-122

目录
- [211 html头部link-meta](#211-html头部link-meta)
- [1. link标签](#1-link标签)
- [2. meta标签](#2-meta标签)


***

# 1. link标签

link 标签定义文档与外部资源的关系。
link 标签最常见的用途是链接样式表。

**HTML 与 XHTML 之间的差异：**

* 在 HTML 中，link 标签没有结束标签。
* 在 XHTML 中，link 标签必须被正确地关闭。

示例：

```
<link rel="stylesheet" type="text/css" href="theme.css">	

添加网址标题栏前的小图标：
<link rel="icon" type="/image/x-icon" href="http://www.mobiletrain.org/favicon.ico">

DNS预解析：
<link rel="dns-prefetch" href="//static.360buyimg.com">
```

参考一下各大网站代码里的link标签



# 2. meta标签

meta 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

meta 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。

添加一些辅助信息。

示例：

```
<meta name="description" content="大连美团网精选大连美食餐厅,酒店预订,电影票,旅游景点,外卖订餐,大连团购信息,您可查询商家评价店铺信息。大连生活,下载美团官方APP ,吃喝玩乐1折起。">
       <meta name="keywords" content="大连美食,大连酒店,大连团购">
       <meta name="renderer" content="webkit">

       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <meta http-equiv="refresh" content="3" url="">
       <meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT">  
```

各大网站都有meta标签，可查看了解了解。