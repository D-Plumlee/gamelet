const ball = document.getElementById("ball"); // gets the ball
document.addEventListener("keydown", handleKeyPress); // listens for keypress
let position = 0;

/*
handleKeyPress
responds to certain key presses by updating position
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = position + "px";
}
