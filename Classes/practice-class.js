//K' Plug's Code
class Users {
  constructor(obj) {
    this.email = obj.email;
    this.password = obj.password;
    this.displayName = obj.displayName;
    this.height = obj.height;
    this.weight = obj.weight;
    this.gender = obj.gender;
    this.image = obj.image;
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
}

class UserLogin extends Users {
  constructor(obj) {
    super({
      email: obj.email,
      password: obj.password,
      image: obj.email,
    });
    this.isLogin = 0;
    this.showTextResponse = "";
  }
  get checkLogin() {
    if (this.email === "user1@gmail.com" && this.password === "123456") {
      this.isLogin = 1;
    } else {
      this.isLogin = 0;
    }
    return this.isLogin;
  }
  get showLoginResponse() {
    if (!this.checkLogin) {
      return "Email or password incorrect";
    } else {
      return `Welcome ${this.showEmail}`;
    }
  }
}

const iMember = new UserLogin({
  email: "user1@gmail.com",
  password: "123456",
  image: "image.png",
});
console.log(iMember.showLoginResponse);

//K Touch's Code
class User {
  constructor(username, fname, lname, age) {
    (this.username = username),
      (this.firstName = fname),
      (this.lastName = lname),
      (this.age = age),
      (this.activity = []),
      (this.activityCount = 1);
  }

  addActivity(val) {
    let temp = {};
    temp.name = val;
    temp.activityId = this.activityCount;
    temp.time = new Date();
    this.activity.push(temp);
    this.activityCount++;
  }

  removeActivity(id) {
    this.activity.forEach((e, idx) => {
      e.activityId === id ? this.activity.splice(idx, 1) : null;
    });
  }

  editActivity(id, val) {
    this.activity.forEach((e, idx) => {
      e.activityId === id ? (this.activity[idx].name = val) : null;
    });
  }
}

const a = new User("kuku247", "Chaiyaphon", "Yuyod", 24);
// console.log(a)
a.addActivity("boxing");
a.addActivity("running");
a.addActivity("muay-thai");
// a.removeActivity(1);
// a.removeActivity(3);
// a.editActivity(2, "biking");
console.log(a);

//K Kai's Code
// class User {
//   constructor(username, email, gender, age, password) {
//     this._username = username;
//     this._email = email;
//     this._gender = gender;
//     this._age = age;
//     this._password = password;
//   }

//   get username() {
//     return this._username;
//   }
//   get email() {
//     return this._email;
//   }
//   get gender() {
//     return this._gender;
//   }
//   get age() {
//     return this._age;
//   }

//   showInfo() {
//     return `User: ${this._username}, ${this._email}, ${this._gender}`;
//   }

//   login(password) {
//     if (this._password === password) {
//       return "Login Success";
//     } else {
//       return "Login Failure";
//     }
//   }

//   createActivityCard(name, duration, date) {
//     return `Activity: ${name}, Duration: ${duration} hrs, Created: ${date}`;
//   }
// }

// class Admin extends User {
//   delete(user) {
//     return `${user.username} was deleted!`;
//   }

//   showInfo() {
//     return `Admin: ${this._username}, ${this._email}, ${this._gender}`;
//   }
// }

// //Create Users
// const user1 = new User("Joe", "joe@email.com", "male", 49, "1234");
// const user2 = new User("Billy", "billy@live.com", "male", 23, "4321");
// const user3 = new Admin("Samanta", "samanta@123.com", "female", 32, "xxxy");

// console.log(user1.showInfo());
// console.log(user2.showInfo());
// console.log(user3.showInfo());

// console.log(user1.login("1234"));
// console.log(user2.login("11"));

// console.log(user1.createActivityCard("Bicycling", 4.5, Date()));

// console.log(user3.delete(user2));

//K Pooh's Code
// class User {
//   constructor(name, email, password) {
//     this._name = name;
//     this._email = email;
//     this._password = password;
//     this._isImage = false;
//     this._isOnline = false;
//   }

//   get name() {
//     return this._name;
//   }

//   get email() {
//     return this._email;
//   }

//   get password() {
//     return this._password;
//   }

//   addImage() {
//     this._isImage = true;
//   }

//   delImage() {
//     this._isImage = false;
//   }

//   login() {
//     this._isOnline = true;
//   }

//   logout() {
//     this._isOnline = false;
//   }

//   resetPass(newPass) {
//     this._password = newPass;
//   }
// }

// class AdminUser extends User {
//   constructor(name, email, password) {
//     super(name, email, password);
//     this._isAdmin = true;
//     this._isAllPermission = true;
//   }

//   get isAdmin() {
//     return this._isAdmin;
//   }

//   get isAllPermission() {
//     return this._isAllPermission;
//   }
// }

// const user1 = new User("Mee-pooh", "tlimpawittayakul@gmail.com", "12345678");
// const admin1 = new AdminUser("admin1", "admin1@gaintrack.com", "admin111");

// console.log(user1);
// console.log(admin1);

// user1.login();
// user1.resetPass(11111111);
// user1.addImage();
// console.log(user1);
