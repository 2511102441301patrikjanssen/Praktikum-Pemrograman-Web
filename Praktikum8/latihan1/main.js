let nama, nim, prodi, matkul;
let tugas, uts, uas, nilaiAkhir;
let grade, status;

document.getElementById("submit").onclick = function () {

    // Mengambil data mahasiswa
    nama = document.getElementById("nama").value.trim();
    nim = document.getElementById("nim").value.trim();
    prodi = document.getElementById("prodi").value.trim();
    matkul = document.getElementById("matkul").value.trim();

    // Mengambil nilai
    tugas = Number(document.getElementById("tugas").value);
    uts = Number(document.getElementById("uts").value);
    uas = Number(document.getElementById("uas").value);

    // Validasi input
    if (
        nama === "" ||
        nim === "" ||
        prodi === "" ||
        matkul === "" ||
        document.getElementById("tugas").value.trim() === "" ||
        document.getElementById("uts").value.trim() === "" ||
        document.getElementById("uas").value.trim() === ""
    ) {
        alert("Semua data harus diisi!");
        return;
    }

    if (
        !Number.isFinite(tugas) ||
        !Number.isFinite(uts) ||
        !Number.isFinite(uas) ||
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        alert("Nilai harus berada antara 0 sampai 100!");
        return;
    }

    // Menghitung nilai akhir
    nilaiAkhir = (tugas * 0.30) +
                 (uts * 0.30) +
                 (uas * 0.40);

    // Menentukan grade
    if (nilaiAkhir >= 85) {
        grade = "A";
    } else if (nilaiAkhir >= 75) {
        grade = "B";
    } else if (nilaiAkhir >= 65) {
        grade = "C";
    } else if (nilaiAkhir >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Menentukan status kelulusan
    if (nilaiAkhir >= 60) {
        status = "Lulus";
    } else {
        status = "Tidak Lulus";
    }

    // Menampilkan hasil
    let hasil = `
        <p>Nama Mahasiswa: ${nama}</p>
        <p>NIM: ${nim}</p>
        <p>Program Studi: ${prodi}</p>
        <p>Mata Kuliah: ${matkul}</p>
        <hr>
        <p>Nilai Tugas: ${tugas}</p>
        <p>Nilai UTS: ${uts}</p>
        <p>Nilai UAS: ${uas}</p>
        <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${status}</p>
    `;

    console.log(hasil);
    document.getElementById("dataMhs").innerHTML = hasil;
};