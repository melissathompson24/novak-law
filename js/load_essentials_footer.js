//footer


document.getElementById("myFooter").innerHTML =
  "<div class='container-fluid text-center'>"
  +  "<p><a href='index.html'>Novak Law LLC</a> (303) 555-5555</p>"
  +  "<p class='text-muted'><a href='about.html'>About</a> | <a href='contact.html'>Contact</a> | <a href='legal.html'</a>Legal Services</a> | <a href='mediation.html'>Mediation Services</a> | <a href='resources.html'>Resources & Articles</a></p>"
  +  "<p class='text-muted'>Site Design by Melissa Thompson. Copyright &copy; " 
  +  new Date().getFullYear()
  +  ". All Rights Reserved.</span></p>"
  ;


//adjusts page anchor so it's not hidden behind the header
var shiftWindow = function() { scrollBy(0, -160) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);



