---
title: Edycja siatki w obszarze roboczym Siatka
summary: Zaznacz wierzchołki, krawędzie i ściany siatki, przesuwaj je oraz wyciągaj, wpuszczaj, fazuj, tnij, łącz, wypełniaj i mostkuj, z dowolnym stylem klawiszy.
keywords: siatka, tryb edycji, obszar roboczy siatki, wierzchołek, wierzchołki, krawędź, krawędzie, ściana, ściany, wyciągnij, wpuść, fazuj, cięcie pętli, nóż, przekrój, obróć wokół, połącz, rozpuść, wypełnij, wypełnienie siatką, mostek, podziel, przesuń krawędź, edycja proporcjonalna, zanik, obszar roboczy
from: 92a372dd
---

Obszar roboczy **Siatka** edytuje [siatkę](topic:meshes) punkt po punkcie: jej wierzchołki, krawędzie i ściany. Geometria push/pull pozostaje w obszarze roboczym **Model**.

## Otwieranie

- Wybierz {{ui:Siatka}} na liście {{ui:Obszar roboczy}} po lewej stronie paska narzędzi. Wybrana siatka otwiera się do edycji; wybrana grupa lub komponent najpierw zamieniany jest na siatkę (jeden krok cofnięcia).
- Albo kliknij siatkę dwukrotnie, a przy klawiszach modelera zaznacz ją i naciśnij {{key:Tab}}.
- Gdy nic nie jest zaznaczone, panel oferuje siatki do dodania: płaszczyznę, siatkę, sześcian, okrąg, walec, stożek, sferę, sferę ikosferyczną i torus. Nowa siatka trafia tam, gdzie patrzy widok, i otwiera się do edycji.

{{ui:Wróć do modelu}} (albo z listy, {{key:Tab}} przy klawiszach modelera, {{key:Esc}} przy braku zaznaczenia przy klawiszach push/pull) wraca do Modelu z zaznaczoną siatką. Gdy obszar roboczy Siatka jest otwarty, reszta modelu jest wyblakła, a narzędzia rysowania Modelu są schowane.

## Zaznaczanie

| Działanie | Efekt |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Zaznacza wierzchołki, krawędzie lub ściany |
| Kliknięcie | Zaznacza jeden; {{key:Shift}}+kliknięcie dodaje lub usuwa |
| Przeciągnięcie ramki | Zaznacza to, co jest wewnątrz i widoczne; {{key:Shift}} dodaje, {{key:Ctrl}} usuwa |
| {{key:Alt}}+kliknięcie krawędzi lub dwukrotne kliknięcie krawędzi | Jej pętla krawędzi (pętla ścian w trybie ścian; cała obwódka przy otwartej krawędzi) |
| {{key:Ctrl}}+{{key:Alt}}+kliknięcie krawędzi | Jej pierścień krawędzi |
| Potrójne kliknięcie | Wszystko połączone z nią |

Grupa {{ui:Zaznacz}} ma także {{ui:Wszystkie}}, {{ui:Połączone}}, {{ui:Pętla}}, {{ui:Pierścień}}, {{ui:Więcej}} i {{ui:Mniej}}.

## Przesuwanie, obracanie, skalowanie

{{ui:Przesuń}}, {{ui:Obróć}} i {{ui:Skaluj}} startują ze wskaźnika: przesuń go, a potem kliknij lub naciśnij {{key:Enter}}, aby odłożyć zaznaczenie, albo {{key:Esc}}, aby anulować. {{key:X}}, {{key:Y}} lub {{key:Z}} (albo klawisze strzałek) blokują oś. Wpisz odległość, kąt lub współczynnik, aby uzyskać dokładny wynik — [obliczenia](topic:value-box#calculations) też działają.

**Edycja proporcjonalna** ({{ui:Proporcjonalnie}} albo panel): wierzchołki w pobliżu zaznaczenia podążają za przesunięciem, tym mniej, im dalej się znajdują, do ustawionego zasięgu, z wybranym zanikiem. Włącz {{ui:Tylko wzdłuż siatki}}, aby mierzyć wzdłuż krawędzi zamiast w linii prostej.

{{ui:Przesuń krawędź}} przesuwa zaznaczoną pętlę krawędzi wzdłuż sąsiednich krawędzi.

## Zmiana kształtu

| Narzędzie | Działanie |
|---|---|
| {{ui:Wyciągnij}} | Wyciąga zaznaczone ściany wzdłuż ich normalnej, z nowymi bocznymi ścianami (albo tworzy ściany z otwartych krawędzi obwodu). Wpisz odległość |
| {{ui:Wpuść}} | Pasmo wewnątrz obrysu zaznaczonych ścian; naciśnij {{key:I}} ponownie, aby zrobić to dla każdej ściany osobno |
| {{ui:Fazuj}} | Tnie zaznaczone krawędzie (albo, z {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, wierzchołki) na zadanej szerokości; kółko albo klawisze plus i minus dodają segmenty dla zaokrąglonej krawędzi |
| {{ui:Cięcie pętli}} | Wskaż krawędź: nowe pętle w poprzek pierścienia ścian czworokątnych; kółko ustala liczbę cięć; kliknij, aby ciąć |
| {{ui:Nóż}} | Klikaj punkty na krawędziach lub narożnikach; {{key:Enter}} tnie prosto w poprzek ścian między nimi, tak jak je widać |
| {{ui:Przekrój}} | Narysuj linię na ekranie: zaznaczone ściany (albo wszystkie) są cięte wzdłuż niej |
| {{ui:Obróć wokół}} | Obraca zaznaczone ściany albo otwarte krawędzie wokół niebieskiej osi krokami (kółko je ustala); pełny obrót zamyka |
| {{ui:Podziel}} | Dzieli zaznaczone krawędzie na pół; całe ściany stają się siatką |
| {{ui:Połącz}} | Zaznaczone wierzchołki stają się jednym, w ich środku |
| {{ui:Rozpuść}} | Usuwa zaznaczenie, ale zachowuje powierzchnię: ściany się łączą |
| {{ui:Wypełnij}} | Ściana przez zaznaczoną otwartą obwódkę (albo między dwiema otwartymi krawędziami) |
| {{ui:Wypełnienie siatką}} | Wypełnia otwartą obwódkę z parzystą liczbą krawędzi siatką czworokątów |
| {{ui:Mostek}} | Łączy dwie zaznaczone otwarte pętle krawędzi ścianami |
| {{ui:Zagięcie}} | Jak ostro zostają zaznaczone krawędzie, gdy siatka jest wygładzana przez powierzchnię podziału: przesuń od środka, użyj kółka (kroki po 0,1) albo wpisz wartość od 0 do 1. Panel pokazuje zagięcie zaznaczonych krawędzi i przyjmuje też wpisaną wartość. Zagięte krawędzie są rysowane na magenta |
| {{ui:Odbicie}}, {{ui:Wygładź}}, {{ui:Usuń}} | Odwracają ściany; wygładzają wierzchołki w stronę sąsiadów; usuwają według trybu zaznaczania |

Każde z tych działań to jeden krok cofnięcia. Współrzędne tekstury, kolory i wagi przechodzą na nowe ściany i wierzchołki.

## Ponowne tworzenie siatki

{{ui:Przebuduj siatkę}} tworzy całą siatkę od nowa jako równe trójkąty jednego rozmiaru, wybranego w chwili naciśnięcia (mniejszy rozmiar znaczy dokładniej i wolniej). Zamyka dziury, łączy nachodzące na siebie kawałki i wyrównuje siatkę rozciągniętą przez rzeźbienie. Ostre krawędzie wychodzą minimalnie zaokrąglone. UV, malowanie i zagięcia zaczynają się od nowa. Jeden krok cofnięcia.

## Retopologia

Aby zbudować nową, czystszą siatkę nad szczegółową (rzeźbą, skanem), wybierz szczegółową siatkę pod {{ui:Retopologia}} › **Buduj na** w panelu, a potem:

- **Przyciągaj przesuwane punkty do niej:** punkty, które przesuwasz, i krawędzie, które wyciągasz, lądują na jej powierzchni.
- **Ustaw zaznaczone punkty na niej** przesuwa zaznaczone punkty na nią od razu (jeden krok cofnięcia).
- **Pokaż krawędzie tej siatki z przodu** rysuje budowaną siatkę nad powierzchnią, abyś ją widział.

## Dostosowanie ostatniej operacji

Po {{ui:Wpuść}}, {{ui:Fazuj}}, {{ui:Cięcie pętli}}, {{ui:Podziel}}, {{ui:Wygładź}}, {{ui:Wypełnienie siatką}} lub {{ui:Obróć wokół}} panel pokazuje jej ustawienia (szerokość, segmenty, profil, cięcia…). Zmiana jednego z nich wykonuje operację od nowa, od punktu wyjścia, nadal jako jeden krok cofnięcia.

## Klawisze

| | Klawisze push/pull | Klawisze modelera |
|---|---|---|
| Przesuń, obróć, skaluj | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dwukrotnie: przesuń krawędź) |
| Wyciągnij, wpuść | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Usuń | {{key:E}} lub {{key:Delete}} | {{key:X}} lub {{key:Delete}} |
| Zagięcie | {{key:Shift+C}} | {{key:Shift+E}} |
| Zaznacz wszystko, nic, odwróć | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Oba style | {{key:Ctrl+B}} fazuj, {{key:Ctrl+R}} cięcie pętli, {{key:K}} nóż | to samo, a także {{key:F}} wypełnij, {{key:M}} połącz, {{key:Ctrl+X}} rozpuść, {{key:L}} / {{key:Ctrl+L}} połączone, {{key:Alt+N}} odbicie, {{key:O}} proporcjonalnie, {{key:Shift+V}} przesunięcie wierzchołka |

Zobacz też: [Siatki](topic:meshes), [Modyfikatory na siatce](topic:modifiers) oraz [Jeszcze nie zbudowano](topic:not-built-yet).
