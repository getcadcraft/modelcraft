---
title: Modelowanie na planie sytuacyjnym z DWG lub DXF
summary: Wczytaj plan sytuacyjny lub rzut kondygnacji CAD jako linie na gruncie, odpowiedz na pytanie o jednostki i przerysuj je na ściany oraz bryły.
keywords: plan sytuacyjny, dwg, dxf, cad, import, szkic, zdjęcie szkicu, szkic odręczny, szkic na serwetce, zdjęcie, papier, kolory piór, bloki dynamiczne, stany widoczności, tekst, kreskowanie, spline, elipsa, ściana 3d, przerysowanie, rzut kondygnacji, działka, granica działki, jednostki, podkład, kontekst
from: 3415dc96
---

ModelCraft potrafi wczytać linie z dwuwymiarowego rysunku CAD, planu sytuacyjnego lub rzutu kondygnacji i położyć je na gruncie, abyś mógł modelować bezpośrednio na nich.

## Importowanie rysunku

1. Kliknij {{ui:Importuj}} w grupie {{ui:Plik}} (lub upuść plik na widok 3D).
2. Wybierz plik `.dwg` lub `.dxf`.

   Duży plik DWG wczytuje się chwilę: pasek stanu pokazuje „Odczytywanie plan.dwg…”, dopóki nie zostanie wczytany.

3. Jeśli rysunek nie mówi, jakie ma jednostki, okno dialogowe o tytule „Jednostki rysunku” pyta: „Czym jest jedna jednostka rysunku?” Wybierz {{ui:Cale}}, {{ui:Stopy}}, {{ui:Milimetry}} lub {{ui:Metry}}. Większość amerykańskich planów sytuacyjnych rysuje się w stopach, plany architektoniczne w calach, a plany metryczne w milimetrach.

   Rysunek trafia jako zaznaczona grupa krawędzi na gruncie, a widok przybliża się do niej. Pasek stanu podaje, ile krawędzi wczytano, na przykład „Zaimportowano site.dwg: 1697 krawędzi na gruncie, w grupie. Rozbij ją, aby rysować bezpośrednio na niej.”

## Co jest wczytywane

- Linie, polilinie (wraz z ich łukami), okręgi i łuki oraz bloki ze wszystkim, co zawierają, tylko z **przestrzeni modelu**. Krzywe stają się krótkimi prostymi odcinkami.
- Linie, polilinie, łuki, okręgi, elipsy i spline'y trafiają płasko na grunt jako krawędzie.
- **Kreskowania** stają się ścianami na gruncie, z wyspami jako otworami, dzięki czemu możesz od razu wypchnąć lub pociągnąć zakreskowany obszar.
- **Ściany 3D** i wypełnienia bryłowe stają się ścianami; ściany 3D zachowują swoje wysokości.
- **Tekst** (tekst jednowierszowy, tekst wieloliniowy i wartości atrybutów) jest rysowany jako krawędzie prostym pismem jednoliniowym, z własną wysokością, kątem i wyrównaniem tekstu. Jego czcionka nie jest czcionką rysunku, więc słowa mogą być nieco dłuższe lub krótsze. Znaki, dla których pismo nie ma kształtu, są rysowane jako małe kwadraty i zliczane.
- **Wymiary** są rysowane tak, jak pokazuje je rysunek (ich linie, groty i tekst, jako krawędzie i ściany).
- **Bloki dynamiczne** są wczytywane tak, jak pokazuje je rysunek: każdy umieszczony blok w stanie widoczności, w którym został zapisany, i tylko linie tego stanu. Pasek stanu wymienia je wraz z pokazanymi stanami i pozostałymi stanami każdego z nich, na przykład „Receptacle pokazany jako Duplex ×38, GFI ×7 (stany: Duplex, GFI)”. ModelCraft nie przełącza stanów.
- **Bryły 3D, regiony i ciała** (dane ACIS rysunku) są wczytywane jako własne grupy: zamknięta bryła jako bryła, region lub otwarte ciało jako ściany. Płaskie ściany trafiają w całości; zakrzywione (walce, stożki, kule, torusy, proste powierzchnie spline) jako małe trójkąty z miękkimi krawędziami między nimi, tak że widać tylko własne krawędzie bryły. Ściana na innym rodzaju powierzchni jest pomijana i wymieniana: „Jeszcze nie narysowano (bryły 3D): …”.
- Nie są importowane: punkty, tabele, wielokrotne odnośniki, obrazy i inne typy obiektów. Pasek stanu wymienia je według typu, na przykład „Nie zaimportowano: 12 POINT.” Wszystko, co znajduje się na układzie (w przestrzeni papieru), również jest pomijane, bez wymieniania.
- Warstwy nie są zachowywane: wszystkie linie wchodzą jednakowo.

Jeśli rysunek leży daleko od swojego początku (na przykład w układzie stanowym, state plane), nadal zostanie wczytany, ale może wylądować daleko od początku ModelCraft. Rysunki sięgające ponad 10,000 km od swojego początku są odrzucane: najpierw przesuń rysunek bliżej 0,0 w programie CAD.

## Przerysowanie na ściany

Wczytane linie rzadko same układają się w czyste ściany. Dwa sposoby pracy:

**Zachowaj plan jako podkład (zalecane)**

1. Pozostaw plan jako osobną grupę.
2. Narysuj budynek na wierzchu za pomocą {{ui:Prostokąt}} i {{ui:Linia}}, przyciągając do narożników planu („Koniec”) i krawędzi („Na krawędzi”).
3. Wypchnij lub pociągnij ściany w górę. Plan pozostaje nietknięty pod spodem, a całą grupę możesz później usunąć jednym kliknięciem.

Przyciąganie działa między grupami: możesz przyciągać do narożników planu bez jego otwierania.

**Rysuj na własnych liniach planu**

1. Zaznacz grupę planu i kliknij {{ui:Rozbij}}. Jego linie stają się luźnymi krawędziami.
2. Tam, gdzie zamknięty kontur powinien być ścianą, narysuj jedną linię nad dowolną z jego krawędzi za pomocą {{ui:Linia}}, od narożnika do narożnika. Gdy kontur jest zamknięty i płaski, ściana zwykle się wypełnia. Jeśli tak się nie stanie, poszukaj przerwy lub nakładania się w konturze i narysuj po nim.
3. Wypchnij lub pociągnij ją.

Najlepiej działa to na czystym planie. Na zagmatwanym planie geodezyjnym przerysowanie na wierzchu jest szybsze.

## Problemy

- „To jest binarny DXF. Zapisz go jako DXF ASCII i spróbuj ponownie.” Zapisz DXF ponownie z programu CAD jako ASCII (tekst).
- „…nie ma linii, łuków ani okręgów w przestrzeni modelu do wczytania.” Rysunek prawdopodobnie cały znajduje się na układach albo składa się wyłącznie z tekstu i kreskowań.
- „Nie udało się odczytać tego rysunku (…). Może być uszkodzony albo zapisany w wersji DWG, której czytnik nie obsługuje…” Nawiasy mówią, dlaczego, na przykład „Wersja DWG AC1009 nie jest obsługiwana”. Zapisz go w programie CAD jako DXF albo jako DWG z AutoCAD 2000 do 2018.
- Plan ma złe wymiary: wybrano złą jednostkę. Cofnij ({{key:Mod+Z}}) i zaimportuj ponownie albo [przeskaluj](topic:rotate-scale) grupę o właściwy współczynnik (12 między stopami a calami, 25,4 między calami a milimetrami).

Aby zamienić warstwice w grunt, który można rzeźbić, zob. [Teren](topic:terrain).

## Ze zdjęcia szkicu odręcznego

**Plik › Importuj zdjęcie szkicu…** przyjmuje zdjęcie szkicu na papierze (JPEG, PNG lub TIFF; zdjęcie prosto z telefonu jest w porządku) i tworzy ten sam rodzaj krawędzi na gruncie. Podaj, jaki to papier (albo pozwól go znaleźć — przyjmie się A4) oraz skalę szkicu, na przykład 1 : 100. Krawędź papieru zostaje znaleziona, a zdjęcie wyprostowane; tusz zostaje przerysowany na linie i łuki, a każdy kolor pióra (czarny, czerwony, niebieski, zielony) staje się osobną grupą z etykietą (**Szkic czarny**, **Szkic czerwony**, …), wszystkie wewnątrz jednej grupy nazwanej od zdjęcia. To jeden krok cofania, a wszystko odbywa się na tym komputerze: nic nie jest nigdzie wysyłane.

Jeśli nie można znaleźć krawędzi papieru, całe zdjęcie zostaje przyjęte jako arkusz, a pasek stanu to mówi: zmierz coś, co znasz, i przeskaluj grupę, jeśli wymiary się nie zgadzają. Przerysuj linie na ściany, jak wyżej.
