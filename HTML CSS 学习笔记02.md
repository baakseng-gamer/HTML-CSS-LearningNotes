# 2.HTML+CSS系列教程②之溯本求源

扩展HTML 扩展CSS HTML5新语法 CSS3新语法 兼容与hack



## 01-110 HTML和CSS发展历史

网上查



## 01-111 HTML与XHTML区别

DOCTYPE文档及编码
元素大小写 
属性布尔值
属性引号
图片的alt属性
单标签写法
双标签闭合



## 01-112 b标签与i标签

strong和b、em和i？
strong 和 em 都是表示强调的标签，表现形态为文本加粗和斜体。b 和 i 标签同样也表示文本加粗和斜体。	
区别在于，strong 和 em 是具备语义化的，而 b 和 i 是不具备语义化的。

```
<body>
    <strong>文本1</strong>
    <b>文本2</b>
    <em>文本3</em>
    <i>文本4</i>
    <!-- 区别在于，strong 和 em 是具备语义化的，而 b 和 i 是不具备语义化的。 -->
    <span>span</span>
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-112 b标签与i标签\index.html) 





## 01-113 引用标签基本操作

blockquote  :  引用大段的段落解释

cite  :  引用著作的标题

```
    <P>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
            For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
        </blockquote>
    </P>
```



q  :  引用小段的短语解释

```
    <p>WWF's goal is to:
        <q cite="123456">Build a future where people live in harmony with nature.</q>
        We hope they succeed.
    </p>
```



abbr  :  缩写或首字母缩略词

```
    <p>
        <abbr title="World Health Organization">WHO</abbr>成立于1948年。
    </p>
```

实例： [index.html](2020Web HTML CSS\01-113 引用标签基本操作\index.html) 



## 01-114 iframe嵌套页面

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

iframe 标签会创建包含另外一个文档的内联框架，有效地将另一个 HTML 页面嵌入到当前页中。 

就是一个页面里插入另一个页面

New为HTML5新增的属性	

应用场景：数据传输、共享代码，局部刷新、第三方介入等。

代码示例：

```
<iframe class="iframe1" src="./other.html" frameborder="0" name="bowenshangmei" scrolling=""></iframe>
```



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

不设宽高，默认为300px*150px



实例： [iframe.html](2020Web HTML CSS\01-114 iframe嵌套页面\iframe.html)   [iframe1.html](2020Web HTML CSS\01-114 iframe嵌套页面\iframe1.html) 





## 01-115 br标签与wbr标签

br 标签表示换行操作，而 wbr 标签表示软换行操作。
提示：如果单词太长，或者您担心浏览器会在错误的位置换行，那么您可以使用  wbr  元素来添加 Word Break Opportunity（单词换行时机）

实例： [wbr.html](2020Web HTML CSS\01-115 br标签与wbr标签\wbr.html)  动一动浏览器宽度看看每段文本的不同之处





## 01-116 pre标签与code标签

**pre** 元素可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。针对网页中的程序代码的显示效果。

**注意：**pre 元素是块级元素，但是只能包含文本或行内元素，任何块级元素（常见为可以导致段落断开的标签：例如title、p 和address 标签）都不能位于 pre 元素中。

在 HTML 4.01 中，"width" 属性已废弃，不可使用。 HTML5 不支持"width"属性。

**提示:** pre 标签的一个常见应用就是用来表示计算机的源代码。
**提示：**pre 标签与code标签结合起来使用，可以获得更加精确的语义。



**code** 标签的功能有：将文本变成等宽字体以及提示这段文本是源程序代码。一个短语标签，用来定义计算机代码文本。

**提示：**我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。

| 标签     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| <em>     | 呈现为被强调的文本。                                         |
| <strong> | 定义重要的文本。                                             |
| <dfn>    | 定义一个定义项目。                                           |
| <code>   | 定义计算机代码文本。                                         |
| <samp>   | 定义样本文本。                                               |
| <kbd>    | 定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。 |
| <var>    | 定义变量。您可以将此标签与 <pre>及 <code> 标签配合使用。     |

```
    <p>这是一段代码</p>
    <pre>
        <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang="en">
            &lt;head>
                &lt;meta charset="UTF-8">
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
                &lt;title>Document&lt;/title>
                &lt;/head>
            &lt;body>
                hello world
            &lt;/body>
        </code>
    </pre>
```

**运行结果**： [index.html](2020Web HTML CSS\01-116 pre标签与code标签\index.html) 



## 01-117 map标签与area标签

 map  标签可以和 area 元素一起使用，以此来达到定义图像映射（可点击的链接区域）的目标。

标签定义及使用说明
map 标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。
map 中的 usemap 属性可引用 map  中的 id 或 name 属性（取决于浏览器），所以我们应同时向 map  添加 id 和 name 属性。
area 元素永远嵌套在 map 元素内部。area 元素可定义图像映射中的区域。
提示：要完成图像映射要用到三种标签：img 标签、map标签、area标签。

area属性：

| 属性                                                         | 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [alt](https://www.w3cschool.cn/htmltags/att-area-alt.html)   | text                                                         | 规定区域的替代文本。如果使用 href 属性，则该属性是必需的。   |
| [coords](https://www.w3cschool.cn/htmltags/att-area-coords.html) | coordinates                                                  | 规定区域的坐标。                                             |
| [href](https://www.w3cschool.cn/htmltags/att-area-href.html) | URL                                                          | 规定区域的目标 URL。                                         |
| [hreflang](https://www.w3cschool.cn/htmltags/att-area-hreflang.html)New | language_code                                                | 规定目标 URL 的语言。                                        |
| [media](https://www.w3cschool.cn/htmltags/att-area-media.html)New | media query                                                  | 规定目标 URL 是为何种媒介/设备优化的。默认：all。            |
| [nohref](https://www.w3cschool.cn/htmltags/att-area-nohref.html) | value                                                        | HTML5 不支持。 规定没有相关链接的区域。                      |
| [rel](https://www.w3cschool.cn/htmltags/att-area-rel.html)New | alternate author bookmark help license next nofollow noreferrer prefetch prev search tag | 规定当前文档与目标 URL 之间的关系。                          |
| [shape](https://www.w3cschool.cn/htmltags/att-area-shape.html) | default rect circle poly                                     | 规定区域的形状。                                             |
| [target](https://www.w3cschool.cn/htmltags/att-area-target.html) | _blank _parent _self _top framename                          | 规定在何处打开目标 URL。                                     |
| [type](https://www.w3cschool.cn/htmltags/att-area-type.html)New | MIME_type                                                    | 规定目标 URL 的 MIME 类型。 注：MIME = Multipurpose Internet Mail Extensions。 |



矩形：

```
    <img src="./img/star.jpg" alt="" usemap="#star">
    <map name="star">
        <area shape="rect" coords="175 70 380 200" href="https://www.taobao.com" alt="">
        <!-- rect为矩形 -->
    </map>
```

<a href=".\2020Web HTML CSS\01-117 map标签与area标签\rect-coords.png">矩形rect图像映射图示</a>

实例： [map area1.html](2020Web HTML CSS\01-117 map标签与area标签\map area1.html) 



正圆：

```
<img src="./img/star.jpg" alt="" usemap="#star">
    <map name="star">
        <area shape="circ" coords="300 162 100" href="https://www.taobao.com" alt="" target="_blank">
        <!-- circle为圆形 -->
    </map>
```

<a href=".\2020Web HTML CSS\01-117 map标签与area标签\circle-coords.png">正圆circle图像映射图示</a>

实例： [map area2.html](2020Web HTML CSS\01-117 map标签与area标签\map area2.html) 



多边形：

```
<img src="./img/star.jpg" alt="" usemap="#star">
    <map name="star">
        <area shape="poly" coords="176 2 210 91 304 100 232 156 256 250 176 197 97 249 120 157 45 97 141 92" href="https://www.taobao.com" alt="" target="_blank">
        <!-- poly为多边形 -->
    </map>
```

<a href=".\2020Web HTML CSS\01-117 map标签与area标签\poly-coords.png">多边形poly图像映射图示</a>

实例： [map area3.html](2020Web HTML CSS\01-117 map标签与area标签\map area3.html) 





## 01-118 embed标签与object标签

embed和object都表示能够嵌入一些多媒体，如flash动画、插件等。基本使用没有太多区别，主要是为了兼容不同的浏览器而已。包含对象，比如图像、音频、视频、Java applets、ActiveX、PDF 以及 Flash。

embed 标签是 HTML 5 中的新标签。

object 标签可以表示一个外部资源，可以将其视为一个映像、一个嵌套的浏览上下文，或者一个由插件处理的资源。

object 元素需要配合param 元素一起完成

**提示**：param标签定义用于对象的 run-time 设置。

**提示：**不要对图像使用 object 标签，请使用 img 标签代替。

```
<body>
    <embed src="./img/flash.swf" type="">
    <hr>
    <object>
        <param name="movie" value="./img/helloworld.swf">
    </object>
    <hr>
    <object data="./img/helloworld.swf" type=""></object>
</body>
```

**运行结果**： [ember object.html](2020Web HTML CSS\01-118 embed标签与object标签\ember object.html) 





## 01-119 video标签与audio标签

audio标签表示嵌入音频文件，video标签表示嵌入视频文件。默认控件是不显示的，可通过controls属性来显示控件。都属于HTML5的新标签。

为了能够支持多个备选文件的兼容支持，可以配合source标签。

| 属性                                                         | 值                 | 描述                                                        |
| :----------------------------------------------------------- | :----------------- | :---------------------------------------------------------- |
| [autoplay](https://www.w3cschool.cn/htmltags/att-audio-autoplay.html)New | autoplay           | 如果出现该属性，则音频在就绪后马上播放。                    |
| [controls](https://www.w3cschool.cn/htmltags/att-audio-controls.html)New | controls           | 如果出现该属性，则向用户显示音频控件（比如播放/暂停按钮）。 |
| [loop](https://www.w3cschool.cn/htmltags/att-audio-loop.html)New | loop               | 如果出现该属性，则每当音频结束时重新开始播放。              |
| [muted](https://www.w3cschool.cn/htmltags/att-audio-muted.html)New | muted              | 如果出现该属性，则音频输出为静音。                          |
| [preload](https://www.w3cschool.cn/htmltags/att-audio-preload.html)New | auto metadata none | 规定当网页加载时，音频是否默认被加载以及如何被加载。        |
| [src](https://www.w3cschool.cn/htmltags/att-audio-src.html)New | *URL*              | 规定音频文件的 URL。                                        |



| 属性                                                         | 值                 | 描述                                                         |
| :----------------------------------------------------------- | :----------------- | :----------------------------------------------------------- |
| [autoplay](https://www.w3cschool.cn/htmltags/att-video-autoplay.html)New | autoplay           | 如果出现该属性，则视频在就绪后马上播放。                     |
| [controls](https://www.w3cschool.cn/htmltags/att-video-controls.html)New | controls           | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| [height](https://www.w3cschool.cn/htmltags/att-video-height.html)New | *pixels*           | 设置视频播放器的高度。                                       |
| [loop](https://www.w3cschool.cn/htmltags/att-video-loop.html)New | loop               | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| [muted](https://www.w3cschool.cn/htmltags/att-video-muted.html)New | muted              | 如果出现该属性，视频的音频输出为静音。                       |
| [poster](https://www.w3cschool.cn/htmltags/att-video-poster.html)New | *URL*              | 规定视频正在下载时显示的图像，直到用户点击播放按钮。         |
| [preload](https://www.w3cschool.cn/htmltags/att-video-preload.html)New | auto metadata none | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](https://www.w3cschool.cn/htmltags/att-video-src.html)New | *URL*              | 要播放的视频的 URL。                                         |
| [width](https://www.w3cschool.cn/htmltags/att-video-width.html)New | *pixels*           | 设置视频播放器的宽度。                                       |



source标签为媒体元素（比如 video 和 audio）定义媒体资源。允许您规定两个视频/音频文件共浏览器根据它对媒体类型或者编解码器的支持进行选择。

代码示例:

```
<audio src="./img/johann_sebastian_bach_air.mp3" controls muted loop></audio>
```

```
<video src="./img/Intermission-Walk-in_512kb.mp4" controls muted>12341234</video>
```



以下为兼容性问题

```
<video controls>
        <source src="./img/Intermission-Walk-in.ogv\"></source>
</video>
```

```
    <div style="position: relative; height:250px; overflow: hidden;">
    
        <video style="min-width:100%; min-height:100%;" loop="" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-fullscreen="false" x5-video-player-type="h5" id="introvideo" autoplay="">
                
                <source src="http://shimmer.neusoft.edu.cn/h/www/media/intro2016.mp4" type="video/mp4">
                
                <source src="http://shimmer.neusoft.edu.cn/h/www/media/intro2016.webm" type="video/webm">
                
        </video>
        
    </div>
```

实例： [video audio.html](2020Web HTML CSS\01-119 video标签与audio标签\video audio.html) 



## 01-120文字注解与文字方法

ruby 标签定义 ruby 注释（中文注音或字符）。
在东亚使用，显示的是东亚字符的发音。
将 ruby 标签与 rt>和 rp>标签一起使用：
ruby 元素由一个或多个需要解释/发音的字符和一个提供该信息的 rt>元素组成，还包括可选的 rp 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。

```
    <ruby>
        汉 <rp>(</rp><rt>Hàn</rt><rp>)</rp>
        字 <rp>(</rp><rt>Zì</rt><rp>)</rp>
    </ruby>
    <p>以上来自w3cschool实例</p>
    <hr>
    <ruby>
        汉<rt>hàn</rt>
        字<rt>zì</rt>
    </ruby>
    <p>以上来自千锋实例</p>
```





bdo 标签可覆盖默认的文本方向。

标签定义及使用说明
bdo 指的是 bidi 覆盖（Bi-Directional Override）。
bdo 标签用来覆盖默认的文本方向。
bdo 标签必须配合 dir 属性使用。
bdo 标签有 ltr 和 rtl 两个属性值，分别表示：从左到右显示文本和从右到左显示文本。

```
    <p>该段落文字从左到右显示。</p>
    <p>
        <bdo dir="rtl">该段落文字从右到左显示。</bdo>
    </p> 
```



采用CSS：

```
        span{
            direction: rtl;
            unicode-bidi: bidi-override;
        }
        
        
     <p>
        里奥雷乌斯就是雄火龙。
        <span>里奥雷乌斯</span>就是雄火龙
    </p>
```

**运行结果**： [ruby rt与bdo.html](2020Web HTML CSS\01-120 文字注解与文字方法\ruby rt与bdo.html) 



## 01-121 link标签扩展学习

**定义和用法**
link 标签定义文档与外部资源的关系。
link 标签最常见的用途是链接样式表。

**HTML 与 XHTML 之间的差异**
在 HTML 中，<link> 标签没有结束标签。
在 XHTML 中，<link> 标签必须被正确地关闭。

代码示例：

```
<link rel="stylesheet" type="text/css" href="theme.css">	

添加网址标题栏前的小图标：
<link rel="icon" type="/image/x-icon" href="http://www.mobiletrain.org/favicon.ico">

DNS预解析：
<link rel="dns-prefetch" href="//static.360buyimg.com">
```

参考一下各大网站代码里的link标签



## 01-122 meta标签扩展学习

**定义和用法**
meta 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
meta 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。

添加一些辅助信息。



代码示例：

```
<meta name="description" content="大连美团网精选大连美食餐厅,酒店预订,电影票,旅游景点,外卖订餐,大连团购信息,您可查询商家评价店铺信息。大连生活,下载美团官方APP ,吃喝玩乐1折起。">
       <meta name="keywords" content="大连美食,大连酒店,大连团购">
       <meta name="renderer" content="webkit">

       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <meta http-equiv="refresh" content="3" url="">
       <meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT">  
```



各大网站都有meta标签，可查看了解了解



## 01-123 HTML5新语义化标签1-3

header : 页眉
footer : 页脚
main : 主体

hgroup : 标题组合

nav : 导航

代码示例：

```
    <header> <!-- 页眉 -->
        <hgroup> <!-- 标题组合 -->
            <h1>主标题</h1>
            <h2>副标题</h2>
        </hgroup>
        <nav> <!-- 导航 -->
            <ul>
                <li>首页</li>
                <li>论坛</li>
                <li>博客</li>
                <li>下载</li>
                <li>关于</li>
            </ul>
        </nav>
    </header> 
```



**注**：header、footer、main 在一个网页中只能出现一次。



article : 独立的内容
aside : 辅助信息的内容
section : 区域
figure : 描述图像或视频
figcaption : 描述图像或视频的标题部分

datalist : 选项列表
details / summary : 文档细节 / 文档标题
progress / meter : 定义进度条 / 定义度量范围
time : 定义日期或时间
mark : 带有记号的文本

```
<main> <!-- 主体 -->
	<article> <!-- 独立的内容 -->
		<section> <!-- 区域 -->
            <input type="text" list="elems">
            <datalist id="elems"> <!-- 选项列表 -->
            <option value="a"></option>
                .
                .
            <option value="f"></option>
            
            <details> <!-- 文档细节 -->
            	<summary> <!-- 文档标题 -->
                        HTML
                </summary>
                    <P>超文本标记语言</P>
                    <P>超文本标记语言</P>
            </details>
            
            <progress min="0" max="10" value="5"></progress> <!-- 定义进度条 -->
            
            <meter min="0" max="100" value="80" low="10" high="60"></meter> <!-- 定义度量范围 -->
            
            <p>
            	今天是<time title"1-1">元旦节</time>,放假啦。
            </p>
            <p>
            	今天是<mark>元旦节</mark>,放假啦。
            </p>
		</section>
		
		<section> <!-- 区域 -->
			<figure> <!-- 描述图像或视频 -->
				<img src="./img/youku.jpg" alt="">
			</figure>
        	<figcaption> <!-- 描述图像或视频的标题部分 -->
				新水果篮子❤️高甜
				<br>
				十二生肖恋上美少女！
			</figcaption>
        </section>
        
    </article>
    
    <aside> <!-- 辅助信息的内容 -->
        ...
	</aside>
</main>	
```

```
<footer>
	页脚
</footer>
```

实例： [index.html](2020Web HTML CSS\01-123 HTML5新语义化标签1-3\index.html) 



## 01-126 表格扩展学习

添加单线 : border-collapse : collapse

隐藏空单元 : empty-cells : hide

斜线分类 : border / rotate

```
        table .line{
            border-top: 50px solid tomato;
            border-left: 150px solid lightblue ;
            /* 上面两行代码为添加斜线 */
            position: relative;
            color: #fff;
        }
        table .line em{
            position: absolute;
            left: -50px;
            top: -50px;
            font-style: normal;
        }
        table .line span{
            position: absolute;
            left: -150px;
            top: -25px;
        }
        
        
<body>
	<table border="1">
        <caption>天气预报</caption>
        <colgroup>
            <col span="2" style="background-color: lightblue;">
            <col span="2" style="background-color:  tomato;">
            <!-- 上面两行为列分组 -->
        </colgroup>
        <tHead>
            <tr>
                <th colspan="2" >
                    <div class="line">
                        <em>详情</em>
                        <span>日期</span>
                    </div>
                </th>
                <th>天气情况</th>
                <th>出行情况</th>
            </tr>
        </tHead>
```



cogroup /  col：列分组

```
            <col span="2" style="background-color: lightblue;">
            <col span="2" style="background-color:  tomato;">
            <!-- 上面两行为列分组 -->
```

**运行结果**： [table.html](2020Web HTML CSS\01-126 表格扩展学习\table.html) 



## 01-127 表单扩展之美化控件

美化表单控件：   

1.label + :checked    

```
<style>
        label input{
            display: none;
        }
        label input:checked + div{
            background-position: 0 0;
        }
        label div{
            width: 28px;
            height: 28px;
            background: url(./img/checkbox.png) 0 -28px;
        }
    </style>
    
    <body>
    <label>
        <input type="checkbox">
        <div></div>
    </label>
	</body>
```

**运行结果**： [form1.html](2020Web HTML CSS\01-127 表单扩展之美化控件\form1.html)  点击黑框试效果



2.position + opacity

以下无采用position + opacity

```
    <style>
        label input{display: none;}
        label div{
            width: 86px;
            height: 34px;
            background: url(./img/upload.png) no-repeat;
        }
        label div:active{
            width: 86px;
            height: 34px;
            box-shadow: 2px 2px 5px gray;
        }
    </style>
</head>
<body>
    <label>
        <input type="file">
        <div></div>
    </label>
</body>
```

但是鼠标移入【上传】按钮无显示“未选择任何文件”

**运行结果**： [form2-1.html](2020Web HTML CSS\01-127 表单扩展之美化控件\form2-1.html) 



```
    <style>
        .upload{
            width: 86px;
            height: 34px;
            position: relative;
        }
        .upload div{
            width: 100%;
            height: 100%;
            background: url(./img/upload.png);
        }
        .upload input{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0; /* 透明度 */
        }
    </style>
</head>
<body>
    <div class="upload">
        <input type="file">
        <div></div>
    </div>
</body>
```

鼠标移入【上传】按钮能显示“未选择任何文件”

**运行结果**： [form2-2.html](2020Web HTML CSS\01-127 表单扩展之美化控件\form2-2.html) 



## 01-128 表单扩展之新input控件

新的input控件

<input type="以下新控件">

email  :  电子邮件地址输入框，如果输入后没带@会有提示框

url  :  网址输入框，如果漏http://或https://会出现格式不对的提示框

mber  :  数值输入框，字母键盘无法输入，而且有箭头键用来加减数字

range  :  滑动条

```
<input type="range" min="0" max="10" value="2">
```



date / month / week  :  日期控件

```
        <p><input type="date"></p>
        <p><input type="month"></p>
        <p><input type="week"></p>
```



search  :  搜索框，输入字符 框内右侧会显示叉号

```
<input type="search" placeholder="your keyword">
```



color  :  颜色控件

tel  :  电话号码输入框  ( 在移动端会默认调起数字键盘 )

time  :  时间控件

**注意：**以上控件在不同浏览器或不同版本 显示有所区别

实例： [form_new1.html](2020Web HTML CSS\01-128 表单扩展之新input控件\form_new1.html) 



### 总结

| 值                | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| button            | 定义可点击的按钮（通常与 JavaScript 一起使用来启动脚本）。   |
| checkbox          | 定义复选框。                                                 |
| colorNew          | 定义拾色器。                                                 |
| dateNew           | 定义 date 控件（包括年、月、日，不包括时间）。               |
| datetimeNew       | 定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，基于 UTC 时区）。 |
| datetime-localNew | 定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，不带时区）。 |
| emailNew          | 定义用于 e-mail 地址的字段。                                 |
| file              | 定义文件选择字段和 "浏览..." 按钮，供文件上传。              |
| hidden            | 定义隐藏输入字段。                                           |
| image             | 定义图像作为提交按钮。                                       |
| monthNew          | 定义 month 和 year 控件（不带时区）。                        |
| numberNew         | 定义用于输入数字的字段。                                     |
| password          | 定义密码字段（字段中的字符会被遮蔽）。                       |
| radio             | 定义单选按钮。                                               |
| rangeNew          | 定义用于精确值不重要的输入数字的控件（比如 slider 控件）。   |
| reset             | 定义重置按钮（重置所有的表单值为默认值）。                   |
| searchNew         | 定义用于输入搜索字符串的文本字段。                           |
| submit            | 定义提交按钮。                                               |
| telNew            | 定义用于输入电话号码的字段。                                 |
| text              | 默认。定义一个单行的文本字段（默认宽度为 20 个字符）。       |
| timeNew           | 定义用于输入时间的控件（不带时区）。                         |
| urlNew            | 定义用于输入 URL 的字段。                                    |
| weekNew           | 定义 week 和 year 控件（不带时区）。                         |

参考链接：https://www.w3cschool.cn/htmltags/att-input-type.html



## 01-129 表单扩展之新属性

表单属性：
autocomplete  :  自动完成  默认 on  /  off

```
<input type="text" name="username" >
```

添加name="username"会出现下拉多个username的内容

```
<input type="text" name="username" autocomplete="off">
```

添加autocomplete="off"后不会出现。



autofocus  :  获取焦点

打开页面或刷新页面光标第一时间出现在有设autocomplete的框

```
        <input type="text" name="username" autocomplete="off" >
        <input type="text" name="username" autocomplete="off" autofocus>
        <input type="text" name="username" autocomplete="off">
        <input type="submit">
```



required  :  不能为空，空框提交会出现提示框

```
<input type="text" name="username" autocomplete="off" autofocus required>
```



pattern  :  正则验证

```
<input type="text" name="username" autocomplete="off" autofocus required pattern="[a-z]+">
```

\d 匹配一个数字0~9 

\d+表示1个或多个数字

[a-z]+ 26个字母里选1个或多个

输入提交后如不符合格式会出现提示

可参考链接：https://www.w3cschool.cn/rxoyts/或者其它手册

实例： [form_new2.html](2020Web HTML CSS\01-129 表单扩展之新属性\form_new2.html) 



## 01-130 表单扩展之数据传输

method  :  数据传输方式

```
<form action="./data.php" method="GET|POST">
```

| 值   | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| get  | 默认。将表单数据（form-data）以名称/值对的形式附加到 URL 中：URL?name=value&name=value。 |
| post | 以 HTTP post 事务的形式发送表单数据（form-data）。           |

enctype  :  数据传输类型
name / value  :  数据的键值对

实例： [form_new3.html](2020Web HTML CSS\01-130 表单扩展之数据传输\form_new3.html) 



## 01-131 表单扩展之标签

fieldset  :  表单内元素分组 
legend  :  为fieldset元素定义标题

```
    <fieldset>
        <legend>登录</legend>
        <p>
            用户名：<input type="text">
        </p>
        <p>
            密码：<input type="pasword">
        </p>
    </fieldset>
```

**运行结果**： [form_new4-1.html](2020Web HTML CSS\01-131 表单扩展之标签\form_new4-1.html) 





optgroup  :  定义选项组

```
    <select name="" id="">
        <optgroup label="水果"></optgroup>
        <option value="">苹果</option>
        <option value="">香蕉</option>
        <option value="">雪梨</option>
        <option value="">猕猴桃</option>
        <optgroup label="蔬菜"></optgroup>
        <option value="">白菜</option>
        <option value="">黄瓜</option>
        <option value="">南瓜</option>
        <option value="">茄子</option>
    </select>
```

**运行结果**： [form_new4-2.html](2020Web HTML CSS\01-131 表单扩展之标签\form_new4-2.html) 





## 01-132 BFC规范

Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

BFC 即 Block Formatting Contexts (块级格式化上下文) ，它属于上述中的其中一种规范。具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

触发BFC规范的元素，可以形成一个独立的容器。不受到外界的影响，从而解决一些布局问题。

触发BFC

浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed) 
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)





解决margin叠加问题

```
    <style>
        .div1{
            width: 100px;
            height: 100px;
            background: tomato;
            margin-bottom: 30px;
        }
        .div2{
            width: 100px;
            height: 100px;
            background: lightblue;
            margin-top: 30px;
        }
    </style>
    
<body>
    <div class="div1"></div>
    <div class="div2"></div>
</body>
```

红块设置了margin-bottom 30px 蓝块设置了margin-top 30px，可是两块纵向距离却不是30px+30px=60px，而是选取最大的30px

**运行结果**： [BFC1.html](2020Web HTML CSS\01-132 BFC规范\BFC1.html) 





解决方法：

style部分添加

```
.box{
            overflow: hidden;/* 溢出隐藏 */
        }
```

```
<body>
    <div class="box">
        <div class="div1"></div>
    </div>
    <div class="box">
        <div class="div2"></div>
    </div>
</body>
```

 [BFC2.html](2020Web HTML CSS\01-132 BFC规范\BFC2.html) 

另一个方法：

```
.box{
            display: flex;
        }
```

 [BFC3.html](2020Web HTML CSS\01-132 BFC规范\BFC3.html) 

**运行结果**：两个块纵向距离为60px





解决margin传递问题

```
    <style>
        .div1{
            width: 200px;
            height: 200px;
            background: royalblue;
        }
        .div2{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="div1">
        <div class="div2"></div>
    </div>
</body>
```

本来想把小块在大块里向下移动50px，却连带大块也移下50px

解决方法：父元素添加overflow:hidden

或者父元素添加position:relative,子元素添加position absolute

**运行结果**： [BFC4.html](2020Web HTML CSS\01-132 BFC规范\BFC4.html) 



解决浮动问题

```
    <style>
        .div1{
            width: 200px;
            border: 1px gray solid;
        }
        .div2{
            width: 100px;
            height: 100px;
            background: royalblue;
            float: left;
        }
    </style>
    
<body>
    <div class="div1">
        <div class="div2"></div>
    </div>
</body>
```

无设高度的div1不能被已设float:left的div2撑满

解决方法：

1.父元素添加overflow:hidden

2.或者添加float:left

3.又或者添加display:inline-block

**运行结果**： [BFC5.html](2020Web HTML CSS\01-132 BFC规范\BFC5.html) 







解决覆盖问题

```
<style>
        .div1{
            width: 100px;
            height: 100px;
            background: lightseagreen;
            float: left;
        }
        .div2{
            height: 400px;
            background: seagreen;
        }
    </style>
    
    
<body>
    <div class="div1"></div>
    <div class="div2">Start by building basic shelter, then dig for ore and other resources. </div>
</body>
```

小绿块把大绿块覆盖了

**运行结果**：

解决方法：

给div2添加overflow:hidden

**运行结果**： [BFC6.html](2020Web HTML CSS\01-132 BFC规范\BFC6.html) 



## 01-134 浏览器内核与浏览器前缀

浏览器厂商以前就一直在实施CSS3，但它还未成为真正的标准。为此，当有一些CSS3样式语法还在波动的时候，他们提出了针对浏览器的前缀。

CSS3去兼容不同的浏览器，针对旧的浏览器做兼容，新浏览器基本不需要添加前缀。

| **浏览器**            | **内核** | **前缀** |
| --------------------- | -------- | -------- |
| **IE**                | Trident  | -ms-     |
| **Firefox**           | Gecko    | -moz-    |
| **Opera**             | Presto   | -o-      |
| **Chrome**            | Webkit   | -webkit- |
| **Safari**            | Webkit   | -webkit- |
| **Opera**、**Chrome** | Blink    |          |

```
    <style>
        div{
            width: 200px;height: 200px;background: tomato;
            -webkit-animation: 2s move;
        }

        @-webkit-keyframes move{
            0%{ opacity: 0;}
            100%{ opacity: 1;}
        }
    </style>
```

在前缀为-webkit-的浏览器（chrome safari等）打开或刷新会以2秒缓慢展现，但是在非-webkit-浏览器（如IE opera等)不会有这种动画展现

**运行结果** [vendor-prefixe.html](2020Web HTML CSS\01-134 浏览器内核与浏览器前缀\vendor-prefixe.html) 



## 01-135 transition过渡基础语法

transition-property  :  规定设置过渡效果的CSS属性的名称。
transition-duration  :  规定完成过渡效果需要多少秒或毫秒。
transition-delay  :  定义过渡效果何时开始。

代码示例：

```
        .box3{
            width: 100px;
            height: 100px;
            background: gold;
            transition-property: all;
            transition-duration: 2s;
            transition-delay: 2s; 
        }
        .box3:hover{
            width: 200px;
            height: 200px;
            background: goldenrod;
        }
```

鼠标移入不同颜色的方块试效果

实例： [transition.html](2020Web HTML CSS\01-135 transition过渡基础语法\transition.html) 

可缩写为

```
transition: all 2s 2s;
```





transition-timing-function  :  规定速度效果的速度曲线。

| 值                            | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| linear                        | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
| ease                          | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。**默认** |
| ease-in                       | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  |
| ease-out                      | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  |
| ease-in-out                   | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 |

<a href=".\2020Web HTML CSS\01-135 transition过渡基础语法\01.png">transition-timing-function属性图示</a>



<a href=".\2020Web HTML CSS\01-135 transition过渡基础语法\02.png">在线工具的cubic-bezier图示</a>

在线工具：https://cubic-bezier.com/



```
        div{
            width: 100px;
            height: 100px;
            background: tomato;
            transition-property: all;
            transition-duration: 1s;
            transition-delay: 0s;
            transition-timing-function: cubic-bezier(1,.2,.33,1.18);
        }
        div:hover{
            width: 300px;
            height: 300px;
        }
```

运动轨迹变化

**运行结果** [transition-timing-function.html](2020Web HTML CSS\01-135 transition过渡基础语法\transition-timing-function.html) 



**注**：不要加到hover上



## 01-136 transition实例之过渡导航

鼠标移入导航的过渡变化

练习： [transition-index.html](2020Web HTML CSS\01-136 transition实例之过渡导航\transition-index.html) 



练习列表边框收缩效果：

from:http://www.neusoft.edu.cn/

练习： [test.html](2020Web HTML CSS\01-136 transition实例之过渡导航\test.html) 





## 01-137 transform位移与缩放

transform变形

translate  :  位移

translateX()
translateY()
translateZ()   ( 3d )

```
    <style>
        .box1{
            width: 300px;
            height: 300px;
            border: 1px solid gray;
            margin: 30px auto;
        }
        .box2{
            width: 100px;
            height: 100px;
            background: tomato;
            transition: 1s;
        }
        .box1:hover .box2{
            background: skyblue;
            transform: translate(100px,20px);
        }
    </style>
```

translate可设负数，transform: translate(-100px,20px);但会跨出父元素边框

**运行结果**： [translate.html](2020Web HTML CSS\01-137 transform位移与缩放\translate.html) 



scale  :  缩放

scaleX()
scaleY()
scaleZ()   (3d)

值是一个比例值，正常大小就是1，会已当前元素中心点进行缩放

```
        .box1:hover .box2{
            background: skyblue;
            /* transform: translate(-100px,20px); */
            transform: scale(2);
        }
```

scale(2)相等于scale(2,2)

scale(2,.5)就是宽度变成两倍，高度变成一半

**运行结果**： [scale.html](2020Web HTML CSS\01-137 transform位移与缩放\scale.html) 





## 01-138 transform旋转与斜切

 rotate : 旋转 （ 旋转的值，单位是角度 deg ）

rotateX  (3d)
rotateY  (3d)
rotateZ  ( 和rotate是等级关系，那正值按顺时针旋转，负值按逆时针旋转 )

```
        .box1:hover .box2{
            background: skyblue;
            /* transform: translate(-100px,20px); */
            /* transform: scale(2,.5); */
            transform: rotate(45deg);
        }
```

正值为顺时针，负值为逆时针

```
transform: rotateZ(90deg);
```



若设置900deg，会旋转多次到900deg为止。



skew : 斜切
skewX : 单位也是角度，正值为顶部向左倾斜，负值为顶部向右倾斜。
skewY

```
transform: skew(45deg);
```

实例： [skew.html](2020Web HTML CSS\01-138 transform旋转与斜切\skew.html) 



## transform总结

| 值                                                           | 描述                                    |      |
| ------------------------------------------------------------ | --------------------------------------- | ---- |
| none                                                         | 定义不进行转换。                        |      |
| matrix(*n*,*n*,*n*,*n*,*n*,*n*)                              | 定义 2D 转换，使用六个值的矩阵。        |      |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |      |
| translate(*x*,*y*)                                           | 定义 2D 转换。                          |      |
| translate3d(*x*,*y*,*z*)                                     | 定义 3D 转换。                          |      |
| translateX(*x*)                                              | 定义转换，只是用 X 轴的值。             |      |
| translateY(*y*)                                              | 定义转换，只是用 Y 轴的值。             |      |
| translateZ(*z*)                                              | 定义 3D 转换，只是用 Z 轴的值。         |      |
| scale(*x*[,*y*]?)                                            | 定义 2D 缩放转换。                      |      |
| scale3d(*x*,*y*,*z*)                                         | 定义 3D 缩放转换。                      |      |
| scaleX(*x*)                                                  | 通过设置 X 轴的值来定义缩放转换。       |      |
| scaleY(*y*)                                                  | 通过设置 Y 轴的值来定义缩放转换。       |      |
| scaleZ(*z*)                                                  | 通过设置 Z 轴的值来定义 3D 缩放转换。   |      |
| rotate(*angle*)                                              | 定义 2D 旋转，在参数中规定角度。        |      |
| rotate3d(*x*,*y*,*z*,*angle*)                                | 定义 3D 旋转。                          |      |
| rotateX(*angle*)                                             | 定义沿着 X 轴的 3D 旋转。               |      |
| rotateY(*angle*)                                             | 定义沿着 Y 轴的 3D 旋转。               |      |
| rotateZ(*angle*)                                             | 定义沿着 Z 轴的 3D 旋转。               |      |
| skew(*x-angle*,*y-angle*)                                    | 定义沿着 X 和 Y 轴的 2D 倾斜转换。      |      |
| skewX(*angle*)                                               | 定义沿着 X 轴的 2D 倾斜转换。           |      |
| skewY(*angle*)                                               | 定义沿着 Y 轴的 2D 倾斜转换。           |      |
| perspective(*n*)                                             | 为 3D 转换元素定义透视视图。            |      |

angle为角度，单位为deg

参考链接：https://www.w3cschool.cn/cssref/pr-transform.html



## 01-139 transform复合写法与注意点

transform的注意事项：

1.变形操作不会影响到其他元素。

实例： [transform1.html](2020Web HTML CSS\01-139 transform复合写法与注意点\transform1.html) 



2.变形操作只能添加给块元素，但是不能添加给内联元素。



3.复合写法，可以同时添加多个变形操作。
执行是有顺序的，先执行后面的操作，再执行前面的操作。
translate会受到 rotate、scale、skew的影响

```
    <style>
        .box1{
            width: 100px;
            height: 100px;
            background: lightskyblue;
        }
        .box2{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            transform: translate(100px,0) scale(.5);
            /* 先执行缩放后位移 */
        }
        .box3{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            transform: scale(.5) translate(100px,0) ;
             /* 先执行位移50px后缩放 */
        }
        .box4{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            transform: scale(2) translate(100px,0) ;
            /* 先执行位移200px后缩放 */
        }
    </style>
    
    <body>
    <div class="box1">1</div>
    <div class="box2">2</div>
    <div class="box3">3</div>
    <div class="box3">4</div>
</body>
```

**运行结果**： [transform2.html](2020Web HTML CSS\01-139 transform复合写法与注意点\transform2.html) 

<a href=".\2020Web HTML CSS\01-139 transform复合写法与注意点\01.png">运动轨迹</a>



```
    <style>
        .box1{
            width: 100px;
            height: 100px;
            background: lightskyblue;
        }
        .box2{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            transform: translate(100px,0) rotate(45deg);
        }
        .box3{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            transform: rotate(45deg) translate(100px,0) ;
        }

    </style>
    
    <body>
    <div class="box1">1</div>
    <div class="box2">2</div>
    <div class="box3">3</div>
</body>
```

**运行结果**： [transform3.html](2020Web HTML CSS\01-139 transform复合写法与注意点\transform3.html) 

<a href=".\2020Web HTML CSS\01-139 transform复合写法与注意点\03.png">运动轨迹</a>



采用动图更为详细解释

box2和box3分别添加transition: 1s;，然后添加以下代码：

```
        .box1:hover ~ .box2{
            transform: translate(100px,0) rotate(45deg);
        }
        .box1:hover ~ .box3{
            transform: rotate(45deg) translate(100px,0) ;
        }
```

鼠标移刀1号蓝块可看运动轨迹

动图： [transform3 gif.html](2020Web HTML CSS\01-139 transform复合写法与注意点\transform3 gif.html) 





4.transform-origin : 基点的位置
x y z(3d)

```
    <style>
        .box1{
            width: 100px;
            height: 100px;
            background: tomato;
            transition: 1s;
        }
        .box1:hover{
            transform: rotate(180deg);
        }
    </style>

<body>
    <div class="box1">1</div>
    <div class="box2">2</div>
    <div class="box3">3</div>
</body>
```

以中心为基点旋转



如果给.box1元素添加transform-origin:0 0;

可试试transform-origin不同数值

实例： [transform4.html](2020Web HTML CSS\01-139 transform复合写法与注意点\transform4.html) 



## 01-140 斜切的导航

练习：

斜切的导航

```
    <style>
        *{margin: 0;padding: 0;}
        ul{
            list-style: none;
        }
        ul{
            width: 460px;
            margin: 50px auto;
            overflow: hidden;
        }
        ul li{
            float: left;
            width: 100px;
            height: 26px;
            line-height: 26px;
            color: #ffffff;
            text-align: center;
            background: royalblue;
            display: block;
            margin: 0 10px 0;
            transform: skew(-30deg);
            
        }
        ul li span{
            transform: skew(30deg);
            display: block;
        }
        ul li:first-child{
            padding-left: 10px;
            margin-left: -10px;
        }
        ul li:last-child{
            padding-right: 10px;
            margin-right: -10px;
        }
    </style>
</head>
<body>
    <ul>
        <li><span>首页</span></li>
        <li><span>游戏新闻</span></li>
        <li><span>种族职业</span></li>
        <li><span>天赋装备</span></li>
    </ul>
</body>
```

**运行结果**：[nav_skew.html](2020Web HTML CSS\01-140 斜切的导航\nav_skew.html) 



## 01-141 变形的列表

变形的列表（1）

参考： [07_变形的列表.html](2020Web HTML CSS\01-141 变形的列表\07_变形的列表.html) 

方法：采用overflow:hidden修剪掉框外的白框

练习： [index.html](2020Web HTML CSS\01-141 变形的列表\index.html) 



变形的列表（2）

参考： [demo.html](2020Web HTML CSS\01-141 变形的列表\demo.html) 

方法：

文本框设置高度0px和overflow:hidden达到隐藏效果，:hover{height:xxpx;}，达到鼠标移入能显现出来

背景颜色采用RGBA，A为透明度，这样文字不会被透明度所影响

练习： [test1.html](2020Web HTML CSS\01-141 变形的列表\test1.html) 



## 01-142 animation动画基础语法

animation-name : 设置动画的名字 (自定义的)

animation-duration : 动画的持续时间

animation-delay : 动画的延迟时间

animation-iteration-count : 动画的重复次数 ，默认值就是1 ，infinite无限次数



animation-timing-function : 动画的运动形式

| 值                            | 描述                                                        | 测试                                                         |
| :---------------------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| linear                        | 动画从开始到结束具有相同的速度。                            | [测试](https://www.w3cschool.cn/statics/demosource/Playit/Playit2.html#linear) |
| ease                          | 动画有一个缓慢的开始，然后快，结束慢。                      | [测试](https://www.w3cschool.cn/statics/demosource/Playit/Playit2.html#ease) |
| ease-in                       | 动画有一个缓慢的开始。                                      | [测试](https://www.w3cschool.cn/statics/demosource/Playit/Playit2.html#ease-in) |
| ease-out                      | 动画结束缓慢。                                              | [测试](https://www.w3cschool.cn/statics/demosource/Playit/Playit2.html#ease-out) |
| ease-in-out                   | 动画具有缓慢的开始和慢的结束。                              | [测试](https://www.w3cschool.cn/statics/demosource/Playit/Playit2.html#ease-in-out) |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在立方贝塞尔函数中定义速度函数。 可能的值是从0到1的数字值。 |                                                              |

代码示例：

```
        .box2{
            width: 100px;
            height: 100px;
            background: tomato;
            animation-name:myBox;
            animation-duration: 4s;
            animation-delay: 2s;
            animation-iteration-count: 2;
            animation-timing-function:ease;
        }
        
        @keyframes myBox{
            from{ transform: translate(0,0);}
            to{ transform: translate(200px,0);}
        }
```



可缩写为

```
        .box2{
            width: 100px;
            height: 100px;
            background: tomato;
            animation:myBox 4s 2s 2 ease
        }
```



**注：**

1.运动结束后，默认情况下会停留在起始位置。

2.@keyframes :  from -> 0%   ,  to ->  100%

```
        @keyframes myBox{
            from{ transform: translate(0,0);}
            to{ transform: translate(200px,0);}
        }
```

相等于

```
        @keyframes myBox{
            0%{ transform: translate(0,0);}
            100%{ transform: translate(200px,0);}
        }
```





```
        @keyframes myBox{
            0%{ transform: translate(0,0);}
            25%{ transform: translate(200px,0);}
            50%{ transform: translate(200px,200px);}
            75%{ transform: translate(0px,200px);}
        }
```

**运行结果**：

一个小红块环着内边缘移动

实例： [animation.html](2020Web HTML CSS\01-142 animation动画基础语法\animation.html) 



### 总结

| 值                                                           | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| *[animation-name](https://www.w3cschool.cn/cssref/css3-pr-animation-name.html)* | 指定要绑定到选择器的关键帧的名称                             |
| *[animation-duration](https://www.w3cschool.cn/cssref/css3-pr-animation-duration.html)* | 动画指定需要多少秒或毫秒完成                                 |
| *[animation-timing-function](https://www.w3cschool.cn/cssref/css3-pr-animation-timing-function.html)* | 设置动画将如何完成一个周期                                   |
| *[animation-delay](https://www.w3cschool.cn/cssref/css3-pr-animation-delay.html)* | 设置动画在启动前的延迟间隔。                                 |
| *[animation-iteration-count](https://www.w3cschool.cn/cssref/css3-pr-animation-iteration-count.html)* | 定义动画的播放次数。                                         |
| *[animation-direction](https://www.w3cschool.cn/cssref/css3-pr-animation-direction.html)* | 指定是否应该轮流反向播放动画。                               |
| *[animation-fill-mode](https://www.w3cschool.cn/cssref/css3-pr-animation-fill-mode.html)* | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |
| *[animation-play-state](https://www.w3cschool.cn/cssref/css3-pr-animation-play-state.html)* | 指定动画是否正在运行或已暂停。                               |
| initial                                                      | 设置属性为其默认值。 [阅读关于 *initial*的介绍。](https://www.w3cschool.cn/cssref/css-initial.html) |
| inherit                                                      | 从父元素继承属性。 [阅读关于 *initinherital*的介绍。](https://www.w3cschool.cn/cssref/css-inherit.html) |





## 01-143 划入划出的小图标

参考： [09_划入划出的小图标.html](2020Web HTML CSS\01-143 划入划出的小图标\09_划入划出的小图标.html) 

translate位移设置，透明度

```
        ul li:hover img{
            animation-name: navList;
            animation-duration: .5s;
            animation-iteration-count: 1;
        }
        
        @keyframes navList {
            0%{ transform: translate(0,0);opacity: 1;}
            60%{ transform: translate(0,-50px);opacity: 0;}
            70%{ transform: translate(0,30px);}
            100%{ transform: translate(0,0px);}
        }
```

练习： [test.html](2020Web HTML CSS\01-143 划入划出的小图标\test.html) 



## 01-144loading加载动画

参考： [demo.html](2020Web HTML CSS\01-144loading加载动画\demo.html) 

上面的参考采用了display: flex; justify-content:space-between;代码

方法：圆角，无限重复次数，有规律的延时，结构伪类:nth-child，放大缩小过程

```
        #loading .circle:nth-child(1){animation-delay: 0s;}
        #loading .circle:nth-child(2){animation-delay: .12s;}
        #loading .circle:nth-child(3){animation-delay: .24s;}
        #loading .circle:nth-child(4){animation-delay: .36s;}
        #loading .circle:nth-child(5){animation-delay: .48s;}
        
        @keyframes Loading-circle{
            0%{ transform: scale(1);}
            50%{ transform: scale(1.8);}
            100%{ transform: scale(1);}
        }
```

练习： [loading.html](2020Web HTML CSS\01-144loading加载动画\loading.html) 



## 01-145 animation动画扩展语法

animation-fill-mode : 规定动画播放之前或之后，其动画效果是否可见。

none (默认值) : 在运动结束之后回到初始位置，在延迟的情况下，让0%在延迟后生效
backwards  :  在延迟的情况下，让0%在延迟前生效
forwards  :  在运动结束的之后，停到结束位置
both  :  backwards和forwards同时生效

实例： [animation-fill-mode.html](2020Web HTML CSS\01-145 animation动画扩展语法\animation-fill-mode.html) 



animation-direction：属性定义是否应该轮流反向播放动画。

alternate  :  一次正向(0% ~ 100%)，一次反向(100% ~ 0%)
reverse : 永远都是反向 , 从100%~0%
normal (默认值) : 永远都是正向 , 从0%~100%

实例： [animation-direction.html](2020Web HTML CSS\01-145 animation动画扩展语法\animation-direction.html) 



## 01-146 animate.css动画库

一款强大的预设css3动画库。

官网地址：https://daneden.github.io/animate.css/



基本使用：

animated : 基类(基础的样式，每个动画效果都需要加)

infinite : 动画的无限次数

引用写法：

1.本地连接：

```
<link rel="stylesheet" href="./css/animate.min.css">
```



2.连网连接

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
```



安装Animate.css之后，将该类animate__animated以及任何动画名称添加到元素中

不要忘记 animate__前缀！

代码示例：

```
<h1 class="animate__animated animate__bounce">An animated element</h1>
```

实例： [animate.html](2020Web HTML CSS\01-146 animate.css动画库\animate.html) 

详细指南可访问官方：https://animate.style/





## 01-147 3D基本语法及成像原理

**三维坐标**

<a href=".\2020Web HTML CSS\01-147 3D基本语法及成像原理\transform3d-01.png">如图所示</a>

向上为-Y，向下为+Y，向左为-X，向右为+X，向前为+Z，向后为-Z。



perspective : 离屏幕多远的距离去观察元素，值越大幅度越小，以像素计。



**3D操作**

rotateX() : 正值向上翻转

实例： [trnasform3D-rotateX.html](2020Web HTML CSS\01-147 3D基本语法及成像原理\trnasform3D-rotateX.html) 

在X轴上旋转



rotateY() : 正值向右翻转

实例： [trnasform3D-rotateY.html](2020Web HTML CSS\01-147 3D基本语法及成像原理\trnasform3D-rotateY.html) 

在y轴上旋转



translateZ() : 正值向前，负值向后

 [trnasform3D-translateZ.html](2020Web HTML CSS\01-147 3D基本语法及成像原理\trnasform3D-translateZ.html) 



backface-visibility : 背面隐藏

| 值      | 描述                    |
| ------- | ----------------------- |
| visible | 默认值。 背面是可见的。 |
| hidden  | 背面是不可见的。        |







## 01-148 实现3D立方体

transform-origin : x y z

```
 transform-origin: center center -50px;   （Z轴只能写数值，不能写单词）
```



transform-style : 3D空间
flat  (默认值2d)、preserve-3d   (3d，产生一个三维空间)

| 值          | 描述                       |
| ----------- | -------------------------- |
| flat        | 子元素将不保留其 3D 位置。 |
| preserve-3d | 子元素将保留其 3D 位置。   |





```
        .box ul li:nth-child(1){ background: tomato; left: 0; top: 0;}
        /* 原地不动 */

        .box ul li:nth-child(2){ background: brown; left: 100px; top: 0; 
        transform-origin: left; transform: rotateY(90deg);}
        /* 向右平移100px，transform-origin以第2块的左边线作为轴，然后向右翻转90度 */

        .box ul li:nth-child(3){ background: lightseagreen; left: -100px; top: 0;
        transform-origin: right; transform: rotateY(-90deg);}
        /* 向左平移100px，transform-origin以第3块的右边线作为轴，然后向左翻转90度 */
        
        .box ul li:nth-child(4){ background: seagreen; left: 0; top: -100px;
        transform-origin: bottom; transform: rotateX(90deg);}
        /* 向上平移100px,transform-origin以第4块的底线作为轴，向上翻转90度 */

        .box ul li:nth-child(5){ background: lightskyblue; left: 0; top: 100px;
        transform-origin: top; transform: rotateX(-90deg);}
        /* 向下平移100px,transform-origin以第4块的底线作为轴，向上翻转90度 */

        .box ul li:nth-child(6){ background: tomato; left: 0; top: 0;
        transform: translateZ(-100px) rotateY(180deg);
        /* 向后100px,然后中心点翻转180度 */
        }
        
        
    <div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    </div>
```

鼠标移入.box试效果

实例： [trnasform3D-scaleZ.html](2020Web HTML CSS\01-148 实现3D立方体\trnasform3D-scaleZ.html) 

练习： [test.html](2020Web HTML CSS\01-148 实现3D立方体\test.html) 



## 01-149 3D相关语法及扩展学习

perspective-origin : 景深-基点位置，观察元素的角度。

```
perspective-origin: left; 
/* 在左边看 */
```

或者

```
perspective-origin: bottom right;
/* 在右下角往里面看 */
```

```
perspective-origin: x-axis y-axis;
```

| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| *x-axis* | 定义该视图在 x 轴上的位置。默认值：50%。可能的值：left center right length **% |
| *y-axis* | 定义该视图在 y 轴上的位置。默认值：50%。可能的值：top center bottom length **% |

实例： [perspective-origin.html](2020Web HTML CSS\01-149 3D相关语法及扩展学习\perspective-origin.html) 



scaleZ() : 立体元素的厚度

实例： [scaleZ.html](2020Web HTML CSS\01-149 3D相关语法及扩展学习\scaleZ.html) 



**3D写法**
scale3d() : 三个值 x y z
translate3d() : 三个值 x y z
rotate3d() : 四个值 0|1(x轴是否添加旋转角度)  0|1(y轴是否添加旋转角度)  0|1(z轴是否添加旋转角度)  deg；0为否，1为是。

```
opacity: .5;
/* 采用透明度可看角度 */
```

实例： [3D写法.html](2020Web HTML CSS\01-149 3D相关语法及扩展学习\3D写法.html) 



backface-visibility : 背面隐藏

| 值      | 描述                    |
| ------- | ----------------------- |
| visible | 默认值。 背面是可见的。 |
| hidden  | 背面是不可见的。        |

上面有个html 3D写法.html设置了透明，导致可看到背面

实例： [backface-visibility.html](2020Web HTML CSS\01-149 3D相关语法及扩展学习\backface-visibility.html) 



### transform总结

| 值                                                           | 描述                                    |      |
| ------------------------------------------------------------ | --------------------------------------- | ---- |
| none                                                         | 定义不进行转换。                        |      |
| matrix(*n*,*n*,*n*,*n*,*n*,*n*)                              | 定义 2D 转换，使用六个值的矩阵。        |      |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |      |
| translate(*x*,*y*)                                           | 定义 2D 转换。                          |      |
| translate3d(*x*,*y*,*z*)                                     | 定义 3D 转换。                          |      |
| translateX(*x*)                                              | 定义转换，只是用 X 轴的值。             |      |
| translateY(*y*)                                              | 定义转换，只是用 Y 轴的值。             |      |
| translateZ(*z*)                                              | 定义 3D 转换，只是用 Z 轴的值。         |      |
| scale(*x*[,*y*]?)                                            | 定义 2D 缩放转换。                      |      |
| scale3d(*x*,*y*,*z*)                                         | 定义 3D 缩放转换。                      |      |
| scaleX(*x*)                                                  | 通过设置 X 轴的值来定义缩放转换。       |      |
| scaleY(*y*)                                                  | 通过设置 Y 轴的值来定义缩放转换。       |      |
| scaleZ(*z*)                                                  | 通过设置 Z 轴的值来定义 3D 缩放转换。   |      |
| rotate(*angle*)                                              | 定义 2D 旋转，在参数中规定角度。        |      |
| rotate3d(*x*,*y*,*z*,*angle*)                                | 定义 3D 旋转。                          |      |
| rotateX(*angle*)                                             | 定义沿着 X 轴的 3D 旋转。               |      |
| rotateY(*angle*)                                             | 定义沿着 Y 轴的 3D 旋转。               |      |
| rotateZ(*angle*)                                             | 定义沿着 Z 轴的 3D 旋转。               |      |
| skew(*x-angle*,*y-angle*)                                    | 定义沿着 X 和 Y 轴的 2D 倾斜转换。      |      |
| skewX(*angle*)                                               | 定义沿着 X 轴的 2D 倾斜转换。           |      |
| skewY(*angle*)                                               | 定义沿着 Y 轴的 2D 倾斜转换。           |      |
| perspective(*n*)                                             | 为 3D 转换元素定义透视视图。            |      |

angle为角度，单位为deg

参考链接：https://www.w3cschool.cn/cssref/pr-transform.html



练习

四棱锥： [四棱锥quadrangular pyramid-test.html](2020Web HTML CSS\01-149 3D相关语法及扩展学习\四棱锥quadrangular pyramid-test.html) 

3D轮播图： [slicebox-3dImageSlider.html](2020Web HTML CSS\01-149 3D相关语法及扩展学习\slicebox-3dImageSlider.html) 



## 01-150 3D效果之旋转木马

参考： [16_3D旋转木马效果.html](2020Web HTML CSS\01-150 3D效果之旋转木马\16_3D旋转木马效果.html) 

方法：transform-style  transform-origin

练习： [3Dcarousel.html](2020Web HTML CSS\01-150 3D效果之旋转木马\3Dcarousel.html) 



## 01-151 3D效果之翻转图片

参考： [17_3D图片翻转效果.html](2020Web HTML CSS\01-151 3D效果之翻转图片\17_3D图片翻转效果.html) 

方法：正反面两张图都上transform，鼠标移入时:hover都设两张图

练习： [test01-151.html](2020Web HTML CSS\01-151 3D效果之翻转图片\test01-151.html) 

错误示范： [test01-151错误示范.html](2020Web HTML CSS\01-151 3D效果之翻转图片\test01-151错误示范.html) 鼠标移入时有稍微翻转不平滑



翻书效果： [翻书.html](2020Web HTML CSS\01-151 3D效果之翻转图片\翻书.html) 

上面采用animation动画

自己练习： [test翻书.html](2020Web HTML CSS\01-151 3D效果之翻转图片\test翻书.html)  非动画



## 01-152 背景尺寸 位置 裁切等

backgrouns-size:背景图的尺寸大小

| 值         | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| length     | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)" |
| percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)" |
| cover      | 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 |
| contain    | 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。 |

实例： [background-size.html](2020Web HTML CSS\01-152 背景尺寸 位置 裁切等\background-size.html) 



background-origin : 背景图的填充位置

**注意**:如果背景图像background-attachment是"固定"(flex)，这个属性没有任何效果。

| 值          | 描述                          |
| ----------- | ----------------------------- |
| padding-box | 背景图像填充框的相对位置 默认 |
| border-box  | 背景图像边界框的相对位置      |
| content-box | 背景图像的相对位置的内容框    |

实例： [background-origin.html](2020Web HTML CSS\01-152 背景尺寸 位置 裁切等\background-origin.html) 



background-clip属性指定背景绘制区域。

| 值          | 说明                                             |
| ----------- | ------------------------------------------------ |
| border-box  | 默认值。背景绘制在边框方框内（剪切成边框方框）。 |
| padding-box | 背景绘制在衬距方框内（剪切成衬距方框）。         |
| content-box | 背景绘制在内容方框内（剪切成内容方框）。         |

实例： [background-clip.html](2020Web HTML CSS\01-152 背景尺寸 位置 裁切等\background-clip.html) 



缩写法

```
background:url() contgent-box padding-box
```

**注**：复合样式的时候，第一个是位置，第二个是裁切





## 01-153 线性渐变与径向渐变

CSS3 线性渐变 linear-gradient

创建一个线性渐变，必须至少定义两种颜色结点。颜色结点即您想要呈现平稳过渡的颜色。同时，也可以设置一个起点和一个方向（或一个角度）。

 linear-gradient是值，需要添加到background-image属性上

**语法**：

```
background: linear-gradient(direction, color-stop1,  color-stop2, ...);
```



direction为方向，默认是从上到下

```
        .box1{
            background-image: linear-gradient(tomato,lightskyblue);
            /* 默认从上到下 */
        }
        .box2{
            background-image: linear-gradient(tomato,lightskyblue,lightseagreen);
            /* 三种颜色  */
        }
        .box3{
            background-image: linear-gradient(to top, tomato,lightskyblue);
            /* 从下到上 */
        }
```

实例： [linear-gradient.html](2020Web HTML CSS\01-153 线性渐变与径向渐变\linear-gradient.html) 



对角angle

**注**：渐变的0度是在页面在下边，正值会按照顺时针旋转，负值按逆时针旋转。

```
background-image: linear-gradient(45deg, tomato,lightskyblue);
```

实例： [linear-gradient-angle.html](2020Web HTML CSS\01-153 线性渐变与径向渐变\linear-gradient-angle.html) 

<a href=".\2020Web HTML CSS\01-153 线性渐变与径向渐变\01-153-01.png">度数图示</a>



百分比percentage

在范围内多少百分比为中心轴

<a href=".\2020Web HTML CSS\01-153 线性渐变与径向渐变\01-153-02.png">百分比图示</a>

```
background-image: linear-gradient(tomato 15%,lightskyblue 35%);
```

```
background-image: linear-gradient(45deg, tomato 20%,lightskyblue 40%);
```

如果设两种颜色且各50%，无出现渐变效果

实例： [linear-gradient-percentage.html](2020Web HTML CSS\01-153 线性渐变与径向渐变\linear-gradient-percentage.html) 



CSS3渐变可以支持透明度 Transparency

```
background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
```

实例： [linear-gradient-transparency.html](2020Web HTML CSS\01-153 线性渐变与径向渐变\linear-gradient-transparency.html) 



重复的线性渐变

repeating-linear-gradient() 函数用于重复线性渐变：

```
background-image: repeating-linear-gradient(tomato,lightskyblue 10%,lightseagreen 10%);
```

实例： [repeating-linear-gradient.html](2020Web HTML CSS\01-153 线性渐变与径向渐变\repeating-linear-gradient.html) 







CSS3 径向渐变 radial-gradient 

**语法**：

```
background: radial-gradient(center, shape size, start-color, ..., last-color);   
```

百分比值方法同上面的线性渐变一样

重复的方法同上面的一样



设置形状

shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。



不同尺寸大小关键字的使用

size 参数定义了渐变的大小。它可以是以下四个值：
closest-side
farthest-side
closest-corner
farthest-corner

具体的网上查：https://www.w3cschool.cn/css3/oj26bfli.html



径向渐变实例： [radial-gradient.html](2020Web HTML CSS\01-153 线性渐变与径向渐变\radial-gradient.html) 





## 01-154 渐变的加载进度条

参考： [20_渐变的进度条.html](2020Web HTML CSS\01-154 渐变的加载进度条\20_渐变的进度条.html) 

方法：

1.45度或to right top

2.红25蓝25 蓝50红50 红75蓝75

3.background-size1个数值为width的十分之一

4.动画名 持续时间 重复次数 运动形式

练习：

 [text.html](2020Web HTML CSS\01-154 渐变的加载进度条\text.html) 

 [发廊.html](2020Web HTML CSS\01-154 渐变的加载进度条\发廊.html) 白蓝红比例为2:1:1 采用animation方法



鼠标划过渐变光斑

参考： [一道光.html](2020Web HTML CSS\01-154 渐变的加载进度条\一道光.html) 

方法：

父元素设overflow:hidden，两个子元素，一个图片，另一个一道光；

一道光-60度，渐变采用rgba；

练习： [test1.html](2020Web HTML CSS\01-154 渐变的加载进度条\test1.html) 





## 01-155 @font-face字体图标

font-face是CSS3中的一个模块，他主要是把自己定义的Web字体嵌入到你的网页中。

**好处**：
1.可以非常方便的改变大小和颜色
2.放大后不会失真
3.减少请求次数和提高加载速度
4.简化网页布局
5.减少设计师和前端工程师的工作量
6.可使用计算机没有提供的字体



例：www.taobao.com

右键 购物车 检查 查控制台

<a href=".\2020Web HTML CSS\01-155 @font-face字体图标\01-155-01.png">淘宝网的购物车默认大小</a>

<a href=".\2020Web HTML CSS\01-155 @font-face字体图标\01-155-02.png">淘宝网的购物车默认大小 控制台数值</a>



添加字体大小：

<a href=".\2020Web HTML CSS\01-155 @font-face字体图标\01-155-03.png">添加修改大小</a>

<a href=".\2020Web HTML CSS\01-155 @font-face字体图标\01-155-04.png">不止字体，连购物车图标大小也变化</a>

颜色也可以变化



使用：@font-face语法

```
<style>
        @font-face{
            font-family:iconfont;
            src:url(//at.alicdn.com/t/font_403341_n8tj33yn5peng66r.eot);
            src:url(//at.alicdn.com/t/font_403341_n8tj33yn5peng66r.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_403341_n8tj33yn5peng66r.woff) format('woff'),url(//at.alicdn.com/t/font_403341_n8tj33yn5peng66r.ttf) format('truetype'),url(//at.alicdn.com/t/font_403341_n8tj33yn5peng66r.svg#iconfont) format('svg')
        }
</style>
```

像.woff等文件都是做兼容平台处理的, mac、linux等。



代码示例：

```
    <style>
        @font-face{
            font-family:hello;
            src:url(https://at.alicdn.com/t/font_1401963178_8135476.eot);
            src:url(https://at.alicdn.com/t/font_1401963178_8135476.eot?#iefix) format('embedded-opentype'),
            url(https://at.alicdn.com/t/font_1401963178_8135476.woff) format('woff'),
            url(https://at.alicdn.com/t/font_1401963178_8135476.ttf) format('truetype'),
            url(https://at.alicdn.com/t/font_1401963178_8135476.svg#iconfont) format('svg')
        }
        div{
            font-family: hello;
        }
        span{
            font-family: hello;
            font-size: 30px;
            color: tomato;
        }
        .gouwuche::after{
            content: "󰅈";
            color: lightseagreen;
        }
    </style>
```

󰅈在hello字体里是购物车的图标

能改变颜色大小等，伪类:before或:after等的content: "󰅈";也有效

实例： [@font-face 字体图标.html](2020Web HTML CSS\01-155 @font-face字体图标\@font-face 字体图标.html) 











## 01-156 iconfont矢量图标库

阿里巴巴矢量图标库：
https://www.iconfont.cn : 提供了大量免费的字体图标。

从阿里巴巴矢量图标库随便挑下载后解压<a href=".\2020Web HTML CSS\01-156 iconfont矢量图标库\download.zip">安装包</a>

解压后里面有html文件，打开可看说明。选后缀名为css、eot、svg、ttf、woff、woff2、js几个文件放到css文件夹里。具体说明可查看已下载的说明html文件

可调大小，用font-size

  [demo_index.html](2020Web HTML CSS\01-156 iconfont矢量图标库\下载来的iconfont\demo_index.html) 



实例：

 [iconfont单色.html](2020Web HTML CSS\01-156 iconfont矢量图标库\iconfont单色.html) 

 [iconfont多色.html](2020Web HTML CSS\01-156 iconfont矢量图标库\iconfont多色.html) 单色的调大小在css里，多色的在<style>...</style>里设数值



## 01-157 自定义字体图标

自定义字体图标
https://icomoon.io/app : 在线生成字体图标。

按下左上角的【Import Icons】按钮，选择SVG文件上传，然后在右下区域，里面设置一下，然后按下【Download】按钮下载并解压；

选择fonts文件夹和style.css放到css文件夹里，在html文件里引入，然后弄代码

```
<div class="icon-yuan"></div>
```

style.css里添加font-size调大小和调色

实例： [iconfont.html](2020Web HTML CSS\01-157 自定义字体图标\iconfont.html) 



参考网上各大网站，切换移动端里面有不少采用iconfont图标





## 01-158 text-shadow文字阴影

**语法**

```
text-shadow: h-shadow v-shadow blur color;
```

blur为可选，color也可选

代码示例：

```
    <style>
        .text1{
            font-size: 50px;
            color: tomato;
            text-shadow: 10px 10px 10px brown;
        }
    </style>
</head>
<body>
    <div class="text1">Hello CSS3</div>
</body>
```

多阴影

```
text-shadow: 10px 10px 10px seagreen,-10px -10px 10px gray;
```

示例：  [test-shadow01.html](2020Web HTML CSS\01-158 text-shadow文字阴影\test-shadow01.html) 



## 01-159 box-shadow盒子阴影

向框添加一个或多个阴影。

**语法**

```
box-shadow: h-shadow v-shadow blur spread color inset;
```

| 值         | 描述                                     | 测试                                                         |
| ---------- | ---------------------------------------- | ------------------------------------------------------------ |
| *h-shadow* | 必需。水平阴影的位置。允许负值。         | [测试](https://www.w3cschool.cn/statics/demosource/css-box-shadow.html) |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。         | [测试](https://www.w3cschool.cn/statics/demosource/css-box-shadow.html) |
| *blur*     | 可选。模糊距离。                         | [测试](https://www.w3cschool.cn/statics/demosource/css-box-shadow.html) |
| *spread*   | 可选。阴影的尺寸。                       | [测试](https://www.w3cschool.cn/statics/demosource/css-box-shadow.html) |
| *color*    | 可选。阴影的颜色。请参阅 CSS 颜色值。    | [测试](https://www.w3cschool.cn/statics/demosource/css-box-shadow.html) |
| inset      | 可选。将外部阴影 (outset) 改为内部阴影。 | [测试](https://www.w3cschool.cn/statics/demosource/css-box-shadow.html) |

可多阴影

inset外部阴影改为内部阴影

outset取消阴影

**注**：盒子阴影的默认样色是黑色。
**注**：默认就是外阴影，如果设置outset不起作用，可选的值只有inset表示内阴影。

代码示例：

```
        .box3{
            width: 300px;
            height: 200px;
            background: lightseagreen;
            margin: 20px;
            box-shadow: 10px 10px 10px 20px seagreen;
        }
```

实例： [box-shadow01.html](2020Web HTML CSS\01-159 box-shadow盒子阴影\box-shadow01.html) 





## 01-160 小米官网盒子阴影效果

参考： [03_小米官网浮动效果.html](2020Web HTML CSS\01-160 小米官网盒子阴影效果\03_小米官网浮动效果.html) 

方法：

cursor、position:relative、top、transition持续时间、:hover{-3px;设阴影数值}

练习： [testMI.html](2020Web HTML CSS\01-160 小米官网盒子阴影效果\testMI.html) 





## 01-161 mask遮罩效果

url repeat x y w h 多遮罩

参考：https://www.17sucai.com/pins/demo-show?id=29701

代码示例：

```
    <style>
        .box1{
            width: 300px;
            height: 300px;
            border: 1px solid black;
            background: url(./img/girl.jpg);
            -webkit-mask: url(./img/love.png) no-repeat 100px 100px / 100px 100px;
            transition: 2s;
        }
    </style>
```

或

```
-webkit-mask: url(./img/car.png) no-repeat center center / 200px 200px;
```

**注**：mask还没标准化，所以还要添加浏览器前缀

直接打开html无效果，从VSCODE用Open In Deaufult Browser打开也无效果；

只能从VSCODE用Open with Live Server打开才有效果，如图<a href=".\2020Web HTML CSS\01-161 mask遮罩效果\01-161-01.png">效果图</a>

**注**：默认是x、y都平铺。

实例：

 [mask.html](2020Web HTML CSS\01-161 mask遮罩效果\mask.html) 

 [mask01.html](2020Web HTML CSS\01-161 mask遮罩效果\mask01.html) 





## 01-162 box-reflect倒影与scale负值

box-reflect倒影

**语法**

box-reflect：none |  direction   offset  mask-box-image

**取值**

none:无倒影



*direction*

above：指定倒影在对象的上边
below：指定倒影在对象的下边
left：指定倒影在对象的左边
right：指定倒影在对象的右边



*offset*

length：用长度值来定义倒影与对象之间的间隔。可以为负值
percentage：用百分比来定义倒影与对象之间的间隔。可以为负值



*mask-box-image*

none：无遮罩图像
url：使用绝对或相对地址指定遮罩图像。
linear-gradient：使用线性渐变创建遮罩图像。
radial-gradient：使用径向(放射性)渐变创建遮罩图像。
repeating-linear-gradient：使用重复的线性渐变创建背遮罩像。
repeating-radial-gradient：使用重复的径向(放射性)渐变创建遮罩图像。

**注**：渐变不支持颜色渐变，只对透明度渐变



代码示例：

```
        .box4{
            width: 300px;
            height: 300px;
            margin-left: 100px;
            background: url(./img/girl.jpg);
            -webkit-box-reflect: 
            right 10px 
            linear-gradient(to right ,rgba(255,255,255,0) 50%,rgba(255,255,255,1))
        }
```



扩展：利用scale为-1实现翻转。



实例： [box-reflect01.html](2020Web HTML CSS\01-162 box-reflect倒影与scale负值\box-reflect01.html) 





## 01-163 blur模糊与calc计算

filter : blur() 模糊程度

代码示例：

```
        .box1{
            width: 400px;
            height: 225px;
            background: url(./img/mhw-little01.png) no-repeat;
            filter: blur(2px);
        }
```

实例：  [filter blur().html](2020Web HTML CSS\01-163 blur模糊与calc计算\filter blur().html) 



calc四则运算

代码示例：

```
 width: calc(100% + 100px);
```

实例： [calc.html](2020Web HTML CSS\01-163 blur模糊与calc计算\calc.html) 



## 01-164 column分栏布局

column-count : 分栏的个数
column-width : 分栏的宽度 
column-gap : 分栏的间距
column-rule : 分栏的边线
column-span : 合并分栏

**注**：column-width和column-count不要一起去设置。

代码示例：

```
        .box4{
            width: 600px;
            height: 400px;
            border: 2px solid gray;
            margin: 20px auto;
            column-width: 100px;
            column-gap: 40px;
            column-rule:2px brown dashed;
        }
        .box4 h2{column-span: all;text-align: center;}
```

实例： [column.html](2020Web HTML CSS\01-164 column分栏布局\column.html) 



## 01-165 伪元素概念与意义

伪类与伪元素

在CSS2.1中对伪类和伪元素的区别比较模糊。CSS3中对这两个概念做了相对较清晰地解释，并且在语法上也做了很明显的区分。
CSS3中规定伪类由一个冒号开始，然后为伪类的名称；伪元素由两个冒泡开始，然后为伪元素的名称。



伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息。通常表示获取不存在与DOM树中的信息，或获取不能被常规CSS选择器获取的信息。

 : hover
 : focus
 : empty
…



伪元素本质上是创建了一个有内容的虚拟容器。这个容器不包含任何DOM元素，但是可以包含内容。另外，开发者还可以为伪元素定制样式。

:: selection
:: first-line   /    first-letter
:: before     /     after 
…

实例： [column.html](2020Web HTML CSS\01-164 column分栏布局\column.html) 



## 01-166 hack概念与CSS属性前缀法

CSS Hack用来解决浏览器的兼容性问题，为不同版本的浏览器定制编写不同的CSS效果，使用每个浏览器单独识别的样式代码，控制浏览器的显示样式。

Hack分类

1.CSS属性前缀法

| **前缀标识** | **兼容浏览器**       |
| ------------ | -------------------- |
| **_**        | IE6                  |
| +、*         | IE6、IE7             |
| \9           | IE6、IE7、IE8、IE9   |
| \0           | IE8、IE9、IE10、IE11 |

代码示例：

```
    <style>
        .box{
            width: 200px;height: 200px;
            background: tomato;    
            /* IE6 */
            _background:skyblue;
            /* IE6 7 */
            /* +background: skyblue; */
            /* IE6~9 */
            /* background:skyblue\9; */
            /* IE8~11 */
            /* background:skyblue\0; */
        }
    </style>
```

用chrome打开则是红块，如果用IE6打开则是蓝块



3.IE条件注释法



## 01-167 选择器前缀法与IE条件注释法

选择器前缀法是针对一些页面表现不一致或者需要特殊对待的浏览器，在CSS选择器前加上一些只有某些特定浏览器才能识别的前缀进行hack。

2.选择器前缀法

| **前缀标识** | **兼容浏览器**      |
| ------------ | ------------------- |
| *html        | IE6                 |
| *+html       | IE7                 |
| :root        | IE9以上及现代浏览器 |

代码示例：

```
*html div{...}
```

```
*+html div{...}
```

```
:root div{...}
```



实例： [hack02.html](2020Web HTML CSS\01-167 选择器前缀法与IE条件注释法\hack02.html) 用IE打开则是红块 其他就是蓝块





3.IE条件注释法

这种方式是IE浏览器专有的Hack方式，微软官方推荐使用的hack方式。

| **前缀标识**                    | **兼容浏览器** |
| ------------------------------- | -------------- |
| <!--[if IE]>…<![endif]-->       | IE             |
| <!--[if IE 7]>…<![endif]-->     | IE7            |
| <!--[if lte IE 7]>…<![endif]--> | IE7以下        |
| <!--[if ! IE 7]>…<![endif]-->   | 非IE7          |

IE10以上已经不支持注释法

代码示例：

```
<body>
    <!--[if IE]>
    <div class="box">用IE打开就能显示出来，但是IE10以上不支持</div>
    <![endif]-->
</body>
```

实例： [hack03.html](2020Web HTML CSS\01-167 选择器前缀法与IE条件注释法\hack03.html) 



## 01-168 IE低版本常见BUG

由于旧浏览器在设计上有很多缺陷，导致一些BUG的产生，所以针对这些问题需要做出兼容处理。

常见兼容问题

1. 透明度
2. 双边距
3. 最小高度
4. 图片边框

具体的网上搜索

实例： [10_IE常见BUG.html](2020Web HTML CSS\01-168 IE低版本常见BUG\10_IE常见BUG.html) 里面注释有具体说明



## 01-169 渐进增强与优雅降级

渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

例如：IE6 7->IE11->CHROME->...



优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。





## 01-170 布局扩展之等高布局

利用margin-bottom负值与padding-bottom配合实现。

有float浮动并用overflow:hidden解决高度塌陷问题

 [等高布局.html](2020Web HTML CSS\01-170 布局扩展之等高布局\等高布局.html) 



无浮动情况下，把第一个块设margin-bottom为负值，无设高度的父元素会纵向缩小。

 [等高布局01.html](2020Web HTML CSS\01-170 布局扩展之等高布局\等高布局01.html) 



根据上面文件的代码，负值改成很大很大的数值

 [等高布局02.html](2020Web HTML CSS\01-170 布局扩展之等高布局\等高布局02.html) 



父元素添加overflow:hidden，子元素设floa并输入内容，所以父元素高度按内容决定

 [等高布局03.html](2020Web HTML CSS\01-170 布局扩展之等高布局\等高布局03.html) 





## 01-171 布局扩展之双飞翼布局

三列布局，左右固定，中间自适应

左100px 中自适应 右150px

参考： [12_双飞翼布局.html](2020Web HTML CSS\01-171 布局扩展之双飞翼布局\12_双飞翼布局.html) 

左中右的父元素设width:100%

块元素顺序：center left right且都有设高度数值

CSS设置：

center:  width:100% ,float:left

left:  width:100px, float:left ,margin-left:100%，因为100%才能移到左侧

right:  width:150px, float:left,  margin-left:-150px，因为-150px就是向左位移150px从而自动往上一行

center的内容问题用margin:0px 150px 0px 100px解决

实例： [双飞翼布局.html](2020Web HTML CSS\01-171 布局扩展之双飞翼布局\双飞翼布局.html) 



上面的代码挺麻烦，采用calc方法解决

块元素顺序为left center right且都设高度和float:left

left固定宽度100px

center用calc方法即width:calc(100% - 100px - 150px)

right固定宽度150px

 [test双飞翼布局.html](2020Web HTML CSS\01-171 布局扩展之双飞翼布局\test双飞翼布局.html) 



1.BFC方式 

2.定位

3.浮动 ( 双飞翼布局、圣杯布局 )
   margin负值

4.flex弹性





## 01-172 布局扩展之圣杯布局

参考： [13_圣杯布局.html](2020Web HTML CSS\01-172 布局扩展之圣杯布局\13_圣杯布局.html) 

左100px 中自适应 右150px

块元素顺序：center, left, right

3个左中右子元素的父元素设background颜色,margin 0 150px 0 100px并需要after伪类清浮动

左中右子元素均设高度200px

center:  width:100%, float:left

left: width:100px, float:left, position:relative, margin-left:100%, left-100px

right: width:150px, float:left, position:relative, margin-left:-150px, right:-150px

实例： [圣杯布局.html](2020Web HTML CSS\01-172 布局扩展之圣杯布局\圣杯布局.html) 





## 01-173-183 PC端管理后台整页制作

参考： [index.html](2020Web HTML CSS\01-173-183 PC端管理后台整页制作\正达管理后台首页\index.html)  [正达建筑内部管理平台_资料管理.psd](2020Web HTML CSS\01-173-183 PC端管理后台整页制作\正达建筑内部管理平台_资料管理.psd) 

方法：

左侧栏aside高度自适应布局:html body{height:100%;}

去掉浏览器右侧的滚动条:html,body{height:100%; overflow-y:hidden;}



或者不用overflow-y:hidden的方法

则aside设height:calc(100% - 85px);85px为header的高度。



注意main布局是否与aside重合在一起，解决方法给main添加overflow:hidden。



main_container添加overflow:auto即可有滚动条而不影响整体布局。



批量上传：

```
<input type="file" multiple>
```



搜索框：

父元素设边框，子元素input去掉边框 border:none，用text-indent把搜索文字往右移多少位移。

去掉默认的搜索框outline: none;



表格添加单线：

table添加border-collapse:collapse;然后在tr里添加border-bottom



**注**：源码的zl_footer的margin测量有误

练习： [index.html](2020Web HTML CSS\01-173-183 PC端管理后台整页制作\index.html) 