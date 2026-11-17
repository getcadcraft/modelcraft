---
title: Etykiety: pokazywanie i ukrywanie zestawów obiektów
summary: Nadaj grupom i komponentom etykietę, na przykład Meble lub Ściany, i ukryj albo pokaż wszystko z tą etykietą naraz.
keywords: etykiety, etykieta, warstwy, warstwa, pokaż, ukryj, widoczność, porządkowanie, meble, ściany, bez etykiety, zmiana nazwy etykiety, usuń etykietę
from: c1a95a05
---

Etykieta to nazwa nadawana grupom i komponentom, na przykład **Meble**, **Ściany** albo **Teren budowy**, dzięki której można naraz ukryć lub pokazać wszystko z tą etykietą. Etykiety odpowiadają warstwom (layers) w programach CAD. Aby ukryć jeden obiekt naraz, zob. [Ukrywanie, izolowanie i pokazywanie](topic:hide-isolate).

## Tworzenie etykiety

1. W {{ui:Etykiety}} po prawej kliknij {{ui:Dodaj etykietę}}.
2. Wpisz jej nazwę i naciśnij {{key:Enter}}.

Aby zmienić nazwę etykiety, kliknij jej nazwę w {{ui:Etykiety}}, wpisz nową i naciśnij {{key:Enter}}. Dwie etykiety nie mogą mieć tej samej nazwy.

## Etykietowanie grup i komponentów

1. Zaznacz jedną lub więcej grup albo komponentów.
2. W {{ui:Informacje o obiekcie}} wybierz etykietę w polu {{ui:Etykieta}}. {{ui:Nowa etykieta…}} tworzy nową etykietę i przypisuje ją zaznaczeniu.

{{ui:Bez etykiety}} usuwa etykietę. Liczba przy każdej etykiecie w {{ui:Etykiety}} mówi, ile grup i komponentów ją ma.

Etykietuj grupy i komponenty, nie luźne ściany i krawędzie: najpierw utwórz z tych obiektów grupy (zaznacz je i naciśnij {{key:Shift+G}}).

## Ukrywanie i pokazywanie

Kliknij oko obok etykiety. Wszystko z tą etykietą znika z widoku, gdziekolwiek w modelu się znajduje (również wewnątrz innych grup), a kliknięcia i przyciąganie omijają je. Kliknij oko ponownie, aby to pokazać. Obiekty {{ui:Bez etykiety}} są zawsze widoczne.

Jeśli edytujesz wewnątrz grupy, której etykietę ukryto, grupa się zamknie.

## Usuwanie etykiety

Kliknij ikonę kosza obok niej. To, co miało tę etykietę, staje się {{ui:Bez etykiety}} i się pokazuje.

## Warto wiedzieć

- Etykiety, ich nazwy i to, które są ukryte, są zapisane w pliku ModelCraft. Skopiowanie oznaczonej grupy do innego modelu przenosi jej etykietę.
- Ukrycie i pokazanie etykiety oraz każda inna zmiana etykiet to jeden krok cofania.
- Eksporty zawierają wszystko, także ukryte etykiety, tak jak w przypadku ukrytych obiektów.
- Warstwy w planach terenu z plików DWG i DXF nie są jeszcze importowane jako etykiety: cały rysunek trafia jako jedna grupa.
