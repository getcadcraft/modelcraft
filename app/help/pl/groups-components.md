---
title: Grupy i komponenty
summary: Nie pozwól, by obiekty się sklejały, edytuj jedną kopię, aby zmienić wszystkie, i używaj paneli {{ui:Lista obiektów}} oraz {{ui:Komponenty}}.
keywords: grupa, komponent, utwórz grupę, utwórz komponent, rozbij, uczyń niepowtarzalnym, lista obiektów, wystąpienia, kopie, blok, zagnieżdżone, edytuj grupę, umieść
from: 7cb925f3
---

Luźna geometria w ModelCraft się skleja: linie, które się stykają, dzielą się nawzajem, a ściany wspólnie krawędzią przesuwają się razem. To sprawia, że rysowanie na ścianach działa, ale oznacza też, że pudełko narysowane przy innym pudełku się z nim łączy. **Grupy** i **komponenty** trzymają rzeczy osobno.

- **Grupa** otacza geometrię, tak że działa jak jeden obiekt. Nic spoza niej się do niej nie przykleja.
- **Komponent** to grupa, którą można umieścić wiele razy. Każda kopia ma tę samą zawartość: edytujesz jedną i zmieniają się wszystkie. Używaj komponentów do wszystkiego, co się powtarza: okien, słupów, biurek, drzew.

## Utwórz grupę lub komponent

1. Zaznacz geometrię. Potrójne kliknięcie ściany zaznacza cały połączony obiekt; przeciągnięcie okna zaznacza wszystko w prostokącie.
2. Naciśnij {{key:Shift+G}} dla grupy lub {{key:G}} dla komponentu. Możesz też kliknąć {{ui:Grupa}} lub {{ui:Komponent}} na pasku narzędzi w grupie {{ui:Porządkuj}} albo {{ui:Utwórz grupę (Shift+G)}} lub {{ui:Utwórz komponent (G)}} w {{ui:Informacje o obiekcie}}.

   Pasek stanu mówi „Zgrupowano jako Group#1.” albo „Utworzono komponent Component#1.”, nowy obiekt jest zaznaczony i pojawia się na {{ui:Lista obiektów}}.

3. Aby go nazwać, wpisz nazwę w polu {{ui:Nazwa}} w {{ui:Informacje o obiekcie}} i naciśnij {{key:Enter}} albo kliknij poza polem.

Zaznaczenie ściany zabiera ze sobą jej krawędzie. Jeśli nic nie jest zaznaczone, pasek stanu mówi: „Najpierw zaznacz geometrię (przeciągnij okno lub potrójnie kliknij, aby zaznaczyć wszystko połączone).”

Możesz też grupować grupy: zaznacz kilka grup i naciśnij {{key:Shift+G}}. {{ui:Lista obiektów}} pokazuje zagnieżdżenie.

:::note
Litery klawiszy są zgodne z domyślnymi ustawieniami SketchUp: {{key:G}} tworzy komponent, {{key:Shift+G}} grupę.
:::

## Edycja wewnątrz grupy lub komponentu

1. Kliknij dwukrotnie (w widoku albo na {{ui:Lista obiektów}}) lub zaznacz obiekt i kliknij {{ui:Edycja}} w {{ui:Informacje o obiekcie}}.

   Reszta modelu blaknie, osie przesuwają się do własnych osi grupy, a {{ui:Lista obiektów}} pokazuje „Edycja: Model › Group#1”. Pasek stanu mówi: „Edycja Group#1. Esc lub podwójne kliknięcie poza grupą ją zamyka.”

2. Rysuj, wypychaj/ciągnij, przesuwaj i usuwaj jak zwykle. Wszystko, co robisz, zostaje w grupie.
3. Zamknij ją: naciśnij {{key:Esc}} (dwa razy, jeśli coś jest zaznaczone), kliknij dwukrotnie puste miejsce albo kliknij {{ui:Zamknij grupę}} na {{ui:Lista obiektów}}.

Gdy komponent jest otwarty, każda jego kopia zmienia się wraz z twoją pracą.

## Umieść więcej kopii komponentu

- Skopiuj go za pomocą {{ui:Przesuń}} i {{key:Ctrl}} (zobacz [Przesuwanie i kopiowanie](topic:move-copy)). Każda kopia to kolejne umieszczenie tego samego komponentu.
- Albo kliknij {{ui:Umieść}} obok niego w panelu {{ui:Komponenty}}, a potem kliknij miejsce, w którym ma się znaleźć. Jego punkt początkowy, czyli najniższy róg pudełka wokół tego, co zaznaczyłeś przy tworzeniu, trafi tam, gdzie klikniesz. Narzędzie wraca wtedy do {{ui:Zaznacz}}.

{{ui:Komponenty}} pokazuje, ile kopii jest umieszczonych („4×”), a {{ui:Lista obiektów}} pokazuje liczbę po nazwie.

## Przestawianie na Liście obiektów

Przeciągnij wiersz na {{ui:Lista obiektów}}, aby zmienić, gdzie należy. Nic nie porusza się w widoku: grupa zachowuje swoje miejsce w modelu.

- **Do grupy:** upuść go na środku wiersza grupy (wiersz dostanie przerywany obrys). Trafia do środka, na koniec.
- **W innej kolejności:** upuść go na górną lub dolną krawędź wiersza (pojawi się tam linia). Trafia tuż przed lub po tym wierszu, wewnątrz tej samej grupy co ten wiersz, więc można go tak też umieścić w grupie na wybranej pozycji.
- **Na najwyższy poziom:** upuść go na nagłówek {{ui:Lista obiektów}}. Trafia na koniec.

Każde upuszczenie to jeden krok: {{key:Mod+Z}} je cofa. {{key:Esc}} podczas przeciągania niczego nie upuszcza. Grupa nie może trafić do samej siebie ani do grupy, którą zawiera. Przeciąganie jest wyłączone, gdy {{ui:Szukaj po nazwie}} ma wpisany tekst.

:::touch
Przytrzymaj palec na wierszu przez chwilę, a potem przeciągnij. Szybkie przesunięcie przewija listę.
:::

## Zmień jedną kopię

Zaznacz kopię i kliknij {{ui:Uczyń niepowtarzalnym}} w {{ui:Informacje o obiekcie}} (widoczne, gdy komponent jest umieszczony więcej niż raz). Ta kopia dostaje własną definicję, nazwaną jak oryginał, z nowym numerem. Edytuj ją bez ruszania pozostałych.

## Zamień grupę w komponent

Zaznacz grupę i kliknij {{ui:Utworzenie komponentu}} w {{ui:Informacje o obiekcie}}. Dostaje nową nazwę, na przykład Component#2, nawet jeśli nazwałeś grupę; wpisz nazwę ponownie w polu {{ui:Nazwa}}.

## Rozbij

Zaznacz grupę lub komponent i kliknij {{ui:Rozbij}} (na pasku narzędzi albo w {{ui:Informacje o obiekcie}}). Jego zawartość staje się luźną geometrią w tym samym miejscu i przykleja się do tego, czego dotyka. Grupy w jego wnętrzu pozostają grupami.

## Bryła i objętość

Gdy zaznaczysz grupę lub komponent, {{ui:Informacje o obiekcie}} pokazuje **Bryła: Tak**, jeśli jego ściany są zamknięte bez szczelin (każda krawędź jest wspólna dla dokładnie dwóch ścian) i nie ma w środku zagnieżdżonych grup. Wtedy pokazuje też **objętość**. Pudełko, ściana z wyciętym oknem i wyciągnięty walec to bryły; pudełko z usuniętą górną ścianą nią nie jest.

## Gdy znika ostatnia kopia

Usunięcie ostatniej kopii komponentu usuwa go także z panelu {{ui:Komponenty}}. {{key:Mod+Z}} go przywraca.

## Warto wiedzieć

- Kopie **grupy** wykonane przez {{ui:Przesuń}} w tej wersji współdzielą zawartość, tak jak kopie komponentów: edycja jednej zmienia pozostałe. Aby ją uniezależnić, kliknij {{ui:Utworzenie komponentu}}, a potem {{ui:Uczyń niepowtarzalnym}}. Zobacz [Rozwiązywanie problemów](topic:troubleshooting#editing-one-group-changed-another).
- Komponenty nie wycinają otworów w ścianach i nie przyklejają się do ścian, a nie ma biblioteki gotowych komponentów. Tworzysz własne albo je importujesz.
- Importowane pliki trafiają jako grupa. Pliki Collada zachowują w jej wnętrzu własne grupy i komponenty.
