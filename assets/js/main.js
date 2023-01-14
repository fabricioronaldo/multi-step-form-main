const btnBack = document.querySelector("#back");
console.log(btnBack);
const next = document.querySelector(".navegate__button");
const next_1 = document.querySelector("#next_1");
const next_2 = document.querySelector("#next_2");
const next_3 = document.querySelector("#next_3");
const next_4 = document.querySelector("#next_4");
const back_1 = document.querySelector("#back_1");
const back_2 = document.querySelector("#back_2");
const back_3 = document.querySelector("#back_3");
const back_4 = document.querySelector("#back_4");

const slidePage = document.querySelectorAll(".primary__container");
console.log(slidePage);

const active = document.querySelectorAll(".text__value-blue");

const pick = document.querySelector(".pick");
const yearly = document.querySelector(".pick-yearly");
const toggle = document.querySelector(".button__check");
console.log(toggle);
console.log(slidePage);
//console.log(slidePage[0].classList.contains("personal"));

let current = 0;



toggle.addEventListener("change", function() {
    if (this.checked) {
        active[0].classList.add("text__value-active");    
        active[1].classList.add("text__value-active");    
        active[2].classList.add("text__value-active");    
        pick.style.display = "none";
        yearly.style.display = "block";

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

const form = ["personal","plan","pick","pick-yearly","finishing"];
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

//verifica2();