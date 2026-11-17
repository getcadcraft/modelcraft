---
title: Wpisywanie dokładnych rozmiarów w polu wartości
summary: Wszystkie sposoby wpisywania długości, rozmiarów, punktów, odsunięć, kątów, boków i kopii oraz sposób odczytu jednostek i gołych liczb.
keywords: pole wartości, pole pomiarów, vcb, wpisz, dokładny, wymiar, długość, jednostki, stopy, cale, metryczne, milimetry, współrzędne, odsunięcie, macierz, boki, kąt, przecinek dziesiętny
from: 0148dc3d
---

Pole wartości znajduje się na pasku stanu na dole, z etykietą, która zmienia się wraz z narzędziem. Podczas pracy pokazuje na żywo bieżący rozmiar; w każdej chwili możesz wpisać dokładny.

## Jak wpisać

1. Zacznij akcję kliknięciem (pierwszy narożnik, ściana, punkt, od którego zaczynasz przesuwanie).
2. Wpisuj. Nie musisz klikać pola wartości: cyfra albo jeden ze znaków `. , - ' " [ < * /` wysyła wpisywany tekst tam.
3. Naciśnij {{key:Enter}}.

Naciśnij {{key:Esc}} w polu wartości, aby je wyczyścić i wrócić do widoku. Na ekranie dotykowym stuknij pole wartości, aby pokazać klawiaturę.

Jeśli ModelCraft nie potrafi odczytać wpisu, pasek stanu pokazuje „Wpisz długość, na przykład 3m, 10'6" lub 4m,3m.”. Jeśli narzędzie nie może z niego skorzystać, pokazuje „To nie zadziałało: …” wraz z powodem.

## Długości

| Wpisz | Oznacza |
|---|---|
| `3m` `320cm` `3200mm` | Metry, centymetry, milimetry |
| `10'` `10ft` `10 feet` | Stopy |
| `6"` `6in` `6 inches` | Cale |
| `10'6"` `10' 6"` `10'-6 1/2"` | Stopy i cale, z ułamkiem |
| `6 1/2"` `6-1/2"` `3/4"` | Cale z ułamkiem |
| `1.5ft` `.5m` | Liczby dziesiętne z jednostką |
| `120` | Gołą liczbę, w jednostce modelu |

**Goła liczba używa jednostki modelu**, jak pokazano w wyborze w prawym dolnym rogu: cale w modelu w stopach i calach (więc `120` to 10 stóp), milimetry w modelu w milimetrach i tak dalej. Wpisana jednostka zawsze wygrywa, niezależnie od jednostki modelu. Typograficzne cudzysłowy i znaki prim (’ ” ′ ″) też są odczytywane jako stopy i cale.

:::warning
Zawsze używaj **kropki** jako separatora dziesiętnego: `2.5m`. Przecinek oddziela dwie wartości, więc `2,5` oznacza 2 i 5 (dwie wartości), niezależnie od ustawień języka.
:::

## Obliczenia

Każda długość może być obliczeniem: dodaj `+`, odejmij `-`, pomnóż `*`, podziel `/`, używaj nawiasów. Kalkulator nie jest potrzebny.

| Wpisz | Oznacza |
|---|---|
| `2.5/3` | Jedną trzecią 2.5 (w jednostce modelu) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" w modelu w stopach i calach |
| `3m-25cm` | 2.75 m |

Goła liczba jest w jednostce modelu, gdy jest długością (`2.5/3` w modelu w metrach to 0.833 m), a jest zwykłym współczynnikiem, gdy mnoży lub dzieli długość (`2*450mm`). Kąty i współczynniki też przyjmują obliczenia: `90/2` to 45°. Dwie długości pomnożone razem dają pole, nie długość, więc `2m*3m` zostaje odrzucone.

Jeśli ModelCraft nie potrafi tego obliczyć, pasek stanu mówi, co jest nie tak i gdzie, na przykład „Dzielenie przez zero (znak 4).” Nawias też uruchamia pole wartości, więc możesz zacząć od `(`.

Te zapisy zachowują swoje znaczenie: `/3`, `3x` i `*3` po kopii, `24s` dla boków oraz `/3` przy zaznaczonej krawędzi (wtedy [dzieli krawędź](topic:divide)).

## Według narzędzia

| Narzędzie | Etykieta | Wpisz |
|---|---|---|
| {{ui:Linia}} | {{ui:Długość}} | Długość (w kierunku wskaźnika) albo punkt lub odsunięcie (poniżej) |
| {{ui:Prostokąt}} | {{ui:Wymiary}} | Dwie długości: `4m,3m`, `12',10'`. Działa też średnik: `4m;3m` |
| {{ui:Okrąg}}, {{ui:Wielokąt}} | {{ui:Boki}}, potem {{ui:Promień}} | Przed pierwszym kliknięciem liczba boków: `12s` albo `12` (3 do 999). Po nim promień |
| {{ui:Wypychanie/ciągnięcie}} | {{ui:Odległość}} | Długość. Ujemna idzie w przeciwnym kierunku |
| {{ui:Przesuń}} | {{ui:Odległość}} | Długość (w kierunku wskaźnika) albo punkt lub odsunięcie. Po kopii: `3x`, `*3`, `/3` |
| {{ui:Obróć}} | {{ui:Kąt}} | Stopnie: `90`, `-45`, `22.5` |
| {{ui:Skaluj}} | {{ui:Skaluj}} | Współczynnik powyżej 0: `2`, `0.5`, `1.25` |
| {{ui:Miara}} | {{ui:Odsunięcie}} lub {{ui:Długość}} | Długość |
| {{ui:Podziel}} | {{ui:Części}} | Ile równych części: `5`, `5s` albo `/5` (2 do 1000). Zob. [Podziel krawędź lub krzywą na równe części](topic:divide) |
| {{ui:Wymiar}} | {{ui:Odsunięcie}}, potem {{ui:Długość}} | Gdzie idzie linia wymiaru; zaraz po umieszczeniu nowa długość zmienia rozmiar modelu |
| {{ui:Zaznacz}} | {{ui:Wartość}} | Przy jednym zaznaczonym wymiarze lub krawędzi nowa długość zmienia rozmiar modelu. Zob. [Wymiar i zmiana rozmiaru](topic:dimensions) |

## Punkty i odsunięcia

Dla {{ui:Linia}} i {{ui:Przesuń}}, po pierwszym kliknięciu:

- `[x,y,z]` idzie do tego dokładnego punktu w modelu (w osiach własnych grupy, gdy edytujesz wewnątrz grupy). Przykład: `[0,0,3m]` to 3 m prosto nad początkiem.
- `<dx,dy,dz>` idzie tak daleko od pierwszego punktu wzdłuż czerwonej, zielonej i niebieskiej osi. Przykład: `<0,0,10'>` to 10 stóp prosto w górę.

Każda z trzech wartości może mieć własną jednostkę: `<12',0,6">`.

## Kopie po przesunięciu

Zaraz po kopii przez {{ui:Przesuń}}:

| Wpisz | Tworzy |
|---|---|
| `3x` albo `*3` | 3 kopie w rzędzie w tym samym odstępie |
| `/3` | 3 kopie rozmieszczone równomiernie od oryginału do pierwszej kopii |

Do 500 kopii. Zob. [Przesuwanie, kopiowanie i tworzenie macierzy](topic:move-copy#a-row-of-copies).

## Wpisane długości potrzebują kierunku

Pojedyncza wpisana długość idzie w kierunku, w który wskazuje wskaźnik od pierwszego kliknięcia. Jeśli wpiszesz zaraz po kliknięciu, zanim w ogóle ruszysz, nie ma jeszcze kierunku i nic się nie dzieje. Przesuń wskaźnik trochę w stronę, w którą chcesz iść, a potem wpisz.

## Jednostka modelu

Zmień jednostkę w wyborze w prawym dolnym rogu: {{ui:ft i in}}, in, ft, yd, mi, mil, µm, mm, cm, m albo km, o ile są włączone w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} (jednostka własna modelu jest zawsze dostępna). Długość wpisana z oznaczeniem dowolnej jednostki jest odczytywana w tej jednostce. Zob. [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists). Zmienia to sposób pokazywania długości i odczyt gołych liczb; model zostaje tej samej wielkości. Jednostka jest zapisywana w pliku.

Sposób pokazywania rozmiarów:

| Jednostka | Długości | Pola | Objętości |
|---|---|---|---|
| ft i in | `10' 6 1/2"` (do 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² od 0.01 m², poza tym mm² | m³ od 0.01 m³, poza tym mm³ |

Nowy model zaczyna się w stopach i calach, gdy język przeglądarki jest ustawiony na region USA (oraz Liberia i Mjanma), a w milimetrach wszędzie indziej. Jednostka oznaczona gwiazdką w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} jest używana zamiast, gdy ModelCraft ją ma. Możesz też zmienić wybór po {{ui:Nowy}}.
