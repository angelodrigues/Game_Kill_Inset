function adjustScreenSize() {

    if(document.getElementById('inset')) {
        document.getElementById('inset').remove();
    }

    var height = window.innerHeight;
    var width = window.innerWidth;

    console.log(width, height);

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX,positionY);

    function randomPosition() {

        //create the html element
        var inset = document.createElement('img');
        inset.src = 'images/mosca.png';
        inset.className = randomSize() + ' ' + randomSide();
        inset.style.left = positionX + 'px';
        inset.style.top = positionY + 'px';
        inset.style.position = 'absolute';
        inset.id = 'inset';
    
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

setInterval(function(){
    adjustScreenSize();
}, 1000)


