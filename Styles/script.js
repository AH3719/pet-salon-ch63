// 1. Array
const pets = [
    { name: "Scooby", age: 7, gender: "Male", service: "Grooming", breed: "Great Dane" },
    { name: "Bella", age: 2, gender: "Female", service: "Nails", breed: "Chihuahua" },
    { name: "Luna", age: 4, gender: "Female", service: "Grooming", breed: "Husky" }
];

// 2. Display Count
function displayPetCount() {
    document.getElementById('total-pets').innerText = pets.length;
}

// 3. Display Names
function displayPetNames() {
    const listElement = document.getElementById('pet-list');
    listElement.innerHTML = ""; 
    
    for (let i = 0; i < pets.length; i++) {
        let li = `<li>${pets[i].name} - ${pets[i].breed}</li>`;
        listElement.innerHTML += li;
    }
}

// 4. Average Age
function calculateAverageAge() {
    let totalAge = 0;
    for (let i = 0; i < pets.length; i++) {
        totalAge += Number(pets[i].age);
    }
    let average = totalAge / pets.length;
    document.getElementById('average-age').innerText = average.toFixed(1);
}

// 5. Register Function
function registerPet() {
    const nameInput = document.getElementById('txt-name').value;
    const ageInput = document.getElementById('txt-age').value;
    const breedInput = document.getElementById('txt-breed').value;
    const genderInput = document.getElementById('txt-gender').value;
    const serviceInput = document.getElementById('txt-service').value;

    if(!nameInput || !ageInput || !breedInput) {
        alert("Please fill in all fields.");
        return;
    }

    const newPet = {
        name: nameInput,
        age: Number(ageInput),
        gender: genderInput,
        service: serviceInput,
        breed: breedInput
    };

    pets.push(newPet);

    displayPetCount();
    displayPetNames();
    calculateAverageAge();

    // Reset form after submission
    document.getElementById('pet-form').reset();
}

// Init
window.onload = function() {
    displayPetCount();
    displayPetNames();
    calculateAverageAge();
};