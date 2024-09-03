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

function removeBackgroundColorBiId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-400')
   
}
function updateScore(elementId){
    let element = document.getElementById(elementId);
    const elementText = element.innerText;
    const presentScore = parseFloat(elementText);
    return presentScore;


}
function setInnerTextValue(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
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
function getElementTextById(elementId){
    const elementText = document.getElementById(elementId);
    const text = elementText.innerText;
    return text;
    
}
