---
title: Co nowego w wersji 0.7
summary: Siatki z modyfikatorami, rzeźbienie, UV i obiekty krzywych, śledzenie promieni na karcie graficznej i obszar renderowania, widok na żywo w czasie rzeczywistym z rozrzutem i panoramami, materiały węzłowe, obszar animacji z kośćmi i fizyką, pliki USD, FBX, STEP i .3dm oraz narzędzia do druku ze stylem dla początkujących.
keywords: co nowego, what's new, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, siatka, siatki, obszar roboczy siatki, modyfikatory, podział powierzchni, zagięcie, uv, rozwinięcie, szwy, krzywe, obiekty krzywych, nurbs, bezier, rzeźba, przebudowa siatki, retopologia, podziel, obliczenia, śledzenie promieni, webgpu, obszar renderowania, kolejka renderowania, mp4, exr, odszumianie, fizyczne niebo, hdri, ies, głębia ostrości, mieszanie świateł, mgła, kaustyka, widok na żywo, czas rzeczywisty, spacer, rozrzut, panorama, wycieczka, przeglądarka, cieniowanie, węzły, materiały węzłowe, biblioteka materiałów, materialx, naklejki, malowanie tekstur, wypalanie, animacja, edytor wykresów, klipy, klucze kształtu, sterowniki, szkielet, kości, skinning, ik, ograniczenia, fizyka, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, bryły 3d, podpory, grubość ścianek, drążenie, naprawa, początkujący, asystenci, ten komputer, jednostki, portugalski
from: b9fc43e2
---

To jest lista zmian w ModelCraft 0.7 w porównaniu z wersją 0.6. ModelCraft modeluje teraz siatki oraz wyciąganie i wciskanie geometrii, renderuje na karcie graficznej i ma obszar roboczy dla każdego rodzaju pracy: wybierz go na liście {{ui:Obszar roboczy}} po lewej stronie paska narzędzi.

## Nowe

### Siatki

- **Siatki.** Zaznacz grupę lub komponent i kliknij {{ui:Zamień na siatkę}} w {{ui:Informacje o obiekcie}}: stanie się siatką z ścianami o dowolnej liczbie narożników, które mogą przechowywać współrzędne tekstur, normalne, kolory i wagi. {{ui:Zamień na geometrię}} przywraca ją. Cofnij na siatce zachowuje tylko to, co zmienił każdy krok. Plik zawierający siatkę wymaga ModelCraft 0.7, aby go otworzyć. Zobacz [Siatki](topic:meshes).
- **Obszar roboczy siatki.** Kliknij siatkę dwukrotnie albo wybierz {{ui:Siatka}} na liście {{ui:Obszar roboczy}}, aby edytować jej wierzchołki, krawędzie i ściany: pętle i pierścienie, edycję proporcjonalną, wyciągnij, wstaw wewnątrz (inset), fazkę (bevel), cięcie pętli, nóż, bisekcję, obrót, scal, rozpuść, wypełnij, wypełnienie siatki, most i przesunięcie krawędzi (slide). Ustawienia ostatniej operacji zmienisz później w panelu. Zacznij od płaszczyzny, sześcianu, kuli, torusa i innych. Działają zarówno klawisze wyciągania i wciskania, jak i klawisze modelarskie. Zobacz [Edytuj siatkę w obszarze roboczym Siatka](topic:mesh-edit).
- **Modyfikatory.** Lustro, macierz, powierzchnia podziału, fazka, pogrubienie (solidify), boolean, przesunięcie (displace), scalanie wierzchołków (weld), decymacja, wygładzanie, krata (lattice), deformacja krzywą i shrinkwrap zmieniają to, co siatka pokazuje, bez zmiany samej siatki. Układaj je w stos, włączaj i wyłączaj osobno dla widoku i dla renderów, a {{ui:Zastosuj}} jeden, gdy chcesz go zachować na stałe. Zobacz [Modyfikatory na siatce](topic:modifiers).
- **Podział z zagięciami.** {{ui:Zagięcie}} w obszarze roboczym Siatka zachowuje wybrane krawędzie ostre pod powierzchnią podziału. Renderowanie może używać więcej poziomów niż widok, a przy dużej siatce widok pokazuje niższy poziom i informuje o tym. Zobacz [Powierzchnia podziału](topic:modifiers#subdivision-surface).
- **Obiekty krzywych.** Krzywe Bézier, NURBS i krzywe z prostych odcinków, które tworzą rurę, taśmę, zwężenie lub wypełnioną płytę, a także tekst jako krzywą. Edytuj ich punkty w obszarze {{ui:Krzywa}}; użyj {{ui:Na siatkę}}, gdy kształt jest gotowy. Zobacz [Obiekty krzywych](topic:curves).
- **Obszar roboczy UV.** Oznacz szwy (albo pozwól ModelCraft oznaczyć je przy ostrych krawędziach), użyj {{ui:Rozwiń}} i {{ui:Upakuj}} albo rzutuj przez pudełko, walec, sferę lub widok. Edytor UV obok widoku 3D przesuwa, obraca i skaluje części, a szachownica i kolory rozciągnięcia pokazują wynik. Zobacz [Rozłóż UV siatki](topic:uv).
- **Rzeźbienie.** Obszar roboczy {{ui:Rzeźba}} ma pędzle: rysowanie, glinę, wygładzanie, chwytanie, nadmuchiwanie, {{ui:Zagięcie}}, ściskanie, spłaszczanie i maskę, lustrzane odbicie względem osi X oraz {{ui:Detal}}, który dodaje trójkąty tam, gdzie rzeźbisz. Nacisk pióra ustawia rozmiar i siłę pędzla. Każde pociągnięcie to jeden krok cofnięcia. Zobacz [Rzeźbienie siatki](topic:sculpt).
- **Przebudowa siatki i retopologia.** {{ui:Przebuduj siatkę}} tworzy całą siatkę od nowa z równych trójkątów, zamykając dziury i łącząc nakładające się części. Aby zbudować czystą siatkę na szczegółowej, wybierz ją w {{ui:Retopologia}}: punkty, które przesuwasz, trafiają na jej powierzchnię. Zobacz [Przebudowa siatki](topic:mesh-edit#remesh).

### Rysunek

- **Podział krawędzi lub krzywej.** Narzędzie {{ui:Podziel}} zaznacza cięcia, gdy przesuwasz się wzdłuż krawędzi, i dzieli kliknięciem albo wpisaną liczbą; przy zaznaczonej krawędzi, łuku lub okręgu wpisz `/5`. {{ui:Informacje o obiekcie}} › {{ui:Podziel…}} pyta o liczbę, dla tabletów. Łuk lub okrąg dzieli się na równe kąty po prawdziwym łuku. Zobacz [Podziel krawędź lub krzywą na równe części](topic:divide).
- **Obliczenia w polu wartości.** Wpisz `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` lub `2*450mm` dla dowolnej długości, a `90/2` dla kąta. Obliczenie, którego nie da się wykonać, mówi, co jest nie tak i gdzie. Zobacz [Obliczenia](topic:value-box#calculations).

### Renderowanie

- **Śledzenie promieni na karcie graficznej.** {{ui:Wyrenderuj obraz…}} › {{ui:Wysoka jakość (śledzenie promieni)}} uruchamia własny moduł śledzenia promieni CadCraft na karcie graficznej, o ile przeglądarka ma WebGPU; wiersz pod obrazem mówi, który silnik go wykonał. {{ui:Zatrzymaj}} zachowuje obraz, a {{ui:Wznów}} kontynuuje od tego miejsca. Bez WebGPU obraz jest liczony śledzeniem promieni w WebGL, jak dotąd. Zobacz [Wysoka jakość](topic:render#high-quality).
- **Renderowanie w widoku.** Obszar roboczy {{ui:Renderuj}} śledzi sam widok i zaczyna od nowa, gdy orbitujesz lub edytujesz: wyrenderuj {{ui:Obszar}}, kliknij, aby ustawić {{ui:Ostrość}}, ustaw {{ui:Detal}}. Wymaga WebGPU. Zobacz [Renderowanie w widoku](topic:render#render-in-the-view).
- **Materiały, światła i niebo.** Obrazy wysokiej jakości cieniują każdą powierzchnię modelem materiału OpenPBR (warstwy lakieru, puch, cienkie warstwy, kolorowe szkło, świecenie). Przy WebGPU dostępne jest też {{ui:Fizyczne niebo}} z {{ui:Zamglenie}}, {{ui:Obraz nieba (HDRI)}} oraz profile świateł IES producentów dla lamp. Zobacz [Niebo i profile świateł](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera jak aparat fotograficzny.** Ekspozycja z przysłony, czasu migawki i ISO w każdym trybie; z WebGPU także głębia ostrości, perspektywa dwupunktowa, balans bieli, panoramy 360° (także stereo) i mapy sześcienne. Zobacz [Kamera](topic:render#the-camera).
- **Dokończ obraz po renderowaniu.** Nadaj mu gradację ({{ui:ACES filmowy}}, {{ui:AgX}}, {{ui:Filmowy}} lub {{ui:Standardowy}}, kontrast, blask (bloom), rozbłysk (glare), winietę, tabelę kolorów `.cube`), zmieszaj niebo, słońce i każdą grupę lamp oraz przeglądaj elementy renderu jeden po drugim, bez ponownego renderowania. Pozostałe ziarno usuwa odszumiacz działający na twoim komputerze. Zobacz [Dokończ obraz](topic:render#finish-the-picture) i [Zmieszaj światła po renderze](topic:render#mix-the-lights-after-the-render).
- **Więcej sposobów zapisu renderu.** PNG 16-bitowy, wielowarstwowy EXR z każdym elementem renderu i grupą świateł oraz plik renderu (`.ccrender`), który otwiera się ponownie z mieszaniem i gradacją. Zobacz [Zapisz obraz](topic:render#save-the-picture).
- **Mgła, dym i kaustyka.** Mgła i zamglenie oświetlone słońcem i lampami, z promieniami światła; jeden słup dymu lub jedna chmura; kaustyka pod szkłem i lustrami; próbkowanie adaptacyjne, które przestaje na pikselach już czystych. Tylko na karcie graficznej. Zobacz [Mgła, dym, szum i kaustyka](topic:render#fog-smoke-noise-and-caustics).
- **Kolejka renderowania i MP4.** Dodawaj obrazy wysokiej jakości i całe animacje do {{ui:Kolejka renderowania}}; renderują się jeden po drugim, a kolejka przetrwa zamknięcie strony. Wymaga WebGPU. Filmy można też zapisać jako MP4, jeśli przeglądarka potrafi to zrobić. Zobacz [Kolejka renderowania](topic:render#the-render-queue) i [Renderuj film](topic:animation#render-the-video).

### Widok na żywo i prezentacje

- **Widok na żywo.** {{ui:Eksport}} › {{ui:Widok na żywo}} pokazuje model w wyglądzie czasu rzeczywistego obok widoku, śledząc każdą edycję i kamerę: cienie słoneczne, materiały, lampy i światło odbite od ścian. Przejdź po nim w trybie {{ui:Spacer}}, przeciągnij {{ui:Godzina}} i {{ui:Miesiąc}}, aby przesunąć słońce, albo przenieś go do {{ui:Nowe okno}}. Używa WebGPU, jeśli przeglądarka je ma, w przeciwnym razie WebGL 2. Zobacz [Widok na żywo](topic:live-view).
- **Rozrzut.** Rozsypuj trawę, kwiaty, skały, drzewa i ludzi po ścianach lub pędzlem, z siedmiu nowych elementów otoczenia (entourage) i reszty biblioteki; zestawy zapisują się w pliku. Zobacz [Rozrzuć rośliny, skały i ludzi](topic:live-view#scatter-plants-rocks-and-people).
- **Udostępnianie.** Panorama 360°, wycieczka po panoramach ze strzałkami między punktami, samodzielna przeglądarka (jedna strona WWW, która otwiera się offline i niczego nie ładuje z internetu) oraz wideo ścieżki kamery, wszystko w wyglądzie czasu rzeczywistego. Zobacz [Udostępnianie](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR w wyglądzie czasu rzeczywistego.** {{ui:Przegląd w VR}} pokazuje model z jego materiałami, niebem, cieniem słonecznym, lampami, rozrzuconymi elementami i światłem odbitym. Zobacz [Jak to wygląda](topic:vr-review#what-it-looks-like).

### Materiały

- **Materiały tworzone z węzłów.** Obszar roboczy {{ui:Cieniowanie}} buduje materiały pliku jako grafy węzłów: obrazy, szum i szachownice, komórki Voronoi, fale, cegły, płytki, drewno, marmur, gradienty, zabrudzenia i zużycie krawędzi, operacje na kolorach, matematykę, mapy wypukłości i normalne, aż do pełnego materiału OpenPBR. Widok pokazuje każdą zmianę od razu. Zobacz [Twórz materiały z węzłów](topic:shading).
- **Biblioteka materiałów i własne zestawy tekstur.** Panel Cieniowania wyświetla materiały z {{ui:Biblioteka}}: szesnaście zestawów tekstur CC0, każdy z podanym autorem. Kliknij jeden, aby go użyć, albo przeciągnij go na ścianę. {{ui:Obrazy lub zip…}} albo {{ui:Folder…}} tworzy materiał z własnych map, rozpoznanych po nazwach plików. Zobacz [Materiały z biblioteki](topic:shading#materials-from-the-library).
- **MaterialX w obie strony.** Eksportuj materiał jako MaterialX (OpenPBR Surface lub Standard Surface, tekstury jako PNG) i importuj pliki MaterialX wraz z ich obrazami. Zobacz [MaterialX](topic:shading#materialx).
- **Naklejki i malowanie tekstur.** Umieść obraz na powierzchni jako naklejkę z własnym materiałem oraz maluj na obrazie materiału okrągłym pędzlem. Zobacz [Naklejki](topic:shading#decals) i [Malowanie na teksturze](topic:shading#paint-on-the-texture).
- **Wypalanie tekstur.** Wypal okluzję otoczenia, krzywiznę, oświetlenie i normalne szczegółowego obiektu do obrazów wzdłuż UV siatki, na rdzeniach procesora komputera. Zobacz [Wypalanie tekstur](topic:shading#bake-textures).

### Animacja

- **Obszar roboczy Animacja.** Klatkuj położenie, obrót i rozmiar obiektu, jasność, rozproszenie i kolor każdej lampy oraz kąt obiektywu, prosto w panelu. Oś czasu ma widok {{ui:Krzywe}} (uchwyty Béziera, powtórzenia) i widok {{ui:Klipy}}, który zapisuje klucze jako akcje do ponownego umieszczenia i mieszania; klucze z kilku wierszy można przesuwać, rozciągać, kopiować i wklejać. Zobacz [Animuj dowolną właściwość](topic:animate).
- **Klucze kształtu i sterowniki.** Siatka zawiera inne swoje kształty, mieszane suwakami, które można klatkować, albo ustawiane z innych wartości przez krótkie wyrażenie. Zobacz [Klucze kształtu](topic:animate#shape-keys-morphs) i [Sterowniki](topic:animate#drivers).
- **Szkielety.** Umieść kości w siatce, pozwól {{ui:Wagi automatyczne}} rozdzielić punkty między nimi lub malować wagi, ustawiaj pozy i klatkuj kości; skinning liniowy lub dwukwaternionowy. Zobacz [Szkielety](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK i ograniczenia.** Sięganie (IK) z biegunem, patrzenie na cel, kopiowanie przekształceń, limity, dziecko (child of) i podążanie za ścieżką, dla kości i obiektów. Zobacz [IK i ograniczenia](topic:animate#ik-and-constraints).
- **Fizyka.** Grupy i komponenty spadają, układają się w stos i zderzają jako pudełka lub kule, a {{ui:Wypal fizykę}} zachowuje wynik jako klucze. Zobacz [Fizyka](topic:animate#physics-drop-stack-and-collide).

### Pliki

- **USD.** {{ui:Zapisz jako}} ({{key:Mod+Shift+S}}) zapisuje model jako `.usda`, `.usdc` lub `.usdz`, a plik USD zapisany przez ModelCraft otwiera się ponownie bez utraty czegokolwiek. USD z innych programów otwiera się lub importuje jako siatki, grupy, komponenty, lampy i kamery. {{ui:Zapisz}} nadal zapisuje `.modelcraft`. Zobacz [Zapisz, otwórz i eksportuj USD](topic:usd).
- **glTF, w pełni.** Pliki glTF wchodzą jako edytowalne siatki z normalnymi, UV, kolorami wierzchołków i teksturami, węzły jako grupy, światła jako lampy, a kamery jako sceny; pliki Draco i meshopt też są obsługiwane. Plik `.gltf` otwiera się, gdy upuścisz go razem z plikami. Eksport zapisuje siatki, tekstury, lampy i kamery. Zobacz [glTF](topic:formats#gltf-glb-gltf).
- **Importy FBX, PLY, STL i Alembic.** FBX 2011 i nowsze (siatki, zestawy UV, materiały, osadzone tekstury, światła, kamery), PLY i STL z ich kolorami oraz pamięci podręczne Alembic z pierwszej próbki. OBJ wchodzi wraz z plikiem `.mtl` i obrazami, gdy upuścisz je razem. Zobacz [Formaty plików szczegółowo](topic:formats).
- **Więcej eksportów.** PLY z kolorami, STL z kolorami malowanych ścian i OBJ z teksturami jako jedno archiwum zip. Zobacz [Formaty plików szczegółowo](topic:formats).
- **Pliki STEP.** {{ui:Importuj}} odczytuje części i złożenia STEP (AP203, AP214, AP242) jako zamknięte siatki w prawdziwym rozmiarze, każdą część tam, gdzie plik ją umieszcza. Zobacz [STEP](topic:formats#step-step-stp).
- **Pliki .3dm.** {{ui:Importuj}} odczytuje modele `.3dm`: siatki, polipowierzchnie i wyciągnięcia (z siatek zapisanych w pliku, a w przeciwnym razie zamienione na siatkę przez ModelCraft), krzywe jako krawędzie, bloki jako komponenty i warstwy jako etykiety. Zobacz [Wczytaj model .3dm](topic:import-3dm-files).
- **Bryły 3D z DWG i DXF.** Import rysunku przynosi teraz także jego bryły 3D, regiony i ciała, każdą jako osobną grupę, zamknięte jako bryły. Zobacz [Model na planie sytuacyjnym](topic:site-plan#what-comes-in).

### Druk 3D

- **Narzędzia do druku.** {{ui:Sprawdź do druku 3D (STL lub 3MF)…}} › **Narzędzia do druku** mają {{ui:Podgląd podpór}} (nawisy, kolumny lub podpory drzewiaste, mniej więcej ile materiału), {{ui:Grubość ścianek}} (ścianki za cienkie do druku, wypisane z {{ui:Pokaż}}), {{ui:Drąż}} (ścianki o podanej grubości, z otworami odpływowymi) i {{ui:Napraw}} (każda poprawka wypisana; nakładające się części łączą się tylko na twoje żądanie). Drąż i Napraw dają grupę, której płaskie boki są pojedynczymi ścianami, albo siatkę, gdy wynik nie zamknie się lub ma zbyt wiele ścian; wiersz stanu mówi, który przypadek zaszedł. Zobacz [Podpory, grubość ścianek, drążenie i naprawa](topic:print-tools).
- **Styl dla początkujących.** {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Menu, klawisze i mysz}} › {{ui:Początkujący}}: duże przyciski do upuszczania kształtów i otworów, przesuwania, wyrównywania i {{ui:Grupa}}, aby otwory się wycięły, a potem sprawdź model do druku. Zobacz [Styl dla początkujących](topic:beginner).

### Asystenci i ten komputer

- **Więcej dla asystentów AI.** Asystent może teraz wyświetlać listę ścian i materiałów, wyciągać i wciskać, malować, tworzyć grupy, dodawać i pokazywać sceny, dodawać siatki, edytować stosy modyfikatorów, eksportować USD, renderować obraz i zapełniać kolejkę renderowania. Zobacz [Używaj ModelCraft z asystentami AI](topic:use-with-ai-assistants).
- **Ten komputer.** {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Renderowanie}} › {{ui:Ten komputer}} pokazuje kartę graficzną, rdzenie procesora i pamięć, z których ta przeglądarka pozwala korzystać aplikacji, oraz poziom, od którego zaczyna się widok na żywo. Zobacz [Czym renderuje ten komputer](topic:your-machine).

## Naprawiono

- {{ui:Bryły}} › {{ui:Suma}}, {{ui:Odejmij}} i {{ui:Część wspólna}} mogły zwrócić grupę, która nie była zamknięta, w każdym rozmiarze. Teraz się zamykają.
- {{ui:Bryły}} › {{ui:Odejmij}} było wyszarzone, gdy nic nie było zaznaczone, mimo że po jego wybraniu wybiera kolejno swoje dwie części.
- W osi czasu animacji wpisywane klawisze nie docierały nigdzie, podobnie {{key:Mod+S}}. {{key:Mod+Z}} i {{key:Mod+Y}} tam cofają i ponawiają tylko oś czasu; pozostałe klawisze {{key:Mod}} trafiają do aplikacji.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma osobną listę dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami z definicji jednostek (amerykańska stopa geodezyjna jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list; oznacz jedną gwiazdką, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. W ModelCraft lista jednostek obok pola wartości podąża za przełącznikami (jednostka modelu zawsze w niej zostaje), gwiazdka ustawia jednostkę nowego modelu (o ile ModelCraft ją ma), a długość wpisana z oznaczeniem dowolnej jednostki jest odczytywana w tej jednostce. Zobacz [Jednostki, wpisane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma smukły pasek tytułu: przeciągnij go, aby zadokować lub odłączyć panel, upuść na pasku innego panelu, aby dzielić jedną ramkę jako karty, przypnij go, aby chował się do krawędzi, albo ukryj go i przywołaj z krawędzi. Zobacz [Ułóż panele](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe można przesuwać.** Przeciągnij okno dialogowe za pasek tytułu, poza rysunek; wróci tam, gdzie je zostawiłeś. Kliknij dwukrotnie pasek tytułu, aby ponownie je wyśrodkować. Zobacz [Przesuń okno dialogowe](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć gotowych próśb do twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj pytania o model, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których potrzebuje, a każda sprawdzona przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Dotyczy to również **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia**: wszystkie mają teraz każde słowo aplikacji, jako wersje robocze jeszcze nieprzejrzane przez rodzimego użytkownika języka. Tematy pomocy są w języku angielskim.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla twojego systemu, brak sieci, nieprawidłowy podpis), zamiast samego „Gotowe", i nie przywraca już karty Co nowego, którą zamknąłeś, dopóki nie ma nowszego wydania.

## Jeszcze nie w tej wersji

- **0.7 nie ma podpisu kodu.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, ponieważ walidacja certyfikatu jeszcze nie nadeszła. Sprawdź SHA-256 przy każdym pliku na getcadcraft.com/download. W systemie Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij prawym przyciskiem myszy CadCraft Studio i wybierz {{ui:Otwórz}}. CadCraft Studio nie ma jeszcze w sklepie z aplikacjami i nie ma jeszcze wersji dla iPada ani iPhone'a.
- Listy kąta i nachylenia w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- Renderowanie na karcie graficznej (WebGPU) zostało tu przetestowane tylko na zastępczym oprogramowaniu, jeszcze nie na prawdziwych kartach graficznych, więc najpierw wyrenderuj coś małego na własnym komputerze. To samo dotyczy widoku na żywo, a VR testowano dotąd tylko na emulatorze zestawu słuchawkowego.
- Bez WebGPU nie ma obszaru roboczego Renderuj ani kolejki renderowania, a obrazy wysokiej jakości nie mają głębi ostrości, fizycznego nieba, obrazu nieba, mgły, dymu, kaustyki ani mieszania świateł.
- {{ui:Wyrenderuj obraz…}} nie rysuje jeszcze rozrzuconych elementów; pojawiają się w widoku na żywo, jego panoramach, przeglądarce i wideo.
- Lampy animują się w widoku, ale wyrenderowany film używa lamp takich, jakie są w chwili startu.
- Kości i animacja nie są jeszcze odczytywane ani zapisywane w plikach glTF, FBX lub USD (modele z skinningiem wchodzą w pozycji spoczynkowej, z ich wagami), a materiały glTF i FBX poza kolorem bazowym lub teksturą nie są jeszcze zachowywane.
- Kolory STEP i nazwy części złożenia nie są jeszcze odczytywane. Import `.3dm` testowano na plikach zapisanych przez zestaw narzędzi formatu, jeszcze nie na plikach z samego programu do modelowania; obiekty SubD, tekst i wymiary są pomijane.
- Biblioteka roślin z CivilCraft jest w ModelCraft, ale umieszczanie z niej roślin jeszcze nie zostało zbudowane.
- Malowanie tekstury na ścianach z wyciągania i wciskania powtarza się wraz z kafelkiem materiału; aby pomalować tylko jedną ścianę, zamień ją na siatkę i rozwiń.

Wszystko inne znajdziesz w [Jeszcze nie zbudowano](topic:not-built-yet).
