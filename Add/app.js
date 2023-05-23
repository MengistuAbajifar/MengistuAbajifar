const numHolder = document.querySelector(".nums");
let limit = 10;
let level = limit;
let ans = 0;
let myInterval = setInterval(start, 100);
function begin() {
    level = 0;
    ans = 0;
    numHolder.innerHTML = "Go!";
    clearInterval(myInterval)
    myInterval = setInterval(start, 1000);
}
function start() {
    if (level < limit) {
        let rn = randomNum();
        numHolder.innerHTML = rn;
        ans += rn;
        level += 1;
    } else clearInterval(myInterval)
}

function show() {
    if (level > limit-1) {
        numHolder.innerHTML = ans;  
    }
}
function stop() {
    numHolder.innerHTML = "ready?";
    clearInterval(myInterval)
}
function randomNum() {
    var num = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    var sign = Math.random() < 0.5 ? -1 : 1; // Generate a random sign (-1 or 1)
    return num * sign; // Return the random number with the random sign
}