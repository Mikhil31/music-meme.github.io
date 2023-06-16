var elementsArray = Array.from(document.querySelectorAll(".text h3"));

elementsArray.forEach(function(element) {
  element.addEventListener("click", function() {
    makeSound(this.innerHTML);
  });
});



document.addEventListener("keypress", function(event){
    makeSound(event.key);
});
function makeSound(objSound){
  switch (objSound) {
        case "S":
        var audio = new Audio("sounds/memes/sad-violin.mp3");
        audio.volume=0.2;
        audio.play();
        break;
        case "F":
        var audio = new Audio("sounds/memes/fbi-open.mp3");
        audio.volume=0.2;
        audio.play();
        break;
        case "I":
        var audio = new Audio("sounds/memes/bing.mp3");
        audio.volume=0.2;
        audio.play();
        break;
        case "N":
        var audio = new Audio("sounds/memes/nani.mp3");
        audio.volume=0.2;
        audio.play();
        break;
        case "A":
        var audio = new Audio("sounds/memes/aw-shit.mp3");
        audio.volume=0.2;
        audio.play();
        break;
        case "D":
        var audio = new Audio("sounds/memes/what-da-dog-doin.mp3");
        audio.volume=0.2;
        audio.play();
        break;  
      default:
        break;
   }
}