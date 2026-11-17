---
title: Tegn flater med linjer, rektangler, sirkler og buer
summary: Lag flate flater på bakken eller på andre flater, del dem med linjer, og tegn sirkler og mangekanter med det antallet sider du vil ha.
keywords: tegn, linje, rektangel, sirkel, mangekant, forskyv, ramme, kant, bue, kurve, spline, glatt, kabel, bane, bule, radius, flate, plantegning, fotavtrykk, del, sider, segmenter, omriss, blyant
from: b6d7b7dd
---

Alt i ModelCraft begynner som en flat **flate**: en overflate lukket av kanter. Du kan tegne en flate direkte med {{ui:Rektangel}}, {{ui:Sirkel}} eller {{ui:Mangekant}}, eller tegne omrisset én kant om gangen med {{ui:Linje}}. Flater er det [Trykk/trekk](topic:push-pull) gjør om til volumlegemer.

## Tegn et rektangel

1. Trykk {{key:R}}.
2. Klikk første hjørne: på bakken, eller på en hvilken som helst flate i modellen.
3. Flytt pekeren. Rektangelet blir liggende på bakken (eller på flaten du startet på), og verdiboksen ({{ui:Måltilsettinger}}) viser bredden og dybden. Tipset sier «Kvadrat» når sidene er like.

   For å tegne på et annet plan, pek på det: en flate som går gjennom første hjørne, legger rektangelet på den flaten. Når du fester til et punkt utenfor planet (et endepunkt, en kant eller den blå aksen), reises rektangelet opp gjennom begge hjørnene. Fest tilbake til et punkt på det første planet, og det legger seg flatt igjen. For å beholde ett plan, trykk en piltast: {{key:Up}} holder rektangelet vannrett (det blå planet), {{key:Right}} på det røde planet, {{key:Left}} på det grønne planet. Trykk samme tast igjen for å låse opp.
4. Klikk motsatt hjørne, eller skriv de to størrelsene med komma mellom og trykk {{key:Enter}}: `4m,3m`, `4000,3000` i en modell i millimeter, eller `12',10'6"` i fot og tommer.

   En flate vises med fire kanter rundt seg.

De skrevne størrelsene går i retningen du pekte: er pekeren til venstre for første hjørne når du skriver, vokser rektangelet mot venstre.

:::warning
Kommaet skiller de to størrelsene, så det kan ikke være desimaltegn. Skriv `2.5m,3m`, aldri `2,5m`.
:::

## Tegn en sirkel eller en mangekant

1. Trykk {{key:C}} for en sirkel eller {{key:N}} for en mangekant.
2. For å endre antall sider, skriv det før du klikker: `12s` (eller bare `12`) og {{key:Enter}}. En sirkel starter med 24 sider og en mangekant med 6. Tipset viser gjeldende antall, og ModelCraft beholder det til neste sirkel til du endrer det eller bytter verktøy.
3. Klikk sentrum, på bakken eller på en flate. For å sentrere den på en flate, pek på flatens midte («Sentrum av flate») eller på midten av en av kantene («Midtpunkt») med pekeren rett innenfor den flaten: sirkelen tegnes på den flaten, selv på den smale enden av en lang boks.
4. Klikk for å sette radiusen, eller skriv den ({{ui:Radius}} i verdiboksen) og trykk {{key:Enter}}.

En sirkel er en mangekant med mange sider. Når du trekker en sirkel opp med [Trykk/trekk](topic:push-pull), blir sidene myke, slik at sylinderen leses som én glatt overflate.

## Tegn en bue

1. Trykk {{key:A}} ({{ui:Bue}}).
2. Klikk der buen starter, og deretter der den slutter (eller skriv lengden mellom dem).
3. Flytt pekeren for å bule buen ut, og klikk. Tipset sier «Halvsirkel» når bulen er halvparten av avstanden mellom endene. Eller skriv hvor langt midten står ut: `2` og {{key:Enter}}.

For å tegne en bue rundt et punkt i stedet, bruk {{ui:Bue fra sentrum}}: klikk sentrum, deretter der buen starter (eller skriv radiusen), og deretter der den slutter (eller skriv vinkelen i grader, for eksempel `90`). Den fester seg i 15°-trinn.

En bue som startes på en flate, tegnes på den flaten; ellers ligger den på bakken, eller reises opp når endene er i ulik høyde. En bue har 12 segmenter; skriv `24s` mens du tegner for flere. Buer lukker flater akkurat som linjer gjør: en bue over hjørnet på et rektangel deler det.

## Tegn en glatt kurve

{{ui:Kurve}} tegner en glatt linje som går gjennom hvert punkt du klikker: en kabel, et rekkverks bane, en hagekant. Den kan forlate bakken: punkter fester seg til hjørner, kanter og flater hvor som helst, og piltastene låser rødt, grønt eller blått som med {{ui:Linje}}.

1. Klikk {{ui:Kurve}} i gruppen {{ui:Tegn}}.
2. Klikk punktene kurven går gjennom. Skriv `<0,0,1>` og {{key:Enter}} for et punkt 1 over det siste, `[x,y,z]` for et eksakt sted, eller en lengde for et punkt så langt i retning av pekeren.
3. Trykk {{key:Enter}} eller dobbeltklikk for å avslutte. Klikk det første punktet igjen for å lukke kurven. {{key:Backspace}} tar tilbake det siste punktet.

En kurve velges som én enhet. For å endre den, velg den og klikk {{ui:Rediger punkter}} i {{ui:Elementinfo}}: punktene vises som firkanter. Klikk ett, og klikk deretter der det skal gå (eller skriv `<dx,dy,dz>`). {{key:Esc}} setter et punkt tilbake og avslutter redigeringen. En lukket, flat kurve blir til en flate; en kurve som lager omrisset av en flate, kan ikke redigeres lenger.

## Forskyv: en kant inne i eller utenfor en flate

{{ui:Forskyv}} kopierer omrisset av en flate et bestemt stykke innover (eller utover), til en ramme, en kant, en vindusbenk eller glasset i en skjerm.

1. Trykk {{key:F}} og klikk flaten, eller velg flaten først og trykk deretter {{key:F}}.
2. Flytt pekeren inn i flaten for et indre omriss, eller ut av den for et ytre. Det nye omrisset følger, og tipset sier hvor langt.
3. Klikk, eller skriv avstanden og trykk {{key:Enter}}.

Flaten deles i to: den indre flaten og en ramme rundt den (eller en ny ring utenfor). Trykk eller trekk én av dem med en gang: for en skjerm, tegn boksen, dra den til tykkelsen, forskyv frontflaten 30 mm innover, og dra den indre flaten litt inn for glasset. Hull i flaten forskyves også, og en bue eller sirkel forblir én (mindre eller større) kurve.

- **Dobbeltklikk** en flate med {{ui:Forskyv}} for å forskyve den med siste avstand igjen.
- **Kanter:** velg en kjede av sammenhengende kanter i ett plan (for eksempel de to linjene i en L), trykk {{key:F}}, flytt til siden du vil ha, og skriv avstanden: en parallell kopi tegnes, med gjærede hjørner.
- Når avstanden er større enn flaten tillater, sier ModelCraft fra og tegner ingenting.

## Buer, sirkler og mangekanter er kurver

Klikk et hvilket som helst segment av en bue, en sirkel eller en mangekant, og hele kurven velges. {{ui:Elementinfo}} viser da radiusen, segmentene, vinkelen (for buer) og lengden. Skriv en ny radius der for å endre størrelsen rundt sentrum; flater tegnet i samme plan følger. Når flaten til en kurve er blitt trykket eller trukket, forblir radiusen som den er.

## Tegn med linjer

1. Trykk {{key:L}}.
2. Klikk der linjen starter.
3. Klikk der den slutter, eller skriv en lengde og trykk {{key:Enter}}. Den skrevne lengden går i retningen pekeren viser.
4. Fortsett å klikke. Hvert klikk starter neste linje fra enden av den forrige.
5. Lukk omrisset ved å klikke det første punktet igjen. Når linjene lukker en flat sløyfe, fylles den med en flate, og verktøyet slutter å kjede. Trykk {{key:Esc}} for å stoppe når som helst.

Linjer følger de røde, grønne og blå retningene når du kommer nær dem; linjen får den fargen, og tipset sier «På rød akse». Se [Inferens og fangst](topic:inference) for hvordan du låser en retning og fester til punkter.

### Hvor en linje går når den ikke berører noe

- En linje som starter på en flate, blir i flatens plan.
- En linje som starter på bakken, eller i tomt rom, holdes vannrett med startpunktet. Ser du modellen rett fra siden, går den i stedet i det vertikale planet som vender mot deg.
- For å tegne en linje til et eksakt sted, skriv et punkt: `[x,y,z]` for et punkt i modellen, eller `<dx,dy,dz>` for en forskyvning fra startpunktet. Se [Skriv inn nøyaktige størrelser](topic:value-box).

## Del en flate

Tegn en linje over en flate, fra en kant til en annen (eller fra kant til kant via andre linjer). Flaten deles i to flater. Hver beholder sin side og sin farge. Det samme gjelder med et rektangel eller en sirkel tegnet på en flate: formen blir sin egen flate inne i den større, som nå har et hull.

Slik legger du ut rom på et gulvdekke, et vindu i en vegg, eller et trinn i en trapp: tegn omrisset på flaten, og trykk eller trekk deretter den nye flaten.

## Flater som vender feil vei

Hver flate har en forside og en bakside. Baksiden vises blågrå. Flater tegnet på bakken vender opp; flater tegnet på en annen flate vender likt med den.

Hvis en flate viser baksiden der du forventer forsiden, velg den og klikk {{ui:Snu flaten}} i {{ui:Elementinfo}}.

## Det du ser mens du tegner

- En farget markør der pekeren fester seg, og navnet på den i tipset nederst til venstre.
- En forhåndsvisning av linjen eller formen.
- Den levende størrelsen i verdiboksen. Du kan skrive over den når som helst.

## Hvis formen ikke er der du forventet

- På en berøringsskjerm, se [Feilsøking](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Hvis en linje festet seg til noe langt bak, roter visningen litt: punkter skjult bak en flate fester seg aldri, men punkter på kanten av den gjør det.
- Trykk {{key:Mod+Z}} for å angre siste form; ett angrepunkt fjerner én linje eller én form.
