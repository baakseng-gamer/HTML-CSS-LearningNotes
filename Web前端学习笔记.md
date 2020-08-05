HTML CSS系列教程





## 01-001 导学

视频教程：https://www.bilibili.com/video/BV1r64y1T7J8?p=35

### 1.HTML+CSS系列教程①之拨云见日

HTML CSS 切图流程 PC企业站布局 PC游戏站布局



### 2.HTML+CSS系列教程②之溯本求源

扩展HTML 扩展CSS HTML5新语法 CSS3新语法 兼容与hack



### 3.HTML+CSS系列教程③之风生水起

弹性布局 风格布局 移动端布局 响应式布局 Bootstrap



### 4.HTML+CSS系列教程④之巧夺天工

预编译CSS postcss CSS架构 高级功能 CSS与JS交互





## 01-002 什么是HTML和CSS

HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言 (**H**yper **T**ext **M**arkup **L**anguage)
- HTML 不是一种编程语言，而是一种**标记语言** (markup language)
- 标记语言是一套**标记标签** (markup tag)
- HTML 使用**标记标签**来描述网页

CSS 概述

- CSS 指层叠样式表 (*C*ascading *S*tyle *S*heets)
- 样式定义**如何显示** HTML 元素
- 样式通常存储在**样式表**中
- 把样式添加到 HTML 4.0 中，是为了**解决内容与表现分离的问题**
- **外部样式表**可以极大提高工作效率
- 外部样式表通常存储在 **CSS 文件**中
- 多个样式定义可**层叠**为一



实例： [index.html](2020Web HTML CSS\01-002 什么是 HTML和 CSS\index.html) 





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

实例： [index.html](2020Web HTML CSS\01-006 web前端三大核心技术\index.html) 



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

实例： [index.html](2020Web HTML CSS\01-007 基本结构与属性\index.html) 







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
	显示网页内容的区域
</body>
</html>
```

实例：  [index.html](2020Web HTML CSS\01-008 HTML初始代码\index.html) 



## 01-009 HTML中的注释

写法：<!-- 注释的内容 -->  在浏览器中看不到，只能在代码中看到注释的内容。

意义：

1.把暂时不用的代码注释起来，方便以后使用。

2.对开发人员进行提示。



快捷添加注释与删除注释：

1.ctrl + /   整行注释

2.shift + alt + a  块注释

实例： [index.html](2020Web HTML CSS\01-009 HTML中的注释\index.html) 



## 01-10 HTML语义化

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

实例：

 [index.html](2020Web HTML CSS\01-011 标题与段落\index.html) 

 [01_标题与段落.html](2020Web HTML CSS\01-011 标题与段落\01_标题与段落.html) 



## 01-012 文件修饰标签

强调 -> 双标签 : ``<strong></strong>``、``<em></em>``

区别：

1. 写法和展示效果是有区别的，一个加粗、一个斜体

2. strong的强调性更强，em的强调性稍弱。





上标 :`` <sup></sup>``

下标 : ``<sub></sub>``



删除文本 : ``<del></del>``

插入文本 :``<ins></ins>``

注：一般情况下，删除文本都是和插入文本配合使用的。

实例： [index.html](2020Web HTML CSS\01-012 文件修饰标签\index.html) 



## 01-013 图片标签与图片属性

img -> 单标签 
src : 引入图片的地址。
alt : 当图片出现问题的时候，可以显示一段友好的提示文字。
title : 提示信息
width、height : 图片的大小

实例： [index.html](2020Web HTML CSS\01-013 图片标签与图片属性\index.html) 



## 01-014 引入文件的地址路径

### 相对路径

​	. 在路径中表示当前路径
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

实例：

 [index.html](2020Web HTML CSS\01-015 跳转连接\index.html) 

 [index2.html](2020Web HTML CSS\01-015 跳转连接\index2.html) 

 [test1.html](2020Web HTML CSS\01-015 跳转连接\test1.html) 

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
.
.
.
<h2 id="html">HTML基础</h2>
.
.
<h2 id="css">CSS层叠样式表</h2>
.
.
<h2 class="javascript">JavaScript基础</h2>
```



2.#号 + name属性（注意name属性加给的是a标签）

```
<a href="#html">HTML</a>
<a href="#css">CSS</a>
<a href="#javascript">JavaScript</a>
.
.
.
<a name="html"></a>
<h2>HTML基础</h2>
.
.
<a name="css"></a>
<h2>CSS层叠样式表</h2>
.
.
<a name="javascript"></a>
<h2>JavaScript基础</h2>

```

实例：

 [index.html](2020Web HTML CSS\01-016 跳转锚点\index.html) 

 [index1.html](2020Web HTML CSS\01-016 跳转锚点\index1.html) 



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



实例：

 [index.html](2020Web HTML CSS\01-018 无序列表\index.html) 

 [test1.html](2020Web HTML CSS\01-018 无序列表\test1.html) 



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

实例：

 [index.html](2020Web HTML CSS\01-019 有序列表\index.html) 

 [test.html](2020Web HTML CSS\01-019 有序列表\test.html) 



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

实例： [index.html](2020Web HTML CSS\01-020 定义列表\index.html) 



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

 [index.html](2020Web HTML CSS\01-021 嵌套列表\index.html) 



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

 [index1.html](2020Web HTML CSS\01-021 嵌套列表\index1.html) 



练习： [test.html](2020Web HTML CSS\01-021 嵌套列表\test.html) 



## 01-022 表格标签

table、tr、th、td、caption 等

注：之前是有嵌套关系的，要符合嵌套规范。

语义化标签：tHead、tBody、tFood

注：在一个table中，tBody是可以出现多次的，但是tHead、tFood只能出现一次。

align : left、center、right

valign : top、middle、bottom

实例： [index.html](2020Web HTML CSS\01-022 表格标签\index.html) 









## 01-023 表格属性

   border ： 表格边框

   cellpadding ： 单元格内的空间

   cellspacing ： 单元格之间的空间

   rowspan ： 合并行

   colspan ： 合并列

   align ： 左右对齐方式

   valign ：上下对齐方式	

实例： [index.html](2020Web HTML CSS\01-023 表格属性\index.html) 



快速打出8列6行：

``tr*6>td*8``

### 关于border-collapse

设置表格极细边框border-collapse: collapse;

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

实例： [index.html](2020Web HTML CSS\01-024 表单input标签\index.html) 



## 01-025 表单相关标签

       <textarea> ： 多行文本框
       <select>、<option>：下拉菜单
       <label>：辅助表单
 form、input、textarea、select、label ..

input(单标签)标签有一个type属性，决定是什么控件。

还有一些常见的属性： checked、disabled、name、for ...

```
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

        <input type="radio" name="gender" id="man"><label for="man">男</label>
        <input type="radio" name="gender" id="woman"><label for="woman">女</label>
```

实例： [index.html](2020Web HTML CSS\01-025 表单相关标签\index.html) 



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

实例： [index.html](2020Web HTML CSS\01-026 表格表单组合实例\index.html) 



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

内部样式在<style>标签内添加的样式  优点：可以复用代码

区别：内部样式的代码可以复用、复合W3C的规范标准，进行让结构和样式分开处理。

实例： [index.html](2020Web HTML CSS\01-029 内联样式与内部样式\index.html) 



## 01-030 外部样式及两种写法

引入一个单独的CSS文件，name.css

``<link>``标签：rel、href

rel 属性规定当前文档与被链接文档之间的关系。

stylesheet 文档的外部样式表。

@import 注：这种方式有很多问题，不建议使用。

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

实例：

 [index.html](2020Web HTML CSS\01-032 背景样式\index.html) 

 [index2.html](2020Web HTML CSS\01-032 背景样式\index2.html) 



## 01-033 背景实现视觉差效果

参考网站：http://www.divups.com/





实例： [index.html](2020Web HTML CSS\01-033 背景实现视觉差效果\index.html) 



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

实例： [index.html](2020Web HTML CSS\01-034 CSS边框样式\index.html) 



## 01-035 边框实现三角形

### transparent

background-color:transparent 无颜色，即透明

实例： [index.html](2020Web HTML CSS\01-035 边框实现三角形\index.html) 





## 01-036 family字体类型

font-family：字体类型

默认类型为浏览器设置的类型

英文字体：Arial , 'Times New Roman' 

中文字体：微软雅黑 ,  宋体

中文字体的英文名称

微软雅黑 : 'Microsoft YaHei'

宋体 : SimSun



衬线体与非衬线体

![20200508203000](\2020Web HTML CSS\01-036 family字体类型\20200508203000.png)

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

| 属性                                                         | 描述                                                        |
| :----------------------------------------------------------- | :---------------------------------------------------------- |
| [color](https://www.w3school.com.cn/cssref/pr_text_color.asp) | 设置文本颜色                                                |
| [direction](https://www.w3school.com.cn/cssref/pr_text_direction.asp) | 设置文本方向。                                              |
| [line-height](https://www.w3school.com.cn/cssref/pr_dim_line-height.asp) | 设置行高。                                                  |
| [letter-spacing](https://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp) | 设置字符间距。                                              |
| [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | 对齐元素中的文本。                                          |
| [text-decoration](https://www.w3school.com.cn/cssref/pr_text_text-decoration.asp) | 向文本添加修饰。                                            |
| [text-indent](https://www.w3school.com.cn/cssref/pr_text_text-indent.asp) | 缩进元素中文本的首行。                                      |
| text-shadow                                                  | 设置文本阴影。CSS2 包含该属性，但是 CSS2.1 没有保留该属性。 |
| [text-transform](https://www.w3school.com.cn/cssref/pr_text_text-transform.asp) | 控制元素中的字母。                                          |
| unicode-bidi                                                 | 设置文本方向。                                              |
| [white-space](https://www.w3school.com.cn/cssref/pr_text_white-space.asp) | 设置元素中空白的处理方式。                                  |
| [word-spacing](https://www.w3school.com.cn/cssref/pr_text_word-spacing.asp) | 设置字间距。                                                |

https://www.w3school.com.cn/css/css_text.asp



### text-decoration

文本装饰

下划线 : underline

删除线 :line-through

上划线 : overline

不添加任何装饰 : none

注：添加多个文本修饰：line-through underline overline



### text-transform

针对英文段落

文本大小写

小写：lowercase

大写：uppercase

只针对首字母大写：capitalize



###  text-indent

文本缩进 首行缩进

em单位：相对单位，1em永远都是跟字体大小相同



###  text-align

文本对齐方式

对齐方式 : left 、right、center、justify（两端点对齐）



### line-height

定义行高

什么是行高，一行文字的高度，上边距和下边距的等价关系。

默认行高：不是固定值，而是变化的。根据当前字体的大小再不断的变化。

取值：1. number( px )   |  scale ( 比例值 , 跟文字大小成比例的 )   |  length 设置固定的行间距。

![图片1](\2020Web HTML CSS\01-038-042 文本\图片1.png)



### letter-spacing

 字之间的间距



### word-spacing

词之间的间距  ( 针对英文段落的 )



### word-break

word-break : break-all; (非常强烈的折行)

word-wrap : break-word;(不是那么强烈的折行 ，会产生一些空白区域)  



实例： [index.html](2020Web HTML CSS\01-038-042 文本\index.html) 

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



实例： [index.html](2020Web HTML CSS\01-043 CSS复合样式\index.html) 





## 01-044 ID选择器及注意事项

ID选择器

CSS:#elem{}

heml:id="elem"

注：

 ID是唯一值，在一个页面中只能出现一次，出现多次是不符合规范的。

命名的规范，由字母、下划线、中划线、字母（并且第一个不能是数字）

驼峰写法 : searchButton (小驼峰)  SearchButton (大驼峰)  searchSmallButton

短线写法：search-small-button

下划线写法：search_small_button

实例： [index.html](2020Web HTML CSS\01-044 ID选择器及注意事项\index.html) 



## 01-045 CLASS选择器及注意事项

class选择器 类选择器

css:.elem{}

heml:class="elem"

注：

class选择器是可以复用的。

可以添加多个class样式。

多个样式的时候，样式的优先级根据CSS决定，而不是class属性中的顺序。

标签+类的写法

实例： [index.html](2020Web HTML CSS\01-045 CLASS选择器及注意事项\index.html) 



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

 [01后代.html](2020Web HTML CSS\01-047 层次选择器\01后代.html) 



### 父子  M > N { }

 [02父子.html](2020Web HTML CSS\01-047 层次选择器\02父子.html) 



### 兄弟  M ~ N { }  当前M下面的所有兄弟N标签

 [03兄弟.html](2020Web HTML CSS\01-047 层次选择器\03兄弟.html) 



### 相邻  M + N { }  当前M下面相邻的N标签

 [04相邻.html](2020Web HTML CSS\01-047 层次选择器\04相邻.html) 



### 总结

链接： [CSS选择器里不同的符号](2020Web HTML CSS\01-047 层次选择器\CSS选择器里不同的符号.md) 







## 01-048 属性选择器

| 选择器          | 说明                                           |
| --------------- | ---------------------------------------------- |
| M[attr]         | M元素选择指定为attr属性的集合                  |
| M[attr=value]   | M元素选择指定为attr属性和value值的集合         |
| M[attr*=value]  | M元素选择指定为attr属性并且包含值为value的集合 |
| M[attr^value]   | M元素选择指定为attr属性并且起始值为value的集合 |
| M[attr$=value]  | M元素选择指定为attr属性并且结束值为value的集合 |
| M[attr1[attr2]] | M元素选择满足多个属性的集合                    |

M[attr] {}

= : 完全匹配

*= : 部分匹配

^= : 起始匹配

$= : 结束匹配

[ ] [ ] [ ] : 组合匹配



| 选择器                                                       | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | 用于选取带有指定属性的元素。                                 |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | 用于选取带有指定属性和值的元素。                             |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
| [attribute*=value]                                           | 匹配属性值中包含指定值的每个元素。                           |



实例： [index.html](2020Web HTML CSS\01-048 属性选择器\index.html) 



## 01-049 hover等伪类选择器

M:伪类{}

:link       访问前的样式    ( 只能添加给a标签 )

:visited    访问后的样式    ( 只能添加给a标签 )

 :hover      鼠标移入时的样式  (可以添加给所有的标签)

 :active     鼠标按下时的样式  (可以添加给所有的标签)

注：

如果四个伪类都生效，一定要注意顺序：L V H A。

一般网站只这样去设置：a{ }   a:hover{}

实例： [index.html](2020Web HTML CSS\01-049 hover等伪类选择器\index.html) 



## 01-050 after等伪类选择器

:before 选择器向选定的元素前插入内容。

:after 选择器向选定的元素之后插入内容。

使用content属性即文本内容

实例： [after before.html](2020Web HTML CSS\01-050 after等伪类选择器\after before.html) 



 :checked、:disabled 、:focus 都是针对表单元素的 

:checked 选择器匹配每个已被选中的 input 元素（只用于单选按钮和复选框）。

:disabled 选择器匹配每个被禁用的元素（大多用在表单元素上）。

:focus 选择器用于选取获得焦点的元素。接受键盘事件或其他用户输入的元素都允许 :focus 选择器。

实例： [checked disabled focus.html](2020Web HTML CSS\01-050 after等伪类选择器\checked disabled focus.html) 



## 01-051 结构伪类选择器

nth-of-type() 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素.*n* 可以是数字、关键词或公式。

按照类型来计算，如果是class那么碰到不同类型的，单独一类，符合条件的选中。



nth-child() 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。n 可以是数字、关键词或公式。

按照个数来算。



角标是从1开始的，1表示第一项，2表示第二项 | n值 表示从0到无穷大

实例： [nth-child nth-of-type.html](2020Web HTML CSS\01-051 结构伪类选择器\nth-child nth-of-type.html) 

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



last-of-type

选择属于其父元素的最后元素的每个元素。



 only-of-type

选择属于其父元素唯一的元素的每个元素。



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







## 01-052 CSS样式的继承

文字相关的样式可以被继承

布局相关的样式不能被继承 ( 默认是不能继承的，但是可以设置继承属性 inherit 值 )

实例： [index.html](2020Web HTML CSS\01-052 CSS样式的继承\index.html) 





## 01-053 单一样式的优先级

1.相同样式优先级

当设置相同样式时，后面的优先级较高，但不建议出现重复设置样式的情况。



2.内部样式与外部样式

内部样式与外部样式优先级相同，如果都设置了相同样式，那么后写的引入方式优先级高。

实例： [index1.html](2020Web HTML CSS\01-053 单一样式的优先级\index1.html) 



3.单一样式优先级

style行间 > id > class > tag > * > 继承

注：

|                 | 权重值 |
| --------------- | ------ |
| 内联style       | 1000   |
| id              | 100    |
| class           | 10     |
| tag (div、p、a) | 1      |



实例： [index2.html](2020Web HTML CSS\01-053 单一样式的优先级\index2.html) 



## 01-054 important群组等优先级

!important

提升样式优先级，非规范方式，不建议使用。( 不能针对继承的属性进行优先级的提升 )

实例： [!important.html](2020Web HTML CSS\01-054 important群组等优先级\!important.html) 



标签+类与单类

标签+类 > 单类 

实例： [index1.html](2020Web HTML CSS\01-054 important群组等优先级\index1.html) 



群组优先级

群组选择器与单一选择器的优先级相同，靠后写的优先级高。

实例： [index2.html](2020Web HTML CSS\01-054 important群组等优先级\index2.html) 



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

![20200511081748](\2020Web HTML CSS\01-056 CSS盒子模型\20200511081748.png)

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

如果上面盒子margin为30px，下面盒子margin为50px，那么这俩盒子间距为50px，所以取这两个中的最大值

![20200511111929](\2020Web HTML CSS\01-058 盒模型之margin叠加问题\20200511111929.png)



设置margin:40px 又设置float:left

左右间距是40pz+40px=80px

![20200511112355](\2020Web HTML CSS\01-058 盒模型之margin叠加问题\20200511112355.png)

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

实例： [BFC1.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\BFC1.html) 



2、自适应两栏布局

每个盒子的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

实例： [BFC2.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\BFC2.html) 



3、清除浮动。

当我们不给父节点设置高度，子节点设置浮动的时候，会发生高度塌陷，这个时候我们就要清楚浮动。

实例： [BFC3.html](2020Web HTML CSS\01-058 盒模型之margin叠加问题\BFC3.html) 



总结

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

显示效果：

![20200511130236](\2020Web HTML CSS\01-059 盒模型之margin传递问题\20200511130236.png)

却不能在大盒子里下调100px，连同大盒子也跟着下调100px，margin-left和marginright无这问题

实例： [index.html](2020Web HTML CSS\01-059 盒模型之margin传递问题\index.html) 



解决方案：

1.BFC规范：上面有详解

2.给父容器加边框

实例： [index1.html](2020Web HTML CSS\01-059 盒模型之margin传递问题\index1.html) 



3.margin换成padding。

给父元素设置padding-top，然后调整高度，子元素去掉margin-top

实例： [index2.html](2020Web HTML CSS\01-059 盒模型之margin传递问题\index2.html) 





## 01-060 CSS盒子模型与扩展

margin左右自适应是可以的 ，但是上下自适应是不行的。( 如果想实现上下自适应的话，需要在第二大部分来进行学习 )

width、height不设置的时候，对盒子模型的影响，会自动去计算容器的大小，节省代码。



margin自适应居中

浏览器窗口自适应居中

实例： [index.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\index.html) 

盒子内居中

实例： [index2.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\index2.html) 



不设置content的现象

width、height不设置的时候，对盒子模型的影响，会自动去计算容器的大小，节省代码。

实例： [index3.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\index3.html) 



练习：

 [16_嵌套盒子的练习.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\16_嵌套盒子的练习.html)  这是采用测量方法参考设计图 缺点是改数值会坍塌

 [test.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\test.html) 把最外面的盒子设置display:inline-block才能紧紧包含子元素 随便改数值都上下左右完美间距

 [test1.html](2020Web HTML CSS\01-060 CSS盒子模型与扩展\test1.html) 



## 01-062 按类型划分标签

### 块标签 block

div p ul li h1.....

独占一行

支持所有样式

不写宽的时候，跟父元素的宽相同

所占区域是一个矩形



### 内联标签 inline

span a em strong img...

挨在一起的

有些样式不支持，例如：width、height、margin、padding

不写宽的时候，宽度由内容决定

所占的区域不一定是矩形

内联标签之间会有空隙，原因：换行产生的

### 内联块 inline-block

input、select...

挨在一起，但是支持宽高



注：布局一般用块标签，修饰文本一般用内联标签





## 01-063 按内容划分标签

Flow 流内容 文档流

Metadata 元数据 

Sectioning 分区 区块

Heading 标题

Phrasing 措辞 语句 短语

Embedded 嵌入的 内嵌

Interactive 互动的 

![20200512085313](\2020Web HTML CSS\01-063 按内容划分标签\20200512085313.png)



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
    </style>
    
    <body>
    <div class="p1">块1</div>
    <div class="p2">块1</div>
</body>
```

![20200512093849](2020Web HTML CSS\01-065 display显示框类型\20200512093849.png)

实例： [index.html](2020Web HTML CSS\01-065 display显示框类型\index.html) 





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

![20200512094809](\2020Web HTML CSS\01-065 display显示框类型\20200512094809.png)

实例： [index1.html](2020Web HTML CSS\01-065 display显示框类型\index1.html) 





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

![20200512095126](\2020Web HTML CSS\01-065 display显示框类型\20200512095126.png)

实例： [index2.html](2020Web HTML CSS\01-065 display显示框类型\index2.html) 



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

![20200512095954](\2020Web HTML CSS\01-066 标签嵌套规范\20200512095954.png)

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

实例： [index1.html](2020Web HTML CSS\01-066 标签嵌套规范\index1.html) 





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

有图片的： [img.html](2020Web HTML CSS\01-067 overflow溢出隐藏\img.html) 



overflow-x、overflow-y

x 属性规定是否对内容的左/右边缘进行裁剪 - 如果溢出元素内容区域的话。

y 属性规定是否对内容的上/下边缘进行裁剪 - 如果溢出元素内容区域的话。

实例： [x y.html](2020Web HTML CSS\01-067 overflow溢出隐藏\x y.html) 



## 01-068 透明度与手势

opacity : 0(透明 占空间) ~ 1(不透明)

0.5(半透明)



rgba()  a在 0 ~ 1区间内

注：可以让指定的样式透明，而不影响其他样式

注：占空间、所有的子内容也会透明

实例： [index.html](2020Web HTML CSS\01-068 透明度与手势\index.html) 

练习：

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

实例： [index1.html](2020Web HTML CSS\01-068 透明度与手势\index1.html) 



## 01-069 最大最小宽高

min-width、max-width

min-height、max-height

注：强化对百分比单位的理解

实例： [index.html](2020Web HTML CSS\01-069 最大最小宽高\index.html) 



%单位：换算 ->已父容器的大小进行换算



一个容器怎么适应屏幕的高 : 容器加height:100%;   body:100%;  html:100%;

html,body{ height:100%;}

.contrainer{ height:100%;}

实例： [index1.html](2020Web HTML CSS\01-069 最大最小宽高\index1.html) 

练习： [test.html](2020Web HTML CSS\01-069 最大最小宽高\test.html) 



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

![01](\2020Web HTML CSS\01-073 PNG等图片切图流程\01.png)



2、视图设置

由于ps默认未启用标尺及智能参考线等，因此需要自行开启：

![02](\2020Web HTML CSS\01-073 PNG等图片切图流程\02.png)



3、窗口设置

![03](\2020Web HTML CSS\01-073 PNG等图片切图流程\03.png)



如果左侧工具栏未开启显示，则也可在此设置让其显示；另外需要提的是，信息面板需要一些额外的设置：

![04](\2020Web HTML CSS\01-073 PNG等图片切图流程\04.png)



信息面板选项设置

![05](\2020Web HTML CSS\01-073 PNG等图片切图流程\05.png)

4、新建文件存储预设

![06](\2020Web HTML CSS\01-073 PNG等图片切图流程\06.png)



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



### 01-077 企业中的切图流程

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

实例：

 [index.html](2020Web HTML CSS\01-078 float浮动概念及原理\index.html) 

 [index1.html](2020Web HTML CSS\01-078 float浮动概念及原理\index1.html) 

父元素自适应已设浮动的子元素方法：

给父元素添加overflow:hidden



## 01-079 float注意点整理

float注意点

只会影响后面的元素。

内容默认提升半层。

默认宽根据内容决定。

换行排列。

主要给块元素添加，但也可以给内联元素添加。

实例：

 [index.html](2020Web HTML CSS\01-079 float注意点整理\index.html) 

 [index1.html](2020Web HTML CSS\01-079 float注意点整理\index1.html) 



## 01-080-081 清除float浮动

如何清除浮动

上下排列：clear属性，表示清除浮动的，left、right、both

实例： [index.html](2020Web HTML CSS\01-080 清除float浮动（上）\index.html) 



嵌套排列：

### 固定宽高

不推荐 , 不能把高度固定死，不适合做自适应的效果。

实例： [index1.html](2020Web HTML CSS\01-080 清除float浮动（上）\index1.html) 

### 父元素浮动

不推荐 , 因为父容器浮动也会影响到后面的元素。

实例： [index2.html](2020Web HTML CSS\01-080 清除float浮动（上）\index2.html) 

###  overflow : hidden

BFC规范 , 如果有子元素想溢出，那么会受到影响。

实例： [index3..html](2020Web HTML CSS\01-080 清除float浮动（上）\index3..html) 

### display : inline-block

BFC规范，不推荐，父容器会影响到后面的元素。

实例： [index4.html](2020Web HTML CSS\01-080 清除float浮动（上）\index4.html) 

### 设置空标签

不推荐 , 会多添加一个标签。

实例：  [index5.html](2020Web HTML CSS\01-081 清除float浮动（下）\index5.html) 

###  after伪类

推荐，是空标签的加强版，目前各大公司的做法。( clear属性只会操作块标签，对内联标签不起作用 )

```
.clear:after{
            content: '';
            clear: both;
            display: block;
}
```

实例： [index6.html](2020Web HTML CSS\01-081 清除float浮动（下）\index6.html) 



## 01-082-83 flat制作页面小结构

练习：利用浮动实现面面效果

 [test.html](2020Web HTML CSS\01-082-83 flat制作页面小结构\test.html) 

 [test2.html](2020Web HTML CSS\01-082-83 flat制作页面小结构\test2.html) 



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

实例： [index.html](2020Web HTML CSS\01-085 absolute绝对定位\index.html) 

使内联元素支持宽高 （让内联具备块特性）

实例： [index1.html](2020Web HTML CSS\01-085 absolute绝对定位\index1.html) 

使块元素默认宽根据内容决定（让块具备内联的特性）

 [index2.html](2020Web HTML CSS\01-085 absolute绝对定位\index2.html) 

如果有定位祖先元素相对于定位祖先元素发生偏移，没有定位祖先元素相对于整个文档发生偏移（绝对、相对、固定）

 [index3.html](2020Web HTML CSS\01-085 absolute绝对定位\index3.html) 







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

![20200514151139](\2020Web HTML CSS\01-085 absolute绝对定位\20200514151139.png)

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

实例： [fixed.html](2020Web HTML CSS\01-086 fixed和sticky及z-index\fixed.html) 



sticky黏性定位：

新增的，在指定的位置，进行黏性操作。

实例： [sticky.html](2020Web HTML CSS\01-086 fixed和sticky及z-index\sticky.html) 

练习： [sticky-test.html](2020Web HTML CSS\01-086 fixed和sticky及z-index\sticky-test.html) 



z-index定位层级。

默认层级为0

嵌套时候的层级问题

下图为默认z-index

![20200514181836](\2020Web HTML CSS\01-086 fixed和sticky及z-index\20200514181836.png)





设置z-index后，如下图

![20200514182125](\2020Web HTML CSS\01-086 fixed和sticky及z-index\20200514182125.png)



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

参考淘宝顶部

![20200514182548](\2020Web HTML CSS\01-087 定位实现下拉菜单\20200514182548.png)



方法：

父元素分两部分，顶部一行字高度，列表弄几行

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

实例： [index.html](2020Web HTML CSS\01-088 定位实现居中和装饰点\index.html) 



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



实例： [index.html](2020Web HTML CSS\01-089 CSS添加省略号\index.html) 

练习： [test.html](2020Web HTML CSS\01-089 CSS添加省略号\test.html) 



## 01-090 CSS精灵及好处

CSS Sprite

CSS雪碧也叫做CSS精灵，是一种网页图片应用处理方式。它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去加载



好处：

可以减少图片质量，网页的图片加载速度快

减少图片的请求次数，加快网页的打开

![01](\2020Web HTML CSS\01-090 CSS精灵及好处\01.png)

![02](\2020Web HTML CSS\01-090 CSS精灵及好处\02.png)



实例： [index.html](2020Web HTML CSS\01-090 CSS精灵及好处\index.html) 



## 01-091 CSS圆角设置

border-radius

给标签添加圆角

设置四个方向的值

四个属性值，分别表示左上角、右上角、右下角、左下角的圆角大小（**顺时针方向**）

border-radius：10px  20px  30px 40px;

![111](\2020Web HTML CSS\01-091 CSS圆角设置\111.png)





三个属性值，第一个值表示左上角，第二个值表示右上角和左下角（对角），第三个值表示右下角。

border-radius:10px  30px 60px; 

![222](\2020Web HTML CSS\01-091 CSS圆角设置\222.png)





两个属性值，第一个值表示左上角和右下角，第二个值表示右上角和左下角。

border-radius:20px 40px;

![333](\2020Web HTML CSS\01-091 CSS圆角设置\333.png)





![01](\2020Web HTML CSS\01-091 CSS圆角设置\01.png)

实例： [index.html](2020Web HTML CSS\01-091 CSS圆角设置\index.html) 







斜杠二组值：第一组值表示水平半径，第二组值表示垂直半径，每组值也可以同时设置1到4个值，规则与上面相同。

border-radius:100px/40px;

![1111](\2020Web HTML CSS\01-091 CSS圆角设置\1111.png)



border-radius完整结构形式（扩展了解一下，个人感觉好像用不到）

在W3C上查border-radius属性时，会发现上面描述的语法是这样的：

border-radius: 1-4 length|% / 1-4 length|%;

平时我们写的border-radius : 50px，其实完整的写法应该是：

border-radius : 50px 50px 50px 50px / 50px 50px 50px 50px;

![02](\2020Web HTML CSS\01-091 CSS圆角设置\02.png)

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

![2222](\2020Web HTML CSS\01-091 CSS圆角设置\2222.png)





实心圆、半圆、扇形、花瓣、胶囊、椭圆等方法： [各种图形.html](2020Web HTML CSS\01-091 CSS圆角设置\各种图形.html) 

蛋糕 甜筒 练习： [test.html](2020Web HTML CSS\01-091 CSS圆角设置\test.html) 





## 01-092-099 PC端企业类型整页制作

通栏 : 自适应浏览器的宽度。

版心 : 固定一个宽度，并且让容器居中。

 [index.html](2020Web HTML CSS\01-092-099 PC端企业类型整页制作\index.html) 



## 01-100-109 PC端游戏类型整页制作

多练多做： [index.html](2020Web HTML CSS\01-100-109 PC端游戏类型整页制作\index.html) 

鼠标停留切换页面： [text.html](2020Web HTML CSS\01-100-109 PC端游戏类型整页制作\text.html) 



## 01-110 HTML和CSS发展历史





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

实例： [index.html](2020Web HTML CSS\01-112 b标签与i标签\index.html) 





## 01-113 引用标签基本操作

blockquote  :  引用大段的段落解释
q  :  引用小段的短语解释
abbr  :  缩写或首字母缩略词
cite  :  引用著作的标题

实例： [index.html](2020Web HTML CSS\01-113 引用标签基本操作\index.html) 



## 01-114 iframe嵌套页面

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

iframe 标签会创建包含另外一个文档的内联框架，有效地将另一个 HTML 页面嵌入到当前页中。 

就是一个页面里插入另一个页面

New为HTML5新增的属性	

应用场景：数据传输、共享代码，局部刷新、第三方介入等。

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

实例： [wbr.html](2020Web HTML CSS\01-115 br标签与wbr标签\wbr.html)  动一动浏览器宽度试试看





## 01-116 pre标签与code标签

**pre** 元素可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。针对网页中的程序代码的显示效果。

**注意：**<pre> 元素是块级元素，但是只能包含文本或行内元素，任何块级元素（常见为可以导致段落断开的标签：例如<title>、<p> 和<address> 标签）都不能位于 <pre> 元素中。

在 HTML 4.01 中，"width" 属性已废弃，不可使用。 HTML5 不支持"width"属性。

**提示:** <pre> 标签的一个常见应用就是用来表示计算机的源代码。
**提示：**<pre> 标签与 <code> 标签结合起来使用，可以获得更加精确的语义。



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

实例： [index.html](2020Web HTML CSS\01-116 pre标签与code标签\index.html) 



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

![rect-coords](2020Web HTML CSS\01-117 map标签与area标签\rect-coords.png)

实例： [map area1.html](2020Web HTML CSS\01-117 map标签与area标签\map area1.html) 



正圆：

```
<img src="./img/star.jpg" alt="" usemap="#star">
    <map name="star">
        <area shape="circ" coords="300 162 100" href="https://www.taobao.com" alt="" target="_blank">
        <!-- circle为圆形 -->
    </map>
```

![circle-coords](2020Web HTML CSS\01-117 map标签与area标签\circle-coords.png)

实例： [map area2.html](2020Web HTML CSS\01-117 map标签与area标签\map area2.html) 



多边形：

```
<img src="./img/star.jpg" alt="" usemap="#star">
    <map name="star">
        <area shape="poly" coords="176 2 210 91 304 100 232 156 256 250 176 197 97 249 120 157 45 97 141 92" href="https://www.taobao.com" alt="" target="_blank">
        <!-- poly为多边形 -->
    </map>
```

![poly-coords](2020Web HTML CSS\01-117 map标签与area标签\poly-coords.png)

实例： [map area3.html](2020Web HTML CSS\01-117 map标签与area标签\map area3.html) 





## 01-118 embed标签与object标签

embed和object都表示能够嵌入一些多媒体，如flash动画、插件等。基本使用没有太多区别，主要是为了兼容不同的浏览器而已。包含对象，比如图像、音频、视频、Java applets、ActiveX、PDF 以及 Flash。

embed 标签是 HTML 5 中的新标签。

object 标签可以表示一个外部资源，可以将其视为一个映像、一个嵌套的浏览上下文，或者一个由插件处理的资源。

object 元素需要配合param 元素一起完成

提示：param标签定义用于对象的 run-time 设置。

提示：不要对图像使用 object 标签，请使用 img 标签代替。

实例： [ember object.html](2020Web HTML CSS\01-118 embed标签与object标签\ember object.html) 





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



实例： [video audio.html](2020Web HTML CSS\01-119 video标签与audio标签\video audio.html) 



## 01-120文字注解与文字方法

<ruby> 标签定义 ruby 注释（中文注音或字符）。
在东亚使用，显示的是东亚字符的发音。
将 <ruby> 标签与 <rt> 和 <rp> 标签一起使用：
<ruby> 元素由一个或多个需要解释/发音的字符和一个提供该信息的 <rt> 元素组成，还包括可选的 <rp> 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。





bdo 标签可覆盖默认的文本方向。

标签定义及使用说明
bdo 指的是 bidi 覆盖（Bi-Directional Override）。
bdo 标签用来覆盖默认的文本方向。
bdo 标签必须配合 dir 属性使用。
bdo 标签有 ltr 和 rtl 两个属性值，分别表示：从左到右显示文本和从右到左显示文本。

实例： [ruby rt与bdo.html](2020Web HTML CSS\01-120 文字注解与文字方法\ruby rt与bdo.html) 



## 01-121 link标签扩展学习

**定义和用法**
link 标签定义文档与外部资源的关系。
link 标签最常见的用途是链接样式表。

**HTML 与 XHTML 之间的差异**
在 HTML 中，<link> 标签没有结束标签。
在 XHTML 中，<link> 标签必须被正确地关闭。

例：

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



例：

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

实例： [index.html](2020Web HTML CSS\01-123 HTML5新语义化标签1-3\index.html) 



## 01-126 表格扩展学习

添加单线 : border-collapse : collapse

![01-12601](2020Web HTML CSS\01-126 表格扩展学习\01-12601.png)

![01-12602](2020Web HTML CSS\01-126 表格扩展学习\01-12602.png)

隐藏空单元 : empty-cells : hide

![01-12603](2020Web HTML CSS\01-126 表格扩展学习\01-12603.png)

![01-12604](2020Web HTML CSS\01-126 表格扩展学习\01-12604.png)

斜线分类 : border / rotate

```
        table .line{
            border-top: 50px solid tomato;
            border-left: 150px solid lightblue ;
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
```

![01-12605](2020Web HTML CSS\01-126 表格扩展学习\01-12605.png)

列分组 : colgroup  / col

```
            <col span="2" style="background-color: lightblue;">
            <col span="2" style="background-color:  tomato;">
```

![01-12606](2020Web HTML CSS\01-126 表格扩展学习\01-12606.png)

实例： [table.html](2020Web HTML CSS\01-126 表格扩展学习\table.html) 



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

![01-127 01](2020Web HTML CSS\01-127 表单扩展之美化控件\01-127 01.png)

![01-127 02](2020Web HTML CSS\01-127 表单扩展之美化控件\01-127 02.png)

实例： [form1.html](2020Web HTML CSS\01-127 表单扩展之美化控件\form1.html) 



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



![01-127 03](2020Web HTML CSS\01-127 表单扩展之美化控件\01-127 03.png)

![01-127 04](2020Web HTML CSS\01-127 表单扩展之美化控件\01-127 04.png)

但是鼠标移入【上传】按钮无显示“未选择任何文件”

实例： [form2-1.html](2020Web HTML CSS\01-127 表单扩展之美化控件\form2-1.html) 



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

![01-127 05](2020Web HTML CSS\01-127 表单扩展之美化控件\01-127 05.png)

鼠标移入【上传】按钮能显示“未选择任何文件”

实例： [form2-2.html](2020Web HTML CSS\01-127 表单扩展之美化控件\form2-2.html) 



## 01-128 表单扩展之新input控件

新的input控件
email  :  电子邮件地址输入框

![01](2020Web HTML CSS\01-128 表单扩展之新input控件\01.png)



url  :  网址输入框

以下为格式不正确：

![url01](2020Web HTML CSS\01-128 表单扩展之新input控件\url01.png)

![url02](2020Web HTML CSS\01-128 表单扩展之新input控件\url02.png)

格式正确如下图：

![url03](2020Web HTML CSS\01-128 表单扩展之新input控件\url03.png)

![url04](2020Web HTML CSS\01-128 表单扩展之新input控件\url04.png)



number  :  数值输入框

字母键盘无法输入，而且有箭头键用来加减数字



range  :  滑动条

```
<input type="range" min="0" max="10" value="2">
```

![range](2020Web HTML CSS\01-128 表单扩展之新input控件\range.png)



date / month / week  :  日期控件

![date month week](2020Web HTML CSS\01-128 表单扩展之新input控件\date month week.png)

​	

search  :  搜索框

输入字符 框内右侧会显示叉号

```
<input type="search" placeholder="your keyword">
```

![search](2020Web HTML CSS\01-128 表单扩展之新input控件\search.png)



color  :  颜色控件

![color](2020Web HTML CSS\01-128 表单扩展之新input控件\color.png)





tel  :  电话号码输入框  ( 在移动端会默认调起数字键盘 )



time  :  时间控件

![time](2020Web HTML CSS\01-128 表单扩展之新input控件\time.png)



**注意：**以上控件在不同浏览器或不同版本 显示有所区别

参考链接：https://www.w3cschool.cn/htmltags/att-input-type.html

实例： [form_new1.html](2020Web HTML CSS\01-128 表单扩展之新input控件\form_new1.html) 



## 01-129 表单扩展之新属性

表单属性：
autocomplete  :  自动完成  默认 on  /  off

```
<input type="text" name="username" >
```

添加name="username"会出现下图所示：

![autocomplete](2020Web HTML CSS\01-129 表单扩展之新属性\autocomplete.png)



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

![autofocus](2020Web HTML CSS\01-129 表单扩展之新属性\autofocus.png)

required  :  不能为空

空框提交会出现提示

![required](2020Web HTML CSS\01-129 表单扩展之新属性\required.png)



pattern  :  正则验证

```
<input type="text" name="username" autocomplete="off" autofocus required pattern="[a-z]+">
```

\d 匹配一个数字0~9 

\d+表示1个或多个数字

[a-z]+ 26个字母里选1个或多个

输入提交后如不符合格式会出现提示

可参考链接：https://www.w3cschool.cn/rxoyts/或者其它

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

![fieldset legend](2020Web HTML CSS\01-131 表单扩展之标签\fieldset legend.png)



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

![optgroup](2020Web HTML CSS\01-131 表单扩展之标签\optgroup.png)

实例： [form_new4.html](2020Web HTML CSS\01-131 表单扩展之标签\form_new4.html) 





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

![BFC](2020Web HTML CSS\01-132 BFC规范\BFC.png)

红块设置了margin-bottom 30px 蓝块设置了margin-top 30px，可是两块纵向距离却不是30px+30px=60px，而是选取最大的30px

 [BFC1.html](2020Web HTML CSS\01-132 BFC规范\BFC1.html) 

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

![BFC4](2020Web HTML CSS\01-132 BFC规范\BFC4.png)

本来想把小块在大块里向下移动50px，却连带大块也移下50px



解决方法：父元素添加overflow:hidden

或者父元素添加position:relative,子元素添加position absolute

 [BFC4.html](2020Web HTML CSS\01-132 BFC规范\BFC4.html) 



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

![BFC5](2020Web HTML CSS\01-132 BFC规范\BFC5.png)

无设高度的div1不能被已设float:left的div2撑满

解决方法：

1.父元素添加overflow:hidden

2.或者添加float:left

3.又或者添加display:inline-block

![BFC5-1](2020Web HTML CSS\01-132 BFC规范\BFC5-1.png)

 [BFC5.html](2020Web HTML CSS\01-132 BFC规范\BFC5.html) 





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

![BFC6](2020Web HTML CSS\01-132 BFC规范\BFC6.png)

小绿块把大绿块覆盖了

解决方法：

给div2添加overflow:hidden

 [BFC6.html](2020Web HTML CSS\01-132 BFC规范\BFC6.html) 