let dataMhs = "nama mahasiswa adalah 'Patrik'";
console.log(dataMhs);

// escaping (\n, \t, \\, \", \')
let dataMhs2 = "nama \tmahasiswa adalah Patrik";
console.log(dataMhs2);

// string literal
let nama = "Patrik";
let nim = 2511102441301;
let prodi = "teknik informatika";

let biodata = nama + " " + nim + " " + prodi;
console.log(biodata);
console.log(typeof biodata);

// template string literal
let biodataLengkap = `mahasiswa dengan ${nama} dan ${nim} program studi ${prodi}`;
console.log(biodataLengkap);