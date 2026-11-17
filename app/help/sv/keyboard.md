---
title: Tangenter och musåtgärder
summary: Alla tangentbordsgenvägar, musåtgärder, styrplattegester och pekskärmsgester i ModelCraft, grupperade efter vad de gör.
keywords: tangentbord, genvägar, tangenter, mus, styrplatta, pekskärm, gester, fusklapp, ctrl, kommando, piltangenter
from: e2348957
---

Det här är push-pull-tangenterna, de som ModelCraft startar med. För den andra stilen, se [Modeler-tangenter](topic:keyboard#modeler-keys) nedan och [ModelCraft-inställningar](topic:settings).

Genvägar fungerar när 3D-vyn eller en verktygsknapp har fokus. Om du just skrev i ett panelfält eller ändrade en lista i {{ui:Stil}}, klicka i 3D-vyn först, annars går dina tangenter till det fältet. Se [Tangenter, möss och styrplattor](common:keys) för hur tangenter skrivs på varje dator.

## Verktyg

| Tangent | Verktyg |
|---|---|
| {{key:Space}} | {{ui:Markera}} |
| {{key:L}} | {{ui:Linje}} |
| {{key:R}} | {{ui:Rektangel}} |
| {{key:C}} | {{ui:Cirkel}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Båge}} |
| {{key:F}} | {{ui:Förskjut}} |
| {{key:B}} | {{ui:Måla}} |
| {{key:P}} | {{ui:Tryck/dra}} |
| {{key:M}} | {{ui:Flytta}} |
| {{key:Q}} | {{ui:Rotera}} |
| {{key:S}} | {{ui:Skala}} |
| {{key:E}} | {{ui:Radergummi}} |
| {{key:T}} | {{ui:Måttband}} |
| {{key:D}} | {{ui:Mått}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Panorera}} |
| {{key:Z}} | {{ui:Zooma}} |

Verktygsbokstäver fungerar bara utan modifierartangenter: {{key:Shift}} tillsammans med en bokstav gör ingenting, utom de två nedan.

## Modell och fil

| Tangent | Gör |
|---|---|
| {{key:G}} | Skapa komponent av markeringen |
| {{key:Shift+G}} | Skapa grupp av markeringen |
| {{key:Shift+Z}} | Zooma till utsträckning (hela modellen) |
| {{key:Mod+Z}} | Ångra |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gör om |
| {{key:Mod+S}} | Spara (laddar ner `.modelcraft`-filen) |
| {{key:Mod+O}} | Öppna en modell |
| {{key:Mod+A}} | Markera allt (i den öppna gruppen, om en är öppen) |
| {{key:Mod+C}} | Kopiera markeringen |
| {{key:Mod+X}} | Klipp ut markeringen |
| {{key:Mod+V}} | Klistra in: kopian följer pekaren, klicka där den ska stå |
| {{key:Mod+Shift+V}} | Klistra in på plats (där den kopierades från) |
| {{key:Mod+D}} | Duplicera: en kopia följer pekaren, klicka för att släppa ner den |
| {{key:Delete}} eller {{key:Backspace}} | Radera markeringen |
| {{key:PageDown}} / {{key:PageUp}} | Nästa / föregående scen |
| {{key:F1}} | Öppna eller stäng den här hjälpen (även {{ui:Hjälp}} i appfältet; {{key:Esc}} inne i hjälpen stänger den) |
| {{key:Ctrl+Shift+F}} | Skärmläge: helskärm, sedan dolda fält, sedan normalt (Control även på Mac) |

## Esc

{{key:Esc}} backar ett steg varje gång du trycker:

1. Avbryter det verktyget håller på med (en linje som ritas, en tryck/dra, en förflyttning). Allt går tillbaka.
2. Byter till {{ui:Markera}}.
3. Rensar markeringen.
4. Stänger gruppen du redigerar.

Den stoppar också scener från att spelas. I värdefältet rensar {{key:Esc}} det du skrev och går tillbaka till vyn.

## Medan ett verktyg arbetar

| Tangent | Gör |
|---|---|
| En siffra, eller ett av `. , - ' " [ < * /` | Börjar skriva i värdefältet |
| {{key:Enter}} | Tillämpar det du skrev i värdefältet |
| {{key:Right}} | Låser till röda axeln (tryck igen för att låsa upp) |
| {{key:Left}} | Låser till gröna axeln |
| {{key:Up}} | Låser till blå axeln |
| {{key:Down}} | Låser parallellt med den senaste kant du höll över före första klicket |
| Håll {{key:Shift}} | Håller riktningen du är fångad på, så länge den hålls |
| {{key:Ctrl}}, {{key:Mod}} eller {{key:Alt}} ({{ui:Flytta}}) | Växlar mellan att flytta och kopiera |

Piltangentlåsen fungerar i {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Cirkel}}, {{ui:Polygon}}, {{ui:Flytta}}, {{ui:Skala}} och {{ui:Måttband}} (när du mäter från en punkt), efter första klicket. {{ui:Tryck/dra}} rör sig alltid längs ytans riktning och har inga lås. I {{ui:Rotera}} visar piltangenterna ett meddelande om att det är låst efter första klicket, men ändrar inte vridningen.

## Piltangenter vid andra tillfällen

När inget verktyg håller på med något flyttar piltangenterna kameran:

| Tangent | Gör |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbit |
| {{key:Shift}} med en piltangent | Panorera |

## Mus

| Åtgärd | Gör |
|---|---|
| Klick | Använder det aktuella verktyget |
| Tryck, dra, släpp | Samma som två klick (för ritverktyg); en rutmarkering (för {{ui:Markera}}); raderar på vägen (för {{ui:Radergummi}}) |
| Dubbelklick | {{ui:Markera}}: yta med sina kanter, kant med sina ytor, öppnar en grupp; tomt utrymme stänger gruppen. {{ui:Tryck/dra}}: upprepar sist använt avstånd |
| Trippelklick | {{ui:Markera}}: allt sammanhängande |
| {{key:Shift}} + klick | {{ui:Markera}}: växla in och ut ur markeringen |
| {{key:Mod}} + klick | {{ui:Markera}}: lägg till i markeringen |
| {{key:Shift}} + {{key:Mod}} + klick | {{ui:Markera}}: ta bort från markeringen |
| Dra med mittenknappen | Orbit, med valfritt verktyg |
| {{key:Shift}} + dra med mittenknappen | Panorera, med valfritt verktyg |
| Dra med högerknappen | Panorera, med valfritt verktyg |
| Hjul | Zooma mot pekaren |

Det finns ingen högerklicksmeny.

## Styrplatta

Vad ett tvåfingersvep gör beror på {{ui:Inställningar}} › {{ui:ModelCraft}} › Scrollning:

| Gest | Styrplatta (eller uträknat) | Musens scrollhjul |
|---|---|---|
| Tvåfingersvep | Orbit | Zooma mot pekaren |
| {{key:Shift}} + tvåfingersvep | Panorera | Zooma |
| Nypning | Zooma mot pekaren | Zooma mot pekaren |
| Tvåfingertryck och dra (sekundärklick hållet) | Panorera | Panorera |

Se [Orbit, panorera och zooma](topic:orbit-pan-zoom#on-a-trackpad) och [ModelCraft-inställningar](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler-tangenter

Med {{ui:Inställningar}} › {{ui:ModelCraft}} › Kontroller inställd på Modeler-stil:

| Tangent | Gör |
|---|---|
| {{key:W}} eller {{key:Space}} | {{ui:Markera}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Linje}} / {{ui:Rektangel}} / {{ui:Cirkel}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Tryck/dra}} (extrudera) |
| {{key:T}} | {{ui:Måttband}} |
| {{key:D}} | {{ui:Mått}} |
| {{key:G}} | Flytta markeringen på en gång, från pekaren |
| {{key:R}} | Rotera markeringen kring dess mitt (blå axeln) |
| {{key:S}} | Skala markeringen kring dess mitt |
| {{key:X}} / {{key:Y}} / {{key:Z}} medan du flyttar eller roterar | Låser den röda / gröna / blå axeln (igen för att låsa upp) |
| Klick eller {{key:Enter}} | Släpp ner den |
| {{key:Esc}} eller högerklick | Lägg tillbaka den |
| {{key:Shift+D}} | Duplicera och flytta kopian |
| {{key:X}} eller {{key:Delete}} | Radera markeringen |
| {{key:A}} / {{key:Alt+A}} | Markera allt / markera inget |
| {{key:Tab}} | Öppna den markerade gruppen eller komponenten; igen för att stänga den |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Skapa grupp / skapa komponent |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Framifrån / höger / uppifrån-vy ({{key:Mod}} för bakifrån / vänster / underifrån) |
| Numpad {{key:5}} | Perspektiv på eller av |
| Numpad {{key:.}} | Zooma till markeringen |
| {{key:Home}} eller {{key:Shift+C}} | Zooma till utsträckning |
| {{key:Shift+Tab}} | Fångst på eller av |
| Dra med mittenknappen / med {{key:Shift}} / med {{key:Mod}} | Orbit / panorera / zooma |
| {{key:Alt}} + dra / {{key:Alt+Shift}} + dra | Orbit / panorera (ingen mittenknapp behövs) |

Kopiera, klistra in, ångra, spara och öppna har kvar tangenterna som listas ovan. Skrivna värden, värdefältet och {{ui:Tryck/dra}} fungerar likadant i båda stilarna.

## Pekskärm

| Gest | Gör |
|---|---|
| Tryck | Ett klick med det aktuella verktyget |
| Dubbeltryck | Ett dubbelklick |
| Tryck, dra, lyft | Samma som tryck, dra, släpp med en mus |
| Två fingrar: nyp | Zooma |
| Två fingrar: rör ihop | Panorera ({{ui:Inställningar}} › {{ui:ModelCraft}} › Pekskärm kan göra det till Orbit) |
| Tre fingrar: rör ihop | Orbit (Panorera när två fingrar kretsar) |
| Håll ett finger stilla | Avslutar verktyget, som Enter; när inget pågår, dra sedan för att orbita |
| Ett andra finger under en ettfingeråtgärd | Avbryter den åtgärden |
| {{ui:Orbit}}-verktyget, dra sedan med ett finger | Orbit |

För att skriva ett värde på en pekskärm, tryck på värdefältet längst ner, skriv och tryck på tangentbordets Enter-tangent (eller Gå).

## Var flyttningen finns

Flytta finns i verktyget {{ui:Flytta}}, tangent {{key:M}}: välj vad som ska flyttas, klicka en baspunkt, och sedan en andra punkt eller skriv in ett avstånd. Se [Flytta, kopiera och skapa matriser](topic:move-copy).
