var btnElement = document.getElementById("btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    btnElement.style.display = "block";
  } else {
    btnElement.style.display = "none";
  }
});
btnElement.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
