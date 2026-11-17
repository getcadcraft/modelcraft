---
title: Zaznaczanie obiektów
summary: Klikanie, dwukrotne i potrójne klikanie, przeciąganie ramki okna lub przecięcia, dodawanie i usuwanie z zaznaczenia klawiszami modyfikatorów oraz usuwanie.
keywords: zaznacz, zaznaczenie, okno, przecięcie, dodaj do zaznaczenia, odznacz, zaznacz wszystko, potrójne kliknięcie, dwukrotne kliknięcie, usuń, wymaż
from: d56d1f89
---

{{ui:Zaznacz}} ({{key:Space}}) to narzędzie, od którego zaczyna ModelCraft i do którego wraca klawisz {{key:Esc}}. Zaznaczone obiekty stają się niebieskie, a {{ui:Informacje o obiekcie}} po prawej stronie mówi, czym są.

## Kliknięcie

| Co zrobić | Zaznacza |
|---|---|
| Kliknij ścianę lub krawędź | Tę ścianę lub krawędź |
| Kliknij grupę lub komponent | Całą grupę lub komponent |
| Kliknij dwukrotnie ścianę | Ścianę i jej krawędzie |
| Kliknij dwukrotnie krawędź | Krawędź i ściany po obu jej stronach |
| Kliknij dwukrotnie grupę lub komponent | Otwiera go do edycji (zob. [Grupy i komponenty](topic:groups-components)) |
| Kliknij trzykrotnie ścianę lub krawędź | Wszystko, co z nią połączone: cały obiekt |
| Kliknij puste miejsce | Nic (czyści zaznaczenie) |
| Kliknij dwukrotnie puste miejsce podczas edycji grupy | Zamyka grupę |

Krawędzie łatwiej trafić niż ściany: gdy wskaźnik znajduje się kilka pikseli od krawędzi, kliknięcie wybiera krawędź.

## Przeciąganie ramki

- **Od lewej do prawej** rysuje ramkę ciągłą: zaznaczenie **oknem**. Zaznaczane są tylko obiekty całkowicie w niej zawarte.
- **Od prawej do lewej** rysuje ramkę przerywaną: zaznaczenie **przecięciem**. Zaznaczane jest wszystko, czego dotyka ramka, a ściana jest zaznaczana, gdy ramka leży w całości wewnątrz niej.

Grupa lub komponent liczy się jako jeden obiekt: ramka okna musi zawierać go w całości, a przecięcie wystarczy, że go dotknie.

## Dodawanie i usuwanie

Przytrzymaj klawisz podczas klikania lub przeciągania:

| Klawisz | Działanie |
|---|---|
| {{key:Shift}} | Przełącza: dodaje to, co nie jest zaznaczone, i usuwa to, co jest zaznaczone |
| {{key:Mod}} | Dodaje |
| {{key:Shift}} i {{key:Mod}} razem | Usuwa |

Aby zaznaczyć wszystko w modelu (lub wszystko w edytowanej grupie), naciśnij {{key:Mod+A}}.

## Czyszczenie zaznaczenia

Naciśnij {{key:Esc}} (przy aktywnym narzędziu {{ui:Zaznacz}}) lub kliknij puste miejsce.

## Usuwanie zaznaczenia

Naciśnij {{key:Delete}} lub {{key:Backspace}}. Ściany, krawędzie, grupy i prowadnice w zaznaczeniu są usuwane jednym krokiem; {{key:Mod+Z}} je przywraca.

Usunięcie krawędzi usuwa ściany, które jej potrzebują, chyba że krawędź tylko rozdzielała dwie ściany leżące w tej samej płaszczyźnie: wtedy obie ściany łączą się w jedną. Usunięcie ściany pozostawia jej krawędzie. Zob. [Usuwanie i czyszczenie](topic:erase).

## Zaznaczanie wewnątrz grupy

Kliknięcie grupy zaznacza całą grupę. Aby zaznaczyć ścianę wewnątrz niej, kliknij grupę dwukrotnie, aby ją otworzyć, a następnie kliknij ścianę. Gdy grupa jest otwarta, kliknięcia docierają tylko do obiektów w jej wnętrzu, a cała reszta jest wyblakła. Naciśnij {{key:Esc}}, gdy nic nie jest zaznaczone, albo kliknij dwukrotnie puste miejsce, aby ją zamknąć.

{{ui:Lista obiektów}} po lewej stronie zaznacza grupy i komponenty po nazwie, co pomaga, gdy są ukryte za innymi obiektami.
