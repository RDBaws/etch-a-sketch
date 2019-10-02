let container = document.querySelector('.container');

function createSketch(x) {
	for (let i = 0; i < x * x; i++) {
		let drawSpace = document.createElement('div');
		drawSpace.classList.add('squares');
		drawSpace.addEventListener('mouseover', hover);
		document.querySelector('.container').appendChild(drawSpace);
		document.documentElement.style.setProperty('--colNum', x);

		function hover() {
			drawSpace.classList.add('hover');
		}
	}
}

function clearBoard() {
	let gridCount = document.querySelector('.container').childElementCount;
	for (let j = 0; j < gridCount; j++) {
		document.querySelector('.container').removeChild(document.querySelector('.container').children[0]);
	}
}

function sizeChoice() {
	let newSize = prompt('How many squares sould the grod have on each side? (max 100)');
	clearBoard();
	createSketch(newSize);
}

// Deal with this later
function clearGrid() {
	let clearSquares = document.querySelectorAll('.container div');
	console.log('Grid is being cleared');
	clearSquares.forEach((clearSquares) => {
		clearSquares.classList.remove('hover');
	});
}
//This is a test to see if event listeners are being added to any function or number
window.addEventListener('click', () => {
	console.log('Window was clicked.');
});

document.querySelector('#clear').addEventListener('click', clearGrid);
document.querySelector('#newGrid').addEventListener('click', createSketch(sizeChoice()));

//addEventListener('click', clearGrid);
//document.querySelector('#clear').addEventListener('click', clearGrid);
