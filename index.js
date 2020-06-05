//Problem: Return only years that are included in the following sets of ranges of years:
//[[1910, 1950], [1900, 1951], [1945, 2000]]
//test case A should return [1945, 1946, 1947, 1948, 1949, 1950]

function commonYears(arr){
  //first I flatten the array to make it easier to iterate through given values
  let allYears = arr.flat(), list = [], commonVals = [], counts={};
  //next, I create a list that contains all the values in the ranges given
  for(let i = 0; i < allYears.length; i++){
    for(let j = allYears[i]; j <= allYears[i+1]; j++){
      list.push(j);
    }
  }
  //i create a copy of the sorted array so as not to mutate the original list, and sort it, so all our values common to different years spans are consecutive and 
  sortedList = list.slice().sort();
  // console.log("list", sortedList);
  for (var k=0;k<sortedList.length;k++) {
    var item = sortedList[k];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] >= 3) {
      commonVals.push(item);
    }
}
  console.log(commonVals);
}

 let arr1 = [[1910, 1950], [1900, 1951], [1945, 2000]]//return [1945, 1946, 1947, 1948, 1949, 1950]
commonYears(arr1);
//test case B
let arr2 = [[1901,1903],[1902,1904],[1903,1905],[1899,1905]]
commonYears(arr2);
