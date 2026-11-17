---
title: Widok na żywo
summary: Okno obok modelu, które pokazuje go w wyglądzie czasu rzeczywistego, ze słońcem i cieniami, i podąża za każdą zmianą; przejdź przez model i ustaw porę dnia oraz miesiąc.
keywords: udostępnianie, panorama, 360, wycieczka, wirtualna wycieczka, samodzielna przeglądarka, przeglądarka offline, wysyłanie do klienta, film, film z przejścia, rozsypywanie, trawa, łąka, las, skały, rośliny, drzewa, tłum, malowanie roślin, widok na żywo, czas rzeczywisty, render w czasie rzeczywistym, spacer, przejście, pierwsza osoba, prezentacja, klient, drugi ekran, drugie okno, monitor, pora dnia, słońce, pora roku, miesiąc, cienie, okluzja otoczenia, odbicia, odbite światło, globalne oświetlenie, webgpu, webgl
from: fca3b0d6
---

{{ui:Eksport}} › {{ui:Widok na żywo}} otwiera panel nad aplikacją, który pokazuje model w wyglądzie czasu rzeczywistego: niebo i słońce z miejsca i daty modelu, cienie słońca, wygląd i materiały nadane ścianom, lampy oraz światło odbite od ścian i podłóg. Podąża za tym, co robisz: obracasz widok, a on też się obraca; zmieniasz model, a zmiana pojawia się chwilę później. Nic nie zostaje przesłane.

## Otwieranie

1. Wybierz {{ui:Eksport}} › {{ui:Widok na żywo}}. Panel otworzy się w prawym dolnym rogu.
2. Przeciągnij pasek tytułu, aby go przesunąć, a za róg pociągnij, aby go powiększyć.
3. {{ui:Nowe okno}} przenosi go do własnego okna, na przykład na drugi ekran. {{ui:Eksport}} › {{ui:Widok na żywo w nowym oknie}} otwiera go tam od razu. Jeśli przeglądarka blokuje wyskakujące okna, otworzy się jako panel.
4. {{ui:Zamknij}} zamyka go.

## Sterowanie

| Element | Co robi |
|---|---|
| {{ui:Podążaj za widokiem}} | Włączone: widok na żywo patrzy tam, gdzie patrzy widok ModelCraft. Spacer wyłącza tę opcję |
| {{ui:Spacer}} | Przejście przez model (poniżej) |
| {{ui:Grawitacja}} | Podczas spaceru: stoisz na podłogach i wchodzisz po schodach. Wyłączona: latasz |
| {{ui:Godzina}} | Godzina dnia, od 05:00 do 21:00. Słońce przesuwa się podczas przeciągania |
| {{ui:Miesiąc}} | Miesiąc (21. dzień miesiąca), dzięki czemu widać słońce zimą i latem |
| {{ui:Jakość}} | {{ui:Dla tego komputera}} (to, co dostaje [tego komputera](topic:your-machine)), albo {{ui:Niska}}, {{ui:Średnia}} lub {{ui:Wysoka}} |

Wiersz na dole mówi, co rysuje widok (WebGPU lub WebGL 2), jaka jest jakość i jakie jest odbite światło.

## Przejście przez model

1. Obróć główny widok tam, gdzie chcesz stanąć, i wybierz {{ui:Spacer}}. Stoisz na podłodze poniżej punktu oka widoku, na wysokości 1.6 m.
2. Kliknij widok na żywo, a potem użyj klawiszy {{key:W}} {{key:A}} {{key:S}} {{key:D}} albo klawiszy strzałek. Przytrzymaj {{key:Shift}}, aby biec. Przeciągnij, aby się rozejrzeć.
3. Stopnie do 40 cm są pokonywane (schody); wyższe przeszkody to ściany. Ściany zatrzymują cię i pozwalają się po nich ślizgać.
4. Przy wyłączonej {{ui:Grawitacja}} latasz: {{key:E}} w górę, {{key:Q}} w dół.
5. {{key:Esc}} kończy spacer.

## Rozsypywanie roślin, skał i ludzi

{{ui:Rozsypanie}} na pasku widoku na żywo otwiera obok obrazu panel rozsypywania. Zestaw rozsypywania rozmieszcza elementy z biblioteki otoczenia (drzewa, krzewy, trawa, kwiaty, skały, ludzie, samochody) na wybranej części modelu. Elementy są rysowane tylko w widoku na żywo: nie są geometrią modelu i widok główny ich nie pokazuje.

1. **Wypełnij ściany:** zaznacz ściany (lub grupę, na przykład teren) w ModelCraft, a następnie wybierz {{ui:Wypełnij zaznaczenie}}. Zestaw je obejmie.
2. **Malowanie:** wybierz {{ui:Malowanie}}, a potem przeciągnij po widoku na żywo. Gdy są zaznaczone ściany, malowanie działa tylko na nich; gdy nic nie jest zaznaczone, działa na wszystko pod pędzlem, łącznie z gruntem. {{ui:Rozmiar pędzla}} ustawia pędzel; {{ui:Gumka}} usuwa namalowane plamy.
3. Zaznacz, co rozsypać. Liczba obok każdej pozycji to jej waga: 3 i 1 daje trzy pierwsze elementy na każdy jeden drugi.

| Element | Co robi |
|---|---|
| {{ui:Na m²}} | Ile elementów przypada na każdy metr kwadratowy |
| {{ui:Odstęp (m)}} | Żadne elementy nie stoją bliżej tej odległości od innych obiektów, a także pod dachem lub stołem. 0 wyłącza opcję |
| {{ui:Obrót (°)}} | O ile każdy element jest losowo obracany wokół pionu |
| {{ui:Maks. nachylenie (°)}} | Brak elementów tam, gdzie powierzchnia jest bardziej stroma |
| {{ui:Rozmiar}} | Najmniejszy i największy rozmiar jako współczynnik rozmiaru samego elementu |
| {{ui:Wysokość od, do (m)}} | Tylko między tymi wysokościami (puste = dowolna) |
| {{ui:Pochyl wg powierzchni}} | 0 zostawia elementy pionowo; 1 ustawia je prostopadle do zbocza |
| {{ui:Ziarno}}, {{ui:Przetasuj}} | Dla tego samego ziarna rozsypanie jest zawsze takie samo; {{ui:Przetasuj}} wybiera inne |

Zestawy są zapisywane w pliku .modelcraft i podążają za ścianami, które pokrywają, gdy je zmieniasz. Maksymalną liczbę elementów rysowanych przez widok na żywo określa [poziom tego komputera](topic:your-machine): 20 000 dla {{ui:Tylko procesor}}, 100 000 dla {{ui:Karta graficzna, podstawowy}}, milion dla {{ui:Karta graficzna, wysoki}}. Panel mówi, ile elementów zostało umieszczonych z ilu wymaganych przez gęstość: mniej jest umieszczanych, gdy budżet się wyczerpie lub gdy obiekty je wykluczają. Elementy blisko kamery są rysowane jako one same, dalsze jako proste kształty w swoich kolorach.

:::note
Rozsypane elementy są widoczne w widoku na żywo (oraz w jego spacerze, panoramach i samodzielnej przeglądarce). Wyrenderowany obraz ich jeszcze nie rysuje.
:::

## Udostępnianie: panoramy, wycieczki, przeglądarka, film

{{ui:Udostępnij}} na pasku widoku na żywo tworzy pliki z widoku na żywo. Wszystko powstaje na tym komputerze; nic nie jest przesyłane.

| Wybór | Co otrzymujesz |
|---|---|
| {{ui:360° panorama}} | Obraz 360° z miejsca, w którym stoi widok (lub w którym trwa spacer), jako równoprostokątny PNG, który otwierają przeglądarki panoram i większość serwisów fotograficznych |
| {{ui:Dodaj to miejsce do wycieczki}}, a potem {{ui:Zapisz wycieczkę}} | Jedna strona internetowa z panoramą w każdym miejscu i strzałkami do miejsc, które dane miejsce widzi (ściana pomiędzy ukrywa strzałkę) |
| {{ui:Zapisz przeglądarkę}} | Jedna strona internetowa z modelem w tym wyglądzie czasu rzeczywistego: można go obracać, przechodzić przez niego i przeskakiwać do zapisanych scen. Otwiera się offline w przeglądarce z WebGPU lub WebGL 2, z folderu, z pamięci USB lub z wiadomości e-mail, bez instalacji i konta, i nie ładuje niczego z internetu |
| {{ui:Film ze ścieżki}} | Ścieżka kamery z osi czasu (lub zapisane sceny po kolei) jako film w tym wyglądzie czasu rzeczywistego, w rozmiarze widoku na żywo: WebM lub MP4 tam, gdzie przeglądarka potrafi je wytworzyć, w przeciwnym razie ponumerowane obrazy w archiwum ZIP |

Rozmiar panoramy zależy od jakości: 1024, 2048 lub 4096 pikseli szerokości przy {{ui:Niska}}, {{ui:Średnia}} i {{ui:Wysoka}}. Plik przeglądarki ma około 5 MB plus model.

:::note
Wycieczka i przeglądarka są przygotowane do pokazywania, a nie do edycji: po zapisaniu zachowują model taki, jaki był.
:::

## Jakość

| | Niska | Średnia | Wysoka |
|---|---|---|---|
| Cienie słońca | jedna mapa cieni | trzy kaskady | cztery kaskady |
| Okluzja otoczenia (cienie kontaktowe) | | ✓ | ✓, drobniejsza |
| Odbicia w metalu | | | ✓ |
| Bloom (gdy Wyrenderuj obraz go ustawia) | | ✓ | ✓ |
| Wygładzone krawędzie | FXAA | przez kilka klatek (TAA) | przez kilka klatek (TAA) |
| Odbite światło | grube | drobniejsze | najdrobniejsze |

{{ui:Dla tego komputera}} wybiera Niską na komputerze bez użytecznej karty graficznej, Średnią z wbudowanym układem graficznym, a Wysoką z osobną kartą graficzną. Niska jest przeznaczona dla laptopa z 8 GB pamięci i bez karty graficznej.

## Odbite światło

Światło odbijające się od oświetlonej słońcem ściany na podłogę oraz ciemniejsze wnętrze pomieszczenia są obliczane tym samym śledzeniem ścieżek, które tworzy [wyrenderowane obrazy](topic:render): w wybranych punktach modelu liczona jest mała panorama, w tle, na każdym rdzeniu procesora. Gdy praca trwa, dolny wiersz pokazuje {{ui:Odbite światło: 40 %}}; gdy wynik jest gotowy, widok go uwzględnia. Po każdej zmianie obliczenia zaczynają się od nowa.

:::note
To przybliżenie na potrzeby widoku na żywo, a nie wyrenderowany obraz: drobne szczegóły między punktami dostają odbite światło z pobliskich punktów. Do gotowego obrazu użyj [Wyrenderuj obraz](topic:render).
:::

## Jasność i kolory

Widok na żywo używa tej samej jasności, balansu bieli, kontrastu i transformacji widoku (ACES, AgX, filmowej lub standardowej) co [Wyrenderuj obraz](topic:render): ustaw je tam, a widok na żywo pójdzie za nimi.

:::note
Przeglądarki różnią się. Tam, gdzie przeglądarka ma WebGPU (Chrome i Edge w Windows, macOS i ChromeOS, Safari 26), widok na żywo z niego korzysta; w pozostałych (większość przeglądarek w Linuksie, starsze systemy Apple) używa WebGL 2 i wygląda tak samo.
:::
