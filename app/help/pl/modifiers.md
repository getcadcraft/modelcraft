---
title: Modyfikatory siatki, grupy lub komponentu
summary: Skaluj, odbijaj, twórz tablice, wygładzaj, fazuj, tnij i zginaj siatkę bez jej zmieniania; powtarzaj lub skaluj grupę albo komponent tym samym stosem, a gdy będziesz gotowy, uczyń zmiany trwałymi.
keywords: modyfikator, modyfikatory, stos, grupa, komponent, skala, wypalanie, edytuj źródło, niedestrukcyjny, lustro, tablica, tablica promieniowa, powierzchnia podziału, wygładź, fazuj, zamień w bryłę, pogrubienie, boolean, wytnij, przemieszczenie, szum, scal, redukcja, uprość, klatka, klatka kratowa, deformacja krzywą, zegnij, owinięcie, shrinkwrap, zastosuj
from: dd5ec1cb
---

**Modyfikator** zmienia to, co siatka pokazuje, bez zmiany samej siatki. Odbij jedną połowę części i modeluj tylko tę połowę; zaokrąglij pudełko powierzchnią podziału i dalej edytuj pudełko. Modyfikatory tworzą **stos** i działają po kolei, od góry do dołu. To, co widzisz, eksportujesz, drukujesz i renderujesz, to siatka z każdym włączonym modyfikatorem.

## Dodawanie modyfikatora

1. Zaznacz siatkę. W obszarze roboczym Model jej sekcja **Modyfikatory** znajduje się w {{ui:Informacje o obiekcie}}; w obszarze roboczym Siatka — w panelu po prawej.
2. Wybierz modyfikator z {{ui:Dodaj modyfikator…}}. Trafia na dół stosu.
3. Zmień jego ustawienia pod nazwą. Długości przyjmują te same wartości co pole Wartość, więc `600mm`, `2'6"` i `(6m)/4` działają.

Każda zmiana to jeden krok cofnięcia: {{key:Mod+Z}} ją cofa.

## Przyciski przy każdym modyfikatorze

- Pole wyboru włącza lub wyłącza modyfikator.
- Przycisk z ekranem pokazuje lub ukrywa go w widoku (zostaje w stosie).
- Przycisk z aparatem pokazuje lub ukrywa go w renderach i filmach, więc modyfikator może służyć tylko do renderów (albo tylko do widoku).
- Strzałki przesuwają go w górę lub w dół stosu. Kolejność ma znaczenie: lustro, a potem powierzchnia podziału daje gładki szew; powierzchnia podziału, a potem lustro — nie.
- {{ui:Zastosuj}} wprowadza kształt do siatki: modyfikatory powyżej tego i sam ten modyfikator są wykonywane na samej siatce i opuszczają stos. To jeden krok cofnięcia.
- Krzyżyk usuwa modyfikator.

## Modyfikatory

| Modyfikator | Co robi |
| --- | --- |
| Skala | Skaluje względem punktu początkowego obiektu, z współczynnikiem dla czerwonej, zielonej i niebieskiej osi. Działa też na grupie lub komponencie. |
| Lustro | Dodaje odbitą kopię w poprzek czerwonej, zielonej lub niebieskiej osi przez punkt początkowy siatki i łączy połówki tam, gdzie się stykają. |
| Tablica | Kopiuje w linii (krok o własnym rozmiarze razy podane liczby, plus stały krok), wokół osi albo wzdłuż krzywej w modelu. Grupa lub komponent przyjmuje linię. |
| Powierzchnia podziału | Wygładza siatkę metodą Catmull-Clark. Ostre krawędzie pozostają zagięte. Renderowania mogą używać więcej poziomów niż widok. |
| Fazuj | Zaokrągla każdą krawędź ostrzejszą niż podany kąt. |
| Zamień w bryłę | Nadaje powierzchni grubość i zamyka jej brzeg. |
| Boolean | Wycina, łączy lub zachowuje część wspólną z innym obiektem w modelu. Oba muszą być zamkniętymi bryłami. |
| Przemieszczenie | Przesuwa powierzchnię do środka lub na zewnątrz za pomocą gładkiego szumu. Ta sama wartość ziarna daje za każdym razem te same wypukłości. |
| Scal | Łączy wierzchołki bliższe niż podana odległość. |
| Redukcja | Zachowuje część trójkątów, usuwając te, które najmniej zmieniają kształt. |
| Wygładź | Rozluźnia wierzchołki w stronę sąsiadów. |
| Klatka kratowa | Zagina siatkę za pomocą klatki: przesuń punkty klatki, a siatka podąży. |
| Deformacja krzywą | Zagina siatkę wzdłuż krzywej w modelu, wzdłuż czerwonej, zielonej lub niebieskiej osi. |
| Shrinkwrap | Przesuwa każdy wierzchołek na najbliższy punkt innego obiektu. |

## Na grupie lub komponencie

Grupa lub komponent może też przechowywać przepis, więc klosz lampy może być **Skalą** i **Tablicą** jednego klosza, a zmiana jednej liczby zmienia lampę.

1. Zaznacz grupę lub komponent. W {{ui:Informacje o obiekcie}} sekcja **Modyfikatory** pokazuje stos (na początku pusty).
2. Wybierz {{ui:Skala}} lub {{ui:Tablica}} z {{ui:Dodaj modyfikator…}}. Grupa staje się komponentem, który jest **oryginałem rozmieszczonym przez stos**. Oryginał zostaje: edytujesz go, a każda kopia od razu za nim podąża.
3. Skala przyjmuje współczynnik dla czerwonej, zielonej i niebieskiej osi (`1, 1, 2` podwaja wysokość). Tablica przyjmuje liczbę kopii, krok jako udział w dotychczasowym rozmiarze wyniku oraz dodatkowy krok w długościach.

Stos działa od góry do dołu na własnych osiach oryginału, względem jego punktu początkowego, więc kolejność ma znaczenie: Tablica trzech kopii co 3 m, a potem Skala 2 na czerwonej, rozstawia kopie co 6 m; najpierw Skala, a potem Tablica, zachowuje odstęp 3 m. Pole wyboru, strzałki i krzyżyk działają jak na siatce; przyciski widoku i kamery oraz Zastosuj dla pojedynczego modyfikatora nie działają, ponieważ stos na grupie to jedna całość.

- {{ui:Edytuj źródło}} otwiera oryginał w miejscu. Zmiany widać w każdej kopii; zamknięcie przywraca poprzednie miejsce.
- {{ui:Wypal modyfikatory}} zamienia wynik w zwykłe krawędzie i ściany i usuwa stos, jednym krokiem cofnięcia. Kopie, które na siebie nachodzą, zostają jako osobna geometria: wypalanie nie jest sumą.
- Kopie komponentu współdzielą przepis; {{ui:Uczyń niepowtarzalnym}} go rozdziela (oryginał pozostaje wspólny).
- Stos jest zapisywany w pliku, przenoszony przez kopiowanie i wklejanie oraz przez cofanie, a Purge unused zachowuje oryginał. Program, który nie zna modyfikatorów, nadal pokazuje kopie.
- Do czasu wypalenia wynik nie może zostać wejściem do edycji, rozbity, przeskalowany ani rozciągnięty: zostałby odbudowany przy następnej zmianie. Każde z tych poleceń to zgłasza.
- Limity to 32 modyfikatory i 1,000 kopii. Komponent przygotowany do rozciągania (Stretch) i stos na razie nie mogą współdzielić definicji.

## Powierzchnia podziału

Podział wygładza siatkę metodą Catmull-Clark: każda ściana staje się czworokątnymi ścianami, a każdy poziom daje cztery razy więcej ścian. Pudełko z dwoma lub trzema poziomami wygląda już jak zaokrąglony kształt, a pudełko nadal się edytuje.

- **Poziomy w widoku** ustawiają, jak gładka jest powierzchnia.
- **Poziomy w renderach** ustawiają, jak gładkie są wyrenderowane obrazy i filmy; renderowania mogą używać więcej poziomów niż widok.
- **Renderowanie na prawdziwie gładkiej powierzchni** umieszcza punkty wyrenderowanej siatki na powierzchni granicznej, do której dążą poziomy, więc nawet dwa poziomy renderują się tak gładko jak wiele.
- **Zagięcia** utrzymują krawędzie ostre: w obszarze roboczym Siatka zaznacz krawędzie i użyj {{ui:Zagięcie}} (1 zostaje ostre, 0,5 lekko zaokrągla, 0 jest gładkie). Zobacz [Edycja siatki](topic:mesh-edit).
- **Obniż poziom widoku dla dużej siatki:** gdy żądane poziomy dałyby więcej ścian, niż ten komputer dobrze obsługuje w widoku, widok pokazuje niższy poziom i mówi, który. {{ui:Zastosuj}} zawsze używa wszystkich poziomów. Liczbę ścian określa klasa [tego komputera](topic:your-machine) w {{ui:Ustawienia}} › Renderowanie.
- Otwarte obwódki zachowują swoje narożniki i pozostają na linii swoich krawędzi.

## Zginanie klatką kratową

1. Dodaj modyfikator {{ui:Klatka kratowa}} i naciśnij {{ui:Dodaj klatkę wokół siatki}}. Wokół siatki pojawi się klatka 3 × 3 × 3 punktów, narysowana jako druty.
2. Otwórz klatkę w obszarze roboczym Siatka (kliknij ją dwukrotnie) i przesuń jej punkty. Siatka podąży płynnie.

:::tip
Klatka to zwykła siatka: gdy skończysz, ukryj ją za pomocą jej znacznika.
:::

## Duże siatki

Małe stosy są liczone od razu. Duży jest liczony w tle na każdym rdzeniu komputera: widok pokazuje ostatni wynik, aż nowy będzie gotowy. Boolean ładuje modeler brył przy pierwszym użyciu; widok przez chwilę o tym informuje.

## Czego modyfikatory jeszcze nie robią

- Wag na wierzchołkach (malowanego spadku na siatce) dla Przemieszczenia, Wygładzania i Shrinkwrap.
- Modyfikatorów innych niż Skala i liniowa Tablica na geometrii push/pull (grupach i komponentach): najpierw zamień to w siatkę ({{ui:Zamień na siatkę}}). Lustro, okrągła lub krzywa Tablica, Zegnij i Zwężenie na grupach pojawią się później.
