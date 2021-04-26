import { appendChildren, makeSpan, makeImage } from "./utilities"


function menuLoad() {
    console.log("Menu Page:")
    const content= document.querySelector('#content');

    //-----MAIN-----
    let main =document.createElement("div");
    main.setAttribute("id","main");

    //----TITLE----
    let divTitle = document.createElement("div");
    let mainTitle= document.createElement("h1");
    mainTitle.setAttribute("id","title");
    mainTitle.textContent = "Our Sweet Menu";
    divTitle.appendChild(mainTitle);
    main.appendChild(divTitle);

    //----MENU----
    let wholeMenu = document.createElement("div");
    wholeMenu.setAttribute("id","menu-div-options");

    //---ADD BLOCKS---
    for (let [blockName, option] of Object.entries(menuItems)){
        //---MENU BLOCK---
        let menuBlock = document.createElement("div");
        menuBlock.classList.add("class","menu-div-block");
        //BLOCK TITLE
        let divBlockTitle = document.createElement("div");
        let blockTitle = document.createElement("h2");
        blockTitle.classList.add("class","menu-block-title");
        blockTitle.textContent= blockName;
        divBlockTitle.appendChild(blockTitle);
        menuBlock.appendChild(divBlockTitle);
        //--OPTION--
        for (let [optionName, info] of Object.entries(option)){
            let optionDiv = document.createElement("div");
            optionDiv.classList.add("class","menu-option");
            //IMAGE
            let imgDiv = document.createElement("div");
            let optionImg = document.createElement("img");
            optionImg.classList.add("menu-option-img");
            optionImg.setAttribute("src",info.src);
            optionImg.setAttribute("alt",info.title);
            imgDiv.appendChild(optionImg);
            optionDiv.appendChild(imgDiv);
            //INFORMATION
            let infoDiv = document.createElement("div");
            infoDiv.classList.add("menu-option-info");
            //title
            let infoTitle = document.createElement("h3");
            infoTitle.classList.add("menu-info-title");
            infoTitle.textContent=info.title;
            //info
            let infoInfo = document.createElement("p");
            infoInfo.classList.add("menu-info-text");
            infoInfo.textContent=info.info;
            //price
            let infoPrice = document.createElement("h3");
            infoPrice.classList.add("menu-info-price");
            infoPrice.textContent=info.price;
            //append info //***append children? */
            appendChildren(infoDiv,[infoTitle,infoInfo,infoPrice]);
            optionDiv.appendChild(infoDiv);
            menuBlock.appendChild(optionDiv);
        }
        wholeMenu.appendChild(menuBlock);
    }

    //APPEND
    main.appendChild(wholeMenu);
    content.appendChild(main);


}


const menuItems = {
    "Waffles": { //BLOCK
        "Strawberry & Honey" : { //OPTION
            title: "Strawberry & Honey",
            src: "./images/waffle-honey.png",
            info: "Waffles with pure honey and strawberry topping",
            price: "4.50$",
        },
        "Simply Buttered" : { //OPTION
            title: "Simply Buttered",
            src: "./images/waffle-butter.png",
            info: "Simple waffles with butter topping",
            price: "1.50$",
        },
    },
    "Pancakes": {
        "Butter & Maple": {
            title: "Butter & Maple",
            src: "./images/pancake-butter-maple.png",
            info: "Classic butter pancakes with maple syrup",
            price: "2.00$", 
        },
        "Banana": {
            title: "Banana",
            src: "./images/pancake-banana.png",
            info: "Pancakes served with banana topping",
            price: "3.00$", 
        },
    },
    "Muffins": {
        "Chocolate Chip": {
            title: "Chocolate Chip",
            src: "./images/muffin-chocolate-chip.png",
            info: "Classic chocolate chip muffin",
            price: "3.50$", 
        },
        "Chocolate": {
            title: "Chocolate",
            src: "./images/muffin-chocolate.png",
            info: "Oozy chocolate muffin with goldberries on the inside",
            price: "4.50$", 
        },
        "Blueberry": {
            title: "Blueberry",
            src: "./images/muffin-blueberry.png",
            info: "Delicios blueberry muffin",
            price: "4.00$", 
        },
    }
}


export { menuLoad };