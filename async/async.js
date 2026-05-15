// 2. Реализовать данную концепцию:

//   При переходе на async.html мы отображаем по центру страницы строку: "Данные загружаются".
// Это в том случае, если локальное хранилище не заполнено данными и мы еще не сделали запрос.

//   Что бы запросить данные - мы должны сделать запрос через fetch (используйте setTimeout для симуляции длительной загрузки)
// к нашему json файлу и получив их - сохранить в локальное хранилище (если их там не было при загрузке страницы.
// Если данные  изначально были в локальном хранилище, то делать запрос — нет смысла).

//   Отобразить пользователей в виде карточек, по центру страницы, убрав надпись: "данные загружаются".
// Реализовать кнопки для управления пользователями (Удалить все карточки, удалить определенную карточку, получить все карточки)

//   Все данные должны быть синхронизированы с локальным хранилищем.
// Если вы удалили карточку — то после перезагрузки страницы их должно быть то же количество.

//   Обработать различные сценарии (отображать ошибку через new Error,
// если данные не загрузились и отображать текст на странице "Ошибка при загрузке данных" и так далее,
// отображать информационное сообщение, если пользователь хочет получить всех пользователей, а у него отображены и так все пользователи  и т.д.)

// Ключевой результат:
// Если данных нет — показываем пользователю сообщение про загрузку
// Данные не загрузились — отображаем ошибку
// Данные загрузились или меняются — отображаем и синхронизируем с локальным хранилищем
// Кнопка для удаления всех карточек
// Кнопка для удаления определенной карточки (это делается через метод массива .filter())
// Кнопка для получения всех карточек

// Стилизация по желанию

main();

async function main() {
  let users;
  if (!localStorage.getItem("users")) {
    await showLoadingModal();
    users = await loadLocalJSON();
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }
  renderCards(users);

  getAllCardsButton = document.querySelector("#get-all-cards");
  getAllCardsButton.addEventListener("click", async () => {
    users = await loadLocalJSON();
    if (JSON.stringify(users) === localStorage.getItem("users")) {
      alert("Карточки всех пользователей уже отображены");
    } else {
      localStorage.setItem("users", JSON.stringify(users));
      renderCards(users);
    }
  });

  deleteCardsButton = document.querySelector("#delete-cards");
  deleteCardsButton.addEventListener("click", () => {
    localStorage.setItem("users", "");
    users = [];
    renderCards(users);
  });

  deleteCardButton = document.querySelector("#delete-card");
  deleteCardButton.addEventListener("click", () => {
    const id = +prompt("Введите id пользователя");
    users = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(users));
    renderCards(users);
  });
}

async function showLoadingModal() {
  const loadingModal = document.querySelector(".loading-modal");
  const overlay = document.querySelector(".overlay");
  loadingModal.classList.add("loading-modal-showed");
  overlay.classList.add("overlay-showed");
  await delay(1000);
  loadingModal.classList.remove("loading-modal-showed");
  overlay.classList.remove("overlay-showed");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadLocalJSON() {
  try {
    const response = await fetch("./users.json");
    if (!response.ok) {
      throw new Error("Не удалось получить данные");
    }
    const text = await response.text();
    const users = JSON.parse(text).users;
    return users;
  } catch (error) {
    console.error("Ошибка:", error);
    alert("Не удалось получить данные");
  }
}

function renderCards(users) {
  const userCardWrapper = document.querySelector(".user-card-wrapper");
  const userCardTemplate = document.querySelector(".user-card-template");
  userCardWrapper.replaceChildren();

  users.forEach((userCard) => {
    const userCardClone = userCardTemplate.content.cloneNode(true);
    userCardClone.querySelector(".id").textContent = userCard.id;
    userCardClone.querySelector(".name").textContent = userCard.name;
    userCardClone.querySelector(".surname").textContent = userCard.surname;
    userCardClone.querySelector(".email").textContent = userCard.email;
    userCardClone.querySelector(".age").textContent = userCard.age;
    userCardWrapper.appendChild(userCardClone);
  });
}
