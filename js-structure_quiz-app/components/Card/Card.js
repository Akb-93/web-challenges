import cards from "../data/cards.js";
import Bookmark from "./Bookmark.js";

export default function Card(props) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = /* html */ `
    <h2 class="card__question" data-js="question"></h2>
    <button class="card__button-answer" type="button" data-js="answer-button">
      Show answer
    </button>
    <p class="card__answer" data-js="answer"></p>
    <ul class="card__tag-list" data-js="tags"></ul>
    <div class="card__button-bookmark" data-js="bookmark-button-wrapper"></div>
  `;

  const question = card.querySelector('[data-js="question"]');
  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="tags"]');
  const bookmarkButtonWrapper = card.querySelector(
    '[data-js="bookmark-button-wrapper"]'
  );

  question.textContent = props.question;
  answer.textContent = props.answer;

  props.tags.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.classList.add("card__tag-list-item");
    tagElement.textContent = "#" + tag;
    tags.append(tagElement);
  });

  function handleBookmarkButtonClick(event) {
    const cardIndex = cards.findIndex(
      (card) => card.question === props.question
    );
    if (cardIndex !== -1) {
      cards[cardIndex].isBookmarked = !cards[cardIndex].isBookmarked;
      event.currentTarget.classList.toggle("bookmark--active");
    }
  }

  const bookmarkButton = Bookmark({
    active: props.isBookmarked,
    onClick: handleBookmarkButtonClick,
  });
  bookmarkButtonWrapper.append(bookmarkButton);

  function handleAnswerButtonClick() {
    answer.classList.toggle("card__answer--active");
  }

  answerButton.addEventListener("click", handleAnswerButtonClick);

  return card;
}
