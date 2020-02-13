function changeMe(arr) {
    // you can only write your code here!


    //menghitung umur



    var tampung = []
    for (let i = 0; i < arr.length; i++) {


        //buat header

        console.log(i + 1 + '.' + arr[i][0] + arr[i][1]);


        //buatt isi





        var isi = {
            firstname: arr[i][0],
            lastname: arr[i][1],
            gender: arr[i][2],



        }


        if (arr[i][3] > 0) {

            isi.age = 2019 - arr[i][3]

        }
        else {

            isi.age = 'Invalid Birth Year'
        }


        console.log(isi)
        // tampung.push(isi)



    }
    // console.log(tampung)
    // return tampung;

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""