document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.focus();

    searchBar.addEventListener('change', () => {
        fetch('/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: searchBar.value })
        })
        .then(res => res.json())
        .then(data => console.log(data));
    });
});
