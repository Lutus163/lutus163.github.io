let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = 0;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click", function() {
    item += 1000;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
});

btn2.addEventListener("click", function() {
    item += 2000;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
});

btn3.addEventListener("click", function() {
    item += 1200;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
});

btn4.addEventListener("click", function() {
    item += 1400;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
});

btn5.addEventListener("click", function() {
    item += 1300;
    tg.MainButton.setText("Итого: "+String(item));
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData("Итого: "+item);
    item = 0;
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
