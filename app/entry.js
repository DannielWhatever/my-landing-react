/** @jsx React.DOM */

console.log('%c Hello stranger! ', 'background: #222; color: #bada50');

var jQuery = require("jquery");

var $ = jQuery;


// Closes the sidebar menu
$("#menu-close").on('click',function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").on('click',function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});


$('.menu-link').on('click',function(){
	$("#menu-close").click();
});

// Scrolls to the selected menu item on the page
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

