---
title: Style i cienie słoneczne
summary: Pokaż model cieniowany, jako linie niewidoczne, szkielet lub przezroczysty, i zbadaj cienie, które rzuca, o dowolnej dacie, godzinie i miejscu.
keywords: widok prezentacyjny, czysty widok, ukryj prowadnice, ukryj osie, styl, cieniowany, linie niewidoczne, szkielet, rentgen, krawędzie, cienie, słońce, badanie nasłonecznienia, słoneczny, data, godzina, szerokość geograficzna, długość geograficzna, strefa czasowa, północ
from: 09c95329
---

Panel {{ui:Styl}} po prawej zmienia sposób rysowania modelu. Nic w nim nie zmienia samego modelu i nie wchodzi w skład cofania. Każda [scena](topic:scenes) pamięta własny styl, a plik pamięta styl ustawiony w chwili zapisu.

## Ściany

Wybierz jeden z trybów z listy {{ui:Ściany}}:

| Styl | Wygląd |
|---|---|
| {{ui:Cieniowany}} | Pełne ściany, łagodnie oświetlone. Ściany widziane od tyłu są niebiesko-szare. Pokazują się zaimportowane kolory. |
| {{ui:Linie niewidoczne}} | Ściany w kolorze tła z krawędziami w kolorze tuszu: czysty rysunek liniowy z usuniętymi liniami niewidocznymi. Białe na {{ui:Papier}}, ciemne na {{ui:Model}}. |
| {{ui:Szkielet}} | Tylko krawędzie. Ściany nie są rysowane, ale nadal się liczą przy klikaniu i przyciąganiu: nie da się kliknąć przez nie. |
| {{ui:Rentgen}} | Przezroczyste ściany, aby zobaczyć, co jest za nimi lub w środku. Jak w szkielecie, kliknięcia i przyciąganie zatrzymują się na najbliższej ścianie. |

{{ui:Pokaż krawędzie}} włącza lub wyłącza krawędzie we wszystkich stylach oprócz {{ui:Szkielet}}. Gdy są wyłączone, {{ui:Linie niewidoczne}} pokazują prawie nic, bo ich ściany mają kolor tła. Miękkie krawędzie, na przykład boki wyciągniętego okręgu, nigdy nie są rysowane.

## Włącz cienie słoneczne

1. Zaznacz {{ui:Cienie od słońca}}. Ustawienia słońca pod nim stają się aktywne, a model rzuca cienie na siebie i na ziemię.
2. Ustaw miejsce:
   - {{ui:Szerokość geograficzna}}: północ jest dodatnia, południe ujemne (Nowy Jork to około 40.7, Sydney około -33.9).
   - {{ui:Długość geograficzna}}: wschód jest dodatni, zachód ujemny (Nowy Jork to około -74.0).
   - {{ui:Przesunięcie UTC}}: przesunięcie strefy miejsca względem UTC w godzinach, na przykład `-5` dla Nowego Jorku zimą. ModelCraft nie stosuje czasu letniego; dla Nowego Jorku latem użyj `-4`.
3. Ustaw {{ui:Data}} (miesiąc i dzień) i przeciągnij suwak {{ui:Godzina}}. Czas przesuwa się co 15 minut i pokazuje się obok suwaka, na przykład „3:00 pm”.

Linia pod ustawieniami mówi, gdzie jest słońce, na przykład „Słońce 52° nad horyzontem, 250° od północy. Północ to zielona oś.” W nocy pojawia się napis „The sun is down at this time.”

Nowy model zaczyna się od słońca 21 czerwca o 3:00 pm, przy szerokości 40, długości -105 i przesunięciu UTC -7.

## Ustaw północ modelu

Północ w ModelCraft to zawsze **zielona oś**. Aby zbadać prawdziwe miejsce, obróć model tak, by jego północna strona wskazywała wzdłuż zielonej osi: zaznacz wszystko ({{key:Mod+A}}), naciśnij {{key:Q}}, kliknij środek na ziemi i obróć go o kąt miejsca od północy (zob. [Obróć i skaluj](topic:rotate-scale)).

## Badanie nasłonecznienia

1. Ustaw miejsce i datę.
2. Dodaj scenę ({{ui:Dodaj scenę}} w {{ui:Sceny}}).
3. Przesuń suwak czasu, a potem dodaj kolejną scenę. Powtórz dla każdej godziny, którą chcesz uwzględnić.
4. Kliknij {{ui:Odtwórz}}, aby przechodzić między nimi. Zob. [Zapisywanie widoków jako sceny](topic:scenes).

## Warto wiedzieć

- Cienie mogą wyglądać postrzępione na bardzo dużym modelu, ponieważ jedna mapa cieni obejmuje cały model.
- Cienie nie są rysowane w {{ui:Szkielet}}.
- Położenie słońca wynika z obliczeń NOAA i jest dokładne do ułamka stopnia, co w zupełności wystarcza do studiów mas zabudowy. Pomijana jest refrakcja atmosferyczna, więc bardzo niskie kąty słońca przy wschodzie i zachodzie mogą być nieco nieprecyzyjne.

## Widok prezentacyjny

{{ui:Widoki}} › {{ui:Widok prezentacyjny}} (lub {{key:Shift+P}}) pokazuje tylko model: znikają osie, linie i punkty prowadnic, zarysy płaszczyzn przekroju (sam przekrój zostaje), znaczniki lamp, ramka otwartej grupy, znaczniki przyciągania i podpowiedzi oraz podświetlenie zaznaczenia. Służy do wyraźnego oglądania modelu lub przed zrzutem ekranu. Narzędzia nadal działają i nadal przyciągają; po prostu nie widać znaczników. Naciśnij ponownie {{key:Shift+P}}, aby je przywrócić. Wymiary zostają, bo są częścią rysunku. Podczas edycji wewnątrz grupy reszta modelu nie blaknie: pokazuje się taka, jaka jest, łącznie z teksturami.
