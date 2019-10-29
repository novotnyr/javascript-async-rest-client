function showResult(response) {
    document.getElementById('result').textContent = response
}

function associate(albums, users) {
    albums.forEach((album, i) => album.user = users[i]);
    return albums
}

function findUserByAlbumAsync(album) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(response => response.json())
}

function fetchUsersAsync(albums) {
    let userPromises = albums.map(findUserByAlbumAsync);
    return Promise.all(userPromises)
        .then(users => associate(albums, users))
}

fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(fetchUsersAsync)
    .then(JSON.stringify)
    .then(showResult)
    .catch(showResult);
