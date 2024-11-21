'use strict'

const colors = ['rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'];
let color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('header').classList.add(color);
document.getElementById('thing').classList.add(color);
document.getElementById('a').classList.add(color);

fetch('./res/things.txt')
    .then(response => { return response.text(); })
    .then(data => {
        const lines = data.split('\n');
        document.getElementById('thing').innerText = lines[Math.floor(Math.random() * lines.length)];
});

function next() {
    location.reload();
}

function mode() {
    fetch('./res/things.txt')
        .then(response => { return response.text(); })
        .then(data => {
            const lines = data.split();
            document.getElementById('thing').innerText = lines[Math.floor(Math.random() * lines.length)];
        });
    document.getElementById('next').innerText = 'Revert';
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('next').addEventListener('click', function() { next(); });
document.getElementById('mode').addEventListener('click', function() { mode(); });

document.getElementById('modalNext').addEventListener('click', function() { next(); });
document.getElementById('modalMode').addEventListener('click', function() { mode(); });

document.getElementById('menu').addEventListener('click', function() {
    if (document.getElementById('menu').style.display != 'block') {
        document.getElementById('thing').innerText = 0;
    }
    document.getElementById('modal').style.display = 'block';
});
document.getElementById('close').addEventListener('click', function() { document.getElementById('modal').style.display = 'none'; });