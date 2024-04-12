// Function to fetch participants from the API
function fetchParticipants() {
  fetch('http://localhost:3000/api/participants')
    .then(response => response.json())
    .then(data => {
      // Handle the retrieved participants data

      renderParticipants(data);
    })

    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to render participants in the UI
function renderParticipants(participants) {
  const tableBody = document.querySelector('#participantList');

  if (tableBody) {
    tableBody.innerHTML = '';

    participants.forEach(participant => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${participant.name}</td>
          <td>${participant.email}</td>
          <td>${participant.phone}</td>
          <td>${participant.trialStatus}</td>
          <td>
          <a href="participant-detail.html?id=${participant.id}" title="View">👁️</a>
<a  href="edit-participant.html?id=${participant.id}" title="Edit">✏️</a>
<a class="deleteParticipantLink" href="participant-list.html?id=${participant.id}" title="Delete">🗑️</a>

          </td>
        `;
      tableBody.appendChild(row);
    });
  } else {
    console.warn('Participant list table not found in the HTML.');
  }
}




// Function to get query parameter from URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to display a notification
function showNotification(message) {
  // Create a notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.classList.add('notification');

  // Append the notification to the document body
  document.body.appendChild(notification);

  // Delay the removal of the notification
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 7000); // Remove after 7 seconds (adjust as needed)
}

// Check if the query parameter 'from' is set to 'specificPage'
const fromPage = getQueryParam('from');
if (fromPage === 'add') {
  // Call the function to display the notification after redirection
  showNotification('participant  added sucessfully');
}
if (fromPage === 'delete') {
  // Call the function to display the notification after redirection
  showNotification('participant  deleted sucessfully');
}
if (fromPage === 'update') {
  // Call the function to display the notification after redirection
  showNotification('participant updated sucessfully');
}



document.addEventListener('DOMContentLoaded', fetchParticipants);