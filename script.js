// Automatically load all pets into the page memory when it boots up
window.onload = function() {
    filterPets(); 
};

// JS Interaction 1: Fetch and Filter Pets dynamically based on selection
function filterPets() {
    const selectedType = document.getElementById('pet-filter').value;
    const container = document.getElementById('pet-container');
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = ''; // Clear container to repaint filtered list
            
            data.pets.forEach(pet => {
                // Logic check: If user selected 'All', OR matches the pet type, display it
                if (selectedType === 'All' || pet.type === selectedType) {
                    const petDiv = document.createElement('div');
                    petDiv.className = 'pet-card';
                    petDiv.innerHTML = `
                        <h3>${pet.name}</h3>
                        <p>Type: ${pet.type} | Age: ${pet.age}</p>
                        <img src="${pet.img}" alt="A cute ${pet.type} named ${pet.name}" width="150">
                    `;
                    container.appendChild(petDiv);
                }
            });
        })
        .catch(error => console.error('Error filtering JSON:', error));
}

// JS Interaction 2: Handle Feedback Form Submission (Kept exactly the same)
function handleForm(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    document.getElementById('form-response').innerText = `Thank you, ${name}! Your feedback has been received.`;
    document.getElementById('form-element').reset();
}

// Function to switch between the 3 sections (Kept exactly the same)
function showSection(sectionId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    
    document.getElementById(sectionId).style.display = 'block';
}