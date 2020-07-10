const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval( ()=> {
    const date = new Date();
    const second = date.getSeconds() * 6 + 90;
    const minute = date.getMinutes() * 6 + 90;
    const hour = date.getHours() * 30 + 90;

    secondHand.style.transform = `rotate(${second}deg)`;
    minHand.style.transform = `rotate(${minute}deg)`;
    hourHand.style.transform = `rotate(${hour}deg)`;
    

}, 1000)