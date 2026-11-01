---
title: Otwieranie, zapisywanie, import i eksport
summary: Plik ModelCraft, co możesz wczytać i wysłać dalej, dokąd trafiają pliki oraz co zmienia się offline i między przeglądarkami.
keywords: otwieranie, zapisywanie, import, eksport, plik, 3dm, skp, odzyskiwanie, automatyczny zapis, ostatnie, komputer, otwórz w 3d, przekazanie, pobieranie, plik modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formaty, offline, zapisz jako
from: 0b4896d1
---

ModelCraft czyta i zapisuje pliki na Twoim komputerze. Nic nie jest wysyłane: plik, który otwierasz, jest czytany w przeglądarce, a plik, który zapisujesz, jest pobraniem. Zobacz [Dokąd trafiają Twoje pliki](common:your-files).

## Formaty w skrócie

| Format | Otwieranie | Import | Eksport | Do czego służy |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | tak | nie | {{ui:Zapisz}} | Twój plik roboczy. Zachowuje wszystko. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | tak | tak | {{ui:Zapisz jako}}, {{ui:Eksport}} | Programy do renderowania i składania scen. Własny USD ModelCraft zachowuje wszystko. Zobacz [Zapis, otwieranie i eksport USD](topic:usd). |
| SketchUp (`.skp`) | nie | tak | nie | Wczytywanie modeli z SketchUp. Zachowuje grupy, komponenty, kolory, tekstury na ścianach, etykiety i miękkie krawędzie. Zobacz [Wczytanie modelu SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | nie | tak | tak | Wymiana modeli z innymi modelerami 3D. Zachowuje grupy, komponenty i kolory. |
| OBJ (`.obj`) | nie | tak | tak | Programy do renderowania i wizualizacji. |
| glTF (`.glb`, `.gltf`) | nie | tak | tylko `.glb` | Przeglądarki internetowe, silniki gier, AR. |
| STL (`.stl`) | nie | tak | tak | Druk 3D (w milimetrach). |
| PLY (`.ply`) | nie | tak | tak | Siatki z kolorami: skany, druk kolorowy. |
| FBX (`.fbx`) | nie | tak | nie | Modele z programów do animacji i gier (FBX 2011 i nowszy). |
| Alembic (`.abc`) | nie | tak | nie | Pamięci podręczne geometrii, w pierwszej próbce. |
| STEP (`.step`, `.stp`) | nie | tak | nie | Części z modelerów części i od dostawców, jako zamknięte siatki w prawdziwym rozmiarze. Zobacz [Formaty plików](topic:formats). |
| `.3dm` | nie | tak | nie | Modele NURBS: polipowierzchnie, siatki, krzywe, bloki i warstwy, jako siatki, krawędzie, komponenty i etykiety. Zobacz [Wczytanie modelu .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | nie | nie | tak | Druk 3D z kolorami (w milimetrach). Z {{ui:Sprawdź do druku 3D (STL lub 3MF)…}}: zobacz [Przygotowanie modelu do druku 3D](topic:print-3d). |
| IFC (`.ifc`) | nie | nie | tak | Programy BIM i BimCraft. |
| DWG (`.dwg`) | nie | tak | tak | Plan sytuacyjny lub rzut, na którym modelujesz; wysyłanie modelu do programu CAD. |
| DXF (`.dxf`) | nie | tak | tak | To samo, dla dowolnego programu CAD. |

[Formaty plików szczegółowo](topic:formats) wylicza dokładnie, co każdy format zachowuje, a czego nie.

## Plik ModelCraft

Plik `.modelcraft` zachowuje cały model: geometrię, grupy, komponenty, prowadnice, sceny, jednostki oraz kamerę i styl, których używałeś w chwili zapisu. Nie zachowuje historii cofania.

### Otwórz model

1. Kliknij {{ui:Otwórz}} w grupie {{ui:Plik}} albo naciśnij {{key:Mod+O}}.
2. Jeśli model na ekranie ma niezapisane zmiany, ModelCraft pyta: „Ten model ma niezapisane zmiany. Zapisać najpierw kopię?” Wybierz {{ui:Zapisz kopię}}, {{ui:Odrzuć zmiany}} lub {{ui:Anuluj}}.
3. Wskaż plik `.modelcraft`.

Model otwiera się w jednostkach, w których został zapisany, i z kamerą, z którą go zapisano. Możesz też upuścić plik `.modelcraft` na widok 3D albo kliknąć go na liście ostatnich plików na karcie startowej (przeglądarki, które potrafią ponownie otworzyć plik, oraz aplikacja desktopowa).

:::desktop
W aplikacji desktopowej dwukrotne kliknięcie pliku `.modelcraft` otwiera go w ModelCraft, podobnie jak **Otwórz za pomocą** na pliku Collada, OBJ, glTF, DWG lub DXF (zostaje zaimportowany do nowego modelu).
:::

### Zapisz model

Kliknij {{ui:Zapisz}} albo naciśnij {{key:Mod+S}}. Przeglądarka pobiera `<nazwa>.modelcraft`, gdzie nazwa to nazwa otwartego pliku albo „Untitled” dla nowego modelu.

:::desktop
W aplikacji desktopowej {{ui:Zapisz}} zapisuje otwarty plik w miejscu. Nowy model pyta, gdzie go zapisać.
:::

- {{ui:Zapisz jako}} ({{key:Mod+Shift+S}}) zapisuje kopię jako plik `.modelcraft` albo jako [USD](topic:usd); tam, gdzie przeglądarka potrafi, pyta o nazwę i miejsce. W przeciwnym razie zmień nazwę pobranego pliku: następny zapis po otwarciu pliku ze zmienioną nazwą używa nowej nazwy.
- Każdy zapis to nowe pobranie. W zależności od ustawień przeglądarki trafia od razu do folderu pobranych plików albo pyta, gdzie zapisać. Jeśli plik o tej nazwie już tam jest, większość przeglądarek dodaje numer, na przykład `Untitled (1).modelcraft`.

:::chromium
Aby za każdym razem wybierać folder, otwórz ustawienia przeglądarki, wyszukaj „pobieranie” i włącz „Pytaj, gdzie zapisywać każdy plik przed pobraniem”.
:::

:::firefox
Aby za każdym razem wybierać folder, otwórz **Ustawienia**, potem **Ogólne**, a w sekcji „Pliki i aplikacje” wybierz „Zawsze pytaj, gdzie zapisać pliki”.
:::

:::safari
Aby zmienić miejsce pobierania, otwórz **Safari**, potem **Ustawienia**, potem **Ogólne** i ustaw „Miejsce pobierania plików”.
:::

### Zacznij nowy model

Kliknij {{ui:Nowy}}. Jeśli są niezapisane zmiany, ModelCraft najpierw zapyta. Nowy model zaczyna jako pusty, w jednostce Twojego ustawienia regionalnego (stopy i cale w Stanach Zjednoczonych, milimetry gdzie indziej), bez scen.

### Jeśli przeglądarka zamknie się przed zapisem

ModelCraft zachowuje kopię niezapisanej pracy w przeglądarce kilka sekund po każdej zmianie. Jeśli karta lub przeglądarka zamknie się przed zapisem, przy następnym otwarciu ModelCraft pyta „Odzyskać pracę?”. Odzyskanie otwiera model taki, jaki był, jeszcze niezapisany do pliku: zapisz go, aby go zachować. Zobacz [Odzyskaj swoją pracę](common:recover).

### Z CadCraft: Otwórz w ModelCraft

W aplikacji rysunkowej CadCraft **Widok**, potem **Więcej**, potem **Otwórz w ModelCraft** przekazuje otwarty rysunek do ModelCraft w nowej karcie, jako DWG. Dociera tak jak zaimportowany DWG: linie na gruncie, w grupie, gotowe do modelowania. Nic nie jest wysyłane; plik przechodzi przez własną pamięć przeglądarki.

## Import

Import dodaje plik do otwartego modelu; nie zastępuje go.

1. Kliknij {{ui:Importuj}} w grupie {{ui:Plik}} albo upuść plik na widok 3D.
2. Wskaż plik SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG lub DXF.

   Plik trafia jako **jedna grupa**, zaznaczona, a widok powiększa się, aby ją pokazać. Pasek stanu mówi, co zostało wczytane, i wylicza to, czego nie udało się zaimportować, na przykład „Nie zaimportowano: 2 tekstury”.

3. Aby pracować bezpośrednio na jego geometrii, kliknij grupę dwukrotnie, by edytować wewnątrz, albo kliknij {{ui:Rozbij}}.

Warto wiedzieć:

- **Rozmiar i kierunek w górę:** pliki Collada podają swoją jednostkę i to, która oś jest w górę, a ModelCraft je przelicza. glTF jest zawsze w metrach. Pliki OBJ nie niosą jednostki: ModelCraft czyta je jako metry, z osią Y w górę. Jeśli OBJ trafia 1000 razy za duży lub za mały, użyj [Skaluj](topic:rotate-scale) ze współczynnikiem, na przykład `0.001` lub `1000`.
- **DWG i DXF** trafiają jako linie (krawędzie) na gruncie, nie jako ściany. Jeśli rysunek nie podaje swojej jednostki, okno zatytułowane „Jednostki rysunku” pyta, czym jest jedna jednostka rysunku. Zobacz [Modelowanie na planie sytuacyjnym](topic:site-plan).
- **Limity:** pliki powyżej 300 MB są odrzucane przy imporcie, a powyżej 200 MB przy otwieraniu. Pliki z więcej niż 2 milionami wierzchołków lub ścian są odrzucane jako zbyt duże.

## Eksport

1. Kliknij {{ui:Eksport}} w grupie {{ui:Plik}}.
2. Wybierz format: {{ui:glTF binarny (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL do druku (.stl, milimetry)}}, {{ui:PLY z kolorami (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC dla BimCraft (.ifc)}}, {{ui:DWG dla CAD (.dwg, 2004)}} lub {{ui:DXF dla CAD (.dxf, R12)}}.

Przeglądarka pobiera plik nazwany tak jak model. Eksportowany jest cały model, nie tylko zaznaczenie. Pusty model nie jest eksportowany: „Model jest pusty: najpierw coś narysuj.” Zobacz [Eksport modelu do innych programów](topic:export-model).

## Online i offline

Wszystko w ModelCraft działa na Twoim komputerze, więc modelowanie, otwieranie, zapisywanie, import i eksport działają bez połączenia, gdy aplikacja jest już załadowana.

Aby otworzyć ModelCraft zupełnie bez połączenia, zapisz go do pracy offline, gdy jesteś online:

1. Kliknij {{ui:Zapisz do pracy offline}} na pasku aplikacji u góry.
2. Przycisk odlicza („Zapisywanie 40 z 212”) w trakcie zapisu. ModelCraft zapisuje własne pliki (w tym czytnik DWG), tę pomoc i bibliotekę 3D, więc może to chwilę potrwać.
3. Gdy na przycisku widnieje {{ui:Gotowe offline}}, ModelCraft otwiera się z tego samego adresu bez połączenia, a import DWG też działa offline.

Kliknij później {{ui:Gotowe offline}}, aby wybrać {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} lub {{ui:Usuń kopię offline}}. Jeśli na przycisku widnieje {{ui:Nie udało się zapisać}}, niektóre pliki się nie pobrały: sprawdź połączenie i kliknij go, aby spróbować ponownie. {{ui:Tryb offline niedostępny}} oznacza, że to okno przeglądarki nie może przechowywać kopii (okna prywatne i niektóre komputery zarządzane). Zobacz [Praca offline](common:offline).

Zapis w chmurze nie jest jeszcze dostępny. Każdy model znajduje się tam, gdzie go zapiszesz.

:::offline
Jesteś offline. Możesz dalej modelować i zapisywać. Dopóki na pasku aplikacji nie widnieje {{ui:Gotowe offline}}, nie przeładowuj tej karty, zanim znów będziesz online.
:::

## Aplikacja desktopowa

:::desktop
Używasz ModelCraft w CadCraft Studio, aplikacji desktopowej ze wszystkimi ośmioma aplikacjami. Pliki otwierają się i zapisują tam, gdzie wskażesz.
:::

:::web
ModelCraft działa w przeglądarce na Macu, Windowsie i Linuksie oraz w CadCraft Studio, aplikacji desktopowej ze wszystkimi ośmioma aplikacjami w jednej instalacji, ze strony getcadcraft.com/download.
:::
