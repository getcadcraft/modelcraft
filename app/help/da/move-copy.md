---
title: Flyt, kopiér og lav arrays
summary: Flyt ting ved at klikke eller med en præcis afstand, kopiér dem med en modifikationstast, og lav en række jævnt fordelte kopier.
keywords: flyt, kopiér, duplikér, array, række, afstand, del, forskyd, stræk, kolonner, gentag, flere kopier
from: 280245fc
---

{{ui:Flyt}} ({{key:M}}) flytter det, der er valgt, fra ét punkt til et andet. Holder du en modifikationstast nede, bliver det til en kopi, og efter en kopi kan du skrive, hvor mange flere du vil have.

## Flyt noget

1. Vælg det, du vil flytte (se [Vælg ting](topic:select)). Hvis intet er valgt, tager {{ui:Flyt}} fat i det, du klikker på.
2. Tryk {{key:M}}.
3. Klik på et punkt, du vil flytte fra. Vælg noget meningsfuldt, fx et hjørne: det punkt havner præcis der, hvor du klikker næste gang.
4. Flyt markøren. Valget følger med. Det fanger punkter, kanter og de røde, grønne og blå retninger, ligesom en linje gør.
5. Klik, hvor punktet skal hen, eller skriv en afstand og tryk {{key:Enter}}.

   Statuslinjens tip vender tilbage til "Klik på et punkt, du vil flytte fra…" til næste flytning.

En skrevet afstand går i den retning, du peger. Du kan også skrive en præcis forskydning, `<2m,0,0>` (2 m langs den røde akse), eller en præcis destination for det punkt, du valgte, `[0,0,0]` (origo). Se [Skriv præcise mål](topic:value-box).

For kun at flytte langs én akse trykker du en piletast efter første klik: {{key:Right}} låser til rød, {{key:Left}} til grøn, {{key:Up}} til blå. Tryk på samme piletast igen for at låse op.

## At flytte en del af en form strækker den

Geometri, der ikke er grupperet, er forbundet. Hvis du vælger én flade eller nogle få kanter og flytter dem, strækkes de flader, der sidder fast i dem, med. Flytter du topfladen på en kasse ud til siden, hælder kassen; flytter du én kant på taget, ændrer taget hældning. Flader, der ikke længere kan forblive plane, foldes i trekanter.

For at flytte et helt objekt uden at strække det, vælg først hele objektet (tredobbeltklik på det), eller endnu bedre: gør det til en gruppe eller komponent (se [Grupper og komponenter](topic:groups-components)).

## Kopiér noget

1. Vælg det, du vil kopiere.
2. Tryk {{key:M}}.
3. Hold {{key:Ctrl}} (eller {{key:Alt}}) nede og klik på det punkt, du vil flytte fra. På en Mac gør {{key:Mod}} eller {{key:Alt}} det samme. Tipset siger "Ctrl flytter i stedet", hvilket betyder, at du kopierer.

   Du kan også trykke på og slippe {{key:Ctrl}} eller {{key:Alt}} efter første klik for at skifte mellem flytning og kopiering.

4. Klik, hvor kopien skal være, eller skriv en afstand og tryk {{key:Enter}}.

   Originalen bliver, hvor den var, og kopien er valgt.

## Kopiér, klip, sæt ind og duplikér

- {{key:Mod+C}} kopierer valget, {{key:Mod+X}} klipper det (kopierer og sletter derefter), {{ui:Kopiér}} og {{ui:Sæt ind}} er også knapper i værktøjslinjens gruppe {{ui:Rediger}}, og {{ui:Mere}} ved siden af har klip, sæt ind på samme sted og duplikér.
- {{key:Mod+V}} sætter ind: en kontur af kopien følger markøren, fanger som ethvert værktøj, og et klik sætter den ned med sit nederste hjørne der. {{key:Esc}} annullerer.
- {{key:Mod+Shift+V}} sætter ind på samme sted, præcis hvor kopien kom fra — nyttigt til at flytte noget ind i en gruppe, du har åbnet.
- {{key:Mod+D}} ({{key:Shift+D}} i Modeler-stilen) duplikerer: en kopi laves og følger straks markøren; klik for at sætte den ned, skriv en afstand, eller tryk {{key:Esc}} for at slippe den. Lige efter skriver du `3x` for flere kopier i træk.

En indsat gruppe bliver til en ny gruppe. En indsat komponent er en ny placering af samme komponent, så redigering af én ændrer dem alle. Kopier kan også indsættes i en anden ModelCraft-fane i denne browser (de kommer ind som nye definitioner dér).

## En række kopier

Lige efter en kopi, mens {{ui:Flyt}} stadig er værktøjet:

- Skriv `3x` (eller `*3`) og tryk {{key:Enter}} for tre kopier i træk, hver med samme afstand som den første kopi. Du får tre nye kopier ud over originalen.
- Skriv `/3` og tryk {{key:Enter}} for i stedet at dele: tre kopier fordelt jævnt fra originalen til der, hvor du satte den første kopi, med den sidste præcis på det sted. Brug det til at udfylde et spænd: sæt én kopi i den fjerne ende, og del derefter.

Du kan skrive et andet tal lige efter: `5x` erstatter rækken med `3x`. Tipset minder dig om det: "Kopieret. Skriv 3x for flere kopier i træk, eller /3 for at dele afstanden."

### Eksempel: søjler hver 6 meter

1. Lav en søjle og gør den til en komponent ({{key:G}}), så alle kopier ændrer sig samlet senere.
2. Tryk {{key:M}}, hold {{key:Ctrl}} nede og klik på søjlens fodhjørne.
3. Flyt langs den røde akse og skriv `6m`, og tryk derefter {{key:Enter}}.
4. Skriv `4x` og tryk {{key:Enter}}. Du har fem søjler, 6 m fra hinanden.

## Ting at vide

- Tryk {{key:Esc}} før det andet klik for at annullere; alt går tilbage til, hvor det var.
- {{ui:Flyt}} virker inde i den gruppe, du redigerer. For at flytte en hel gruppe, luk den først og vælg den udefra.
- Med **{{ui:Kollision}}** slået til (nederst til højre og i [ModelCraft-indstillinger](topic:settings#solids-stop-where-they-touch)) stopper en flytning der, hvor valget rører et andet massivt legeme, i stedet for at gå igennem det. Klik på {{ui:Kollision}} for at slå den fra for en flytning, der skal gå igennem.
- For at sætte en kopi ind i en anden gruppe: kopiér den, åbn den anden gruppe, og sæt ind ({{key:Mod+Shift+V}} holder den på samme sted).
