---
title: Formaty plików szczegółowo
summary: Dokładnie to, co każdy format, który ModelCraft otwiera, importuje i eksportuje, zachowuje, konwertuje i pomija.
keywords: formaty, typy plików, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, jednostki, osie, y up, z up, milimetry, limity
from: c47d2d28
---

Model ModelCraft ma wymiary w metrach, z osią Z (niebieską) skierowaną w górę. Każdy poniższy format jest konwertowany z tego układu lub do niego.

## ModelCraft (.modelcraft)

| Co | Szczegóły |
|---|---|
| Otwieranie | {{ui:Otwórz}} ({{key:Mod+O}}) lub upuszczenie na widok. Pliki z rozszerzeniem `.json` też są akceptowane |
| Zapis | {{ui:Zapisz}} ({{key:Mod+S}}), jako pobranie |
| Zachowuje | Wszystko: geometrię, ściany i ich kolory, materiały i zaimportowane tekstury, lampy, miękkie krawędzie, grupy, komponenty, nazwy, prowadnice, sceny, jednostki oraz ostatnią kamerę i styl |
| Pomija | Historię cofania |
| Limit | 200 MB |

Plik zapisany w nowszej wersji ModelCraft niż twoja jest odrzucany: „Ten model został zapisany w nowszym ModelCraft (wersja pliku …). Zaktualizuj ModelCraft, aby go otworzyć.” Plik, który nie jest modelem ModelCraft, mówi: „Ten plik nie jest modelem ModelCraft (nie jest JSON).” albo „To nie jest plik ModelCraft, który możemy otworzyć: …”.

## USD (.usd, .usda, .usdc, .usdz)

Otwieranie, import oraz {{ui:Zapisz jako}} lub {{ui:Eksport}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Plik USD zapisany przez ModelCraft otwiera się ponownie bez utraty czegokolwiek; pliki USD z innych programów otwierają się jako siatki, grupy, komponenty, lampy i kamery. Zobacz [Zapisywanie, otwieranie i eksport USD](topic:usd).

## Collada (.dae)

Import i eksport. Najlepszy format do wymiany modeli z innymi modelerami 3D.

- **Eksport:** Collada 1.4.1, oś Z w górę, metry. Jedna geometria na definicję grupy lub komponentu; komponenty są zapisywane raz i umieszczane przez odwołanie, więc pozostają współdzielone. Ściany z otworami lub wklęsłymi obrysami są dzielone na trójkąty. Kolory stają się materiałami. Luźne krawędzie są zapisywane jako linie. Nazwy niedozwolone w tym formacie są korygowane, a dokładna nazwa jest zachowywana obok.
- **Import:** trójkąty, wielokąty (z otworami), wachlarze i pasma trójkątów stają się ścianami; linie stają się krawędziami. Przekształcenia węzłów, oś pionowa pliku i jego jednostka są stosowane. Węzeł umieszczony w kilku miejscach albo geometria używana przez kilka węzłów wchodzi jako komponent; pozostałe węzły wchodzą jako grupy. Kolory materiału (diffuse) stają się kolorami ścian.
- **Nie importowane:** tekstury, szkielety i morfy, kamery, światła, niektóre typy przekształceń (look-at i skew) oraz odwołania do innych plików. Pasek stanu je liczy.
- **Tracone przy eksporcie:** informacja, które krawędzie są miękkie. **Przy imporcie** powierzchnie podzielone na trójkąty pozostają trójkątami, a przekątne są zmiękczane, aby płaskie obszary wyglądały jak jedna powierzchnia.

## OBJ (.obj, .mtl)

Import i eksport.

- **Import:** przeciągnij `.obj` razem z jego `.mtl` i obrazami tekstur (albo importuj sam `.obj`: wejdzie bez materiałów, a pasek stanu wskaże `.mtl`, którego szukał). Odczytywany w metrach, z osią Y w górę. Każdy obiekt (`o`, w przeciwnym razie `g`) staje się [siatką](topic:meshes), a jego ściany zachowują postać (czworokąty pozostają czworokątami). Współrzędne tekstur, normalne i kolory wierzchołków są zachowane. Obraz koloru materiału (`map_Kd`, PNG, JPEG lub WebP) wchodzi jako tekstura z opcjami skali i przesunięcia; w przeciwnym razie – jego kolor (`Kd`). Krawędzie, w których normalne pliku się łamią, są twarde; bez normalnych decydują grupy wygładzania pliku. Inne mapy (bump, normal), punkty, linie i krzywe są liczone i pomijane. OBJ nie ma jednostki, więc model zrobiony w milimetrach lub calach wchodzi w złym rozmiarze: przeskaluj go po imporcie (zobacz [Obracanie i skalowanie](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksport:** metry, oś Y w górę, współrzędne świata. Jeden obiekt na każde umieszczenie grupy; komponenty są zapisywane w pełni przy każdym umieszczeniu. Siatki zachowują własne ściany, współrzędne tekstur i normalne; ściany połączone [miękkimi krawędziami](topic:soften) dostają normalną na każdym rogu. Gdy model ma kolory, obok `.obj` pobiera się `.mtl`. Gdy ma zaimportowane tekstury, `.obj`, `.mtl` i obrazy pobierają się razem jako jeden `.zip`.
- **Limit:** 2 miliony wierzchołków lub ścian; 64 MB tekstu.

## glTF (.glb, .gltf)

Import i eksport, glTF 2.0.

- **Import:** `.glb` albo `.gltf` razem z jego plikami `.bin` i teksturami: upuść je wszystkie naraz na widok (albo wybierz `.glb`). Samo `.gltf` wskazuje brakujący plik: „Ten plik .gltf potrzebuje „…”: otwórz wersję .glb albo upuść .gltf razem z jego plikami.”
  - **Siatki** wchodzą jako [siatki](topic:meshes), po jednej na siatkę w pliku, z zachowanymi normalnymi pliku, współrzędnymi tekstur i kolorami wierzchołków. Krawędzie, w których normalne pliku się łamią, są twarde; reszta jest miękka. Siatka użyta w kilku miejscach pozostaje współdzielona.
  - **Węzły** stają się grupami, nazwanymi jak w pliku. Zainstancjonowane siatki (EXT_mesh_gpu_instancing) wchodzą jako jedna siatka umieszczona wiele razy.
  - **Materiały:** tekstura koloru podstawowego (PNG, JPEG lub WebP) wchodzi jako tekstura, ułożona według współrzędnych tekstur pliku (z ewentualnym przekształceniem tekstury), i jest zachowywana przy zapisie; w przeciwnym razie – kolor podstawowy. Metal, chropowatość, mapy normalne, szkło, lakier, połysk (sheen) i inne rozszerzenia materiałów są odczytywane, ale jeszcze nie zachowywane: pasek stanu o tym informuje.
  - **Światła** (KHR_lights_punctual): światła punktowe i reflektory stają się [lampami](topic:lights). Światła kierunkowe są liczone: słońce oświetla model.
  - **Kamery** stają się [scenami](topic:scenes).
  - **Postacie z szkieletem** wchodzą w pozycji spoczynkowej, w jakiej zostawia je plik; ich kości, animacje i cele morficzne są liczone i jeszcze nie zachowywane.
  - **Pliki skompresowane** (Draco, meshopt) i dane kwantyzowane są odczytywane. Dekodery ładują się tylko dla pliku, który ich potrzebuje.
  - Punkty i linie są liczone i pomijane (siatka zawiera ściany). Tekstury KTX2 są pomijane; ściany zachowują swój kolor.
- **Eksport** (`.glb`): glTF 2.0 binarny, metry, oś Y w górę. Jedna siatka na definicję, więc komponenty pozostają współdzielone. Siatki zachowują swoje normalne, współrzędne tekstur i kolory wierzchołków; ściany połączone [miękkimi krawędziami](topic:soften) mają gładkie normalne. Kolory i materiały stają się materiałami (materiał jako swój kolor); zaimportowane tekstury są zapisywane jako tekstury. Włączone lampy stają się światłami punktowymi i reflektorami (lampy obszarowe nie mają odpowiednika w glTF i są pomijane); sceny stają się kamerami. Luźne krawędzie są pomijane.
- **Limit:** pliki do 300 MB; około 130 milionów liczb geometrii.

## STL (.stl)

Import i eksport.

- **Import:** binarny lub ASCII. STL nie ma jednostki: jest odczytywany jako **milimetry**, tak jak zapisują go drukarki i własny eksport ModelCraft. Wierzchołki w tym samym punkcie są łączone, więc zamknięta część wchodzi jako zamknięta [siatka](topic:meshes). Kolory w pliku (konwencje VisCAM / SolidView i Materialise) malują ściany.
- **Eksport** do druku 3D: binarny STL, **milimetry**, oś Z w górę. Tylko trójkąty: grupy i luźne krawędzie są pomijane. Pomalowane ściany niosą kolor w konwencji VisCAM / SolidView, którą inne programy ignorują, jeśli jej nie odczytują. Eksportuj zamknięte bryły, aby uzyskać czysty wydruk.

## STEP (.step, .stp)

Tylko import. STEP to format, który wysyłają modelerzy części i dostawcy: pliki AP203, AP214 i AP242.

- **Import:** ModelCraft sam czyta plik na stronie i zamienia każdą bryłę w zamkniętą [siatkę](topic:meshes) trójkątów: płaskie ściany pozostają płaskie, zakrzywione (walce, stożki, kule, torusy, powierzchnie B-spline) stają się wieloma małymi płaskimi, przy czym krawędzie wewnątrz jednej zakrzywionej ściany są miękkie, a krawędzie między dwiema ścianami ostre. Pliki STEP podają swoją jednostkę; model wchodzi w swoim prawdziwym rozmiarze. Złożenie wchodzi z każdą częścią tam, gdzie plik ją umieszcza; każda część jest osobną siatką w grupie nazwanej jak plik. Kolory, nazwy części z drzewa złożenia i tolerancje (PMI) nie są odczytywane.
- **Komunikaty:** to, co pominięto lub narysowano grubiej, dodaje się do wiersza stanu („Uwagi: …”); plik bez bryły, uszkodzony albo przekraczający limity mówi, dlaczego, i nic nie dodaje.
- **Limit:** pliki do 300 MB; 400 000 ścian i 8 milionów trójkątów.

## .3dm

Tylko import. Pliki `.3dm` przechowują modele NURBS: polipowierzchnie, powierzchnie, siatki, krzywe i bloki.

- **Import:** ModelCraft sam czyta plik na stronie. Siatki wchodzą tak, jak są; każda ściana polipowierzchni lub wyciągnięcia pochodzi z zapisanej w pliku siatki renderowania, a w przeciwnym razie ModelCraft ją zamienia na siatkę (płaszczyzny, powierzchnie NURBS, powierzchnie obrotowe, wyciągnięte krzywe, wyciągnięcia; przycinane swoimi krawędziami, zamknięte polipowierzchnie jako zamknięte siatki). Krzywe stają się krawędziami, bloki – komponentami (zagnieżdżone bloki zachowane), warstwy – etykietami (ukryte, gdy wyłączone), a kolor obiektu (własny, jego warstwy lub materiału) maluje jego ściany. Plik podaje swoją jednostkę; model wchodzi w swoim prawdziwym rozmiarze. Krok po kroku: [Import modelu .3dm](topic:import-3dm-files).
- **Komunikaty:** wiersz stanu podaje, ile ścian pochodzi z zapisanych siatek, a ile zostało zamienionych na siatkę, i wymienia, co pominięto: punkty, chmury punktów, tekst, wymiary, kreskowania, światła, obiekty SubD, ściany na rodzajach powierzchni, których jeszcze nie odczytano, połączone bloki.
- **Limit:** pliki do 300 MB.

## PLY (.ply)

Import i eksport, dla siatek z kolorami (skany, druk 3D w kolorze, inne modelery).

- **Import:** ASCII i binarny. Ściany stają się [siatką](topic:meshes) z zachowanymi normalnymi, współrzędnymi tekstur i kolorami wierzchołków; każda ściana jest malowana najbliższym z 4096 kolorów, abyś od razu widział kolory. PLY nie ma jednostki ani konwencji osi: współrzędne wchodzą takie, jakie są (metry, oś Z w górę). PLY zawierający tylko punkty to chmura punktów: otwórz ją w BimCraft lub CivilCraft.
- **Eksport:** binarny PLY z pozycjami, normalnymi i kolorami (oraz współrzędnymi tekstur, gdy model je ma), w metrach, oś Z w górę.

## FBX (.fbx)

Tylko import. Pliki FBX 7 (od 2011 roku), binarne lub ASCII, odczytywane przez własny czytnik ModelCraft.

- Siatki wchodzą jako [siatki](topic:meshes) z normalnymi, współrzędnymi tekstur (każdy zestaw UV) i kolorami wierzchołków; siatka używana przez kilka obiektów pozostaje współdzielona. Obiekty stają się grupami z przekształceniami (wraz z pivotami, przesunięciami i wstępnymi obrotami).
- Materiały: tekstura dyfuzyjna – osadzona w pliku albo obraz upuszczony razem z `.fbx` – wchodzi jako tekstura (obrazy TGA są zachowywane jako PNG); w przeciwnym razie kolor dyfuzyjny. Inne ustawienia materiałów czekają na nowy model materiałów.
- Oś pionowa i jednostka pliku są stosowane: wszystko wchodzi z osią Z w górę, w metrach.
- Światła punktowe i reflektory stają się [lampami](topic:lights) (intensywność FBX 100 odpowiada domyślnej lampie ModelCraft, 800 lumenom: intensywności FBX nie mają jednostki). Kamery stają się [scenami](topic:scenes).
- Postacie z szkieletem wchodzą w pozycji spoczynkowej; kości i animacje są liczone i jeszcze nie zachowywane. Światła kierunkowe i obszarowe oraz geometria inna niż siatki (NURBS, krzywe) są liczone i pomijane.
- Pliki FBX 6 i starsze są odrzucane: zapisz je ponownie jako FBX 2011 lub nowszy.

## Alembic (.abc)

Tylko import: pamięci podręczne geometrii z programów do animacji i efektów.

- Siatki (wielokątne i podziałowe) wchodzą jako [siatki](topic:meshes) z współrzędnymi tekstur i normalnymi; przekształcenia stają się grupami. Alembic ma oś Y w górę i jest obracany do osi Z w górę; metry.
- Pamięć podręczna z wieloma próbkami (animacja) wchodzi z pierwszą próbką; wiersz stanu podaje, ile ich ma.
- Punkty, krzywe, powierzchnie NURBS, kamery i światła są liczone i pomijane. Pliki w starym układzie HDF5 są odrzucane: zapisz je ponownie jako plik Alembic Ogawa.

{{ui:Sprawdź do druku 3D (STL lub 3MF)…}} sprawdza kształt najpierw i zapisuje zaznaczenie albo wszystko, co widoczne. Zobacz [Przygotowanie modelu do druku 3D](topic:print-3d).

## 3MF (.3mf)

Tylko eksport, z {{ui:Sprawdź do druku 3D (STL lub 3MF)…}}. Rdzeń 3MF: jedna siatka w **milimetrach**, oś Z w górę, z kolorami jako materiałami. Większość programów przygotowujących wydruk (slicerów) je odczytuje, a w przeciwieństwie do STL podaje swoją jednostkę. Ukryte rzeczy są pomijane. Zobacz [Przygotowanie modelu do druku 3D](topic:print-3d).

## Eksport DWG i DXF (.dwg, .dxf)

Dla programów CAD. Model jest zapisywany we własnej jednostce: w calach dla modeli w stopach i calach, w przeciwnym razie w milimetrach, centymetrach lub metrach (pasek stanu podaje, którą).

- **Ściany** stają się ścianami 3D (trójkątami). Linie wewnątrz ściany i miękkie krawędzie są zapisywane jako niewidoczne, więc ściany wyglądają jak w ModelCraft.
- **Luźne krawędzie** stają się liniami.
- **Grupy i komponenty** stają się blokami: komponent jest zapisywany raz i umieszczany tyle razy, ile jest używany, łącznie z obróconymi i odbitymi kopiami. Grupa, która została rozciągnięta po obrocie (przez co jest pochylona), jest zapisywana w miejscu.
- **Kolory:** DWG zachowuje dokładnie kolor każdej ściany; DXF używa najbliższego z 255 standardowych kolorów CAD.
- **Wersje:** DWG jest zapisywany jako AutoCAD 2004 (AC1018), który otwierają programy CAD od 2004 roku. DXF to R12 (AC1009), wersja czytana przez każdy program CAD; R12 nie ma pola jednostki, więc powiedz programowi CAD, której jednostki użyć.
- **Nie są zapisywane:** prowadnice, wymiary, sceny i kamera.

## IFC (.ifc)

Tylko eksport, dla BimCraft i innych programów BIM. IFC4 z projektem, terenem, budynkiem i jego kondygnacjami. Każda grupa lub komponent najwyższego poziomu staje się jednym obiektem zastępczym elementu budynku (building element proxy) z nazwą; zamknięte są zapisywane jako bryły (faceted breps), otwarte jako modele powierzchniowe; otwory w ścianach są zachowane. Luźna geometria na najwyższym poziomie staje się jednym elementem o nazwie „Luźna geometria”. Bez typów, właściwości i materiałów.

**Kondygnacje:** {{ui:Eksport}} › {{ui:Kondygnacje IFC…}} wyświetla ich listę, każdą z nazwą i wysokością ({{ui:Dodaj kondygnację}} albo {{ui:Zgadnij z modelu}}, co tworzy jedną kondygnację dla każdej wysokości, na której stoją twoje grupy najwyższego poziomu). Przy eksporcie każda grupa lub komponent trafia na kondygnację na poziomie najniższego punktu lub poniżej niego i zachowuje swoje miejsce. Bez kondygnacji wszystko trafia na jedną, „Poziom 1”, na wysokości 0. Kondygnacje są zapisywane w pliku ModelCraft.

## DWG (.dwg) i DXF (.dxf)

Import jako linie na ziemi (kreskowania i ściany 3D jako ściany); eksport opisany wyżej. Zobacz [Model na planie sytuacyjnym](topic:site-plan).

- **Odczyt:** linie, polilinie (z łukami), polilinie 3D, okręgi, łuki i odwołania do bloków, łącznie z tablicami, z przestrzeni modelu. Niewidoczne obiekty (na przykład ukryte stany bloku dynamicznego) są pomijane. Krzywe stają się 48 prostymi odcinkami na pełny obrót.
- **Odczyt od wersji 0.4:** krzywe splajn i elipsy (jako krawędzie), tekst, tekst wieloliniowy i wartości atrybutów (jako krawędzie w jednoliniowym kroju pisma), kreskowania (ściany z otworami), ściany 3D i wypełnienia bryłowe (ściany) oraz wymiary (rysowane z własnych bloków wymiarowania rysunku).
- **Odczyt od wersji 0.7:** bryły 3D, regiony i ciała (ich dane ACIS, DWG i DXF każdej wersji), każde jako osobna grupa; zamknięte jako bryły. Ściany na powierzchniach innych niż płaszczyzny, walce, stożki, kule, torusy i proste powierzchnie splajnowe są pomijane i wymieniane.
- **Nie odczytywane:** punkty, tabele, wielokrotne odnośniki, obrazy i wszystko w przestrzeni papieru.
- **Jednostki:** pobierane z rysunku, gdy je podaje. W przeciwnym razie ModelCraft pyta.
- **DXF** musi być ASCII. Binarny DXF jest odrzucany.
- **DWG** od AutoCAD R13 do aktualnego formatu (AutoCAD 2018 i nowsze; AC1012 do AC1032) są odczytywane przez własny czytnik DWG ModelCraft, na stronie; jest on częścią ModelCraft, więc działa offline zawsze, gdy działa ModelCraft. Starsze wersje (R12 i wcześniejsze) oraz mocno uszkodzone pliki nie mogą być odczytane; zapisz je jako DXF.
- **Limity:** współrzędne dalej niż 10 000 km od początku układu lub więcej niż 2 miliony odcinków linii są odrzucane.

## Pliki SKP

{{ui:Importuj}} (albo upuść plik na widok) odczytuje pliki SketchUp własnym czytnikiem ModelCraft, na stronie: nic nie jest przesyłane, a działa offline zawsze, gdy działa ModelCraft. Testowano pliki z SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 i 2026; inne wersje powinny też się otworzyć, ale nie były jeszcze sprawdzone. Model wchodzi jako jedna grupa nazwana jak plik. Jedno {{key:Mod+Z}} usuwa go ponownie. Krok po kroku: [Import modelu SKP](topic:import-sketchup-files).

- **Zachowane:** ściany z otworami, grupy (jako grupy) i komponenty (jako komponenty, współdzielone), ich nazwy i umieszczenia, kolory, etykiety grup i komponentów, krawędzie niebędące częścią ściany oraz miękkie i gładkie krawędzie, dzięki czemu zakrzywione powierzchnie pozostają gładkie.
- **Kolory:** własny materiał ściany daje jej kolor. Materiał nałożony na grupę lub komponent staje się farbą tego umieszczenia, więc ściany wewnątrz, bez własnego koloru, ją przyjmują, jak w SketchUp; komponent pomalowany dwoma kolorami pozostaje jednym komponentem.
- **Etykiety** na grupach i komponentach stają się etykietami ModelCraft, widocznymi lub ukrytymi tak, jak były. Etykiety na luźnych ścianach i krawędziach nie są zachowywane (ModelCraft oznacza etykietami tylko grupy i komponenty); pasek stanu je liczy.
- **Ukryte rzeczy wchodzą jako ukryte** (ściany, krawędzie, grupy, komponenty oraz ściany i krawędzie na ukrytej etykiecie), więc widzisz to, co pokazywał SketchUp; {{ui:Pokaż wszystko}} je pokazuje.
- **Tekstury:** ściana pomalowana materiałem z teksturą zachowuje ją, umieszczoną tak, jak w pliku, a plik ModelCraft zachowuje obraz. Tekstura na całej grupie lub komponencie, tekstura brakująca w pliku albo obraz, którego przeglądarki nie wyświetlą (na przykład plik Photoshopa), zachowuje tylko kolor materiału.
- **Pominięte, liczone w pasku stanu:** obrazy umieszczone w modelu. Tekst, wymiary, prowadnice, płaszczyzny przekroju, sceny i style nie są odczytywane.
- **Jednostki:** pliki SketchUp mają wewnątrz cale; ModelCraft je przelicza, więc rozmiary wychodzą poprawnie w dowolnej jednostce.
- **Zapisywanie `.skp`** jeszcze nie jest dostępne. Aby przenieść model z powrotem do SketchUp, wyeksportuj Collada (`.dae`).

## Nieobsługiwane

ModelCraft nie może otworzyć plików 3DS ani IFC, i nie może zapisać plików 3DS, FBX, STEP, `.3dm` ani SketchUp (`.skp`).
