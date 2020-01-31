//Game BG and Overlay
var background = document.getElementById('background');
var text = document.getElementById('text');
var gameCon = document.getElementById('gameCon')
var gameBtn = document.getElementById('game');
//------------------------------------------------

//For loading function
var functions = intro; //makes loading screen call functions anonymously
function loading() {window.onload()} //calls onload function

//For Music and Sounds function
var audio = new Audio('3763-five-card-shuffle-by-kevin-macleod.mp3');
audio.play();
//------------------------------------------------

//loading
window.onload = function ready() {

    if (document.readyState == 'complete'){ //page is fully loaded

        gameCon.style.display = 'none';
        let fadeBack = document.getElementById('fadeBack')
        let loadCup = document.getElementById('loadCup');
        let loadSteam = document.getElementById('loadSteam');
        let loadWords = document.getElementById('loadWords');

        background.src = 'media/loadingScreen.png';
        fadeBack.style.display = 'block';
        loadCup.style.display = 'block';
        loadSteam.style.display = 'block';
        loadWords.style.display = 'block';
        loadWords.innerText = 'Loading'

        if (loadWords.classList.contains('explains')) {
            loadWords.classList.remove('explains');
        }

        if (functions == gamePlay) {
            loadWords.classList.add('explains');
            loadWords.innerText = 'USE "SPACE"';
        }
      
        setTimeout(function () {
            
            gameCon.style.display = 'block';
            fadeBack.style.display = 'none';
            loadCup.style.display = 'none';
            loadSteam.style.display = 'none';
            loadWords.style.display = 'none';
            audio.autoplay = true;
            functions();

    
        }, 3000);

    } else {
        
      document.addEventListener('DOMContentLoaded', ready);

    }
  
}

//--------------------------------------------------------------

//Music and sounds function

// function togglePlay() {
//   if (isPlaying) {
//     myAudio.pause();
//   } else {
//     myAudio.autoplay();
//   }
// };

//--------------------------------------------------------------
//--------------------------------------------------------------

//for Title Screen function
var titleScreen = document.getElementById('titleScreen');

//Title Screen function
function intro() {
    background.src = 'media/title_screen.jpg'
    titleScreen.style.display = 'block';
    text.innerText = "Casual Baristas"
    gameBtn.innerText = 'Click to Begin';
    gameBtn.addEventListener('click', characterSelection);

}
// intro();
//-----------------------------------------------
//--------------------------------------------

//For Character Selection Function
var barista = document.getElementById('barista');
var baristaStore = [];

//Select Character function
function characterSelection() {

    //display
    barista.style.display = 'block';
   
    //title
    text.className = '';
    text.classList.add('barista_screen_title');
    text.innerText = 'Choose Your Barista';

    //button
    gameBtn.style.display = 'none'

    //background
    background.src = 'media/coffee_wall_intro.png';
    // background.classList.remove('BG_animation');
 
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

        functions = levelSelect //change function called
        loading()
    }

}

//--------------------------------------------
//--------------------------------------------

//For level select function
var coffeeTxt = document.getElementById('coffeeSold');
var moneyTxt = document.getElementById('money');
var record = [coffeeSold, moneyEarned]
var changeBGLVL = ''

//Level Select 
function levelSelect() {
    
    //Background:
    background.src = 'media/chalkboard.png';
    
    //Title
    text.className = '';
    text.innerText = 'Menu';
    text.classList.add('level_select_title')

    //button
    //--gameBtn
    gameBtn.style.display = 'block';
    gameBtn.className = '';
    gameBtn.classList.add('backBtnLS')
    gameBtn.innerText = 'Back to Character Select';
    gameBtn.removeEventListener('click', characterSelection);
    gameBtn.addEventListener('click', goBackLS);
    //--storeBtn
    storeBtn.style.display = 'block';
    storeBtn.innerText = 'Store';
    storeBtn.classList.add('storeBtn')
    storeBtn.addEventListener('click', store)

    //Record Amounts
    coffeeTxt.innerText = coffeeSold
    moneyTxt.innerText = moneyEarned
    
    //Clear character selection screen
    barista.style.display = 'none';

    //remove first element if user changes characters
    if (baristaStore.length > 1) {
        baristaStore.shift();
    }

    //Level Select List:
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.style.display = 'block';
    });

    //--Levels
    let lvlOneEasy = document.getElementById('level_One_Easy');
    let lvlOneHard = document.getElementById('level_One_Hard');
    lvlOneEasy.addEventListener('click', playable);
    lvlOneHard.addEventListener('click', playable);
    lvlOneHardValues = {
        neededCoffee: 10,
        neededMoney: 30
    }

    let lvlTwoEasy = document.getElementById('level_Two_Easy');
    let lvlTwoHard = document.getElementById('level_Two_Hard');
    lvlTwoEasy.addEventListener('click', playable);
    lvlTwoEasyValues = {
        neededCoffee: 25,
        neededMoney: 100
    }
    lvlTwoHard.addEventListener('click', playable);
    lvlTwoHardValues = {
        neededCoffee: 45,
        neededMoney: 300
    }

    let lvlThreeEasy = document.getElementById('level_Three_Easy');
    let lvlThreeHard = document.getElementById('level_Three_Hard');
    lvlThreeEasy.addEventListener('click', playable);
    lvlThreeEasyValues = {
        neededCoffee: 70,
        neededMoney: 500
    }
    lvlThreeHard.addEventListener('click', playable);
    lvlThreeHardValues = {
        neededCoffee: 100,
        neededMoney: 800
    }

    let lvlFourEasy = document.getElementById('level_Four_Easy');
    let lvlFourHard = document.getElementById('level_Four_Hard');
    lvlFourEasy.addEventListener('click', playable);
    lvlFourEasyValues = {
        neededCoffee: 135,
        neededMoney: 10000
    }
    lvlFourHard.addEventListener('click', playable);
    lvlFourHardValues = {
        neededCoffee: 175,
        neededMoney: 20000
    }

    let lvlFiveEasy = document.getElementById('level_Five_Easy');
    var lvlFiveHard = document.getElementById('level_Five_Hard');
    lvlFiveEasy.addEventListener('click', playable);
    lvlFiveEasyValues = {
        neededCoffee: 220,
        neededMoney: 30000
    }
    lvlFiveHard.addEventListener('click', playable);
    lvlFiveHardValues = {
        neededCoffee: 320,
        neededMoney: 40000
    }

    //playable function for locked levels
    function playable() {

        switch (this.id) {

            case ("level_One_Easy"):

                changeBGLVL = 'media/coffee_wall.png';
                functions = gamePlay
                loading();
                break;

            case ("level_One_Hard"):

                if (coffeeSold >= lvlOneHardValues.neededCoffee && moneyEarned >= lvlOneHardValues.neededMoney) {
                    
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    coffeeSold -= 10
                    moneyEarned -= 30
                    
                    functions = gamePlay
                    loading();
                    
                }else {
                    this.classList.add('unavailable')
                }
                break;

            case ("level_Two_Easy"):

                changeBGLVL = 'media/coffee_wall2.png';

                if (coffeeSold >= lvlTwoEasyValues.neededCoffee && moneyEarned >= lvlTwoEasyValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    coffeeSold -= 25
                    moneyEarned -= 100
                
                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }
                break;

            case ("level_Two_Hard"):

                if (coffeeSold >= lvlTwoHardValues.neededCoffee && moneyEarned >= lvlTwoHardValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }
                
                    coffeeSold -= 45
                    moneyEarned -= 300

                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }
                break

            case ("level_Three_Easy"):

                changeBGLVL = 'media/coffee_wall3.png';

                if (coffeeSold >= lvlThreeEasyValues.neededCoffee && moneyEarned >= lvlThreeEasyValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    coffeeSold -= 70
                    moneyEarned -= 500
                
                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }                
                break;

            case ("level_Three_Hard"):

                if (coffeeSold >= lvlThreeHardValues.neededCoffee && moneyEarned >= lvlThreeHardValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    coffeeSold -= 100
                    moneyEarned -= 800
                
                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }
                break;

            case ("level_Four_Easy"):

                changeBGLVL = 'media/coffee_wall4.png';

                if (coffeeSold >= lvlFourEasyValues.neededCoffee && moneyEarned >= lvlFourEasyValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    coffeeSold -= 135
                    moneyEarned -= 10000
                
                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }
                break;

            case ("level_Four_Hard"):

                if (coffeeSold >= lvlFourHardValues.neededCoffee && moneyEarned >= lvlFourHardValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    coffeeSold -= 175
                    moneyEarned -= 20000
                
                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }
                break;

            case ("level_Five_Easy"):

                changeBGLVL = 'media/coffee_wall5.png';

                if (coffeeSold >= lvlFiveEasyValues.neededCoffee && moneyEarned >= lvlFiveEasyValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    coffeeSold -= 220
                    moneyEarned -= 30000
                
                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }
                break;

            case ("level_Five_Hard"):

                if (coffeeSold == lvlFiveHardValues.neededCoffee && moneyEarned == lvlFiveHardValues.neededMoney) {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    } 

                    coffeeSold -= 320
                    moneyEarned -= 40000
                
                    functions = gamePlay
                    loading();
        
                }else {
                    this.classList.add('unavailable')
                }
                break;
        
            
        }

    }



}

//Back Button function (for above function)
function goBackLS() {
    text.className = '';
    gameBtn.className = '';
    gameBtn.removeEventListener('click', goBackLS);
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.style.display = 'none';
    });
    barista.style.display = 'block';
    storeBtn.style.display = 'none';
    functions = characterSelection
    loading();
}

//--------------------------------------------
//if this.addevenlistener = lvl whichever,change background
//--------------------------------------------

//For Gamplay function
var game_end = ''
var level = document.getElementById('level');
level.style.display = 'none';

//For Gameplay and Pour function
var bar = 280
var pourFx = document.getElementById('coffeePour');

//For Gameplay, Pour, and Store Function
var coffee_maker = document.getElementById('coffee_maker');
var coffee_beans = document.getElementById('coffee_beans');
var coffee_mug = document.getElementById('coffee');

//Gameplay
function gamePlay() {

    let stillPlaying = true;
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
    playerPoseRest.style.display = 'block'; //for back btn
    playerPosePour.style.display = 'none';
    pourFx.style.display = 'none';

    //outer elements
    background.src = changeBGLVL
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.style.display = 'none';
    });
    level.style.display = 'block'

    //Title
    text.innerText = '';
    text.classList.add('gameplayTitle');

    //Buttons
    //--gameBtn
    gameBtn.className = '';
    gameBtn.classList.add('backBtnGP');
    gameBtn.innerText = 'Back to Level Select';
    gameBtn.removeEventListener('click', goBackLS);
    gameBtn.addEventListener('click', goBackGP);
    //--storeBtn
    storeBtn.style.display = 'none';

    //Force Stop timer For back button
    if (stillPlaying) {
        game_end = false;

        //reset bar for second gameplay
        if (fill_bar_inner.style.height != (280 + 'px') || bar != 280) { 
            fill_bar_inner.style.height = 280 + 'px';
            bar = 280
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
                    playerPoseRest.style.display = 'block';
                    playerPosePour.style.display = 'none';
                    pourFx.style.display = 'none';
                    game_end = true
                    clearInterval(t1);

                }

            }
            
        };

    }
    
    function goBackGP() {
        text.className = '';
        gameBtn.className = '';
        background.src = '';
        gameBtn.removeEventListener('click', goBackGP);
        playerPoseRest.className = '';
        playerPosePour.className = '';
        level.style.display = 'none';
        pourFx.style.display = 'none';
        document.onkeydown = null; //stop the keydown
        stillPlaying = false;
        game_end = true;
        clearInterval(t1);
        document.querySelectorAll('#level_select').forEach(function(level_select) {
            level_select.style.display = 'block';
        });
        functions = levelSelect
        loading();
    }

}
//--------------------------------------------
//--------------------------------------------

//For Pour Function
var fill_bar_inner = document.getElementById('fill');

var fill = 10
var coffeeSold = 0
var moneyEarned = 0

//Pour Function
function pour(key) {

    if (!game_end) {

        pourFx.style.display = 'block';
        
        if (key != undefined || window.event) {

            playerPoseRest.style.display = 'none';
            playerPosePour.style.display = 'block';
            
            if (key.keyCode == 32) {

                bar -= fill; //add fill amount to bar
                fill_bar_inner.style.height = bar + 'px';

            }


        }
  
    }

    if (bar == 0) { //once bar reaches zero, reset

        bar = 280;
        fill_bar_inner.style.height = bar + 'px';

        //increase money
        if (coffee_beans.src == 'media/coffee-bag.png') {
            
            moneyEarned += 30

        }else if(coffee_mug.src == 'media/mocha.png') {

            moneyEarned += 5;

        }else {
            moneyEarned += 2 
        }

        //increase Coffee points
        if (coffee_maker.src == 'media/coffee-machine3000.png') {

            coffeeSold += 3

        }else {

            coffeeSold += 1

        }      

    }

}
//----------------------------------
//----------------------------------

//Store
var storeBtn = document.getElementById('storeBtn');
var storeSetup = document.getElementById('store');
var moneyAvailable = document.getElementById('moneyAvailable');

//Store function
function store() {

    moneyAvailable.innerText = moneyEarned;

    //display
    storeSetup.style.display = 'block';

    //Background
    background.src = "media/store.png";

    //Title
    text.className = '';
    text.classList.add('store_screen_title');
    text.innerText = 'Welcome!';

    //hide other elements 
    document.querySelectorAll('#level_select').forEach(function(level_select) {
        level_select.style.display = 'none';
    });

    //Back Btn
    gameBtn.style.display = 'none'
    // storeBtn.className = ''
    storeBtn.classList.add('backBtnST')
    storeBtn.addEventListener('click', gobackST)
    storeBtn.removeEventListener('click', store)
    storeBtn.innerText = "Back to Level Select"

    //For Sale
    //---------------------------------------------

    //Coffee Machines
    let forSaleCM = document.getElementById('coffeeMachine');
    forSaleCM.addEventListener('click', coffeeMaker);
    //two extra cups per fill

    //Beans
    let forSaleCB = document.getElementById('coffeeBeans');
    forSaleCB.addEventListener('click', coffeeBeans);
    //money increases by 30G

    //Mugs
    let forSaleC = document.getElementById('mug');
    forSaleC.addEventListener('click', coffeeMug);
    //money increases by 10G

    //--------------------------------------------

    //Sales
    function coffeeMaker() {
        if (moneyEarned >= 1000) { //test

            text.classList.add('shrink');
            text.innerText = 'Confirm purchase with ENTER. SPACE to cancel';

            document.onkeydown = function confirm(key) {

                if (key.keyCode == 13) {
                    
                    coffee_maker.src = forSaleCM.src //change the item
                    forSaleCM.classList.add('bought');//grey out item
                    forSaleCM.classList.remove('unavailable');
                    text.innerText = 'Item Purchased';
                    moneyEarned -= 1000;
                    forSaleCM.removeEventListener('click', coffeeMaker);

                }else if(key.keyCode == 32){
                    text.innerText = 'Purchase Cancelled';
                }

            }

        }else {

            text.innerText = 'Not Enough G'
            forSaleCM.classList.add('unavailable');
        }
        
    }

    function coffeeBeans() {

        if (moneyEarned >= 3000) { //test

            text.classList.add('shrink');
            text.innerText = 'Confirm purchase with ENTER. SPACE to cancel';

            document.onkeydown = function confirm(key) {

                if (key.keyCode == 13) {
                    
                    coffee_beans.src = forSaleCB.src
                    forSaleCB.classList.add('bought');
                    forSaleCB.classList.remove('unavailable');
                    text.innerText = 'Item Purchased';
                    moneyEarned -= 3000;
                    forSaleCB.removeEventListener('click', coffeeBeans);

                }else if(key.keyCode == 32){
                    text.innerText = 'Purchase Cancelled';
                }

            }

        }else {

            text.innerText = 'Not Enough G'
            forSaleCB.classList.add('unavailable');
        }

    }

    function coffeeMug() {

        if (moneyEarned >= 500) { //test

            text.classList.add('shrink');
            text.innerText = 'Confirm purchase with ENTER. SPACE to cancel';

            document.onkeydown = function confirm(key) {

                if (key.keyCode == 13) {
                    
                    coffee_mug.src = forSaleC.src
                    forSaleC.classList.add('bought');
                    forSaleC.classList.remove('unavailable');
                    text.innerText = 'Item Purchased';
                    moneyEarned -= 500;
                    forSaleC.removeEventListener('click', coffeeBeans);

                }else if(key.keyCode == 32){
                    text.innerText = 'Purchase Cancelled';
                }

            }

        }else {

            text.innerText = 'Not Enough G'
            forSaleC.classList.add('unavailable');
        }

    }

    gameBtn.addEventListener('click', gobackST)

    function gobackST() {
        text.className = '';
        gameBtn.className = '';
        storeBtn.className = '';
        gameBtn.style.display = 'block'
        storeSetup.style.display = 'none';
        storeBtn.removeEventListener('click', gobackST)
        document.querySelectorAll('#level_select').forEach(function(level_select) {
            level_select.style.display = 'block';
        });
        levelSelect()
    }

}

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
