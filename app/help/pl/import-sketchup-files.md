---
title: Import modelu SKP
summary: Zaimportuj plik .skp wraz z jego grupami, komponentami, kolorami, teksturami, etykietami i miękkimi krawędziami, zobacz, co weszło, a czego nie, i kontynuuj modelowanie.
keywords: skp, import, otwórz skp, komponenty, grupy, etykiety, warstwy, materiały, kolory, tekstury, ukryte, miękkie krawędzie, 3d warehouse, migracja, przełączanie
from: 325d3c81
---

ModelCraft odczytuje pliki SketchUp (`.skp`) własnym czytnikiem, na stronie. Nic nie jest wysyłane, a działa offline zawsze, gdy działa ModelCraft. Testowano pliki od SketchUp 3 do wersji 2026.

## Zaimportuj plik

1. Kliknij {{ui:Importuj}} w grupie {{ui:Plik}} (albo upuść plik `.skp` na widok 3D).
2. Wskaż plik.

   Pasek stanu pokazuje „Odczytywanie house.skp…”, a potem, co weszło, na przykład „Zaimportowano house.skp (SketchUp 25.0.575): 1240 ścian, 6 komponentów, w grupie.”

Cały model trafia jako jedna grupa nazwana od pliku, zaznaczona, a widok przybliża się do niej. Jedno {{key:Mod+Z}} usuwa wszystko, łącznie z etykietami.

:::tip
Rozbij grupę importu ({{ui:Informacje o obiekcie}} › {{ui:Rozbij}}), gdy chcesz mieć jej zawartość luźno w modelu zamiast w jednej grupie.
:::

## Co wchodzi

- **Ściany** z ich otworami oraz **krawędzie**, które nie są częścią ściany.
- **Grupy** wchodzą jako grupy, a **komponenty** jako komponenty: każda kopia komponentu jest umieszczeniem jednej definicji, więc edycja jednej kopii zmienia wszystkie, jak w SketchUp. Nazwy przychodzą razem z nimi.
- **Kolory.** Własny materiał ściany nadaje jej kolor. Materiał namalowany na grupie lub komponencie staje się malowaniem tego umieszczenia, więc ściany w środku, bez własnego koloru, go przyjmują, jak w SketchUp. Komponent pomalowany na czerwono w jednym miejscu, a na niebiesko w innym, pozostaje jednym komponentem.
- **Tekstury.** Ściana pomalowana materiałem z teksturą wchodzi z tą teksturą, nałożoną na ścianę tak, jak w pliku, a styl {{ui:Cieniowany}} ją pokazuje. Obraz jest zachowywany w pliku ModelCraft przy zapisie, a [obraz renderowany](topic:render) też go pokazuje. Materiał z teksturą namalowany na całej grupie lub komponencie daje tej kopii tylko kolor materiału.
- **Etykiety.** Grupa lub komponent na etykiecie SketchUp dostaje etykietę ModelCraft o tej samej nazwie, widoczną na liście {{ui:Etykiety}}, pokazaną lub ukrytą tak, jak była w SketchUp. Jeśli twój model ma już etykietę o tej nazwie, używana jest ta etykieta.
- **Ukryte rzeczy wchodzą ukryte:** ściany, krawędzie, grupy i komponenty oraz ściany i krawędzie na ukrytej etykiecie. Widzisz to, co pokazywał SketchUp, i nic nie przepada: {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Pokaż wszystko}} je pokazuje. Zobacz [Ukrywanie, izolowanie i pokazywanie](topic:hide-isolate).
- **Miękkie i gładkie krawędzie** pozostają miękkie, więc zakrzywione powierzchnie nadal wyglądają gładko.
- **Rozmiary** wychodzą poprawnie w każdej jednostce: pliki SketchUp mają wewnętrznie cale, a ModelCraft je przelicza.

## Czego nie wchodzi

Pasek stanu mówi, co zostało pominięte, z liczbami.

- **Niektóre tekstury** zachowują tylko kolor swojego materiału: tekstura brakująca w pliku, obraz w formacie, którego przeglądarki nie pokażą (na przykład plik Photoshopa), albo tekstura bez rozmiaru. Ściany z teksturą rzutowaną wchodzą z teksturą ułożoną w przybliżeniu.
- **Etykiety na luźnych ścianach i krawędziach.** ModelCraft etykietuje tylko grupy i komponenty, więc ściana lub krawędź z własną etykietą wchodzi bez etykiety, a pasek stanu je zlicza. Zamień takie ściany w grupę ({{key:Shift+G}}) i nadaj etykietę grupie.
- **Obrazy** umieszczone w modelu, tekst, wymiary, prowadnice, płaszczyzny przekroju, sceny i style.

## Problemy

- „To nie jest plik SketchUp.” albo „Ten plik SketchUp jest uszkodzony: …”: plik jest obcięty albo to coś innego z nazwą `.skp`. Zapisz go ponownie w SketchUp albo poproś o nową kopię.
- Plik z wersji SketchUp nowszej niż ta, którą zna ModelCraft, zostaje odrzucony, a komunikat podaje wykrytą wersję.
- Model złożony wyłącznie z obrazów, tekstu lub wymiarów zgłasza, że nie ma nic do pokazania.

## Zabierz model z powrotem

ModelCraft nie może zapisywać plików `.skp`. Wyeksportuj Collada ({{ui:Eksport}} › `.dae`) i zaimportuj go w SketchUp: grupy, komponenty i kolory przechodzą; tekstury przechodzą jako kolor ich materiału. Zobacz [Eksportowanie modelu](topic:export-model).
