---
title: Animuj kamerę i obiekty oraz renderuj wideo
summary: Ustawiaj klucze dla kamery oraz dla grup i komponentów na osi czasu, odtwarzaj je w widoku i renderuj animację do wideo WebM z niebem, słońcem i materiałami renderera.
keywords: animacja, animuj, oś czasu, klatka kluczowa, klucze, klucz klatki, ścieżka kamery, przelot, przelot kamerą, spacer, wideo, film, webm, renderuj wideo, klatki, liczba klatek, fps, wskaźnik odtwarzania, auto klucz, wygładzanie, płynnie, wstrzymaj, sceny, sekwencja png, ruch
from: d3a58249
---

**Oś czasu** przesuwa kamerę oraz każdą grupę lub komponent w czasie. Ustawiasz **klucze** (gdzie coś jest w danej chwili), a ModelCraft płynnie przesuwa to od klucza do klucza. Odtwórz to w widoku, a potem wyrenderuj do wideo z takim samym niebem, słońcem, materiałami i lampami jak [wyrenderowany obraz](topic:render).

## Otwórz oś czasu

Kliknij {{ui:Widoki}} w grupie {{ui:Kamera}}, potem {{ui:Oś czasu animacji}}. Oś czasu otwiera się pod widokiem: sterowanie u góry, potem wiersz **Kamera** i wiersz dla każdej grupy lub komponentu, który się rusza. Romby to klucze; czerwona linia to **wskaźnik odtwarzania**, czyli moment pokazany w widoku.

:::touch
Na telefonie oś czasu też otwiera się pod widokiem. Jej sterowanie to jeden wiersz: przesuń je w bok, by dotrzeć do reszty; przycisk zamykający oś czasu zostaje na jej końcu.
:::

Przeciągnij suwak (lub kliknij w wiersz), by przesunąć wskaźnik odtwarzania. {{ui:Odtwórz}} odtwarza od wskaźnika i zmienia się w {{ui:Wstrzymaj}}, gdy gra; kliknij ponownie, by zatrzymać w miejscu. {{key:Space}} robi to samo, gdy oś czasu jest otwarta (przy zamkniętej osi Space to nadal Zaznacz). {{ui:Poprzedni klucz}} i {{ui:Następny klucz}} przeskakują między kluczami. Własny styl może przypisać odtwarzaniu i pauzie inny klawisz: {{ui:Ustawienia}}, potem menu, klawisze i mysz, polecenie *Odtwórz lub wstrzymaj animację*.

## Przesuń kamerę

1. Przesuń wskaźnik odtwarzania tam, gdzie zaczyna się ujęcie (0 s), ustaw widok i kliknij {{ui:Klucz kamery}}.
2. Przesuń wskaźnik później (np. na 4 s), obróć, przesuń lub przejdź widokiem do następnej pozycji i ponownie kliknij {{ui:Klucz kamery}}.
3. Dodaj tyle kluczy, ile chcesz, potem {{ui:Odtwórz}}.

Kamera płynnie przechodzi przez każdy klucz i zaczyna oraz kończy w spoczynku.

:::tip
Masz już [sceny](topic:scenes)? {{ui:Z scen}} tworzy z nich ścieżkę kamery: zatrzymuje się przy każdej scenie, potem przechodzi do następnej. Jeśli oś czasu nie ma żadnych kluczy, {{ui:Renderuj wideo…}} zrobi to sam, więc do wideo spaceru wystarczą dwie sceny lub więcej.
:::

## Przesuń grupę lub komponent

1. Zaznacz grupę lub komponent (ruszają się tylko całe grupy i komponenty; najpierw [utwórz grupę](topic:groups-components)).
2. Przy 0 s kliknij {{ui:Klucz zaznaczenia}}.
3. Przesuń wskaźnik później, [przesuń, obróć lub skaluj](topic:move-copy) grupę tam, gdzie ma być, i ponownie kliknij {{ui:Klucz zaznaczenia}}.

Przesuwa się, obraca i rośnie między kluczami. Obroty idą krótszą drogą.

**Auto klucz** oszczędza kliknięcie z kroku 3: gdy {{ui:Auto klucz}} jest włączone, zaznaczona grupa lub komponent, który przesuniesz, obrócisz lub przeskalujesz, dostaje klucz przy wskaźniku odtwarzania sam (a za pierwszym razem także klucz przy 0 s, tam gdzie stała).

:::note
Ruch animowanej grupy bez klucza trwa tylko do przesunięcia wskaźnika: przy następnym odtworzeniu lub przewinięciu wraca tam, gdzie postawiły ją jej klucze. Pasek stanu o tym mówi. Naciśnij {{ui:Klucz zaznaczenia}}, by to zachować.
:::

## Zmiana kluczy

- **Wybierz klucz**, klikając jego romb: wskaźnik odtwarzania przechodzi do niego.
- **Przesuń klucz**, przeciągając jego romb wzdłuż wiersza, albo klawiszami {{key:Left}} i {{key:Right}} (jedna klatka; z {{key:Shift}}, dziesięć).
- **Usuń** przez {{ui:Usuń klucz}} (wybrany klucz albo każdy klucz przy wskaźniku odtwarzania) albo {{key:Delete}} na wybranym rombie.
- **Jak przechodzi dalej**, dla wybranego klucza: {{ui:Wygładź}} (krzywa przez klucze wokół), {{ui:Równomiernie}} (prosta linia z jednakową prędkością), {{ui:Powoli na starcie i na końcu}} (zatrzymuje się przy tym kluczu) albo {{ui:Bez ruchu}} (stoi, aż do następnego klucza).
- **Długość (s)** ustala, jak długa jest animacja; klucz ustawiony za końcem ją wydłuża. Aby ją skrócić, najpierw przesuń lub usuń klucze za nowym końcem.
- **×** w wierszu grupy przestaje ją animować.

Oś czasu ma własne {{ui:Cofnij}} i {{ui:Ponów}}: cofnięcie modelu ({{key:Mod+Z}}) zmienia model, a nie klucze. Animacja zapisuje się w pliku `.modelcraft`. Zamknięcie osi czasu ustawia poruszające się grupy z powrotem w ich pierwszą pozę.

## Renderuj wideo

1. Kliknij {{ui:Renderuj wideo}} na osi czasu (lub {{ui:Eksport}} › {{ui:Renderuj wideo…}}).
2. Wybierz {{ui:Rozmiar}}, {{ui:Liczba klatek na sekundę}}, {{ui:Jakość każdej klatki}} i {{ui:Plik}}.
3. Kliknij {{ui:Renderuj wideo}}. Każda klatka pokazuje się po wykonaniu, z pozostałym czasem.
4. Gdy skończy, kliknij {{ui:Zapisz wideo}}.

{{ui:Zatrzymaj}} (lub {{key:Esc}}) kończy wcześniej; {{ui:Zapisz wideo}} wtedy zachowuje już zrobione klatki jako krótsze wideo.

Niebo, słońce, materiały, lampy i jasność są takie, jakie ustawiono w {{ui:Wyrenderuj obraz…}}: ustaw je tam najpierw, sprawdzając nieruchomy obraz. Każda klatka renderuje się na tym komputerze; nic nie jest przesyłane.

| Ustawienie | Co robi |
|---|---|
| {{ui:Rozmiar}} | 480p, 720p HD, 1080p Full HD albo własny kształt widoku (do 1920 pikseli szerokości) |
| {{ui:Liczba klatek na sekundę}} | 24, 25, 30 lub 60 klatek na sekundę. Dwa razy więcej klatek trwa dwa razy dłużej |
| {{ui:Jakość każdej klatki}} | {{ui:Szybka}} (4 przebiegi), {{ui:Szkic}} (16) lub {{ui:Dobra}} (64): więcej przebiegów daje gładsze cienie i krawędzie |
| {{ui:Plik}} | {{ui:Wideo WebM}}, {{ui:Wideo MP4 (H.264)}} tam, gdzie przeglądarka potrafi go zapisać, albo {{ui:Obrazy PNG, jeden na klatkę (ZIP)}} dla edytorów wideo (i dla przeglądarek bez kodera wideo) |

:::tip
10-sekundowe wideo przy 30 klatkach na sekundę ma 301 klatek. Najpierw wypróbuj {{ui:Szybka}} w 480p, by sprawdzić ruch, potem renderuj {{ui:Szkic}} lub {{ui:Dobra}} w większym rozmiarze.
:::

WebM odtwarza się w przeglądarkach i w VLC, a edytory wideo go konwertują. {{ui:Wideo MP4 (H.264)}} jest oferowany tam, gdzie przeglądarka potrafi go zapisać. {{ui:Renderuj wideo}} używa szybkiego renderera; by renderować każdą klatkę z pełnym śledzeniem ścieżek światła, wybierz {{ui:Dodaj tę animację do kolejki}} w tym samym oknie: klatki renderują się w [kolejce renderowania](topic:render#the-render-queue), która wymaga WebGPU.

:::firefox safari
Renderowanie wideo wymaga przeglądarki, która sama koduje wideo (WebCodecs): aktualne Chrome, Edge, Firefox i Safari 17 to potrafią. Bez tego wybierz {{ui:Obrazy PNG, jeden na klatkę (ZIP)}}.
:::

## Warto wiedzieć

- Ruszają się tylko całe grupy i komponenty. Ściany, krawędzie, czas słońca i styl na razie nie zmieniają się w czasie.
- {{ui:Eksportuj animację}} w [Scenach](topic:scenes) nadal zapisuje widok taki, jaki jest na ekranie, w czasie rzeczywistym; {{ui:Renderuj wideo}} renderuje każdą klatkę z niebem, cieniami i materiałami.
