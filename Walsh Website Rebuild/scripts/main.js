// JavaScript for index.html (Walsh Band Website)

/* Header Insertion - jQuery*/


$("#headerloadin").load("header.html");


/* Header Insertion - jQuery*/


$("#footerloadin").load("footer.html");


/* Form Validation - simple */


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