
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
    console.log("Data Mahasiswa:");
    dataMhs.forEach((mhs, index) => {
        console.log(`${index + 1}. Nama: ${mhs.nama}, NIM: ${mhs.nim}, Jurusan: ${mhs.jurusan}`);
    });
}

// contoh penggunaan
tambahDataMhs("Budi", "123456", "Teknik Informatika");
tambahDataMhs("Siti", "654321", "Sistem Informasi");
tampilkanDataMhs();

