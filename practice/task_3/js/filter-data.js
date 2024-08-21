const filterContainer = document.querySelector('.filter-container');

const filterClicked = {
    userId: false,
    postId: false,
    postTitle: false,
    postBody: false
};


const handleFilterClick = (data, renderCb) => {
    const sortData = (data, filterType) => {
        switch (filterType) {
            case 'user-id':
                if (filterClicked.userId) {
                    filterClicked.userId = false;
                    return data.slice().sort((postA, postB) => postA.userId - postB.userId);
                } else {
                    filterClicked.userId = true;
                    return data.slice().sort((postA, postB) => postB.userId - postA.userId);
                }

            case 'post-id':
                if (filterClicked.postId) {
                    filterClicked.postId = false;
                    return data.slice().sort((postA, postB) => postA.id - postB.id);
                } else {
                    filterClicked.postId = true;
                    return data.slice().sort((postA, postB) => postB.id - postA.id);
                }

            case 'post-title':
                if (filterClicked.postTitle) {
                    filterClicked.postTitle = false;
                    return data.slice().sort((postA, postB) => postA.title.length - postB.title.length);
                } else {
                    filterClicked.postTitle = true;
                    return data.slice().sort((postA, postB) => postB.title.length - postA.title.length);
                }

            case 'post-body':
                if (filterClicked.postBody) {
                    filterClicked.postBody = false;
                    return data.slice().sort((postA, postB) => postA.body.length - postB.body.length);
                } else {
                    filterClicked.postBody = true;
                    return data.slice().sort((postA, postB) => postB.body.length - postA.body.length);
                }

            default:
                return 0;
        }
    };


    filterContainer.addEventListener('click', (event) => {
        if (event.target.closest('.filter-container')) {
            const [ filterClass ] = event.target.classList;
            const filterType = filterClass.replace('table__', '');
            renderCb(sortData(data, filterType));
        }
    });
};


export { handleFilterClick };
