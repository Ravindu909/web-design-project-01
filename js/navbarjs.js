function changeBg(){
	
						var navbar = document.getElementById('navbar');
						var nmenu = document.getElementById('nmenu');
						
						var scrollValue = window.scrollY;
						console.log(scrollValue);
							if(scrollValue < 5){
							
								navbar.classList.remove('navColor');
								
							
								}
								
								else{
								
								navbar.classList.add('navColor');
							
								
							
							}
}

						window.addEventListener('scroll', changeBg);

						/**JS for pushing nav bar */					
     function openNav() {
              document.getElementById("mySidenav").style.width = "300px";
              document.getElementById("all").style.marginLeft = "300px";
            }
            
     function closeNav() {
              document.getElementById("mySidenav").style.width = "0";
              document.getElementById("all").style.marginLeft= "0";
            }
           