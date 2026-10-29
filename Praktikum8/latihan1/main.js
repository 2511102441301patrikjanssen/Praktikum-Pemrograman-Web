let nama, nim, submit, dataMhs;

document.getElementById("submit").onclick = function () {
    nama = document.getElementById("nama").value;
    nim = document.getElementById("nim").value;

    dataMhs = nama + " " + nim;
    console.log(dataMhs);
    document.getElementById("dataMhs").textContent = dataMhs;
}