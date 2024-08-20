const DATA_URL = 'https://jsonplaceholder.typicode.com/posts';


const getData = (renderDataCb) => {
    fetch(DATA_URL)
        .then((response) => response.json())
        .then((posts) => {
            renderDataCb(posts);
        });
}


export { getData };
