---
title: Eksportuj model do innych programów
summary: Wybierz właściwy eksport do renderowania, sieci, druku 3D, BIM i BimCraft oraz sprawdź, co każdy zachowuje.
keywords: drukuj, 3mf, pdf, papier, obraz, png, zdjęcie, zrzut ekranu, renderuj, zapisz widok, eksport, udostępnij, renderowanie, gltf, glb, collada, dae, obj, stl, druk 3D, ifc, bim, bimcraft, wyślij, inne programy
from: 9e13e80d
---

Eksport tworzy kopię modelu w innym formacie. Zachowaj też swój plik `.modelcraft`: jest jedynym plikiem, który przechowuje wszystko, i jedynym, który ModelCraft otwiera bezpośrednio.

## Eksport

1. Najpierw zapisz ({{key:Mod+S}}), aby plik roboczy był bezpieczny.
2. Kliknij {{ui:Eksport}} w grupie {{ui:Plik}}.
3. Wybierz format. Przeglądarka pobiera plik, nazwany jak model.

Eksportowany jest cały model. Aby wyeksportować jedną część, zapisz, usuń resztę, wyeksportuj, a następnie cofnij albo otwórz plik ponownie.

## Który format

| Chcesz | Wybierz | Uwagi |
|---|---|---|
| Otworzyć go w innym modelerze 3D | {{ui:Collada (.dae)}} | Zachowuje grupy, zagnieżdżone grupy, komponenty (współdzielone, nie kopiowane), nazwy i kolory. Oś Z w górę, metry. |
| Wyrenderować go albo użyć w programie do wizualizacji | {{ui:OBJ (.obj)}} lub {{ui:glTF binary (.glb)}} | OBJ jest najszerzej odczytywany; zapisuje umieszczenie każdej grupy jako osobny obiekt, ale nie ma kolorów ani współdzielonych komponentów. glTF zachowuje komponenty i kolory. |
| Umieścić go w sieci, silniku gry albo w AR | {{ui:glTF binary (.glb)}} | Jeden plik ze wszystkim w środku. |
| Wydrukować w 3D | {{ui:Sprawdź do druku 3D (STL lub 3MF)…}} | Sprawdza, czy model jest zamknięty i czy ściany są skierowane poprawnie, a potem zapisuje STL lub 3MF w milimetrach. Zobacz [Przygotowanie modelu do druku 3D](topic:print-3d). {{ui:STL do druku (.stl, milimetry)}} zapisuje cały model bez sprawdzenia. |
| Otworzyć go w BimCraft lub innym programie BIM | {{ui:IFC dla BimCraft (.ifc)}} | Każda grupa lub komponent najwyższego poziomu staje się jednym elementem budynku. |

Pasek stanu potwierdza każdy eksport, na przykład „Wyeksportowano House.stl (milimetry).” albo „Wyeksportowano House.dae (Collada 1.4.1, oś Z w górę, metry; komponenty pozostają współdzielone).”

## Przed eksportem

- **Grupuj obiekty.** Collada, glTF i IFC zachowują grupy i komponenty jako osobne obiekty. Luźna geometria idzie jako jedna bryła; w IFC staje się jednym elementem o nazwie „Luźna geometria”.
- **Nazywaj je.** Nazwy grup i komponentów trafiają do Collada i IFC, więc ściana o nazwie „North wall” zostanie wyeksportowana jako „North wall”.
- **Sprawdź kierunek ścian.** Ściany widoczne na niebiesko-szaro na zewnątrz będą w eksporcie skierowane do wewnątrz. Napraw je {{ui:Odwróć ścianę}} (zobacz [Usuwanie i porządkowanie](topic:erase#a-face-facing-the-wrong-way)).
- **Do druku** zamień części w zamknięte bryły: zaznacz każdą grupę i sprawdź, czy {{ui:Informacje o obiekcie}} pokazuje „Bryła: Tak”. Następnie przeskaluj model do rozmiaru wydruku albo zrób to w oprogramowaniu drukarki.

## Wyślij model do BimCraft

1. Każdą część budynku uczyń grupą lub komponentem i nazwij ją.
2. Wybierz {{ui:Eksport}}, a potem {{ui:IFC dla BimCraft (.ifc)}}.
3. Otwórz pobrany plik `.ifc` w BimCraft.

Do wstępnej bryły koncepcyjnej użyj zamiast tego {{ui:Eksport}} › {{ui:Bryła masowa do BimCraft…}}: każda grupa trafia jako opcja bryły masowej z kondygnacjami, powierzchniami i objętością. Zobacz [Wysyłanie bryły masowej do BimCraft](topic:massing-to-bimcraft).

Zwykły eksport IFC nie ma bezpośredniego powiązania między tymi dwiema aplikacjami. IFC ma jedną kondygnację, a każdy element jest ogólnym obiektem zastępczym (proxy) elementu budynku, bez typu i właściwości: niesie tylko kształt i nazwę. Zamknięte grupy stają się bryłami; otwarte – powierzchniami.

## Linie bez ścian

Krawędzie niebędące częścią żadnej ściany (linie pomocnicze, zaimportowany plan terenu) trafiają do OBJ i Collada jako linie. glTF i STL nie mają dla nich miejsca i pomijają je. Prowadnice i sceny nie są eksportowane do żadnego formatu.

## Zapisz widok jako obraz

{{ui:Eksport}} › {{ui:Obraz widoku (.png)}} zapisuje dokładnie to, co pokazuje widok 3D, w rozmiarze na ekranie. {{ui:Obraz w dwukrotnym rozmiarze (.png)}} zapisuje go dwa razy szerszy i dwa razy wyższy (do druku lub ostrej prezentacji), a wymiary i znaczniki są rysowane ponownie w tym rozmiarze, a nie rozciągane.

Dla obrazu wyglądającego jak w świetle dziennym (niebo, słońce, miękkie cienie, szkło) użyj zamiast tego {{ui:Eksport}} › {{ui:Wyrenderuj obraz…}}: zobacz [Renderowanie obrazu](topic:render).

Dla czystego obrazu włącz [widok prezentacji](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) przed eksportem: osie, prowadnice, obrysy przekrojów i zaznaczenie zostają pominięte. Ustaw kamerę, styl i cienie tak, jak chcesz, albo przejdź do [sceny](topic:scenes); aby zapisać ruchomy film ze swoich scen, użyj {{ui:Eksportuj animację}} w panelu {{ui:Sceny}}.

## Wydrukuj widok lub zapisz go jako PDF

- {{ui:Eksport}} › {{ui:PDF widoku (.pdf)}} zapisuje jednostronicowy PDF: widok w dwukrotnym rozmiarze ekranowym, z wymiarami, na stronie A4 (Letter, gdy model jest w stopach i calach), poziomo, z linią pod spodem podającą nazwę pliku, datę i jednostkę.
- {{ui:Eksport}} › {{ui:Drukuj widok…}} wyświetla tę samą stronę w oknie drukowania przeglądarki. Wybierz drukarkę albo „Zapisz jako PDF”.

Strona pokazuje widok taki, jaki jest: przy perspektywie nie ma skali. Aby uzyskać rysunek w skali, wyłącz {{ui:Perspektywa}} i patrz z {{ui:Góra}} lub {{ui:Przód}}, a dodaj [wymiary](topic:dimensions) dla ważnych rozmiarów. [Widok prezentacji](topic:styles-shadows#presentation-view) pomija osie, prowadnice i zaznaczenie; wymiary zostają.
