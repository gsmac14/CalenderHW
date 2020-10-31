$(document).ready(function () {
    //daily time and day
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(currentDate);
    // console.log(currentDate)
    
    //time
    $("#9").text("9AM");
    $("#10").text("10AM");
    $("#11").text("11AM");
    $("#12").text("12AM");
    $("#13").text("1PM");
    $("#14").text("2PM");
    $("#15").text("3PM");
    $("#16").text("4PM");
    $("#17").text("5PM");

 //create changing colors for past, present, and future
 //used if and else statements to to compare times between past, present and future
 //

$(".row").each(function(){
    var time = $(this.children[0]).text();
    // console.log(time);
    if(time < currentDate){
        $(this.children[1]).css("background-color", "grey");
        // console.log(time);
    }
    else if(time > currentDate){
        $(this.children[1]).css("background-color", "green"); 
    
    }
    else{
        $(this.children[1]).css("background-color", "red");
    }
})

$(".saveBtn").on("click", function(){
  var value = $(this).siblings(".col-10").val();
  var timeEl = $(this).siblings(".time-block").attr("id")
  localStorage.setItem(timeEl, value);
  //console.log(value);


});



});

