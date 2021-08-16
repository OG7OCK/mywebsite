/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const advBlock = document.querySelector('.promo__adv');
const advert = advBlock.querySelectorAll('img');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');
const form = document.querySelector('form.add');
const addinput = form.querySelector('.adding__input');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const newFilm = addinput.value;

    if (newFilm) {

        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        makeMovieList();
        form.reset();
    }
});



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против хищника"
    ]
};

function removeAdv () {
    advert.forEach(img => {
        img.remove();
    })
}


function sortArr () {
    movieDB.movies.sort();
}


function makeChanges () {
    genre.innerHTML = "драма";
    bg.style.background = "url('img/bg.jpg')";
}

function makeMovieList () {
    movieList.innerHTML = "";
    movieDB.movies.forEach((film, i) => {
        if(film.length > 21) {
            film = `${film.substring(0, 22)}...`;
        }
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    delFilm();
}

function delFilm () {
    const del = movieList.querySelectorAll('.delete');
    del.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            makeMovieList();
        });
    });

}




removeAdv();
makeChanges();
sortArr();
makeMovieList();


