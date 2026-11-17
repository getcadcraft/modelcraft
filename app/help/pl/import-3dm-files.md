---
title: Import modelu .3dm
summary: Zaimportuj plik .3dm wraz z jego siatkami, powierzchniami, krzywymi, blokami, warstwami i kolorami; skąd biorą się trójkąty i co zostaje pominięte.
keywords: 3dm, import, nurbs, polipowierzchnia, brep, powierzchnie, siatka renderowania, wyciągnięcie, krzywe, bloki, warstwy, etykiety, kolory, jednostki, przełączanie, migracja
from: 3cf29879
---

ModelCraft odczytuje pliki `.3dm` własnym czytnikiem, na stronie. Nic nie jest wysyłane, a działa offline zawsze, gdy działa ModelCraft. Testowano pliki zapisane w układach wersji 5, 6, 7 i 8; starsze (wersje od 2 do 4) powinny się otworzyć, ale nie były jeszcze sprawdzane.

## Zaimportuj plik

1. Kliknij {{ui:Importuj}} w grupie {{ui:Plik}} (albo upuść plik `.3dm` na widok 3D).
2. Wskaż plik.

   Pasek stanu pokazuje „Odczytywanie chair.3dm…”, a potem, co weszło, na przykład „Zaimportowano chair.3dm: 14 siatek (8330 ścian), 8 krzywych, 5 umieszczeń bloków, 3 warstwy jako etykiety. Powierzchnie: 7 ścian z siatek zapisanych w pliku, 29 wygenerowanych przez CadCraft.”

Cały model trafia jako jedna grupa nazwana od pliku, zaznaczona, a widok przybliża się do niej. Jedno {{key:Mod+Z}} usuwa wszystko, łącznie z etykietami.

## Skąd biorą się trójkąty

ModelCraft modeluje ściany i siatki, więc każda powierzchnia w pliku wchodzi jako [siatka](topic:meshes) małych płaskich trójkątów. Dla każdej ściany polipowierzchni (i każdego wyciągnięcia) ModelCraft bierze, w tej kolejności:

1. **Siatkę renderowania zapisaną w pliku.** Większość programów do modelowania zapisuje siatkę, którą pokazały na ekranie, razem z każdą powierzchnią; gdy ona jest, ModelCraft używa jej bez zmian.
2. **Własną tesselację**, gdy plik nie ma zapisanej siatki: płaszczyzny, powierzchnie NURBS, powierzchnie obrotowe (kule, stożki, torusy, bryły toczone), wyciągnięte krzywe i wyciągnięcia (z ich otworami i zakończeniami), przycięte przez swoje krawędzie. Ściany jednej polipowierzchni współdzielą punkty krawędzi, więc zamknięta polipowierzchnia wchodzi jako zamknięta siatka. Zakrzywione obszary są dzielone, aż trójkąty leżą w granicy około 0.15 % rozmiaru obiektu od prawdziwej powierzchni.
3. **Nic**, dla ściany na rodzaju powierzchni, którego ModelCraft jeszcze nie czyta. Pasek stanu mówi, ile ścian i jakiego są rodzaju.

Część „Powierzchnie:” na pasku stanu mówi, ile ścian pochodzi z zapisanych siatek, a ile zostało utworzonych przez ModelCraft. Krawędzie wewnątrz jednej ściany pliku są miękkie, a krawędzie między dwiema ścianami ostre, więc zakrzywiona ściana cieniuje się gładko.

:::tip
Dla najwierniejszych kształtów zapisz plik z siatkami renderowania w programie, który go utworzył (zwykle to ustawienie domyślne; opcja „zapisz mały plik” je pomija).
:::

## Co wchodzi

- **Siatki** z ich kolorami wierzchołków i współrzędnymi tekstur.
- **Polipowierzchnie, powierzchnie i wyciągnięcia**, jak opisano wyżej.
- **Krzywe** (linie, polilinie, łuki, okręgi, krzywe NURBS i krzywe z nich złożone) jako [krawędzie](topic:curves), jedna grupa krawędzi na warstwę.
- **Bloki** stają się [komponentami](topic:groups-components): każde umieszczenie bloku jest umieszczeniem jednego komponentu, więc edycja jednej kopii zmienia wszystkie. Bloki w blokach są zachowywane.
- **Warstwy** stają się [etykietami](topic:tags) z pełną nazwą warstwy („Furniture::Chairs”), ukrytymi, gdy warstwa była wyłączona. Umieszczenie każdego obiektu niesie etykietę jego warstwy.
- **Kolory.** Kolor obiektu pochodzi z miejsca, które wskazuje plik: jego własny kolor, kolor jego warstwy albo kolor bazowy materiału. Staje się malowaniem jego ścian.
- **Ukryte obiekty wchodzą ukryte**; {{ui:Pokaż wszystko}} je pokazuje.
- **Jednostki:** plik podaje swoją jednostkę; model wchodzi w swoim prawdziwym rozmiarze.

## Co zostaje pominięte (i zgłoszone)

Część „Uwagi:” na pasku stanu wymienia wszystko, co nie weszło, wraz z liczbą:

- punkty i chmury punktów, tekst, kropki tekstowe, wymiary, odnośniki, kreskowania, światła, płaszczyzny cięcia i szczegóły układu;
- obiekty SubD: zamień je w siatki lub polipowierzchnie w programie, który utworzył plik, zanim zaimportujesz;
- ściany na powierzchniach przesuniętych i innych rodzajach powierzchni, których ModelCraft jeszcze nie czyta, gdy plik nie zapisał dla nich siatki;
- bloki połączone z innych plików (czytany jest tylko plik, który importujesz);
- wyciągnięcia ze ściętymi na skos zakończeniami wchodzą z prostymi zakończeniami.

Tekstury materiałów, ustawienia renderowania, nazwane widoki, grupy i tekst użytkownika nie są odczytywane; materiał daje tylko kolor bazowy.

## Limity

Pliki do 300 MB. Uszkodzony plik mówi, co jest nie tak, i nic nie dodaje; obiekt, którego nie da się odczytać, zostaje pominięty i policzony, a reszta wchodzi.
