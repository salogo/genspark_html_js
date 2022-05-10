let myDocument = document.documentElement;
let btn = document.getElementById("btn")

btn.addEventListener("click", ()=> {
    if (btn.textContent == "Go Full Screen") {
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        }
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        }
        else if (myDocument.mozRequestFullscreen) {
            myDocument.mozRequestFullscreen();
        }
        else if (myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }
        btn.textContent = "Exit Full Screen";
    }
    
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.msRequestFullscreen) {
            document.msRequestFullscreen();
        }
        else if (document.mozRequestFullscreen) {
            document.mozRequestFullscreen();
        }
        else if (document.webkitRequestFullscreen){
            document.webkitRequestFullscreen();
        }
        btn.textContent = "Go Full Screen";
    }
})