const btnBack = document.querySelector("#back");
console.log(btnBack);
const next = document.querySelector(".navegate__button");
const slidePage = document.querySelectorAll(".primary__container");
console.log(slidePage);
console.log(slidePage[0].classList.contains("personal"));

let current = 1;

btnBack.addEventListener("click", function(event){
    
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