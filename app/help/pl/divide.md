---
title: Podziel krawędź lub krzywą na równe części
summary: Podziel linię na równe odcinki albo nadaj łukowi lub okręgowi nową liczbę segmentów narzędziem Podziel.
keywords: podziel, dzielenie krawędzi, równe części, równe segmenty, rozdziel krawędź, segmenty, podziel krawędzie, segmenty łuku, segmenty okręgu, punkty wzdłuż linii
from: 5c3ce3ed
---

{{ui:Podziel}} dzieli krawędź na równe części, z narożnikiem w każdym punkcie podziału. Narożniki służą do przyciągania, jako punkty początkowe linii albo do wypychania i wciągania fragmentów ściany.

## Podziel krawędź

1. Kliknij {{ui:Podziel}} na pasku narzędzi albo zaznacz krawędź i kliknij {{ui:Podziel…}} w {{ui:Informacje o obiekcie}}.
2. Wskaż krawędź. Znaczniki pokazują, gdzie będą cięcia: nad środkiem krawędzi powstaną dwie części; bliżej końca – więcej.
3. Kliknij, aby podzielić ją na pokazane części. Albo wpisz liczbę, na przykład `5` (lub `5s`, albo `/5`), i naciśnij {{key:Enter}}: podział nastąpi od razu.

Części pozostają zaznaczone, a całość to jeden krok cofnięcia. Ściana, do której należy krawędź, zachowuje swój kształt i zyskuje nowe narożniki.

## Podziel łuk lub okrąg

Wskaż dowolny segment łuku lub okręgu: podział obejmuje całość.

- Łuk lub okrąg, którego narożników nie używa nic innego, leżący płasko na swojej ścianie, zostaje **narysowany ponownie z taką liczbą segmentów** na prawdziwym łuku. Jego końce pozostają na miejscu, a nadal jest jedną krzywą, więc można go zaznaczyć jednym kliknięciem i zmienić jego promień w {{ui:Informacje o obiekcie}}. Okrąg o 24 bokach podzielony na 8 staje się ośmiokątem.
- Każda inna krzywa – obrzeże wypchniętego walca, krzywa narysowana {{ui:Krzywa}}, łuk z liniami połączonymi z narożnikami – dostaje nowe narożniki w równych odległościach wzdłuż siebie, a nic się nie przesuwa.

## Z klawiszami modelera

Narzędzie działa tak samo z klawiszami modelera (Ustawienia › ModelCraft › Klawisze albo styl menu Modeler), gdzie znajduje się w menu {{ui:Siatka}} jako {{ui:Podziel krawędzie}}.

## Warto wiedzieć

- Wpisane liczby mieszczą się w zakresie od 2 do 1000; ruch wskaźnika daje do 100.
- Krzywa narysowana {{ui:Krzywa}} zachowuje swoje punkty: po {{ui:Edytuj punkty}} jest rysowana ponownie z tych punktów, a nowe narożniki znikają.

Zobacz też [Rysowanie ścian linią, prostokątami, okręgami i łukami](topic:draw-faces) oraz [Wpisywanie dokładnych wymiarów w polu wartości](topic:value-box).
