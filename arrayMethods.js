let array1 = new Array(5);
let array2 = new Array(5);


array1 = ['one','two','three','four','five'];
array2 = [1,2,3,4,5];


//concat
let newArray = array1.concat(array2);
console.log('concatenated arrays');
console.log(newArray);

//every
let check = (num) => {
    return (num>4);
}

console.log(array2.every(check));

//fill
console.log(array1.fill('manu'));

//find
function findme(num){
    return num>=5;
}

console.log(array2.find(findme));

//findIndex
function findme(num){
    return num>=5;
}

console.log(array2.findIndex(findme));

//flat
let array3 = [[1,2],[3,4],[5,6]];
console.log(array3);

console.log(array3.flat());

//forEach
let result = 0;
array2.forEach( (num) => {   
    result = result + num;
    console.log(result);
});

//includes
console.log(array1.includes('three'));
console.log(array1.includes('six'));

//indexOf
console.log(array1.indexOf(5));
console.log(array1.indexOf('five'));

//join
let arr4 = ['ansif','abu','mridhul','sidhu'];
console.log(arr4.join('--'));
console.log(arr4);

//lastIndexOf
console.log(arr4.lastIndexOf('sidhu'));

//pop
let arr5 = ['ansif','abu','mridhul','sidhu'];
console.log(arr5);
arr4.pop()
console.log(arr5);

//push
let arr6 = ['ansif','abu','mridhul','sidhu'];
console.log(arr6);
arr6.push('vishnu');
console.log(arr6);

//reverse
let arr7 = ['ansif','abu','mridhul','sidhu'];
console.log(arr7);
console.log(arr7.reverse());

//unshift
let arr8 = ['ansif','abu','mridhul','sidhu'];
console.log(arr8);
arr8.unshift('nidhin','askar','nishad',1,5,4);
console.log(arr8);

//shift
let arr9 = ['ansif','abu','mridhul','sidhu'];
console.log(arr9);
arr9.shift();
console.log(arr9);

//slice
let arr10 = [1,2,3,4,5,6,7];
console.log(arr10);
console.log(arr10.slice(2,4));

//some
let arr11 = [10,22,59,46,8];
function mod(num){
    return num%2 === 1;
}
console.log(arr11.some(mod));

//sort
let arr12 = [13,11,15,12,14];
console.log(arr12);
console.log(arr12.sort());

//toString
console.log(arr12);
console.log(arr12.toString());

//splice
let arr13 = ['wayanad','calicut','kannur','palakkad'];
console.log(arr13);
arr13.splice(1,2,'idukki','kollam');
console.log(arr13);
arr13.splice(1,0,'calicut','kannur');
console.log(arr13);

//filter
function evenNumbers(num){
    return num%2 === 0;
}

let arr14 = [13,11,15,12,14];
console.log(arr14.filter(evenNumbers));

//reduce
let arr15 = [1,11,2,4];
let sum = arr15.reduce((total,num) => {
    return total + num ;
});

console.log(sum);

//map
let nameIndex = ['N','A','S','I','F'];
let newName = nameIndex.map((n) => {
    return n + '3';
});

console.log(newName);