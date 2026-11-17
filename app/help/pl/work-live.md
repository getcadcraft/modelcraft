---
title: Modelowanie razem z Live TeamWork
summary: Co zmienia się w ModelCraft podczas sesji Live TeamWork z CadCraft Studio: grupy i komponenty wszystkich w jednym modelu, kto może jednocześnie przekształcać co, własne cofnięcie oraz dołączanie z przeglądarki w tej samej sieci.
keywords: live, live teamwork, studio live, razem, współpraca, sesja, udostępnij na żywo, dołącz, grupa, komponent, push pull, kursor, wskaźnik, widzenie się nawzajem, nazwy, kolor, zaznaczenie, cofnięcie, gospodarz
from: d8d2f282
---

## Czego się dowiesz

Co dzieje się z modelem, gdy kilka osób pracuje nad nim naraz. CadCraft Studio rozpoczyna i dołącza do sesji Live TeamWork (Udostępnij, Dołącz); ta strona dotyczy samego modelu.

## Praca we własnej grupie

Wszyscy edytują ten sam model, a Twoje zmiany widać od razu. To, jak zmiany się łączą, zależy od tego, co zmieniasz:

- **Przesuwanie, nazywanie, kolorowanie lub ukrywanie umieszczonych grup i komponentów** łączy się: dwie osoby przesuwające dwie grupy zachowują obie swoje przesunięcia.
- **Geometria wewnątrz jednej grupy** (jej krawędzie i ściany: rysowanie, push/pull, wymazywanie) jest jednym elementem. Gdy dwie osoby przekształcają tę samą grupę w tym samym momencie, druga zmiana zostaje cofnięta, a pasek stanu o tym mówi. Różne grupy nie przeszkadzają sobie.
- **Luźna geometria** (nienależąca do żadnej grupy) to własna grupa modelu: tylko jedna osoba może ją przekształcać naraz.

Uzgodnijcie więc, kto pracuje w której grupie, albo zróbcie grupę dla części każdej osoby, zanim zaczniecie. Prowadnice, wymiary i płaszczyzny przekroju łączą się pojedynczo; {{ui:Sceny}}, etykiety, kondygnacje i osie rysunku trafiają do tego, kto zmienił je jako ostatni.

## Widzicie się nawzajem

Każdy w sesji ma własny kolor. Widzisz wskaźnik każdej osoby jako strzałkę w jej kolorze z imieniem obok, na głębokości widoku, na który patrzysz, oraz przerywaną ramkę w jej kolorze wokół tego, co zaznaczyła.

Wskaźniki, imiona i zaznaczenia istnieją tylko na czas sesji: nigdy nie są zapisywane w pliku i nie trafiają do niczyjego cofnięcia. Przesuwają się płynnie do miejsca, w którym jest każda osoba, więc są gładkie nawet przy wolnym połączeniu.

## Cofnięcie cofa Twoją pracę

{{key:Mod+Z}} cofa Twój ostatni krok i zostawia pracę innych w spokoju. Gdy ktoś zmienił tę samą rzecz później, nic nie zostaje cofnięte, a pasek stanu mówi, kto to zrobił.

## Dołączanie z przeglądarki

Członek zespołu bez Studio może zeskanować telefonem, tabletem lub komputerem w tej samej sieci kod z obrazu pokazanego przez gospodarza. ModelCraft otwiera się w przeglądarce i wypełnia się modelem gospodarza, gdy gospodarz Cię wpuści. Link zaproszenia pozwala dołączyć komuś z innej sieci: gospodarz potrzebuje miejsca w planie Team Cloud dla aplikacji, wszyscy inni dołączają za darmo, a link działa tylko wtedy, gdy sesja gospodarza jest otwarta.

## Gdy sesja się kończy

Tylko gospodarz zapisuje model. Wszyscy inni zachowują niezapisaną kopię: zapisz ją, jeśli chcesz ją zachować.
