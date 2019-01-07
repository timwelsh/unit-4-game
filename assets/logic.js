//Assign global variables
var counter = 0;
var win = 0;
var loss = 0;
var goal = 0;
var counter = 0;

//Open and close the loss overlay
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

function assignValues() {
    //Set the Random number for the goal
    goal = randomGoal();
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

    $("#newNum").text(0);
    counter = 0;
}
assignValues();

//Click Event
$(".throne").on("click", function() {
  var throneValue = ($(this).attr("data-value"));
  throneValue = parseInt(throneValue);
  counter += throneValue;
  $("#newNum").text(counter);

  if (counter === goal) {
    win += 1;
    $("#wins").text(win);
    reset();
  }

  else if (counter >= goal) {
    openEnd();
    loss += 1;
    $("#losses").text(loss);
    reset();
  }
});

function reset() {
  assignValues();
}