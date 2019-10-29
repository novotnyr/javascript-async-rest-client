function showResult(response) {
    document.getElementById('result').textContent = response
}

fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => showResult(response.statusText))
    .catch(showResult);
