---
title: Roter og skaler
summary: Snu ting om et punkt ved å klikke eller ved å skrive grader, og endre størrelsen jevnt med en faktor.
keywords: skaleringshåndtak, strekk, ikke-jevn, per akse, speil, speilvendt, speilkopi, speil langs, roter, snu, vinkel, grader, vinkelmåler, skaler, endre størrelse, forstørr, krymp, faktor, jevn skalering
from: 45cdcb49
---

## Roter

{{ui:Roter}} ({{key:Q}}) snur utvalget om et sentrumspunkt. Det tar tre klikk: sentrum, en startretning og sluttretningen.

1. Velg det du vil snu. Hvis ingenting er valgt, tar Roter det du klikker på først.
2. Trykk {{key:Q}}. En ring følger pekeren og viser planet du vil snu i.
3. Klikk på rotasjonens sentrum.
   - På bakken eller i tomt rom ligger ringen flatt (blå): snuingen skjer om en vertikal akse, som når du snur en bygning på tomten.
   - På en flate ligger ringen i den flatens plan: snuingen skjer om flatens egen retning. Klikk på en vegg for å snu noe om en horisontal akse.
4. Klikk på et punkt som angir hvor vinkelen starter, for eksempel langs en kant på det du snur.
5. Flytt pekeren rundt sentrum. Vinkelen vises i spissen og i verdiboksen ({{ui:Vinkel}}). Den klikker i trinn på 15° når du kommer nær et.
6. Klikk for å fullføre, eller skriv vinkelen i grader og trykk {{key:Enter}}: `90`, `45`, `-30`.

   Positive vinkler snur mot klokken, sett fra siden ringen vender mot.

Trykk {{key:Ctrl}} (eller {{key:Alt}}) mens du roterer for å snu en **kopi** og la originalen stå der den er, slik som med Flytt; spissen viser om kopiering er på, og et nytt trykk på tasten slår det av. Skriv `3x` rett etter en rotert kopi for flere kopier rundt samme sentrum.

Som Flytt vrir rotasjon av en del av sammenhengende geometri flatene som er festet til den. Grupper først for å snu alt under ett.

:::note
Hintteksten sier at piltastene velger rotasjonsaksen, men i denne versjonen roterer de visningen i stedet før første klikk. For å velge aksen, klikk på sentrum på en flate som vender slik du vil. Se [Ikke bygget ennå](topic:not-built-yet).
:::

## Skaler

{{ui:Skaler}} ({{key:S}}) endrer størrelsen på utvalget. Velg det du vil endre størrelsen på først, og trykk deretter {{key:S}}: små firkanter (håndtak) vises på hjørnene, kantene og midtpunktene på sidene av boksen.

### Strekk eller skaler med håndtakene

- Et **hjørnehåndtak** skalerer jevnt i alle retninger, om det motsatte hjørnet.
- Håndtaket på midten av en **side** strekker langs den retningen alene, om motsatt side: gjør en boks lengre uten å gjøre den høyere.
- Håndtaket på midten av en **boksekant** strekker i de to retningene på tvers av den.
- Hold {{key:Ctrl}} når du klikker på et håndtak for å skalere om midten av boksen i stedet.

Klikk på et håndtak, flytt pekeren og klikk igjen; eller klikk på håndtaket og skriv en faktor (`2` dobler, `0.5` halverer) og trykk {{key:Enter}}. For at hver retning skal få sin egen faktor, skriv tre, for rød, grønn og blå: `2,1,0.5`. Inne i en åpen gruppe er retningene gruppens egne.

### Skaler om et hvilket som helst punkt

Klikk et annet sted enn på et håndtak for å skalere jevnt om et punkt du velger selv. Det tar tre klikk:

1. Velg det du vil endre størrelsen på. Hvis ingenting er valgt, tar Skaler det du klikker på først.
2. Trykk {{key:S}}.
3. Klikk på punktet som blir stående (ikke på et håndtak), for eksempel et nedre hjørne.
4. Klikk på et referansepunkt. Avstanden fra det første punktet regnes som 1×.
5. Flytt pekeren mot eller bort fra det første punktet. Faktoren vises i spissen og i verdiboksen ({{ui:Skaler}}).
6. Klikk for å fullføre, eller skriv en faktor og trykk {{key:Enter}}: `2` dobler størrelsen, `0.5` halverer den.

### Skaler til en nøyaktig størrelse

For å gjøre noe til en nøyaktig lengde, regn ut faktoren: ny lengde delt på nåværende lengde. I modusen med tre klikk regner verdiboksen, så skriv `4.2/3.6` for å gjøre en 3.6 m vegg 4.2 m lang. Et håndtaks verdiboks tar bare vanlige tall: regn ut faktoren først (4.2 delt på 3.6 er omtrent 1.1667). Velg kanten først for å lese dens nåværende lengde i {{ui:Elementinfo}}.

### Rett en import som kom inn i feil størrelse

OBJ-filer har ingen enhet, så en modell tegnet i millimeter kommer inn 1000 ganger for stor. Velg den importerte gruppen, trykk {{key:S}}, klikk på et hjørnehåndtak, og skriv `0.001` og trykk {{key:Enter}}. For en modell tegnet i tommer, skriv `0.0254`.

## Ting å vite

- Skalering om et punkt med de tre klikkene er jevn. For å strekke i bare én retning, bruk et side- eller kanthåndtak (se over).
- Skalering av en gruppe eller komponent endrer kopien du skalerte; andre kopier av en komponent beholder sin størrelse.
- Trykk {{key:Esc}} før det siste klikket for å avbryte.

## Speil

{{ui:Rediger}} › {{ui:Mer}} › {{ui:Speil langs rød}}, {{ui:Speil langs grønn}} eller {{ui:Speil langs blå}} speiler utvalget på stedet, gjennom midten av boksen: en venstrevendt trapp blir en høyrevendt. Flatene beholder retningen utover, og en gruppe eller komponent speiles som helhet (innsiden blir ikke skrevet om).

{{ui:Speilet kopi langs rød}} (og grønn, blå) lar originalen stå der den er og legger en speilvendt kopi ved siden av den, over den andre siden av utvalgets boks: den andre døren i et par, den andre fløyen på en bygning. Løs geometri som berører der, blir med originalen, slik berørende geometri alltid gjør; gjør originalen til en gruppe først for å holde dem adskilt.

Inne i en åpen gruppe er rød, grønn og blå gruppens egne akser.
