
window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	
    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }
    
    for (var i = 0; i < 200; i += 1) {
        context.beginPath();
        context.fillStyle = "red";
        context.arc(randomRange(0, width * .33),
                    randomRange(0, height),
                    randomRange(10, 40),
                    0, Math.PI * 2, false);
        context.fill();
        
        context.beginPath();
        context.fillStyle = "green";
        context.arc(randomRange(width * .33, width * .66),
                    randomRange(0, height),
                    randomRange(10, 40),
                    0, Math.PI * 2, false);
        context.fill();
        
        context.beginPath();
        context.fillStyle = "blue";
        context.arc(randomRange(width * .66, width),
                    randomRange(0, height),
                    randomRange(10, 40),
                    0, Math.PI * 2, false);
        context.fill();
    }

};