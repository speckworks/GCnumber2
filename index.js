 let arr = [[1910, 1950], [1900, 1951], [1945, 2000]]//return [1945, 1946, 1947, 1948, 1949, 1950]

function commonYears(arr){
  let allYears = arr.flat();
for(var i = 0; i <= allYears.length; i++) {  
  let list = [];
for (var j = allYears[i]; j <= allYears[i+1]; j++) {
    list.push(j);
}
console.log(list);
}
}

commonYears(arr);

// var list = [];
// for (var i = 1910; i <= 1920; i++) {
//     list.push(i);
// }
// console.log(list)
