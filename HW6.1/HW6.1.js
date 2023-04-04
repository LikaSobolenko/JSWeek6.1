const resultDiv = document.querySelector("div.result");

const array = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];
function getAll() {
  let directors = "";
  for (let item of array) {
    directors += `<h1>${array.indexOf(item) + 1}. ${item.name}</h1>
  <div class="career">Карьера: ${item.career}</div>
  <div class="films">Ссылка на фильмографию: ${item.films}</div>
  <div class="topFilm">Лучший фильм: ${item.top_rated_film}</div>`;
  }
  document.querySelector("div.result").innerHTML = directors;
}
getAll();

/*// Создание списка фильмов
array.forEach(function (item) {
  let name = document.createElement("h1");
  name.textContent = `${array.indexOf(item) + 1}. ${item.name}`;
  resultDiv.appendChild(name);

  let career = document.createElement("div");
  career.className = "career";
  career.textContent = `Карьера: ${item.career}`;
  resultDiv.appendChild(career);

  let films = document.createElement("div");
  films.className = "films";
  films.textContent = `Ссылка на список фильмов: ${item.films}`;
  resultDiv.appendChild(films);

  let topFilm = document.createElement("div");
  topFilm.className = "topFilm";
  topFilm.textContent = `Лучший фильм: ${item.top_rated_film}`;
  resultDiv.appendChild(topFilm);
});*/

//создание массива топовых фильмов
const topFilmsList = array.map(function (item) {
  return item.top_rated_film;
});

let best = document.createElement("h1");
best.textContent = `Лучшие фильмы этих режисёров`;
best.className = "head";
resultDiv.appendChild(best);

let topFilms = document.createElement("div");
topFilms.className = "topFilms";
topFilms.textContent = topFilmsList.join(", ");
resultDiv.appendChild(topFilms);

/* Сначала сделала так, но с этим вариантом в конце остаётся запятая в тексте, что не очень красиво
topFilmsList.forEach(function (item) {
  topFilms.textContent = topFilms.textContent + `${item}, `;
});*/
