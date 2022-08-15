var lifes = 1;
var time = 0;
var nivel = window.location.search;
nivel = nivel.replace('?', '');
var creationTimeOfTheInsects = 1500;

if(nivel === 'normal') {
    creationTimeOfTheInsects = 1500;
    time = 60;
} else if(nivel === 'medium') {
    creationTimeOfTheInsects = 1000;
    time = 120;
} else if(nivel === 'hard') {   
    creationTimeOfTheInsects = 750;
    time = 150;
}

function adjustScreenSize() {


    var height = window.innerHeight;
    var width = window.innerWidth;
    var stopWatch = setInterval(function(){

        time -= 1;
    
        if(time < 0){
            window.location.href = 'win.html';
            clearInterval(stopWatch);
            clearInterval(createInset);
        } else {
            document.getElementById('watch').innerHTML = time;
        }
    }, 1000);

    function randomPosition() {

        if(document.getElementById('inset')) {
            document.getElementById('inset').remove();
            if(lifes > 3) {
                window.location.href = 'end_game.html'
            } else {
                document.getElementById('v' + lifes).src = "images/coracao_vazio.png";
    
                lifes++;
            }
        } 

        console.log(lifes);

        var positionX = Math.floor(Math.random() * width) - 90;
        var positionY = Math.floor(Math.random() * height) - 90;
    
        positionX = positionX < 0 ? 0 : positionX;
        positionY = positionY < 0 ? 0 : positionY;
    
        //create the html element
        var inset = document.createElement('img');
        inset.src = 'images/mosca.png';
        inset.className = randomSize() + ' ' + randomSide();
        inset.style.left = positionX + 'px';
        inset.style.top = positionY + 'px';
        inset.style.position = 'absolute';
        inset.id = 'inset';
        inset.onclick = function() {
            this.remove();
        }
    
        document.body.appendChild(inset);
    }

    randomPosition();

    function randomSize() {
        var classe = Math.floor(Math.random() * 3);
        
        switch(classe) {
            case 0:
                return 'inset1'
            case 1:
                return 'inset2'
            case 2:
                return 'inset3'
        } 
    }

    function randomSide() {
        var classe = Math.floor(Math.random() * 2);

        switch(classe) {
            case 0:
                return 'sideA';
            case 1: 
                return 'sideB';    
        }
    }
}

var createInset = setInterval(function(){
    adjustScreenSize();
}, creationTimeOfTheInsects );