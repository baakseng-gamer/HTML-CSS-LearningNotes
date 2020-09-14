# **4.HTML+CSS系列教程④之巧夺天工**

预编译CSS postcss CSS架构 高级功能 CSS与JS交互



## 01-220 Sass与Less介绍和环境搭建

Sass和Less都属于CSS预处理器，CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，如：变量、语句、函数、继承等概念。将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行CSS的编码工作。



Less

官网：http://lesscss.org/

VSCode插件： Easy Less



Sass

官网：https://sass-lang.com/

VSCode插件： Easy Sess



新建Less文件（后缀名为.less），开启VSCode插件Easy Less，在less文件输入并保存，会自动创建.css文件也会自动生内容。

Sass的后缀名为scss，生成css和上面的Less一样



<a href="2020Web HTML CSS\01-220 Sass与Less介绍和环境搭建">Sass与Less搭建</a>





## 01-221 Sass与Less注释 变量 插值 作用域

### 注释

单行注释

```
// 单行注释，不会被编译出来
```

不会被编译到.css文件里



多行注释

```
/*
	多行注释
/*
```

会被编译到.css文件里



Sass注释到css后在第一行会自动生成@charset "UTF-8";



### 变量 插值 作用域

.less

```
@number123 : 123px;
@number16 : 16px;
@color1 : tomato;
@key : margin;

.box2{
    width: @number123;
    height: @number123;
    font-size: @number16;
    background: @color1;
    @{key} : auto;
    
}
```

.css

```
.box2 {
  width: 123px;
  height: 123px;
  font-size: 16px;
  background: tomato;
  margin: auto;
}
```





.less

```
@i : 3;

.box@{i}{
    width: 100%;
}
```

.css

```
.box3 {
  width: 100%;
}
```



.less

```
@number : 666px
.box6{
    height: @number;
    @number : 456px;
    width: @number;
}
```

.css

```
.box6 {
  height: 456px;
  width: 456px;
}
```

这点与sass不同，只吃括号内







.scss的则是用$，与.less的@相反

.scss

```
$number100 : 100px;
$number20 : 20px;
$key : margin;
.box{
    width: $number100;
    height: $number100;
    font-size: $number20;
    #{$key} : auto;
}
```

.css

```
.box {
  width: 100px;
  height: 100px;
  font-size: 20px;
}
```



.scss

```
$i : 5;
.box#{$i}{
    width: 200px;
}
```

.css

```
.box5 {
  width: 200px;
}
```

与less不同，要添加#{...}



.scss

```
$number : 666px;
.box6{
    height: $number;
    $number : 369px;
    width: $number;
}
```

.css

```
.box6 {
  height: 666px;
  width: 369px;
}
```

这点与less不同，作用于有顺序的

<a href="2020Web HTML CSS\01-221 Sass与Less注释 变量 插值 作用域">注释 变量 插值 作用域</a>





## 01-222 Sass与Less嵌套之选择器 伪类 属性

.less

```
ul{
    list-style: none;
    li{
        float: left;
        div{
            margin: 10px;
        }
        p{
            padding: 15px;
        }
    }
}
```

.css

```
ul {
  list-style: none;
}
ul li {
  float: left;
}
ul li div {
  margin: 10px;
}
ul li p {
  padding: 15px;
}
```



.less

```
.con1{
    background: tomato;
    &:hover{
        background: lightblue;
    }
}
```

.css

```
.con1 {
  background: tomato;
}
.con1:hover {
  background: lightblue;
}
```





.scss

```
.con1{
    background: tomato;
    &:hover{
        background: lightblue;
    }
}
```

.css

```
.con1 {
  background: tomato;
}

.con1:hover {
  background: lightblue;
}
```

&就是复制第一行的，比如

```
.con .box a{
	background:tomato;
	&:hover{
	background:royalblue;
	}
}
```

&:hover等于.con .box a:hover{...}



嵌套属性 less没这种嵌套属性写法

.scss

```
.con2{
    background: gray;
    p {
        font : {
            size : 10px;
            weight : bold;
            family : 宋体;
        }
    }
}
```

.css

```
.con2 {
  background: gray;
}

.con2 p {
  font-size: 10px;
  font-weight: bold;
  font-family: 宋体;
}
```



<a href="2020Web HTML CSS\01-222 Sass与Less嵌套之选择器 伪类 属性">嵌套之选择器 伪类 属性</a>



## 01-223 Sass与Less运算之单位 转义 颜色

.scss

```
$num : 100px;
.box1{
    width: $num * 4;
    height: $num + 20em;
    //Sass中如果单位不同的话，是不能运算
}
```

.css

```
.box1 {
  width: 400px;
}
```



.scss

```
.box2{
    font: 20px / 1.5;
    padding : (20px / 1.5);
    color: #010202 * 2;
}
```

.css

```
.box2 {
  font: 20px / 1.5;
  padding: 13.33333px;
  color: #020404;
}
```

默认 / 是分割的操作



<a href="2020Web HTML CSS\01-223 Sass与Less运算之单位 转义 颜色">运算之单位 转义 颜色</a>



## 01-224 Sass与Less函数之内置 自定义

| 函数                       | 描述 & 实例                                                  |
| :------------------------- | :----------------------------------------------------------- |
| abs(*number*)              | 返回一个数值的绝对值。  **实例:** abs(15) 结果: 15 abs(-15) 结果: 15 |
| ceil(*number*)             | 向上取整  **实例:** ceil(15.20) 结果: 16                     |
| comparable(*num1*, *num2*) | 返回一个布尔值，判断 *num1* 与 *num2* 是否可以进行比较  **实例:** comparable(15px, 10px) 结果: true comparable(20mm, 1cm) 结果: true comparable(35px, 2em) 结果: false |
| floor(*number*)            | 向下取整  **实例:** floor(15.80) 结果: 15                    |
| max(*number...*)           | 返回最大值  **实例:** max(5, 7, 9, 0, -3, -7) 结果: 9        |
| min(*number...*)           | 返回最小值  **实例:** min(5, 7, 9, 0, -3, -7) 结果: -3       |
| percentage(*number*)       | 将数字转化为百分比的表达形式。  **实例:** percentage(1.2) 结果: 120 |
| random()                   | 返回 0-1 区间内的小数，  **实例:** random() 结果: 0.45673    |
| random(*number*)           | 返回 1 至 number 之间的整数，包括 1 和 limit。  **实例:** random(6) 结果: 4 |
| round(*number*)            | 返回最接近该数的一个整数，四舍五入。  **实例:** round(15.20) 结果: 15 round(15.80) 结果: 16 |



.scss

```
$num1 : 50.86;
.box2{
    width : round(100.5px);
    // 四舍五入

    height : percentage(1.2);
    // 返回百分比数值

    margin : random();
    // 返回0-1之间的小数

    padding : round($num1) + px;
}
```

.css

```
.box2 {
  width: 101px;
  height: 120%;
  margin: 0.82987;
  padding: 51px;
}
```



.scxx

```
@function sum( $n , $m) {
    @return $n + $m;
}
.box3{
    font-size : sum(4px , 5px);
}
```

.css

```
.box3 {
  font-size: 9px;
}
```



<a href="2020Web HTML CSS\01-224 Sass与Less函数之内置 自定义">函数之内置 自定义</a>

sqrt为平方根、开根，比如sqrt(25)=5



具体的可参阅：https://www.runoob.com/sass/sass-functions.html





## 01-225 Sass与Less混入 命名空间 继承

### @mixin与@include

@mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。

@include 指令可以将混入（mixin）引入到文档中。

.scss

```
@mixin show {
    display : block;
}
.box2 {
    width: 100px;
    @include show;
}
```

.css

```
.box2 {
  width: 100px;
  display: block;
}
```

@mixin来定义，然后@include引入



.scss

```
@mixin hide($color){
    display: none;
    color : $color;
}
.box3 { 
    width: 200px;
    @include hide(blue);
}
```

.css

```
.box3 {
  width: 200px;
  display: none;
  color: blue;
}
```



### @extend 与 继承

@extend 指令告诉 Sass 一个选择器的样式从另一选择器继承。



.scss

```
.line{
    display: inline;
}

.box2 {
    @extend .line;
}
```

.css

```
.line, .box2 {
  display: inline;
}

```



.scss

```
.line{
    display: inline;
}
.color{
    color: tomato;
}
.box2 {
    @extend .line;
    @extend .color;
}
```

.css

```
.line, .box2 {
  display: inline;
}

.color, .box2 {
  color: tomato;
}
```



<a href="2020Web HTML CSS\01-225 Sass与Less混入 命名空间 继承">混入 命名空间 继承</a>





## 01-226 Sass与Less 合并 媒体查询

### 合并

.scss

```
$background : (
    a : url(a.png),
    b : url(b.png)
);
.box2 {
    background: map-values($background);
}
```

.css

```
.box2 {
  background: url(a.png), url(b.png);
}
```



.scss

```
$transform1 : (
    a : scale(2),
    b : rotate(30deg)
);
.box3 {
    transform: map-values($transform1);
}
```

.css

```
.box3 {
  transform: scale(2), rotate(30deg);
}
```



如果想编译到css里为transform: scale(2)  rotate(30deg);的话（就是不带逗号）

则.scss

```
.box4 {
    transform: zip(map-values($transform1)...);
}
```



### 媒体查询

.scss

```
.box5 {
    width : 100px;
    @media all and ( min-width : 768px){
        width: 600px;
    }
    @media all and ( min-width : 1440px ){
        width: 900px;
    }
}
```

.css

```
.box5 {
  width: 100px;
}

@media all and (min-width: 768px) {
  .box5 {
    width: 600px;
  }
}

@media all and (min-width: 1440px) {
  .box5 {
    width: 900px;
  }
}
```



<a href="2020Web HTML CSS\01-226 Sass与Less 合并 媒体查询">合并 媒体查询</a>



## 01-227 Sass与Less条件 循环 导入

### 条件

.scss

```
$count : 5;

.box11 { 
    @if($count > 4) {
        width : 100px + $count;
    }
    @else{
        width : 10px + $count;
    }
}
```

.css

```
.box11 {
  width: 105px;
}
```

当count为5时，则符合$count > 4的条件，执行width : 100px + 5px，编译到.css为width : 105px;

如果count为3时，则width : 10px + 3px，编译出来为13px。



### 循环

.scss

```
@for $abc from 0 through 3 {
    .box-#{$abc}{
        width : 100px + $abc
    }
}
```

.css

```
.box-0 {
  width: 100px;
}

.box-1 {
  width: 101px;
}

.box-2 {
  width: 102px;
}

.box-3 {
  width: 103px;
}
```

从0开始循环到3结束



.scss

```
@for $def from 0 to 3 {
    .con#{$def}{
        width : 100px + $def;
    }
}
```

.css

```
.con0 {
  width: 100px;
}

.con1 {
  width: 101px;
}

.con2 {
  width: 102px;
}
```

从0开始循环到2结束



这两例子区别是包不包插结束值

第1个例子就是from 0 through 3包括结束值为3

第2个例子from 0 to 3，不含结束值为3



### 导入

.scsss

```
@import './reset.scss';
```

reset.scss

```
* {
    margin: 0;
    padding: 0;;
}
ul , li {
    list-style: none;
}
img {
    display: block;
}
```

.css

```
* {
  margin: 0;
  padding: 0;
}

ul, li {
  list-style: none;
}

img {
  display: block;
}
```



<a href="2020Web HTML CSS\01-227 Sass与Less条件 循环 导入">条件 循环 导入</a>



## 这次以上只选择学习Sass



## 01-228-230 PostCSS（后学，需要npm）



## 01-231 CSS架构与文件组织

在一个大型项目中，由于页面过多，导致CSS代码难以维护和开发。所以CSS架构可以帮助我们解决文件管理与文件划分等问题。

首先要对CSS进行模块化处理，一个模块负责一类操作行为。可利用Sass或Less来实现

| **文件夹**     | **含义**                                                     |
| -------------- | ------------------------------------------------------------ |
| **base**       | 一些初始的通用CSS，如重置默认样式，动画，工具，打印等。      |
| **components** | 用于构建页面的所有组件，如按钮，表单，表格，弹窗等。         |
| **layout**     | 用于布局页面的不同部分，如页眉，页脚，弹性布局，网格布局等。 |
| **pages**      | 放置页面之间不同的样式，如首页特殊样式，列表页特殊样式等。   |
| **themes**     | 应用不同的主题样式时，如管理员，买家，卖家等。               |
| **abstracts**  | 放置一些如：变量，函数，响应式等辅助开发的部分。             |
| **vendors**    | 放置一些第三方独立的CSS文件，如bootstrap，iconfont等。       |

<a href="2020Web HTML CSS\01-231 CSS架构与文件组织">CSS架构与文件组织</a>





## 01-232 CSS新特征之自定义属性

CSS 自定义属性(也称为“CSS 变量”)，在目前所有的现代浏览器中都得到了支持。

定义与使用
计算
默认值
作用域



```
        :root {
            --qingse : 	#00CACA;
        }
        .box {
            width: 100px;
            height: 100px;
            background: var(--qingse);
        }
```

原本qingse（青色）没有属性，自定义后就有了



```
:root {
	--number : 50;
}
.box2{
	width : --number; //不正确，没单位，即width:50;
	width : calc(var(--number) * 1px); // 正确，50 * 1px =50px
	height : 100px;
	background : tomato;
}
```

实例： [232-01 variables.html](2020Web HTML CSS\01-232 CSS新特征之自定义属性\232-01 variables.html) 



```
        :root {
            --color : tomato;
        }

        .box {
            --color : royalblue;
            background: var(--color);
            width: 100px;
            height: 100px;
        }
```

输出结果为背景色royalblue，就算:root放到.box下面还是royalblue



```
:root {
	--size : 50px;
}
.box {
	font-size : var(--size , 70px)
}
```

输出结果为50px

实例： [232-02 variables.html](2020Web HTML CSS\01-232 CSS新特征之自定义属性\232-02 variables.html) 



```
        #box{
            --color : lightseagreen;
        }
        :root {
            --color : lightskyblue;
        }
        div{
            --color : tomato;
            width: 500px;
            height: 100px;
            background: var(--color);
        }
```

红还是蓝又还是绿

与权重有关的

实例： [232-03 variables.html](2020Web HTML CSS\01-232 CSS新特征之自定义属性\232-03 variables.html) 





## 01-233 CSS新特性之shapes

一个 CSS 模块，用于定义在 CSS 值中使用的几何形状。



### shape-outside

定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。 默认情况下，内联内容包围其边距框; shape-outside提供了一种自定义此包装的方法，可以将文本包装在复杂对象周围而不是简单的框中。

语法

```
/* 关键字值 */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* 函数值 */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);

/* <url> 值 */
shape-outside: url(image.png);

/* 渐变值 */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

/* 全局值 */
shape-outside: initial;
shape-outside: inherit;
shape-outside: unset;
```



实例： [233-01 shapes.html](2020Web HTML CSS\01-233 CSS新特性之shapes\233-01 shape-outside.html) 



### clip-path

使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

语法

```
/* Keyword values */
clip-path: none;

/* <clip-source> values */ 
clip-path: url(resources.svg#c1);

/* <geometry-box> values */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* Box and shape values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: unset;
```



### shape-margin

用于设定由shape-outside创建的CSS形状的外边距。



实例： [233-02 clip-path.html](2020Web HTML CSS\01-233 CSS新特性之shapes\233-02 clip-path.html) 



## 01-234 CSS新特性之scrollbar

用于实现自定义滚动条样式。

MDN文档才有详细解释

::-webkit-scrollbar — 整个滚动条.
::-webkit-scrollbar-button — 滚动条上的按钮 (上下箭头).
::-webkit-scrollbar-thumb — 滚动条上的滚动滑块.
::-webkit-scrollbar-track — 滚动条轨道.
::-webkit-scrollbar-track-piece — 滚动条没有滑块的轨道部分.
::-webkit-scrollbar-corner — 当同时有垂直滚动条和水平滚动条时交汇的部分.
::-webkit-resizer — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).

代码示例

```
        body {
            height: 2000px;
        }
        html::-webkit-scrollbar {
            width: 10px;
        }
        html::-webkit-scrollbar-thumb {
            background: tomato;
            border-radius: 5px;
        }
        html::-webkit-scrollbar-track {
            background: #dedede;
            box-shadow: inset 0 0 5px gray;
        }
```

实例： [234-01 scrollbar.html](2020Web HTML CSS\01-234 CSS新特性之scrollbar\234-01 scrollbar.html) 

可参阅：https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar



练习：

页面里的小区域 [234-02 test-scrollbar.html](2020Web HTML CSS\01-234 CSS新特性之scrollbar\234-02 test-scrollbar.html) 

图片的横向展示 [234-03 test-scrollbar.html](2020Web HTML CSS\01-234 CSS新特性之scrollbar\234-03 test-scrollbar.html) 



## 01-235 CSS新特性之scroll snap

CSS Scroll Snap（CSS 滚动捕捉）允许你在用户完成滚动后多锁定特定的元素或位置。

容器添加scroll-snap-type属性

子元素添加scroll-snap-align:start | center |end;

实例： [4_新特性之滚动捕捉.html](2020Web HTML CSS\01-235 CSS新特性之scroll snap\4_新特性之滚动捕捉.html) 

练习： [235 test-scroll snap.html](2020Web HTML CSS\01-235 CSS新特性之scroll snap\235 test-scroll snap.html) 





## 01-236 CSS与JS结合之钟表

参考： 

[5_CSS与JS结合之时钟.html](2020Web HTML CSS\01-236 CSS与JS结合之钟表\5_CSS与JS结合之时钟.html) 



先读取页面内的元素 document.querySelector

```
var ul = document.querySelector('ul');
var hour = document.querySelector('#hour');
var minu = document.querySelector('#minu');
var seco = document.querySelector('#seco');
```



刻度一共60个，用CSS要写很多行，优化方法是用JS渲染

```
    for(var i=0;i<60;i++){
        var li = document.createElement('li');
        li.style.transform = 'rotate('+ ( i*6 ) +'deg)';
        if(i%5 === 0){
            li.style.height = '15px';
        }
        ul.appendChild(li);
    }
```

i%5即i除以5后余数为0，即5 10 15 20。。。。。

i*6 即30度、60度、90度。。。就是hour的刻度，给这些 hour的刻度加长长度

appendChild为创建子元素



如何让指针跑起来

```
    run();
    setInterval(run,1000);

    function run(){
        var date = new Date();
        var iH = date.getHours();
        var iM = date.getMinutes();
        var iS = date.getSeconds()

        hour.style.transform = 'rotate('+ ( iH * 30 + iM/2 ) +'deg)';
        minu.style.transform = 'rotate('+ ( iM * 6 ) +'deg)';
        seco.style.transform = 'rotate('+ ( iS * 6 ) +'deg)';

    }
```

练习： [236 clock.html](2020Web HTML CSS\01-236 CSS与JS结合之钟表\236 clock.html) 

参考他人作品： [test.html](2020Web HTML CSS\01-236 CSS与JS结合之钟表\test.html) 



## 01-237 CSS与JS结合之折叠菜单

参考： [6_CSS与JS结合之折叠菜单.html](2020Web HTML CSS\01-237 CSS与JS结合之折叠菜单\6_CSS与JS结合之折叠菜单.html) 

方法：

五连div嵌套

js获取按钮 .list和div

设置往下翻

```
    <script>
        var btn = document.getElementById("btn");
        var list = document.getElementById("list");
        var listItems = list.getElementsByTagName("div");
  
        btn.onclick = function () {
          for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.transition = "1s " + i * 150 + "ms";
            listItems[i].style.transform = "rotateX(0)";
          }
        };
      </script>
```

练习： [237 test.html](2020Web HTML CSS\01-237 CSS与JS结合之折叠菜单\237 test.html) 