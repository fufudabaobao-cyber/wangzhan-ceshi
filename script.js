'use strict';
document.body.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(expanded));menu.setAttribute('aria-label',expanded?'Close navigation':'Open navigation');navigation.classList.toggle('open',expanded);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
matchMedia('(min-width:701px)').addEventListener('change',closeMenu);
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
document.addEventListener('focusin',event=>{if(!event.target.closest('.site-header'))closeMenu();});
const filters=[...document.querySelectorAll('[data-filter]')];
const panels=[...document.querySelectorAll('[data-product]')];
function selectProduct(value,animate=false){filters.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===value)));panels.forEach(panel=>{const selected=panel.dataset.product===value;panel.hidden=!selected;panel.classList.toggle('is-changing',selected&&animate);});}
filters.forEach((button,index)=>{button.addEventListener('click',()=>selectProduct(button.dataset.filter,true));button.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?filters.length-1:(index+(event.key==='ArrowRight'?1:-1)+filters.length)%filters.length;filters[next].focus();selectProduct(filters[next].dataset.filter,true);});});
selectProduct('floor');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.15});document.querySelectorAll('.section-heading,.equipment-copy,.finder-heading,.closing,.feature-row>div,.bands-copy,.bands-image,.catalog-card').forEach(el=>observer.observe(el));}
