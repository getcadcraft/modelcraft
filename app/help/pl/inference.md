---
title: Wnioskowanie i przyciąganie
summary: Co znaczą kolorowe znaczniki, które przyciąganie wygrywa i jak zablokować kierunek strzałkami lub Shift.
keywords: wnioskowanie, przyciąganie, koniec, punkt środkowy, środek ściany, na krawędzi, na ścianie, oś, czerwona oś, zielona oś, niebieska oś, równoległe, prostopadłe, blokada, shift, osnap
from: e78984e9
---

Gdy narzędzie rysowania lub edycji pracuje, ModelCraft patrzy, co jest pod wskaźnikiem, i przyciąga do najbardziej przydatnej rzeczy w pobliżu. Znacznik pokazuje, co znalazł, a końcówka w lewym dolnym rogu to nazywa.

## Znaczniki i końcówki

| Końcówka | Znacznik | Przyciąga do |
|---|---|---|
| Koniec | Zielone kółko | Końca krawędzi |
| Punkt środkowy | Turkusowe kółko | Środka krawędzi |
| Środek ściany | Niebieskie kółko | Środka ściany pod wskaźnikiem |
| Punkt prowadnicy | Szary | Punktu prowadnicy zostawionego przez miarę |
| Początek | Ochrowy | Miejsca, w którym spotykają się czerwona, zielona i niebieska oś |
| Na czerwonej osi / Na zielonej osi / Na niebieskiej osi | Linia w tym kolorze | Linię od punktu startowego w tym kierunku |
| Równolegle do krawędzi / Prostopadle do krawędzi | Magentowa linia | Linię od punktu startowego, równoległą lub prostopadłą do zapamiętanej krawędzi (zobacz niżej) |
| Zablokowano | Magentowa linia | Kierunek zablokowany strzałką albo {{key:Shift}} |
| Na krawędzi | Czerwony kwadrat | Dowolne miejsce na krawędzi |
| Na prowadnicy | Szary | Dowolne miejsce na linii prowadnicy |
| Na ścianie | Niebieski romb | Dowolne miejsce na ścianie |
| Na płaszczyźnie | brak | Płaszczyznę, na której zacząłeś, gdy wskaźnik jest nad pustym miejscem |
| Na gruncie | brak | Grunt (płaszczyzna czerwono-zielona), gdy nic innego tam nie ma |

Gdy oś od punktu startowego przecina krawędź lub prowadnicę, ModelCraft przyciąga do przecięcia, a końcówka nazywa oba, na przykład „Na czerwonej osi, na krawędzi”.

## Które przyciąganie wygrywa

1. **Punkty** w odległości około 12 pikseli: najpierw końce, potem punkty prowadnic, punkty środkowe, środek ściany pod wskaźnikiem i początek.
2. **Kierunki** od punktu startowego: czerwona, zielona i niebieska oś oraz równolegle lub prostopadle do zapamiętanej krawędzi.
3. **Na krawędzi** lub na linii prowadnicy.
4. **Na ścianie.**
5. **Płaszczyzna rysunku** lub grunt.

Rzeczy ukryte za ścianą nigdy nie przyciągają. Obróć widok, aby zobaczyć punkt, którego potrzebujesz.

## Rysowanie na ścianie od punktu

{{ui:Prostokąt}}, {{ui:Okrąg}} lub {{ui:Wielokąt}} rozpoczęty na narożniku, punkcie środkowym, krawędzi albo środku ściany jest rysowany **w płaszczyźnie ściany pod wskaźnikiem** i przecina tę ścianę. Krawędź należy do dwóch ścian, więc o wyborze decyduje strona krawędzi, po której jest wskaźnik: aby narysować na końcu długiego pudełka, zacznij od środka jednej z jego krawędzi, z wskaźnikiem tuż wewnątrz ściany końcowej.

## Równolegle i prostopadle

ModelCraft pamięta **ostatnią krawędź, nad którą wskaźnik przeszedł przed pierwszym kliknięciem**. Start na narożniku lub na krawędzi liczy się jako przejście nad tą krawędzią. Gdy narzędzie już działa, inne krawędzie, nad którymi najeżdżasz, go nie zastępują.

Aby narysować linię równoległą do istniejącej krawędzi:

1. Naciśnij {{key:L}} i najedź na krawędź, którą chcesz dopasować.
2. Przesuń na punkt początkowy, jeśli się da, nie przecinając po drodze innych krawędzi, i kliknij.
3. Przesuń w kierunku równoległym do tej krawędzi. Linia staje się magentowa, a końcówka mówi „Równolegle do krawędzi”. Prostopadle działa tak samo, w płaszczyźnie, na której rysujesz.

Jeśli zapamiętana została zła krawędź, naciśnij {{key:Esc}}, najedź na właściwą krawędź i zacznij od nowa.

## Zablokuj kierunek

Po pierwszym kliknięciu narzędzia możesz utrzymać następny punkt na jednej linii:

| Klawisz | Blokuje do |
|---|---|
| {{key:Right}} | Czerwonej osi |
| {{key:Left}} | Zielonej osi |
| {{key:Up}} | Niebieskiej osi (prosto w górę) |
| {{key:Down}} | Równolegle do zapamiętanej krawędzi (zobacz wyżej) |

Ponowne naciśnięcie tej samej strzałki odblokowuje. Pasek stanu mówi „Zablokowano do czerwonej osi. Naciśnij tę samą strzałkę, aby odblokować.”

Gdy kierunek jest zablokowany, punkt przesuwa się po linii w stronę wskaźnika i nadal wyrównuje się z punktami, nad którymi najeżdżasz: najedź na narożnik innego pudełka, aby narysować linię wzdłuż czerwonej osi dokładnie tak daleko, jak ten narożnik.

**{{key:Shift}}** blokuje kierunek, do którego jesteś teraz przyciągnięty (oś albo równoległy), tak długo, jak go trzymasz. Puść, aby odblokować.

Blokady działają w {{ui:Linia}}, {{ui:Prostokąt}}, {{ui:Okrąg}}, {{ui:Wielokąt}}, {{ui:Przesuń}}, {{ui:Skaluj}} i {{ui:Miara}}. Przed pierwszym kliknięciem strzałki obracają widok.

## Wewnątrz grupy

Gdy edytujesz wewnątrz grupy lub komponentu, osie są osiami grupy (poruszają się z nią i obracają, jeśli była obrócona). Przyciąganie nadal znajduje punkty i krawędzie poza grupą, więc możesz wyrównać rzeczy z resztą modelu.
