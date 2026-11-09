---
title: Co nowego w wersjach 0.8 i 0.8.1
summary: Wybór silnika renderowania z plikami dla innych programów, swobodne powierzchnie NURBS z mierzoną ciągłością, scena opisana asystentowi, materiał z jednego zdjęcia, zdjęcie szkicu na terenie, umeblowane pomieszczenia, pochylone cięcia do druku 3D i kontrola wydruku w panelu Problemy.
keywords: co nowego, nowości, informacje o wydaniu, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, silnik renderowania, silnik, otwórz w, usd, gltf, unreal, silnik z dodatku, nurbs, powierzchnie, loft, sweep, ciągłość, g0, g1, g2, zebra, step, iges, opisz scenę, scena, pogoda, pora dnia, pora roku, asystent, materiał ze zdjęcia, zdjęcie, zdjęcie szkicu, umeblowanie, umebluj pomieszczenie, pochylone cięcie, podział, kontrola wydruku, problemy, siatka właściwości, lampy, języki, urządzenia wejściowe, wiersze paska narzędzi, dwg, live
from: e4989b17
---

To zmieniło się w ModelCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) w porównaniu z 0.7. Okno {{ui:Render a picture…}} może teraz wysłać scenę do innego programu, panel Powierzchnie tworzy gładkie powierzchnie swobodne, a połączony asystent może ustawić całą scenę jednym zdaniem.

## Nowe

### Renderowanie

- **Wybór silnika.** {{ui:Render a picture…}} ma listę **Silnik** nad polem Tryb. Nasze dwa silniki, Fast i Path tracer, są domyślne i działają wszędzie. Pozostałe pozycje zapisują scenę jako pakiet (model jako plik USD oraz plik ustawień z dokładnymi wartościami materiałów, włączonymi lampami, słońcem, niebem, ekspozycją i kamerą), który można zabrać do innego programu. Obraz narysowany przez inny program mówi, który program i w jakiej wersji go wykonał. Zobacz [Wybierz program, który narysuje obraz](topic:render-engines).
- **Otwórz w innym programie.** Lista Silnik może zapisać scenę jako plik USD, plik glTF (`.glb`) albo folder projektu Unreal (`.zip`), w przeglądarce i w CadCraft Studio. W Studio może też uruchomić usdview lub program systemowy dla tego pliku. Zobacz [Otwórz scenę w innym programie](topic:render-open-in).
- **Wyślij do silnika gier z Studio.** Studio zapisuje scenę w projekcie Unreal Engine i aktualizuje ją przy każdym wysłaniu, tylko w jedną stronę. Twoje własne zmiany są w warstwie, której CadCraft nigdy nie zapisuje. Zobacz [Wyślij scenę do silnika gry](topic:render-unreal).
- **Silniki z dodatków.** Dodatek może dodać silnik do listy. Silnik napisany w JavaScript rysuje w przeglądarce i w Studio; silnik uruchamiający program wymaga Twojej zgody w Studio. Zobacz [Narysuj obraz innym programem](topic:render-other-program) oraz [Dodaj silnik renderowania za pomocą dodatku](topic:render-engine-addons).
- **Opisz scenę.** Powiedz połączonemu asystentowi „zmierzch, lekki deszcz, jesienne drzewa, ludzie na placu”, a ModelCraft ustawi to w jednym kroku: słońce przesunie się na datę i godzinę, tak aby cienie podążały za nim, zmieni się niebo, pojawią się mokre powierzchnie, a drzewa i ludzie zostaną umieszczeni jako prawdziwe obiekty na etykietach, które możesz ukryć, przenieść lub usunąć. Pora dnia, data lub pora roku oraz pogoda (bezchmurnie, pochmurno, mgła, lekki deszcz, deszcz, burza) działają też samodzielnie, a późniejsze polecenie zmienia tę samą scenę. Mgła jest widoczna w obrazie wysokiej jakości, rysowanym na karcie graficznej; pozostałe silniki pokazują niebo, światło i mokre powierzchnie. Deszcz nie jest rysowany jako spadające smugi.

### Materiały

- **Materiał z jednego zdjęcia.** Podaj ModelCraft zdjęcie powierzchni (ściany, podłogi, kamienia), a program utworzy materiał kafelkowy: oświetlenie na zdjęciu zostaje wyrównane, krawędzie są dopasowane do siebie, a z obrazu wyliczane są mapa koloru, mapa chropowatości i mapa normalnych. Jest to zwykłe przetwarzanie obrazu Twojego własnego zdjęcia, bez wytrenowanego modelu. Chropowatość jest szacunkowa. Płaskie, kwadratowe zdjęcie wykonane prostopadle daje najlepszy kafel; wyraźny wzór, na przykład cegły, może pokazać miękki cień w miejscu połączenia.

### Powierzchnie

- **Powierzchnie swobodne.** Panel {{ui:Surfaces}} tworzy krzywe i powierzchnie NURBS bez przycinania: krzywe przez punkty, loft, powierzchnie prostokreślne, wyciągnięcie, obrót, przeciągnięcia wzdłuż jednej lub dwóch szyn, powierzchnie z siatki krzywych, płaty z czterech krawędzi, dopasowanie i wygładzenie. Każda wspólna krawędź jest mierzona jako G0, G1 lub G2 (szczelina, kąt, skok krzywizny) na dokładnych powierzchniach, a krawędź gorsza niż żądana pojawia się w panelu Problemy z poprawką **Dopasuj**. Paski zebry i kolory krzywizny są rysowane z dokładnych powierzchni. Pliki STEP i IGES są zapisywane i wczytywane. Zobacz [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).

### Teren i pomieszczenia

- **Zdjęcie szkicu na terenie.** {{ui:File}} › {{ui:Import a sketch photo…}} zamienia zdjęcie telefonem odręcznego szkicu na krawędzie na terenie, w skali, którą podasz: jedna grupa, z etykietą dla każdego koloru pisaka. Kartka jest wykrywana i prostowana na Twoim komputerze, a nic nie jest nigdzie wysyłane. Zobacz [Model na planie sytuacyjnym](topic:site-plan).
- **Umebluj pomieszczenie.** Zaznacz podłogę i użyj {{ui:Organize}} › {{ui:Furnish a room…}}. Meble do sypialni, salonu, jadalni, kuchni, łazienki lub biura są ustawiane według reguł, przy ścianach i poza drzwiami oraz oknami, w jednej grupie, którą możesz usunąć jednym krokiem. Jest to domyślny układ do przejrzenia, a nie projekt. Zobacz [Biblioteka startowa](topic:starter).

### Druk 3D

- **Pochylone cięcia.** Podział do druku może pochylić cięcia nawet o 60 stopni, co daje elementom większą powierzchnię do klejenia. Łączniki stoją prostopadle do cięcia. Zobacz [Podziel model do druku](topic:print-split).
- **Kontrola wydruku w Problemach.** Wyniki kontroli wydruku 3D pojawiają się w panelu Problemy, z markerami na modelu, a **Napraw** usuwa je stamtąd. Zobacz [Podpory, grubość ścian, drążenie i naprawa](topic:print-tools).

### We wszystkich aplikacjach

- **Języki.** Pomoc i aplikacje są dostępne w 54 językach. Dziesięć jest nowych: litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki. Języki inne niż angielski to wersje robocze do czasu przeczytania przez native speakera, a tematy pomocy mogą nadal być po angielsku.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler do gier i sterowanie MIDI mogą obsługiwać aplikacje, wszystkie albo wybraną.
- **Wiersze paska narzędzi.** {{ui:Settings}} › {{ui:General}} › Wiersze paska narzędzi ustawia Zawijanie (jak dotąd), 2 wiersze lub 1 wiersz. Pasek, który się nie mieści, przewija się w bok zamiast zabierać miejsce rysunkowi. Zawijanie pozostaje domyślne.
- **Siatka właściwości.** Pola lamp w ModelCraft używają wspólnej siatki: zwijane kategorie, kolumny etykiet i wartości oraz gęstość Kompaktowa. Wpisane działania, na przykład `2*450`, nadal działają.
- **Problemy.** Panel Problemy (przycisk ostrzeżenia na pasku aplikacji) jest wspólny dla wszystkich aplikacji. W ModelCraft zawiera kontrolę wydruku i ostrzeżenia o ciągłości powierzchni.
- **Live.** Sesja Live TeamWork pokazuje, kto gdzie jest. Zobacz [Modeluj wspólnie z Live TeamWork](topic:work-live).
- **Dodatki.** Dodatki mogą dodawać silniki renderowania, jak wyżej.
- **Połącz swoją sztuczną inteligencję.** Kontrakt narzędzi i sprawdzenia ośmiu aplikacji przechodzą, razem 454 narzędzia. Połączenie jednym kliknięciem w Studio, hostowany łącznik dla asystentów w przeglądarce, własny klucz w Studio oraz opublikowany pakiet nie są jeszcze obiecane. Aplikacje nie zawierają własnej sztucznej inteligencji. Zobacz [Używaj ModelCraft z asystentami AI](topic:use-with-ai-assistants).

## Naprawione w 0.8.1

- **Sekcja klas DWG.** Sekcja klas pliku DWG była odczytywana jako zły typ, co mogło uszkodzić plik przy imporcie. Teraz jest odczytywana poprawnie, w ModelCraft i w pozostałych aplikacjach, które czytają DWG.
- **Tablety w pionie.** Wolna wysokość siatki trafia do obszaru rysowania, a układ arkusza zaczyna się od szerokości 760 pikseli lub mniejszej. Arkusz stylów ModelCraft też zawiera tę zmianę.
- **Język w Studio.** CadCraft Studio i spakowane wydania mogą zmienić język podczas działania; wcześniej były tylko po angielsku. Nie zostało to jeszcze przetestowane na wszystkich platformach: daj nam znać, jeśli język się nie zmienia.

## Jeszcze nie w tej wersji

- **Brak podpisu kodu.** Windows może pokazać SmartScreen: wybierz {{ui:More info}}, a następnie {{ui:Run anyway}}. Na Macu kliknij prawym przyciskiem i wybierz {{ui:Open}}. Wydania ze sklepów są wstrzymane, a wersja na iPada i iPhone nie została przebudowana dla 0.8.1.
- Rysowanie obrazu przez inny program bez dodatku silnika renderowania, kamery panoramiczne lub stereo oraz obraz nieba z innego programu, a także wtyczka otwierająca scenę w Unreal, nie są jeszcze dostępne. Pliki są zapisywane; wtyczka nie jest wydana i nie była uruchamiana w Unreal.
- Powierzchnie swobodne: G3 i klasa A nie są mierzone ani deklarowane, a przycinanie i bryły pojawią się później.
- Obrazy z innych programów nie są piksel w piksel takie jak nasze: zgodne są tylko kamera, słońce, lampy i ekspozycja.
- Poprawka 0.8.1 dla zmiany języka w Studio nie jest przetestowana na wszystkich platformach.

Resztę opisano w [Jeszcze nie zbudowano](topic:not-built-yet). Poprzednie wydanie opisano w [Co nowego w 0.7](topic:whats-new-0-7).
