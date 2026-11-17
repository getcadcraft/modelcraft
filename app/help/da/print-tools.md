---
title: Understøtninger, vægtykkelse, udhulning og reparation
summary: Se, hvor en print har brug for understøtninger, og cirka hvor meget, find vægge, der er for tynde til at printe, udhul en del med afløbshuller til en valgt vægtykkelse, og reparér et net med alle rettelser på listen.
keywords: 3D-print, understøtninger, understøtningsforhåndsvisning, overhæng, træunderstøtninger, søjleunderstøtninger, vægtykkelse, tynde vægge, for tynd, dyse, udhul, udhulning, skal, afløbshul, harpiks, reparér, ret net, ikke-manifold, vendte flader, huller, små skaller, selvskæring, overlap, sammenføj
from: 286bde26
---

Fire værktøjer til at gøre en model klar til en 3D-printer. Åbn {{ui:Eksportér}} › {{ui:Kontrollér til 3D-print (STL eller 3MF)…}}; dialogens linje **Printværktøjer** har {{ui:Forhåndsvisning af støtte}}, {{ui:Vægtykkelse}}, {{ui:Udhul}} og {{ui:Reparér}}. Hvert åbner som et kort over visningen; {{ui:Luk}} (krydset) tager det og dets markeringer væk. Ét kort vises ad gangen.

Hvert værktøj virker på det, der printes: markeringen, eller alt det, der vises, når intet er markeret. {{ui:Udhul}} og {{ui:Reparér}} kræver én markeret gruppe, komponent eller et net, fordi de ændrer den.

## Forhåndsvisning af støtte

Flader, der hælder mere ud end **overhængsvinklen** fra lodret, farves røde, og simple understøtninger tegnes fra dem (orange) ned til printbedet, eller til den del af modellen under dem.

- **Overhængsvinkel**: 45° er det, de fleste printere klarer uden understøtning. Hæv den for en printer, der bygger broer godt.
- **Søjler**: en lige søjle hver 3 mm under hvert overhæng. Estimatet tæller dem som et 15% understøtningsmønster.
- **Træ**: nærliggende punkter forener sig i én stamme under deres midte; ingen gren hælder mere end 45°. Træer bruger som regel mindre materiale og rører bedet et færre antal steder.

Kortet siger, hvor meget overflade der har brug for understøtning, hvor mange understøtningspunkter der er, og cirka hvor meget materiale de tager. Understøtninger, der står på modellen (ikke på bedet), tælles med, for de efterlader mærker dér. Når et printbed er valgt i {{ui:Indstillinger}}, tegnes bedet under modellen.

:::note
Dette er en forhåndsvisning, ikke en slicer: din slicer afgør de rigtige understøtninger. Ved et meget stort overhæng spredes understøtningspunkterne længere, så forhåndsvisningen forbliver hurtig; kortet siger det.
:::

## Vægtykkelse

Hver flade måles lige igennem legemet til den anden side. Vægge under **tyndeste væg, der tillades** er røde, og vægge under halvanden gang den er orange: de printes, men kan blive svage.

De tynde områder listes, tyndest først, med hvor tynde og hvor store hver er. {{ui:Vis}} drejer kameraet hen til det.

En printer kan ikke lave en væg tyndere end cirka to gange sin dyses bredde: 0.8 mm for den almindelige 0.4 mm dyse (startværdien). Harpiksprintere klarer mindre; se din printers vejledning.

På en meget stor model sender kun nogle flader en stråle, og de andre tager deres naboers tykkelse. Kortet siger, hvor mange der blev målt.

## Udhul

Udhulning bevarer ydersiden, som den er, og fjerner indersiden og efterlader vægge så tykke, som du beder om. Harpiksprint bruger mindre harpiks og trækker mindre i byggepladen; filamentprint bruger mindre plastik, end infill ville.

1. Markér gruppen, komponenten eller nettet, og åbn {{ui:Udhul}}.
2. Angiv **væggen** (2 mm til at starte med) og hvor brede **afløbshullerne** er.
3. Ved et harpiksprint klikker du {{ui:Placér et afløbshul}} og klikker derefter på modellens ydre, hvor det skal være: lavt nede, nær byggepladen, så den flydende harpiks løber ud. Placér så mange, du har brug for; hvert vises som en blå cirkel og listes med {{ui:Fjern}}.
4. {{ui:Forhåndsvisning}} siger, hvor meget udhulningen fjerner.
5. {{ui:Udhul den}} laver ændringen: ét trin, som {{key:Mod+Z}} fortryder.

Resultatet er ét lukket legeme, som 3D-printkontrollen accepterer: ModelCraft kontrollerer det først og ændrer intet, hvis det ikke ville bestå. Hvor modellen er tyndere end to vægge, forbliver den massiv. Resultatet er en gruppe, hvis flade sider er enkelte flader, så du kan blive ved med at modellere den med {{ui:Skub/træk}}. En buet del, der udhules på det fine gitter, har som regel for mange flader til det og bliver i stedet et net; statuslinjen siger, hvilken type det er.

:::tip
For de fleste former er indersiden ydersiden flyttet ind præcis med væggens tykkelse. Hvor hjørner eller tynde dele gør det umuligt, følger ModelCraft i stedet ydersiden i væggens afstand på et fint gitter; kortet siger så, hvor tæt det er (inden for en brøkdel af en millimeter).
:::

## Reparér

{{ui:Reparér}} undersøger den markerede del, som en printers slicer ville, retter det, der kan rettes sikkert, og lister hver rettelse:

| Den retter | Hvad det betyder |
|---|---|
| Trekanter uden areal | fjernes |
| En trekant tegnet to gange | én kopi beholdes; en flade tegnet bag ved sig selv (uden tykkelse) fjernes |
| Løse stykker under 0.5 mm | fjernes |
| Trekanter, der vender den forkerte vej | vendes, så de passer til deres naboer |
| Huller, flade eller ej | lukkes med en vifte af nye trekanter fra hvert huls midte |
| Et stykke vendt forkert | vendes udad (et hulrum inde i et andet stykke efterlades, som det er: det skal vende indad) |

{{ui:Ret de sikre}} laver dem alle i ét trin, som {{key:Mod+Z}} fortryder, og statuslinjen lister hver rettelse. Den rettede del bliver en gruppe, hvis flade sider er enkelte flader. Hvis den stadig ikke lukker (noget under **Overladt til dig** er tilbage), eller den ville få for mange flader til en gruppe, bliver den i stedet et net: dens flader forbliver trekanter, og flade sider ser stadig flade ud. Statuslinjen siger, hvilken type det er. {{ui:Sammenføj overlappende dele}} virker på samme måde.

Det, der ikke kan rettes sikkert, listes under **Overladt til dig** og markeres i lilla i visningen, med {{ui:Vis}}:

- **Kanter, hvor tre eller flere flader mødes**: afgør, hvilken flade der hører til, og slet de andre.
- **Et stykke, der går gennem sig selv**: flyt eller tegn den del igen. Se [Skær flader sammen](topic:intersect).
- **Huller for store eller for indviklede til at lukke**: tegn flader hen over dem.
- **Adskilte stykker, der overlapper**: slicere sammenfletter dem alligevel. {{ui:Sammenføj overlappende dele}} gør dem til ét lukket legeme. Den genopbygger fladerne, hvor de mødes, så det er en separat knap, der aldrig køres for dig.

For {{ui:Skub/træk}}-grupper kan du også rette én ad gangen i {{ui:Objektinfo}} › {{ui:Vis problemer}} / {{ui:Ret}}, som beholder de flader, du tegnede. Se [Massivværktøjer](topic:solids).

Relateret: [Gør en model klar til 3D-print](topic:print-3d) · [Begynderstilen](topic:beginner) · [Endnu ikke bygget](topic:not-built-yet#3d-printing)
