// Lesson 1,2,3,4,5,6,7,8,9,10,
// 11,12,13,14,15,16,17,18,19,20,
// 21,22,23,24,25,26,27,28,29,30
// 31,32,33,34,35,36,37

let myLeads = [];

const inputEl = document.querySelector(".input-el");
const inputBtn = document.querySelector(".input-btn");
const ulEl = document.querySelector(".ul-el");

inputBtn.addEventListener("click", function () {
  myLeads = JSON.parse(localStorage.getItem("myLeads")); // parse to array
  if (inputEl.value != "") myLeads.push(inputEl.value);
  renderLeads(); // render leads to screen 
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // store leads to local storage 
  inputEl.value = ""; // clear input field after saving lead
});

function renderLeads() {
  let listItems = ``;
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href="${myLeads[i]}" target="_blank"> 
        ${myLeads[i]}
      </a>
    </li>`; // not single quote
    //using backtick character
  }
  // Instead of using innerHTML 3 times inside for loop
  // just need to use innerHTML 1 times outside for loop
  // improving performance
  ulEl.innerHTML = listItems;
}
