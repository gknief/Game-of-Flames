
// Polyfill: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


window.onload = function() {
    
    const body = document.body;    
    const requestAnimationFrame = window.requestAnimationFrame;
    
    const demon = document.querySelector('.demon');
    let fireballPosition = 0;
    const fireballs = ['left', 'top', 'bottom', 'right'];
    const fireballLeft = document.querySelector('.fireballLeft');
    const fireballTop = document.querySelector('.fireballTop');
    const fireballBottom = document.querySelector('.fireballBottom');
    const fireballRight = document.querySelector('.fireballRight');
    let button = document.querySelector('button');
    
    function renderFrame() {
        
        for(i = 0; i < fireballs.length; i++) {
            fireballs[i]
        }


        fireballPosition += 5;
        fireballLeft.style.left = fireballPosition + 'px';
        fireballTop.style.top = fireballPosition + 'px';
        fireballBottom.style.bottom = fireballPosition + 'px';
        fireballRight.style.right = fireballPosition + 'px';

        requestAnimationFrame(renderFrame);
    };
    
    button.addEventListener('click', function() {
        requestAnimationFrame(renderFrame);
    });
    
    
    document.body.addEventListener('keydown', function() {
        // spacebar=32
        if (evt.keyCode === 37) {
            buildBorderLeft();
        } else if (evt.keyCode === 38) {
            buildBorderTop();
        } else if (evt.keyCode === 39) {
            buildBorderRight();
        } else if (evt.keyCode === 40) {
            buildBorderBottom();
        }
    });
    
    function blockFireball() {
        
    }
    
    function buildBorderLeft() {
        setInterval(function() {
            demon.style.borderLeft = '5px solid black';
        }, 500);
    }
    
    function buildBorderTop() {
        setInterval(function() {
            demon.style.borderTop = '5px solid black';
        }, 500);
    }

    function buildBorderRight() {
        setInterval(function() {
            demon.style.borderRight = '5px solid black';
        }, 500);
    }
    

    function buildBorderBottom() {
        setInterval(function() {
            demon.style.borderBottom = '5px solid black';
        }, 500);
    }
    

}




// https://itnext.io/javascript-raf-requestanimationframe-456f8a0d04b0
// 60 FPS
// (1000 ms /60 frames) = 16.7 ms. Let’s move our DOM element 1px in callback execution while 
// callback needs to be called at every 16.7ms.