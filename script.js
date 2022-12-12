
var timeDisplayEl = $("#currentDay");
var events = "";

var field 
var content
var hours9 = $("#hour-9");
var hours10 = $("#hour-10");
var hours11 = $("#hour-11");
var hours12 = $("#hour-12");
var hours1 = $("#hour-1");
var hours2 = $("#hour-2");
var hours3 = $("#hour-3");
var hours4 = $("#hour-4");
var hours5 = $("#hour-5");
var hoursArray = [hours9, hours10, hours11, hours12, hours1, hours2, hours3, hours4, hours5];



function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}



$(".saveBtn").click(saveProjectsToStorage)




function readProjectsFromStorage() {
  var hourlyEvents = Object.keys(localStorage);
  for (let index = 0; index < hourlyEvents.length; index++) {
    const oneEvent = hourlyEvents[index];
    
    var storageEvent = localStorage.getItem(oneEvent);
    
    $("#" + oneEvent).val(storageEvent);
    
  }
  
  
}

function saveProjectsToStorage() {
  buttonId = this.id
  fieldId = buttonId + "field"
  content = $("#" + fieldId).val()
  localStorage.setItem(fieldId, content)
}






function checkTime() {
  
 for (let index = 9; index < 18; index++) {
  let amPmTime = index;
if (index > 12) {
  amPmTime = index - 12
}
let timeClass = "future"

if (dayjs().isSame(dayjs().hour(index), 'hour')) {
  timeClass = "present"
}
else if (dayjs().isBefore(dayjs().hour(index), 'hour')) {
  timeClass = "past"
}

$("#hour-" + amPmTime).addClass(timeClass);
  

  console.log(amPmTime);

  
 }

    


} 
checkTime();

displayTime();
setInterval(displayTime, 1000);
readProjectsFromStorage();


$(function () {
 
});
