var picture_year;

function viewChanged() {
	var x = window.innerWidth/2;
	var y = window.innerHeight/2;
	var elems = document.elementsFromPoint(x, y);
	var final_elem;
	for (const elem of elems) {
		if (elem.classList.contains("img-class")) {
			final_elem = elem;
			break;
		}
	}
	if (final_elem) {
		picture_year.textContent = final_elem.parentElement.attributes["photoyear"].value
	}
}


window.onload = () => {
	picture_year = document.getElementById("picture-year");
	viewChanged();
}

addEventListener("scroll", viewChanged)
addEventListener("resize", viewChanged)