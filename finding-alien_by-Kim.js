let aliens = [51, 35, 23, 22, 42, 33, 29, 16, 29, 21];
const mutant = 19;
let text = document.getElementById("text");
let img = document.getElementById("amongus");

const addAlien = (num) => {
  // take value from propmt
  num = prompt("Add number");
  // push value to aliens's array (and add +infront to make it number)
  aliens.push(+num);
  console.log(aliens);
};

const findAlien = () => {
  // find lucky number
  let number = Math.floor(Math.random() * 61);

  // check if the number is in aliens' array
  if (aliens.includes(number)) {
    console.log(`${number} is alien!👽`);
    text.innerHTML = `${number} is alien!👽`;
    img.src =
      "https://mystickermania.com/cdn/stickers/among-us/among-us-red-impostor-big-mouth-512x512.png";
    text.style.color = "red";

    // check if it khun touch
  } else if (number === mutant) {
    console.log(`${number} is MUTANT alien!👾`);
    text.innerHTML = `${number} is MUTANT alien!👾`;
    img.src =
      "https://openseauserdata.com/files/30b43d9b45fb8235857f2c6a59f36710.jpg";
    text.style.color = "purple";
  } else {
    console.log(`${number} is normal student!😊`);
    text.innerHTML = `${number} is human!😊`;
    img.src =
      "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec";
    text.style.color = "#fff";
  }
};

findAlien();
