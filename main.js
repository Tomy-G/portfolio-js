console.log("Javascript Works!");

let role = document.querySelector('.role');

let width = role.clientWidth;
document.querySelector('.bio').style.width = width + 'px';
document.querySelector('.cta').style.width = width/2 + 'px';