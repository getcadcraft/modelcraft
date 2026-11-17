---
title: Przegląd modelu w goglach VR
summary: Chodź po modelu w pełnej skali w goglach VR: skacz, obracaj się, mierz, przecinaj, umieszczaj problemy ze zdjęciem, oglądaj jako model na stole i spotykaj innych w sesji na żywo.
keywords: vr, rzeczywistość wirtualna, gogle, webxr, xr, immersja, quest, oculus, vive, index, pico, spacer, przejście, teleportacja, przegląd projektu, przegląd, mierz, przekrój, przetnij, problem, problemy, bcf, blat stołu, model w skali, obecność, awatary, na żywo, razem
from: fa2f591a
---

{{ui:Przegląd w VR}} stawia Cię wewnątrz modelu w goglach VR, w pełnej skali. Stoisz tam, gdzie jest kamera widoku, na podłodze pod nią, patrząc w tę samą stronę. Nic nie jest wysyłane: gogle pokazują to, co przeglądarka rysuje na tym komputerze (albo w przeglądarce samych gogli).

## Czego potrzebujesz

- Gogle, które przeglądarka potrafi obsłużyć (WebXR): wbudowana przeglądarka samodzielnych gogli albo Chrome lub Edge na PC z podłączonymi goglami.
- ModelCraft otwarty na bezpiecznej stronie (https), tak jak na tej stronie.

Gdy nie ma gogli, {{ui:Przegląd w VR}} jest wyszarzony i mówi, dlaczego.

## Start

1. Ustaw widok tam, gdzie chcesz zacząć: w pomieszczeniu albo na zewnątrz, patrząc na budynek.
2. Kliknij {{ui:Widoki}} w grupie {{ui:Kamera}}, a potem {{ui:Przegląd w VR}}.
3. Załóż gogle.

Menu jest na grzbiecie lewej dłoni. Wskaż je prawym kontrolerem i naciśnij spust, by wybrać przycisk. (Przy jednej ręce menu unosi się przed miejscem, w którym zaczynałeś.)

## Jak to wygląda

Gogle pokazują model w wyglądzie [widoku na żywo](topic:live-view): nadane ścianom wygląd i materiały, niebo i słońce z miejsca i daty modelu wraz z cieniem, lampy, rozrzucone rośliny i kamienie oraz światło odbite od ścian i podłóg (wyliczane na tym komputerze, gdy się rozglądasz, i podążające za Tobą, gdy się poruszasz). Jasność i transformacja widoku (ACES albo AgX) są takie jak w [Wyrenderuj obraz](topic:render). Ile model rysuje, zależy od tego, co ma przeglądarka gogli, tak jak na komputerze; okluzja otoczenia, odbicia i poświata zostają na komputerze.

## Poruszanie się

- **Skok:** w {{ui:Przesuń}} wskaż podłogę i naciśnij spust; lądujesz tam. Albo pchnij drążek do przodu, by celować, i puść, by skoczyć. Możesz lądować tylko na podłogach i gruncie (powierzchniach zwróconych w górę), nigdy na ścianie.
- **Obrót:** pchnij drążek w lewo lub w prawo: obracasz się o 30° za każdym razem.
- **Chodzenie:** w swoim obszarze ruchu po prostu chodź.

## Mierzenie

Wybierz {{ui:Zmierz}}, a potem naciśnij spust na dwóch punktach. Odległość pokazuje się między nimi w jednostkach modelu. Punkt blisko narożnika przyciąga się do narożnika.

## Przecinanie

Wybierz {{ui:Przekrój}} i naciśnij spust na powierzchni:

- na ścianie (albo czymkolwiek, co nie jest podłogą): wszystko między Tobą a tą powierzchnią zostaje odcięte, byś mógł zajrzeć do środka. Działa to najlepiej z zewnątrz albo przez pomieszczenie;
- na podłodze, z góry: rzut przekroju 1.2 m nad tą podłogą, tak że ściany pokazują swoją dolną część.

{{ui:Wyczyść}} usuwa przekrój i pomiary. Jeśli płaszczyzna przekroju przecina model w widoku w chwili startu, gogle startują z nią.

## Umieszczanie problemu

Wybierz {{ui:Problem}} i naciśnij spust tam, gdzie jest problem. Ponumerowana pinezka go oznacza, a ModelCraft zachowuje problem razem ze zdjęciem tego, co widziałeś, i miejsca, w którym stałeś. Gdy wyjdziesz z VR, problemy są na liście {{ui:Problemy}} po prawej:

- przycisk oka pokazuje problem z miejsca, w którym został umieszczony;
- {{ui:Zapisz jako BCF}} pobiera je wszystkie jako plik BCF, który otwierają programy do przeglądu BIM (wraz z kamerą i zdjęciem);
- są też zapisane w pliku `.modelcraft`.

Dodaj komentarz do problemu po wyjściu z VR, w programie BCF: dodawanie komentarza w goglach jeszcze nie zostało zbudowane.

## Zobacz jako model na stole

{{ui:Blat stołu}} zmniejsza model, by mieścił się na stole przed Tobą; obejdź go albo obróć drążkiem. {{ui:Pełna skala}} stawia Cię z powrotem tam, gdzie byłeś.

## Z innymi, na żywo

W [sesji na żywo](topic:work-live) każdy w VR widzi innych jako głowę i dwie dłonie w ich własnym kolorze, z imieniem, oraz kropkę, gdzie ktoś wskazuje. Zmiany wprowadzone przez kogokolwiek docierają do Twoich gogli w ciągu chwili. Osoby przy komputerze nie są jeszcze pokazywane w goglach.

## Wyjście

Wybierz {{ui:Wyjdź z VR}} (albo zdejmij gogle i zakończ tam). Widok na ekranie przesuwa się tam, gdzie była Twoja głowa.

:::note
Testowano wyłącznie na emulatorze gogli, jeszcze nie na prawdziwych goglach. Duży model może powodować zacinanie się gogli: najpierw ukryj to, czego nie potrzebujesz ([ukryj i izoluj](topic:hide-isolate)).
:::
