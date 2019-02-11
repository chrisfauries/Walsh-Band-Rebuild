// JavaScript for index.html (Walsh Band Website)

// Header and Footer Insertion


$("#headerLoadIn").load("header.html");

$("#footerLoadIn").load("footer.html");

// Picture Carousel

$(".rslides").responsiveSlides({
	auto: true,             // Boolean: Animate automatically, true or false
  speed: 1000,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});

// Quote animation

var allQuotes = $('.quotes blockquote');
var currentQuote = 0;

function changeQuote() {
	
	$(allQuotes[currentQuote]).fadeOut(1000, function(){
		
		if(currentQuote === allQuotes.length - 1) {
			currentQuote = 0;	
		} else {
			currentQuote++;
		}
	
	$(allQuotes[currentQuote]).fadeIn(1000);
	});	
}

var QuoteTimer = setInterval(changeQuote, 8000);


// Form Validation - simple 


//var contactUsForm = document.forms.contactUsForm;
//
//var errorMessageFirstName = document.getElementById("error-message-1");
//
//var errorMessageLastName = document.getElementById("error-message-2");
//
//var errorMessageEmail = document.getElementById("error-message-3");
//
//contactUsForm.onsubmit = function(){
//
//		if(contactUsForm.adultFirstName.value == ""){
//
//			 errorMessageFirstName.innerHTML = "field required";
//			 return false;
//		}else{
//			 errorMessageFirstName.innerHTML = "";
//			 return true;
//			 }
//
//};
//
//
//contactUsForm.onsubmit = function(){
//
//		if(contactUsForm.adultLastName.value == ""){
//
//			 errorMessageLastName.innerHTML = "field required";
//			 return false;
//		}else{
//			 errorMessageFirstName.innerHTML = "";
//			 return true;
//			 }
//
//};
//
//contactUsForm.onsubmit = function(){
//
//		if(contactUsForm.email.value == ""){
//
//			 errorMessageEmail.innerHTML = "field required";
//			 return false;
//		}else{
//			 errorMessageEmail.innerHTML = "";
//			 return true;
//			 }
//
//};

