---
title: Płaszczyzny przekroju: przecięcie modelu
summary: Umieść płaszczyznę przekroju, aby zobaczyć wnętrze modelu, przesuń ją przez model, odwróć lub wyłącz cięcie.
keywords: przekrój, płaszczyzna przekroju, cięcie przekroju, cięcie, wycięcie, obcięcie, wnętrze, rzut z góry, plan, plasterek, przekrój poprzeczny
from: 28c3a645
---

Płaszczyzna przekroju rozcina model, abyś mógł widzieć i pracować wewnątrz niego: rzut z góry domu albo wnętrze szafki. Model nie jest zmieniany; cięcie jest tylko widokiem.

## Umieszczanie płaszczyzny

1. Naciśnij {{ui:Przekrój}} w grupie {{ui:Kamera}}.
2. Kliknij ścianę. Płaszczyzna zostaje umieszczona na tej ścianie, z czterema strzałkami skierowanymi w stronę patrzącego.

   Kliknij poza ścianą, aby płaszczyzna stanęła prostopadle do kierunku głównego spojrzenia. Najpierw naciśnij klawisz strzałki, aby ustawić ją prostopadle do czerwonej ({{key:Right}}), zielonej ({{key:Left}}) lub niebieskiej ({{key:Up}}).

Strona, na którą wskazują strzałki, jest **odcinana**. Płaszczyzna umieszczona na ścianie jeszcze niczego nie tnie: przesuń ją w głąb modelu.

## Przesuwanie, odwracanie i wyłączanie

Kliknij kontur płaszczyzny, aby ją zaznaczyć. W {{ui:Informacje o obiekcie}}:

- {{ui:Wzdłuż swoich strzałek}} pokazuje, gdzie się znajduje. Wpisz nową odległość i naciśnij {{key:Enter}}, aby przesunąć ją przez model; wpisanie `-1m` przy płaszczyźnie umieszczonej na przedniej ścianie przesuwa ją o 1 m w głąb modelu.
- {{ui:Odwróć}} obraca strzałki, więc odcinana jest druga strona.
- {{ui:Aktywna (tnie model)}}: w danym momencie tnie tylko jedna płaszczyzna. Zaznacz pole innej płaszczyzny albo umieść nową, a to ona będzie ciąć.
- Zmień jej nazwę w {{ui:Nazwa}}; usuń ją klawiszem {{key:Delete}} albo {{ui:Gumka}}.

Tam, gdzie płaszczyzna przechodzi przez zamkniętą bryłę, cięcie jest wypełnione ciemnym kolorem. Geometria, która nie jest zamknięta (pojedyncza ściana, otwarte pudełko), jest cięta, ale nie wypełniana.

## Pokazywanie i ukrywanie

W {{ui:Widoki}}:

- {{ui:Pokaż płaszczyzny przekrojów}} ukrywa kontury i strzałki płaszczyzn (cięcie pozostaje).
- {{ui:Pokaż cięcia przekrojów}} wyłącza cięcie i pokazuje cały model, bez usuwania płaszczyzn.

[Widok prezentacji](topic:styles-shadows#presentation-view) również ukrywa kontury.

## Warto wiedzieć

- To, co odcięto, nie może być klikane ani przyciągane, więc można rysować na tym, co pokazuje cięcie.
- Płaszczyzny przekroju, to, która jest aktywna, oraz oba przełączniki są zapisywane w pliku ModelCraft. Każda zmiana to jeden krok cofnięcia.
- Eksporty zawsze zawierają cały model: przekrój jest widokiem, a nie edycją.
