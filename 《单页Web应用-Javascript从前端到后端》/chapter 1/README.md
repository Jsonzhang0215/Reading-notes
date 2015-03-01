##知识准备
###1.变量作用域
在Javascript中，变量的作用域只存在两种情况。  
要么是局部的，要么是全局的。  
举一个非常简单的例子：   
```js
var global = 'I am global!';  
function foo(){  
	var local = 'I am local!';  
}  
foo();  
console.log( global ); // 输出:I am global!  
console.log( local ); // 输出: local is not defined
```  
&nbsp;&nbsp;在Javascript中，唯一能控制变量作用域的代码块就是**函数**（这里我们暂不讨论在ECMAScript 6中的[let](http://es6.ruanyifeng.com/#docs/let)关键字），从上述代码运行结果看可以看到， 控制台可以打印出*global*的值，那么*global*是**全局变量**，而*local*的结果是undefined，所以*local*就是**局部变量**。  
&nbsp;&nbsp;怎么样，是不是很简单？  
&nbsp;&nbsp;But！如果我们在声明变量中忘记添加前面的关键字*var*，那么这个这个变量会被解释为全局变量，我们把上述代码中foo()方法里定义变量的*var*删掉：  
```js
var global = 'I am global!';  
function foo(){  
	local = 'I am local!';  
}  
foo();  
console.log( global ); // 输出:I am global!  
console.log( local ); // 输出: I am local!  这里local变成了全局可访问的
```  
&nbsp;&nbsp;看！外部也可以访问到foo()方法里的local变量，那么我们可以断定local的作用域是全局的！  
好了，让我们再看一段代码，思考一下它的运行结果是什么。  
```js
var variable = 1;
function foo(){
	console.log(variable);
	var variable = 2;
}
foo();
```
运行结果是*undefined*  
先不解释为什么，我们先来引入两个概念：**变量提升** **作用域链**
####变量提升  
我们的程序在运行的时候会分为两步：初始化变量和执行代码。  
在Javascript初始化过程中，会做3件事情：  
1.初始化函数参数。  
2.声明并初始化局部变量。  
3.声明并初始化函数（这里指函数内部嵌套的函数）。  
那么我们怎么理解呢？上面的代码在解释编译后的其实是这样的：
```js
var variable;
variable = 1;
function foo(){
	var variable;
	console.log(variable);
	variable = 2;
}
foo();
```
变量提升就是：*在初始化变量的过程中会对定义的变量提升到该变量作用域的顶部*。  
我们再解释一下作用域链：
####作用域链
&nbsp;&nbsp;在此之前我们把变量分为**全局变量**和**局部变量**，准确的来讲，他们的差别只是变量的作用域不同。全局变量的作用域顶部，局部变量则是在某个作用域下。
&nbsp;&nbsp;这里引用书中的原话：*当在查找变量的定义时，Javascript引擎首先在局部执行环境对象上查找。如果没有定义，则跳出作用域链，到创建它的执行环境中去，并且在该执行环境对象中查找变量的定义，以此类推，直到找到定义或者到达全局作用域为止。*    
我们先把上面的那段代码进行修改：
```js
var variable = 1;
function foo(){
	console.log(variable);
}
foo(); //输出 1
```
&nbsp;&nbsp;在foo()方法内部，由于找不到变量*variable*，所以它会跳出foo()内部的作用域，到创建foo()方法的环境中去寻找（这里foo()的作用域是全局），在全局作用域中，找到了变量*variable*的定义，并且在初始化的时候也已经赋值，所以输出了数字1。  

&nbsp;&nbsp;最后，回到我们刚才的思考题，也就不难解释为什么程序输出的结果是*undefined*了。
在foo()执行的过程中，因为**变量提升**，使得内部已经声明了变量*variable*，所以在执行console.log(variable);这句话时，变量*variable*在它的执行环境上已经查找到它的定义，所以不会跳出foo()内部的作用域向外寻找，但是*variable*的赋值是在console.log(variable );之后进行的，我们知道已定义 但是未赋值的变量输出的值为*undefined*，所以程序输出的结果自然就是undefined了
###2.函数  
&nbsp;&nbsp;函数是Javascript语言中的一等公民，我们使用它来控制变量作用域以及提供私有变量和方法。  
常见的函数声明有以下两种方式：  
```js
//声明式：
function fn1(a, b) {
	return a + b;
}
fn1(1,2);

//函数表达式：
var fn2 = function(a, b){
	return a-b;
}
fn2(2,1);
```

####自执行匿名函数
&nbsp;&nbsp;在使用Javascript开发应用的时候我们会遇到的第一个问题就是，在全局作用域中定义的所有东西都在任何地方都是可以被访问到的。但是有些方法和变量你不想和他人共享，也不想在使用第三方库的时候覆盖他们，导致后面的程序出错，我们可以这样写：
```js
var app = function(){
	var privateVariable = "private";
    console.log(privateVariable);
    
    // do some code balabalaba...
    ...
};
app();
```
我们需要先定义一个变量，然后执行它，而且这个变量仍然有被其他代码覆盖的危险，问题还是没有得到解决，怎么办？  
Don't worry,我们可以这样写：
```js
(function(){
	var privateVariable = "private";
    console.log(privateVariable);
    
    // do some code balabalaba...
    ...
})();
```
我们还可以给它传递参数,例如引入我们最常用的库jQuery：
```js
(function($){
	var btn = $("#btn");
    btn.on("click",function(){
    	// do some code balabalaba...
    
    });
    
    // do some code balabalaba...
    ...
})(jQyery);

//这样的写法等同于：
var app = function($){
	var btn = $("#btn");
    btn.on("click",function(){
    	// do some code balabalaba...
    
    });
    
    // do some code balabalaba...
    ...
};
app(jQuery);
```
&nbsp;&nbsp;这样的函数就叫做**自执行匿名函数**，我们先定义了一个匿名函数，然后再执行它，由于未显式的定义方法，所以我们无法拿到该方法的引用，所以我们不用担心它有被其他变量或者第三方库覆盖的风险，里面的变量也在函数内部私有化，是不是很cool？  



未完待续...