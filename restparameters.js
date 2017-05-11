function getArrLength(...arr){
		
		 return arr.length;//returning the length
	}
console.log("The length of the array is "+getArrLength(10,20,30,40));

function multiplyByTwo(...arr){
//using arrow function
let newarray  = arr.map(x => x * 2);
console.log("the new array after multiplying each element by 2 is "+ newarray);
}
multiplyByTwo(1,2,3,4);

function sortRestArgs(...arr){
	let sortarray = arr.sort();
	console.log("The sorted array is"+ sortarray);
}
sortRestArgs(2,8,5,4,9);