var circle = document.getElementById("box1");
var text = document.getElementById("one");

circle.onclick = function () {
    if (text.style.display !== 'none') {
        text.style.display = 'none';
    } 
    else {
        text.style.display = "block";
    }
};