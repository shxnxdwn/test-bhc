const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


const getPosts = (renderCb, filterCb) => {
    fetch(POSTS_URL)
        .then((response) => response.json())
        .then((posts) => {
            renderCb(posts);
            filterCb(posts, renderCb);
        });
}


export { getPosts };
