//Making sprites with canvas

//Create a canvas and append to body tag
//Creating the canvas in JS makes the code dynamic
var canvas = document.createElement("canvas"); 
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// The main game loop (constantly updates and edits the game)
var lastTime;
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt); //takes the time that has changed since the last update
    //the scene and framerate are updated seperately, because using a static update number wont work on muti-platforms and devices

    render();

    lastTime = now;
    requestAnimFrame(main); //adds the next loop in line
};