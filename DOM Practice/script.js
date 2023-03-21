// const jscript = document.querySelector("#reading-list li:nth-child(2) .name");
// console.log(jscript);
// jscript.innerHTML = "Advance DOM";

const jscript = document.querySelectorAll("#reading-list li .name"); //querySelectorAll - not need to turn to array

jscript.forEach(function (list) {
  list.textContent += " book title";
});

//better way for element.addEventListener()
const lists = document.querySelector("#reading-list ul");
// //Interacting with Form -- add readinglist
const addFormList = document.forms["add-list"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent from refresh
  const value = addFormList.querySelector('input[type="text"]').value; //add new reading list in the text box
  // console.log(value);
  // //create element
  const childList = document.createElement("li");
  const spanList1 = document.createElement("span");
  const spanList2 = document.createElement("span");
  // //add content
  spanList1.innerHTML = value;
  spanList2.innerHTML = "delete";
  // //add classes
  spanList1.className = "name";
  spanList2.className = "delete";
  // //append to DOM
  childList.appendChild(spanList1);
  childList.appendChild(spanList2);
  lists.appendChild(childList);
});

//delete button
const delBtn = document.querySelectorAll(".delete");
for (let dlBtn of delBtn) {
  dlBtn.addEventListener("click", function (e) {
    list.removeChild(e.target.parentNode);
  });
}

//searching-list

const list = document.querySelector("#reading-list ul");
list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
// //Interacting with Form -- add readinglist
const addForm = document.forms["add-list"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent from refresh
  const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
  // console.log(value);
  // //create element
  const li = document.createElement("li");
  const ReadingListName = document.createElement("span");
  const deleteBtn = document.createElement("span");
  // //add content
  deleteBtn.textContent = "delete";
  ReadingListName.textContent = value;
  // //add classes
  ReadingListName.classList.add("name");
  deleteBtn.classList.add("delete");
  // //append to DOM
  li.appendChild(ReadingListName);
  li.appendChild(deleteBtn);
  list.appendChild(li); //create but not context
});
