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



canvas.addEventListener("mousemove", function(e) {
	if (isPenDown) {
		console.log("Inside mousemove");
		let x = e.clientX;
		let y = e.clientY - 100;
		ctx.lineTo(x, y);
		ctx.stroke();

		let pointObject = {
			x: x,
			y: y,
			type: "mm",
		};
		line.push(pointObject);
	}
});


canvas.addEventListener("mouseup", function() {
	console.log("mouseup");
	isPenDown = false;

	linesDB.push(line);
	line = [];

	console.log(linesDB);
});


// Drawing


let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");

let penOptions = pen.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");


let penSize = penOptions.querySelector("#pensize");
let eraserSize = eraserOptions.querySelector("#erasersize");

let penColors = penOptions.querySelectorAll(".pen-colors div");

let currentPenSize = 1;
let currentPenColor = "black";
let currentEraserSize = 1;