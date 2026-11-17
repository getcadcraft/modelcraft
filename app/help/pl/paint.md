---
title: Malowanie kolorami i materiałami
summary: Nadaj ścianom, grupom i komponentom jednolity kolor lub materiał, taki jak cegła, okładzina, gont lub drewno, i zachowaj je przy eksporcie.
keywords: malowanie, kolor, barwa, materiał, materiały, tekstura, tekstury, cegła, okładzina, gont, pokrycie dachowe, drewno, kamień, płytki, beton, tynk, trawa, żwir, szkło, metal, wiaderko z farbą, wypełnienie, próbka, pipeta, domyślny, glb, obj, mtl, collada
from: b1500523
---

Kolory pomagają odróżnić części modelu, a **materiały** (cegła, okładzina, pokrycie dachowe, drewno, kamień, płytki, beton, tynk, trawa, szkło, metal) sprawiają, że model wygląda jak to, z czego jest zbudowany. Oba malują się tak samo.

## Wybierz kolor

Sekcja {{ui:Kolory}} po prawej pokazuje rząd jednolitych kolorów, {{ui:Domyślny}} (ten przekreślony linią: brak koloru) oraz próbkę {{ui:+}} dla dowolnego innego koloru. Kliknij jeden, aby ustawić go jako bieżący kolor. Narzędzie {{ui:Malowanie}} zaczyna od niego.

## Malowanie

1. Naciśnij {{key:B}} ({{ui:Malowanie}}) albo, gdy nic nie jest zaznaczone, kliknij kolor. (Gdy coś jest zaznaczone, kliknięcie koloru maluje zaznaczenie od razu.)
2. Kliknij ścianę, aby ją pomalować.
3. Kliknij grupę lub komponent, aby pomalować tę kopię: jej ściany, które nie mają własnego koloru, przyjmują ten kolor. Ściany, które pomalowałeś wewnątrz, zachowują swój kolor.

Aby pomalować kilka rzeczy naraz, najpierw je zaznacz, a potem kliknij kolor, albo kliknij którąkolwiek z nich narzędziem {{ui:Malowanie}}. To jeden krok cofania.

| Przytrzymaj | I kliknij ścianę | Co zostanie pomalowane |
|---|---|---|
| — | | Tę ścianę |
| {{key:Ctrl}} | | Każdą ścianę z nią połączoną, która ma ten sam kolor |
| {{key:Shift}} | | Każdą ścianę tego koloru w grupie, w której pracujesz |
| {{key:Alt}} | | Nic: zamiast tego pobierasz ten kolor |

Aby cofnąć ścianę do braku koloru, wybierz {{ui:Domyślny}} i kliknij ją.

## Malowanie materiałem

Sekcja {{ui:Materiały}}, pod {{ui:Kolory}}, wypisuje bibliotekę materiałów według rodzaju: cegła i bloczki, okładzina, pokrycia dachowe, drewno, kamień, płytki, beton, tynk, grunt, szkło i metal. Najedź na próbkę, aby zobaczyć jej nazwę. Kliknij jedną, a potem maluj tak jak kolorem: {{key:B}}, kliknij ściany, grupy lub komponenty; albo najpierw zaznacz i kliknij materiał.

- W stylu **Cieniowany** ściany pokazują teksturę materiału. Linie ukryte, siatka i rentgen pokazują jego kolor.
- Tekstury biegną **poziomo wzdłuż każdej ściany** i **w górę**: rzędy cegieł pozostają poziome na każdej ścianie, gonty spływają po spadku dachu, deski na podłodze podążają za czerwoną osią. Mają swój rzeczywisty rozmiar (cegła ma około 215 mm długości), więc dobrze wyglądają z każdej odległości.
- W [obrazie renderowanym](topic:render) materiały zachowują swoją teksturę, chropowatość, a w przypadku szkła i metalu także połysk.
- Kliknięcie {{key:Alt}} narzędziem {{ui:Malowanie}} pobiera też materiał ściany.

Tekstury rysuje sam ModelCraft, więc działają offline i są darmowe do dowolnego użytku (CC0).

## Komponenty i kolory

Kolor nałożony na ścianę **wewnątrz** komponentu pojawia się na każdej kopii, bo kopie współdzielą jedną definicję. Kolor nałożony na **kopię** z zewnątrz (przy zamkniętym komponencie) należy tylko do tej kopii, więc dwie kopie jednego komponentu mogą mieć różne kolory. {{ui:Informacje o obiekcie}} pokazuje kolor zaznaczonej ściany, grupy lub komponentu.

## Kolory w plikach

- Plik ModelCraft zachowuje każdy kolor i każdy materiał.
- Inne formaty dostają **kolor materiału** (jego wygląd z daleka) zamiast tekstury: glTF, Collada, OBJ, DWG i DXF oraz sprawdzenie druku 3D. W glTF, Collada i OBJ materiał zachowuje swoją nazwę, na przykład `Material_brick-red`.
- **glTF (.glb)** i **Collada (.dae)**: każdy kolor staje się materiałem. Komponent pokazany w różnych kolorach jest zapisywany raz na każdy kolor. glTF zapisuje też zaimportowane tekstury jako tekstury.
- **OBJ**: eksport pobiera dwa pliki: `.obj` i plik materiałów `.mtl` z kolorami. Trzymaj je w tym samym folderze. Przy zaimportowanych teksturach pliki `.obj`, `.mtl` i obrazy trafiają jako jedno archiwum `.zip`.
- **DWG** zachowuje dokładne kolory; **DXF** używa najbliższego z 255 standardowych kolorów CAD.
- **STL** i **PLY** przenoszą kolory: STL w konwencji VisCAM / SolidView (programy, które go nie czytają, ignorują go), PLY jako kolor każdego punktu. Zobacz [Formaty plików szczegółowo](topic:formats).

:::tip
Aby zamodelować ekran, pomaluj ramę na antracyt, a szkło na niebiesko, po [odsunięciu](topic:draw-faces) przedniej ściany.
:::
