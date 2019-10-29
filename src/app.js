function showResult(response) {
    document.getElementById('result').textContent = response
}

fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(JSON.stringify)
    .then(showResult)
    .catch(showResult);
