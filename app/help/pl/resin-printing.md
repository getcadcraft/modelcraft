---
title: Przygotuj wydruk na drukarkę żywiczną
summary: Podziel na warstwy zawartość stołu etapu druku dla drukarki żywicznej, wydrąż i podeprzyj część, przejrzyj warstwy, zapisz plik drukarki i znajdź swój czas naświetlania testem naświetlania.
keywords: żywica, sugeruj pochylenie, przyssawka, siła odrywania, usztywnienia, druk żywiczny, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, wydrążenie, otwór wentylacyjny, tratwa, podpory, test naświetlania, drabinka naświetlania, kalibracja, warstwy, dodatek
from: 8cc12858
---

Dodatki żywiczne dzielą to, co leży na stole wydruku, na obrazy warstw dla ekranu twojej drukarki i zapisują plik, który drukarka odczyta. Są bezpłatne, bez blokad i wyłączone, dopóki ich nie włączysz.

:::note
Plik nie został jeszcze wczytany na prawdziwej drukarce. Pliki odczytały wyłącznie własne czytniki CadCraft, a podpory są nowe. Sprawdź warstwy i uruchom pierwszy wydruk ręcznie.
:::

## Co zrobisz

Podziel część na warstwy do druku żywicznego, sprawdź warstwy, zapisz plik i skopiuj go do drukarki.

## Kroki

1. Otwórz {{ui:Ustawienia}} › {{ui:Dodatki}} i włącz dodatek slicera żywicznego oraz dodatek dla formatu pliku twojej drukarki (Elegoo GOO, SL1, Chitubox lub Anycubic). Możesz też nacisnąć {{ui:Dodaj druk żywiczny}} na karcie etapu druku.
2. Umieść część na stole wydruku zgodnie z [Umieść elementy na stole wydruku](topic:print-stage), a następnie wybierz {{ui:Żywica}} obok **Drukowanie za pomocą**.
3. W sekcji **Ustawienia druku żywicznego** wybierz swoją **Drukarkę** i swoją **Żywicę**. Karta pokazuje rozmiar ekranu w pikselach. To rozmiary podane przez producenta, sprawdź swój; możesz je edytować w sekcji Własne.
4. Ustaw **Wysokość warstwy (mm)**, **Naświetlanie (s)** i **Naświetlanie dolne (s)**. Liczby dla każdej żywicy są tylko punktem wyjścia.
5. Zaznacz **Wydrąż z otworem wentylacyjnym**, jeśli chcesz część pustą, i ustaw **Ściankę (mm)** oraz **Szerokość otworu (mm)**.
6. Zaznacz **Podpory i tratwę** i wybierz **Gęstość podpór**: Lekka, Średnia lub Ciężka.
7. Wybierz **Format pliku**. Jeśli karta mówi, że żaden jeszcze nie jest dodany, naciśnij przycisk z napisem Dodaj i nazwą formatu.
8. Naciśnij {{ui:Podgląd warstw}} i przesuń suwak **Warstwa**. Pływające elementy są oznaczone pierścieniem. Linia pod nim podaje liczbę warstw, czas oraz żywicę w mL, gramach i koszt.
9. Naciśnij {{ui:Zapisz plik wydruku}}, sprawdź podsumowanie i naciśnij {{ui:Zapisz}}. Skopiuj plik do drukarki.

## Pochylenie, przyssawki, usztywnienia i wskaźnik odrywania

Te cztery to szacunki na podstawie kształtu części. Żaden z nich nie był testowany na prawdziwej drukarce, więc traktuj każdy jako wskazówkę i sprawdź warstwy.

1. Naciśnij {{ui:Sugeruj pochylenie}} pod **Pochylenie (stopnie)**. CadCraft sprawdza pochylenia od 0 do 60 stopni i wybiera to z najmniejszą największą warstwą, najmniejszą powierzchnią nawisającą i bez przyssawki. Ustawia **Pochylenie (stopnie)** i opisuje, co znalazł. Wagi oceny są nasze, a nie producenta drukarki.
2. Po {{ui:Podgląd warstw}} ostrzeżenie wskazuje wnęki otwarte tylko w stronę folii. Taka wnęka może utrzymywać podciśnienie, gdy warstwa się odrywa. Pochyl część lub dodaj otwór. Kieszenie węższe niż rozmiar komórki podany w ostrzeżeniu nie są wykrywane.
3. Gdy **Podpory i tratwa** są włączone, zaznacz **Usztywnij wysokie podpory**, aby dodać poprzeczne usztywnienia między wysokimi, cienkimi słupkami.
4. Linia pod podglądem podaje największą warstwę w cm². Pokazuje siłę tylko wtedy, gdy wpiszesz **Zmierzone naprężenie odrywania** w sekcji **Dolne warstwy, uniesienie i prędkości**. Bez własnej zmierzonej wartości pokazuje samą powierzchnię.

## Znajdź swoje naświetlanie

1. Włącz dodatek testu naświetlania w {{ui:Ustawienia}} › {{ui:Dodatki}}.
2. Naciśnij {{ui:Połóż część testową na stole}}.
3. Naciśnij {{ui:Zapisz drabinkę naświetlania}}. Otrzymasz jeden plik dla każdego naświetlania, w archiwum zip.
4. Wydrukuj każdy plik tą samą żywicą i zachowaj to naświetlanie, przy którym widać najostrzejsze cienkie słupki i otwarte otwory.

## Uwagi

- Cięcie na warstwy działa w tle, więc strona pozostaje używalna przy dużej płycie.
- Elementy, które nie są zamkniętymi bryłami, są pomijane, a karta to podaje.
- Jeśli drukarka odrzuca plik, karta formatu ma opcje dla tego, co format pozostawia otwarte. Zmień jedną, zapisz ponownie i daj nam znać, która zadziałała.
- Wersje Anycubic 517 i 518 nie są zapisywane.
