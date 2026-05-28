jQuery(document).ready(function($) {

	'use strict';


	/************** Toggle *********************/
    // Cache selectors
	    var lastId,
	        topMenu = $(".menu-first, .menu-responsive"),
	        topMenuHeight = (topMenu.outerHeight() || 0)+15,
	        // All list items
	        menuItems = topMenu.find("a"),
	        // Anchors corresponding to menu items
	        scrollItems = menuItems.map(function(){
	          var href = $(this).attr("href");
	          if (!href || href.charAt(0) !== "#" || href === "#") { return; }
	          var item = $(href);
	          if (item.length) { return item; }
	        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
	    menuItems.click(function(e){
	      var href = $(this).attr("href"),
	          target;

	      if (!href) { return; }
	      if (href === "#") {
	        $('html, body').stop().animate({
	            scrollTop: 0
	        }, 300);
	        e.preventDefault();
	        return;
	      }
	      if (href.charAt(0) !== "#") { return; }

	      target = $(href);
	      if (!target.length) { return; }

	      $('html, body').stop().animate({
	          scrollTop: target.offset().top-topMenuHeight+1
	      }, 300);
	      e.preventDefault();
	    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
	           menuItems
	             .parent().removeClass("active")
	             .end().filter("[href='#"+id+"']").parent().addClass("active");
	       }                   
	    });



    $(window).scroll(function(){
         $('.main-header').toggleClass('scrolled', $(this).scrollTop() > 1);
     });



    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


    $('.flexslider').flexslider({
      slideshow: true,
      slideshowSpeed: 3000,  
      animation: "fade",
      directionNav: false,
    });


    $('.toggle-menu').click(function(){
        $('.menu-responsive').slideToggle();
        return false;
    });


    /************** LightBox *********************/
      $(function(){
        $('[data-rel="lightbox"]').lightbox();
      });


});
