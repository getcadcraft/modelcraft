---
title: Węzły: budowanie modelu przez łączenie
summary: Łącz liczby w punkty, punkty w krzywe, krzywe w powierzchnie. Zmień liczbę, a wszystko, co od niej zależy, zbuduje się ponownie. Każdy węzeł to też linia CraftScript, a graf jest zapisany w pliku.
keywords: węzły, edytor węzłów, skryptowanie wizualne, parametryczny, graf, przewody, porty, swobodny, freeform, nurbs, loft, wyciągnij, obróć, okrąg, krzywa, powierzchnia, seria, zakres, losowy, lista, skrypt, craftscript, grasshopper
from: 9c8e254f
---

Edytor **Węzły** buduje geometrię, łącząc ze sobą pudełka. Każde pudełko (węzeł) wykonuje jedno małe zadanie: tworzy liczbę, punkt, okrąg, loft. Łączysz wynik jednego z wejściem następnego, a model podąża za zmianą, gdy zmienisz liczbę na początku.

Otwórz go z panelu po prawej stronie: {{ui:Węzły}} › {{ui:Węzły…}}. Plik, który już ma graf, otwiera go sam. To okno nad widokiem 3D: przeciągnij jego pasek tytułu, aby je przesunąć, a róg, aby zmienić rozmiar.

## Łączenie

1. Wybierz węzeł z listy po lewej (wpisz w polu wyszukiwania, aby zawęzić; <kbd>Enter</kbd> dodaje pierwszy pasujący). Pojawi się w środku płótna.
2. Przeciągnij od okrągłego **wyjścia** po prawej stronie jednego węzła do okrągłego **wejścia** po lewej stronie innego. Kropka zrobi się zielona, gdy połączenie pasuje, i czerwona, gdy nie pasuje; najedź na nią, aby zobaczyć powód.
3. Wejście bez połączenia pokazuje pole na wpisaną wartość. Wpisz liczbę i naciśnij <kbd>Tab</kbd>: wynik się przebuduje.
4. Małe kółko na pasku tytułu węzła to jego **oko**. Węzeł z włączonym okiem jest rysowany w widoku 3D: jako linie dla krzywych, cieniowany dla powierzchni, kropki dla punktów.

Przeciągnij węzeł za pasek tytułu. Przeciągnij tło, aby przesuwać widok, a kółkiem myszy powiększaj. <kbd>Delete</kbd> usuwa zaznaczony węzeł. {{ui:Uporządkuj}} układa węzły w kolumny, {{ui:Dopasuj}} mieści je wszystkie w widoku, a {{ui:Cofnij}} i {{ui:Ponów}} przechodzą przez twoje zmiany.

## Typy i jednostki

Porty mają typ: liczba, tak/nie, punkt, wektor, krzywa, powierzchnia, siatka, bryła albo „geometria” dla dowolnego z nich. Punkt może zasilić wejście wektora i odwrotnie. Liczby mają jednostkę: **długość** jest w milimetrach, a **kąt** w stopniach. Długości nie można podłączyć do kąta, a długość pomnożona przez długość (pole) jest odrzucana, więc błędne połączenie zostaje zatrzymane już w chwili jego tworzenia.

Kwadratowa kropka to **lista**. Gdy lista trafia na wejście pojedynczej wartości, węzeł działa raz dla każdego elementu, a jego wynik staje się listą. Krótsza lista powtarza swój ostatni element. Na przykład **Seria** wysokości podłączona do **Przesuń** tworzy stos kopii.

## Bryły i operacje logiczne jako węzły

Grupa **Bryły** tworzy zamknięte bryły z tych samych dokładnych powierzchni co panel Powierzchnie: **Prostopadłościan (bryła)**, **Walec (bryła)** i **Kula (bryła)** (rozmiary w mm), **Suma**, **Odejmij** i **Część wspólna** (druga bryła jest brana z pierwszej; tolerancja to, jak daleko trójkąty silnika brył mogą być od dokładnych powierzchni), **Zaokrąglenie między ścianami** (ściany według ich numeru w bryle, 1 dla pierwszej; promień i, powyżej 0, promień na końcu), **Objętość bryły** (mm³) oraz **Bryła na siatkę** (aby ją zobaczyć lub zapisać). Bryła ma własny typ portu: punktu ani liczby nie da się podłączyć do wejścia bryły, a kropka zostaje czerwona. Węzły operacji logicznych i zaokrągleń używają własnego silnika brył programu, wczytywanego przy pierwszym otwarciu edytora.

## Błędy

Węzeł, który nie może wykonać swojego zadania, podaje powód pod swoją nazwą, na czerwono („Promień musi być większy od zera.”), a węzły za nim czekają. Ten sam komunikat jest Problemem w panelu Problemy, więc możesz go tam znaleźć.

## Każdy węzeł to linia skryptu

Naciśnij {{ui:Skrypt}}, aby zobaczyć graf jako CraftScript: jedna linia na węzeł, na przykład `n3 = nd_circle(n2, n1, [0 0 1]);`. Edytuj tekst i naciśnij {{ui:Utwórz graf z tego skryptu}}, aby przywrócić go jako graf. Te same funkcje `nd_` działają w skrypcie CraftScript w PartCraft, więc graf można tam uruchomić, zapętlić lub przetestować. Liczby losowe zawsze przyjmują **ziarno**, dzięki czemu ten sam graf daje ten sam wynik na każdym komputerze.

## Zapisane z plikiem

Graf jest zapisany w pliku modelu. Węzły tworzą własne krzywe, powierzchnie i siatki: nie zmieniają ścian modelu, dopóki o to nie poprosisz.

## Zapisywanie w modelu

Włącz oko węzła, który tworzy powierzchnię lub siatkę, a następnie naciśnij {{ui:Zapisz w modelu}} w oknie Węzły. Każda pokazana powierzchnia lub siatka staje się grupą ścian w modelu, w metrach, którą możesz edytować jak każdy inny obiekt. To jeden krok cofania. Graf zostaje, ale kopia już za nim nie podąża: zmień liczbę i zapisz ponownie, aby uzyskać nową. Punkty i krzywe nie są bryłami, więc są pominięte, a komunikat podaje, ile ich było.
