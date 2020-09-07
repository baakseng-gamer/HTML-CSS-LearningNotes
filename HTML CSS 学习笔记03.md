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



## 分享

阮一峰

http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

内有悬挂式布局



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



### minmax()

函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

上面代码中，minmax(100px, 1fr)表示列宽不小于100px，不大于1fr。



### auto 关键字

表示由浏览器自己决定长度。

```
grid-template-columns: 100px auto 100px;
```

上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。



### 网格线的名称

grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

```
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。
网格布局允许同一根线有多个名字，比如[fifth-line row-5]。



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



### **建议**

grid-template 属性，grid 属性

grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。

grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。

从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。.



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



## 01-195 grid网格布局5

### grid-area

表示当前网格所占用的区域，名字和位置两种表示方法。

指定项目放在哪一个区域。

可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。

```
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

实例： [195-01 grid-area.html](2020Web HTML CSS\01-195 grid网格布局5\195-01 grid-area.html) 



使用span也可以

```
.item-1 {
  grid-area: grid-area: 2 / 2 / span 1 / span 3;
}
```

上面代码中，1号项目位于e区域

实例： [195-02 grid-area.html](2020Web HTML CSS\01-195 grid网格布局5\195-02 grid-area.html) 



### justify-self ，align-self 和place-self

justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。

align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。

```
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```





place-self属性是align-self属性和justify-self属性的合并简写形式。

如果省略第二个值，place-self属性会认为这两个值相等。

```
place-self: <align-self> <justify-self>;
```

实例： [195-03 self.html](2020Web HTML CSS\01-195 grid网格布局5\195-03 self.html) 







## 01-196 grid网格布局6

grid案例

1.骰子的点数

参考： [7_骰子grid.html](2020Web HTML CSS\01-196 grid网格布局6\7_骰子grid.html) 

练习采用结构伪类选择器：1、3、5即2n+1

练习： [196-01 test-dice.html](2020Web HTML CSS\01-196 grid网格布局6\196-01 test-dice.html) 



## 01-197 grid网格布局7

2.百度搜索风云榜

参考：

<a href="2020Web HTML CSS\01-197 grid网格布局7\baidusearch.png">百度搜索风云榜图示</a>

 [8_百度风云榜.html](2020Web HTML CSS\01-197 grid网格布局7\8_百度风云榜.html) 

练习： [197-01 test.html](2020Web HTML CSS\01-197 grid网格布局7\197-01 test.html) 



## 分享

阮一峰 gridm网格布局

http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html

本地链接： [CSS Grid 网格布局教程 - 阮一峰的网络日志.html](2020Web HTML CSS\01-197 grid网格布局7\CSS Grid 网格布局教程 - 阮一峰的网络日志.html) 



布局实例大全

https://www.html.cn/archives/8635

本地链接： [CSS Grid 布局示例大全-WEB前端开发.html](2020Web HTML CSS\01-197 grid网格布局7\CSS Grid 布局示例大全-WEB前端开发.html) 



## 01-198 移动端之viewport视口

1.移动端模拟器？
切换平台之后，一定要重新刷新浏览器

2.去访问一些网站的PC端和移动端？
大一点的网站都是分开开发的，PC端一套代码，移动端端一套代码。
访问淘宝网  ->   后端检测当前设备 -> 如果是PC端 -> www.taobao.com
访问淘宝网  ->   后端检测当前设备 -> 如果是移动端 -> www.taobao.com重定向 -> h5.m.taobao.com

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```



3.viewport视口？ 

在移动端viewport视口就是浏览器显示页面内容的屏幕区域。在viewport中有两种视口，分别表示为， **visual viewport**（可视视口）和**layout viewport**（布局视口）。

visual viewport 固定大小跟屏幕大小相同，在上面，而layout viewport 可改变大小，在下面。Layout viewport默认大小为980像素，可通过document.documentElement.clientWidth获取。

现代网页需要将layout viewport设置成跟visual viewport等同大小，方便进行网页制作。



```
<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>Document</title>
</head>
```

第三行注释一下，即取消

然后打开此页面，F12显示控制台，在Console一栏里输入document.documentElement.clientWidth后自动显示为980。



通过meta标签进行设置，name属性指定viewport值，content属性进行视口配置。

| **取值**          | **含义**                                                  |
| ----------------- | --------------------------------------------------------- |
| **width**         | 设置layout viewport的宽度特定值，device-width表示设备宽。 |
| **height**        | 设置layout viewport的高度特定值，一般不进行设置。         |
| **initial-scale** | 设置页面的初始缩放。                                      |
| **minimum-scale** | 设置页面的最小缩放。                                      |
| **maximum-scale** | 设置页面的最大缩放。                                      |
| **user-scalable** | 设置页面能否进行缩放。                                    |

看下面图片链接就懂了

<a href="2020Web HTML CSS\01-198 移动端之viewport视口\01-198-01.png">Layout Viewport</a>

<a href="2020Web HTML CSS\01-198 移动端之viewport视口\01-198-02.png">Visual Viewport</a>



实例： [198-01 viewport.html](2020Web HTML CSS\01-198 移动端之viewport视口\198-01 viewport.html) 

取消meta标签的viewport，然后控制台切换移动端试效果



## 01-199-202 移动端流式布局整页制作1-4

移动端适配方案

1.百分比布局，也叫流式布局。代表网站：优酷、百度、天猫、腾讯。

2.等比缩放布局，也叫rem布局。代表网站：网易、爱奇艺、淘宝、美团。

<a href="2020Web HTML CSS\01-199-202 移动端流式布局整页制作1-4\01-199-01.png">两个布局对比</a>



流式布局原则

<a href="2020Web HTML CSS\01-199-202 移动端流式布局整页制作1-4\01-199-02.png">流式布局原则</a>

好处： 大屏幕下显示更多的内容。 	
坏处：宽屏下比例会有一些不协调。



参考： [index.html](2020Web HTML CSS\01-199-202 移动端流式布局整页制作1-4\index.html) 

<a href="2020Web HTML CSS\01-199-202 移动端流式布局整页制作1-4\lagou-1.png">拉勾上半页</a>

<a href="2020Web HTML CSS\01-199-202 移动端流式布局整页制作1-4\lagou-2.png">拉勾下半页</a>

没啥方法，就是取取色，测测量，还有字体大小的不同之行高的问题

 [index移动端流式布局.html](2020Web HTML CSS\01-199-202 移动端流式布局整页制作1-4\index移动端流式布局.html) 



## 01-203 rem单位及rem布局原理

rem布局

**单位**

em : 是一个相对单位，1em等于当前元素或父元素的font-size值。

rem : 是一个相对单位，1rem等于根元素的font-size值。

vw / vh : 把屏幕分为100份，1vw等于屏幕宽的1%。 



根元素一般是指html

```
    <style>
        html{
            font-size: 50px;
        }
        #con{
            font-size: 30px;
        }
        #con .box1{
            width: 100px;
            height: 100px;
            background: tomato;
            border-left: 1em solid black;
            border-right: 1rem solid black;
            /* 1em=30px 相对于父元素的font-size */
            /* rem -> root + em */
        }
    </style>
</head>
<body>
    <div id="con">
        <div class="box1"></div>
    </div>
</body>
```

结果是box1的左边框是1em即30px，右边框是1rem即50px

实例： [203-01 rem.html](2020Web HTML CSS\01-203 rem单位及rem布局原理\203-01 rem.html) 





## 01-204 js方式进行动态font-size设置

案例：进入淘宝，并改为移动端iPhone6/7/8即375X667，在控制台上可发现一行代码

```
<html class="hairlines" style="font-size:100px;"......
```

切换到移动端iPhone6/7/8 Plus即141X736，html字体大小变成110.4px

```
<html class="hairlines" style="font-size:110.4px;"......
```



上面的html字体大小有变化，但是body的字体大小还是16px



动态设置font-size：
通过JS
通过vw
**注**：要给body重置一下font-size : 16px



 以下为通过JS动态设置html的font-size

```
        // layout viewport : document.documentElement.clientWidth
        // iphone 6 : 375
        // iphone 6 plus :414

        // iphone 6 : document.documentElement.clientWidth / 3.75 -> 100
        // iphone 6 plus : document.documentElement.clientWidth / 3.75 -> 110.4

        var fontsize = document.documentElement.clientWidth / 3.75;

        document.documentElement.style.fontSize = fontsize + 'px';
```

实例： [204 动态设置font-size.html](2020Web HTML CSS\01-204 js方式进行动态font-size设置\204 动态设置font-size.html) 



VSCODE 扩展里有px to rem 可试用



根据需求可调动态font-size







## 01-205 vw单位进行动态fontsize设置

vw / vh : 把屏幕分为100份，1vw等于屏幕宽的1%。 

iphone 375 1vw -> 3.75
iphone plus 414  1vw -> 4.14
如果在iphone 下想等到100px , 我应该设置多少个vw呢？

100/3.75=26.66666667，即26.66666667vw;



可参考爱奇艺网站，控制台切换移动端iPhone6/7/8即375X667，然后看下html的font-size值。

不管切换任何分辨率移动端，font-size还是26.66666667vw



通过vw动态设置html的font-size

```
html{
	font-size: 26.66666667vw;
}
```

实例： [205 vw进行动态fontsize设置.html](2020Web HTML CSS\01-205 vw单位进行动态fontsize设置\205 vw进行动态fontsize设置.html) 





## 01-206 移动端rem布局实战流程

接上199-202的整页然后修改为rem布局（切换不同分辨率，内容大小也跟着变化）

方法：

1.给html添加font-size:26.66666667vw;

2.别忘给body添加font-size:16px;

3.利用VSCODE的插件px to rem，别忘配置一下px-to-rem转换数值（插件设置里弄）

4.选择要切换rem的几行代码，按下alt+z能转换rem单位，如果要转回去为px单位，再按下alt+z即可；

实例： [index移动端rem布局.html](2020Web HTML CSS\01-206 移动端rem布局实战流程\index移动端rem布局.html) 



## 01-207 响应式布局之媒体查询语法

**响应式布局**

利用媒体查询，即media queries，可以针对不同的媒体类型定义不同的样式，从而实现响应式布局 。

<a href="2020Web HTML CSS\01-207 响应式布局之媒体查询语法\207-01.png">不同设备分辨率的图示</a>注意一下内容排版

| **取值** | **含义**                             |
| -------- | ------------------------------------ |
| all      | 用于所有设备。                       |
| print    | 用于打印机和打印预览。               |
| screen   | 用于电脑屏幕，平板电脑，智能手机等。 |
| speech   | 应用于屏幕阅读器等发声设备。         |



常见选项：

and、not
min-width、max-width
orientation:portrait、orientation:landscape
link



### media

代码示例：

```
        .box{
            width: 100px;
            height: 100px;
            background: tomato;
            transition: 0.25s;
        }
        @media all and (max-width: 500px){
            .box{
                background: skyblue;
                }
        }
```

当浏览器分辨率缩小到500px以下时，box背景色有变化





```
        @media all and (min-width: 600px) and (max-width: 700px){
            .box{
                background: skyblue;
                }
        }
```

600px~700px时背景色为蓝色



```
        @media  all and (min-width:600px){
            .box{
                background: skyblue;
            }
        }
```

宽度最低为600px以上时，颜色为skyblue;

否则为tomato;



```
@media not  all and (max-width: 600px){
	.box{
		background: skyblue;
	}
}
```

非max-width:600px以下时，不是skyblue颜色





```
        @media  all and (max-width: 800px){
            .box{
                background: skyblue;
                }
        }
        @media  all and (max-width: 500px){
            .box{
                background: lightseagreen;
                }
        }
```

800px以下时为skyblue颜色， 500px以下时为lightseagreen颜色



实例： [207-01 media.html](2020Web HTML CSS\01-207 响应式布局之媒体查询语法\207-01 media.html) 





### orientation

orientation:portrait 竖向屏幕；指定输出设备中的页面可见区域高度大于或等于宽度

orientation:landscape 横向屏幕

代码示例：

```
        @media all and ( orientation: portrait){
            .box{background: skyblue;}
        }
        @media all and ( orientation: landscape){
            .box{background: lightseagreen;}
        }
```

在移动端可切换横竖方向

竖向时颜色为skyblue;

横向时颜色为lightseagreen;

实例： [207-02 orientation.html](2020Web HTML CSS\01-207 响应式布局之媒体查询语法\207-02 orientation.html) 



### link方式处理响应式

代码示例：

```
    <link rel="stylesheet" href="./css/base1.css" media="all and (min-width:600px)">
    <link rel="stylesheet" href="./css/bsse2.css" media="all and (min-width:800px)">
```

最小宽度为600px时引入base1.css，颜色为黑色；

最小宽度为800px时引入base2.css，颜色为灰色；

600px以下颜色为tomato

实例： [207-03 link.html](2020Web HTML CSS\01-207 响应式布局之媒体查询语法\207-03 link.html) 



### 常见修改样式

display
float
width
注：响应式代码写到要适配的CSS后面。



## 01-208 响应式布局之两种操作模式

参考： [2_media.html](2020Web HTML CSS\01-208 响应式布局之两种操作模式\2_media.html) 





## 01-209 响应式布局之实战导航菜单