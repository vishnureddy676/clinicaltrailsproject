// Function to fetch participant details from the API
function fetchParticipantDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const participantId = urlParams.get('id');

  fetch(`http://localhost:3000/api/participants/${participantId}`)
    .then(response => response.json())
    .then(data => {
      // Handle the retrieved participant details
      renderParticipantDetails(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to render participant details in the UI
function renderParticipantDetails(participant) {
  const participantDetails = document.querySelector('#participantDetail');

  if (participantDetails) {
    participantDetails.innerHTML = `
        <h2>${participant.name}</h2>
        <p>Email: ${participant.email}</p>
        <p>Phone: ${participant.phone}</p>
        <p>Address: ${participant.address}</p>
        <p>Trial Status: ${participant.trialStatus}</p>
      `;
  } else {
    console.warn('Participant detail container not found in the HTML.');
  }
}

// Fetch participant details when the page loads
document.addEventListener('DOMContentLoaded', fetchParticipantDetails);