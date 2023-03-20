let Car = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function (name) {
    return `${name} is driving car `;
  };
};

let myCar = new Car("Nisan", "A123", 2003);
console.log(myCar);
console.log(myCar.drive("Jack"));

let myCar1 = new Car("Honda", "H435", 2010);
console.log(myCar1);
console.log(myCar1.drive("Jill"));

//K'Bank 12
const ObjChakrit = function (fullname, lastname, role) {
  this.fullname = fullname;
  this.lastname = lastname;
  this.role = role;
  this.getshowInfo = () => {
    return `info\nFullname: ${this.fullname}  ${this.lastname}\nrole: ${this.role}`;
  };
};

const chakrit = new ObjChakrit("Chakrit", "Kunaruk", "learner");

console.log(chakrit.getshowInfo());

//W3School - tester
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// for (let i in myObj.cars) {
//   x += `${myObj.cars[i].name}` + "\n";
//   for (let j in myObj.cars[i].models) {
//     x += "-" + myObj.cars[i].models[j] + "\n";
//   }
// }
