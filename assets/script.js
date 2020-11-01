// global variables
var tasks = {};
var myTime = document.querySelector("#clock");
var currentTime = moment();

// display current time and date at top of page
myTime.textContent = currentTime.format("MMMM DD, YYYY - h:mm:ss a");
function update() {
  $("#clock").html(moment().format("MMMM DD, YYYY - h:mm:ss a"));
}
setInterval(update, 1000);

/* var checkStorage = function() {
  for (var i)
} */


// SEE WILL & JOSEPH'S SLACK MESSAGES!!!!!!!!!!!!!!!!!!!!



var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".taskEl").on("click", "p", function () {
  console.log("p was clicked");
  var text = $(this).text().trim();
  var textInput = $("<textarea>"/* ???????????? */).addClass("form-control").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

$(".list-group").on("blur", "textarea", function () {
  // get textarea's current value/text
  var text = $(this).val().trim();
  // recreate p element
  var taskP = $("<p>").addClass("m-1").text(text);
  //replace textarea with p element
  $(this).replaceWith(taskP);
  saveTasks();
});

// create a variable for each time of day

// repeat this for all times^

var time1 = moment(currentTime, "L").set("hour", 9);
var time2 = moment(currentTime, "L").set("hour", 10);
var time3 = moment(currentTime, "L").set("hour", 11);
var time4 = moment(currentTime, "L").set("hour", 12);
var time5 = moment(currentTime, "L").set("hour", 13);
var time6 = moment(currentTime, "L").set("hour", 14);
var time7 = moment(currentTime, "L").set("hour", 15);
var time8 = moment(currentTime, "L").set("hour", 16);
var time9 = moment(currentTime, "L").set("hour", 17);
var timeArr = [time1, time2, time3, time4, time5, time6, time7, time8, time9];
let timeClass = 9;

function colorFill(time, elClass) {
  if (time.isSame(currentTime, "hour"))
    $(`.${elClass}`).addClass("bg-danger");

  moment().isBefore(time)
    ? $(`.${elClass}`).addClass("bg-success")
    : $(`.${elClass}`).addClass("bg-secondary");
}

for (let i = 0; i < timeArr.length; i++) {
  const time = timeArr[i];
  colorFill(time, timeClass);
  timeClass++;
}


// save to localStorage when user clicks save button
// do the thing where it updates the page every 30 seconds