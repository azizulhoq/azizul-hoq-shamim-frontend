<?php 

//only process the POST requests
if($_SERVER["REQUEST_METHOD"] == "POST"){
	//get the form fields and remove whitespace
	$fname = strip_tags(trim($_POST["fname"]));
	$lname = strip_tags(trim($_POST["lname"]));
    $mobile = preg_replace('/[^0-9]/', '', $_POST['mobile']);
    
    $address = strip_tags(trim($_POST["address"]));
    $city = strip_tags(trim($_POST["city"]));
    $zip = strip_tags(trim($_POST["zip"]));

	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);


	//check that data was sent to the mailer
	if( empty($fname) OR empty($mobile) OR empty($address) OR empty($zip) OR !filter_var($email, FILTER_VALIDATE_EMAIL) ){
		//set a 400 bad request response code and exit
		http_response_code(400);
		echo "Oops! There was a problem with your submission. Please check the form and try again.";
		exit;
	}

	//set the recipient email address
	//FIXME
	$recipient = "azizulhoq01@gmail.com";

	//set the email subject
	$subject = "[Simple Validation Form] $fname";

	//build the email content
	$email_content = "<p><strong>Name:</strong> $fname</p>\n\n";
	// $email_content .= "<p><strong>Phone:</strong> $phone</p>\n\n";
	// $email_content .= "<p><strong>Email:</strong> $email</p>\n\n";
	// $email_content .= "<p><strong>Message:</strong></p> \n$message\n";


	//build the email headers
	$email_headers = "From: $fname <$email>";
	// $email_headers .= "MIME-Version: 1.0\r\n";
	// $email_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";	

	//send the email
	if(	mail($recipient, $subject, $email_content, $email_headers) ) {
	// if(true ) {
		//set a 200 okay response code
		http_response_code(200);
		echo "Thank You! Your message has been sent.";		
	} else {
		//set a 500 internal server error response code
		http_response_code(500);
		echo "Oops! Something went wrong with your submission, please try again.";
	}
} else {
	//not a post request, set a 403 forbidden response
	http_response_code(403);
	echo "There was a problem with your submission, please try again.";
}


 ?>