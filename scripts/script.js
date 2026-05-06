// покраска первой карточки

const firstCardRecolorButton = document.querySelector(
  "#first-card-recolor-button",
);
const blueHash = "#0000ff";
setTimeout(() => {
  const firstCard = document.querySelector(".product-card");
  if (firstCard) {
    firstCardRecolorButton.addEventListener("click", () => {
      firstCard.style.backgroundColor = blueHash;
    });
  }
}, 10);

// покраска всех карточек

const allCardsRecolorButton = document.querySelector(
  "#all-cards-recolor-button",
);
const greenHash = "#00ff44";
setTimeout(() => {
  const allCards = document.querySelectorAll(".product-card");
  if (allCards) {
    allCardsRecolorButton.addEventListener("click", () => {
      allCards.forEach((card) => (card.style.backgroundColor = greenHash));
    });
  }
}, 10);

// переход на страницу google

const openGoogleButton = document.querySelector("#open-google-button");
function openGoogle() {
  const answer = confirm("Вы действительно хотите перейти на google.com?");
  if (answer) {
    window.open("https://google.com");
  } else {
    console.log("Пользователь отменил переход на google.com");
  }
}

openGoogleButton.addEventListener("click", openGoogle);

// вывод содержимого заголовка в консоль

const headline = document.querySelector(".headline");
function displayHeadline() {
  console.log(headline.innerText);
}

headline.addEventListener("mouseover", displayHeadline);

// замена цвета кнопок

const recolorButtonsButton = document.querySelector("#recolor-buttons-button");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.classList.add("colored"));

recolorButtonsButton.addEventListener("click", () => {
  buttons.forEach((button) => button.classList.toggle("colored"));
});
