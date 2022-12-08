//============================

function randomGenerate() {
  let min = 1;
  let max = 76;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function markedNumber() {
  let random = randomGenerate();
  let markedNode = document.querySelectorAll(".bingoNum")[random - 1];
  console.log(markedNode);

  markedNode.classList.add("marked");
  //markedNode.style.background = "white";
}

function onLoadActions() {
  for (let box = 1; box <= 76; box++) {
    //create div for the box containing the number
    let boxNode = document.createElement("div");

    //add class name and
    boxNode.classList.add("bingoNum");
    boxNode.innerText = box;
    //boxNode.addEventListener("click", onBoxClick);

    //append it and place in bingo table
    document.getElementById("bingo-table").appendChild(boxNode);
  }
}

function onBoxClick(event) {
  let selectedNumber = event.target;
  selectedNumber.classList.add("marked");
}

window.onload = onLoadActions;
