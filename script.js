
// Function to switch between the 3 sections
function showSection(sectionId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    
    document.getElementById(sectionId).style.display = 'block';
}


// Search Pets
// 1. Fetch the data IMMEDIATELY when the page loads
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        allPets = data.pets;
        // Run the display function once right away so it's ready
        renderPets();
    })

// 2. The function that actually puts the pets on the screen
function renderPets() {
    const container = document.getElementById('pet-container');
    allPets.forEach(pet => {
        const petDiv = document.createElement('div');
        petDiv.className = 'pet-card';
        petDiv.innerHTML = `
            <h3>${pet.name}</h3>
            <p><strong>Type:</strong> ${pet.type}</p>
            <p><strong>Age:</strong> ${pet.age}</p>
            <img src="${pet.img}" alt="A photo of ${pet.name}" width="150">
        `;
        container.appendChild(petDiv);
    });
}


// Feedback Form Submission
function handleForm(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    document.getElementById('form-response').innerText = `Thank you, ${name}! Your feedback has been received.`;
    document.getElementById('form-element').reset();
}

