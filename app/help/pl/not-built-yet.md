---
title: Jeszcze nie zbudowano
summary: Czego ta wersja ModelCraft jeszcze nie robi i co zrobić zamiast tego dzisiaj.
keywords: brakujące, jeszcze nie, ograniczenia, plan rozwoju, materiały, tekstury, tekst, warstwy, przytnij, podziel, chmura, aplikacja desktopowa
from: 179fa5e4
---

ModelCraft to wczesna wersja. Ta strona wymienia to, czego jeszcze nie robi, abyś nie szukał tego na darmo, oraz najbliższy sposób, by dziś wykonać zadanie.

## Narzędzia rysowania

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Rysowanie odręczne | Klikaj punkty narzędziem {{ui:Krzywa}} |
| Zmiana liczby segmentów łuku lub okręgu po narysowaniu | Usuń go i narysuj ponownie po wpisaniu `24s` |
| Wybór kroju pisma dla [tekstu 3D](topic:text3d) albo edycja jego słów po umieszczeniu | Usuń go i dodaj tekst ponownie |
| Zmiana kąta przez wpisanie w wymiar kątowy albo zmiana rozmiaru walca z wymiaru jego okręgu | Obróć krawędzie za pomocą {{ui:Obróć}}; skaluj walec za pomocą {{ui:Skaluj}} |
| Wymiary w eksportowanych plikach modeli | Wymiary widać na obrazach, wydrukach i plikach PDF widoku; pliki modeli zawierają tylko geometrię |
| Obcinanie, Dzielenie i Zewnętrzna powłoka | [Suma, Odejmij i Część wspólna](topic:solids) zamkniętych grup albo [przecięcie ścian](topic:intersect) i usunięcie tego, czego nie potrzebujesz |
| Wybór osi obrotu klawiszami strzałek | Kliknij środek {{ui:Obróć}} na ścianie skierowanej w stronę, w którą ma wskazywać oś |
| Blokady na więcej niż jednym kierunku naraz | Zablokuj jeden kierunek klawiszem strzałki, a potem przyciągnij do punktu |
| Zmiana rozmiaru wzdłuż skosu lub od końca wymiaru, który nie leży na narożniku | Umieść wymiar na dwóch narożnikach, wzdłuż krawędzi albo wzdłuż czerwonej, zielonej lub niebieskiej osi |

## Animacja

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Animowanie ścian, krawędzi, pory dnia słońca, stylu albo tego, co jest ukryte | Zamień ruchomą część w grupę lub komponent; dla innej pory dnia wyrenderuj osobny film |
| Kamera podążająca za narysowaną ścieżką albo patrząca na poruszający się obiekt | Ustaw więcej kluczy kamery po drodze ([Animacja](topic:animation)) |
| Dźwięk w filmach oraz filmy wysokiej jakości (śledzenie ścieżek) bez WebGPU | Dodaj dźwięk w edytorze wideo; bez WebGPU wyrenderuj film szybkim renderem ([Renderowanie wideo](topic:animation#render-the-video)) |
| Animowane lampy (jasność, rozproszenie, kolor) w wyrenderowanym filmie, kąt obiektywu animowany bez kluczy kamery w filmie, animowanie materiałów albo ustawień renderowania | Lampy animują się w widoku; w filmie dla przybliżenia dodaj też klucze kamery; renderuj osobne filmy dla różnych ustawień lamp ([Animuj dowolną właściwość](topic:animate)) |
| Przenoszenie wag lub kości z jednej strony na drugą, widoczne koperty kości, cieniowanie wag punkt po punkcie (pokazują się na ścianę), podgląd pozowanej siatki podczas malowania wag | Maluj obie strony albo zrób jedną połowę i użyj modyfikatora Lustro przed dodaniem szkieletu; przełączaj między Malowaniem wag a Pozą, aby sprawdzić |
| Kości odczytywane z plików glTF, FBX lub USD jako szkielet oraz zapisywanie szkieletów do tych plików | Modele z skinningiem wchodzą w spoczynku z wagami z pliku; dodaj kości w kolejności stawów pliku, a potem {{ui:Użyj wag z pliku}} ([Animacja](topic:animate)) |
| Przesuwanie celu IK lub bieguna przeciąganiem w widoku, wybór przestrzeni więzu (lokalnej lub światowej), rozciąganie łańcuchów IK, IK wzdłuż krzywej | Wpisz punkt celu albo wskaż obiekt i przesuń go; trzymaj łańcuchy w ich długościach |
| Tkaniny, płyny, miękkie bryły, przeguby i zawiasy między bryłami sztywnymi, kolizja z dokładnym kształtem obiektu (wokół niego są tylko pudełka i kule), symulacja na żywo podczas odtwarzania, prędkość początkowa lub obrót (bryły zaczynają w spoczynku) | Zapiecz bryły sztywne i odtwórz klucze; zbuduj zawias z kluczy; podziel dziwny kształt na pudełka (grupy) |
| Eksport animacji do glTF lub innych plików modeli | Wyrenderuj wideo; plik `.modelcraft` oraz [plik USD](topic:usd) zapisany przez ModelCraft przechowują ją dla ModelCraft |
| Wpisywanie komentarza albo tytułu problemu w VR, notatki głosowe, ręczne przesuwanie płaszczyzny przekroju w VR | Umieść problem w VR, a potem dopisz jego treść w programie do BCF; ustaw płaszczyznę przekroju w widoku przed wejściem: zobacz [Przegląd modelu w gogli VR](topic:vr-review) |
| Widok ludzi przy biurku w VR (widać tylko osoby w VR), nagrywanie spaceru po VR | Poproś ich o dołączenie w VR albo zrób [animację](topic:animation) spaceru |

## Siatki

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Rzeźbienie według poziomów (multiresolution) oraz Szczegół usuwający trójkąty, które stały się bardzo małe | [Rzeźb](topic:sculpt) podzieloną siatkę; {{ui:Przebuduj siatkę}}, aby ją ponownie wyrównać |
| Przebudowa w czterokątne ściany dopasowane do kształtu | {{ui:Przebuduj siatkę}} (równe trójkąty), a potem odbuduj ją przez [retopologię](topic:mesh-edit#retopology) |
| Wagi malowane na wierzchołkach dla modyfikatorów (Przemieszczenie, Wygładzanie i Owinięcie działają na całej siatce) | Zastosuj modyfikator, a potem rzeźb lub edytuj części, które tego wymagają |
| Kopiowanie i wklejanie wierzchołków, krawędzi lub ścian, cięcie nożem kończące się wewnątrz ściany, krawędzie drutowe bez ściany | Duplikuj siatkę w przestrzeni modelu; tnij nożem od krawędzi do krawędzi; [wyciągnij](topic:mesh-edit#change-the-shape) otwarte krawędzie w ściany |

## Organizowanie i oglądanie

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Warstwy planów sytuacyjnych DWG i DXF jako etykiety | Plan sytuacyjny wchodzi jako jedna grupa: rozbij go i zgrupuj części, które chcesz oznaczyć etykietą |
| Kilka cięć przekroju naraz, pudełko przekroju albo kontur przekroju eksportowany jako rysunek | Jedna [płaszczyzna przekroju](topic:sections) tnie naraz; eksportuj widok jako obraz |
| Pokazywanie miękkich krawędzi przerywanych albo wygładzanie podczas przeciągania suwaka | [Wygładź według kąta](topic:soften) w Informacjach o obiekcie, a cofnij, aby spróbować innego kąta |
| Internetowa biblioteka modeli do przeszukiwania albo komponenty z opcjami do wyboru (kolor, styl) | [Biblioteka startowa](topic:starter); importuj modele Collada, OBJ lub glTF; [rozciągnij](topic:stretch) kopię do rozmiaru |
| Umieszczanie roślin z biblioteki roślin | [Rozrzuć](topic:live-view#scatter-plants-rocks-and-people) rośliny w widoku na żywo albo umieść drzewo z biblioteki startowej |
| Niezależne kopie grupy | Zamień ją w komponent, a potem użyj {{ui:Uczyń niepowtarzalnym}} (zobacz [Rozwiązywanie problemów](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderowanie

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Renderowanie w widoku (obszar roboczy {{ui:Renderuj}}), kolejka renderowania oraz opcje kamery, obrazu nieba, mgły i mieszania świateł bez WebGPU | {{ui:Wyrenderuj obraz…}} w {{ui:Wysoka jakość}} używa tam renderera śledzenia ścieżek WebGL, bez tych opcji ([Renderowanie obrazu](topic:render#high-quality)) |
| Inny program rysujący obraz Render bez dodatku silnika renderowania (CadCraft nigdy nie uruchamia programu na licencji GNU GPL); kamery panoramiczne lub stereo i obraz nieba przez inny program; wtyczka Unreal Engine (pliki są zapisywane, wtyczka, która je otwiera, nie jest wydana) | Nasze silniki Fast i Path tracer; silnik dodatku ([narysuj obraz w innym programie](topic:render-other-program)); plik folderu USD, glTF lub Unreal z listy Silnik, do zabrania do dowolnego programu |
| Rozrzucone rośliny i skały w {{ui:Wyrenderuj obraz…}} | Pokazują się w [widoku na żywo](topic:live-view), jego panoramach, przeglądarce i wideo |

## Materiały i kolory

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Dane wejściowe inne niż kolor podstawowy, chropowatość, metaliczność, nieprzezroczystość, normalna i emisja zmieniające się po powierzchni w obrazach wysokiej jakości (używają średniej) | [Twórz materiały węzłami](topic:shading): połącz je mimo to, widok pokaże zmienność |
| Przemieszczenie na ścianach wypychanych i ciągnionych | Zamień obiekt w siatkę, aby użyć przemieszczenia |
| Udostępnianie własnych materiałów do Biblioteki z aplikacji oraz spakowane mapy (ARM/ORM) lub EXR w importowanym zestawie tekstur | Zachowaj je w pliku; importuj osobne mapy jako PNG lub JPEG |
| Materiały pliku w sesjach Live TeamWork (zostają na komputerze, który je utworzył) | Zapisz plik i udostępnij go |
| Naklejki zginające się wokół zakrzywionych powierzchni, naklejki objęte cofaniem albo malowanie tekstur kilku ścian naraz przez szew | Umieszczaj mniejsze naklejki na każdej części; maluj każdą stronę szwu osobno |
| Zapiekanie na ścianach wypychanych i ciągnionych, zapiekanie kilku obiektów w jeden obraz, klatka, którą kształtujesz ręcznie, albo zapieczone oświetlenie z lamp | Zamień na siatkę i rozwiń ją; zapiecz każdy obiekt osobno; zwiększ odległość wyszukiwania; wyrenderuj obraz dla światła lamp |
| Malowanie chropowatości, metaliczności lub wysokości, malowanie obrazami (pieczątkami) i malowanie tekstur większych niż 512 × 512 | Maluj kolor podstawowy tutaj; zrób inne mapy w edytorze obrazów i importuj je jako zestaw tekstur |
| Tekstury w eksportach Collada, STL, PLY, 3MF, IFC, DWG i DXF oraz grafy węzłów materiałów pliku w eksportowanych modelach | Te formaty dostają kolor każdego materiału; glTF i OBJ zachowują zaimportowane tekstury; eksportuj materiał osobno jako [MaterialX](topic:shading#materialx); [USD](topic:usd) zachowuje cały model dla ModelCraft |
| Tekstury w plikach Collada | Są liczone i pomijane przy imporcie; tekstury w plikach `.skp` i `.glb` są wczytywane |

## Pliki

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Zapisywanie plików SketchUp oraz tekstu i wymiarów z nich | [Import](topic:import-sketchup-files) zachowuje ściany, kolory i tekstury; eksportuj Collada (`.dae`), aby wrócić do SketchUp |
| Wymiary i prowadnice w eksporcie DWG i DXF | Dodaj je w programie CAD po eksporcie |
| Punkty, tabele i wielokrotne odnośniki z DWG i DXF | Są liczone i pomijane; tekst wchodzi jako pismo jednoliniowe, a nie czcionka rysunku |
| Powierzchnie, siatki, tabele i wielokrotne odnośniki z DWG i DXF; ściany brył 3D na swobodnych, wyciąganych, lofowanych lub innych powierzchniach | Są liczone i też pomijane (same bryły 3D wchodzą). Wyeksportuj te części z programu CAD jako OBJ lub Collada i importuj ten plik |
| Typy, właściwości lub materiały IFC | Eksport IFC ma [kondygnacje](topic:formats#ifc-ifc) i ogólne elementy; resztę dodaj w programie BIM |
| Wysyłanie modelu prosto do BimCraft | Eksportuj {{ui:IFC dla BimCraft (.ifc)}} i otwórz go w BimCraft |
| Luźne krawędzie w glTF i STL | Użyj OBJ lub Collada do linii |
| Materiały glTF i FBX poza kolorem podstawowym (metal, chropowatość, mapy normalnych, szkło, lakier, połysk…) | Są odczytywane i wyświetlane; ModelCraft zachowuje kolor podstawowy lub teksturę. Odtwórz wygląd w [obszarze cieniowania](topic:shading) |
| Kości, animacje i cele morfingu glTF | Modele z skinningiem wchodzą w spoczynku; animuj na [osi czasu](topic:animation) |
| Kolory i nazwy części zestawu z plików STEP | Części wchodzą jako siatki w prawdziwym rozmiarze; [pomaluj](topic:paint) i nazwij je po imporcie |
| Obiekty SubD, tekst, wymiary i światła z plików `.3dm` | Zobacz [co jest pomijane](topic:import-3dm-files#what-is-left-out-and-said); zamień SubD na siatki w programie, który utworzył plik |
| Tekstury KTX2 i warianty materiałów w glTF | Eksportuj z teksturami PNG lub JPEG; używany jest wariant domyślny |
| Zapis instancjonowania glTF (EXT_mesh_gpu_instancing) | Komponenty są zapisywane raz i umieszczane wiele razy, co odczytuje każda przeglądarka |
| Animacja Alembic (każda próbka pamięci podręcznej), punkty i krzywe Alembic, zapis Alembic | Wchodzi pierwsza próbka; animuj na [osi czasu](topic:animation); zapisz w glTF, USD lub OBJ |
| Mapy wypukłości i normalnych w materiałach OBJ | Wchodzi tylko obraz koloru (`map_Kd`) |
| Kości i animacja FBX, eksport FBX, pliki FBX 6 | Modele z skinningiem wchodzą w spoczynku; eksportuj glTF; zapisz stare pliki jako FBX 2011 lub nowsze |
| Skiny, morfy, kamery, światła, transformacje look-at i skew oraz odwołania zewnętrzne w Collada | Pomijane przy imporcie i liczone w komunikacie |
| Pliki kopii zapasowych | {{ui:Zapisz jako}} ({{key:Mod+Shift+S}}) zapisuje kolejną kopię. Po awarii ModelCraft proponuje odzyskanie niezapisanej pracy („Odzyskać swoją pracę?”) |
| Zapis w chmurze i synchronizacja między komputerami | Jeszcze niedostępne. Zapisuj pliki na swoim komputerze i kopiuj je tam, gdzie są potrzebne |

## Druk 3D

| Jeszcze nie | Zamiast tego, dzisiaj |
|---|---|
| Prawdziwe podpory slicera (interfejsy, tratwa, dokładny wzór podpór) | [Podgląd podpór](topic:print-tools#supports-preview) pokazuje, gdzie i ile mniej więcej; podgląd twojego slicera pokazuje prawdziwe |
| Rozplątywanie części, która przechodzi przez siebie, albo krawędzi, gdzie spotyka się trzy lub więcej ścian | [Napraw](topic:print-tools#repair) wymienia je wraz z miejscem; użyj [Przecięcia ścian](topic:intersect) i usuń to, co jest w środku |
| Wzory wypełnienia i krata wewnątrz pustego wnętrza | [Drąż](topic:print-tools#hollow) zostawia je puste; slicer dodaje wypełnienie do litej części |
| Detale za małe dla twojej dyszy (inne niż ścianki) | [Grubość ścianek](topic:print-tools#wall-thickness) znajduje cienkie ścianki; podgląd warstw slicera pokazuje resztę |

## Wydajność

Cofnij zachowuje kopię modelu dla każdego kroku (a [siatka](topic:meshes) zachowuje tylko to, co się zmieniło), więc bardzo duże importy geometrii z wypychania/ciągnięcia spowalniają każdą edycję. Ogranicz importy do niezbędnego minimum, a historię wyczyść, zapisując i ponownie otwierając plik.

## Aplikacje i platformy

- **Komputer:** ModelCraft działa w przeglądarce na Macu, Windows i Linuksie oraz w CadCraft Studio, aplikacji desktopowej ze wszystkimi ośmioma aplikacjami w jednej instalacji. Na Androidzie CadCraft Studio instaluje się z pliku APK na getcadcraft.com/download. Nie ma jeszcze wersji dla iPada ani iPhone'a.
- **Dotyk:** zobacz [Orbita, przesuwanie widoku i powiększanie](topic:orbit-pan-zoom) dla gestów palcami. Nacisk pióra ustawia pędzel w [Rzeźbieniu](topic:sculpt); w pozostałych miejscach nacisk i nachylenie pióra nie są używane.
- **Arkusze:** ModelCraft [drukuje jeden widok na stronę](topic:export-model#print-the-view-or-save-it-as-a-pdf); nie ma arkuszy układu z kilkoma widokami ani tabliczki rysunkowej. Eksportuj do przyjaznych CadCraft plików DWG/DXF, aby uzyskać rysunki w skali.
