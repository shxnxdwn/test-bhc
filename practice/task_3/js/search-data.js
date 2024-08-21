import { debounce } from './debounce.js';

const handleSearch = (postsArray, renderCb) => {
    const searchInput = document.querySelector('.search');

    const searchPosts = () => {
        const inputValue = searchInput.value.trim().toLowerCase();

        if (inputValue.length > 2) {
            const searchedData = postsArray.filter((post) =>
                post.title.toLowerCase().includes(inputValue) || post.body.toLowerCase().includes(inputValue)
            );
            renderCb(searchedData);
        } else {
            renderCb(postsArray);
        }
    };

    searchInput.addEventListener('input', debounce(searchPosts, 500));
};

export { handleSearch };
