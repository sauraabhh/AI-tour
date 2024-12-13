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

// Number of Rooms
const roomsInput = document.getElementById('no-of-rooms') as HTMLInputElement | null;
const increaseRoomsButton = document.getElementById('increase-rooms') as HTMLButtonElement | null;
const decreaseRoomsButton = document.getElementById('decrease-rooms') as HTMLButtonElement | null;

if (roomsInput && increaseRoomsButton && decreaseRoomsButton) {
    increaseRoomsButton.addEventListener('click', () => {
        roomsInput.value = (parseInt(roomsInput.value) + 1).toString();
    });

    decreaseRoomsButton.addEventListener('click', () => {
        if (parseInt(roomsInput.value) > 1) {
            roomsInput.value = (parseInt(roomsInput.value) - 1).toString();
        }
    });
}
