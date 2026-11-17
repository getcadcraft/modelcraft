---
title: Rysuj ściany linią, prostokątami, okręgami i łukami
summary: Twórz płaskie ściany na ziemi lub na innych ścianach, dziel je liniami i rysuj okręgi oraz wielokąty o wybranej liczbie boków.
keywords: rysuj, linia, prostokąt, okrąg, wielokąt, odsunięcie, ramka, obramowanie, łuk, krzywa, spline, gładka, kabel, ścieżka, wybrzuszenie, promień, ściana, rzut podłogi, obrys, podział, boki, segmenty, kontur, ołówek
from: b6d7b7dd
---

Wszystko w ModelCraft zaczyna się jako płaska **ściana**: powierzchnia zamknięta krawędziami. Ścianę możesz narysować bezpośrednio za pomocą {{ui:Prostokąt}}, {{ui:Okrąg}} lub {{ui:Wielokąt}}, albo obrysować ją krawędź po krawędzi za pomocą {{ui:Linia}}. Ściany to właśnie to, co [Wypchnij/pociągnij](topic:push-pull) zamienia w bryły.

## Narysuj prostokąt

1. Naciśnij {{key:R}}.
2. Kliknij pierwszy narożnik: na ziemi albo na dowolnej ścianie modelu.
3. Przesuń wskaźnik. Prostokąt pozostaje na ziemi (lub na ścianie, na której zacząłeś), a {{ui:Wymiary}} w polu wartości pokazuje jego szerokość i głębokość. Podpowiedź mówi „Kwadrat”, gdy boki są równe.

   Aby rysować na innej płaszczyźnie, wskaż ją: ściana przechodząca przez pierwszy narożnik przenosi prostokąt na tę ścianę, a przyciągnięcie do punktu spoza płaszczyzny (punkt końcowy, krawędź, niebieska oś) stawia prostokąt pionowo przez oba narożniki. Przyciągnięcie z powrotem do punktu na pierwszej płaszczyźnie znów kładzie go płasko. Aby zachować jedną płaszczyznę, naciśnij klawisz strzałki: {{key:Up}} utrzymuje prostokąt w poziomie (niebieska płaszczyzna), {{key:Right}} – na płaszczyźnie czerwonej, {{key:Left}} – na płaszczyźnie zielonej. Naciśnij ten sam klawisz ponownie, aby odblokować.
4. Kliknij przeciwległy narożnik albo wpisz dwa wymiary oddzielone przecinkiem i naciśnij {{key:Enter}}: `4m,3m`, `4000,3000` w modelu w milimetrach lub `12',10'6"` w stopach i calach.

   Pojawia się ściana z czterema krawędziami dookoła.

Wpisane wymiary idą w kierunku, w który wskazywałeś: jeśli wskaźnik jest na lewo od pierwszego narożnika w chwili wpisywania, prostokąt rośnie w lewo.

:::warning
Przecinek oddziela dwa wymiary, więc nie może być znakiem dziesiętnym. Wpisz `2.5m,3m`, nigdy `2,5m`.
:::

## Narysuj okrąg lub wielokąt

1. Naciśnij {{key:C}} dla okręgu lub {{key:N}} dla wielokąta.
2. Aby zmienić liczbę boków, wpisz ją przed kliknięciem: `12s` (lub samo `12`) i {{key:Enter}}. Okrąg zaczyna się od 24 boków, a wielokąt od 6. Podpowiedź pokazuje bieżącą liczbę; ModelCraft zachowuje ją dla następnego okręgu, aż ją zmienisz lub przełączysz narzędzie.
3. Kliknij środek, na ziemi albo na ścianie. Aby wycentrować na ścianie, wskaż środek ściany („Środek ściany”) albo środek jednej z jej krawędzi („Punkt środkowy”), trzymając wskaźnik tuż wewnątrz tej ściany: okrąg zostanie narysowany na tej ścianie, nawet na wąskim końcu długiego prostopadłościanu.
4. Kliknij, aby ustawić promień, albo wpisz go ({{ui:Promień}} w polu wartości) i naciśnij {{key:Enter}}.

Okrąg to wielokąt o wielu bokach. Gdy wyciągasz okrąg za pomocą Wypchnij/pociągnij, jego boki są zmiękczane, aby walec wyglądał jak jedna gładka powierzchnia.

## Narysuj łuk

1. Naciśnij {{key:A}} ({{ui:Łuk}}).
2. Kliknij, gdzie łuk się zaczyna, a potem, gdzie się kończy (albo wpisz długość między nimi).
3. Przesuń wskaźnik, aby wygiąć łuk na zewnątrz, i kliknij. Podpowiedź mówi „Półokrąg”, gdy wybrzuszenie równa się połowie odległości między końcami. Możesz też wpisać, jak daleko odstaje środek łuku: `2` i {{key:Enter}}.

Aby zamiast tego narysować łuk wokół punktu, użyj {{ui:Łuk od środka}}: kliknij środek, potem miejsce, gdzie łuk się zaczyna (albo wpisz promień), a potem miejsce, gdzie się kończy (albo wpisz kąt w stopniach, na przykład `90`). Przyciąga się co 15°.

Łuk zaczęty na ścianie jest rysowany na tej ścianie; w przeciwnym razie leży na ziemi albo stoi pionowo, gdy jego dwa końce są na różnych wysokościach. Łuk ma 12 segmentów; wpisz `24s` podczas rysowania, aby uzyskać więcej. Łuki zamykają ściany tak samo jak linie: łuk przez narożnik prostokąta go dzieli.

## Narysuj gładką krzywą

{{ui:Krzywa}} rysuje gładką linię przechodzącą przez każdy klikany punkt: kabel, trasę poręczy, krawędź ogrodu. Może oderwać się od ziemi: punkty przyciągają się do narożników, krawędzi i ścian w dowolnym miejscu, a klawisze strzałek blokują kierunek czerwony, zielony lub niebieski, jak przy {{ui:Linia}}.

1. Kliknij {{ui:Krzywa}} w grupie {{ui:Rysuj}}.
2. Klikaj punkty, przez które przechodzi krzywa. Wpisz `<0,0,1>` i naciśnij {{key:Enter}}, aby uzyskać punkt 1 nad ostatnim, `[x,y,z]` dla dokładnego miejsca albo długość dla punktu tak daleko w kierunku wskaźnika.
3. Naciśnij {{key:Enter}} lub kliknij dwukrotnie, aby zakończyć. Kliknij ponownie pierwszy punkt, aby zamknąć krzywą. {{key:Backspace}} cofa ostatni punkt.

Krzywa zaznacza się jako jeden element. Aby ją zmienić, zaznacz ją i kliknij {{ui:Edytuj punkty}} w {{ui:Informacje o obiekcie}}: jej punkty pokażą się jako kwadraty. Kliknij jeden, a potem miejsce, w które ma trafić (albo wpisz `<dx,dy,dz>`). {{key:Esc}} cofa punkt na miejsce i kończy edycję. Zamknięta płaska krzywa tworzy ścianę; krzywej, która obrysowuje ścianę, nie można już edytować.

## Odsunięcie: ramka wewnątrz lub na zewnątrz ściany

{{ui:Odsunięcie}} kopiuje obrys ściany o ustaloną odległość do wewnątrz (lub na zewnątrz), na przykład dla ramy, obramowania, parapetu albo szyby ekranu.

1. Naciśnij {{key:F}} i kliknij ścianę albo zaznacz najpierw ścianę, a potem naciśnij {{key:F}}.
2. Przesuń wskaźnik do wnętrza ściany, aby uzyskać obrys wewnętrzny, albo na zewnątrz, aby uzyskać zewnętrzny. Nowy obrys podąża za wskaźnikiem, a podpowiedź pokazuje odległość.
3. Kliknij albo wpisz odległość i naciśnij {{key:Enter}}.

Ściana dzieli się na dwie: wewnętrzną i ramę wokół niej (albo nowy pierścień na zewnątrz). Od razu wypchnij lub wciągnij jedną z nich: w przypadku ekranu narysuj prostopadłościan, wypchnij go do grubości, odsuń przednią ścianę o 30 mm do wewnątrz i lekko wepchnij wewnętrzną ścianę, aby uzyskać szybę. Otwory w ścianie też są odsuwane, a łuk lub okrąg pozostaje jedną (mniejszą lub większą) krzywą.

- **Kliknij dwukrotnie** ścianę przy {{ui:Odsunięcie}}, aby odsunąć ją ponownie o ostatnią odległość.
- **Krawędzie:** zaznacz łańcuch połączonych krawędzi w jednej płaszczyźnie (na przykład dwie linie litery L), naciśnij {{key:F}}, przesuń na stronę, którą chcesz, i wpisz odległość: powstaje kopia równoległa z narożnikami ściętymi na ukos.
- Gdy odległość jest większa, niż ściana dopuszcza, ModelCraft to mówi i nic nie rysuje.

## Łuki, okręgi i wielokąty są krzywymi

Kliknij dowolny segment łuku, okręgu lub wielokąta, a zostanie zaznaczona cała krzywa. {{ui:Informacje o obiekcie}} pokazuje wtedy jej promień, segmenty, kąt (w przypadku łuków) i długość. Wpisz tam nowy promień, aby zmienić rozmiar wokół jej środka; ściany narysowane w jej płaszczyźnie podążą za nim. Gdy ściana tej krzywej została już wypchnięta lub wciągnięta, jej promień pozostaje bez zmian.

## Rysowanie liniami

1. Naciśnij {{key:L}}.
2. Kliknij, gdzie linia się zaczyna.
3. Kliknij, gdzie się kończy, albo wpisz długość i naciśnij {{key:Enter}}. Wpisana długość idzie w kierunku, który pokazuje wskaźnik.
4. Klikaj dalej. Każde kliknięcie zaczyna następną linię od końca poprzedniej.
5. Zamknij obrys, klikając ponownie pierwszy punkt. Gdy linie zamkną płaską pętlę, wypełnia się ona ścianą, a narzędzie przestaje łączyć kolejne linie. Naciśnij {{key:Esc}}, aby zatrzymać w dowolnym momencie.

Linie przyjmują kierunki czerwony, zielony i niebieski, gdy zbliżasz się do nich; linia przybiera ten kolor, a podpowiedź mówi „Na osi czerwonej”. Zobacz [Wnioskowanie i przyciąganie](topic:inference), aby dowiedzieć się, jak zablokować kierunek i przyciągać do punktów.

### Dokąd idzie linia, gdy niczego nie dotyka

- Linia zaczynająca się na ścianie pozostaje w płaszczyźnie tej ściany.
- Linia zaczynająca się na ziemi lub w pustej przestrzeni pozostaje na poziomie punktu początkowego. Jeśli patrzysz na model z boku, zamiast tego idzie w płaszczyźnie pionowej skierowanej w twoją stronę.
- Aby narysować linię do dokładnego miejsca, wpisz punkt: `[x,y,z]` dla punktu w modelu albo `<dx,dy,dz>` dla przesunięcia od punktu początkowego. Zobacz [Wpisywanie dokładnych rozmiarów](topic:value-box).

## Podziel ścianę

Narysuj linię przez ścianę, od jednej krawędzi do drugiej (albo od krawędzi do krawędzi, przez inne linie). Ściana dzieli się na dwie. Każda zachowuje swoją stronę i kolor. Tak samo działa prostokąt lub okrąg narysowany na ścianie: kształt staje się własną ścianą wewnątrz większej, która ma teraz otwór.

Tak wyznacza się pomieszczenia na płycie stropowej, okno na ścianie albo stopień na schodach: narysuj obrys na ścianie, a potem wypchnij lub wciągnij nową ścianę.

## Ściany zwrócone w złą stronę

Każda ściana ma przód i tył. Tył pokazuje się na niebiesko-szaro. Ściany narysowane na ziemi są skierowane do góry; ściany narysowane na innej ścianie są skierowane tak samo jak tamta.

Jeśli ściana pokazuje tył tam, gdzie spodziewasz się przodu, zaznacz ją i kliknij {{ui:Odwróć ścianę}} w {{ui:Informacje o obiekcie}}.

## Co widzisz podczas rysowania

- Kolorowy znacznik w miejscu, do którego przyciąga się wskaźnik, i jego nazwa w podpowiedzi w lewym dolnym rogu.
- Podgląd linii lub kształtu.
- Rozmiar na żywo w polu wartości. Możesz go nadpisać w dowolnym momencie.

## Jeśli kształt nie jest tam, gdzie oczekiwano

- Na ekranie dotykowym zobacz [Rozwiązywanie problemów](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Jeśli linia przyciągnęła się do czegoś daleko za spodem, obróć widok trochę: punkty ukryte za ścianą nigdy się nie przyciągają, ale punkty na jej krawędzi tak.
- Naciśnij {{key:Mod+Z}}, aby cofnąć ostatni kształt; jedno cofnięcie usuwa jedną linię lub jeden kształt.
