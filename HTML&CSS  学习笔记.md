**HTML CSS系列教程**



# 01-001 导学

视频教程：https://www.bilibili.com/video/BV1r64y1T7J8?p=35

本教程专门针对编程小白而制作，是学习HTML+CSS很好的入门教程。学完后能写出你看到的静态页面。
知识点涵盖：
·HTML入门、文本、图像、链接、表格、列表、表单、盒模型等基础知识。
·CSS基础语法、文本属性、段落属性、背景属性、布局、选择器、浮动与定位、CSS浏览器兼容性、动画、过渡、2D/3D、CSS优化等知识点。

前端相关工具：
链接：https://pan.baidu.com/s/18aQHhxtAEEkkIS4gF_TWIw 
提取码：qnvx 
复制这段内容后打开百度网盘手机App，操作更方便哦



**1.HTML+CSS系列教程①之拨云见日**

HTML CSS 切图流程 PC企业站布局 PC游戏站布局



**2.HTML+CSS系列教程②之溯本求源**

扩展HTML 扩展CSS HTML5新语法 CSS3新语法 兼容与hack



**3.HTML+CSS系列教程③之风生水起**

弹性布局 风格布局 移动端布局 响应式布局 Bootstrap



**4.HTML+CSS系列教程④之巧夺天工**

预编译CSS postcss CSS架构 高级功能 CSS与JS交互





# 1.HTML+CSS系列教程①之拨云见日

HTML CSS 切图流程 PC企业站布局 PC游戏站布局



## 01-002 什么是HTML和CSS

**HTML 是用来描述网页的一种语言。**

- HTML 指的是超文本标记语言 (**H**yper **T**ext **M**arkup **L**anguage)
- HTML 不是一种编程语言，而是一种**标记语言** (markup language)
- 标记语言是一套**标记标签** (markup tag)
- HTML 使用**标记标签**来描述网页

**CSS 概述**

- CSS 指层叠样式表 (*C*ascading *S*tyle *S*heets)
- 样式定义**如何显示** HTML 元素
- 样式通常存储在**样式表**中
- 把样式添加到 HTML 4.0 中，是为了**解决内容与表现分离的问题**
- **外部样式表**可以极大提高工作效率
- 外部样式表通常存储在 **CSS 文件**中
- 多个样式定义可**层叠**为一

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    hello world
</body>
</html>
```

**运行结果**：
hello world

 [index.html](2020Web HTML CSS\01-002 什么是 HTML和 CSS\index.html) 





## 01-003 宇宙第一编辑器 VS Code

全称Visual Studio Code，来自微软， 一个开源的、基于Electron的轻量代码编辑器。

学习编辑器基本使用？

设置：文件-> 首选项 -> 设置  ( 大小、是否换行 word wrap )
创建文件、创建文件夹、重命名和删除、搜索
ctrl + s : 保存
ctrl + a : 全选
ctrl + x、ctrl + c、ctrl + v : 剪切、复制、粘贴
ctrl + z、ctrl + y : 撤销、前进
shift + end : 从头选中一行
shift + home : 从尾部选中一行
shift + alt + ↓ : 快速复制一行
alt + ↑或↓ : 快速移动一行
tab : 向后缩进
tab + shift : 向前缩进
多光标 : alt + 鼠标左键
ctrl + d : 选则相同元素的下一个

操作练习： [index.html](2020Web HTML CSS\01-003 宇宙第一编辑器 VS Code\index.html) 



## 01-004 Chrome浏览器

谷歌浏览器(Google Chrome)是一款可让您更快速、轻松且安全地使用网络的浏览器。

查看统计份额：https://tongji.baidu.com/research/site

五大浏览器：IE, Opera, Safari, Firefox, Chrome

IE:Trident

Opera:最初是自己的Presto内核，后来是Webkit，现在是Blink内核

Safari:Webkit内核

Firefox:Gecko

Chrome:以前是Webkit内核，现在是Blink内核；也称为Chromium



## 01-005 深入了解网站开发

UI设计师 : 设计稿
web前端开发工程师(H5开发)
设计稿 -> 代码
数据库里的数据 -> 显示到页面
HTML + CSS
HTML : 结构
CSS : 样式



## 01-006 web前端三大核心技术

HTML：结构

CSS：样式

JavaScript：行为

```
<style>
    div{
        color: red;
        font-style: italic;
    }
</style>
<div>HTML+CSS系列教程</div>

<script>
    let div = document.querySelector('div');
    let timer = null;
    let flag = true;
    div.onmouseover = function(){
        timer = setInterval(() => {
            if(flag){
                div.style.color = 'blue';
                div.style.fontStyle = 'normal';
            }else{
                div.style.color = 'red';
                div.style.fontStyle = 'italic';
            }
            flag = !flag;
        }, 100);
    };
    div.onmouseout = function(){
        clearInterval(timer);
    };
</script>
```

鼠标移入HTML+CSS一行会有动画重复次数的竖斜和变色效果

**运行结果**： [index.html](2020Web HTML CSS\01-006 web前端三大核心技术\index.html) 



## 01-007 基本结构与属性

HTML ： 超文本 标记 语言

超文本 : 文本内容 + 非文本内容 ( 图片、视频、音频等 )

标记 : <单词>

语言 : 编程语言

标记也叫做标签：``<header>`` `` <footer>``

写法分成两种：

单标签   ``<header>``

双标签  `` <header></header>``

创建标签的快捷键：单词 + tab键 -> <单词>

标签是可以上下排列，也可以组合嵌套。

HTML常见标签：http://www.html5star.com/manual/html5label-meaning/

标签的属性：来修饰标签的，设置当前标签的一些功能。

<标签 属性="值" 属性2="值2">
```
<header title="hello">hello world
    <div>aaaa
        <div title="四个b">bbbb</div>
        <div>bbbb</div>
        <div>bbbb</div>
        <div>bbbb</div>
    </div>
    <div>aaaa</div>
    <div>aaaa</div>
    <div>aaaa</div>
</header>
<footer>hi HTML</footer>
```
**运行结果**： [index.html](2020Web HTML CSS\01-007 基本结构与属性\index.html) 



## 01-008 HTML初始代码

每个.html文件都有的代码叫做初始代码 ， 要复合html文件的规范写法。

! + tab键 : 快速的创建html的初始代码

``<!DOCTYPE html>``  文档声明 : 告诉浏览器这是一个html文件

``<html lang="en">`` html文件的最外层标签：包裹着所有html标签代码 lang="en"表示是一个英文网站, lang="zh-CN"表示一个中文网站

```
<head>
    <meta charset="UTF-8">  元信息：是编写网页中的一些辅助信息 charset="UTF-8"国际编码，让网页不出现乱码的情况
    <title>Document</title> 设置网页的标题
</head>
```

```
<body>
	hello world
	<!-- 显示网页内容的区域 -->
</body>
</html>
```

**运行结果**： [index.html](2020Web HTML CSS\01-008 HTML初始代码\index.html) 



## 01-009 HTML中的注释

写法：<!-- 注释的内容 -->  在浏览器中看不到，只能在代码中看到注释的内容。

意义：

1.把暂时不用的代码注释起来，方便以后使用。

2.对开发人员进行提示。



快捷添加注释与删除注释：

1.ctrl + /   整行注释

2.shift + alt + a  块注释



```
<body>
    <!-- hello world -->
    <div>abc</div>  6666
</body>
```

**运行结果**：[index.html](2020Web HTML CSS\01-009 HTML中的注释\index.html) 



## 01-010 HTML语义化

所谓HTML语义化指的是，根据网页中内容的结构，选择适合的HTML标签进行编写。	
好处：

1.在没有CSS的情况下，页面也能呈现出很好的内容结构。

2.有利于SEO，让搜索引擎爬虫更好的理解网页。

3.方便其他设备解析（如屏幕阅读器、盲人阅读器等）。

4.便于团队开发与维护。

http://h5o.github.io/



## 01-011 标题与段落

标题 -> 双标签 : <h1></h1>   ...  <h6></h6>

 在一个网页中，h1标题最重要，并且一个.html文件中只能出现一次h1标签。

h5、h6标签在网页中不经常使用。

段落 -> 双标签 : <p></p>

```
<body>
    <h1>标题</h1>
    <h2>标题</h2>
    <h3>标题</h3>
    <h4>标题</h4>
    <h5>标题</h5>
    <h6>标题</h6>
    <p>这是一个段落</p>
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-011 标题与段落\index.html) 



```
        <h1>Angelababy简介</h1>

        <h2>基本信息</h2>
        
        <p>杨颖（Angelababy），1989年2月28日出生于上海，13岁时移居香港，中国影视女演员。</p>
        
        <p>2009年主演电影《全城热恋》。2012年，凭借爱情片《第一次》获得第十三届华语电影传媒大奖“最受瞩目女演员奖”。2013年1月，《南都娱乐周刊》举办新生代四小花旦的评选活动，杨颖以总分70分的综合得分与刘诗诗、杨幂、倪妮共同当选为新一代“四小花旦”；同年在徐克导演的影片《狄仁杰之神都龙王》中担任女主角，并且获得第21届北京大学生电影节最受欢迎女演员奖；4月，Angelababy主演电视剧《大汉情缘之云中歌》。2014年加盟综艺节目《奔跑吧兄弟》并主演电影版；同年主演顾长卫导演的电影《微爱之渐入佳境》，票房突破2.8亿。2015年5月参演好莱坞电影《独立日2》；7月，主演电影《摆渡人》。</p>
        
        <h2>早年经历</h2>
        
        <p>1989年2月28日，Angelababy出生在上海，中文名杨颖。杨颖自小随家人到上海定居，在上海的演艺学校学演戏及跳舞。13岁时，杨颖回香港加入了Talent Bang，还担任Viva Club Disney主持。</p>
        
        <h2>个人生活</h2>
        
        <p>2015年5月27日，黄晓明和Angelababy（杨颖）在青岛民政局领证完婚。</p>
        
        <p>2015年10月8日，黄晓明和Angelababy在上海展览中心正式举办婚礼。上午8点，Angelababy工作室曝光了一两人的婚纱照，照片中，两人以巴黎地标建筑为背景，浪漫亲吻。</p>
```

**运行结果**：[01_标题与段落.html](2020Web HTML CSS\01-011 标题与段落\01_标题与段落.html) 



## 01-012 文件修饰标签

强调 -> 双标签 :

 ``<strong></strong>``

<strong>这是一段需要强调的文本</strong>

``<em></em>``

<em>这是一段需要强调的文本</em>

区别：

1.写法和展示效果是有区别的，一个加粗、一个斜体

2.strong的强调性更强，em的强调性稍弱。



上标 :`` <sup></sup>``

下标 : ``<sub></sub>``

```
a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>H<sub>2</sub>O
```

**运行结果**：

a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>H<sub>2</sub>O



删除文本 : ``<del></del>``

插入文本 :``<ins></ins>``

注：一般情况下，删除文本都是和插入文本配合使用的。

```
促销： 原价<del>300</del>,现价<ins>100</ins>。
```

**运行结果**：

促销： 原价<del>300</del>,现价<ins>100</ins>。



 [index.html](2020Web HTML CSS\01-012 文件修饰标签\index.html) 



## 01-013 图片标签与图片属性

img -> 单标签 
src : 引入图片的地址。
alt : 当图片出现问题的时候，可以显示一段友好的提示文字。
title : 提示信息
width、height : 图片的大小

```
<body>
    <p>第一个段落</p>
    <img src="img/088ef28c2a85f606a255d7969360c17d571c42ed.jpg" alt="风景" width="1000px" height="auto" title="风景">
    <p>第二个段落</p>
    <hr />

    <img src="img/088ef28c2a85f606a255d7969360c17d571c42.jpg" alt="白垩宫，位于普隆德拉水池右侧。（记者赛依连拍摄）">
</body>
```

**运行结果**：[index.html](2020Web HTML CSS\01-013 图片标签与图片属性\index.html) 



## 01-014 引入文件的地址路径

### 相对路径

. 在路径中表示当前路径
.. 在路径中表示上一级路径



### 绝对路径

E:/ke/qf_dl201901/20190108/img/animal/dog.jpg 	
http://cms-bucket.ws.126.net/2019/04/16/7a5b31e0ce5474a7515.jpeg		



尽量避免写反斜线 `"\"`

实例： [index.html](2020Web HTML CSS\01-014 引入文件的地址路径\index.html) 



## 01-015 跳转连接

a -> 双标签  `<a></a>` 

href属性 : 链接的地址
target属性 : 可以改变链接打开的方式，默认情况下：在当前页面打开 _self  新窗口打开 _blank

| 值      | 描述                       |
| :------ | :------------------------- |
| _blank  | 在新窗口中打开。           |
| _self   | 默认。在相同的框架中打开。 |
| _parent | 在父框架集中打开。         |
| _top    | 在整个窗口中打开。         |

base -> 单标签 ：作用就是改变链接的默认行为的。



```
    <a href="http://www.baidu.com">访问百度</a>
    <a href="http://www.taobao.com" target="_blank"><!--target="_blank"为新窗口打开-->
    <img src="./img/dog.jpg" alt="" >
    </a>
```

**运行结果**： [index.html](2020Web HTML CSS\01-015 跳转连接\index.html) 



还有其它实例：

base标签使用方法

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <base target="_blank"><!-- target="_blank"为新窗口打开 -->
</head>
<body>
    <a href="http://www.baidu.com">访问百度</a>
    <a href="http://www.baidu.com">访问百度</a>
    <a href="http://www.baidu.com">访问百度</a>
</body>
</html>
```

**运行结果**： [index2.html](2020Web HTML CSS\01-015 跳转连接\index2.html) 





练习： [test1.html](2020Web HTML CSS\01-015 跳转连接\test1.html) 

返回上一级：

``<a href="#" onclick="javascript:history.back(-1);">上一级</a>``

``<a href="#" onclick="javascript:history.go(-1);">上一级</a> ``



## 01-016 跳转锚点

两种做法

1.#号 + id属性

```
<a href="#html">HTML</a>
<a href="#css">CSS</a>
<a href="#javascript">JavaScript</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
.
.
.
<h2 id="html">HTML基础</h2><a href="#top">返回顶端</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
.
.
<h2 id="css">CSS层叠样式表</h2><a href="#top">返回顶端</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
.
.
<h2 id="javascript">JavaScript基础</h2><a href="#top">返回顶端</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
```

**运行结果**： [index.html](2020Web HTML CSS\01-016 跳转锚点\index.html) 





2.#号 + name属性（注意name属性加给的是a标签）

```
<a href="#html">HTML</a>
<a href="#css">CSS</a>
<a href="#javascript">JavaScript</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
.
.
.
<a name="html"></a>
<h2>HTML基础</h2><a href="#top">返回顶端</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
.
.
<a name="css"></a>
<h2>CSS层叠样式表</h2><a href="#top">返回顶端</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
.
.
<a name="javascript"></a>
<h2>JavaScript基础</h2><a href="#top">返回顶端</a>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>
<p>模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落模拟的段落</p>

```

**运行结果**： [index1.html](2020Web HTML CSS\01-016 跳转锚点\index1.html) 



## 01-017 特殊符号

编写一些文本时，经常会遇到输入法无法输入的字符，如®（注册商标）、©（版权符）等，还有往一段文字中加入多个空格时，页面并不会解析出多个空格。这些无法输入和空格字符都是特殊字符，在HTML中，为这些特殊字符准备了专门的代码。

| **特殊字符** | **含义** | **特殊字符代码** |
| ------------ | -------- | ---------------- |
|              | 空格符   | &nbsp；          |
| **©**        | 版权     | &copy;           |
| **®**        | 注册商标 | &reg；           |
| **<**        | 小于号   | &lt；            |
| **>**        | 大于号   | &gt;             |
| **&**        | 和号     | &amp；           |
| **¥**        | 人民币   | &yen;            |
| **°**        | 摄氏度   | &deg；           |



1.& + 字符

2.解决冲突啊 左右尖括号、添加多个空格的实现

3.``&lt; &gt; &nbsp;``

更多的内容参考网上。

实例： [index.html](2020Web HTML CSS\01-017 特殊符号\index.html) 



## 01-018 无序列表
``<ul>``、``<li>`` ：列表的最外层容器、列表项
注：ul和li必须是组合出现的，他们之间是不能有其他标签的
type属性 : 改变前面标记的样式( 一般都是用CSS去控制 )
（http://www.w3school.com.cn/tags/att_ul_type.asp）

| 值     | 描述             |
| :----- | :--------------- |
| disc   | 默认值。实心圆。 |
| circle | 空心圆。         |
| square | 实心方块。       |

```
<body>
    <!-- 正确写法 -->
    <ul type="circle">
        <li>第一项</li>
        <li>第二项</li>
        <li>第三项</li>
        <li>第四项</li>
        <li>第五项</li>
    </ul>

    <!-- 错误写法 -->
    <!-- <ul>
        <p>
            <li></li>
        </p>
    </ul> -->
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-018 无序列表\index.html) 



```
    <style>
        a{
            font-family: "微软雅黑";
            text-decoration: none;
            color: #3C3C3C;
        }
        a:hover{
            color: #FF5151;
            /* 鼠标划入时显示的效果 */
        }
        ul{
            color: #red;
            /* 圆心变为红色 */
        }
    </style>
    
    <body>
    <ul>
        <li><a href=""><strong>6月底前支付房租有压力 可申请多提一次住房公积金</strong></a></li>
        <li><a href="">2000元变10万元，这一步没做，企业遭“加码罚款”</a></li>
        <li><a href="">白云机场第二高速南段拟开始拆卸工程，2021年通车</a></li>
        <li><a href="">机构宣称提供代孕服务 卫生监督部门：公司已被查封</a></li>
        <li><a href="">多区取消小学新生面谈 家长再也不用担心“毛坯娃”</a></li>
    </ul>
</body>
```

**运行结果**： [test1.html](2020Web HTML CSS\01-018 无序列表\test1.html) 



## 01-019 有序列表

1. 无序列表 -> ul li 符合嵌套的规范
2. 有序列表 -> ol li 一般用的比较少，可以用无序列表来实现
3. 定义列表 -> dl dt dd 列表项需要添加标题和对标题进行描述的内容



``<ol>``、``<li>`` ：列表的最外层容器、列表项

注：有序列表用的非常少，经常用的是无序列表，无序列表可以去代替有序列表。

type属性 : 改变前面标记的样式( 一般都是用CSS去控制 )

（http://www.w3school.com.cn/tags/att_ol_type.asp）

| 值   | 描述                                           |
| :--- | :--------------------------------------------- |
| 1    | 默认值。数字有序列表。（1、2、3、4）           |
| a    | 按字母顺序排列的有序列表，小写。（a、b、c、d） |
| A    | 按字母顺序排列的有序列表，大写。（A、B、C、D） |
| i    | 罗马字母，小写。（i, ii, iii, iv）             |
| I    | 罗马字母，大写。（I, II, III, IV）             |

```
<ol type="A"> 
        <li>第1项</li>
        <li>第2项</li>
        <li>第3项</li>
        <li>第4项</li>
        <li>第5项</li>
        <li>第1项</li>
        <li>第2项</li>
        <li>第3项</li>
        <li>第4项</li>
        <li>第5项</li>
        <li>第1项</li>
        <li>第2项</li>
        <li>第3项</li>
        <li>第4项</li>
        <li>第5项</li>
        <li>第1项</li>
        <li>第2项</li>
        <li>第3项</li>
        <li>第4项</li>
        <li>第5项</li>
        <li>第1项</li>
        <li>第2项</li>
        <li>第3项</li>
        <li>第4项</li>
        <li>第5项</li>
        <li>第1项</li>
        <li>第2项</li>
        <li>第3项</li>
        <li>第4项</li>
        <li>第5项</li>
    </ol>
```

**运行结果**：[index.html](2020Web HTML CSS\01-019 有序列表\index.html) 



```
<style>
        a{
            text-decoration: none;
            color:#3C3C3C;
        }
        a:hover{
            color: red;
            font-size: 18px;
            text-shadow: 5px 5px 10px brown;
        }
    </style>
    
    <body>
    <ol>
        <li><a href="">都说</a></li>
        <li><a href="">我的祖国</a></li>
        <li><a href="">夜空中最亮的星</a></li>
        <li><a href="">大海</a></li>
        <li><a href="">青花瓷</a></li>
    </ol>
</body>
```

**运行结果**： [test.html](2020Web HTML CSS\01-019 有序列表\test.html) 



## 01-020 定义列表

``       <dl>``：定义列表

``<dt>``：定义专业术语或名词

``<dd>``：对名词进行解释和描述

```
    <dl>
        <dt>HTML</dt>
        <dd>超文本标记语言</dd>
        <dt>CSS</dt>
        <dd>层叠样式表</dd>
        <dt>JavaScript</dt>
        <dd>网页脚本语言</dd>
        <dd>jQuery</dd>
    </dl>
```

**运行结果**： [index.html](2020Web HTML CSS\01-020 定义列表\index.html) 



## 01-021 嵌套列表

列表之间可以互相嵌套形成多层级列表。

实例：

```
<ul>
        <li>
            黑龙江省
            <ul>
                <li>哈尔滨
                    <ul>
                        <li>道里区</li>
                        <li>南岗区</li>
                        <li>道外区</li>
                    </ul>
                </li>
                <li>齐齐哈
                    <ul>
                        <li>龙沙区</li>
                        <li>建华区</li>
                        <li>铁锋区</li>
                    </ul>
                </li>
                <li>牡丹江
                    <ul>
                        <li>东安区</li>
                        <li>阳明区</li>
                        <li>爱民区</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            吉林省
            <ul>
                <li>长春</li>
                <li>吉林</li>
                <li>延边</li>
            </ul>
        </li>
        <li>
            辽宁
            <ul>
                <lI>沈阳</lI>
                <lI>大连</lI>
                <lI>鞍山</lI>
            </ul>
        </li>
    </ul>
```

**运行结果**：[index.html](2020Web HTML CSS\01-021 嵌套列表\index.html) 



```
    <dl>
        <dt>天朝</dt>
        <dd>
            <dl>
                <dt>黑龙江省</dt>
                <dd>哈尔滨</dd>
                <dd>齐齐哈尔</dd>
                <dd>牡丹江</dd>
            </dl>
            <dl>
                <dt>吉林省</dt>
                <dd>长春</dd>
                <dd>吉林</dd>
                <dd>延边</dd>
            </dl>
        </dd>
        <dt>美利坚</dt>
        <dd>
            <dl>
                <dt>加利福尼亚</dt>
                <dd>洛杉矶</dd>
            </dl>
        </dd>
    </dl>
```

**运行结果**：[index1.html](2020Web HTML CSS\01-021 嵌套列表\index1.html) 



练习： [test.html](2020Web HTML CSS\01-021 嵌套列表\test.html) 



## 01-022 表格标签

table、tr、th、td、caption 等

注：之前是有嵌套关系的，要符合嵌套规范。

语义化标签：tHead、tBody、tFood

注：在一个table中，tBody是可以出现多次的，但是tHead、tFood只能出现一次。

align : left、center、right

valign : top、middle、bottom



```
    <table>
        <caption>天气预报</caption>
        <thead>
            <tr>
                <th>日期</th>
                <th>天气情况</th>
                <th>出行情况</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2020年5月7日</td>
                <td><img src="./img/tianqi_1.png" alt=""></td>
                <td>适合出行</td>
            </tr>
            <tr>
                <td>2020年5月8日</td>
                <td><img src="./img/tianqi_2.png" alt=""></td>
                <td>需带伞</td>
            </tr>
        </tbody>
        <tfoot>
        </tfoot>
    </table>
```

**运行结果**： [index.html](2020Web HTML CSS\01-022 表格标签\index.html) 



## 01-023 表格属性

   border ： 表格边框

   cellpadding ： 单元格内的空间

   cellspacing ： 单元格之间的空间

```
<table border="1px" cellpadding="30px" cellspacing="30">
```



rowspan ： 合并行

colspan ： 合并列

```
    <table  border="1px">
        <caption>标题</caption>
        <thead>
            <tr>
                <th colspan="2">日期</th> <!-- 合并列 -->
                <td>天气情况</td>
                <td>备注</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">5月6日</td> <!--合并行-->
                <td>白天</td>
                <td>晴</td>
                <td>无需带伞</td>
            </tr>
            <tr>
                <td>晚上</td>
                <td>小雨</td>
                <td>需要带伞</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>天气预报</td>
            </tr>
        </tfoot>
    </table>
```

**运行结果**： [index1.html](2020Web HTML CSS\01-023 表格属性\index1.html) 



align ： 左右对齐方式

valign ：上下对齐方式	

```
<tr align="right" valign="top"> 
```

**运行结果**： [index.html](2020Web HTML CSS\01-023 表格属性\index.html) 



快速打出8列6行：

``tr*6>td*8``

### 关于border-collapse

设置表格极细边框border-collapse: collapse;

```
        table{
            border-collapse: collapse;
        }
        table, th, td{
            border: 1px solid #E0E0E0;
        }
```

练习: [test.html](2020Web HTML CSS\01-023 表格属性\test.html) 



## 01-024 表单input标签

``<form> ``： 表单的最外层容器

``<input>``： 标签用于搜集用户信息，根据不同的type属性值，展示不同的控件，如输入框、密码框、复选框等。

| **type**属性 | **含义**         |
| ------------ | ---------------- |
| **text**     | 普通的文本输入框 |
| **password** | 密码输入框       |
| **checkbox** | 复选框           |
| **radio**    | 单选框           |
| **file**     | 上传文件         |
| **submit**   | 提交按钮         |
| **reset**    | 重置按钮         |



```
    <form action="http://www.baidu.com">
        <h2>输入框</h2>
        <input type="text" placeholder="请输入用户名"> <!-- placeholder预览XXX -->
        <h2>密码框</h2>
        <input type="password" placeholder="请输入密码">
        <h2>复选框</h2>
        <input type="checkbox" checked="checked">苹果 <!-- checked="checked设置默认打勾 -->
        <input type="checkbox">香蕉
        <input type="checkbox" disabled>葡萄 <!-- disabled设置无法打勾 -->
        <h2>单选框</h2>
        <input type="radio" name="gender" checked="checked">男 <!-- 要设置name属性才能单选 -->
        <input type="radio" name="gender">女
        <h2>上传文件</h2>
        <input type="file">
        <h2>提交和重置按钮</h2>
        <input type="submit">
        <input type="reset">
    </form>
```

**运行结果**： [index.html](2020Web HTML CSS\01-024 表单input标签\index.html) 



## 01-025 表单相关标签

       <textarea> ： 多行文本框
       <select>、<option>：下拉菜单
       <label>：辅助表单
 form、input、textarea、select、label ..

input(单标签)标签有一个type属性，决定是什么控件。

还有一些常见的属性： checked、disabled、name、for ...

select属性

| 属性                                                         | 值        | 描述                                               |
| :----------------------------------------------------------- | :-------- | :------------------------------------------------- |
| [autofocus](https://www.w3cschool.cn/htmltags/att-select-autofocus.html)New | autofocus | 规定在页面加载时下拉列表自动获得焦点。             |
| [disabled](https://www.w3cschool.cn/htmltags/att-select-disabled.html) | disabled  | 当该属性为 true 时，会禁用下拉列表。               |
| [form](https://www.w3cschool.cn/htmltags/att-select-form.html)New | *form_id* | 定义 select 字段所属的一个或多个表单。             |
| [multiple](https://www.w3cschool.cn/htmltags/att-select-multiple.html) | multiple  | 当该属性为 true 时，可选择多个选项。               |
| [name](https://www.w3cschool.cn/htmltags/att-select-name.html) | *name*    | 定义下拉列表的名称。                               |
| [required](https://www.w3cschool.cn/htmltags/att-select-required.html)New | required  | 规定用户在提交表单前必须选择一个下拉列表中的选项。 |
| [size](https://www.w3cschool.cn/htmltags/att-select-size.html) | *number*  | 规定下拉列表中可见选项的数目。                     |



option属性

| 属性                                                         | 值       | 描述                                             |
| :----------------------------------------------------------- | :------- | :----------------------------------------------- |
| [disabled](https://www.w3cschool.cn/htmltags/att-option-disabled.html) | disabled | 规定此选项应在首次加载时被禁用。                 |
| [label](https://www.w3cschool.cn/htmltags/att-option-label.html) | text     | 定义当使用 <optgroup> 时所使用的标注。           |
| [selected](https://www.w3cschool.cn/htmltags/att-option-selected.html) | selected | 规定选项（在首次显示在列表中时）表现为选中状态。 |
| [value](https://www.w3cschool.cn/htmltags/att-option-value.html) | text     | 定义送往服务器的选项值。                         |



```
<form action="http://www.baidu.com">
	<h2>多行文本框</h2>

    <textarea name="" id="" cols="30" rows="10"></textarea>

	<h2>下拉菜单</h2>

	<select name="" id="" >
            <option value="" selected disabled>请选择</option>
            <option value="">北京</option>
            <option value="">上海</option>
            <option value="">深圳</option>
            <option value="">杭州</option>
            <!-- selected设置为默认显示 -->
    </select>

    <select name="" id="" size="3">
            <option value="">北京</option>
            <option value="">上海</option>
            <option value="">深圳</option>
            <option value="">杭州</option>
            <!-- size为显示多少个 -->
    </select>

    <select name="" id="" multiple>
            <option value="">北京</option>
            <option value="">上海</option>
            <option value="">深圳</option>
            <option value="">杭州</option>
            <!--multiple 可选择多个选项 Ctrl+左键 -->
    </select>
        
        <input type="file" multiple>
    </br>
        <input type="radio" name="gender" id="man"><label for="man">男</label>
        <input type="radio" name="gender" id="woman"><label for="woman">女</label>
    </form>
```

**运行结果**： [index.html](2020Web HTML CSS\01-025 表单相关标签\index.html) 





输入限制

这里列出了一些常用的输入限制（其中一些是 HTML5 中新增的）：

| 属性      | 描述                               |
| :-------- | :--------------------------------- |
| disabled  | 规定输入字段应该被禁用。           |
| max       | 规定输入字段的最大值。             |
| maxlength | 规定输入字段的最大字符数。         |
| min       | 规定输入字段的最小值。             |
| pattern   | 规定通过其检查输入值的正则表达式。 |
| readonly  | 规定输入字段为只读（无法修改）。   |
| required  | 规定输入字段是必需的（必需填写）。 |
| size      | 规定输入字段的宽度（以字符计）。   |
| step      | 规定输入字段的合法数字间隔。       |
| value     | 规定输入字段的默认值。             |



练习: [test.html](2020Web HTML CSS\01-025 表单相关标签\test.html) 





## 01-026 表格表单组合实例

```
    <form action="" method="http;//www.abc.com">
        <table border="1" cellpadding="30px">
            <tr>
                <td rowspan="4">总体信息</td>
                <td colspan="2" align="center">用户注册</td>
            </tr>
            <tr>
                <td align="right">用户名：</td>
                <td>
                    <input type="text" name="user" placeholder="请输入用户名">
                </td>
            </tr>
            <tr>
                <td align="right">密码：</td>
                <td>
                    <input type="password" name="pwd" placeholder="请输入密码">
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="提交">
                    &nbsp;
                    <input type="reset" value="重置">
                </td>
            </tr>
        </table>
    </form>
```

**运行结果**： [index.html](2020Web HTML CSS\01-026 表格表单组合实例\index.html) 



## 01-027 div与span

  div （块）：
div全称为division，“分割、分区”的意思，<div>标签用来划分一个区域，相当于一块区域容器，可以容纳段落、标题、表格、图像等各种网页元素。即HTML中大多数的标签都可以嵌套在<div>标签中，<div>中还可以嵌套多层<div>，用来将网页分割成独立的、不同的部分，来实现网页的规划和布局。

 span（内联） : 
用来修饰文字的，div与span都是没有任何默认样式的，需要配合CSS才行。

实例： [index.html](2020Web HTML CSS\01-027 div与span\index.html) 



## 01-028 CSS基础语法

格式：选择器{ 属性1 : 值1 ; 属性2 : 值2 }

单位：px  -> 像素( pixel ) 、%   -> 百分比

外容器1 -> 600px  当前容器 50% -> 300px

外容器2 -> 400px  当前容器 50% -> 200px

基本样式：width、height、background-color

CSS注释：/*  CSS注释的内容  */

实例： [index.html](2020Web HTML CSS\01-028 CSS基础语法\index.html) 



## 01-029 内联样式与内部样式

内联（行内、行间）样式在html标签上添加style属性来实现的

```
<div style="width: 100px;height:100px;background-color: brown;">这是一个块</div>
```



内部样式在<style>标签内添加的样式  优点：可以复用代码

```
    <style>
        .div1{
            width: 100px;
            height: 100px;
            background-color: royalblue;
        }
    </style>
    
    <div class="div1">这是一个块</div>
```

区别：内部样式的代码可以复用、复合W3C的规范标准，进行让结构和样式分开处理。

**运行结果**： [index.html](2020Web HTML CSS\01-029 内联样式与内部样式\index.html) 



## 01-030 外部样式及两种写法

引入一个单独的CSS文件，name.css

``<link>``标签：rel、href

rel 属性规定当前文档与被链接文档之间的关系。

stylesheet 文档的外部样式表。

```
<link rel="stylesheet" href="common.css">
```



@import 注：这种方式有很多问题，不建议使用。

```
    <style>
        @import url('./common.css');
    </style>
```



link和@import区别：

https://www.cnblogs.com/my--sunshine/p/6872224.html 作者：my~sunshine

实例： [index.html](2020Web HTML CSS\01-030 外部样式及两种写法\index.html) 



## 01-031 CSS颜色表示法

单词表示法 : red blue green yellow ...

十六进制表示法：#000000   #ffffff

0 1 2 3 4 5 6 7 8 9 a b c d e f

rgb三原色表示法：rgb(255,255,255); 取值范围 0 ~ 255

实例： [index.html](2020Web HTML CSS\01-031 CSS颜色表示法\index.html) 





## 01-032 背景样式

background-color：背景颜色



background-image：背景图片

url(背景地址) 默认：会水平垂直都铺满背景图



background-repeat：背景图片的平铺方式

 repeat-x   x轴平铺  

repeat-y   y轴平铺

repeat ( x , y 都进行平铺，默认值 )

no-repeat  都不平铺



background-position：背景图片的位置

x y : number(px、%) | 单词

x : left、center、right

y : top、center、bottom



background-attachment：背景图随滚动条的移动方式

scroll : 默认值  ( 背景位置是按照当前元素进行偏移的 )

fixed ( 背景位置是按照浏览器进行偏移的 )



**总结：**

| 值                                                           | 说明                                             | CSS  |
| :----------------------------------------------------------- | :----------------------------------------------- | :--- |
| *[background-color](https://www.w3cschool.cn/cssref/pr-background-color.html)* | 指定要使用的背景颜色                             | 1    |
| *[background-position](https://www.w3cschool.cn/cssref/pr-background-position.html)* | 指定背景图像的位置                               | 1    |
| *[background-size](https://www.w3cschool.cn/cssref/css3-pr-background-size.html)* | 指定背景图片的大小                               | 3    |
| *[background-repeat](https://www.w3cschool.cn/cssref/pr-background-repeat.html)* | 指定如何重复背景图像                             | 1    |
| *[background-origin](https://www.w3cschool.cn/cssref/css3-pr-background-origin.html)* | 指定背景图像的定位区域                           | 3    |
| *[background-clip](https://www.w3cschool.cn/cssref/css3-pr-background-clip.html)* | 指定背景图像的绘画区域                           | 3    |
| *[background-attachment](https://www.w3cschool.cn/cssref/pr-background-attachment.html)* | 设置背景图像是否固定或者随着页面的其余部分滚动。 | 1    |
| *[background-image](https://www.w3cschool.cn/cssref/pr-background-image.html)* | 指定要使用的一个或多个背景图像                   | 1    |



```
    <style>
        .d1{
            width: 300px;
            height: 300px;
            background-color: brown;
            background-image: url('./img/dog.jpg');
            background-repeat: repeat-x;
        }
        .d2{
            width: 300px;
            height: 300px;
            background-color: brown;
            background-image: url('./img/dog.jpg');
            background-repeat: repeat-y;
        }
        .d3{
            width: 300px;
            height: 300px;
            background-color: brown;
            background-image: url('./img/dog.jpg');
            background-repeat: no-repeat;
            /* background-position: 110px 50px; */
            background-position: 50% 50%;
        }
    </style>
```

**运行结果**：[index.html](2020Web HTML CSS\01-032 背景样式\index.html) 





```
    <style>
        body{
            margin: 0;
            height: 2000px;
        }
        .d1{
            width: 1440px;
            height: 800px;
            background-color: brown;
            background-image: url('./img/dog.jpg');
            background-repeat: no-repeat;
            background-position: 50% 20%;
            background-attachment: fixed;
        }
    </style>
```

窗口水平放大缩小试试效果

**运行结果**： [index2.html](2020Web HTML CSS\01-032 背景样式\index2.html) 



## 01-033 背景实现视觉差效果

参考网站：http://www.divups.com/

设置元素高度，然后采用background-attachment: fixed;

```
     <style>
        #div1{
            width: 1400px;
            height: 800px;
            background-image: url(./img/1.jpg);
            background-attachment: fixed;
            
        }
        #div2{
            width: 1400px;
            height: 800px;
            background-image: url(./img/2.jpg);
            background-attachment: fixed;
        }
        #div3{
            width: 1400px;
            height: 800px;
            background-image: url(./img/3.jpg);
            /* background-attachment: fixed; */
        }
    </style>
    
<body>
    <div id="div1"></div>
    <div id="div2"></div>
    <div id="div3"></div>
</body>
```

**运行结果**：

滚动窗口上下试试效果

 [test.html](2020Web HTML CSS\01-033 背景实现视觉差效果\test.html) 

 [index.html](2020Web HTML CSS\01-033 背景实现视觉差效果\index.html) 



## 01-034 CSS边框样式

border-style 边框样式

solid 实线

dashed 虚线

dotted 点线



border-width 边框大小

px...



border-color 边框颜色  

red #f00 ...



边框可以针对某一条边进行单独设置

border-top-style

border-right-style等等



简写border: 5px solid brown



```
    <style>
        .d1{
            width: 200px;
            height: 200px;
            background-color: brown;
            border-style: dashed;
            border-color: black;
            border-width: 5px;
        }
        .d2{
            width: 200px;
            height: 200px;
            background-color: royalblue;
            border-left-style: dashed;
            border-color: black;
            border-width: 5px;
        }
        .d3{
            width: 200px;
            height: 200px;
            background-color: seagreen;
            border-style: dotted;
            border-color: black;
            border-width: 10px;
            border-bottom: none;
        }
        .d4{
            width: 200px;
            height: 200px;
            background: lightsalmon;
            border: 5px solid brown;
            border-top: 10px dashed black;
        }
    </style>
    
    <body>
    <div class="d1">1</div>
    <hr>
    <div class="d2">2</div>
    <hr>
    <div class="d3">3</div>
    <hr>
    <div class="d4">4</div>
</body>
```

**运行结果**：[index.html](2020Web HTML CSS\01-034 CSS边框样式\index.html) 



## 01-035 边框实现三角形

### transparent

background-color:transparent 无颜色，即透明

```
    <style>
        div{
            width: 0;
            height: 00px;
            border-top: 100px solid transparent;
            border-right: 100px solid brown;
            border-bottom: 100px solid transparent;
            border-left: 100px solid transparent;
        }
    </style>
```

**运行结果**：[index.html](2020Web HTML CSS\01-035 边框实现三角形\index.html) 





## 01-036 family字体类型

font-family：字体类型

默认类型为浏览器设置的类型

英文字体：Arial , 'Times New Roman' 

中文字体：微软雅黑 ,  宋体

中文字体的英文名称

微软雅黑 : 'Microsoft YaHei'

宋体 : SimSun



衬线体与非衬线体

![20200508203000](2020Web HTML CSS\01-036 family字体类型\20200508203000.png)

注意事项：

1.多个字体类型的设置目的

2.引号的添加的目的

实例： [index.html](2020Web HTML CSS\01-036 family字体类型\index.html) 



## 01-037 字体大小粗细样式

### font-size

字体大小

默认大小为浏览器设置的大小

写法 : number(px) | 单词 ( small large ... 不推荐使用)



### font-weight

字体粗细

模式：正常( normal )   加粗 ( bold )

写法：单词(normal、bold)   |  number ( 100 200 .....  900 , 100到500都是正常的，600都900都是加粗的 )  



### font-style

字体样式

模式： 正常 ( normal )   斜体 ( italic )

写法：单词 (  normal 、 italic )

注：oblique也是表示斜体，用的比较少，一般了解即可。

区别：1.italic 带有倾斜属性的字体的才可以设置倾斜操作。

​           2.oblique 没有倾斜属性的字体也可以设置倾斜操作。



### color

字体颜色 

写法：

color:brown或#000000或rgb()



实例： [index.html](2020Web HTML CSS\01-037 字体大小粗细样式\index.html) 





### 总结

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [font](https://www.w3school.com.cn/cssref/pr_font_font.asp)  | 简写属性。作用是把所有针对字体的属性设置在一个声明中。       |
| [font-family](https://www.w3school.com.cn/cssref/pr_font_font-family.asp) | 设置字体系列。                                               |
| [font-size](https://www.w3school.com.cn/cssref/pr_font_font-size.asp) | 设置字体的尺寸。                                             |
| [font-size-adjust](https://www.w3school.com.cn/cssref/pr_font_font-size-adjust.asp) | 当首选字体不可用时，对替换字体进行智能缩放。（CSS2.1 已删除该属性。） |
| [font-stretch](https://www.w3school.com.cn/cssref/pr_font_font-stretch.asp) | 对字体进行水平拉伸。（CSS2.1 已删除该属性。）                |
| [font-style](https://www.w3school.com.cn/cssref/pr_font_font-style.asp) | 设置字体风格。                                               |
| [font-variant](https://www.w3school.com.cn/cssref/pr_font_font-variant.asp) | 以小型大写字体或者正常字体显示文本。                         |
| [font-weight](https://www.w3school.com.cn/cssref/pr_font_weight.asp) | 设置字体的粗细。                                             |





## 01-038-042 文本

**css文本效果**

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [color](https://www.w3cschool.cn/cssref/pr-text-color.html)  | 设置文本颜色             |
| [direction](https://www.w3cschool.cn/cssref/pr-text-direction.html) | 设置文本方向。           |
| [letter-spacing](https://www.w3cschool.cn/cssref/pr-text-letter-spacing.html) | 设置字符间距             |
| [line-height](https://www.w3cschool.cn/cssref/pr-dim-line-height.html) | 设置行高                 |
| [text-align](https://www.w3cschool.cn/cssref/pr-text-text-align.html) | 对齐元素中的文本         |
| [text-decoration](https://www.w3cschool.cn/cssref/pr-text-text-decoration.html) | 向文本添加修饰           |
| [text-indent](https://www.w3cschool.cn/cssref/pr-text-text-indent.html) | 缩进元素中文本的首行     |
| [text-shadow](https://www.w3cschool.cn/cssref/css3-pr-text-shadow.html) | 设置文本阴影             |
| [text-transform](https://www.w3cschool.cn/cssref/pr-text-text-transform.html) | 控制元素中的字母         |
| [unicode-bidi](https://www.w3cschool.cn/cssref/pr-text-unicode-bidi.html) | 设置或返回文本是否被重写 |
| [vertical-align](https://www.w3cschool.cn/cssref/pr-pos-vertical-align.html) | 设置元素的垂直对齐       |
| [white-space](https://www.w3cschool.cn/cssref/pr-text-white-space.html) | 设置元素中空白的处理方式 |
| [word-spacing](https://www.w3cschool.cn/cssref/pr-text-word-spacing.html) | 设置字间距               |

参考：https://www.w3cschool.cn/css/css-text.html

### direction

文本方向/书写方向。

ltr:默认。文本方向从左到右。

rtl:文本方向从右到左。



### letter-spacing 

增加或减少字符间的空白（字符间距）

normal:默认。规定字符间没有额外的空间。

length:定义字符间的固定空间（允许使用负值）。



### line-height

定义行高

什么是行高，一行文字的高度，上边距和下边距的等价关系。

默认行高：不是固定值，而是变化的。根据当前字体的大小再不断的变化。

取值：1. number( px )   |  scale ( 比例值 , 跟文字大小成比例的 )   |  length 设置固定的行间距。

![图片1](2020Web HTML CSS\01-038-042 文本\图片1.png)

###  text-align

文本对齐方式

对齐方式 : left 、right、center、justify（两端点对齐）



### text-decoration

文本装饰

下划线 : underline

删除线 :line-through

上划线 : overline

不添加任何装饰 : none

注：添加多个文本修饰：line-through underline overline



###  text-indent

文本缩进 首行缩进

em单位：相对单位，1em永远都是跟字体大小相同



### text-transform

针对英文段落 文本大小写

lowercase:定义仅有小写

uppercase:定义仅有大写

capitalize:文本中的每个单词以大写字母开头。



### unicode-bidi

设置或返回文本是否被重写 

官方文档的描述看不懂

引用他人博客详细解释:https://www.cnblogs.com/dolphinX/p/4087816.html

本地链接： [direction和unicode-bidi - 谦行 - 博客园.html](2020Web HTML CSS\01-038-042 文本\direction和unicode-bidi - 谦行 - 博客园.html) 



### vertical-align

设置一个元素的垂直对齐。

baseline:默认。元素放置在父元素的基线上。

sub:垂直对齐文本的下标。

super:垂直对齐文本的上标

top:把元素的顶端与行中最高元素的顶端对齐

text-top:把元素的顶端与父元素字体的顶端对齐

middle:把此元素放置在父元素的中部。

bottom:把元素的顶端与行中最低的元素的顶端对齐。

text-bottom:把元素的底端与父元素字体的底端对齐。

length

% 使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。



### white-space

指定元素内的空白怎样处理。

normal:默认。空白会被浏览器忽略。                                

pre:空白会被浏览器保留。其行为方式类似 HTML 中的 pre 标签。 

nowrap:文本不会换行，文本会在在同一行上继续，直到遇到 br 标签为止。

pre-wrap:保留空白符序列，但是正常地进行换行。                      

pre-line:合并空白符序列，但是保留换行符。                         



### word-spacing

词之间的间距  ( 针对英文段落的 )

normal:默认。定义单词间的标准空间。

length:定义单词间的固定空间。



**CSS3 文本效果**

| 属性                                                         | 描述                                                     | CSS  |
| :----------------------------------------------------------- | :------------------------------------------------------- | :--- |
| [hanging-punctuation](https://www.w3cschool.cn/cssref/css3-pr-hanging-punctuation.html) | 规定标点字符是否位于线框之外。                           | 3    |
| [punctuation-trim](https://www.w3cschool.cn/cssref/css3-pr-punctuation-trim.html) | 规定是否对标点字符进行修剪。                             | 3    |
| [text-align-last](https://www.w3cschool.cn/cssref/css3-pr-text-align-last.html) | 设置如何对齐最后一行或紧挨着强制换行符之前的行。         | 3    |
| text-emphasis                                                | 向元素的文本应用重点标记以及重点标记的前景色。           | 3    |
| [text-justify](https://www.w3cschool.cn/cssref/css3-pr-text-justify.html) | 规定当  text-align 设置为 "justify" 时所使用的对齐方法。 | 3    |
| [text-outline](https://www.w3cschool.cn/cssref/css3-pr-text-outline.html) | 规定文本的轮廓。                                         | 3    |
| [text-overflow](https://www.w3cschool.cn/cssref/css3-pr-text-overflow.html) | 规定当文本溢出包含元素时发生的事情。                     | 3    |
| [text-shadow](https://www.w3cschool.cn/cssref/css3-pr-text-shadow.html) | 向文本添加阴影。                                         | 3    |
| [text-wrap](https://www.w3cschool.cn/cssref/css3-pr-text-wrap.html) | 规定文本的换行规则。                                     | 3    |
| [word-break](https://www.w3cschool.cn/cssref/css3-pr-word-break.html) | 规定非中日韩文本的换行规则。                             | 3    |
| [word-wrap](https://www.w3cschool.cn/cssref/css3-pr-word-wrap.html) | 允许对长的不可分割的单词进行分割并换行到下一行。         | 3    |

参考：https://www.w3cschool.cn/css3/ov693flj.html



hanging-punctuation

指定一个标点符号是否会在启动或在结束时文本行框以外。

目前浏览器都不支持 2333



punctuation-trim

是否应修饰，当它出现在一条线，或相邻的另一个全形标点符号字符开头或结束标点字符。

目前浏览器都不支持 2333



text-align-last

规定如何对齐文本的最后一行。

**注意：**text-align-last 属性只有在 text-align 属性设置为 "justify" 时才起作用。

只支持chrome和IE



text-justify

文本对齐设置为"justify"的理据。

此属性指定应怎样对齐文本以及对齐间距。

只支持IE 2333



text-outline

文本-轮廓 文字大纲。

都不支持2333



### text-overflow

文本溢出包含它的元素，应该发生的事情。

clip:修剪文本。

ellipsis:显示省略符号来代表被修剪的文本。

string:使用给定的字符串来代表被修剪的文本。



### text-shadow

```
text-shadow: h-shadow v-shadow blur color;
```

给文本添加阴影。

h-shadow:必需。水平阴影的位置。允许负值。
v-shadow:必需。垂直阴影的位置。允许负值。
blur:可选。模糊的距离。
color:可选。阴影的颜色。参阅 [CSS 颜色值](https://www.w3cschool.cn/cssref/css-colors-legal.html)。



text-wrap

文本换行规则。

任何浏览器都不支持2333



### word-break

word-break属性指定非CJK脚本的断行规则。

**提示:**CJK脚本是中国，日本和韩国（"中日韩"）脚本。

normal:使用浏览器默认的换行规则。

break-all:允许在单词内换行 (非常强烈的折行)

keep-all:只能在半角空格或连字符处换行。



### word-wrap 

允许长的内容可以自动换行。

break-word:(不是那么强烈的折行 ，会产生一些空白区域)  



实例： [index.html](2020Web HTML CSS\01-038-042 文本\index.html) 



参考： [07_个人简介.html](2020Web HTML CSS\01-038-042 文本\07_个人简介.html) 

练习： [test.html](2020Web HTML CSS\01-038-042 文本\test.html) 

使用PS测量 取色等





## 01-043 CSS复合样式

一个CSS属性只控制一种样式，叫做单一样式。

一个CSS属性控制多种样式，叫做复合样式。

复合的写法，是通过空格的方式实现的。复合写法有的是不需要关心顺序，例如background、border；有的是需要关心顺序，例如font。

background : red url() repeat 0 0;

border : 1px red solid;



font : 

最少要有两个值 size family

weight style size family  √

style weight size family  √

weight style size/line-height family √

注：如果非要混合去写的话，那么要先写复合样式，再写单一样式，这样样式才不会被覆盖掉。

```
    <style>
        div{
            width: 300px;
            height: 300px;
            background-color: brown;  /* 被下面属性覆盖 */
            background: url(./img/dog.jpg) no-repeat center;
            /* background-color: brown; */
            border: 5px solid royalblue;
            border-right: none;
            font: bold italic 20px 宋体 ;
            /* weight style size family  √ */
            /* style weight size family  √ */
            /* weight style size/line-height family √ */
            color: lightgray;
        }
    </style>
    
<body>
    <div>这是一段文字</div>
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-043 CSS复合样式\index.html) 





## 01-044 ID选择器及注意事项

ID选择器

CSS:#elem{}

html:id="elem"

注：

 ID是唯一值，在一个页面中只能出现一次，出现多次是不符合规范的。

命名的规范，由字母、下划线、中划线、字母（并且第一个不能是数字）

驼峰写法 : searchButton (小驼峰)  SearchButton (大驼峰)  searchSmallButton

短线写法：search-small-button

下划线写法：search_small_button

实例： [index.html](2020Web HTML CSS\01-044 ID选择器及注意事项\index.html) 



## 01-045 CLASS选择器及注意事项

class选择器 类选择器

css:

```
.elem{....}
```

html:

```
<div class="elem">
	...
</div>
```



注：

class选择器是可以复用的。

可以添加多个class样式。

多个样式的时候，样式的优先级根据CSS决定，而不是class属性中的顺序。

标签+类的写法

```
.box1{
            width: 300px;
            height: 300px;
        }
        .box2{
            
            background: gold;
        }
        .box3{
            border: 5px solid goldenrod;

        }
        .box4{
            border-right: none;
        }
        
<div class="box1 box2 box3 box4">这是一个块</div>
```

**运行结果**： [index.html](2020Web HTML CSS\01-045 CLASS选择器及注意事项\index.html) 



## 01-046 标签群组通配等选择器

### 标签选择器(tag选择器)

css:div{} p{}

html:``<div></div>  ``    ``<p></p>``

使用场景：

去掉某些标签的默认样式时

复杂的选择器，如层次选择器



### 群组选择器（分组选择器）

css:div, p, span{}

可以通过逗号的方式，给多个不同的选择器添加统一的CSS样式，来达到代码的复用。



### 通配选择器

 *{  } ->  div,ul,li,p,h1,h2....{}  

注：尽量避免使用通配选择器，因为会给所有的标签添加样式，慎用。

使用的场景： 去掉所有标签的默认样式时   

实例： [index.html](2020Web HTML CSS\01-046 标签群组通配等选择器\index.html) 



## 01-047 层次选择器

### 后代  M N { }

后代选取器匹配所有指定元素的后代元素。

```
    <style>
        div p{
            background: tomato;
        }
    </style>
    
<body>
    <div>
        <p>在div中</p>
        <p>在div中</p>
    </div>
    <p>不在div中</p>
    <p>不在div中</p>
</body>
```

**运行结果**：[01后代_new.html](2020Web HTML CSS\01-047 层次选择器\01后代_new.html) 

 [01后代.html](2020Web HTML CSS\01-047 层次选择器\01后代.html) 



### 父子  M > N { }

与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素。

```
    <style>
        div>p{
            background: tomato;
        }
    </style>
    
<body>
    <h2>标题2标题2</h2>
    <div>
        <h2>My name is Baakseng</h2>
        <p>这才是儿子</p>
        <span>123</span>
        <p>这也是儿子</p>
    </div>
    <hr>
    <div>
        <span>
            <p>这不是儿子，因为父元素是span</p>
        </span>
    </div>
    <hr>
    <p>木有父元素div</p>
</body>
```

**运行结果**： [02父子_new.html](2020Web HTML CSS\01-047 层次选择器\02父子_new.html) 

 [02父子.html](2020Web HTML CSS\01-047 层次选择器\02父子.html) 



### 兄弟  M ~ N { }  当前M下面的所有兄弟N标签

普通兄弟选择器选取所有指定元素的相邻兄弟元素。

```
    <style>
        div ~ h2{
            background: tomato;
        }
    </style>
   
<body>
    <div>
        <h2>在div里</h2>
        <h2>在div里</h2>
    </div>
    <h2>不在dvi里</h2>
    <p>这只是一个段落</p>
    <h2>不在dvi里</h2>
    <hr>

    <div>
        <div></div>
        <h2>在div里</h2>
    </div>
</body>
```

**运行结果**： [03兄弟_new.html](2020Web HTML CSS\01-047 层次选择器\03兄弟_new.html) 

 [03兄弟.html](2020Web HTML CSS\01-047 层次选择器\03兄弟.html) 



### 相邻  M + N { }  当前M下面相邻的N标签

相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素。

如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector）。



```
    <style>
        div + h2{
            background: tomato;
        }
    </style>
    
<body>
    <h2>可惜这不是兄弟，前面木有div</h2>
    <div>div</div>
    <p>这是一个段落</p>
    <h2>这是标题2，但是前面隔着P标签，无法使用css</h2>
    <div>div</div>
    <h2>我才是兄弟，因为前面紧邻div</h2>
    <hr>
    <div>div
        <h2>这是标题2，在div里</h2>
    </div>
    <h2>我也才是兄弟</h2>
</body>
```

**运行结果**： [04相邻_new.html](2020Web HTML CSS\01-047 层次选择器\04相邻_new.html) 

 [04相邻.html](2020Web HTML CSS\01-047 层次选择器\04相邻.html) 

### 总结

链接： [CSS选择器里不同的符号](2020Web HTML CSS\01-047 层次选择器\CSS选择器里不同的符号.md) 







## 01-048 属性选择器

| 选择器          | 说明                                           |
| --------------- | ---------------------------------------------- |
| M[attr]         | M元素选择指定为attr属性的集合                  |
| M[attr=value]   | M元素选择指定为attr属性和value值的集合         |
| M[attr*=value]  | M元素选择指定为attr属性并且包含值为value的集合 |
| M[attr^=value]  | M元素选择指定为attr属性并且起始值为value的集合 |
| M[attr$=value]  | M元素选择指定为attr属性并且结束值为value的集合 |
| M[attr1[attr2]] | M元素选择满足多个属性的集合                    |

M[attr] {}

= : 完全匹配

*= : 部分匹配

^= : 起始匹配

$= : 结束匹配

[ ] [ ] [ ] : 组合匹配

```
    <style>
        div{
            width: 100px;
            height: 100px;
            background: tomato;
        }
        div[class]{
            background: lightskyblue;
        }
        div[class*="rch"]{
            background: lightsalmon;
            /* sea rch button*/
        }
        div[class^="s"]{
            background: lightseagreen;
            /* s earchbutton */
        }
        div[class$="on"]{
            background: brown;
            /* searchbutt on */
        }
        [id]{
            background: gray;
        }
        p[id]{
            background: lightgray;
        }
    
<body>
    <div>1</div>
    <div class="box">2</div>
    <div class="search">3</div>
    <div class="searchbutton">4</div>
    <div class="123">5</div>
    <div id="123">6</div>
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-048 属性选择器\index.html) 





| 选择器                                                       | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | 用于选取带有指定**属性**的元素。                             |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | 用于选取带有指定属性和值的元素。                             |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
| [attribute*=value]                                           | 匹配属性值中包含指定值的每个元素。                           |

```
    <style>
        [title] {
            color: blue;
        }
        [title = w3c]{
            color: brown;
        }
        [title~="gamer"]{
            color: seagreen;
        }
        a[target=_blank]{
            background: yellow;
        }
        a[href *= "taobao"]{
            background: orange;
        }
    </style>
<body>
    <h2 title="helloworld">Hello World</h2>
    <h2 title="w3c">Hello World</h2>
    <h2 title="gamerwow12">Hello World</h2> <!-- 只能单词gamer才能显示seargreen颜色 -->
    <h2 title="RO gamer">Hello World</h2>
    <a href="http://www.baidu.com" target=_blank>Hello World</a>
    <br>
    <a href="http://www.taobao.com">Hello World</a>
</body>
```

**运行结果**： [index2.html](2020Web HTML CSS\01-048 属性选择器\index2.html) 



## 01-049 hover等伪类选择器

M:伪类{}

:link       访问前的样式    ( 只能添加给a标签 )

:visited    访问后的样式    ( 只能添加给a标签 )

 :hover      鼠标移入时的样式  (可以添加给所有的标签)

 :active     鼠标按下时的样式  (可以添加给所有的标签)

**注：**

如果四个伪类都生效，一定要注意顺序：L V H A。

一般网站只这样去设置：a{ }   a:hover{}

实例： [index.html](2020Web HTML CSS\01-049 hover等伪类选择器\index.html) 



## 01-050 after等伪类选择器

:before 选择器向选定的元素前插入内容。

```
    <style>
        .tupian{
            width: 100px;
            height: 100px;
            background: url('./img/dog.jpg');
            color: #ffffff;
            position: relative;
        }
        .tupian::before{
            content: " ";
            display: block;
            position: absolute;
            left: 0;
            width: 100px;
            height: 5px;
            background: tomato;
        }
    </style>
    
<body>
    <div>
        <div class="tupian">hello</div>
    </div>
</body>
```

**运行结果**： [before.html](2020Web HTML CSS\01-050 after等伪类选择器\before.html) 



:after 选择器向选定的元素之后插入内容。

```
    <style>
        .tupian:after{
            content: '  world';
            color: white;
            position: absolute;/*用这属性才能显示图片具体尺寸*/
            width: 100px;
            height: 100px;
            background: url('./img/dog.jpg');
        }
    </style>

<body>
    <div class="tupian">hello</div>
</body>
```

**运行结果**： [after.html](2020Web HTML CSS\01-050 after等伪类选择器\after.html) 

使用content属性即文本内容



:checked、:disabled 、:focus 都是针对表单元素的 

:checked 选择器匹配每个已被选中的 input 元素（只用于单选按钮和复选框）。

:disabled 选择器匹配每个被禁用的元素（大多用在表单元素上）。

:focus 选择器用于选取获得焦点的元素。接受键盘事件或其他用户输入的元素都允许 :focus 选择器。

```
        .box1:checked{
            width: 100px;
            height: 100px;

        }
        .box2:disabled{
            width: 100px;
            height: 100px;
        }
        .box3:focus{
            height: 30px;
            background: tomato;
            border: 2px solid yellow;
            box-shadow: 5px 5px 10px gray;
            /* 点击内容框样式有变化 */
        } 
<body>
    <p>box1</p>
    <input class="box1" type="checkbox">
    <input class="box1" type="checkbox" checked>
    <input class="box1" type="checkbox">
    <hr>
    <p>box2</p>
    <input class="box2" type="checkbox">
    <input class="box2" type="checkbox" checked>
    <input class="box2" type="checkbox" disabled><span>右边的打勾不了-_,-</span>
    <hr>
    <p>box3</p>
    <span>用户名：</span><input class="box3" type="text">
    <br>
    <span> 密码：  </span>&nbsp;&nbsp;<input class="box3" type="password">
</body>
```

试试点击已设置的控件效果

**运行结果**： [checked disabled focus.html](2020Web HTML CSS\01-050 after等伪类选择器\checked disabled focus.html) 



## 01-051 结构伪类选择器

nth-of-type() 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素.*n* 可以是数字、关键词或公式。

按照类型来计算，如果是class那么碰到不同类型的，单独一类，符合条件的选中。

匹配同类型中的第n个同级兄弟元素。参数是元素的索引。索引从1开始。

```
    <style>
        p:nth-of-type(3){
            background: tomato;
        }
    </style>
<body>
    <h1>这是标题1</h1>
    <p>This is 1st</p>
    <p>This is 2nd</p>
    <p>This is 3rd</p>
    <p>This is 4th</p>
    <p>This is 5th</p>
    <p>This is 6th</p>
    <p>This is 7th</p>
    <p>This is 8th</p>
    <p>This is 9th</p>
</body>
```

**运行结果**： [nth-of-type().html](2020Web HTML CSS\01-051 结构伪类选择器\nth-of-type().html) 



nth-child() 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。n 可以是数字、关键词或公式。

按照个数来算。

```
    <style>
        p:nth-child(2n){
            background: tomato;
        }
    </style>
    
<body>
    <h1>这是标题1</h1>
    <h2>这是标题2</h2>
    <p>this is 3nd</p>
    <p>this is 4thd</p>
    <p>this is 5th</p>
    <p>this is 6th</p>
    <p>this is 7th</p>
    <p>this is 8th</p>
    <p>this is 9th</p>
    <p>this is 10th</p>
    <p>this is 11th</p>
    <p>this is 12th</p>
</body>
```

**运行结果**： [nth-child.html](2020Web HTML CSS\01-051 结构伪类选择器\nth-child.html) 



角标是从1开始的，1表示第一项，2表示第二项 | n值 表示从0到无穷大



详解：

https://blog.csdn.net/zhanglianglily/article/details/89472331

本地链接：

 [：nth-of-type（n）和：nth-child（n）的基友关系_zhanglianglily的博客-CSDN博客.html](2020Web HTML CSS\01-051 结构伪类选择器\：nth-of-type（n）和：nth-child（n）的基友关系_zhanglianglily的博客-CSDN博客.html) 



https://www.cnblogs.com/pssp/p/5991029.html

本地链接：

 [彻底理解nth-child和nth-of-type的区别。 - 追梦子 - 博客园.html](2020Web HTML CSS\01-051 结构伪类选择器\彻底理解nth-child和nth-of-type的区别。 - 追梦子 - 博客园.html) 



练习： [test.html](2020Web HTML CSS\01-051 结构伪类选择器\test.html) 



 first-of-type

选择属于其父元素的首个元素的每个元素。

**提示:** 等同于 :nth-of-type(1)。



last-of-type

选择属于其父元素的最后元素的每个元素。

**提示:** 和:nth-last-of-type(1)是一个意思。



only-of-type

选择属于其父元素唯一的元素的每个元素。

```
    <style>
        p:only-of-type{
            background: tomato;
        }
    </style>
    
<body>
    <div>
        <p>这是一个段落</p>
        <p>这是一个段落</p>
    </div>
    <hr>
    <div>
    	<h2>这是标题2</h2>
        <p>这是一个段落</p>
    </div>
</body>
```

**运行结果**： [only-of-type.html](2020Web HTML CSS\01-051 结构伪类选择器\only-of-type.html) 



only-child

选择器匹配属于父元素中唯一子元素的元素。

```
    <style>
        p:only-child{
            background: tomato;
        }
    </style>
    
<body>
    <div>
        <p>这是一个段落</p>
    </div>
    <hr>
    <div>
        <h2>这是标题2</h2>
        <p>这是一个段落</p>
    </div>
</body>
```

**运行结果**：[only-child.html](2020Web HTML CSS\01-051 结构伪类选择器\only-child.html) 



## 选择器总结

在 CSS 中，选择器是一种模式，用于选择需要添加样式的元素。

"CSS" 列指示该属性是在哪个 CSS 版本中定义的。（CSS1、CSS2 还是 CSS3。）

| 选择器分类             | 举例                                                      |
| ---------------------- | --------------------------------------------------------- |
| 全局选择器             | 通配符*                                                   |
| 标签选择器             | body，div，p，ul，li                                      |
| 类选择器               | .class                                                    |
| ID选择器               | #id                                                       |
| 组合选择器             | .head .head_loge，两选择器之间用空格隔开                  |
| 后代选择器             | #head .nav li ul，从父级到子孙集的选择器                  |
| 子选择器               | div>p                                                     |
| 群组选择器             | div，span，img{color：red；即将具有相同样式的标签分组显示 |
| 继承选择器             | div p，两选择器用空格键分开                               |
| 伪类选择器             | 具体以下个表格                                            |
| 字符串匹配的属性选择符 | ^(开始)，$(中间)，*(结尾)                                 |
| css相邻兄弟选择器      | 如h1+p                                                    |



| 选择器                                                       | 例子                  | 例子描述                                            | CSS  |
| :----------------------------------------------------------- | :-------------------- | :-------------------------------------------------- | :--- |
| [.*class*](https://www.w3school.com.cn/cssref/selector_class.asp) | .intro                | 选择 class="intro" 的所有元素。                     | 1    |
| [#*id*](https://www.w3school.com.cn/cssref/selector_id.asp)  | #firstname            | 选择 id="firstname" 的所有元素。                    | 1    |
| [*](https://www.w3school.com.cn/cssref/selector_all.asp)     | *                     | 选择所有元素。                                      | 2    |
| [*element*](https://www.w3school.com.cn/cssref/selector_element.asp) | p                     | 选择所有 <p> 元素。                                 | 1    |
| [*element*,*element*](https://www.w3school.com.cn/cssref/selector_element_comma.asp) | div,p                 | 选择所有 <div> 元素和所有 <p> 元素。                | 1    |
| [*element* *element*](https://www.w3school.com.cn/cssref/selector_element_element.asp) | div p                 | 选择 <div> 元素内部的所有 <p> 元素。                | 1    |
| [*element*>*element*](https://www.w3school.com.cn/cssref/selector_element_gt.asp) | div>p                 | 选择父元素为 <div> 元素的所有 <p> 元素。            | 2    |
| [*element*+*element*](https://www.w3school.com.cn/cssref/selector_element_plus.asp) | div+p                 | 选择紧接在 <div> 元素之后的所有 <p> 元素。          | 2    |
| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | [target]              | 选择带有 target 属性所有元素。                      | 2    |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | [target=_blank]       | 选择 target="_blank" 的所有元素。                   | 2    |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。       | 2    |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | [lang\|=en]           | 选择 lang 属性值以 "en" 开头的所有元素。            | 2    |
| [:link](https://www.w3school.com.cn/cssref/selector_link.asp) | a:link                | 选择所有未被访问的链接。                            | 1    |
| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp) | a:visited             | 选择所有已被访问的链接。                            | 1    |
| [:active](https://www.w3school.com.cn/cssref/selector_active.asp) | a:active              | 选择活动链接。                                      | 1    |
| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp) | a:hover               | 选择鼠标指针位于其上的链接。                        | 1    |
| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp) | input:focus           | 选择获得焦点的 input 元素。                         | 2    |
| [:first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) | p:first-letter        | 选择每个 <p> 元素的首字母。                         | 1    |
| [:first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) | p:first-line          | 选择每个 <p> 元素的首行。                           | 1    |
| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp) | p:first-child         | 选择属于父元素的第一个子元素的每个 <p> 元素。       | 2    |
| [:before](https://www.w3school.com.cn/cssref/selector_before.asp) | p:before              | 在每个 <p> 元素的内容之前插入内容。                 | 2    |
| [:after](https://www.w3school.com.cn/cssref/selector_after.asp) | p:after               | 在每个 <p> 元素的内容之后插入内容。                 | 2    |
| [:lang(*language*)](https://www.w3school.com.cn/cssref/selector_lang.asp) | p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个 <p> 元素。 | 2    |
| [*element1*~*element2*](https://www.w3school.com.cn/cssref/selector_gen_sibling.asp) | p~ul                  | 选择前面有 <p> 元素的每个 <ul> 元素。               | 3    |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 <a> 元素。   | 3    |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | a[src$=".pdf"]        | 选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。      | 3    |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | a[src*="abc"]         | 选择其 src 属性中包含 "abc" 子串的每个 <a> 元素。   | 3    |
| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp) | p:first-of-type       | 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。    | 3    |
| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp) | p:last-of-type        | 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。    | 3    |
| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp) | p:only-of-type        | 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。    | 3    |
| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp) | p:only-child          | 选择属于其父元素的唯一子元素的每个 <p> 元素。       | 3    |
| [:nth-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-child.asp) | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 <p> 元素。     | 3    |
| [:nth-last-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp) | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。                    | 3    |
| [:nth-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp) | p:nth-of-type(2)      | 选择属于其父元素第二个 <p> 元素的每个 <p> 元素。    | 3    |
| [:nth-last-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。                | 3    |
| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp) | p:last-child          | 选择属于其父元素最后一个子元素每个 <p> 元素。       | 3    |
| [:root](https://www.w3school.com.cn/cssref/selector_root.asp) | :root                 | 选择文档的根元素。                                  | 3    |
| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp) | p:empty               | 选择没有子元素的每个 <p> 元素（包括文本节点）。     | 3    |
| [:target](https://www.w3school.com.cn/cssref/selector_target.asp) | #news:target          | 选择当前活动的 #news 元素。                         | 3    |
| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp) | input:enabled         | 选择每个启用的 <input> 元素。                       | 3    |
| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp) | input:disabled        | 选择每个禁用的 <input> 元素                         | 3    |
| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp) | input:checked         | 选择每个被选中的 <input> 元素。                     | 3    |
| [:not(*selector*)](https://www.w3school.com.cn/cssref/selector_not.asp) | :not(p)               | 选择非 <p> 元素的每个元素。                         | 3    |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) | ::selection           | 选择被用户选取的元素部分。                          | 3    |

参考链接：https://www.w3cschool.cn/cssref/css-selectors.html





## 01-052 CSS样式的继承

文字相关的样式可以被继承

布局相关的样式不能被继承 ( 默认是不能继承的，但是可以设置继承属性 inherit 值 )

```
    <style>
        div{
            width: 300px;
            height: 300px;
            border: 1px solid tomato;
            color: slateblue;
            font-size: 30px;
        }
        p{
            border: inherit;
            /* 继承了父元素的border属性 */
        }
    </style>
   
<body>
    <div>
        <p>这是一个段落</p>
    </div>
</body>
```

**运行结果**：[index.html](2020Web HTML CSS\01-052 CSS样式的继承\index.html) 





## 01-053 单一样式的优先级

1.相同样式优先级

当设置相同样式时，后面的优先级较高，但不建议出现重复设置样式的情况。



2.内部样式与外部样式

内部样式与外部样式优先级相同，如果都设置了相同样式，那么后写的引入方式优先级高。

```
    <link rel="stylesheet" href="base.css">
    <style>
        div{
            width: 300px;
            height: 300px;
            background: teal;
        }
    </style>
```

base.css里面的颜色为tomato

运行结果为方块是teal(绿色)



如果把link放到style后面

```
    <style>
        div{
            width: 300px;
            height: 300px;
            background: teal;
        }
    </style>
    <link rel="stylesheet" href="base.css">
```

方块则为tomato(红色)

**运行结果**： [index1.html](2020Web HTML CSS\01-053 单一样式的优先级\index1.html) 



3.单一样式优先级

style行间 > id > class > tag > * > 继承

**注：**

|                 | 权重值 |
| --------------- | ------ |
| 内联style       | 1000   |
| id              | 100    |
| class           | 10     |
| tag (div、p、a) | 1      |



实例： [index2.html](2020Web HTML CSS\01-053 单一样式的优先级\index2.html) 



## 01-054 important群组等优先级

!important

提升样式优先级，非规范方式，不建议使用。( **不能针对继承的属性进行优先级的提升** )

```
    <style>
        #elem{
            color: brown /* !important */;
        }
        *{
            color: seagreen /* !important */;
        }
        body{
            color: gray !important;
            /* 不能针对继承的属性进行优先级的提升 */
        }
    </style>
    
<body>
    <div id="elem" style="color: royalblue;">这是一个块</div>
</body>
```

**运行结果**： [!important.html](2020Web HTML CSS\01-054 important群组等优先级\!important.html)  结果不是gray颜色的字体



标签+类与单类

标签+类 > 单类 

```
    <style>
        .box{
            background: tomato;
        }
        div.box{
            background: lightskyblue;
        }
    </style>
    
<body>
    <div class="box">这是一个块</div>
</body>
```

**运行结果**： [index1.html](2020Web HTML CSS\01-054 important群组等优先级\index1.html) 



群组优先级

群组选择器与单一选择器的优先级相同，靠后写的优先级高。

```
    <style>
        div {
            color: royalblue;
        }
        div,p {
            color: seagreen;
        }
        /* 试试把div,p 和div位置调换看看 */
    </style>
    
<body>
    <div>这是一个块</div>
    <p>这是一个段落</p>
</body>
```

**运行结果**： [index2.html](2020Web HTML CSS\01-054 important群组等优先级\index2.html) 



## 01-055层次的优先级

权重比较

第一优先级：无条件有限的属性只需要在属性后面使用！ important。它会覆盖页面内任何位置定义的元素样式。IE6不支持该属性。

第二优先级：在HTML中给元素标签加style，即内联样式。该方法会造成CSS难以管理，所以不推荐使用。

第三优先级：有一个或多个id选择器来定义。例如，#id{margin： 0}会覆盖.classname{margin: 3px}

第四优先级：有一个或多个类选择器、属性选择器、伪类选择器定义。如.classname{margin: 3px}会覆盖div{margin: 6px}

第五优先级：有一个或多个类型选择器定义。如div{margin: 6px}覆盖*{margin: 10px;}

第六优先级：通配选择器，如*{margin: 6px;}

权重值：

!important 10000

style="" 1000

id 100

class、:before、属性选择器 10

tag 1

``*`` 1

例：

#banner .box div p = 100+10+1+1=112



优先级不起作用

如果遇到了似乎没有起作用的css规则，很可能是出现了特殊性冲突。这时可以在选择其中添加他的一个父元素的ID，从而提高它的特殊性，如果这能解决问题，就说明样式表中其他地方很可能有更特殊的规则，他覆盖了你的规则，此时需要检查代码，解决特殊性冲突，让代码尽可能的简洁。



实例： [index.html](2020Web HTML CSS\01-055 层次的优先级\index.html) 



## 01-056CSS盒子模型

![20200511081748](2020Web HTML CSS\01-056 CSS盒子模型\20200511081748.png)

组成 : content -> padding -> border -> margin

​		     物品          填充物        包装盒      盒子与盒子之间的间距

浏览器控制台可查看（F12键）

### content

内容区域 width和height组成的



### padding 

内边距(内填充)

padding:10px  上下左右都10px

padding:10px 20px   上下10px 左右20px

padding:10px 20px 15px  上10px 左右20px 下15px

padding:四个值 顺序为上右下左



单一样式只能写一个值

padding-top

padding-right

padding-bottom

padding-left

实例： [index1.html](2020Web HTML CSS\01-056 CSS盒子模型\index1.html) 



### margin

外边距（外填充）

写法和上面的padding完全一样

长宽不在盒子内，只是盒子与另一个盒子的距离

实例： [index2.html](2020Web HTML CSS\01-056 CSS盒子模型\index2.html) 



上面几个实例建议用控制台查看详细



### 注间事项

背景颜色会填充到margin以内的区域。

文字会在content区域。

padding不能出现负值，margin是可以出现负值。





## 01-057 box-sizing改变盒模型

盒尺寸，可以改变盒子模型的展示形态。

默认值： content-box :  width、height -> content

border-box : width、height -> content padding border

允许您以特定的方式定义匹配某个区域的特定元素。取值为content-box（默认值） | border-box。

| 值          | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| content-box | 这是由 CSS2.1 规定的宽度高度行为。宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。 |
| border-box  | 为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。 |

使用的场景：

不用再去计算一些值

解决一些100%的问题

实例： [index.html](2020Web HTML CSS\01-057 box-sizing改变盒模型\index.html) 





## 01-058 盒模型之margin叠加问题

当给两个盒子同时添加上下外边距的时候，就会出现叠加的问题。这个问题，只在上下有，左右是没有这个叠加问题的。

如果两个盒子都设置了margin:40px

上下间距是40px，而不是40px+40px=80px

如果上面盒子margin为30px，下面盒子margin为50px，那么这俩盒子间距为50px，所以取这两个中的最大值。

<a href=".\2020Web HTML CSS\01-058 盒模型之margin叠加问题\20200511111929.png">图片示例</a>



设置margin:40px 又设置float:left

左右间距是40pz+40px=80px

<a href=".\2020Web HTML CSS\01-058 盒模型之margin叠加问题\20200511112355.png">图片示例</a>

实例： [index.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\index.html) 



上下盒子叠加问题解决方案：

给元素添加属性：如果想给两个盒子上下间距为70px，上面的margin-bottom设为0px，下面的margin-top设为70px即可；



BFC规范：百度找（找到了）下面详解！

先知道Box、Formatting Context的概念。

布局规则：

内部的Box会在垂直方向，一个接一个地放置。

Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。

每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

BFC的区域不会与float box重叠。

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

计算BFC的高度时，浮动元素也参与计算。



如何创建BFC：

float的值不是none。

position的值不是static或者relative。

display的值是inline-block、table-cell、flex、table-caption或者inline-flex

overflow的值不是visible



1、利用BFC避免margin重叠。

```
    p {
        color: #f55;
        background: yellow;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 30px;
    }
    div{
        overflow: hidden; 
        /* 上面属性取消试试效果*/
    }
    
    
    <body>
    <p>看看我的 margin是多少</p>
    <div>
        <p>看看我的 margin是多少</p>
    </div>
    我们可以设置，两个不同的BFC，也就是我们可以让把第二个p用div包起来，然后激活它使其成为一个BFC
</body>
```

**运行结果**： [BFC1.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\BFC1.html) 



2、自适应两栏布局

每个盒子的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

```
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body {
        width: 100%;
        position: relative;
    }
    .left {
        width: 100px;
        height: 150px;
        float: left;
        background: rgb(139, 214, 78);
        text-align: center;
        line-height: 150px;
        font-size: 20px;
    }
    .right {
        height: 300px;
        background: rgb(170, 54, 236);
        text-align: center;
        line-height: 300px;
        font-size: 40px;
    }
</style>

<body>
    <div class="left">LEFT</div>
    <div class="right">RIGHT</div>
</body>
```

LEFT绿块占据了RIGHT紫块左上

解决方法：在RIGHT块的元素里添加overflow: hidden;

**运行结果**： [BFC2.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\BFC2.html) 



3、清除浮动。

当我们不给父节点设置高度，子节点设置浮动的时候，会发生高度塌陷，这个时候我们就要清楚浮动。

实例： [BFC3.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\BFC3.html) 

```
<style>
    .par {
        border: 5px solid rgb(91, 243, 30);
        width: 300px;
    }
    .child {
        border: 5px solid rgb(233, 250, 84);
        width:100px;
        height: 100px;
        float: left;
    }
</style>

<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

父元素不能被子元素撑满

解决方法：在父元素里添加overflow: hidden;

**运行结果**： [BFC3.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\BFC3.html) 



**总结**

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。

转载于https://blog.csdn.net/sinat_36422236/article/details/88763187?ops_request_misc=&request_id=&biz_id=102&utm_term=BFC&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-88763187





## 01-059 盒模型之margin传递问题

margin传递的问题只会出现在嵌套的结构中，且只有margin-top会有传递的问题，其它三个方向是没有传递问题的。

```
    <style>
        .box1{
            width: 200px;
            height: 200px;
            background: tomato;
        }
        .box2{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            margin-top: 100px;
            /* margin-left: 100px; */
        }
    </style>
    
    <body>
    <div class="box1">
        <div class="box2"></div>
    </div>
    
</body>
```

<a href=".\2020Web HTML CSS\01-059 盒模型之margin传递问题\20200511130236.png">图片示例</a>

却不能在大盒子里下调100px，连同大盒子也跟着下调100px，margin-left和marginright无这问题

**运行结果**： [index.html](2020Web HTML CSS\01-059 盒模型之margin传递问题\index.html) 



解决方案：

1.BFC规范：上面有详解

2.给父容器加边框

```
border: 2px dashed brown;
```

**运行结果**： [index1.html](2020Web HTML CSS\01-059 盒模型之margin传递问题\index1.html) 



3.margin换成padding。

给父元素设置padding-top，然后调整高度，子元素去掉margin-top

```
    <style>
        .box1{
            width: 200px;
            height: 100px;
            background: tomato;
            padding-top: 100px;
        }
        .box2{
            width: 100px;
            height: 100px;
            background: lightskyblue;
        }
    </style>
```

**运行结果**： [index2.html](2020Web HTML CSS\01-059 盒模型之margin传递问题\index2.html) 





## 01-060 CSS盒子模型与扩展

margin左右自适应是可以的 ，但是上下自适应是不行的。( 如果想实现上下自适应的话，需要在第二大部分来进行学习 )

width、height不设置的时候，对盒子模型的影响，会自动去计算容器的大小，节省代码。



margin自适应居中

浏览器窗口自适应居中

```
<style>
        .box-little{
            width: 100px;
            height: 100px;
            background: royalblue;
            /* margin-left: auto; */
            /* margin-right: auto; */
            margin: auto auto;
            /* 只有左右才有效果，上下设置auto无效 */
        }
</style>

<body>
    <div class="box-little"></div>
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\index.html) 





盒子内居中

```
    <style>
        .box{
            width: 500px;
            height: 500px;
            background: royalblue;
            position: relative;
        }
        .box-little{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            margin-left: 200px;
            margin-right: auto;
            position: absolute;
        }
    </style>

<body>
    <div class="box">
        <div class="box-little">小盒子</div>
    </div>
</body>
```

**运行结果**： [index2.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\index2.html) 





不设置content的现象

width、height不设置的时候，对盒子模型的影响，会自动去计算容器的大小，节省代码。

```
    <style>
        div{
            color: white;
        }
        .box1{
            width: 300px;
            height: 300px;
            background: seagreen;
        }
        .box2{
            width: 100%;
            /* 100%的只能继承父元素的300px */
            height: 100px;
            background: lightseagreen;
            padding-left: 30px;
        }
    </style>

<body>
    <div class="box1">
        <div class="box2">这是一些内容</div>
    </div>
```

box2因为设置了padding超出范围外了

解决方法：给box2添加box-sizing: border-box;

**运行结果**： [index3.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\index3.html) 



## 01-061 盒子模型的嵌套练习

练习：<a href=".\2020Web HTML CSS\01-061 盒子模型的嵌套练习\盒子模型.png">练习要求图示</a>

 [16_嵌套盒子的练习.html](2020Web HTML CSS\01-061 盒子模型的嵌套练习\16_嵌套盒子的练习.html) 这是采用测量方法参考设计图 缺点是改数值会坍塌

 [test.html](2020Web HTML CSS\01-061 盒子模型的嵌套练习\test.html) 把最外面的盒子设置display:inline-block才能紧紧包含子元素 随便改数值都上下左右完美间距

 [test1.html](2020Web HTML CSS\01-061 盒子模型的嵌套练习\test1.html) 



## 01-062 按类型划分标签

### 块标签 block

div p ul li h1.....

**独占一行!!**

支持所有样式

不写宽的时候，跟父元素的宽相同

所占区域是一个矩形



### 内联标签 inline

span a em strong img...

挨在一起的

有些样式不支持，例如：width、height、margin、padding

不写宽的时候，宽度由内容决定

所占的区域不一定是矩形

内联标签之间会有空隙，**原因：换行产生的!!**



### 内联块 inline-block

input、select...

挨在一起，但是支持宽高



**注**：布局一般用块标签，修饰文本一般用内联标签



实例： [index.html](2020Web HTML CSS\01-062 按类型划分标签\index.html) 





## 01-063 按内容划分标签

Flow 流内容 文档流

Metadata 元数据 

Sectioning 分区 区块

Heading 标题

Phrasing 措辞 语句 短语

Embedded 嵌入的 内嵌

Interactive 互动的 

<a href=".\2020Web HTML CSS\01-063 按内容划分标签\20200512085313.png">按内容划分图示</a>

详情:https://www.w3.org/TR/html5/dom.html

​		https://www.cnblogs.com/ganmingying/p/7390719.html

本地链接: [HTML Standard.html](2020Web HTML CSS\01-063 按内容划分标签\HTML Standard.html) 

​				 [HTML所有元素的分类 - _水月_ - 博客园.html](2020Web HTML CSS\01-063 按内容划分标签\HTML所有元素的分类 - _水月_ - 博客园.html) 

​				 [content-venn.html](2020Web HTML CSS\01-063 按内容划分标签\HTML Standard_files\content-venn.html) 



## 01-064  按显示划分

### 替换元素

浏览器根据元素的标签和属性，来决定元素的具体显示内容。

img、input ...



### 非替换元素

将内容直接告诉浏览器，将其显示出来。

div、h1、p ...





## 01-065 display显示框类型

display 块级元素

inline 内联元素

inline-block 内联块级元素

none  此元素不会被显示



如何把div弄成内联元素，span弄成块级元素

```
    <style>
        .p1{
            background: tomato;
        }
        .p2{
            display: inline;
            background: tomato;
        }
        .p3{
            background: lightseagreen;
        }
        .p4{
            display: block;
            background: lightseagreen;
        }
    </style>
    
    <body>
    <div class="p1">块1</div>
    <div class="p2">块1</div>
    <hr>
    <span class="p3">文本</span>
    <span class="p4">文本</span>
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-065 display显示框类型\index.html) 





如何把div弄成内联块级元素：

```
    <style>
        .box{
            width: 200px;
            height: 200px;
            background: lightskyblue;
            /* display: inline-block; */
        }
        .box1{
            width: 200px;
            height: 200px;
            background: lightskyblue;
            display: inline-block;
        }
    </style>
    <body>
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <hr>
    <div class="box1">1</div>
    <div class="box1">2</div>
    <div class="box1">3</div>
</body>
```

**运行结果**： [index1.html](2020Web HTML CSS\01-065 display显示框类型\index1.html) 





区别：

display:none 不占空间的隐藏

visibility:hidden 占空间的隐藏

```
    <style>
        .box{
            width: 100px;
            height: 100px;
            background: lightseagreen;
        }
        .none{
            display: none;
        }
        .none1{
            visibility: hidden;
        }
    </style>
    
    <body>
    <div class="box">1</div>
    <div class="box none">2</div>
    <div class="box">3</div>
    <hr>
    <div class="box">1</div>
    <div class="box none1">2</div>
    <div class="box">3</div>
</body>
```

**运行结果**： [index2.html](2020Web HTML CSS\01-065 display显示框类型\index2.html) 



## 01-066 标签嵌套规范

ul、li

dl、dt、dd

table、tr、td



块标签可以嵌套内联标签

```
<div>
	<span></span>
	<a href="#"></a>
</div>
```



块标签不一定能嵌套块标签

块嵌套块

```
<div>
	<div></div>
</div>
```

特殊：

```
<p>
	<div></div>
</p> 这是错误写法
```

![20200512095954](2020Web HTML CSS\01-066 标签嵌套规范\20200512095954.png)

这么写法，控制台显示两个p标签 一个div标签

实例： [index.html](2020Web HTML CSS\01-066 标签嵌套规范\index.html) 





内联标签不能嵌套块标签

```
<span>
	<div></div>
</span> 这是错误写法
```

但是a标签是一个例外

```
<a href="#">
	<div></div>
</a> 正确写法
```

```
    <style>
        div{
            width: 300px;
            height: 300px;
            background: royalblue;
            color: white;
        }
    </style>

<body>
    <a href="http://www.baidu.com">
        <div>会面向百度能找到工作 信不？点击这块试试</div>
    </a>
</body>
```

**运行结果**： [index1.html](2020Web HTML CSS\01-066 标签嵌套规范\index1.html) 





## 01-067 overflow溢出隐藏

overflow 属性规定当内容溢出元素框时发生的事情。

| 值      | 描述                                                     |
| :------ | :------------------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
| hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
| auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit | 规定应该从父元素继承 overflow 属性的值。                 |

实例：

visible  [visible.html](2020Web HTML CSS\01-067 overflow溢出隐藏\visible.html) 

hidden  [hidden.html](2020Web HTML CSS\01-067 overflow溢出隐藏\hidden.html) 

scroll  [scroll.html](2020Web HTML CSS\01-067 overflow溢出隐藏\scroll.html) 

auto  [auto.html](2020Web HTML CSS\01-067 overflow溢出隐藏\auto.html) 





```
    <style>
        .box{
            width: 500px;
            height: 300px;
            border: 1px solid brown;
            overflow: auto;
        }

        .box1{
            width: 500px;
            height: 300px;
            border: 1px solid brown;
        }
    </style>

<body>
    <div class="box">
        <img src="./img/01.jpg" alt="">
    </div>
    <div class="box">
        <img src="./img/01.jpg" alt="" width="400px" height="auto">
    </div>
    <div class="box1">
        <img src="./img/01.jpg" alt="" width="100%" height="100%">
    </div>
</body>
```

**运行结果**：

有图片的： [img.html](2020Web HTML CSS\01-067 overflow溢出隐藏\img.html) 



overflow-x、overflow-y

x 属性规定是否对内容的左/右边缘进行裁剪 - 如果溢出元素内容区域的话。

y 属性规定是否对内容的上/下边缘进行裁剪 - 如果溢出元素内容区域的话。

```
    <style>
        .box{
            width: 300px;
            height: 200px;
            border: 1px solid brown;
            overflow-x: scroll;
        }
        td{
            background: tomato;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="box">
        <table width="600px">
            <tr>
                <td>热门</td>
                <td>推荐</td>
                <td>体育</td>
                <td>娱乐</td>
                <td>科技</td>
                <td>财经</td>
                <td>军事</td>
                <td>地理</td>
                <td>美术</td>
                <td>色情</td>
            </tr>
        </table>    
    </div>
    <div class="box">雌火龙——里奥雷亚（リオレイア），是CAPCOM旗下热门游戏怪物猎人系列中登场的虚构怪物，怪物猎人初代封面怪物火龙（雄火龙）的雌性个体。</div>
</body>
```

**运行结果**： [x y.html](2020Web HTML CSS\01-067 overflow溢出隐藏\x y.html) 



## 01-068 透明度与手势

opacity : 0(透明 占空间) ~ 1(不透明)

0.5(半透明)

rgba()  a在 0 ~ 1区间内

注：可以让指定的样式透明，而不影响其他样式

注：占空间、所有的子内容也会透明

```
        .box1{
            width: 100px;
            height: 100px;
            background: tomato;
            opacity: 0.5;
        }
        .box2{
            width: 100px;
            height: 100px;
            background: tomato;
            opacity: 0;
            /* display: none; */
            /* visibility: hidden; */
        }
        .box3{
            width: 100px;
            height: 100px;
            background: tomato;
        }
```



```
        span{
            color: seagreen;
        }
        span.touming{
            opacity: .5;
        }
        
    <span>这是一个文本</span>
    <span class="touming">这是一个文本</span>
```



```
        .box11{
            width: 200px;
            height: 200px;
            background: rgb(111, 111, 111);
        }
        .box12{
            width: 200px;
            height: 200px;
            background: rgba(111, 111  , 111, .5);
        }
        
    <div class="box11">无透明</div>
    <div class="box12">有设透明度</div>
```



**运行结果**： [index.html](2020Web HTML CSS\01-068 透明度与手势\index.html) 



练习：两张图叠加在一起并互相隐约显示

 [test.html](2020Web HTML CSS\01-068 透明度与手势\test.html) 

 [test2.html](2020Web HTML CSS\01-068 透明度与手势\test2.html) 





 cursor : 手势

defaule 默认

自定义鼠标样式

该属性规定要显示的光标的类型（形状）。

该属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状

| 值        | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| *url*     | 需使用的自定义光标的 URL。注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。 |
| default   | 默认光标（通常是一个箭头）                                   |
| auto      | 默认。浏览器设置的光标。                                     |
| crosshair | 光标呈现为十字线。                                           |
| pointer   | 光标呈现为指示链接的指针（一只手）                           |
| move      | 此光标指示某对象可被移动。                                   |
| e-resize  | 此光标指示矩形框的边缘可被向右（东）移动。                   |
| ne-resize | 此光标指示矩形框的边缘可被向上及向右移动（北/东）。          |
| nw-resize | 此光标指示矩形框的边缘可被向上及向左移动（北/西）。          |
| n-resize  | 此光标指示矩形框的边缘可被向上（北）移动。                   |
| se-resize | 此光标指示矩形框的边缘可被向下及向右移动（南/东）。          |
| sw-resize | 此光标指示矩形框的边缘可被向下及向左移动（南/西）。          |
| s-resize  | 此光标指示矩形框的边缘可被向下移动（南）。                   |
| w-resize  | 此光标指示矩形框的边缘可被向左移动（西）。                   |
| text      | 此光标指示文本。                                             |
| wait      | 此光标指示程序正忙（通常是一只表或沙漏）。                   |
| help      | 此光标指示可用的帮助（通常是一个问号或一个气球）。           |



实现自定义手势：

准备图片：.cur、.ico

```
    <style>
        .p1{
            cursor: crosshair;
        }
        .box1{
            width: 300px;
            height: 50px;
            background: tomato;
        }
        .p2{
            cursor: help;
        }
        .p3{
            cursor:url(./img/cursor.ico),auto;
            /* auto为备用  */
        }
    </style>
    
    
    <p>请把鼠标移动到单词或区域上，可以看到鼠标指针发生变化：</p>
    <p class="p1">十字线十字线十字线</p>
    <div class="p1 box1">十字线十字线</div>

    <p class="p2">问号问号</p>
    <div class="p2 box1">问号问号</div>

    <p class="p3">其它光标图片其它光标图片</p>
```

鼠标划入试试效果

**运行结果**： [index1.html](2020Web HTML CSS\01-068 透明度与手势\index1.html) 



## 01-069 最大最小宽高

min-width、max-width

min-height、max-height

注：强化对百分比单位的理解

```
max-width: 200px;
```



上一段没设max-width，会随窗口尺寸变化而变化；

下一段有设置max-width:200px

**运行结果**： [index.html](2020Web HTML CSS\01-069 最大最小宽高\index.html) 



%单位：换算 ->已父容器的大小进行换算



一个容器怎么适应屏幕的高 : 容器加height:100%;   body:100%;  html:100%;

html,body{ height:100%;}

.contrainer{ height:100%;}

实例： [index1.html](2020Web HTML CSS\01-069 最大最小宽高\index1.html) 



```
    <style>
        div{
            max-width: 500px;
            min-height: 200px;
            background: url(./img/01.jpg);
            background-size: 100% 100%;
        }
    </style>
    
<body>
    <div></div>
</body>
```

窗口水平缩放试效果

**运行结果**： [test.html](2020Web HTML CSS\01-069 最大最小宽高\test.html) 



## 01-070 CSS默认样式

有些标签有默认样式，有些标签没有默认样式

没有默认样式：

div、span ...

有默认样式：

body、h1~h6、p、ul、 ...

body ->  marign : 8px

h1 ->  margin : 上下 21.440px

font-weight : bold

p  ->  margin : 上下 16px

ul ->  margin : 上下 16px  padding : 左 40px

默认点：list-style : disc

a ->   text-decoration: underline;



实例： [index.html](2020Web HTML CSS\01-070 CSS默认样式\index.html) 

控制台查看body的默认样式

![01-070-01](2020Web HTML CSS\01-070 CSS默认样式\01-070-01.png)



## 01-071 CSS重置样式

也叫清除样式

*{ margin:0; padding:0;}

优点：不用考虑哪些标签有默认的margin和padding

缺点：稍微的影响性能

body,p,h1,ul{ margin:0; padding:0;}



ul{ list-style : none;}    

 a{ text-decoration: none; color:#999;}



问题的现象：图片跟容器底部有一些空隙。

内联元素的对齐方式是按照文字基线对齐的，而不是文字底线对齐的。

img{ dispaly:block}

img{vertical-align: baseline;  }基线对齐方式，默认值

img{ vertical-align:bottom;} 解决方式是推荐的



写具体页面的时候或一个布局效果的时候：

写结构

css重置样式

写具体样式



默认样式大全：

html,address,blockquote,body,dd,div,dl,dt,fieldset,form,frame,frameset,h1,h2,h3,h4,h5,h6,noframes,ol,p,ul,center,dir,hr,menu,pre{display:block}
li{display:list-item}
head{display:none}
table{display:table}
tr{display:table-row}
thead{display:table-header-group}
tbody{display:table-row-group}
tfoot{display:table-footer-group}
col{display:table-column}
colgroup{display:table-column-group}
td,th{display:table-cell;}
caption{display:table-caption}
th{font-weight:bolder; text-align:center}
caption{text-align:center}
body{margin:8px; line-height:1.12}
h1{font-size:2em; margin:.67em 0}
h2{font-size:1.5em; margin:.75em 0}
h3{font-size:1.17em; margin:.83em 0}
h4,p,blockquote,ul,fieldset,form,ol,dl,dir,menu{margin:1.12em 0}

h5{font-size:.83em; margin:1.5em 0}
h6{font-size:.75em; margin:1.67em 0}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:bolder}
blockquote{margin-left:40px; margin-right:40px}
i,cite,em,var,address{font-style:italic}
pre,tt,code,kbd,samp{font-family:monospace}
pre{white-space:pre}
button,textarea,input,object,select{display:inline-block;}
big{font-size:1.17em}
small,sub,sup{font-size:.83em}
sub{vertical-align:sub}
sup{vertical-align:super}
table{border-spacing:2px;}
thead,tbody,tfoot{vertical-align:middle}
td,th{vertical-align:inherit}
s,strike,del{text-decoration:line-through}
hr{border:1px inset}
ol,ul,dir,menu,dd{margin-left:40px}
ol{list-style-type:decimal}
ol ul,ul ol,ul ul,ol ol{margin-top:0; margin-bottom:0}
u,ins{text-decoration:underline}
br:before{content:”\A”}
:before,:after{white-space:pre-line}

center{text-align:center}
abbr,acronym{font-variant:small-caps; letter-spacing:0.1em}
:link,:visited{text-decoration:underline}
:focus{outline:thin dotted invert}

@media print{
h1{page-break-before:always}
h1,h2,h3,
h4,h5,h6{page-break-after:avoid}
ul,ol,dl{page-break-before:avoid}



如果想写全也可以

/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td { /* table elements 表格元素 */
    margin: 0;
    padding: 0;
}

/* 设置默认字体 */
body,
button, input, select, textarea { /* for ie */
    /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
    font: 12px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
}

h1 { font-size: 18px; /* 18px / 12px = 1.5 */ }
h2 { font-size: 16px; }
h3 { font-size: 14px; }
h4, h5, h6 { font-size: 100%; }

address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
code, kbd, pre, samp, tt { font-family: "Courier New", Courier, monospace; } /* 统一等宽字体 */
small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */

/* 重置列表元素 */
ul, ol { list-style: none; }

/* 重置文本格式元素 */
a { text-decoration: none; }
a:hover { text-decoration: underline; }

abbr[title], acronym[title] { /* 注：1.ie6 不支持 abbr; 2.这里用了属性选择符，ie6 下无效果 */
border-bottom: 1px dotted;
cursor: help;
}

q:before, q:after { content: ''; }

/* 重置表单元素 */
legend { color: #000; } /* for ie6 */
fieldset, img { border: none; } /* img 搭车：让链接里的 img 无边框 */
/* 注：optgroup 无法扶正 */
button, input, select, textarea {
    font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}

/* 重置表格元素 */
table {
border-collapse: collapse;
border-spacing: 0;
}

/* 重置 hr */
hr {
    border: none;
    height: 1px;
}

https://blog.csdn.net/brain_bo/article/details/81560444

还有~： [CSS Tools_ Reset CSS.html](2020Web HTML CSS\01-071 CSS重置样式\CSS Tools_ Reset CSS.html) 





## 01-072 PS基本操作与图片格式

组成：

菜单项

工具栏

辅助面板

https://pan.baidu.com/s/1LVa5R_btSjczLBwskCZidQ 提取码: sc3v  



快捷键：

ctrl + r : 显示隐藏标尺

在标尺上可以拖拽参考线

可以通过移动工具拖拽回去，也可以在视图菜单中选择清除所有的参考线

<a href=".\2020Web HTML CSS\01-072 PS基本操作与图片格式\千锋Web前端教程：第072集 PS基本操作与图片格式.mp4">视频地址</a>



## 01-073 PNG等图片切图流程

png等图片的切图流程：

1.通过矩形选框工具，选择指定的区域

   微调：alt 减少区域  shift 增加区域   上下左右键进行微调

   利用参考线记录量取的位置，以便以后测量其他的值

2.ctrl + c : 复制图层

3.ctrl + n : 新建图层

4.ctrl + v : 粘贴图层

5.存储为web格式 

<a href=".\2020Web HTML CSS\01-073 PNG等图片切图流程\千锋Web前端教程：第073集 PNG等图片切图流程.mp4">视频地址</a>



切图预设准备

由于ps默认的是以厘米为单位，因此需要修改为我们前端所用的以像素为单位：

编辑-->首选项-->单位与标尺-->按下图修改即可：

<a href=".\2020Web HTML CSS\01-073 PNG等图片切图流程\01.png">图示</a>



2、视图设置

由于ps默认未启用标尺及智能参考线等，因此需要自行开启：

<a href=".\2020Web HTML CSS\01-073 PNG等图片切图流程\02.png">图示</a>



3、窗口设置

<a href=".\2020Web HTML CSS\01-073 PNG等图片切图流程\03.png">图示</a>



如果左侧工具栏未开启显示，则也可在此设置让其显示；另外需要提的是，信息面板需要一些额外的设置：

<a href=".\2020Web HTML CSS\01-073 PNG等图片切图流程\04.png">图示</a>



信息面板选项设置

<a href=".\2020Web HTML CSS\01-073 PNG等图片切图流程\05.png">图示</a>

4、新建文件存储预设

<a href=".\2020Web HTML CSS\01-073 PNG等图片切图流程\06.png">图示</a>



5、新建工作区

以上设置完后，建议保存工作区以保存之前预设的一些设置。
保存工作区方法：`窗口-->工作区-->新建工作区`



## 01-074 切图小练习之新浪趣图（上）

<a href=".\2020Web HTML CSS\01-074 切图小练习之新浪趣图（上）\千锋Web前端教程：第074集 切图小练习之新浪趣图（上）.mp4">视频地址</a>



## 01-075 切图小练习之新浪趣图（下）

<a href=".\2020Web HTML CSS\01-075 切图小练习之新浪趣图（下）\千锋Web前端教程：第075集 切图小练习之新浪趣图（下）.mp4">视频地址</a>



## 01-076 PSD源文件切图流程

psd图片的切图流程：

1.启动生成器

2.图像资源

3.重命名图层，自动获取切图

4.可上传到线上，方便数据获取

<a href=".\2020Web HTML CSS\01-076 PSD源文件切图流程\千锋Web前端教程：第076集 PSD源文件切图流程.mp4">视频地址</a>



## 01-077 企业中的切图流程

利用工具快速获取样式

蓝湖：https://lanhuapp.com



慕课网：https://www.imooc.com/learn/1228

课程总结

1、选择PS版本

2、PS界面的预置

3、工具的介绍

​	核心-选择工具

​	修图 人像美容

4、切图 自食其力

​	切片

​	辅助线

5、蓝湖

6、iconfont

​	放大，矢量图不失真

​	改色

​	改大小



## 01-078 float浮动概念及原理

文档流

文档中可显示 对象在排列时所占用的位置



float特性

加浮动的元素，会脱离文档流，会延迟父容器靠左或靠右排列，如果之前已经有浮动的元素，会挨着浮动的元素进行排列



取值

left right none(默认)



```
        .box2{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            float: left;
        }
        .box3{
            width: 100px;
            height: 100px;
            background: lightblue;
            float: left;
        }
        
       .clear{
            clear: both;
            /* 取消上面一行试效果 */
        }
        
    <div class="box2">1</div>
    <div class="box2">2</div>
    <hr>
    <div class="clear">
        <div class="box3">1</div>
        <div class="box3">2</div>
        <div class="box3">3</div>
    </div>
```

**运行结果**： [index1.html](2020Web HTML CSS\01-078 float浮动概念及原理\index1.html) 



父元素自适应已设浮动的子元素方法：

给父元素添加overflow:hidden

实例： [index.html](2020Web HTML CSS\01-078 float浮动概念及原理\index.html) 



## 01-079 float注意点整理

float注意点

只会影响后面的元素。

内容默认提升半层。

默认宽根据内容决定。

换行排列。

主要给块元素添加，但也可以给内联元素添加。



```
    <style>
        .box{
            border: 2px gray solid;
        }
        .box-little1{
            width: 100px;
            height: 100px;
            background: tomato;
        }
        .box-little2{
            width: 300px;
            height: 300px;
            background: lightskyblue;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="box-little1"></div>
        <div class="box-little2">火龙在和地面的敌人作战时，会灵活运用飞行能力展开空中袭击。就算在地面上，雄火龙的突进和火球也同样具有威胁危险度可以说更胜雌火龙。</div>
    </div>
```

给.box-little1(小红块)添加float:left试效果

**运行结果**： [float.html](2020Web HTML CSS\01-079 float注意点整理\float.html) 





```
    <style>
        .box{
            border: 2px gray solid;
        }
        .box-little1{
            width: 100px;
            height: 100px;
            background: tomato;
            float: left;
        }
        .box-little2{
            width: 300px;
            height: 300px;
            background: lightskyblue;
        }
        .box-little3{
            background: lightseagreen;
        }
    </style>

<body>
    <div class="box">
        <div class="box-little1"></div>
        <div class="box-little2"></div>
        <div class="box-little3">没有宽度的块</div>
    </div>
```

给box-little3(一行没设置宽度的绿块)添加float:left，变成脱离了，宽度根据内容大小决定

**运行结果**： [float1.html](2020Web HTML CSS\01-079 float注意点整理\float1.html) 



```
    <style>
        ul{
            width: 300px;
            height: 300px;
            background: lightyellow;
            list-style: none;
            border: 2px solid brown;
            margin: 0;
            padding: 0;
        }
        li{
            width: 100px;
            height: 100px;
            background: lightseagreen;
            border: 2px solid seagreen;
            box-sizing: border-box;
            float: left;
            color: white;
        }
        li:nth-of-type(1){
            height: 120px;
        }
        li:nth-of-type(2){
            height: 150px;
        }
    </style>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>
```

第1、2块高度超出了，第4块被迫移到第3块下面，第5块也位移了。

实例： [index1.html](2020Web HTML CSS\01-079 float注意点整理\index1.html) 



 [index.html](2020Web HTML CSS\01-079 float注意点整理\index.html) 



## 01-080-081 清除float浮动

如何清除浮动

上下排列：clear属性，表示清除浮动的，left、right、both

```
    <style>
        .box1{
            width: 100px;
            height: 100px;
            background: lightseagreen;
            float: left;
        }
        .box2{
            width: 200px;
            height: 200px;
            background: lightskyblue;
            float: right;
        }
        .box3{
            width: 300px;
            height: 300px;
            background: tomato;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
</body>
```

绿块和蓝块分别添加float:left和float:right，然后脱离出来了，红块就自动移到前面空的位置

如果想让红块不自动移上去，解决方法为给红块添加clear:both

**运行结果**： [index.html](2020Web HTML CSS\01-080 清除float浮动（上）\index.html) 



嵌套排列：

### 固定宽高

不推荐 , 不能把高度固定死，不适合做自适应的效果。

```
    <style>
        .box1{
            width: 200px;
            border: 2px solid darkgray;
        }
        .box2{
            width: 100px;
            height: 200px;
            background: darkseagreen;
            float: left;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2"></div>
    </div>
</body>
```

.box1没设高度，不会被已设float:left;的box2撑满

解决方法:

给父元素添加高度200px，但是设置高度能避免浮动问题，不适合做自适应的效果。

**运行结果**： [index1.html](2020Web HTML CSS\01-080 清除float浮动（上）\index1.html) 





### 父元素浮动

不推荐 , 因为父容器浮动也会影响到后面的元素。

```
    <style>
        .box1{
            width: 200px;
            border: 2px solid darkgray;
        }
        .box2{
            width: 100px;
            height: 200px;
            background: darkseagreen;
            float: left;
        }

        .box3{
            width: 500px;
            height: 500px;
            background: lightseagreen;
            clear: both;
        }
    </style>
    
    <div class="box1">
        <div class="box2"></div>
    </div>

    <div>333</div>
```

给父元素box1添加float:left，方能被子元素撑满



但是如果添加后面元素.box3 宽200px 高200px 颜色lightseagreen

```
    <div class="box1">
        <div class="box2"></div>
    </div>

    <div>333</div>
    <div class="box3"></div>
```

显然影响了后面元素，解决方法给.box3添加clear:both

**运行结果**： [index2.html](2020Web HTML CSS\01-080 清除float浮动（上）\index2.html) 



###  overflow : hidden

BFC规范 , 如果有子元素想溢出，那么会受到影响。

实例： [index3..html](2020Web HTML CSS\01-080 清除float浮动（上）\index3..html) 



### display : inline-block

BFC规范，不推荐，父容器会影响到后面的元素。

```
    <style>
        .box1{
            width: 200px;

            border: 2px solid darkgray;
            /* BFC规范，父容器会影响到后面的元素。 */
        }
        .box2{
            width: 100px;
            height: 200px;
            background: darkseagreen;
            float: left;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2"></div>
    </div>
    aaa
    <!-- aaa受影响 -->
</body>

```

解决方法给父元素添加display:inline-block

**运行结果**： [index4.html](2020Web HTML CSS\01-080 清除float浮动（上）\index4.html) 



### 设置空标签

不推荐 , 会多添加一个标签。

```
    <style>
        .box1{
            width: 200px;
            border: 2px solid darkgray;
        }
        .box2{
            width: 100px;
            height: 200px;
            background: darkseagreen;
            float: left;
        }
        .clear{
            clear: both;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2"></div>
        <div class="clear"></div>
        <!-- 这是一个空标签 -->
    </div>
    aaa
</body>
```

**运行结果**：  [index5.html](2020Web HTML CSS\01-081 清除float浮动（下）\index5.html) 





###  after伪类

推荐，是空标签的加强版，目前各大公司的做法。( clear属性只会操作块标签，对内联标签不起作用 )

```
    <style>
        .box1{
            width: 200px;
            border: 2px solid darkgray;
        }
        .box2{
            width: 100px;
            height: 200px;
            background: darkseagreen;
            float: left;
        }
        
        .clear:after{
            content: '';
            clear: both;
            display: block;
        }
        
    </style>
</head>
<body>
    <div class="box1 clear">
        <div class="box2"></div>
    </div>
    aaa
</body>
```

**运行结果**： [index6.html](2020Web HTML CSS\01-081 清除float浮动（下）\index6.html) 



## 01-082-83 flat制作页面小结构

练习：利用浮动实现面面效果

<a href=".\2020Web HTML CSS\01-082-83 flat制作页面小结构\float练习1.png">练习要求图示1</a>

练习： [test.html](2020Web HTML CSS\01-082-83 flat制作页面小结构\test.html) 



<a href=".\2020Web HTML CSS\01-082-83 flat制作页面小结构\float练习2.jpg">练习要求图示1</a>

练习： [test2.html](2020Web HTML CSS\01-082-83 flat制作页面小结构\test2.html) 



## 01-084 relative相对定位

position定位

position特性

css position属性用于指定一个元素在文档中的定位方式。top、right、bottom、left属性则决定了该元素的最终位置



relative

如果没有定位偏移量，对元素本身没有任何影响

 不使元素脱离文档流

不影响其他元素布局

 left、top、right、bottom是相对于当前元素自身进行偏移的

实例： [index.html](2020Web HTML CSS\01-084 relative相对定位\index.html) 





## 01-085 absolute绝对定位

使元素完全脱离文档流

```
    <style>
        .box{
            width: 100px;
            height: 100px;
            background: turquoise;
            border: 1px solid lightseagreen;
        }
    </style>
</head>
<body>
    <div class="box" >1</div>
    <div class="box" >2</div>
    <div class="box" >3</div>
</body>
```

结果显示是3个绿块并列排行

给第2块加上     

```
        #box2{
            position: absolute;
            top: 50px;
            left: 30px;
        }
        
        <div class="box" id="box2">2</div>
```

第2块脱离父元素了

**运行结果**： [index.html](2020Web HTML CSS\01-085 absolute绝对定位\index.html) 





使内联元素支持宽高 （让内联具备块特性）

```
    <style>
        #box1{
            width: 200px;
            height: 200px;
            background: turquoise;
        }
        #box2{
            width: 100px;
            height: 100px;
            background: tomato;
        }
    </style>
</head>
<body>
    <div id="box1">块</div>
    <span id="box2">这是内联的</span>
</body>
```

虽然给了span添加宽高分别100px，但是显示却不是100px*100px;

添加position:absolute后

```3
        #box2{
            width: 100px;
            height: 100px;
            background: tomato;
            position: absolute;
            top: 100px;
            left: 30px;
        }
```

变成脱离了的块级元素

**运行结果**： [index1.html](2020Web HTML CSS\01-085 absolute绝对定位\index1.html) 





使块元素默认宽根据内容决定（让块具备内联的特性）

```
    <style>
        .box1{
            width: 100px;
            height: 100px;
            background: lightskyblue;
            
        }
        .boxAbsolute{
            background: tomato;
            top: 20px;
        }
    </style>
</head>
<body>
    <div class="box1">1</div>
    <div class="boxAbsolute">这原来是一个块</div>
</body>
```

boxAbsolute没设宽高，是一个高度跟内容决定而且宽度跟浏览器窗口决定的块级元素

给.boxAbsolute添加position:absolute后

```
        .boxAbsolute{
            background: tomato;
            position: absolute;
            top: 20px;
        }
```

变成一个宽高跟内容决定的内联块级元素

**运行结果**： [index2.html](2020Web HTML CSS\01-085 absolute绝对定位\index2.html) 



如果有定位祖先元素相对于定位祖先元素发生偏移，没有定位祖先元素相对于整个文档发生偏移（绝对、相对、固定）

实例： [index3.html](2020Web HTML CSS\01-085 absolute绝对定位\index3.html) 







```
    <style>
        .box{
            width: 100px;
            height: 100px;
            background: lightskyblue;
        }
        .absolute{
            width: 50px;
            height: 50px;
            background: royalblue;
            color: white;
            position: absolute;
            top: 100px;
            left: 100px;
        }
    </style>
    
<body>
    <div class="box">1</div>
    <div class="box">2</div>
    <span class="absolute">444</span>
    <div class="box">3</div>
</body>
```

444箱子使用position:absolute后脱离文档流，定位与浏览器窗口相对 top100px left100px

练习： [test.html](2020Web HTML CSS\01-085 absolute绝对定位\test.html) 





## 01-086 fixed和sticky及z-index

fixed：

使元素完全脱离文档流

使内联元素支持宽高 （让内联具备块特性）

和上面的absolute一样

使块元素默认宽根据内容决定（让块具备内联的特性）

和上面的absolute一样

相对于整个浏览器窗口进行偏移，不受浏览器滚动条的影响

```
        .box-mid{
            width: 100px;
            height: 100px;
            background: tomato;
            position: fixed;
            /* 完全脱离 无视父元素 跟浏览器窗口进行定位 */
            top: 0px;
            left: 100px;
        }
```

滚动浏览器窗口试效果

**运行结果**： [fixed.html](2020Web HTML CSS\01-086 fixed和sticky及z-index\fixed.html) 



sticky黏性定位：

新增的，在指定的位置，进行黏性操作。

```
    <style>
        .top{
            width: 100%;
            background: black;
            position: sticky;
            top: 0;
            top: 30px;
            color: white;
        }
    </style>
    
<body>
    <p>文本段落 文本段落</p>
    <p>文本段落 文本段落</p>
    .
    .
    .
    <p>文本段落 文本段落</p>
    <div class="top">文本段落 文本段落</div>
    <p>文本段落 文本段落</p>
    <p>文本段落 文本段落</p>
    .
    .
    .
```

滚动浏览器窗口试效果

**运行结果**： [sticky.html](2020Web HTML CSS\01-086 fixed和sticky及z-index\sticky.html) 



练习： [sticky-test.html](2020Web HTML CSS\01-086 fixed和sticky及z-index\sticky-test.html) 



z-index定位层级。

默认层级为0

z-index数值不同会使覆盖不同，嵌套时候的层级问题

默认z-index<a href=".\2020Web HTML CSS\01-086 fixed和sticky及z-index\20200514181836.png">默认图示</a>





设置z-index后，<a href=".\2020Web HTML CSS\01-086 fixed和sticky及z-index\20200514182125.png">有设z-inde图示</a>



实例： [z-index.html](2020Web HTML CSS\01-086 fixed和sticky及z-index\z-index.html) 





## position总结

position取值

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。                                                                                    元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。 |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。                                                                                                                    元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。`fixed` 属性会创建新的层叠上下文。当元素祖先的 `transform`, `perspective` 或 `filter` 属性非 `none` 时，容器由视口改为该祖先。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。                                                                                                                                                      该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。 |
| static   | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。                                                                                                                                                           该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 `top`, `right`, `bottom`, `left` 和 `z-index `属性无效。 |
| sticky   | css定位新增属性；可以说是相对定位relative和固定定位fixed的结合；它主要用在对scroll事件的监听上；简单来说，在滑动过程中，某个元素距离其父元素的距离达到sticky粘性定位的要求时(比如top：100px)；position:sticky这时的效果相当于fixed定位，固定到适当位置。                        元素根据正常文档流进行定位，然后相对它的*最近滚动祖先（nearest scrolling ancestor）*和 [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block) (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于`top`, `right`, `bottom`, 和 `left`的值进行偏移。偏移值不会影响任何其他元素的位置。 |
| inherit  | 规定应该从父元素继承 position 属性的值。                     |





## 01-087 定位实现下拉菜单

参考淘宝顶部<a href=".\2020Web HTML CSS\01-087 定位实现下拉菜单\20200514182548.png">参考图示</a>

父元素里分两部分，顶部一行字高度，列表弄几行

父元素设置position:relative, 列表设置position:absolute并调整好位置

把列表隐藏 display:none

鼠标移入顶部显示下拉菜单 父元素:hover 列表{display:block}

鼠标移入列表内某个行 列表 li:hover{background:颜色}

实例： [index.html](2020Web HTML CSS\01-087 定位实现下拉菜单\index.html) 

练习： [test.html](2020Web HTML CSS\01-087 定位实现下拉菜单\test.html) 



## 01-088定位实现居中和装饰点

给父容器设置position:relative生成相对定位

然后给子元素设置position:absolute生成绝对定位，top-50% left-50%，

margin-top: - (子元素高度的一半)

margin-left: - (子元素宽度的一半)

```
    <style>
        .box1{
            width: 300px;
            height: 300px;
            border: 3px solid lightgray;
            position: relative;
        }
        .box2{
            width: 100px;
            height: 100px;
            background-color: turquoise;
            position: absolute;    
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -50px;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2"></div>
    </div>
</body>
```

**运行结果**： [index.html](2020Web HTML CSS\01-088 定位实现居中和装饰点\index.html) 



装饰点

在CSS里的\#main ul li 一行改动

原版本： [02_新浪的小结构.html](2020Web HTML CSS\01-088 定位实现居中和装饰点\02_新浪的小结构.html) 

改完后： [index1.html](2020Web HTML CSS\01-088 定位实现居中和装饰点\index1.html)   添加了:before{...}





## 01-089 CSS添加省略号

width

必须有一个固定的宽



white-span:nowrap

不让内容折行



overflow:hidden

隐藏溢出的内容



text-overflow:ellipsis

添加省略号来代表被修剪的文本

```
    <style>
        div{
            border: 1px solid lightgray;
            width: 200px;

            /* white-space: nowrap; */
            /* 不让内容折行 */

            /* overflow: hidden; */
            /* 修剪掉溢出文本 */

            /* text-overflow: ellipsis; */
            /* 添加省略号来代表被修剪的文本 */
        }
    </style>

<body>
    <div>测试文字测试文字测试文字测试文字测试文字测试文字</div>
</body>
```

**运行结果**：  [index.html](2020Web HTML CSS\01-089 CSS添加省略号\index.html) 

练习： [test.html](2020Web HTML CSS\01-089 CSS添加省略号\test.html) 



## 01-090 CSS精灵及好处

CSS Sprite

CSS雪碧也叫做CSS精灵，是一种网页图片应用处理方式。它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去加载

代码示例：

```
background: url(./sprite_icon.png) no-repeat -1px -596px;
```

好处：

可以减少图片质量，网页的图片加载速度快

减少图片的请求次数，加快网页的打开

<a href=".\2020Web HTML CSS\01-090 CSS精灵及好处\01.png">CSS Sprite图示1</a>

<a href=".\2020Web HTML CSS\01-090 CSS精灵及好处\02.png">CSS Sprite图示2</a>





实例： [index.html](2020Web HTML CSS\01-090 CSS精灵及好处\index.html) 



## 01-091 CSS圆角设置

border-radius

给标签添加圆角

设置四个方向的值

四个属性值，分别表示左上角、右上角、右下角、左下角的圆角大小（**顺时针方向**）

border-radius：10px  20px  30px 40px;

![111](2020Web HTML CSS\01-091 CSS圆角设置\111.png)





三个属性值，第一个值表示左上角，第二个值表示右上角和左下角（对角），第三个值表示右下角。

border-radius:10px  30px 60px; 

![222](2020Web HTML CSS\01-091 CSS圆角设置\222.png)





两个属性值，第一个值表示左上角和右下角，第二个值表示右上角和左下角。

border-radius:20px 40px;

![333](2020Web HTML CSS\01-091 CSS圆角设置\333.png)





![01](2020Web HTML CSS\01-091 CSS圆角设置\01.png)

实例： [index.html](2020Web HTML CSS\01-091 CSS圆角设置\index.html) 





斜杠二组值：第一组值表示水平半径，第二组值表示垂直半径，每组值也可以同时设置1到4个值，规则与上面相同。

border-radius:100px/40px;

![1111](2020Web HTML CSS\01-091 CSS圆角设置\1111.png)



border-radius完整结构形式（扩展了解一下，个人感觉好像用不到）

在W3C上查border-radius属性时，会发现上面描述的语法是这样的：

border-radius: 1-4 length|% / 1-4 length|%;

平时我们写的border-radius : 50px，其实完整的写法应该是：

border-radius : 50px 50px 50px 50px / 50px 50px 50px 50px;

![02](2020Web HTML CSS\01-091 CSS圆角设置\02.png)

4个值/4个值：

左上角  右上角  右下角  左下角 / 左上角  右上角  右下角  左下角



4个值/3个值：

左上角  右上角  右下角  左下角 / 左上角  右上角和左下角  右下角

以此类推。。。

1个值 / 1个值：

四个方向/四个方向

实例： [index1.html](2020Web HTML CSS\01-091 CSS圆角设置\index1.html)  

网上详解：https://jingyan.baidu.com/article/1876c852549b2a890b1376bf.html



egg： [egg.html](2020Web HTML CSS\01-091 CSS圆角设置\egg.html) 

![2222](2020Web HTML CSS\01-091 CSS圆角设置\2222.png)





实心圆、半圆、扇形、花瓣、胶囊、椭圆等方法： [各种图形.html](2020Web HTML CSS\01-091 CSS圆角设置\各种图形.html) 

蛋糕 甜筒 练习： [test.html](2020Web HTML CSS\01-091 CSS圆角设置\test.html) 





## 01-092-099 PC端企业类型整页制作

通栏 : 自适应浏览器的宽度。

版心 : 固定一个宽度，并且让容器居中。

 [index.html](2020Web HTML CSS\01-092-099 PC端企业类型整页制作\index.html) 



## 01-100-109 PC端游戏类型整页制作

多练多做： [index.html](2020Web HTML CSS\01-100-109 PC端游戏类型整页制作\index.html) 

鼠标停留切换页面： [text.html](2020Web HTML CSS\01-100-109 PC端游戏类型整页制作\text.html) 





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



## 01-184 flex弹性布局1

随着移动互联网的发展，对于网页布局来说要求越来越高，而传统的布局方案对于实现特殊布局非常不方便，比如垂直居中。
2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

| 作用在flex容器上 | **作用在flex子项上** |
| ---------------- | -------------------- |
| flex-direction   | order                |
| flex-wrap        | flex-grow            |
| flex-flow        | flex-shrink          |
| justify-content  | flex-basis           |
| align-items      | flex                 |
| align-content    | align-self           |

实例： [184-01flex-01.html](2020Web HTML CSS\01-184 flex弹性布局1\184-01flex-01.html) 



### flex-direction

顺序指定了弹性子元素在父容器中的位置。

| row            | 默认值。灵活的项目将水平显示，正如一个行一样。               |      |
| -------------- | ------------------------------------------------------------ | ---- |
| row-reverse    | 与 row 相同，但是以相反的顺序。                              |      |
| column         | 灵活的项目将垂直显示，正如一个列一样。                       |      |
| column-reverse | 与 column 相同，但是以相反的顺序。                           |      |
| initial        | 设置该属性为它的默认值。请参阅 [*initial*](https://www.w3cschool.cn/cssref/css-initial.html)。 |      |
| inherit        | 从父元素继承该属性。请参阅 [*inherit*](https://www.w3cschool.cn/cssref/css-inherit.html)。 |      |

实例：  [184-02flex-direction.html](2020Web HTML CSS\01-184 flex弹性布局1\184-02flex-direction.html) 



### flex-wrap

属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。。

**注意：**如果元素不是弹性盒对象的元素，则 flex-wrap 属性不起作用。

| 值           | 描述                                                     |
| :----------- | :------------------------------------------------------- |
| nowrap       | 默认值。规定灵活的项目不拆行或不拆列。                   |
| wrap         | 规定灵活的项目在必要的时候拆行或拆列。                   |
| wrap-reverse | 规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。 |

实例：  [184-03flex-wrap.html](2020Web HTML CSS\01-184 flex弹性布局1\184-03flex-wrap.html) 



## 01-185 flex弹性布局2

### flex-flow

属性是 flex-direction 和 flex-wrap 属性的复合属性。即缩写

```
flex-flow: flex-direction flex-wrap|initial|inherit;
```

 单个值也可以，但是另一个值自动为默认

实例：  [185-01flex-flow.html](2020Web HTML CSS\01-185 flex弹性布局2\185-01flex-flow.html) 



### justify-content

用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。

**提示：**使用 align-content 属性对齐交叉轴上的各项（垂直）。

| **取值**          | **含义**                                                     |
| ----------------- | ------------------------------------------------------------ |
| **flex-start**    | 默认值，表现为起始位置对齐。                                 |
| **flex-end**      | 表现为结束位置对齐。                                         |
| **center**        | 表现为居中对齐。                                             |
| **space-between** | 表现为两端对齐。between是中间的意思，意思是多余的空白间距只在元素中间区域分配。 |
| **space-around**  | around是环绕的意思，意思是每个flex子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半。 |
| **space-evenly**  | evenly是匀称、平等的意思。也就是视觉上，每个flex子项两侧空白间距完全相等。 |

实例： [185-02justify-content.html](2020Web HTML CSS\01-185 flex弹性布局2\185-02justify-content.html) 



练习：

justify-content的纵向: [185-03justify-content的纵向实例.html](2020Web HTML CSS\01-185 flex弹性布局2\185-03justify-content的纵向实例.html) 

justify-content换行: [185-04justify-content flex-wrap.html](2020Web HTML CSS\01-185 flex弹性布局2\185-04justify-content flex-wrap.html) 



## 01-186 flex弹性布局3

### align-items

设置了flex容器的对齐方式。设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。

align-items中的items指的就是flex子项们，因此align-items指的就是flex子项们相对于flex容器在侧轴方向上的对齐方式。  

| 值         | 描述                        | 测试 |
| :--------- | :-------------------------- | :--- |
| stretch    | 默认。 拉伸元件以适应容器。 |      |
| center     | 中心元素在容器内。          |      |
| flex-start | 位置元素在容器的开头。      |      |
| flex-end   | 位置元素在容器的末端。      |      |
| baseline   | 位置元素在容器的基线。      |      |

实例：

 [186-01align-items.html](2020Web HTML CSS\01-186 flex弹性布局3\186-01align-items.html) 

 [186-02 flex-direction flex-wrap justify-content加上align-items的不同测试.html](2020Web HTML CSS\01-186 flex弹性布局3\186-02 flex-direction flex-wrap justify-content加上align-items的不同测试.html) 



### align-content

align-content 属性在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。

align-content可以看成和justify-content是相似且对立的属性，如果所有flex子项只有一行，则align-content属性是没有任何效果的。    

**提示：**使用 justify-content 属性对齐主轴上的各项（水平）。

**注意：**容器内必须有多行的项目，该属性才能渲染出效果。

| 值            | 描述                                             | 测试                                                         |
| ------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| stretch       | 默认值。项目被拉伸以适应容器。                   | [测试 »](https://www.w3cschool.cn/tryrun/csstryit?tpl=playcss_align_content&param=stretch) |
| center        | 项目位于容器的中心。                             | [测试 »](https://www.w3cschool.cn/tryrun/csstryit?tpl=playcss_align_content&param=center) |
| flex-start    | 项目位于容器的开头。                             | [测试 »](https://www.w3cschool.cn/tryrun/csstryit?tpl=playcss_align_content&param=flex-start) |
| flex-end      | 项目位于容器的结尾。                             | [测试 »](https://www.w3cschool.cn/tryrun/csstryit?tpl=playcss_align_content&param=flex-end) |
| space-between | 项目位于各行之间留有空白的容器内。               | [测试 »](https://www.w3cschool.cn/tryrun/csstryit?tpl=playcss_align_content&param=space-between) |
| space-around  | 项目位于各行之前、之间、之后都留有空白的容器内。 |                                                              |

实例： [186-03 align-content.html](2020Web HTML CSS\01-186 flex弹性布局3\186-03 align-content.html) 



## 01-187 flex弹性布局4

作用在flex子项上的CSS属性

| **取值**        | **含义**                                                     |
| --------------- | ------------------------------------------------------------ |
| **order**       | 可以通过设置order改变某一个flex子项的排序位置。所有flex子项的默认order属性值是0。 |
| **flex-grow**   | 属性中的grow是扩展的意思，扩展的就是flex子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。默认值为0。 |
| **flex-shrink** | 属性中的shrink是“收缩”的意思，flex-shrink主要处理当flex容器空间不足时候，单个元素的收缩比例。默认值是1。 |
| **flex-basis**  | flex-basis定义了在分配剩余空间之前元素的默认大小。           |
| **flex**        | flex属性是flex-grow，flex-shrink和flex-basis的缩写。         |
| **align-self**  | align-self指控制单独某一个flex子项的垂直对齐方式。           |



### order

order 属性 设置或检索弹性盒模型对象的子元素出现的順序。

数值越小排列越靠前。

**注意：**如果元素不是弹性盒对象的元素，则 order 属性不起作用。

实例： [187-01 order.html](2020Web HTML CSS\01-187 flex弹性布局4\187-01 order.html) 



### flex-grow

属性用于设置或检索弹性盒的扩展比率。

**注意：**如果元素不是弹性盒对象的元素，则 flex-grow 属性不起作用。

默认为0，即如果存在剩余空间，也不放大。

```
flex-grow:1;
```

可小数点

实例： [187-02 flex-grow.html](2020Web HTML CSS\01-187 flex弹性布局4\187-02 flex-grow.html) 





## 01-188 flex弹性布局5

### flex-shrink

flex-shrink 属性用于设置或检索弹性盒的收缩比率。。

**注意：**如果元素不是弹性盒对象的元素，则 flex-shrink 属性不起作用。

属性中的shrink是“收缩”的意思，flex-shrink主要处理当flex容器空间不足时候，单个元素的收缩比例。默认值是1。

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。

如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

```
flex-shirink:1;
```

实例： [188-01 flex-shrink.html](2020Web HTML CSS\01-188 flex弹性布局5\188-01 flex-shrink.html) 



### flex-basis

属性用于设置或检索弹性盒伸缩基准值。。

flex-basis定义了在分配剩余空间之前元素的默认大小。

**注意：**如果元素不是弹性盒对象的元素，则 flex-basis 属性不起作用。

指定了 flex 元素在主轴方向上的初始大小。如果不使用  box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。

默认值为auto

实例： [188-02 flex-basis.html](2020Web HTML CSS\01-188 flex弹性布局5\188-02 flex-basis.html) 

语法：

```
/* 指定<'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 在flex item内容上的自动尺寸 */
flex-basis: content;

/* 全局数值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```



实例： [188-02 flex-basis.html](2020Web HTML CSS\01-188 flex弹性布局5\188-02 flex-basis.html) 试试用F12控制台查大小

具体可查网上详解：

https://www.jianshu.com/p/17b1b445ecd4

本地链接： [[翻译]Flex Basis与Width的区别 - 简书.html](2020Web HTML CSS\01-188 flex弹性布局5\[翻译]Flex Basis与Width的区别 - 简书.html) 



https://blog.csdn.net/qq_41635167/article/details/104190865

本地链接： [flex-basis_GuoZebin的博客-CSDN博客.html](2020Web HTML CSS\01-188 flex弹性布局5\flex-basis_GuoZebin的博客-CSDN博客.html) 



### flex

用于设置或检索弹性盒模型对象的子元素如何分配空间。

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

| 值            | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| *flex-grow*   | 一个数字，规定项目将相对于其他灵活的项目进行扩展的量。       |
| *flex-shrink* | 一个数字，规定项目将相对于其他灵活的项目进行收缩的量。       |
| *flex-basis*  | 项目的长度。合法值："auto"、"inherit" 或一个后跟 "%"、"px"、"em" 或任何其他长度单位的数字。 |
| auto          | 与 1 1 auto 相同。                                           |
| none          | 与 0 0 auto 相同。                                           |

实例： [188-03 flex.html](2020Web HTML CSS\01-188 flex弹性布局5\188-03 flex.html) 



### align-self

align-self 属性定义flex子项单独在侧轴（纵轴）方向上的对齐方式。。
**注意**：align-self 属性可重写灵活容器的 align-items 属性。



align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

| 值         | 描述                                                         | 测试                                                         |
| :--------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| auto       | 默认值。元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。 | [测试 »](https://www.w3cschool.cn/statics/demosource/Playit/Playit5.html#auto) |
| stretch    | 元素被拉伸以适应容器。                                       | [测试 »](https://www.w3cschool.cn/statics/demosource/Playit/Playit5.html#stretch) |
| center     | 元素位于容器的中心。                                         | [测试 »](https://www.w3cschool.cn/statics/demosource/Playit/Playit5.html#center) |
| flex-start | 元素位于容器的开头。                                         | [测试 »](https://www.w3cschool.cn/statics/demosource/Playit/Playit5.html#flex-start) |
| flex-end   | 元素位于容器的结尾。                                         | [测试 »](https://www.w3cschool.cn/statics/demosource/Playit/Playit5.html#flex-end) |
| baseline   | 元素位于容器的基线上。                                       |                                                              |

实例： [188-04 align-self.html](2020Web HTML CSS\01-188 flex弹性布局5\188-04 align-self.html) 



## 总结

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [display](https://www.w3cschool.cn/cssref/pr-class-display.html) | 指定 HTML 元素盒子类型。                                     |
| [flex-direction](https://www.w3cschool.cn/cssref/css3-pr-flex-direction.html) | 指定了弹性容器中子元素的排列方式                             |
| [justify-content](https://www.w3cschool.cn/cssref/css3-pr-justify-content.html) | 设置弹性盒子元素在主轴（横轴）方向上的对齐方式。             |
| [align-items](https://www.w3cschool.cn/cssref/css3-pr-align-items.html) | 设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。             |
| [flex-wrap](https://www.w3cschool.cn/cssref/css3-pr-flex-wrap.html) | 设置弹性盒子的子元素超出父容器时是否换行。                   |
| [align-content](https://www.w3cschool.cn/cssref/css3-pr-align-content.html) | 修改 flex-wrap 属性的行为，类似align-items, 但不是设置子元素对齐，而是设置行对齐 |
| [flex-flow](https://www.w3cschool.cn/cssref/css3-pr-flex-flow.html) | flex-direction 和 flex-wrap 的简写                           |
| [order](https://www.w3cschool.cn/cssref/css3-pr-order.html)  | 设置弹性盒子的子元素排列顺序。                               |
| [align-self](https://www.w3cschool.cn/cssref/css3-pr-align-self.html) | 在弹性子元素上使用。覆盖容器的 align-items 属性。            |
| [flex](https://www.w3cschool.cn/cssref/css3-pr-flex.html)    | 设置弹性盒子的子元素如何分配空间。                           |



网上总结详解：

https://blog.csdn.net/domunweb/article/details/95064383

本地链接： [css中的flex（弹性）布局_domunweb的博客-CSDN博客.html](2020Web HTML CSS\01-188 flex弹性布局5\css中的flex（弹性）布局_domunweb的博客-CSDN博客.html) 





## 01-189  flex弹性布局6 

flex案例：

1.骰子的点数。

参考： [3_骰子.html](2020Web HTML CSS\01-189 flex弹性布局6\3_骰子.html) 

练习： [189test骰子.html](2020Web HTML CSS\01-189 flex弹性布局6\189test骰子.html)





## 01-190 flex弹性布局7

2.两列固定，一列自适应。

圣杯布局

参考： [4_自适应.html](2020Web HTML CSS\01-190 flex弹性布局7\4_自适应.html) 

容器:

display:flex

左侧固定宽度150px

中间flex:1

右侧也跟左侧固定宽度

窗口宽度变化而左侧右侧固定不动，就中间自适应

练习： [190testHolyGrailLayou.html](2020Web HTML CSS\01-190 flex弹性布局7\190testHolyGrailLayou.html) 



3.百度弹性导航。

 [index-Baidu.html](2020Web HTML CSS\01-190 flex弹性布局7\index-Baidu.html) 



## 01-191 grid网格布局1

Grid布局是一个二维的布局方法，纵横两个方向总是同时存在。

| 作用在grid容器上      | **作用在grid子项上** |
| --------------------- | -------------------- |
| grid-template-columns | grid-column-start    |
| grid-template-rows    | grid-column-end      |
| grid-template-areas   | grid-row-start       |
| grid-template         | grid-row-end         |
| grid-column-gap       | grid-column          |
| grid-row-gap          | grid-row             |
| grid-gap              | grid-area            |
| justify-items         | justify-self         |
| align-items           | align-self           |
| place-items           | place-self           |
| justify-content       |                      |
| align-content         |                      |
| place-content         |                      |