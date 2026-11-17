---
title: Støtter, veggtykkelse, utholing og reparasjon
summary: Se hvor en utskrift trenger støtter og omtrent hvor mye, finn vegger som er for tynne til å skrives ut, hul ut en del til en veggtykkelse med avløpshull, og reparer en nettflate med hver reparasjon listet.
keywords: 3D-utskrift, støtter, forhåndsvisning av støtter, overheng, trestøtter, kolonnestøtter, veggtykkelse, tynne vegger, for tynn, dyse, hul ut, utholing, skall, avløpshull, harpiks, reparer, rett opp nett, ikke-mangfoldig, vendte flater, hull, små skall, selvskjæring, overlapp, slå sammen
from: 286bde26
---

Fire verktøy for å gjøre en modell klar for en 3D-skriver. Åpne {{ui:Eksporter}} › {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}; dialogens linje **Utskriftsverktøy** har {{ui:Forhåndsvisning av støtte}}, {{ui:Veggtykkelse}}, {{ui:Hul ut}} og {{ui:Reparer}}. Hvert åpnes som et kort over visningen; {{ui:Lukk}} (krysset) lukker det og merkene det har. Ett kort vises om gangen.

Hvert verktøy virker på det som skal skrives ut: utvalget, eller alt som vises når ingenting er valgt. {{ui:Hul ut}} og {{ui:Reparer}} krever at én gruppe, komponent eller nettflate er valgt, fordi de endrer den.

## Forhåndsvisning av støtter

Flatene som heller utover mer enn **overhengsvinkelen** fra loddrett er skravert røde, og enkle støtter tegnes fra dem (oransje) ned til byggplaten, eller til den delen av modellen som er under dem.

- **Overhengsvinkel**: 45° er det de fleste skrivere klarer uten støtte. Øk den for en skriver som bygger broer godt.
- **Kolonner**: en rett kolonne hver 3. mm under hvert overheng. Anslaget regner dem som et støttemønster på 15 %.
- **Tre**: nærliggende punkter går sammen i én stamme under midten deres; ingen gren heller mer enn 45°. Trær bruker vanligvis mindre materiale og berører byggplaten på færre steder.

Kortet sier hvor mye flate som trenger støtte, hvor mange støttepunkter det er, og omtrent hvor mye materiale de tar. Støtter som står på modellen (ikke på byggplaten) telles: de etterlater merker der. Når en byggplate er valgt under {{ui:Innstillinger}}, tegnes byggplaten under modellen.

:::note
Dette er en forhåndsvisning, ikke en slicer: slicer-programmet ditt avgjør de faktiske støttene. Ved et svært stort overheng spres støttepunktene lenger fra hverandre, slik at forhåndsvisningen holder seg rask; kortet sier fra om det.
:::

## Veggtykkelse

Hver flate måles rett gjennom volumlegemet til den andre siden. Vegger under **tynneste vegg som tillates** er røde, og vegger under halvannen gang den er oransje: de skrives ut, men kan bli svake.

De tynne områdene listes, tynnest først, med hvor tynne og hvor store de er. {{ui:Vis}} vender kameraet mot dem.

En skriver kan ikke lage en vegg tynnere enn omtrent to bredder av dysen sin: 0,8 mm for den vanlige 0,4 mm dysen (utgangspunktet). Harpiksskrivere klarer mindre; se veiledningen for skriveren din.

På en svært stor modell er det bare noen flater som sender ut en stråle, og de andre tar tykkelsen til naboene; kortet sier hvor mange som ble målt.

## Hul ut

Utholing beholder utsiden slik den er og tar ut innsiden, og etterlater vegger så tykke du ber om. Harpiksutskrifter bruker mindre harpiks og drar mindre i byggplaten; filamentutskrifter bruker mindre plast enn fyll ville gjort.

1. Velg gruppen, komponenten eller nettflaten, og åpne {{ui:Hul ut}}.
2. Angi **veggen** (2 mm til å begynne med) og hvor brede **avløpshullene** skal være.
3. For en harpiksutskrift klikker du {{ui:Plasser et avløpshull}}, og deretter på modellens utside der det skal være: lavt, nær byggplaten, slik at den flytende harpiksen renner ut. Plasser så mange du trenger; hver vises som en blå sirkel og listes med {{ui:Fjern}}.
4. {{ui:Forhåndsvisning}} sier hvor mye utholingen tar ut.
5. {{ui:Hul den ut}} gjør endringen: ett steg som {{key:Mod+Z}} angrer.

Resultatet er ett lukket volumlegeme som utskriftskontrollen for 3D godtar: ModelCraft kontrollerer det først og endrer ingenting hvis det ikke ville bestått. Der modellen er tynnere enn to vegger, forblir den massiv. Resultatet er en gruppe der de flate sidene er enkeltflater, slik at du kan fortsette å modellere den med {{ui:Trykk/trekk}}; en buet del som er hult ut på det fine rutenettet har vanligvis for mange flater til det, og blir i stedet et nett, og statuslinjen sier hvilket.

:::tip
For de fleste former er innsiden utsiden flyttet inn med nøyaktig veggen. Der hjørner eller tynne deler gjør det umulig, følger ModelCraft utsiden i veggens avstand på et fint rutenett i stedet; kortet sier da hvor nær det er (innenfor en brøkdel av en millimeter).
:::

## Reparer

{{ui:Reparer}} ser på den valgte delen slik en skrivers slicer ville gjort, retter det som kan rettes trygt, og lister hver rettelse:

| Den retter | Hva det betyr |
|---|---|
| Trekanter uten areal | fjernes |
| En trekant tegnet to ganger | én kopi beholdes; en flate tegnet rygg mot rygg med seg selv (uten tykkelse) fjernes |
| Løse deler under 0,5 mm | fjernes |
| Trekanter som vender feil vei | snus slik at de passer med naboene |
| Hull, flate eller ikke | lukkes med en vifte av nye trekanter fra midten av hvert hull |
| En del vendt innenfra og ut | snus utover (et hulrom inne i en annen del blir stående som det er: det skal vende innover) |

{{ui:Rett opp de trygge}} gjør alle i ett steg som {{key:Mod+Z}} angrer, og statuslinjen lister hver rettelse. Den reparerte delen blir en gruppe der de flate sidene er enkeltflater. Hvis den fortsatt ikke lukker seg (noe under **Igjen til deg** står igjen), eller den ville fått for mange flater til å være en gruppe, blir den i stedet et nett: flatene forblir trekanter, og flate sider ser fortsatt flate ut. Statuslinjen sier hvilket. {{ui:Slå sammen overlappende deler}} virker på samme måte.

Det som ikke kan repareres trygt listes under **Igjen til deg** og merkes lilla i visningen, med {{ui:Vis}}:

- **Kanter der tre eller flere flater møtes**: avgjør hvilken flate som hører til, og slett de andre.
- **En del som går gjennom seg selv**: flytt eller tegn den delen på nytt. Se [Skjær flater](topic:intersect).
- **Hull som er for store eller for sammenfiltrede til å lukkes**: tegn flater over dem.
- **Separate deler som overlapper**: slicere slår dem sammen uansett. {{ui:Slå sammen overlappende deler}} gjør dem til ett lukket legeme (det bygger flatene på nytt der de møtes, så det er en egen knapp, og gjøres aldri for deg).

For grupper fra trykk/trekk kan du også rette én om gangen under {{ui:Elementinfo}} › {{ui:Vis problemer}} / {{ui:Rett opp}}, som beholder flatene du tegnet. Se [Verktøy for volumlegemer](topic:solids).

Relatert: [Gjør en modell klar for 3D-utskrift](topic:print-3d) · [Nybegynnerstilen](topic:beginner) · [Ikke bygget ennå](topic:not-built-yet#3d-printing)
