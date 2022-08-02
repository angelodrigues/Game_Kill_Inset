var height = 0;
var width = 0;

function adjustScreenSize() {

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
        inset.className = 'inset1'
        inset.style.left = positionX + 'px';
        inset.style.top = positionY + 'px';
        inset.style.position = 'absolute';
    
        document.body.appendChild(inset);
    }

    randomPosition();
    
}

adjustScreenSize();

