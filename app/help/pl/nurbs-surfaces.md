---
title: Powierzchnie swobodne (NURBS)
summary: Gładkie krzywe i powierzchnie do osłon produktów, karoserii samochodów i kadłubów łodzi — loft, przeciąganie, sieci krzywych, łaty z czterech krawędzi, przejścia, przycinanie — z ciągłością G0, G1 i G2 mierzoną na dokładnych powierzchniach, bryły z sumą, odejmowaniem i częścią wspólną, widoki zebra i krzywizny, powierzchnie dopasowane do skanu z mierzonym błędem oraz pliki STEP lub IGES.
keywords: nurbs, skan, inżynieria odwrotna, dopasuj, siatka na powierzchnię, chmura punktów, stl, przytnij, przycięty, otwór, wytnij, bryła, bryły, boolowski, suma, odejmij, część wspólna, różnica, zszyj, zamknięty, swobodny, free-form, powierzchnia, powierzchnie, b-spline, bspline, krzywa, spline, loft, przeciągnij, prowadnica, sieć, coons, łata, przejście, dopasowanie, ciągłość, g0, g1, g2, styczna, krzywizna, zebra, punkty kontrolne, węzły, stopień, step, iges, klasa a
from: 09887405
---

Panel **Powierzchnie** tworzy gładkie krzywe i powierzchnie jakich używa się w osłonach produktów, karoseriach samochodów i kadłubach łodzi: NURBS, ta sama matematyka, której używają inne programy do modelowania powierzchni. Wszystko jest mierzone na dokładnych powierzchniach, nigdy na trójkątach, które widzisz. Wymiary w panelu są w **milimetrach**, niezależnie od jednostki, którą pokazuje model.

Otwórz go z panelu po prawej stronie: {{ui:Powierzchnie}} › {{ui:Otwórz panel Powierzchnie}}. Model, który już ma powierzchnie, otwiera go sam.

## Jak działa polecenie

1. Naciśnij polecenie (na przykład **Loft**). Panel mówi, czego jeszcze potrzebuje: punktów, krzywych, krawędzi powierzchni lub końca krzywej.
2. Wskaż je: kliknij je w widoku 3D albo naciśnij **Wskaż** (lub przyciski krawędzi i końca) obok każdego z nich na liście. Przy krawędzi kliknij blisko tej krawędzi powierzchni.
3. Sprawdź opcje (stopień, tolerancję, ciągłość, …) i naciśnij **Utwórz**.

Krzywe z punktów przyjmują punkty wpisane po jednym w wierszu (`x, y, z` w mm) albo **Wskaż punkty w widoku**: każde kliknięcie używa tego samego przyciągania co narzędzia rysowania; naciśnij <kbd>Enter</kbd> lub kliknij dwukrotnie, aby zakończyć, <kbd>Esc</kbd>, aby przerwać.

## Krzywe

- **Krzywa przez punkty** przechodzi przez każdy punkt. **Krzywa z punktów kontrolnych** podąża zamiast tego za siatką punktów.
- **Wstaw węzeł**, **Podnieś stopień** i **Obniż stopień** zmieniają sposób opisu krzywej bez jej przesuwania (obniżanie odmawia, gdy krzywa przesunęłaby się bardziej niż tolerancja). **Przebuduj krzywą** nadaje jej nową liczbę punktów kontrolnych i podaje, o ile się przesunęła.
- **Dopasuj krzywą** sprawia, że koniec jednej krzywej styka się z drugą z G0 (dotyk), G1 (ten sam kierunek) lub G2 (także ta sama krzywizna). **Przejście krzywej** dodaje nową krzywą między dwoma końcami.
- **Połącz krzywe** i **Podziel krzywą**.

## Powierzchnie

- **Loft** przez dwie lub więcej krzywych, **Powierzchnia prostolinijna** między dwiema, **Wyciągnij krzywą**, **Obróć krzywą**.
- **Przeciągnij wzdłuż jednej prowadnicy** prowadzi profil wzdłuż ścieżki bez skręcania; **Przeciągnij wzdłuż dwóch prowadnic** utrzymuje końce profilu na obu prowadnicach. Przeciągnięcia są dopasowywane: wiersz stanu mówi, jak blisko pozostały prawdziwego przeciągnięcia.
- **Powierzchnia z sieci krzywych** przechodzi przez siatkę krzywych (pierwsze wskazania to profile, reszta to prowadnice). **Łata z czterech krawędzi** wypełnia cztery krzywe, które spotykają się w narożnikach.
- **Dopasuj powierzchnię** sprawia, że krawędź powierzchni styka się z sąsiadem z G0, G1 lub G2; **Przejście powierzchni** dodaje powierzchnię między dwiema krawędziami.
- **Odsunięcie powierzchni**, **Wydłuż powierzchnię** (powierzchnia biegnie dalej tak, jak szła), **Przebuduj powierzchnię** oraz węzły i stopień dla powierzchni.

## Sprawdzanie jakości

Tabela **Wspólne krawędzie** wymienia każdą krawędź, którą dzielą dwie powierzchnie, z odstępem (mm), kątem między nimi (°) i skokiem krzywizny (1/mm), oraz mówi, czy to daje G0, G1 czy G2. Krawędź gorsza niż zamówiłeś trafia też do **Problemów** (przycisk ⚠ na pasku aplikacji) z naprawą **Dopasuj**.

**Pokaż jako** › **Pasy zebry** i **Krzywizna (Gaussa)** pochodzą z dokładnej powierzchni: pasy, które przechodzą nieprzerwanie przez krawędź, oznaczają G1; pasy, które zachowują też swoją szerokość, oznaczają G2. Krzywizna jest niebieska tam, gdzie powierzchnia jest siodłem, czerwona tam, gdzie jest kopułą, i biała tam, gdzie jest płaska. **Punkty kontrolne** rysują siatki kontrolne.

G0–G2 są mierzone w 33 punktach na krawędź. **G3 i jakość „klasy A” nie są mierzone** i nie są deklarowane.

## Przycinanie powierzchni

Grupa **Przycinanie** tnie powierzchnię bez zmiany jej kształtu: powierzchnia zachowuje wszystkie swoje punkty kontrolne, a widoczna, liczona i zapisywana jest tylko część w obrębie konturu. **Przytnij do prostokąta** i **Przytnij okręgiem** działają na udziale (od 0 do 1) powierzchni w każdym kierunku, więc nie wymagają wskazywania w widoku; **Przytnij krzywą** przyjmuje zamkniętą krzywą leżącą na powierzchni (jest rzutowana na powierzchnię i odrzucana słownie, gdy jest otwarta albo dalej niż tolerancja). Zaznacz **Wytnij otwór**, aby usunąć wnętrze konturu; zostaw to wyłączone, aby zachować tylko wnętrze. Powierzchnia może mieć jeden zachowany kontur i dowolną liczbę otworów; kontur, który przecina inny, jest odrzucany. **Usuń przycięcie** pokazuje z powrotem całą powierzchnię. Ścięte krawędzie idą dokładnie za konturem; Cofnij panelu cofa przycięcie jak każdy inny krok.

STEP przenosi przycięcie jako granice ściany, a IGES jako przyciętą powierzchnię (encja 144); oba je odczytują.

## Bryły i operacje logiczne

Grupa **Bryły** zamienia powierzchnie w zamknięte bryły i je łączy. Bryła to tutaj zbiór powierzchni panelu, które razem zamykają objętość; jej ściany pozostają dokładnymi powierzchniami NURBS z przycięciami.

- **Prostopadłościan (bryła)**, **Walec (bryła)** i **Kula (bryła)** tworzą bryłę z wpisanych rozmiarów (w mm): pudełko z sześcioma płaskimi ścianami, walec z okrągłą boczną ścianą i dwoma płaskimi końcami przyciętymi do okręgu, kulę z jednej obróconej powierzchni.
- **Bryła z powierzchni** grupuje powierzchnie, które sam zrobiłeś. Wskaż je albo nic, aby użyć wszystkich pokazanych powierzchni, które nie są jeszcze w bryle. Są zszywane w ramach tolerancji: jeśli się nie zamkną, nic się nie zmienia, a panel mówi, ile krawędzi pozostaje otwartych i jak blisko muszą się spotkać.
- **Suma**, **Odejmij** (druga bryła jest odejmowana od pierwszej) i **Część wspólna** (tylko to, co obie mają wspólnego) biorą dwie bryły: kliknij ścianę każdej w widoku albo naciśnij **Wskaż** na liście **Bryły**. Zaznacz **Zachowaj obie bryły**, aby zostawić je obok wyniku.

Operacja logiczna zachowuje każdą ścianę na jej dokładnej powierzchni i tnie ją nowymi konturami przycięcia wzdłuż przecięcia. Wiersz wyniku podaje zmierzone liczby: jak daleko punkty silnika brył musiały się przesunąć, aby leżeć na dokładnych powierzchniach (nigdy więcej niż tolerancja), jak blisko punkty przecięcia są obu powierzchni (zwykle kilka milionowych milimetra), objętość oraz to, czy nowe ściany zamykają się ponownie, gdy są zszyte od nowa z dokładnych powierzchni. Objętości są mierzone na trójkątach w ramach tolerancji (0,05 mm, o ile nie ustawisz innej), więc objętość kuli lub walca wychodzi nieco mniejsza niż dokładna: mniejsza tolerancja daje lepszy wynik. Operacja logiczna, której nie da się wykonać czysto (bryły nic nie mają wspólnego, kontur przecinałby sam siebie), jest odrzucana słownie i niczego nie zmienia. Jedna operacja logiczna to jeden krok **Cofnij** panelu.

Na liście **Bryły** **Rozgrupuj** zachowuje ściany jako zwykłe powierzchnie; przycisk kosza usuwa bryłę i jej ściany.

**Dodaj do modelu** (na liście **Bryły**) umieszcza kopię bryły w modelu jako jedną zamkniętą grupę, jej ściany jako trójkąty w granicy 0,05 mm, w jednym kroku Cofnij modelu. Potem działa z własnymi **Sumą**, **Odejmij** i **Częścią wspólną** modelu, z wypychaniem/ciągnięciem i sprawdzaniem do druku 3D; dokładna bryła zostaje w panelu.

## Zaokrąglenia i pogrubianie

**Zaokrąglenie między ścianami** zaokrągla krawędź, w której spotykają się dwie ściany jednej bryły: wskaż dwie ściany (w widoku albo przyciskiem **Wskaż** na liście), wpisz **promień** i, dla promienia zmieniającego się wzdłuż krawędzi, **promień na końcu** (0 zachowuje jeden promień). Kula o tym promieniu toczy się wzdłuż krawędzi, dotykając obu ścian; zaokrąglenie to dokładny łuk kołowy, który zostaje w każdym punkcie, połączony w jedną powierzchnię, a dwie ściany są przycinane tam, gdzie kula je dotyka. Zewnętrzna krawędź traci materiał, wewnętrzny narożnik zyskuje go. Wiersz wyniku podaje, co zmierzono: jak daleko powierzchnia zaokrąglenia jest od toczącej się kuli między punktami, z których została zbudowana (punkty dodaje się, aż będzie w granicy jednej czwartej tolerancji), największy kąt między zaokrągleniem a każdą ze ścian wzdłuż linii styku oraz te same liczby co przy Sumie. Promień, który nie pasuje (kula wyszłaby poza ścianę albo ściana wygina się ciaśniej niż promień), jest odrzucany z nazwą ściany i niczego nie zmienia.

**Zaokrąglij kilka krawędzi** zaokrągla wiele krawędzi jednym krokiem: wskaż dwie ściany pierwszej krawędzi, potem dwie ściany następnej i tak dalej (ściana może być w kilku parach, na przykład górna ściana pudełka w czterech z nich); wszystkie krawędzie dostają wpisany promień. Każde zaokrąglenie jest obliczane na bryle w jej dotychczasowym stanie, a potem są wycinane jedno po drugim, więc kolejność nie ma znaczenia. Tam, gdzie dwie zaokrąglone krawędzie spotykają się w narożniku, a pozostałe krawędzie są ostre, dwa zaokrąglenia wchodzą w siebie wzdłuż krzywej przecięcia (załamanie). Tam, gdzie trzy zaokrąglone zewnętrzne krawędzie trzech płaskich ścian, prostopadłych do siebie, spotykają się z jednym promieniem, narożnik to jedna **łata sfery** styczna do wszystkich trzech zaokrągleń (odznacz **Narożniki**, aby dostać załamany narożnik); krawędź musi być co najmniej dwa razy dłuższa niż promień, jeśli oba jej końce są takimi narożnikami. Wiersz wyniku mówi, ile krawędzi zaokrąglono i jak wyszły narożniki. Wewnętrzne krawędzie też można zaokrąglać razem, ale wynik, który nie zamyka się ponownie, jest tylko zgłaszany (wiersz to mówi), więc sprawdź go.

**Pogrub w bryłę** nadaje powierzchni grubość: wskaż ją, wpisz **grubość** i zaznacz **Drugą stronę**, aby rosła w drugą stronę. Ściana przesunięcia jest dopasowana do powierzchni i mierzona względem niej (wiersz wyniku podaje największą różnicę od grubości); ścianki biegną wzdłuż każdej krawędzi i każdego konturu przycięcia. Jeśli powierzchnia wygina się ciaśniej niż grubość po tej stronie albo inna część leży bliżej niż grubość, operacja jest odrzucana z nazwą powierzchni i miejscem, a niczego nie zmienia.

## Cofnij, plik, STEP i IGES

Panel ma własne **Cofnij** i **Ponów** (jeden krok na polecenie). Powierzchnie są zapisywane w pliku `.modelcraft` razem z modelem; nie są częścią własnego cofania modelu, tak jak materiały pliku.

**STEP…** (AP242) i **IGES…** zapisują krzywe i powierzchnie dokładnie tak, jak są (krzywe i powierzchnie B-spline, nic nie zamienione na trójkąty). Każda powierzchnia jest własną ścianą z przycięciem; bryła jest zapisywana jako jedna zamknięta powłoka, z każdą krawędzią dzieloną przez dwie ściany, jak oczekują inne programy CAD (wiersz stanu mówi, ile brył wyszło w ten sposób). W IGES ta sama bryła jest jednym rozmaitym bryłowym B-rep (encja 186 nad zamkniętą powłoką 514, ściany 510, pętle 508, jedna lista krawędzi 504 i jedna lista wierzchołków 502); bryła, której ściany nie łączą się krawędź w krawędź, jest zapisywana jako osobne ściany, a wiersz to mówi. **Import…** odczytuje taką bryłę z powrotem jako bryłę, z STEP i z IGES. Odczytuje krzywe i powierzchnie zapisane w ten sposób oraz zestawy łat `.ccnurbs`; bryły STEP z innych programów otwierają się przez Plik › Import jako siatki.

## Powierzchnie ze skanu (inżynieria odwrotna)

Zaznacz skanowaną siatkę w modelu (nic niezaznaczonego oznacza wszystko, co jest pokazane), otwórz **Powierzchnie** i w grupie **Skan** wybierz **Dopasuj powierzchnie do skanu**. Narzędzie szuka **płaszczyzn**, **walców**, **sfer** i **stożków** (dokładnych powierzchni, z których składa się obrobiona część; każdy wiersz pokazuje znaleziony promień lub półkąt), znajduje **zaokrąglenia** (zaokrąglone krawędzie i narożniki: mały walec lub sfera, która styczna wchodzi w dwie lub więcej innych ścian, pokazywana z promieniem i ścianami, które łączy), **zaokrąglenia pierścieniowe** (torus: zaokrąglona krawędź, w której płaska ściana spotyka walec lub stożek, pokazywana z promieniem i promieniem pierścienia) oraz **zmienne zaokrąglenia** (zaokrąglona krawędź, której promień zmienia się wzdłuż niej, pokazywana z promieniem na każdym końcu), dopasowuje **jedną swobodną łatę** do gładkiego, łagodnie zakrzywionego fragmentu i przycina każdą ścianę do konturu części skanu, z której pochodzi, więc otwory i narożniki zostają. Opcje: **tolerancja** (jak daleko w mm punkt skanu może być od płaszczyzny lub walca i nadal do nich należeć oraz cel dla swobodnej łaty), **najmniejszy fragment** (udział pola powierzchni) i **najwięcej ścian**. Ten sam skan i te same opcje zawsze dają te same ściany.

Wynik to tabela, jeden wiersz na ścianę: jej rodzaj, z ilu trójkątów powstała i **błąd zmierzony od skanu do ściany** (rms, największy i udział punktów w granicy tolerancji). Mierzone punkty to wierzchołki skanu i środek każdego trójkąta. Błędu nie mierzy się w drugą stronę (od ściany do skanu), więc ściana, która sięga poza skan, by się nie ujawniła. Notka pod tabelą mówi też, jaka część powierzchni była zbyt mała, by ją dopasować. W widoku punkty skanu są kolorowane według **mapy odchyleń**: niebieski na ścianie, zielony w połowie tolerancji, czerwony przy tolerancji lub powyżej (odznacz **Pokaż mapę odchyleń**, aby ją ukryć). Fragmenty, które zginają się na siebie (na przykład zamknięta rura dopasowana łatami swobodnymi), są wymienione jako niedopasowane; nigdy nie są wymuszane na jedną powierzchnię.

**Zszyj powierzchnie w bryłę** zszywa każdą pokazaną powierzchnię, która nie jest w bryle, w jedną zamkniętą bryłę. Skanowe ściany spotykają się tylko w granicach błędu samego skanu, więc narzędzie próbuje najmniejszej odległości złączenia, która się zamyka (nigdy większej niż ustawiona **odległość zszywania**), i odmawia słownie, gdy ściany się nie zamykają. Nigdy nie łata przerwy. Pudełko z zaokrąglonymi krawędziami zszywa się, gdy jego zaokrąglenia zostały znalezione jako osobne ściany; odległość złączenia, która się zamknęła, jest w wyniku. Bryła następnie działa z Sumą, Odejmij, Częścią wspólną i **Dodaj do modelu**.

Czego to nie robi: **zaokrąglenie pierścieniowe** (torus) jest szukane tylko wokół osi walca lub stożka już znalezionego, a **zmienne zaokrąglenie** tylko wzdłuż dość prostej krawędzi (jego przekroje są cięte prostopadle do jednego kierunku); gdzie indziej wychodzą jako swobodne łaty, gdy są dość gładkie, a w przeciwnym razie są pomijane. Sfery, stożki i zaokrąglenia są znajdowane przez losowe próbkowanie, więc bardzo mały (kilka trójkątów) może zostać pominięty. Mapa odchyleń pokazuje odległość od skanu do ścian, a nie odwrotnie. Bardzo duże skany (powyżej 300 000 trójkątów) są tu odrzucane. Ściany walca pełnego obrotu są cięte wokół otworów, a szew umieszczany tam, gdzie nie ma otworu. Sprawdź każdą ścianę względem skanu, zanim na niej polegasz.

## Jeszcze nie zbudowano

Zaokrąglanie krawędzi, które spotykają się w narożniku zakrzywionych ścian albo mają różne promienie (przejście wierzchołka), zaokrąglenie między ścianami, które się nie stykają, wewnętrzne zaokrąglenie kończące się na pochylonej lub zakrzywionej ścianie oraz operacje logiczne i zaokrąglenia liczone na powierzchniach bez trójkątów (tutaj silnik brył działa na trójkątach w granicy tolerancji, a każdy punkt jest potem wracany na dokładne powierzchnie).
