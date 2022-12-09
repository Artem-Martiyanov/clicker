const coin = document.querySelector('.coin');
const clickCounter = document.querySelector('.click__counter');
const upList = document.querySelectorAll('.upgrade__list>li');
let clickValue = 0; // Кол-во очков
let coinPerSec = document.querySelector('.coins_per_second');


let multipler = 0;

function anim(){
    coin.classList.toggle('it_clicked_animation');
}
function getPrice(currentUpgrade){          // Передаю апгрейд, возвращает его цену
    return parseInt(currentUpgrade.querySelector('.price').innerHTML);
}
function setPrice(currentUpgrade, newPrice){  // Устанавливает переданную объекту currentUpgrade цену
    currentUpgrade.querySelector('.price').innerHTML = Math.floor(newPrice)+' руб.';
}



function multIncrem(currentItem){       //Увеличивает множитель при клике на Апгрейд
    let currentSpan = currentItem.querySelector('.upgrade__counter');
    currentSpan.innerHTML = parseInt(currentSpan.innerHTML) + 1;

    if (currentItem.classList.contains('up1')){
        multipler += 0.0005;   // за 40 сек копится 5 целых рублей
    }
    if (currentItem.classList.contains('up2')){
        multipler += 0.002;
    }
    if (currentItem.classList.contains('up3')){
        multipler += 0.008;
    }
}


//----------------GAME--------------------------
function game(){
    if(parseInt(clickValue + multipler) > parseInt(clickValue)){
        anim();
        setTimeout(anim, 100);
    }
    clickValue = clickValue + multipler; // Очки + множитель

    upList.forEach(function (item){
        if(parseInt(clickValue) >= getPrice(item)){
            item.classList.remove('it-no-bye');
        }
        else {
            item.classList.add('it-no-bye');
        }
    });










        clickCounter.innerHTML = parseInt(clickValue); // Выводит на дисплей целое кол-во очков
}
//----------------------------------------------
function start() {
    setInterval('game()', 1);
}

coin.addEventListener('click', function (){   // Клик на кружок
    clickValue ++;
    anim();
    setTimeout(anim, 100);
}) // Икрементирует clickValue при клике

upList.forEach(function (item){
   let currentUpgrade = item;


       currentUpgrade.addEventListener("click", function (){
           if(clickValue >= getPrice(currentUpgrade)) {
               multIncrem(currentUpgrade);
               clickValue -=getPrice(currentUpgrade);
               setPrice(currentUpgrade, getPrice(currentUpgrade) * 1.4)




               coinPerSec.innerHTML = 'Твой доход: '+255 * multipler+' руб./сек';
           }
       });


});



























