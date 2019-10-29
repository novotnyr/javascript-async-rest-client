function showResult(response) {
    document.getElementById('result').textContent = response
}

function associate(albums, users) {
    albums.forEach((album, i) => album.user = users[i]);
    return albums
}

async function findUserByAlbum(album) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`);
    return response.json()
}

async function fetchUsers(albums) {
    let userPromises = albums.map(findUserByAlbum);
    let users = await Promise.all(userPromises);
    return associate(albums, users)
}

async function findFullAlbums() {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albums = await response.json();
    return fetchUsers(albums);
}

(async function () {
    try {
        let fullAlbums = await findFullAlbums();
        let json = JSON.stringify(fullAlbums);
        showResult(json);
    } catch (e) {
        showResult(e)
    }
})();



