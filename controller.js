// JavaScript Document

$(document).ready(function() {
	
    $(".menu_open").click(function() 
	{
		$(".menu_open").hide();
		$(".menu").animate({width: 'toggle'}, "fast");
		$(".container").css( "opacity", ".1" );
		$(".menu_close").show();
	});
	
	$(".menu_close").click(function() 
	{
		$(".menu").hide();
		$(".menu_open").fadeIn();
		$(".container").css( "opacity", "1" );
	});
	
	
});



	document.createElement("herobanner");
	document.createElement("grid");
	document.createElement("stml");
	document.createElement("cta");
	document.createElement("rsvp");
	document.createElement("parallax");
	document.createElement("cta");
	document.createElement("elem");
	document.createElement("banner");
	