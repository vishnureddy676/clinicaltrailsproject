document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch participant details for editing
    function fetchParticipantDetails() {
        // Get participant ID from URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const participantId = urlParams.get('id');

        // Fetch participant details from the server
        fetch(`http://localhost:3000/api/participants/${participantId}`)
            .then(response => response.json())
            .then(participant => {
                // Populate the form fields with the participant details
                document.getElementById('name').value = participant.name;
                document.getElementById('email').value = participant.email;
                document.getElementById('phone').value = participant.phone;
                document.getElementById('address').value = participant.address;
                document.getElementById('trialStatus').value = participant.trialStatus;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Call the function to fetch participant details when the page loads
    fetchParticipantDetails();
    // Event listener for form submission
    document.getElementById('editparticipantform').addEventListener('submit', function (event) {
        event.preventDefault();


        const updatedParticipantData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            trialStatus: document.getElementById('trialStatus').value
        };
        console.log(updatedParticipantData);
        // Call a function to update the participant with the new data
        updateParticipant(updatedParticipantData);
    });

    // Function to update the participant data on the server
    function updateParticipant(participantData) {
        // Get participant ID from URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const participantId = urlParams.get('id');
        console.log(participantId);
        // Send the updated participant data to the server for processing
        fetch(`http://localhost:3000/api/participants/${participantId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(participantData)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Participant updated successfully');
                    // Redirect to the participant list page after updating
                    window.location.href = 'participant-list.html?from=update';
                } else {
                    console.error('Failed to update participant');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
