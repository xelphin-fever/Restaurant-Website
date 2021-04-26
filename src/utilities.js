



//APPEND CHILDREN
function appendChildren (parent,children){
    children.forEach((child) => {
        parent.appendChild(child);
    })
}


//MAKE TABS
function makeTab (text,classes =[""], address="#"){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute("href",address);
    classes.forEach((someClass) => {
        a.classList.add(someClass);
    })
    a.textContent=text;
    a.setAttribute("data-page",text.toLowerCase()); //for a 'click' functionality to change tabs
    li.appendChild(a);
    return li;
}

//MAKE NAVBAR
function makeNavBar (){
    //Navbar
    let navbar = document.createElement('nav');
    navbar.setAttribute("id","navbar");
    let navbarUl = document.createElement('ul');
    navbarUl.setAttribute("id","navbar-ul");
    //Tabs
    let tabInfo = makeTab("Info",["nav-links"]); 
    let tabMenu = makeTab("Menu",["nav-links"]);
    let tabHome = makeTab("Home",["nav-links"]); 
    let tabTitle = makeTab("Sweet Tooth",["nav-links"]); 
    tabTitle.setAttribute("id","nav-title");
    //Append
    appendChildren(navbarUl,[tabInfo,tabMenu,tabHome,tabTitle]);
    navbar.appendChild(navbarUl);
    return navbar;
}

//MAKE SPANS
function makeSpan (text, classes=[""]){
    let span = document.createElement('span');
    classes.forEach((someClass) => {
        span.classList.add(someClass);
    })
    span.textContent=text;
    return span;
}

//MAKE IMAGES
function makeImage (src,alt, classes=[""]){
    let img = document.createElement("img");
    classes.forEach((someClass) => {
        img.classList.add(someClass);
    })
    img.setAttribute("src",src);
    img.setAttribute("alt",alt);
    return img;
}






export {appendChildren, makeTab, makeNavBar, makeSpan, makeImage};