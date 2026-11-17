---
title: Orbit, panorér og zoom
summary: Bevæg dig rundt om modellen med en mus, et touchpad, en touchskærm eller tastaturet, og hop til standardvisninger.
keywords: orbit, panorér, zoom, langt tryk, tre fingre, to fingre, tryk, naviger, kamera, visning, drej visning, touchpad, touch, knib, midterknap, zoom til udstrækning, perspektiv, parallel, topvisning, iso
from: 10d4d33a
---

Du kan flytte kameraet når som helst, selv midt i at tegne en linje eller skubbe en flade: værktøjet venter, hvor det var.

## Med en mus med tre knapper

| For at | Gør dette |
|---|---|
| Orbit | Træk med midterknappen (tryk på hjulet) |
| Panorér | Træk med højre knap, eller hold {{key:Shift}} nede og træk med midterknappen. Tryk på eller slip {{key:Shift}} under et træk for at skifte mellem orbit og panorering |
| Zoom | Drej hjulet. Det zoomer mod fladen under markøren, eller mod punktet under den i visningens centers dybde |
| Se hele modellen | {{key:Shift+Z}} eller {{ui:Udstrækning}} |

Orbit drejer visningen om den del af modellen under markøren, så det punkt bliver, hvor det er, mens alt drejer rundt om det. Over tomt rum drejer den om visningens centrum. Panorering holder det punkt, du greb, under markøren.

For altid at orbitere om visningens centrum, eller for at gøre orbit og panorering hurtigere eller langsommere, åbn {{ui:Indstillinger}} ({{key:Mod+,}}), fanen {{ui:ModelCraft}}, **Orbit og panorering**. Hastighederne gælder for musen, touchpadet, touch og piletasterne.

Et højreklik uden træk gør intet; ModelCraft har ingen højreklikmenu.

## Uden midterknap

Brug kameraværktøjerne i værktøjslinjen, eller tastaturet:

1. Tryk {{key:O}} (eller klik på {{ui:Orbit}}) og træk med venstre knap for at orbitere. Hold {{key:Shift}} nede under trækket for at panorere.
2. Tryk {{key:H}} (eller klik på {{ui:Panorér}}) og træk for at panorere.
3. Tryk {{key:Z}} (eller klik på {{ui:Zoom}}) og træk op for at zoome ind, ned for at zoome ud.
4. Tryk {{key:Space}} for at gå tilbage til {{ui:Vælg}}, eller tryk på tasten for det værktøj, du vil have næste.

Kameraværktøjerne erstatter det værktøj, du brugte. For at kigge rundt midt i en handling uden at miste den, brug tastaturet i stedet:

- Piletasterne orbiterer.
- {{key:Shift}} med piletasterne panorerer.

Mens et tegneværktøj er midt i en handling (efter sit første klik), låser piletasterne retninger i stedet for at orbitere. Se [Inferens og fangst](topic:inference#lock-a-direction).

## På et touchpad

Nemmest: åbn {{ui:Indstillinger}} ({{key:Mod+,}}), fanen {{ui:ModelCraft}}, og sæt Rulning til **Touchpad** (eller lad den stå på "Find ud af det"). Stryg så med to fingre for at orbitere, hold {{key:Shift}} og stryg for at panorere, og knib for at zoome — ingen kameraknapper. Se [ModelCraft-indstillinger](topic:settings#scrolling-mouse-wheel-or-trackpad).

Med Rulning sat til **Musehjul**:

:::mac
- **Zoom:** rul med to fingre, eller knib. Begge zoomer mod markøren.
- **Panorér:** tryk med to fingre (et sekundært klik) og hold fingrene nede, mens du trækker. Slå "Sekundært klik" til i **Systemindstillinger**, derefter **Touchpad**, hvis to-fingerklik ikke gør noget.
- **Orbit:** tryk {{key:O}} og træk med én finger, eller brug piletasterne.
- At holde {{key:Ctrl}} nede, mens du klikker, tæller muligvis ikke som et højreklik i ModelCraft, afhængigt af browseren: det kan i stedet virke som et klik med {{key:Ctrl}} holdt nede. Brug to-fingertrykket til at panorere.
:::

:::windows linux
- **Zoom:** rul med to fingre. Knib zoomer også, hvor touchpad-driveren sender det som rulning med {{key:Ctrl}}.
- **Panorér:** træk med højre knap (på mange touchpads: tryk i nederste højre hjørne og træk), eller tryk {{key:H}} og træk.
- **Orbit:** tryk {{key:O}} og træk, eller brug piletasterne.
:::

Med Musehjul zoomer to-fingerrulning; den panorerer ikke. Det er det modsatte af mange websider, og det er sådan musehjulet opfører sig i de fleste 3D-modelleringsprogrammer.

:::tip
{{key:Space}} vælger værktøjet {{ui:Vælg}} i ModelCraft. At holde {{key:Space}} nede og trække panorerer ikke, sådan som det gør i nogle andre apps.
:::

## På en touchskærm

:::touch
- **En finger** bruger det aktuelle værktøj: **tryk** for at klikke, **tryk og træk** for at tegne eller trække.
- Mens et tegneværktøjs finger er nede, viser en **lup** over den, hvad der er under fingeren, så du kan se det endepunkt, midtpunkt eller den kant, den fanger, før du løfter.
- **Hold stille** i et halvt sekund for at afslutte det, værktøjet laver, ligesom {{key:Enter}} gør: en kurve, en linjekæde. Når der ikke sker noget, orbiterer det at holde stille og derefter trække den samme finger, indtil du løfter den.
- **To fingre**, der trækkes sammen, **panorerer**; **knib** for at zoome. Begge virker i ét gestus.
- **Tre fingre**, der trækkes sammen, **orbiterer**.
- For at bytte dem (to fingre orbiterer, tre panorerer), åbn {{ui:Indstillinger}}, fanen {{ui:ModelCraft}}, Touchskærm.
- At sætte en anden finger ned **annullerer** det, den første finger startede (et halvt tegnet rektangel, et skub/træk i gang). Løft fingrene og start forfra.
- En lille bjælke nederst i visningen har **Færdig** ({{key:Enter}}), **Annuller** ({{key:Esc}}) og **Fortryd**, til når der ikke er et tastatur.
- Fangst og valg når lidt længere end med en mus, og knapperne er større, så en finger kan ramme dem.
:::

:::mouse
På en touchskærm bruger én finger det aktuelle værktøj (tryk for at klikke, hold stille for at afslutte, eller hold stille og træk for at orbitere), to fingre panorerer og knib zoomer, tre fingre orbiterer, og en lille bjælke tilbyder Færdig, Annuller og Fortryd.
:::

## Standardvisninger

1. Klik på {{ui:Visninger}} i den højre ende af værktøjslinjen.
2. Vælg {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Højre}}, {{ui:Bagside}}, {{ui:Venstre}} eller {{ui:Bund}}.

Visningen drejer til den retning og tilpasser hele modellen. {{ui:Front}} kigger mod nord, langs den grønne akse; {{ui:Top}} kigger lige ned med nord opad.

Visningskuben øverst til højre i visningen gør det samme med ét klik, plus kanter og hjørner, en kompasring til at dreje modellen og en startknap. Se [Visningskuben](topic:view-cube).

## Perspektiv og parallelprojektion

Vælg {{ui:Visninger}}, og derefter {{ui:Perspektiv}}. Et flueben betyder, at perspektiv er slået til. Når det er slået fra, er visningen en parallel (ortografisk) projektion: linjer, der er parallelle i modellen, forbliver parallelle på skærmen, hvilket er det, du vil have til facader fra {{ui:Front}} eller {{ui:Højre}}. Statuslinjen siger "Perspektiv." eller "Parallelprojektion."

Hver scene husker, om den var i perspektiv. Se [Gem visninger som scener](topic:scenes).
