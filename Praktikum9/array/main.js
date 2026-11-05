// array => objek yang digunakan untuk menyimpan banyak data dalam satu variabel

let dataMhs = ["Budi", "Siti", "Joko", "Tono", "Rina"];
console.log(dataMhs); 

// menampilkan data array berdasarkan index
console.log(dataMhs[0]);
console.log(dataMhs[1]);
console.log(dataMhs[2]);
console.log(dataMhs[3]);
console.log(dataMhs[4]);
console.log(dataMhs[5]);

// length => untuk mengetahui jumlah data dalam array
console.log(dataMhs.length);

// menampilkan data array menggunakan perulangan for
for (let i = 0; i < dataMhs.length; i++) {
    console.log(dataMhs[i]);
}

// menampilkan data array menggunakan perulangan for of
for (let mhs of dataMhs) {
    console.log(mhs);
}