// JavaScript for index.html (Walsh Band Website)

/* Header Insertion */

var headerHTML = document.createElement("div");

headerHTML.innerHTML = 'boo!';

var body = document.getElementsByTagName("body")[0];

var beforeMainContent = document.getElementById("main-content");

body.insertBefore(headerHTML,beforeMainContent);




/*

<!-- Header Banner -->
        <div id="header">
            <div id="banner">
                    <a href="index.html"><img src="img/walsh_logo.jpg" alt="Walsh Band Logo" class="banner-logo"></a>
                    <h1 class="banner-title">Walsh Middle School Band</h1>
            </div>

 <!-- Navigation Bar -->

            <div id="navigation">
                <a href="calender.html">calendar</a>
                <a href="assignments.html">assignments</a>
                <a href="directors.html">directors</a>
                <a href="5thgraders.html">5th graders</a>
                <a href="privatelessons.html">Private lessons</a>
                <a href="handouts.html">Handouts</a>
                <a href="links.htmls">Links</a>
            </div>
        </div>'