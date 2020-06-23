var unavailableDates = ["06/07/2020","06/014/2020","06/28/2020", "06/21/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}


$(document).ready(function(){

		    $("#DateInput").datepicker(
	        {
	            dateFormat: setDateFormat,
	            // no calendar before June 1rst 2020
	            minDate: new Date('06/01/2020'),  
	            maxDate: '+4M',
	            // used to disable some dates
	            beforeShowDay: $.datepicker.noWeekends,
	            beforeShowDay: disableDates
	        }   
	    );

     $("#creditcard").on("mouseenter", function(){ 
        $("#creditcard").addClass("showInput");
    });

    $("#creditcard").on("mouseleave", function(){
        $("#creditcard").removeClass("showInput");
    });
  
    $("#creditcard").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

       $("#btn_submit").on("mouseenter", function(){ 
        $("#btn_submit").addClass("showInput");
    });

    $("#btn_submit").on("mouseleave", function(){
        $("#btn_submit").removeClass("showInput");
    });
  
    $("#btn_submit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

    //$("#btn_submit").click(function(){
  
	//});

	  $(".form-control").mouseenter(function(){
  	  $(this).css("background-color", "yellow");

  	});

	    $(".form-control").mouseleave(function(){
  	  $(this).css("background-color", "white");

  	});

	        $("#PhoneInput").on("change", function(){
        if (!validatePhone("PhoneInput")){
            alert("Wrong format for phone number. Please try again and follow the formatting.");
            $("#PhoneInput").val("123-456-7899");
            $("#PhoneInput").addClass("error");
        }
        else {
        	//alert("Correct Format. Please continue.");
            $("#PhoneInput").removeClass("error");
        }
    });
	          $("#creditcard").on("change", function(){
        if (!validatePhone("creditcard")){
            alert("Invalid credit card number. Please try again and follow the formatting.");
            $("#creditcard").val("xxxxxxxxxxxxxxxx");
            $("#creditcard").addClass("error");
        }
        else {
        	//alert("Correct Format. Please continue.");
            $("#creditcard").removeClass("error");
        }
    });


	          $("#EmailInput").on("change", function(){
        if (!validateEmail("EmailInput")){
            alert("Invalid email. Please try again and follow the formatting.");
            $("#EmailInput").val("example@host.com");
            $("#EmailInput").addClass("error");
        }
        else {
        	//alert("Correct Format. Please continue.");
            $("#EmailInput").removeClass("error");
        }
    });


	      	$("#btn_submit").click(function(){
        if (!validatePhone("PhoneInput")){
            alert("Wrong format for phone number. Please try again and follow the formatting.");
            $("#PhoneInput").val("123-456-7899");
            $("#PhoneInput").addClass("error");
        }
        else {
        	//alert("Correct Format. Please continue.");
        	$("#PhoneInput").removeClass("error");
            
        }

            if (!validateCard("creditcard")){
            alert("Invalid credit card number. Please try again and follow the formatting.");
            $("#creditcard").val("xxxxxxxxxxxxxxxx");
            $("#creditcard").addClass("error");
        }
        else {
        	//alert("Correct Format. Please continue.");
        	$("#creditcard").removeClass("error"); 
        }

         if (!validateEmail("EmailInput")){
            alert("Invalid email. Please try again and follow the formatting.");
            $("#EmailInput").val("example@host.com");
            $("#EmailInput").addClass("error");
        }
        else {
        	//alert("Correct Format. Please continue.");
        	$("#EmailInput").removeClass("error"); 
        }

        if (validatePhone("PhoneInput") && validateCard("creditcard") && validateEmail("EmailInput")){
        	alert("Thank you for booking an appointment! Please check your email for the details!");
        }


    });


 

	});

function validateEmail(eml) {
    var a = document.getElementById(eml).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    //regular expression taken from https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&ss=chromium&originalUrl=https:%2F%2Fcs.chromium.org%2Fchromium%2Fsrc%2Fthird_party%2Fblink%2Fweb_tests%2Ffast%2Fforms%2Fresources%2FValidityState-typeMismatch-email.js
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^[0-9]\d{2}-\d{3}-\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(crdnum) {
    var a = document.getElementById(crdnum).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter =/^[0-9]\d{2}-\d{3}-\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}