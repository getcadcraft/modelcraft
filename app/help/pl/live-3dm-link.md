---
title: Utrzymywanie modelu .3dm na żywo
summary: Zmieniaj model w programie, w którym powstał, i zobacz zmianę tutaj, z Rhino 8 lub z definicji Grasshoppera, bez ponownego zapisywania i importowania.
keywords: rhino, grasshopper, połączenie na żywo, łącze na żywo, 3dm, nurbs, parametryczny, połączenie, synchronizacja, skrypt, model referencyjny, wysyłanie
from: 331b0a7e
---

Modeluj tam, gdzie modelujesz, a wynik wykorzystaj tutaj: do renderowania, oświetlania lub układania sceny wokół niego. Każda zmiana w drugim programie aktualizuje jedną grupę w ModelCraft.

:::note
Połączenie wymaga **CadCraft Studio** na tym samym komputerze. Karta przeglądarki nie może nawiązać połączenia. Nic nie idzie przez internet: skrypt komunikuje się ze Studio pod adresem tego komputera, z użyciem tokenu.
:::

:::warning
To połączenie zostało przetestowane z zapisem plików przez skrypt i z zastępnikiem drugiego programu, a nie jeszcze wewnątrz samego Rhino lub Grasshoppera. Jeśli tam coś się nie uda, napisz nam, co zgłosił program.
:::

## Konfiguracja

1. W Studio otwórz ModelCraft. W {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Asystenci}} zaznacz **Zezwalaj asystentom AI i skryptom na używanie ModelCraft**, a potem **Edycja**.
2. W Studio wybierz {{ui:Połącz asystenta}}. Pokaże się adres i token, który wkleisz poniżej.
3. Pobierz skrypt: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Z Rhino

1. Uruchom `cadcraft_link.py` w edytorze skryptów Rhino (Python 3 w Rhino 8).
2. Za pierwszym razem wklej adres i token. Są zapisane w pliku `.cadcraft-link.json` w folderze domowym, nigdy w modelu. Studio tworzy nowy token przy każdym uruchomieniu, więc wtedy skrypt zapyta ponownie.

Cały model trafia jako jedna grupa o nazwie od dokumentu, na przykład „chair (linked)”. Potem każda zmiana trafia do ModelCraft, gdy na chwilę przerwiesz pracę, i wysyłane są tylko zmienione obiekty. Aby zatrzymać połączenie, uruchom skrypt ponownie.

## Z Grasshoppera

Najpierw uruchom skrypt raz w Rhino, aby adres i token zostały zapisane.

1. Dodaj komponent Script (Python 3) i wklej w całości `cadcraft_link.py`.
2. Ustaw dla niego wejścia: `G` (geometria, z dostępem do listy), `N` (nazwa, opcjonalnie), `On` (przełącznik logiczny) i `Target` (opcjonalnie: `model` lub `part`, gdy otwarte są obie aplikacje).
3. Ustaw `On` na `true`.

Każde przeliczenie wysyła `G` i zastępuje to, co komponent wysłał ostatnio, więc przeciągnięcie suwaka aktualizuje grupę tutaj. Jego wyjście `a` mówi, co się stało. Każdy komponent ma własną grupę.

## Co można zrobić z grupą

- **Przesuń ją, oznacz i buduj wokół niej.** Miejsce grupy i jej znacznik zostają po każdej aktualizacji, podobnie jak wszystko obok.
- **Nie edytuj jej wewnątrz.** Każda aktualizacja zastępuje to, co jest w grupie. Te obiekty należą do drugiego programu.
- **Cofanie.** Aktualizacje wykonane w odstępie dwóch sekund mają wspólny krok cofnięcia, więc {{key:Mod+Z}} cofa cały przeciąg. Kolejna aktualizacja przywraca model zgodny z drugim programem.
- **Zapisywanie.** Zapisany plik zachowuje połączenie. Po ponownym otwarciu uruchom skrypt ponownie, a ta sama grupa zostanie zaktualizowana.

## Co trafia do modelu

Siatki, polysurfaces, powierzchnie i wyciągnięcia jako siatka widoczna na ekranie, SubD jako jego siatka, krzywe jako krawędzie, bloki jako osobne obiekty w miejscu, w którym się znajdują (nie jako komponenty), warstwy jako znaczniki, a także kolory i jednostki. Jak te elementy wyglądają tutaj, opisuje [Importowanie modelu .3dm](topic:import-3dm-files).

Pomijane są, z liczbą podaną w drugim programie: punkty, tekst, wymiary, światła i podobne elementy.

**Tylko w jedną stronę.** Zmiany wykonane tutaj nie wracają do drugiego programu.

## Gdy coś pójdzie nie tak

- **„Żadne okno ModelCraft ani PartCraft na to nie zezwala”:** wykonaj krok 1 konfiguracji.
- **„Studio odrzuciło token”:** Studio zostało uruchomione ponownie. Skopiuj nowy token i uruchom skrypt ponownie. W przypadku Grasshoppera najpierw uruchom go w Rhino.
- **„Nie można połączyć się z CadCraft Studio”:** Studio nie działa albo adres się zmienił.
