//Problem: Return only years that are included in the following sets of ranges of years:
//[[1910, 1950], [1900, 1951], [1945, 2000]]
//test case A should return [1945, 1946, 1947, 1948, 1949, 1950]

function commonYears(arr){
  //first I make a copy of the Arr (so as not to mutate original array) and flatten the array to make it easier to iterate through given values
  let allYears = arr.slice().flat(), list = [], commonVals = [], counts={};
  //next, I create a list that contains all the values in the ranges given
  for(let i = 0; i < allYears.length; i++){
    for(let j = allYears[i]; j <= allYears[i+1]; j++){
      list.push(j);
    }
  }
  //i create a copy of the array of all ranges so as not to mutate the original list
  let rangeList = list.slice();
  // console.log("list", sortedList);
  for (var k=0;k<rangeList.length;k++) {
    var item = rangeList[k];
    //analyse each item of the rangeList, assign it to a key of the  "counts object" and assign a value that represents it's key.
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    //i still need to tweak this code to return Only the year(s) that is(are) most common amongst the ranges being analyzed
    // if(counts[item] >= arr.length) {
    //   commonVals.push(item);
    // } 
  }
    //here we filter the counts object to return the keys representing the years with greatest common occurence between ranges
   const getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       })
}
    commonVals.concat(
      getMax(counts)
      );
//return the year(s) most common to all ranges.  
  console.log(commonVals);
}

 let arr1 = [[1910, 1950], [1900, 1951], [1945, 2000]]//return [1945, 1946, 1947, 1948, 1949, 1950]
commonYears(arr1);
//test case B
let arr2 = [[1901,1903],[1902,1904],[1903,1905],[1899,1905]] //return 1903
commonYears(arr2);

