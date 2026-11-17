---
title: Menu, klawisze i mysz
summary: Wybierz styl menu pasujący do modelera, który już znasz, nadaj dowolnemu poleceniu własny klawisz, przenoś polecenia między menu oraz ustaw, co robią kółko myszy oraz środkowy i prawy przycisk.
keywords: styl menu, menu, pasek menu, pasek narzędzi, skróty klawiszowe, klawisze skrótów, klawisze, styl klawiszy, mapa klawiszy, dostosuj, przypisz ponownie, mysz, kółko, odwróć, kierunek powiększania, środkowy przycisk, prawy przycisk, orbita, przesuwanie, eksport, import, przełączanie, znany, push-pull, modeler
from: e56fce3d
---

Narzędzia ModelCraft są takie same, niezależnie od tego, jak się do nich dotrze. **Styl menu** decyduje, gdzie znajdują się na ekranie, jak są nazwane i którymi klawiszami się je uruchamia. Wybierz go w {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menu, klawisze i mysz}}; zmiana działa od razu, a ta przeglądarka ją zapamiętuje.

## Style

| Styl | Co dostajesz |
|---|---|
| {{ui:ModelCraft}} | Własny pasek narzędzi ModelCraft (Plik, Rysuj, Modyfikuj, Organizuj, Edycja, Kamera) i jego klawisze jednoliterowe: {{key:L}} linia, {{key:R}} prostokąt, {{key:P}} push/pull, {{key:M}} przesuń, {{key:Q}} obróć, {{key:S}} skaluj, {{key:E}} gumka, {{key:O}} orbita. Styl startowy. |
| {{ui:Push-pull}} | Pasek menu (Plik, Edycja, Widok, Kamera, Rysuj, Narzędzia, Okno) nad rzędem głównych narzędzi, z tymi samymi klawiszami jednoliterowymi. |
| {{ui:Modeler}} | Nagłówek z paskiem menu (Plik, Edycja, Widok, Zaznacz, Dodaj, Obiekt, Siatka) i klawisze modelerów siatek: {{key:W}} zaznacz, {{key:G}} chwyć, {{key:R}} obróć i {{key:S}} skaluj zaznaczenie naraz ({{key:X}}, {{key:Y}} lub {{key:Z}} blokuje oś podczas ruchu), {{key:E}} push/pull, {{key:B}} prostokąt, {{key:X}} usuń, {{key:A}} zaznacz wszystko, {{key:Alt+A}} brak, {{key:Shift+D}} duplikuj, {{key:Mod+G}} grupuj, {{key:H}} ukryj. Środkowy przycisk obraca widok (orbita); {{key:Shift}} i środkowy przycisk przesuwają, {{key:Mod}} i środkowy przycisk powiększają; prawy przycisk anuluje to, co robi narzędzie. |
| {{ui:Beginner}} | Wstążka, której karta {{ui:Twórz}} zawiera kilka dużych przycisków: kształty do wstawienia, otwory, przesuń, obróć i zmień rozmiar, wyrównaj, {{ui:Grupa}} (otwory wycinane w kształtach) oraz sprawdzenie pod druk 3D; każde inne narzędzie znajduje się na karcie {{ui:Więcej narzędzi}}. Prawy przycisk obraca, środkowy przesuwa. Zobacz [Styl Początkujący](topic:beginner). |

Styl klawiszy, znany z {{ui:Klawisze}} w prawym dolnym rogu widoku i z {{ui:Edycja}} › {{ui:Więcej}}, to ten sam wybór: wybranie tam klawiszy modelera wybiera styl {{ui:Modeler}}, a wybranie klawiszy push-pull przełącza na styl {{ui:ModelCraft}}. Jeśli w starszej wersji wybrano klawisze modelera, ModelCraft otworzy się raz sam w stylu {{ui:Modeler}}.

:::tip
Klawisz należący do klawiszy push-pull, który w używanym stylu ma przypisane inne polecenie, nic nie robi, a pasek stanu podaje, dokąd trafiło jego polecenie („W Modeler, Push/pull to E”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strzałki zawsze zachowują swoje znaczenie, cyfry zawsze trafiają do pola wartości, a gdy narzędzie coś przesuwa, jego własne klawisze mają pierwszeństwo.
:::

## Dostosowanie do siebie

1. Wybierz styl najbliższy temu, czego potrzebujesz, a potem kliknij {{ui:Dostosuj…}}.
2. Na karcie {{ui:Klawisze i menu}} znajdź polecenie (pomaga pole wyszukiwania). Kliknij {{ui:Dodaj klawisz}} i naciśnij klawisz. Kliknij klawisz, aby go usunąć.
3. Przy pasku menu {{ui:Gdzie jest}} przenosi polecenie do innego menu albo do {{ui:Tylko klawisze}}.
4. Na karcie {{ui:Mysz}} ustaw kółko i to, co robią przyciski w widoku 3D.
5. Nadaj nazwę i kliknij {{ui:Zapisz}}.

Zapisanie wbudowanego stylu tworzy kopię z własną nazwą („Mój Modeler”); wbudowany styl się nie zmienia. Kopia odczytuje klawisze tak samo jak styl, z którego powstała: kopia z {{ui:Modeler}} utrzymuje działanie klawiszy chwytania, obracania i skalowania naraz.

## Mysz

- **Kółko myszy**: {{ui:Przewinięcie w górę powiększa}} (ustawienie domyślne) albo {{ui:Przewinięcie w górę pomniejsza}}, oraz jak szybko. Szczypnięcie na gładziku zawsze powiększa zgodnie z ruchem palców.
- **Przeciąganie w widoku 3D**: {{ui:Własne dla każdego widoku}} zachowuje przyciski ModelCraft (środkowy przycisk obraca, prawy lub {{key:Shift}} z środkowym przesuwa). Można też ustawić środkowy i prawy przycisk na orbitę, przesuwanie, powiększanie lub nic; {{key:Shift}} z przyciskiem zamienia orbitę z przesuwaniem. Lewy przycisk zawsze należy do używanego narzędzia.
- **Gładziki**: {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Przewijanie}} nadal decyduje, czy dwa palce obracają (gładzik), czy powiększają (mysz). Zobacz [Orbita, przesuwanie i powiększanie](topic:orbit-pan-zoom).

## Zabierz ze sobą

{{ui:Eksport}} zapisuje używany styl jako mały plik `.ccinput.json`; {{ui:Importuj…}} dodaje taki plik z innego komputera lub od kolegi. Zaimportowany plik może wskazywać tylko polecenia własne ModelCraft: wszystko inne jest pomijane i liczone w pasku stanu. {{ui:Usuń ten styl}} usuwa jeden z własnych stylów.

:::note
Te ustawienia zostają w tej przeglądarce. {{ui:Używaj tego stylu we wszystkich aplikacjach}} pod kartami stylów sprawia, że każda aplikacja otwiera się w pasującym stylu: {{ui:Push-pull}} idzie z paskami menu w pozostałych aplikacjach. {{ui:Modeler}} nie ma odpowiednika w innych aplikacjach, więc pozostaje wyborem ModelCraft.
:::

Pokrewne: [Klawisze i akcje myszy](topic:keyboard) · [Ustawienia ModelCraft](topic:settings) · [Przechodzenie z innych modelerów](topic:coming-from)
