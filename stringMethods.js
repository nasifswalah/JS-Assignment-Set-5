let str1 = 'Nasif';
let str2 = 'Swalah';


//concat
console.log(str1.concat(str2));

//endsWith
let str3 = 'hello everyone have a nice day';

console.log(str3.endsWith('o',5));
console.log(str3.endsWith('y'));
console.log(str3.endsWith('o',6));

//includes
console.log(str3.includes('every'));
console.log(str3.includes('night'));

//indexOf
console.log(str3.indexOf('o'));
console.log(str3.indexOf('h'));
console.log(str3.indexOf('d'));

//lastIndexOf
console.log(str3.lastIndexOf('h'));
console.log(str3.lastIndexOf('o'));

//match
let str4 = 'Ranches resort is a part of ranches hospitality';

console.log(str4.match('ran'));
console.log(str4.match('Ran'));
console.log(str4.match(/ran/gi));

//padEnd
let str5 = 'hello ';
console.log(str5.padEnd(10,'!'));

//padStart
console.log(str5.padStart(10,'!'));

//repeat
console.log(str5.repeat(5));

//replace
console.log(str5.replace('hello','Hiii'));

//search
console.log(str5.search('o'));
console.log(str5.search('h'));
console.log(str5.search('i'));

//slice
let str6 = 'slice the string';
console.log(str6.slice(2,8));

// split
console.log(str6.split('the'));

//startswith
console.log(str6.startsWith('t'));
console.log(str6.startsWith('slice'));

//substr
console.log(str6.substr(5,10));
console.log(str6.substr(5));

//substring
console.log(str6.substring(0,5));

//toLowerCase
let str7 = 'WAYANAD RANCHES'
console.log(str7.toLowerCase());

//to Uppercase
let str8 = '  wayanad ranches  '
console.log(str8.toUpperCase());

//trim
console.log(str8);
console.log(str8.trim());

//trimEnd or trimRight
console.log('"' + str8.trimEnd() + '"');
console.log('"' + str8.trimRight() + '"');

//trimStart or trimLeft
console.log('"' + str8.trimStart() + '"');
console.log('"' + str8.trimLeft() + '"');

//charAt
console.log(str8.charAt(5));
console.log(str8.charAt(10));

//charCodeAt
let str9 = 'abcDd';
console.log(str9.charCodeAt(3));
console.log(str9.charCodeAt(4));

//matchAll
let str10 = 'the BALL will fall from Wall';
let rex = /all/gi;

let find = [...str10.matchAll(rex)];

console.log(find);