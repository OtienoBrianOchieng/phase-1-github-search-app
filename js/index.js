document.addEventListener ("DOMContentLoaded", () => {
    fetch ('https://api.github.com/search/users?q=octocat')
    .then (responce => responce.json())
    .then (users => users.forEach( users => {
        
    }))
})