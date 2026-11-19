// array untuk menyimpan data mahasiswa
let dataMhs = [];

// fungsi untuk menampilkan data
function tampilData() {
    let daftar = document.getElementById("daftar");
    daftar.innerHTML = "";

    dataMhs.forEach(function(nama, index) {
        let li = document.createElement("li");
        li.textContent = nama + " ";

        let tombol = document.createElement("button");
        tombol.textContent = "Hapus";

        tombol.onclick = function() {
            hapusData(index);
        };

        li.appendChild(tombol);
        daftar.appendChild(li);
    });
}

// fungsi untuk menambahkan data
function tambahData() {
    let nama = document.getElementById("nama").value.trim();

    if (nama === "") {
        alert("Data tidak boleh kosong!");
        return;
    }

    dataMhs.push(nama);

    document.getElementById("nama").value = "";
    tampilData();
}

// fungsi untuk menghapus data
function hapusData(index) {
    dataMhs.splice(index, 1);
    tampilData();
}

// menampilkan data awal
tampilData();