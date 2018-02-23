/*global window, document*/
(function () {
    'use strict';
    var viewportHeight = window.innerHeight,
        body = document.getElementsByTagName('body')[0],
        section = document.getElementsByTagName('section');
    body.setAttribute("data-offset", viewportHeight / 2);
    if (window.attachEvent) {
        window.attachEvent('onresize', function () {
            viewportHeight = window.innerHeight;
            body.setAttribute("data-offset", viewportHeight / 2);
        });
    } else if (window.addEventListener) {
        window.addEventListener('resize', function () {
            viewportHeight = window.innerHeight;
            body.setAttribute("data-offset", viewportHeight  / 2);
        }, true);
    }
    function setRealWidth() {
        var realViewportWidth = body.clientWidth;
        for (var i = 0; i < section.length; i++) {
            section[i].setAttribute ('style', 'width: ' + realViewportWidth + 'px; margin-left: calc( (-0.5 * ' + realViewportWidth + 'px) + 50%);');
        }
    }
    setRealWidth();
    if (window.attachEvent) {
        window.attachEvent('onresize', setRealWidth);
    } else if (window.addEventListener) {
        window.addEventListener('resize', setRealWidth, true);
    }
})();