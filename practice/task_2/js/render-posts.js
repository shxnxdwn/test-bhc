const renderPosts = (postsArray) => {
    const tableBody = document.querySelector('.table__body');

    for (const post of postsArray) {
        const tableRowElement = document.createElement('tr');

        for (const data of Object.values(post)) {
            const tableDataElement = document.createElement('td');
            tableDataElement.textContent = String(data);
            tableRowElement.append(tableDataElement);
        }

        tableBody.append(tableRowElement);
    }
};


export { renderPosts };
