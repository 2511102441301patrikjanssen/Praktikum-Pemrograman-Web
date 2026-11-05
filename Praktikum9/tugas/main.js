
// array untuk menyimpan data mahasiswa
let dataMhs = [];

// fungsi untuk menambahkan data mahasiswa
function tambahDataMhs(nama, nim, jurusan) {
    const mhs = {
        nama: nama,
        nim: nim,
        jurusan: jurusan
    };
    dataMhs.push(mhs);
}

// fungsi untuk menampilkan data mahasiswa                          
function tampilkanDataMhs() {              
    