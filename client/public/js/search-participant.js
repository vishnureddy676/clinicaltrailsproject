const table = document.getElementById('myTable');
const nameHeader = table.querySelector('th:first-child');

nameHeader.addEventListener('click', () => {
    const order = nameHeader.dataset.order === 'asc' ? 'desc' : 'asc';

    const rows = Array.from(table.querySelectorAll('tbody tr'));

    const sortedRows = rows.sort((a, b) => {
        let aValue = a.firstElementChild.textContent;
        let bValue = b.firstElementChild.textContent;

        if (order === 'asc') {
            return aValue.localeCompare(bValue);
        } else {
            return bValue.localeCompare(aValue);
        }
    });

    nameHeader.dataset.order = order;

    if (order === 'asc') {
        nameHeader.classList.remove('desc');
        nameHeader.classList.add('asc');
    } else {
        nameHeader.classList.remove('asc');
        nameHeader.classList.add('desc');
    }

    sortedRows.forEach(row => {
        table.querySelector('tbody').appendChild(row);
    });
});