//------------------------------------------------------------------------------------------

const publicCommit = function getCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {"authorization": "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"}})
        .then(response => response.json())
        .then(data => {
            console.log(data)})


                .then(events =>{
                    for(let event of events){
                        if(event.type === "PushEvent"){
                            console.log(event.created_at);
                            return event.payload.commits[0].url
                        }
                    }
                })



}

console.log(publicCommit("TheCosmicFish"))




