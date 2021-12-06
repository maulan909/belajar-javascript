// array
// let penumpang = [];
// let tambahPenumpang = function (namaPenumpang, penumpang) {
//     if (penumpang.length === 0) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//     } else {
//         for (let i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] === undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             } else if (penumpang[i] === namaPenumpang) {
//                 console.log(namaPenumpang + ' sudah berada di dalam angkot');
//                 return penumpang;
//             } else if (i === penumpang.length - 1) {
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//         }
//     }
// };
// let hapusPenumpang = function (namaPenumpang, penumpang) {
//     if (penumpang.length === 0) {
//         console.log('Angkot masih kosong');
//         return penumpang;
//     } else {
//         for (let i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] === namaPenumpang) {
//                 penumpang[i] = undefined;
//                 return penumpang;
//             } else if (i === penumpang.length - 1) {
//                 console.log('Nama Penumpang tidak ada di dalam angkot');
//                 return penumpang;
//             }
//         }
//     }
// };

//object
function Angkot(namaSopir, trayek, penumpang, kas) {
    this.sopir = namaSopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.tambahPenumpang = function (namaPenumpang) {
        if (this.penumpang.length === 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            for (let i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] === undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                } else if (this.penumpang[i] === namaPenumpang) {
                    console.log(
                        namaPenumpang + ' sudah berada di dalam angkot'
                    );
                    return this.penumpang;
                } else if (i === this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
    };
    this.hapusPenumpang = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log('Angkot masih kosong');
            return this.penumpang;
        } else {
            for (let i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] === namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } else if (i === this.penumpang.length - 1) {
                    console.log('Nama Penumpang tidak ada di dalam angkot');
                    return this.penumpang;
                }
            }
        }
    };
}
