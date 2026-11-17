---
title: Tekst 3D
summary: Dodaj napisy do modelu jako ściany, płaskie lub bryłowe, leżące na dowolnej ścianie: szyld, numer domu, nazwisko na drzwiach.
keywords: tekst 3d, tekst, litery, napisy, szyld, oznakowanie, numer domu, etykieta, grawerowanie, czcionka, słowa
from: 923f5d93
---

{{ui:Tekst 3D}} w grupie {{ui:Rysuj}} tworzy napis z płaszczyzn, który można pomalować, przetworzyć narzędziem {{ui:Wypychanie/ciągnięcie}} lub wyciąć w bryle.

## Dodawanie tekstu

1. Kliknij {{ui:Tekst 3D}}.
2. Wpisz tekst. Naciśnij {{key:Enter}} w polu, aby zacząć drugi wiersz.
3. Ustaw {{ui:Wysokość liter}} (wysokość wielkiej litery, na przykład `30cm` lub `1'`) oraz {{ui:Głębokość}}:
   - `0` daje **płaskie litery**: ściany leżące na tym, na czym je umieścisz, gotowe do malowania lub wypychania/ciągnięcia.
   - Głębokość, na przykład `5cm`, daje **bryłowe litery**: zamknięte bryły, których można użyć z [narzędziami brył](topic:solids).
4. Kliknij {{ui:Umieść}}, a następnie kliknij miejsce, w którym ma się znaleźć tekst.

Na ścianie tekst leży na tej ścianie i czyta się go od lewej do prawej: na ścianie stoi pionowo, a na ziemi lub stole leży płasko wzdłuż czerwonej osi. Z dala od ścian leży na ziemi.

Tekst jest **komponentem** nazwanym od swojej treści, więc każda kopia zmienia się, gdy edytujesz jedną z nich, i pojawia się na liście {{ui:Komponenty}}, skąd można go ponownie umieścić.

## Warto wiedzieć

- Litery to własna jednoliniowa czcionka ModelCraft, pogrubiona: czytelna i czysta, bez wyboru kroju pisma na razie.
- Litery, cyfry i popularne znaki (w tym litery z akcentami) są rysowane; znak, którego czcionka nie ma, pokazuje się jako mały prostokąt.
- Aby zmienić treść, usuń tekst i dodaj go ponownie.
- Aby wyciąć napis w powierzchni, zrób litery bryłowe, umieść je w połowie bryły w grupie i [odejmij](topic:solids) je.
