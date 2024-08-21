const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


const getPosts = (renderCb) => {
    fetch(POSTS_URL)
        .then((response) => response.json())
        .then((posts) => {
            renderCb(posts);
        });
}


export { getPosts };
