let x = 18;
x = 19; 
console.log("X : ",x);

const y = 24;
console.log("Y : ",y);

function add(num1, num2) {
    return num1 + num2;
  }
  console.log("Regular function : ",add(1,2));
  
  hello = () => {
    return "Hello World !!";
  }

const arr1 = [1, "Aneri",6.89];
console.log("without spread ... of : ",arr1);
const arr2 = [...arr1, true, 5];
console.log("With spread ... of : ",arr2);

const arr = [1, "Aneri", 6.89];
console.log("Array : ",arr);
console.log("for/of ");
for (const element of arr) {
  console.log(element);
}

console.log("map objects ");
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));

map1.set('a', 97);

console.log(map1.get('a'));

console.log(map1.size);

map1.delete('b');

console.log(map1.size);
console.log("\nSet objects ");
const mySet = new Set();

mySet.add(1); 
mySet.add(5); 
mySet.add(5.5); 
mySet.add("Aneri"); 
console.log(mySet);

console.log("\nclasses ");
class Aneri {
    constructor(name) {
      this.name = name;
    }
  
    greeting() {
      console.log(`Hello, I am ${this.name}`);
    }
  }
  
  const person = new Aneri('Aneri');
  person.greeting();
  
  console.log("\npromises");
  function fetchData() {
    return new Promise((resolve, reject) => {
        const data = "resolved data";
        resolve(data);
    });
  }

  fetchData()
    .then((result)=>console.log(result))
    .catch((error)=> console.error(error));
  
console.log("\nSymbol ");
const sym = Symbol('description');
console.log(sym); 

console.log("\ndefault parameters ");
function greet(name = 'unknown') {
    console.log(`Hello, ${name}`);
  }
  
  greet(); 
  greet('Aneri'); 

  console.log("\nfunction rest parameters ");
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(10, 20, 30, 40)); 