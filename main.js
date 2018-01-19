var viewportHeight = window.innerHeight;
var body = document.getElementsByTagName('body');
body[0].setAttribute("data-offset", viewportHeight/2);

if (window.attachEvent) {
    window.attachEvent('onresize', function() {
        viewportHeight = window.innerHeight;
        body[0].setAttribute("data-offset", viewportHeight/2);
    });
} else if (window.addEventListener) {
    window.addEventListener('resize', function() {
        viewportHeight = window.innerHeight;
        body[0].setAttribute("data-offset", viewportHeight/2);
    }, true);
}