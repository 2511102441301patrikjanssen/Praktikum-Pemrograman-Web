// array => objek yang digunakan untuk menyimpan banyak data dalam satu variabel

let dataMhs = ["Budi", "Siti", "Joko", "Ani", "Rina"];
console.log(dataMhs);

// menampilkan data array berdasarkan index
console.log(dataMhs[0]);
console.log(dataMhs[1]);
console.log(dataMhs[2]);
console.log(dataMhs[3]);
console.log(dataMhs[4]);
console.log(dataMhs[5]);

// fungsi

// length => untuk mengetahui jumlah data array
console.log(dataMhs.length);

// push => menambahkan data ke dalam array
dataMhs.push("Dewi");
console.log(dataMhs);

// pop => menghapus data terakhir dalam array
dataMhs.pop();
console.log(dataMhs);

// shift => menghapus data pertama dalam array
dataMhs.shift();
console.log(dataMhs);

// unshift => menambahkan data di awal array
dataMhs.unshift("Dewi");
console.log(dataMhs);

// splice => menghapus data di tengah array
dataMhs.splice(2, 1);
console.log(dataMhs);

// splice => menambahkan data di tengah array
dataMhs.splice(2, 0, "Joko");
console.log(dataMhs);

// slice => mengambil sebagian data array
let dataMhs2 = dataMhs.slice(1, 4);
console.log(dataMhs2);

// forEach => perulangan untuk menampilkan semua data array
dataMhs.forEach(function (mhs) {
  console.log(mhs);
});    