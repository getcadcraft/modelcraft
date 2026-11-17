---
title: Lista narzędzi
summary: Każde narzędzie ModelCraft z jego klawiszem, działaniem każdego kliknięcia i tym, co można wpisać w polu wartości podczas pracy narzędzia.
keywords: narzędzia, pasek narzędzi, polecenia, lista, linia, prostokąt, okrąg, wielokąt, odsunięcie, łuk, krzywa, spline, podążaj za mną, przeciągnij, łuk dwupunktowy, łuk od środka, zaznacz, wypychanie/ciągnięcie, przesuń, obróć, skaluj, gumka, miara, wymiar, orbita, przesuń widok, powiększ, umieść komponent
from: e08a274f
---

Podpowiedź na pasku stanu zawsze mówi, czego narzędzie oczekuje w następnej kolejności. {{key:Esc}} anuluje to, w czym narzędzie właśnie pracuje.

## Narzędzia rysowania

| Narzędzie | Klawisz | Kliknięcia | Wpisz w polu wartości |
|---|---|---|---|
| {{ui:Linia}} | {{key:L}} | Początek, potem każdy następny punkt. Zatrzymuje się, gdy zamknie się ściana, lub na {{key:Esc}} | Długość w kierunku kursora; `[x,y,z]` punkt; `<dx,dy,dz>` przesunięcie ({{ui:Długość}}) |
| {{ui:Prostokąt}} | {{key:R}} | Pierwszy narożnik (na ziemi lub na ścianie), przeciwległy narożnik | Szerokość i głębokość: `4m,3m` ({{ui:Wymiary}}) |
| {{ui:Okrąg}} | {{key:C}} | Środek (na ziemi lub na ścianie), punkt na krawędzi | Przed pierwszym kliknięciem: boki, `24s` lub `24` ({{ui:Boki}}). Potem: promień ({{ui:Promień}}) |
| {{ui:Wielokąt}} | {{key:N}} | Środek, narożnik | Tak samo jak w Okręgu; zaczyna od 6 boków |
| {{ui:Łuk}} | {{key:A}} | Początek, koniec, potem wypukłość | Długość cięciwy po początku ({{ui:Długość}}); wypukłość po końcu ({{ui:Wypukłość}}); `12s` dla segmentów |
| {{ui:Kątomierz}} | — | Środek, punkt 0°, potem kąt | Kąt w stopniach ({{ui:Kąt}}) |
| {{ui:Podążaj za mną}} | — | Wybierz ścieżkę, potem kliknij ścianę (albo kliknij ścianę, potem krawędź ścieżki) | — |
| {{ui:Malowanie}} | {{key:B}} | Ściana, grupa lub komponent | — ({{key:Ctrl}} połączone, {{key:Shift}} cały w tym kolorze, {{key:Alt}} pobierz kolor) |
| {{ui:Odsunięcie}} | {{key:F}} | Ściana (albo najpierw zaznacz ścianę lub krawędzie), potem strona i odległość | Odległość ({{ui:Odległość}}); w głąb ściany oznacza do środka |
| {{ui:Krzywa}} | — | Punkty, przez które przechodzi krzywa; {{key:Enter}} lub podwójne kliknięcie kończy | Długość wzdłuż kursora, `[x,y,z]` lub `<dx,dy,dz>` dla następnego punktu |
| {{ui:Łuk od środka}} | — | Środek, początek, potem koniec | Promień po środku; kąt w stopniach po początku; `12s` dla segmentów |

## Narzędzia edycji

| Narzędzie | Klawisz | Kliknięcia | Wpisz w polu wartości |
|---|---|---|---|
| {{ui:Zaznacz}} | {{key:Space}} | Kliknięcie, podwójne kliknięcie, potrójne kliknięcie, przeciągnięcie ramki. Zob. [Zaznaczanie obiektów](topic:select) | Przy jednym zaznaczonym wymiarze lub krawędzi: nowa długość, która zmienia rozmiar modelu |
| {{ui:Wypychanie/ciągnięcie}} | {{key:P}} | Ściana, potem odległość. Podwójne kliknięcie ściany powtarza ostatnią odległość | Odległość; ujemna idzie w drugą stronę ({{ui:Odległość}}) |
| {{ui:Przesuń}} | {{key:M}} | Z punktu do punktu. Przytrzymaj {{key:Ctrl}} lub {{key:Alt}}, aby kopiować | Odległość w kierunku kursora, `<dx,dy,dz>` lub `[x,y,z]` ({{ui:Odległość}}). Po kopiowaniu: `3x` lub `/3` |
| {{ui:Obróć}} | {{key:Q}} | Środek (na ścianie, aby obracać w jej płaszczyźnie), kierunek początkowy, kierunek końcowy | Kąt w stopniach ({{ui:Kąt}}) |
| {{ui:Skaluj}} | {{key:S}} | Punkt, który pozostaje, punkt odniesienia, nowy rozmiar | Współczynnik: `2`, `0.5` ({{ui:Skaluj}}) |
| {{ui:Gumka}} | {{key:E}} | Kliknij lub przeciągnij nad krawędziami, grupami, prowadnicami i wymiarami | nic |
| {{ui:Miara}} | {{key:T}} | Z krawędzi: równoległa linia prowadnicy. Z punktu: mierzy i zostawia punkt prowadnicy | Przesunięcie ({{ui:Odsunięcie}}) lub odległość ({{ui:Długość}}) |
| {{ui:Wymiar}} | {{key:D}} | Dwa narożniki (albo jedna krawędź), potem miejsce linii wymiarowej. Zob. [Wymiarowanie i zmiana rozmiaru](topic:dimensions) | Przesunięcie ({{ui:Odsunięcie}}). Zaraz po: nowa długość, która zmienia rozmiar modelu |

{{ui:Przesuń}}, {{ui:Obróć}} i {{ui:Skaluj}} działają na zaznaczeniu. Jeśli nic nie jest zaznaczone, najpierw biorą to, w co klikniesz (ściana przynosi ze sobą swoje krawędzie).

## Narzędzia kamery

| Narzędzie | Klawisz | Przeciągnij, aby |
|---|---|---|
| {{ui:Orbita}} | {{key:O}} | Obracać wokół części modelu pod kursorem ({{key:Shift}} przesuwa) |
| {{ui:Przesuń widok}} | {{key:H}} | Przesunąć widok |
| {{ui:Powiększ}} | {{key:Z}} | Powiększać: w górę to zbliżenie, w dół to oddalenie |
| {{ui:Zasięg}} | {{key:Shift+Z}} | (przycisk, a nie narzędzie) Dopasować cały model |

Rzadko potrzebujesz tych narzędzi przy myszy: przeciągnięcie środkowym przyciskiem obraca, prawym przesuwa, a kółko powiększa przy dowolnym narzędziu. Zob. [Orbita, przesuwanie i powiększanie](topic:orbit-pan-zoom).

## Porządkowanie

| Przycisk | Klawisz | Działanie |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Zamienia zaznaczenie w komponent |
| {{ui:Grupa}} | {{key:Shift+G}} | Zamienia zaznaczenie w grupę |
| {{ui:Rozbij}} | brak | Zamienia zaznaczone grupy i komponenty z powrotem w luźną geometrię |

## Umieść komponent

Nie ma go na pasku narzędzi: kliknij {{ui:Umieść}} obok komponentu w panelu {{ui:Komponenty}}. Kliknij raz w miejscu, gdzie ma być punkt początkowy komponentu; narzędzie wraca wtedy do {{ui:Zaznacz}}.
