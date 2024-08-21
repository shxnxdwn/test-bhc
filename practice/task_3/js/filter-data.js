const filterContainer = document.querySelector('.filter-container');


const sortData = (data, filterType) => {
    console.log(data)
    switch (filterType) {
        case 'user-id':
            return data.slice().sort((postA, postB) => postA.userId - postB.userId);
        case 'post-id':
            return data.slice().sort((postA, postB) => postA.id - postB.id);
        case 'post-title':
            return data.slice().sort((postA, postB) => postA.title.length - postB.title.length);
        case 'post-body':
            return data.slice().sort((postA, postB) => postA.body.length - postB.body.length);
        default:
            return 0;
    }
};


const handleFilterClick = (data, renderCb) => {
    filterContainer.addEventListener('click', (event) => {
        if (event.target.closest('.filter-container')) {
            const [ filterClass ] = event.target.classList;
            const filterType = filterClass.replace('table__', '');
            renderCb(sortData(data, filterType));
        }
    });
};


export { handleFilterClick };
