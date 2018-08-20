window.onload = function () {

    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    const demon = document.querySelector('.demon');
    let fireballPositionLeft = Math.floor(Math.random() * -2200) - 500;
    let fireballPositionTop = Math.floor(Math.random() * -2200) - 500;
    let fireballPositionBottom = Math.floor(Math.random() * -2200) - 500;
    let fireballPositionRight = Math.floor(Math.random() * -2200) - 500;
    const fireballLeft = document.querySelector('.fireball-left');
    const fireballTop = document.querySelector('.fireball-top');
    const fireballBottom = document.querySelector('.fireball-bottom');
    const fireballRight = document.querySelector('.fireball-right');


    let hasBorderLeft = false;
    let hasBorderTop = false;
    let hasBorderBottom = false;
    let hasBorderRight = false;

    let flame = document.getElementById('flame');
    let dungeon = document.getElementById('dungeon');
    let wall = document.getElementById('wall');

    let score = 50;

    window.addEventListener('load', function () {
        setTimeout(renderFrame, Math.floor(Math.random() * 7000));
    });



    function renderFrame() {
        dungeon.play();
        fireballPositionLeft += 4;
        fireballPositionTop += 4;
        fireballPositionBottom += 4;
        fireballPositionRight += 4;

        fireballLeft.style.left = fireballPositionLeft + 'px';
        fireballTop.style.top = fireballPositionTop + 'px';
        fireballBottom.style.bottom = fireballPositionBottom + 'px';
        fireballRight.style.right = fireballPositionRight + 'px';
        const scoreboard = document.querySelector('.scoreboard');
        const blockCounter = scoreboard.innerHTML = score;

        if (blockCounter === 0) {
            alert("YOU WIN!! Click OK to start over.");
            window.location.href = "index.html";
        }


        if (fireballPositionLeft >= 110) {
            if (fireballPositionLeft >= 124 && hasBorderLeft === false) {
                alert("You lose. Try again!");
                document.location.reload();
            }
            if (hasBorderLeft === true) {
                score -= 1;
                demon.style.borderLeftColor = 'transparent';
                fireballPositionLeft = Math.floor(Math.random() * -900) - 150;
                hasBorderLeft = false;
                flame.play();
            }
        }

        if (fireballPositionTop >= 116) {
            if (fireballPositionTop >= 134 && hasBorderTop === false) {
                alert("You lose. Try again!");
                document.location.reload();
            }
            if (hasBorderTop === true) {
                score -= 1;
                demon.style.borderTopColor = 'transparent';
                fireballPositionTop = Math.floor(Math.random() * -900) - 150;
                hasBorderTop = false;
                flame.play();
            }
        }

        if (fireballPositionBottom >= 114) {
            if (fireballPositionBottom >= 128 && hasBorderBottom === false) {
                alert("You lose. Try again!");
                document.location.reload();
            }
            if (hasBorderBottom === true) {
                score -= 1;
                demon.style.borderBottomColor = 'transparent';
                fireballPositionBottom = Math.floor(Math.random() * -900) - 150;
                hasBorderBottom = false;
                flame.play();
            }
        }

        if (fireballPositionRight >= 120) {
            if (fireballPositionRight >= 131 && hasBorderRight === false) {
                alert("You lose. Try again!");
                document.location.reload();
            }
            if (hasBorderRight === true) {
                score -= 1;
                demon.style.borderRightColor = 'transparent';
                fireballPositionRight = Math.floor(Math.random() * -900) - 150;
                hasBorderRight = false;
                flame.play();
            }
        }


        requestAnimationFrame(renderFrame);
    };

    requestAnimationFrame(renderFrame);


    document.body.addEventListener('keydown', function (event) {

        if (event.keyCode === 37) {
            buildBorderLeft();
            hasBorderLeft = true;
            wall.play();
            demon.classList.toggle('demon-evolve');
            setTimeout(function () {
                demon.classList.toggle('demon-evolve');
            }, 300);
        }
        if (event.keyCode === 38) {
            buildBorderTop();
            hasBorderTop = true;
            wall.play();
            demon.classList.toggle('demon-evolve');
            setTimeout(function () {
                demon.classList.toggle('demon-evolve');
            }, 300);
        }
        if (event.keyCode === 39) {
            buildBorderRight();
            hasBorderRight = true;
            wall.play();
            demon.classList.toggle('demon-evolve');
            setTimeout(function () {
                demon.classList.toggle('demon-evolve');
            }, 300);
        }
        if (event.keyCode === 40) {
            buildBorderBottom();
            hasBorderBottom = true;
            wall.play();
            demon.classList.toggle('demon-evolve');
            setTimeout(function () {
                demon.classList.toggle('demon-evolve');
            }, 300);
        }

    });


    function buildBorderLeft() {
        demon.style.borderLeftColor = 'black';
        hasBorderLeft = true;
        setTimeout(function () {
            demon.style.borderLeftColor = 'transparent';
            hasBorderLeft = false;
        }, 500);
    }

    function buildBorderTop() {
        demon.style.borderTopColor = 'black';
        hasBorderTop = true;
        setTimeout(function () {
            demon.style.borderTopColor = 'transparent';
            hasBorderTop = false;
        }, 500);
    }

    function buildBorderRight() {
        demon.style.borderRightColor = 'black';
        demon.classList.toggle('.demon-evolve');
        hasBorderRight = true;
        setTimeout(function () {
            demon.style.borderRightColor = 'transparent';
            hasBorderRight = false;
        }, 500);
    }


    function buildBorderBottom() {
        demon.style.borderBottomColor = 'black';
        hasBorderBottom = true;
        setTimeout(function () {
            demon.style.borderBottomColor = 'transparent';
            hasBorderBottom = false;
        }, 500);
    }


}
