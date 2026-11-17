---
title: Pomiar i umieszczanie prowadnic
summary: Odczytuj długości i pola, mierz między dwoma punktami miarą i rozmieszczaj linie oraz punkty prowadnic, do których można rysować.
keywords: pomiar, miara, kątomierz, kąt, prowadnica pod kątem, prowadnica, linia prowadnicy, linia konstrukcyjna, odległość, wymiar, długość, pole, odsunięcie, układ, punkt prowadnicy
from: de6d04d9
---

## Odczytuj rozmiary bez mierzenia

Zaznacz coś i spójrz na {{ui:Informacje o obiekcie}}:

- Krawędź pokazuje swoją **długość**.
- Ściana pokazuje swoje **pole** i liczbę otworów.
- Kilka ścian pokazuje ich **łączne pole**.
- Grupa lub komponent pokazuje swój **rozmiar** (szerokość × głębokość × wysokość pudełka wokół niego) i, jeśli jest zamkniętą bryłą, jego **objętość**.
- Gdy nic nie jest zaznaczone, {{ui:Informacje o obiekcie}} pokazuje rozmiar całego modelu.

Długości i pola używają jednostki wybranej w selektorze w prawym dolnym rogu. Model w milimetrach pokazuje pola od 0.01 m² w górę w metrach kwadratowych (pokój 4 × 3 m odczytuje się jako „12 m²”).

Podczas rysowania pole wartości pokazuje na żywo długość, rozmiar, promień lub odległość, więc rzadko trzeba mierzyć potem.

Aby zmienić rozmiar po narysowaniu, zaznacz krawędź lub grupę i wpisz ponownie jej długość lub rozmiar w {{ui:Informacje o obiekcie}}. Możesz też umieścić [wymiar](topic:dimensions) i wpisać w nim nową długość.

## Mierz między dwoma punktami

1. Naciśnij {{key:T}}, aby użyć narzędzia {{ui:Miara}}.
2. Kliknij punkt: narożnik, punkt środkowy, punkt na ścianie lub grunt. (Kliknięcie krawędzi robi coś innego; zobacz niżej.)
3. Przesuń na drugi punkt. Końcówka i pole wartości ({{ui:Długość}}) pokazują odległość. Przyciąga do punktów oraz do kierunków czerwonego, zielonego i niebieskiego.
4. Kliknij. Pasek stanu mówi „Zmierzono 4' 6".”, a w drugim punkcie zostaje **punkt prowadnicy**.

Aby zostawić punkt prowadnicy w dokładnej odległości, wpisz ją po pierwszym kliknięciu i naciśnij {{key:Enter}}: punkt trafi w kierunku, w którym wskazujesz.

## Umieść linię prowadnicy

Linia prowadnicy to nieskończona przerywana linia, równoległa do krawędzi, w odległości, którą wybierasz. Używaj prowadnic do wyznaczenia cofnięcia, wysokości piętra albo miejsca, w którym zaczyna się okno.

1. Naciśnij {{key:T}}.
2. Kliknij **krawędź** (nie jej koniec). Końcówka mówi „Na krawędzi”.
3. Odsuń wskaźnik od krawędzi, na tę stronę, po której ma być prowadnica. Podąży za nim przerywana linia równoległa do krawędzi, a pole wartości ({{ui:Odsunięcie}}) pokazuje odległość.
4. Kliknij albo wpisz odsunięcie i naciśnij {{key:Enter}}: `1.5m`, `5'`.

   Pasek stanu mówi „Linia prowadnicy 1.5 m od krawędzi.”

Rozpoczęcie na istniejącej linii prowadnicy tworzy kolejną, równoległą do niej, więc można odsunąć siatkę krok po kroku od jednej prowadnicy.

Jeśli wpiszesz odsunięcie bez wcześniejszego odsunięcia się od krawędzi, ModelCraft nie wie, o którą stronę chodzi: „Najpierw odsuń się od krawędzi, aby pokazać, po której stronie.”

## Prowadnica pod kątem: Kątomierz

1. Kliknij {{ui:Kątomierz}} w grupie {{ui:Modyfikuj}}.
2. Kliknij środek: punkt, przez który przechodzi prowadnica. Na ścianie kątomierz leży na tej ścianie; w innym miejscu leży płasko. Po tym kliknięciu {{key:Right}}, {{key:Left}} lub {{key:Up}} ustawia go prostopadle do czerwonego, zielonego lub niebieskiego (naciśnij ponownie, aby cofnąć).
3. Kliknij punkt, który wyznacza 0°, na przykład wzdłuż krawędzi.
4. Przesuń na żądany kąt i kliknij: przyciąga co 15°. Albo wpisz kąt w stopniach, na przykład `22.5`, i naciśnij {{key:Enter}}; prowadnica pójdzie na tę stronę, po której jest wskaźnik.

Linia prowadnicy przechodzi przez środek pod tym kątem. Rysuj wzdłuż niej narzędziem {{ui:Linia}} dla nachylenia dachu, fazki lub ukośnej ściany.

## Rysuj względem prowadnic

Narzędzia rysowania przyciągają do linii prowadnic („Na prowadnicy”) i punktów prowadnic („Punkt prowadnicy”) oraz do miejsca, w którym linia prowadnicy przecina oś kierunku. Zacznij prostokąt tam, gdzie krzyżują się dwie prowadnice, aby umieścić go dokładnie.

## Usuwanie prowadnic

- Jedna prowadnica: kliknij ją narzędziem {{ui:Zaznacz}} i naciśnij {{key:Delete}}, albo kliknij ją {{ui:Gumka}}.
- Wszystkie prowadnice: gdy nic nie jest zaznaczone, kliknij {{ui:Usuń wszystkie prowadnice}} w {{ui:Informacje o obiekcie}}.

Prowadnice są zapisywane w pliku `.modelcraft`. Nie są eksportowane do innych formatów.
