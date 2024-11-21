colors = ['rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'];
color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('header').classList.add(color);
document.getElementById('thing').classList.add(color);
document.getElementById('a').classList.add(color);

fetch('./things.txt')
    .then(response => { return response.text(); })
    .then(data => {
        const lines = data.split('\n');
        document.getElementById('thing').innerText = lines[Math.floor(Math.random() * lines.length)];
});

document.getElementById('next').addEventListener('click', function() { location.reload(); });
document.getElementById('mode').addEventListener('click', function() {
    fetch('./things.txt')
        .then(response => { return response.text(); })
        .then(data => {
            const lines = data.split();
            document.getElementById('thing').innerText = lines[Math.floor(Math.random() * lines.length)];
        });
    document.getElementById('next').innerText = 'Revert';
});
