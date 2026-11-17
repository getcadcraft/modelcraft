---
title: Zmiękczanie i wygładzanie krawędzi
summary: Ukryj krawędzie między ścianami, które stykają się pod płytkim kątem, tak aby zakrzywione kształty wyglądały jak jedna gładka powierzchnia — w ModelCraft i w eksportowanych plikach.
keywords: zmiękcz, wygładź, miękkie krawędzie, gładkie cieniowanie, ukryj krawędzie, facety, zakrzywiony, normalne, utwardź, kąt
from: 52d32453
---

Zakrzywiony kształt w ModelCraft składa się z płaskich ścian. **Miękkie** krawędzie między tymi ścianami nie są rysowane, a łączone przez nie ściany są cieniowane jako jedna gładka powierzchnia, dzięki czemu walec o 24 bokach wygląda na okrągły.

Gdy wyciągasz okrąg za pomocą {{ui:Wypychanie/ciągnięcie}}, jego boki są zmiękczane za ciebie. Dla innych kształtów zmiękczaj według kąta.

## Zmiękczanie według kąta

1. Zaznacz to, co chcesz zmiękczyć: ściany i krawędzie albo grupę lub komponent (wszystkie jego krawędzie).
2. W {{ui:Informacje o obiekcie}} wpisz kąt w polu {{ui:Wygładź do}}, na przykład `20`, i kliknij {{ui:Wygładź}}.

Każda krawędź w zaznaczeniu, której dwie ściany skręcają o ten kąt lub mniej, staje się miękka; krawędzie o ostrzejszym skręcie stają się twarde. Boki graniastosłupa o 12 bokach skręcają o 30°, a jego obrzeża o 90°, więc `31` zmiękcza tylko boki.

{{ui:Utwardź wszystkie}} ponownie czyni każdą krawędź w zaznaczeniu twardą. Każde użycie to jeden krok cofania.

## Warto wiedzieć

- Zmiękczane są tylko krawędzie między dokładnie dwiema ścianami. Luźne krawędzie pozostają bez zmian.
- Gładkie cieniowanie działa tylko na miękkich krawędziach: ściana bez miękkiej krawędzi jest cieniowana płasko.
- Miękkie krawędzie są zachowywane w pliku ModelCraft. Eksporty **glTF (.glb)** i **OBJ** zawierają gładkie cieniowanie (normalną dla każdego narożnika), więc inne programy pokażą tę samą powierzchnię. Eksport do Collada i STL zapisuje płaskie ściany.
- Miękkie krawędzie są ukryte w każdym stylu ścian, także w {{ui:Rentgen}} i {{ui:Szkielet}}. Aby je zobaczyć, zaznacz kształt i kliknij {{ui:Utwardź wszystkie}}; cofnięcie przywraca zmiękczenie.
