async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; 

    try {
        // Fetching data 
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }
        const posts = await response.json();

        displayPosts(posts);
    } catch (error) {
        displayError(error.message);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; 

    posts.forEach(post => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-group-item');

        const title = document.createElement('h5');
        title.classList.add('post-title');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        listItem.appendChild(title);
        listItem.appendChild(body);
        postsContainer.appendChild(listItem);
    });
}

function displayError(message) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; 

    const errorDiv = document.createElement('div');
    errorDiv.classList.add('alert', 'alert-danger');
    errorDiv.textContent = `Error: ${message}`;

    postsContainer.appendChild(errorDiv);
}

document.getElementById('fetchPostsButton').addEventListener('click', fetchPosts);
