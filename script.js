$(document).ready(function () {
    //daily time and day
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(currentDate);
    console.log(currentDate)
    //time
    $("#9AM").text("9:00AM");
    $("#10AM").text("10:00AM");
    $("#11AM").text("11:00AM");
    $("#12PM").text("12:00AM");
    $("#1PM").text("1:00PM");
    $("#2PM").text("2:00PM");
    $("#3PM").text("3:00PM");
    $("#4PM").text("4:00PM");
    $("#5PM").text("5:00PM");

    //create text area in rows 




});

