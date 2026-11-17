---
title: Przesuwanie, kopiowanie i tworzenie macierzy
summary: Przesuwaj obiekty kliknięciem lub o dokładną odległość, kopiuj je z klawiszem modyfikującym i twórz rząd równomiernie rozmieszczonych kopii.
keywords: przesuń, kopiuj, duplikuj, macierz, rząd, odstęp, podziel, odsunięcie, rozciągnij, kolumny, powtórz, wielokrotna kopia
from: 280245fc
---

{{ui:Przesuń}} ({{key:M}}) przesuwa zaznaczone obiekty z jednego punktu do drugiego. Przytrzymanie klawisza modyfikującego tworzy kopię, a po kopiowaniu możesz wpisać, ile jeszcze kopii chcesz.

## Przesuwanie obiektu

1. Zaznacz to, co chcesz przesunąć (zobacz [Zaznaczanie obiektów](topic:select)). Jeśli nic nie jest zaznaczone, narzędzie Przesuń przesuwa obiekt, w który klikniesz.
2. Naciśnij {{key:M}}.
3. Kliknij punkt, z którego chcesz przesunąć. Wybierz coś znaczącego, na przykład narożnik: ten punkt trafi dokładnie w miejsce, w które klikniesz następnie.
4. Przesuń wskaźnik. Zaznaczenie podąża za nim. Przyciąga się do punktów, krawędzi i kierunków czerwonego, zielonego i niebieskiego, tak jak linia.
5. Kliknij miejsce, w które ma trafić punkt, lub wpisz odległość i naciśnij {{key:Enter}}.

   Podpowiedź na pasku stanu wraca do „Wskaż punkt, z którego przesunąć…” przy kolejnym przesunięciu.

Wpisana odległość działa w kierunku, w który wskazujesz. Możesz też wpisać dokładne przesunięcie, `<2m,0,0>` (2 m wzdłuż czerwonej osi), albo dokładne miejsce docelowe dla wybranego punktu, `[0,0,0]` (początek układu). Zobacz [Wpisywanie dokładnych rozmiarów](topic:value-box).

Aby przesunąć tylko wzdłuż jednej osi, naciśnij klawisz strzałki po pierwszym kliknięciu: {{key:Right}} blokuje oś czerwoną, {{key:Left}} zieloną, {{key:Up}} niebieską. Naciśnij tę samą strzałkę ponownie, aby odblokować.

## Przesuwanie części kształtu rozciąga go

Geometria, która nie jest zgrupowana, jest połączona. Jeśli zaznaczysz jedną ścianę lub kilka krawędzi i je przesuniesz, przyłączone do nich ściany rozciągną się za nimi. Przesuń górną ścianę pudełka w bok, a pudełko się pochyli; przesuń jedną krawędź dachu, a dach zmieni kąt nachylenia. Ściany, które nie mogą już pozostać płaskie, zamieniają się w trójkąty.

Aby przesunąć cały obiekt bez rozciągania, zaznacz go w całości (potrójne kliknięcie) albo, lepiej, zamień go w grupę lub komponent (zobacz [Grupy i komponenty](topic:groups-components)).

## Kopiowanie obiektu

1. Zaznacz to, co chcesz skopiować.
2. Naciśnij {{key:M}}.
3. Przytrzymaj {{key:Ctrl}} (lub {{key:Alt}}) i kliknij punkt, z którego chcesz przesunąć. Na Macu to samo robi {{key:Mod}} lub {{key:Alt}}. Podpowiedź mówi „Ctrl zamiast tego przesuwa”, co oznacza, że kopiujesz.

   Możesz też nacisnąć i puścić {{key:Ctrl}} lub {{key:Alt}} po pierwszym kliknięciu, aby przełączać między przesuwaniem a kopiowaniem.

4. Kliknij miejsce, w którym ma być kopia, lub wpisz odległość i naciśnij {{key:Enter}}.

   Oryginał zostaje na miejscu, a kopia jest zaznaczona.

## Kopiuj, wytnij, wklej i duplikuj

- {{key:Mod+C}} kopiuje zaznaczenie, {{key:Mod+X}} wycina je (kopiuje, a potem usuwa), {{ui:Kopiuj}} i {{ui:Wklej}} są też przyciskami w grupie {{ui:Edycja}} na pasku narzędzi, a {{ui:Więcej}} obok nich ma wycinanie, wklejanie w miejscu i duplikowanie.
- {{key:Mod+V}} wkleja: kontur kopii podąża za wskaźnikiem, przyciągając się jak każde narzędzie, a kliknięcie ustawia ją tak, że jej najniższy narożnik trafia w to miejsce. {{key:Esc}} anuluje.
- {{key:Mod+Shift+V}} wkleja w miejscu, dokładnie tam, skąd pochodzi kopia — przydatne do przeniesienia czegoś do otwartej grupy.
- {{key:Mod+D}} ({{key:Shift+D}} w stylu Modeler) duplikuje: kopia powstaje i od razu podąża za wskaźnikiem; kliknij, aby ją ustawić, wpisz odległość albo naciśnij {{key:Esc}}, aby ją upuścić. Zaraz potem wpisz `3x`, aby uzyskać więcej kopii w rzędzie.

Wklejona grupa staje się nową grupą. Wklejony komponent jest kolejnym umieszczeniem tego samego komponentu, więc edycja jednego nadal zmienia wszystkie. Kopie wklejają się też do innej karty ModelCraft w tej przeglądarce (trafiają tam jako nowe definicje).

## Rząd kopii

Zaraz po kopiowaniu, gdy {{ui:Przesuń}} jest nadal narzędziem:

- Wpisz `3x` (lub `*3`) i naciśnij {{key:Enter}}, aby uzyskać trzy kopie w rzędzie, każdą w tym samym odstępie co pierwsza kopia. Dostajesz trzy nowe kopie oprócz oryginału.
- Wpisz `/3` i naciśnij {{key:Enter}}, aby zamiast tego podzielić: trzy kopie rozłożone równomiernie od oryginału do miejsca, w które wstawiłeś pierwszą kopię, ostatnia dokładnie w tym miejscu. Użyj tego, aby wypełnić odcinek: postaw jedną kopię na dalekim końcu, a potem podziel.

Możesz od razu wpisać inną liczbę: `5x` zastępuje rząd `3x`. Podpowiedź przypomina: „Skopiowano. Wpisz 3x, aby uzyskać więcej kopii w rzędzie, lub /3, aby podzielić odległość.”

### Przykład: kolumny co 6 metrów

1. Utwórz kolumnę i zamień ją w komponent ({{key:G}}), aby wszystkie kopie zmieniały się razem później.
2. Naciśnij {{key:M}}, przytrzymaj {{key:Ctrl}} i kliknij narożnik podstawy kolumny.
3. Przesuń wzdłuż czerwonej osi i wpisz `6m`, a następnie {{key:Enter}}.
4. Wpisz `4x` i {{key:Enter}}. Masz pięć kolumn, co 6 m.

## Warto wiedzieć

- Naciśnij {{key:Esc}} przed drugim kliknięciem, aby anulować; wszystko wraca na swoje miejsce.
- Przesuwanie działa wewnątrz grupy, którą edytujesz. Aby przesunąć całą grupę, najpierw ją zamknij i zaznacz z zewnątrz.
- Gdy {{ui:Kolizje}} jest włączone (w prawym dolnym rogu i w [ustawieniach ModelCraft](topic:settings#solids-stop-where-they-touch)), przesunięcie zatrzymuje się tam, gdzie zaznaczenie dotyka innej bryły, zamiast przez nią przechodzić. Kliknij {{ui:Kolizje}}, aby je wyłączyć przy przesunięciu, które ma przechodzić przez inne bryły.
- Aby umieścić kopię wewnątrz innej grupy: skopiuj ją, otwórz tamtą grupę i wklej ({{key:Mod+Shift+V}} zachowuje to samo miejsce).
