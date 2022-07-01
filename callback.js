// setTimeout(() => {
//   console.log("Merhaba");
// }, 2000);

// setInterval(() => {
//   console.log("Merhaba Ben Her Saniye Çalışacağım.");
// }, 1000);

// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Hello!");
// }) ;

import fetch from "node-fetch";
import axios from "axios";
// import { user, users } from "./my-module";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users Yüklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("Post 1 Yüklendi!", post)

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data) => data.json())
//         .then((post) => console.log("Post 2 Yüklendi!",post));

//       });
//   });




// async function getData(){

//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     const post3 = await (await fetch("https://jsonplaceholder.typicode.com/posts/3")).json();

//     const post4 = await (await fetch("https://jsonplaceholder.typicode.com/posts/4")).json();

//     const post5 = await (await fetch("https://jsonplaceholder.typicode.com/posts/5")).json();

//     console.log("users",users);
//     console.log("post1",post1);
//     console.log("post2",post2);
//     console.log("post3",post3);
//     console.log("post4",post4);
//     console.log("post5",post5);
// }
// getData();






// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   const { data: post3 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/3"
//   );

//   const { data: post4 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/4"
//   );

//   const { data: post5 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/5"
//   );

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
//   console.log("post3", post3);
//   console.log("post4", post4);
//   console.log("post5", post5);
// })();





// const getComments = (number) => {

//     return new Promise((resolve,reject) => {
//         if(typeof(number) === "number"){
//             resolve("Tebrikler");
//         }

//         reject("Bir Hata Oluştu");
//     });

// };
// getComments("5")
// .then((data) => console.log(data))
// .catch((err) => console.error(err));






// const getUsers = () => {
//   return new Promise(async (resolve, reject) => {
//     const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//     resolve(data);
//   });
// };

// const getPost = (post_id) => {
//   return new Promise(async (resolve, reject) => {
//     const { data } = await axios(
//       "https://jsonplaceholder.typicode.com/posts/" + post_id
//     );
//     resolve(data);
//   });
// };

// (async () => {
//   await getUsers()
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

//   await getPost(5)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// })();






const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("Bir Sorun Oluştu");

  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
    // reject("Bir Sorun Daha Oluştu");
  });
};

// (async () => {
//     try{
    
//      const users = await getUsers();

//      const post = await getPost(5);

//     console.log(users);
//     console.log(post);
//     }catch(e){
//         console.log(e);
//     }
  
// })();

Promise.all([getUsers(),getPost(1)])
.then(console.log)
.catch(console.log);