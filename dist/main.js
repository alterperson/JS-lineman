(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelectorAll(".fancyboxModal").forEach((l=>{l.addEventListener("click",(()=>{e.style.display="block",t.style.display="block"}))})),document.addEventListener("click",(l=>{(l.target.classList.contains("modal-overlay")||l.target.closest(".modal-close"))&&(e.style.display="none",t.style.display="none")}))})(),document.querySelectorAll(".top-menu a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href");window.scrollTo({top:document.querySelector(t).offsetTop,behavior:"smooth"})}))})),(()=>{const e=document.querySelector(".top-slider").querySelectorAll(".item"),t=document.querySelectorAll(".table");let l,o=0;t.forEach((e=>{e.style.visibility="visible",e.style.opacity="1"})),l=setInterval((()=>{e[o].classList.remove("animated"),e[o].style.display="none",e[o].classList.remove("fadeIn"),o++,o>=e.length&&(o=0),e[o].classList.add("animated"),e[o].style.display="block",e[o].classList.add("fadeIn")}),3e3)})(),(()=>{const e=document.querySelector(".arrow-right"),t=document.querySelector(".arrow-left"),l=document.querySelector(".services-carousel"),o=l.getElementsByClassName("slide-carousel"),s=document.querySelector(".services-arrow");for(let e=3;e<6;e++)o[e].style.display="none";s.addEventListener("click",(s=>{s.target===e?(o[0].style.display="none",l.append(o[0]),o[2].style.display="flex"):s.target==t&&(o[2].style.display="none",l.prepend(o[5]),o[0].style.display="flex")}))})()})();