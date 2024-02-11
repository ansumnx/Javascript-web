
const textSpan = document.getElementById('textSpan');
const texts = ["Pitbull", "Labrador", "Golden Retriever", "German Shepherd", "Bulldog"];
let index = 0;

function changetextandcolor() {
    textSpan.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changetextandcolor, 2000);



