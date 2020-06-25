import '../scss/main.scss';


const glassCounter = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.button__add--js');
const buttonRemove = document.querySelector('.button__remove--js');
const key = new Date().toLocaleString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);

let currentGlassCounter = 0;

if (localStorageValue) {
    currentGlassCounter = localStorageValue;
} else {
    localStorage.getItem(key, 0);
}



buttonAdd.addEventListener('click', () => {
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
});

buttonRemove.addEventListener('click', () => {
    if (currentGlassCounter > 0) {
        currentGlassCounter--;

    }
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);

});