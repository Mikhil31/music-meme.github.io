for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
            makeSound(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});
function makeSound(objSound){
  switch (objSound) {
        case "c":
        var audio = new Audio("sounds/piano/key-c.wav");
        audio.volume=0.2;
        audio.play();
        break;
        case "d":
        var audio = new Audio("sounds/piano/key-d.wav");
        audio.volume=0.2;
        audio.play();
        break;
        case "e":
        var audio = new Audio("sounds/piano/key-e.wav");
        audio.volume=0.2;
        audio.play();
        break;
        case "f":
        var audio = new Audio("sounds/piano/key-f.wav");
        audio.volume=0.2;
        audio.play();
        break;
        case "g":
        var audio = new Audio("sounds/piano/key-g.wav");
        audio.volume=0.2;
        audio.play();
        break;
        case "a":
        var audio = new Audio("sounds/piano/key-a.wav");
        audio.volume=0.2;
        audio.play();
        break;
        case "b":
        var audio = new Audio("sounds/piano/key-b.wav");
        audio.volume=0.2;
        audio.play();
        break;    
      default:
        break;
   }
}