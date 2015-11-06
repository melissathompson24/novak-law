// navigation 

document.getElementById("myNav").innerHTML =
  "<div class='container-fluid'>"
  + "<div class='navbar-header'>"
  +  "<a class='navbar-brand' href='index.html'>"
  +  "<img class='img-responsive center-block' alt='Logo stating the name Novak Law LLC: Real Estate and Business Law across the Denver Front Range.' src='./images/siteID_novak.png'>"
  +  "</a>"
  +  "</div>"

  +  "<a href='#skipToContent'>"
  +  "<img class='img-responsive' alt='Skip to main content' src='./images/skipToContent.png'>"
  +  "</a>"

  
  +  "<div class='navbar-right nav_line1'>"
  +  "<a href='sitemap.html' class='padding-halfem margin-r-1em'>Sitemap</a>"
  +  "<input id='search' name='search' type='text' required placeholder='Search'>"
  +  "<button type=button' class='btn btn-default margin1em' aria-label='Search'>"
  +  "<span class='glyphicon glyphicon-search' aria-hidden='true'></span>"
  +  "</button>"
  +  "</div>"



  +  "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>"
  +  "<span class='sr-only'>Toggle navigation</span>"
  +  "<span class='icon-bar'></span>"
  +  "<span class='icon-bar'></span>"
  +  "<span class='icon-bar'></span>"
  +  "</button>"
  +  "</div>"
  +  "<div id='navbar myDropdown' class='collapse navbar-collapse  navbar-right margin-r-1em'>"
  +  "<ul class='nav navbar-nav'>"
  +  "<li><a class='active' href='index.html'>Home</a></li>"
  +  "<li><a class='active' href='about.html'>About</a></li>"
  +  "<li><a href='contact.html'>Contact</a></li>"
  +  "<li class='dropdown dropdown-menu-right'>"
  +  "<a href='practice.html' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Practice Areas<span class='caret'></span></a>"
  +  "<ul class='dropdown-menu'>"
  +  "<li><a href='realEstate.html'>Real Estate Law</a></li>"
  +  "<li><a href='businessFormation.html'>Business Formation</a></li>"
  +  "<li><a href='businessDisputes.html'>Business Disputes</a></li>"
  +  "<li><a href='appellate.html'>Appellate Litigation</a></li>"
  +  "<li><a href='mediation.html'>Mediation</a></li>"
  +  "</ul>"
  +  "</li>"
  +  "<li><a href='attorney.html'>Attorney</a></li>"
  +  "<li><a href='resources.html'>Resources & Articles</a></li>"
  +  "<ul class='nav navbar-nav'>"
  +  "</ul>"
  +  "</div><!--/.nav-collapse -->"
  +  "</div>"
  ;


  $(".navbar-nav>.active>a").on("click", function(){
   $(".navbar-nav>.active").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});








