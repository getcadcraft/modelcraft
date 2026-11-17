---
title: Krojenie pod drukarkę żywiczną
summary: Pokrój stół wydruku etapu druku pod drukarkę żywiczną, wydrąż i podeprzyj część, przejrzyj warstwy, zapisz plik drukarki i znajdź naświetlenie testem naświetlenia.
keywords: żywica, druk żywiczny, sla, msla, dlp, krojenie, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, wydrążenie, otwór wentylacyjny, tratwa, podpory, test naświetlenia, drabinka naświetlenia, kalibracja, warstwy, dodatek
from: 83c394e1
---

Dodatki do żywicy kroją to, co leży na stole wydruku, na obrazy warstw dla ekranu drukarki i zapisują plik, który odczyta drukarka. Są darmowe, bez zablokowanych funkcji i wyłączone, dopóki ich nie włączysz.

:::note
Żaden plik nie został jeszcze wczytany na prawdziwej drukarce. Pliki były odczytywane wyłącznie przez własne czytniki CadCraft, a podpory są nowe. Sprawdź warstwy i uruchom pierwszy wydruk ręcznie.
:::

## Co zrobisz

Pokroisz część pod żywicę, sprawdzisz warstwy, zapiszesz plik i skopiujesz go do drukarki.

## Kroki

1. Otwórz {{ui:Ustawienia}} › {{ui:Dodatki}} i włącz dodatek krojenia pod żywicę oraz dodatek dla formatu pliku drukarki (Elegoo GOO, SL1, Chitubox lub Anycubic). Można też nacisnąć {{ui:Dodaj druk żywiczny}} na karcie etapu druku.
2. Umieść część na stole wydruku, jak w [Umieszczanie elementów na stole wydruku](topic:print-stage), a potem wybierz {{ui:Żywica}} obok **Drukowanie za pomocą**.
3. W sekcji **Ustawienia wydruku żywicą** wybierz **Drukarkę** i **Żywicę**. Karta pokazuje rozmiar ekranu w pikselach. To opublikowane przez producenta rozmiary, więc sprawdź je dla swojej drukarki; można je edytować w sekcji Własne.
4. Ustaw **Wysokość warstwy (mm)**, **Naświetlenie (s)** i **Naświetlenie dolnych warstw (s)**. Wartości dla każdej żywicy są tylko punktem wyjścia.
5. Zaznacz **Wydrąż, z otworem wentylacyjnym**, jeśli chcesz część pustą, i ustaw **Ścianę (mm)** oraz **Szerokość otworu (mm)**.
6. Zaznacz **Podpory i tratwę**, a potem wybierz **Gęstość podpór**: Lekka, Średnia lub Ciężka.
7. Wybierz **Format pliku**. Jeśli karta mówi, że żaden format nie jest jeszcze dodany, naciśnij przycisk z napisem Dodaj i nazwą formatu.
8. Naciśnij {{ui:Podgląd warstw}} i przesuń suwak **Warstwa**. Unoszące się elementy są oznaczone pierścieniem. Wiersz pod nim podaje liczbę warstw, czas oraz żywicę w mL, gramach i koszt.
9. Naciśnij {{ui:Zapisz plik wydruku}}, sprawdź podsumowanie i naciśnij {{ui:Zapisz}}. Skopiuj plik do drukarki.

## Znajdź swoje naświetlenie

1. Włącz dodatek testu naświetlenia w {{ui:Ustawienia}} › {{ui:Dodatki}}.
2. Naciśnij {{ui:Umieść część testową na stole}}.
3. Naciśnij {{ui:Zapisz drabinkę naświetlenia}}. Powstaje jeden plik dla każdego naświetlenia, w archiwum zip.
4. Wydrukuj każdy plik tą samą żywicą i wybierz naświetlenie, przy którym cienkie słupki i otwarte otwory są najostrzejsze.

## Uwagi

- Krojenie działa w tle, więc strona pozostaje używalna przy dużym stole.
- Elementy, które nie są zamkniętymi bryłami, są pomijane, a karta o tym informuje.
- Jeśli drukarka odrzuca plik, karta formatu ma opcje dla tego, co format pozostawia otwarte. Zmień jedną, zapisz ponownie i zgłoś, która zadziałała.
- Wersje Anycubic 517 i 518 nie są zapisywane.
