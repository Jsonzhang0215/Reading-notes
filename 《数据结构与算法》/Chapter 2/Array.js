//数组定义： 一个存储元素的线性集合，元素可以通过索引来任意存取，
//			索引通常是数字，用来计算元素之间存储位置的偏移量.
//运行环境： node.js

var readline = require('readline');

//创建数组
var numbers = [];
console.log(numbers.length);

//数组初始化
var numbers = [1,2,3,4,5];
console.log(numbers.length);

//构造方法创建数组
var numbers = new Array(1,2,3,4,5);
console.log(numbers.length);

var numbers = new Array(10);
console.log(numbers.length);

//数组可以存储多种数据类型s
var objects = [1, 'Jone', true, null];
console.log(objects);

//通过Array.isArray()判断一个对象是否是数组
var numbers = 3;
var arr = [7, 4, 1243];
console.log(Array.isArray(numbers));
console.log(Array.isArray(arr));


//读写数组
//循环为数组赋值
var nums = [];
for (var i=0; i<100; i++){
	nums[i] = i;
}
console.log(nums, nums.length);

//读取数组中的元素
var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum);

//依次读取数组中的所有元素
var numbers = [1, 2, 3, 5, 8, 13, 21];
var sum = 0;
for ( var i=0; i<numbers.length; i++){
	sum += numbers[i];
}
console.log(sum);

//由字符串生成数组
//使用String.split()方法
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(' ');
for (var i=0; i<words.length; i++){
	console.log( "word " + i + ":" + words[i] );
}

//对数组整体操作
var nums = [];
for( var i=0; i<10; i++ ){
	nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;

//因为数组为对象，在赋值过程中只是传递了引用，所以这里会输出400
//这种复制数组的方式也称作为浅复制
console.log(samenums[0]);

//数组的深复制：
//先来创建一个复制数组的方法：
function copy(arr1, arr2){
	for (var i=0; i<arr1.length; i++){
		arr2[i] = arr1[i];
	}
}
var nums =[];
for (var i=0; i<100; i++){
	nums[i] = i+1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]);

//注意：如果数组内的值是一个对象，那么数组中存储的仍然是个引用
//此时修改任何值仍然会影响所有存储该引用的结果
var json = {
	a : 1,
	b : 2
}
var arr1 = [1,json];
var arr2 = [];
copy(arr1, arr2);
//json.b = 3;
arr2[1].b = 3;
console.log(arr1, arr2);

//数组存取
/*var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];
console.log('Enter a name to search for:');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question('Please type a name: ', function(name){
	var pos = names.indexOf(name);
	if (pos >= 0) {
		console.log('Found ' + name + ' at position '  + pos);
	}
	else {
		console.log(name + ' not found in array');
	}
	rl.close();
});*/

//使用lastIndexOf方法
var names = ['David', 'Mike', 'Cynthia', 'Raymond', 'Clayton', 'Mike', 'Jennifer'];
var name = 'Mike';
var firstPos = names.indexOf(name);
var lastPos = names.lastIndexOf(name);
console.log(firstPos, lastPos);

//数组的字符串表示
//可使用join()或toString()方法
var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Mike', 'Jennifer'];
var nameStr = names.join();
console.log(nameStr);
nameStr = names.toString();
console.log(nameStr);
console.log(names);

//由已有数组创建新数组
//concat()方法和splice()方法
//concat()方法 合并数组
var cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer'];
var dmpDept = ['Raymond', 'Cynthia', 'Bryan'];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept);
console.log(itDiv);

//splice()方法 拆分数组
var itDiv = ['Mike', 'Clayton', 'Terrill', 'Raymond', 'Cynthia', 'Danny', 'Jennifer'];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept);
console.log(cisDept);








