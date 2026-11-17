---
title: Dodaj silnik renderowania przez dodatek
summary: Co dodatek może dodać do listy Silnik w oknie Renderuj, uprawnienie potrzebne do uruchomienia programu oraz to, co Studio sprawdza i o co pyta.
keywords: dodatek, addon, silnik, silnik renderowania, deweloper, engine.run, uprawnienie, program, skrypt, podpisany, studio, api
from: cd7a39ba
---

Dodatek (Ustawienia › Dodatki) może dodać silnik do listy Silnik w {{ui:Wyrenderuj obraz…}}. Pełny tekst dla autorów dodatków to rozdział 16 specyfikacji dodatku; w skrócie:

- Dodatek rejestruje silnik z identyfikatorem zaczynającym się od jego własnego, nazwą, opcjonalnymi ustawieniami i **albo** programem do uruchomienia, **albo** funkcją w JavaScript, która rysuje obraz.
- Silnik uruchamiający program wymaga uprawnienia **`engine.run`**, wyświetlanego przed instalacją i w Ustawieniach. Działa tylko w Studio; w przeglądarce pokazuje się jako plik do zapisania.
- Dodatek podaje program (sama nazwa pliku, nigdy powłoka), skrypt, który jest **w podpisanym dodatku**, oraz argumenty złożone z symboli zastępczych i zwykłych słów. Studio znajduje program albo pyta raz, gdzie on jest.
- Przy pierwszym uruchomieniu programu przez dodatek **Studio pyta w swoim własnym oknie**: który dodatek, który program i że skrypt może zrobić wszystko, co potrafi program. Zezwalaj tylko dodatkom, którym ufasz. Twoja odpowiedź jest zapamiętana dla tego dodatku i programu.
- Pakiet (scena jako USD i plik ustawień, z plikiem glTF, gdy dodatek o niego prosi) oraz skrypt dodatku trafiają do nowego, tymczasowego folderu, program uruchamia się tam, a obraz wraca oznaczony nazwą silnika dodatku.

:::note
Dodatki mogą dodawać silniki renderowania tylko z API dodatków 1.4. Przykład dla otwartego renderera wiersza poleceń znajduje się we własnym repozytorium; nie został jeszcze uruchomiony w tym rendererze.
:::
