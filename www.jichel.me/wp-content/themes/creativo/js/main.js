var $ = jQuery.noConflict();

// php strstr alternative for jquery
function strstr(haystack, needle, bool) {
  //  discuss at: http://phpjs.org/functions/strstr/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Onno Marsman
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //   example 1: strstr('Kevin van Zonneveld', 'van');
  //   returns 1: 'van Zonneveld'
  //   example 2: strstr('Kevin van Zonneveld', 'van', true);
  //   returns 2: 'Kevin '
  //   example 3: strstr('name@example.com', '@');
  //   returns 3: '@example.com'
  //   example 4: strstr('name@example.com', '@', true);
  //   returns 4: 'name'

  var pos = 0;
  haystack += '';
  pos = haystack.indexOf(needle);
  if (pos == -1) {
    return false;
  } else {
    if (bool) {
      return haystack.substr(0, pos);
    } else {
      return haystack.slice(pos);
    }
  }
}

jQuery.fn.fl_boxes_height = function() {
	var fl_box = jQuery( this );
	var outer_height, height, top_margin = 0;

	fl_box.find( '.front' ).css( 'min-height', '' );
	fl_box.find( '.back' ).css( 'min-height', '' );
	fl_box.find( '.front_inner' ).css( 'margin-top', '' );
	fl_box.find( '.back_inner' ).css( 'margin-top', '' );
	fl_box.css( 'min-height', '' );

	setTimeout( function() {
		if( fl_box.find( '.front' ).outerHeight() > fl_box.find( '.back' ).outerHeight() ) {
			height = fl_box.find( '.front' ).height();
			
			outer_height = fl_box.find( '.front' ).outerHeight();
			
			top_margin = ( height - fl_box.find( '.back_inner' ).outerHeight() ) / 2;

			fl_box.find( '.back' ).css( 'min-height', outer_height );
			fl_box.css( 'min-height', outer_height );
			fl_box.find( '.back_inner' ).css( 'margin-top', top_margin );
		} else {
			height = fl_box.find( '.back' ).height();			
			outer_height = fl_box.find( '.back' ).outerHeight();
			
			top_margin = ( height - fl_box.find( '.front_inner' ).outerHeight() ) / 2;

			fl_box.find( '.front' ).css( 'min-height', outer_height );
			fl_box.css( 'min-height', outer_height );
			fl_box.find( '.front_inner' ).css( 'margin-top', top_margin );
		}
		/*
		if( cssua.ua.ie && cssua.ua.ie.substr(0, 1) == '8' ) {
			fl_box.find( '.flip-box-back' ).css( 'height', '100%' );
		}
		*/
	}, 100 );
};
/*
function onYouTubeIframeAPIReady() {
	var player,
		video_id = $('#muteYouTubeVideoPlayer').attr('video-id');		
	if( video_id != null )	{
		player = new YT.Player('muteYouTubeVideoPlayer', {
			videoId: video_id, // YouTube Video ID		             
			playerVars: {
			  autoplay: 1,        // Auto-play the video on load
			  controls: 0,  
			  rel: 0,      // Show pause/play buttons in player
			  showinfo: 0,        // Hide the video title
			  modestbranding: 1,  // Hide the Youtube Logo
			  loop: 1,
			  playlist: video_id, 		 
			  fs: 0,              // Hide the full screen button
			  cc_load_policy: 0, // Hide closed captions
			  iv_load_policy: 3,  // Hide the Video Annotations
			  autohide: 0         // Hide video controls when playing
			},
			events: {
			  onReady: function(e) {
			    e.target.mute();
			  }
			}
		});
	}
}*/

function hide_menu_when_transparent() {
	setTimeout(function() {
		jQuery('.header_transparent #navigation, .header #navigation').addClass('is_visible');
	},300);
}

function cr_countdown() {
	  if (jQuery('.cr-countdown').length>0) {
	    jQuery('.cr-countdown').each(function () {
	      	var $this = $(this),
	        $date = $this.attr('data-date'),
	        $offset = $this.attr('data-offset'); 
	      	$this.downCount({
	        date: $date,
	        offset: $offset	       
	      });
	    });
	  }
	};

jQuery(window).load(function(){

	if(!strstr(window.location.href, 'vc_editable=true')) {	
        
        var $container = jQuery('.portfolio-wrapper'); 

        if( $container ) {

        	masonry_effect = jQuery('.portfolio-wrapper').attr('masonry-effect');        	

        	if(masonry_effect !== 'yes' || masonry_effect == null) {                         
				$container.isotope({
					layoutMode: 'fitRows',
				});
			}
			else {
				console.log('render masonry')
				$container.isotope({
					columnWidth: 'figure',
					masonry: {						
						itemSelector: 'figure',
						isInitLayout: true,
			  			isResizeBound: true,
						percentPosition: true
					}
				});
			}	
		
                            
	        jQuery('.portfolio-tabs a').click(function(){
	                                
	        	jQuery('.portfolio-tabs li').removeClass('active');
	            jQuery(this).parent('li').addClass('active');
	            var selector = jQuery(this).attr('data-filter');
	            $container.isotope({ filter: selector });
	            return false;
	                                
	        });
	 
	        jQuery(window).resize(function() {
	          	$container.isotope('reLayout');
			});	
		}
	}
		jQuery('.recent_posts_container, .home.blog, .archive').each( function () {
			jQuery('.grid-masonry').masonry({
			  // options
			  itemSelector: '.blogpost',
			  columnWidth: '.blogpost',
			  isInitLayout: true,
			  isResizeBound: true,
			  gutter: '.gutter-sizer',
			  percentPosition: true
			});		
		});

		jQuery('.grid-masonry-page-template').masonry({
		  // options
		  itemSelector: '.blogpost',
		  columnWidth: '.blogpost',
		  gutter: '.gutter-sizer',
		  percentPosition: true
		});			
});

jQuery(document).ready(function($) {

	hide_menu_when_transparent();
	
	$("a[rel^='prettyPhoto']").prettyPhoto();

	cr_countdown();	
					
	var $window = $(window),
		$fullScreenEl = $('.full-screen'),		
		$body = $('body'),
		$sticky_footer = $body.attr('sticky-footer'),
		$mob_menu_landscape = $body.attr('data-show-landscape'),
		$top_bar = $('.top_nav_out'),
		$header = $('.header'),
		$pageTitle = $('.bellow_header'),
		navigation_width = $('#navigation').outerWidth();

	var	resolution = ( $mob_menu_landscape === 'yes' ) ? 1024 : 830;

		if(window.innerWidth > resolution ){
			//find the form and apply the width to it:
			$('.header_search').css('width',navigation_width);
		}

	if( $body.hasClass('page-with-animation') ){	
		$(".animsition").animsition({
	  
			inClass               :   'fade-in',
			outClass              :   'fade-out',
			inDuration            :    1500,
			outDuration           :    800,
			linkElement           :   '#navigation ul li a:not([target="_blank"]):not([href^="#"])',
			// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			
			overlay               :   false,			
			overlayClass          :   'animsition-overlay',
			overlayParentElement  :   'body'
		});
	}
	var sticky_sidebar = jQuery('body').attr('sticky-sidebar'),
		header_height_area = jQuery('.header').outerHeight(),
		header_height_admin = jQuery('#wpadminbar').outerHeight();
		top_offset = header_height_area + header_height_admin + 20;
	if(sticky_sidebar == 'true') {
		setTimeout(function() {
			jQuery(".sidebar").stick_in_parent({"offset_top":top_offset});
		},2000);		
		
	}

	jQuery(".vertical_sharing").stick_in_parent({"offset_top":top_offset});	

	jQuery( '.flip-container' ).each( function() {
		jQuery( this ).fl_boxes_height();
	});

	function equal_portfolio_content() {

		var pic_height = jQuery('.modern_portfolio_image').outerHeight(),
			content_height = jQuery('.modern_portfolio_content').outerHeight();

		if ( pic_height > content_height && (window.innerWidth > 960 ) ) {
			jQuery('.modern_portfolio_content').css( 'min-height', pic_height );
			jQuery('.modern_portfolio_content').addClass('fixed_portfolio');
		}

	}

	$(function(){
		
		function top_bar_nav() {
			if(window.innerWidth < 1025 ){
				jQuery('#top-menu > li > ul.sub-menu, #top-menu > li > .woo_login_form').addClass('remove_css_animation');

				jQuery('#top-menu > li.menu-item-has-children > a, #top-menu > li.custom-login-box > a').click( function(e) {
					e.preventDefault(); 
					//console.log('apasasi');
					var $this = $(this);						

					if ($this.hasClass('nav-sub-opened')) {
						$this.parent().find('ul.sub-menu, .woo_login_form').slideUp(400).end().end().removeClass('nav-sub-opened').addClass('nav-sub-closed');
					} 
					else {
						$this.parent().find('ul.sub-menu, .woo_login_form').slideDown(400).end().end().removeClass('nav-sub-closed').addClass('nav-sub-opened');
					}

				});
			}
		}

		top_bar_nav();


		/* define variables here */
		var win_height,
			win_width, 
			container_height,			
			admin_bar,
			tb_height,
			full_head_height,			
			bellow_header_height,
			content_height,
			content_height_no_css,
			content_height_full_template,			
			content_height_full_template_no_css,
			mobile_nav,
			footer_height,
			$root = $('html, body'),
			header_height = jQuery('.header').outerHeight(),
			header_height_admin = jQuery('#wpadminbar').outerHeight(),
			header_resize_test = jQuery('.header').attr('data-resize');

			if(header_height_admin){
			  header_height = header_height_admin + header_height;
			}
			if(header_resize_test != null && header_resize_test == 'yes' ) {
				header_height = header_height/2;
			}

		function set_containers_values() {
			win_height = window.innerHeight;
			win_width = window.innerWidth;
			container_height = jQuery('.container').outerHeight(true);		
			admin_bar = jQuery('#wpadminbar').height();
			tb_height = jQuery('.top_nav_out').outerHeight(true);
			full_head_height = jQuery('.full_header').outerHeight(true);
			bellow_header_height = jQuery('.bellow_header').outerHeight(true);
			content_height = jQuery('.row').outerHeight(true);
			content_height_no_css = jQuery('.row').height();
			content_height_full_template = jQuery('.row_full').outerHeight(true);
			content_height_full_template_no_css = jQuery('.row_full').height();
			mobile_nav = jQuery('#responsive_navigation').height();
			footer_height = jQuery('.footer').height();
			jQuery('.row_full,.row').css('min-height','');
		}			

		/* if we are not on mobile and content is not big enough, than make header appear on footer */		
		function bottom_footer() {	
			set_containers_values();									
			if (container_height < win_height) {									
				if(content_height == null) {
					content_height = content_height_full_template;
					content_height_no_css = content_height_full_template_no_css;
				}
				content_height = content_height == null ? content_height_full_template : content_height;
				min_height = win_height - ( admin_bar + tb_height + full_head_height + mobile_nav + bellow_header_height + footer_height ) - ( content_height - content_height_no_css );
				jQuery('.row_full,.row').css('min-height',min_height);					
			}									
			
		}

		function place_footer_on_bottom() {	
			
			/* place footer on bottom of the page */
			bottom_footer();

			/* on screen resize, re-run the variables and the place footer on bottom function*/
			$(window).resize(function() {
				set_containers_values();
				bottom_footer();
				//console.log(container_height+' - '+win_height);
			});

		}

		function modern_title_top_padding() {
			var header_transparent = jQuery('.header').attr('data-transparent')
				in_header_height = jQuery('.header').outerHeight(),
				add_padding = '';
			if( header_transparent === 'yes' ) { add_padding = in_header_height };			
			jQuery('.design_modern .modern_heading_title_wrap').css('padding-top', add_padding);
		}

		modern_title_top_padding();

		function post_title_fullscreen() {
			var header_height = jQuery('.header').outerHeight(),
				top_bar_height = jQuery('.top_nav_out.display_top_bar').outerHeight(),				
				row_height = jQuery('.row_full_width').attr('data-height'),
				actual_height = '';
			
			if( row_height === 'fullscreen' ) {				
				actual_height = "calc(100vh - " + ( header_height + top_bar_height ) + "px)";
				jQuery('.design_modern .modern_heading_title_wrap').css('min-height', actual_height);
			}
			//console.log( actual_height );
		}
		if($body.hasClass('single-post')) {
			post_title_fullscreen();
		}

		if($sticky_footer=='true'){
			setTimeout(function() {
				place_footer_on_bottom();	
				jQuery('.footer').fadeIn(100);	
			},200);
		}

		jQuery('.gym_class_wrap').each(function() {
			if(!strstr(window.location.href, 'vc_editable=true')) {
				jQuery(this).hover( 
					function() {
						 jQuery(this).find( '.gym_class_description' ).slideDown(250);
					},
					function() {
						jQuery(this).find( '.gym_class_description' ).slideUp(250);
					}
				);
			}
			else {
				jQuery('.gym_class_wrap').addClass('always_visible');
			}
		});

		/* Flip boxes ipad support */
		$('.flip-container').each( function(){

			if( window.innerWidth < 1025 && window.innerWidth > 670 )
			$(this).bind('touchstart', function(e) {
				$find_back_link = $(this).find('.flip_box_link').attr('href');
				console.log($find_back_link);
				
				if($find_back_link == '' || $find_back_link == null) {
		        	e.preventDefault();
		    	}
		        $(this).removeClass('remove_effect');
		        $(this).toggleClass('hover_effect');
		        
		        $(this).bind('touchstart', function(e) {
		        	if($find_back_link == '' || $find_back_link == null) {
				        e.preventDefault();
				        $(this).toggleClass('remove_effect');
				    }
				    else {
				    	//$(this).toggleClass('remove_effect');
				    }
			        
			    });
		    });
			
		});

		jQuery('a.jump_links, .jump_links_wrap a').on('click', function(e) {
			//console.log(header_height);
			
			e.preventDefault();
			var href = $.attr(this,'href');
			//console.log(href);
			$root.animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top - header_height }, 1000);
		    return false;
		});

		/* One Page Navigation Menu logic */

    	jQuery('#one_page_navigation li:first-child a').addClass('active_menu_item')

		jQuery('#one_page_navigation a').on( 'click', function() {

			jQuery('#one_page_navigation a').removeClass('active_menu_item');
			$(this).addClass('active_menu_item');

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

				var target = $(this.hash),			
				id = $(this).attr('href');				
					//header_height = jQuery('.header').outerHeight(),
					//header_height_admin = jQuery('#wpadminbar').outerHeight();					

				/*if(header_height_admin){
				  header_height = header_height_admin + header_height;
				}*/

				if(window.innerWidth < 830 )	{
				  header_height = 0;
				}

				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length && (id != '#home')) {
					$('html,body').animate({ scrollTop: target.offset().top - header_height }, 1000);
					return false;
				}
				else if(target.length && (id == '#home')) {					  
					$('html,body').animate({ scrollTop: 0}, 1000);
					return false;
				}

			}

		});

		
		function responsive_nav() { 
			var $body = $('body'),				
				$search_holder = $('.mobile_menu_holder');
		 	
		 	$('.responsive-menu-link').click(function() {				 					
				
				if ($body.hasClass('opened-nav')) {
				  $body.removeClass('opened-nav').addClass('closed-nav');
				  //$nav.slideUp(300);
				  $search_holder.slideUp(300);
				} else {
				  $body.removeClass('closed-nav').addClass('opened-nav');
				  //$nav.slideDown(300);
				  $search_holder.slideDown(300);				  
				}
			 
		  	});
			$(window).resize(function(){
			  if(window.innerWidth > resolution ){			  
			  	$('.mobile_menu_holder').slideUp(300);
				$('body').removeClass('opened-nav').addClass('closed-nav')
			  }
			});

			$('#responsive_menu .sf-sub-indicator').addClass('nav-sub-closed');

			/* One Page Responsive Menu Logic */
			$('#responsive_menu.one_page_navigation_mobile li a').click(function() {
				var id = $(this).attr('href');
				if(id!=='#') {
			  		if ($body.hasClass('opened-nav')) {				  		
					  $body.removeClass('opened-nav').addClass('closed-nav');
					  $search_holder.slideUp(300);
					}
				
				  	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {			  		

				  		var target = $(this.hash);
				  		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  		//alert(target);
					  	//var id = $(this).attr('href');
					  	var responsive_menu_height = $('.responsive-menu-link').outerHeight();
					  	//var div_by_id = $('div#about-us')

					  	if(target.length && (id != '#home')) {					  				  					  
						  	$('html,body').animate({ scrollTop: target.offset().top - responsive_menu_height}, 1000);
							return false;
						  }	
						else if(target.length && (id == '#home')) {					  
						  	$('html,body').animate({ scrollTop: 0}, 1000);
							return false;
						  } 
					  	
					}
				}
		  	});

		  $('#responsive_menu .sf-sub-indicator').on('click', function(e) {		  
			var $this = $(this);
			if ($this.hasClass('nav-sub-closed')) {
			  $this.parent().siblings('ul').slideDown(450).end().end().removeClass('nav-sub-closed').addClass('nav-sub-opened');
			} else {
			  $this.parent().siblings('ul').slideUp(450).end().end().removeClass('nav-sub-opened').addClass('nav-sub-closed');
			}
			e.preventDefault();
		  });
	 
		}
		responsive_nav();
		
		if(window.innerWidth > 830 ){

			//jQuery('.mobile-parallax').removeClass('mobile-parallax');			  
			var vertical_off = $('#wpadminbar').height() + $('.top_nav_out').height() + $('.full_header').height() + $('.bellow_header').height();
			//console.log('header height:' + vertical_off);
		  	$.stellar({
				horizontalScrolling: false,
				verticalOffset: vertical_off,					
				responsive: true
			});
		}
		else {
			jQuery('.parallax_class').addClass('mobile-parallax');
		}
			
			$fullScreenEl.each( function(){
					var element = $(this),
						topbarHeight = $top_bar.height(),
						adminbarHeight = $('#wpadminbar').height(),
						pagetitleHeight = $pageTitle.height(),
						innerwrap = $(this).find('.inner_wrap_margins'),
						headerHeight = $header.height();
						if($header.attr('data-transparent') == 'yes') {
							headerHeight = 0;
						}
						if($pageTitle.attr('data-ptb') == 'off') {
							pagetitleHeight = 0;
						}
						
						
					scrHeight = $window.height() - (topbarHeight + adminbarHeight + headerHeight + pagetitleHeight);									
					

					if($(window).width() < 959) {
						scrHeight = 'auto';
					}
					else{
						element.css({							
							'height': scrHeight,							
						});						
						innerwrap.css({ top: ( scrHeight - innerwrap.outerHeight() ) / 2 + 'px', position: 'relative' })
					}
			});
		//console.log(window.location.href);
		if(!strstr(window.location.href, 'vc_editable=true')) {		
			$('.clients_carousel').each(function(){
				var timeout = $(this).attr('data-timeout');
				var clientsNo = $(this).attr('data-visible-items');				
				var clientsAutoPlay = $(this).attr('data-autoplay');
				var dotsNavigation = $(this).attr('data-navigation');
				var showNav = $(this).attr('show-nav');
				
				var display_0 = $(this).attr('data-0');
				var display_480 = $(this).attr('data-480');	
				var display_768 = $(this).attr('data-768');
				var display_992 = $(this).attr('data-992');
							
				var carouselSpeed = $(this).attr('data-speed');
				if( !carouselSpeed ) { carouselSpeed = 400}
				if( !showNav || showNav === 'no' ) { 
					showNav = false;
					navigation_text = '';
				} 
				else {
					showNav = true;
					navigation_text = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
				}
				if( clientsAutoPlay === 'true' ) { clientsAutoPlay = true; } else { clientsAutoPlay = false; }
				if( dotsNavigation === 'yes' ) { dotsNavigation = true; } else { dotsNavigation = false; }				
				
				 	$(this).owlCarousel({
						items: parseInt(clientsNo),
						margin: 30,
						loop: true,
						nav: showNav,
						lazyLoad: true,
						navText: navigation_text,						
						autoplay: clientsAutoPlay,
						autoplayTimeout: timeout,
						autoplayHoverPause: true,
						autoplaySpeed: 1000,
						dragEndSpeed: carouselSpeed,
						dotsSpeed: carouselSpeed,
						dots: dotsNavigation,
						navRewind: true,        	
						responsive:{
							0:{ items:  Number(display_0) },
							480:{ items: parseInt(display_480) },
							768:{ items: parseInt(display_768) },
							992:{ items: parseInt(display_992) },
							1200:{ items: parseInt(clientsNo) }
						}
					});
				
			});
		}

					        
	});

	

    if ( $().tipsy ) { nTip=function(){ $('.ntip').tipsy({gravity: 's', fade:true}); }; nTip(); }
    if ( $().tipsy ) { eTip=function(){ $('.etip').tipsy({gravity: 'e', fade:true}); }; eTip(); }
	if ( $().tipsy ) { sTip=function(){ $('.stip').tipsy({gravity: 'n', fade:true}); }; sTip(); }


	if(!strstr(window.location.href, 'vc_editable=true')) {		
		$('.googlemaps').each(function() {
			
			var geocoder, map, styleMapRender;
			var id = $(this).attr('data-id');
			var address = $(this).attr('address');	
			
			var address = $(this).attr('address');
			
			var map_design = $(this).attr('data-map');
			var zoomEl = $(this).attr('data-zoom');
			var titleEl = $(this).attr('data-title'); 
			var popupEl = ( $(this).attr('data-popup') === "true" );
			var scrollwheelEl = ( $(this).attr('data-scrollwheel') === "true" );
			var panEl = ( $(this).attr('data-pan') === "true" );
			var zoom_controlEl = ( $(this).attr('data-zoom_control') === "true" );
			var type_controlEl = ( $(this).attr('data-type_control') === "true" );
			var streetviewEl = ( $(this).attr('data-streetview') === "true" );	
			
			mapEl = 'terrain';

			var styleMap = $(this).attr('map-style');

			if( ( styleMap != 'default' ) && ( styleMap != 'custom' ) ) {
				//alert ('aici sunt');
				switch (styleMap) {
					case '1':
						//alert('da este bine');
						styleMapRender = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
						break;	
					case '2':
						//alert('asta este 2');
						styleMapRender = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
						break;
					case '3':
						styleMapRender = [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];
						break;
					case '4':
						styleMapRender = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}];
						break;			
					case '5':
						styleMapRender = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]}];
						break;
					case '6':
						styleMapRender = [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}];
						break;
					case '7':
						styleMapRender = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}];
						break;
					case '8':
						styleMapRender = [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}];
						break;				
				}
			}

			if( styleMap == 'custom' ) {
				styleMapRender = $('.custom_map_style').html();
				styleMapRender = jQuery.parseJSON(styleMapRender);
			}
			//alert (typeof(styleMapRender));

			var popSize = $(this).attr('pop-size');
			if( popSize ) {
				popSize = 'style="width:'+ popSize +';"';
			}
			if( messageEl ) {
				messageEl = '<p>'+messageEl+'</p>';
			}

			if(titleEl) { 
				titleEl = '<h3>'+titleEl+'</h3>';
			}
			var messageEl = $(this).attr('data-message');
			if( messageEl ) {
				messageEl = '<p>'+messageEl+'</p>';
			}
			var phoneEl = $(this).attr('data-phone');
			if( phoneEl ) {
				phoneEl = '<p class="nobottommargin"><icon class="fa fa-phone"></icon>&nbsp;&nbsp;'+phoneEl+'</p>';
			}
			var emailEl = $(this).attr('data-email');
			if( emailEl ) {
				emailEl = '<p><icon class="fa fa-envelope"></icon>&nbsp;&nbsp;'+emailEl+'</p>';
			}

			function initialize() {
			  	//var myLatlng = new google.maps.LatLng(lat,lng);
			  
			  	var mapOptions = {
					zoom: parseInt(zoomEl),							
					mapTypeId: google.maps.MapTypeId[map_design],				
					scrollwheel: scrollwheelEl,				
					panControl: panEl, //da
					zoomControl: zoom_controlEl, //da
					mapTypeControl: type_controlEl, //da
					overviewMapControl: false, //da
					streetViewControl: streetviewEl, //da
					styles: styleMapRender
			  	}
			  	//var map = new google.maps.Map(document.getElementById(id), mapOptions);				
			
			  	//map.setMapTypeId(google.maps.MapTypeId[map_design]);	
			  
			  				
			
			  geocoder = new google.maps.Geocoder();
			  // var latlng = new google.maps.LatLng(-34.397, 150.644);
			  
				var contentString = '<div ' + popSize + '>'+titleEl+messageEl+'<p class="nobottommargin"><icon class="fa fa-home"></icon>&nbsp;&nbsp;'+address+'</p>'+phoneEl+emailEl+'</div>';
			
				var infowindow = new google.maps.InfoWindow({
			  		content: contentString,
					maxWidth: 450,					  
			    });

			  geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
				  map.setCenter(results[0].geometry.location);
				  
				  var marker = new google.maps.Marker({
					  map: map,
					  //title: 'New York',
					  position: results[0].geometry.location
				  });
				  
				  google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				  });
				  if( popupEl ) {
				  	google.maps.event.addListenerOnce(map, 'idle', function() {
					  setTimeout(function() {
						// wait some more (...)
						google.maps.event.trigger(marker, 'click'); //still doesn't work?
					  },400);
					});	
				  }
				  
				} else {
				  alert('Geocode was not successful for the following reason: ' + status);
				}
			  });
			 
			  map = new google.maps.Map(document.getElementById(id), mapOptions);

			}
			
			google.maps.event.addDomListener(window, 'load', initialize);
			
		});
	}

	jQuery('a.add_to_cart_button.product_type_simple').click(function(e) {
		var link = this;
		jQuery(link).parents('.product').find('.cart-loading').find('i').removeClass('fa-check').addClass('fa-refresh');
		jQuery(this).parents('.product').find('.cart-loading').fadeIn();
		setTimeout(function(){
			jQuery(link).parents('.product').find('.cart-loading').find('i').hide().removeClass('fa-refresh').addClass('fa-check').fadeIn();

			setTimeout(function(){
				jQuery(link).parents('.product').find('.cart-loading').fadeOut().parents('.product').find('.product-images img').animate({opacity: 1});;
			}, 1500);
		}, 1500);
	});

	jQuery('li.product').mouseenter(function() {
		if(jQuery(this).find('.cart-loading').find('i').hasClass('fa fa-check')) {
			jQuery(this).find('.cart-loading').fadeIn();
		}
	}).mouseleave(function() {
		if(jQuery(this).find('.cart-loading').find('i').hasClass('fa fa-check')) {
			jQuery(this).find('.cart-loading').fadeOut();
		}		
	});

	function side_panels() {
		$(".side-panel-trigger").click(function(){
			$body.toggleClass("side-panel-open");
			if( $body.hasClass('device-touch') ) {
				$body.toggleClass("ohidden");
			}
			return false;
		});

		$(document).on('click', function(event) {				
			if (!$(event.target).closest('#side-panel').length) { $body.toggleClass('side-panel-open', false); }
		});
	}
	side_panels();
	
	
	// Tabs
	//When page loads...
	
	$('.tabs-wrapper').each(function() {
		$(this).find(".tab_content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(this).find(".tab_content:first").show(); //Show first tab content
	});
	
	//On Click Event
	$("ul.tabs li").click(function(e) {
		$(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	
	$("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})		
	
	function html_video() {
		var videoEl = $('.video-bg:has(video)');
			if( videoEl.length > 0 ) {
				videoEl.each(function(){
					var element = $(this),
						elementVideo = element.find('video'),
						placeholderImg = element.attr('poster');
						outerContainerWidth = element.outerWidth(),
						outerContainerHeight = element.outerHeight(), // inaltime .video-bg
						innerVideoWidth = elementVideo.outerWidth(),
						innerVideoHeight = elementVideo.outerHeight(); //inaltime video tag
					var placeholderImg = elementVideo.attr('poster');	
					
					if( placeholderImg != '' && window.innerWidth < 830 ) {						
						element.append('<div class="video-placeholder" style="background-image: url('+ placeholderImg +');"></div>')
					}

				});
			}
	}
	html_video();
	
	function header_search() {
		/*$(document).on('click', function(event) {
			if (!$(event.target).closest('#header-search').length) { $body.toggleClass('top-search-open', false); }			
		});
		*/
		$("#header-search").click(function(e){
			$body.toggleClass('hs-open');			
			//$( '#navigation > ul > li.menu-item' ).toggleClass("show", false);
			if ($body.hasClass('hs-open')){
				$('#navigation form.header_search').find('input').focus();
			}
			e.stopPropagation();
			e.preventDefault();
		});
	}
	
	header_search();
	
	
	
	function counter_cr(){
		var $counterElement = jQuery('.counter');
		if( $counterElement.length > 0 ){
			$counterElement.each(function(){
				var element = $(this);
				var counterWithComma = $(this).find('span').attr('data-comma');
				if( !counterWithComma ) { counterWithComma = false; } else { counterWithComma = true; }
					element.appear( function(){
						runCounter( element, counterWithComma );
					},{accX: 0, accY: -120},'easeInCubic');			
			});
		}
	}	

	function runCounter( counterElement,counterWithComma ){
		if( counterWithComma == true ) {
			counterElement.find('span').countTo({
				formatter: function (value, options) {
					value = value.toFixed(options.decimals);
					value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					return value;
				}
			});
		} else {
			counterElement.find('span').countTo();
		}
	}
	if(!strstr(window.location.href, 'vc_editable=true')) {	
		counter_cr();
	}

	// Scroll to Top
		if($(window).width() > 979) {        
			$(window).scroll(function() {
				if($(this).scrollTop() > 450) {
					$('#gotoTop').fadeIn();
				} else {
					$('#gotoTop').fadeOut();
				}
			});
			
			
			$('#gotoTop').click(function() {
				$('body,html').animate({scrollTop:0},400);
				return false;
			});
        
		}
	
		
	jQuery('.flexslider').each(function() {
        var this_element = jQuery(this);
        var sliderSpeed = 800,
            sliderTimeout = parseInt(this_element.attr('data-interval'))*1000,
            sliderFx = this_element.attr('data-flex_fx'),
            sliderSmoothH = this_element.attr('data-smooth-height'),
            slideshow = true;
        if ( (sliderTimeout == 0) || (!sliderTimeout) ) slideshow = false;
        
        sliderSmoothH = sliderSmoothH != null && sliderSmoothH != 'false' ? true : false;

        this_element.flexslider({
            animation: sliderFx,
            slideshow: slideshow,
            slideshowSpeed: sliderTimeout,
            sliderSpeed: sliderSpeed,
            smoothHeight: sliderSmoothH,
			directionNav: true,
			controlNav: false

        });
    });

    if($body.hasClass('single-creativo_portfolio')) {
		equal_portfolio_content();
	}

    //region Fixed header
	var $w = $(window),
		$b = $('body'),
		classRow = 'pi-section-w',
		сlassFixedRow = 'pi-header-row-fixed',
		сlassFixedRows = 'pi-header-rows-fixed',
		сlassFixed = '',
		classReducible = 'header_reduced',
		classReduced = 'pi-row-reduced',
		bodyLayout =  $b.attr('data-layout'),
		$stickyHeader = $('.sticky_h'),
		$stickyMenu = $('.sticky_h_menu'),
		$reducibleRow = $stickyHeader.find('.' + classReducible),
		rowsQuantity = $stickyHeader.find('.' + classRow).length,
		reduceTreshold = 400,
		
		stateFixed = 'default',
		stateReduce = 'default',
		headerTopOffset = 0 ,
		windowWidth = jQuery(window).width(),
		scrollTop = 0,		
				
		header_transparent = jQuery('.header').attr('data-transparent'),
		stk_mob_menu = jQuery('#responsive_navigation').attr('sticky-mobile-menu'),
		header_resize = jQuery('.header').attr('data-resize'),
		resize_factor = jQuery('.header').attr('resize-factor'),
		header_version = jQuery('.header').attr('header-version'),
		header_centered = jQuery('.header').attr('data-centered'),
		logo_resize = jQuery('.header').attr('logo-resize'),
		logo_height = jQuery('#branding .logo a img.show_logo').attr('logo-height'),			
		logo_padTop = jQuery('#branding .logo').css('padding-top'),
		logo_padBot = jQuery('#branding .logo').css('padding-bottom'),
		header_height = jQuery('.full_header').outerHeight(),
		header_nav_height = jQuery('#navigation').outerHeight(),
		static_header_height = jQuery('.header').outerHeight(),		
		header_inside_left = jQuery('.header_inside_left').outerHeight(),
		responsive_menu_height = jQuery('.responsive-menu-link').outerHeight(),
		top_bar_height = jQuery('.top_nav_out').outerHeight();
		original_logo = jQuery('.logo .original_logo');
		custom_logo = jQuery('.logo .custom_logo');
		custom_logo_state = jQuery('.logo').attr('data-custom-logo');
		
		if(!top_bar_height) { top_bar_height = 1; }
		if(!header_inside_left) { header_inside_left = 0; }

		if(!header_inside_left) header_inside_left = 0;
		
		$top_bar_header_height = top_bar_height + header_height + header_inside_left;

		//alert(header_inside_left);
		
		if( bodyLayout == 'boxed' ) { 
			body_margin_top = jQuery('.container').css('margin-top');
			body_margin_top = body_margin_top.replace("px","");	
			$top_bar_header_height = $top_bar_header_height + parseInt(body_margin_top);		
			top_bar_height = top_bar_height + parseInt(body_margin_top);			
		}
		else{
			body_margin_top = 0;
		}
/*
	if(header_version === 'business') {
		var branding_width = jQuery('#branding .logo a img').outerWidth(); console.log(branding_width);
		jQuery('#branding').css('min-width', + branding_width +'px');
	}
*/
	if(header_transparent === 'yes') {
		jQuery('.header').addClass('header_transparent');
		jQuery('#navigation').addClass('custom_menu_color');					
	}	

	/* sticky menu for mobile devices */
	if( windowWidth <= resolution && (stk_mob_menu == 'yes')) {

		$w.scroll(function(){

			scrollTop = $w.scrollTop();
			//alert($top_bar_header_height);

			if(scrollTop >= $top_bar_header_height){
				requestAnimationFrame(function(){
					jQuery('#responsive_navigation ').addClass('sticky_mobile');
					jQuery('.row , .row_full').css('padding-top', responsive_menu_height);
				});
			}
			else {
				requestAnimationFrame(function(){
					jQuery('#responsive_navigation').removeClass('sticky_mobile');
					jQuery('.row, .row_full ').css('padding-top', 0);
				});
			}
		});
	}	

	if($stickyHeader.length && windowWidth>resolution){		

		scrollTop = $w.scrollTop();		
		
		headerTopOffset += $stickyHeader.offset().top;

		$w.scroll(function(){
			scrollTop = $w.scrollTop();
			
			if(windowWidth>resolution){
				jQuery('.full_header').css('height',header_height);
			}

			if(scrollTop >= top_bar_height){	
						
				if(stateFixed == 'default'){
					requestAnimationFrame(function(){
						$b.addClass('pi-header-row-fixed');
						if(header_transparent === 'yes') {
							jQuery('.header').removeClass('header_transparent');
							jQuery('#navigation').removeClass('custom_menu_color');
						}											
					});
					stateFixed = 'fixed';
				}
				
				if(header_resize == 'yes') {					
					
					new_logo_height = logo_height - (logo_height*resize_factor);					
					
					if( ( logo_padTop.length > 0 ) ) {
						new_logo_padTop = parseInt(logo_padTop.replace("px",""))*0.6;
					}
					if( ( logo_padBot.length > 0 ) ) {
						new_logo_padBot = parseInt(logo_padBot.replace("px",""))*0.6;
					}

					logo_container_height = new_logo_height + new_logo_padTop + new_logo_padBot;
					start_resize = (static_header_height + top_bar_height)*2;
					
					if(scrollTop >= 200 ) {
						if(logo_resize == 'yes') {
							jQuery('#branding .logo a').css('height',new_logo_height + 'px');
						}
						jQuery('#branding .logo a img.show_logo').css('height',new_logo_height + 'px');
						jQuery('#branding .logo').css('padding-top',new_logo_padTop).css('padding-bottom',new_logo_padBot);
						if ( ( ( header_version != 'style2' ) && ( header_centered != 'yes') ) || ( header_version=== 'business' ) ) {
							jQuery('#navigation > ul').css('height', logo_container_height + 'px' ).css('line-height', logo_container_height + 'px');
							jQuery('#navigation').css('margin-top','0');
						}
						jQuery( '.additional_icons ul' ).css('height', logo_container_height + 'px' ).css( 'line-height', logo_container_height + 'px' );

					}
					else {
						if(logo_resize == 'yes') {
							jQuery('#branding .logo a').css('height',logo_height + 'px');
						}
						jQuery('#branding .logo a img.show_logo').css('height',logo_height + 'px');
						jQuery('#branding .logo').css('padding-top',logo_padTop).css('padding-bottom',logo_padBot);
						if ( ( ( header_version != 'style2' ) && ( header_centered != 'yes') ) || ( header_version=== 'business' ) ) {
							jQuery('#navigation > ul').css('height','').css('line-height','');
							jQuery('#navigation').css('margin-top','');	
						}
						jQuery( '.additional_icons ul' ).css('height', '' ).css( 'line-height', '' );
					}
				}
				
				
				if(custom_logo_state=='true'){
					custom_logo.removeClass('show_logo').addClass('hide_logo');
					original_logo.removeClass('hide_logo').addClass('show_logo');
				}
				
			} else {
				
					if(header_transparent === 'yes') {
						jQuery('.header').addClass('header_transparent');
						jQuery('#navigation').addClass('custom_menu_color');					
					}
								
				if(stateFixed == 'fixed'){
					requestAnimationFrame(function(){
						$b.removeClass('pi-header-row-fixed');
						
					});
					stateFixed = 'default';
				}			
				if(custom_logo_state=='true'){
					original_logo.removeClass('show_logo').addClass('hide_logo');
					custom_logo.removeClass('hide_logo').addClass('show_logo');
				}
			}
		});

	}
	

	if($stickyMenu.length && windowWidth>resolution){

		scrollTop = $w.scrollTop();
		headerTopOffset += $stickyMenu.offset().top;	

		$w.scroll(function(){
			scrollTop = $w.scrollTop();				

			header_height = jQuery('.full_header').outerHeight();			

			if(windowWidth>resolution){
				jQuery('.header_area').css('height',header_height);			
			}	
			
			$top_bar_header_height = top_bar_height + header_height;			
			
			modern_menu_height = jQuery('.second_navi').outerHeight();
			header_wrap = jQuery('.header_wrap ').outerHeight();

			height_to_modern_header = header_wrap + top_bar_height + parseInt(body_margin_top);	

			
			if(scrollTop > height_to_modern_header){
				if(stateFixed == 'default'){
					requestAnimationFrame(function(){
						$b.addClass('pi-header-row-fixed');										
					});
					stateFixed = 'fixed';
				}
				
			} 
			else {								
				if(stateFixed == 'fixed'){
					requestAnimationFrame(function(){
						$b.removeClass('pi-header-row-fixed');					
					});
					stateFixed = 'default';
				}		
				
			}
		});
	}	
	
});

     topSocialExpander=function(){
        
        var windowWidth = jQuery(window).width();
    
        if( windowWidth > 767 ) {
            jQuery("#style_selector").show();                
        } else {                    
            jQuery("#style_selector").hide();
        }
    
    };
    topSocialExpander();
    
    jQuery(window).resize(function() {
        topSocialExpander();
    });
    
   
