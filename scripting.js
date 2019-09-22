function drawBox() {
	document.getElementById('main-container').insertAdjacentHTML('beforeend', '<div id = "inner-div"></div>');
}

function makeBoxes() {
	for (let i = 0; i < 256; i++) {
		drawBox();
		console.log('Boxes Drawn');
		document.getElementById('inner-div').style.border = '1px solid black';
	}
}
