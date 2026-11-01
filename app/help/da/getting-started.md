---
title: Kom i gang med ModelCraft
summary: Hvad ModelCraft bruges til, hvordan du åbner det, og din første boks fra et rektangel til en gemt model.
keywords: start, første model, begynd, vejledning, introduktion, boks, volumenstudie, 3d, skub/træk, hurtig start, guidet, guide, begynder, ny til 3d
from: d47ad719
---

ModelCraft er en 3D-modellør til tidlig konstruktion: volumenstudier, rumindretning, hurtige bygningsformer og de skygger, de kaster. Du tegner flade figurer, skubber dem op til massive legemer og arbejder videre ved at tegne på deres flader. Det kører i din webbrowser, og dine modeller bliver på din computer.

Hvis du har brugt SketchUp, overføres det meste af det, du kan: de samme værktøjsbogstaver, skub/træk, en værdiboks til præcise størrelser, grupper og komponenter. [Hvis du kommer fra andre modellører](topic:coming-from) viser, hvad der er anderledes.

## Åbn ModelCraft

1. Åbn ModelCraft i en aktuel version af Chrome, Edge, Firefox eller Safari. Se [Browsere og computere](common:browsers).
2. Vent på, at 3D-visningen vises: et lyst (eller mørkt) område i midten med et kort med titlen »Begynd at modellere«.

Skærmen har en værktøjslinje øverst, {{ui:Oversigt}} og {{ui:Komponenter}} til venstre, 3D-visningen i midten, {{ui:Objektinfo}}, {{ui:Stil}} og {{ui:Scener}} til højre og en statuslinje nederst med værdiboksen og enhederne. [ModelCraft-skærmen](topic:workspace) forklarer hver del.

:::note
ModelCraft kræver WebGL, din browsers 3D-tegnefunktion. Hvis midten af skærmen forbliver tom, og værktøjerne ikke gør noget, så se [Fejlfinding](topic:troubleshooting#the-3d-view-is-blank).
:::

## Tjek enhederne først

Se i nederste højre hjørne. Enhedsvælgeren viser, hvad længder måles i.

- En ny model starter i **fod og tommer**, når din browser er indstillet til USA (også Liberia og Myanmar), og i **millimeter** alle andre steder.
- For at ændre det vælger du en anden enhed i vælgeren: {{ui:ft og in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} eller {{ui:mm}}. Selve modellen ændrer ikke størrelse; kun hvordan længder vises, og hvordan bare tal læses.

Et tal, du skriver uden enhed, bruger modellens enhed. I en model med fod og tommer er et bart tal **tommer**, så `120` betyder 10 fod.

## Lad ModelCraft guide din første model

Ny til 3D? På kortet {{ui:Begynd at modellere}} klikker du på {{ui:Guidet første model}} (den findes også i {{ui:Visninger}}). Et lille kort fører dig gennem fire trin, fra et fladt rektangel til en model, der er klar til en 3D-printer:

1. Tegn et rektangel på jorden.
2. Skub det op til en boks.
3. Gør boksen til ét objekt (en gruppe).
4. Kontrollér den til 3D-print, og download derefter en 3MF- eller STL-fil.

Kortet holder øje med modellen, ikke knapperne: det går videre, når trinnet er gjort, uanset hvordan du gjorde det, og går et trin tilbage, når du fortryder. {{ui:Vælg værktøjet}} vælger værktøjet for dig. Luk det når som helst med {{ui:×}}.

## Tegn din første boks

1. Tryk {{key:R}} for værktøjet {{ui:Rektangel}}, eller klik på {{ui:Rektangel}} i gruppen {{ui:Tegn}} på værktøjslinjen.
2. Klik én gang på jorden nær midten af visningen. Det er det første hjørne.
3. Flyt markøren væk. Et rektangel følger den, og værdiboksen nederst (mærket {{ui:Mål}}) viser dens størrelse.
4. Skriv størrelsen og tryk {{key:Enter}}: for eksempel `4m,3m`, eller `16',12'` i fod og tommer. Du behøver ikke klikke i værdiboksen først; når du skriver et tal, sendes det dertil.

   Du får et fladt rektangel på jorden. Det er en **flade**: en overflade med kanter rundt om.

5. Tryk {{key:P}} for {{ui:Skub/træk}}.
6. Klik på rektanglet, flyt markøren op, og klik igen. Eller klik på rektanglet og skriv en højde, som `3m` eller `10'`, og tryk derefter {{key:Enter}}.

   Rektanglet bliver til en boks med en top, en bund og fire sider.

7. Tryk {{key:Space}} for at gå tilbage til {{ui:Vælg}}, og klik derefter på boksens top. {{ui:Objektinfo}} til højre viser dens areal.

:::tip
Du kan også trække i stedet for at klikke to gange: tryk på det første hjørne, træk, og slip ved det andet. Begge måder virker for alle tegneværktøjer.
:::

## Se dig omkring

- **Orbit:** træk med den midterste museknap (hjulet), eller tryk {{key:O}} og træk med venstre knap.
- **Panorér:** træk med højre knap, eller med den midterste knap, mens du holder {{key:Shift}}.
- **Zoom:** drej hjulet. Det zoomer mod det, der er under markøren.
- **Se alt:** tryk {{key:Shift+Z}}, eller klik på {{ui:Udstrækning}}.

På et pegefelt eller en touchskærm er håndbevægelserne anderledes. Se [Orbit, panorér og zoom](topic:orbit-pan-zoom).

## Fortryd

Tryk {{key:Mod+Z}} for at fortryde og {{key:Mod+Y}} for at gentage, eller brug {{ui:Fortryd}} og {{ui:Gentag}} på værktøjslinjen. ModelCraft husker de seneste 200 trin, mens modellen er åben. Historikken gemmes ikke i filen.

## Gem din model

1. Klik på {{ui:Gem}} i gruppen {{ui:Fil}}, eller tryk {{key:Mod+S}}.
2. Browseren downloader en fil opkaldt efter din model, som `Untitled.modelcraft`. Statuslinjen siger, hvor den havnede: »Untitled.modelcraft er gemt i dine downloads.«

**At gemme er en download.** Hver gemning laver en ny kopi i din downloadmappe; den overskriver ikke den fil, du åbnede. For at holde en ryddelig projektmappe flytter eller omdøber du selv filen dér. [Åbn, gem, importér og eksportér](topic:files) forklarer hvorfor, og hvad du ellers kan gøre.

:::warning
ModelCraft gemmer ikke af sig selv. Hvis du lukker fanen med ikke-gemte ændringer, spørger browseren først (»Forlad websted?«). Vælg at blive, og gem derefter.
:::

## Få hjælp

Tryk {{key:F1}} eller klik på {{ui:Hjælp}} i applinjen for at åbne denne hjælp ved siden af modellen. Den virker uden forbindelse. Tryk {{key:F1}} igen, eller {{key:Esc}} inde i hjælpen, for at lukke den. Se [Brug af denne hjælp](common:help).

## Hvor du kan gå videre

- [Tegn flader med linjer, rektangler og cirkler](topic:draw-faces)
- [Skub og træk flader til massive legemer](topic:push-pull)
- [Skriv præcise størrelser i værdiboksen](topic:value-box)
- [Alle taster og museknapper](topic:keyboard)
