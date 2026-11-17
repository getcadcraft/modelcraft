---
title: Zapisywanie widoków jako scen
summary: Zapisz kamerę i styl jako scenę, aktualizuj i zmieniaj jej nazwę oraz przechodź po scenach lub je odtwarzaj, aby zaprezentować projekt.
keywords: scena, widok, zapisany widok, kamera, prezentacja, animacja, odtwarzanie, pokaz slajdów, page up, page down, karty, przejście po scenach
from: 38680d6e
---

**Scena** zapamiętuje pozycję kamery, styl i to, co jest ukryte: skąd patrzymy, perspektywę lub rzut równoległy, styl ścian, krawędzie, ustawienia słońca, ukryte grupy, wyłączone etykiety i cięcie przekroju. Sceny są zapisywane w pliku `.modelcraft`.

## Dodawanie sceny

1. Ustaw widok: obróć, przybliż, wybierz styl, ustaw słońce.
2. W panelu {{ui:Sceny}} po prawej naciśnij {{ui:Dodaj scenę}}.

   Scena pojawia się na liście, nazwana „Scena 1”, „Scena 2” i tak dalej, oraz jako karta u góry widoku 3D. Pasek stanu mówi: „Scena 1 zapisana: ta kamera, styl i to, co jest ukryte.”

## Przechodzenie do sceny

- Kliknij jej kartę nad widokiem 3D albo jej nazwę na liście {{ui:Sceny}}.
- Albo naciśnij {{key:PageDown}}, aby przejść do następnej sceny, i {{key:PageUp}}, aby wrócić do poprzedniej. {{ui:Następna}} i {{ui:Poprzednia}} pod listą robią to samo.

Kamera płynnie przesuwa się do sceny w nieco ponad pół sekundy. Jeśli w systemie ustawiono ograniczenie ruchu, kamera przeskakuje od razu.

## Zmiana, zmiana nazwy lub usuwanie sceny

Każda scena na liście ma trzy małe przyciski za swoją nazwą:

- **Aktualizuj** (okrągłe strzałki): zapisuje bieżącą kamerę, styl i to, co jest ukryte, w tej scenie. „Scena 2 zaktualizowana.”
- **Zmień nazwę** (ołówek): otwiera okno „Zmiana nazwy sceny”. Wpisz nową nazwę i naciśnij {{ui:Zapisz}}.
- **Usuń** (kosz): usuwa scenę. „Scena 2 usunięta. Ctrl+Z ją przywraca.”

Dodawanie, aktualizowanie, zmiana nazwy i usuwanie scen to kroki cofnięcia, tak jak zmiany modelu.

## Blokowanie kamery sceny

Gdy ten sam widok renderuje się wielokrotnie w miarę zmian projektu, zablokuj kamerę tej sceny, aby widok nigdy nie przesunął się przypadkiem.

1. Na liście {{ui:Sceny}} naciśnij przycisk **blokady** (otwarta kłódka) za nazwą sceny. Zamyka się, a karta sceny nad widokiem 3D pokazuje małą kłódkę. Pasek stanu mówi: „Scena 2: kamera zablokowana.”
2. Przejdź do sceny, gdy chcesz renderować: kamera wraca dokładnie do zapisanego widoku, więc obrazy z niego pasują do wcześniejszych.

Gdy kamera jest zablokowana, **Aktualizuj** nadal zapisuje styl i to, co jest ukryte, w scenie, ale kamera zostaje tam, gdzie była, nawet jeśli widok obrócono. Naciśnij kłódkę ponownie, aby odblokować; wtedy Aktualizuj znów zapisuje bieżący widok. Blokowanie i odblokowywanie to kroki cofnięcia, a blokada jest zapisywana w pliku `.modelcraft`.

## Prezentacja

1. Dodaj dwie lub więcej scen.
2. Naciśnij {{ui:Odtwórz}} pod listą. ModelCraft przechodzi do następnej sceny co kilka sekund i wraca do pierwszej po ostatniej.
3. Naciśnij {{ui:Zatrzymaj}} (ten sam przycisk) albo {{key:Esc}}, aby zatrzymać.

Do studium słońca dodaj po jednej scenie na godzinę, zmieniając tylko {{ui:Godzina}}, a potem je odtwórz. Zobacz [Style i cienie słońca](topic:styles-shadows#a-sun-study).

Aby prezentować bez pasków, naciśnij dwukrotnie {{key:Ctrl+Shift+F}}: najpierw pełny ekran, potem pełny ekran z ukrytymi paskami. Karty scen pozostają nad widokiem.

## Co pokazuje scena

Scena zapamiętuje, co było ukryte w chwili zapisu: grupy i komponenty, które [ukryto](topic:hide-isolate), [etykiety](topic:tags), które wyłączono, oraz [płaszczyzny przekroju](topic:sections), które tną model. Przejście do sceny ponownie ukrywa i pokazuje je. Dzięki temu jedna scena może pokazywać cały dom, następna dom z wyłączoną etykietą dachu, a kolejna przekrój przez niego.

Ukryte luźne ściany i krawędzie nie należą do scen. Przejście do sceny nie tworzy kroku cofnięcia. Sceny zapisane wcześniejszą wersją ModelCraft zostawiają to, co jest ukryte, bez zmian; naciśnij **Aktualizuj**, aby zapisać to w nich.

## Eksport animacji

{{ui:Eksportuj animację}}, pod listą, odtwarza sceny od pierwszej do ostatniej, płynnie przesuwając kamerę między nimi, i zapisuje film jako wideo **WebM** (dwie sekundy ruchu i krótka pauza na scenę). Nagrywa widok taki, jaki widać, w jego rozmiarze na ekranie, w [widoku prezentacji](topic:styles-shadows#presentation-view) (bez osi, prowadnic i zaznaczenia). Naciśnij {{key:Esc}} albo ponownie przycisk, aby zatrzymać bez zapisu. WebM działa w przeglądarkach i VLC, a edytory wideo mogą go przekonwertować.

Do renderowanego przejścia (niebo, słońce, cienie, materiały) w wybranym rozmiarze użyj {{ui:Renderuj wideo…}}: bez kluczy animacji bierze sceny w kolejności jako ścieżkę kamery. Zobacz [Animacja kamery i obiektów](topic:animation).

## Warto wiedzieć

- Zmiana stylu lub przesunięcie kamery po przejściu do sceny nie zmienia sceny, dopóki nie zostanie naciśnięty przycisk Aktualizuj.
- Sceny nie są eksportowane do formatów Collada, OBJ, glTF, STL ani IFC.
