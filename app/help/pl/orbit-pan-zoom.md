---
title: Orbita, przesuwanie i powiększanie
summary: Poruszaj się wokół modelu myszą, gładzikiem, ekranem dotykowym lub klawiaturą i przeskakuj do standardowych widoków.
keywords: orbita, przesuwanie, powiększanie, długie naciśnięcie, trzy palce, dwa palce, stuknięcie, nawigacja, kamera, widok, obrót widoku, gładzik, dotyk, szczypnięcie, środkowy przycisk, zoom do zasięgu, perspektywa, równoległa, widok z góry, izo
from: 10d4d33a
---

Możesz przesuwać kamerę w każdej chwili, nawet w środku rysowania linii albo wypychania ściany: narzędzie czeka tam, gdzie było.

## Z trzyprzyciskową myszą

| Aby | Zrób to |
|---|---|
| Orbitować | Przeciągnij środkowym przyciskiem (naciśnij kółko) |
| Przesuwać | Przeciągnij prawym przyciskiem albo przytrzymaj {{key:Shift}} i przeciągnij środkowym przyciskiem. Naciśnięcie lub puszczenie {{key:Shift}} w trakcie przeciągania przełącza między orbitą a przesuwaniem |
| Powiększać | Obracaj kółko. Powiększa w stronę ściany pod wskaźnikiem albo w stronę punktu pod nim na głębokości środka widoku |
| Zobaczyć cały model | {{key:Shift+Z}} lub {{ui:Zasięg}} |

Orbita obraca widok wokół części modelu pod wskaźnikiem, więc ten punkt zostaje na miejscu, a wszystko obraca się wokół niego. Nad pustą przestrzenią obraca się wokół środka widoku. Przesuwanie utrzymuje punkt, który chwyciłeś, pod wskaźnikiem.

Aby zawsze orbitować wokół środka widoku albo przyspieszyć lub zwolnić orbitę i przesuwanie, otwórz {{ui:Ustawienia}} ({{key:Mod+,}}), kartę {{ui:ModelCraft}}, **Orbita i przesuwanie**. Prędkości dotyczą myszy, gładzika, dotyku i klawiszy strzałek.

Kliknięcie prawym przyciskiem bez przeciągania nic nie robi; ModelCraft nie ma menu kontekstowego.

## Bez środkowego przycisku

Użyj narzędzi kamery na pasku narzędzi albo klawiatury:

1. Naciśnij {{key:O}} (lub kliknij {{ui:Orbita}}) i przeciągnij lewym przyciskiem, aby orbitować. Przytrzymaj {{key:Shift}} podczas przeciągania, aby przesuwać.
2. Naciśnij {{key:H}} (lub kliknij {{ui:Przesuń widok}}) i przeciągnij, aby przesuwać.
3. Naciśnij {{key:Z}} (lub kliknij {{ui:Powiększ}}) i przeciągnij w górę, aby powiększyć, w dół, aby pomniejszyć.
4. Naciśnij {{key:Space}}, aby wrócić do {{ui:Zaznacz}}, albo naciśnij klawisz narzędzia, którego chcesz użyć następnie.

Narzędzia kamery zastępują narzędzie, którego używałeś. Aby rozejrzeć się w trakcie operacji bez jej utraty, użyj klawiatury:

- Klawisze strzałek orbitują.
- {{key:Shift}} z klawiszami strzałek przesuwa.

Gdy narzędzie rysowania jest w trakcie operacji (po pierwszym kliknięciu), klawisze strzałek blokują kierunki zamiast orbitować. Zobacz [Wnioskowanie i przyciąganie](topic:inference#lock-a-direction).

## Na gładziku

Najłatwiej: otwórz {{ui:Ustawienia}} ({{key:Mod+,}}), kartę {{ui:ModelCraft}}, i ustaw Przewijanie na **Gładzik** (albo zostaw „Wykryj automatycznie”). Potem przesuń dwoma palcami, aby orbitować, przytrzymaj {{key:Shift}} i przesuń, aby przesuwać, a szczyp, aby powiększać — bez przycisków kamery. Zobacz [Ustawienia ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Przy ustawieniu Przewijanie na **Kółko myszy**:

:::mac
- **Powiększanie:** przewijaj dwoma palcami albo szczyp. Oba powiększają w stronę wskaźnika.
- **Przesuwanie:** naciśnij dwoma palcami (kliknięcie dodatkowe) i trzymaj palce na gładziku podczas przeciągania. Włącz „Kliknięcie dodatkowe” w **Ustawieniach systemowych**, potem w **Gładziku**, jeśli kliknięcie dwoma palcami nie działa.
- **Orbita:** naciśnij {{key:O}} i przeciągnij jednym palcem albo użyj klawiszy strzałek.
- Przytrzymanie {{key:Ctrl}} podczas kliknięcia może nie liczyć się jako kliknięcie prawym przyciskiem w ModelCraft, zależnie od przeglądarki: może działać jak kliknięcie z przytrzymanym {{key:Ctrl}}. Do przesuwania użyj naciśnięcia dwoma palcami.
:::

:::windows linux
- **Powiększanie:** przewijaj dwoma palcami. Szczypanie też powiększa tam, gdzie sterownik gładzika wysyła je jako przewijanie z {{key:Ctrl}}.
- **Przesuwanie:** przeciągnij prawym przyciskiem (na wielu gładzikach naciśnij dolny prawy róg i przeciągnij) albo naciśnij {{key:H}} i przeciągnij.
- **Orbita:** naciśnij {{key:O}} i przeciągnij albo użyj klawiszy strzałek.
:::

Przy Kółku myszy przewijanie dwoma palcami powiększa; nie przesuwa. To przeciwieństwo wielu stron internetowych, i tak działa kółko myszy w większości programów do modelowania 3D.

:::tip
{{key:Space}} wybiera narzędzie {{ui:Zaznacz}} w ModelCraft. Przytrzymanie {{key:Space}} i przeciąganie nie przesuwa, jak w niektórych innych aplikacjach.
:::

## Na ekranie dotykowym

:::touch
- **Jeden palec** używa bieżącego narzędzia: **stuknij**, aby kliknąć, **naciśnij i przeciągnij**, aby rysować lub przeciągać.
- Gdy palec narzędzia rysowania jest przyłożony, nad nim pokazuje się **lupa** pokazująca, co jest pod palcem, abyś zobaczył punkt końcowy, środek albo krawędź, do której się przyciąga, zanim podniesiesz palec.
- **Zatrzymaj palec** na pół sekundy, aby zakończyć to, co robi narzędzie, tak jak robi to {{key:Enter}}: krzywą albo łańcuch linii. Gdy nic się nie dzieje, zatrzymanie i przeciągnięcie tym samym palcem **orbituje**, aż go podniesiesz.
- **Dwa palce** przeciągnięte razem **przesuwają**; **szczyp**, aby powiększać. Oba działają w jednym geście.
- **Trzy palce** przeciągnięte razem **orbitują**.
- Aby je zamienić (dwa palce orbitują, trzy przesuwają), otwórz {{ui:Ustawienia}}, kartę {{ui:ModelCraft}}, Ekran dotykowy.
- Położenie drugiego palca **anuluje** to, co zaczął pierwszy palec (połowicznie narysowany prostokąt, wypychanie w toku). Podnieś palce i zacznij od nowa.
- Mały pasek u dołu widoku ma **Gotowe** ({{key:Enter}}), **Anuluj** ({{key:Esc}}) i **Cofnij**, gdy nie ma klawiatury.
- Przyciąganie i wybieranie sięgają trochę dalej niż przy myszy, a przyciski są większe, aby palec mógł w nie trafić.
:::

:::mouse
Na ekranie dotykowym jeden palec używa bieżącego narzędzia (stuknięcie, aby kliknąć, zatrzymanie, aby zakończyć, albo zatrzymanie i przeciąganie, aby orbitować), dwa palce przesuwają i szczypią, aby powiększać, trzy palce orbitują, a mały pasek oferuje Gotowe, Anuluj i Cofnij.
:::

## Standardowe widoki

1. Kliknij {{ui:Widoki}} na prawym końcu paska narzędzi.
2. Wybierz {{ui:Izo}}, {{ui:Góra}}, {{ui:Przód}}, {{ui:Prawa}}, {{ui:Tył}}, {{ui:Lewa}} lub {{ui:Dół}}.

Widok obraca się w tym kierunku i dopasowuje do całego modelu. {{ui:Przód}} patrzy na północ, wzdłuż zielonej osi; {{ui:Góra}} patrzy prosto w dół z północą u góry.

Kostka widoku w prawym górnym rogu widoku robi to samo jednym kliknięciem, plus krawędzie i narożniki, pierścień kompasu do obracania modelu oraz przycisk powrotu. Zobacz [Kostka widoku](topic:view-cube).

## Perspektywa i rzut równoległy

Wybierz {{ui:Widoki}}, a potem {{ui:Perspektywa}}. Znacznik wyboru oznacza, że perspektywa jest włączona. Gdy jest wyłączona, widok jest rzutem równoległym (ortogonalnym): linie równoległe w modelu pozostają równoległe na ekranie, czego chcesz dla elewacji z {{ui:Przód}} lub {{ui:Prawa}}. Pasek stanu pokazuje „Perspektywa.” albo „Rzut równoległy.”

Każda scena pamięta, czy była w perspektywie. Zobacz [Zapisywanie widoków jako scen](topic:scenes).
