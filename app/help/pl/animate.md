---
title: Animuj dowolną właściwość, kształtuj ją krzywymi i mieszaj klipy
summary: Obszar roboczy Animuj zapisuje kluczami położenie, obrót i rozmiar obiektu, jasność, rozproszenie i kolor lampy, obiektyw oraz klucze kształtu siatki; szkielety zginają siatkę kośćmi i malowanymi wagami; IK i więzy sprawiają, że kości i obiekty sięgają, patrzą, kopiują, mieszczą się w granicach, zwisają lub podążają za innymi; bryły sztywne spadają, układają się w stos i zderzają, a następnie są wypalane do kluczy; sterowniki ustawiają wartość na podstawie innych; widok Krzywe na osi czasu kształtuje każdą zmianę uchwytami Béziera i cyklami, a widok Klipy zapisuje animacje jako akcje, które można ponownie umieścić i zmieszać.
keywords: fizyka, bryła sztywna, bryły sztywne, symulacja, symuluj, upuść, spadanie, spadaj, grawitacja, zderzenie, kolizja, zderzaj, układanie w stos, odbicie, tarcie, wypal, wypalone, ik, kinematyka odwrotna, więzy, ograniczenia, patrz na, śledź, celuj, kopiuj transformacje, kopiuj położenie, kopiuj obrót, ogranicz obrót, limity, obiekt podrzędny, rodzic, podążaj za ścieżką, ścieżka, biegun, fabrik, łańcuch, szkielet, armature, rig, rigging, kości, kość, kościec, skóra, skinning, wagi, malowanie wag, grupy wierzchołków, wagi automatyczne, poza, tryb pozy, dualne kwaterniony, liniowe mieszanie, klucze kształtu, klucz kształtu, morf, morfy, cele morfingu, kształty mieszane, mimika, wyraz twarzy, sterownik, sterowniki, wyrażenia, obszar roboczy animuj, animuj, animacja, klatka kluczowa, klucz, klucze, właściwość, właściwości, transformacja, położenie, obrót, skala, lampa, światło, jasność, kolor, obiektyw, pole widzenia, fov, edytor wykresów, krzywe, krzywa, bezier, uchwyty, styczna, interpolacja, cykl, cykle, powtórz, pętla, tam i z powrotem, przesunięcie, arkusz klatek, zaznacz klucze, zaznaczanie prostokątem, kopiuj klucze, wklej klucze, rozciągnij klucze, skaluj klucze, klipy, akcje, nla, mieszaj, mieszanie, wpływ, zapas
from: 16d8e12f
---

Obszar roboczy {{ui:Animuj}} kluczuje więcej niż [oś czasu](topic:animation), która porusza kamerą oraz całymi grupami i komponentami. Oś czasu dostaje dwa dodatkowe widoki, w których można kształtować i ponownie używać zapisane klucze.

## Otwórz

Wybierz {{ui:Animuj}} na liście obszarów roboczych na pasku narzędzi. Oś czasu otwiera się pod widokiem, pasek narzędzi pokazuje grupy Animuj ({{ui:Klucze}}, {{ui:Odtwórz}}, {{ui:Oś czasu}}), a panel po prawej wymienia, co można zakluczyć przy wskaźniku odtwarzania.

## Zakluczanie właściwości

Panel wymienia, przy wskaźniku odtwarzania:

- **Wybrany obiekt**: jego {{ui:Umieść}}, {{ui:Obrót (°)}} i {{ui:Rozmiar}}, po trzy liczby każdego. Wpisz liczbę i naciśnij {{key:Enter}}: zostaje zakluczona przy wskaźniku odtwarzania, a obiekt się tam przesuwa. Romb obok wiersza zakluczy wartość taką, jaka jest teraz; wypełniony romb oznacza, że przy wskaźniku odtwarzania klucz już jest.
- **Lampy**: {{ui:Jasność (lm)}} każdej lampy, {{ui:Rozproszenie (°)}} (lampy punktowe) i {{ui:Kolor}}.
- **Kamera**: {{ui:Kąt obiektywu (°)}}, do najazdu podczas ruchu kamery.

{{ui:Kluczuj transformację}} (lub {{key:I}}) zakluczy położenie, obrót i rozmiar każdej wybranej grupy lub komponentu naraz; {{ui:Klucz kamery}} (lub {{key:K}}) zakluczy kamerę. Przy włączonym {{ui:Auto klucz}} grupa, której położenie, obrót i rozmiar są zakluczone w ten sposób, dostaje nowy klucz za każdym razem, gdy ją przesuniesz.

Obroty to trzy kąty: wokół osi X, potem Y, potem Z. Obrót zakluczony powyżej 180° kontynuuje w tym samym kierunku (190° pozostaje 190°, a nie −170°), więc koło może obracać się kilka razy.

:::tip
Grupa zakluczona przez {{ui:Klucz zaznaczenia}} na osi czasu ma klucze całego położenia. Przycisk krzywej w jej wierszu zamienia je na krzywe położenia, obrotu i rozmiaru (to samo położenie przy każdym kluczu), abyś mógł je kształtować w {{ui:Krzywe}}.
:::

## Klucze kształtu (morfy)

**Klucz kształtu** to inny kształt tej samej [siatki](topic:meshes): uśmiech na twarzy, wybrzuszenie drzwi, zgięty liść. Jego suwak miesza siatkę taką, jaka jest (0), z tym kształtem (1); kilka kluczy sumuje się.

1. Wybierz siatkę w obszarze roboczym Animuj: panel pokazuje jej {{ui:Klucze kształtu}}.
2. Kliknij {{ui:Dodaj klucz kształtu}}. ModelCraft przechodzi do [obszaru roboczego Siatka](topic:mesh-edit) z nowym kluczem w edycji: przesuwaj punkty, wyciągaj, rzeźb — zmień siatkę w kształt, jaki chcesz.
3. Wróć do {{ui:Animuj}} i kliknij {{ui:Gotowe}}. Siatka wraca do poprzedniego stanu, a klucz zachowuje Twoją zmianę.

Potem przeciągnij suwak klucza (lub wpisz wartość), by go wmieszać. Romb zakluczy wartość przy wskaźniku odtwarzania, więc klucz może rosnąć i zanikać w czasie; gdy ma już ścieżkę, nowa wartość jest zakluczana przy wskaźniku odtwarzania. Ołówek ponownie edytuje kształt klucza (siatka pokazuje go w pełni do {{ui:Gotowe}}; {{ui:Anuluj}} zostawia klucz bez zmian), oko wyłącza klucz, kosz go usuwa.

Wierzchołek dodany podczas edycji klucza należy do samej siatki: zostaje tam, gdzie go postawiłeś, we wszystkich kształtach.

:::note
Klucze kształtu przesuwają siatkę przed jej [modyfikatorami](topic:modifiers): modyfikator Subdivision wygładza zmieszany kształt. Renderowane obrazy i wideo pokazują klucze w każdej klatce.
:::

## Szkielety: kości, które zginają siatkę

**Szkielet** to zestaw kości wewnątrz [siatki](topic:meshes). Ustaw kości, a siatka podąża za nimi, każdy punkt tyle, ile mówią jego **wagi**.

1. Wybierz siatkę w obszarze roboczym Animuj i kliknij {{ui:Dodaj szkielet}} w panelu (lub {{ui:Dodaj kość}} w grupie {{ui:Szkielet}}): pierwsza kość biegnie przez środek siatki od jej podstawy.
2. Przy wybranej kości {{ui:Dodaj kość podrzędną}} dodaje następną od jej końca. Ustaw w panelu {{ui:Głowica}}, {{ui:Koniec}}, {{ui:Skręt (°)}} i to, od czego {{ui:Zawieszona na}} każda kość; kość zwisająca z innej porusza się razem z nią. Odznacz {{ui:Porusza siatką}} dla kości, która tylko steruje innymi.
3. Kliknij {{ui:Wagi automatyczne}}: każda kość chwyta punkty najbliższe sobie, a chwyt płynnie rozkłada się po siatce, więc punkty między dwiema kośćmi są przez nie dzielone. {{ui:Tylko najbliższe kości}} daje szybszy i ostrzejszy podział.

**Ustaw** kości przez {{ui:Poza}} ({{key:P}}): kliknij kość, by ją wybrać, przeciągnij, by obrócić ją wokół osi widoku, przeciągnij z {{key:Shift}}, by ją przesunąć. Albo wpisz jej {{ui:Umieść}}, {{ui:Obrót (°)}} i {{ui:Rozmiar}} w sekcji {{ui:Poza}}; obroty są w osiach samej kości, liczone od jej położenia spoczynkowego. Romby i {{ui:Zakluczy całą pozę}} zakluczają pozę przy wskaźniku odtwarzania; gdy kość ma już klucze, jej ustawienie zakluczy ją tam. {{ui:Resetuj tę kość}} i {{ui:Resetuj pozę}} przywracają kości do spoczynku.

**Malowanie wag** ({{key:W}}) dla wybranej kości: siatka pokazuje się w spoczynku, każda ściana zabarwiona według tego, ile ta kość ją trzyma — czerwony wszystko, niebieski nic. Maluj, by dodać chwyt ({{key:Mod}} go odejmuje, {{key:Shift}} wygładza); {{ui:Rozmiar (px)}} i {{ui:Siła}} ustawiają pędzel. Przy {{ui:Utrzymuj sumę wag każdego punktu równą 1}} dając jednej kości więcej, odejmujesz tyle samo od pozostałych. Każde pociągnięcie to jeden krok cofnięcia modelu.

{{ui:Skóra}} wybiera, jak punkt między kośćmi się porusza: {{ui:Liniowa (szybka)}} miesza ruchy kości i lekko ściska zgięty przegub; {{ui:Dualne kwaterniony (zachowuje objętość w stawach)}} obraca punkt wokół przegubu, więc łokieć czy kolano zachowuje grubość (wtedy {{ui:Rozmiar}} kości nie rozciąga skóry).

:::note
Najpierw idą klucze kształtu, potem szkielet, potem [modyfikatory](topic:modifiers). Widok, obrazy i wideo pokazują zgiętą siatkę; wagi siatki zapisują się razem z nią, a kości i ich poza razem z animacją.
:::

## IK i więzy

**Więzy** przesuwają kość lub obiekt po jej kluczach, według reguły. Wybierz obiekt (albo, w szkielecie, kość) i dodaj więzy pod {{ui:Więzy obiektu …}}; działają w kolejności wymienionej (strzałki ją zmieniają), a każde ma {{ui:Jak mocno}} (0 do 1, zakluczane rombem jak każda właściwość) i przełącznik włącz/wyłącz.

| Więzy | Dla | Co robi |
|---|---|---|
| {{ui:Sięganie (IK)}} | Kości | Kość i kości, z których zwisa ({{ui:Kości w łańcuchu}}), zginają się tak, by jej koniec sięgnął celu. Przy dwóch kościach i {{ui:Biegun (zgięcie wskazuje w jego stronę)}} łokieć albo kolano wskazuje na biegun; dłuższe łańcuchy zginają się płynnie. Poza zasięgiem łańcuch celuje prosto w cel. |
| {{ui:Patrz na}} | Oba | Obraca tak, by {{ui:Oś, która wskazuje}} patrzyła na cel, a {{ui:Oś utrzymywana w górę}} była możliwie blisko góry. |
| {{ui:Kopiuj transformacje}} | Oba | Przejmuje położenie, obrót lub rozmiar celu — te zaznaczone. |
| {{ui:Ograniczenia}} | Oba | Utrzymuje własne położenie, obrót (w stopniach) lub rozmiar między {{ui:min.}} a {{ui:maks.}} dla każdej osi; zostaw parę pustą, by oś była wolna. |
| {{ui:Podrzędny wobec}} | Oba | Porusza się razem z celem, jakby z niego zwisał, od miejsca, w którym oba były, gdy wybrałeś cel. |
| {{ui:Podążaj za ścieżką}} | Obiekty | Siedzi na [obiekcie krzywej](topic:curves) przy {{ui:Wzdłuż krzywej}} (0 — jej początek, 1 — koniec; zakluczy, by podróżował), a przy {{ui:Obracaj wzdłuż krzywej}} jest zwrócony wzdłuż niej. |

Celem jest inny obiekt w otwartej grupie, kość tego samego szkieletu albo {{ui:Punkt}}, który wpiszesz (punkt obiektu jest we współrzędnych modelu, punkt kości — we współrzędnych jej siatki). Dla nogi w IK ustaw cel tam, gdzie ma być stopa, i zaklucz cel, albo zaklucz {{ui:Jak mocno}}, by przekazać nogę między kluczami a IK.

:::tip
Obiekt, który patrzy na inny, podążający za ścieżką, widzi go na tej ścieżce: ModelCraft najpierw wylicza cele, niezależnie od kolejności obiektów.
:::

## Fizyka: spadanie, układanie i zderzenia

Pozwól obiektom spadać i uderzać w siebie, a potem zachowaj wynik jako klucze.

1. Wybierz grupę, komponent lub siatkę i ustaw jej {{ui:Bryła sztywna}} w sekcji {{ui:Fizyka}}: {{ui:Spada i zderza się}} (porusza się) albo {{ui:Stoi w miejscu, przeszkadza}} (stół, ściana, rampa). Spadającemu obiektowi nadaj {{ui:Kształt}} — {{ui:Prostopadłościan (jego granice)}} lub {{ui:Kula (wokół jego granic)}} — jego {{ui:Masa (kg)}}, {{ui:Tarcie}} i {{ui:Odbicie}} (0 to stuknięcie, 1 odbija się równie wysoko).
2. W sekcji {{ui:Cały model}} ustaw {{ui:Od (s)}} i {{ui:Do (s)}}, {{ui:Grawitacja (m/s², w dół)}} oraz to, czy jest {{ui:Podłoże do lądowania}} (i jego wysokość).
3. Kliknij {{ui:Wypal fizykę}} (w panelu lub w grupie {{ui:Fizyka}}). Każdy spadający obiekt dostaje klucz położenia, obrotu i rozmiaru w każdej klatce między tymi dwoma czasami; odtwórz go jak każdą animację.

Ponowne wypalenie zastępuje te klucze; {{ui:Usuń wypalone klucze}} je usuwa. Obiekty zaczynają w spoczynku, tam gdzie ich klucze, krzywe i więzy stawiają je przy {{ui:Od (s)}} (zakluczony ruch przed tym czasem nie przechodzi w spadanie). Więcej {{ui:Kroków na klatkę}} sprawia, że wysokie stosy są stabilniejsze; pasek stanu mówi, gdy coś wciąż się rusza na końcu.

:::note
Kształty to prostopadłościany i kule wokół granic każdego obiektu; prostopadłościan dotyka narożnikami, środkami krawędzi i środkami ścian, więc pudła układają się w stos i przewracają tak, jak się spodziewasz. Tkanin, płynów, połączeń między obiektami i dokładnych kształtów jeszcze nie ma.
:::

## Sterowniki

**Sterownik** ustawia klucz kształtu na podstawie innych rzeczy zamiast ręcznie: otwórz sterownik klucza (przycisk kalkulatora), napisz **wyrażenie** i podaj każdej nazwie w nim, co ma czytać ({{ui:Odczytuje}}): czas w sekundach, klatkę, położenie, obrót lub rozmiar obiektu wzdłuż X, Y lub Z, jasność lampy albo inny klucz kształtu. Na przykład, gdy `v` czyta obrót drzwi wokół Z, `clamp(v / 90, 0, 1)` otwiera kształt, gdy drzwi się otwierają.

Wyrażenia używają liczb, nazw, `+ - * / % ^` i nawiasów oraz funkcji `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` z `pi` i `e`. Błąd zostaje wskazany i niczego nie zmienia. Suwak sterowanego klucza pokazuje wartość sterownika; sterownik wygrywa z ścieżką klucza, dopóki go nie usuniesz.

## Wybieranie i zmiana kluczy (widok Klucze)

{{ui:Klucze}} pokazuje wiersz na każdą ścieżkę: kamerę, każdą poruszającą się grupę i każdą właściwość („Lampa 2 · Jasność (lm)”); klucze właściwości są okrągłe.

- Kliknij klucz, by go wybrać; kliknięcie z {{key:Shift}} lub {{key:Mod}} dodaje klucze do wyboru lub z niego usuwa. Przeciągnij z {{key:Shift}} po wierszach, by narysować prostokąt, który doda każdy klucz w nim.
- Przeciągnij wybrany klucz, by przesunąć je wszystkie; {{key:Left}} / {{key:Right}} przesuwają o klatkę ({{key:Shift}}: dziesięć).
- {{key:Mod+C}} kopiuje wybrane klucze, {{key:Mod+V}} wkleja je od wskaźnika odtwarzania na te same ścieżki (inna karta ModelCraft też może je wkleić).
- {{ui:Rozciągnij}} rozsuwa wybrane klucze od wskaźnika o liczbę obok (2 = dwa razy dalej od siebie; 0.5 je zbliża).
- Lista wygładzania ustawia, jak każdy wybrany klucz przechodzi dalej.

## Kształtowanie krzywych (widok Krzywe)

{{ui:Krzywe}} to wykres każdej liczby w czasie: czas wzdłuż, wartość w górę. Zaznacz krzywe do pokazania na liście po lewej (X, Y i Z są czerwona, zielona i niebieska).

- Kliknij klucz (kwadrat), by go wybrać, {{key:Shift}}+klik po więcej, albo przeciągnij prostokąt. Przeciągnij wybrany klucz, by zmienić jego czas i wartość; przy kilku wybranych przeciąganie przesuwa je wzdłuż czasu.
- Wybrany klucz pokazuje swoje dwa **uchwyty**. Przeciągnij jeden, by ukształtować krzywą po tej stronie. {{ui:Uchwyty}} mówi, jak się zachowują: {{ui:Automatyczne}} (gładka krzywa przez klucze wokół), {{ui:Skierowane na następny klucz}}, {{ui:Wyrównane}} (oba leżą na jednej prostej, więc krzywa nie ma ostrego załamania) albo {{ui:Swobodne}}.
- {{ui:Z wybranych kluczy}} ustawia, jak każdy wybrany klucz przechodzi do następnego: {{ui:Krzywa (uchwyty)}}, {{ui:Wygładź}}, {{ui:Równomiernie}}, {{ui:Powoli na starcie i na końcu}} albo {{ui:Bez ruchu}}.
- {{ui:Przed}} i {{ui:Po}} ustalają, co krzywa robi poza swoimi kluczami: {{ui:Bez ruchu}} (zostaje przy pierwszej lub ostatniej wartości), {{ui:Powtórz}}, {{ui:Tam i z powrotem}} albo {{ui:Powtarzaj i kontynuuj}} (każde powtórzenie zaczyna się tam, gdzie skończyło poprzednie: koło dalej się toczy, chodziarz dalej chodzi).
- Kółko powiększa ({{key:Mod}}: tylko wartości; {{key:Shift}}: tylko czas); przeciągaj środkowym przyciskiem albo z {{key:Alt}}, by przesuwać widok; {{ui:Pokaż wszystko}} lub {{key:Home}} dopasowuje wszystkie pokazane krzywe. Kliknięcie na puste miejsce przesuwa tam wskaźnik odtwarzania. {{key:Delete}} usuwa wybrane klucze.

Uchwyty nie mogą przecinać się w czasie, więc krzywa nigdy nie biegnie wstecz.

## Ponowne użycie animacji (widok Klipy)

**Klip** odtwarza zapisaną animację (**akcję**) na osi czasu. Klipy miesza się w kolejności: niższe wiersze nad wyższymi; własne ścieżki osi czasu leżą nad każdym klipem.

1. Zakluczaj grupy i lampy jak zwykle, potem kliknij {{ui:Utwórz klip}} w {{ui:Klipy}} i nazwij akcję. Ścieżki stają się akcją, a klip odtwarza ją tam, gdzie były (kamera zostaje na osi czasu).
2. Aby użyć ponownie, wybierz akcję i kliknij {{ui:Dodaj klip}}: nowy klip zaczyna się przy wskaźniku odtwarzania.
3. Przeciągnij klip w jego wierszu, by go przesunąć; kliknij, by ustawić {{ui:Początek (s)}}, {{ui:Szybkość}} (2 = dwa razy szybciej), {{ui:Powtórzenia}}, {{ui:Jak mocno}} (0 do 1), {{ui:Miksowanie}} ({{ui:Zastąp}} albo {{ui:Dodaj na wierzch}} klipów przed nim), {{ui:Poza klipem}} (nic, trzymaj jego koniec albo trzymaj oba końce) i {{ui:Wycisz}}. Strzałki zmieniają kolejność; kosz go usuwa (akcja, której już żaden klip nie używa, znika razem z nim).

Klip z {{ui:Jak mocno}} mniejszym niż pełne miesza się z tym, co jest pod nim: z klipem przed nim albo z lampą czy położeniem takim, jakie są bez animacji.

## Co gdzie się odtwarza

| Co | W widoku | W wyrenderowanym wideo |
|---|---|---|
| Klucze kamery, kąt obiektywu przy kluczach kamery | Tak | Tak |
| Położenie, obrót i rozmiar (klucze, krzywe, klipy) | Tak | Tak |
| Jasność, rozproszenie i kolor lampy | Tak | Nie jeszcze: wideo używa lamp takich, jakie są w chwili startu (zob. [Jeszcze nie zbudowano](topic:not-built-yet)) |
| Kąt obiektywu bez kluczy kamery | Tak | Nie jeszcze: zaklucz też kamerę |
| Klucze kształtu i sterowniki | Tak | Tak |
| Szkielety (zgięte siatki) | Tak | Tak |
| IK i więzy | Tak | Tak |
| Wypalona fizyka (klucze) | Tak | Tak |

Wszystko zapisuje się w pliku `.modelcraft` razem z resztą animacji, a {{ui:Cofnij}} i {{ui:Ponów}} osi czasu cofają i ponawiają każdą z tych zmian.
