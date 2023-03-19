const inputEl = document.querySelector(".input-el");
const inputBtn = document.querySelector(".input-btn");
const tabBtn = document.querySelector(".tab-btn");
const deleteBtn = document.querySelector(".delete-btn");
const ulEl = document.querySelector(".ul-el");

function render(leads) {
  let listItems = ``;
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a href="${leads[i]}" target="_blank"> 
        ${leads[i]}
      </a>
    </li>`; //not single quote
    //using backtick character
  }
  //Instead of using innerHTML 3 times inside for loop
  //just need to use innerHTML 1 times outside for loop
  //improving performance
  ulEl.innerHTML = listItems;
} //render leads to screen

let myLeads = [];
if (localStorage.getItem("myLeads")) {
  myLeads = JSON.parse(localStorage.getItem("myLeads")); //parse to array
  render(myLeads);
}

inputBtn.addEventListener("click", () => {
  if (inputEl.value) {
    //check if input value is truthy value then push
    myLeads.push(inputEl.value);
    render(myLeads);
  }
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //store leads to local storage
  inputEl.value = ""; //clear input field after saving lead
});

tabBtn.addEventListener("click", () => {
  //chrome: running chrome extension
  //tabs: object
  //query: method
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    render(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //store leads to local storage
  });
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear(); //clear local storage
  myLeads = []; //clear Leads list
  render(myLeads);
});
