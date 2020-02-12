
// var kata = 'Hello world';

// var tampung = []

// for (let i = 0; i < kata.length; i++) {

//     if (kata[i] == kata[i].toUpperCase()) {



//         var tampung1 = kata[i].toLowerCase()


//         tampung.push(tampung1);

//     } else {

//         var tampung1 = kata[i].toUpperCase()

//         tampung.push(tampung1);
//     }

// }
// // console.log(tampung.join(''));
// // -----------------------------------
// //cara magic .join

// var str = ''

// for (let i = 0; i < tampung.length; i++) {

//     str += tampung[i];


// }
// console.log(str)

//pakai string
function changeSize(str) {

    var result = ''

    for (let i = 0; i < str.length; i++) {

        if (str[i] == str[i].toUpperCase()) {

            result += str[i].toLowerCase()

        } else {

            result += str[i].toUpperCase()
        }

    }
    return result;
}


console.log(changeSize('AkkkU apa Aja'));