const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const lightbox=document.getElementById('lightbox'),lightImg=lightbox.querySelector('img');
document.querySelectorAll('.gallery-card[data-image]').forEach(card=>card.addEventListener('click',()=>{lightImg.src=card.dataset.image;lightImg.alt=card.querySelector('img').alt;lightbox.classList.add('open')}));
lightbox.querySelector('button').addEventListener('click',()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lightbox.classList.remove('open')});
