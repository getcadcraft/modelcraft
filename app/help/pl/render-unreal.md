---
title: Wysyłanie sceny do silnika gry
summary: Studio może zapisać scenę w projekcie Unreal Engine i utrzymywać ją w zgodzie przy każdym wysłaniu; własne zmiany znajdują się w warstwie, do której CadCraft nigdy nie zapisuje. Wtyczka, która ją otwiera, nie jest jeszcze wydana.
keywords: unreal, unreal engine, silnik gry, link, wyślij, stage usd, projekt, live, kamera cine, kolejka renderowania filmu
from: 9a765cc2
---

W CadCraft Studio lista Engine może przechowywać **link** do projektu Unreal Engine. Tylko w jedną stronę: z CadCraft do Unreal.

## Wysyłanie sceny

1. Wybierz pozycję Unreal na liście Engine. Za pierwszym razem Studio poprosi o wskazanie folderu projektu (tego, w którym znajduje się plik `.uproject`); zapamięta go.
2. Naciśnij {{ui:Wyślij}}. Studio zapisze `CadCraft/<nazwa pliku>/` w projekcie: scenę jako plik USD, plik ustawień, profile świateł oraz dwa małe pliki warstw.
3. Zmień model, zapisz go i wyślij ponownie. Wymieniane są tylko scena i plik ustawień.

## Własne zmiany są bezpieczne

Stage, który otwiera Unreal, to mała warstwa główna, utworzona raz, z dwiema warstwami pod nią: **własną** na górze (`<name>.user.usda`, na początku pusta, nigdy nie zapisywana ponownie przez CadCraft) oraz scena CadCraft pod spodem. Zmiany zapisane we własnej warstwie pozostają po ponownym wysłaniu sceny. Światła i inne aktory umieszczone na poziomie Unreal znajdują się poza stage i również nie są zmieniane.

## Bez Studio

W przeglądarce albo na komputerze, na którym Studio nie znajduje Unreal, wybierz **Folder projektu Unreal (.zip)** na liście Engine i naciśnij {{ui:Renderuj}}. Zapisze on ten sam folder jako archiwum zip: rozpakuj je do folderu `CadCraft` w projekcie. Za pierwszym razem pozostaw zaznaczoną opcję **Dołącz pliki stage**; przy kolejnych zapisach ją wyłącz, aby zip zawierał tylko scenę i plik ustawień, a własna warstwa nigdy nie została zastąpiona.

:::note
Wtyczka Unreal, która otwiera stage, stosuje słońce, lampy, kamery i ekspozycję, śledzi każde wysłanie i renderuje kamerę, **nie jest jeszcze wydana** i nie była uruchamiana w Unreal. Do tego czasu Wyślij umieszcza pliki w projekcie, a wbudowane narzędzia USD w Unreal mogą je otworzyć. Pierwszym systemem jest Windows; macOS pojawi się później.
:::
