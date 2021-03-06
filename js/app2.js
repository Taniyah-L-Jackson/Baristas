//Game BG and Overlay
var background = document.getElementById('background');
var text = document.getElementById('text');
var gameCon = document.getElementById('gameCon')
var gameBtn = document.getElementById('game');
//------------------------------------------------

//For loading function
var functions = intro; //makes loading screen call functions anonymously
function loading() {window.onload()} //calls onload function

//Button Control Tells for game functions
var buttons = '';

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

        if (loadWords.classList.contains('explainsSp')) {

            loadWords.classList.remove('explainsSp');

        }else if (loadWords.classList.contains('explainsRL')) {

            loadWords.classList.remove('explainsRL');
            
        }

        //gameplay change
        if (functions == gamePlay) {

            if (buttons == 'SPACE') {

                loadWords.classList.add('explainsSp');
                loadWords.innerText = 'BUTTONS: ' + buttons;

            }else if(buttons == 'RIGHT, LEFT'){

                loadWords.classList.add('explainsRL');
                loadWords.innerText = 'BUTTONS: ' + buttons;

            }

        }
      
        setTimeout(function () {
            
            gameCon.style.display = 'block';
            fadeBack.style.display = 'none';
            loadCup.style.display = 'none';
            loadSteam.style.display = 'none';
            loadWords.style.display = 'none';
            functions();

        }, 3000);

    } else {
        
      document.addEventListener('DOMContentLoaded', ready);

    }
  
}

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
var gamelvl = 'level1E'; //first level
var levelComp = ''; //shown upon completed game run
var lvlNm = ''; //level name

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

    let lvlTwoEasy = document.getElementById('level_Two_Easy');
    let lvlTwoHard = document.getElementById('level_Two_Hard');
    lvlTwoEasy.addEventListener('click', playable);
    lvlTwoHard.addEventListener('click', playable);

    let lvlThreeEasy = document.getElementById('level_Three_Easy');
    let lvlThreeHard = document.getElementById('level_Three_Hard');
    lvlThreeEasy.addEventListener('click', playable);
    lvlThreeHard.addEventListener('click', playable);

    let lvlFourEasy = document.getElementById('level_Four_Easy');
    let lvlFourHard = document.getElementById('level_Four_Hard');
    lvlFourEasy.addEventListener('click', playable);
    lvlFourHard.addEventListener('click', playable);

    let lvlFiveEasy = document.getElementById('level_Five_Easy');
    var lvlFiveHard = document.getElementById('level_Five_Hard');
    lvlFiveEasy.addEventListener('click', playable);
    lvlFiveHard.addEventListener('click', playable);

    //star function
    //--elements to use
    let star = document.querySelectorAll('#completed'); //add stars to span tags
    let listComplete = [];
    for (let i = 0; i < star.length; i++) { //store elements in list
        listComplete.push(star[i])
    }
    
    //--image
    let starImg = new Image();
    starImg.classList.add('star');
    starImg.src = 'media/shine.png';
    lockPrev();

    //playable function for locked levels
    function playable() {
        
        switch (this.id) {

            case ("level_One_Easy"):

                if (gamelvl == 'level1E') {
                    
                    changeBGLVL = 'media/coffee_wall.png';
                    lvlNm = '1-1';
                    buttons = 'SPACE'; //tells what buttons to press
                    functions = gamePlay;
                    loading(); 

                }

                break;

            case ("level_One_Hard"):

                if (gamelvl == 'level1H') {
                    
                    if (this.classList.contains('unavailable')) {

                        this.classList.remove('unavailable');
                    }

                    lvlNm = '1-2';
                    buttons = 'RIGHT, LEFT';
                    functions = gamePlay;
                    loading();
                    
                } else {

                    this.classList.add('unavailable');

                }
                
                break;

            case ("level_Two_Easy"):

                if (gamelvl == 'level2E') {

                    //new background
                    changeBGLVL = 'media/coffee_wall2.png';

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    lvlNm = '2-1';
                    buttons = 'SPACE';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable');

                }

                break;

            case ("level_Two_Hard"):

                if (gamelvl == 'level2H') {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    lvlNm = '2-2';
                    buttons = 'RIGHT, LEFT';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable');

                }

                break

            case ("level_Three_Easy"):

                if (gamelvl == 'level3E') {

                    //new background
                    changeBGLVL = 'media/coffee_wall3.png';

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    lvlNm = '3-1';
                    buttons = 'SPACE';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable');

                }

                break;

            case ("level_Three_Hard"):
                
                if (gamelvl == 'level3H') {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    lvlNm = '3-2';
                    buttons = 'RIGHT, LEFT';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable');

                }

                break;

            case ("level_Four_Easy"):
                
                if (gamelvl == 'level4E') {              

                    //new background
                    changeBGLVL = 'media/coffee_wall4.png';

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    lvlNm = '4-1';
                    buttons = 'SPACE';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable');

                }

                break;

            case ("level_Four_Hard"):

                if (gamelvl == 'level4H') {

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    lvlNm = '4-2';
                    buttons = 'RIGHT, LEFT';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable');

                }

                break;

            case ("level_Five_Easy"):

                if (gamelvl == 'level5E') {

                    //new background
                    changeBGLVL = 'media/coffee_wall5.png';

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    }

                    lvlNm = '5-1';
                    buttons = 'SPACE';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable')

                }

                break;

            case ("level_Five_Hard"):
                
                if (gamelvl == 'level5H') {                

                    //if the class is there
                    if (this.classList.contains('unavailable')) {
                        this.classList.remove('unavailable');
                    } 
                    
                    lvlNm = 'Final';
                    buttons = 'WASD';
                    functions = gamePlay;
                    loading();
        
                }else {

                    this.classList.add('unavailable')

                }
       
                break;
                
        }   

    }
    //ISSUE: STARS WILL NOT SHOW!
    //for lock function

    //lock function for relocking win levels
    function lockPrev() { 

        let lvlValues = [lvlOneEasy.value, lvlOneHard.value, lvlTwoEasy.value, lvlTwoHard.value, lvlTwoHard.value, lvlThreeEasy.value, lvlThreeHard.value, lvlThreeHard.value, lvlFourEasy.value, lvlFourHard.value, lvlFiveEasy.value, lvlFiveHard.value];

        let lvlTitles = ['level1E', 'level1H', 'level2E', 'level2H', 'level3E', 'level3H', 'level4E', 'level4H', 'level5E', 'level5H', 'complete'];

        //lock prev levels & unlock next levels
        if (coffeeSold >= lvlValues[1]) {

            lvlValues.shift();
            lvlTitles.shift();

        }

        gamelvl = lvlTitles[0]; //shift levels available

        switch (gamelvl) { 

            case 'level1H':

                //star passed level
                listComplete[0].appendChild(starImg); //add star to passed levels
                break;
        
            case 'level2E':

                //star passed level
                listComplete[1].appendChild(starImg); //add star to passed levels
                break;

            case 'level2H': 

                //star passed level
                listComplete[2].appendChild(starImg); //add star to passed levels
                break;

            case 'level3E':

                //star passed level
                listComplete[3].appendChild(starImg); //add star to passed levels
                break;

            case 'level3H':

                //star passed level
                listComplete[4].appendChild(starImg); //add star to passed levels
                break;

            case 'level4E':

                //star passed level
                listComplete[5].appendChild(starImg); //add star to passed levels
                break;
            
            case 'level4H':

                //star passed level
                listComplete[6].appendChild(starImg); //add star to passed levels
                break;

            case 'level5E':

                //star passed level
                listComplete[7].appendChild(starImg); //add star to passed levels
                break;

            case 'level5H':
                
                //star passed level
                listComplete[8].appendChild(starImg); //add star to passed levels
                break;

        }

        if (gamelvl == 'complete') {

            listComplete[9].appendChild(starImg); //only for the last level
            
            levelComp = prompt("Congrats! You're a barista pro now! Do you wish to re-live your journey, or are you done serving? [Turn on Coffee Machine]; [Turn off Coffee Machine]");

            if (levelComp = 'Turn on Coffee Machine') {
                
                gamelvl = 'level1E';
                for (let i = 0; i < listComplete.length; i++) {
                
                    listComplete[i].removeChild(starImg)
                    
                }

            }else {
                
                text.innerText = 'Complete!';

            }
            
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
var pointUp = document.getElementById('pointUp');

//For Gameplay, Pour, and Store Function
var coffee_maker = document.getElementById('coffee_maker');
var coffee_beans = document.getElementById('coffee_beans');
var coffee_mug = document.getElementById('coffee');

//Level Settings
var lvlSetn = ''; //fires functions based on level difficulty

function lvlMode() {

    switch (gamelvl) {
        case 'level1E':
            
            lvlSetn = pourE1;
            break;
    
        case 'level1H':

            lvlSetn = pourH1;
            break;

        case 'level2E':
        
            lvlSetn = pourE2;
            break;
    
        case 'level2H':

            lvlSetn = pourH2;
            break;

        case 'level3E':
        
            lvlSetn = pourE3;
            break;
    
        case 'level3H':

            lvlSetn = pourH3;
            break;

        case 'level4E':
        
            lvlSetn = pourE4;
            break;
    
        case 'level4H':

            lvlSetn = pourH4;
            break;

        case 'level5E':
        
            lvlSetn = pourE5;
            break;
    
        case 'level5H':

            lvlSetn = pourH5;
            break;
    }


}

//--------------------------------------------------------------
//--------------------------------------------------------------

//Gameplay
function gamePlay() {

    let stillPlaying = true;
    var playerPoseRest = document.getElementById('playerPoseRest');
    var playerPosePour = document.getElementById('playerPosePour');
    pourFx.src = "media/pour.png" //added here since CSS classes varies
    pointUp.innerText = ''; //cleared upon reload

    //level mode
    lvlMode();
    
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

    //Timer Function
    var timers = [4, 30]

    //Force Stop timer For back button
    if (stillPlaying) {
        game_end = false;

        //reset bar for second gameplay
        if (fill_bar_inner.style.height != (280 + 'px') || bar != 280) { 
            fill_bar_inner.style.height = 280 + 'px';
            bar = 280
        }

        var t1 = setInterval(timer, 1000)

        function timer() {

            if (timers[0] > 0) {

                timers[0]--
                text.innerText = 'Begin shift: [' + lvlNm + '] in: ' + timers[0];

            }

            if (timers[0] == 0) {

                document.onkeyup = lvlSetn;

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
                    document.onkeyup = null;

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
        document.onkeyup = null; //stop the keydown
        stillPlaying = false;
        game_end = true;
        clearInterval(t1); //clear timers
        document.querySelectorAll('#level_select').forEach(function(level_select) {
            level_select.style.display = 'block';
        });
        functions = levelSelect;
        loading();
    }

}

//--------------------------------------------
//--------------------------------------------

//For all Pour Functions
var fill_bar_inner = document.getElementById('fill');

//Records
var fill = 10;
var coffeeSold = 0;
var moneyEarned = 0;

//From shop
var moneyAmt = 2; //starting amount (increases by upgrades)
var coffeeAmt = 1; //starting amount (increases by upgrades)

//keylist for level functions
// var keylist

//Each level has their own function

//Pour Function (Easy 1)
function pourE1(key) {

    if (!game_end) {
        
        pourFx.style.display = 'block';
        pointUp.innerText = '';
        
        if (key != undefined || window.event) {

            playerPoseRest.style.display = 'none';
            playerPosePour.style.display = 'block';

            //for easyMode
    
            if (key.keyCode == 32) {

                bar -= fill; //add fill amount to bar
                fill_bar_inner.style.height = bar + 'px';

            }
            
        }

    }

    if (bar == 0) { //once bar reaches zero, reset

        bar = 280;
        fill_bar_inner.style.height = bar + 'px';
        pointUp.innerText = 'coffeeUp! moneyUp!';
        playerPoseRest.style.display = 'block';
        playerPosePour.style.display = 'none';
        pourFx.style.display = 'none';

        coffeeSold += coffeeAmt; //increase coffee points
        moneyEarned += moneyAmt; //increase money amount

    }

}

//--------------------------------------------------------------------
//--------------------------------------------------------------------

//for pour function (Hard 1)
var keyList1 = [];
if (keyList1.length != 0) { //for reload
    keylist1 = [];
}

//Pour Function (Hard 1)
function pourH1(key) {

    if (!game_end) {
        
        pourFx.style.display = 'block';
        pointUp.innerText = '';
        
        if (key != undefined || window.event) {

            playerPoseRest.style.display = 'none';
            playerPosePour.style.display = 'block';
            keyList1.push(key.keyCode) //push keypresses to a list     
                
            //must have this exact input in order to fill bar
            if (keyList1[0] == 37) {

                if (keyList1[1] == 39) {

                    bar -= fill; //add fill amount to bar
                    fill_bar_inner.style.height = bar + 'px';
                    keyList1 = []; //empty list after each input

                }
                
            }else {

                keyList1 = []; //discard if incorrect
            }

            if (keyList1.length > 2) { //dont overfill list

                keyList1 = [];
            }

        }

    }

    if (bar == 0) { //once bar reaches zero, reset

        bar = 280;
        fill_bar_inner.style.height = bar + 'px';
        pointUp.innerText = 'coffeeUp! moneyUp!';
        playerPoseRest.style.display = 'block';
        playerPosePour.style.display = 'none';
        pourFx.style.display = 'none';

        
        coffeeSold += coffeeAmt; //increase coffee points
        moneyEarned += moneyAmt; //increase money amount

    }

}

//for pour function (Easy 2)
var keyList2 = [];
if (keyList2.length != 0) { //for reload
    keylist2 = [];
}

//Pour Function (Easy 2)
function pourE2(key) {

    if (!game_end) {
        
        pourFx.style.display = 'block';
        pointUp.innerText = '';
        
        if (key != undefined || window.event) {

            playerPoseRest.style.display = 'none';
            playerPosePour.style.display = 'block';
            keyList2.push(key.keyCode) //push keypresses to a list     
   
            if (keyList2[0] == 32) {

                if (keyList2[1] == 32) {

                    bar -= fill; //add fill amount to bar
                    fill_bar_inner.style.height = bar + 'px';
                    keyList2 = []; //empty list after each input

                }
                
            }

            if (keyList2.length > 2) { //dont overfill list

                keyList2 = [];
            }
            
        }

    }

    if (bar == 0) { //once bar reaches zero, reset

        bar = 280;
        fill_bar_inner.style.height = bar + 'px';
        pointUp.innerText = 'coffeeUp! moneyUp!';
        playerPoseRest.style.display = 'block';
        playerPosePour.style.display = 'none';
        pourFx.style.display = 'none';

        coffeeSold += coffeeAmt; //increase coffee points
        moneyEarned += moneyAmt; //increase money amount

    }

}


    
//----------------------------------
//----------------------------------

//Store
var storeBtn = document.getElementById('storeBtn');
var storeSetup = document.getElementById('store');
var moneyAvailable = document.getElementById('moneyAvailable');

//price tags
var CMTag = document.getElementById('CM');
var CBTag = document.getElementById('CB');
var MTag = document.getElementById('M');


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

    //increases coffee cups
    function coffeeMaker() {
        
        if (moneyEarned >= 2500) { //test

            text.classList.add('shrink');
            text.innerText = 'Confirm purchase with ENTER. SPACE to cancel';

            document.onkeydown = function confirm(key) {

                if (key.keyCode == 13) {
                    
                    coffee_maker.src = forSaleCM.src //change the item
                    forSaleCM.classList.add('bought');//grey out item
                    forSaleCM.classList.remove('cantBuy');
                    text.innerText = 'Item Purchased';
                    moneyEarned -= 2500;
                    forSaleCM.removeEventListener('click', coffeeMaker);
                    CMTag.classList.add('bought');

                }else if(key.keyCode == 32){
                    text.innerText = 'Purchase Cancelled';
                }

            }

        }else {

            text.innerText = 'Not Enough G'
            forSaleCM.classList.add('cantBuy');
        }
        
    }

    //increses money
    function coffeeBeans() {

        if (moneyEarned >= 1000) { //test

            text.classList.add('shrink');
            text.innerText = 'Confirm purchase with ENTER. SPACE to cancel';

            document.onkeydown = function confirm(key) {

                if (key.keyCode == 13) {
                    
                    coffee_beans.src = forSaleCB.src
                    forSaleCB.classList.add('bought');
                    forSaleCB.classList.remove('cantBuy');
                    text.innerText = 'Item Purchased';
                    moneyEarned -= 1000;
                    forSaleCB.removeEventListener('click', coffeeBeans);
                    CBTag.classList.add('bought');

                }else if(key.keyCode == 32){
                    text.innerText = 'Purchase Cancelled';
                }

            }

        }else {

            text.innerText = 'Not Enough G'
            forSaleCB.classList.add('cantBuy');
        }

    }

    //increases money
    function coffeeMug() {

        if (moneyEarned >= 500) { //test

            text.classList.add('shrink');
            text.innerText = 'Confirm purchase with ENTER. SPACE to cancel';

            document.onkeydown = function confirm(key) {

                if (key.keyCode == 13) {
                    
                    coffee_mug.src = forSaleC.src
                    forSaleC.classList.add('bought');
                    forSaleC.classList.remove('cantBuy');
                    text.innerText = 'Item Purchased';
                    moneyEarned -= 500;
                    forSaleC.removeEventListener('click', coffeeBeans);
                    CTag.classList.add('bought');

                }else if(key.keyCode == 32){
                    text.innerText = 'Purchase Cancelled';
                }

            }

        }else {

            text.innerText = 'Not Enough G'
            forSaleC.classList.add('cantBuy');
        }

    }

    //increase money
    if (coffee_beans.src == 'media/coffee-bag.png') {
    
        moneyAmt = 10;

    }else if(coffee_mug.src == 'media/mocha.png') {

        moneyAmt = 6;

    }

    //increase Coffee points
    if (coffee_maker.src == 'media/coffee-machine3000.png') {

        coffeeAmt = 3;

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
