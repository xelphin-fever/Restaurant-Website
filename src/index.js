
console.log("Restaurant Page");

import { makeNavBar } from "./utilities"
import { pageLoad } from "./pageLoad"
import { menuLoad } from "./menu"
import { contactLoad } from "./contact"

//---STYLESHEET---
const stylesheet = document.querySelector("#stylesheet");

//---NAVBAR---
const navbar = makeNavBar();
content.appendChild(navbar);
//Tabs
const tabs = document.querySelectorAll(".nav-links");
console.log(tabs);

//---LANDING PAGE---
pageLoad();
stylesheet.setAttribute("href","./style/style.css");


//---SWITCH TABS---
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        let myPage = event.target.getAttribute("data-page");
        content.textContent="";
        content.appendChild(navbar);
        if (myPage=="home"){
            console.log("Switch to Home");
            stylesheet.setAttribute("href","./style/style.css");
            pageLoad();
        }
        else if (myPage=="menu"){
            console.log("Switch to Menu");
            stylesheet.setAttribute("href","./style/menu.css");
            menuLoad();
        }
        else if (myPage=="info"){
            console.log("Switch to Contact");
            stylesheet.setAttribute("href","./style/contact.css");
            contactLoad();
        }
    });
});
















