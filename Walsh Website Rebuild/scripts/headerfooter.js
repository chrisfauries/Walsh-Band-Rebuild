window.onload = function() {
	
	var mobileNavMenu = document.getElementById("nav"); 

	var mobileNavMenuButton = document.getElementById("mobile-menu-title");


	mobileNavMenuButton.onclick = function(){

			if (mobileNavMenu.className == "show-mobile-menu"){
					mobileNavMenu.className = "";


			}else{
					mobileNavMenu.className = "show-mobile-menu";
			}

	}

	window.onclick = function(event) {
			if (!event.target.matches("#mobile-menu-title")) {

			mobileNavMenu.className = "";
			}

	}

}


