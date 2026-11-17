---
title: Wysyłanie bryły masowej do BimCraft
summary: Przekaż bryły z push/pull do BimCraft jako opcje brył masowych, z kondygnacjami, obrysem, powierzchnią użytkową brutto i objętością obliczonymi z każdej bryły.
keywords: bryła masowa, masa, koncepcja, opcje, bimcraft, ifc, bim, push pull, kondygnacje, piętra, powierzchnia użytkowa brutto, obrys, objętość, wysyłanie, przekazanie, bryła budynku, etap 2
from: 73c51f3f
---

## Co zrobisz

Zamień bryły zamodelowane przez push/pull w opcje brył masowych, które rozumie BimCraft, aby koncepcja mogła przejść dalej jako model budynku.

## Zanim zaczniesz

Każdą masę zamień w **grupę** lub **komponent** i nadaj jej nazwę. Każda staje się jedną opcją. Luźna geometria nie jest wysyłana.

## Wysyłanie

1. Zaznacz grupy do wysłania. Gdy nic nie jest zaznaczone, wysyłane są wszystkie grupy i komponenty najwyższego poziomu.
2. Wybierz {{ui:Eksport}}, a następnie {{ui:Bryła masowa do BimCraft…}}.
3. Wpisz {{ui:Nazwa zestawu opcji}} i {{ui:Wysokość kondygnacji}}.
4. Sprawdź listę: kondygnacje, obrys, powierzchnię użytkową brutto i objętość każdej opcji.
5. Wybierz **Wyślij do BimCraft**, aby otworzyć BimCraft w nowej karcie z opcjami, albo {{ui:Zapisz jako IFC}}, aby pobrać plik i otworzyć go tam samodzielnie.

W BimCraft opcje są wymienione pod nagłówkiem „Opcje bryły masowej w modelu”, gdzie jedną z nich można ustawić jako bieżącą i rozwinąć w ściany oraz stropy.

## Jak bryła staje się masą

- **Kondygnacje** to wysokość bryły podzielona przez wysokość kondygnacji, zaokrąglona, lecz co najmniej jedna. Kondygnacje dzielą wysokość bryły równo, więc blok o wysokości 10 m przy kondygnacjach po 3 m ma 3 kondygnacje po 3.33 m.
- **Powierzchnia kondygnacji** to pole własnego poziomego przekroju bryły na poziomie tej kondygnacji. Blok, który się cofa, ma mniejsze wyższe kondygnacje, a powierzchnia użytkowa brutto to ich suma.
- **Obrys** to kontur przekroju tuż nad podstawą bryły.
- **Objętość** to objętość samej bryły.

W pliku IFC każda opcja to element zastępczy budynku (building element proxy): obrys podniesiony na wysokość bryły, z jedną przestrzenią na kondygnację, która niesie powierzchnię brutto tej kondygnacji. Wszystkie opcje dzielą jeden budynek, z taką liczbą kondygnacji, jaką ma najwyższa opcja.

## Uproszczone kształty

Zwykły pionowy blok trafia dokładnie tak, jak został zamodelowany. Każda inna bryła jest nadal wysyłana, a lista podaje, dlaczego jej kształt jest uproszczony:

- **Jej kondygnacje nie mają wszystkie wielkości podstawy** (cofa się lub ma skos): masa w BimCraft to kontur podstawy podniesiony na pełną wysokość, lecz powierzchnie kondygnacji i objętość są jej własne.
- **Bryła nie jest zamknięta**: kondygnacje, których przekroju nie da się zamknąć, nie są mierzone i liczą się jako zero. Zamknij bryłę ({{ui:Informacje o obiekcie}} podaje „Bryła: Tak”), aby uzyskać pełne wartości.
- **Jej podstawa ma więcej niż jeden kontur**: jako obrys używany jest największy z nich.

## Warto wiedzieć

- {{ui:IFC dla BimCraft (.ifc)}} to inny eksport: wysyła tylko kształty i nazwy, bez kondygnacji i powierzchni.
- Nic nie jest przesyłane. Plik trafia do karty BimCraft na tym komputerze.
