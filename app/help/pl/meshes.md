---
title: Siatki
summary: Zamień grupę lub komponent w siatkę — rodzaj obiektu, którym modelują narzędzia treści 3D — i z powrotem w geometrię push/pull.
keywords: siatka, siatki, wielokąt, wielokąty, n-gon, czworokąt, czworokąty, wierzchołki, half-edge, uv, uvs, konwertuj, zamień na siatkę, zamień na geometrię, powierzchnia podziału, rzeźbienie, modelowanie, treści 3D
from: e32363e8
---

ModelCraft ma dwa rodzaje geometrii. **Geometria push/pull** to płaskie ściany, które rysujesz: sklejają się, przecinają i zrastają. **Siatka** to rodzaj obiektu, którym modelują narzędzia treści 3D: ściany o dowolnej liczbie narożników, przy czym każdy narożnik może mieć własne współrzędne tekstury (UV), normalne i kolory, a każdy wierzchołek wartości takie jak wagi. Siatka jest umieszczana jak grupa lub komponent i leży obok geometrii push/pull w tym samym modelu.

## Zamiana grupy lub komponentu w siatkę

1. Zaznacz grupę lub komponent.
2. W {{ui:Informacje o obiekcie}} kliknij {{ui:Zamień na siatkę}}.

Jej ściany stają się ścianami siatki (ściana z dziurami trafia jako trójkąty), ostre krawędzie pozostają ostre, miękkie są cieniowane płynnie, a malowanie, materiały i zaimportowane tekstury zostają na swoich ścianach. Grupy i komponenty wewnątrz są łączone w jedną siatkę. Luźne krawędzie są pomijane: siatka zachowuje ściany. Każde umieszczenie komponentu pokazuje siatkę. To jeden krok cofnięcia.

## Co pokazuje Informacje o obiekcie

Zaznacz siatkę, aby zobaczyć jej ściany, wierzchołki i krawędzie, to, czy jest zamkniętą bryłą (i jej objętość), oraz rozmiar po umieszczeniu. Siatka z otwartymi krawędziami podaje ich liczbę.

## Zamiana siatki z powrotem w geometrię push/pull

Zaznacz siatkę i kliknij {{ui:Zamień na geometrię}}. Płaskie ściany wracają takie, jakie były; ściana, której narożniki nie leżą w jednej płaszczyźnie, wraca jako trójkąty. Ostre krawędzie są twarde, pozostałe miękkie. {{ui:Rozbij}} wkłada ściany siatki wprost do grupy wokół niej.

## Warto wiedzieć

- Kliknij siatkę dwukrotnie, aby [edytować jej wierzchołki, krawędzie i ściany](topic:mesh-edit) w obszarze roboczym Siatka. Zamień ją w geometrię, aby edytować ją push/pullem; przesuwaj, obracaj, skaluj, kopiuj, maluj, ukrywaj i oznaczaj ją jak każdą grupę.
- Eksporty, druk 3D, renderowania i VR widzą siatkę jako jej ściany.
- Plik zawierający siatkę zapisuje się jako nowsza wersja pliku `.modelcraft`, więc ModelCraft 0.6 i starsze go nie otworzą; pliki bez siatki otwierają się w nich jak dotąd. Zamień siatki w geometrię, aby udostępnić plik komuś ze starszą wersją.
- Cofanie na siatce zachowuje tylko to, co każdy krok zmienił, więc nawet bardzo duża siatka cofa się szybko.

Zobacz też [Grupy i komponenty](topic:groups-components) oraz [Jeszcze nie zbudowano](topic:not-built-yet).
