// let arr = ['Hilmi', 'Maulana', 'Mukhlis'];

// 1. Menambahkan Array Manual
// arr[3] = 'Naruto';
//hati hati saat terlewat indexnya, maka yg terlewat akan diisikan data undefined

// 2.Menghapus Array Manual
// arr[3] = undefined;
//sebenarnya ini cuma mengubah datanya menjadi undefined, jadi data sblmnya tergantikan

// 3. Menampilkan Array
// console.log(arr[0]); // Menampilkan menggunakan indexnya

//menampilkan dengan for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Method pada array
// 1. Join
// console.log(arr.join());
// parameter defaul ',' . untuk memberikan pembatasnya, bisa di ganti, contoh dengan '-', output 'Hilmi-Maulana-Mukhlis'


// 2. Push => mendorong/menambahkan data baru pada array
// arr.push('Naruto');
// arr.push('Naruto', 'Kakashi');
// console.log(arr);

// 3. Pop => soundeffect balon pecah, jadi menghilangkan data terakhir pada array
// arr.pop();
// console.log(arr);

// 4. unshift => menambahkan data pada array di bagian awal,
// arr.unshift('Naruto');
// console.log(arr);

// 5. shift => menghapus data pada array di bagian awal
// arr.shift();
// console.log(arr);

let arr = ['Hilmi', 'Maulana', 'Mukhlis', 'bin', 'Jarkasih'];

// 6. splice => memotong dan menambahkan/menghapus data setelah index yang ditentukan
// splice(indexAwal(elemen baru akan dimulai dari sini, dan menggeser elemen yg sudah ada jika tidak dihapus), mauDiHapusBerapa(dihitung dari index yang di tentukan), elemenBaru1, elemenBaru2, ....)
// arr.splice(1, 0, 'Naruto', 'Sasuke', 'Sakura', 'Kakashi');
// arr.splice(1, 2, 'Naruto', 'Sasuke', 'Sakura', 'Kakashi');
// console.log(arr);

// 7. Slice => mengiris array dan mengambil nilainya
// slice(indexPertama(data akan diambil), indexAkhir(data yg diambil hanya sampai index sblm ini))
// let arr2 = arr.slice(2, 4);
// console.log(arr2);

// 8.forEach => sama seperti for, tapi menggunakan anonymous function dan menghasilkan variable baru
// arr.forEach(function (e) {
//     console.log(e);
// })
// jika ingin mengambil nilai indexnya
// arr.forEach(function (data, index) {
//     console.log('Data ke ' + (index + 1) + ' adalah ' + data);
// })

// 7. map => sama seperti forEach, tapi mengembalikan nilai berupa array
// let arr2 = arr.map(function (nama) {
//     return nama + ' Seorang yang tamvan';
// })
// console.log(arr2);

// let angka = [1, 2, 4, 2, 5, 1, 9, 8];
// let angka2 = angka.map(function (e) {
//     return e * 4;
// })
// console.log(angka2);

// 8. sort => untuk mengurutkan isi array
// let angka = [1, 2, 10, 21, 4, 2, 5, 1, 9, 8];
// console.log(angka);
// angka.sort() // jika hanya seperti ini, js akan mengurutkan data dari angka awalnya aja, contoh : 1,10,2,21,3,4,5,50
// bisa diakali dengan cara seperti ini, data ke n + 1 dibandingkan untuk melihat perbedaanya
// angka.sort(function (a, b) {
//     return a - b;
// })
// console.log(angka);

// 9. Filter => mencari data dan mengembalikannya dalam bentuk array, data bisa lebih dari satu, tergantung kriteria
// let angka = [1, 2, 10, 21, 4, 2, 5, 1, 9, 8];
// let angka2 = angka.filter(function (nomor) {
//     return nomor > 5;
// })
// console.log(angka2);

// 9. find => mencari data, dan mengambalikan hanya 1 data, yaitu data pertama yg ditemukan, dan berbentuk string/integer(tergantung nilai di dalamnya)
let angka = [1, 2, 10, 21, 4, 2, 5, 1, 9, 8];
let angka2 = angka.find(function (nomor) {
    return nomor > 5;
})
console.log(angka2);
