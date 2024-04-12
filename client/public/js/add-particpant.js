// Function to handle form submission for adding a new participant
function addParticipant(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Extract data from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const trialStatus = document.getElementById('trialStatus').value;

    // Create a participant object with the extracted data
    const participantData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        trialStatus: trialStatus
    };

    // Send a POST request to the server to add the new participant
    fetch('http://localhost:3000/api/participants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(participantData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {


            // Redirect to index.html page
            // Redirect to participant-list.html page with a query parameter
            window.location.href = 'participant-list.html?from=add';

        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error, e.g., display an error message to the user
        });
}

// Add event listener to the form for form submission
const participantForm = document.getElementById('participantForm');
if (participantForm) {
    participantForm.addEventListener('submit', addParticipant);
} else {
    console.warn('Participant form not found in the HTML.');
}


