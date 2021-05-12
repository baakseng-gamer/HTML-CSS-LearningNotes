# 204 iframe嵌套页面

视频序号114



***

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

iframe 标签会创建包含另外一个文档的内联框架，有效地将另一个 HTML 页面嵌入到当前页中。 

就是一个页面里插入另一个页面。

应用场景：数据传输、共享代码，局部刷新、第三方介入等。

代码示例：

```
<iframe class="iframe1" src="./other.html" frameborder="0" name="bowenshangmei" scrolling=""></iframe>
```

以下表格中的 New 为HTML5新增的属性

| 属性                                                         | 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [align](https://www.w3cschool.cn/htmltags/att-iframe-align.html) | left right top middle bottom                                 | **==HTML5 不支持。HTML 4.01 已废弃。==** 规定如何根据周围的元素来对齐 <iframe>。 |
| [frameborder](https://www.w3cschool.cn/htmltags/att-iframe-frameborder.html) | 1 0                                                          | **==HTML5 不支持。==**规定是否显示 <iframe> 周围的边框。     |
| [height](https://www.w3cschool.cn/htmltags/att-iframe-height.html) | pixels                                                       | 规定 <iframe> 的高度。                                       |
| [longdesc](https://www.w3cschool.cn/htmltags/att-iframe-longdesc.html) | URL                                                          | **==HTML5 不支持。==**规定一个页面，该页面包含了有关 <iframe> 的较长描述。 |
| [marginheight](https://www.w3cschool.cn/htmltags/att-iframe-marginheight.html) | pixels                                                       | **==HTML5 不支持。==**规定 <iframe> 的顶部和底部的边距。     |
| [marginwidth](https://www.w3cschool.cn/htmltags/att-iframe-marginwidth.html) | pixels                                                       | **==HTML5 不支持。==**规定 <iframe> 的左侧和右侧的边距。     |
| [name](https://www.w3cschool.cn/htmltags/att-iframe-name.html) | name                                                         | 规定 <iframe> 的名称。                                       |
| [sandbox](https://www.w3cschool.cn/htmltags/att-iframe-sandbox.html)New | "" allow-forms allow-same-origin allow-scripts allow-top-navigation | 对 <iframe> 的内容定义一系列额外的限制。                     |
| [scrolling](https://www.w3cschool.cn/htmltags/att-iframe-scrolling.html) | yes no auto                                                  | **==HTML5 不支持。==**规定是否在 <iframe> 中显示滚动条。     |
| [seamless](https://www.w3cschool.cn/htmltags/att-iframe-seamless.html)New | seamless                                                     | 规定 <iframe> 看起来像是父文档中的一部分。                   |
| [src](https://www.w3cschool.cn/htmltags/att-iframe-src.html) | URL                                                          | 规定在 <iframe> 中显示的文档的 URL。                         |
| [srcdoc](https://www.w3cschool.cn/htmltags/att-iframe-srcdoc.html)New | HTML_code                                                    | 规定页面中的 HTML 内容显示在 <iframe> 中。                   |
| [width](https://www.w3cschool.cn/htmltags/att-iframe-width.html) | pixels                                                       | 规定 <iframe> 的宽度。                                       |

**==注意==**

* 不设宽高，默认为300px*150px

实例：

 [20401iframe01.html](20401iframe01.html) 

 [20401iframe02.html](20401iframe02.html) 

被插入的另一个网页： [other.html](other.html) 