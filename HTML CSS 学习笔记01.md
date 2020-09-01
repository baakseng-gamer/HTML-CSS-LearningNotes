**HTML CSS系列教程**

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

![20200508203000](E:/Web前端/教程/2020Web HTML CSS/01-036 family字体类型/20200508203000.png)

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

![图片1](E:/Web前端/教程/2020Web HTML CSS/01-038-042 文本/图片1.png)

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

![20200511081748](E:/Web前端/教程/2020Web HTML CSS/01-056 CSS盒子模型/20200511081748.png)

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

![20200512095954](E:/Web前端/教程/2020Web HTML CSS/01-066 标签嵌套规范/20200512095954.png)

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

![01-070-01](E:/Web前端/教程/2020Web HTML CSS/01-070 CSS默认样式/01-070-01.png)



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

![111](E:/Web前端/教程/2020Web HTML CSS/01-091 CSS圆角设置/111.png)





三个属性值，第一个值表示左上角，第二个值表示右上角和左下角（对角），第三个值表示右下角。

border-radius:10px  30px 60px; 

![222](E:/Web前端/教程/2020Web HTML CSS/01-091 CSS圆角设置/222.png)





两个属性值，第一个值表示左上角和右下角，第二个值表示右上角和左下角。

border-radius:20px 40px;

![333](E:/Web前端/教程/2020Web HTML CSS/01-091 CSS圆角设置/333.png)





![01](E:/Web前端/教程/2020Web HTML CSS/01-091 CSS圆角设置/01.png)

实例： [index.html](2020Web HTML CSS\01-091 CSS圆角设置\index.html) 





斜杠二组值：第一组值表示水平半径，第二组值表示垂直半径，每组值也可以同时设置1到4个值，规则与上面相同。

border-radius:100px/40px;

![1111](E:/Web前端/教程/2020Web HTML CSS/01-091 CSS圆角设置/1111.png)



border-radius完整结构形式（扩展了解一下，个人感觉好像用不到）

在W3C上查border-radius属性时，会发现上面描述的语法是这样的：

border-radius: 1-4 length|% / 1-4 length|%;

平时我们写的border-radius : 50px，其实完整的写法应该是：

border-radius : 50px 50px 50px 50px / 50px 50px 50px 50px;

![02](E:/Web前端/教程/2020Web HTML CSS/01-091 CSS圆角设置/02.png)

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

![2222](E:/Web前端/教程/2020Web HTML CSS/01-091 CSS圆角设置/2222.png)





实心圆、半圆、扇形、花瓣、胶囊、椭圆等方法： [各种图形.html](2020Web HTML CSS\01-091 CSS圆角设置\各种图形.html) 

蛋糕 甜筒 练习： [test.html](2020Web HTML CSS\01-091 CSS圆角设置\test.html) 





## 01-092-099 PC端企业类型整页制作

通栏 : 自适应浏览器的宽度。

版心 : 固定一个宽度，并且让容器居中。

 [index.html](2020Web HTML CSS\01-092-099 PC端企业类型整页制作\index.html) 



## 01-100-109 PC端游戏类型整页制作

多练多做： [index.html](2020Web HTML CSS\01-100-109 PC端游戏类型整页制作\index.html) 

鼠标停留切换页面： [text.html](2020Web HTML CSS\01-100-109 PC端游戏类型整页制作\text.html) 

