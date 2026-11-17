---
title: Modellera på en situationsplan från DWG eller DXF
summary: Ta in en CAD-situationsplan eller planritning som linjer på marken, svara på enhetsfrågan och spåra den till ytor och massor.
keywords: situationsplan, dwg, dxf, cad, import, skiss, skissfoto, handskiss, servettskiss, foto, papper, pennfärger, dynamiska block, synlighetstillstånd, text, skraffering, spline, ellips, 3D-yta, spåra, planritning, tomt, fastighetsgräns, enheter, underlag, kontext
from: 3415dc96
---

ModelCraft kan ta in linjerna i en 2D-CAD-ritning, en situationsplan eller en planritning, och lägga dem på marken så att du kan modellera ovanpå dem.

## Importera ritningen

1. Klicka på {{ui:Importera}} i gruppen {{ui:Fil}} (eller släpp filen på 3D-vyn).
2. Välj en `.dwg`- eller `.dxf`-fil.

   En stor DWG tar en stund: statusfältet säger ”Läser plan.dwg…” tills den är inläst.

3. Om ritningen inte anger vilka enheter den har frågar en dialogruta med titeln ”Ritningsenheter”: ”Vad är en ritningsenhet?” Välj {{ui:Tum}}, {{ui:Fot}}, {{ui:Millimeter}} eller {{ui:Meter}}. De flesta amerikanska situationsplaner ritas i fot, arkitektritningar i tum, och metriska planer i millimeter.

   Ritningen kommer in som en grupp kanter på marken, markerad, och vyn zoomar till den. Statusfältet säger hur många kanter som kom in, till exempel ”Importerade site.dwg: 1697 kanter på marken, i en grupp. Spräng den för att rita direkt på den.”

## Vad som kommer in

- Linjer, polylinjer (inklusive deras bågar), cirklar och bågar, och block med allt i dem, från **modellrummet** endast. Kurvor blir korta raka bitar.
- Linjer, polylinjer, bågar, cirklar, ellipser och splines landar plant på marken, som kanter.
- **Skrafferingar** blir ytor på marken, med sina öar som hål, så att du kan trycka/dra en skrafferad yta direkt.
- **3D-ytor** och heltäckande fyllningar blir ytor; 3D-ytor behåller sina höjder.
- **Text** (enradstext, flerradig text och attributvärden) ritas som kanter i en enkel enkelstreckad skrift, i textens egen höjd, vinkel och justering. Dess typsnitt är inte ritningens, så orden kan bli något längre eller kortare. Tecken som skriften saknar form för ritas som små rutor och räknas.
- **Mått** ritas som ritningen visar dem (deras linjer, pilspetsar och text, som kanter och ytor).
- **Dynamiska block** kommer in som ritningen visar dem: varje placerat block i det synlighetstillstånd det sparades med, och endast det tillståndets linjer. Statusfältet listar dem med de visade tillstånden och de andra tillstånd var och en har, till exempel ”Receptacle visas som Duplex ×38, GFI ×7 (tillstånd: Duplex, GFI)”. ModelCraft byter inte tillstånd.
- **3D-solider, områden och kroppar** (ritningens ACIS-data) kommer in som egna grupper: en sluten solid som en solid, ett område eller en öppen kropp som ytor. Plana ytor kommer in hela; krökta ytor (cylindrar, koner, sfärer, torusar, enkla splineytor) som små trianglar med mjuka kanter mellan dem, så att bara solidens egna kanter syns. En yta på en annan typ av yta lämnas utanför och listas: ”Ritas inte ännu (3D-solider): …”.
- Inte importerat: punkter, tabeller, flerhänvisningar, bilder och andra objekttyper. Statusfältet listar dem efter typ, till exempel ”Ej importerat: 12 POINT.” Allt på en layout (pappersrum) lämnas också utanför, utan att listas.
- Lager behålls inte: alla linjer kommer in lika.

Om ritningen ligger långt från sitt origo (till exempel plankoordinater) importeras den ändå, men den kan hamna långt från ModelCraft:s origo. Ritningar som når mer än 10,000 km från sitt origo avvisas: flytta ritningen närmare 0,0 i CAD-programmet först.

## Spåra den till ytor

De importerade linjerna sluter sig sällan snyggt till ytor av sig själva. Två sätt att arbeta:

**Behåll planen som underlag (rekommenderas)**

1. Låt planen vara en egen grupp.
2. Rita din byggnad ovanpå med {{ui:Rektangel}} och {{ui:Linje}}, och fånga till planens hörn (”Ändpunkt”) och kanter (”På kant”).
3. Tryck/dra dina ytor uppåt. Planen förblir orörd under, och du kan radera hela gruppen senare med ett klick.

Fångst fungerar över grupper: du kan fånga till planens hörn utan att öppna den.

**Rita på planens egna linjer**

1. Markera plangruppen och klicka på {{ui:Spräng}}. Dess linjer blir lösa kanter.
2. Där en sluten kontur ska vara en yta, rita en linje över en av dess kanter med {{ui:Linje}}, från hörn till hörn. När konturen är sluten och plan fylls ytan oftast i. Om den inte gör det, leta efter ett gap eller en överlappning i konturen och rita över den.
3. Tryck/dra den.

Det här fungerar bäst på en ren plan. På en stökig mätning är det snabbare att spåra ovanpå.

## Problem

- ”Det här är en binär DXF. Spara den som ASCII-DXF och försök igen.” Spara DXF-filen igen från CAD-programmet som ASCII (text).
- ”…har inga linjer, bågar eller cirklar i modellrummet att ta in.” Ritningen ligger troligen helt på layouter, eller bara text och skraffering.
- ”Ritningen kunde inte läsas (…). Den kan vara skadad, eller sparad i en DWG-version som läsaren inte hanterar…” Parenteserna säger varför, till exempel ”DWG-version AC1009 stöds inte”. Spara den som DXF, eller som DWG från AutoCAD 2000 till 2018, från CAD-programmet.
- Planen har fel storlek: du valde fel enhet. Ångra ({{key:Mod+Z}}) och importera igen, eller [skala](topic:rotate-scale) gruppen med rätt faktor (12 mellan fot och tum, 25.4 mellan tum och millimeter).

För att göra höjdkurvor till mark du kan skulptera, se [Terräng](topic:terrain).

## Från ett foto av en handskiss

**Fil › Importera ett skissfoto…** tar ett foto av en skiss på papper (JPEG, PNG eller TIFF, direkt från en telefon går bra) och gör samma sorts kanter på marken. Ange vilket papper det är (eller låt den hitta arket, tolkat som A4) och skissens skala, till exempel 1 : 100. Pappersets kant hittas och fotot rätas ut, bläcket spåras till linjer och bågar, och varje pennfärg (svart, röd, blå, grön) blir en egen grupp med en tagg (**Skiss svart**, **Skiss röd**, …), alla inom en grupp namngiven efter fotot. Det är ett ångra-steg, och allt sker på den här datorn: inget skickas någonstans.

När ingen papperskant kan hittas tas hela fotot som arket, och statusraden säger det: mät något du vet och skala gruppen om den är fel. Spåra linjerna till ytor som ovan.
