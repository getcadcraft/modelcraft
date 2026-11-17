---
title: Podpory, grubość ścianek, drążenie i naprawa
summary: Zobacz, gdzie wydruk potrzebuje podpór i mniej więcej ile, znajdź ścianki zbyt cienkie do wydruku, wydrąż część do określonej grubości ścianki z otworami odpływowymi i napraw siatkę z listą wszystkich poprawek.
keywords: druk 3D, podpory, podgląd podpór, nawis, podpory drzewiaste, podpory kolumnowe, grubość ścianki, cienkie ścianki, zbyt cienkie, dysza, drążenie, powłoka, otwór odpływowy, żywica, naprawa, napraw siatkę, niemanifoldowa, odwrócone ściany, dziury, małe powłoki, samoprzecięcie, nakładanie, połącz
from: 286bde26
---

Cztery narzędzia do przygotowania modelu do drukarki 3D. Otwórz {{ui:Eksport}} › {{ui:Sprawdź do druku 3D (STL lub 3MF)…}}; w wierszu okna dialogowego **Narzędzia do druku** znajdują się {{ui:Podgląd podpór}}, {{ui:Grubość ścianek}}, {{ui:Drąż}} i {{ui:Napraw}}. Każde otwiera się jako karta nad widokiem; {{ui:Zamknij}} (krzyżyk) zamyka ją wraz z jej znacznikami. Jednocześnie widoczna jest jedna karta.

Każde narzędzie działa na tym, co się drukuje: na zaznaczeniu albo na wszystkim widocznym, gdy nic nie jest zaznaczone. {{ui:Drąż}} i {{ui:Napraw}} wymagają zaznaczenia jednej grupy, komponentu lub siatki, bo je zmieniają.

## Podgląd podpór

Powierzchnie, które wychylają się bardziej niż o **kąt nawisu** od pionu, są zacieniowane na czerwono, a z nich w dół, do stołu lub do części modelu pod nimi, rysowane są proste podpory (na pomarańczowo).

- **Kąt nawisu**: 45° to wartość, jaką większość drukarek osiąga bez podpór. Zwiększ ją dla drukarki, która dobrze mostkuje.
- **Kolumny**: prosta kolumna co 3 mm pod każdym nawisem. Szacunek liczy je jako wzór podpór 15%.
- **Drzewo**: bliskie punkty łączą się w jeden pień pod ich środkiem; żadna gałąź nie pochyla się bardziej niż o 45°. Drzewa zwykle zużywają mniej materiału i dotykają stołu w mniejszej liczbie miejsc.

Karta mówi, jak duża powierzchnia wymaga podpór, ile jest punktów podpór i mniej więcej ile zużywają materiału. Podpory stojące na modelu (a nie na stole) są liczone: zostawiają na nim ślady. Gdy stół drukarki jest wybrany w {{ui:Ustawienia}}, stół jest rysowany pod modelem.

:::note
To jest podgląd, a nie slicer: slicer decyduje o prawdziwych podporach. Przy bardzo dużym nawisie punkty podpór są rozłożone szerzej, aby podgląd pozostał szybki; karta o tym informuje.
:::

## Grubość ścianki

Każda powierzchnia jest mierzona na wylot przez bryłę, do drugiej strony. Ścianki poniżej **najcieńszej dopuszczalnej ścianki** są czerwone, a ścianki poniżej półtorej jej wartości są pomarańczowe: wydrukują się, ale mogą być słabe.

Cienkie obszary są wymienione, od najcieńszego, z podaniem grubości i wielkości każdego. {{ui:Pokaż}} kieruje kamerę na nie.

Drukarka nie zrobi ścianki cieńszej niż około dwie szerokości jej dyszy: 0,8 mm dla popularnej dyszy 0,4 mm (wartość startowa). Drukarki żywiczne radzą sobie z mniejszą; sprawdź instrukcję drukarki.

Na bardzo dużym modelu tylko niektóre powierzchnie wysyłają promień, a pozostałe przyjmują grubość swoich sąsiadów; karta podaje, ile zmierzono.

## Drążenie

Drążenie zachowuje zewnętrze bez zmian i usuwa wnętrze, pozostawiając ścianki o grubości, jaką podasz. Wydruki żywicą zużywają mniej żywicy i mniej ciągną za platformę; wydruki z filamentu zużywają mniej plastiku niż wypełnienie.

1. Zaznacz grupę, komponent lub siatkę, a następnie otwórz {{ui:Drąż}}.
2. Ustaw **ściankę** (na start 2 mm) i szerokość **otworów odpływowych**.
3. Dla wydruku żywicą kliknij {{ui:Umieść otwór odpływowy}}, a następnie kliknij zewnętrze modelu, gdzie ma być: nisko, blisko platformy, aby ciekła żywica mogła wypłynąć. Umieść tyle, ile potrzebujesz; każdy pokazuje się jako niebieskie kółko i jest wymieniony z {{ui:Usuń}}.
4. {{ui:Podgląd}} mówi, ile materiału usuwa drążenie.
5. {{ui:Wydrąż}} wykonuje zmianę jednym krokiem, który cofa {{key:Mod+Z}}.

Wynikiem jest jedna zamknięta bryła, którą sprawdzenie druku 3D akceptuje: ModelCraft sprawdza ją najpierw i nic nie zmienia, jeśli by nie przeszła. Tam, gdzie model jest cieńszy niż dwie ścianki, pozostaje pełny. Wynik jest grupą, której płaskie boki są pojedynczymi powierzchniami, więc możesz dalej modelować ją za pomocą {{ui:Wypychanie/ciągnięcie}}; zakrzywiona część wydrążona na drobnej siatce zwykle ma za dużo powierzchni na to i staje się siatką, a wiersz stanu mówi, która.

:::tip
Dla większości kształtów wnętrze to zewnętrze przesunięte do środka dokładnie o ściankę. Tam, gdzie narożniki lub cienkie części to uniemożliwiają, ModelCraft zamiast tego podąża za zewnętrzem w odległości ścianki na drobnej siatce; karta podaje wtedy, jak blisko (z dokładnością do ułamka milimetra).
:::

## Naprawa

{{ui:Napraw}} sprawdza zaznaczoną część tak, jak zrobi to slicer drukarki, naprawia bezpiecznie to, co można naprawić, i wypisuje każdą poprawkę:

| Naprawia | Co to znaczy |
|---|---|
| Trójkąty bez pola | usunięte |
| Trójkąt narysowany dwa razy | zostaje jedna kopia; powierzchnia narysowana przylegająca do siebie tyłem (bez grubości) jest usuwana |
| Luźne kawałki poniżej 0,5 mm | usunięte |
| Trójkąty zwrócone w złą stronę | obrócone, by pasowały do sąsiadów |
| Dziury, płaskie lub nie | zamknięte wachlarzem nowych trójkątów od środka każdej dziury |
| Część wywrócona na lewą stronę | obrócona na zewnątrz (wydrążone wnętrze w innej części zostaje tak, jak jest: ma być zwrócone do środka) |

{{ui:Napraw bezpieczne}} wykonuje je wszystkie jednym krokiem, który cofa {{key:Mod+Z}}, a wiersz stanu wymienia każdą poprawkę. Naprawiona część staje się grupą, której płaskie boki są pojedynczymi powierzchniami. Jeśli nadal się nie zamyka (zostaje coś w sekcji **Zostawione dla Ciebie**) albo miałaby za dużo powierzchni na grupę, staje się siatką: jej powierzchnie pozostają trójkątami, a płaskie boki nadal wyglądają na płaskie. Wiersz stanu mówi, która. {{ui:Połącz nakładające się części}} działa tak samo.

To, czego nie da się naprawić bezpiecznie, jest wymienione w sekcji **Zostawione dla Ciebie** i zaznaczone na fioletowo w widoku, z {{ui:Pokaż}}:

- **Krawędzie, w których spotyka się trzy lub więcej powierzchni**: zdecyduj, która powierzchnia należy, i usuń pozostałe.
- **Część przechodząca przez samą siebie**: przesuń lub przerysuj tę część. Zobacz [Przecięcie powierzchni](topic:intersect).
- **Dziury za duże lub zbyt splątane, by je zamknąć**: narysuj powierzchnie przez nie.
- **Oddzielne części, które się nakładają**: slicery i tak je scalą. {{ui:Połącz nakładające się części}} tworzy z nich jedno zamknięte ciało (przebudowuje powierzchnie tam, gdzie się stykają, więc to osobny przycisk, który nigdy nie działa za Ciebie).

Dla grup z wypychania/ciągnięcia możesz też naprawiać je pojedynczo w {{ui:Informacje o obiekcie}} › {{ui:Pokaż problemy}} / {{ui:Napraw}}, co zachowuje powierzchnie, które narysowałeś. Zobacz [Narzędzia bryłowe](topic:solids).

Powiązane: [Przygotuj model do druku 3D](topic:print-3d) · [Styl dla początkujących](topic:beginner) · [Jeszcze nie zbudowano](topic:not-built-yet#3d-printing)
