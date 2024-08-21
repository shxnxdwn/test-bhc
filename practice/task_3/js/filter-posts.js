import {debounce} from './debounce.js';

const filterClicked = {
    userId: false,
    postId: false,
    postTitle: false,
    postBody: false
};

const filterPosts = (postsArray, renderCb) => {
    const filterContainer = document.querySelector('.filter-container');
    const searchInput = document.querySelector('.search');


    const searchPosts = () => {
        const inputValue = searchInput.value.trim().toLowerCase();

        if (inputValue.length > 2) {
            const filteredPosts = postsArray.filter((post) =>
                post.title.toLowerCase().includes(inputValue) || post.body.toLowerCase().includes(inputValue)
            );
            renderCb(filteredPosts);
        } else {
            renderCb(postsArray);
        }
    };


    const sortPosts = (data, filterType) => {
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
            renderCb(sortPosts(postsArray, filterType));
        }
    });

    searchInput.addEventListener('input', debounce(searchPosts, 500));
};


export { filterPosts };
