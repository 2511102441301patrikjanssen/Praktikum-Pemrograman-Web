// Funtion

// Dekralasi Function

function sayHello() { //nama function
    console.log("Patrik Ganteng"); //blok program
}

sayHello(); // Memanggil function

// Function Expression

const hello = function() {
    console.log("Patrik Ganteng");
};

hello(); // Memanggil function expression
    
// Arrow Function

const wolrd = () => {
    console.log("Patrik Cantik");
}

wolrd(); // Memanggil arrow function

// Function dengan parameter

function mahasiswa(nama) {
    console.log(`Nama Mahasiswa: ${nama}`);
}

mahasiswa("Patrik"); // Memanggil function dengan parameter

// Function dengan return value

function nilai(a, b) {
    return a + b;
}


console.log(nilai(5, 3)); // Output: 8   

// function dengan nilai default

function nilai2(x, y = 10) {
    return x + y;
}

const hasil = nilai2(5); // Memanggil function dengan nilai default
console.log(hasil); // Output: 15

// function dengan rest parameter

function sulm(...nilai) {
    return nilai.reduce((total, num) => total + num, 0);
}

const total = sulm(1, 2, 3, 4, 5); // Memanggil function dengan rest parameter
console.log(total); // Output: 15
