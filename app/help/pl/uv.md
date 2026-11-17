---
title: Rozłóż współrzędne UV siatki
summary: Oznacz szwy, rozwiń, zrzutuj i upakuj współrzędne tekstury siatki w obszarze roboczym UV, a sprawdź je szachownicą i kolorami rozciągnięcia.
keywords: uv, uvs, rozwijanie, szwy, szew, tekstura, współrzędne tekstury, atlas, upakowanie, wyspa, wyspy, szachownica, rozciągnięcie, zniekształcenie, rzutowanie pudełkowe, rzutowanie walcowe, rzutowanie kuliste, konforemne, angle based, lscm, abf
from: 00028f20
---

Tekstura jest płaskim obrazem; siatka nie jest płaska. Jej **UV** mówią, gdzie każdy narożnik każdej ściany leży na obrazie. Obszar roboczy UV je tworzy: przecinasz siatkę wzdłuż **szwów**, rozkładasz kawałki płasko (**rozwijanie**) i wpasowujesz je w kwadrat (**upakowanie**).

## Otwieranie

Zaznacz siatkę i wybierz {{ui:UV}} na liście {{ui:Obszar roboczy}}. Grupa albo komponent najpierw staje się siatką, tak jak w obszarze {{ui:Siatka}}. Widok 3D przesuwa się do lewej połowy; **edytor UV** po prawej pokazuje ściany siatki ułożone na kwadracie tekstury. Zaznaczanie działa jak w obszarze {{ui:Siatka}}, a to, co zaznaczysz w jednym widoku, jest zaznaczone w drugim.

## Oznaczanie szwów

Szwy to miejsca, w których siatkę można przeciąć; w obu widokach są czerwone.

- Zaznacz krawędzie ({{ui:Krawędź}} albo {{key:2}}) i naciśnij {{ui:Zaznacz szew}} ({{key:Ctrl+E}}). {{ui:Usuń szew}} ({{key:Ctrl+Shift+E}}) je zdejmuje.
- {{ui:Szwy na ostrych}} oznacza każdą ostrą krawędź i każdą krawędź, w której ściany spotykają się pod kątem większym niż 60°: pudełko rozpada się na sześć boków.
- {{ui:Szwy z UV}} oznacza szwy tam, gdzie UV już się rozrywają, na przykład po rzutowaniu.

Zamknięty kawałek potrzebuje szwów, by leżeć płasko: kula potrzebuje co najmniej jednego cięcia, a rura cięcia wzdłuż swojej długości.

## Rozwijanie

Zaznacz ściany do rozłożenia (albo nic, by rozłożyć całą siatkę) i naciśnij {{ui:Rozwiń}} ({{key:U}}). Każdy kawałek między szwami zostaje rozłożony płasko, z zachowaniem kątów tak wiernie, jak to możliwe (spłaszczenie oparte na kątach), a potem kawałki są upakowane w kwadracie. {{ui:Konforemnie}} rozwija metodą konforemnych odwzorowań najmniejszych kwadratów: szybciej, ale nieco mniej wiernie na mocno zakrzywionych kawałkach. Kształt, który można zrobić z płaskiej blachy, jak bok walca przecięty raz, rozwija się bez żadnego rozciągnięcia.

## Rzutowanie

Dla prostych kształtów często wystarcza rzutowanie:

| Rzutowanie | Co robi |
| --- | --- |
| {{ui:Pudełko}} | Każda ściana na tę stronę pudełka, do której jest najbardziej zwrócona |
| {{ui:Walec}} | Wokół niebieskiej osi: w poziomie kąt dookoła, w pionie wysokość |
| {{ui:Kula}} | Od środka: w poziomie kąt dookoła, w pionie szerokość geograficzna |
| {{ui:Z widoku}} | Tak jak ściany widać teraz w widoku 3D |

Ściana na złączeniu walca albo kuli zostaje w jednym kawałku, więc jej UV mogą wyjść nieco poza prawą krawędź kwadratu; tekstura tam się powtarza.

## Układanie

- {{ui:Upakuj}} wpasowuje kawałki (wyspy) w kwadrat przy jednym rozmiarze texela, każdy obrócony tak, by zajmował jak najmniej miejsca. Panel ustawia odstęp między nimi.
- {{ui:Obróć o 90°}} i {{ui:Odbij}} obracają lub odbijają UV zaznaczonych ścian.
- W edytorze UV przeciągnij zaznaczoną ścianę, by przesunąć UV zaznaczenia, albo wskaż edytor i naciśnij {{key:R}} lub {{key:S}}, a potem przesuń, by je obrócić lub skalować (kliknięcie zachowuje zmianę, {{key:Esc}} anuluje). {{key:G}} przesuwa bez przeciągania. Dwukrotne kliknięcie ściany (albo {{key:L}}) zaznacza całą jej wyspę. Kółko powiększa; przeciągnij środkowym lub prawym przyciskiem, by przesunąć widok; {{key:F}} ponownie dopasowuje kwadrat.

Każda zmiana to jeden krok cofnięcia.

## Sprawdzanie

- {{ui:Szachownica}} pokazuje oznaczoną szachownicę na siatce w jej UV: równe, kwadratowe pola oznaczają, że tekstura leży równomiernie; etykiety pokazują, w którą stronę biegnie.
- {{ui:Rozciągnięcie}} koloruje każdą ścianę według tego, jak bardzo UV ją rozciągają: niebieski oznacza brak, przez zielony do czerwonego, czyli dużo. Panel wybiera, czy mierzy się **zgięcie kątów**, czy **zmianę rozmiaru**, i pokazuje średnią.

Zobacz też [Edytuj siatkę](topic:mesh-edit), [Siatki](topic:meshes) i [Modyfikatory na siatce](topic:modifiers).
