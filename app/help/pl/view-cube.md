---
title: Kostka widoku
summary: Kliknij ścianę, krawędź lub narożnik kostki w rogu widoku, aby patrzeć stamtąd, przeciągnij ją, by obracać widok, obróć pierścień kompasu, przejdź wokół widoku z przodu i wróć do widoku domowego.
keywords: kostka widoku, viewcube, kostka, kompas, północ, widok domowy, widoki standardowe, góra, przód, prawa, izo, narożnik, krawędź, orbita, obrót widoku, ikona osi, wskaźnik narożnika, nawigacja
from: e1ec1347
---

Kostka widoku znajduje się w prawym górnym rogu widoku 3D. Obraca się razem z widokiem, więc zawsze pokazuje, w którą stronę patrzysz: {{ui:Góra}} jest u góry, {{ui:Przód}} jest zwrócony na południe (patrzysz na północ, wzdłuż zielonej osi, gdy na nią spojrzysz), {{ui:Prawa}} jest zwrócona na wschód (czerwona oś). Pozostaje półprzezroczysta, dopóki na nią nie wskażesz.

## Patrz z boku, krawędzi lub narożnika

1. Wskaż kostkę. Część pod wskaźnikiem się podświetla: środek ściany, krawędź (podświetla się na obu ścianach, które ją łączą) albo narożnik (na wszystkich trzech ścianach).
2. Kliknij ją. Widok obraca się, by patrzeć stamtąd, zachowując ten sam środek i powiększenie.

Jest 26 miejsc do kliknięcia: 6 ścian ({{ui:Góra}}, {{ui:Dół}}, {{ui:Przód}}, {{ui:Tył}}, {{ui:Lewa}}, {{ui:Prawa}}), 12 krawędzi i 8 narożników. Narożnik daje klasyczny widok w trzech czwartych; krawędź wygląda na pół drogi między dwiema ścianami.

Kliknięcie {{ui:Przód}} daje to samo co {{ui:Widoki}}, {{ui:Przód}} na pasku narzędzi, bez dopasowania powiększenia. {{ui:Widoki}} nadal dopasowuje powiększenie do całego modelu.

## Orbituj, przeciągając kostkę

Przeciągnij kostkę, by obrócić widok, tak samo jak orbitowanie w samym widoku. Przeciągnięcie nigdy nie jest traktowane jako kliknięcie, więc możesz chwycić kostkę w dowolnym miejscu.

## Pierścień kompasu

Pierścień pod kostką nosi litery N, E, S i W.

- **Przeciągnij pierścień**, by obrócić model wokół pionowej osi, jak na obrotnicy. Pierścień podąża za wskaźnikiem.
- **Kliknij literę**, by patrzeć z tej strony, zachowując, jak stromo patrzysz w dół. W widoku dokładnie z góry litera, którą klikniesz, trafia na dół ekranu.

## Widoki czołowe: strzałki

Gdy patrzysz prosto na ścianę, wokół kostki pojawiają się małe strzałki:

- Cztery **trójkąty** przenoszą ścianę z tej strony na przód: trójkąt nad kostką pokazuje ścianę, która była na górze, i tak dalej.
- Dwie **zakrzywione strzałki** w prawym górnym rogu obracają obraz o ćwiartkę obrotu zgodnie lub przeciwnie do ruchu wskazówek zegara, bez zmiany ściany, na którą patrzysz. Użyj ich, by obrócić rzut tak, aby długa ściana biegła w poprzek ekranu.

## Dom

Przycisk domu w lewym górnym rogu kostki wraca do widoku izometrycznego w trzech czwartych ({{ui:Izo}}) i dopasowuje cały model. {{key:Home}} robi to samo, gdy kostka ma fokus klawiatury.

## Klawiatura

{{key:Tab}} do kostki, a potem:

| Klawisz | Robi |
|---|---|
| {{key:left}} / {{key:right}} | wybiera stronę, krawędź lub narożnik dookoła kostki, krokami po ósmej obrotu (czytniki ekranu mówią, który) |
| {{key:up}} / {{key:down}} | wybiera wyższy lub niższy, aż do {{ui:Góra}} albo w dół do {{ui:Dół}} |
| {{key:Enter}} albo {{key:Space}} | patrz z wybranego |
| {{key:Shift+left}} / {{key:Shift+right}} | obraca widok o ćwiartkę obrotu wokół pionowej osi |
| {{key:Home}} | widok domowy |
| {{key:Esc}} | opuszcza kostkę |

Klawisze naciśnięte na kostce zostają przy kostce: nie uruchamiają narzędzi ModelCraft.

## Wskaźnik osi zamiast tego albo nic

Otwórz {{ui:Ustawienia}} ({{key:Mod+,}}), kartę {{ui:ModelCraft}} i ustaw **Wskaźnik narożnika** na {{ui:Kostka widoku}} (domyślnie), {{ui:Ikona osi}} (mały znacznik X, Y, Z w lewym dolnym rogu: X czerwony, Y zielony, Z niebieski) albo {{ui:Brak}}. Ta przeglądarka zapamiętuje wybór. Zob. [Ustawienia ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft nie ma obrotu wokół osi widoku: poza widokami dokładnie z góry i dokładnie z dołu góra na ekranie jest zawsze górą modelu. Kostka i zakrzywione strzałki mogą obrócić rzut z góry; nie mogą przechylić widoku z boku na krawędź.
:::
