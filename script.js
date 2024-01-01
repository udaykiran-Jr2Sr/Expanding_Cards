num_images = document.querySelectorAll(".container div").length;
for (var i = 0; i < num_images; i++) {
  document
    .querySelectorAll(".container div")
    [i].addEventListener("click", enlarge);
}

function enlarge() {
  for (var i = 0; i < num_images; i++) {
    document.querySelectorAll(".container div")[i].classList.remove("active");
  }

  this.classList.add("active");
  this.querySelector(".container div p")["visibility"] = "visible";
}


//To do get the discriptions visible when the card got pressed down and add some animation to the text
//and the less numbers of cards are shown in smaller screens