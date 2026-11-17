---
title: Narysuj obraz innym programem
summary: Nasz własny path tracer rysuje obraz Renderuj; inny program może go narysować tylko przez dodatek silnika renderowania w CadCraft Studio. Co jest przenoszone i dlaczego niektórych programów nigdy się nie proponuje.
keywords: renderowanie, silnik, zewnętrzny program, silnik z dodatku, studio, tło, kolejka, usd, gltf, narysowany przez, Blender, GPL
from: 150f94f1
---

Obraz w {{ui:Wyrenderuj obraz…}} rysują **nasze własne silniki**: Szybki i Śledzenie ścieżek, w przeglądarce i w CadCraft Studio. Inny program może go narysować tylko wtedy, gdy przyniesie go **dodatek silnika renderowania**: zobacz [Dodaj silnik renderowania przez dodatek](topic:render-engine-addons). Aby zabrać scenę do innego programu i dalej pracować w nim, użyj [Otwórz scenę w innym programie](topic:render-open-in) lub [Wyślij scenę do silnika gry](topic:render-unreal).

## Narysuj obraz silnikiem dodatku

1. Włącz dodatek w Ustawienia › Dodatki. Jego silnik pojawi się na liście Silnik w {{ui:Wyrenderuj obraz…}}.
2. Wybierz go. Jego własne ustawienia pokażą się pod listą Silnik.
3. Kliknij {{ui:Renderuj}}. W Studio, przy pierwszym uruchomieniu programu przez dodatek, Studio pyta w swoim własnym oknie. Postęp pokazuje się podczas rysowania; {{ui:Zatrzymaj}} go kończy. Obraz pojawia się oznaczony silnikiem, który go narysował.

Silnik napisany w JavaScript działa też w przeglądarce. Silnik uruchamiający program na tym komputerze działa tylko w Studio; w przeglądarce pokazuje się jako plik do zapisania.

## Co jest przenoszone

Silnik dostaje **pakiet**: model jako plik USD (i plik glTF, gdy o niego poprosi) oraz plik ustawień z dokładnymi wartościami materiałów, słońcem i niebem, każdą włączoną lampą z jej mocą i profilem światła, kamerą i ekspozycją. Każdy program oświetla, dostraja tony i próbkuje po swojemu, więc obrazy są podobne w kadrze, słońcu, lampach i ekspozycji, ale nie piksel w piksel.

## Programy, których CadCraft nigdy nie uruchamia

CadCraft nigdy nie uruchamia programu na licencji GNU GPL i nigdy nie wymienia go jako silnika ani celu pozycji Otwórz w. Blender jest jednym z nich, więc nie ma go na liście Silnik. Plik USD lub glTF zapisany z {{ui:Wyrenderuj obraz…}} nadal otworzy się w nim, tak jak w każdym programie, który czyta te pliki.

:::note
Kamery panoramiczne i stereo oraz obraz nieba (zamiast tego używane są kolory nieba) nie są przenoszone do innego programu. Nic zrobionego w innym programie nie wraca do modelu.
:::
