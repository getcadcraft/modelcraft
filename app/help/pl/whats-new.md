---
title: Co nowego w 0.9
summary: Etap druku z własnym slicerem i wysyłaniem przez USB, Klipper, OctoPrint i PrusaLink, slicing żywiczny i dodatki do plików, przepływ materiałów, dodatki cyfrowego bliźniaka i hali produkcyjnej, zaokrąglenia NURBS, pogrubianie i dopasowanie skanu, AR na budowie oraz dziesięć metod łuku.
keywords: co nowego, informacje o wydaniu, dziennik zmian, 0.9, etap druku, druk 3d, wyślij do drukarki 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, żywica, druk żywiczny, goo, sl1, ctb, anycubic, test naświetlania, przepływ materiałów, cyfrowy bliźniak, hala produkcyjna, plc, przenośnik, nurbs, zaokrąglenie, pogrubienie, dopasowanie skanu, ar, na budowie, metody łuku, jednostki, 0.8, 0.8.1, wersja, nowe funkcje, silnik renderowania, silnik, otwórz w, usd, gltf, unreal, silnik z dodatku, powierzchnie, loft, sweep, ciągłość, g0, g1, g2, zebra, step, iges, powiedz scenę, scena, pogoda, pora dnia, pora roku, asystent, materiał ze zdjęcia, zdjęcie szkicu, urządź, skos, cięcie skośne, podział, kontrola druku, problemy, siatka właściwości, lampy, języki, urządzenia wejściowe, rzędy paska narzędzi, dwg, na żywo
from: 169048a2
---

To jest to, co zmieniło się w ModelCraft 0.9 w porównaniu z 0.8.1. ModelCraft sięga teraz drukarki i hali produkcyjnej: możesz układać rzeczy na stole drukarki i wysyłać je bez eksportu, dzielić na warstwy pod filament lub żywicę oraz układać linię do przenoszenia materiałów. To jest CadCraft Studio 0.9 i jego osiem aplikacji; większość nowych funkcji poniżej to dodatki.

## Nowe

### Druk 3D

- **Etap druku.** Kliknij Etap druku na pasku narzędzi. Dodawaj elementy Biblioteki na stół drukarki, układaj je, przeglądaj warstwy po slicingu i naciśnij {{ui:Wyślij do drukarki 3D}}, bez eksportu STL. Należy do dodatku 3D Print, który jest domyślnie włączony i można go usunąć jak każdy dodatek. Zob. [Ułóż rzeczy na stole druku i wyślij je do drukarki](topic:print-stage).
- **Nasz własny slicer filamentu.** {{ui:CadCraft basic (w zestawie, najszybszy)}} to slicer na liście **Slicer** na karcie: ścianki, skórkę, wypełnienie, podpory i obrys (skirt), na wątku roboczym, by strona pozostała używalna. {{ui:Podgląd warstw}} z suwakiem **Warstwa** pokazuje warstwy przed wysłaniem. Profile drukarek, takie jak style Ender-3 i Prusa MK4, mają własny kod startowy G-code.
- **Wysyłanie.** Przez USB (Chrome lub Edge na komputerze, z otwartą stroną) albo do Klipper (Moonraker), OctoPrint lub PrusaLink w Twojej sieci. Nic nie łączy się ani nie wysyła bez kliknięcia, a wysyłanie najpierw pyta.
- **Inne slicery.** Kiri:Moto, PrusaSlicer i OrcaSlicer są osobnymi dodatkami, domyślnie wyłączonymi; dodaj je z karty albo z {{ui:Ustawienia}} › {{ui:Dodatki}}. PrusaSlicer i OrcaSlicer używają Twojej własnej zainstalowanej kopii z CadCraft Studio. Dodatek drukarek Bambu Lab slicuje z Twoim OrcaSlicer i jego profilami P2S i wymaga Studio na komputerze.
- **Druk żywiczny.** Dodatki żywiczne (domyślnie wyłączone) tworzą obrazy warstw dla ekranu drukarki, z wydrążeniem i otworami wentylacyjnymi, tratwą i podporami, podglądem warstw oraz czasem, żywicą i kosztem. Dodatki formatów plików zapisują Elegoo GOO, SL1, Chitubox (CBDDLP i CTB 2 do 5) oraz Anycubic (PWMX i PWS). Test naświetlania żywicą tworzy drabinkę z pięciu naświetleń. Zob. [Slicing dla drukarki żywicznej](topic:resin-printing).
- **Bez zmian.** {{ui:Eksport}} › {{ui:Sprawdź do druku 3D (STL lub 3MF)…}}, narzędzia druku i Podziel do druku działają jak w 0.8. Zob. [Przygotuj model do druku 3D](topic:print-3d).

### Przepływ materiałów, cyfrowy bliźniak i hala produkcyjna

Te trzy są dodatkami, wyłączonymi, dopóki nie włączysz ich w {{ui:Ustawienia}} › {{ui:Dodatki}}, a każdy ma własną pomoc, gdy jest włączony.

- **Przepływ materiałów.** Panel o nazwie Przepływ materiałów układa przenośniki, stacje, bufory i ścieżki AGV w widoku 3D, uruchamia symulację z ustalonym ziarnem losowości, odtwarza ją i pokazuje przepustowość, czasy realizacji i kolejki; wyniki są zapisywane jako CSV. Zamówienia mogą pochodzić z pliku CSV. Komórki robotów można sprawdzić i wyeksportować. Połączenie PLC ma tryb miękki i tryb rzeczywisty przez Modbus TCP, który działa tylko w CadCraft Studio.
- **Cyfrowy bliźniak.** Odczytuje układ Przepływu materiałów i uruchamia na nim miękki PLC, z wymuszanymi awariami, testami zapasów, porównaniem układów i zestawieniem materiałów.
- **Hala produkcyjna.** Zamienia stacje w maszyny i komórki, odczytuje je na żywo lub z symulatora i prowadzi kolejkę zleceń oraz prosty OEE. Tylko odczytuje: ta wersja nie może zapisywać do maszyny ani PLC.

### Powierzchnie, modele i rysunek

- **Zaokrąglenia, pogrubienia i operacje boolean na NURBS.** Panel {{ui:Powierzchnie}} ma {{ui:Zaokrąglenie między ścianami}}, {{ui:Zaokrąglenie kilku krawędzi}}, {{ui:Pogrubienie w bryłę}} oraz Suma, Odejmij i Część wspólna, każde z zmierzonym odchyleniem. Zob. [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).
- **Dopasowanie powierzchni do skanu.** Zaznacz zeskanowaną siatkę i użyj {{ui:Dopasuj powierzchnie do skanu}} w grupie **Skan**, a potem {{ui:Zszyj powierzchnie w bryłę}}. To pierwsze dopasowanie, a nie pełny pakiet inżynierii odwrotnej.
- **Żywe połączenie z modelarzem .3dm.** Jednokierunkowe, z Rhino 8 lub Grasshoppera, i wymaga CadCraft Studio na tym samym komputerze. Zob. [Utrzymuj model .3dm na żywo](topic:live-3dm-link).
- **Zobacz model na budowie.** {{ui:Widok na budowie (AR, telefon)}} w menu {{ui:Widoki}} działa na telefonie z Androidem z Chrome. Zob. [Zobacz model na budowie na telefonie z Androidem (AR)](topic:ar-on-site).
- **Metody łuku.** Lista Metody łuku oferuje dziesięć sposobów rysowania łuku, w tym {{ui:3-punktowy}} i {{ui:Początek, środek, koniec}}.
- **Więcej jednostek.** Masy (kg, lb, t, ton) i temperatury (stopnie C, F, K i R) są rozumiane tam, gdzie wpisuje się wartości z jednostkami.

## We wszystkich aplikacjach

- **Podpowiedzi.** Tekst po najechaniu na przyciski i ucięte etykiety to podpowiedź Bootstrap.
- **Zamykana wskazówka startowa.** Karta wskazówki na pustym obszarze rysunku ma mały przycisk zamknięcia x. Zostaje zamknięta, a paleta poleceń może ją pokazać ponownie.
- **Przewijane paski kart.** Pasek kart panelu, który się nie mieści, przewija się zamiast być uciętym.
- **Tytuły kart.** Gdy dokument jest otwarty, karta przeglądarki zaczyna się od nazwy dokumentu, potem ModelCraft i CadCraft. Kropka pojawia się pierwsza, dopóki dokument jest niezapisany.
- **Układ.** {{ui:Ustawienia}} › {{ui:Ogólne}} › Układ trzyma układy na liście rozwijanej, z opcją użycia układu tylko dla tej aplikacji i przyciskiem resetu układu.
- **Języki.** Lista języków w Ustawieniach podąża za plikami językowymi, które zawiera wersja. Języki inne niż angielski to wersje robocze tłumaczone maszynowo.
- **Na żywo i Biblioteka.** Live TeamWork pokazuje kursory i imiona na żywo, a kolekcje Biblioteki dają każdej aplikacji domyślną kolekcję.

## Naprawione

- {{ui:Odtwórz}} zmienia się w {{ui:Wstrzymaj}}, gdy animacja gra, a {{key:Space}} odtwarza i wstrzymuje, gdy oś czasu jest otwarta.
- Renderowanie obrazu przechodzi na WebGL, gdy karta graficzna nie może uruchomić śledzenia ścieżek. Widok renderowania na żywo może nadal pokazywać błąd; nie sprawdzono tego na komputerze z Windows z tym sterownikiem.
- Tryb rzeczywisty przepływu materiałów łączy się ponownie po zakończeniu połączenia z powodu odpowiedzi o wyjątkach PLC.

## Uczciwe ograniczenia

- Niczego nie wydrukowano na prawdziwej drukarce: ani filamentem, ani żywicą, ani przez Bambu Connect. Pliki żywiczne zostały odczytane tylko przez własne czytniki CadCraft.
- Cyfrowy bliźniak i hala produkcyjna były testowane tylko na symulatorach i znanych odpowiedziach, bez prawdziwego PLC, linii ani protokołu. To pomoce do sprawdzania, a nie walidacja bezpieczeństwa. Fizyka obejmuje tylko pudełka, do ośmiu obciążeń.
- Połączenie Rhino i Grasshopper nigdy nie działało w prawdziwych programach.
- Języki inne niż angielski to wersje robocze tłumaczone maszynowo.

## Wcześniej: 0.8 i 0.8.1

To jest to, co zmieniło się w ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) w porównaniu z 0.7. Okno {{ui:Wyrenderuj obraz…}} może teraz wysłać scenę do innego programu, panel Powierzchnie tworzy gładkie powierzchnie swobodne, a połączony asystent potrafi ustawić całą scenę jednym zdaniem.

### Nowe

**Renderowanie**

- **Wybór silnika.** {{ui:Wyrenderuj obraz…}} ma listę **Silnik** nad Trybem. Nasze własne dwa silniki, Szybki i Śledzenie promieni, są domyślne i działają wszędzie. Inne pozycje zapisują scenę jako pakiet (model jako plik USD oraz plik ustawień z dokładnymi wartościami materiałów, włączonymi lampami, słońcem, niebem, ekspozycją i kamerą), by zabrać go do innego programu. Obraz narysowany przez inny program mówi, który program i w jakiej wersji go wykonał. Zob. [Wybierz, który program rysuje obraz](topic:render-engines).
- **Otwórz w innym programie.** Lista Silnik może zapisać scenę jako plik USD, plik glTF (`.glb`) lub folder projektu Unreal (`.zip`), w przeglądarce i w CadCraft Studio. W Studio może też uruchomić usdview albo własny program komputera dla tego pliku. Zob. [Otwórz scenę w innym programie](topic:render-open-in).
- **Wyślij do silnika gry ze Studio.** Studio zapisuje scenę do projektu Unreal Engine i utrzymuje ją w zgodzie przy każdym wysłaniu, tylko w jedną stronę. Twoje własne edycje żyją w warstwie, której CadCraft nigdy nie zapisuje. Zob. [Wyślij scenę do silnika gry](topic:render-unreal).
- **Silniki z dodatków.** Dodatek może dodać silnik do listy. Napisany w JavaScript rysuje w przeglądarce i w Studio; taki, który uruchamia program, wymaga Twojej zgody w Studio. Zob. [Narysuj obraz innym programem](topic:render-other-program) i [Dodaj silnik renderowania przez dodatek](topic:render-engine-addons).
- **Powiedz scenę.** Powiedz połączonemu asystentowi „zmierzch, lekki deszcz, jesienne drzewa, ludzie na placu”, a ModelCraft ustawi to w jednym kroku: słońce przesuwa się do daty i godziny, by cienie podążały, niebo się zmienia, pojawiają się mokre powierzchnie, a drzewa i ludzie są umieszczani jako prawdziwe obiekty na etykietach, które możesz ukryć, przesunąć lub usunąć. Pora dnia, data lub pora roku oraz pogoda (bezchmurnie, pochmurno, mgła, lekki deszcz, deszcz, burza) też działają osobno, a późniejsza prośba zmienia tę samą scenę. Mgła pokazuje się w obrazie wysokiej jakości na karcie graficznej; pozostałe silniki pokazują niebo, światło i mokre powierzchnie. Deszcz nie jest rysowany jako spadające smugi.

**Materiały**

- **Materiał z jednego zdjęcia.** Podaj ModelCraft zdjęcie powierzchni (ściany, podłogi, kamienia), a zrobi z niego materiał kafelkowy: oświetlenie na zdjęciu zostaje wyrównane, krawędzie łączą się, a mapa koloru, mapa chropowatości i mapa normalnych są wyliczane z obrazu. To zwykłe przetwarzanie obrazu Twojego zdjęcia, bez wytrenowanego modelu. Chropowatość jest szacunkiem. Płaskie, kwadratowe zdjęcie prosto z przodu daje najlepszy kafel; mocny wzór, taki jak cegły, może pokazać miękki cień w miejscu złączenia.

**Powierzchnie**

- **Powierzchnie swobodne.** Panel {{ui:Powierzchnie}} tworzy krzywe NURBS i powierzchnie bez przycinania: krzywe przez punkty, loft, ruled, wyciągnięcie, obrót, przeciągnięcia wzdłuż jednej lub dwóch szyn, powierzchnie z siatki krzywych, łaty z czterech krawędzi, dopasowanie i mieszanie. Każda wspólna krawędź jest mierzona jako G0, G1 lub G2 (przerwa, kąt, skok krzywizny) na dokładnych powierzchniach, a krawędź gorsza, niż poprosiłeś, pojawia się w panelu Problemy z poprawką **Dopasuj**. Paski zebry i kolory krzywizny są rysowane z dokładnych powierzchni. Pliki STEP i IGES wychodzą i wchodzą. Zob. [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).

**Miejsce i pomieszczenia**

- **Szkic ze zdjęcia na ziemię.** {{ui:Plik}} › {{ui:Importuj zdjęcie szkicu…}} zamienia zdjęcie ręcznego szkicu zrobione telefonem w krawędzie na ziemi w skali, którą podasz: jedna grupa, z etykietą dla każdego koloru pióra. Kartka jest znajdowana i prostowana na Twoim komputerze, a nic nie jest nigdzie wysyłane. Zob. [Model na planie sytuacyjnym](topic:site-plan).
- **Urządzanie pomieszczenia.** Wybierz podłogę i użyj {{ui:Porządkuj}} › {{ui:Umebluj pomieszczenie…}}. Meble do sypialni, salonu, jadalni, kuchni, łazienki lub biura są ustawiane według reguł, przy ścianach i z dala od drzwi i okien, w jednej grupie, którą możesz usunąć jednym krokiem. To domyślny układ do przejrzenia, a nie projekt. Zob. [Biblioteka startowa](topic:starter).

**Druk 3D**

- **Ukośne cięcia.** Podziel do druku może skośnie ciąć do 60 stopni, co daje elementom więcej powierzchni do sklejania. Łączniki stoją prostopadle do cięcia. Zob. [Podziel model do druku](topic:print-split).
- **Kontrola druku w problemach.** Wyniki sprawdzenia druku 3D pokazują się w panelu {{ui:Problemy}} ze znacznikami na modelu, a {{ui:Napraw}} usuwa je stamtąd. Zob. [Podpory, grubość ścianek, drążenie i naprawa](topic:print-tools).

**We wszystkich aplikacjach**

- **Języki.** Pomoc i aplikacje są w 54 językach. Dziesięć jest nowych: litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki. Języki inne niż angielski to tłumaczenia maszynowe, dopóki nie przeczyta ich rodzimy użytkownik, a tematy pomocy mogą nadal być po angielsku.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler do gier i sterowanie MIDI mogą sterować aplikacjami, dla wszystkich albo dla jednej.
- **Rzędy paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › Rzędy paska narzędzi ustawia Zawijaj (jak wcześniej), 2 rzędy lub 1 rząd. Pasek, który się nie mieści, przewija się w bok zamiast zabierać miejsce rysunkowi. Zawijaj zostaje domyślne.
- **Siatka właściwości.** Pola lamp ModelCraft używają wspólnej siatki: zwijane kategorie, kolumny etykiet i wartości oraz gęstość {{ui:Zwarta}}. Wpisane działania, takie jak `2*450`, nadal działają.
- **Problemy.** Panel {{ui:Problemy}} (przycisk ostrzeżenia na pasku aplikacji) jest wspólny dla wszystkich aplikacji. W ModelCraft zawiera kontrolę druku i ostrzeżenia o ciągłości powierzchni.
- **Na żywo.** Sesja Live TeamWork pokazuje, kto jest gdzie. Zob. [Modelowanie razem z Live TeamWork](topic:work-live).
- **Dodatki.** Dodatki mogą dodawać silniki renderowania, jak wyżej.
- **Połącz swoją AI.** Kontrakt narzędzi i sprawdzenia ośmiu aplikacji przechodzą, z 454 narzędziami łącznie. Połączenie jednym kliknięciem w Studio, hostowany łącznik dla asystentów przeglądarkowych, własny klucz w Studio i opublikowany pakiet nie są jeszcze obiecane. Aplikacje same nie zawierają AI. Zob. [Używanie ModelCraft z asystentem AI](topic:use-with-ai-assistants).

### Naprawione w 0.8.1

- **Sekcja klas DWG.** Sekcja klas pliku DWG była odczytywana jako zły typ, co mogło zepsuć plik przy imporcie. Teraz jest czytana poprawnie, w ModelCraft i w pozostałych aplikacjach, które czytają DWG.
- **Tablety w pionie.** Wolna wysokość siatki idzie na płótno, a układ arkusza zaczyna się od 760 pikseli szerokości lub mniej. Arkusz stylów ModelCraft też ma tę zmianę.
- **Język w Studio.** CadCraft Studio i spakowane wydania mogą zmienić język w trakcie działania; wcześniej były tylko po angielsku. Nie testowano tego jeszcze na każdej platformie: daj znać, jeśli język się nie zmienia.

### Nieobecne w tej wersji

- **Brak podpisu kodu.** Windows może pokazać SmartScreen: wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu kliknij prawym przyciskiem i wybierz {{ui:Otwórz}}. Wersje sklepowe są wstrzymane, a wersja na iPada i iPhone'a nie została przebudowana dla 0.8.1.
- Inny program rysujący obraz bez dodatku silnika renderowania, panoramy lub kamery stereo oraz obraz nieba przez inny program jeszcze nie są. Pliki są zapisywane; wtyczka otwierająca scenę w Unreal nie została wydana i nie była uruchamiana w Unreal.
- Powierzchnie swobodne: G3 i klasa A nie są mierzone ani deklarowane, a przycinanie i bryły przyjdą później.
- Obrazy z innych programów nie są piksel w piksel takie jak nasze: zgadzają się tylko kamera, słońce, lampy i ekspozycja.
- Poprawka 0.8.1 zmiany języka w Studio nie jest testowana na każdej platformie.

Wszystko inne jest w [Jeszcze nie zbudowane](topic:not-built-yet). Poprzednie wydanie: [Co nowego w 0.7](topic:whats-new-0-7).
