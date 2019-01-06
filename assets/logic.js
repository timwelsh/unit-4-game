var counter = 0;

function openEnd() {
  document.getElementById("myEnd").style.width = "100%";
}

function closeEnd() {
  document.getElementById("myEnd").style.width = "0%";
}

function randomNum() {
  var x = Math.floor((Math.random() * 12) + 1);
  return x;
}
function randomGoal() {
  var x = Math.floor((Math.random() * 101) + 19);
  return x;
}
//Set the Random number for the goal
 var goal = randomGoal();
$("#goalnum").text(goal);
 
//Set random numbers for each throne
var x = randomNum();
$(".rio").attr("data-value", x);
var x = randomNum();
$(".angkor").attr("data-value", x);
var x = randomNum();
$(".jerusalem").attr("data-value", x);
var x = randomNum();
$(".uluwatu").attr("data-value", x);

//Click Event
$(".throne").on("click", function() {
  var throneValue = ($(this).attr("data-value"));
  throneValue = parseInt(throneValue);
  counter += throneValue;

  $("#newNum").text(counter);

  if (counter === goal) {
    alert("You win!");
  }

  else if (counter >= goal) {
    openEnd();
  }

});