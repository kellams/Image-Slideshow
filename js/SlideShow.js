var image;
var btnRight;
var btnLeft;

var index = 1;
//image index
var numberOfImages = 11;
//const number of images
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}
preload(['images/img1.jpg',
			'images/img2.jpg',
			'images/img3.jpg',
			'images/img4.jpg',
			'images/img5.jpg',
			'images/img6.jpg',
			'images/img7.jpg',
			'images/img8.jpg',
			'images/img9.jpg',
			'images/img10.jpg',
			'images/img11.jpg'
]);
			
			
			
$(document).ready(function() {
	image = document.getElementById("image");
	btnRight = document.getElementById("btnRight");
	btnLeft = document.getElementById("btnLeft");
	//dom elements
	
	$(btnRight).on("click", nextImage);
	$(btnLeft).on("click", lastImage);
	//click handlers for buttons
	
	//btnRight.addEventListener("click", nextImage);
	//btnLeft.addEventListener("click", lastImage);
	//old js
});


function nextImage(){ //called from clicking btnRight

	$(btnRight).unbind();	
	//unbind event
	if(index == numberOfImages){ //end of images, loop back
		index = 1;
	} else {
		index += 1;
	}
	$(image).hide( "drop", { direction: "left" }, function(){
		image.src = "images/img" + index + ".jpg";
		//load image
	});
	
	$(image).show( "drop", { direction: "right" }, function(){
		$(btnRight).on("click", nextImage);
		//rebind event - disallows multiple clicks
	});
	
}


function lastImage(){ //called from clicking btnLeft

	$(btnLeft).unbind();
	//unbind btnLeft
	if(index == 1){ //at first image, go to the end
		index = numberOfImages;
	} else {
		index -= 1;
	}
	$(image).hide( "drop", { direction: "right" }, function(){
		image.src = "images/img" + index + ".jpg";
		//load image
	});
	
	$(image).show( "drop", { direction: "left" }, function(){
		$(btnLeft).on("click", lastImage);
		//rebind event - disallows multiple clicks
	});
}