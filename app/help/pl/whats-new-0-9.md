---
title: Co nowego w 0.9 (wcześniej)
summary: Etap druku z własnym slicerem i wysyłaniem przez USB, Klipper, OctoPrint i PrusaLink, cięcie na warstwy żywicy i dodatki formatów plików, przepływ materiałów, cyfrowy bliźniak i dodatki hali produkcyjnej, zaokrąglenia NURBS, pogrubianie i dopasowanie do skanu, AR na budowie oraz dziesięć metod łuku.
keywords: co nowego 0.9, wcześniejsze wydanie, co nowego, notatki o wydaniu, dziennik zmian, 0.9, etap druku, druk 3D, wyślij do drukarki 3D, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, żywica, druk żywiczny, goo, sl1, ctb, anycubic, test naświetlania, przepływ materiałów, cyfrowy bliźniak, hala produkcyjna, plc, przenośnik, nurbs, zaokrąglenie, pogrubienie, dopasowanie skanu, ar, na budowie, metody łuku, jednostki, co nowego, notatki o wydaniu, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, silnik renderowania, silnik, otwórz w, usd, gltf, unreal, silnik dodatków, nurbs, powierzchnie, loft, przeciągnięcie, ciągłość, g0, g1, g2, zebra, step, iges, powiedz scenę, scena, pogoda, pora dnia, pora roku, asystent, materiał ze zdjęcia, zdjęcie, zdjęcie szkicu, umeblowanie, umeblowanie pomieszczenia, skos, skośne cięcie, podział, sprawdzenie wydruku, problemy, siatka właściwości, lampy, języki, urządzenia wejściowe, wiersze paska narzędzi, dwg, live
from: 2717d1b1
---

Oto, co zmieniło się w ModelCraft 0.9 w porównaniu z 0.8.1. ModelCraft dociera teraz do drukarki i hali produkcyjnej: możesz układać elementy na stole wydruku i wysyłać je bez eksportu, ciąć na warstwy pod filament lub żywicę oraz projektować linię do przenoszenia materiałów. To jest CadCraft Studio 0.9 i jego osiem aplikacji; większość nowych funkcji poniżej to dodatki.

## Nowości

### Druk 3D

- **Etap druku.** Kliknij {{ui:Etap druku}} na pasku narzędzi. Dodaj elementy biblioteki na stół drukarki, ułóż je, przejrzyj pocięte warstwy i naciśnij {{ui:Wyślij do drukarki 3D}}, bez eksportowania STL. Należy do dodatku 3D Print, który jest włączony domyślnie i może być usunięty jak każdy dodatek. Zobacz [Umieść elementy na stole wydruku i wyślij je do drukarki](topic:print-stage).
- **Nasz własny slicer filamentu.** {{ui:CadCraft basic (w zestawie, najszybszy)}} to slicer na liście **Slicer** w karcie: ściany, skórki, wypełnienie, podpory i spódnica (skirt), działający w osobnym wątku (worker), dzięki czemu strona pozostaje używalna. {{ui:Podgląd warstw}} z suwakiem **Warstwa** pokazuje warstwy przed wysłaniem. Profile drukarek, takie jak style Ender-3 i Prusa MK4, mają własny kod startowy G-code.
- **Wysyłanie.** Przez USB (Chrome lub Edge na komputerze, z otwartą stroną) albo do Klipper (Moonraker), OctoPrint lub PrusaLink w twojej sieci. Nic nie łączy się ani nie wysyła bez kliknięcia, a wysyłanie najpierw pyta o potwierdzenie.
- **Inne slicery.** Kiri:Moto, PrusaSlicer i OrcaSlicer są osobnymi dodatkami, domyślnie wyłączonymi; dodaj je z karty albo z {{ui:Ustawienia}} › {{ui:Dodatki}}. PrusaSlicer i OrcaSlicer używają twojej zainstalowanej kopii z CadCraft Studio. Dodatek drukarek Bambu Lab tnie na warstwy przy użyciu twojego OrcaSlicera i jego ustawień wstępnych P2S, i wymaga Studio na komputerze.
- **Druk żywiczny.** Dodatki żywiczne (domyślnie wyłączone) tworzą obrazy warstw dla ekranu drukarki, z wydrążeniem i otworami wentylacyjnymi, tratwą i podporami, podglądem warstw oraz czasem, żywicą i kosztem. Dodatki formatów plików zapisują Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) oraz Anycubic (PWMX i PWS). Test naświetlania żywicą tworzy drabinkę z pięciu naświetleń. Zobacz [Przygotuj wydruk na drukarkę żywiczną](topic:resin-printing).
- **Bez zmian.** {{ui:Eksport}} › {{ui:Sprawdź do druku 3D (STL lub 3MF)…}}, narzędzia do druku i Podziel do druku działają jak w 0.8. Zobacz [Przygotuj model do druku 3D](topic:print-3d).

### Przepływ materiałów, cyfrowy bliźniak i hala produkcyjna

Te trzy to dodatki, wyłączone, dopóki nie włączysz ich w {{ui:Ustawienia}} › {{ui:Dodatki}}; każdy ma własną pomoc, gdy jest włączony.

- **Przepływ materiałów.** Panel o nazwie Przepływ materiałów układa przenośniki, stanowiska, bufory i ścieżki AGV w widoku 3D, uruchamia symulację z ustalonym ziarnem, odtwarza ją i pokazuje przepustowość, czasy realizacji i kolejki, a wyniki zapisuje jako CSV. Zamówienia mogą pochodzić z pliku CSV. Komórki robotów można sprawdzić i wyeksportować. Połączenie z PLC ma tryb programowy oraz tryb rzeczywisty przez Modbus TCP, który działa tylko w CadCraft Studio.
- **Cyfrowy bliźniak.** Odczytuje układ z Przepływu materiałów i uruchamia programowy PLC z wymuszalnymi usterkami, testami zapasów, porównaniem układów i zestawieniem materiałów.
- **Hala produkcyjna.** Zamienia stanowiska w maszyny i komórki, odczytuje je na żywo albo z symulatora, prowadzi kolejkę zadań i prosty wskaźnik OEE. Tylko odczytuje: ta wersja nie może zapisywać do maszyny ani do PLC.

### Powierzchnie, modele i rysunki

- **Zaokrąglenia, pogrubienia i operacje logiczne na NURBS.** Panel {{ui:Powierzchnie}} ma {{ui:Zaokrąglenie między ścianami}}, {{ui:Zaokrąglenie kilku krawędzi}}, {{ui:Pogrubienie w bryłę}} oraz Suma, Odejmowanie i Przecięcie, każde z mierzonym odchyleniem. Zobacz [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).
- **Dopasuj powierzchnie do skanu.** Zaznacz zeskanowaną siatkę i użyj {{ui:Dopasuj powierzchnie do skanu}} w grupie **Skan**, a następnie {{ui:Zszyj powierzchnie w bryłę}}. To pierwsze dopasowanie, a nie pełny pakiet inżynierii wstecznej.
- **Żywe połączenie z modelarką .3dm.** Jednokierunkowe, z Rhino 8 lub Grasshoppera, i wymaga CadCraft Studio na tym samym komputerze. Zobacz [Utrzymuj model .3dm na żywo](topic:live-3dm-link).
- **Zobacz model na budowie.** {{ui:Widok na budowie (AR, telefon)}} w menu {{ui:Widoki}} działa na telefonie z Androidem z Chrome. Zobacz [Zobacz model na budowie na telefonie z Androidem (AR)](topic:ar-on-site).
- **Metody łuku.** Lista {{ui:Metody łuku}} oferuje dziesięć sposobów rysowania łuku, w tym {{ui:3-punktowy}} i {{ui:Początek, środek, koniec}}.
- **Więcej jednostek.** Masy (kg, lb, t, ton) i temperatury (stopnie C, F, K i R) są rozpoznawane tam, gdzie wpisujesz wartości z jednostkami.

## We wszystkich aplikacjach

- **Podpowiedzi.** Tekst po najechaniu na przyciski i obcięte etykiety to podpowiedź Bootstrap.
- **Zamykana wskazówka startowa.** Karta wskazówki na pustym obszarze rysunku ma mały przycisk zamknięcia x. Pozostaje zamknięta, a paleta poleceń może ją pokazać ponownie.
- **Przewijane paski kart.** Pasek kart panelu, który się nie mieści, przewija się zamiast być ucinany.
- **Tytuły kart.** Gdy dokument jest otwarty, karta przeglądarki zaczyna się od nazwy dokumentu, potem ModelCraft i CadCraft. Dopóki dokument jest niezapisany, na początku pojawia się kropka.
- **Układ.** {{ui:Ustawienia}} › {{ui:Ogólne}} › Układ zawiera układy na liście rozwijanej, z wyborem użycia układu tylko w tej aplikacji i przyciskiem resetu układu.
- **Języki.** Lista języków w Ustawieniach odpowiada plikom językowym zawartym w wersji. Inne języki niż angielski są wersjami roboczymi wykonanymi maszynowo.
- **Live i Biblioteka.** Live TeamWork pokazuje kursory i nazwiska na żywo, a kolekcje Biblioteki nadają każdej aplikacji domyślną kolekcję.

## Naprawiono

- {{ui:Odtwórz}} zmienia się w {{ui:Wstrzymaj}} podczas odtwarzania animacji, a {{key:Space}} odtwarza i wstrzymuje, gdy oś czasu jest otwarta.
- Renderowanie statyczne przełącza się na WebGL, gdy karta graficzna nie może uruchomić ścieżek. Widok renderowania na żywo może nadal pokazywać błąd; nie sprawdzono tego na komputerze z Windows z tym sterownikiem.
- Tryb rzeczywisty przepływu materiałów znów się łączy po zakończeniu połączenia z powodu odpowiedzi wyjątków PLC.

## Ograniczenia

- Nic nie zostało wydrukowane na prawdziwej drukarce: ani filamentem, ani żywicą, ani przez Bambu Connect. Pliki żywiczne odczytały wyłącznie własne czytniki CadCraft.
- Cyfrowy bliźniak i hala produkcyjna były testowane wyłącznie na symulatorach i znanych wynikach, bez prawdziwego PLC, linii ani protokołu. To pomoce do sprawdzania, a nie walidacja bezpieczeństwa. Fizyka obejmuje tylko pudełka, do ośmiu obciążeń.
- Łącze Rhino i Grasshoppera nigdy nie działało w prawdziwych programach.
- Inne języki niż angielski są wersjami roboczymi wykonanymi maszynowo.

## Wcześniej: 0.8 i 0.8.1

Oto, co zmieniło się w ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), w porównaniu z 0.7. Okno {{ui:Wyrenderuj obraz…}} może teraz wysłać scenę do innego programu, panel Powierzchnie tworzy gładkie powierzchnie swobodne, a połączony asystent może ustawić całą scenę jednym zdaniem.

### Nowości

**Renderowanie**

- **Wybór silnika.** {{ui:Wyrenderuj obraz…}} ma listę **Silnik** nad Trybem. Nasze dwa silniki, Szybki i Path tracer, są domyślne i działają wszędzie. Inne pozycje zapisują scenę jako pakiet (model jako plik USD oraz plik ustawień z dokładnymi wartościami materiałów, włączonymi lampami, słońcem, niebem, ekspozycją i kamerą), by zabrać go do innego programu. Obraz narysowany przez inny program mówi, który program i w jakiej wersji go wykonał. Zobacz [Wybierz, który program narysuje obraz](topic:render-engines).
- **Otwórz w innym programie.** Lista Silnik może zapisać scenę jako plik USD, plik glTF (`.glb`) lub folder projektu Unreal (`.zip`), w przeglądarce i w CadCraft Studio. W Studio może też uruchomić usdview lub domyślny program komputera dla tego pliku. Zobacz [Otwórz scenę w innym programie](topic:render-open-in).
- **Wyślij do silnika gry ze Studio.** Studio zapisuje scenę do projektu Unreal Engine i utrzymuje ją w zgodzie przy każdym wysłaniu, tylko w jedną stronę. Twoje własne zmiany są w warstwie, której CadCraft nigdy nie zapisuje. Zobacz [Wyślij scenę do silnika gry](topic:render-unreal).
- **Silniki z dodatków.** Dodatek może dodać silnik do listy. Napisany w JavaScript rysuje w przeglądarce i w Studio; ten, który uruchamia program, wymaga twojej zgody w Studio. Zobacz [Narysuj obraz innym programem](topic:render-other-program) i [Dodaj silnik renderowania przez dodatek](topic:render-engine-addons).
- **Powiedz scenę.** Powiedz połączonemu asystentowi „zmierzch, lekki deszcz, jesienne drzewa, ludzie na placu”, a ModelCraft ustawi to w jednym kroku: słońce przesuwa się do daty i godziny, aby cienie za nim podążały, niebo się zmienia, pojawiają się mokre powierzchnie, a drzewa i ludzie są umieszczani jako prawdziwe obiekty na etykietach, które możesz ukryć, przesunąć lub usunąć. Pora dnia, data lub pora roku oraz pogoda (bezchmurnie, pochmurno, mgła, lekki deszcz, deszcz, burza) działają też osobno, a kolejna prośba zmienia tę samą scenę. Mgła widoczna jest w obrazie wysokiej jakości na karcie graficznej; pozostałe silniki pokazują niebo, światło i mokre powierzchnie. Deszcz nie jest rysowany jako spadające smugi.

**Materiały**

- **Materiał z jednego zdjęcia.** Podaj ModelCraft zdjęcie powierzchni (ściany, podłogi, kamienia), a utworzy materiał kafelkowy: oświetlenie na zdjęciu zostaje wyrównane, krawędzie łączą się, a mapa koloru, mapa szorstkości i mapa normalnych są wyliczone ze zdjęcia. To zwykłe przetwarzanie obrazu twojego zdjęcia, bez wytrenowanego modelu. Szorstkość jest szacunkiem. Zwykłe, kwadratowe, proste zdjęcie daje najlepszy kafelek; silny wzór, na przykład cegły, może pokazać rozmyty cień w miejscu złączenia.

**Powierzchnie**

- **Powierzchnie swobodne.** Panel {{ui:Powierzchnie}} tworzy krzywe i powierzchnie NURBS bez przycinania: krzywe przez punkty, loft, powierzchnie prostokreślne, wyciągnięcie, obrót, przeciągnięcia wzdłuż jednej lub dwóch prowadnic, powierzchnie z siatki krzywych, łaty z czterech krawędzi, dopasowanie i wtapianie. Każda wspólna krawędź jest mierzona jako G0, G1 lub G2 (szczelina, kąt, skok krzywizny) na dokładnych powierzchniach, a krawędź gorsza niż zamówiona pojawia się w panelu Problemy z poprawką **Dopasuj**. Paski zebry i kolory krzywizny są rysowane z dokładnych powierzchni. Pliki STEP i IGES są wysyłane i wczytywane. Zobacz [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).

**Teren i pomieszczenia**

- **Zdjęcie szkicu na gruncie.** {{ui:Plik}} › {{ui:Importuj zdjęcie szkicu…}} zamienia zdjęcie ręcznego szkicu zrobione telefonem na krawędzie na gruncie w podanej przez ciebie skali: jedna grupa, z etykietą dla każdego koloru pisaka. Kartka jest wykrywana i prostowana na twoim komputerze, a nic nie jest nigdzie wysyłane. Zobacz [Modelowanie na planie zagospodarowania](topic:site-plan).
- **Umeblowanie pomieszczenia.** Zaznacz podłogę i użyj {{ui:Porządkuj}} › {{ui:Umebluj pomieszczenie…}}. Meble do sypialni, salonu, jadalni, kuchni, łazienki lub biura są rozmieszczane według reguł, przy ścianach i poza drzwiami oraz oknami, w jednej grupie, którą możesz usunąć jednym krokiem. To domyślny układ do przejrzenia, a nie projekt. Zobacz [Biblioteka startowa](topic:starter).

**Druk 3D**

- **Skośne cięcia.** Podział do druku może pochylić cięcia do 60 stopni, co daje elementom więcej powierzchni do klejenia. Łączniki stoją prostopadle do cięcia. Zobacz [Podziel model do druku](topic:print-split).
- **Sprawdzenie wydruku w Problemach.** Wyniki sprawdzenia wydruku 3D pokazują się w panelu Problemy ze znacznikami na modelu, a Napraw usuwa je stamtąd. Zobacz [Podpory, grubość ścianek, wydrążenie i naprawa](topic:print-tools).

**We wszystkich aplikacjach**

- **Języki.** Pomoc i aplikacje występują w 54 językach. Dziesięć jest nowych: litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki. Języki inne niż angielski są wersjami roboczymi wykonanymi maszynowo, dopóki nie przeczyta ich rodzimy użytkownik języka, a tematy pomocy mogą nadal być po angielsku.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler do gier i sterowanie MIDI mogą obsługiwać aplikacje, dla wszystkich lub dla jednej.
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › Wiersze paska narzędzi ustawia Zawijaj (jak wcześniej), 2 wiersze lub 1 wiersz. Pasek, który się nie mieści, przewija się w bok zamiast zabierać miejsce rysunkowi. Zawijaj pozostaje domyślne.
- **Siatka właściwości.** Pola lamp w ModelCraft używają wspólnej siatki: zwijane kategorie, kolumny etykiet i wartości oraz gęstość Kompaktowa. Wpisane działania arytmetyczne, takie jak `2*450`, nadal działają.
- **Problemy.** Panel Problemy (przycisk ostrzeżenia na pasku aplikacji) jest wspólny dla wszystkich aplikacji. W ModelCraft zawiera sprawdzenie wydruku i ostrzeżenia o ciągłości powierzchni.
- **Live.** Sesja Live TeamWork pokazuje, kto gdzie jest. Zobacz [Modeluj razem z Live TeamWork](topic:work-live).
- **Dodatki.** Dodatki mogą dodawać silniki renderowania, jak wyżej.
- **Połącz swoją AI.** Kontrakt narzędzi i sprawdzenia ośmiu aplikacji przechodzą, łącznie z 454 narzędziami. Połączenie jednym kliknięciem w Studio, hostowany łącznik dla asystentów w przeglądarce, własny klucz w Studio i opublikowany pakiet nie są jeszcze obiecane. Same aplikacje nie zawierają AI. Zobacz [Używaj ModelCraft z asystentami AI](topic:use-with-ai-assistants).

### Naprawiono w 0.8.1

- **Sekcja klas DWG.** Sekcja klas pliku DWG była odczytywana jako zły typ, co mogło zepsuć plik przy imporcie. Teraz jest odczytywana poprawnie w ModelCraft i w innych aplikacjach, które czytają DWG.
- **Tablety w pionie.** Wolna wysokość siatki trafia do płótna, a układ arkusza zaczyna się od 760 pikseli szerokości lub mniej. Arkusz stylów ModelCraft też ma tę zmianę.
- **Język w Studio.** CadCraft Studio i spakowane wydania mogą przełączać język w trakcie działania; wcześniej były tylko po angielsku. Nie testowano tego jeszcze na każdej platformie: daj znać, jeśli język się nie zmienia.

### Jeszcze nie w tej wersji

- **Bez podpisu kodu.** Windows może pokazać SmartScreen: wybierz {{ui:Więcej informacji}}, a następnie {{ui:Uruchom mimo to}}. Na Macu kliknij prawym przyciskiem i wybierz {{ui:Otwórz}}. Wersje sklepowe są wstrzymane, a build na iPada i iPhone'a nie został przebudowany dla 0.8.1.
- Inny program rysujący obraz bez dodatku silnika renderowania, kamery panoramiczne lub stereo oraz obraz nieba przez inny program, a także wtyczka otwierająca scenę w Unreal, jeszcze nie istnieją. Pliki są zapisywane; wtyczka nie jest wydana i nie była uruchamiana w Unreal.
- Powierzchnie swobodne: G3 i klasa A nie są mierzone ani deklarowane, a przycinanie i bryły przyjdą później.
- Obrazy z innych programów nie są piksel w piksel takie jak nasze: zgadzają się tylko kamera, słońce, lampy i ekspozycja.
- Poprawka 0.8.1 zmiany języka w Studio nie jest przetestowana na każdej platformie.

Wszystko inne znajdziesz w [Jeszcze nie zbudowano](topic:not-built-yet). Poprzednie wydanie opisuje [Co nowego w 0.7](topic:whats-new-0-7).
