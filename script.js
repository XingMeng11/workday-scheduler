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

//store input into local storage

$('#hour-9').find('button').on('click',function(){
  var text9 = $('#hour-9').find('textarea').val();
  localStorage.setItem('text9',text9); 
})


$('#hour-10').find('button').on('click',function(){
  var text10 = $('#hour-10').find('textarea').val();
  localStorage.setItem('text10',text10); 
})


$('#hour-11').find('button').on('click',function(){
  var text11 = $('#hour-11').find('textarea').val();
  localStorage.setItem('text11',text11); 
})


$('#hour-12').find('button').on('click',function(){
  var text12 = $('#hour-12').find('textarea').val();
  localStorage.setItem('text12',text12); 
})

$('#hour-13').find('button').on('click',function(){
  var text13 = $('#hour-13').find('textarea').val();
  localStorage.setItem('text13',text13); 
})


$('#hour-14').find('button').on('click',function(){
  var text14 = $('#hour-14').find('textarea').val();
  localStorage.setItem('text14',text14); 
})

$('#hour-15').find('button').on('click',function(){
  var text15 = $('#hour-15').find('textarea').val();
  localStorage.setItem('text15',text15); 
})


$('#hour-16').find('button').on('click',function(){
  var text16 = $('#hour-16').find('textarea').val();
  localStorage.setItem('text16',text16); 
})

$('#hour-17').find('button').on('click',function(){
  var text17 = $('#hour-17').find('textarea').val();
  localStorage.setItem('text17',text17); 
})


//restore local storage and display

for (var i = 9; i < 18; i ++){
  id = "#hour-" + i.toString()
  text = "text" + i.toString()
  $(id).find('textarea').val(localStorage.getItem(text));
}

