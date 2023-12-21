
const textSpan = document.getElementById('textSpan');
const texts = ["Doggo", "Husky", "Labrador", "Retriever", "Weima", "Blikuo"];
let index = 0;

function changeTextAndColor() {
    textSpan.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeTextAndColor, 3000);

let x = new Promise ((res,rej)=>{
    let x = true;
    if (x){
        res();
    }
    else{
        rej()
    }
    

});
x.then(function(){
        console.log("yes it is working");
     let x = document.createElement();  
     x.style.width ="300px";
     x.disablePictureInPicture ();
     x.textContent();
    })


