// function

// deklarasi function
function sayHello(){ // nama function
    console.log("Hello World!"); // blok program
}
sayHello(); // memanggil function

// function expression
const hello = function (){
    console.log("hello world!");
}

hello();

// arrow function
const world = () => {
    console.log("hello world!");
}

world();

// function dengan parameter
function sapa(nama){
    console.log("Hello " + nama);
}
sapa("Patrik");

// function dengan return
function nilai(x, y){
    return x + y;
}

console.log(nilai(5, 10));

// function dengan nilai default
function nilai2(x, y = 10){
    return x + y;
}

const hasil = nilai2(10);
console.log(hasil);

// function rest parameter
function sum(...nilai){
    return nilai.reduce((total, num) => total + num, 0);
}

const total = sum(1, 2, 3, 4, 5); // multiple argument
console.log(total);
