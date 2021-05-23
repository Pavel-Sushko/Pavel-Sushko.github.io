let btn = document.querySelector("header button");

let rain = document.getElementById("rain");
let ctx = rain.getContext("2d");

// Making the canvas full screen for slower looking animation
rain.height = window.innerHeight;
rain.width = window.innerWidth;

// Chinese characters - taken from the unicode charset
let chinese =
	"田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
// Converting the string into an array of single characters
chinese = chinese.split("");

let font_size = 10;
let columns = rain.width / font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (let x = 0; x < columns; x++) drops[x] = 1;

//drawing the characters
function draw() {
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, rain.width, rain.height);

	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for (let i = 0; i < drops.length; i++) {
		//a random chinese character to print
		let text = chinese[Math.floor(Math.random() * chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i * font_size, drops[i] * font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if (drops[i] * font_size > rain.height && Math.random() > 0.975)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);

$(btn).hover(
	function () {
		$(this).stop(true).fadeTo("slow", 0);
	},
	function () {
		$(this).stop(true).fadeTo("slow", 1);
	}
);
