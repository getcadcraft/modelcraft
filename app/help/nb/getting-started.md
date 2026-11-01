---
title: Kom i gang med ModelCraft
summary: Hva ModelCraft er til for, hvordan du åpner det, og din første boks fra et rektangel til en lagret modell.
keywords: start, første modell, begynne, veiledning, introduksjon, boks, volumstudie, 3d, trykk trekk, hurtigstart, veiledet, guide, nybegynner, ny i 3d
from: d47ad719
---

ModelCraft er en 3D-modellerer for tidlig design: volumstudier, romoppsett, raske bygningsformer og skyggene de kaster. Du tegner flate former, trekker dem opp til volumlegemer og fortsetter å arbeide med dem ved å tegne på flatene deres. Det kjører i nettleseren din, og modellene dine blir på datamaskinen din.

Hvis du har brukt SketchUp, overføres det meste du kan: de samme verktøybokstavene, trykk/trekk, en verdiboks for nøyaktige størrelser, grupper og komponenter. [Hvis du kommer fra andre modellerere](topic:coming-from) lister hva som er annerledes.

## Åpne ModelCraft

1. Åpne ModelCraft i en nylig versjon av Chrome, Edge, Firefox eller Safari. Se [Nettlesere og datamaskiner](common:browsers).
2. Vent til 3D-visningen vises: et lyst (eller mørkt) område i midten med et kort med tittelen «Begynn å modellere».

Skjermen har en verktøylinje langs toppen, {{ui:Oversikt}} og {{ui:Komponenter}} til venstre, 3D-visningen i midten, {{ui:Elementinfo}}, {{ui:Stil}} og {{ui:Scener}} til høyre, og en statuslinje langs bunnen med verdiboksen og enhetene. [ModelCraft-skjermen](topic:workspace) forklarer hver del.

:::note
ModelCraft trenger WebGL, nettleserens funksjon for 3D-tegning. Hvis midten av skjermen forblir tom og verktøyene ikke gjør noe, se [Feilsøking](topic:troubleshooting#the-3d-view-is-blank).
:::

## Sjekk enhetene først

Se i nedre høyre hjørne. Enhetsvelgeren viser hva lengder måles i.

- En ny modell starter i **fot og tommer** når nettleseren din er satt til USA (også Liberia og Myanmar), og i **millimeter** ellers.
- For å endre det velger du en annen enhet i velgeren: {{ui:ft og in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} eller {{ui:mm}}. Selve modellen endrer ikke størrelse; bare hvordan lengder vises og hvordan rene tall leses.

Et tall du skriver uten enhet bruker modellens enhet. I en modell med fot og tommer er et rent tall **tommer**, så `120` betyr 10 fot.

## La ModelCraft veilede din første modell

Ny i 3D? På kortet {{ui:Begynn å modellere}} klikker du {{ui:Veiledet første modell}} (den finnes også i {{ui:Visninger}}). Et lite kort leder deg gjennom fire steg, fra et flatt rektangel til en modell klar for en 3D-skriver:

1. Tegn et rektangel på bakken.
2. Trekk det opp til en boks.
3. Gjør boksen til ett objekt (en gruppe).
4. Kontroller den for 3D-utskrift, og last deretter ned en 3MF- eller STL-fil.

Kortet følger med på modellen, ikke på knappene: det går videre når steget er gjort, uansett hvordan du gjorde det, og går et steg tilbake når du angrer. {{ui:Velg verktøyet}} velger verktøyet for deg. Lukk det når som helst med {{ui:×}}.

## Tegn din første boks

1. Trykk {{key:R}} for verktøyet {{ui:Rektangel}}, eller klikk {{ui:Rektangel}} i gruppen {{ui:Tegn}} i verktøylinjen.
2. Klikk én gang på bakken nær midten av visningen. Det er det første hjørnet.
3. Flytt pekeren bort. Et rektangel følger den, og verdiboksen nederst (merket {{ui:Måltilsettinger}}) viser størrelsen.
4. Skriv størrelsen og trykk {{key:Enter}}: for eksempel `4m,3m`, eller `16',12'` i fot og tommer. Du trenger ikke klikke i verdiboksen først; et tall du skriver sendes dit.

   Du får et flatt rektangel på bakken. Det er en **flate**: en overflate med kanter rundt.

5. Trykk {{key:P}} for {{ui:Trykk/trekk}}.
6. Klikk på rektangelet, flytt pekeren opp og klikk igjen. Eller klikk på rektangelet og skriv en høyde, for eksempel `3m` eller `10'`, og trykk {{key:Enter}}.

   Rektangelet blir en boks med en topp, en bunn og fire sider.

7. Trykk {{key:Space}} for å gå tilbake til {{ui:Velg}}, og klikk deretter på toppen av boksen. {{ui:Elementinfo}} til høyre viser arealet.

:::tip
Du kan også dra i stedet for å klikke to ganger: trykk på det første hjørnet, dra og slipp på det andre. Begge måter fungerer for alle tegneverktøy.
:::

## Se deg rundt

- **Orbit:** dra med midtre museknapp (hjulet), eller trykk {{key:O}} og dra med venstre knapp.
- **Panorer:** dra med høyre knapp, eller med midtre knapp mens du holder {{key:Shift}}.
- **Zoom:** drei hjulet. Det zoomer mot det som er under pekeren.
- **Se alt:** trykk {{key:Shift+Z}}, eller klikk {{ui:Utstrekning}}.

På en pekeplate eller en berøringsskjerm er bevegelsene annerledes. Se [Orbit, panorering og zoom](topic:orbit-pan-zoom).

## Angre

Trykk {{key:Mod+Z}} for å angre og {{key:Mod+Y}} for å gjøre om, eller bruk {{ui:Angre}} og {{ui:Gjør om}} i verktøylinjen. ModelCraft husker de siste 200 stegene mens modellen er åpen. Historikken lagres ikke i filen.

## Lagre modellen din

1. Klikk {{ui:Lagre}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+S}}.
2. Nettleseren laster ned en fil oppkalt etter modellen din, for eksempel `Untitled.modelcraft`. Statuslinjen sier hvor den havnet: «Untitled.modelcraft er lagret i nedlastingene dine.»

**Å lagre er en nedlasting.** Hver lagring lager en ny kopi i nedlastingsmappen din; den overskriver ikke filen du åpnet. For å holde prosjektmappen ryddig flytter eller gir du filen nytt navn selv der. [Åpne, lagre, importere og eksportere](topic:files) forklarer hvorfor og hva annet du kan gjøre.

:::warning
ModelCraft lagrer ikke av seg selv. Hvis du lukker fanen med ulagrede endringer, spør nettleseren først («Forlate nettstedet?»). Velg å bli, og lagre deretter.
:::

## Få hjelp

Trykk {{key:F1}} eller klikk {{ui:Hjelp}} i applinjen for å åpne denne hjelpen ved siden av modellen. Den fungerer uten tilkobling. Trykk {{key:F1}} igjen, eller {{key:Esc}} inne i hjelpen, for å lukke den. Se [Bruke denne hjelpen](common:help).

## Hvor du går videre

- [Tegn flater med linjer, rektangler og sirkler](topic:draw-faces)
- [Trykk og trekk flater til volumlegemer](topic:push-pull)
- [Skriv nøyaktige størrelser i verdiboksen](topic:value-box)
- [Alle taster og museaksjoner](topic:keyboard)
