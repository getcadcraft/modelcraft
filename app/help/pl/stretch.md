---
title: Komponenty, które się rozciągają
summary: Zrób jedną kopię komponentu szerszą, głębszą lub wyższą, a jego części zachowają swoje rozmiary: dłuższy stół z tymi samymi nogami, wyższy regał z rozsuniętymi półkami, balustrada, której słupki się powtarzają.
keywords: komponent dynamiczny, rozciąganie, zmiana rozmiaru komponentu, parametryczny, nazwane rozmiary, powtórz, macierz, nogi, półki, balustrada, reguły, zmienne
from: b4c40f43
---

Skalowanie komponentu powiększa wszystko w nim, również nogi i listwy. **Rozciągnij tę kopię** zmienia szerokość, głębokość lub wysokość komponentu, a każda część podąża za regułą: blat stołu rośnie, jego nogi zachowują grubość i pozostają na końcach.

Działa to na komponentach złożonych z części, czyli grup lub komponentów wewnątrz komponentu, jak każdy element [biblioteki startowej](topic:starter).

## Rozciągnij kopię

1. Zaznacz komponent.
2. W {{ui:Informacje o obiekcie}} kliknij {{ui:Rozciągnij tę kopię…}}.
3. Wpisz nową {{ui:Szerokość (czerwona)}}, {{ui:Głębokość (zielona)}} i {{ui:Wysokość (niebieska)}}, a następnie kliknij {{ui:Rozciągnięcie}}.

Zmienia się tylko ta kopia: staje się własnym komponentem, który pamięta oryginał, z którego powstał. Można ją rozciągnąć ponownie w dowolnym momencie; zostaje wtedy wyliczona na nowo z oryginału, więc nic się nie rozjeżdża. Inne kopie oryginału pozostają bez zmian.

## Reguły

Otwórz komponent (kliknij go dwukrotnie) i zaznacz jedną z jego części. {{ui:Informacje o obiekcie}} pokazuje {{ui:Gdy komponent się rozciąga}}, z regułą wzdłuż czerwonej, zielonej i niebieskiej osi:

| Reguła | Co robi część | Przykład |
|---|---|---|
| {{ui:Rozciągnięcie}} | Rośnie razem z komponentem; jej odległości od obu stron pozostają | Blat stołu |
| {{ui:Zostaje na początku}} / {{ui:Zostaje na końcu}} | Zachowuje swój rozmiar i odległość od tej strony | Nogi |
| {{ui:Przesuwa się proporcjonalnie}} | Zachowuje rozmiar; jej środek przesuwa się proporcjonalnie | Półki, uchwyt drzwi |
| {{ui:Skaluje się proporcjonalnie}} | Jej położenie i rozmiar rosną proporcjonalnie | Stopnie schodów |
| {{ui:Powtórz}} | Kopie jej, co pewien odstęp ({{ui:Co}}), od miejsca startu do dalszej strony | Słupki balustrady |

{{ui:Automatyczne}} (ustawienie początkowe) wylicza regułę i pokazuje, która to jest: {{ui:Rozciągnięcie}}, gdy część obejmuje cały komponent, {{ui:Przesuwa się proporcjonalnie}}, gdy leży mniej więcej pośrodku, a w pozostałych przypadkach zostaje przy tej stronie, która jest bliżej.

## Warto wiedzieć

- Kształty części są wspólne, więc rozciągnięta kopia waży niewiele. Edycja części zmienia ją we wszystkich kopiach.
- Rozciągnięta kopia nie podąża za późniejszymi zmianami reguł ani układu oryginału: rozciągnij ją ponownie, aby je uwzględnić.
- Ściany narysowane luźno w komponencie (nie w części) zachowują swój rozmiar; zrób z nich część, aby podążały.
- Reguły oraz to, z czego każda kopia została rozciągnięta, są zapisane w pliku ModelCraft.
