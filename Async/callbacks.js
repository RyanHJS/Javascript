const post = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// Mimic fetching from the server
function getPosts(){
    setTimeout(() => {
        let output = '';
        post.forEach((p, i) => {
            output += `<li>${p.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(p, callback){
    setTimeout(() => {
        post.push(p);
        callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);