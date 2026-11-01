---
title: Ekran ModelCraft
summary: Przegląd paska narzędzi, paneli po obu stronach, widoku 3D i paska stanu, według nazw widocznych na ekranie.
keywords: ekran, układ, pasek narzędzi, panele, lista obiektów, informacje o obiekcie, styl, sceny, pasek stanu, pole wartości, jednostki, interfejs, przegląd
from: 4a9a4516
---

Od góry do dołu: pasek aplikacji, pasek narzędzi, trzy kolumny (panele po lewej, widok 3D, panele po prawej) i pasek stanu.

## Pasek aplikacji

Wąski pasek na samej górze należy do każdej aplikacji CadCraft. Zawiera nazwę i wersję aplikacji, {{ui:O ModelCraft}}, przycisk trybu ekranu oraz przełącznik {{ui:Papier}} / {{ui:Model}}.

- {{ui:Papier}} to jasny motyw, a {{ui:Model}} ciemny. Widok 3D zmienia kolory, aby do niego pasować; Twój model się nie zmienia.
- Przycisk trybu ekranu (z początku widnieje na nim {{ui:Pełny ekran}}) i {{key:Ctrl+Shift+F}} przełączają trzy tryby: normalny, pełny ekran oraz pełny ekran z ukrytymi paskami. Gdy paski są ukryte, wskaż górną krawędź ekranu (lub ją dotknij), aby je przywrócić. {{key:Esc}} kończy pełny ekran.

:::note
{{key:Ctrl+Shift+F}} używa klawisza Control na każdym komputerze, także na Macu. Na iPhonie, gdzie przeglądarki nie mają pełnego ekranu, przycisk tylko ukrywa i pokazuje paski.
:::

## Pasek narzędzi

Pasek narzędzi jest podzielony na opisane grupy. Najedź na przycisk, aby zobaczyć jego nazwę i klawisz.

Po jego lewej stronie lista {{ui:Obszar roboczy}} przełącza przeznaczenie paska narzędzi i prawego panelu: {{ui:Model}} (modelowanie wypychaniem/ciągnięciem, przegląd poniżej), {{ui:Siatka}} ([edycja siatki](topic:mesh-edit)), {{ui:Krzywa}} ([obiekty krzywych](topic:curves)), {{ui:UV}} ([układ UV](topic:uv)), {{ui:Rzeźba}} ([rzeźbienie](topic:sculpt)), {{ui:Cieniowanie}} ([materiały z węzłów](topic:shading)), {{ui:Animuj}} ([animacja](topic:animate)) i {{ui:Render}} ([renderowanie w widoku](topic:render#render-in-the-view)).

| Grupa | Przyciski |
|---|---|
| Plik | {{ui:Nowy}}, {{ui:Otwórz}}, {{ui:Zapisz}}, {{ui:Importuj}}, {{ui:Eksport}} (menu formatów) |
| Rysuj | {{ui:Linia}} ({{key:L}}), {{ui:Prostokąt}} ({{key:R}}), {{ui:Okrąg}} ({{key:C}}), {{ui:Wielokąt}} ({{key:N}}) |
| Modyfikuj | {{ui:Zaznacz}} ({{key:Space}}), {{ui:Wypychanie/ciągnięcie}} ({{key:P}}), {{ui:Przesuń}} ({{key:M}}), {{ui:Obróć}} ({{key:Q}}), {{ui:Skaluj}} ({{key:S}}), {{ui:Gumka}} ({{key:E}}), {{ui:Miara}} ({{key:T}}) |
| Organizuj | {{ui:Komponent}} ({{key:G}}), {{ui:Grupa}} ({{key:Shift+G}}), {{ui:Rozbij}} |
| Edycja | {{ui:Cofnij}} ({{key:Mod+Z}}), {{ui:Ponów}} ({{key:Mod+Y}}), {{ui:Kopiuj}} ({{key:Mod+C}}), {{ui:Wklej}} ({{key:Mod+V}}), {{ui:Więcej}} (menu: wytnij, kopiuj, wklej, wklej w miejscu {{key:Mod+Shift+V}}, duplikuj {{key:Mod+D}}, usuń, zaznacz wszystko, odznacz wszystko oraz styl klawiszy) |
| Kamera | {{ui:Orbita}} ({{key:O}}), {{ui:Przesuń widok}} ({{key:H}}), {{ui:Powiększ}} ({{key:Z}}), {{ui:Zasięg}} ({{key:Shift+Z}}), {{ui:Widoki}} (menu) |

Pokazane klawisze to klawisze stylu wypychania; gdy w [ustawieniach ModelCraft](topic:settings) wybrano styl Modeler, podpowiedzi pokazują zamiast nich tamte klawisze. Używane narzędzie jest pokazane jako wciśnięte. Na wąskim ekranie pasek narzędzi przewija się na boki.

Menu {{ui:Widoki}} zawiera {{ui:Izo}}, {{ui:Góra}}, {{ui:Przód}}, {{ui:Prawa}}, {{ui:Tył}}, {{ui:Lewa}} i {{ui:Dół}}, każdy dopasowany do modelu, oraz {{ui:Perspektywa}}, która przełącza między rzutem perspektywicznym a równoległym.

## Widok 3D

Środek ekranu. Czerwona, zielona i niebieska linia to osie: czerwona i zielona leżą na gruncie, niebieska wskazuje w górę, a **północ to oś zielona**. Miejsce, w którym się spotykają, to początek układu.

- Na starcie karta zatytułowana „Zacznij modelować” wymienia kilka pierwszych klawiszy. Znika, gdy wybierzesz narzędzie rysowania albo klikniesz w widoku.
- Gdy narzędzie pracuje, widok pokazuje **znaczniki wnioskowania**: małe kolorowe kształty tam, gdzie przyciąga się wskaźnik (zielony okrąg na końcu, błękitny w punkcie środkowym, czerwony kwadrat na krawędzi, niebieski romb na ścianie). Zobacz [Wnioskowanie i przyciąganie](topic:inference).
- Zaznaczone elementy stają się niebieskie. Ściana widziana od tyłu jest niebiesko-szara.
- Gdy otwierasz grupę do edycji, wszystko poza nią blaknie, a osie przechodzą na własne osie grupy.
- Gdy model ma sceny, u góry widoku pojawia się rząd kart scen.
- Upuść plik w dowolnym miejscu widoku, aby go otworzyć lub zaimportować.

## Panele po lewej

**{{ui:Lista obiektów}}** wymienia grupy i komponenty w modelu, zagnieżdżone tak, jak w modelu. Komponent użyty więcej niż raz pokazuje, ile razy, na przykład „Okno (4)”.

- Kliknij nazwę, aby ją zaznaczyć. Kliknij dwukrotnie, aby otworzyć ją do edycji.
- **Szukaj po nazwie** (pojawia się, gdy są co najmniej dwie grupy) zachowuje tylko wiersze o pasującej nazwie, razem z grupami, w których się znajdują. {{key:Esc}} czyści pole.
- **Oko** na końcu wiersza ukrywa lub pokazuje tę grupę albo komponent (tak jak {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Ukryj}}). Ikona etykiety oznacza, że jest ukryty przez swoją [etykietę](topic:tags).
- **Zmiana nazwy w miejscu:** kliknij wiersz, naciśnij {{key:F2}}, wpisz nazwę i naciśnij {{key:Enter}} ({{key:Esc}} zachowuje starą nazwę).
- **Przeciągnij wiersz** na środek wiersza innej grupy, aby przenieść go do tej grupy, na górną lub dolną krawędź wiersza, aby umieścić go tuż przed lub po tym wierszu, albo na nagłówek {{ui:Lista obiektów}}, aby przenieść go na najwyższy poziom. Zostaje na swoim miejscu w modelu i zachowuje kolor, etykietę i nazwę. Grupa nie może trafić do samej siebie. Każde przeniesienie to jeden krok cofania. Zobacz [Zmiana kolejności na liście obiektów](topic:groups-components#rearrange-in-the-outliner).
- Gdy edytujesz wewnątrz grupy, wiersz mówi „Edycja: Model › …”, a pojawia się przycisk {{ui:Zamknij grupę}}. Zamyka naraz każdy otwarty poziom.

**{{ui:Komponenty}}** wymienia każdą definicję komponentu z liczbą umieszczonych kopii („3×”) i przyciskiem {{ui:Umieść}}, który dodaje kolejną kopię tam, gdzie klikniesz.

## Panele po prawej

**{{ui:Informacje o obiekcie}}** opisują to, co jest zaznaczone. Nagłówek zmienia się, aby powiedzieć, co to jest:

| Nagłówek | Pokazuje | Przyciski |
|---|---|---|
| Model (nic nie zaznaczono) | Ściany, krawędzie, grupy, komponenty i ile ich umieszczono, prowadnice, rozmiar całości | {{ui:Usuń wszystkie prowadnice}} (gdy są prowadnice) |
| Ściana | Pole, liczba otworów | {{ui:Odwróć ścianę}} |
| Krawędź | Długość | brak |
| Grupa lub komponent | Nazwa (wpisz, aby zmienić), ile razy jest umieszczony, czy jest zamkniętą bryłą, jego objętość, jego rozmiar | {{ui:Edytuj}}, {{ui:Rozbij}}, {{ui:Uczyń niepowtarzalnym}} (komponent umieszczony więcej niż raz), {{ui:Utwórz komponent}} (grupa) |
| Punkt lub linia prowadząca | nic | {{ui:Usuń}} |
| Kilka elementów | Ile ścian, krawędzi, grup i prowadnic, łączne pole ścian | {{ui:Utwórz komponent (G)}}, {{ui:Utwórz grupę (Shift+G)}} |

**{{ui:Styl}}** ustawia sposób rysowania modelu: {{ui:Ściany}} ({{ui:Cieniowany}}, {{ui:Linie niewidoczne}}, {{ui:Szkielet}}, {{ui:Prześwietlenie}}), {{ui:Pokaż krawędzie}} oraz {{ui:Cienie od słońca}} z datą, godziną i miejscem słońca. Zobacz [Style i cienie od słońca](topic:styles-shadows).

**{{ui:Sceny}}** zapisują widoki: {{ui:Dodaj scenę}}, lista scen oraz {{ui:Poprzednia}}, {{ui:Odtwórz}} i {{ui:Następna}}. Zobacz [Zapisywanie widoków jako scen](topic:scenes).

## Pasek stanu

Wzdłuż dołu, od lewej do prawej:

1. **Podpowiedź**: czego narzędzie chce dalej albo do czego przyciąga się wskaźnik („Koniec”, „Na osi czerwonej”).
2. **Komunikaty**: co się właśnie stało („Cofnięto wypychanie/ciągnięcie.”, „Zaimportowano site.dxf: 1697 krawędzi na ziemi, w grupie.”) albo dlaczego coś nie zadziałało.
3. **Pole wartości**: jego etykieta zmienia się wraz z narzędziem ({{ui:Długość}}, {{ui:Wymiary}}, {{ui:Promień}}, {{ui:Boki}}, {{ui:Odległość}}, {{ui:Kąt}}, {{ui:Skala}}, {{ui:Odsunięcie}}). Pokazuje rozmiar na żywo podczas pracy i przyjmuje to, co wpiszesz. Zobacz [Wpisywanie dokładnych rozmiarów w polu wartości](topic:value-box).
4. **Styl klawiszy**: {{ui:Klawisze: Wypychanie}} lub {{ui:Klawisze: Modeler}} przełącza naraz skróty klawiszowe i przyciski myszy (tak samo jak w [ustawieniach ModelCraft](topic:settings)).
5. **{{ui:Przyciąganie}} i {{ui:Kolizje}}**: przyciąganie do punktów, krawędzi i osi oraz zatrzymywanie się brył tam, gdzie się stykają. Przekreślone = wyłączone. Kliknij, aby przełączyć. Zobacz [ustawienia ModelCraft](topic:settings).
6. **Wybór jednostek**: jednostka, w której pokazywane są długości. Zobacz [Pierwsze kroki](topic:getting-started#check-the-units-first).

## Na wąskim ekranie

Poniżej około 760 pikseli szerokości (telefon lub wąskie okno) widok 3D zajmuje ekran. Pasek narzędzi to jeden wiersz przewijany na boki, a panele otwierają się jako arkusze z paska na dole ekranu.
