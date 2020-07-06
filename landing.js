// scroll into print product

//function scrollToPrint(){
	//var printElement = document.getElementById("printP");
		//	printElement.scrollIntoView();
//}

//function scrollToDesign(){
	//var designElement = document.getElementById("designProduct");
		//	designElement.scrollIntoView();
//}

$(document).ready(function() {
	//displaying footer-links
	$(".link-header").click(function() {
		if($(window).innerWidth() < 768) {
			$(this).next().slideToggle(1000);
			if($(this).next().hasClass("scaleChanged")) {
				$(this).children("#open-link").css({"transform": "scale(1)"});
				$(this).next().removeClass("scaleChanged");
			} else {
				$(this).children("#open-link").css({"transform": "scale(-1)"});
				$(this).next().addClass("scaleChanged");
			}
		}
	})
})

// switch tabs and border colors for user and merchant tabs
const userHeader = document.getElementById("userHeader"),
merchantHeader = document.getElementById("merchantHeader"),
userTab = document.getElementById("userTab"),
merchantTab = document.getElementById("merchantTab");

userHeader.addEventListener('click', function() {
	//switch border color
	merchantHeader.style.borderColor = '#cce';
	this.style.borderColor = '#FF7227';
	//switch display of tab content
	userTab.style.display = "block";
	merchantTab.style.display = "none";
});

merchantHeader.addEventListener('click', function() {
	//switch border color
	userHeader.style.borderColor = '#cce';
	this.style.borderColor = '#FF7227';
	//switch display of tab content
	userTab.style.display = "none";
	merchantTab.style.display = "block";
});

//change "View All Products" button content
const imageBtn = document.getElementById('all-products');
const imgHides = document.querySelectorAll('.img-hide');

imageBtn.addEventListener('click', function() {
	if(this.textContent === "View all products") {
		this.textContent = "Hide Products";
	} else {
		this.textContent = "View all products";
	}
	//hide and show image when view all products button is clicked
	imgHides.forEach(imgHide => {
		imgHide.classList.toggle('img-hide');
	})
});

const imageBtn2 = document.getElementById('all-products2');
const imgHides2 = document.querySelectorAll('[class*="image-thumbnail"]');

imageBtn2.addEventListener('click', function() {
	if(this.textContent === "View all products") {
		this.textContent = "Hide Products";

		imgHides2.forEach(imgHide => {
			if(imgHide.classList.contains("tablet525-view") || 
			imgHide.classList.contains("tablet992-view") || 
			imgHide.classList.contains("desktop1440-view")) {
				 imgHide.classList.add('img-show');
			}
		})
	} else {
		this.textContent = "View all products";

		imgHides2.forEach(imgHide => {
			if(imgHide.classList.contains("tablet525-view") || 
			imgHide.classList.contains("tablet992-view") || 
			imgHide.classList.contains("desktop1440-view")) {
				 imgHide.classList.remove('img-show');
			}
		})
	}
})