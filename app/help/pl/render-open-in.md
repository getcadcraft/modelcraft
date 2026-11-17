---
title: Otwórz scenę w innym programie
summary: Zapisz scenę jako plik USD lub glTF dla dowolnego programu, który je czyta, albo otwórz ją ze Studio w programie na tym komputerze.
keywords: otwórz w, usd, gltf, glb, eksport, program do renderowania, archviz, studio, usdview, wyślij, przekazanie, pakiet, folder unreal
from: 812329d5
---

Wybierz pozycję **Otwórz w** na liście Silnik w {{ui:Wyrenderuj obraz…}}, aby zabrać scenę do innego programu. Nic nie wraca do modelu.

## Plik dla dowolnego programu

- **Plik USD** zapisuje scenę jako `.usdc` (lub `.usdz`, gdy model zawiera obrazy): [ten sam plik co Zapisz jako USD](topic:usd), z materiałami, lampami i kamerami. Zachowuje instancjonowanie i dokładne wartości materiałów. Większość rendererów, silników gier i przeglądarek czyta USD.
- **Plik glTF (.glb)** zapisuje lżejszy plik glTF 2.0 z materiałami, teksturami i lampami; zobacz [Eksport modelu do innych programów](topic:export-model), aby poznać formaty, które zapisuje ModelCraft.

- **Folder projektu Unreal (.zip)** zapisuje folder, który tworzy [Wyślij scenę do silnika gry](topic:render-unreal), dla projektu na dowolnym komputerze.

Wszystkie trzy działają w przeglądarce i w Studio.

## W Studio: otwórz w programie

Studio wymienia programy znalezione na tym komputerze, które potrafią otworzyć scenę: usdview, jeśli jest w Twojej ścieżce wyszukiwania, oraz program komputera dla tego typu pliku. Wybierz jeden, wybierz USD lub glTF tam, gdzie czyta oba, i kliknij {{ui:Renderuj}}. Studio zapisuje pakiet w nowym folderze w Dokumentach (`CadCraft hand-off`; nic nie jest nadpisywane, każde wysłanie ma własny folder) i uruchamia na nim program, a potem mówi, gdzie są pliki.

| Program | Najlepiej czyta |
|---|---|
| usdview | USD |
| Program komputera | To, co komputer ma dla tego typu pliku |

Studio uruchamia tylko programy z tej stałej listy; nie uruchamia niczego, o co strona prosi po nazwie, i nigdy nie uruchamia programu na licencji GNU GPL (zobacz [Narysuj obraz innym programem](topic:render-other-program#programs-cadcraft-never-runs)). Każdy program, który czyta USD lub glTF, otworzy plik z sekcji **Plik dla dowolnego programu** powyżej.

:::note
Twinmotion, Enscape i inne programy do wizualizacji nie są na liście: CadCraft nie został z nimi sprawdzony i nie składa żadnych deklaracji na ich temat. Plik glTF lub USD stąd to droga wejścia.
:::
