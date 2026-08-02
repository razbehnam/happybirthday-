// =====================
// دکمه فراری
// =====================

let tries = 0;

const btn = document.getElementById("loveBtn");
const text = document.getElementById("funText");

btn.addEventListener("mouseover", () => {

    if (tries < 3) {

        tries++;

        const x = Math.random() * (window.innerWidth - 220);
        const y = Math.random() * (window.innerHeight - 120);

        btn.style.position = "fixed";
        btn.style.left = x + "px";
        btn.style.top = y + "px";

        if (tries == 1)
            text.innerHTML = "😂 عه ببخشید دستم خورد... دوباره بزن روش";

        if (tries == 2)
            text.innerHTML = " نزدیک بود... یه بار دیگه ببخشید عشقم";

        if (tries == 3) {

            text.innerHTML = " باشه باشه... این دفعه میتونی بازش کنی ❤️";

            btn.style.position = "relative";
            btn.style.left = "0";
            btn.style.top = "0";

        }

    }

});



// =====================
// باز شدن نامه
// =====================

btn.addEventListener("click", () => {

    if (tries < 3)
        return;

    document
        .getElementById("letter")
        .classList
        .remove("hidden");

    const music =
        document.getElementById("bgMusic");

    music.play().catch(()=>{});

    createHearts();

    window.scrollTo({

        top:document.getElementById("letter").offsetTop,

        behavior:"smooth"

    });

});




// =====================
// شمارنده رابطه
// =====================

const startDate = new Date("2023-05-01");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor(diff/(1000*60*60)%24);

    const minutes = Math.floor(diff/(1000*60)%60);

    document.getElementById("counter").innerHTML=

    days+" روز ❤️<br>"+

    hours+" ساعت 💕<br>"+

    minutes+" دقیقه";

}

setInterval(updateCounter,1000);

updateCounter();




// =====================
// بارش قلب
// =====================

function createHearts(){

    for(let i=0;i<70;i++){

        setTimeout(()=>{

            let heart=document.createElement("div");

            heart.className="floating-heart";

            heart.innerHTML="❤️🌟";

            heart.style.left=Math.random()*100+"vw";

            heart.style.top="100vh";

            heart.style.fontSize=(20+Math.random()*25)+"px";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },5000);

        },i*100);

    }

}
