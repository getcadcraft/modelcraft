---
title: Przesuń i obróć osie rysunkowe
summary: Obróć czerwoną, zieloną i niebieską oś, by dopasować je do budynku nieustawionego prostopadle do nich, albo wyrównaj je do ściany, tak by rysowanie i wpisywanie szły za nią.
keywords: osie, osie rysunkowe, początek, wyrównaj osie, obróć osie, resetuj osie, budynek pod kątem, skośny, ucs, układ współrzędnych
from: cab258f7
---

Czerwona, zielona i niebieska oś prowadzą wszystko, co rysujesz: prostokąty ustawiają się wzdłuż nich, linie się do nich przyciągają, a ziemia to płaszczyzna czerwono-zielona. Gdy budynek stoi pod kątem (plan sytuacyjny nieustawiony prostopadle do północy, skrzydło obrócone o 30°), przesuń osie na niego, tak by rysowanie szło za jego ścianami. Sam model się nie rusza.

Wszystkie trzy polecenia są w {{ui:Edycja}} › {{ui:Więcej}}.

## Umieść osie

1. {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Umieść osie}}.
2. Kliknij, gdzie ma być początek, np. narożnik budynku.
3. Kliknij punkt wzdłuż nowej osi czerwonej, np. dalej wzdłuż ściany.
4. Kliknij punkt w kierunku nowej osi zielonej. Zielona zostaje ustawiona prostopadle do czerwonej, a niebieska stoi prostopadle do obu.

Osie rysują się w swoim nowym miejscu. Prostokąt, który teraz rysujesz na ziemi lub wpisujesz jako `4m,3m`, biegnie wzdłuż obróconych osi czerwonej i zielonej; klawisze strzałek się do nich przyciągają; przyciąganie do początku działa w nowym początku.

## Wyrównaj osie do ściany

Zaznacz jedną ścianę, potem {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Wyrównaj osie do ściany}}. Niebieska oś wskazuje wtedy na zewnątrz ściany, czerwona biegnie wzdłuż jej najdłuższej krawędzi, a początek jest na początku tej krawędzi. Używaj tego, by rysować na pochyłym dachu tak, jakby był ziemią.

## Resetuj osie

{{ui:Edycja}} › {{ui:Więcej}} › {{ui:Resetuj osie}} ustawia je z powrotem tam, gdzie zaczynał model.

## Warto wiedzieć

- Wewnątrz otwartej grupy lub komponentu używane są jego własne osie (obracają się razem z nim); osie modelu dotyczą poziomu najwyższego.
- Osie zapisują się w pliku ModelCraft, a każda zmiana to jeden krok cofnięcia.
- Eksporty i standardowe widoki ({{ui:Góra}}, {{ui:Przód}}…) nadal używają kierunków własnych modelu.
