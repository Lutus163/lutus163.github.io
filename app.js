let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = 0;

let btn1 = document.getElementByld('btn1');
let btn2 = document.getElementByld('btn1');
let btn3 = document.getElementByld('btn1');
let btn4 = document.getElementByld('btn1');
let btn5 = document.getElementByld('btn1');

btn1.addEventListener("click", function() {
    item += 1000;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
})

btn2.addEventListener("click", function() {
    item += 2000;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
})

btn3.addEventListener("click", function() {
    item += 1300;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
})

btn4.addEventListener("click", function() {
    item += 1400;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
})

btn5.addEventListener("click", function() {
    item += 1250;
    tg.MainButton.setText(String(item));
    tg.MainButton.show();
})

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);

})

