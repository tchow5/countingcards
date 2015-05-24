var number = 0;
var randomInt = 0;

var card1 = "1.png";

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
});



