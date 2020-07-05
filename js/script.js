/* jshint -W097 */
"use strict";

let numberOfFilms;

numberOfFilms = prompt('Сколько фильмов ты смотрел?', '3')

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let oneMovie = prompt('Назови один из последнийх фильмов', '');
let movieScore = prompt('На что его оценишь?', '');

personalMovieDB.movies[oneMovie] = movieScore;