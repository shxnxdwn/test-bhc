const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


const getPosts = (renderCb, filterCb, searchCb) => {
    fetch(POSTS_URL)
        .then((response) => response.json())
        .then((posts) => {
            renderCb(posts);
            filterCb(posts, renderCb);
            searchCb(posts, renderCb);
        });
}


export { getPosts };
