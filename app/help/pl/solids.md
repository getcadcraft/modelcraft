---
title: Narzędzia brył: suma, odejmowanie, część wspólna
summary: Łącz zamknięte grupy i komponenty w jedną, wycinaj jeden z drugiego albo zachowaj tylko to, co mają wspólnego.
keywords: bryła, bryły, inspektor brył, nie bryła, napraw bryłę, otwór, zabłąkana krawędź, wywrócona na lewą stronę, suma, łączenie, połącz, scal, odejmij, różnica, wytnij, część wspólna, przecięcie, boolean, zewnętrzna powłoka
from: f35df1cc
---

Narzędzia brył łączą **bryły**: grupy i komponenty, których ściany zamykają objętość, przy czym każda krawędź łączy dokładnie dwie ściany. {{ui:Informacje o obiekcie}} podaje {{ui:Bryła}}: {{ui:Tak}} dla bryły, i pokazuje jej objętość.

Znajdują się w menu {{ui:Bryły}} w grupie {{ui:Porządkuj}}.

## Gdy coś nie jest bryłą

Zaznacz grupę lub komponent. Gdy nie jest bryłą, {{ui:Informacje o obiekcie}} mówi dlaczego, na przykład „Nie bryła: 4 krawędzie graniczą z otworem · 1 zabłąkana krawędź”:

| Problem | Co oznacza |
|---|---|
| Krawędzie graniczą z otworem | Brakuje ściany |
| Krawędzie wspólne dla trzech ścian lub więcej | Ściana dzieli wnętrze albo dwa kształty stykają się wzdłuż krawędzi |
| Ściany wewnątrz kształtu | Ściana pozostawiona wewnątrz objętości |
| Zabłąkane krawędzie | Linie, które nie ograniczają żadnej ściany |
| Ściany wywrócone na lewą stronę | Ich przednie strony skierowane do wnętrza, wbrew sąsiadom |

{{ui:Pokaż problemy}} otwiera to z zaznaczonymi tymi krawędziami i ścianami, abyś mógł je zobaczyć. {{ui:Napraw}} naprawia proste przypadki jednym krokiem cofania: usuwa zabłąkane krawędzie i ściany wewnątrz kształtu, ustawia ściany we właściwą stronę i zamyka otwory, których obrzeże leży płasko. To, czego nie da się bezpiecznie naprawić (otwór, który nie jest płaski, krawędź wspólna dla wielu ścian), zostawia tobie i mówi, co zostało.

## Suma

1. Zaznacz dwie lub więcej brył (kliknij jedną, a pozostałe z {{key:Ctrl}}+kliknięciem).
2. {{ui:Bryły}} › {{ui:Suma}}.

Stają się jedną bryłą, w jednej grupie. Tam, gdzie się nakładały, ściany wewnątrz znikają.

## Odejmowanie

1. {{ui:Bryły}} › {{ui:Odejmij}}.
2. Kliknij bryłę do **odjęcia** (narzędzie cięcia).
3. Kliknij bryłę, którą **przetniesz**.

To, co zostaje z drugiej bryły, pozostaje; narzędzie cięcia jest zużyte. Na przykład, aby zrobić otwór przez blok, narysuj słupek przechodzący przez niego, zamień słupek w grupę, a następnie odejmij słupek od bloku.

## Część wspólna

Zaznacz dwie lub więcej brył, a następnie {{ui:Bryły}} › {{ui:Część wspólna}}. Zachowana zostaje tylko część, którą wszystkie mają wspólnego.

## Warto wiedzieć

- Wynik to nowa grupa. Zachowuje nazwę, kolor i etykietę pierwszej bryły (dla Odejmowania: tej, którą przecinasz). Kolory namalowane na jej ścianach nie są zachowywane.
- Płaskie boki wyniku są pojedynczymi ścianami. Okrągłe boki wychodzą jako płaskie facety, którymi zostały narysowane.
- Jeśli grupa lub komponent nie jest bryłą, narzędzie mówi, który, i nic nie zmienia. Szukaj brakującej ściany lub zabłąkanej ściany wewnątrz niego.
- Wewnątrz otwartej grupy narzędzia działają na grupach i komponentach w tej grupie.
- Każde narzędzie to jeden krok cofania.
- Przy pierwszym użyciu narzędzia brył wczytuje się jego silnik (manifold-3d), co może chwilę potrwać.
