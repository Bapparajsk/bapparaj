const progress = document.getElementById("progress");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const day = document.getElementById("day");
const currdate = document.getElementById("currdate");
const month = document.getElementById("month");

const Dates = () => {
    const d = new Date();
    let ans = new Array(3);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan","Feb","March","April","May","June","July","August","Sep","Ocr","Nov","Dec"];

    ans[0] = weekday[d.getDay()];
    ans[1] = month[d.getMonth()];
    ans[2] = d.getDate();

    return ans;
}

(function () {
    const dates = Dates();
    day.innerText = dates[0];
    month.innerText = dates[1];
    currdate.innerText = dates[2];
})();

setInterval(() => {
    const now = new Date();
    let Hours  =  now.getHours();
    let Minutes = now.getMinutes();

    if (Hours > 12) {
        Hours -= 12;
    }

    if (Hours < 9) {
        Hours = `0${Hours}`;
    }
    if (Minutes < 9) {
        Minutes = `0${Minutes}`;
    }



    hours.innerText = Hours;
    minutes.innerText = Minutes;

    progress.style.background = `conic-gradient(#fff ${now.getHours() * 15}deg, transparent 0deg)`

},1000);
