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

const nav_link = document.querySelector('.zone_list');
const virtual_join = document.querySelector('.virtual_join');
const virtual_watch = document.querySelector('.virtual_watch');

const virtual_img = document.querySelector('.virtual_img');
window.addEventListener('load', () => {
  virtual_img.style.transform = `translateX(${scrollY})`
  nav_link.style.transform = `translateX(${scrollY})`
  virtual_join.style.transform = `translateX(${scrollY})`
  virtual_watch.style.transform = `translateX(${scrollY})`
  console.log(scrollY);
});

