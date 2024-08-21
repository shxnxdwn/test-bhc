import { debounce } from './debounce.js';

const filterClicked = {
    userId: true,
    postId: true,
    postTitle: true,
    postBody: true
};

let filteredPosts = [];


const filterPosts = (postsArray, renderCb) => {
    const filterContainer = document.querySelector('.filter-container');
    const searchInput = document.querySelector('.search');


    const searchPosts = () => {
        const inputValue = searchInput.value.trim().toLowerCase();

        if (inputValue.length > 2) {
            filteredPosts = postsArray.filter((post) =>
                post.title.toLowerCase().includes(inputValue) || post.body.toLowerCase().includes(inputValue)
            );
        } else {
            filteredPosts = postsArray.slice();
        }

        renderCb(filteredPosts);
    };


    const sortPosts = (data, filterType) => {
        switch (filterType) {
            case 'user-id':
                filterClicked.userId = !filterClicked.userId;
                return data.slice().sort((postA, postB) =>
                    filterClicked.userId ? postA.userId - postB.userId : postB.userId - postA.userId
                );

            case 'post-id':
                filterClicked.postId = !filterClicked.postId;
                return data.slice().sort((postA, postB) =>
                    filterClicked.postId ? postA.id - postB.id : postB.id - postA.id
                );

            case 'post-title':
                filterClicked.postTitle = !filterClicked.postTitle;
                return data.slice().sort((postA, postB) =>
                    filterClicked.postTitle ? postA.title.length - postB.title.length : postB.title.length - postA.title.length
                );

            case 'post-body':
                filterClicked.postBody = !filterClicked.postBody;
                return data.slice().sort((postA, postB) =>
                    filterClicked.postBody ? postA.body.length - postB.body.length : postB.body.length - postA.body.length
                );

            default:
                return data;
        }
    };


    filterContainer.addEventListener('click', (event) => {
        if (event.target.closest('.filter-container')) {
            const [filterClass] = event.target.classList;
            const filterType = filterClass.replace('table__', '');

            filteredPosts = sortPosts(filteredPosts, filterType);
            renderCb(filteredPosts);
        }
    });

    searchInput.addEventListener('input', debounce(searchPosts, 500));

    filteredPosts = postsArray.slice();
    renderCb(filteredPosts);
};

export { filterPosts };
