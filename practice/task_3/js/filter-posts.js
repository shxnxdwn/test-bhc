import { debounce } from './debounce.js';

const filterStage = {
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


    const sortPosts = (postsArray, filterType) => {
        switch (filterType) {
            case 'user-id':
                filterStage.userId = !filterStage.userId;
                return postsArray.slice().sort((postA, postB) =>
                    filterStage.userId ? postA.userId - postB.userId : postB.userId - postA.userId
                );

            case 'post-id':
                filterStage.postId = !filterStage.postId;
                return postsArray.slice().sort((postA, postB) =>
                    filterStage.postId ? postA.id - postB.id : postB.id - postA.id
                );

            case 'post-title':
                filterStage.postTitle = !filterStage.postTitle;
                return postsArray.slice().sort((postA, postB) =>
                    filterStage.postTitle ? postA.title.length - postB.title.length : postB.title.length - postA.title.length
                );

            case 'post-body':
                filterStage.postBody = !filterStage.postBody;
                return postsArray.slice().sort((postA, postB) =>
                    filterStage.postBody ? postA.body.length - postB.body.length : postB.body.length - postA.body.length
                );

            default:
                return postsArray;
        }
    };


    filterContainer.addEventListener('click', (event) => {
        if (event.target.closest('.filter-container')) {
            const [ filterClass ] = event.target.classList;
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
