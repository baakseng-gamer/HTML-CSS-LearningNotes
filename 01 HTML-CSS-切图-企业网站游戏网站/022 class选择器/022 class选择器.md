# 022 class选择器

视频序号045

***

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



**==注意==**

* class选择器是可以复用的。

  可以添加多个class样式。

  多个样式的时候，样式的优先级根据CSS决定，而不是class属性中的顺序。

示例：

```
    <style>
        .div1{
            background: tomato;
        }
        .div2{
            background: lightskyblue;
        }
        .div3{
            background: lightseagreen;
        }

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
    </style>
    
<body>
    <div class="div1">这是一个块</div>
    <div class="div2">这又是一个块</div>
    <div class="div3">这又是一个块</div>
    <br>
    <div class="box1 box2 box3 box4">这是一个块</div>
</body>
```

实例： [02201class.html](02201class.html) 