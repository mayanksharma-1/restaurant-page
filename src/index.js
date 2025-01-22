import createMenu from './menu';

let buttons = document.getElementsByClassName('navBtn');
let content = document.getElementById('content');
const mainContent = {
    home: `<p> Welcome to my home page </p>`,
    menu: createMenu(),
    about: `<p> Welcome to my about page </p>`,
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        console.log(e.target.id);
        console.log(mainContent[e.target.id]);
        content.innerHTML = '';
        if (e.target.id === 'menu') {
            content.appendChild(mainContent[e.target.id]);
        } else {
            content.innerHTML = mainContent[e.target.id];
        }
    });
}