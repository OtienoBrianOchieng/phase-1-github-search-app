document.addEventListener ("DOMContentLoaded", () => {
    fetch ('https://api.github.com/search/users?q=octocat')
    .then (responce => responce.json())
    .then (items => items.forEach( items => {
        let searchList = document.createElement ("li");
        searchList.innerHTML = `
        <ul> ${items.login}</ul>
        `
    }))
})