num_images = document.querySelectorAll('.container div').length;
for (var i = 0; i< num_images; i++) {
    document.querySelectorAll(".container div")[i].addEventListener("click", enlarge)
};

function enlarge(){

    for (var i = 0; i< num_images; i++) {
        document.querySelectorAll(".container div")[i].classList.remove("active");
    };
    
    this.classList.add("active");
    this.querySelector("p");
}







