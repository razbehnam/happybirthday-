function openLetter(){

    document.getElementById("letter").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    music.play();

}




const startDate = new Date("2023-05-01");


function updateCounter(){

    const now = new Date();


    const difference = now - startDate;


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    document.getElementById("counter").innerHTML =
    days + " روز ❤️ " +
    hours + " ساعت 💕 " +
    minutes + " دقیقه";


}


setInterval(updateCounter,1000);


updateCounter();
