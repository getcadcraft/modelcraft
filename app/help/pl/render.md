---
title: Wyrenderuj obraz modelu
summary: Zrób obraz wyglądający jak światło dzienne: niebo, słońce z miejsca i daty modelu, miękkie cienie, wygląd szkła i metalu, a potem zapisz go jako PNG.
keywords: renderowanie, preset, presety, preset sceny, wnętrze, zewnętrze, widok przekroju, noc, jedno kliknięcie, renderowanie, śledzenie promieni, path tracing, path traced, ray tracing, globalne oświetlenie, odbicia, załamanie, wysoka jakość, zdjęcie, fotorealistyczny, realistyczny, obraz, obrazek, png, kadr, niebo, słońce, światło dzienne, cienie, miękkie cienie, okluzja otoczenia, szkło, metal, błyszczący, materiały, ekspozycja, jasność, pochmurne, zmierzch, studio, prezentacja, mgła, zamglenie, mgiełka, dym, chmura, objętość, smugi światła, promienie boże, kaustyka, próbkowanie adaptacyjne, szum
from: 517ba4d3
---

{{ui:Wyrenderuj obraz…}} tworzy obraz widoku, który wygląda jak światło dzienne, a nie jak rysunek: niebo, słońce ustawione według miejsca i daty modelu, miękkie cienie, światło z całego nieba, które przyciemnia narożniki i szczeliny, oraz kolory, które mogą wyglądać jak szkło, metal albo błyszcząca farba. Model nie jest zmieniany.

## Renderowanie widoku

1. Ustaw widok tak, jak chcesz go mieć na obrazie: obróć, przybliż, wybierz [scenę](topic:scenes), ukryj to, co nie ma być widoczne. Obraz używa kamery własnej widoku.
2. Naciśnij {{ui:Eksport}} w grupie {{ui:Plik}}, a następnie {{ui:Wyrenderuj obraz…}}.
3. Wybierz {{ui:Scena}}, jeśli wciśnięta nie jest tą, której chcesz (zobacz [Gotowe sceny](topic:render#scene-presets-a-good-picture-in-one-click)), wybierz {{ui:Rozmiar}}, a potem naciśnij {{ui:Renderuj}}.

   Obraz wypełnia się podczas renderowania i z każdym przebiegiem staje się gładszy. {{ui:Zatrzymaj}} (lub {{key:Esc}}) kończy render wcześniej i zachowuje dotychczasowy obraz.

4. Naciśnij {{ui:Zapisz}}, aby pobrać obraz (jako PNG, chyba że {{ui:Zapisz jako}} wskazuje inaczej).

:::tip
Zacznij od {{ui:Szkic}} w rozmiarze {{ui:Rozmiar widoku}}, aby sprawdzić kamerę i wygląd, a potem wyrenderuj {{ui:Dobra}} albo {{ui:Najlepsza}} w większym rozmiarze jako ostateczny obraz.
:::

## Gotowe sceny: dobry obraz jednym kliknięciem

Na górze okna są cztery przyciski {{ui:Scena}}. Każdy z nich ustawia niebo, jasność, grunt, linie krawędzi, jakość i słońce jednym kliknięciem, więc przed pierwszym obrazem nie ma czego się uczyć. Naciśnij jeden, a potem {{ui:Renderuj}}.

| Scena | Co ustawia | Do czego służy |
|---|---|---|
| {{ui:Zewnątrz}} | Bezchmurne niebo, własne słońce modelu, grunt włączony | Budynek z zewnątrz |
| {{ui:Wnętrze}} | Pochmurne niebo (równe światło, bez ostrych plam słońca), o pół działki (stop) jaśniej | Widok z wnętrza pomieszczenia |
| {{ui:Widok przekroju}} | Biała sceneria studyjna, bez gruntu, linie krawędzi w szybkim renderze | Model przecięty przekrojem |
| {{ui:Noc}} | Słońce zachodzi (północ w środku zimy dla półkuli, na której leży miejsce), o jedną działkę jaśniej | Lampy oświetlające model. Bez lamp obraz jest ciemny |

- {{ui:Dobierz do tego widoku}} wybiera za Ciebie: {{ui:Widok przekroju}}, gdy włączone jest cięcie przekroju, {{ui:Wnętrze}}, gdy kamera znajduje się wewnątrz modelu, w pozostałych przypadkach {{ui:Zewnątrz}}. Przy pierwszym otwarciu okna tryb ten włącza się sam.
- Wszystkie ustawienia pozostają poniżej i można je zmieniać. Po zmianie któregokolwiek z nich żadna scena nie jest wciśnięta, a wiersz pod przyciskami informuje, że ustawienia są własne. Naciśnij scenę ponownie, aby przywrócić jej wartości.
- Scena nie zmienia silnika renderowania, trybu, rozmiaru, materiałów, kamery ani lamp.

:::note
Sceny dają te same wartości w ModelCraft i BimCraft. Wygląd gotowego obrazu zależy od modelu i od karty graficznej.
:::

## Ustawienia

| Ustawienie | Co robi |
|---|---|
| {{ui:Rozmiar}} | Rozmiar widoku, dwukrotność rozmiaru widoku, Full HD, 4K lub kwadrat. Stałe rozmiary zachowują kamerę widoku i pokazują więcej lub mniej po bokach |
| {{ui:Tryb}} | {{ui:Szybki}} albo {{ui:Wysoka jakość (śledzenie promieni)}} (poniżej) wraz z {{ui:Limit czasu}} |
| {{ui:Jakość}} | Ile przebiegów (a w wysokiej jakości próbek) jest uśrednianych: {{ui:Szkic}} 16, {{ui:Dobra}} 64, {{ui:Najlepsza}} 256. Więcej przebiegów daje gładsze cienie i krawędzie, ale trwa dłużej |
| {{ui:Błękitny}} | {{ui:Bezchmurne}}, {{ui:Pochmurne}} (miękkie światło, słabe cienie), {{ui:Zmierzch}} (nisko, ciepłe światło) albo {{ui:Biała sceneria studyjna}} (zwykłe białe tło) |
| {{ui:Słońce}} | Słońce pochodzi z daty, godziny i miejsca w {{ui:Styl}} › Słońce. Zaznacz {{ui:Użyj innej daty i godziny dla tego obrazu}}, aby sprawdzić inną porę bez zmiany stylu modelu |
| {{ui:Jasność}} | Jaśniej lub ciemniej, krokami (działkami) |
| {{ui:Grunt pod modelem}} | Grunt, który przyjmuje cienie i zanika w horyzoncie. Wyłącz go dla modelu, który unosi się w powietrzu |
| {{ui:Rysuj krawędzie}} | Rysuje cienko krawędzie modelu na obrazie, dla wyglądu rysunku |

Gdy w wybranej porze słońce jest pod horyzontem, jest noc: niebo ciemnieje, a model oświetlają jego [lampy](topic:lights). Okno o tym informuje.

Ustawienia są zapisywane w pliku `.modelcraft`, więc kolejny obraz tego samego modelu zaczyna się tam, gdzie je zostawiono.

## Jak sprawić, by kolory wyglądały jak szkło lub metal

W panelu {{ui:Materiały}} każdy kolor na ekranie ma wygląd: {{ui:Matowy}}, {{ui:Satynowy}}, {{ui:Błyszczący}}, {{ui:Metal}}, {{ui:Polerowany metal}}, {{ui:Szkło}} lub {{ui:Szkło matowe}}. {{ui:Ściany bez malowania}} to ściany bez własnego koloru.

Aby okna były szklane, [pomaluj](topic:paint) szyby jednym kolorem, a potem ustaw ten kolor na {{ui:Szkło}}. Szkło przepuszcza niebo i to, co za nim, zabarwione jego kolorem, oraz odbija niebo.

:::note
W trybie {{ui:Szybki}} szkło i metal odbijają niebo, a nie resztę modelu, a światło nie załamuje się w szkle. Tryb {{ui:Wysoka jakość (śledzenie promieni)}} poniżej robi oba te rzeczy.
:::

## Wysoka jakość

Wybierz {{ui:Tryb}} › {{ui:Wysoka jakość (śledzenie promieni)}}, aby uzyskać obraz, w którym światło zachowuje się tak, jak widzi je kamera:

- światło odbija się między powierzchniami, więc pomieszczenie oświetlone przez okno lub lampę jest oświetlone dookoła, a kolory przenikają na sąsiednie powierzchnie;
- szkło jest prawdziwym szkłem: światło się w nim załamuje, a ono odbija model;
- metal i polerowane powierzchnie odbijają resztę modelu;
- panele świetlne świecą jak panele, z miękkimi cieniami.

Jest znacznie wolniejsza niż {{ui:Szybki}}: każdy przebieg śledzi światło dla każdego piksela od nowa. Obraz zaczyna się ziarnisty i czyści się, gdy dodają się próbki, więc zacznij od małego ({{ui:Rozmiar widoku}}, {{ui:Szkic}}) i wybierz {{ui:Limit czasu}}: gdy się skończy, zachowany zostaje dotychczasowy obraz. {{ui:Zatrzymaj}} też go zachowuje. Pierwszy przebieg czeka, aż przeglądarka przygotuje śledzenie promieni.

Jeśli przeglądarka obsługuje WebGPU, śledzenie promieni jest własne dla CadCraft i działa na karcie graficznej; wiersz pod obrazem mówi {{ui:Śledzenie promieni na karcie graficznej (WebGPU)}}. Po {{ui:Zatrzymaj}} lub po upływie limitu {{ui:Wznów}} kontynuuje ten sam obraz, aż zbierze wszystkie próbki; zmiana ustawienia albo ponowne naciśnięcie {{ui:Renderuj}} zaczyna od nowa. Bez WebGPU obraz jest liczony przez śledzenie promieni w WebGL (wiersz to mówi), a {{ui:Wznów}} nie jest oferowane.

:::linux
Firefox i większość konfiguracji Chrome w Linuksie nie mają jeszcze WebGPU, więc wysoka jakość używa tam WebGL.
:::

W tym trybie krawędzie nie są rysowane, tekstury z biblioteki pokazują kolor i chropowatość, ale nie wypukłości ([materiał zrobiony z węzłów](topic:shading#in-high-quality-pictures) pokazuje swoją normalną i wypukłości), a cięcie przekroju jest wykonywane na modelu przed rozpoczęciem renderowania.

{{ui:Redukcja szumu (usuwa ziarno po próbkach)}} jest domyślnie włączona: gdy obraz jest gotowy albo zatrzymany, pozostałe ziarno usuwa sieć neuronowa stworzona do tego (opublikowana sieć Intel Open Image Denoise, uruchamiana na Twoim komputerze: na karcie graficznej, a w razie jej braku na procesorze). Obraz z małą liczbą próbek wychodzi czysty; {{ui:Pokaż}} › {{ui:Obraz przed redukcją szumu}} pokazuje go tak, jak został wyrenderowany.

## Renderowanie w widoku

Obszar roboczy {{ui:Renderuj}} uruchamia śledzenie promieni w samym widoku: obrót, edycja modelu lub zmiana światła powodują natychmiastowy nowy start. {{ui:Obszar}}: przeciągnij prostokąt, a wyrenderuje się tylko on; {{ui:Cały widok}} przywraca pełny widok. {{ui:Ostrość}}: kliknij to, co ma być ostre, a głębia ostrości ustawi się tam. {{ui:Detal}} określa, ile pikseli widoku jest renderowanych (mniej to szybciej). {{ui:Wstrzymaj}} zatrzymuje i wznawia. Potrzebuje WebGPU: bez niego obszar roboczy to mówi, a {{ui:Eksport}} › {{ui:Wyrenderuj obraz…}} nadal działa.

## Niebo i profile świateł na karcie graficznej

Przy WebGPU wysoka jakość ma dwa dodatkowe rodzaje nieba:

- {{ui:Fizyczne niebo}} wylicza światło dzienne z wysokości słońca: głęboki błękit nad głową, blady pas przy horyzoncie i słońce, które staje się cieplejsze i słabsze, gdy jest nisko. {{ui:Zamglenie}} zmienia się od bardzo czystego dnia (2) do mglistego (10).
- {{ui:Obraz nieba (HDRI)}} oświetla model panoramicznym zdjęciem prawdziwego miejsca. {{ui:Wybierz obraz…}} przyjmuje równoprostokątny plik `.hdr` lub `.exr`; {{ui:Obróć}} obraca go wokół modelu, a {{ui:Jasność obrazu}} czyni go jaśniejszym lub ciemniejszym. Obraz ma własne słońce, więc słońce modelu nie jest dodawane. Jest zachowany tylko, dopóki strona jest otwarta: po ponownym otwarciu trzeba go wybrać jeszcze raz.

Każda lampa na liście {{ui:Lampy}} może przyjąć profil światła producenta: {{ui:Profil IES…}} czyta plik IES (LM-63), a lampa rozsyła wtedy światło tak, jak robi to dana oprawa (wąski downlight, oświetlacz ściany). Każda lampa o tej nazwie go używa, a lampa zachowuje własną jasność. Naciśnij nazwę profilu, aby przestać go używać.

Okna z przezroczystego szkła pomagają światłu nieba dotrzeć do pomieszczenia, więc obrazy wnętrz pod niebem szybciej stają się czyste.

W trybie {{ui:Szybki}} i w śledzeniu promieni WebGL {{ui:Fizyczne niebo}} i {{ui:Obraz nieba (HDRI)}} pokazują się jako bezchmurne niebo, a profile świateł są ignorowane.

## Kamera

{{ui:Kamera}} ustawia obraz jak fotografię:

- {{ui:Ekspozycja}}: zostaw {{ui:Suwak jasności}} albo wybierz {{ui:Ustawienia kamery}} i ustaw {{ui:Przysłona (f-stop)}}, {{ui:Czas migawki}} i {{ui:ISO}} jak w aparacie; EV obok nich to zwykła wartość ekspozycji. f/16 przy 1/100 s i ISO 100 odpowiada słonecznemu dniu; ciemniejsza scena wymaga szerszej przysłony, wolniejszej migawki albo wyższego ISO. Działa to we wszystkich trybach.
- {{ui:Głębia ostrości}} rozmywa to, co jest bliżej lub dalej niż {{ui:Odległość ostrzenia (m)}}, tak jak zrobiłby to obiektyw o tej przysłonie (zostaw pole puste, aby ostrzyć na to, co jest w środku widoku); {{ui:Kształt przysłony}} nadaje rozmytym refleksom kształt okrągły albo wielokątny.
- {{ui:Perspektywa dwupunktowa (linie pionowe pozostają pionowe)}} wypoziomowuje kamerę i przesuwa obraz, jak robi architektoniczny obiektyw tilt-shift, dzięki czemu ściany nie pochylają się, gdy patrzy się w górę lub w dół na budynek.
- {{ui:Balans bieli}} ustawia, który kolor światła wygląda na biały: niżej (na przykład 3000 K) dla ciepłego światła lamp, wyżej dla cienia i pochmurnych dni.
- {{ui:Rzutowanie}}: {{ui:Panorama 360°}} tworzy obraz 2:1 wszystkiego wokół kamery dla przeglądarek panoram; {{ui:Stereoskopowa panorama 360°}} układa jedną nad drugą panoramę dla lewego i prawego oka do gogli; {{ui:Mapa sześcienna (6 ścian)}} tworzy sześć kwadratowych widoków w siatce 3 × 2. Szerokość pochodzi z {{ui:Rozmiar}}.

Rzutowanie, głębia ostrości, perspektywa dwupunktowa i balans bieli wymagają śledzenia promieni na karcie graficznej (WebGPU), więc pokazują się tylko w {{ui:Wysoka jakość}}.

## Wykończenie obrazu

{{ui:Obraz}} koryguje barwy obrazu wysokiej jakości jak fotografię, a każda kontrolka zmienia gotowy obraz od razu, bez ponownego renderowania:

- {{ui:Wygląd (transformacja widoku)}}: {{ui:ACES filmowy}} (obraz jak wcześniej), {{ui:AgX}} (łagodniej, zachowuje kolor w bardzo jasnym świetle), {{ui:Filmowy}} (łagodna krzywa filmowa) albo {{ui:Standardowy}} (zwykły; jasne światło przycina się do bieli).
- {{ui:Kontrast}} i {{ui:Kompresja świateł}} (przywraca detale w bardzo jasnych miejscach).
- {{ui:Poświata (bloom)}} (miękka łuna wokół jasnego światła), {{ui:Blask}} z {{ui:Smugi blasku}} (gwiaździste promienie z najjaśniejszych punktów) oraz {{ui:Winieta}} (ciemniejsze narożniki).
- {{ui:Tabela barw (.cube)…}} stosuje korekcję barw z pliku `.cube` z jej {{ui:Siła tabeli barw}}; jak obraz nieba jest zachowana tylko, dopóki strona jest otwarta.

## Zapisywanie obrazu

{{ui:Zapisz jako}} obok {{ui:Zapisz}} wybiera plik: {{ui:PNG}}, {{ui:JPEG}} lub {{ui:WebP}} do udostępniania (JPEG i WebP tylko tam, gdzie przeglądarka potrafi je zapisać), a po renderowaniu wysokiej jakości na karcie graficznej także:

- {{ui:PNG, 16 bitów}}: skorygowany obraz z drobniejszymi przejściami odcieni, do druku lub dalszej edycji.
- {{ui:EXR, wszystkie warstwy (32-bitowy zmiennoprzecinkowy)}}: obraz tak, jak wyrenderowano (światło liniowe, bez korekcji), z każdym elementem renderu i grupą świateł jako osobną warstwą, do programów do kompozycji.
- {{ui:Plik renderu (.ccrender, do późniejszej korekty)}}: wszystko, czego okno potrzebuje, by ponownie zmieszać i skorygować obraz. {{ui:Otwórz plik renderu…}} przywraca go wraz z mieszanką i korekcją, bez renderowania.

## Mieszanie świateł po renderowaniu

Włącz {{ui:Mieszanie świateł (zmiana barwy i jasności każdego źródła po renderze)}} przed naciśnięciem {{ui:Renderuj}}. Gdy obraz jest gotowy (albo zatrzymany), {{ui:Mieszaj obraz}} wylicza jego światła w grupach: niebo, słońce i lampy według nazwy (każda lampa o tej samej nazwie to jedna grupa). Wyłącz grupę, nadaj jej kolor albo uczyń ją jaśniejszą lub ciemniejszą, a obraz zmieni się od razu, bez ponownego renderowania. {{ui:Zapisz mieszankę}} zachowuje mieszankę pod nazwą, do późniejszego wyboru; {{ui:Tak jak wyrenderowano}} wraca do obrazu takiego, jaki powstał. {{ui:Zapisz}} zapisuje zmieszany obraz.

{{ui:Elementy renderu (albedo, normalne, głębia, rozproszenie, odbicie, transmisja, emisja, identyfikatory)}} zachowuje też części obrazu. {{ui:Pokaż}} przełącza widok na jeden z nich: kolory powierzchni (albedo), normalne, głębię, światło rozproszone, odbite i przepuszczone (każde bezpośrednie i pośrednie), to, co świeci, i niebo, a także kolor dla każdego obiektu lub materiału do tworzenia masek.

Obie opcje trzymają dodatkowe warstwy na karcie graficznej. Przy dużych rozmiarach karta może nie mieć dość miejsca; okno o tym informuje, a mniejszy rozmiar działa.

## Kolejka renderowania

Po ustawieniu wysokiej jakości {{ui:Dodaj ten obraz do kolejki}} w {{ui:Kolejka renderowania}} zachowuje obraz taki, jaki jest ustawiony teraz; w oknie wideo {{ui:Dodaj tę animację do kolejki}} robi to samo dla całej animacji, śledzonej klatka po klatce. {{ui:Uruchom kolejkę}} renderuje je jedna po drugiej na tym komputerze, a {{ui:Zapisz}} obok każdego gotowego pobiera go. Zamknięcie strony zachowuje kolejkę: po otwarciu tego samego modelu renderowanie rusza od miejsca, w którym się zatrzymało. Kolejka wymaga WebGPU.

## Mgła, dym, szum i kaustyka

Są w {{ui:Mgła, dym i szum}} i działają w {{ui:Wysoka jakość}} na karcie graficznej; pozostałe silniki je pomijają.

- {{ui:Mgła i zamglenie}} wypełnia powietrze do określonej wysokości mgiełką, którą oświetlają słońce, niebo i lampy. {{ui:Jak daleko widać, w metrach}} określa, jak gęsta jest (około 100 m to lekkie zamglenie, 20 m to gęsta mgła), {{ui:Wysokość mgły nad ziemią, w metrach}} to miejsce, w którym się kończy, a {{ui:Smugi światła}} to, jak mocno mgiełka świeci w stronę światła. Światło słoneczne opuszcza mgłę na jej szczycie, więc tam, gdzie słońce przechodzi przez okno lub między budynkami, widać je jako smugi światła.
- {{ui:Dym albo chmura}} dodaje jedną objętość dymu lub chmury oświetloną jak mgła. {{ui:Rodzaj}} to {{ui:Chmura}}, {{ui:Słup dymu}} albo {{ui:Z pliku objętości (.ccvol)}}, czyli własny format siatki CadCraft. {{ui:Detal}} i {{ui:Wariacja}} zmieniają utworzoną chmurę lub słup, {{ui:Rozmiar jej najdłuższego boku, w metrach (0 = rozmiar modelu)}}, {{ui:Przesuń X (m)}}, {{ui:Przesuń Y (m)}}, {{ui:Przesuń Z (m)}} i {{ui:Obróć}} ustawiają ją (zaczyna w środku modelu), {{ui:Grubość}} zagęszcza ją, {{ui:Połysk do przodu}} rozjaśnia ją w stronę światła, a {{ui:Kolor}} ją barwi. Plik objętości jest zachowany tylko, dopóki strona jest otwarta, tak jak obraz nieba.
- {{ui:Zatrzymaj wcześnie tam, gdzie obraz jest czysty (próbkowanie adaptacyjne)}} nie daje więcej próbek pikselom, które się ustabilizowały, więc reszta obrazu kończy się szybciej. {{ui:Akceptowany szum}} to ilość ziarna, jaka zostaje, gdy piksel się zatrzymuje. Wiersz pod obrazem mówi, ile próbek średnio dostał piksel.
- {{ui:Kaustyka (światło załamane przez szkło lub odbite od luster)}} śledzi światło z lamp i słońca, więc jasna plama pod szklaną kulą albo odbicie lustra na ścianie wychodzi czyste, a nie ziarniste. Jest wyłączona, gdy włączone są mgła, dym, {{ui:Mieszanie świateł (zmiana barwy i jasności każdego źródła po renderze)}} lub elementy renderu, i jest przeznaczona do obrazów, a nie do panoram 360°, animacji ani obszaru roboczego {{ui:Renderuj}}.

## Ile to trwa

Obraz powstaje na Twoim komputerze, na jego karcie graficznej; nic nie jest przesyłane. Czas zależy od tej karty. Rośnie wraz z przebiegami i pikselami: {{ui:Najlepsza}} ma 16 razy więcej przebiegów niż {{ui:Szkic}}, a obraz 4K ma około cztery razy więcej pikseli niż Full HD. Komputer bez karty graficznej też renderuje, ale wolniej.

:::note
Jeśli okno mówi, że przeglądarka nie może renderować obrazów, przeglądarka nie ma WebGL 2. Zaktualizuj ją albo włącz akcelerację sprzętową w jej ustawieniach.
:::
