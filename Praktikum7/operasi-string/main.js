// operasi string

// char at
let dataMhs = "Patrik mahasiswa teknik informatika";
console.log(dataMhs);
console.log(dataMhs.charAt(3));

// concat
let namaDepan = "Patrik";
let namaBelakang = "Janssen";
let namaLengkap = namaDepan.concat(" ", namaBelakang);
console.log(namaLengkap);

// indexOf
console.log(dataMhs.indexOf('m'));

// substring
console.log(dataMhs.substring(5, 15));
console.log(dataMhs.substring(15, 5));

// slice
console.log(dataMhs.slice(5, 15));
console.log(dataMhs.slice(15, 5)); // data kosong

// replace
let ubahData = dataMhs.replace("Patrik", "Janssen");
console.log(ubahData);

// toLowerCase
console.log(dataMhs.toLowerCase());

// upperCase
console.log(dataMhs.toUpperCase());