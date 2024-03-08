import generateJoke from "./generateJoke";

export default function reload() {
  var btn = document.getElementById("my-btn");
  btn.onclick = function () {
    btn.children[0].classList.add("spin-animation");
    generateJoke();
    setTimeout(function () {
      btn.children[0].classList.remove("spin-animation");
    }, 500);
  };
}
