---
title: Oświetlanie modelu lampami
summary: Umieść w modelu lampy, reflektory i panele świetlne, aby wyrenderowane obrazy mogły pokazywać pomieszczenia nocą lub oświetlone wnętrza, z miękkimi cieniami.
keywords: światło, światła, lampa, lampy, oświetlenie, żarówka, lampa sufitowa, reflektor, downlight, panel świetlny, źródło powierzchniowe, luminy, jasność, temperatura barwowa, ciepły, noc, wnętrze, render
from: c8d72cbc
---

Lampy oświetlają [wyrenderowane obrazy](topic:render). Nie zmieniają widoku 3D, w którym każda lampa pokazuje się jako mały znacznik we własnym kolorze.

## Dodawanie lampy

1. W sekcji {{ui:Światła}} po prawej stronie kliknij {{ui:Lampa}}, {{ui:Reflektor}} lub {{ui:Panel świetlny}}.
2. Kliknij miejsce, w którym lampa ma stanąć. Przyciąganie działa tak jak przy rysowaniu.
   - Na suficie lub ścianie **lampa** zwisa 25 cm od powierzchni, po stronie, z której patrzysz; **panel świetlny** leży na powierzchni i świeci od niej.
   - **Reflektor** wymaga dwóch kliknięć: najpierw miejsca, w którym stoi, potem tego, co oświetla.

Nowa lampa jest zaznaczona w {{ui:Światła}}, gotowa do zmiany.

## Zmiana lampy

Kliknij nazwę lampy w {{ui:Światła}} albo jej znacznik w widoku za pomocą {{ui:Zaznacz}}. Następnie:

| Ustawienie | Co robi |
|---|---|
| {{ui:Jasność (lumeny)}} | Ile światła daje. Zwykła żarówka domowa to około 800 lumenów; jasny panel sufitowy 3000 |
| {{ui:Kolor}} | {{ui:Ciepłe}} (zwykła żarówka domowa), {{ui:Neutralne}} lub {{ui:Dzienne}}, albo dowolny kolor |
| {{ui:Wiązka (stopnie)}} | Stożek reflektora, od krawędzi do krawędzi |
| {{ui:Rozmiar żarówki}}, {{ui:Szerokość}}, {{ui:Głębokość}} | Większe żarówki i panele dają miększe cienie |
| {{ui:Czerwony (x)}}, {{ui:Zielony (y)}}, {{ui:Wysokość}} | Gdzie lampa się znajduje |

Pole wyboru obok nazwy lampy włącza ją lub wyłącza. {{ui:Usuń światło}} usuwa ją. Każda zmiana to jeden krok: {{key:Ctrl+Z}} ją cofa. Lampy są zapisywane w pliku `.modelcraft`.

## Wyrenderowane obrazy nocą

W oknie {{ui:Wyrenderuj obraz…}} zaznacz {{ui:Użyj innej daty i godziny dla tego obrazu}} i wybierz wieczorną godzinę. Gdy słońce zajdzie, niebo ściemnieje i model oświetlają tylko lampy. Jeśli obraz jest zbyt ciemny, zwiększ {{ui:Jasność}} w tym oknie albo dodaj lampy.

:::tip
Dla pomieszczenia widzianego od środka ustaw kamerę wewnątrz (obróć widok i przybliż go albo użyj [sceny](topic:scenes)), dodaj lampę na suficie i wyrenderuj obraz nocą. W trybie {{ui:Szybki}} rogi oddalone od lampy są ciemniejsze niż na zdjęciu; [tryb wysokiej jakości](topic:render#high-quality) pozwala światłu odbijać się od ścian.
:::
