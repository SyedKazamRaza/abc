asjkdansdfkjansfdkasdnfc

const p = new Promise((resolve,reject)=>{
    //Some asynchronous operation.
    setTimeout(() => {
        console.log('Getting User from database....');
        let exist = false;
        // exist = true;
        if(exist){
            //Result comes => promise is resolved.
            resolve({id:3,name:"kazam"});
        }
        if(!exist){
            //Result not exist. promise is rejected.
            reject(new Error('Result Not Exist'))
        }
    }, 3000);

})

p.then((user)=>{
    //Execute this block when promise is resolve
    console.log('User from database: ',user);
}).catch((err)=>{
    //Execute this block when promise is rejected
    console.log('Error: ',err.message);
})