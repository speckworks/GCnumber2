//Problem: Return only years that are included in the following sets of ranges of years:
//[[1910, 1950], [1900, 1951], [1945, 2000]]
//test case A should return [1945, 1946, 1947, 1948, 1949, 1950]
function commonYears(arr){
  //first I make a copy of the Arr (so as not to mutate original array) and flatten the array to make it easier to iterate through given values
  let allYears = arr.slice().flat(), list = [], counts={};
  //next, I create a list that contains all the values in the ranges given
  for(let i = 0; i < allYears.length; i++){
    //this for loop creates ranges from the ranges and should keep time complexity within O(n), because it is only analyzing value at index and it's neighbor n+1
    for(let j = allYears[i]; j <= allYears[i+1]; j++){
      list.push(j);
    }
  }
  //i create a copy of the array of all ranges so as not to mutate the original list
  let rangeList = list.slice();
  //now we have to get the counts for each year across the ranges given
  for (var k=0;k<rangeList.length;k++) {
    var item = rangeList[k];
    //analyse each item of the rangeList, assign it to a key of the  "counts object" and assign a value that represents it's key.
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
  }
    //here we use a helper function "getMax" to filter the counts object and return the keys representing the years with greatest common occurence between ranges
   const getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       })
      }
//return the year(s) most common to all ranges.  
    console.log(getMax(counts)
      );
}
 let arr1 = [[1910, 1950], [1900, 1951], [1945, 2000]]//return [1945, 1946, 1947, 1948, 1949, 1950]
commonYears(arr1);
//test case B
let arr2 = [[1901,1903],[1902,1904],[1903,1905],[1899,1905]] //return 1903 test for 4 arrays given 
commonYears(arr2);
//test case C
let arr3 = [[1900,1945],[1910,1934],[1909,1921],[1850,1876]]//return [1910,1921] test for outlier array [1850,1876]
commonYears(arr3);