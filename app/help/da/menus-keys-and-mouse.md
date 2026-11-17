---
title: Menuer, taster og mus
summary: Vælg en menustil, der passer til den modellering, du allerede kender, giv en hvilken som helst kommando din egen tast, flyt kommandoer mellem menuer, og bestem hvad hjulet og de midterste og højre museknapper gør.
keywords: menustil, menuer, menulinje, værktøjslinje, tastaturgenveje, hurtigtaster, taster, tastestil, tastekort, tilpas, omlæg, mus, hjul, vend, zoomretning, midterknap, højreknap, kredsløb, panorér, eksportér, importér, skift, bekendt, skub træk, modellør
from: e56fce3d
---

ModelCraft's værktøjer er de samme, uanset hvordan du når dem. En **menustil** bestemmer, hvor de sidder på skærmen, hvad de hedder dér, og hvilke taster der kører dem. Vælg en under {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menuer, taster og mus}}. Ændringen træder i kraft med det samme, og denne browser husker den.

## Stilene

| Stil | Hvad du får |
|---|---|
| {{ui:ModelCraft}} | ModelCrafts egen værktøjslinje (File, Draw, Modify, Organize, Edit, Camera) og dens enkeltbogstavstaster: {{key:L}} linje, {{key:R}} rektangel, {{key:P}} skub/træk, {{key:M}} flyt, {{key:Q}} roter, {{key:S}} skalér, {{key:E}} viskelæder, {{key:O}} kredsløb. Udgangspunktet. |
| {{ui:Skub/træk}} | En menulinje (File, Edit, View, Camera, Draw, Tools, Window) over en række hovedværktøjer med de samme enkeltbogstavstaster. |
| {{ui:Modellør}} | En menulinje i hovedet (File, Edit, View, Select, Add, Object, Mesh) og tasterne til net-modellører: {{key:W}} vælg, {{key:G}} grib, {{key:R}} roter og {{key:S}} skalér valget på én gang ({{key:X}}, {{key:Y}} eller {{key:Z}} låser en akse, mens den flyttes), {{key:E}} skub/træk, {{key:B}} rektangel, {{key:X}} slet, {{key:A}} vælg alle, {{key:Alt+A}} ingen, {{key:Shift+D}} duplikér, {{key:Mod+G}} gruppe, {{key:H}} skjul. Midterknappen kredser; {{key:Shift}} og midterknappen panorerer, {{key:Mod}} og midterknappen zoomer; højreknappen annullerer det, et værktøj laver. |
| {{ui:Begynder}} | Et bånd, hvis fane {{ui:Lav}} er nogle få store knapper: figurer at slippe, huller, flyt, drej og skalér, justér, {{ui:Gruppe}} (huller skåret i figurerne) og kontrollen til 3D-print; alle andre værktøjer ligger på fanen {{ui:Flere værktøjer}}. Højreknappen kredser, midterknappen panorerer. Se [Begynder-stilen](topic:beginner). |

Tastestilen, du måske kender fra {{ui:Taster}} nederst til højre i visningen og fra {{ui:Rediger}} › {{ui:Mere}}, er det samme valg: vælger du modellør-tasterne dér, vælges stilen {{ui:Modellør}}, og vælger du skub/træk-tasterne, forlader du den og går til stilen {{ui:ModelCraft}}. Havde du valgt modellør-tasterne i en ældre version, åbner ModelCraft af sig selv én gang i stilen {{ui:Modellør}}.

:::tip
En tast, der hører til skub/træk-tasterne, men som din stil giver en anden kommando, gør ingenting, og statuslinjen siger, hvor dens kommando er gået hen ("I Modellør er Skub/træk E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piletasterne beholder altid deres betydning, tal går altid til værdifeltet, og mens et værktøj flytter noget, vinder dets egne taster.
:::

## Gør den til din egen

1. Vælg stilen tættest på det, du ønsker, og klik derefter på {{ui:Tilpas…}}.
2. På {{ui:Taster og menuer}} finder du en kommando (søgefeltet hjælper). {{ui:Tilføj en tast}} og tryk på tasten. Klik på en tast for at fjerne den.
3. Med en menulinje flytter {{ui:Hvor den sidder}} kommandoen til en anden menu eller til {{ui:Kun taster}}.
4. På {{ui:Mus}} indstiller du hjulet, og hvad knapperne gør i 3D-visningen.
5. Giv den et navn, og klik på {{ui:Gem}}.

Gemmer du en indbygget stil, laver du din egen kopi ("Min Modellør"); den indbyggede ændres aldrig. Din kopi læser tasterne, som stilen den startede fra gør: en kopi lavet ud fra {{ui:Modellør}} beholder grib-, roter- og skalér-tasterne, der virker på én gang.

## Mus

- **Musehjul**: {{ui:Rul op zoomer ind}} (udgangspunktet) eller {{ui:Rul op zoomer ud}}, og hvor hurtigt. Et knib på touchpad zoomer altid i den retning, fingrene bevæger sig.
- **Træk i 3D-visningen**: {{ui:Hver visning for sig}} beholder ModelCraft's egne knapper (midterknappen kredser, højreknappen eller {{key:Shift}} og midterknappen panorerer). Eller du sætter midter- og højreknappen til at kredse, panorere, zoome eller ingenting; {{key:Shift}} med knappen bytter kredsning og panorering. Venstreknappen hører altid til det værktøj, der er i brug.
- **Touchpads**: {{ui:Indstillinger}} › {{ui:ModelCraft}} › {{ui:Rulning}} afgør stadig, om to fingre kredser (touchpad) eller zoomer (mus). Se [Kredsning, panorering og zoom](topic:orbit-pan-zoom).

## Tag den med dig

{{ui:Eksportér}} gemmer den stil, der er i brug, som en lille `.ccinput.json`-fil; {{ui:Importér…}} tilføjer en, fra en anden computer eller fra en kollega. En importeret fil kan kun pege på ModelCrafts egne kommandoer: alt andet i den udelades og tælles i statuslinjen. {{ui:Slet denne stil}} fjerner en af dine egne.

:::note
Disse indstillinger bliver i denne browser. {{ui:Brug denne stil i alle apps}} under stilkortene får alle apps til at åbne i deres tilsvarende stil: {{ui:Skub/træk}} hører sammen med de andre apps' menulinjestile. {{ui:Modellør}} har ingen modstykke i de andre apps, så den forbliver et ModelCraft-valg.
:::

Relateret: [Taster og museaktioner](topic:keyboard) · [ModelCraft-indstillinger](topic:settings) · [Kommer fra andre modellører](topic:coming-from)
