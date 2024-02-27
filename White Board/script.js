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