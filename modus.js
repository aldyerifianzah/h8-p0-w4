/*
initialisasi angkaTerbanyak untuk menampung angka yang keluar lebih dari 1
baca array dari kiri ke kanan dengan index i 
baca array dari kiri ke kanan dengan index j di dalam index i
return angka terbanyak yang tercetak terakhir dalam looping
jika jumlah countaT lebih dari 4 

*/

function cariModus(arr) {
    // var angkaTerbanyak;
    // countaT=0;
    // for(var i=0;i<arr.length;i++){
    //   for(var j=0;j<arr.length;j++){
    //     //console.log(arr[i],arr[j]);
    //     if(arr[i]===arr[j] && i!==j){
    //       angkaTerbanyak= arr[i];
    //       countaT++;
    //     }
    //   }
    //   if(countaT>4){
    //     return -1;
    //   }
      
    // }
    // if(countaT<1){
    //     return -1;
    //   }  
    // console.log(countaT);
    // return angkaTerbanyak;
  
    var list = {};
    // for (var key in list)
    for(var i = 0; i<arr.length; i++){
      // console.log(arr[i])
      list[arr[i]] = 0
    } 
    for (var j =0; j<arr.length; j++){
      for (var k in list){
        if (k == arr[j]){
          list[k]++
        }
      }
    }
    var angka = false
    var jumlahAngka = false
    var check1 = true
    var checkTidakSamaLength = true
    for (let k in list){
  
      if  (angka === false && jumlahAngka === false){
        angka = k
        jumlahAngka = list[k]
      } else {
        if (jumlahAngka < list[k]){
          angka = k
          jumlahAngka = list[k]
        }
      }
  
      if (list[k] !== 1){
        check1 = false
      }
  
      if (list[k] === arr.length){
        checkTidakSamaLength = false
      }
  
    }
    // console.log(list)
    // console.log(angka, '<<<<<<')
    // console.log(jumlahAngka)
    if (check1 === true){
      return -1
    } else if (checkTidakSamaLength === false){
      return -1
    } 
    return angka
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1