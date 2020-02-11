function digitPerkalianMinimum(angka) {
    // you can only write your code here!

    var tampung = [];
    //cari faktor dari angka
    for(let i= 0; i<=angka; i++){
        if(angka%i == 0){
            tampung.push(i)
        }
    }
    //masangin faktor dari angka
    var tampung1 = []
    for(let j= 0; j< tampung.length/2; j++){
        tampung2= tampung[j].toString() + tampung[tampung.length-1-j].toString()
        tampung1.push(tampung2); 
        
           
    }
    //nyari panjang tampung 1 yang terakhir.
    return (tampung1[tampung1.length-1].length);

}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2


