# bitbot-frontend

[![Greenkeeper badge](https://badges.greenkeeper.io/BIT-IdeaFactory/BITbot-front-end.svg)](https://greenkeeper.io/)

Frontend napisany w React'cie do projektu BitBot'a.

## Wymagania

Zainstaluj poniższe rzeczy, aby apka działała poprawnie

* [Node.js](http://nodejs.org) wersja 10.14.2

## Taski

Task            | Opis
-----           | -----------
`start`         | Odpala aplikację w trybie developerskim
`test`          | Odpala testy
`build`         | Builduje & bundluje apkę do folderu /build
`style`         | Odpala eslint'a sprawdzając czytelność kodu
`reformat`      | Odpala prettiera formatując kod według zasad
`check`         | `npm run reformat` & `npm run style`

## Dodatkowe info

Został dodany moduł Husky, która odpala komendę `npm run check` przed każdym commitem, pisać ładny kod proszę! :)