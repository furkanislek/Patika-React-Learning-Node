/*
push
map
find
filter
some
every
includes
*/

const users = [{
    name:"Furkan",
    salary: 1000,
    age: 23,
},
{
    name:"İsa",
    salary: 12000,
    age: 27,
},
{
    name:"Hannan",
    salary: 14000,
    age: 25,
},
{
    name:"Hannan",
    salary: 19000,
    age: 34,
},
];


// push

// users.push("Şerife");
// users.push("Şule");

// console.log(users);




// map

// for (let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }

// users.map((item) => {
//     console.log(item.salary);
// })





//find

// const result = users.find((item) => item.name ==="Hannan" && item.salary>15000);
// console.log(result);

// const salary = users.find((item) => item.salary ===140200);
// console.log(salary);





// filter

// const filtered = users.filter((item) => item.name ==="Hannan");
// console.log(filtered);

// const filterr = users.filter(
//   ({name,age})  => name ==="Hannan" && age<30);
// console.log(filterr);




// Some 

// const some = users.some(item => item.age === 10);
// console.log(some);

// const someBODY = users.some(item => item.age === 25);
// console.log(someBODY);




// Every

// const every = users.every((item) => item.age > 26);
// console.log(every);





// Includes

const meyveler = ["elma","armut","muz"];

const isIncludes = meyveler.includes("armut");

console.log(isIncludes);