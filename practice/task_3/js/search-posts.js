import { debounce } from './debounce.js';

const searchPosts = (postsArray, renderCb) => {
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

    searchInput.addEventListener('input', debounce(searchPosts, 500));
};

export { searchPosts };
