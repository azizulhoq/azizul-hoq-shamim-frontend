;
$(document).ready(function(){

    var form = $('#regForm');
    var formMessages = $('#formMsg');

    $(form).submit( function(event){
        event.preventDefault();

        var fname = $("#fname").val();
            fname = $.trim(fname);
        var mobile = $("#mobile").val();
            mobile = $.trim(mobile);
        var address = $("#address").val();
            address = $.trim(address);
        var city = $("#city").val();
            city = $.trim(city);
        var zip = $("#zip").val();
            zip = $.trim(zip);
        var email = $("#email").val();
            email = $.trim(email);
        
        var chaPattern = /[^a-z|^A-Z|^\s]/;
        var numPattern = /[^0-9]/;
        var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

        //Name
        if (fname  == "") {
            $("#fname").next('.error-msg').text('This field is required').show();
            return false;
        } else if(fname.match(chaPattern)){
            $("#fname").next('.error-msg').text('Only alphabets are allowed').show();
            return false;
        } else if(fname.length < 3){
            $("#fname").next('.error-msg').text('Please enter at least 3 characters.').show();
            return false;
        } else {
            $("#fname").next('.error-msg').hide();
        }

        //mobile
        if (mobile == "") {
            $("#mobile").next('.error-msg').text('This field is required').show();
            return false;
        } else if(mobile.match(numPattern)){
            $("#mobile").next('.error-msg').text('Only 0-9 value are allowed').show();
            return false;
        } else if(mobile.length < 11 || mobile.length > 11){
            $("#mobile").next('.error-msg').text('Please enter a valid mobile number.').show();
            return false;
        } else {
            $("#mobile").next('.error-msg').hide();
        }

         //address
         if (address  == "") {
            $("#address").next('.error-msg').text('This field is required').show();
            return false;
        } else if(address.length < 10){
            $("#address").next('.error-msg').text('Please enter at least 10 characters.').show();
            return false;
        } else {
            $("#address").next('.error-msg').hide();
        }

         //address
         if (city  == "") {
            $("#city").next('.error-msg').text('This field is required').show();
            return false;
        } else if(city.match(chaPattern)){
            $("#city").next('.error-msg').text('Only alphabets are allowed').show();
            return false;
        } else if(city.length < 5){
            $("#city").next('.error-msg').text('Please enter at least 5 characters.').show();
            return false;
        }  else {
            $("#city").next('.error-msg').hide();
        }

        //zip
        if (zip == "") {
            $("#zip").next('.error-msg').text('This field is required').show();
            return false;
        } else if(zip.match(numPattern)){
            $("#zip").next('.error-msg').text('Only 0-9 value are allowed').show();
            return false;
        } else if(zip.length < 4){
            $("#zip").next('.error-msg').text('Please enter a valid zip number.').show();
            return false;
        } else {
            $("#zip").next('.error-msg').hide();
        }

        //email
        if (email == "") {
            $("#email").next('.error-msg').text('This field is required').show();
            return false;
        } else if(!email.match(emailPattern)){
            $("#email").next('.error-msg').text('Please enter a valid email address.').show();
            return false;
        } else {
            $("#email").next('.error-msg').hide();
        }


		//serialize form data
		var formData = $(form).serialize();

		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function(response){
			$(formMessages).removeClass('alert alert-danger');
			$(formMessages).addClass('alert alert-success');

			//set the message text
			$(formMessages).text(response);
			//clear the form
            $("#fname").val('');
            $("#lname").val('');
            $("#mobile").val('');
            $("#address").val('');
            $("#city").val('');
            $("#zip").val('');
            $("#email").val('');

		}).fail(function(data){
			//make sure that the formMessages div has the 'error' class
			$(formMessages).removeClass('alert alert-success');
			$(formMessages).addClass('alert alert-danger');			

			//set the message text
			if(data.responseText !== ''){
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');	
			}
		});

        

    });

});