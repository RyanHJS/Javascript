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

function createPost(p){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.push(p);
            
            const error = false

            if (error) {
                reject('Error creating post');
            }
            else{
                resolve();
            }
        }, 2000);
    });
}

// createPost({title: 'Post three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(error => alert(error));

// Promise.all
// const promise1 = Promise.resolve('Resolved promise');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'Goodbye');
// }); 
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users') .then(response => response.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => {
//     console.log(values);
// })

// Async / Await function  
// async function init(){
//     await createPost({title: 'Post three', body: 'This is post three'});

//     getPosts();
// }

// init();

// Async / Await / Fetching
// 1. Promise chaining
// function fetchUsers(){
//     const res = fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .catch(error => console.error(error));
    
//     res.then(users => console.log(users));
//     // const data = res.json()
// }

// fetchUsers();

// 2. Async / Await
async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);

}

fetchUsers();