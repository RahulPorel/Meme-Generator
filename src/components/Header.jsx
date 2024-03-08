import generateJoke from "./generateJoke";
import "../styles/reload.scss";
import reload from "./reload";
window.onload = function generateJokeonPageLoad() {
  generateJoke();
  reload();
};

export default function Header() {
  return (
    <header className="header">
      <img src="/src/assets/img/Troll Face.png" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>

      <button id="my-btn" className="icon-btn">
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </button>

      <h1 className="header--project" id="joke"></h1>
    </header>
  );
}
