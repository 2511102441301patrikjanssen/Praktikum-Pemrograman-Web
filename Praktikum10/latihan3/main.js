// function dengan class
class Mahasiswa{
    constructor(nama, nim, jurusan){
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }
}

// array untuk menyimpan data
let dataMhs = [];

// function untuk menambahkan data
function tambahData(){
    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const jurusan = document.getElementById("jurusan").value.trim();

    if(nama === "" || nim === "" || jurusan === ""){
        alert("Semua data harus diisi!");
        return;
    }

    const mahasiswa = new Mahasiswa(nama, nim, jurusan);
    dataMhs.push(mahasiswa);

    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("jurusan").value = "";

    tampilData();
}

// function untuk menampilkan data
function tampilData(){
    const daftar = document.getElementById("daftar");
    daftar.innerHTML = "";

    dataMhs.forEach(function(mhs, index){
        const li = document.createElement("li");
        li.textContent = mhs.nama + " - " + mhs.nim + " - " + mhs.jurusan + " ";

        const tombol = document.createElement("button");
        tombol.textContent = "Hapus";

        tombol.onclick = function(){
            hapusData(index);
        }

        li.appendChild(tombol);
        daftar.appendChild(li);
    });
}

// function untuk menghapus data
function hapusData(index){
    dataMhs.splice(index, 1);
    tampilData();
}

tampilData();