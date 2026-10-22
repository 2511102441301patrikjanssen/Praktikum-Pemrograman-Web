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