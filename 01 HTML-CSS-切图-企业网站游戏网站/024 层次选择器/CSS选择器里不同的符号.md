CSS选择器里不同的符号(+,> ,~和*) 用法实例作者:admin  时间:2019-9-4 10:1:48  浏览:1298

本文介绍如何使用CSS选择器里不同的符号(+,> 和 ~) 以及它们的区别，在开始之前，让我们拿一段示例代码来认识这些符号。

- <div id="container"> 
-  <p>First</p>
-  <div>
-   <p>Child Paragraph</p>
-  </div>
-  <p>Second</p>
-  <p>Third</p> 
- </div>

#### 空格符：

空格符是一个派生选择器，它针对div容器里的所有`p`标签元素。

- div#container p{
-  font-weight:bold;
- }

[execcode](http://www.webkaka.com/tutorial/html/2019/090450/demo_css-sign-1.html)[getcode](http://www.webkaka.com/tutorial/html/2019/090450/css-sign-1.rar)

#### > 符号：

\> 符号针对的元素是特定元素的**直接**子元素。

- div#container > p {
-  border: 1px solid black;
- }

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041032094246.jpg)

执行结果

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041253023607.jpg)

它针对的`P`元素是`div`容器的直接子元素，不能是子`div`的子元素。

[execcode](http://www.webkaka.com/tutorial/html/2019/090450/demo_css-sign-2.html)[getcode](http://www.webkaka.com/tutorial/html/2019/090450/css-sign-2.rar)

#### + 符号：

它是相邻的兄弟组合。它结合了两个具有相同父级的简单选择器序列，第二个选择器必须**紧跟**在第一个选择器之后。

- div + p { 
-  color: green; 
- }

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041052005800.jpg)

执行结果

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041052437482.jpg)

它将只选择前一个选择器紧跟的第一个元素。在我们的示例中，它的目标仅为**Second**，因为主`p`元素刚好位于`DIV`标记之后。

[execcode](http://www.webkaka.com/tutorial/html/2019/090450/demo_css-sign-3.html)[getcode](http://www.webkaka.com/tutorial/html/2019/090450/css-sign-3.rar)

#### ~ 符号：

它是一般的兄弟组合器，类似于相邻的兄弟组合器。区别在于，第二个选择器**不必紧跟**第一个选择器，这意味着它将选择第一个选择器后面的所有元素。

- div ~ p{
-  background-color:blue;
- }

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041103392365.jpg)

执行结果

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041115595613.jpg)

[execcode](http://www.webkaka.com/tutorial/html/2019/090450/demo_css-sign-4.html)[getcode](http://www.webkaka.com/tutorial/html/2019/090450/css-sign-4.rar)

#### * 符号：

`*` 符号是指**所有子元素**。

- div *{
-  background-color:blue;
- }

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041133478727.jpg)

执行结果

![img](http://www.webkaka.com/tutorial/html/upload/2019/9/201909041135172682.jpg)

[execcode](http://www.webkaka.com/tutorial/html/2019/090450/demo_css-sign-5.html)[getcode](http://www.webkaka.com/tutorial/html/2019/090450/css-sign-5.rar)

##### 