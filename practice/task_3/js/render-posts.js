const renderPosts = (postsArray) => {
    const tableBody = document.querySelector('.table__body');
    tableBody.innerHTML = '';

    for (let post of postsArray) {
        const tableRowElement = document.createElement('tr');
        tableRowElement.classList.add('table__row');

        for (let data of Object.values(post)) {
            const tableDataElement = document.createElement('td');
            tableDataElement.classList.add('table__data');
            tableDataElement.textContent = String(data);
            tableRowElement.append(tableDataElement);
        }

        tableBody.append(tableRowElement);
    }
};


export { renderPosts };
