function tukarBesarKecil(kalimat) {
    // you can only write your code here!

    var tampung = []

    for (let i = 0; i < kalimat.length; i++) {

        if (kalimat[i] == kalimat[i].toUpperCase()) {

            var tampung1 = kalimat[i].toLowerCase();

            tampung.push(tampung1);

        } else {

            var tampung1 = kalimat[i].toUpperCase();

            tampung.push(tampung1);
        }



    }
    //buat looping untung menggabung tanpa split

    var str = ''

    for (let i = 0; i < tampung.length; i++) {
        str += tampung[i];

    }

    return str;

}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"