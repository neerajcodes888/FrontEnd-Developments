let canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 100;
	drawLinesFromDB();
});

let ctx = canvas.getContext("2d");

let linesDB = [];
let redoLinesDB = [];
let isPenDown = false;
let line = [];

canvas.addEventListener("mousedown", function(e) {
	if (redoLinesDB.length) {
		redoLinesDB = [];
	}
	console.log("Inside mouse down");
	isPenDown = true;
	let x = e.clientX;
	let y = e.clientY - 100;
	ctx.beginPath();
	ctx.moveTo(x, y);

	let pointObject = {
		x: x,
		y: y,
		type: "md",
		lineWidth: ctx.lineWidth,
		strokeStyle: ctx.strokeStyle,
	};
	line.push(pointObject);
});