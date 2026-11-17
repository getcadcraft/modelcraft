---
title: Eksporter en modell til andre programmer
summary: Velg riktig eksport for gjengivelse, nett, 3D-utskrift, BIM og BimCraft, og sjekk hva hver av dem beholder.
keywords: skriv ut, 3mf, pdf, papir, bilde, png, bilde, skjermbilde, gjengivelse, lagre visning, eksporter, del, render, rendering, gltf, glb, collada, dae, obj, stl, 3D-utskrift, ifc, bim, bimcraft, send, andre programmer
from: 9e13e80d
---

Eksport lager en kopi av modellen i et annet format. Behold også `.modelcraft`-filen din: den er den eneste filen som beholder alt, og den eneste ModelCraft åpner direkte.

## Eksporter

1. Lagre først ({{key:Mod+S}}), så arbeidsfilen din er trygg.
2. Klikk {{ui:Eksporter}} i gruppen {{ui:Fil}}.
3. Velg formatet. Nettleseren laster det ned, med navn som modellen.

Hele modellen eksporteres. For å eksportere én del: lagre, viske ut resten, eksporter, og angre eller åpne filen på nytt.

## Hvilket format

| Du vil | Velg | Merknader |
|---|---|---|
| Åpne den i et annet 3D-modelleringsprogram | {{ui:Collada (.dae)}} | Beholder grupper, nestede grupper, komponenter (delt, ikke kopiert), navn og farger. Z opp, meter. |
| Gjengi den, eller bruke den i et visualiseringsprogram | {{ui:OBJ (.obj)}} eller {{ui:glTF binær (.glb)}} | OBJ leses bredest; den skriver hver gruppeplassering som et eget objekt, men har ingen farger og ingen delte komponenter. glTF beholder komponenter og farger. |
| Legge den på nettet, i en spillmotor eller i AR | {{ui:glTF binær (.glb)}} | Én fil med alt i seg. |
| Skrive den ut i 3D | {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}} | Sjekker at modellen er lukket og vender riktig vei, og skriver deretter STL eller 3MF i millimeter. Se [Gjør en modell klar til 3D-utskrift](topic:print-3d). {{ui:STL for utskrift (.stl, millimeter)}} skriver hele modellen uten kontrollen. |
| Åpne den i BimCraft eller et annet BIM-program | {{ui:IFC for BimCraft (.ifc)}} | Hver gruppe eller komponent på toppnivå blir ett bygningselement. |

Statuslinjen bekrefter hver eksport, for eksempel «Eksporterte House.stl (millimeter).» eller «Eksporterte House.dae (Collada 1.4.1, Z opp, meter; komponentene forblir delte).»

## Før du eksporterer

- **Gruppér objektene dine.** Collada, glTF og IFC beholder grupper og komponenter som egne objekter. Løs geometri går ut som én klump; i IFC blir den ett element kalt «Løs geometri».
- **Gi dem navn.** Navn på grupper og komponenter går inn i Collada og IFC, så en vegg kalt «Nordvegg» kommer ut som «Nordvegg».
- **Sjekk flateretningen.** Flater som er blågrå på utsiden, vil peke innover i eksporten. Fiks dem med {{ui:Snu flaten}} (se [Viske ut og rydde opp](topic:erase#a-face-facing-the-wrong-way)).
- **For utskrift,** gjør delene til lukkede volumlegemer: velg hver gruppe og sjekk at {{ui:Elementinfo}} sier «Volumlegeme: Ja». Skaler deretter modellen til utskriftsstørrelsen, eller skaler den i skriverprogrammet.

## Send en modell til BimCraft

1. Gjør hver bygningsdel til en gruppe eller komponent, og gi den et navn.
2. Velg {{ui:Eksporter}}, og deretter {{ui:IFC for BimCraft (.ifc)}}.
3. Åpne den nedlastede `.ifc`-filen i BimCraft.

For konseptuell masse, bruk {{ui:Eksporter}} › {{ui:Masse til BimCraft…}} i stedet: hver gruppe går som et massealternativ med etasjer, etasjeareal og volum. Se [Send masse til BimCraft](topic:massing-to-bimcraft).

Den vanlige IFC-eksporten har ingen direkte kobling mellom de to programmene. IFC-filen har én etasje, og hvert element er et generisk bygningselementproxy uten type eller egenskaper: den har bare form og navn. Lukkede grupper blir til faste former; åpne blir til flater.

## Linjer uten flater

Kanter som ikke er en del av noen flate (hjelpelinjer, en importert områdeplan), går inn i OBJ og Collada som linjer. glTF og STL har ingen plass for dem og utelater dem. Hjelpelinjer og scener eksporteres ikke til noe format.

## Lagre visningen som et bilde

{{ui:Eksporter}} › {{ui:Bilde av visningen (.png)}} lagrer nøyaktig det 3D-visningen viser, i størrelsen den har på skjermen. {{ui:Bilde i dobbel størrelse (.png)}} lagrer den dobbelt så bred og dobbelt så høy (for utskrift eller et skarpt lysbilde), med måltilsettinger og merker tegnet på nytt i den størrelsen i stedet for strukket.

For et bilde som ser ut som dagslys (himmel, sol, myke skygger, glass), bruk {{ui:Eksporter}} › {{ui:Render et bilde…}} i stedet: se [Render et bilde](topic:render).

For et rent bilde, slå på [presentasjonsvisning](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) først: aksene, hjelpelinjer, snittkonturer og valget utelates. Still inn kamera, stil og skygger slik du vil ha dem, eller gå til en [scene](topic:scenes). For å lagre en film av scenene dine, bruk {{ui:Eksporter animasjon}} i {{ui:Scener}}-panelet.

## Skriv ut visningen, eller lagre den som PDF

- {{ui:Eksporter}} › {{ui:PDF av visningen (.pdf)}} lagrer en PDF på én side: visningen i dobbel skjermstørrelse, med måltilsettingene, på en A4-side (Letter når modellen er i fot og tommer), liggende, med en linje under som gir filnavnet, datoen og enheten.
- {{ui:Eksporter}} › {{ui:Skriv ut visningen…}} legger den samme siden foran nettleserens utskriftsdialog. Velg en skriver, eller «Lagre som PDF».

Siden viser visningen slik den er: det finnes ingen målestokk på en perspektivvisning. For en tegning i målestokk, slå av {{ui:Perspektiv}} og se fra {{ui:Topp}} eller {{ui:Front}}, og legg til [måltilsettinger](topic:dimensions) for størrelsene som betyr noe. [Presentasjonsvisning](topic:styles-shadows#presentation-view) utelater aksene, hjelpelinjene og valget; måltilsettingene blir.
