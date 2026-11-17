---
title: Przejście z innych programów do modelowania
summary: Jak nawyki modelowania push/pull przekładają się na ModelCraft, klawisz po klawiszu, i różnice, które zaskakują.
keywords: przejście, migracja, znajome, różnice, modelowanie push pull, skp, skróty klawiszowe, nawyki, porównanie, pole pomiarów, outliner, informacje o obiekcie
from: 74ffd4ac
---

Jeśli modelowałeś w SketchUpie, ModelCraft będzie znajomy: ta sama idea ścian i push/pull, te same litery narzędzi, pole wartości, do którego wpisujesz bez klikania, wnioskowanie z osiami czerwoną, zieloną i niebieską, grupy, komponenty, Outliner, {{ui:Informacje o obiekcie}} i sceny. Ta strona wymienia, co przenosi się wprost, a przede wszystkim — czego nie.

## Nawyki, które się przenoszą

| Przyzwyczaiłeś się do | W ModelCraft |
|---|---|
| Naciśnij Space dla Zaznacz, L dla Linia, R dla Prostokąt, C dla Okrąg | To samo: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Naciśnij P dla Push/Pull, M dla Przesuń, Q dla Obróć, S dla Skaluj, E dla Gumki, T dla Miary taśmowej | To samo: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Naciśnij O dla Orbity, H dla Przesuń widok, Z dla Powiększenia, Shift+Z dla Zoom do zasięgu | To samo: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Naciśnij G, by utworzyć komponent | To samo: {{key:G}}. {{key:Shift+G}} tworzy grupę |
| Wpisz w pole pomiarów bez klikania go | To samo, w polu wartości na dole. Naciśnij {{key:Enter}} |
| Wpisz `4m,3m` dla prostokąta, `12s` dla boków | To samo |
| Wpisz `3x` lub `/3` po kopii przez Przesuń | To samo; `*3` też działa |
| Wpisz `[x,y,z]` lub `<dx,dy,dz>` dla punktu lub przesunięcia | To samo |
| Wpisz samą liczbę w modelu w calach architektonicznych i dostaniesz cale | To samo |
| Przeciągnij środkowym przyciskiem, by orbitować; Shift + środkowy, by przesuwać; kółko, by powiększać przy kursorze | To samo |
| Dwuklik narzędziem Push/Pull, by powtórzyć odległość | To samo |
| Klawisze strzałek, by zablokować czerwoną, zieloną, niebieską i równoległość | To samo: {{key:Right}} czerwona, {{key:Left}} zielona, {{key:Up}} niebieska, {{key:Down}} równoległość |
| Przytrzymaj Shift, by zablokować wnioskowanie | To samo |
| Ctrl (Option na Macu), by kopiować podczas przesuwania | {{key:Ctrl}}, {{key:Mod}} lub {{key:Alt}}, na każdym komputerze |
| Shift, by przełączać, Ctrl, by dodawać, Shift+Ctrl, by usuwać z zaznaczenia | Te same klawisze; na Macu użyj {{key:Mod}} tam, gdzie jest Ctrl |
| Okno od lewej do prawej, przecięcie od prawej do lewej | To samo |
| Narzędzie Wymiar do opisywania długości | {{key:D}}, i więcej: wpisz nową długość w wymiar, a model się do niej dopasuje. Zobacz [Wymiaruj i zmieniaj rozmiar](topic:dimensions) |
| Dwuklik na ścianę dla ściany plus krawędzie; potrójny klik dla wszystkich połączonych | To samo |
| Dwuklik na grupę, by ją edytować; Esc, by zamknąć | To samo |
| Narysuj linię przez ścianę, by ją podzielić; usuń krawędź między współpłaszczyznowymi ścianami, by je połączyć | To samo |
| Przeciągnij prostokąt okna przez ścianę, by ją przeciąć | To samo |
| Tylne ściany w niebiesko-szarym; Odwróć ściany | Ten sam kolor; {{ui:Odwróć ścianę}} w {{ui:Informacje o obiekcie}} |
| Sceny jako karty nad widokiem, Page Up i Page Down | To samo, z {{ui:Odtwórz}} w panelu {{ui:Sceny}} |
| Cienie z daty, godziny, szerokości i długości geograficznej, z północą na zielono | To samo, w panelu {{ui:Styl}} |

## Różnice, które zaskakują

### Zapisywanie to pobieranie

Nie ma polecenia {{ui:Zapisz}}, które nadpisuje otwarty plik, nie ma okna Zapisz jako z nazwą, nie ma autozapisu i nie ma pliku kopii zapasowej. {{ui:Zapisz}} ({{key:Mod+S}}) pobiera za każdym razem świeży plik `.modelcraft`, zwykle do folderu pobranych. Zapisuj często i zmieniaj nazwy lub przenoś pliki samodzielnie. Zobacz [Otwieranie, zapis, import i eksport](topic:files).

### Importuje pliki .skp, ale ich nie zapisuje

{{ui:Importuj}} czyta pliki SketchUp własnym czytnikiem ModelCraft, w przeglądarce: grupy, komponenty, kolory, tekstury na ścianach, tagi i miękkie krawędzie zostają przeniesione. Zobacz [Formaty plików szczegółowo](topic:formats#skp-files). ModelCraft nie może zapisać `.skp`: by wrócić, wyeksportuj Collada z ModelCraft i zaimportuj go w SketchUpie.

### Brak menu kontekstowego

Przeciągnięcie prawym przyciskiem przesuwa widok; kliknięcie prawym nic nie robi. Polecenia, których szukałbyś w menu kontekstowym, są w {{ui:Informacje o obiekcie}} ({{ui:Odwróć ścianę}}, {{ui:Edycja}}, {{ui:Rozbij}}, {{ui:Uczyń niepowtarzalnym}}, {{ui:Utworzenie komponentu}}) oraz w grupie {{ui:Porządkuj}} na pasku narzędzi.

### Jednostki są na pasku stanu

Nie ma Model Info ani wyboru szablonu. Wybór jednostek jest na dole po prawej. Nowy model zaczyna się w stopach i calach w USA, a poza nią w milimetrach, zgodnie z językiem Twojej przeglądarki. Ułamki zawsze mają kropkę: `2.5m`, nigdy `2,5m`, bo przecinek zawsze oddziela wartości.

### Malowanie ma własne materiały

{{ui:Malowanie}} ({{key:B}}) maluje jednolite kolory i materiały z sekcji {{ui:Materiały}}: cegła, okładzina, pokrycia dachowe, drewno, kamień i inne, rysowane przez ModelCraft. Własnego obrazu jako materiału nie można jeszcze wczytać; tekstury, które przychodzą z importowanych plików, są zachowywane. Zobacz [Malowanie kolorami i materiałami](topic:paint).

### Skalowanie jest równomierne, bez uchwytów

Skaluj nie pokazuje ramki z uchwytami. Kliknij punkt, który pozostaje w miejscu (punkt odniesienia), potem nowy rozmiar lub wpisany współczynnik. Zawsze skaluje równo we wszystkich kierunkach. By rozciągnąć w jednym kierunku, przesuń ścianę przez {{ui:Wypychanie/ciągnięcie}} lub {{ui:Przesuń}}, wpisz ponownie szerokość, głębokość lub wysokość grupy w {{ui:Informacje o obiekcie}}, albo [zmień rozmiar wymiarem](topic:dimensions).

### Obrót wybiera płaszczyznę tam, gdzie klikasz

Nie ma kątomierza, który przykleja się do ścian, gdy najeżdżasz klawiszami strzałek, by wybrać płaszczyznę. Kliknij środek na ścianie, by obracać w płaszczyźnie tej ściany, albo na ziemi, by obracać wokół pionu. Klawisze strzałek orbitują widok przed pierwszym kliknięciem.

### Wnioskowanie z punktów, nad którymi przechodzisz

ModelCraft przyciąga do kierunków osi od **Twojego punktu startowego** oraz do punktów, krawędzi i ścian pod kursorem. Nie śledzi kierunku od punktu, nad którym tylko najechałeś (kropkowane wnioskowanie „od punktu”). By wyrównać do odległego narożnika, zablokuj oś klawiszem strzałki i najedź na ten narożnik: zablokowany punkt przesuwa się, by się z nim wyrównać. Albo ustaw [prowadnicę](topic:guides-measure).

### Równoległość używa krawędzi, nad którą przeszedłeś przed startem

Wnioskowanie równoległe i prostopadłe używa ostatniej krawędzi, nad którą kursor przeszedł **przed pierwszym kliknięciem**, a nie krawędzi, które najeżdżasz podczas rysowania. Zobacz [Wnioskowanie i przyciąganie](topic:inference#parallel-and-perpendicular).

### Kopie grupy są powiązane

Kopiowanie grupy narzędziem {{ui:Przesuń}} tworzy drugie umieszczenie tej samej grupy, więc edycja jednej zmienia obie, jak w komponentach. SketchUp czyni grupy niezależnymi. Zobacz [Rozwiązywanie problemów](topic:troubleshooting#editing-one-group-changed-another).

### Space nie przesuwa widoku

{{key:Space}} wybiera {{ui:Zaznacz}}, jak w SketchUpie. W niektórych innych aplikacjach webowych przytrzymanie Space przesuwa widok; tutaj nie. Zamiast tego przeciągnij prawym przyciskiem.

### Przewijanie dwoma palcami powiększa

Na gładziku ustaw {{ui:Ustawienia}} › {{ui:ModelCraft}} › Przewijanie na Gładzik: dwa palce orbitują, {{key:Shift}} i dwa palce przesuwają, szczypnięcie powiększa. Zobacz [Orbita, przesuwanie i powiększanie](topic:orbit-pan-zoom#on-a-trackpad).

### Klawisze Blendera

Jeśli Twoje ręce znają klawisze Blendera, a nie SketchUpa, wybierz styl menu {{ui:Modeler}}: {{key:G}}, {{key:R}} i {{key:S}} działają od razu na zaznaczeniu, {{key:E}} wyciąga (push/pull), {{key:Shift+D}} duplikuje, a pasek menu u góry (Plik, Edycja, Widok, Zaznacz, Dodaj, Obiekt, Siatka) zastępuje pasek narzędzi. Jeśli przychodzisz z SketchUpa, styl {{ui:Push-pull}} daje pasek menu podobny do jego własnego, nad tymi samymi literami narzędzi. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse).

### Bryły wepchnięte w siebie nie tną

Push/pull tnie przez ścianę za nią w tym samym obiekcie, ale dwie osobne bryły wepchnięte w siebie się nie przecinają. Nie ma Intersect Faces ani Solid Tools.

### Czego brakuje

Odręczne rysowanie, Trim, Split i Outer Shell, własne materiały z obrazów, rozszerzenia i narzędzie do układu arkuszy nie są w tej wersji. [Jeszcze nie zbudowano](topic:not-built-yet) wymienia, co zrobić zamiast tego.

## Skróty, które zachowuje przeglądarka

ModelCraft działa w przeglądarce, więc kilka skrótów należy do przeglądarki, a nie do aplikacji. {{key:Mod+N}} otwiera okno przeglądarki (użyj {{ui:Nowy}}), a {{key:Mod+W}} zamyka kartę. Jeśli masz niezapisane zmiany, przeglądarka pyta przed zamknięciem. Zobacz [Klawisze, myszy i gładziki](common:keys#shortcuts-the-browser-keeps).
