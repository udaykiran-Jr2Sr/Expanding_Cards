num_images = document.querySelectorAll(".container div").length;
for (var i = 0; i < num_images; i++) {
  document
    .querySelectorAll(".container div")
    [i].addEventListener("click", enlarge);
}

function enlarge() {
  for (var i = 0; i < num_images; i++) {
    document.querySelectorAll(".container div")[i].classList.remove("active");
    document.querySelectorAll(".container div p")[i].style.visibility =
      "hidden";
  }

  this.classList.add("active");
  this.querySelector(".container div p").style.visibility = "visible";
}

//animation to the Paragraph element
//less cards in smaller screens
//hover effets for the images other than main enlarged card
