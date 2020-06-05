//Problem: Return only years that are included in the following sets of ranges of years:
//[[1910, 1950], [1900, 1951], [1945, 2000]]
//test case A should return [1945, 1946, 1947, 1948, 1949, 1950]

function commonYears(arr){
  //first I flatten the array to make it easier to iterate through given values
  let allYears = arr.flat();
  console.log("allyears", allYears)
  let answer = [];
  let list = [];
  //create a new array called "list" of all the values between list[i] and it's neigbor at list[i+1]. This will allow us to look at all values in given ranges and find the repeated values.
for(var i = 0; i <= allYears.length; i++) {  
for (var j = allYears[i]; j <= allYears[i+1]; j++) {
    list.push(j);
}
}
//Sort the "List" array of all years given in our ranges
list.sort();
console.log("list", list);
//push and return only years that are in all given ranges (for test case A that is triplicate, representing the fact that they are included in all 3 ranges of years)
for(let l = 0; l < list.length; l++){
  if(list[l] === list[l+1] && list[l] === list[l+2]){
    answer.push(list[l])
  }
}
console.log("years that can be found in each of the the ranges of input are:", answer);
}

 //test case A should return [1945, 1946, 1947, 1948, 1949, 1950]
 let arr = [[1910, 1950], [1900, 1951], [1945, 2000]]
commonYears(arr);
//test case B [[1900,1903],[1902,1907],[1905,1906]] should return 1903
let arrB = [[1900,1903],[1902,1907],[1903,1906]]
commonYears(arrB);
