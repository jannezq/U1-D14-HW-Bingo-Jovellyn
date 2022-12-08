// GLOBAL VARIABLE

let randomNumberBoxs = [];
let calledNumbers = [];

//============================

function randomGenerate() {
  let randomNumber = Math.floor(Math.random() * 76) + 1;
  calledNumbers.push(randomNumber);

  if (calledNumbers.includes(randomNumber));

  console.log(calledNumbers);
}

function onLoadActions() {
  for (let box = 1; box <= 76; box++) {
    //create div for the box containing the number
    let boxNode = document.createElement("div");

    //add class name and
    boxNode.classList.add("box");
    boxNode.innerText = box;
    //boxNode.addEventListener('click', onBoxClick);

    //append it and place in bingo table
    document.getElementById("bingo-table").appendChild(boxNode);
  }
}

window.onload = onLoadActions;
