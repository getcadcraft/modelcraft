---
title: Indstillinger for ModelCraft
summary: Vælg den tastestil, du kender, få et trackpad til at kredse og panorere uden kameraknapperne, og slå fangning og kollision af massive legemer til eller fra.
keywords: indstillinger, præferencer, styring, tastestil, tastkort, genveje, blender, trackpad, touchpad, rul, orbit, knib, fang, fangning, kollision, overlap, skær, gå igennem
from: caf77d5b
---

Åbn {{ui:Indstillinger}} med tandhjulet i app-linjen eller {{key:Mod+,}}. Den første fane, {{ui:ModelCraft}}, rummer de indstillinger, der hører til denne app; {{ui:Generelt}} rummer dem, alle CadCraft-apps deler (tema, værktøjslinje, paneler). ModelCraft-indstillingerne findes kun i appen: du ændrer dem her, og denne browser husker dem.

## Styring: hvilke taster og museknapper

To tastestiler. Skift mellem dem her med {{ui:Taster: Skub/træk}} / {{ui:Taster: Modellør}} nederst til højre i visningen, eller i slutningen af værktøjslinjens {{ui:Mere}}-menu:

- **Skub/træk-stil** (start): et bogstav vælger et værktøj: {{key:L}} linje, {{key:R}} rektangel, {{key:P}} skub/træk, {{key:M}} flyt, {{key:Q}} roter, {{key:S}} skalér, {{key:G}} lav komponent. Se [Taster og museaktioner](topic:keyboard).
- **Modellør-stil** (tasterne i mesh-modellører som Blender): vælg først, og handl derefter straks på valget. {{key:G}} flytter det, {{key:R}} roterer det og {{key:S}} skalerer det fra markørens position — ingen første klik. Mens det flyttes, låser {{key:X}}, {{key:Y}} eller {{key:Z}} den røde, grønne eller blå akse, et indtastet tal sætter afstanden (eller graderne, eller faktoren), og et klik eller {{key:Enter}} sætter det på plads; {{key:Esc}} eller et højreklik sætter det tilbage. Derefter er du tilbage i {{ui:Vælg}}.

Tastestilen er det samme valg som menustilen: Modellør-tastestilen er {{ui:Modellør}}-menustilen, og valget af den ene vælger også den anden. Se [Menuer, taster og mus](topic:menus-keys-and-mouse). Den fulde Modellør-liste findes i [Taster og museaktioner](topic:keyboard#modeler-keys). Værktøjstipsene på værktøjslinjen og startkortet følger den stil, du vælger.

## Rulning: musehjul eller trackpad

- **Find ud af det** (start): ModelCraft holder øje med rulningen. Sidelæns eller fin rulning, som et trackpad sender, kredser; hele hjulklik zoomer.
- **Musehjul**: rulning zoomer altid mod markøren.
- **Trackpad**: stryg med to fingre for at kredse, hold {{key:Shift}} og stryg for at panorere, knib for at zoome. Du behøver aldrig knapperne {{ui:Orbit}}, {{ui:Panorér}} eller {{ui:Zoom}}.

En knibebevægelse zoomer i alle valg. Hvis "Find ud af det" gætter forkert for din mus eller dit trackpad, så vælg den, du har.

:::tip
I Modellør-stilen kan du også kredse ved at holde {{key:Alt}} nede og trække, og panorere med {{key:Alt+Shift}} og et træk — praktisk på en bærbar uden midterknap.
:::

## Fangning

**Fang til punkter, kanter og akser** (til fra start) trækker markøren til endepunkter, midtpunkter, kanter, hjælpelinjer og de røde, grønne og blå akser — se [Inferens](topic:inference). Slå det fra, når du vil placere noget frit tæt på anden geometri, uden at det hopper. Flader, jorden og aksellåsene virker stadig, med fangning slået fra.

Knappen {{ui:Fang}} nederst til højre i visningen gør det samme for denne sessions arbejde (den gemmes også). I Modellør-stilen skifter {{key:Shift+Tab}} den.

## Massive legemer stopper, hvor de rører

**Stop massive legemer, hvor de rører** (til fra start) forhindrer, at en væg trækkes gennem en anden væg. Med {{ui:Flyt}} (og {{key:G}}, og indsæt-og-flyt med {{key:Mod+D}}) glider valget op til det andet legeme og stopper, når det rører det; med {{ui:Skub/træk}} stopper en flade, hvor den møder et andet massivt legeme. At hvile på noget og glide langs det er fint — kun at gå ind i det indre stoppes. Ting, der allerede overlapper, når du starter, kan stadig trækkes fra hinanden.

For at skubbe noget igennem med vilje, klik på {{ui:Kollision}} nederst til højre (eller fravælg indstillingen), lav flytningen, og klik igen.

:::note
Kollisioner kontrolleres ved flytning og skub/træk. {{ui:Roter}} og {{ui:Skalér}} kontrollerer dem endnu ikke, og løs geometri, der rører, forbinder sig stadig, som den altid har gjort: hold adskilte ting i [grupper](topic:groups-components), så de forbliver adskilte.
:::

## 3D-printerbord

Størrelsen på din printers bord: {{ui:Ikke angivet}} (start), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 eller 300 × 300 × 400 mm. Vælg den størrelse, der ligger tættest på din printers byggevolumen. [Tjek for 3D-print](topic:print-3d) siger så, når en model er større end bordet; med {{ui:Ikke angivet}} kontrolleres størrelsen ikke.

## Kredsning og panorering

**Kreds om det under markøren** (til fra start): kredsning drejer om den del af modellen, der er under markøren, og panorering holder det punkt under markøren; over et tomt område bruger begge midten af visningen. Slå det fra for altid at kredse om midten af visningen. **Kredshastighed** og **Panoreringshastighed** går fra 0.25× til 3× (1× er start) og gælder for musen, trackpadet, touch og piletasterne. Se [Kredsning, panorering og zoom](topic:orbit-pan-zoom).

## Hjørneindikator

Det, der vises i hjørnet af 3D-visningen: **ViewCube** (start; øverst til højre — klik på en flade, kant eller et hjørne for at se fra ddér, træk for at kredse, træk i kompasringen for at dreje modellen), **Aksesymbol** (en lille X-, Y-, Z-markør nederst til venstre, der drejer med visningen: X rød, Y grøn, Z blå) eller **Ingen**. Se [ViewCube](topic:view-cube).
