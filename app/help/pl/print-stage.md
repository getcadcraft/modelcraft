---
title: Ustaw rzeczy na stole drukarki i wyślij je do drukarki
summary: Dodaj elementy z Biblioteki lub własny model na stół drukarki, ułóż je, przejrzyj pocięte warstwy i wyślij wydruk przez USB lub sieć albo zapisz G-code, bez wcześniejszego eksportu pliku STL.
keywords: etap druku, druk 3D, drukarka, stół, wyślij do drukarki 3D, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteka, ułóż, dopasuj wszystko, podgląd warstw, wypełnienie, podpory, filament, pla, petg, dodatek, dodatek Druk 3D
from: abcf5d7e
---

{{ui:Etap druku}} układa rzeczy na stole drukarki, tnie je na warstwy i wysyła do drukarki. Nie eksportujesz najpierw pliku. Należy do dodatku Druk 3D, który jest domyślnie włączony.

:::note
Nic jeszcze nie zostało wydrukowane na prawdziwej drukarce za pomocą tego. Slicer jest nowy: obserwuj pierwsze warstwy pierwszego wydruku i użyj podglądu warstw przed wysłaniem.
:::

## Co zrobisz

Połóż model na stole, sprawdź, czy się mieści, przejrzyj pocięte warstwy i wyślij go do drukarki albo zapisz G-code.

## Kroki

1. Kliknij {{ui:Etap druku}} na pasku narzędzi. Nad widokiem otwiera się karta, a przerywany kontur pokazuje Twój stół.
2. W sekcji **Dodaj z Biblioteki** wpisz nazwę w polu wyszukiwania, naciśnij {{ui:Szukaj}} i naciśnij {{ui:Dodaj}} przy wyniku. Element ląduje na stole w pełnym rozmiarze albo pomniejszony, by się zmieścić. Wszystko, co już narysowałeś lub zaimportowałeś i co widzisz w widoku, też jest na stole.
3. W sekcji **Na stole** sprawdź rozmiar każdego elementu. Element oznaczony **Poza stołem** trzeba przesunąć. Przesuwaj, obracaj i skaluj rzeczy w widoku zwykłymi narzędziami.
4. Naciśnij {{ui:Ułóż na stole}}, aby rozłożyć elementy, lub {{ui:Dopasuj wszystko do stołu}}, aby je pomniejszyć, aż się zmieszczą.
5. W sekcji **Twoja drukarka** wybierz rozmiar **Stołu** albo jeden z profili drukarki.
6. W sekcji **Ustawienia wydruku** wybierz **Materiał**, **Jakość** i **Wypełnienie %**, a jeśli kształt tego wymaga, zaznacz **Dodaj podpory pod nawisami**.
7. Naciśnij {{ui:Podgląd warstw}} i przesuń suwak **Warstwa**, aby przejrzeć pocięte warstwy. Jeśli później zmienisz etap lub ustawienia, naciśnij ponownie {{ui:Podgląd warstw}}.
8. W sekcji **Połączenie** wybierz {{ui:Kabel USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} lub {{ui:PrusaLink}}. Dla USB naciśnij {{ui:Połącz}}. Dla drukarki sieciowej wpisz jej **Adres** (oraz **Klucz API**, jeśli o niego poprosi), a następnie naciśnij {{ui:Przetestuj połączenie}}.
9. Naciśnij {{ui:Wyślij do drukarki 3D}}. Karta pyta, czy stół jest wolny i czy załadowany jest właściwy materiał, i pokazuje czas, materiał oraz temperatury. Potwierdź, aby wysłać.

Pojawi się komunikat, że drukarka się uruchamia. {{ui:Zatrzymaj wydruk}} wyłącza grzałki, wentylator i silniki. Jeśli chcesz tylko plik, naciśnij {{ui:Zapisz zamiast tego G-code}}.

## Uwagi

- USB wymaga Chrome lub Edge na komputerze, a strona musi pozostać otwarta do końca wydruku. Zamknięcie jej zatrzymuje strumień.
- Drukarka sieciowa musi zezwalać na tę stronę (w Moonraker dodaj ją do `cors_domains`; w OctoPrint włącz CORS i skopiuj klucz API). Przeglądarka może zapytać o dostęp do urządzeń w Twojej sieci.
- Nic nie łączy się ani nie wysyła bez Twojego kliknięcia.
- Lista slicerów znajduje się w sekcji **Slicer**. {{ui:CadCraft basic (w zestawie, najszybszy)}} jest wbudowany. Kiri:Moto, PrusaSlicer, OrcaSlicer i Bambu Lab P2S to osobne dodatki, które włączasz z karty lub w {{ui:Ustawienia}} › {{ui:Dodatki}}. PrusaSlicer i OrcaSlicer używają Twojej własnej kopii i działają z CadCraft Studio na komputerze.
- Części, które nie są zamkniętymi bryłami, są pomijane, a karta mówi, jaka część kształtu to jest.
- Dla drukarek żywicznych zobacz [Cięcie dla drukarki żywicznej](topic:resin-printing). Aby najpierw sprawdzić lub naprawić model, zobacz [Podpory, grubość ścianek, drążenie i naprawa](topic:print-tools).
