function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var tampung = []

    for (let i = 0; i < arrPenumpang.length; i++) {

        var objek = {

            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],

        }

        var flag = false

        var hitung = 0

        for (let j = 0; j < rute.length; j++) {

            if (rute[j] == arrPenumpang[i][1]) {

                flag = true

            }

            if (rute[j] == arrPenumpang[i][2]) {

                flag = false

            }

            if (flag == true) {
                hitung++
                // console.log("Masuk")
            }

            var bayar = hitung * 2000;
        }
        // console.log(bayar)
        // console.log(hitung)


        objek.bayar = bayar

        tampung.push(objek)
    }





    return tampung


}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]