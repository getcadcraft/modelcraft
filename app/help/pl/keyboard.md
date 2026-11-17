---
title: Klawisze i działania myszą
summary: Każdy skrót klawiszowy, działanie myszy, gest gładzika i gest dotykowy w ModelCraft, pogrupowane według tego, co robią.
keywords: klawiatura, skróty, klawisze, skróty klawiszowe, mysz, gładzik, dotyk, gesty, ściągawka, ctrl, polecenie, klawisze strzałek
from: e2348957
---

To są klawisze wypychania/ciągnięcia, od których zaczyna ModelCraft. Dla drugiego stylu zobacz [Klawisze Modeler](topic:keyboard#modeler-keys) poniżej oraz [Ustawienia ModelCraft](topic:settings).

Skróty działają, gdy widok 3D lub przycisk paska narzędzi ma fokus. Jeśli właśnie wpisałeś coś w polu panelu albo zmieniłeś listę w {{ui:Styl}}, kliknij najpierw w widoku 3D, inaczej klawisze trafią do tego pola. Zobacz [Klawisze, myszy i gładziki](common:keys), aby sprawdzić, jak zapisuje się klawisze na każdym komputerze.

## Narzędzia

| Klawisz | Narzędzie |
|---|---|
| {{key:Space}} | {{ui:Zaznacz}} |
| {{key:L}} | {{ui:Linia}} |
| {{key:R}} | {{ui:Prostokąt}} |
| {{key:C}} | {{ui:Okrąg}} |
| {{key:N}} | {{ui:Wielokąt}} |
| {{key:A}} | {{ui:Łuk}} |
| {{key:F}} | {{ui:Odsunięcie}} |
| {{key:B}} | {{ui:Malowanie}} |
| {{key:P}} | {{ui:Wypychanie/ciągnięcie}} |
| {{key:M}} | {{ui:Przesuń}} |
| {{key:Q}} | {{ui:Obróć}} |
| {{key:S}} | {{ui:Skaluj}} |
| {{key:E}} | {{ui:Gumka}} |
| {{key:T}} | Pomiar: {{ui:Miara}} |
| {{key:D}} | {{ui:Wymiar}} |
| {{key:O}} | {{ui:Orbita}} |
| {{key:H}} | {{ui:Przesuń widok}} |
| {{key:Z}} | {{ui:Powiększ}} |

Litery narzędzi działają tylko bez klawiszy modyfikujących: {{key:Shift}} z literą nic nie robi, z wyjątkiem dwóch poniżej.

## Model i plik

| Klawisz | Działa |
|---|---|
| {{key:G}} | Utwórz komponent z zaznaczenia |
| {{key:Shift+G}} | Utwórz grupę z zaznaczenia |
| {{key:Shift+Z}} | Powiększ do zasięgu (cały model) |
| {{key:Mod+Z}} | Cofnij |
| {{key:Mod+Y}} lub {{key:Mod+Shift+Z}} | Ponów |
| {{key:Mod+S}} | Zapisz (pobiera plik `.modelcraft`) |
| {{key:Mod+O}} | Otwórz model |
| {{key:Mod+A}} | Zaznacz wszystko (w otwartej grupie, jeśli jakaś jest otwarta) |
| {{key:Mod+C}} | Kopiuj zaznaczenie |
| {{key:Mod+X}} | Wytnij zaznaczenie |
| {{key:Mod+V}} | Wklej: kopia podąża za wskaźnikiem, kliknij, gdzie ma trafić |
| {{key:Mod+Shift+V}} | Wklej w miejscu (tam, skąd skopiowano) |
| {{key:Mod+D}} | Duplikuj: kopia podąża za wskaźnikiem, kliknij, aby ją położyć |
| {{key:Delete}} lub {{key:Backspace}} | Usuń zaznaczenie |
| {{key:PageDown}} / {{key:PageUp}} | Następna / poprzednia scena |
| {{key:F1}} | Otwiera lub zamyka tę pomoc (także {{ui:Pomoc}} na pasku aplikacji; {{key:Esc}} w pomocy ją zamyka) |
| {{key:Ctrl+Shift+F}} | Tryb ekranu: pełny ekran, potem ukryte paski, potem normalnie (Control także na Macu) |

## Esc

{{key:Esc}} cofa o jeden poziom za każdym naciśnięciem:

1. Przerywa to, co narzędzie właśnie robi (rysowaną linię, wypychanie/ciągnięcie, przesuwanie). Wszystko wraca na miejsce.
2. Przełącza na {{ui:Zaznacz}}.
3. Czyści zaznaczenie.
4. Zamyka grupę, którą edytujesz.

Zatrzymuje też odtwarzanie scen. W polu wartości {{key:Esc}} czyści to, co wpisałeś, i wraca do widoku.

## Gdy narzędzie pracuje

| Klawisz | Działa |
|---|---|
| Cyfra albo jeden z znaków `. , - ' " [ < * /` | Zaczyna wpisywanie w polu wartości |
| {{key:Enter}} | Stosuje to, co wpisałeś w polu wartości |
| {{key:Right}} | Blokuje do czerwonej osi (naciśnij ponownie, aby odblokować) |
| {{key:Left}} | Blokuje do zielonej osi |
| {{key:Up}} | Blokuje do niebieskiej osi |
| {{key:Down}} | Blokuje równolegle do ostatniej krawędzi, nad którą najechałeś przed pierwszym kliknięciem |
| Przytrzymaj {{key:Shift}} | Przytrzymuje kierunek, do którego jesteś przyciągnięty, dopóki trzymasz |
| {{key:Ctrl}}, {{key:Mod}} lub {{key:Alt}} (Przesuń) | Przełącza między przesuwaniem a kopiowaniem |

Blokady strzałkami działają w {{ui:Linia}}, {{ui:Prostokąt}}, {{ui:Okrąg}}, {{ui:Wielokąt}}, {{ui:Przesuń}}, {{ui:Skaluj}} i {{ui:Miara}} (przy mierzeniu od punktu), po pierwszym kliknięciu. {{ui:Wypychanie/ciągnięcie}} zawsze przesuwa się wzdłuż kierunku ściany i nie ma blokad. W {{ui:Obróć}} strzałki po pierwszym kliknięciu pokazują komunikat „Zablokowano”, ale nie zmieniają obrotu.

## Strzałki w innych chwilach

Gdy żadne narzędzie nie jest w trakcie działania, strzałki przesuwają kamerę:

| Klawisz | Działa |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbita |
| {{key:Shift}} ze strzałką | Przesuń widok |

## Mysz

| Działanie | Działa |
|---|---|
| Kliknięcie | Używa bieżącego narzędzia |
| Naciśnij, przeciągnij, zwolnij | To samo co dwa kliknięcia (dla narzędzi rysowania); zaznaczenie prostokątem (dla {{ui:Zaznacz}}); wymazuje po drodze (dla {{ui:Gumka}}) |
| Podwójne kliknięcie | {{ui:Zaznacz}}: ściana z krawędziami, krawędź z ścianami, otwiera grupę; puste miejsce zamyka grupę. {{ui:Wypychanie/ciągnięcie}}: powtarza ostatnią odległość |
| Potrójne kliknięcie | {{ui:Zaznacz}}: wszystko połączone |
| {{key:Shift}} + kliknięcie | {{ui:Zaznacz}}: przełącza wchodzenie i wychodzenie z zaznaczenia |
| {{key:Mod}} + kliknięcie | {{ui:Zaznacz}}: dodaje do zaznaczenia |
| {{key:Shift}} + {{key:Mod}} + kliknięcie | {{ui:Zaznacz}}: usuwa z zaznaczenia |
| Przeciąganie środkowym przyciskiem | Orbita, dowolnym narzędziem |
| {{key:Shift}} + przeciąganie środkowym przyciskiem | Przesuń widok, dowolnym narzędziem |
| Przeciąganie prawym przyciskiem | Przesuń widok, dowolnym narzędziem |
| Kółko | Powiększ w stronę wskaźnika |

Nie ma menu kontekstowego po kliknięciu prawym przyciskiem.

## Gładzik

To, co robi gest dwoma palcami, zależy od {{ui:Ustawienia}} › {{ui:ModelCraft}} › Przewijanie:

| Gest | Gładzik (lub wyliczone) | Kółko myszy |
|---|---|---|
| Przesunięcie dwoma palcami | Orbita | Powiększ w stronę wskaźnika |
| {{key:Shift}} + przesunięcie dwoma palcami | Przesuń widok | Powiększ |
| Szczypnięcie | Powiększ w stronę wskaźnika | Powiększ w stronę wskaźnika |
| Naciśnięcie dwoma palcami i przeciąganie (przytrzymany drugi przycisk) | Przesuń widok | Przesuń widok |

Zobacz [Orbita, przesuwanie i powiększanie](topic:orbit-pan-zoom#on-a-trackpad) oraz [Ustawienia ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Klawisze Modeler

Gdy {{ui:Ustawienia}} › {{ui:ModelCraft}} › Sterowanie jest ustawione na styl Modeler:

| Klawisz | Działa |
|---|---|
| {{key:W}} lub {{key:Space}} | {{ui:Zaznacz}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linia}} / {{ui:Prostokąt}} / {{ui:Okrąg}} / {{ui:Wielokąt}} |
| {{key:E}} | {{ui:Wypychanie/ciągnięcie}} (wyciągnięcie) |
| {{key:T}} | Pomiar: {{ui:Miara}} |
| {{key:D}} | {{ui:Wymiar}} |
| {{key:G}} | Przesuń zaznaczenie od razu, od wskaźnika |
| {{key:R}} | Obróć zaznaczenie wokół jego środka (niebieska oś) |
| {{key:S}} | Skaluj zaznaczenie wokół jego środka |
| {{key:X}} / {{key:Y}} / {{key:Z}} podczas przesuwania lub obracania | Blokuje czerwoną / zieloną / niebieską oś (ponownie, aby odblokować) |
| Kliknięcie lub {{key:Enter}} | Odkłada obiekt |
| {{key:Esc}} lub prawy przycisk myszy | Przywraca na miejsce |
| {{key:Shift+D}} | Duplikuje i przesuwa kopię |
| {{key:X}} lub {{key:Delete}} | Usuwa zaznaczenie |
| {{key:A}} / {{key:Alt+A}} | Zaznacza wszystko / nic |
| {{key:Tab}} | Otwiera zaznaczoną grupę lub komponent; ponownie zamyka |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Utwórz grupę / utwórz komponent |
| Klawiatura numeryczna {{key:1}} / {{key:3}} / {{key:7}} | Widok z przodu / z prawej / z góry ({{key:Mod}} dla widoku z tyłu / z lewej / z dołu) |
| Klawiatura numeryczna {{key:5}} | Perspektywa włączona lub wyłączona |
| Klawiatura numeryczna {{key:.}} | Powiększ do zaznaczenia |
| {{key:Home}} lub {{key:Shift+C}} | Powiększ do zasięgu |
| {{key:Shift+Tab}} | Przyciąganie włączone lub wyłączone |
| Przeciąganie środkowym przyciskiem / z {{key:Shift}} / z {{key:Mod}} | Orbita / przesuń widok / powiększ |
| {{key:Alt}} + przeciąganie / {{key:Alt+Shift}} + przeciąganie | Orbita / przesuń widok (bez środkowego przycisku) |

Kopiowanie, wklejanie, cofanie, zapis i otwieranie zachowują klawisze wymienione wyżej. Wpisane wartości, pole wartości i {{ui:Wypychanie/ciągnięcie}} działają tak samo w obu stylach.

## Ekran dotykowy

| Gest | Działa |
|---|---|
| Stuknięcie | Kliknięcie bieżącym narzędziem |
| Podwójne stuknięcie | Podwójne kliknięcie |
| Naciśnij, przeciągnij, podnieś | To samo co naciśnij, przeciągnij, zwolnij myszą |
| Dwa palce: szczypnięcie | Powiększ |
| Dwa palce: przesuwanie razem | Przesuń widok ({{ui:Ustawienia}} › {{ui:ModelCraft}} › Ekran dotykowy może ustawić Orbitę) |
| Trzy palce: przesuwanie razem | Orbita (Przesuń widok, gdy dwa palce orbitują) |
| Przytrzymaj jeden palec w miejscu | Kończy narzędzie jak {{key:Enter}}; gdy nic się nie dzieje, przeciągnij, aby obracać widok |
| Drugi palec podczas działania jednym palcem | Anuluje tę czynność |
| Narzędzie {{ui:Orbita}}, potem przeciągnij jednym palcem | Orbita |

Aby wpisać wartość na ekranie dotykowym, stuknij pole wartości na dole, wpisz i naciśnij Enter (albo Go) na klawiaturze.

## Gdzie jest Przesuń

{{ui:Przesuń}} to narzędzie o klawiszu {{key:M}}: wybierz, co przesunąć, kliknij punkt bazowy, a potem drugi punkt lub wpisz odległość. Zobacz [Przesuwanie, kopiowanie i tworzenie macierzy](topic:move-copy).
