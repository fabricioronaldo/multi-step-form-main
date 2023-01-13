const btnBack = document.querySelector("#back");
console.log(btnBack);
const next = document.querySelector(".navegate__button");
const next_1 = document.querySelector("#next_1");
const next_2 = document.querySelector("#next_2");
const back_1 = document.querySelector("#back_1");
const slidePage = document.querySelector(".primary__container");
const active = document.querySelectorAll(".text__value-blue");
console.log(slidePage);
//console.log(slidePage[0].classList.contains("personal"));

let current = 1;
next_1.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-16.66%";
})

back_1.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0";
})

next_2.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-33.32%";
})
/*btnBack.addEventListener("click", function(event){
    
    slidePage.style.marginLeft = "0px";
    console.log(btnBack);
})

/*next.addEventListener("click", function(event){
    
    slidePage.style.marginLeft = "-340px";
})*/

next.addEventListener("click", function(event){
    
    verifica2();
})

function verifica() {
    for (let i = 0; i < slidePage.length; i++) {
        
        if(slidePage[i].classList.contains("personal")){
            slidePage[i].style.marginLeft = "-340px";
        }
    }
}

function verifica2(){
    for (let i = 0; i < slidePage.length; i++) {

        let slide = slidePage[i].classList;

        for (let j = 0; j < slide.length; j++) {
            
            let clase = slide[j];
        
            switch (clase){

                case "personal":
                    slidePage[i].style.marginLeft = "-340px";
                    break;
                case "plan":
                    slidePage[i].style.marginLeft = "-680px";
                    break;
                default:
                    break;

            }
            console.log(clase);
            
        }
    break;
    }
}

//verifica2();