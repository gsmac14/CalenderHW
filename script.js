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

 //create changing colors for past, present, and future
$("textarea").addClass("textArea");

$(".row").each(function(){
    var time = $(this.children[0]).text();
    console.log(time);
    if(time < currentDate){
        $(this.children[1]).addClass("past");
        console.log(time);
    }
    else if(time > currentDate){
        $(this.children[1]).addClass("present"); 
    
    }
    else{
        $(this.children[1]).addClass("future");
    }
})

$(".saveBtn").on("click", function(){
    textArea = $(".col-10").value

    localStorage.setItem("col-10", textArea);

});



});

