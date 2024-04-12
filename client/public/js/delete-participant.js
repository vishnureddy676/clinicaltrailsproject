
// Add an event listener to the parent element of delete links
document.addEventListener('click', function (event) {
    // Check if the clicked element is a delete link
    if (event.target.classList.contains('deleteParticipantLink')) {

        // Prevent the default action of the link (i.e., following the href)
        event.preventDefault();

        // Extract the participant ID from the href attribute
        const participantId = new URLSearchParams(event.target.search).get('id');

        // Confirm deletion with the user
        const confirmDelete = confirm('Are you sure you want to delete this participant?');

        // If user confirms deletion, call the deleteParticipant function
        if (confirmDelete) {
            deleteParticipant(participantId);
        }
    }
});

// Function to delete a participant by ID
function deleteParticipant(participantId) {
    // Send a DELETE request to the backend API
    fetch(`http://localhost:3000/api/participants/${participantId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log(`Participant with ID ${participantId} deleted successfully`);
                window.location.href = 'participant-list.html?from=delete';
                // Optionally, perform additional actions after successful deletion
            } else {
                console.error('Failed to delete participant');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
