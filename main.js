let button = document.querySelector('.visible-button');
let aside = document.querySelector('#content-aside');

button.addEventListener('click', ()=>{
    let clases = aside.getAttribute('class');
    if(clases == "hidden"){
        aside.removeAttribute("class");
        aside.setAttribute("class", "visible");
        button.textContent = "<<"
    }
    else{
        aside.removeAttribute("class");
        aside.setAttribute("class", "hidden");
        button.textContent = ">>"

    }
})