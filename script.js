const thingElement = document.getElementById('thing');
const modal = document.getElementById('modal');

const colors = ['f5e0dc', 'f2cdcd', 'f5c2e7', 'cba6f7', 'f38ba8', 'eba0ac', 'fab387', 'f9e2af', 'a6e3a1', '94e2d5', '89dceb', '74c7ec', '89b4fa', 'b4befe'];
let color = colors[Math.floor(Math.random() * colors.length)];

document.getElementById('header').style.color = '#' + color;
thingElement.style.color = '#' + color;
document.getElementById('a').style.color = '#' + color;
document.getElementById('aModal').style.color = '#' + color;

let thing;
fetch('./res/things.txt')
    .then(response => { return response.text(); })
    .then(data => {
        const lines = data.split('\n');
        thing = lines[Math.floor(Math.random() * lines.length)]
        thingElement.innerText = thing;
});

function next() { location.reload(); }

function mode() {
    fetch('./res/things.txt')
        .then(response => { return response.text(); })
        .then(data => {
            thing = data;
            thingElement.innerText = data;
        });
    document.getElementById('next').innerText = 'Revert';
    modal.style.display = 'none';
    document.getElementById('modalNext').innerText = 'Revert'
}

function menu() {
    thingElement.innerText = '';
    modal.style.display = 'block';
}

function close() {
    thingElement.innerText = thing;
    modal.style.display = 'none';
}
