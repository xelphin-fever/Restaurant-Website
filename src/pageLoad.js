import { appendChildren, makeSpan, makeImage } from "./utilities"


function pageLoad() {
    console.log("Main Page:")
    const content= document.querySelector('#content');
    //---BACKGOUND IMAGE---
    const body= document.querySelector("body");
    //body.style.backgroundImage="url(./images/pancakes-full.jpeg)";

    //---MAIN---
    let main = document.createElement('div');
    main.setAttribute("id","main");
    //Title
    let title = document.createElement('h1');
    title.setAttribute("id", "main-title");
    const titleText=["Sweetest ","Breakfast ","In","Town!"];
    titleText.forEach((text) => {
        let partOfText = makeSpan(text,["main-title-span"]);
        title.appendChild(partOfText);
        title.append(" ");
    });
    main.appendChild(title);
    //Icons
    let divIcons = document.createElement("div");
    divIcons.setAttribute("id","div-img-icons");
    let iconMuffin = makeImage("./images/muffin.jpeg","muffin",["main-img-icons"]);
    let iconPastryMix = makeImage("./images/pastry-mix.jpeg","pastry mix",["main-img-icons"]);
    let iconWaffles = makeImage("./images/waffles.jpeg","waffles",["main-img-icons"]);
    appendChildren(divIcons,[iconMuffin,iconPastryMix,iconWaffles]);
    main.appendChild(divIcons);
    //@SweetTooth
    let miniText = document.createElement("h2");
    miniText.setAttribute("id","main-sub-title");
    miniText.textContent="@SweetTooth";
    main.appendChild(miniText);
    //Append
    content.appendChild(main);

}

export { pageLoad };