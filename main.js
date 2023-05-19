var butt=document.getElementsByClassName("material-icons");
window.addEventListener("scroll",myfun());
function myfun() {
    if (window.pageYOffset > 100) {
        butt.style.display="inline-block";
    } else {
        butt.style.display="none";
    }
}

