let button = document.querySelector('.exp-article button');
let p = document.querySelector('.exp-article p:nth-child(2)');

let closed = true;
button.onclick = function() {
    if (closed) {
        p.classList.remove('invis');
        button.textContent = "READ LESS";
    } else {
        p.classList.add('invis');
        button.textContent = "READ MORE";
    }

    closed = !closed;
}