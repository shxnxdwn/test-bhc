const GET_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';


const getData = (renderDataCb) => {
    fetch(GET_DATA_URL)
        .then((response) => response.json())
        .then((data) => {
            renderDataCb(data);
        });
}


export { getData };
