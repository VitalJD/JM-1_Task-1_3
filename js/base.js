function readMore() {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline-block";
    btn.innerHTML = "Читать далее";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Скрыть";
    // btn.style.background = url("../img/icon_rotate-180deg.svg");
    more.style.display = "block";
  }
}