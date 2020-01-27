//Game BG and Overlay
var background = document.getElementById('background');
var text = document.getElementById('text');
var gameBtn = document.getElementById('game');
//------------------------------------------------

//Title Screen
text.innerText = "Casual Baristas"
background.src = 'media/title_screen.jpg'
// background.classList.add('background');
gameBtn.innerText = 'Click to Begin';
gameBtn.addEventListener('click', characterSelection);

//-----------------------------------------------
//--------------------------------------------

//--For Character Selection Function
var barista = document.getElementById('barista');
var baristaStore = [];
var barista_boy = new Image();
var barista_girl = new Image();
var BB_name = document.getElementById('BB_name')
BB_name.style.visibility = 'hidden';
var BG_name = document.getElementById('BG_name')
BG_name.style.visibility = 'hidden';

//Select Character function
function characterSelection() {
   
    //get rid of button and change title
    text.className = '';
    text.classList.add('barista_screen_title');
    text.innerText = 'Choose Your Barista';
    gameBtn.style.visibility = 'hidden';

    //change background and remove animation
    background.src = 'media/coffee_wall_intro.png';
    // background.classList.remove('BG_animation');
 
    //--Barista_Boy
    barista_boy.src = 'media/barista_boy[headshot].png';
    barista_boy.classList.add('b_boy');
    barista.appendChild(barista_boy);
    BB_name.style.visibility = 'visible';
    
    //--Barista Girl
    barista_girl.src = 'media/barista_girl[headshot].png';
    barista_girl.classList.add('b_girl');
    barista.appendChild(barista_girl);
    BG_name.style.visibility = 'visible';
    
    //set event listeners for name blocks (determines played character)
    BB_name.addEventListener('click', useBarista);
    BG_name.addEventListener('click', useBarista);

    //store charcter selection
    function useBarista() {

        if (this.innerText == 'Ka Fei') {
            baristaStore.push('male');

        }else if(this.innerText == 'Buna') {
            baristaStore.push('female');
        }

        levelSelect();
    }

}

//--------------------------------------------
//--------------------------------------------

//For level select function
var coffeeTxt = document.getElementById('coffeeSold');
var moneyTxt = document.getElementById('money');

//Level Select 
function levelSelect() {
    
    //Background:
    background.src = 'media/chalkboard.png';
    
    //Title
    text.innerText = 'Menu';
    text.classList.add('level_select_title')

    //Record Amounts
    coffeeTxt.innerText = coffeeSold
    moneyTxt.innerText = moneyEarned
    
    //Clear character selection screen
    barista_boy.style.visibility = 'hidden';
    barista_girl.style.visibility = 'hidden';
    barista_boy.src = '';
    barista_girl.src = '';
    BB_name.style.visibility = 'hidden';
    BG_name.style.visibility = 'hidden';

    //remove first element if user changes characters
    if (baristaStore.length > 1) {
        baristaStore.shift();
    }

    //Level Select List:
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.style.display = 'inline-block';
    });

    //--Levels
    var lvlOneEasy = document.getElementById('level_One_Easy');
    var lvlOneHard = document.getElementById('level_One_Hard');
    lvlOneEasy.addEventListener('click', gamePlay);
    lvlOneHard.addEventListener('click', gamePlay);
    lvlOneEasy.innerText = "[Easy].............Free";
    lvlOneHard.innerText = "[Hard].............10 Cups";

    var lvlTwoEasy = document.getElementById('level_Two_Easy');
    var lvlTwoHard = document.getElementById('level_Two_Hard');
    // lvlTwoEasy.addEventListener('click', gamePlay);
    // lvlTwoHard.addEventListener('click', gamePlay);
    lvlTwoEasy.innerText = "[Easy].............25 Cups";
    lvlTwoHard.innerText = "[Hard].............45 Cups";

    var lvlThreeEasy = document.getElementById('level_Three_Easy');
    var lvlThreeHard = document.getElementById('level_Three_Hard');
    // lvlThreeEasy.addEventListener('click', gamePlay);
    // lvlThreeHard.addEventListener('click', gamePlay);
    lvlThreeEasy.innerText = "[Easy].............70 Cups";
    lvlThreeHard.innerText = "[Hard].............100 Cups";

    var lvlFourEasy = document.getElementById('level_Four_Easy');
    var lvlFourHard = document.getElementById('level_Four_Hard');
    // lvlFourEasy.addEventListener('click', gamePlay);
    // lvlFourHard.addEventListener('click', gamePlay);
    lvlFourEasy.innerText = "[Easy]........135 Cups; 10000G";
    lvlFourHard.innerText = "[Hard]........175 Cups; 20000G";

    var lvlFiveEasy = document.getElementById('level_Five_Easy');
    var lvlFiveHard = document.getElementById('level_Five_Hard');
    // lvlFiveEasy.addEventListener('click', gamePlay);
    // lvlFiveHard.addEventListener('click', gamePlay);
    lvlFiveEasy.innerText = "[Easy]........220 Cups: 30000G";
    lvlFiveHard.innerText = "[Hard]........320 Cups; 40000G";

    
    //Back Button
    gameBtn.style.visibility = 'visible';
    gameBtn.className = '';
    gameBtn.classList.add('backBtnLS')
    gameBtn.innerText = 'Back to Character Select';
    gameBtn.addEventListener('click', goBackLS);

    function goBackLS() {
        text.className = '';
        gameBtn.className = '';
        document.querySelectorAll('#level_select').forEach(function(level_select) {
            level_select.style.display = 'none';
        });
        barista_boy.style.visibility = 'visible';
        barista_girl.style.visibility = 'visible';
        BB_name.style.visibility = 'visible';
        BG_name.style.visibility = 'visible';

        characterSelection();
    }
}
//--------------------------------------------

//--------------------------------------------

//For Gamplay function
var game_end = false
var level = document.getElementById('level');
level.style.visibility = 'hidden';

//For Gameplay and Pour function
var bar = 280
var pourFx = document.getElementById('coffeePour');

//For Gameplay, Pour, and Store Function
var coffee_maker = document.getElementById('coffee_maker');
var coffee_beans = document.getElementById('coffee_beans');
var coffee = document.getElementById('coffee');

//Gameplay
function gamePlay() {

    let stillPlaying = true
    var playerPoseRest = document.getElementById('playerPoseRest');
    var playerPosePour = document.getElementById('playerPosePour');
    pourFx.src = "media/pour.png" //added here since CSS varies
    
    // --Get Character
    if (baristaStore[0] == 'male') {

        playerPoseRest.src = "media/bb_restRE.png";
        playerPoseRest.classList.add('characterPos_male');
        playerPosePour.src = "media/bb_pourRE.png";
        playerPosePour.classList.add('characterPos_male');
        pourFx.classList.add('pourfx_BB');
        
    }else if (baristaStore[0] == 'female') {

        playerPoseRest.src = "media/bg_restRE.png";
        playerPoseRest.classList.add('characterPos_female');
        playerPosePour.src = "media/bg_pourRE.png";
        playerPosePour.classList.add('characterPos_female');
        pourFx.classList.add('pourfx_BG');

    }

    //First shown
    playerPoseRest.style.visibility = 'visible'; //for back btn
    playerPosePour.style.visibility = 'hidden';
    pourFx.style.visibility = 'hidden';

    //background
    background.src = 'media/coffee_wall.png';
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.style.visibility = 'hidden';
    });
    level.style.visibility = 'visible';

    //Title
    text.innerText = '';
    text.classList.add('gameplayTitle');

    //reset bar for second gameplay
    if (fill_bar_inner.style.height != (280 + 'px')) { 
        fill_bar_inner.style.height = 280 + 'px';
    }

    //Force Stop timer For back button
    if (stillPlaying) {
        
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
                    playerPoseRest.style.visibility = 'visible';
                    playerPosePour.style.visibility = 'hidden';
                    pourFx.style.visibility = 'hidden';
                    game_end = true
                    clearInterval(t1);

                }

            }
            
        };
    }

    //Back Button
    gameBtn.className = '';
    gameBtn.classList.add('backBtnGP');
    gameBtn.innerText = 'Back to Level Select';
    gameBtn.addEventListener('click', goBackGP);
    
    function goBackGP() {
        text.className = '';
        gameBtn.className = '';
        level.style.visibility = 'hidden';
        playerPosePour.style.visibility = 'hidden';
        playerPoseRest.style.visibility = 'hidden';
        playerPoseRest.className = '';
        playerPosePour.className = '';
        pourFx.style.visibility = 'hidden';
        stillPlaying = false;
        clearInterval(t1);
        document.querySelectorAll('#level_select').forEach(function(level_select) {
            level_select.style.visibility = 'visible';
        });
        levelSelect();
    }

}
//--------------------------------------------
//--------------------------------------------

//For Pour Function
var fill_bar_inner = document.getElementById('fill');

var fill = 20

var keyStore = []

var coffeeSold = 0
var moneyEarned = 0
var record = [coffeeSold, moneyEarned]

//Pour Function
function pour(key) {

    if (!game_end) {

        pourFx.style.visibility = 'visible';
        
        if (key != undefined || window.event) {

            playerPoseRest.style.visibility = 'hidden';
            playerPosePour.style.visibility = 'visible';
            
            if (key.keyCode == 39) {
                //store pressed key in an array
                keyStore.push('right');

            }else if (key.keyCode == 37) {
                keyStore.push('left');

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
  
    }

    if (bar == 0) { //once bar reaches zero, reset

        bar = 280;
        fill_bar_inner.style.height = bar + 'px';

        //if coffee maker src = ".../3000"; add two cups
        //else; add 1 cup
        coffeeSold += 1; //add to coffee

        //if coffee beans src =
        moneyEarned += 5; //add to money        


    }

}

//For store function
var goToStore = document.getElementById('store')
goToStore.classList.add('store')
goToStore.addEventListener('click', store)


//Store function
function store() {

    //Background
    background.src = "media/store.png"

    //Title
    text.className = '';
    text.classList.add('store_screen_title');
    text.innerText = 'Welcome!';

    //hide other elements 
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.style.visibility = 'hidden';
    });

    //backBtn
    gameBtn.className = ''
    gameBtn.classList.add('backBtnST')
    gameBtn.addEventListener('click', gobackST)

    //For Sale
    //---------------------------------------------

    //Coffee Machines
    let forSaleCM = new Image();
    forSaleCM.src = "media/coffee-machine3000.png";
    background.appendChild(forSaleCM);
    forSaleCM.addEventListener('click', coffeeMaker);
    //2 extra filled cups

    //Beans
    let forSaleCB = new Image();
    forSaleCB.src = "media/coffee-bag.png";
    background.appendChild(forSaleCB);
    forSaleCB.addEventListener('click', coffeeBeans);
    //money increases by 30G

    //Mugs
    let forSaleC = new Image();
    forSaleC.src = "media/mocha.png";
    background.appendChild(forSaleC);
    forSaleC.addEventListener('click', coffee);
    //money increases by 10G

    //--------------------------------------------

    //Sales
    function coffeeMaker() {
        if (moneyEarned = (6500 + 'G')) {
            coffee_maker.src = forSaleCM.src //change the item
            //grey out item

        }else {
            //flash red
        }
    }

    function coffeeBeans() {
        if (moneyEarned = (3000 + 'G')) {
            coffee_beans.src = forSaleCB.src
            //grey out item

        }else {
            //flash red
        }
    }

    function coffee() {
        if (moneyEarned = (500 + 'G')) {
            coffee.src = forSaleC.src
            //grey out item
            
        }else {
            //flash red
        }
    }

    function gobackST() {
        background.removeChild(forSaleCM);
        background.removeChild(forSaleCB);
        background.removeChild(forSaleC);
    }

}

// function start(params) {
    
// }
// context.drawImage(sprite, x, y, width, height)

//character selection and start screen function:
//set canvas to a slow pan of a bar animation
//include the title of the game in 50px
//include start button, hide after clicking
//give character boxes an event listener. Once a character is clicked, (if statement; load character into barista variable
//continue to game stage pick screen
//add ease in keyframe

//barista scenery function:
//--have five main stages with two different versions of the level. (meaning, if clicked, another screen will show displaying either normal or hard mode. if either of those are clicked, start game)
//include a back button that takes user back to pick a stage
//add ease in keyframe
//have a 'back to character screen' button on page

//gameplay function
//display two buttons in the corner of the screen
//these buttons are triggered by ASCII input
//only have one button active at the time (can be randomized),
//a bar will fill on each key input.
//also display a looping of people walking by animation (optional)

//store function
//--set an event listener for small store image
//if clicked, canvas changes to new background
//-Elements in store
//--set event listeners on elements for sale
//--if clicked, original image will be replaced with a sold image. replace old elements with the bought ones. (this only occurs if user has enough cash, if user does not have enough cash, a text box will display: Not enough cash);
//--make sure to have an exit button
