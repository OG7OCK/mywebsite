!function(){"use strict";window.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.querySelector(".tabheader__items").querySelectorAll(".tabheader__item"),t=document.querySelector(".tabcontainer").querySelectorAll(".tabcontent");e.forEach(((c,n)=>{c.addEventListener("click",(()=>{e.forEach((e=>{e.classList.contains("tabheader__item_active")&&e.classList.remove("tabheader__item_active")})),c.classList.add("tabheader__item_active"),t.forEach((e=>{e.classList.contains("_active")&&e.classList.remove("_active")})),t[n].classList.add("_active")}))}))})(),document.querySelectorAll("form").forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const c=document.createElement("div");c.classList.add("status"),c.textContent="Loading...",t.append(c);const n=new FormData(t);(async function(e,t){const c=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await c.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{console.log(e),c.textContent="Ty, will contact"})).catch((()=>{c.textContent="Failure"})).finally((()=>{setTimeout((function(){t.reset(),c.remove()}),2e3)}))}))})),function(){const e=document.querySelector(".calculating__result span"),t=document.querySelector("#gender"),c=t.querySelectorAll(".calculating__choose-item"),n=document.querySelector("#activity"),a=n.querySelectorAll(".calculating__choose-item"),o=document.querySelector("#attr").querySelectorAll("input");let i,s,l,r,d;function u(t,c,n,a,o){e.innerHTML=t&&c&&n&&a&&o?"male"==o?`\n                ${Math.round((88.36+13.4*t+4.8*c-5.7*n)*a)}\n                `:`\n                ${Math.round((447.6+9.2*t+3.1*c-4.3*n)*a)}\n                `:0}localStorage.getItem("gender")?(r=localStorage.getItem("gender"),document.querySelector(`#${localStorage.getItem("gender")}`).classList.add("calculating__choose-item_active")):(r="female",t.querySelector("#female").classList.add("calculating__choose-item_active"),localStorage.setItem("gender","female")),localStorage.getItem("coef")?(d=localStorage.getItem("coef"),document.querySelector(`[data-coef='${localStorage.getItem("coef")}']`).classList.add("calculating__choose-item_active")):(d=1.375,n.querySelector('[data-coef="1.375"]').classList.add("calculating__choose-item_active"),localStorage.setItem("coef",1.375)),u(i,s,l,d,r),t.addEventListener("click",(e=>{r=e.target.id,localStorage.setItem("gender",e.target.id),c.forEach((t=>{e.target.classList.contains("calculating__choose-item")&&(t.classList.contains("calculating__choose-item_active")&&t.classList.remove("calculating__choose-item_active"),e.target.classList.add("calculating__choose-item_active"))})),u(i,s,l,d,r)})),n.addEventListener("click",(e=>{d=e.target.getAttribute("data-coef"),localStorage.setItem("coef",e.target.getAttribute("data-coef")),a.forEach((t=>{e.target.classList.contains("calculating__choose-item")&&(t.classList.contains("calculating__choose-item_active")&&t.classList.remove("calculating__choose-item_active"),e.target.classList.add("calculating__choose-item_active"))})),u(i,s,l,d,r)})),o.forEach((e=>{e.addEventListener("input",(()=>{e.value.match(/\D/gi)?e.style.border="1px solid red":e.style.border="none","weight"==e.id?i=+e.value:"height"==e.id?s=+e.value:"age"==e.id&&(l=+e.value),u(i,s,l,d,r)}))}))}(),function(){class e{constructor(e,t,c,n,a,o){this.src=e,this.alt=t,this.title=c,this.descr=n,this.price=a,this.parent=document.querySelector(o),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");e.innerHTML=`\n            <div class="menu__item">\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            </div>\n            `,this.parent.append(e)}}(async function(e){const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{new e(t.img,t.altimg,t.title,t.descr,t.price,".menu .container").render()}))}))}(),function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal"),c=document.querySelector("[data-close]");function n(){t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}function a(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(o)}e.forEach((e=>{e.addEventListener("click",a)})),c.addEventListener("click",n),t.addEventListener("click",(e=>{e.target===t&&n()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&t.classList.contains("show")&&n()}));const o=setTimeout(a,3e3)}(),function(){function e(e){return e>=0&&e<10?`0${e}`:e}!function(t,c){const n=document.querySelector(".timer"),a=n.querySelector("#days"),o=n.querySelector("#hours"),i=n.querySelector("#minutes"),s=n.querySelector("#seconds"),l=setInterval(r,1e3);function r(){const t=function(e){const t=Date.parse("2021-12-1")-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/1e3*60*60%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}}();a.innerHTML=e(t.days),o.innerHTML=e(t.hours),i.innerHTML=e(t.minutes),s.innerHTML=e(t.seconds),t.total<=0&&clearInterval(l)}r()}()}(),function(){const e=document.querySelectorAll(".offer__slide"),t=document.querySelector(".offer__slider"),c=document.querySelector(".offer__slider-prev"),n=document.querySelector(".offer__slider-next"),a=document.querySelector("#total"),o=document.querySelector("#current"),i=document.querySelector(".offer__slider-field"),s=window.getComputedStyle(e[0]).width,l=document.createElement("ol");i.style.width=s.slice(0,s.length-2)*e.length+"px";let r=0,d=1;l.classList.add("carousel-indicators"),t.append(l),e.forEach(((e,t)=>{let c=document.createElement("div");c.classList.add("dot"),c.id=t+1,l.append(c)}));const u=l.querySelectorAll(".dot");function m(e){i.style.transform=`translateX(-${e}px)`,i.style.transition="all 350ms ease-in-out"}function h(t){a.innerHTML=`\n            0${e.length}\n        `,o.innerHTML=`\n            0${t}\n        `}function _(e){u.forEach((t=>{t.id==e?t.style.opacity=1:t.style.opacity=.5}))}h(d),_(d),n.addEventListener("click",(()=>{r==s.slice(0,s.length-2)*(e.length-1)?(r=0,d=1):(r+=+s.slice(0,s.length-2),d+=1),m(r),h(d),_(d)})),c.addEventListener("click",(()=>{0==r?(r=s.slice(0,s.length-2)*(e.length-1),d=e.length):(r-=+s.slice(0,s.length-2),d-=1),m(r),h(d),_(d)})),u.forEach((e=>{e.addEventListener("click",(()=>{r=(e.id-1)*s.slice(0,s.length-2),d=+e.id,h(d),_(d),m(r)}))}))}()}))}();
//# sourceMappingURL=bundle.js.map