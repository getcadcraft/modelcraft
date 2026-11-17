---
title: Przecinanie ścian
summary: Rysuj linie, w których ściany przecinają się nawzajem, aby móc wypychać, usuwać lub malować powstałe kawałki.
keywords: przecięcie, przecinanie ścian, przetnij z modelem, przetnij z zaznaczeniem, wycięcie, otwór, dziura, połącz, linie przecięcia ścian, boolean
from: 6bc58526
---

Gdy jeden kształt przechodzi przez inny, ModelCraft nie rysuje linii, w której ich ściany się spotykają: po prostu się nakładają. **Przecięcie** rysuje te linie jako krawędzie, dzięki czemu ściany dzielą się w tych miejscach. Potem możesz wypychać/ciągnąć, usuwać lub malować kawałki.

Oba polecenia są w {{ui:Edycja}} › {{ui:Więcej}}.

## Przetnij z modelem

Tnie zaznaczone elementy o **każdą ścianę widoczną na ekranie**.

Na przykład belka (grupa) przechodzi przez ścianę (inną grupę) i chcesz w ścianie otwór:

1. Kliknij dwukrotnie ścianę, aby ją otworzyć, i zaznacz wszystkie jej ściany ({{key:Ctrl+A}}).
2. {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Przetnij z modelem}}.

Zarys belki zostaje narysowany na obu stronach ściany jako dwie nowe ściany. Wypchnij jedną z nich przez ścianę, aby powstał otwór, a potem zamknij ścianę.

## Przetnij z zaznaczeniem

Tnie zaznaczone ściany, grupy i komponenty **tylko względem siebie**. Zaznacz co najmniej dwa.

## Gdzie idą linie

Linie zawsze rysowane są w **otwartym kontekście**: w modelu, gdy żadna grupa nie jest otwarta, albo w grupie, którą edytujesz. Grupy i komponenty, które nie są otwarte, nie zmieniają się. Aby więc przeciąć ściany grupy, najpierw ją otwórz, jak w przykładzie powyżej.

## Warto wiedzieć

- Ściany leżące w tej samej płaszczyźnie nie są przecinane.
- Linie zamykające pętlę na ścianie tworzą nową ścianę, tak jak narysowane linie.
- Każde przecięcie to jeden krok cofania. Jeśli nic się nie przecina, nic się nie zmienia.
- Dla zamkniętych kształtów [narzędzia brył](topic:solids) (Suma, Odejmowanie) wykonują całą pracę w jednym kroku.
