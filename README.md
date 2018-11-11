# bitbot-frontend

Frontend napisany w React'cie do projektu BitBot'a.

## Wymagania

Zainstaluj poniższe rzeczy, aby apka działała poprawnie

* [Node.js](http://nodejs.org) wersja 10.13.0

## Taski

Task            | Description
-----           | -----------
`start`         | Odpala aplikację w trybie developerskim
`test`          | Odpala testy
`build`         | Builduje & bundluje apkę do folderu /build
`style`         | Odpala eslint'a sprawdzając czytelność kodu
`reformat`      | Odpala prettiera formatując kod według zasad
`check`         | `npm run reformat` & `npm run style`

## Dodatkowe info

Został dodany moduł Husky, która odpala komendę `npm run check` przed każdym commitem, pisać ładny kod proszę! :)