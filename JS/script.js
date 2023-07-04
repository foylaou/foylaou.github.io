let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
//menu按鈕功能//
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 400,
    reset: true
});
sr.reveal('.prj-text',{delay:200, origin:'top'});
sr.reveal('.coding-gif',{delay:250, origin:'top'});
sr.reveal('.icons',{delay:350, origin:'left'});
//載入網頁動畫//