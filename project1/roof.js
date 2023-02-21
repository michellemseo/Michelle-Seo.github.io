var circle = document.getElementById("box1");
var text = document.getElementById("one");

circle.onclick = function () {
    if (text.style.display !== 'block') {
        text.style.display = 'block';
    } 
    else {
        text.style.display = "none";
    }
};