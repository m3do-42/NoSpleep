"use strict";

$(document).ready(function(){

	var noSleep = new NoSleep();


	$(".checkbox").click(function(){

		if( $('.checkbox').is(':checked') ){
			// Enable wake lock.
			noSleep.enable();
			$("body").css("background-color", "#baffc9");
		} else {	
			// Disable wake lock at some point in the future.
		 	noSleep.disable();
		 	$("body").css("background-color", "#ffb3ba");
		}

	});


});