
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
    const fireballLeft = document.querySelector('.fireballLeft');
    const fireballTop = document.querySelector('.fireballTop');
    const fireballBottom = document.querySelector('.fireballBottom');
    const fireballRight = document.querySelector('.fireballRight');
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
         if (blockCounter === 25) {
             const wonGame = document.querySelector('.grid').classList.add('youWin');
         }
         
         // if(fireballPositionLeft === 700) {
             //     fireballPositionLeft = -200;
        // } 
        // if(fireballPositionTop === 700) {
        //     fireballPositionTop = -200;
        // } 
        // if(fireballPositionBottom === 700) {
        //     fireballPositionBottom = -200;
        // } 
        // if(fireballPositionRight === 700) {
        //     fireballPositionRight = -200;
        // }


        if(fireballPositionLeft >= 110) {
            if(hasBorderLeft === false) {
            // alert('Game over, you\'ve been hit.');
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
            // alert('Game over, you\'ve been hit.');
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
            setTimeout(function() {
            demon.classList.toggle = ('.demonEvolve');
            }, 500);    
        } 
        if (event.keyCode === 38) {
            buildBorderTop();
            setTimeout(function() {
            demon.classList.toggle = ('.demonEvolve');
            }, 500);    
        } 
        if (event.keyCode === 39) {
            buildBorderRight();
            setTimeout(function() {
            demon.classList.toggle = ('.demonEvolve');
            }, 500);    
        } 
        if (event.keyCode === 40) {
            buildBorderBottom();
            setTimeout(function() {
            demon.classList.toggle = ('demonEvolve');
            }, 500);    
        }
    });
    
    
    function buildBorderLeft() {
        // setTimeout(function() {
            demon.style.borderLeft = '5px solid black';
            hasBorderLeft = true;
        // }, 500);
    }
    
    function buildBorderTop() {
        // setInterval(function() {
            demon.style.borderTop = '5px solid black';
            hasBorderTop = true;
        // }, 500);
    }

    function buildBorderRight() {
        // setInterval(function() {
            demon.style.borderRight = '5px solid black';
            hasBorderBottom = true;
        // }, 500);
    }
    

    function buildBorderBottom() {
        // setInterval(function() {
            demon.style.borderBottom = '5px solid black';
            hasBorderRight = true;
        // }, 500);
    }
    

}
