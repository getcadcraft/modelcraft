---
title: Wybierz program, który narysuje obraz
summary: Wybór Silnika w oknie Renderuj: nasze dwa silniki, inne programy w CadCraft Studio i to, co zamiast tego robi przeglądarka.
keywords: renderowanie, silnik, renderer, silnik renderowania, wtyczka, plugin, studio, zewnętrzny program, narysowany przez, kolejka, silnik z dodatku
from: be4b056a
---

{{ui:Wyrenderuj obraz…}} ma wybór **Silnik** nad Trybem. Nasze dwa silniki są zawsze dostępne i działają wszędzie; dodatki mogą dodać kolejne, a w CadCraft Studio lista zawiera też programy, które przejmują scenę.

| Silnik | Co robi | Gdzie |
|---|---|---|
| Wbudowany: Szybki | Szybki obraz statyczny: światło dzienne, miękkie cienie, wygląd szkła i metalu, w sekundy | Przeglądarka i Studio |
| Wbudowany: Śledzenie ścieżek | Światło odbijające się między powierzchniami, na karcie graficznej lub procesorze, kolejka renderowania i inne komputery w Twojej sieci | Przeglądarka i Studio |
| Silnik dodatku | Rysuje obraz i oddaje go z powrotem: zobacz [Narysuj obraz innym programem](topic:render-other-program) | Przeglądarka (silnik napisany w JavaScript) albo Studio (silnik uruchamiający program) |
| Program, który przejmuje scenę | Studio umieszcza scenę w swoim folderze i utrzymuje ją w zgodzie | Studio |
| Otwórz w … | Zapisuje scenę i otwiera ją w programie; nic nie wraca: zobacz [Otwórz scenę w innym programie](topic:render-open-in) | Przeglądarka zapisuje plik |

## Jak działa wybór

- Wybór Szybki lub Śledzenie ścieżek zmienia też Tryb, i odwrotnie. Nic innego w oknie się nie zmienia dla osób, które nigdy nie używają innego silnika.
- Silnik, który nie jest dostępny, zostaje na liście z powodem („nie znaleziono”, „wymaga nowszej wersji”); nie możesz go wybrać. W przeglądarce silnik działający tylko w Studio pokazuje „zapisuje plik”: {{ui:Wyrenderuj obraz…}} zapisuje wtedy scenę i jej ustawienia do pliku, który zabierasz do tego programu.
- Wybór jest zapisywany z ustawieniami renderowania pliku, a silnik wybrany ostatnio jest silnikiem startowym dla plików, które nie mają własnego wyboru.
- Obraz z innego programu mówi, który program go narysował i jego wersję, w oknie dialogowym i w kolejce renderowania. Obietnice ze strony [Renderuj](topic:render) dotyczą tylko **naszych** silników: inny program oświetla, dostraja tony i próbkuje po swojemu, więc dwa obrazy tej samej sceny są podobne w kadrze, słońcu, lampach i ekspozycji, ale nie piksel w piksel.

## Co dostaje każdy silnik

Scena trafia do innego programu jako **pakiet**: model jako plik USD (ten sam plik, który zapisuje [Zapisz jako USD](topic:usd)) oraz plik ustawień, który zawiera to, czemu importer USD nie może ufać: dokładne wartości materiałów, lampy, które są włączone, z ich mocą i profilami światła, słońce, niebo, ekspozycję oraz kamerę tak, jak rysowałoby ją okno dialogowe. Nic nie jest nigdzie wysyłane.

## Kolejka renderowania

Obraz lub animacja dla innego programu może czekać w [kolejce renderowania](topic:render#the-render-queue) tak jak nasze; jej zadanie pamięta, dla którego silnika jest. Animacja trafia do programu jednym przebiegiem.
