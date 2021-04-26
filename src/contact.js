import {makeSpan} from "./utilities"


function contactLoad() {
    console.log("Contact Page:")
    const content= document.querySelector('#content');

    //-----MAIN-----
    let main =document.createElement("div");
    main.setAttribute("id","main-form");

    //---INFO---
    let title= document.createElement("h1");
    title.setAttribute("id","form-title");
    title.textContent= "Sweet Tooth";
    main.appendChild(title)
    //
    function makeContactInfo (infoText, spanText){
        let info = document.createElement("h2");
        info.classList.add("form-info");
        info.textContent=infoText;
        info.appendChild(makeSpan(spanText,["form-span"]));
        return info;
    }
    //
    main.appendChild(makeContactInfo("Location","Dalia st. 15, Los Angeles"));
    main.appendChild(makeContactInfo("Open","Mon-Sat: 6 a.m - 15 p.m"));
    main.appendChild(makeContactInfo("Phone","647356482"));
    main.appendChild(makeContactInfo("Email","sweettooth@gmail.com"));
    content.appendChild(main);
}


export { contactLoad };