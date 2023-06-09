let level = 0;
let colors = ["green", "red", "yellow", "blue"];
let userPattern = [];

let generatePattern = () => {
  level++;
  console.log("level incremented", level);
  let randomColorArray = [];
  $(".heading").text("Level " + level);
  for (let i = 0; i < level; i++) {
    let randomIndex = Math.floor(Math.random() * 4);
    randomColorArray.push(colors[randomIndex]);
  }
  return randomColorArray;
  // makeSound(randomColor);
  // addAnimation(randomColor);
};

let makeSound = (buttonColor) => {
  let soundSource = "sounds/" + buttonColor + ".mp3";
  let audio = new Audio(soundSource);
  audio.play();
};

let addAnimation = (randomColor) => {
  $(`#${randomColor}`).addClass("clicked");
  setTimeout(() => {
    $(`#${randomColor}`).removeClass("clicked");
  }, 150);
};

$(document).keypress(function () {
  let patternArray = generatePattern();
  console.log("pattern genetated", patternArray);
  let i = 0;
  while(i<patternArray.length){
      setTimeout(()=>{
          $(`#${patternArray[i]}`).click();
          i++;
      },1000)
  }
});

$(".btn").click(function () {
  let buttonId = $(this).attr("id");
  makeSound(buttonId);
  addAnimation(buttonId);
  userPattern.push(buttonId);
});
