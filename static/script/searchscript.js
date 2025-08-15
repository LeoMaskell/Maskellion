const searchbar = document.getElementById('searchbar');
while (true) {
    fetch('/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchbar.innerText })
    })
    .then(res => res.json())
    .then(data => console.log(data));
};