// JavaScript for index.html (Walsh Band Website)

/* Header Insertion */

var headerHTML = document.createElement("div");

headerHTML.innerHTML = '<div id="header"><div id="banner"><a href="index.html"><img src="img/walsh_logo.jpg" alt="Walsh Band Logo" class="banner-logo"></a><h1 class="banner-title">Walsh Middle School Band</h1></div><div id="navigation"><a href="calender.html">calendar</a><a href="assignments.html">assignments</a><a href="directors.html">directors</a><a href="5thgraders.html">5th graders</a><a href="privatelessons.html">Private lessons</a><a href="handouts.html">Handouts</a><a href="contactus.html">contact us</a></div></div>';

var body = document.getElementsByTagName("body")[0];

var beforeMainContent = document.getElementById("main-content");

body.insertBefore(headerHTML,beforeMainContent);


/* Footer Insertion */


var footerHTML = document.createElement("div");

footerHTML.innerHTML = '<div id="footer"><div class="single-contact"><p>Director of Bands:</p><p>Jennifer Bergeron</p><a href="mailto:jennifer_bergeron@roundrockisd.org" class="email-link">jennifer_bergeron@roundrockisd.org</a><p>phone: (512) 704-0836</p></div><div class="single-contact"><p>Assistant Director of Bands:</p><p>Chris Fauries</p><a href="mailto:chris_fauries@roundrockisd.org" class="email-link">chris_fauries@roundrockisd.org</a><p>phone: (512) 704-0832</p></div><div class="single-contact"><p>Assistant Director of Bands:</p><p>Josh Stover</p><a href="mailto:joshua_stover@roundrockisd.org" class="email-link">joshua_stover@roundrockisd.org</a><p>phone: (512) 704-0835</p></div>';

body.appendChild(footerHTML);


/* Form Validation */


var contactUsForm = document.forms.contactUsForm;

var errorMessageFirstName = document.getElementById("error-message-1");

var errorMessageLastName = document.getElementById("error-message-2");

var errorMessageEmail = document.getElementById("error-message-3");

contactUsForm.onsubmit = function(){
    
    if(contactUsForm.adultFirstName.value == ""){
       
       errorMessageFirstName.innerHTML = "field required";
       return false;
    }else{
       errorMessageFirstName.innerHTML = "";
       return true;
       }
    
};


contactUsForm.onsubmit = function(){
    
    if(contactUsForm.adultLastName.value == ""){
       
       errorMessageLastName.innerHTML = "field required";
       return false;
    }else{
       errorMessageFirstName.innerHTML = "";
       return true;
       }
    
};

contactUsForm.onsubmit = function(){
    
    if(contactUsForm.email.value == ""){
       
       errorMessageEmail.innerHTML = "field required";
       return false;
    }else{
       errorMessageEmail.innerHTML = "";
       return true;
       }
    
};