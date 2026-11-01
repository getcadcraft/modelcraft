---
title: Pierwsze kroki w ModelCraft
summary: Do czego służy ModelCraft, jak go otworzyć i jak zrobić pierwszy prostopadłościan, od prostokąta do zapisanego modelu.
keywords: start, pierwszy model, początek, samouczek, wprowadzenie, prostopadłościan, bryła, 3d, wypychanie, ciągnięcie, szybki start, przewodnik, początkujący, nowy w 3d
from: d47ad719
---

ModelCraft to modeler 3D do wczesnych etapów projektowania: studiów brył, układów pomieszczeń, szybkich form budynków i rzucanych przez nie cieni. Rysujesz płaskie kształty, wyciągasz je w bryły i pracujesz nad nimi dalej, rysując na ich ścianach. Działa w przeglądarce, a Twoje modele zostają na Twoim komputerze.

Jeśli używasz SketchUp, większość tego, co znasz, się przyda: te same litery narzędzi, wypychanie/ciągnięcie, pole wartości do dokładnych rozmiarów, grupy i komponenty. [Przechodzenie z innych modelerów](topic:coming-from) opisuje, co jest inne.

## Otwórz ModelCraft

1. Otwórz ModelCraft w aktualnej wersji Chrome, Edge, Firefox lub Safari. Zobacz [Przeglądarki i komputery](common:browsers).
2. Poczekaj, aż pojawi się widok 3D: jasny (lub ciemny) obszar pośrodku z kartą zatytułowaną „Zacznij modelować”.

Na ekranie widać pasek narzędzi na górze, {{ui:Lista obiektów}} i {{ui:Komponenty}} po lewej, widok 3D pośrodku, {{ui:Informacje o obiekcie}}, {{ui:Styl}} i {{ui:Sceny}} po prawej oraz pasek stanu na dole z polem wartości i jednostkami. [Ekran ModelCraft](topic:workspace) objaśnia każdą część.

:::note
ModelCraft wymaga WebGL, funkcji rysowania 3D w przeglądarce. Jeśli środek ekranu pozostaje pusty, a narzędzia nic nie robią, zobacz [Rozwiązywanie problemów](topic:troubleshooting#the-3d-view-is-blank).
:::

## Najpierw sprawdź jednostki

Spójrz na prawy dolny róg. Wybór jednostek pokazuje, w czym mierzone są długości.

- Nowy model zaczyna w **stopach i calach**, gdy przeglądarka jest ustawiona na Stany Zjednoczone (także Liberię i Mjanmę), a wszędzie indziej w **milimetrach**.
- Aby to zmienić, wybierz inną jednostkę: {{ui:ft i in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} lub {{ui:mm}}. Sam model nie zmienia rozmiaru; zmienia się tylko sposób wyświetlania długości i odczytywania samych liczb.

Liczba wpisana bez jednostki używa jednostki modelu. W modelu w stopach i calach sama liczba oznacza **cale**, więc `120` to 10 stóp.

## Pozwól, aby ModelCraft przeprowadził Cię przez pierwszy model

Zaczynasz z 3D? Na karcie {{ui:Zacznij modelować}} kliknij {{ui:Przewodnik: pierwszy model}} (jest też w {{ui:Widoki}}). Mała karta prowadzi przez cztery kroki, od płaskiego prostokąta do modelu gotowego dla drukarki 3D:

1. Narysuj prostokąt na gruncie.
2. Wyciągnij go w prostopadłościan.
3. Zamień prostopadłościan w jeden obiekt (grupę).
4. Sprawdź go pod kątem druku 3D, a następnie pobierz plik 3MF lub STL.

Karta obserwuje model, a nie przyciski: przechodzi dalej, gdy krok jest wykonany, niezależnie od tego, jak to zrobiłeś, i cofa się o krok, gdy cofniesz zmianę. {{ui:Wybierz narzędzie}} wybiera narzędzie za Ciebie. Zamkniesz ją w każdej chwili przyciskiem {{ui:×}}.

## Narysuj pierwszy prostopadłościan

1. Naciśnij {{key:R}}, aby użyć narzędzia {{ui:Prostokąt}}, albo kliknij {{ui:Prostokąt}} w grupie {{ui:Rysuj}} na pasku narzędzi.
2. Kliknij raz na gruncie blisko środka widoku. To pierwszy narożnik.
3. Odsuń wskaźnik. Prostokąt podąża za nim, a pole wartości na dole (z etykietą {{ui:Wymiary}}) pokazuje jego rozmiar.
4. Wpisz rozmiar i naciśnij {{key:Enter}}: na przykład `4m,3m` albo `16',12'` w stopach i calach. Nie musisz najpierw klikać pola wartości; wpisana liczba trafia tam sama.

   Powstaje płaski prostokąt na gruncie. To **ściana**: powierzchnia otoczona krawędziami.

5. Naciśnij {{key:P}}, aby użyć {{ui:Wypychanie/ciągnięcie}}.
6. Kliknij prostokąt, przesuń wskaźnik w górę i kliknij ponownie. Albo kliknij prostokąt i wpisz wysokość, na przykład `3m` lub `10'`, a następnie naciśnij {{key:Enter}}.

   Prostokąt staje się prostopadłościanem z górą, dołem i czterema bokami.

7. Naciśnij {{key:Space}}, aby wrócić do {{ui:Zaznacz}}, a następnie kliknij górę prostopadłościanu. {{ui:Informacje o obiekcie}} po prawej pokazują jego pole.

:::tip
Zamiast klikać dwa razy, możesz też przeciągać: naciśnij w pierwszym narożniku, przeciągnij i zwolnij w drugim. Oba sposoby działają w każdym narzędziu rysowania.
:::

## Rozejrzyj się

- **Orbita:** przeciągaj środkowym przyciskiem myszy (kółkiem) albo naciśnij {{key:O}} i przeciągaj lewym przyciskiem.
- **Przesuwanie widoku:** przeciągaj prawym przyciskiem albo środkowym z przytrzymanym {{key:Shift}}.
- **Powiększanie:** obracaj kółkiem. Powiększa w stronę tego, co jest pod wskaźnikiem.
- **Zobacz wszystko:** naciśnij {{key:Shift+Z}} albo kliknij {{ui:Zasięg}}.

Na gładziku lub ekranie dotykowym gesty są inne. Zobacz [Orbita, przesuwanie i powiększanie](topic:orbit-pan-zoom).

## Cofanie

Naciśnij {{key:Mod+Z}}, aby cofnąć, i {{key:Mod+Y}}, aby ponowić, albo użyj {{ui:Cofnij}} i {{ui:Ponów}} na pasku narzędzi. ModelCraft pamięta ostatnie 200 kroków, dopóki model jest otwarty. Historia nie jest zapisywana w pliku.

## Zapisz model

1. Kliknij {{ui:Zapisz}} w grupie {{ui:Plik}} albo naciśnij {{key:Mod+S}}.
2. Przeglądarka pobiera plik nazwany tak jak model, na przykład `Untitled.modelcraft`. Pasek stanu mówi, gdzie trafił: „Zapisano Untitled.modelcraft w pobranych plikach.”

**Zapis to pobranie.** Każdy zapis tworzy nową kopię w folderze pobranych plików; nie nadpisuje otwartego pliku. Aby zachować porządek w folderze projektu, przenieś lub zmień nazwę pliku samodzielnie. [Otwieranie, zapisywanie, import i eksport](topic:files) wyjaśnia dlaczego i co jeszcze możesz zrobić.

:::warning
ModelCraft nie zapisuje się sam. Jeśli zamkniesz kartę z niezapisanymi zmianami, przeglądarka najpierw zapyta („Opuścić witrynę?”). Wybierz pozostanie, a następnie zapisz.
:::

## Uzyskaj pomoc

Naciśnij {{key:F1}} albo kliknij {{ui:Pomoc}} na pasku aplikacji, aby otworzyć tę pomoc obok modelu. Działa bez połączenia. Naciśnij {{key:F1}} ponownie albo {{key:Esc}} w pomocy, aby ją zamknąć. Zobacz [Korzystanie z pomocy](common:help).

## Dokąd dalej

- [Rysuj ściany liniami, prostokątami i okręgami](topic:draw-faces)
- [Wypychaj i ciągnij ściany w bryły](topic:push-pull)
- [Wpisuj dokładne rozmiary w polu wartości](topic:value-box)
- [Wszystkie klawisze i działania myszy](topic:keyboard)
