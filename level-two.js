window.onload = function () {

    const body = document.body;
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    const demon = document.querySelector('.demon');
    let fireballPositionLeft = Math.floor(Math.random() * -2000) - 500;
    let fireballPositionTop = Math.floor(Math.random() * -2000) - 500;
    let fireballPositionBottom = Math.floor(Math.random() * -2000) - 500;
    let fireballPositionRight = Math.floor(Math.random() * -2000) - 500;
    const fireballLeft = document.querySelector('.fireball-left');
    const fireballTop = document.querySelector('.fireball-top');
    const fireballBottom = document.querySelector('.fireball-bottom');
    const fireballRight = document.querySelector('.fireball-right');


    let hasBorderLeft = false;
    let hasBorderTop = false;
    let hasBorderBottom = false;
    let hasBorderRight = false;

    let flame = document.getElementById('flame');
    let music = document.getElementById('music');

    let score = 40;

    window.addEventListener('load', function () {
        setTimeout(renderFrame, Math.floor(Math.random() * 7000));
    });



    function renderFrame() {
        music.play();
        fireballPositionLeft += 3;
        fireballPositionTop += 3;
        fireballPositionBottom += 3;
        fireballPositionRight += 3;

        fireballLeft.style.left = fireballPositionLeft + 'px';
        fireballTop.style.top = fireballPositionTop + 'px';
        fireballBottom.style.bottom = fireballPositionBottom + 'px';
        fireballRight.style.right = fireballPositionRight + 'px';
        const scoreboard = document.querySelector('.scoreboard');
        const blockCounter = scoreboard.innerHTML = score;

        if (blockCounter === 0) {
            alert("Advance to the final level.");
            window.location.href = "level-three.html";
        }


        if (fireballPositionLeft >= 110) {
            if (fireballPositionLeft >= 124 && hasBorderLeft === false) {
                alert("You lose. Try again!");
                document.location.reload();
            }
            if (hasBorderLeft === true) {
                score -= 1;
                demon.style.borderLeft = 'none';
                fireballPositionLeft = Math.floor(Math.random() * -800) - 100;
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
                demon.style.borderTop = 'none';
                fireballPositionTop = Math.floor(Math.random() * -800) - 100;
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
                demon.style.borderBottom = 'none';
                fireballPositionBottom = Math.floor(Math.random() * -800) - 100;
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
                demon.style.borderRight = 'none';
                fireballPositionRight = Math.floor(Math.random() * -800) - 100;
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
        }
        if (event.keyCode === 38) {
            buildBorderTop();
            hasBorderTop = true;
        }
        if (event.keyCode === 39) {
            buildBorderRight();
            hasBorderRight = true;
        }
        if (event.keyCode === 40) {
            buildBorderBottom();
            hasBorderBottom = true;
        }
        
    });


    function buildBorderLeft() {
        demon.style.borderLeft = '5px groove black';
        hasBorderLeft = true;
        setTimeout(function () {
            demon.style.borderLeft = 'none';
            hasBorderLeft = false;
        }, 500);
    }

    function buildBorderTop() {
        demon.style.borderTop = '5px groove black';
        hasBorderTop = true;
        setTimeout(function () {
            demon.style.borderTop = 'none';
            hasBorderTop = false;
        }, 500);
    }

    function buildBorderRight() {
        demon.style.borderRight = '5px groove black';
        demon.classList.toggle('.demon-evolve');
        hasBorderRight = true;
        setTimeout(function () {
            demon.style.borderRight = 'none';
            hasBorderRight = false;
        }, 500);
    }


    function buildBorderBottom() {
        demon.style.borderBottom = '5px groove black';
        hasBorderBottom = true;
        setTimeout(function () {
            demon.style.borderBottom = 'none';
            hasBorderBottom = false;
        }, 500);
    }


}
