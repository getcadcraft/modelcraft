---
title: Podziel duży model do druku
summary: Potnij model zbyt duży dla drukarki na części, które zmieszczą się na stole, z kołkami, kluczami, jaskółczymi ogonami, otworami na kołki lub magnesy i numerem złącza na obu powierzchniach. Pobierz każdą część i arkusz złożenia w jednym pliku zip.
keywords: druk 3D, podział, skos, cięcie ukośne, cięcie pod kątem, ukośne, dzielenie, cięcie, za duży, rozmiar stołu, objętość roboczą, części, łączniki, kołki, klucze, jaskółczy ogon, kołek łączący, magnes, luz, tolerancja, numery części, złożenie, widok rozstrzelony, zip, stl, 3mf, licencja, klucz USB, klucz sprzętowy
from: ee96ba77
---

Gdy model jest większy niż stół drukarki, **Podziel do druku** tnie go na części, które się zmieszczą, dodaje łączniki, dzięki którym części pasują do siebie po złożeniu, i wygrawerowuje ten sam numer na obu powierzchniach każdego złącza. Otwórz {{ui:Eksport}} › {{ui:Sprawdź do druku 3D (STL lub 3MF)…}}; w wierszu okna dialogowego **Narzędzia do druku** znajduje się {{ui:Podziel do druku}}. Otwiera się jako karta nad widokiem.

Działa na tym, co się drukuje: na zaznaczeniu albo na wszystkim widocznym, gdy nic nie jest zaznaczone. To, co ma być wydrukowane, musi być zamkniętą bryłą; jeśli sprawdzenie wykryje dziury, najpierw użyj [Napraw](topic:print-tools#repair).

Działa w ModelCraft, na Twoim komputerze: bez serwera licencji, bez klucza USB, bez wysyłania czegokolwiek.

## Cięcie

- **Dopasuj do stołu, najmniej części**: podaj szerokość, głębokość i wysokość stołu (zaczynają się od {{ui:Ustawienia}} › ModelCraft › drukarka 3D). Karta podaje, ile części powstanie i jak duża będzie każda; model zostaje pocięty na równe części, tyle, ile trzeba. Część może leżeć na boku w plikach, jeśli dzięki temu się zmieści. Łączniki wystające z części wliczają się do jej rozmiaru.
- **W podanych miejscach**: wybierz oś, po której ma być cięcie, i wpisz położenie w milimetrach od dolnego końca modelu, oddzielając wartości przecinkami (`100, 200` daje trzy części).
  **Skos** obraca cięcia o do 60° wokół jednej z dwóch pozostałych osi (na przykład cięcie w poprzek osi Z skoszone wokół osi X): każde skośne cięcie przechodzi przez środkową linię modelu w swoim miejscu, daje częściom większą powierzchnię klejenia i lepiej ukrywa złącze na nachylonej powierzchni. Łączniki ustawiają się prostopadle do cięcia.

Płaszczyzny cięcia są rysowane wokół modelu linią przerywaną, dopóki karta jest otwarta.

## Łączniki

Każde miejsce, w którym dwie części się stykają, dostaje łączniki, rozmieszczone same tam, gdzie jest najwięcej miejsca: co najmniej **najcieńsza ścianka** plus **luz** plus ich własny rozmiar od zewnętrznej krawędzi, i na tyle daleko od każdego innego cięcia, by dwa otwory nigdy się nie spotkały. Na długiej powierzchni dwa łączniki rozkładają się wzdłuż niej, tak by części nie mogły się obracać.

- **Okrągłe kołki**: kołek na jednej części (ścięty na czubku), otwór w drugiej.
- **Kwadratowe klucze**: to samo, kwadratowe, tak że część może wejść tylko na jeden sposób.
- **Jaskółcze ogony**: język wsuwany w wycięcie z boku. Gdy jeden koniec wycięcia spotkałby się z innym cięciem, jaskółczy ogon kończy się wcześniej i wsuwa się od otwartego końca. Jaskółcze ogony pasują do cięć w jednym kierunku (rząd plasterków); w siatce użyj kołków lub kołków łączących.
- **Otwory na kołki łączące**: otwór po każdej stronie; same kołki również są drukowane (w pliku zip).
- **Kieszenie na magnesy**: kieszeń po każdej stronie na okrągły magnes o średnicy i grubości, które podasz. Sprawdź bieguny przed wklejeniem.
- **Brak (klej)**.

**Luz** to szczelina po każdej stronie między kołkiem a jego otworem (0,2 mm na start). Jest zgodny z podaną wartością: okrągłe otwory są robione trochę większe, aby ich płaskie boki, a nie rogi, zachowały ten luz. Zwiększ go, jeśli części z drukarki wychodzą ciasno.

Gdy złącze nie ma miejsca na łącznik (cienka ścianka, mała stykająca się powierzchnia), karta to mówi: wtedy skleij tylko to złącze.

## Numery części

Przy włączonym **Grawerowanie numerów złączy na obu powierzchniach** każde złącze dostaje numer swoich dwóch części, na przykład `3-4`, wygrawerowany na głębokość 0,6 mm na obu powierzchniach, czytelny we właściwym kierunku na każdej. Numery zaczynają się od wysokości 5 mm i zmniejszają się, by się zmieścić, aż do 2,5 mm; złącze bez miejsca na numer jest wymienione na liście. Części są numerowane od warstwy dolnej w górę.

## Podgląd, pobieranie, podział modelu

1. {{ui:Podgląd}} tnie model i podaje, ile jest części, złączy i łączników, czy każda część przechodzi sprawdzenie druku 3D i mieści się na stole, oraz wypisuje rozmiar każdej części. Pierścień zaznacza każdy łącznik i numer w widoku.
2. {{ui:Pobierz części (.zip)}} zapisuje jeden plik zip: plik dla każdej części (STL lub 3MF, jak wybierzesz w **Plikach**), każda stojąca na stole; kołki łączące; oraz **arkusz złożenia** — rysunek części rozłożonych z ich numerami (`assembly.svg` i `assembly.png`) oraz listę części i złączy (`assembly.txt`).
3. {{ui:Podziel model}} umieszcza części w modelu zamiast zaznaczonych grup lub komponentów, nazwanych tak jak na arkuszu złożenia, w jednym kroku: {{ui:Cofnij}} przywraca oryginał. Wymaga zaznaczonych grup lub komponentów do podziału; pobieranie działa na tym, co się drukuje.

## Przesuń łączniki samodzielnie

Po podglądzie **Łączniki ręcznie** pozwala poprawić, gdzie są łączniki:

- {{ui:Przesuń jeden}}: kliknij czerwony pierścień w widoku (zmieni kolor na zielony), a następnie kliknij, gdzie ma być na cięciu.
- {{ui:Dodaj jeden}}: kliknij w widoku miejsce, w którym ma być łącznik. Trafi na płaszczyznę cięcia, do której dociera kliknięcie, między dwie części.
- {{ui:Usuń jeden}}: kliknij czerwony pierścień, aby usunąć ten łącznik.

Każda zmiana jest sprawdzana ponownie, tak jak automatyczne: miejsce zbyt blisko konturu, inne cięcie lub inny łącznik nie zostaną utworzone, a karta to podaje. {{ui:Znów automatycznie}} zapomina Twoje miejsca. Są zachowywane, dopóki model, zaznaczenie i cięcia pozostają bez zmian.

Podgląd zostaje, dopóki nie zmieni się model, zaznaczenie lub ustawienie; wtedy karta prosi o ponowny podgląd.

:::note
Każda część jest sprawdzana tak, jak sprawdzenie druku 3D sprawdziłoby ją przed pobraniem. Slicer i tak decyduje, jak każda część się drukuje: obejrzyj każdą tam i wydrukuj najpierw jedno złącze, aby zobaczyć, jak drukarka radzi sobie z luzem.
:::
