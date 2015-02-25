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
&nbsp;&nbsp;&nbsp;&nbsp;在Javascript中，唯一能控制变量作用域的代码块就是**函数**（这里我们暂不讨论在ECMAScript 6中的[let](http://es6.ruanyifeng.com/#docs/let)关键字），从上述代码运行结果看可以看到， 控制台可以打印出*global*的值，那么*global*是**全局变量**，而*local*的结果是undefined，所以*local*就是**局部变量**。  
&nbsp;&nbsp;&nbsp;&nbsp;怎么样，是不是很简单？  
&nbsp;&nbsp;&nbsp;&nbsp;But！如果我们在声明变量中忘记添加前面的关键字*var*，那么这个这个变量会被解释为全局变量，我们把上述代码中foo()方法里定义变量的*var*删掉：  
```js
	var global = 'I am global!';  
	function foo(){  
		local = 'I am local!';  
	}  
	foo();  
	console.log( global ); // 输出:I am global!  
	console.log( local ); // 输出: I am local!  这里local变成了全局可访问的
```  
&nbsp;&nbsp;&nbsp;&nbsp;看！外部也可以访问到foo()方法里的local变量，那么我们可以断定local的作用域是全局的！