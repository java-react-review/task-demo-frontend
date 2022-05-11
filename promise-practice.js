function makeRequest(){
    console.log("making request...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random()>.2){
                resolve('{"message":"Hello World"}')
            } else {
                reject('an error has occurred :(')
            }
        }, 500)
    });
}

makeRequest()
.then(respText=>{
    const responseObject = JSON.parse(respText);
    const message = responseObject.message;
    console.log(message);
})
.catch(er=>console.error(er))