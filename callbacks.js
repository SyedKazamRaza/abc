
console.log('Before..');

//Call the callback function when result is ready.

const getUser = (id,callback) =>{
    setTimeout(() => {
        console.log('Getting user from data~base...');
        callback({id:id, githubUsername: 'kazam'});
    }, 2000);
}


//Technique 1: Callback HELL -> lots of nested calls

// getUser(1,(user)=>{
//     console.log('User is: ', user)

//     //EXercise: Make the getReposotories funcation an Async function
//     getReposotories(user.githubUsername,(repos)=>{
//         console.log('Repos are: ',repos);   
//     });
// })

// Technique 2: Use named functions

getUser(1,getRepos)

function getRepos(user) {
    console.log('User is: ', user)
    getReposotories(user.githubUsername, DisplayRepos)
}

function DisplayRepos(repos) {
    console.log('Repos are: ',repos);   
}

console.log('After');


function getReposotories(name,callback){
    setTimeout(() => {
        console.log('getting repostories of User..')
        callback(['repo1','repo2','repo2'])
    }, 2000);
}