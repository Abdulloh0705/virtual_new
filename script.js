const title = document.querySelector('.virtual_text');
const text = title.innerHTML;
title.innerHTML = '';

function rec(i = 0) {
  title.innerHTML += text[i];
  i++;
  if (i < text.length) {
    setTimeout(() => {
      rec(i);
    }, 50);
  }
}
rec();

// `projects_text` elementini topamiz
const projectText = document.querySelector('.projects_text');
const projectTextContent = projectText.innerHTML;
projectText.innerHTML = '';

function animateProjectText(i = 0) {
  projectText.innerHTML += projectTextContent[i];
  i++;
  if (i < projectTextContent.length) {
    setTimeout(() => {
      animateProjectText(i);
    }, 50);
  }
}
animateProjectText();

const nav_link = document.querySelector('.zone_list');
const virtual_join = document.querySelector('.virtual_join');
const virtual_watch = document.querySelector('.virtual_watch');
const virtual_img = document.querySelector('.virtual_img');

function animation() {
  virtual_img.style.transform = `translateX(${scrollY}px)`;
  nav_link.style.transform = `translateX(${scrollY}px)`;
  virtual_join.style.transform = `translateX(${scrollY}px)`;
  virtual_watch.style.transform = `translateX(${scrollY}px)`;
  console.log(scrollY);
}

window.addEventListener('scroll', animation);
window.addEventListener('load', animation);
