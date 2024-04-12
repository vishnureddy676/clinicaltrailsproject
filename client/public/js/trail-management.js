// Function to fetch trials from the API
function fetchTrials() {
  fetch('http://localhost:3000/api/trials')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the retrieved trials data
      
      renderTrials(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to render trials in the UI
function renderTrials(trials) {
  const tableBody = document.querySelector('#clinicallist');

  if (tableBody) {
    tableBody.innerHTML = '';

    trials.forEach(trial => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${trial.name}</td>
          <td>${trial.description}</td>
          <td>${trial.startDate}</td>
          <td>${trial.endDate}</td>
        `;
      tableBody.appendChild(row);
    });
  } else {
    console.warn('Trial list table not found in the HTML.');
  }
}

// Fetch trials when the page loads
document.addEventListener('DOMContentLoaded', fetchTrials);
