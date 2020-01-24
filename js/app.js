// function Sprite(_position, _numberFrame, _framesize, _image, _duration){
//     this.position = {x: 0, y: 0};      //Array like { x : 0, y : 0 }
//     this.rendersize = {width: 50, height: 80};  //Array like { width : 50, height : 80 }
//     this.framesize = {width: 50, height: 50};    //Array like { width : 50, height : 80 }
//     this.image = '../sketches/spritesheet_color.png';            //Image object
// }

var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth; //matches the width of the window
canvas.height = window.innerHeight; //matches the height of the window

// // c for context
var c = canvas.getContext('2d'); //draws elements in a 2d space

// c.fillRect(100, 100, 100, 100); // draws a rectangle / square shape

// //Line
// c.beginPath(); //starts a path (line)
// c.moveTo(50, 300); //determines where the path starts
// c.lineTo(300, 100); //determines where the line ends
// c.stroke(); //shows the line on-screen

// //multiple line-tos add to the line

// // .strokestyle changes the color of the line
// // .fillstyle changes the color of the shape; wherever its placed after changes the color of that shape

// // c.fillRect(x, y, width, height);
// //x and y: location of element on screen
// //width and height: size of element on screen

// //Arc / Circle
// // c.arc creates a circle; must begin path first


// console.log(canvas);

var x = 200; //position on the x-axis
var y = 200; //position on the x-axis
var height = 50; //of image
var width = 50; //of image
var dx = 4; //velocity left to right
var dy = 4; //velocity up to down

function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //clears entire canvas before next image is drawn

    c.fillRect(x, y, width, 50); // draws a rectangle / square shape

    // x++ //moves on the x-axis by 1 

    //once the edge of the image reaches the edge, reverse it 
    //(edge of image is 200 in this case, add the edge to the x-axis so the image reverses once the edge is hit)
    if ((x + width) > innerWidth || (x - width) < 0) { 

        dx = -dx; //causes the image to move in the opposite direction
    }

    if ((y + width) > innerHeight || (y - width) < 0) { 

        dy = -dy; //causes the image to move in the opposite direction
    }

    x += dx; //changes velocity of image (left to right)
    y += dy; //changes velocity of image (top to bottom)

    // console.log('x: ' + x);
    // console.log(('innerWidth));
    // console.log((x - width));
    // console.log((x + width));

}

animate();

// --------------------------------------------------------
// //Make the background
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// //Make the elements (sprites)
// var sprite = new Image();
// sprite.src = "sketches/Background.png";
// // sprite.classList.add('sprite');
// //pngs can only be resized when the height and with is set to 100% in css

// sprite.addEventListener("load", loadImage, false);

// //Load the Sprite
// function loadImage(element) {
    
//     animate();
//     // context.drawImage(sprite, 0, 0, 1000, 450)
//     // context.drawImage(sprite, x, y, width, height)
// }

// //Animate sprite
// var shift = 0;
// var frameWidth = 375; //width of frame sprite will be on
// var frameHeight = 500; //height of frame sprite will be on
// var totalFrames = 2;
// var currentFrame = 0;

// function animate() {

//     setInterval(() => {
        
//         context.clearRect(240, 50, 375, 500);
        
//         context.drawImage(sprite, shift, 0, frameWidth, frameHeight, 240, 50, frameWidth, frameHeight);
        
//         shift += frameWidth + 1; 

//         if (currentFrame == totalFrames) {
//             shift = 0;
//             currentFrame = 0;
//         }
        
//         currentFrame++;

//         requestAnimationFrame(animate);

//     }, 100);
    

// };
        
// // context.drawImage(sprite, shift(originalLocationX), originalLocationY, imageOriginalWidth, imageOriginalHeight, newlocationX, newlocationY, frameWidth, frameHeight);