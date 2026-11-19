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
function mahasiswa(nama){
    console.log(`Nama Mahasiswa : ${nama}`);
}

mahasiswa("doni");


// function dengan return value
