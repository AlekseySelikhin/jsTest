/* jshint -W097 */
"use strict";

const numberOfFilms = +prompt('Сколько фильмов ты смотрел?', '3');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//вариант 1
for (let i = 0; i < numberOfFilms; i++)
{
    let a = prompt('Назови один из последнийх фильмов', '');
    let b = prompt('На что его оценишь?', '');
    if ( a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

//вариант 2
let inc = numberOfFilms;
while (inc > 0) {
    console.log('работает_1');
    inc--;
}

//вариант 3
inc = numberOfFilms;
do {
    console.log('работает_2');
    inc--;
}
while (inc > 0)

if (personalMovieDB.count < 10) {
    console.log('Просмотренно достаточно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Поизошла ошибка');
}
