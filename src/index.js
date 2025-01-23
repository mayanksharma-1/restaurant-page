import createMenu from './menu';
import createHomePage from './home';
import createAboutPage from './about';
import createContact from './contact';

let buttons = document.getElementsByClassName('navBtn');
let content = document.getElementById('content');
const mainContent = {
    home: createHomePage(),
    menu: createMenu(),
    about: createAboutPage(),
    contact: createContact(),
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        console.log(e.target.id);
        console.log(mainContent[e.target.id]);
        content.innerHTML = '';
        content.appendChild(mainContent[e.target.id]);
    });
}