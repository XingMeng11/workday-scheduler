//identify now time
//show different color of past,now,and later block
//save input to local storage


//show current date in the header as shown in the example
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


// establish a variable to store the current hour

var current_time = new Date($.now());
var current_hour = parseInt(current_time.getHours())

for (let i = 9 ; i < 18; i ++){
    id = "#hour-" + i.toString()
    if (current_hour < i){
        $(id).addClass('future')
      }else if (current_hour === i){
        $(id).addClass('present')
      }else if (current_hour > i){
        $(id).addClass('past')
      }
}

