//数组定义： 一个存储元素的线性集合，元素可以通过索引来任意存取，
//			索引通常是数字，用来计算元素之间存储位置的偏移量.

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


