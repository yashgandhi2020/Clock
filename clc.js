const sechand = document.querySelector(`.sec-hand`);
const minhand = document.querySelector(".min-hand");
const hrhand = document.querySelector(".hr-hand");

function setdate() {

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsdegree = ((seconds / 60) * 360) + 90;
    sechand.style.transform = `rotate(${secondsdegree}deg)`;

    const min = now.getMinutes();
    const mindegree = ((min / 60) * 360) + ((seconds / 60) * 6) + 90;
    minhand.style.transform = `rotate(${mindegree}deg)`;

    const hr = now.getHours();
    const hrdegree = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hrhand.style.transform = `rotate(${hrdegree}deg)`;

}
setInterval(setdate, 1000);

setdate();


