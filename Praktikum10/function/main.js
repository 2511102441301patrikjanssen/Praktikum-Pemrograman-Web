
 
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
    return nilai.reduce((total, nil) => total + nil, 0);
}

const total = sum(1, 2, 3, 4, 5); // multiple argument
console.log(total);

// function dengan callback
// function inputData(callback){
//     const nama = prompt("masukkan nama : ");
//     callback(nama);
// }

// inputData(function(nama){
//     console.log(nama);
// }) // memanggil function dengan callback

// function closure
function outerFunction(outerVariabel){
    return function innerFunction(innerVariabel){
        console.log(outerVariabel, innerVariabel);
    }
}

outerFunction("outside")("inside"); // memanggil outerFunction dan innerFunction
//innerFunction("inside"); // memanggil innerFunction => error

// function dengan IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("menjalankan fungsi immediately");
})();
