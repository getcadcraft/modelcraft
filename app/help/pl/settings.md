---
title: Ustawienia ModelCraft
summary: Wybierz styl klawiszy, który znasz, obracaj i przesuwaj widok gładzikiem bez przycisków kamery oraz włączaj lub wyłączaj przyciąganie i kolizje brył.
keywords: ustawienia, preferencje, sterowanie, styl klawiszy, mapa klawiszy, skróty, blender, gładzik, touchpad, przewijanie, orbita, szczypnięcie, przyciąganie, kolizja, nakładanie, przenikanie
from: caf77d5b
---

Otwórz {{ui:Ustawienia}} ikoną koła zębatego na pasku aplikacji lub klawiszami {{key:Mod+,}}. Pierwsza karta, {{ui:ModelCraft}}, zawiera ustawienia należące do tej aplikacji; {{ui:Ogólne}} zawiera ustawienia wspólne dla wszystkich aplikacji CadCraft (motyw, pasek narzędzi, panele). Ustawienia ModelCraft obowiązują tylko w tej aplikacji: zmieniasz je tutaj, a ta przeglądarka je zapamiętuje.

## Sterowanie: które klawisze i przyciski myszy

Dwa style klawiszy. Przełączasz je tutaj, za pomocą {{ui:Klawisze: Wypychanie}} / {{ui:Klawisze: Modeler}} w prawym dolnym rogu widoku, albo na końcu menu {{ui:Więcej}} na pasku narzędzi:

- **Styl wypychania** (styl startowy; litery modelerów wypychania i ciągnięcia, jak SketchUp): litera wybiera narzędzie — {{key:L}} linia, {{key:R}} prostokąt, {{key:P}} wypychanie/ciągnięcie, {{key:M}} przesunięcie, {{key:Q}} obrót, {{key:S}} skalowanie, {{key:G}} utwórz komponent. Zob. [Klawisze i działania myszy](topic:keyboard).
- **Styl Modeler** (klawisze modelerów siatek, takich jak Blender): najpierw zaznacz, potem od razu działaj na zaznaczeniu. {{key:G}} przesuwa je, {{key:R}} obraca, a {{key:S}} skaluje od miejsca, na którym jest wskaźnik — bez pierwszego kliknięcia. Podczas przesuwania {{key:X}}, {{key:Y}} lub {{key:Z}} blokuje oś czerwoną, zieloną lub niebieską, wpisana liczba ustala odległość (albo kąt, albo współczynnik), a kliknięcie lub {{key:Enter}} zatwierdza ruch; {{key:Esc}} lub kliknięcie prawym przyciskiem myszy cofa go. Potem wracasz do {{ui:Zaznacz}}.

Styl klawiszy to ten sam wybór co styl menu: styl klawiszy Modeler to styl menu {{ui:Modeler}}, a wybór jednego wybiera drugi. Zob. [Menu, klawisze i mysz](topic:menus-keys-and-mouse). Pełna lista Modelera jest w [Klawisze i działania myszy](topic:keyboard#modeler-keys). Podpowiedzi na pasku narzędzi i na karcie startowej dostosowują się do wybranego stylu.

## Przewijanie: kółko myszy lub gładzik

- **Ustal automatycznie** (start): ModelCraft obserwuje przewijanie. Przewijanie w bok lub drobne, jakie wysyła gładzik, obraca widok; pełne ząbki kółka powiększają.
- **Kółko myszy**: przewijanie zawsze powiększa w stronę wskaźnika.
- **Gładzik**: przesuń dwoma palcami, aby obracać; przytrzymaj {{key:Shift}} i przesuń, aby przesuwać widok; szczypnij, aby powiększyć. Nigdy nie potrzebujesz przycisków {{ui:Orbita}}, {{ui:Przesuń widok}} ani {{ui:Powiększ}}.

Szczypnięcie powiększa w każdym wyborze. Jeśli „Ustal automatycznie” źle zgaduje dla twojej myszy lub gładzika, wybierz ten, który masz.

:::tip
W stylu Modeler możesz też obracać widok, przytrzymując {{key:Alt}} i przeciągając, a przesuwać go przez {{key:Alt+Shift}} i przeciągnięcie — wygodne na laptopie bez środkowego przycisku myszy.
:::

## Przyciąganie

**Przyciąganie do punktów, krawędzi i osi** (włączone na starcie) przyciąga wskaźnik do punktów końcowych, środków, krawędzi, prowadnic oraz osi czerwonej, zielonej i niebieskiej — zob. [Wnioskowanie](topic:inference). Wyłącz je, gdy chcesz swobodnie umieścić coś blisko innej geometrii bez przeskakiwania. Ściany, grunt i blokady osi nadal działają przy wyłączonym przyciąganiu.

Przycisk {{ui:Przyciąganie}} w prawym dolnym rogu widoku robi to samo dla pracy w tej sesji (jest też zapisywany). W stylu Modeler przełącza go {{key:Shift+Tab}}.

## Bryły zatrzymują się na styku

**Zatrzymuj bryły w miejscu styku** (włączone na starcie) nie pozwala przeciągnąć jednej ściany przez inną. Przy {{ui:Przesuń}} (oraz {{key:G}}, a także wklejeniu i przesunięciu za pomocą {{key:Mod+D}}) zaznaczenie przesuwa się aż do innej bryły i zatrzymuje się przy niej; przy {{ui:Wypychanie/ciągnięcie}} ściana zatrzymuje się tam, gdzie styka się z inną bryłą. Opieranie się o coś i ślizganie się po tym jest dozwolone — zatrzymywane jest tylko przenikanie do wnętrza. Obiekty, które nakładają się już na starcie, nadal można rozsunąć.

Aby celowo przesunąć coś przez inny obiekt, kliknij {{ui:Kolizje}} w prawym dolnym rogu (lub wyczyść to ustawienie), wykonaj przesunięcie i kliknij ponownie.

:::note
Kolizje są sprawdzane przy przesuwaniu oraz wypychaniu/ciągnięciu. {{ui:Obróć}} i {{ui:Skaluj}} ich jeszcze nie sprawdzają, a luźna geometria, która się styka, nadal się łączy, jak zawsze: trzymaj oddzielne rzeczy w [grupach](topic:groups-components), aby pozostały oddzielne.
:::

## Stół drukarki 3D

Rozmiar stołu drukarki: {{ui:Nie ustawiono}} (na starcie), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 lub 300 × 300 × 400 mm. Wybierz rozmiar najbliższy objętości roboczej drukarki. [Sprawdzanie pod druk 3D](topic:print-3d) wtedy informuje, gdy model jest większy od stołu; przy {{ui:Nie ustawiono}} rozmiar nie jest sprawdzany.

## Orbita i przesuwanie

**Orbituj wokół tego, co jest pod kursorem** (włączone na starcie): orbita obraca się wokół części modelu pod wskaźnikiem, a przesuwanie utrzymuje ten punkt pod wskaźnikiem; nad pustą przestrzenią oba używają środka widoku. Wyłącz, aby zawsze orbitować wokół środka widoku. **Prędkość orbity** i **Prędkość przesuwania** wynoszą od 0,25× do 3× (1× to start) i dotyczą myszy, gładzika, dotyku oraz klawiszy strzałek. Zob. [Orbita, przesuwanie i powiększanie](topic:orbit-pan-zoom).

## Wskaźnik w rogu

Co pojawia się w rogu widoku 3D: **Kostka widoku** (start; prawy górny róg — kliknij ścianę, krawędź lub wierzchołek, aby spojrzeć z tego miejsca, przeciągnij ją, aby obrócić widok, a jej pierścień kompasu, aby obrócić model), **Ikona osi** (mały znacznik X, Y, Z w lewym dolnym rogu, który obraca się razem z widokiem: X czerwony, Y zielony, Z niebieski) albo **Brak**. Zob. [Kostka widoku](topic:view-cube).
