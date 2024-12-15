// Number of Persons
const personsInput = document.getElementById('no-of-persons') as HTMLInputElement | null;
const increasePersonsButton = document.getElementById('increase-persons') as HTMLButtonElement | null;
const decreasePersonsButton = document.getElementById('decrease-persons') as HTMLButtonElement | null;

if (personsInput && increasePersonsButton && decreasePersonsButton) {
    increasePersonsButton.addEventListener('click', () => {
        personsInput.value = (parseInt(personsInput.value) + 1).toString();
    });

    decreasePersonsButton.addEventListener('click', () => {
        if (parseInt(personsInput.value) > 1) {
            personsInput.value = (parseInt(personsInput.value) - 1).toString();
        }
    });
}



const mainDiv = document.getElementById('mainDiv') as HTMLElement | null;
const optionsDiv = document.getElementById('optionsDiv') as HTMLElement | null;

if (mainDiv && optionsDiv) {
    mainDiv.addEventListener('click', () => {
        optionsDiv.style.display = optionsDiv.style.display === 'block' ? 'none' : 'block';
    });
} else {
    console.error("Either 'mainDiv' or 'optionsDiv' element is missing.");
}



