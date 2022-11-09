import _, { forEach } from 'lodash';
import "./style.scss";

// pages
import home from './pages/home';
import menu from './pages/menu';
import reservations from './pages/reservations';
import contact from './pages/contact';

// home();
const generateContent = document.createElement('div');
generateContent.setAttribute('id', 'content');
document.body.append(generateContent);
home();

const listener = (() => {
    // home();
    const content = document.getElementById('content');

    const homeBtn = document.getElementById('welcome');
    homeBtn.addEventListener('click', () => {
        content.innerHTML = ' ';
        home();
    });
    const menuBtn = document.getElementById('menu');
    menuBtn.addEventListener('click', () => {
        content.innerHTML = ' ';
        menu();
    });
    const reservationsBtn = document.getElementById('reservations');
    reservationsBtn.addEventListener('click', () => {
        content.innerHTML = ' ';
        reservations();
    });
    const contactBtn = document.getElementById('contact');
    contactBtn.addEventListener('click', () => {
        content.innerHTML = ' ';
        contact();
    });
    const scrollToTopBtn = document.getElementById('scroll');
    scrollToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();

const clear = () => {
    const content = document.getElementById('content');
    console.log(typeof (content.children))
    let children = content.children;
    // content.children[1].remove();
    // content.children[2].remove();
    // content.children[3].remove();
    // console.log(content.children[4])
    // content.children[4].remove();
    // content.children[5].remove();
    // content.children[6].remove();
    Object.values(children).forEach((el) => {
        if (el.localName === 'header') return;
        el.remove();
    })
}
// clear()