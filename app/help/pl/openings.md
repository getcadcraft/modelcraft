---
title: Wycięcie otworu w ścianie
summary: Narysuj okno lub drzwi na ścianie o grubości i wypchnij je, aby ściana dostała prawdziwy otwór.
keywords: okno, drzwi, otwór, dziura, ściana, wytnij, wypchnij na wylot, pustka, grubość, elewacja
from: 6b22f32c
---

Otwór wymaga ściany z dwiema stronami: pudełka albo ściany zrobionej przez wyciągnięcie długiego, wąskiego prostokąta. Pojedyncza ściana stojąca sama nie ma czego przebić.

## Zrób ścianę do ćwiczeń

1. Naciśnij {{key:R}}, kliknij narożnik na ziemi i wpisz `6m,0.3m` (lub `20',12"`), a następnie {{key:Enter}}.
2. Naciśnij {{key:P}}, kliknij prostokąt i wpisz `3m` (lub `10'`), a następnie {{key:Enter}}.

Masz ścianę grubą na 300 mm (12 in).

## Narysuj otwór

1. Obróć widok, abyś widział długą stronę ściany.
2. Naciśnij {{key:R}}.
3. Najedź na ścianę, a potem kliknij, gdzie ma być dolny narożnik okna. Podpowiedź mówi „Na ścianie”.
4. Wpisz szerokość i wysokość okna, na przykład `1.2m,1.5m` (lub `4',5'`), i naciśnij {{key:Enter}}.

   Okno jest osobną ścianą w obrębie ściany, która teraz ma wokół siebie dziurę.

Aby umieścić je w dokładnej odległości od narożnika i podłogi, najpierw użyj [prowadnic](topic:guides-measure): narzędziem {{ui:Miara}} przeciągnij linie prowadnic od dolnej i bocznej krawędzi ściany, a potem zacznij prostokąt tam, gdzie dwie prowadnice się przecinają (podpowiedź mówi „Na prowadnicy”).

## Wypchnij na wylot

1. Naciśnij {{key:P}}.
2. Kliknij ścianę okna i wypchnij ją w głąb ściany.
3. Przesuń, aż zatrzyma się na tylnej ścianie, a potem kliknij. Albo wpisz grubość ściany, `300` (lub `12`), i naciśnij {{key:Enter}}.

   ModelCraft zatrzymuje się na ścianie za nią i ją otwiera: ściana ma teraz dziurę na wylot, z czterema bocznymi ścianami (ościeżnica, nadproże i parapet) ją wykładającymi. {{ui:Informacje o obiekcie}} nadal nazywa ścianę zamkniętą bryłą, gdy jest zgrupowana.

Jeśli wypchniesz mniej niż pełną grubość, zamiast dziury dostaniesz wgłębienie.

## Drzwi

Narysuj prostokąt zaczynając od dolnej krawędzi ściany (podpowiedź mówi „Na krawędzi” albo „Koniec”), tak aby otwór sięgał podłogi. Wypchnij go w ten sam sposób.

## Wiele okien tego samego rozmiaru

1. Zrób pierwszy otwór.
2. Dla kolejnych narysuj prostokąty, a potem kliknij dwukrotnie każdy z nich narzędziem {{ui:Wypychanie/ciągnięcie}}: dwukrotne kliknięcie powtarza ostatnią odległość. Zobacz [Wypychanie i ciągnięcie](topic:push-pull#repeat-the-last-distance).

## Jeśli nie przecięło na wylot

- Prostokąt musi być narysowany **na** ścianie. Jeśli został narysowany w powietrzu przed nią, jest osobną ścianą: cofnij i narysuj ponownie, zaczynając na ścianie.
- Wypychanie zatrzymuje się na pierwszej ścianie za otworem. Jeśli w ścianie coś jest w drodze (wewnętrzna ściana pozostała po wcześniejszym rysowaniu), zatrzyma się tam; usuń krawędzie tej ściany i spróbuj ponownie.
- Geometria w osobnej grupie nie jest przecinana. Otwórz grupę, która zawiera ścianę, i narysuj otwór w jej obrębie.
