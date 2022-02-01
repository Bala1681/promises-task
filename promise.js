let roomClean = new Promise((resolve,reject)=>{
    let iscleaned = true;
    if(iscleaned){
        resolve("room is cleaned");
    }else{
        reject("room is not cleaned");
    }
});

let removeGarbage= new Promise((resolve,reject)=>{
    let garbageRemoved = true;
    if(garbageRemoved){
        resolve("garbage if fully removed")
    }else{
        reject("garbage is not removed")
    }

});

let getthePrice= new Promise((resolve,reject)=>{
    let gettingPrice = true;
    if(gettingPrice){
        resolve("room is cleaned and there is no garbage. you get your price")
    }else{
        reject("room is  not cleaned and there  garbage is not fully removed . you are not get your price")
    }

});

roomClean.then((value)=>{
    let s= `${value}`;
    removeGarbage.then((value)=>{
         s += `${value}`;
         getthePrice.then((value)=>{
             s += `${value}`;
             console.log(`${s}`);

         }).catch((value)=>{
             console.log(value);
         }).catch((value)=>{
            console.log(value);
         }).catch((value)=>{
             console.log(value);

         })

    })

})
let promiseall = Promise.all(roomClean, removeGarbage, getthePrice);
promiseall.then((value)=>{
    console.log(value);

}).catch((value)=>{
    console.log(value);
})


