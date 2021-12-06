// membuat Object
// 1. Menggunakan Object Literal
//cara 1
// let mhs = {};
// mhs.name = 'Hilmi Maulana Mukhlis';
// mhs.umur = 21;
// mhs.alamat = {};
// mhs.alamat.jalan = 'Jl. Abc 123';
// mhs.alamat.kota = 'Bogor';
// mhs.alamat.provinsi = 'Jawa Barat';
// mhs.fnSapa = () => {
//     return 'Hello saya ' + mhs.name + ', saya berumur ' + mhs.umur;
// }
// cara 2
// let mhs = {
//     nama: 'Hilmi Maulana Mukhlis',
//     umur: 21,
//     alamat: {
//         jalan: 'Jl. Abc 123',
//         kota: 'Bogor',
//         provinsi: 'Jawa Barat'
//     },
//     fnSapa: function () {
//         return 'Hello saya ' + this.nama + ', saya berumur ' + this.umur;
//     }
// }

// 2. Menggunakan function expression
// function membuatObjMhs(nama, umur, jalan, kota, provinsi) {
// let mhs = {
//     name: nama,
//     age: umur,
//     alamat: {
//         jalan: jalan,
//         kota: kota,
//         provinsi: provinsi
//     },
//     fnSapa: () => {
//         return 'Hello saya ' + mhs.name + ', saya berumur ' + mhs.age;
//     }
// }
// let mhs = {};
// mhs.name = nama;
// mhs.age = umur;
// mhs.alamat = {};
// mhs.alamat.jalan = jalan;
// mhs.alamat.kota = kota;
// mhs.alamat.provinsi = provinsi;
// mhs.fnSapa = () => {
//     return 'Hello saya ' + mhs.name + ', saya berumur ' + mhs.age
// }
// return mhs;
// }

// let hilmi = membuatObjMhs('Hilmi Maulana Mukhlis', 21, 'Jl. Abc 123', 'Bogor', 'Jawa Barat');

// 3. Menggunakan constructor function, dipanggil menggunakan new namaFunction()
function Mahasiswa(nama, umur, jalan, kota, provinsi) {
    this.nama = nama;
    this.umur = umur;
    this.alamat = {};
    this.alamat.jalan = jalan;
    this.alamat.kota = kota;
    this.alamat.provinsi = provinsi;
    this.kepo = 'hahaha';
    this.fnSapa = () => {
        return 'Hello Saya ' + this.nama + ', saya berumur ' + this.umur;
    };
}

let hilmi = new Mahasiswa(
    'Hilmi Maulana Mukhlis',
    21,
    'Jl. Abc 123',
    'Bogor',
    'Jawa Barat'
);
// console.log();
