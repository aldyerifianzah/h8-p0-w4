function cariMedian(arr) {
    // you can only write your code here!


    var indexMedian 
    var median  

    if(arr.length%2 !=0){
        // indexMedian = (arr.length-1)/2
        // median = arr[indexMedian];

        median = arr[(arr.length-1)/2];
        return median;

    }else if(arr.length%2 == 0){
        indexMedian = (arr.length)/2
        median = (arr[indexMedian] + arr[indexMedian-1])/2

    return median;
    }
}    
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5