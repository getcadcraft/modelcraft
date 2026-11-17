---
title: Czym renderuje ten komputer
summary: Ustawienia › Renderowanie pokazuje grafikę, rdzenie procesora i pamięć, z których ta przeglądarka pozwala korzystać aplikacji, oraz poziom, który określa, od czego zaczyna się renderowanie.
keywords: ten komputer, karta graficzna, gpu, webgpu, webgl, procesor, cpu, rdzenie, wątki, pamięć, ram, pamięć współdzielona, izolacja, poziom, poziom, szybkość, wolny, szybkość renderowania, laptop
from: 8a0c21c9
---

Otwórz {{ui:Ustawienia}} ({{key:Mod+,}}), pozostań na karcie tej aplikacji i przewiń do {{ui:Renderowanie}}. {{ui:Ten komputer}} wyświetla, z czego ta przeglądarka pozwala korzystać aplikacji do renderowania. Nic z tego nie opuszcza tego komputera.

| Wiersz | Co to oznacza |
|---|---|
| {{ui:Grafika}} | Karta graficzna zgłaszana przez przeglądarkę. „WebGPU” oznacza, że może wykonać całą pracę renderowania; „WebGL 2 only” oznacza, że widok na żywo i {{ui:Wyrenderuj obraz…}} z niej korzystają (wysoka jakość dzięki programowi path tracer dla WebGL), a renderowanie w widoku i kolejka renderowania, które wymagają WebGPU, nie są dostępne; programowa wersja zastępcza oznacza, że wszystko działa na procesorze |
| {{ui:Procesor}} | Ile rdzeni procesora zgłasza przeglądarka |
| {{ui:Pamięć}} | Mniej więcej ile pamięci ma komputer, gdy przeglądarka to podaje. Niektóre przeglądarki tego nie robią |
| {{ui:Pamięć współdzielona}} | Czy strona może współdzielić pamięć między swoimi wątkami roboczymi. Gdy włączona, każdy rdzeń może pracować na jednej kopii sceny; gdy wyłączona, każdy potrzebuje własnej kopii, więc duża scena mieści się naraz na mniejszej liczbie rdzeni |
| {{ui:Szybki kod procesora}} | Czy przeglądarka uruchamia szybszy kod WebAssembly. Bez niego używany jest wolniejszy wariant zapasowy |
| {{ui:Poziom}} | {{ui:Karta graficzna, wysoki}}, {{ui:Karta graficzna, podstawowy}} lub {{ui:Tylko procesor}}, z powodem podanym pod spodem |

## Poziom

Poziom określa, od czego zaczyna się [podgląd na żywo](topic:live-view) ({{ui:Dla tego komputera}}), ile rozproszonych elementów rysuje oraz ile ścian może pokazać [powierzchnia podziału](topic:modifiers#subdivision-surface) w widoku, tak aby laptop z wbudowanym układem graficznym albo bez karty graficznej pozostawał responsywny. Wbudowany lub telefoniczny układ graficzny albo 4 GB pamięci lub mniej nigdy nie dostają {{ui:Karta graficzna, wysoki}}.

:::note
Przeglądarki różnią się. Ten sam komputer może pokazać WebGPU w jednej przeglądarce, a „WebGL 2 only” w innej. W systemie Linux większość przeglądarek nie ma jeszcze WebGPU.
:::
