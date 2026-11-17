---
title: Usuń i uporządkuj
summary: Usuwaj krawędzie, grupy i prowadnice gumką lub klawiszem Delete, scalaj podzielone ściany i napraw ściany zwrócone w złą stronę.
keywords: usuń, gumka, delete, usuwanie, scal, scal ściany, porządkowanie, luźne linie, odwróć ścianę, tylna ściana, cofnij
from: 80b92a81
---

## Usuń gumką

1. Naciśnij {{key:E}}, aby wybrać {{ui:Gumka}}.
2. Kliknij krawędź, grupę, komponent albo prowadnicę. Zostaje usunięta.
3. Aby usunąć kilka, przeciągnij po nich, trzymając przycisk. Wszystko, nad czym przejdziesz, zostanie podświetlone i zniknie po zwolnieniu.

Gumka nie wskazuje ścian: ściana znika, gdy usuniesz krawędzie, których potrzebuje. Ściany służą gumce do znajdowania krawędzi.

## Co dzieje się ze ścianami

- **Krawędź między dwiema ścianami w tej samej płaszczyźnie** (na przykład linia narysowana przez podłogę) znika, a dwie ściany **scalają się** w jedną.
- **Krawędź, której ściana potrzebuje, by pozostać zamknięta** (krawędź prostopadłościanu) zabiera tę ścianę. Usuń jedną górną krawędź prostopadłościanu, a znikną góra i jedna ściana boczna, zostawiając otwarte pudełko.
- **Luźne końce** (punkty, których już żadna krawędź nie używa) są sprzątane.

Usunięcie ostatniej kopii komponentu usuwa go również z panelu {{ui:Komponenty}}.

## Usuń klawiszem Delete

1. Zaznacz to, co chcesz usunąć, za pomocą {{ui:Zaznacz}}.
2. Naciśnij {{key:Delete}} lub {{key:Backspace}}.

To usuwa także ściany. Ściana usunięta w ten sposób zostawia swoje krawędzie, więc możesz usunąć górę prostopadłościanu, zachować jego obrys i narysować tam coś innego.

## Usuń luźne linie na płaskiej ścianie

Jeśli ściana lub podłoga pokazuje niechciane linie (pozostałości po rysowaniu), usuń je {{ui:Gumka}}. Linie leżące w ścianie scalają się i znikają; ściana zostaje.

## Ściana zwrócona w złą stronę

Ścianę widzianą od tyłu widać na niebiesko-szaro. Jeśli ściana pokazuje się na niebiesko-szaro na zewnątrz modelu:

1. Zaznacz ścianę.
2. Kliknij {{ui:Odwróć ścianę}} w {{ui:Informacje o obiekcie}}.

Kierunek ścian ma największe znaczenie przy eksporcie: renderery, silniki gier i drukarki 3D mogą ukrywać lub błędnie odczytywać ściany skierowane do wewnątrz.

## Cofnij pomyłkę

{{key:Mod+Z}} cofa jeden krok naraz, {{key:Mod+Y}} (lub {{key:Mod+Shift+Z}}) ponawia. Przeciągnięcie gumką to jeden krok, bez względu na to, ile rzeczy obejmowało. Pasek stanu podaje, co zostało cofnięte: „Cofnięto usuwanie.”
