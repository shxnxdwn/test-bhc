const renderData = (postsArray) => {
    const tableBody = document.querySelector('.table__body');

    for (let post of postsArray) {
        const trElement = document.createElement('tr');

        for (let data in post) {
            const tdElement = document.createElement('td');
            tdElement.append(post[data])
            trElement.append(tdElement);
        }
        tableBody.append(trElement);
    }

};

export { renderData };
