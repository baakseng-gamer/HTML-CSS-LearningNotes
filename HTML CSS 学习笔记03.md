#  HTML+CSS系列教程③之风生水起

弹性布局 风格布局 移动端布局 响应式布局 Bootstrap



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



对网格进行横纵划分，形成二维布局。单位可以是像素，百分比，自适应以及fr单位（网格剩余空间比例单位）。

有时候，我们网格的划分是很规律的，如果需要添加多个横纵网格时，可以利用repeat()语法进行简化操作。



VSCODE快速打出<div>1</div>~<div>12</div>

div{$}*12



代码示例：

```
        .con1{
            display: grid;
            width: 500px;
            height: 500px;
            border: 1px dashed gray;
            grid-template-rows: 100px auto 25%;
            grid-template-columns: 100px 100px 200px 100px;
        }
        
    <div class="con1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
    </div>
```

三行四列

实例： [191-01 grid.html](2020Web HTML CSS\01-191 grid网格布局1\191-01 grid.html) 



除了绝对单位，也可以用百分比，或者可以用ft（fraction的缩写，意为“片段”）

实例： [191-02 grid.html](2020Web HTML CSS\01-191 grid网格布局1\191-02 grid.html) 



### repeat()

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数，简化重复的值。

```
            grid-template-rows: repeat(2,100px auto 200px);
            grid-template-columns: repeat(2,30px auto 40px);
```

6行6列

实例： [191-03 repeat.html](2020Web HTML CSS\01-191 grid网格布局1\191-03 repeat.html) 



## 01-192 grid网格布局2

### grid-template-area

area是区域的意思，grid-template-areas就是给我们的网格划分区域的。此时grid子项只要使用grid-area属性指定其隶属于那个区。

代码示例：

```
        .g1{
            display: grid;
            grid-template-rows: repeat(3,1fr);
            grid-template-columns: repeat(3,1fr);
            grid-template-areas: 
                "a a a"
                "b b c"
                "b b c";
        }
        .g1 div:nth-child(1){
            grid-area: a;
        }
        .g1 div:nth-child(2){
            grid-area: b;
        }
        .g1 div:nth-child(3){
            grid-area: c;
        }
        
        
    <div class="con g1">
        <div>a</div>
        <div>b</div>
        <div>c</div>
    </div>
```

实例： [192-01 grid-template-areas.html](2020Web HTML CSS\01-192 grid网格布局2\192-01 grid-template-areas.html) 



### grid-template

grid-template-rows，grid-template-columns和grid-template-areas属性的缩写。

代码示例：

```
.con1{
            width: 100%;
            height: 100%;
            border: 1px dashed gray;
            display: grid;
            grid-template: 
                "a b b b" 100px
                "c d d e" 1fr
                "c d d e" 1fr
                "f f f f" 80px
                /200px 1fr 1fr 200px;
        }
        .con1 > div{ background: lightseagreen;}
        .con1 div:nth-child(1){grid-area: a;background: lightblue;}
        .con1 div:nth-child(2){grid-area: b;background: lightskyblue;}
        .con1 div:nth-child(3){grid-area: c;background: tomato;}
        .con1 div:nth-child(4){grid-area: d;background: lightgray;}
        .con1 div:nth-child(5){grid-area: e;background: lightseagreen;}
        .con1 div:nth-child(6){grid-area: f;background: #555;}
        
        
    <div class="con1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
```

实例： [192-02 grid-template.html](2020Web HTML CSS\01-192 grid网格布局2\192-02 grid-template.html) 



### grid-column-gap和grid-row-gap、grid-gap

grid-column-gap和grid-row-gap属性用来定义网格中网格间隙的尺寸。

grid-gap属性是grid-column-gap和grid-row-gap属性的缩写。

代码示例：

```
            grid-gap: 20px 10px;
            grid-row-gap: 30px;
            grid-column-gap: 20px;
```



实例： [192-03 grid-gap.html](2020Web HTML CSS\01-192 grid网格布局2\192-03 grid-gap.html) 



## 01-193 grid网格布局3

### justify-items

指定了网格元素的水平呈现方式，是水平拉伸显示，还是左中右对齐。



### align-items

指定了网格元素的垂直呈现方式，是垂直拉伸显示，还是上中下对齐。



### place-items

是align-items属性和justify-items属性的合并简写形式。

```
place-items: <align-items> <justify-items>;
```



| **取值**    | **含义**                             |
| ----------- | ------------------------------------ |
| **stretch** | 默认值，拉伸。表现为水平或垂直填充。 |
| **Start**   | 表现为容器左侧或顶部对齐。           |
| **end**     | 表现为容器右侧或底部对齐。           |
| **center**  | 表现为水平或垂直居中对齐。           |

实例： [193-01 justify-items align-items.html](2020Web HTML CSS\01-193 grid网格布局3\193-01 justify-items align-items.html) 



### justify-content、align-content和place-content

justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。

place-content为简写

```
place-content: <align-content> <justify-content>
```



| **取值**          | **含义**                             |
| ----------------- | ------------------------------------ |
| **stretch**       | 默认值，拉伸。表现为水平或垂直填充。 |
| **start**         | 表现为容器左侧或顶部对齐。           |
| **end**           | 表现为容器右侧或底部对齐。           |
| **center**        | 表现为水平或垂直居中对齐。           |
| **space-between** | 表现为两端对齐。                     |
| **space-around**  | 享有独立不重叠的空白空间。           |
| **space-evenly**  | 平均分配空白空间                     |

实例： [193-02 justify-content align-content.html](2020Web HTML CSS\01-193 grid网格布局3\193-02 justify-content align-content.html) 



grid-template 属性，grid 属性

grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。

grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。

从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。



## 01-194 grid网格布局4

作用在grid子项上的CSS属性

| **取值**              | **含义**                                           |
| --------------------- | -------------------------------------------------- |
| **grid-column-start** | 水平方向上占据的起始位置。                         |
| **grid-column-end**   | 水平方向上占据的结束位置。（span属性）             |
| **grid-row-start**    | 垂直方向上占据的起始位置。                         |
| **grid-row-end**      | 垂直方向上占据的结束位置。（span属性）             |
| **grid-column**       | grid-column-start + grid-column-end的缩写。        |
| **grid-row**          | grid-row-start + grid-row-end的缩写。              |
| **grid-area**         | 表示当前网格所占用的区域，名字和位置两种表示方法。 |
| **justify-self**      | 单个网格元素的水平对齐方式。                       |
| **align-self**        | 单个网格元素的垂直对齐方式。                       |
| **place-self**        | align-self和justify-self的缩写。                   |





### grid-column-start 、grid-column-end、grid-row-start、grid-row-end

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

grid-column-start属性：左边框所在的垂直网格线
grid-column-end属性：右边框所在的垂直网格线
grid-row-start属性：上边框所在的水平网格线
grid-row-end属性：下边框所在的水平网格线

代码示例：

```
			grid-column-start: 2;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 2;
```

从纵线第2条起到第5条，从横线第1条起到第2条，一共占3格

实例： [194-01 grid子项.html](2020Web HTML CSS\01-194 grid网格布局4\194-01 grid子项.html) 



grid-column-end和grid-row-end带有span 属性，span多少就是占多少段

代码示例：

```
grid-column-start: 2;
grid-column-end: span 3;
```

实例： [194-01 grid子项 span属性.html](2020Web HTML CSS\01-194 grid网格布局4\194-01 grid子项 span属性.html) 



### grid-column、grid-row

grid-column属性是grid-column-start和grid-column-end的合并简写形式，

grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。

语法：

grid-column: start-line / end-line;
grid-row: start-line>/ end-line;

或

grid-column: 1 / span 2;
grid-row: 1 / span 2;

