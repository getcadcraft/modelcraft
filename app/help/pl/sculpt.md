---
title: Rzeźbienie siatki
summary: Kształtuj siatkę jak glinę pędzlami: rysuj, nakładaj glinę, wygładzaj, chwytaj, nadmuchuj, zaginaj, ściskaj, wyrównuj; chroń części maską, odbijaj względem X i dodawaj detale tam, gdzie rzeźbisz.
keywords: rzeźba, rzeźbienie, pędzel, pędzle, glina, rysuj, wygładź, chwyć, nadmuchaj, zagięcie, ściśnij, wyrównaj, maska, symetria, lustro, detal, dynamiczna topologia, pióro, nacisk, tablet, rysik
from: 5477801a
---

Obszar roboczy Rzeźba kształtuje siatkę pędzlami, jak glinę: przeciągnij po powierzchni, a ona się podniesie, zapadnie, wygładzi lub podąży za wskaźnikiem pod okrągłym pędzlem, najmocniej w środku i zanikając do zera na brzegu.

## Początek

Zaznacz siatkę i wybierz {{ui:Rzeźba}} na liście Obszar roboczy. Grupa lub komponent najpierw zamienia się w siatkę, jak w obszarze Siatka. Pędzle działają na wierzchołkach siatki, więc siatka z ich większą liczbą pozwala na drobniejsze kształty: najpierw ją podziel ({{ui:Podziel}} w obszarze Siatka albo modyfikator Subdivision surface zastosowany przyciskiem Zastosuj) albo włącz {{ui:Detal}}.

## Pędzle

| Pędzel | Klawisz | Co robi |
| --- | --- | --- |
| {{ui:Rysuj}} | {{key:D}} | Podnosi powierzchnię pod pędzlem |
| {{ui:Glina}} | {{key:C}} | Nakłada płaskie warstwy, najpierw wypełniając wgłębienia |
| {{ui:Wygładź}} | {{key:S}} | Wyrównuje wybrzuszenia; przytrzymaj {{key:Shift}}, aby wygładzać dowolnym pędzlem |
| {{ui:Chwyć}} | {{key:G}} | Ciągnie powierzchnię za wskaźnikiem |
| {{ui:Nadmuchaj}} | {{key:I}} | Nadyma powierzchnię wzdłuż jej własnego kierunku |
| {{ui:Zagięcie}} | {{key:Shift+C}} | Wycina ostry rowek |
| {{ui:Ściśnij}} | {{key:P}} | Ściąga powierzchnię ku środkowi pędzla |
| {{ui:Wyrównaj}} | {{key:T}} | Dociska powierzchnię do jej średniej płaszczyzny |
| {{ui:Maska}} | {{key:M}} | Maluje maskę, która chroni powierzchnię przed innymi pędzlami |

Przytrzymaj {{key:Ctrl}} podczas pociągnięcia, aby działać odwrotnie (obniżać zamiast podnosić, tworzyć grzbiet zamiast rowka, usuwać maskę), albo włącz {{ui:Odejmij}}.

## Rozmiar i siła

Rozmiar pędzla podawany jest w pikselach na ekranie, więc wygląda tak samo bez względu na przybliżenie: {{key:[}} i {{key:]}} zmniejszają go i powiększają, a {{key:Shift+[}} i {{key:Shift+]}} zmieniają jego siłę. Panel pokazuje obie wartości.

Przy piórze na tablecie mocniejszy nacisk powiększa i wzmacnia pędzel; w panelu można wyłączyć każde z tych zachowań.

## Lustro, maska i detal

- {{ui:Lustro X}} ({{key:X}}) rzeźbi obie strony względem czerwonej jednocześnie, do twarzy i figur.
- Maska jest podczas rzeźbienia ciemniejsza. {{ui:Wyczyść maskę}} ({{key:Alt+M}}) ją zdejmuje, {{ui:Odwróć maskę}} ({{key:Ctrl+I}}) maskuje to, co było wolne, i zwalnia to, co było maskowane. Maska jest zachowywana razem z siatką.
- {{ui:Detal}} dodaje trójkąty tam, gdzie rzeźbisz: krawędzie dłuższe niż rozmiar ustawiony w panelu (piksele na ekranie) są dzielone pod pędzlem. Wymaga siatki z trójkątów i pyta, czy najpierw ją utworzyć.

Każde pociągnięcie to jeden krok cofnięcia.

:::note
Detal tylko dodaje trójkąty; nie usuwa tych, które stały się bardzo małe. Remesh (w obszarze Siatka) ponownie wyrównuje całą siatkę.
:::

Zobacz także [Edycja siatki](topic:mesh-edit), [Siatki](topic:meshes) i [Modyfikatory na siatce](topic:modifiers).
