---
title: Pobieranie terenu z CivilCraft
summary: Otwórz plik adres-teren utworzony przez CivilCraft i dodaj budynki oraz działkę wokół niego jako bryły i linię terenu — tylko te, które zaznaczysz.
keywords: teren, civilcraft, adres, działka, sąsiednie budynki, bryły, kontekst, ccsite, dane otwarte, openstreetmap
from: f28e4a3b
---

CivilCraft potrafi wyszukać adres i zapisać to, co źródła danych otwartych wiedzą o jego okolicy: sąsiednie budynki, działkę oraz zarysy terenów zalewowych, stref planistycznych i gleb. ModelCraft traktuje ten plik jako propozycje. Nic nie zostaje dodane, dopóki tego nie zatwierdzisz.

## Wczytywanie pliku

1. W CivilCraft wyślij teren do ModelCraft albo zapisz plik (kończy się na `.ccsite.json`).
2. W ModelCraft otwórz plik lub upuść go na widok. Otworzy się lista z polem wyboru dla każdego budynku i dla działki.
3. Wpisz wysokość dla budynków, dla których źródło jej nie podało. Przy każdym widać, skąd pochodzi jego wysokość: liczba kondygnacji po 3 m lub wpisana przez ciebie wysokość.
4. Naciśnij {{ui:Dodaj zaznaczone}}.

Zaznaczone budynki stają się wyciągniętymi bryłami w jednym komponencie, a działka — linią wokół terenu. Wszystko to jest jednym krokiem cofania. Punkt adresu leży w punkcie zerowym; pozostałe elementy są podane w metrach na wschód i na północ od niego.

Zarysy terenów zalewowych, stref planistycznych i gleb są podane tylko dla informacji; nie są rysowane.

Dane pochodzą z otwartych źródeł, a ich atrybucja znajduje się na dole listy. Wysokości, które nie zostały podane, są założeniami, więc sprawdź je, zanim na nich polegasz.
