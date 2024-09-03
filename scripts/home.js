// function removeHomeScreen(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-ground')
//     playSection.classList.remove('hidden');

// }

// function showPlayGround(){

// }
function addKeyboardKeyupHandler(event) {
    const pressedKey = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const alphabet = currentAlphabet.toLocaleLowerCase();
    if (alphabet == pressedKey) {
        console.log("you get a point");
        removeBackgroundColorBiId(alphabet);
        // increase score
        const presentScore = updateScore('current-score');
        const updatedScore = presentScore + 1;
        setInnerTextValue('current-score', updatedScore);
        continueGame();
    }
    else {
        console.log('you press a wrong key');

        const presentLife = updateScore('current-life');
        const updatedLife = presentLife - 1;
        setInnerTextValue('current-life', updatedLife);
        if (presentLife == 0) {
            removeHomeScreen('play-ground');
            showPlayGround('result');
            const presentScore = updateScore('current-score');

            setInnerTextValue('total-score-board', presentScore);
            toPlayAgain();
            

        }
    }
}
document.addEventListener('keyup', addKeyboardKeyupHandler);



function continueGame() {


    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    
    addBackgroundColorBiId(alphabet);


}
function play() {

    removeHomeScreen('home-screen');
    removeHomeScreen('result');
    showPlayGround('play-ground');
    setInnerTextValue('current-life', 5);
    setInnerTextValue('current-score', 0);
   

    continueGame();
}
function toPlayAgain(){
const currentAlphabet = getElementTextById('current-alphabet');
removeBackgroundColorBiId(currentAlphabet);
    
    
    
}