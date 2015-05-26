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
    });
    $(".button").click(function(){
        $("#instructions").show();
    });
    $(".button1").click(function(){
    	$("#instructions").hide();
    	$('#cards').show();
   	$(".button2").click(function(){
        $('#cardtext').hide();
    });
   	 });


});

function FindCard(players){

	currentcard = Math.floor((Math.random() * 52) + 1);


}

function Timeout(){

	$("#cardtext p").hide();

}



