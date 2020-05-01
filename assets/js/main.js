function initialization() {
	var sidenav_elems = document.querySelectorAll(".sidenav");
	var carousel_elem = document.querySelector("#events .carousel");
	var image_elems = document.querySelectorAll(".materialboxed");
	var scrollspy_elems = document.querySelectorAll(".scrollspy");
	var sidenav_options = { edge: "right" };
	var carousel_options = { numVisible: 5, indicators: true, padding: 30, shift: 0, dist: -10 };
	var images_options = {};
	var scrollspy_options = { scrollOffset: 50, throttle: 300 };
	var sideNavs = M.Sidenav.init(sidenav_elems, sidenav_options);
	var carousel = M.Carousel.init(carousel_elem, carousel_options);
	var images = M.Materialbox.init(image_elems, images_options);
	var instances = M.ScrollSpy.init(scrollspy_elems, scrollspy_options);
}

document.addEventListener("DOMContentLoaded", function () {
	initialization();
});
