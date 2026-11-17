---
title: Biblioteka startowa
summary: Około trzydziestu gotowych obiektów do umieszczenia w modelu: drzwi i okna, meble, kuchnia i łazienka, słupy i schody, drzewa, ludzie oraz samochód.
keywords: wyposażenie, wyposażanie pokoju, układ mebli, sypialnia, salon, kuchnia, łazienka, biuro, renderowanie, biblioteka, start, otoczenie, drzewa, ludzie, samochody, rośliny, krzewy, żywopłot, komponenty, meble, drzwi, okno, krzesło, stół, sofa, łóżko, toaleta, schody, słup, drzewo, osoba, samochód, magazyn, gotowe
from: 3c06b69c
---

{{ui:Biblioteka startowa}} daje codzienne rzeczy w rzeczywistych rozmiarach, dzięki czemu model czyta się od razu: drzwi pokazujące skalę pokoju, samochód na podjeździe, ludzie i drzewa wokół budynku.

## Umieszczanie obiektu

1. W {{ui:Komponenty}} po lewej stronie kliknij {{ui:Biblioteka startowa}}.
2. Wybierz obiekt, na przykład {{ui:Krzesło}}.
3. Kliknij miejsce, w którym ma się znaleźć.

Na podłodze, stole lub gruncie stoi na nim. **Drzwi i okna** są zrobione do umieszczania w ścianach: kliknij na ścianę, a stoją w niej, skierowane na zewnątrz. (Siedzą na powierzchni ściany; nie wycinają otworu. Aby go zrobić, narysuj prostokąt na ścianie tam, gdzie ma być okno, i wypchnij go na wylot.)

Każdy obiekt jest **komponentem**: wybranie tego samego ponownie umieszcza kolejną kopię, a każda kopia zmienia się, gdy edytujesz jedną. Pojawia się też na liście {{ui:Komponenty}} z przyciskiem {{ui:Umieść}}, aby dodać kolejne.

## Co zawiera

| Grupa | Obiekty |
|---|---|
| Drzwi i okna | Drzwi, drzwi dwuskrzydłowe, okno, szerokie okno, brama garażowa |
| Meble | Stół jadalniany, okrągły stół, krzesło, stołek barowy, sofa, fotel, łóżko dwuosobowe i jednoosobowe, biurko, regał, szafa |
| Kuchnia i łazienka | Szafka dolna i wisząca, blat kuchenny, lodówka, kuchenka, zlewozmywak, toaleta, wanna, prysznic, umywalka |
| Budynek | Schody proste (15 stopni po 18 cm), słup okrągły i kwadratowy, belka |
| Teren i ludzie | Drzewo, krzew, osoba (1,75 m), samochód |
| Otoczenie: drzewa, ludzie i samochody | Drzewa liściaste (4, 6 i 10 m), iglak, drzewo kolumnowe, okrągłe i małe krzewy, żywopłot, roślina doniczkowa, ludzie stojący i idący, dziecko, sedan i SUV: bardziej zaokrąglone kształty we własnych kolorach, do [obrazów renderowanych](topic:render) i planów sytuacyjnych |

Są to proste kształty, zbudowane z brył, które możesz malować, skalować lub [uczynić unikalnymi](topic:groups-components) i zmieniać. Szafka wisząca zawisa 1,45 m ponad miejscem kliknięcia.

Otoczenie zostało narysowane przez CadCraft i można je swobodnie używać do czegokolwiek (CC0); te same drzewa, ludzie i samochody są w bibliotece Library dla BimCraft i CadCraft. Szyby samochodu są malowane materiałem {{ui:Szkło przyciemniane}}, więc w obrazach są przezroczyste.

## Wyposażanie pokoju do renderu

Zaznacz podłogę pokoju (jedną poziomą ścianę skierowaną w górę, w modelu lub wewnątrz grupy) i użyj **Porządkuj › Wyposaż pokój…** (przycisk **Wyposaż**). Wybierz, czym jest pokój — sypialnia, salon, jadalnia, kuchnia, łazienka lub biuro — albo pozwól go zgadnąć po rozmiarze. Meble startowe ustawiane są przy ścianach, zaczynając od najdłuższej i okrążając pokój; nic się nie nakłada, a rozwarcie każdych drzwi startowych umieszczonych w ścianach pokoju (oraz szerokość jego okien, przed wysokimi meblami) pozostaje wolne. To domyślny układ według reguł, do przejrzenia, a nie projekt: ten sam pokój zawsze dostaje ten sam układ.

Wszystko trafia do **jednej grupy** z etykietą **Meble** jako jeden krok cofania: cofnij, usuń grupę lub ukryj etykietę, aby to usunąć. Element, który się nie mieści, jest wymieniony w pasku stanu i zapisany w **Problemy** jako uwaga. **Wyposaż pokój** w BimCraft korzysta z tych samych reguł.
