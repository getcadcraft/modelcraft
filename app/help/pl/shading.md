---
title: Tworzenie materiałów z węzłów
summary: Zbuduj materiał z tekstur, obrazów i obliczeń w obszarze roboczym Cieniowanie, obserwuj go w widoku na bieżąco i maluj nim ściany.
keywords: cieniowanie, wypalanie, wypalanie tekstur, okluzja otoczenia, ao, krzywizna, wypalanie normalnych, wysoka poligonalność, niska poligonalność, mapa oświetlenia, kalkomania, naklejka, logo, etykieta, malowanie tekstury, pędzel, materiał, materiały, materialx, mtlx, openpbr, standard surface, biblioteka materiałów, librarycraft, zestaw tekstur, pbr, importuj tekstury, zip, cc0, przeciągnij, węzeł, węzły, edytor węzłów, shader, tekstura, proceduralny, szum, szachownica, voronoi, komórki, fale, cegły, płytki, drewno, marmur, gradient, brud, zużycie krawędzi, rampa kolorów, mieszanie, bump, mapa normalnych, chropowatość, metaliczność, przezroczystość, wycinanie, emisja, poświata, przemieszczenie, mapowanie pudełkowe, triplanarne, uv, obraz, tekstura obrazu, openpbr
from: d7368b21
---

Materiał utworzony w obszarze roboczym **Cieniowanie** należy do pliku. Jest to mały graf: **węzły** tworzące tekstury, obrazy i liczby, połączone z **Wyjściem materiału**, którego wejścia określają wygląd powierzchni — kolor podstawowy, chropowatość, metaliczność, normalną, przezroczystość, emisję i resztę modelu OpenPBR. Malujesz nim ściany jak każdym materiałem z biblioteki, a każda zmiana od razu widać w widoku.

## Otwieranie

Wybierz {{ui:Cieniowanie}} na liście obszarów roboczych. Widok 3D zajmuje górę ekranu, a **edytor węzłów** — dół. Panel po prawej stronie wymienia materiały własne pliku.

- {{ui:Nowy materiał}} tworzy szary materiał zawierający tylko swoje Wyjście materiału.
- **Utwórz edytowalną kopię materiału z biblioteki** zamienia cegłę, drewno, płytki i resztę w graf, który możesz zmieniać: jego tekstura przechodzi przez węzeł Tekstura z biblioteki, a wypukłości przez węzeł Bump.
- {{ui:Maluj nim}} maluje zaznaczone ściany lub grupy albo wybiera materiał dla narzędzia {{ui:Malowanie}}. Materiały narzędzia Malowanie wymieniają też materiały własne pliku w sekcji **W tym pliku**.
- {{ui:Duplikuj}} i {{ui:Usuń}} działają na edytowanym materiale. Usunięcia nie można cofnąć: ściany pomalowane nim pokazują domyślny kolor, dopóki ich znów nie pomalujesz.

## Materiały z biblioteki

**Biblioteka materiałów (Library)** w panelu wymienia materiały z biblioteki, każdy z podglądem wyrenderowanym przez tracer ścieżek CadCraft. Są to zestawy tekstur udostępnione na licencji CC0, z podaniem twórców.

- Kliknij jeden, aby wczytać go do pliku (wraz z jego obrazami), a przy zaznaczonych ścianach lub grupach — pomaluj je.
- Przeciągnij jeden na ścianę lub grupę w widoku, aby pomalować tylko ją.
- Staje się jednym z materiałów pliku: zmieniaj jego węzły jak każdego innego. Jego autorstwo widać w panelu i pozostaje w pliku.

## Importowanie zestawu tekstur

{{ui:Obrazy lub zip…}} albo {{ui:Folder…}} w sekcji **Importuj zestaw tekstur** tworzy materiał z zestawu map. Mapy są rozpoznawane po słowach w nazwach plików: color, albedo, diffuse lub basecolor; roughness (lub gloss, przeliczony na chropowatość); metalness lub metallic; normal (OpenGL lub DirectX, z `gl` / `dx` w nazwie); height lub displacement; ambient occlusion; opacity; emission. Mapy spakowane (ARM, ORM) są pomijane. Kafelek zaczyna od 1 × 1 m: ustaw jego rzeczywisty rozmiar na Wyjściu materiału. Wysokość trafia do przemieszczenia, a jego skala wynosi 0 — zwiększ skalę, aby użyć jej na siatkach.

## MaterialX

MaterialX to otwarty format, którego inne programy 3D i renderujące używają do przekazywania materiałów.

- {{ui:Eksportuj jako MaterialX…}} zapisuje edytowany materiał: jego wartości oraz każdą teksturę jako obraz PNG obok pliku `.mtlx` (w archiwum zip). Wybierz shader, w którym zostanie zapisany: **OpenPBR Surface** (MaterialX 1.39, ten sam model, którego używa ModelCraft) albo **Standard Surface** (MaterialX 1.38, który dziś czyta więcej programów). Tekstury są rozmieszczane współrzędnymi UV w metrach; rozmieszczenie pudełkowe i triplanarne zapisywane jest jako UV.
- {{ui:Importuj MaterialX…}} (lub {{ui:Z folderu…}}) czyta pliki `.mtlx` z shaderami OpenPBR, Standard Surface, UsdPreviewSurface lub glTF PBR. Podaj też obrazy albo zip ze wszystkim: obraz jest odnajdywany po swojej ścieżce, nazwie lub nazwie z innym typem obrazu (gdy nazwa wskazuje `.exr`, obok może leżeć `.jpg`). Tekstury, mapy normalnych, działania arytmetyczne, mieszania i przemieszczenia trafiają jako węzły; cała reszta zachowuje swoją wartość, a pasek stanu mówi, co zostało pominięte.

## Kalkomanie

Kalkomania to obraz nałożony na powierzchnię — logo, znak, etykieta, plama — z własnym materiałem.

- Ustaw **Szerokość nowej kalkomanii**, następnie {{ui:Umieść kalkomanię…}} (lub {{ui:Kalkomania}} na pasku narzędzi), wybierz obraz PNG, JPEG lub WebP i kliknij ścianę. Obraz jest rzutowany na powierzchnie w tym miejscu, z zachowaniem proporcji; przezroczyste części PNG pozostają przezroczyste.
- Należy do grupy lub komponentu, w którym kliknąłeś, i przesuwa się razem z nim. Obejmuje ściany w swoim pudełku, które są skierowane w tę samą stronę, i zatrzymuje się na krawędziach tego, na czym leży.
- Każda kalkomania dostaje własny materiał o nazwie **Kalkomania: <obraz>** na liście pliku: edytuj go jak każdy inny (chropowatość, bump, poświatę). {{ui:Materiał}} obok kalkomanii go otwiera.
- Obok każdej kalkomanii: jej szerokość (wysokość podąża za obrazem), {{ui:Obróć}} (ćwierć obrotu) i {{ui:Usuń}}. Kalkomanie są przechowywane razem z materiałami pliku, poza cofaniem.
- Są widoczne w widoku cieniowanym, w szybkich renderach i w obrazach wysokiej jakości.

## Malowanie na teksturze

{{ui:Maluj teksturę}} (lub {{ui:Malowanie}} w sekcji **Malowanie na teksturze**) zamienia wskaźnik w okrągły pędzel. Przeciągnij po ścianie, która ma jeden z materiałów tego pliku: pędzel maluje obraz stojący za kolorem podstawowym.

- Na siatce maluje wzdłuż jej UV (najpierw rozwiń ją w obszarze roboczym UV); na innych ścianach maluje w poprzek ściany, więc malowanie powtarza się wraz z kafelkiem materiału.
- Materiał, którego kolor podstawowy jest zwykłym kolorem, dostaje przy pierwszym malowaniu nowy obraz 512 × 512 w tym kolorze. Materiał, którego kolor podstawowy pochodzi z innych węzłów, wymaga węzła Obraz połączonego z Kolorem podstawowym.
- Ustaw kolor pędzla, rozmiar (w pikselach obrazu), siłę i twardość w panelu. {{ui:Cofnij pociągnięcie}} lub Ctrl+Z (podczas malowania) cofa pociągnięcie, do ostatnich 20.
- Pomalowany obraz jest zapisywany w pliku. Materiałów z biblioteki nie można malować: najpierw utwórz ich edytowalną kopię.

## Wypalanie tekstur

**Wypalanie tekstur** zapisuje w obrazach, wzdłuż UV siatki, to, co kształt i scena nadają powierzchni.

- Zaznacz siatkę z UV (rozwiń ją w obszarze roboczym UV), zaznacz mapy i naciśnij {{ui:Wypal}}:
  - **Ambient occlusion** — jak otwarty jest każdy punkt: narożniki, zagłębienia i miejsca pod innymi obiektami są ciemniejsze. Wszystko pokazane w modelu go zacienia, do odległości okluzji.
  - **Curvature** — jasne wzdłuż zewnętrznych krawędzi, ciemne w wewnętrznych narożnikach, średnio szare na płaskich i łagodnie zakrzywionych częściach, w zakresie szerokości krawędzi, którą ustawisz.
  - **Normalne z obiektu o wysokiej szczegółowości** — zaznacz też szczegółową kopię: jej detale powierzchni są zapisywane jako mapa normalnych dla prostszego obiektu (ten z mniejszą liczbą trójkątów, na który się wypala). Odległość wyszukiwania to maksymalna odległość między dwiema powierzchniami.
  - **Oświetlenie** — słońce z miejsca i daty modelu (Styl) wraz z cieniami oraz niebo, jako mapa oświetlenia.
- Obrazy dołączają do pliku i pojawiają się w węzłach Obraz. Jeśli edytowany materiał ma węzeł **Brud i zużycie krawędzi**, od razu odczytuje nową okluzję i krzywiznę.
- Więcej promieni na teksel daje gładszą okluzję i oświetlenie, ale trwa dłużej. Wypalanie działa w tle na rdzeniach procesora; {{ui:Zatrzymaj wypalanie}} je zatrzymuje.

## Budowanie grafu

1. {{ui:Dodaj węzeł…}} (lub {{key:Shift+A}} w edytorze węzłów) dodaje węzeł na środku edytora.
2. Przeciągnij od kropki wyjścia (po prawej stronie węzła) do kropki wejścia (po lewej stronie węzła), aby je połączyć. Drugie połączenie do wejścia zastępuje pierwsze; przeciągnij połączone wejście w bok, aby je rozłączyć.
3. Wejścia niepołączone pokazują swoją wartość: wpisz liczbę lub wybierz kolor. Ustawienia znajdują się na dole każdego węzła.

Przeciągnij węzeł za tytuł, aby go przesunąć, przeciągnij puste miejsce, aby przesunąć widok, a kółkiem powiększaj. {{key:Delete}} usuwa zaznaczone węzły lub połączenie, {{key:Mod+Z}} cofa, {{key:Mod+D}} duplikuje, {{key:F}} pokazuje wszystkie węzły. Każda zmiana to jeden krok cofania edytora węzłów. Cofanie modelu nie zmienia materiałów.

| Węzły | Co tworzą |
|---|---|
| Współrzędne tekstury | Gdzie na kafelku znajduje się punkt: powtórz go, przesuń lub obróć o ćwierć. |
| Wartość, Kolor | Liczbę, kolor. |
| Obraz | Obraz pliku (taki, który przyszedł z importowanym modelem, albo dodany przez {{ui:Dodaj obraz…}}). Wybierz **Kolory** dla zdjęcia, a **Dane** dla mapy chropowatości lub normalnych. |
| Tekstura z biblioteki | Teksturę, chropowatość i wysokość materiału z biblioteki. |
| Szachownica, Szum | Kwadraty; gładki szum fraktalny z jego szczegółowością, chropowatością i ziarnem. |
| Komórki Voronoi, Fale, Gradient | Komórki (odległość do najbliższego punktu, krawędzie między komórkami, kolor dla każdej komórki); pasma w poprzek, w górę lub na ukos, jako sinus, piła lub trójkąt, zagięte szumem; gradienty liniowe, kwadratowe, promieniowe i sferyczne. |
| Cegły, Płytki | Rzędy cegieł z przesunięciem co rząd albo siatkę płytek: kolory, zaprawę lub fugę, szczelinę i fazkę w metrach, wysokość dla wypukłości, losową liczbę dla każdego elementu. |
| Drewno, Marmur | Słoje wzdłuż usłojenia z drobnymi włóknami; żyły zagięte turbulencją. |
| Brud i zużycie krawędzi | Zużywa wypukłe krawędzie i brudzi zagłębienia na podstawie obrazów krzywizny i okluzji siatki ([Wypalanie tekstur](topic:shading#bake-textures) je tworzy; albo ustaw jej dwa ustawienia obrazów w układzie UV siatki: umieść materiał za pomocą współrzędnych UV). Bez nich nic nie zmienia. |
| Mieszanie kolorów, Rampa kolorów, Odcień/nasycenie/jasność, Jasność i kontrast, Odwróć, Gamma, Rozdziel i Połącz RGB | Operacje na kolorach. |
| Matematyka, Zakres mapy | Działania arytmetyczne na liczbach (dodawanie, mnożenie, potęga, płynny krok i więcej). |
| Bump, Mapa normalnych | Normalną z wysokości (Bump) albo z obrazu mapy normalnych (Mapa normalnych: wybierz kierunek zielonego kanału). |

## Wyjście materiału

Jego ustawienia określają, jak tekstura układa się na powierzchniach:

- **Szerokość kafelka** i **Wysokość kafelka**: ile metrów zajmuje jeden kafelek tekstury. Wszystko, co tworzy graf, powtarza się na kafelku bez szwu.
- **Rozmieszczenie**: **Współrzędne UV** podążają za ścianami (ściany wypychane/ciągnięte: wzdłuż każdej ściany; siatki: ich UV, jednostka UV = jeden kafelek), **Pudełko** rzutuje z najbliższej z trzech osi, **Triplanarne** miesza trzy rzuty na pochylonych powierzchniach (**Ostrość mieszania**: wyższa wartość to ostrzejsze mieszanie).
- **Siła normalnej** skaluje wejście normalnej. **Skala przemieszczenia** ustala, jak daleko wejście przemieszczenia przesuwa wierzchołki siatki.
- {{ui:Więcej wejść}} pokazuje pozostałe wejścia OpenPBR: powłokę, puch, podpowierzchniowe, cienką warstwę, transmisję i ich kolory.

## W obrazach wysokiej jakości

Tracer ścieżek odczytuje z grafu kolor podstawowy, chropowatość, metaliczność, przezroczystość, normalną i emisję, tak jak zmieniają się na powierzchni. Każde inne połączone wejście (na przykład zmienna powłoka) jest używane w swojej średniej wartości; panel mówi, które. Wycięcie z mapy przezroczystości pokazuje swój kształt, a jego cień jest równomiernie przezroczysty. Świecąca tekstura oświetla to, do czego jest skierowana, bez traktowania jej jak lampy.

**Przemieszczenie** przesuwa wierzchołki wyłącznie siatek, więc dla szczegółów dodaj modyfikator Subdivision ([Modyfikatory](topic:modifiers)). Ściany wypychane/ciągnięte zachowują kształt i otrzymują wypukłości z normalnej.

:::tip
Na komputerze z WebGPU graf jest obliczany na karcie graficznej; bez niego — na procesorze. Wynik jest taki sam.
:::
