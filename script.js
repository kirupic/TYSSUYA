const thingElement = document.getElementById('thing');

const colors = ['rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'];
let color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('header').classList.add(color);
thingElement.classList.add(color);
document.getElementById('a').classList.add(color);

let thing;
fetch('./res/things.txt')
    .then(response => { return response.text(); })
    .then(data => {
        const lines = data.split('\n');
        thing = lines[Math.floor(Math.random() * lines.length)]
        thingElement.innerText = thing;
});

function next() {
    location.reload();
}

function mode() {
    fetch('./res/things.txt')
        .then(response => { return response.text(); })
        .then(data => {
            thing = data;
            thingElement.innerText = data;
        });
    document.getElementById('next').innerText = 'Revert';
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('next').addEventListener('click', function() { next(); });
document.getElementById('mode').addEventListener('click', function() { mode(); });
document.getElementById('modalNext').addEventListener('click', function() { next(); });
document.getElementById('modalMode').addEventListener('click', function() { mode(); });

document.getElementById('menu').addEventListener('click', function() {
    thingElement.innerText = '';
    document.getElementById('modal').style.display = 'block';
});
document.getElementById('close').addEventListener('click', function() {
    thingElement.innerText = thing;
    document.getElementById('modal').style.display = 'none';
});
