const renderData = (postsArray) => {
    const tableBody = document.querySelector('.table__body');

    for (let post of postsArray) {
        const tableRowElement = document.createElement('tr');

        for (let data of Object.values(post)) {
            const tableDataElement = document.createElement('td');
            tableDataElement.textContent = String(data);
            tableRowElement.append(tableDataElement);
        }

        tableBody.append(tableRowElement);
    }
};


export { renderData };
