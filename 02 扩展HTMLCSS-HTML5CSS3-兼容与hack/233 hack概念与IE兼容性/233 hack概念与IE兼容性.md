# 233 Hack概念与IE兼容性

视频序号166-168

目录
- [233 Hack概念与IE兼容性](#233-hack概念与ie兼容性)
- [1. 何为Hack](#1-何为hack)
- [2. 属性前缀法](#2-属性前缀法)
- [3. 选择器前缀法](#3-选择器前缀法)
- [4. IE条件注释法](#4-ie条件注释法)
- [5. hack合集传送门](#5-hack合集传送门)
- [6. IE低版本常见BUG](#6-ie低版本常见bug)
- [7. 渐进增强与优雅降级](#7-渐进增强与优雅降级)


***

# 1. 何为Hack

CSS Hack用来解决浏览器的兼容性问题，为不同版本的浏览器定制编写不同的CSS效果，使用每个浏览器单独识别的样式代码，控制浏览器的显示样式。

特别是IE最让人蛋疼。

**Hack分类：**

* 属性前缀法(即类内部Hack)。
* 选择器前缀法(即选择器Hack)。
* IE条件注释法(即HTML条件注释Hack)。



# 2. 属性前缀法

例如 IE6能识别下划线 `_` 和星号 `*`，IE7能识别星号 `*`，但不能识别下划线 `_`，IE6~IE10都认识 `\9`，但firefox前述三个都不能认识。

| **前缀标识** | **兼容浏览器**       |
| ------------ | -------------------- |
| **_**        | IE6                  |
| +、*         | IE6、IE7             |
| \9           | IE6、IE7、IE8、IE9   |
| \0           | IE8、IE9、IE10、IE11 |

示例：

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

用chrome打开则是红块，如果用IE6打开则是蓝块。

实例：  [23302hack01.html](23302hack01.html) 



# 3. 选择器前缀法

选择器前缀法是针对一些页面表现不一致或者需要特殊对待的浏览器，在CSS选择器前加上一些只有某些特定浏览器才能识别的前缀进行hack。

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

示例：

```
    <style>
        :root .box{
            width: 200px;height: 200px;
            background: tomato;    
            /* IE6 */
            /* _background:skyblue; */
            /* IE6 7 */
            /* +background: skyblue; */
            /* IE6~9 */
            /* background:skyblue\9; */
            /* IE8~11 */
            /* background:skyblue\0; */
        }
        .box{
            width: 200px;
            height: 200px;
            background: skyblue;
        }
    </style>
```

用IE打开则是红块，其他就是蓝块。

实例：  [23303hack01.html](23303hack01.html) 

# 4. IE条件注释法

这种方式是IE浏览器专有的Hack方式，微软官方推荐使用的hack方式。

| **前缀标识**                    | **兼容浏览器** |
| ------------------------------- | -------------- |
| <!--[if IE]>…<![endif]-->       | IE             |
| <!--[if IE 7]>…<![endif]-->     | IE7            |
| <!--[if lte IE 7]>…<![endif]--> | IE7以下        |
| <!--[if ! IE 7]>…<![endif]-->   | 非IE7          |

	只在IE下生效
	<!--[if IE]>
	这段文字只在IE浏览器显示
	<![endif]-->
	
	只在IE6下生效
	<!--[if IE 6]>
	这段文字只在IE6浏览器显示
	<![endif]-->
	
	只在IE6以上版本生效
	<!--[if gte IE 6]>
	这段文字只在IE6以上(包括)版本IE浏览器显示
	<![endif]-->
	
	只在IE8上不生效
	<!--[if ! IE 8]>
	这段文字在非IE8浏览器显示
	<![endif]-->
	
	非IE浏览器生效
	<!--[if !IE]>
	这段文字只在非IE浏览器显示
	<![endif]-->

示例：

```
    <style>
        .box{
            width: 200px;
            height: 200px;
            background: skyblue;
        }
    </style>
</head>
<body>
    <!--[if IE]>
    <div class="box">用IE打开就能显示出来，但是IE10以上不支持</div>
    <![endif]-->
</body>
```

实例： [23304hack01.html](23304hack01.html) 



# 5. hack合集传送门

w3school:https://www.w3cschool.cn/lugfe/lugfe-vxfp25zq.html

本地链接： [CSS hack合集_w3cschool.html](CSS hack合集_w3cschool.html) 

# 6. IE低版本常见BUG

由于旧浏览器在设计上有很多缺陷，导致一些BUG的产生，所以针对这些问题需要做出兼容处理。

常见兼容问题

1. 透明度。

2. 双边距。

3. 最小高度。

4. 图片边框。

   ...

详细的可去网上搜索。

 [23306hack01.html](23306hack01.html) 内有注释说明，要亲自调试。

# 7. 渐进增强与优雅降级

**渐进增强 progressive enhancement**

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。 

**优雅降级 graceful degradation**

一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

**区别：**

优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。
