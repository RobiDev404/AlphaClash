// function removeHomeScreen(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-ground')
//     playSection.classList.remove('hidden');
    
// }

// function showPlayGround(){
    
// }
function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    addBackgroundColorBiId(alphabet);
    

}
function play(){
    
    removeHomeScreen('home-screen');
    showPlayGround('play-ground');
    continueGame();
}