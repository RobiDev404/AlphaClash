function removeHomeScreen(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}

function showPlayGround(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorBiId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400')
}

// creationg alphabet array
function getRandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabetArray[index]
    return alphabet;
    
}
