---
title: Otwieranie, zapisywanie, importowanie i eksportowanie
summary: Plik ModelCraft, co możesz wczytać i wysłać, gdzie trafiają pliki oraz co zmienia się w trybie offline i między przeglądarkami.
keywords: otwórz, zapisz, importuj, eksportuj, plik, 3dm, skp, odzyskaj, automatyczny zapis, ostatnie, aplikacja desktopowa, otwórz w 3D, przekazanie, pobierz, plik modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formaty, offline, zapisz jako
from: 3f09ab72
---

ModelCraft odczytuje i zapisuje pliki na Twoim komputerze. Nic nie jest wysyłane: plik, który otwierasz, jest odczytywany w przeglądarce, a zapisany plik jest pobierany. Zobacz [Gdzie trafiają Twoje pliki](common:your-files).

## Formaty w skrócie

| Format | Otwieranie | Import | Eksport | Do czego służy |
|---|---|---|---|---|
| Plik ModelCraft (`.modelcraft`) | tak | nie | {{ui:Zapisz}} | Twój plik roboczy. Zachowuje wszystko. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | tak | tak | {{ui:Zapisz jako}}, {{ui:Eksport}} | Programy do renderowania i składania scen. Własny format USD w ModelCraft zachowuje wszystko. Zobacz [Zapisywanie, otwieranie i eksport USD](topic:usd). |
| SketchUp (`.skp`) | nie | tak | nie | Importowanie modeli z SketchUp. Zachowuje grupy, komponenty, kolory, tekstury na ścianach, znaczniki i miękkie krawędzie. Zobacz [Importowanie modelu SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | nie | tak | tak | Wymiana modeli z innymi programami 3D. Zachowuje grupy, komponenty i kolory. |
| OBJ (`.obj`) | nie | tak | tak | Programy do renderowania i wizualizacji. |
| glTF (`.glb`, `.gltf`) | nie | tak | tylko `.glb` | Przeglądarki internetowe, silniki gier, AR. |
| STL (`.stl`) | nie | tak | tak | Druk 3D (w milimetrach). |
| PLY (`.ply`) | nie | tak | tak | Siatki z kolorami: skany, druk kolorowy. |
| FBX (`.fbx`) | nie | tak | nie | Modele z programów do animacji i gier (FBX 2011 i nowsze). |
| Alembic (`.abc`) | nie | tak | nie | Pamięci podręczne geometrii, w ich pierwszej próbce. |
| STEP (`.step`, `.stp`) | nie | tak | nie | Części z programów do modelowania części i od dostawców, jako zamknięte siatki w rzeczywistym rozmiarze. Zobacz [Formaty plików](topic:formats). |
| `.3dm` | nie | tak | nie | Modele NURBS: polipowierzchnie, siatki, krzywe, bloki i warstwy, jako siatki, krawędzie, komponenty i znaczniki. Zobacz [Importowanie modelu .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | nie | nie | tak | Druk 3D, z kolorami (w milimetrach). Z {{ui:Check for 3D printing (STL or 3MF)…}}: zobacz [Przygotowanie modelu do druku 3D](topic:print-3d). |
| IFC (`.ifc`) | nie | nie | tak | Programy BIM oraz BimCraft. |
| DWG (`.dwg`) | nie | tak | tak | Plan sytuacyjny lub rzut do modelowania; wysyłanie modelu do programu CAD. |
| DXF (`.dxf`) | nie | tak | tak | To samo, dla dowolnego programu CAD. |

[Formaty plików szczegółowo](topic:formats) wymienia dokładnie, co każdy format zachowuje, a co pomija.

## Plik ModelCraft

Plik `.modelcraft` zachowuje cały model: geometrię, grupy, komponenty, prowadnice, sceny, jednostki oraz kamerę i styl, których używałeś w chwili zapisu. Nie zachowuje historii cofania.

### Otwieranie modelu

1. Kliknij {{ui:Otwórz}} w grupie {{ui:Plik}} lub naciśnij {{key:Mod+O}}.
2. Jeśli model na ekranie ma niezapisane zmiany, ModelCraft zapyta: „Ten model ma niezapisane zmiany. Zapisać najpierw kopię?” Wybierz {{ui:Zapisz kopię}}, {{ui:Odrzuć zmiany}} lub {{ui:Anuluj}}.
3. Wskaż plik `.modelcraft`.

Model otwiera się w jednostkach, w których został zapisany, z kamerą, z którą został zapisany. Możesz też upuścić plik `.modelcraft` na widok 3D albo kliknąć go na liście ostatnich plików na karcie startowej (przeglądarki, które potrafią ponownie otworzyć plik, oraz aplikacja desktopowa).

:::desktop
W aplikacji desktopowej dwukrotne kliknięcie pliku `.modelcraft` otwiera go w ModelCraft, tak samo działa **Otwórz za pomocą** przy pliku Collada, OBJ, glTF, DWG lub DXF (plik zostanie zaimportowany do nowego modelu).
:::

### Zapisywanie modelu

Kliknij {{ui:Zapisz}} lub naciśnij {{key:Mod+S}}. Przeglądarka pobiera plik `<name>.modelcraft`, gdzie nazwa to nazwa otwartego pliku albo „Untitled” dla nowego modelu.

:::desktop
W aplikacji desktopowej {{ui:Zapisz}} zapisuje otwarty plik w tym samym miejscu. Nowy model pyta, gdzie go zapisać.
:::

- {{ui:Zapisz jako}} ({{key:Mod+Shift+S}}) zapisuje kopię jako plik `.modelcraft` albo jako [USD](topic:usd); tam, gdzie przeglądarka na to pozwala, pyta o nazwę i miejsce. W przeciwnym razie zmień nazwę pobranego pliku: kolejny zapis po otwarciu przemianowanego pliku użyje nowej nazwy.
- Każdy zapis to nowe pobranie. W zależności od ustawień przeglądarki trafia od razu do folderu pobranych albo pyta, gdzie zapisać. Jeśli plik o tej nazwie już tam jest, większość przeglądarek dodaje numer, na przykład `Untitled (1).modelcraft`.

:::chromium
Aby wybierać folder za każdym razem, otwórz ustawienia przeglądarki, wyszukaj „pobrane” i włącz opcję „Pytaj, gdzie zapisać każdy plik przed pobraniem”.
:::

:::firefox
Aby wybierać folder za każdym razem, otwórz **Ustawienia**, potem **Ogólne**, a w sekcji „Pobieranie” wybierz „Zawsze pytaj, gdzie zapisać pliki”.
:::

:::safari
Aby zmienić miejsce pobierania, otwórz **Safari**, potem **Ustawienia**, potem **Ogólne**, i ustaw „Lokalizacja pobranych plików”.
:::

### Nowy model

Kliknij {{ui:Nowy}}. Jeśli są niezapisane zmiany, ModelCraft najpierw zapyta. Nowy model zaczyna się pusty, w jednostce Twojej lokalizacji (stopy i cale w Stanach Zjednoczonych, milimetry w pozostałych krajach), bez scen.

### Jeśli przeglądarka zamknie się przed zapisem

ModelCraft zachowuje kopię niezapisanej pracy w przeglądarce kilka sekund po każdej zmianie. Kopia zapisywana jest w tle, więc duży model nie wstrzymuje pracy. Jeśli karta lub przeglądarka zostanie zamknięta przed zapisem, przy następnym otwarciu ModelCraft zapyta „Odzyskać swoją pracę?”. Odzyskanie otwiera model w stanie, w jakim był, jeszcze niezapisany do pliku: zapisz go, aby go zachować. Zobacz [Odzyskiwanie pracy](common:recover).

### Z CadCraft: Otwórz w ModelCraft

W aplikacji rysunkowej CadCraft **Widok**, potem **Więcej**, potem **Otwórz w ModelCraft** przekazuje otwarty rysunek do ModelCraft w nowej karcie, jako DWG. Trafia tak, jak zaimportowany DWG: linie na gruncie, w grupie, gotowe do modelowania. Nic nie jest wysyłane; plik przechodzi przez pamięć przeglądarki.

## Import

Importowanie dodaje plik do otwartego modelu; nie zastępuje go.

1. Kliknij {{ui:Importuj}} w grupie {{ui:Plik}} albo upuść plik na widok 3D.
2. Wskaż plik SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG lub DXF.

   Plik trafia jako **jedna grupa**, zaznaczona, a widok przybliża się, aby ją pokazać. Pasek stanu informuje, co zostało zaimportowane, i wymienia wszystko, czego nie udało się zaimportować, na przykład „Nie zaimportowano: 2 tekstury”.

3. Aby edytować jego geometrię bezpośrednio, kliknij dwukrotnie grupę, aby edytować wewnątrz, lub kliknij {{ui:Rozbij}}.

Kilka rzeczy do zapamiętania:

- **Rozmiar i kierunek w górę:** pliki Collada podają swoją jednostkę i oś pionową, a ModelCraft je przelicza. glTF jest zawsze w metrach. Pliki OBJ nie zawierają jednostki: ModelCraft odczytuje je jako metry, z osią Y w górze. Jeśli OBJ wejdzie 1000 razy za duży lub za mały, użyj [Skalowania](topic:rotate-scale) ze współczynnikiem, na przykład `0.001` albo `1000`.
- **DWG i DXF** wchodzą jako linie (krawędzie) na gruncie, a nie jako ściany. Jeśli rysunek nie podaje swojej jednostki, pojawia się okno dialogowe „Jednostki rysunku”, które pyta, czym jest jedna jednostka rysunku. Zobacz [Modelowanie na planie sytuacyjnym](topic:site-plan).
- **Limity:** pliki powyżej 300 MB są odrzucane przy imporcie, a powyżej 200 MB przy otwieraniu. Pliki z więcej niż 2 miliony wierzchołków lub ścian są odrzucane jako zbyt duże. Plik OBJ powyżej 64 MB jest odrzucany, zanim zostanie odczytany. Pliki tekstowe (Collada, OBJ, ASCII STL, tekstowy USD) są odczytywane po kawałku, około 4 MB, więc żaden pojedynczy blok tekstu nie trzyma całego pliku; plik OBJ o rozmiarze 16 MB zużył w naszym teście około 0.5 GB pamięci podczas otwierania.

## Eksport

1. Kliknij {{ui:Eksport}} w grupie {{ui:Plik}}.
2. Wybierz format: {{ui:glTF binarny (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL do druku (.stl, milimetry)}}, {{ui:PLY z kolorami (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC dla BimCraft (.ifc)}}, {{ui:DWG dla CAD (.dwg, 2004)}} lub {{ui:DXF dla CAD (.dxf, R12)}}.

Przeglądarka pobiera plik pod nazwą zgodną z modelem. Eksportowany jest cały model, nie tylko zaznaczenie. Pliki glTF, Collada i OBJ są zapisywane w tle, więc ModelCraft działa dalej podczas eksportu dużego modelu; pobieranie zaczyna się, gdy plik jest gotowy. Pusty model nie jest eksportowany: „Model jest pusty. Najpierw coś narysuj.” Zobacz [Eksport modelu do innych programów](topic:export-model).

## Online i offline

Wszystko w ModelCraft działa na Twoim komputerze, więc modelowanie, otwieranie, zapisywanie, importowanie i eksportowanie działają bez połączenia, gdy aplikacja jest już załadowana.

Aby otworzyć ModelCraft bez żadnego połączenia, zapisz go do pracy offline, gdy jesteś online:

1. Kliknij {{ui:Zapisz do pracy offline}} na pasku aplikacji u góry.
2. Przycisk pokazuje licznik („Zapisywanie 40 z 212”) podczas zapisu. ModelCraft zapisuje własne pliki (w tym czytnik DWG), tę pomoc i bibliotekę 3D, więc może to chwilę potrwać.
3. Gdy przycisk pokazuje {{ui:Gotowe offline}}, ModelCraft otwiera się z tego samego adresu bez połączenia, a import DWG działa również offline.

Kliknij później {{ui:Gotowe offline}}, aby wybrać {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} lub {{ui:Usuń kopię offline}}. Jeśli przycisk pokazuje {{ui:Nie udało się zapisać}}, niektóre pliki się nie pobrały: sprawdź połączenie i kliknij go, aby spróbować ponownie. {{ui:Tryb offline niedostępny}} oznacza, że to okno przeglądarki nie może zachować kopii (okna prywatne i niektóre zarządzane komputery). Zobacz [Praca offline](common:offline).

Zapisywanie w chmurze nie jest jeszcze dostępne. Każdy model znajduje się tam, gdzie go zapiszesz.

:::offline
Jesteś offline. Możesz dalej modelować i zapisywać. Dopóki pasek aplikacji nie pokazuje {{ui:Gotowe offline}}, nie odświeżaj tej karty, dopóki ponownie nie będziesz online.
:::

## Aplikacja desktopowa

:::desktop
Korzystasz z ModelCraft w CadCraft Studio, aplikacji desktopowej ze wszystkimi ośmioma aplikacjami. Pliki otwierają się i zapisują tam, gdzie wybierzesz.
:::

:::web
ModelCraft działa w przeglądarce na Mac, Windows i Linux, a także w CadCraft Studio, aplikacji desktopowej ze wszystkimi ośmioma aplikacjami w jednej instalacji, z getcadcraft.com/download.
:::
