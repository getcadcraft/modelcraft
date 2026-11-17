---
title: Skalowanie współczynnikami i naddatek na skurcz
summary: Skaluj zaznaczenie współczynnikiem dla każdej osi względem wybranego punktu albo powiększ model o procent, o jaki skurczy się odlew.
keywords: skalowanie, nierównomiernie, współczynnik, procent, rozciąganie, skurcz, kurczenie, odlew, model odlewniczy, odlewnia, naddatek, zmiana rozmiaru
from: 37e1bbff
---

Narzędzie Skaluj ({{key:S}}) skaluje równomiernie albo przeciąga uchwyt, aby rozciągnąć jeden lub dwa kierunki. **Skaluj współczynnikami…** (menu Narzędzia lub grupa Modyfikuj) to wersja z wpisywaniem: liczba dla każdej z trzech osi.

1. Zaznacz krawędzie, ściany, grupy lub komponenty.
2. Otwórz {{ui:Skaluj współczynnikami…}}. Wpisz współczynnik dla osi czerwonej, zielonej i niebieskiej. Współczynnik może mieć postać `1.015`, `101.5%` lub `+1.5%` (a `-2%`, aby zmniejszyć). {{ui:Tak samo na wszystkich trzech osiach}} kopiuje pierwszy do dwóch pozostałych.
3. Wybierz, co **pozostaje na miejscu**: środek zaznaczenia, jego najniższy narożnik, środek jego podstawy albo początek układu.
4. Wiersz pod polami pokazuje rozmiar teraz i po zmianie. {{ui:Skaluj}} wykonuje to jednym krokiem cofnięcia.

Osie są osiami grupy, która jest otwarta (osiami modelu na najwyższym poziomie). Grupa lub komponent, który jest obrócony, wychodzi skośny, jeśli jego współczynniki się różnią; zamiast tego przeskaluj grupę, która go zawiera. Zawartość komponentu nie jest ruszana, więc jego pozostałe kopie zostają bez zmian.

## Naddatek na skurcz

Odlew kurczy się podczas stygnięcia, dlatego jego model odlewniczy wykonuje się większy. W sekcji **Naddatek na skurcz** wpisz procent dla każdej osi (podaje go odlewnia lub wykonawca modelu dla danego metalu; 1.5 % poniżej to tylko przykład) i naciśnij {{ui:Użyj jako współczynników}}.

- **Sam procent** daje współczynnik 1 plus procent: 1.5 % daje 1.015, czyli to, co zaznacza liniał skurczowy.
- **Dokładnie tyle** daje współczynnik 1 podzielony przez (jeden minus procent): 1.5 % daje 1.0152, więc odlew wychodzi w rozmiarze części po takim skurczu.

Ostatnie procenty są zapamiętywane w tej przeglądarce.

:::note
Procent wpisuje się samodzielnie: ModelCraft nic nie wie o metalu, formie ani procesie.
:::
