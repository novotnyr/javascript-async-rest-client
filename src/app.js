function showResult(response) {
    document.getElementById('result').textContent = response
}

fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => showResult(JSON.stringify(albums)))
    .catch(showResult);
