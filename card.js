var number = 0;
var randomInt = 0;


 // firebase data base
var players = 0;
var card1 = "1.png";
var players = 0;
var currentcard = 0;


// $(document).ready(function(){
// 	$('#instructions').hide();
// 	$('.button').click(function(){
// 		$('#enterbody').hide();
// 		$('#instructions').show();
// 	});
// });

$(document).ready(function(){
	$('#instructions').hide();
    $('#cards').hide();
    $(".button").click(function(){
        $("#enterbody").hide();
        $("#instructions").show();
    });
    $(".button1").click(function(){
    	$("#instructions").hide();
    	$('#cards').show();
   	  
    $(".button1").click(function(){
        $('#cardtext').hide();
    });
   	 });

});
//they dont do anything yet!!!
// function FindCard(players){

// 	currentcard = Math.floor((Math.random() * 52) + 1);


// }

// function Timeout(){

// 	$("#cardtext p").hide();

// }

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

