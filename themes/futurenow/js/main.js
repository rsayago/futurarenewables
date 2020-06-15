
(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.futureTheme = {
    attach: function (context, settings) {
      
        $("a").click(function(e) {
        	$('a.is-active').removeClass('active-trail');
	        $(this).addClass('active-trail');
    		});

    	$( "img#no" ).mouseenter(function() {
    		$("img[src='/themes/futurenow/images/activo.png']").attr("src", "/themes/futurenow/images/no-activo.png");
		    $( this ).attr("src", "/themes/futurenow/images/activo.png");
		    $(".p-ne").addClass("ocultar");
		    $(".p-cen").addClass("ocultar");
		    $(".p-sur").addClass("ocultar");
		    $(".p-no").removeClass("ocultar");
		    $(".zone-ne").addClass("ocultar");
		    $(".zone-cen").addClass("ocultar");
		    $(".zone-sur").addClass("ocultar");
		    $(".zone-no").removeClass("ocultar");

		  });

    	$( "img#ne" ).mouseenter(function() {
    		$("img[src='/themes/futurenow/images/activo.png']").attr("src", "/themes/futurenow/images/no-activo.png");
		    $( this ).attr("src", "/themes/futurenow/images/activo.png");
		    $(".p-no").addClass("ocultar");
		    $(".p-cen").addClass("ocultar");
		    $(".p-sur").addClass("ocultar");
		    $(".p-ne").removeClass("ocultar");
		    $(".zone-no").addClass("ocultar");
		    $(".zone-cen").addClass("ocultar");
		    $(".zone-sur").addClass("ocultar");
		    $(".zone-ne").removeClass("ocultar");
		  });

      	$( "img#cen" ).mouseenter(function() {
      		$("img[src='/themes/futurenow/images/activo.png']").attr("src", "/themes/futurenow/images/no-activo.png");
		    $( this ).attr("src", "/themes/futurenow/images/activo.png");
		    $(".p-no").addClass("ocultar");
		    $(".p-ne").addClass("ocultar");
		    $(".p-sur").addClass("ocultar");
		    $(".p-cen").removeClass("ocultar");
		    $(".zone-no").addClass("ocultar");
		    $(".zone-ne").addClass("ocultar");
		    $(".zone-sur").addClass("ocultar");
		    $(".zone-cen").removeClass("ocultar");
		  });

      	$( "img#sur" ).mouseenter(function() {
      		$("img[src='/themes/futurenow/images/activo.png']").attr("src", "/themes/futurenow/images/no-activo.png");
		    $( this ).attr("src", "/themes/futurenow/images/activo.png");
		    $(".p-no").addClass("ocultar");
		    $(".p-ne").addClass("ocultar");
		    $(".p-cen").addClass("ocultar");
		    $(".p-sur").removeClass("ocultar");
		    $(".zone-no").addClass("ocultar");
		    $(".zone-ne").addClass("ocultar");
		    $(".zone-cen").addClass("ocultar");
		    $(".zone-sur").removeClass("ocultar");
		  });

      	 
        $(document).scroll(function () {
		    var $nav = $("nav[role=navigation][aria-labelledby=-menu]");
		    var $li = $('ul.menu > li > a');
		    var $logo = $('a.logo.navbar-btn.pull-left > img');
		    $nav.toggleClass('scrolled', $(this).scrollTop() > $li.height());
		    $li.toggleClass('scrolled', $(this).scrollTop() > $li.height());
		    $logo.toggleClass('scrolled', $(this).scrollTop() > $li.height());
		  });
      
    }
  };

})(jQuery, Drupal, drupalSettings);
