const data = [
    { title: "Page 1", url: "https://example.com/page1" },
    { title: "Page 2", url: "https://example.com/page2" },
    { title: "Page 3", url: "https://example.com/page3" },
];

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = data.filter(item => item.title.toLowerCase().includes(query));
    displayResults(results);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<li>No results found</li>';
        return;
    }

    results.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
        resultsContainer.appendChild(li);
    });
}
