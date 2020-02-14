function shoppingTime(memberId, money) {
    // you can only write your code here!

    function fungsiBelanja(money) {

        var sisaUang = money
        //tampung
        var barang = []
        //buat jalannya index
        var i = 0


        if (money >= 1500000) {
            sisaUang -= 1500000;
            barang[i] = "Sepatu Stacattu";

            i++

        }

        if (money >= 500000) {
            sisaUang -= 500000;
            barang[i] = "Baju Zoro";

            i++

        }

        if (money >= 250000) {
            sisaUang -= 250000;
            barang[i] = 'Baju H&N';

            i++
        }

        if (money >= 175000) {
            sisaUang -= 175000;
            barang[i] = "Sweater Uniklooh";

            i++

        }


        if (money >= 50000) {
            sisaUang -= 50000;
            barang[i] = "Casing Handphone";

            i++


        }

        var wadah = [barang, sisaUang]

        return wadah
    }

    hasil = fungsiBelanja(money)

    objek = {}

    if (memberId == "" || memberId == undefined) {

        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }


    if (money < 20000) {

        return "Mohon maaf, uang anda tidak cukup";
    }

    objek = {

        memberId: memberId,
        money: money,
        listPurchased: hasil[0],
        changeMoney: hasil[1]



    }

    return objek






}



// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }



console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja