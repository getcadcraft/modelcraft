---
title: Frie overflater (NURBS)
summary: Glatte kurver og overflater for produktskall, bilkarosserier og båtskrog – loft, sveip, kurvenett, firekantlapper, blend og trim – med G0-, G1- og G2-kontinuitet målt på de eksakte overflatene, volumlegemer med forening, trekk fra og skjæring, sebra- og krumningsvisninger, flater tilpasset en skanning med målt feil, og STEP- eller IGES-filer.
keywords: nurbs, skanning, reversert konstruksjon, tilpass, nett til overflate, punktsky, stl, trim, trimmet, hull, kutt, volumlegeme, volumlegemer, boolsk, forening, trekk fra, skjæring, differanse, sy, lukket, fri form, freeform, overflate, overflater, b-spline, bspline, kurve, spline, loft, sveip, skinne, nettverk, coons, lapp, blend, tilpass, kontinuitet, g0, g1, g2, tangent, krumning, sebra, kontrollpunkter, knuter, grad, step, iges, klasse a
from: 09887405
---

Panelet **Overflater** lager glatte kurver og overflater av typen som brukes til produktskall, bilkarosserier og båtskrog: NURBS, den samme matematikken andre overflatemodellerere bruker. Alt måles på de eksakte overflatene, aldri på trekantene du ser. Størrelser i panelet er i **millimeter**, uansett hvilken enhet modellen viser.

Åpne det fra det høyre panelet: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. En modell som allerede har overflater, åpner det selv.

## Slik fungerer en kommando

1. Trykk en kommando (for eksempel **Loft**). Panelet sier hva det fortsatt trenger: punkter, kurver, en overflatekant eller en kurveende.
2. Velg dem: klikk dem i 3D-visningen, eller trykk **Velg** (eller kant- og endeknappene) ved siden av hver i listen. For en kant klikker du nær den kanten av overflaten.
3. Sjekk alternativene (grad, toleranse, kontinuitet, …) og trykk **Lag**.

Kurver fra punkter tar punktene skrevet ett per linje (`x, y, z` i mm), eller **Velg punkter i visningen**: hvert klikk bruker samme fangst som tegneverktøyene; trykk <kbd>Enter</kbd> eller dobbeltklikk for å avslutte, <kbd>Esc</kbd> for å stoppe.

## Kurver

- **Kurve gjennom punkter** går gjennom hvert punkt. **Kurve med kontrollpunkter** følger et nett av punkter i stedet.
- **Sett inn knute**, **Øk grad** og **Senk grad** endrer hvordan en kurve beskrives uten å flytte den (senking avvises når kurven ville flyttet seg mer enn toleransen). **Bygg kurve på nytt** gir den et nytt antall kontrollpunkter og sier hvor langt den flyttet seg.
- **Tilpass kurve** får enden av én kurve til å møte en annen med G0 (berøring), G1 (samme retning) eller G2 (også samme krumning). **Blend kurve** legger til en ny kurve mellom to ender.
- **Slå sammen kurver** og **Del kurve**.

## Overflater

- **Loft** gjennom to eller flere kurver, **Regelflate** mellom to, **Ekstruder kurve**, **Roter kurve**.
- **Sveip langs én skinne** fører en profil langs en bane uten å vri den; **Sveip langs to skinner** holder profilens ender på begge skinnene. Sveip tilpasses: statuslinjen sier hvor nær den holdt seg til det sanne sveipet.
- **Overflate fra et kurvenett** går gjennom et rutenett av kurver (de første valgene er profilene, resten er føringene). **Lapp fra fire kanter** fyller fire kurver som møtes i hjørnene.
- **Tilpass overflate** får en overflatekant til å møte en nabo med G0, G1 eller G2; **Blend overflate** legger til en overflate mellom to kanter.
- **Forskyv overflate**, **Utvid overflate** (overflaten fortsetter som den var på vei), **Bygg overflate på nytt**, og knuter og grad for overflater.

## Kontrollere kvaliteten

Tabellen **Delte kanter** lister hver kant to overflater deler, med gapet (mm), vinkelen mellom dem (°) og krumningshoppet (1/mm), og om det gjør den til G0, G1 eller G2. En kant som er verre enn du ba om, er også i **Problemer** (⚠-knappen i appbaren) med en **Tilpass**-løsning.

**Vis som** › **Sebrastriper** og **Krumning (Gauss)** kommer fra den eksakte overflaten: striper som går uavbrutt over en kant betyr G1; striper som også beholder bredden sin betyr G2. Krumning er blå der overflaten er et sadelpunkt, rød der den er en kuppel og hvit der den er flat. **Kontrollpunkter** tegner kontrollnettene.

G0–G2 måles i 33 punkter per kant. **G3 og «klasse A»-kvalitet måles ikke** og påstås ikke.

## Trim av en overflate

Gruppen **Trim** kutter en overflate uten å endre formen: overflaten beholder alle kontrollpunktene sine, og bare delen innenfor omrisset vises, telles og skrives. **Trim til et rektangel** og **Trim med en sirkel** arbeider på en andel (0 til 1) av overflaten i hver retning, så de trenger ingen valg i visningen; **Trim med en kurve** tar en lukket kurve som ligger på overflaten (den projiseres inn i overflaten, og avvises med ord når den er åpen eller mer enn toleransen unna). Kryss av for **Kutt et hull** for å fjerne innsiden av omrisset; la det stå av for å beholde bare innsiden. En overflate kan ha ett beholdt omriss og et hvilket som helst antall hull; et omriss som krysser et annet, avvises. **Fjern trimmen** viser hele overflaten igjen. Kuttkantene følger omrisset nøyaktig; panelets **Angre** tar tilbake en trim som et hvilket som helst annet steg.

STEP bærer trimmen som flatens grenser, og IGES som en trimmet overflate (entitet 144); begge leser den tilbake.

## Volumlegemer og boolske operasjoner

Gruppen **Volumlegemer** gjør overflater om til lukkede legemer og kombinerer dem. Et volumlegeme her er et sett av panelets egne overflater som sammen lukker et volum; flatene beholder seg som eksakte NURBS-overflater med sine trimmer.

- **Boksvolumlegeme**, **Sylindervolumlegeme** og **Kulevolumlegeme** lager ett fra skrevne størrelser (i mm): en boks med seks flate flater, en sylinder med en rund side og to flate ender trimmet til sirkelen, en kule med én rotert overflate.
- **Volumlegeme fra overflater** samler overflater du laget selv. Velg dem, eller velg ingen for å bruke alle viste overflater som ikke er i et volumlegeme ennå. De sys sammen innenfor toleransen: hvis de ikke lukker seg, endres ingenting, og panelet sier hvor mange kanter som står åpne og hvor nær de må møtes.
- **Forening**, **Trekk fra** (det andre volumlegemet tas bort fra det første) og **Skjæring** (bare det begge deler) tar to volumlegemer: klikk en flate av hver i visningen, eller trykk **Velg** i listen under **Volumlegemer**. Kryss av for **Behold de to volumlegemene** for å la dem ligge ved siden av resultatet.

En boolsk operasjon beholder hver flate på sin egen eksakte overflate og kutter den med nye trimomriss langs skjæringen. Resultatlinjen gir de målte tallene: hvor langt volumlegemeberegnerens punkter måtte flyttes for å sitte på de eksakte overflatene (aldri mer enn toleransen), hvor nær skjæringspunktene er begge overflatene (vanligvis noen få milliondeler av en millimeter), volumet, og om de nye flatene lukker seg igjen når de sys sammen på nytt fra sine eksakte overflater. Volumer måles på trekanter innenfor toleransen (0.05 mm med mindre du setter en annen), så volumet til en kule eller sylinder blir litt under det eksakte: en mindre toleranse kommer nærmere. En boolsk operasjon som ikke kan gjøres rent (volumlegemene deler ingenting, et omriss ville krysse seg selv), avvises med ord, og ingenting endres. En boolsk operasjon er ett steg i panelets **Angre**.

Under **Volumlegemer**-listen fjerner **Oppløs** flatene til vanlige overflater, og søppelkassen fjerner volumlegemet og flatene.

**Legg til i modellen** (i **Volumlegemer**-listen) legger en kopi av volumlegemet inn i modellen som én lukket gruppe, med flatene som trekanter innenfor 0.05 mm, i ett steg av modellens Angre. Det fungerer da med modellens egne **Forening**, **Trekk fra** og **Skjæring**, trykk/trekk og 3D-utskriftskontrollen; det eksakte volumlegemet blir i panelet.

## Avrunding og fortykning

**Avrunding mellom flater** runder av kanten der to flater av ett volumlegeme møtes: velg de to flatene (i visningen, eller med **Velg** i listen), skriv inn **radius** og, for en radius som endrer seg langs kanten, **radius ved enden** (0 beholder én radius). En kule med den radiusen rulles langs kanten og berører begge flatene; avrundingen er den eksakte sirkelbuen den etterlater i hvert punkt, sammenføyd til én overflate, og de to flatene trimmes der kulen berører dem. En ytre kant mister materiale, et innvendig hjørne får det. Resultatlinjen gir det som ble målt: hvor langt avrundingsflaten er fra den rullende kulen mellom punktene den ble bygget fra (punkter legges til til den er innenfor en fjerdedel av toleransen), den største vinkelen mellom avrundingen og hver flate langs berøringslinjene, og de samme tallene som en Forening. En radius som ikke passer (kulen ville forlate en flate, eller en flate krummer tettere enn radiusen), avvises med navnet på flaten, og ingenting endres.

**Avrund flere kanter** runder mange kanter i ett steg: velg de to flatene til den første kanten, deretter de to flatene til den neste, og så videre (en flate kan være i flere par, for eksempel toppflaten på en boks i fire av dem); alle kanter får radiusen du skriver inn. Hver avrunding beregnes på volumlegemet slik det var, og deretter kuttes de etter hverandre, så rekkefølgen spiller ingen rolle. Der to avrundede kanter møtes i et hjørne der de andre kantene forblir skarpe, løper de to avrundingene inn i hverandre langs skjæringskurven (en fold). Der tre avrundede ytre kanter fra tre flate flater som står vinkelrett på hverandre møtes med én radius, blir hjørnet én **kulelapp** tangent til alle tre avrundingene (fjern merket for **Hjørner** for å få det foldede hjørnet i stedet); en kant må være minst to ganger radiusen lang der begge endene er slike hjørner. Resultatlinjen sier hvor mange kanter som ble avrundet, og hvordan hjørnene ble. Indre kanter kan også avrundes samtidig, men et resultat som ikke lukker seg igjen, bare rapporteres (linjen sier det), så kontroller det.

**Fortykk til et volumlegeme** gir en overflate en tykkelse: velg den, skriv inn **tykkelsen**, og kryss av for **Andre side** for å vokse den den andre veien. Den forskjøvne flaten tilpasses overflaten og måles mot den (resultatlinjen gir den største avviket fra tykkelsen); vegger følger hver kant og hvert trimomriss. Hvis overflaten krummer tettere enn tykkelsen på den siden, eller en annen del av den ligger nærmere enn tykkelsen, avvises det med navnet på overflaten og stedet, og ingenting endres.

## Angre, filen, STEP og IGES

Panelet har sin egen **Angre** og **Gjør om** (ett steg per kommando). Overflatene lagres i `.modelcraft`-filen sammen med modellen; de er ikke en del av modellens egen angre, på samme måte som filens materialer.

**STEP…** (AP242) og **IGES…** lagrer kurvene og overflatene nøyaktig slik de er (B-spline-kurver og -overflater, ingenting gjort om til trekanter). Hver overflate er sin egen flate, med sin trim; et volumlegeme skrives som ett lukket skall, der hver kant deles av sine to flater, slik andre CAD-programmer forventer (statuslinjen sier hvor mange volumlegemer som gikk ut på den måten). I IGES er det samme volumlegemet én manifold volumlegeme-B-rep (entitet 186 over lukket skall 514, flater 510, løkker 508, én kantliste 504 og én hjørnepunktliste 502); et volumlegeme hvis flater ikke parer seg kant for kant, skrives som separate flater, og linjen sier det. **Importer…** leser slike volumlegemer tilbake som volumlegemer, fra STEP og fra IGES. Den leser kurver og overflater skrevet på denne måten, og `.ccnurbs`-lappsett; andre programmers STEP-volumlegemer åpnes med Fil › Importer som nett.

## Overflater fra en skanning (reversert konstruksjon)

Velg den skannede nettet i modellen (ingenting valgt betyr alt som vises), åpne **Overflater**, og velg i gruppen **Skanning** **Tilpass overflater til skanningen**. Verktøyet leter etter **plan**, **sylindere**, **kuler** og **kjegler** (de eksakte overflatene en bearbeidet del består av; hver rad viser radiusen eller halvvinkelen den fant), finner **avrundinger** (avrundede kanter og hjørner: en liten sylinder eller kule som løper tangent inn i to eller flere andre flater, vist med radiusen og flatene den forbinder), **kantavrundinger** (en torus: den avrundede kanten der en flat flate møter en sylinder eller kjegle, vist med radiusen og ringradiusen sin) og **variable avrundinger** (en avrundet kant der radiusen endrer seg langs den, vist med radiusen i hver ende), tilpasser **én fri lapp** til et glatt, svakt buet stykke, og kutter hver flate til omrisset av den delen av skanningen den kom fra, slik at hull og hjørner beholdes. Alternativer: **toleransen** (hvor langt, i mm, et skannepunkt kan være fra et plan eller en sylinder og fortsatt høre til den, og målet for en fri lapp), **minste stykke** (en andel av overflatearealet) og **flest flater**. Samme skanning og samme alternativer gir alltid de samme flatene.

Resultatet er en tabell, én rad per flate: dens type, hvor mange trekanter den kom fra, og feilen **målt fra skanningen til flaten** (rms, den største, og andelen punkter innenfor toleransen). Målte punkter er skannens hjørnepunkter og midten av hver trekant. Feilen måles ikke den andre veien (flate til skanning), så en flate som strekker seg utover skanningen, ville ikke vises. Noten under tabellen sier også hvor mye av arealet som var for lite til å tilpasses. I visningen farges skannepunktene etter **avviksmønsteret**: blått på flaten, grønt halvveis til toleransen, rødt ved toleransen eller mer (fjern merket for **Vis avviksmønsteret** for å skjule det). Deler som folder seg tilbake på seg selv (for eksempel et lukket rør tilpasset med frie lapper), listes som ikke tilpasset, og tvinges aldri inn i én overflate.

**Sy overflatene til et volumlegeme** syr alle viste overflater som ikke er i et volumlegeme, til ett lukket volumlegeme. Skanneflater møtes bare innenfor skannens egen feil, så det prøver den minste sammenføyningsavstanden som lukker seg (aldri mer enn **syavstanden** du setter), og avviser med ord når flatene ikke lukker seg. Det fyller aldri et gap. En boks med avrundede kanter syr seg når avrundingene ble funnet som egne flater; sammenføyningsavstanden som lukket seg, står i resultatet. Volumlegemet fungerer deretter med Forening, Trekk fra, Skjæring og **Legg til i modellen**.

Det den ikke gjør: en **kantavrunding** (en torus) ses bare etter aksen til en sylinder eller kjegle som allerede er funnet, og en **variabel avrunding** bare langs en nokså rett kant (snittene kuttes vinkelrett på én retning); ellers blir de frie lapper når de er glatte nok, og utelates ellers. Kuler, kjegler og avrundinger finnes ved tilfeldig utvalg, så en svært liten en (noen få trekanter) kan gå glipp av. Avviksmønsteret viser avstanden fra skanningen til flatene, ikke den andre veien. Svært store skanninger (over 300,000 trekanter) avvises her. Flater på en sylinder med full omdreining kuttes rundt hull, med sømmen lagt der det ikke er hull. Kontroller hver flate mot skanningen før du stoler på den.

## Ikke bygget ennå

Avrunding av kanter som møtes i et hjørne av buede flater eller med ulike radier (en hjørneblanding), en avrunding mellom flater som ikke møtes, en innvendig avrunding som ender på en skrådd eller buet flate, og boolske operasjoner og avrundinger beregnet på overflatene uten trekanter (her arbeider volumlegemeberegneren på trekanter innenfor toleransen, og hvert punkt blir da satt tilbake på de eksakte overflatene).
