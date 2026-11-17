---
title: Obiekty krzywych
summary: Rysuj krzywe Béziera, NURBS i krzywe z odcinków prostych, nadaj im grubość, szerokość lub zwężenie, wypełniaj płaskie, ustaw tekst jako krzywą i zamieniaj je w siatki.
keywords: krzywa, krzywe, bezier, nurbs, spline, splajny, ścieżka, rura, rurociąg, kabel, lina, fazka, wyciągnij, zwężenie, przechył, promień, wypełnienie, profil, tekst, litery, logo, krzywa na siatkę
from: 602bf077
---

**Obiekt krzywej** to krzywa, która tworzy kształt: rura wzdłuż niej (fazka), pasmo (wyciągnięcie), zwężający się róg (zwężenie) albo — gdy jest płaska i zamknięta — wypełniona płyta lub litery. Kształt podąża za krzywą: przesuń punkt, a rura przesunie się razem z nim. Gdy kształt jest dobry, zamień go w siatkę.

## Dodaj krzywą

Wybierz {{ui:Krzywa}} na liście obszarów roboczych i naciśnij {{ui:Dodaj}}:

| Rodzaj | Czym jest |
| --- | --- |
| Krzywa Béziera, okrąg Béziera | Przechodzi przez swoje punkty; każdy punkt ma dwa uchwyty, które ustawiają kierunek krzywej |
| Krzywa NURBS, okrąg NURBS, Path | Gładka, prowadzona w stronę swoich punktów (zaczyna się i kończy w punktach końcowych); każdy punkt ma wagę |
| Tekst | Twój tekst jako płaskie, wypełnione kontury liter |

Nowa krzywa dostaje cienką rurkę, by była widoczna i dało się ją wybrać; ustaw jej głębokość fazki na 0, by mieć nagą krzywą.

Możesz też zacząć od czegoś narysowanego: zaznacz łuk, okrąg, wielokąt lub narysowaną krzywą w obszarze roboczym Model i naciśnij {{ui:Zrób obiekt krzywej}} w {{ui:Informacje o obiekcie}}. Narysowane linie zostają.

## Edycja punktów

Kliknij dwukrotnie obiekt krzywej (lub zaznacz go i wybierz {{ui:Krzywa}}), by go edytować.

- Kliknij punkt lub uchwyt ({{key:Shift}} dodaje lub usuwa); przeciągnij, by go przesunąć. Przeciągnij po pustym miejscu, by zaznaczyć prostokątem.
- {{ui:Wydłuż}} ({{key:E}}, lub {{key:Ctrl}}+klik) dodaje punkt za zaznaczonym końcem, przy kursorze.
- {{ui:Podziel}} ({{key:W}}) wstawia punkt między każdą parą zaznaczonych sąsiadów; krzywa Béziera zachowuje swój kształt.
- {{ui:Przesuń}}, {{ui:Obróć}}, {{ui:Skaluj}} przesuwają zaznaczone punkty za kursorem (klawisze modelera {{key:G}} {{key:R}} {{key:S}}, klawisze push/pull {{key:M}} {{key:Q}} {{key:S}}); kliknij, by zachować, {{key:Esc}}, by anulować.
- {{ui:Zamknij}} ({{key:C}}) zamyka otwarty spline albo otwiera zamknięty; {{ui:Odwróć}} ({{key:Shift+R}}) biegnie nim w drugą stronę.
- Uchwyty Béziera: {{ui:Wygładź}} ({{key:V}}) ustawia je dla gładkiej krzywej, {{ui:Narożnik}} ({{key:Shift+V}}) kieruje je na sąsiadów, {{ui:Swobodne}} ({{key:Alt+V}}) zostawia tam, gdzie je położysz. Przeciągnięcie uchwytu czyni go swobodnym.
- {{ui:Béziera}}, {{ui:NURBS}} i {{ui:Łamana}} zmieniają typ zaznaczonych splajnów, zachowując punkty.

Każda zmiana to jeden krok cofnięcia.

## Kształt

Ustawienia są w panelu (oraz w {{ui:Informacje o obiekcie}} w obszarze roboczym Model):

- **Kształt:** krzywe 3D idą dowolnie; płaska krzywa zostaje w swojej płaszczyźnie i można ją wypełnić.
- **Wypełnij zamknięte splajny** (płaskie): kontury stają się płytą; kontur w innym konturze jest dziurą, więc litery zachowują swoje dziury.
- **Wyciągnij:** połowa szerokości pasma (otwarte lub krzywe 3D) albo połowa grubości płyty (wypełnione).
- **Głębokość fazki** i **zaokrąglenie:** okrągła rura wzdłuż krzywej (przy wyciągnięciu: zaokrąglone pasmo); na wypełnionym kształcie zaokrąglona krawędź.
- **Zamknij końce:** nakładki na otwartej rurze.
- **Zwężenie wzdłuż:** równo skaluje każdy spline, np. `1, 0.2` dla rogu, `0, 1, 0` dla wrzeciona.
- **Gładkość** i dla NURBS **stopień**: jak dokładnie krzywa jest rysowana i jak gładka (2 proste … 6 najgładsze).
- Przy zaznaczonych punktach: **promień** (grubość rury w tym punkcie, razy fazka), **przechył** (obraca pasmo wokół krzywej) i dla NURBS **waga**.

Modyfikatory działają na obiekcie krzywej tak jak na siatce: {{ui:Macierz}} wzdłuż niej, Lustro, powierzchnia Subdivision. Zobacz [Modyfikatory na siatce](topic:modifiers).

## Zamiana w siatkę

{{ui:Na siatkę}} (w obszarze roboczym {{ui:Krzywa}} lub w {{ui:Informacje o obiekcie}}, {{ui:Krzywa na siatkę}}) zamienia obiekt krzywej w siatkę, którą pokazuje teraz; jego modyfikatory zostają na wierzchu. Potem edytuj ją w obszarze roboczym Siatka. {{ui:Cofnij}} przywraca krzywą.

Zobacz też [Siatki](topic:meshes) i [Edycja siatki](topic:mesh-edit).
