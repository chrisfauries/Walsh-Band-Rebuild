// Header and Footer Insertion
$('document').ready(() => {
	$("#headerLoadIn").load("../header_footer/header.html");

	$("#footerLoadIn").load("../header_footer/footer.html");
	
})


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
