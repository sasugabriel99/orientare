window.addEventListener("deviceorientation", on_device_orientation);
function on_device_orientation(evt)
{
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;
    document.getElementById("a").innerHTML = "alpha = "+alpha;
    document.getElementById("b").innerHTML = "beta = "+beta;
    document.getElementById("c").innerHTML = "gamma = "+gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var centru = {x:canvas.width/2, y:canvas.height/2}

    context.fillStyle = "#6A0888";
    context.beginPath();
    context.arc(centru.x, centru.y, evt.gamma, 0, 2 * Math.PI);
    context.stroke();
   
}