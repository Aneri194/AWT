let myarray = [1, "Aneri", true, 6.89, 18];

console.log("length :", myarray.length);

console.log("Element at  myarray[2] :", myarray[2]);
console.log("Element at myarray[4] :", myarray[4]);
console.log("Array : ",myarray);

myarray.push(6);
console.log("After push(6) : ",myarray);
myarray.pop(); 
console.log("After pop() : ",myarray);
myarray.unshift(0); 
console.log("After unshift(0) : ",myarray);
myarray.shift(); 
console.log("After shift : ",myarray);
console.log("After join : ",myarray.join('-'));

delete myarray[2];
console.log("After delete : ",delete myarray[2]);

let newArray = [27, 25.4, "new"];
myarray = myarray.concat(newArray); 
console.log("Concate : ",myarray);

let flattenedArray = [[20, 22.34], [25, 29]].flat();
console.log('Flatten Array:',flattenedArray );

myarray.splice(2, 1, 10, 11);
console.log("splice : ",myarray);

let slicedArray = myarray.slice(1, 4); 

console.log("Sliced array:", slicedArray);

let person = {
    name: "Aneri Desai",
    age: 19,
    gender: "Female"
  };
  
function displayDetails(person) {
    console.log("name:", person.name);
    console.log("age:", person.age);
    console.log("gender:", person.gender);
  }
  displayDetails(person);
  