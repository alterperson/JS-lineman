(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelectorAll(".fancyboxModal").forEach((l=>{l.addEventListener("click",(l=>{l.preventDefault(),e.style.display="block",t.style.display="block"}))})),document.addEventListener("click",(l=>{(l.target.classList.contains("modal-overlay")||l.target.closest(".modal-close"))&&(e.style.display="none",t.style.display="none")}))})(),document.querySelectorAll(".top-menu a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href");window.scrollTo({top:document.querySelector(t).offsetTop,behavior:"smooth"})}))})),(()=>{const e=document.querySelector(".top-slider").querySelectorAll(".item"),t=document.querySelectorAll(".table");let l,o=0;t.forEach((e=>{e.style.visibility="visible",e.style.opacity="1"})),l=setInterval((()=>{e[o].classList.remove("animated"),e[o].style.display="none",e[o].classList.remove("fadeIn"),o++,o>=e.length&&(o=0),e[o].classList.add("animated"),e[o].style.display="block",e[o].classList.add("fadeIn")}),3e3)})(),(()=>{const e=document.querySelector(".arrow-right"),t=document.querySelector(".arrow-left"),l=document.querySelector(".services-carousel"),o=l.getElementsByClassName("slide-carousel"),r=document.querySelector(".services-arrow");for(let e=3;e<6;e++)o[e].style.display="none";r.addEventListener("click",(r=>{r.target===e?(o[0].style.display="none",l.append(o[0]),o[2].style.display="flex"):r.target==t&&(o[2].style.display="none",l.prepend(o[5]),o[0].style.display="flex")}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content");t.forEach(((e,o)=>{e.addEventListener("click",(()=>{(e=>{for(let o=0;o<t.length;o++)e===o?(t[o].classList.add("active"),l[o].style.display="block"):(t[o].classList.remove("active"),l[o].style.display="none")})(o)}))}))})(),(()=>{const e=document.querySelector(".up"),t=document.querySelector(".services-section").offsetTop;e.style.display="none",window.addEventListener("scroll",(()=>{window.pageYOffset>=t?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})(),(()=>{const e=document.querySelector("form").querySelectorAll("input"),t=document.querySelector("input[name=fio]"),l=document.querySelector("input[name=tel]"),o=/[^а-яё ]/gi,r=/^((\+7|7|8)+([0-9]))$/gi,a=e=>{event.target.value.length<e?event.target.setCustomValidity(`Пожалуйста введите не менее ${e} символов`):event.target.setCustomValidity("")};e.forEach((e=>{e.addEventListener("input",(t=>{"fio"==e.name&&(t.target.value=t.target.value.replace(o,""),t.target.value=t.target.value.charAt(0).toUpperCase()+t.target.value.substr(1).toLowerCase()),"tel"==e.name&&(t.target.value=t.target.value.replace(r,""))}))})),e.forEach((e=>{e.setAttribute("required",!0)})),t.addEventListener("input",(e=>{a(2)})),l.addEventListener("input",(e=>{a(6)}))})(),(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelector("form"),o=l.querySelectorAll("input"),r=document.createElement("div"),a=/[^а-яё ]/gi,n=/^((\+7|7|8)+([0-9]))$/gi;r.style.color="#000000";try{if(!l)throw new Error("Неверно указана форма");l.addEventListener("submit",(s=>{s.preventDefault(),(()=>{const s=new FormData(l),c={};var i;r.textContent="Отправляем...",l.append(r),s.forEach(((e,t)=>{c[t]=e})),(e=>{let t=!0;return e.forEach((e=>{"fio"===e.name&&a.test(e.value)&&(t=!1),"tel"===e.name&&n.test(e.value)&&(t=!1)})),t})(o)?(i=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((l=>{r.textContent="Форма успешно отправлена!",setTimeout((()=>{e.style.display="none",t.style.display="none",r.textContent=""}),2e3),o.forEach((e=>{"submit"!==e.type&&(e.value="")}))})).catch((e=>{r.textContent="Ошибка..."})):alert("Данные не валидны")})()}))}catch(e){console.log(e.message)}})()})();