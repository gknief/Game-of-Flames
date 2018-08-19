
// Polyfill: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


window.onload = function() {
    
    const body = document.body;    
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;
    
    const demon = document.querySelector('.demon');
    let fireballPositionLeft = -150;
    let fireballPositionTop = -200;
    let fireballPositionBottom = -240;
    let fireballPositionRight = -270;
    const fireballLeft = document.querySelector('.fireball-left');
    const fireballTop = document.querySelector('.fireball-top');
    const fireballBottom = document.querySelector('.fireball-bottom');
    const fireballRight = document.querySelector('.fireball-right');
    let button = document.querySelector('button');

    let hasBorderLeft = false;
    let hasBorderTop = false;
    let hasBorderBottom = false;
    let hasBorderRight = false;

    let score = 30;

    // let min = 0;
    // let max = 0;

    
    window.addEventListener('load', function() {

       setTimeout(renderFrame, Math.floor(Math.random() * 7000));
       setTimeout(renderFrame, Math.floor(Math.random() * 7000));
       setTimeout(renderFrame, Math.floor(Math.random() * 7000));
       setTimeout(renderFrame, Math.floor(Math.random() * 7000));
       
    });
    
     // for(i = 0; i < shootFireballs.length; i++) {
     //     // let randomFireball = shootFireballs[Math.random() * shootFireballs.length];
     //     shootFireballs[i]();
     // }
    
    
     function renderFrame() {
        fireballPositionLeft += 2;
        fireballPositionTop += 2;
        fireballPositionBottom += 2;
        fireballPositionRight += 2;
         
        fireballLeft.style.left = fireballPositionLeft + 'px';
        fireballTop.style.top = fireballPositionTop + 'px';
        fireballBottom.style.bottom = fireballPositionBottom + 'px';
        fireballRight.style.right = fireballPositionRight + 'px';
        const scoreboard = document.querySelector('.scoreboard');
        const blockCounter = scoreboard.innerHTML = score;
        let wonGame;
        let lostGame;

        if (blockCounter === 0) {
            wonGame = document.querySelector('.body').classList.add('you-win');
         }
         

        if(fireballPositionLeft >= 110) {
            if(hasBorderLeft === false) {
            lostGame = document.querySelector('.body').classList.add('you-lose');
            }
            if(hasBorderLeft === true) {
                score -= 1;
                demon.style.borderLeft = 'none';
                fireballPositionLeft = -150;
                hasBorderLeft = false;
            }
        }

        if(fireballPositionTop >= 116) {
            if(hasBorderTop === false) {
            lostGame = document.querySelector('.body').classList.add('you-lose');
            }
            if(hasBorderTop === true) {
                score -= 1;
                demon.style.borderTop = 'none';
                fireballPositionTop = -200;
                hasBorderTop = false;
            }
        }

        if(fireballPositionBottom >= 116) {
            if(hasBorderBottom === false) {
            // alert('Game over, you\'ve been hit.');
            }
            if(hasBorderBottom === true) {
                score -= 1;
                demon.style.borderBottom = 'none';
                fireballPositionBottom = -180;
                hasBorderBottom = false;
            }
        }

        if(fireballPositionRight === 122) {
            if(hasBorderRight === false) {
            // alert('Game over, you\'ve been hit.');
            }
            if(hasBorderRight === true) {
                score -= 1;
                demon.style.borderRight = 'none';
                fireballPositionRight = -190;
                hasBorderRight = false;
            }
        }


        requestAnimationFrame(renderFrame);
    };

    requestAnimationFrame(renderFrame);

    
    document.body.addEventListener('keydown', function(event) {
        if (event.keyCode === 37) {
            buildBorderLeft();
            hasBorderLeft = true;
            // hasBorderTop = false;
            // hasBorderBottom = false;
            // hasBorderRight = false;
            setTimeout(function() {
            demon.classList.toggle = ('demon-evolve');
            }, 500);    
        } 
        if (event.keyCode === 38) {
            buildBorderTop();
            // hasBorderLeft = false;
            hasBorderTop = true;
            // hasBorderBottom = false;
            // hasBorderRight = false;
            setTimeout(function() {
            demon.classList.toggle = ('demon-evolve');
            }, 500);    
        } 
        if (event.keyCode === 39) {
            buildBorderRight();
            // hasBorderLeft = false;
            // hasBorderTop = false;
            // hasBorderBottom = false;
            hasBorderRight = true;
            setTimeout(function() {
            demon.classList.toggle = ('demon-evolve');
            }, 500);    
        } 
        if (event.keyCode === 40) {
            buildBorderBottom();
            // hasBorderLeft = false;
            // hasBorderTop = false;
            hasBorderBottom = true;
            // hasBorderRight = false;
            setTimeout(function() {
            demon.classList.toggle = ('demon-evolve');
            }, 500);    
        }
    });
    
    
    function buildBorderLeft() {
        demon.style.borderLeft = '5px solid black';
        hasBorderLeft = true;
        setTimeout(function() {
        demon.style.borderLeft = 'none';
        hasBorderLeft = false;
        }, 500);
    }
    
    function buildBorderTop() {
        demon.style.borderTop = '5px solid black';
        hasBorderTop = true;
        setTimeout(function() {
        demon.style.borderTop = 'none';
        hasBorderTop = false;
        }, 500);
    }

    function buildBorderRight() {
        demon.style.borderRight = '5px solid black';
        hasBorderBottom = true;
        setTimeout(function() {
        demon.style.borderRight = 'none';
        hasBorderRight = false;
        }, 500);
    }
    

    function buildBorderBottom() {
        demon.style.borderBottom = '5px solid black';
        hasBorderRight = true;
        setTimeout(function() {
        demon.style.borderBottom = 'none';
        hasBorderBottom = false;
        }, 500);
    }
    

}
