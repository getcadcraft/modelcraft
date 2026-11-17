---
title: Obracanie i skalowanie
summary: Obracaj rzeczy wokół punktu, klikając lub wpisując stopnie, i zmieniaj ich rozmiar równomiernie o współczynnik.
keywords: uchwyty skalowania, rozciąganie, nierównomiernie, na osi, odbicie, odbita kopia, odbij wzdłuż, obrót, obróć, kąt, stopnie, kątomierz, skala, zmiana rozmiaru, powiększ, zmniejsz, współczynnik, jednolite skalowanie
from: 45cdcb49
---

## Obrót

{{ui:Obróć}} ({{key:Q}}) obraca zaznaczenie wokół punktu środkowego. Wymaga trzech kliknięć: środka, kierunku początkowego i kierunku końcowego.

1. Zaznacz to, co chcesz obrócić. Jeśli nic nie jest zaznaczone, Obróć przejmuje to, co klikniesz jako pierwsze.
2. Naciśnij {{key:Q}}. Pierścień podąża za wskaźnikiem i pokazuje płaszczyznę, w której będziesz obracać.
3. Kliknij środek obrotu.
   - Na gruncie lub w pustej przestrzeni pierścień leży płasko (niebieski): obrót jest wokół osi pionowej, jak obracanie budynku na jego działce.
   - Na ścianie pierścień leży w płaszczyźnie tej ściany: obrót jest wokół własnego kierunku ściany. Kliknij na ścianę, aby obrócić coś wokół osi poziomej.
4. Kliknij punkt, który ustala, gdzie zaczyna się kąt, na przykład wzdłuż krawędzi obracanej rzeczy.
5. Przesuwaj wskaźnik wokół środka. Kąt pokazuje się w czubku i w polu wartości ({{ui:Kąt}}). Przeskakuje co 15°, gdy zbliżysz się do jednej z tych wartości.
6. Kliknij, aby zakończyć, albo wpisz kąt w stopniach i naciśnij {{key:Enter}}: `90`, `45`, `-30`.

   Dodatnie kąty obracają przeciwnie do ruchu wskazówek zegara, patrząc z tej strony, w którą jest zwrócony pierścień.

Naciśnij {{key:Ctrl}} (lub {{key:Alt}}) podczas obracania, aby obrócić **kopię** i zostawić oryginał w miejscu, tak jak przy Przesuń; podpowiedź mówi, czy kopiowanie jest włączone, a ponowne naciśnięcie klawisza je wyłącza. Wpisz `3x` zaraz po obróconej kopii, aby dodać więcej kopii wokół tego samego środka.

Podobnie jak przy przesuwaniu, obrót części połączonej geometrii skręca ściany do niej przyczepione. Najpierw zgrupuj rzeczy, aby obrócić je w całości.

:::note
Podpowiedź mówi, że strzałki wybierają oś obrotu, ale w tej wersji przed pierwszym kliknięciem obracają one widok. Aby wybrać oś, kliknij środek na ścianie zwróconej w żądanym kierunku. Zobacz [Jeszcze nie zbudowano](topic:not-built-yet).
:::

## Skalowanie

{{ui:Skaluj}} ({{key:S}}) zmienia rozmiar zaznaczenia. Najpierw zaznacz to, co chcesz przeskalować, potem naciśnij {{key:S}}: na rogach, krawędziach i środkach boków jego pudełka pojawią się małe kwadraty (uchwyty).

### Rozciąganie lub skalowanie uchwytami

- **Narożny** uchwyt skaluje równomiernie we wszystkich kierunkach, względem przeciwległego rogu.
- Uchwyt pośrodku **boku** rozciąga tylko w tym kierunku, względem przeciwległego boku: wydłuż pudełko bez zwiększania wysokości.
- Uchwyt pośrodku **krawędzi pudełka** rozciąga w dwóch kierunkach przecinających ją.
- Przytrzymaj {{key:Ctrl}}, klikając uchwyt, aby zamiast tego skalować względem środka pudełka.

Kliknij uchwyt, przesuń wskaźnik i kliknij ponownie; albo kliknij uchwyt, wpisz współczynnik (`2` podwaja, `0.5` zmniejsza o połowę) i naciśnij {{key:Enter}}. Aby każdy kierunek miał własny współczynnik, wpisz trzy, dla czerwonej, zielonej i niebieskiej: `2,1,0.5`. Wewnątrz otwartej grupy kierunki są kierunkami tej grupy.

### Skalowanie względem dowolnego punktu

Kliknij w dowolnym miejscu poza uchwytem, aby skalować równomiernie względem własnego punktu. Wymaga to trzech kliknięć:

1. Zaznacz to, co chcesz zmienić. Jeśli nic nie jest zaznaczone, Skaluj przejmuje to, co klikniesz jako pierwsze.
2. Naciśnij {{key:S}}.
3. Kliknij punkt, który pozostaje na miejscu (nie na uchwycie), na przykład dolny róg.
4. Kliknij punkt odniesienia. Jego odległość od pierwszego punktu liczy się jako 1×.
5. Przesuń wskaźnik w stronę pierwszego punktu lub od niego. Współczynnik pokazuje się w czubku i w polu wartości ({{ui:Skaluj}}).
6. Kliknij, aby zakończyć, albo wpisz współczynnik i naciśnij {{key:Enter}}: `2` podwaja rozmiar, `0.5` zmniejsza go o połowę.

### Skalowanie do dokładnego rozmiaru

Aby coś miało dokładną długość, oblicz współczynnik: nowa długość podzielona przez obecną długość. W trybie trzech kliknięć pole wartości wykonuje działania, więc wpisz `4.2/3.6`, aby ściana o długości 3.6 m miała 4.2 m. Pole wartości uchwytu przyjmuje tylko zwykłe liczby: oblicz współczynnik wcześniej (4.2 podzielone przez 3.6 to około 1.1667). Najpierw zaznacz krawędź, aby odczytać jej obecną długość w {{ui:Informacje o obiekcie}}.

### Naprawa importu o złym rozmiarze

Pliki OBJ nie mają jednostki, więc model narysowany w milimetrach wchodzi 1000 razy za duży. Zaznacz zaimportowaną grupę, naciśnij {{key:S}}, kliknij narożny uchwyt, wpisz `0.001` i naciśnij {{key:Enter}}. Dla modelu narysowanego w calach wpisz `0.0254`.

## Rzeczy do zapamiętania

- Skalowanie względem punktu za pomocą trzech kliknięć jest jednolite. Aby rozciągnąć tylko w jednym kierunku, użyj uchwytu boku lub krawędzi (patrz wyżej).
- Skalowanie grupy lub komponentu zmienia tę kopię, którą skalowałeś; inne kopie komponentu zachowują swój rozmiar.
- Naciśnij {{key:Esc}} przed ostatnim kliknięciem, aby anulować.

## Odbicie

{{ui:Edycja}} › {{ui:Więcej}} › {{ui:Odbij wzdłuż czerwonej}}, {{ui:Odbij wzdłuż zielonej}} lub {{ui:Odbij wzdłuż niebieskiej}} odbija zaznaczenie w miejscu, przez środek jego pudełka: lewe schody stają się prawymi. Ściany zachowują zwrot na zewnątrz, a grupa lub komponent jest odbijany w całości (jego wnętrze nie jest przepisywane).

{{ui:Odbita kopia wzdłuż czerwonej}} (oraz zielonej, niebieskiej) zostawia oryginał w miejscu i kładzie odbitą kopię obok, za dalszą stroną pudełka zaznaczenia: drugie drzwi pary, drugie skrzydło budynku. Luźna geometria dotykająca tam łączy się z oryginałem, jak zawsze dzieje się z dotykającą geometrią; aby je rozdzielić, najpierw zrób z oryginału grupę.

Wewnątrz otwartej grupy czerwona, zielona i niebieska to osie tej grupy.
