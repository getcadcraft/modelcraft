---
title: Kretsa, panorera och zooma
summary: Rör dig runt modellen med mus, pekplatta, pekskärm eller tangentbord, och hoppa till standardvyer.
keywords: kretsa, panorera, zooma, långt tryck, tre fingrar, två fingrar, knacka, navigera, kamera, vy, rotera vy, pekplatta, touch, nypa, mittknapp, zooma utsträckning, perspektiv, parallell, vy uppifrån, iso
from: 10d4d33a
---

Du kan flytta kameran när som helst, även mitt i att rita en linje eller trycka en yta: verktyget väntar där det var.

## Med en mus med tre knappar

| För att | Gör så här |
|---|---|
| {{ui:Orbit}} | Dra med mittknappen (tryck på hjulet) |
| {{ui:Pan}} | Dra med högerknappen, eller håll ned {{key:Shift}} och dra med mittknappen. Att trycka ned eller släppa {{key:Shift}} under ett drag växlar mellan kretsa och panorera |
| {{ui:Zoom}} | Rulla hjulet. Det zoomar mot ytan under pekaren, eller mot punkten under den på vyns mittdjup |
| Se hela modellen | {{key:Shift+Z}} eller {{ui:Utsträckning}} |

Kretsa vrider vyn runt den del av modellen som ligger under pekaren, så att den punkten står kvar medan allt annat vrids runt den. Över tomt utrymme vrids den runt vyns mitt. Panorera håller fast den punkt du tog tag i under pekaren.

För att alltid kretsa runt vyns mitt, eller för att göra kretsa och panorera snabbare eller långsammare, öppna {{ui:Inställningar}} ({{key:Mod+,}}), fliken {{ui:ModelCraft}}, **Kretsa och panorera**. Hastigheterna gäller för musen, pekplattan, touch och piltangenterna.

Ett högerklick utan dragning gör ingenting; ModelCraft har ingen högerklicksmeny.

## Utan mittknapp

Använd kameraverktygen i verktygsfältet, eller tangentbordet:

1. Tryck på {{key:O}} (eller klicka på {{ui:Orbit}}) och dra med vänster knapp för att kretsa. Håll ned {{key:Shift}} under draget för att panorera.
2. Tryck på {{key:H}} (eller klicka på {{ui:Panorera}}) och dra för att panorera.
3. Tryck på {{key:Z}} (eller klicka på {{ui:Zooma}}) och dra uppåt för att zooma in, nedåt för att zooma ut.
4. Tryck på {{key:Space}} för att gå tillbaka till {{ui:Markera}}, eller tryck på tangenten för verktyget du vill ha härnäst.

Kameraverktygen ersätter verktyget du använde. För att titta runt mitt i en operation utan att tappa den, använd tangentbordet i stället:

- Piltangenterna kretsar.
- {{key:Shift}} med piltangenterna panorerar.

Medan ett ritverktyg är mitt i en operation (efter dess första klick) låser piltangenterna riktningar i stället för att kretsa. Se [Inferens och fångst](topic:inference#lock-a-direction).

## På en pekplatta

Enklast: öppna {{ui:Inställningar}} ({{key:Mod+,}}), fliken {{ui:ModelCraft}}, och sätt Rullning till **Pekplatta** (eller lämna den på "Räkna ut automatiskt"). Dra sedan med två fingrar för att kretsa, håll ned {{key:Shift}} och dra för att panorera, och nyp för att zooma — inga kameraknappar behövs. Se [ModelCraft-inställningar](topic:settings#scrolling-mouse-wheel-or-trackpad).

Med Rullning satt till **Musens hjul**:

:::mac
- **Zoom:** rulla med två fingrar, eller nyp. Båda zoomar mot pekaren.
- **Panorera:** tryck med två fingrar (ett sekundärklick) och håll fingrarna nedtryckta medan du drar. Slå på "Sekundärklick" i **Systeminställningar**, sedan **Pekplatta**, om tvåfingerklick inte gör något.
- **Kretsa:** tryck på {{key:O}} och dra med ett finger, eller använd piltangenterna.
- Att hålla ned {{key:Ctrl}} när du klickar kanske inte räknas som ett högerklick i ModelCraft, beroende på webbläsaren: det kan i stället fungera som ett klick med {{key:Ctrl}} nedtryckt. Använd tvåfingertrycket för att panorera.
:::

:::windows linux
- **Zoom:** rulla med två fingrar. Nyp zoomar också där pekplattans drivrutin skickar det som rullning med {{key:Ctrl}}.
- **Panorera:** dra med högerknappen (på många pekplattor: tryck i nedre högra hörnet och dra), eller tryck på {{key:H}} och dra.
- **Kretsa:** tryck på {{key:O}} och dra, eller använd piltangenterna.
:::

Med Musens hjul zoomar tvåfingerrullning; den panorerar inte. Det är tvärtom mot många webbsidor, och så beter sig musens hjul i de flesta 3D-modelleringsprogram.

:::tip
{{key:Space}} väljer verktyget {{ui:Markera}} i ModelCraft. Att hålla ned {{key:Space}} och dra panorerar inte, som i vissa andra appar.
:::

## På en pekskärm

:::touch
- **Ett finger** använder det aktuella verktyget: **knacka** för att klicka, **tryck och dra** för att rita eller flytta.
- Medan ett ritverktygs finger är nedtryckt visar en **lupp** ovanför det vad som finns under fingret, så att du ser slutpunkten, mittpunkten eller kanten den fäster vid innan du lyfter.
- **Håll stilla** i en halv sekund för att avsluta det verktyget gör, precis som {{key:Enter}} gör: en kurva, en linjekedja. När inget pågår, och du sedan drar samma finger medan du håller stilla, **kretsar** det tills du lyfter.
- **Två fingrar** dragna tillsammans **panorerar**; **nyp** för att zooma. Båda fungerar i en gest.
- **Tre fingrar** dragna tillsammans **kretsar**.
- För att byta dem (två fingrar kretsar, tre panorerar), öppna {{ui:Inställningar}}, fliken {{ui:ModelCraft}}, Pekskärm.
- Om du sätter ned ett andra finger **avbryts** det som det första fingret påbörjade (en rektangel halvt ritad, ett tryck-och-dra som pågår). Lyft fingrarna och börja om.
- En liten list längst ned i vyn har **Klar** ({{key:Enter}}), **Avbryt** ({{key:Esc}}) och **Ångra**, för när det inte finns något tangentbord.
- Fångst och val når lite längre än med en mus, och knapparna är större, så ett finger träffar dem.
:::

:::mouse
På en pekskärm använder ett finger det aktuella verktyget (knacka för att klicka, håll stilla för att avsluta, eller håll stilla och dra för att kretsa), två fingrar panorerar och nyper för att zooma, tre fingrar kretsar, och en liten list erbjuder Klar, Avbryt och Ångra.
:::

## Standardvyer

1. Klicka på {{ui:Vyer}} längst till höger i verktygsfältet.
2. Välj {{ui:Iso}}, {{ui:Ovanifrån}}, {{ui:Framifrån}}, {{ui:Höger}}, {{ui:Bakifrån}}, {{ui:Vänster}} eller {{ui:Underifrån}}.

Vyn vrids mot den riktningen och anpassar hela modellen. {{ui:Framifrån}} tittar norrut, längs den gröna axeln; {{ui:Ovanifrån}} tittar rakt ned med norr uppåt.

ViewCube uppe till höger i vyn gör detsamma med ett klick, plus kanter och hörn, en kompassring för att vrida modellen och en hemknapp. Se [ViewCube](topic:view-cube).

## Perspektiv och parallellprojektion

Välj {{ui:Vyer}}, sedan {{ui:Perspektiv}}. En bock betyder att perspektiv är på. Med det avslaget är vyn en parallellprojektion (ortogonal): linjer som är parallella i modellen förblir parallella på skärmen, vilket är vad du vill ha för fasader från {{ui:Framifrån}} eller {{ui:Höger}}. Statusfältet säger "Perspektiv." eller "Parallellprojektion."

Varje scen minns om den var i perspektiv. Se [Spara vyer som scener](topic:scenes).
