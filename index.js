// Lesson 1,2,3,4,5,6,7,8,9,10,
// 11,12,13,14,15,16,17,18,19,20,
// 21,22,23,24,25,26,27,28,29

let myLeads = [];
const inputEl = document.querySelector(".input-el");
const inputBtn = document.querySelector(".input-btn");
const ulEl = document.querySelector(".ul-el");
const result = document.querySelector(".result");

inputBtn.addEventListener("click", function () {
  if (inputEl.value != "") myLeads.push(inputEl.value);
  renderLeads();
  result.innerHTML = "Saved!";
  inputEl.value = "";
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

// Adding a button using js
// const body = document.querySelector("body");
// body.innerHTML += `<button class="buy-btn">Buy!</button>`;

// const buyBtn = document.querySelector(".buy-btn");
// buyBtn.addEventListener("click", function () {
//   body.innerHTML += `<p>Thank you for buying!</p>`;
// });
