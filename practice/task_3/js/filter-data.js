const filterContainer = document.querySelector('.filter-container');

const sortData = (data, filterType) => {
    switch (filterType) {
        case 'user-id':

        case 'post-id':

        case 'post-title':

        case 'post-body':

        default:
            return 0;
    }
};



const filterPosts = (data, renderCb) => {
    renderCb(data);
};

filterContainer.addEventListener('click', (event) => {
    if (event.target.closest('.filter-container')) {
        const [ filterClass ] = event.target.classList;
        const filterType = filterClass.replace('table__', '');
        console.log(filterType);
    }
});


export { filterPosts };


