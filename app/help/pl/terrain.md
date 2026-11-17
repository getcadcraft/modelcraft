---
title: Teren: powierzchnia z poziomic i jej rzeźbienie
summary: Utwórz teren z linii poziomic lub jako siatkę, a następnie podnoś go i obniżaj miękkim pędzlem.
keywords: teren, grunt, krajobraz, topografia, poziomice, linie poziomic, działka, nachylenie, wzgórze, kopiec, piaskownica, smoove, rzeźbienie, niwelacja, TIN
from: 407652b3
---

Teren to grunt zbudowany z trójkątów, więc może przybrać dowolny kształt. To grupa: kliknij ją dwukrotnie, aby ją edytować.

## Z poziomic

1. Zdobądź poziomice na ich wysokościach: narysuj je albo [zaimportuj plan terenu](topic:site-plan) i przesuń każdą poziomicę na jej poziom.
2. Zaznacz je (wszystkie krawędzie wszystkich poziomic).
3. {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Teren z zaznaczonych poziomic}}.

ModelCraft łączy punkty poziomic trójkątami (TIN) i wygładza każdą krawędź w środku, tak aby grunt cieniował się gładko. Same linie zostają; usuń je lub ukryj, gdy nie są już potrzebne. Bardzo gęste poziomice są przerzedzane do 8 000 punktów.

## Siatka do rzeźbienia

{{ui:Edycja}} › {{ui:Więcej}} › {{ui:Siatka terenu…}} pyta o szerokość, głębokość i rozmiar komórki, a następnie umieszcza płaską siatkę trójkątów w miejscu, w którym klikniesz jej narożnik. Małe komórki dają gładsze rzeźbienie, ale tworzą więcej ścian (najwyżej 200 × 200 komórek).

## Rzeźbienie: podnoszenie i obniżanie gruntu

1. Kliknij dwukrotnie teren, aby go otworzyć.
2. {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Rzeźbienie terenu}}. Okrąg pokazuje pędzel na gruncie pod kursorem.
3. Przeciągnij w górę, aby podnieść grunt pod pędzlem, albo w dół, aby go obniżyć. Środek przesuwa się najbardziej, a grunt łagodnie zanika do zera na krawędzi okręgu, dzięki czemu kopce i zagłębienia wychodzą gładkie.

Aby kopiec miał dokładną wysokość, kliknij raz, a następnie wpisz wysokość, na przykład `1.5m` (minus obniża), i naciśnij {{key:Enter}}. Aby zmienić pędzel, wpisz długość przed kliknięciem: `5m` ustawia promień pędzla na 5 m.

Każde rzeźbienie to jeden krok cofania.

## Warto wiedzieć

- Rzeźbienie przesuwa tylko trójkątne ściany, więc każda ściana pozostaje płaska. Ściany rysowane ręcznie (prostokąty, wielokąty) nie są terenem: narzędzie o tym informuje.
- Rzeźbienie przesuwa punkty wyłącznie w górę i w dół; nie dodaje punktów. Aby uzyskać drobniejsze szczegóły, zrób siatkę z mniejszymi komórkami.
- Teren eksportuje się jak każda inna grupa. W IFC jest elementem budowlanym typu proxy, jak wszystko inne.
