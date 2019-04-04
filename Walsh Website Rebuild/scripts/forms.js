

$('document').ready(() => {
	$("#headerLoadIn").load("../header_footer/header.html");

	$("#footerLoadIn").load("../header_footer/footer.html");
	
})



const form = document.getElementById('contactForm');
document.getElementById('error').innerHTML = ``;
document.getElementById('status').innerHTML = ``;

form.addEventListener('submit', function(e){
	e.preventDefault();
	document.getElementById('error').innerHTML = ``;
	if(document.getElementById('parentFirst').value == '' || document.getElementById('parentLast').value == '') { 
		document.getElementById('error').innerHTML = `Field Required: Parent Name`;
	 } else if(document.getElementById('studentFirst').value == '' || document.getElementById('studentLast').value == '') {
		document.getElementById('error').innerHTML = `Field Required: Student Name`;
	 } else if(document.getElementById('email').value == '') {
		document.getElementById('error').innerHTML = `Valid Email Address Required`;
	 } else if(document.getElementById('message').value == '') {
		document.getElementById('error').innerHTML = `Please type a message above before hitting submit`;
	 } else {

		$.preloader.start({
				modal: true,
				src : 'sprites.32.png',
  			width : 32,
  			height : 32,
  			frames : 12
			});
			
		var emailBody = {

			recipient: e.target.querySelector("#recipient").value,
			subject: `Walshband.com: Message from ${e.target.querySelector("#parentFirst").value} ${e.target.querySelector("#parentLast").value} regarding ${e.target.querySelector("#studentFirst").value} ${e.target.querySelector("#studentLast").value}`,
			text: 
			`reply to: ${e.target.querySelector("#email").value}
						
			message: 
		
			${e.target.querySelector("#message").value}
		
			Walsh Middle School Band
			3850 Walsh Ranch Blvd
			Round Rock, Texas, 78681
			`
			}
			
			fetch('https://apis-f52b6.firebaseapp.com/walshcontactus', {
				method: 'post',
				body: JSON.stringify(emailBody)
			}).then(function(res) {
				$.preloader.stop();
				if(res.status == 200) {
					document.getElementById('status').innerHTML = `Email Sent Successfully`;
					document.getElementById('parentFirst').value = ''
					document.getElementById('parentLast').value = ''
					document.getElementById('studentFirst').value = ''
					document.getElementById('studentLast').value = ''
					document.getElementById('email').value = ''
					document.getElementById('message').value = ''
				} else {
					document.getElementById('error').innerHTML = `Something Went Wrong, Please try again later`;
				}
				return console.log(response);	
			})
	 }
})


