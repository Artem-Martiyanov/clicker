const coin = document.querySelector('.coin');
const clickCounter = document.querySelector('.click__counter');
const upList = document.querySelectorAll('.upgrade__list>li');
let clickValue = 0; // Кол-во очков


let multipler = 0;

function anim(){
    coin.classList.toggle('it_clicked_animation');
}




function multIncrem(currentItem){       //Увеличивает множитель при клике на Апгрейд
    let currentSpan = currentItem.querySelector('.upgrade__counter');
    currentSpan.innerHTML = parseInt(currentSpan.innerHTML) + 1;

    if (currentItem.classList.contains('up1')){
        multipler += 0.001;
    }
    if (currentItem.classList.contains('up2')){
        multipler += 0.004;
    }
    if (currentItem.classList.contains('up3')){
        multipler += 0.016;
    }
}


//----------------GAME--------------------------
function game(){
    if(parseInt(clickValue + multipler) > parseInt(clickValue)){
        anim();
        setTimeout(anim, 100);
    }
    clickValue = clickValue + multipler; // Очки + множитель










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
       multIncrem(currentUpgrade);

   });
});



























