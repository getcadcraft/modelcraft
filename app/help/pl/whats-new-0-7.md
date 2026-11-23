---
title: Co nowego w 0.7 (wcześniej)
summary: Siatki z modyfikatorami, rzeźbienie, UV i obiekty krzywych, śledzenie promieni na karcie graficznej i obszar Render, widok na żywo w czasie rzeczywistym z rozrzutem i panoramami, materiały z węzłów, obszar Animacja z kośćmi i fizyką, pliki USD, FBX, STEP i .3dm oraz narzędzia druku ze stylem Początkujący.
keywords: co nowego 0.7, wcześniejsze wydanie, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, siatka, siatki, obszar siatki, modyfikatory, podział powierzchni, zagięcie, uv, rozwijanie, szwy, krzywe, obiekty krzywych, nurbs, bezier, rzeźba, przebudowa siatki, retopologia, podział, obliczenia, śledzenie promieni, webgpu, obszar render, kolejka renderowania, mp4, exr, odszumianie, niebo fizyczne, hdri, ies, głębia ostrości, mieszanie świateł, mgła, kaustyka, widok na żywo, czas rzeczywisty, spacer, rozrzut, panorama, wycieczka, przeglądarka, cieniowanie, węzły, materiały węzłowe, biblioteka materiałów, materialx, naklejki, malowanie tekstur, zapiekanie, animacja, edytor wykresów, klipy, klucze kształtu, sterowniki, szkielet, kości, skinning, ik, ograniczenia, fizyka, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, bryły 3d, podpory, grubość ścianek, drążenie, naprawa, początkujący, asystenci, twój komputer, jednostki, portugalski
from: 16d52810
---

To jest to, co zmieniło się w ModelCraft 0.7 w porównaniu z 0.6. ModelCraft modeluje teraz siatki oraz geometrię push/pull, renderuje na karcie graficznej i ma obszar pracy dla każdego rodzaju pracy: wybierz go na liście {{ui:Obszar roboczy}} po lewej stronie paska narzędzi.

## Nowe

### Siatki

- **Siatki.** Zaznacz grupę lub komponent i kliknij {{ui:Zamień na siatkę}} w {{ui:Informacje o obiekcie}}: stanie się siatką ze ścianami o dowolnej liczbie narożników, które mogą nieść współrzędne tekstury, normalne, kolory i wagi. {{ui:Zamień na geometrię}} zamienia z powrotem. Cofnięcie na siatce zachowuje tylko to, co dany krok zmienił. Plik z siatką wymaga ModelCraft 0.7, by się otworzyć. Zob. [Siatki](topic:meshes).
- **Obszar Siatka.** Kliknij dwukrotnie siatkę albo wybierz {{ui:Siatka}} na liście {{ui:Obszar roboczy}}, by edytować jej wierzchołki, krawędzie i ściany: pętle i pierścienie, edycję proporcjonalną, wyciągnięcie, wcięcie, fazowanie, cięcie pętlą, nóż, dzielenie na pół, obrót, scalanie, rozpuszczanie, wypełnianie, wypełnianie siatką, mostek i ślizg, a ustawienia ostatniej operacji zmienia się później w panelu. Zacznij od płaszczyzny, sześcianu, kuli, torusa i innych. Działają klawisze push/pull i klawisze modelowania. Zob. [Edycja siatki w obszarze Siatka](topic:mesh-edit).
- **Modyfikatory.** Lustro, macierz, powierzchnia podziału, fazowanie, pogrubienie, boolean, przemieszczenie, spawanie, decymacja, wygładzanie, krata, deformacja krzywą i shrinkwrap zmieniają to, co siatka pokazuje, bez zmiany samej siatki. Ustaw je w stosie, włączaj i wyłączaj każdy dla widoku i renderów, a {{ui:Zastosuj}} zastosuj jeden, gdy chcesz go na stałe. Zob. [Modyfikatory na siatce](topic:modifiers).
- **Podział z zagięciami.** {{ui:Zagięcie}} w obszarze Siatka utrzymuje wybrane krawędzie ostrymi pod powierzchnią podziału. Renderowanie może używać więcej poziomów niż widok, a przy dużej siatce widok pokazuje niższy poziom i mówi o tym. Zob. [Powierzchnia podziału](topic:modifiers#subdivision-surface).
- **Obiekty krzywych.** Krzywe Béziera, NURBS i proste odcinki, które tworzą rurę, taśmę, zwężenie lub wypełnioną płytę, a także tekst jako krzywą. Edytuj ich punkty w obszarze {{ui:Krzywa}}; {{ui:Na siatkę}}, gdy kształt jest dobry. Zob. [Obiekty krzywych](topic:curves).
- **Obszar UV.** Oznacz szwy (albo pozwól ModelCraft oznaczyć je na ostrych krawędziach), {{ui:Rozwiń}} i {{ui:Upakuj}}, albo zrzutuj przez pudełko, walec, kulę lub widok. Edytor UV obok widoku 3D przesuwa, obraca i skaluje kawałki, a szachownica i kolory rozciągnięcia pokazują wynik. Zob. [Rozłóż współrzędne UV siatki](topic:uv).
- **Rzeźbienie.** Obszar {{ui:Rzeźba}} ma pędzle: rysowanie, glina, wygładzanie, chwytanie, nadmuchiwanie, zagięcie, ściskanie, spłaszczanie i maska, lustrzane odbicie w osi X oraz {{ui:Detal}}, który dodaje trójkąty tam, gdzie rzeźbisz. Nacisk pióra ustawia rozmiar i siłę pędzla. Każde pociągnięcie to jeden krok cofnięcia. Zob. [Rzeźbienie siatki](topic:sculpt).
- **Przebudowa i retopologia.** {{ui:Przebuduj siatkę}} tworzy całą siatkę od nowa jako równe trójkąty, zamykając dziury i łącząc nakładające się kawałki. Aby zbudować czystą siatkę nad szczegółową, wybierz ją w {{ui:Retopologia}}: punkty, które przesuniesz, lądują na jej powierzchni. Zob. [Przebuduj siatkę](topic:mesh-edit#remesh).

### Rysowanie

- **Podział krawędzi lub krzywej.** Narzędzie {{ui:Podziel}} zaznacza cięcia, gdy przesuwasz się wzdłuż krawędzi, i dzieli kliknięciem albo wpisaną liczbą; przy zaznaczonej krawędzi, łuku lub okręgu wpisz `/5`; {{ui:Informacje o obiekcie}} › {{ui:Podziel…}} pyta o liczbę, dla tabletów. Łuk lub okrąg dzieli się na równe kąty na prawdziwym łuku. Zob. [Podziel krawędź lub krzywą na równe części](topic:divide).
- **Obliczenia w polu wartości.** Wpisz `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` albo `2*450mm` dla dowolnej długości, a `90/2` dla kąta. Obliczenie, którego nie da się wykonać, mówi, co jest nie tak i gdzie. Zob. [Obliczenia](topic:value-box#calculations).

### Renderowanie

- **Śledzenie promieni na karcie graficznej.** {{ui:Wyrenderuj obraz…}} › {{ui:Wysoka jakość (śledzenie promieni)}} uruchamia własny silnik śledzenia promieni CadCraft na karcie graficznej, gdy przeglądarka ma WebGPU; linia pod obrazem mówi, który silnik go wykonał. {{ui:Zatrzymaj}} zachowuje obraz, a {{ui:Wznów}} kontynuuje od tego miejsca. Bez WebGPU obraz jest liczony przez WebGL, jak wcześniej. Zob. [Wysoka jakość](topic:render#high-quality).
- **Renderowanie w widoku.** Obszar {{ui:Renderuj}} śledzi promienie samego widoku i zaczyna od nowa, gdy orbitujesz lub edytujesz: renderuj {{ui:Obszar}}, kliknij, by ustawić {{ui:Ostrość}}, ustaw {{ui:Detal}}. Wymaga WebGPU. Zob. [Renderowanie w widoku](topic:render#render-in-the-view).
- **Materiały, światła i niebo.** Obrazy wysokiej jakości cieniują każdą powierzchnię modelem materiałów OpenPBR (powłoki, meszek, cienkie warstwy, kolorowe szkło, świecenie). Z WebGPU jest też {{ui:Fizyczne niebo}} z {{ui:Zamglenie}}, {{ui:Obraz nieba (HDRI)}} i profile świateł IES producentów dla lamp. Zob. [Niebo i profile świateł](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Aparat jak z fotografii.** Ekspozycja z przysłony, migawki i ISO we wszystkich trybach; z WebGPU także głębia ostrości, perspektywa dwupunktowa, balans bieli, panoramy 360° (także stereo) i mapy sześcienne. Zob. [Aparat](topic:render#the-camera).
- **Dokończ obraz po renderze.** Ustaw gradację ({{ui:ACES filmowy}}, {{ui:AgX}}, {{ui:Filmowy}} albo {{ui:Standardowy}}, kontrast, poświatę, blask, winietę, tabelę kolorów `.cube`), mieszaj niebo, słońce i każdą grupę lamp oraz oglądaj elementy renderu po kolei, bez ponownego renderowania. Pozostałe ziarno usuwa odszumiacz na Twoim komputerze. Zob. [Dokończ obraz](topic:render#finish-the-picture) i [Mieszanie świateł po renderze](topic:render#mix-the-lights-after-the-render).
- **Więcej sposobów zapisu renderu.** PNG 16-bitowy, wielowarstwowy EXR ze wszystkimi elementami renderu i grupami świateł oraz plik renderu (`.ccrender`), który otwiera się ponownie z mieszaniem i gradacją. Zob. [Zapisz obraz](topic:render#save-the-picture).
- **Mgła, dym i kaustyka.** Mgła i zamglenie oświetlone słońcem i lampami, z promieniami światła; jedna kolumna dymu lub chmura; kaustyka pod szkłem i lustrami; próbkowanie adaptacyjne, które przestaje na pikselach już czystych. Tylko na karcie graficznej. Zob. [Mgła, dym, szum i kaustyka](topic:render#fog-smoke-noise-and-caustics).
- **Kolejka renderowania i MP4.** Dodawaj obrazy wysokiej jakości i całe animacje do {{ui:Kolejka renderowania}}; renderują się jeden po drugim, a kolejka przetrwa zamknięcie strony. Wymaga WebGPU. Filmy można też zapisać jako MP4, tam gdzie przeglądarka potrafi to zrobić. Zob. [Kolejka renderowania](topic:render#the-render-queue) i [Renderowanie filmu](topic:animation#render-the-video).

### Widok na żywo i prezentacje

- **Widok na żywo.** {{ui:Eksport}} › {{ui:Widok na żywo}} pokazuje model w wyglądzie w czasie rzeczywistym obok widoku, śledząc każdą edycję i kamerę: cienie słońca, materiały, lampy i światło odbite od ścian. Przejdź przez niego w trybie {{ui:Spacer}}, przeciągnij {{ui:Godzina}} i {{ui:Miesiąc}}, by przesunąć słońce, albo przenieś go do {{ui:Nowe okno}}. Używa WebGPU tam, gdzie przeglądarka je ma, w innym razie WebGL 2. Zob. [Widok na żywo](topic:live-view).
- **Rozrzut.** Rozsypuj trawę, kwiaty, kamienie, drzewa i ludzi po powierzchniach albo pędzlem, z siedmiu nowych pozycji otoczenia i reszty biblioteki; zestawy są zapisane w pliku. Zob. [Rozrzuć rośliny, kamienie i ludzi](topic:live-view#scatter-plants-rocks-and-people).
- **Udostępnianie.** Panorama 360°, wycieczka po panoramach ze strzałkami między punktami, samodzielna przeglądarka modelu (jedna strona internetowa, która otwiera się offline i niczego nie ładuje z internetu) oraz film ze ścieżką kamery, wszystko w wyglądzie w czasie rzeczywistym. Zob. [Udostępnianie](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR w wyglądzie w czasie rzeczywistym.** {{ui:Przegląd w VR}} pokazuje model z materiałami, niebem, cieniem słońca, lampami, rozrzuconymi elementami i światłem odbitym. Zob. [Jak to wygląda](topic:vr-review#what-it-looks-like).

### Materiały

- **Materiały z węzłów.** Obszar {{ui:Cieniowanie}} buduje własne materiały pliku jako grafy węzłów: obrazy, szum i szachownice, komórki Woronoja, fale, cegły, płytki, drewno, marmur, gradienty, zabrudzenie i zużycie krawędzi, operacje na kolorach, matematykę, mapy wypukłości i normalne, w pełny materiał OpenPBR. Widok pokazuje każdą zmianę od razu. Zob. [Twórz materiały z węzłów](topic:shading).
- **Biblioteka materiałów i własne zestawy tekstur.** Panel Cieniowanie wymienia materiały Biblioteki: szesnaście zestawów tekstur CC0, każdy z podanym autorem. Kliknij jeden, by go użyć, albo przeciągnij go na ścianę. {{ui:Obrazy lub zip…}} albo {{ui:Folder…}} tworzy materiał z Twoich własnych map, rozpoznawanych po nazwach plików. Zob. [Materiały z biblioteki](topic:shading#materials-from-the-library).
- **MaterialX w obie strony.** Eksportuj materiał jako MaterialX (OpenPBR Surface albo Standard Surface, tekstury jako PNG) i importuj pliki MaterialX wraz z obrazami. Zob. [MaterialX](topic:shading#materialx).
- **Naklejki i malowanie tekstur.** Umieść obraz na powierzchni jako naklejkę z własnym materiałem i maluj po obrazie materiału okrągłym pędzlem. Zob. [Naklejki](topic:shading#decals) i [Malowanie na teksturze](topic:shading#paint-on-the-texture).
- **Zapiekanie tekstur.** Zapiekaj oklucję otoczenia, krzywiznę, oświetlenie i normalne szczegółowego obiektu w obrazy wzdłuż UV siatki, na rdzeniach procesora komputera. Zob. [Zapiekanie tekstur](topic:shading#bake-textures).

### Animacja

- **Obszar Animacja.** Klucz położenie, obrót i rozmiar obiektu, jasność, rozproszenie i kolor każdej lampy oraz kąt obiektywu, prosto w panelu. Oś czasu dostaje widok {{ui:Krzywe}} (uchwyty Béziera, powtórzenia) i widok {{ui:Klipy}}, który zapisuje klucze jako akcje do ponownego umieszczenia i mieszania; klucze z kilku wierszy można przesuwać, rozciągać, kopiować i wklejać. Zob. [Animuj dowolną właściwość](topic:animate).
- **Klucze kształtu i sterowniki.** Siatka zawiera inne swoje kształty, mieszane suwakami, które można kluczować, albo ustawiane z innych wartości przez mały wyraz. Zob. [Klucze kształtu](topic:animate#shape-keys-morphs) i [Sterowniki](topic:animate#drivers).
- **Szkielety.** Umieść kości w siatce, pozwól {{ui:Wagi automatyczne}} podzielić punkty między nimi albo maluj wagi, a kości ustawiaj i kluczuj; skinning liniowy lub dwukwaternionowy. Zob. [Szkielety](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK i ograniczenia.** Sięganie (IK) z biegunem, patrzenie na, kopiowanie transformacji, limity, dziecko-rodzic i podążanie za ścieżką, dla kości i obiektów. Zob. [IK i ograniczenia](topic:animate#ik-and-constraints).
- **Fizyka.** Grupy i komponenty spadają, układają się w stos i zderzają jako pudełka lub kule, a {{ui:Wypal fizykę}} zachowuje wynik jako klucze. Zob. [Fizyka](topic:animate#physics-drop-stack-and-collide).

### Pliki

- **USD.** {{ui:Zapisz jako}} ({{key:Mod+Shift+S}}) zapisuje model jako `.usda`, `.usdc` albo `.usdz`, a plik USD zapisany przez ModelCraft otwiera się ponownie bez utraty czegokolwiek. USD z innych programów otwiera się lub importuje jako siatki, grupy, komponenty, lampy i kamery. {{ui:Zapisz}} nadal zapisuje `.modelcraft`. Zob. [Zapisz, otwórz i eksportuj USD](topic:usd).
- **glTF, w całości.** Pliki glTF wchodzą jako edytowalne siatki z normalnymi, UV, kolorami wierzchołków i teksturami, węzły jako grupy, światła jako lampy, a kamery jako sceny; pliki Draco i meshopt też; plik `.gltf` otwiera się, gdy upuścisz go razem z plikami. Eksport zapisuje siatki, tekstury, lampy i kamery. Zob. [glTF](topic:formats#gltf-glb-gltf).
- **Import FBX, PLY, STL i Alembic.** FBX 2011 i nowsze (siatki, zestawy UV, materiały, osadzone tekstury, światła, kamery), PLY i STL z kolorami oraz pamięci podręczne Alembic przy pierwszej próbce. OBJ wchodzi wraz z plikiem `.mtl` i obrazami, gdy upuścisz je razem. Zob. [Formaty plików szczegółowo](topic:formats).
- **Więcej eksportów.** PLY z kolorami, STL z kolorami malowanych ścian oraz OBJ z teksturami jako jedno archiwum zip. Zob. [Formaty plików szczegółowo](topic:formats).
- **Pliki STEP.** {{ui:Importuj}} czyta części i złożenia STEP (AP203, AP214, AP242) jako zamknięte siatki w ich prawdziwym rozmiarze, każdą część tam, gdzie plik ją umieszcza. Zob. [STEP](topic:formats#step-step-stp).
- **Pliki .3dm.** {{ui:Importuj}} czyta modele `.3dm`: siatki, polipowierzchnie i wyciągnięcia (z siatek zapisanych w pliku, w przeciwnym razie triangulowane przez ModelCraft), krzywe jako krawędzie, bloki jako komponenty i warstwy jako etykiety. Zob. [Importuj model .3dm](topic:import-3dm-files).
- **Bryły 3D z DWG i DXF.** Import rysunku przynosi teraz także jego bryły 3D, regiony i ciała, każde jako osobną grupę, zamknięte jako bryły. Zob. [Model na planie sytuacyjnym](topic:site-plan#what-comes-in).

### Druk 3D

- **Narzędzia druku.** {{ui:Sprawdź do druku 3D (STL lub 3MF)…}} › **Narzędzia druku** ma {{ui:Podgląd podpór}} (przewisy, kolumny lub podpory drzewiaste, mniej więcej ile materiału), {{ui:Grubość ścianek}} (ścianki zbyt cienkie do wydruku, wymienione z {{ui:Pokaż}}), {{ui:Drąż}} (ścianki o grubości, którą podasz, z otworami odpływowymi) i {{ui:Napraw}} (każda poprawka wymieniona; nakładające się części łączą się tylko na Twoje życzenie). Drąż i Napraw dają grupę, której płaskie boki są pojedynczymi ścianami, albo siatkę, gdy wynik nie zamknąłby się lub ma za dużo ścian; wiersz stanu mówi, która. Zob. [Podpory, grubość ścianek, drążenie i naprawa](topic:print-tools).
- **Styl Początkujący.** {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Menu, klawisze i mysz}} › {{ui:Początkujący}}: duże przyciski do wstawiania kształtów i otworów, przesuwania, wyrównywania i {{ui:Grupa}}, by otwory się wycinały, a potem sprawdzenia modelu do druku. Zob. [Styl Początkujący](topic:beginner).

### Asystenci i Twój komputer

- **Więcej dla asystentów AI.** Asystent może teraz wyświetlać listę ścian i materiałów, wykonywać push/pull, malować, tworzyć grupy, dodawać i pokazywać sceny, dodawać siatki, edytować stosy modyfikatorów, eksportować USD, renderować obraz i zapełniać kolejkę renderowania. Zob. [Używanie ModelCraft z asystentem AI](topic:use-with-ai-assistants).
- **Twój komputer.** {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Renderowanie}} › {{ui:Ten komputer}} pokazuje grafikę, rdzenie procesora i pamięć, które ta przeglądarka pozwala aplikacji użyć, oraz poziom, który ustala, gdzie zaczyna się widok na żywo. Zob. [Czym renderuje Twój komputer](topic:your-machine).

## Naprawione

- {{ui:Bryły}} › {{ui:Suma}}, {{ui:Odejmij}} i {{ui:Część wspólna}} mogły zwrócić grupę, która nie była zamknięta, w dowolnym rozmiarze. Teraz się zamykają.
- {{ui:Bryły}} › {{ui:Odejmij}} było wyszarzone, gdy nic nie było zaznaczone, choć po wyborze wybiera dwie części po kolei.
- W osi czasu animacji wpisywane klawisze nigdzie nie trafiały, a {{key:Mod+S}} też. {{key:Mod+Z}} i {{key:Mod+Y}} tam są cofnięciem i ponowieniem osi czasu; inne klawisze {{key:Mod}} trafiają do aplikacji.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma po jednej liście dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami, jakie dają definicje jednostek (amerykańska stopa geodezyjna to osobna jednostka). Wyłącz jednostki, których nigdy nie używasz, a znikną z list; gwiazdka przy jednej sprawia, że nowa praca zaczyna się w niej. Plik zawsze zachowuje swoją jednostkę. W ModelCraft lista jednostek obok pola wartości podąża za przełącznikami (jednostka własna modelu zawsze w niej zostaje), gwiazdka ustawia jednostkę nowego modelu (gdy ModelCraft ją ma), a długość wpisana z oznaczeniem dowolnej jednostki jest odczytywana w tej jednostce. Zob. [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma smukły pasek tytułu: przeciągnij go, by dokować lub odłączyć panel, upuść na pasku innego panelu, by dzielić jedną ramkę jako karty, przypnij, by chował się do krawędzi, albo ukryj i przywołaj z krawędzi. Zob. [Ułóż panele](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu poza rysunek; wraca tam, gdzie je zostawiłeś. Kliknij dwukrotnie pasek tytułu, by ponownie je wycentrować. Zob. [Przesuwanie okna dialogowego](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć gotowych próśb do Twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj pytania o model, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, których używa, i uprawnieniami, których potrzebuje, a każda odtwarzana przez nasze testy. Aplikacje nie zawierają AI. Zob. [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Ten język oraz **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz pełne tłumaczenie aplikacji, jako wersje robocze, jeszcze nieprzejrzane przez rodzimego użytkownika języka. Tematy pomocy są po angielsku.

## Nieobecne w tej wersji

- **0.7 nie ma podpisu kodu.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, bo walidacja certyfikatu jeszcze nie przyszła. Sprawdź SHA-256 przy każdym pliku na getcadcraft.com/download. W systemie Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami i nie ma jeszcze wersji na iPada ani iPhone'a.
- Listy kątów i nachylenia w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- Renderowanie na karcie graficznej (WebGPU) było testowane tutaj tylko na zastępczym oprogramowaniu, jeszcze nie na prawdziwych kartach graficznych, więc najpierw wyrenderuj coś małego na swoim komputerze. Tak samo jest z widokiem na żywo, a VR był sprawdzany tylko na emulatorze gogli.
- Bez WebGPU nie ma obszaru Renderuj ani kolejki renderowania, a obrazy wysokiej jakości nie mają głębi ostrości, nieba fizycznego, obrazu nieba, mgły, dymu, kaustyki ani mieszania świateł.
- {{ui:Wyrenderuj obraz…}} nie rysuje jeszcze rozrzuconych elementów; są widoczne w widoku na żywo, jego panoramach, przeglądarce i filmie.
- Lampy animują się w widoku, ale wyrenderowany film używa lamp takich, jakie są w chwili startu.
- Kości i animacja nie są jeszcze odczytywane ani zapisywane w plikach glTF, FBX ani USD (modele z szkieletem wchodzą w pozycji spoczynkowej, z wagami), a materiały glTF i FBX poza kolorem bazowym lub teksturą nie są jeszcze zachowywane.
- Kolory STEP i nazwy części złożenia nie są jeszcze odczytywane. Import `.3dm` był testowany na plikach zapisanych przez bibliotekę formatu, jeszcze nie na plikach z samego programu do modelowania; obiekty SubD, tekst i wymiary są pomijane.
- Biblioteka roślin z CivilCraft jest w ModelCraft, ale wstawianie z niej roślin jeszcze nie zostało zbudowane.
- Malowanie tekstury na ścianach push/pull powtarza się z kafelkiem materiału; by pomalować tylko jedną ścianę, zamień ją na siatkę i rozwiń.

Wszystko inne jest w [Jeszcze nie zbudowane](topic:not-built-yet).
