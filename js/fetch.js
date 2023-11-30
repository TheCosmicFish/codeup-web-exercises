//------------------------------------------------------------------------------------------

const publicCommit = function getCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {"authorization": "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"}})
        .then(response => response.json())
        .then(data => {
            console.log(data)


        });
}

console.log(publicCommit("TheCosmicFish"))




