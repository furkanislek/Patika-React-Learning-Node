export default (name) => {
  // console.log("Hello " + name);
  console.log(`hello ${name}`);
};

const topla = (a, b) => a + b;

const cikar = (a, b) => a - b;

const text = "Text";

const user = {
  name: "Furkan",
  surname: "ISLEK",
};
const users = [
  {
    name: "Furkan",
    age: 23,
  },

  {
    name: "Akif",
    surname: "İŞLEK",
  },
];

export { topla, cikar, text, user, users };
