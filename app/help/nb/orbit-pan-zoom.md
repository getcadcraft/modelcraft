---
title: Orbit, panorer og zoom
summary: Beveg deg rundt modellen med mus, styreflate, berøringsskjerm eller tastatur, og hopp til standardvisninger.
keywords: orbit, panorer, zoom, langt trykk, tre fingre, to fingre, trykk, naviger, kamera, visning, roter visning, styreflate, berøring, klype, midtknapp, zoom utstrekning, perspektiv, parallell, toppvisning, iso
from: 10d4d33a
---

Du kan flytte kameraet når som helst, selv midt i tegning av en linje eller skyving av en flate: verktøyet venter der det var.

## Med en musknapp for tre

| For å | Gjør dette |
|---|---|
| Orbit | Dra med midtknappen (trykk på hjulet) |
| Panorer | Dra med høyre knapp, eller hold {{key:Shift}} og dra med midtknappen. Når du trykker eller slipper {{key:Shift}} under et drag, veksler det mellom orbit og panorering |
| Zoom | Drei hjulet. Det zoomer mot flaten under pekeren, eller mot punktet under den på dybden til visningens midte |
| Se hele modellen | {{key:Shift+Z}} eller {{ui:Utstrekning}} |

Orbit snur visningen rundt delen av modellen under pekeren, slik at det punktet blir stående mens alt snur seg rundt det. Over tomt rom snur den rundt visningens midte. Panorering beholder punktet du tok tak i under pekeren.

For alltid å orbitere rundt visningens midte, eller for å gjøre orbit og panorering raskere eller tregere, åpne {{ui:Innstillinger}} ({{key:Mod+,}}), fanen {{ui:ModelCraft}}, **Orbit og panorering**. Hastighetene gjelder musen, styreflaten, berøring og piltastene.

Et høyreklikk uten dra gjør ingenting; ModelCraft har ingen høyreklikkmeny.

## Uten midtknapp

Bruk kameraverktøyene i verktøylinjen, eller tastaturet:

1. Trykk {{key:O}} (eller klikk {{ui:Orbit}}) og dra med venstre knapp for å orbitere. Hold {{key:Shift}} under draget for å panorere.
2. Trykk {{key:H}} (eller klikk {{ui:Panorer}}) og dra for å panorere.
3. Trykk {{key:Z}} (eller klikk {{ui:Zoom}}) og dra opp for å zoome inn, ned for å zoome ut.
4. Trykk {{key:Space}} for å gå tilbake til {{ui:Velg}}, eller trykk tasten til verktøyet du vil ha neste.

Kameraverktøyene erstatter verktøyet du brukte. For å se deg rundt midt i en operasjon uten å miste den, bruk tastaturet i stedet:

- Piltastene orbiterer.
- {{key:Shift}} med piltastene panorerer.

Mens et tegneverktøy er midt i en operasjon (etter første klikk), låser piltastene retninger i stedet for å orbitere. Se [Inferens og fangst](topic:inference#lock-a-direction).

## På styreflate

Enklest: åpne {{ui:Innstillinger}} ({{key:Mod+,}}), fanen {{ui:ModelCraft}}, og sett Rulling til **Styreflate** (eller la den stå på «Finn ut selv»). Dra deretter med to fingre for å orbitere, hold {{key:Shift}} og dra for å panorere, og klyp for å zoome – uten kameraknapper. Se [ModelCraft-innstillinger](topic:settings#scrolling-mouse-wheel-or-trackpad).

Med Rulling satt til **Musehjul**:

:::mac
- **Zoom:** rull med to fingre, eller klyp. Begge zoomer mot pekeren.
- **Panorer:** trykk med to fingre (sekundærklikk) og hold fingrene nede mens du drar. Slå på «Sekundærklikk» i **Systeminnstillinger**, deretter **Styreflate**, hvis to-fingerklikk ikke gjør noe.
- **Orbit:** trykk {{key:O}} og dra med én finger, eller bruk piltastene.
- Å holde {{key:Ctrl}} nede mens du klikker, telles kanskje ikke som et høyreklikk i ModelCraft, avhengig av nettleseren: det kan i stedet fungere som et klikk med {{key:Ctrl}} holdt nede. Bruk to-fingertrykket for å panorere.
:::

:::windows linux
- **Zoom:** rull med to fingre. Klyp zoomer også der styreflatedriveren sender det som rulling med {{key:Ctrl}}.
- **Panorer:** dra med høyre knapp (på mange styreflater: trykk nederst til høyre og dra), eller trykk {{key:H}} og dra.
- **Orbit:** trykk {{key:O}} og dra, eller bruk piltastene.
:::

Med Musehjul zoomer to-fingerrulling; den panorerer ikke. Det er motsatt av mange nettsider, og slik musehjulet oppfører seg i de fleste 3D-modellerere.

:::tip
{{key:Space}} velger {{ui:Velg}}-verktøyet i ModelCraft. Å holde {{key:Space}} og dra panorerer ikke, slik som i noen andre apper.
:::

## På berøringsskjerm

:::touch
- **Én finger** bruker det nåværende verktøyet: **trykk** for å klikke, **trykk og dra** for å tegne eller dra.
- Mens en tegneverktøy-finger er nede, viser en **lupe** over den hva som er under fingeren, slik at du kan se endepunktet, midtpunktet eller kanten den fester seg til før du løfter.
- **Hold stille** i et halvt sekund for å fullføre det verktøyet gjør, slik {{key:Enter}} gjør: en kurve, en linjekjede. Når ingenting pågår, og du holder stille og deretter drar med samme finger, **orbiterer** det til du løfter.
- **To fingre** dratt sammen **panorerer**; **klyp** for å zoome. Begge virker i ett grep.
- **Tre fingre** dratt sammen **orbiterer**.
- For å bytte dem (to fingre orbiterer, tre panorerer), åpne {{ui:Innstillinger}}, fanen {{ui:ModelCraft}}, Berøringsskjerm.
- Å sette ned en andre finger **avbryter** det den første fingeren startet (et halvtegnet rektangel, en trykk/trekk som pågår). Løft fingrene og start på nytt.
- En liten linje nederst i visningen har **Ferdig** ({{key:Enter}}), **Avbryt** ({{key:Esc}}) og **Angre**, for når det ikke finnes tastatur.
- Fangst og plukking når litt lenger enn med en mus, og knappene er større, slik at en finger treffer dem.
:::

:::mouse
På berøringsskjerm bruker én finger det nåværende verktøyet (trykk for å klikke, hold stille for å fullføre, eller hold stille og dra for å orbitere), to fingre panorerer og klyper for å zoome, tre fingre orbiterer, og en liten linje tilbyr Ferdig, Avbryt og Angre.
:::

## Standardvisninger

1. Klikk {{ui:Visninger}} helt til høyre i verktøylinjen.
2. Velg {{ui:Iso}}, {{ui:Topp}}, {{ui:Front}}, {{ui:Høyre}}, {{ui:Bak}}, {{ui:Venstre}} eller {{ui:Bunn}}.

Visningen snur seg til den retningen og tilpasses hele modellen. {{ui:Front}} ser mot nord, langs den grønne aksen; {{ui:Topp}} ser rett ned med nord opp.

Visningskuben øverst til høyre i visningen gjør det samme med ett klikk, pluss kanter og hjørner, en kompassring for å snu modellen og en hjemknapp. Se [Visningskuben](topic:view-cube).

## Perspektiv og parallellprojeksjon

Velg {{ui:Visninger}}, deretter {{ui:Perspektiv}}. En hake betyr at perspektiv er på. Når det er av, er visningen en parallell (ortografisk) projeksjon: linjer som er parallelle i modellen forblir parallelle på skjermen, noe du vil ha for fasader fra {{ui:Front}} eller {{ui:Høyre}}. Statuslinjen sier «Perspektiv.» eller «Parallellprojeksjon.»

Hver scene husker om den var i perspektiv. Se [Lagre visninger som scener](topic:scenes).
