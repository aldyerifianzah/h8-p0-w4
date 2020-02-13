function fpb(angka1, angka2) {
    // you can only write your code here!




    //ini untuk angka 1


    var tampung1 = []
    for (let i = 0; i <= angka1; i++) {

        if (angka1 % i == 0) {

            tampung1.push(i)
        }

    }
    // console.log(tampung1)


    //ini untuk angka 2

    var tampung2 = []
    for (let i = 0; i <= angka2; i++) {

        if (angka2 % i == 0) {

            tampung2.push(i)
        }

    }
    // console.log(tampung2)



    var hasil = []


    for (let i = 0; i < tampung1.length; i++) {
        for (let j = 0; j < tampung2.length; j++) {

            if (tampung1[i] == tampung2[j]) {

                hasil.push(tampung1[i])

            }
        }


        var hasilAkhir = hasil[hasil.length - 1]

    }


    return hasilAkhir;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1