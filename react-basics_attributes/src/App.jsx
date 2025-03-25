import "./styles.css";

export default function App() {
  return <CreateArticle></CreateArticle>;
}

function CreateArticle() {
  return (
    <article className="article">
      <h2 className="article__title">Hello World!</h2>
      <label id="label__input" htmlFor="input">
        Input here!
      </label>
      <input type="text" id="input"></input>
      <a
        className="article__link"
        href="https://about.google/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header"
      >
        click here!
      </a>
    </article>
  );
}

// Your component should contain the following parts:

// - an `<article>` as a wrapper HTML element with the class `article`
// - an `<h2>` with the class `article__title` and a text of your choice
// - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
// - an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)
