canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width = 75;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_y = 5;
car_x = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, car_x, car_y, car_width, car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y >= 0){
		car_y = car_y - 10;
		console.log("flecha arriba");
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (car_y <= 380){
		car_y = car_y + 10;
		console.log("flecha abajo");
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (car_x >= 0){
		car_x = car_x - 10;
		console.log("flecha izquierda");
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (car_x <= 780){
		car_x = car_x + 10;
		console.log("flecha izquierda");
		uploadBackground();
		uploadgreencar();
	}
}