// object literal for the Pet Salon
const salon = {
    name: "Angel Paws - Pet Salon",
    phone: "555-123-4567",
    address: {
        street: "University Ave",
        number: "768-B"
    }
};

// object constructor (The Class for creating new pets)
function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

// Array to store pets
const pets = [];

// 3 pets using the Constructor ---
const pet1 = new Pet("Scooby", 10, "Male", "Great Dane", "Grooming", "Dog");
const pet2 = new Pet("Daisy", 5, "Female", "Austrialian Shepard", "Vaccines", "Dog");
const pet3 = new Pet("Luna", 7, "Female", "Husky", "Nails", "Dog");
const pet4 = new Pet("Dewey", 3, "Male", "Tabby", "VIP Package", "Cat");

// Add them to the array
pets.push(pet1, pet2, pet3, pet4);


// --- FUNCTION 1: Display Salon Info (For index.html) ---
function displaySalonInfo() {
    const salonNameVars = document.getElementsByClassName("salon-name-display");
    const salonAddressVars = document.getElementsByClassName("salon-address-display");
    const salonPhoneVars = document.getElementsByClassName("salon-phone-display");

    // Update all elements with these classes (in case used in header and footer)
    for(let i=0; i<salonNameVars.length; i++) {
        salonNameVars[i].innerText = salon.name;
    }
    for(let i=0; i<salonAddressVars.length; i++) {
        salonAddressVars[i].innerText = `${salon.address.number} ${salon.address.street}`;
    }
    for(let i=0; i<salonPhoneVars.length; i++) {
        salonPhoneVars[i].innerText = salon.phone;
    }
}

// --- FUNCTION 2: Display Pets in List (For register.html) ---
function displayPetNames() {
    // Check if the list exists (so this doesn't error on index.html)
    const listElement = document.getElementById('pet-list');
    if (listElement) {
        listElement.innerHTML = ""; // Clear list
        
        for (let i = 0; i < pets.length; i++) {
            // Using a template string to show more info
            let li = `
            <li>
                <strong>${pets[i].name}</strong> (${pets[i].type}) 
                - ${pets[i].breed} 
                - <span class="service-tag">${pets[i].service}</span>
            </li>`;
            listElement.innerHTML += li;
        }
        
        // Update count
        document.getElementById('total-pets').innerText = pets.length;
    }
}

// --- FUNCTION 3: Register New Pet ---
function registerPet() {
    // 1. Get values
    const nameInput = document.getElementById('txt-name');
    const ageInput = document.getElementById('txt-age');
    const breedInput = document.getElementById('txt-breed');
    const genderInput = document.getElementById('txt-gender');
    const serviceInput = document.getElementById('txt-service');
    const typeInput = document.getElementById('txt-type'); // NEW FIELD

    // 2. Validation (Simple)
    if(nameInput.value === "" || ageInput.value === "") {
        alert("Please enter required fields");
        return;
    }

    // 3. Create the new object using the Constructor
    const newPet = new Pet(
        nameInput.value,
        Number(ageInput.value),
        genderInput.value,
        breedInput.value,
        serviceInput.value,
        typeInput.value // Passing the new type
    );

    // 4. Add to array
    pets.push(newPet);

    // 5. Update Display
    displayPetNames();

    // 6. Clear the form
    document.getElementById('pet-form').reset();
}

// --- ON LOAD ---
window.onload = function() {
    displaySalonInfo();
    displayPetNames();
}