// Object Literal for the Pet Salon
const salon = {
    name: "Angel Paws",
    phone: "(555) 765-4321",
    address: {
        street: "ABC Street",
        number: "123"
    }
};

// Available services (for services.html)
const services = [
    "VIP Package (Bath, Haircut, Styling)............................................................................................................................................................$150",
    "Vaccines & Checkup...................$49",
    "Nail Trimming & Paw Cleaning...................$29",
    "De-shedding Treatment",
    "Basic Bath & Brush"
];

// Object Constructor (Class for creating new pets)
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

// for tracking the pet being edited
let editingPetName = null;

// 3 pets using the Constructor
const pet1 = new Pet("Scooby", 7, "Male", "Great Dane", "Grooming", "Dog");
const pet2 = new Pet("Daisy", 5, "Female", "Husky", "Vaccines", "Dog");
const pet3 = new Pet("Dewey", 2, "Male", "Orange Tabby", "Nails", "Cat");
pets.push(pet1, pet2, pet3);

// Function to display Salon Info on Index and Register pages
function displaySalonInfo() {
    const salonNameVars = document.getElementsByClassName("salon-name-display");
    const salonAddressVars = document.getElementsByClassName("salon-address-display");
    const salonPhoneVars = document.getElementsByClassName("salon-phone-display");

    if (salonNameVars.length > 0) {
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
}

// Function to display available services on services.html
function displayServices() {
    const serviceList = document.getElementById('service-list');
    if (serviceList) {
        let html = "";
        services.forEach(service => {
            html += `<li class="list-group-item list-group-item-action">${service}</li>`;
        });
        serviceList.innerHTML = html;
    }
}

// Helper to get form values
function getFormValues() {
    return {
        name: document.getElementById('txt-name').value,
        age: Number(document.getElementById('txt-age').value),
        breed: document.getElementById('txt-breed').value,
        gender: document.getElementById('txt-gender').value,
        service: document.getElementById('txt-service').value,
        type: document.getElementById('txt-type').value
    };
}

// 1. displayRow:
function displayRow(pet) {
    return `
    <tr>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>
            <button class="btn btn-sm btn-info me-2" onclick="editPet('${pet.name}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deletePet('${pet.name}')">Delete</button>
        </td>
    </tr>`;
}

// 2. displayTable
function displayTable() {
    const tableBody = document.getElementById('pet-table-body');
    
    if (tableBody) {
        tableBody.innerHTML = "";
        
        let rowHTML = "";
        for (let i = 0; i < pets.length; i++) {
            rowHTML += displayRow(pets[i]);
        }
        
        tableBody.innerHTML = rowHTML;
        
        // Update count
        document.getElementById('total-pets').innerText = pets.length;
    }
}

// 3. deletePet
function deletePet(name) {
    let indexToDelete = pets.findIndex(pet => pet.name === name);
    
    if (indexToDelete > -1) {
        pets.splice(indexToDelete, 1);
        displayTable();
        
        if (editingPetName === name) {
            resetFormState(); // If the deleted pet was being edited, reset the form
        }
    }
}

// 4. editPet
function editPet(name) {
    const petToEdit = pets.find(pet => pet.name === name);
    
    if (petToEdit) {
        // to Populate the form
        document.getElementById('txt-name').value = petToEdit.name;
        document.getElementById('txt-age').value = petToEdit.age;
        document.getElementById('txt-breed').value = petToEdit.breed;
        document.getElementById('txt-gender').value = petToEdit.gender;
        document.getElementById('txt-service').value = petToEdit.service;
        document.getElementById('txt-type').value = petToEdit.type;

        // to Set state and update button
        editingPetName = name;
        document.getElementById('btn-save').innerText = 'Update Pet';
        document.getElementById('btn-save').classList.add('btn-success');
        document.getElementById('btn-save').classList.remove('btn-primary');

        // Disable name field during edit
        document.getElementById('txt-name').disabled = true;
        
        // Add visual edit highlight
        document.querySelector('.card').classList.add('editing');

        // Scroll to form
        document.getElementById('pet-form').scrollIntoView({ behavior: 'smooth' });
    }
}

// 5. updatePet:
function updatePet() {
    const updatedValues = getFormValues();
    const index = pets.findIndex(pet => pet.name === editingPetName);

    if (index > -1) {
        // Update all properties
        pets[index].age = updatedValues.age;
        pets[index].gender = updatedValues.gender;
        pets[index].breed = updatedValues.breed;
        pets[index].service = updatedValues.service;
        pets[index].type = updatedValues.type;
        
        resetFormState();
        displayTable();
    }
}

// 6. registerPet: help to create a new pet object
function registerPet() {
    const formValues = getFormValues();

    if(!formValues.name || !formValues.age) {
        alert("Please enter required fields.");
        return;
    }

    const newPet = new Pet(
        formValues.name,
        formValues.age,
        formValues.gender,
        formValues.breed,
        formValues.service,
        formValues.type
    );

    pets.push(newPet);
    displayTable();
    document.getElementById('pet-form').reset();
}

// 7. handleSave:
function handleSave() {
    if (editingPetName) {
        updatePet();
    } else {
        registerPet();
    }
}

// 8. resetFormState:
function resetFormState() {
    document.getElementById('pet-form').reset();
    document.getElementById('txt-name').disabled = false;
    
    editingPetName = null;
    document.getElementById('btn-save').innerText = 'Register';
    document.getElementById('btn-save').classList.remove('btn-success');
    document.getElementById('btn-save').classList.add('btn-primary');
    
    document.querySelector('.card').classList.remove('editing');
}
window.onload = function() {
    displaySalonInfo();
    displayTable(); // should only run if pet-table-body exists (on registration.html)
    displayServices(); // should only run if service-list exists (on services.html)
};