// Function to filter participants based on search term
function filterParticipants(searchTerm) {
  const participants = document.querySelectorAll('#participantList tr');
  for (let participant of participants) {
    console.log(participant);
    const name = participant.querySelector('td:first-child').textContent.toLowerCase();
    if (name.includes(searchTerm.toLowerCase())) {
      participant.style.display = '';
    } else {
      participant.style.display = 'none';
    }
  }
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function () {
  filterParticipants(this.value);
});