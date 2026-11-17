---
title: Przygotowanie modelu do druku 3D
summary: Sprawdź, czy model jest zamknięty i skierowany właściwie, zobacz jego rozmiar, podstawę i nawisy, napraw, co jest źle, i pobierz jako STL lub 3MF dla slicera.
keywords: druk 3D, drukowanie 3D, drukarka, drukuj, slicer, stl, 3mf, szczelny, zamknięty, rozmaity, bryła, otwory, na lewą stronę, nawis, podpory, podstawa, stół, milimetry, eksport, napraw, naprawa, drążenie, rozmiar stołu, początkujący, grubość ścianek, narzędzia druku
from: 948e19af
---

Slicer drukarki 3D potrzebuje zamkniętego kształtu: bez dziur, z każdą ścianą skierowaną na zewnątrz i bez przechodzenia przez siebie. {{ui:Eksport}} › {{ui:Sprawdź do druku 3D (STL lub 3MF)…}} sprawdza dokładnie to, zanim pobierzesz plik.

## Sprawdź i pobierz

1. Zaznacz to, co chcesz wydrukować: jedną lub więcej grup albo komponentów, albo niektóre ściany. Gdy nic nie jest zaznaczone, drukuje się wszystko, co widoczne.
2. Kliknij {{ui:Eksport}} w grupie {{ui:Plik}}, a następnie {{ui:Sprawdź do druku 3D (STL lub 3MF)…}}.

   Okno zaczyna się od jednej linii: „Gotowe do druku”, ile rzeczy trzeba naprawić przed drukiem, albo ile trzeba najpierw obejrzeć. Każdy problem ma trzy części: co jest źle, dlaczego to ważne i co zrobić. Potem podany jest rozmiar w milimetrach, objętość, liczba trójkątów i twój stół drukarki.

3. Jeśli okno wymienia rzeczy do naprawy, kliknij {{ui:Napraw, co można naprawić}} (zobacz niżej). Sprawdzanie uruchomi się ponownie samo.
4. Kliknij {{ui:Pobierz 3MF}} albo {{ui:Pobierz STL}}.

To, co się drukuje, to to, co widzisz: ukryte ściany, ukryte grupy i komponenty oraz wszystko na ukrytym znaczniku zostaje pominięte. Rozmiary są zawsze w milimetrach, jednostce, której oczekują slicery, niezależnie od jednostki pokazanej w modelu.

:::tip
Wybierz 3MF, jeśli twój slicer go czyta: zachowuje kolory i jednostki. STL nie ma ani jednego, a slicery zakładają milimetry.
:::

## Co sprawdza sprawdzanie

Te rzeczy przerywają druk albo go psują i sprawiają, że okno mówi „Nie gotowe do druku”:

| Problem | Co to znaczy | Co zrobić |
|---|---|---|
| Ściana tylko z jednej strony | Dziura: krawędź ma ścianę z jednej strony i nic z drugiej | Narysuj brakującą ścianę (linia przez szczelinę często ją zamyka) albo użyj {{ui:Napraw}} (poniżej) |
| Wspólna dla trzech lub więcej ścian | Ściany spotykają się w żebrze albo w ścianie wewnątrz bryły | Usuń wewnętrzną ścianę |
| Ściany skierowane w przeciwne strony | Część ścian wskazuje do środka, część na zewnątrz | Zaznacz ściany, które wskazują do środka, i kliknij {{ui:Odwróć ścianę}} w {{ui:Informacje o obiekcie}} |
| Na lewą stronę | Cała zamknięta część wskazuje do wnętrza | Zaznacz jej ściany i odwróć je |
| Przechodzi przez siebie | Jedna część zagina się przez siebie | {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Przetnij z modelem}}, a potem usuń to, co jest w środku. Zobacz [Przecięcie ścian](topic:intersect) |

To są ostrzeżenia: model się wydrukuje, ale najpierw warto spojrzeć.

- **Osobne części nachodzą na siebie** albo **stykają się ścianami**: slicery zwykle łączą je w jedną. Dla czystszego pliku połącz je przez {{ui:Bryły}} › {{ui:Suma}}. Zobacz [Narzędzia brył](topic:solids).
- **Nic nie leży płasko na dole**: obróć model tak, aby ściana spoczywała na stole, bo inaczej slicer doda podpory albo tratwę.
- **Odchyla się o więcej niż 45° od pionu**: te ściany potrzebują podparcia. Okno mówi, jaka część powierzchni tego wymaga.
- **Mniej niż 1 mm szerokości**: prawdopodobnie zamodelowane w złej jednostce. Sprawdź jednostkę na pasku stanu.

Część pusta (zamknięta powłoka wewnątrz innej) jest w porządku: jej ściany wskazują do wnętrza pustki, a jej objętość zostaje odjęta.

## Napraw problemy

Pod **Gdzie są problemy** okno wymienia każdą grupę lub komponent, który ma coś nie tak (luźne ściany nie w grupie są wymienione jako „Ściany poza grupą”), wraz z tym, co jest w nim źle. Komponent umieszczony kilka razy jest wymieniony raz: naprawa go naprawia każdą kopię.

- {{ui:Pokaż}} otwiera tę grupę i zaznacza krawędzie i ściany, które są źle, aby były podświetlone.
- {{ui:Napraw, co można naprawić}} naprawia je wszystkie naraz: zamyka dziury, których krawędzie leżą płasko, usuwa ściany wewnątrz kształtu i luźne krawędzie oraz odwraca ściany na zewnątrz. To jeden krok: {{key:Mod+Z}} cofa go. Sprawdzanie uruchamia się wtedy ponownie i pokazuje, co zostało.

Czego nie może naprawić (dziura, której krawędzie nie leżą płasko, część przechodząca przez siebie), zostaje na liście z tym, co zrobić ręcznie. {{ui:Napraw}} w **Narzędziach druku** idzie dalej: zamyka dziury, które nie są płaskie, usuwa luźne kawałki i zdublowane ściany oraz wymienia każdą poprawkę. Zobacz [Podpory, grubość ścianek, drążenie i naprawa](topic:print-tools#repair). Możesz też naprawić jedną grupę naraz: zaznacz ją, a potem użyj {{ui:Pokaż problemy}} i {{ui:Napraw}} w {{ui:Informacje o obiekcie}}. Zobacz [Narzędzia brył](topic:solids).

## Część wypełniona

{{ui:Drąż}} w **Narzędziach druku** drąży część do podanej grubości ścianek, z otworami odpływowymi tam, gdzie klikniesz. Zobacz [Drążenie](topic:print-tools#hollow).

Możesz też narysować wnętrze sam: zamkniętą grupę wewnątrz części, niedotykającą jej, z odwróconymi wszystkimi ścianami, tak aby wskazywały do wnętrza. Sprawdzanie liczy ją jako drążenie i odejmuje jej objętość; nie jest wymieniona jako coś do naprawy.

## Stół drukarki

Wybierz rozmiar stołu drukarki w {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Stół drukarki 3D}}. Sprawdzanie ostrzega wtedy, gdy model jest większy od stołu, obrócony w dowolną stronę. Zobacz [Ustawienia](topic:settings#3d-printer-bed).

## Narzędzia druku

Pod wynikami okna otwierają się **Narzędzia druku**: {{ui:Podgląd podpór}} (gdzie są podpory i ile ich mniej więcej), {{ui:Grubość ścianek}} (ścianki zbyt cienkie do wydrukowania), {{ui:Drąż}} i {{ui:Napraw}}. Zobacz [Podpory, grubość ścianek, drążenie i naprawa](topic:print-tools). {{ui:Podziel do druku}} tnie model za duży na stół na części z łącznikami i ponumerowanymi złączami: zobacz [Podział dużego modelu do druku](topic:print-split).

## Czego nie sprawdza się

Sprawdzanie nie tworzy warstw: drobne detale, których dysza nie wydrukuje, i prawdziwe podpory należą do slicera. Zobacz [Jeszcze nie zbudowano](topic:not-built-yet#3d-printing).
