function cariModus(arr) {
    // you can only write your code here!

    var tampung = []

        //untuk mengambil berapa banyak data  
        for(let i =0 ;i < arr.length; i++){
            var tampung1 = 0;

            for(let j = 0; j< arr.length; j++){
                if(arr[i] == arr[j]){
                    tampung1++
                }

            }tampung.push(tampung1)
            // console.log(tampung1);
            

            //untuk urut data sorting berapa banyak

        }for(let i= 1; i<tampung.length; i++){
            for(let j = 0; j<i; j++){
                if(tampung[i] < tampung[j]){
                   //tampung disort
                   var tempt = tampung[i];
                   tampung[i] = tampung[j];
                   tampung[j] = tempt; 
                    //array di sort
                   var temp1= arr[i];
                   arr[i] = arr [j];
                   arr[j] = tempt
                }
            }
        }
        // console.log(tampung);
        // console.log(arr);

        //ini buat kondisi dimana tidak ada modus 
        var check = false
        for (let i = 0; i < tampung.length-1; i++) {
            if(tampung[i] != tampung[i+1]){
                check = true;
            }
            
            
        }

        if(check == true){
        return arr[arr.length-1];
        }

        else{
            return -1;
        }
  }
  //tapung = modus
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1