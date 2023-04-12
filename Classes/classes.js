class Users {
  constructor(obj, { name, id, record }) {
    this._username = obj.username;
    this._password = obj.password;
    this._fullName = obj.fullName;
    this._age = obj.age;
    this._email = obj.email;
    this._activity = [{ name, id, record }];
  }

  get username() {
    return this._username;
  }

  get activity() {
    return this._activity;
  }

  //   recordMeasure(id, start, end) {
  //     return (this._activity[id - 1].record = end - start);
  //   }

  set nameActivity(value) {
    if (value === this._activity.name) {
      return this._activity.forEach((val) => {});
    }
  }

  set getActivity(id) {
    let arr = [];
    id = this._activity.id;
  }
}

class newUser extends Users {
  constructor(obj, { name, id, record }) {
    super(obj, { name, id, record });
  }
}

const john = new newUser(
  {
    username: "jhonandjill",
    password: 12345678,
    fullName: "John Carpenter",
    age: 45,
    email: "jhonandjill@gmail.com",
  },
  { name: "Boxing", id: 1, record: "10hrs" }
);

console.log(john);

class Userss {
  constructor({ email, password, displayName, height, weight, gender, image }) {
    this.email = email;
    this.password = password;
    this.displayName = displayName;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.image = image;
  }
  get showEmail() {
    return this.email;
  }
  get showDisplay() {
    return this.displayName;
  }
  get showImage() {
    return this.image;
  }
  get showHeight() {
    return this.height;
  }
  get showPassword() {
    return this.password;
  }
}

// class userLogin extends Users {
//     constructor({email, password, image}){
//         //email : test@gmail.com
//         //password : 123456789
//         //image : รูปจ้า
//         super({email, password,image});
//     }
// }

// const nongBoom = new userLogin({email:'test@gmail.com', password:'123456789', image:'รูปจ้า'});

// console.log(nongBoom.showImage);

class userLogin extends Userss {
  constructor({ email, password, image }, lnwza, word) {
    super({ email, password: "12345", image, height: "แมวสิบตัว" });
    this.word = word;
    this.lnwza = lnwza;
  }
  get showlnwza() {
    return this.lnwza;
  }
  NongBoomNaruk() {
    console.log(`${this.word}`);
  }
}
const nongBoom = new userLogin(
  { image: 1, email: "test@gmail.com", password: "123456789" },
  "nongboom",
  "น้องบูมน่ารักมากๆ"
);
// nongBoom.NongBoomNaruk();

console.log(nongBoom.showInwza);
