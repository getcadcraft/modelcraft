---
title: Kurvobjekt
summary: Rita Bézier-, NURBS- och raksegmentkurvor, ge dem en tjocklek, en bredd eller en avsmalning, fyll platta kurvor, ange text som kurva och gör dem till nät.
keywords: kurva, kurvor, bezier, nurbs, spline, splines, bana, rör, tub, kabel, rep, fas, extrudera, avsmalning, lutning, radie, fyll, profil, text, bokstäver, logotyp, kurva till nät
from: 602bf077
---

Ett **kurvobjekt** är en kurva som gör en form: ett rör längs den (fas), ett band (extrudering), ett avsmalnande horn (avsmalning) eller, när den är platt och sluten, en fylld platta eller bokstäver. Formen följer kurvan: flytta en punkt så rör sig röret med den. När formen är rätt gör du den till ett nät.

## Lägg till en kurva

Välj {{ui:Curve}} i listan över arbetsytor och tryck {{ui:Add}}:

| Typ | Vad det är |
| --- | --- |
| Bézier-kurva, Bézier-cirkel | Går genom sina punkter; varje punkt har två handtag som styr kurvans riktning |
| NURBS-kurva, NURBS-cirkel, Bana | Jämn, dras mot sina punkter (den startar och slutar i sina ändpunkter); varje punkt har en vikt |
| Text | Din text som platta, fyllda bokstavskonturer |

En ny kurva får ett tunt rör så att den kan ses och väljas; sätt dess fasdjup till 0 för en bar kurva.

Du kan också börja från något ritat: markera en båge, en cirkel, en polygon eller en ritad kurva i arbetsytan Modell och tryck {{ui:Make a curve object}} i Entitetsinfo. De ritade linjerna blir kvar.

## Redigera punkterna

Dubbelklicka på ett kurvobjekt (eller markera det och välj {{ui:Curve}}) för att redigera det.

- Klicka på en punkt eller ett handtag ({{key:Shift}} lägger till eller tar bort); dra det för att flytta det. Dra på tom yta för att markera med en ruta.
- {{ui:Extend}} ({{key:E}}, eller {{key:Ctrl}}+klick) lägger till en punkt efter den markerade änden, vid pekaren.
- {{ui:Subdivide}} ({{key:W}}) lägger en punkt mellan varje par av markerade grannar; en Bézier behåller sin form.
- {{ui:Move}}, {{ui:Turn}} och {{ui:Scale}} flyttar de markerade punkterna med pekaren (modelerarens tangenter {{key:G}} {{key:R}} {{key:S}}, push/pull-tangenterna {{key:M}} {{key:Q}} {{key:S}}); klicka för att behålla, {{key:Esc}} för att avbryta.
- {{ui:Close}} ({{key:C}}) stänger en öppen spline eller öppnar en sluten; {{ui:Reverse}} ({{key:Shift+R}}) kör den åt andra hållet.
- Bézier-handtag: {{ui:Smooth}} ({{key:V}}) placerar dem för en mjuk kurva, {{ui:Corner}} ({{key:Shift+V}}) riktar dem mot grannarna, {{ui:Free}} ({{key:Alt+V}}) lämnar dem där du satte dem. Att dra ett handtag gör det fritt.
- {{ui:Bézier}}, {{ui:NURBS}} och {{ui:Poly}} ändrar typen på de markerade splinerna och behåller punkterna.

Varje ändring är ett steg i ångra.

## Form

Inställningarna finns i panelen (och i Entitetsinfo i arbetsytan Modell):

- **Form:** 3D-kurvor går åt vilket håll som helst; en platt kurva stannar i sitt eget plan och kan fyllas.
- **Fyll slutna splines** (platta): konturerna blir en platta; en kontur inuti en annan är ett hål, så bokstäver behåller sina hål.
- **Extrudera:** halva bandets bredd (öppna eller 3D-kurvor), eller halva plattans tjocklek (fyllda).
- **Fasdjup** och **rundhet:** ett runt rör längs kurvan (med extrudering: ett rundat band); på en fylld form, en rundad kant.
- **Stäng ändarna:** lock på ett öppet rör.
- **Avsmalna längs den:** skalar jämnt längs varje spline, till exempel `1, 0.2` för ett horn, `0, 1, 0` för en spindel.
- **Jämnhet** och, för NURBS, **ordning**: hur fint den ritas, och hur jämn den är (2 rak … 6 jämnast).
- Med punkter markerade: **radie** (rörets tjocklek där, gånger fasen), **lutning** (vrider bandet kring kurvan) och, för NURBS, **vikt**.

Modifierare fungerar ovanpå ett kurvobjekt som på ett nät: en Array längs den, en Spegel, en Subdivision-yta. Se [Modifierare på ett nät](topic:modifiers).

## Gör den till ett nät

{{ui:To mesh}} (i arbetsytan Kurva eller i Entitetsinfo, {{ui:Curve to mesh}}) gör kurvobjektet till det nät det visar just nu; dess modifierare behålls ovanpå. Redigera sedan det i arbetsytan Nät. Ångra gör det till en kurva igen.

Se även [Nät](topic:meshes) och [Redigera ett nät](topic:mesh-edit).
