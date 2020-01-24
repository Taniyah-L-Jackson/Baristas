//Game BG and Overlay
var background = document.getElementById('background');
var text = document.getElementById('text');
var gameBtn = document.getElementById('game');

//Records
var coffeeTxt = document.getElementById('coffee');
var moneyTxt = document.getElementById('money');
//------------------------------------------------

//--Background
background.src = 'media/title_screen.jpg'
// background.classList.add('background');

//Title Screen
text.innerText = "Casual Barista"
//------------------------------------

//--Button
gameBtn.innerText = 'Click to Begin';
gameBtn.addEventListener('click', characterSelection);
//-----------------------------------------------


//Select Character function
//--Call character row
var character = document.getElementById('character');

//--Display names and characters
var barista_boy = new Image();
var barista_girl = new Image();
var barista_boy_name = document.getElementById('barista_boy_name');
var barista_girl_name = document.getElementById('barista_girl_name');


function characterSelection() {

    //get rid of button and change title
    text.classList.remove('intro');
    text.classList.add('character_screen_title');
    text.innerText = 'Choose Your Barista';
    gameBtn.style.visibility = 'hidden';

    //change background and remove animation
    background.src = 'media/coffee_wall_intro.png';
    // background.classList.remove('BG_animation');
 
    //--Barista_Boy
    barista_boy.src = 'media/barista_boy[headshot].png';
    barista_boy.classList.add('b_boy');
    character.appendChild(barista_boy);
    barista_boy_name.classList.add('b_boy_name');
    barista_boy_name.innerText = 'Ka Fei';
    
    //--Barista Girl
    barista_girl.src = 'media/barista_girl[headshot].png';
    barista_girl.classList.add('b_girl');
    character.appendChild(barista_girl);
    barista_girl_name.classList.add('b_girl_name');
    barista_girl_name.innerText = 'Buna';
    
    //set event listeners for name blocks (determines played character)
    barista_boy_name.addEventListener('click', levelSelect);
    barista_girl_name.addEventListener('click', levelSelect);

}
//--------------------------------------------

//Level Select 

//Character selected
var barista = '';

//Create Level-List
var locked = []
var unlocked = []

//Gained from each level
var coffeeServed = 0;
var tipsCollected = 0;

//game interface
var level = document.getElementById('level');

function levelSelect() {

    //Background:
    background.src = 'media/chalkboard.png';

    //Back Button
    gameBtn.style.visibility = 'visible';
    gameBtn.innerText = 'Back to Character Select';
    gameBtn.addEventListener('click', goBack);
    function goBack() {
        document.body.innerHTML = '';
        characterSelection();
    }

    //--Get Character
    barista = this.getAttribute('value');

    //Title
    text.innerText = 'Menu';
    text.classList.add('level_select_title')

    if (barista == 'female') {
        console.log('You play as barista girl'); //replace all sprites with version F
    }else if (barista == 'male') {
        console.log('You play as barista boy'); //replace all sprites with version M
    }
    
    //Clear character selection screen
    barista_boy.style.visibility = 'hidden';
    barista_girl.style.visibility = 'hidden';
    barista_boy.src = '';
    barista_girl.src = '';
    barista_girl_name.style.visibility = 'hidden';
    barista_boy_name.style.visibility = 'hidden';

    //Level Select List:
    //--Removes the hidden element from the level select
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.classList.remove('hide');
        level_select.classList.add('level_select');
    });

    //--Level One
    var lvlOneEasy = document.getElementById('level_One_Easy');
    var lvlOneHard = document.getElementById('level_One_Hard');
    lvlOneEasy.addEventListener('click', gamePlay);
    lvlOneEasy.innerText = "[Easy].............Free Samples";
    lvlOneHard.innerText = "[Hard].............$5000G";
    
}

var game_end = false

//--Record Coffee and money
const record = {

    coffee: 0,
    money: 0

}
coffeeTxt.innerText = record.coffee
moneyTxt.innerText = record.money

function gamePlay() {

    //Back Button
    gameBtn.innerText = 'Back to Level Select'
    gameBtn.addEventListener('click', levelSelect)

    //Enable Characters (add if-else for double players)
    barista_boy.src = "media/bb_restRE.png";
    barista_boy.classList.remove('b_boy');
    barista_boy.classList.add('level_character');

    //placeholder
    barista_boy.style.visibility = 'visible';

    //background
    background.src = 'media/coffee_wall.png';
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.classList.add('hide');
        level_select.classList.remove('level_select');
    });

    //Title
    text.innerText = '';
    text.classList.add('gameplayTitle');

    //show level
    if (level.classList.contains('hide')) {

        level.classList.remove('hide');

    }

    //Timer Function
    let timers = [4, 30]
    var t1 = setInterval(timer, 1000)

    function timer() {

        if (timers[0] > 0) {

            timers[0]--
            text.innerText = 'Shift Begins in: ' + timers[0];

        }

        if (timers[0] == 0) {

            document.onkeydown = pour;

            if (timers[1] >= 25) {

                text.innerText = 'GO! ' + timers[1];

            }else {

                text.innerText = timers[1];

            }
        
            timers[1]--

            if (timers[1] < 0) {
                text.innerText = 'Shift Complete!';
                barista_boy.src = 'media/bb_restRE.png';
                game_end = true
                clearInterval(t1);
            }

        }
        
    };
    
}

//game interface
var coffeePts = document.getElementById('coffeePts');
var moneyPts = document.getElementById('moneyPts');
var fill_bar_inner = document.getElementById('fill');
var bar = 280
var fill = 20

var keyStore = []

function pour(key) {

    if (!game_end) {
        
        if (key != undefined || window.event) {

            if (key.keyCode == 39) {
                //store pressed key in an array
                keyStore.push('right');
                barista_boy.src = 'media/bb_pourRE.png';


            }else if (key.keyCode == 37) {
                keyStore.push('left');
                barista_boy.src = 'media/bb_pourRE.png';
            }

        }

        for (let i = 0; i < keyStore.length; i++) {

            //only takes two values, not one
            if (keyStore.length == 2) {
                
                //sequence must be accurate in order to add to bar
                if (keyStore[0] == 'left' && keyStore[1] == 'right' ) {

                    bar -= fill; //add fill amount to bar
                    fill_bar_inner.style.height = bar + 'px';


                }else {
                    keyStore = []; //set keyStore back to an empty array
                }

                keyStore = [] //set keyStore back to empty

            }else {

                return;

            }
            
        }

        if (bar == 0) { //once bar reaches zero, reset
            bar = 280;
            fill_bar_inner.style.height = bar + 'px';

            record.coffee += 1; //add to coffee
            coffeePts.innerText = 'Coffee +1' //display to user

            record.money += 10; //add to money
            moneyPts.innerText = 'Money +10' //display to user
        }

    }
    
}





// function start(params) {
    
// }
// context.drawImage(sprite, x, y, width, height)

//character selection and start screen function:
//set canvas to a slow pan of a bar animation
//include the title of the game in 50px
//include start button, hide after clicking
//give character boxes an event listener. Once a character is clicked, (if statement) add a glow animation and load character into bartender variable
//continue to game stage pick screen
//add ease in keyframe
//try event.once?


//bar scenery function:
//--have five main stages with two different versions of the level. (meaning, if clicked, another screen will show displaying either normal or hard mode. if either of those are clicked, start game)
//include a back button that takes user back to pick a bar
//display new decor, shelf, and background for each stage
//add ease in keyframe
//have a 'back to character screen' button on page [Just in case]

//gameplay function
//display two buttons in the corner of the screen
//these buttons are triggered by ASCII input
//only have one button active at the time (can be randomized), once one button is activated, it must immediately shut off. Turn back on when the other button has been pressed
//a bar will fill on each key input. Once full, display a drink sliding animation
//also display a looping of people walking by animation (optional)

//store function
//--set an event listener for small store image
//if clicked, canvas changes to new background
//-Elements in store
//--set event listeners on elements for sale
//--if clicked, original image will be replaced with a sold image. replace old elements with the bought ones. (this only occurs if user has enough cash, if user does not have enough cash, a text box will display: Not enough cash);
//--make sure to have an exit button, revert canvas back to tile screen
