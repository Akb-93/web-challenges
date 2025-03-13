console.clear();

const productName = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

//1:create article
//2:create container
//3:create section
//4:create div
//5:create h2
//6:create ul
//7:create list elements
//8:create p
//8:create div img container
//10.create footer
//11: create span
//12create button

const newArticle = document.createElement("article");
const newSection = document.createElement("section");
const newDiv = document.createElement("div");
const newTitel = document.createElement("h2");
const newList = document.createElement("ul");

const newListElementOne = document.createElement("li");
const newListElementTwo = document.createElement("li");
const newListElementThree = document.createElement("li");

const newText = document.createElement("p");
const newImgDiv = document.createElement("div");
const newImg = document.createElement("img");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");

// linking classes:

newArticle.className = "product";
newSection.className = "product__body";
newDiv.className = "product__text-container";
newTitel.className = "product__name";
newList.className = "product__categories";

newListElementOne.className = "product__category";
newListElementTwo.className = "product__category";
newListElementThree.className = "product__category";

newText.clsassName = "product__description";

newImgDiv.className = "product__image-container";
newImg.src =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";
newImg.className = "product__image";

newFooter.className = "product__footer";
newSpan.className = "product__price";
newButton.className = "product__buy-button";

// linking content
newTitel.textContent = productName;
newText.textContent = description;
newListElementOne.textContent = category1;
newListElementTwo.textContent = category2;
newListElementThree.textContent = category3;
newSpan.textContent = price;
newButton.textContent = "Buy";

// rebuild structure
newDiv.append(newTitel, newList, newText);
newList.append(newListElementOne, newListElementTwo, newListElementThree);
newImgDiv.append(newImg);
newSection.append(newDiv, newImgDiv);
newFooter.append(newSpan, newButton);
newArticle.append(newSection, newFooter);

// append to body
document.body.append(newArticle);
