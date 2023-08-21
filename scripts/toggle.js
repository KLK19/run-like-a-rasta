function toggleMenu() {
    var icon = document.getElementById('menu-icon');
    icon.style.display = 'block';
    var openClose = icon.getElementsByTagName('i');
    var close = openClose[0];
    var open = openClose[1];
    var x = document.querySelector('nav>ul');
    if (x.style.display === 'flex') {
      x.style.display = 'none';
      close.style.display = 'none';
      open.style.display = 'block';
    } else {
      x.style.display = 'flex';
      close.style.display = 'block';
      open.style.display = 'none';
    }
  }

  // make a x seconds count down timer
  function countDownTimer() {
    var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="demo"
      document.getElementById("countdown").innerHTML = seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
    
 
  

  



  
  window.addEventListener('resize', (e) => {
    var x = document.querySelector('nav>ul');
    var icons = document.querySelectorAll('nav div i');
    var close = icons[0];
    var open = icons[1];
    var width = window.innerWidth;
  
    if (width > 500) {
      x.style.display = 'flex';
      open.style.display = 'none';
      close.style.display = 'none';
    } else {
      x.style.display = 'none';
      open.style.display = 'block';
      close.style.display = 'none';
     }
  });
  
  window.addEventListener('load', (e) => {
    var mobileMenuIcon = document.getElementById('menu-icon');
    mobileMenuIcon.addEventListener('click', (e) => {
      toggleMenu(e);
    });
    var x = document.querySelector('nav>ul');
    var icons = document.querySelectorAll('nav div i');
    var close = icons[0];
    var open = icons[1];
    var width = window.innerWidth;
    if (width > 500) {
      x.style.display = 'flex';
      open.style.display = 'none';
      close.style.display = 'none';
     } else {
      x.style.display = 'none';
      open.style.display = 'block';
      close.style.display = 'none';
     }
  });
  
  