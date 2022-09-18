
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
        duration: 500,
        indicators: true
      
    });

    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems,{
      throttle: 500
    }, 200);

      // custom function for autoplaying 
      let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
      slideTime = 4000,
      activeClass = "active";

  setInterval(() => {
    indicatorItems.forEach(el => {
      if (el.classList.contains(activeClass)) {
        sib = el.nextElementSibling;
        if (sib == null) {
          indicatorItems[0].click();
        } else {
          sib.click()
        }
      }
    });
  }, slideTime);

  });





  

