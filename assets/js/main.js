const btnBack = document.querySelector("#back");
const next = document.querySelector(".navegate__button");
const voltar = document.querySelector(".navegate__button--back");
const slidePage = document.querySelectorAll(".primary__container");
const active = document.querySelectorAll(".text__value-blue");
const pick = document.querySelector(".pick");
const yearly = document.querySelector(".pick-yearly");
const toggle = document.querySelector(".button__check");


const btnPlan = document.querySelectorAll(".form__button");
console.log(arcade);
const radius_arcade = document.getElementsByName("plan");
console.log(radius_arcade);
let current = 0;

arcade.addEventListener("click", function(){
    addClass();
})

advanced.addEventListener("click", function(){
    addClass();
})

pro.addEventListener("click", function(){
    addClass();
})

function addClass() {
    for (i in radius_arcade){
        if(radius_arcade[i].checked){
            btnPlan[i].classList.add("radius-action");
            console.log(btnPlan);
        } else {
            btnPlan[i].classList.remove("radius-action");
        } 
    }
}


toggle.addEventListener("change", function() {
    if (this.checked) {
        active[0].classList.add("text__value-active");    
        active[1].classList.add("text__value-active");    
        active[2].classList.add("text__value-active");    
        //pick.style.display = "none";
        //yearly.style.display = "block";

    }else {
        active[0].classList.remove("text__value-active")
        active[1].classList.remove("text__value-active")
        active[2].classList.remove("text__value-active")
    }
    
})
/*
next_1.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-16.66%";
})


next_2.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-33.32%";
})


next_3.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-49.98%";
})


next_4.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-49.98%";
})

back_1.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0";
})

back_2.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-16.66%";
})

back_3.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-16.66%";
})

back_4.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-33.32%";
})*/


/*btnBack.addEventListener("click", function(event){
    
    slidePage.style.marginLeft = "0px";
    console.log(btnBack);
})

/*next.addEventListener("click", function(event){
    
    slidePage.style.marginLeft = "-340px";
})*/

next.addEventListener("click", function(event){
    
    verifica2(current);
    
})

voltar.addEventListener("click", function(event){
    back(current);    
})



const form = ["personal","plan","pick","finishing"];
console.log(form);


function verifica() {
    for (let i = 0; i < slidePage.length; i++) {
        
        if(slidePage[i].classList.contains("personal")){
            slidePage[i].style.marginLeft = "-16.66%";
        }else if (slidePage[i].classList.contains("plan")) {
            slidePage[i].style.marginLeft = "";
        }
    }
}

function verifica2(cont){
    for (let i = cont; i < form.length; i++) {

        //let slide = slidePage[i].classList;
        //console.log(slide);
        //for (let j = 0; j < slide.length; j++) {
            
            let clase = form[i];
        
            switch (clase){

                case "personal":
                    slidePage[i].style.marginLeft = "-16.66%";
                    current += 1;
                    break;
                case "plan":
                    slidePage[i].style.marginLeft = "-16.66%";
                    current += 1;
                    break;
                case "pick":
                    slidePage[i].style.marginLeft = "-16.66%";
                    current += 1;
                    break;
                case "pick-yearly":
                    slidePage[i].style.marginLeft = "-16.66%";
                    current += 1;
                    break;
                case "finishing":
                    slidePage[i].style.marginLeft = "-16.66%";
                    current += 1;
                    break;
                
                default:
                    break;

            }
            console.log(clase);
            
        //}
    break;
    }
}

function back(cont){
    for (let i = cont; i < form.length; i++) {

        //let slide = slidePage[i].classList;
        //console.log(slide);
        //for (let j = 0; j < slide.length; j++) {
            
            let clase = form[i];
        
            switch (clase){

                case "personal":
                    slidePage[i].style.marginLeft = "16.66";
                    current -= 1;
                    break;
                case "plan":
                    slidePage[i-1].style.marginLeft = "0";
                    current -= 1;
                    break;
                case "pick":
                    slidePage[i-1].style.marginLeft = "0";
                    current -= 1;
                    break;
                case "pick-yearly":
                    slidePage[i-1].style.marginLeft = "0%";
                    current -= 1;
                    break;
                case "finishing":
                    slidePage[i-1].style.marginLeft = "0%";
                    current -= 1;
                    break;
                
                default:
                    break;

            }
            console.log(clase);
            
        //}
    break;
    }
}

/*Adicionar a classe no botão checked */

let boxes = document.querySelectorAll("input[type='checkbox']")

for (let i of boxes){
    i.onclick = function(){
        let pai = this.parentNode.parentNode.parentNode;

        if (this.checked){
            pai.style.background = "var(--Alabaster)";
            pai.style.border = "1px solid var(--Purplish-blue)";
        } else {
            pai.style.background = "var(--White)";
            pai.style.border = "1px solid var(--Light-gray)";

        }
    }
}