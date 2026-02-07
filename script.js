// покраска первой карточки

const recolorFirstCardButton = document.querySelector('#recolor-first-card-button');
const firstCard = document.querySelector('.product-card');
const blueHash = '#0000ff';
recolorFirstCardButton.addEventListener('click', () => {
    firstCard.style.backgroundColor = blueHash;
})

// покраска всех карточек

const recolorAllCardsButton = document.querySelector('#recolor-all-cards-button');
const allCards = document.querySelectorAll('.product-card');
const greenHash = '#00ff44';
recolorAllCardsButton.addEventListener('click', () => {
    allCards.forEach(
        card => card.style.backgroundColor = greenHash
    )
})

// переход на страницу google

const openGoogleButton = document.querySelector('#open-google-button');
function openGoogle () {
    const answer = confirm('Вы действительно хотите перейти на google.com?');
    if (answer) {
        window.open('https://google.com');
    } else {
        console.log('Пользователь отменил переход на google.com');
    }
}

openGoogleButton.addEventListener('click', openGoogle);

// вывод содержимого заголовка в консоль

const headline = document.querySelector('.headline');
function displayHeadline () {
    console.log(headline.innerText);
}

headline.addEventListener('mouseover', displayHeadline);

// замена цвета кнопок

const recolorButtonsButton = document.querySelector('#recolor-buttons-button');
const buttons = document.querySelectorAll('button');
buttons.forEach(
    button => button.classList.add('colored')
)
    
recolorButtonsButton.addEventListener('click', () => {
    buttons.forEach(
        button => button.classList.toggle('colored')
    )
})
