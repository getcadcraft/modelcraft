---
title: Kom igång med ModelCraft
summary: Vad ModelCraft är till för, hur du öppnar det och din första låda från en rektangel till en sparad modell.
keywords: start, första modellen, börja, handledning, introduktion, låda, volymstudie, 3d, tryck dra, snabbstart, guidad, guide, nybörjare, ny på 3d
from: d47ad719
---

ModelCraft är en 3D-modellerare för tidig design: volymstudier, rumsplaneringar, snabba byggnadsformer och de skuggor de kastar. Du ritar platta former, drar upp dem till solider och fortsätter arbeta på dem genom att rita på deras ytor. Det körs i din webbläsare, och dina modeller stannar på din dator.

Om du har använt SketchUp gäller det mesta du kan: samma verktygsbokstäver, tryck/dra, en värderuta för exakta mått, grupper och komponenter. [Om du kommer från andra modellerare](topic:coming-from) listar vad som är annorlunda.

## Öppna ModelCraft

1. Öppna ModelCraft i en aktuell version av Chrome, Edge, Firefox eller Safari. Se [Webbläsare och datorer](common:browsers).
2. Vänta tills 3D-vyn visas: ett ljust (eller mörkt) område i mitten med ett kort med rubriken ”Börja modellera”.

Skärmen har ett verktygsfält längs överkanten, {{ui:Disposition}} och {{ui:Komponenter}} till vänster, 3D-vyn i mitten, {{ui:Entitetsinfo}}, {{ui:Stil}} och {{ui:Scener}} till höger, och ett statusfält längs nederkanten med värderutan och enheterna. [ModelCraft-skärmen](topic:workspace) förklarar varje del.

:::note
ModelCraft behöver WebGL, webbläsarens funktion för 3D-ritning. Om mitten av skärmen förblir tom och verktygen inte gör något, se [Felsökning](topic:troubleshooting#the-3d-view-is-blank).
:::

## Kontrollera enheterna först

Titta i nedre högra hörnet. Enhetsväljaren visar vad längder mäts i.

- En ny modell börjar i **fot och tum** när webbläsaren är inställd på USA (även Liberia och Myanmar), och i **millimeter** överallt annars.
- För att ändra väljer du en annan enhet i väljaren: {{ui:ft och in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} eller {{ui:mm}}. Själva modellen ändrar inte storlek; bara hur längder visas och hur nakna tal tolkas.

Ett tal du skriver utan enhet använder modellens enhet. I en modell med fot och tum är ett naket tal **tum**, så `120` betyder 10 fot.

## Låt ModelCraft guida dig genom din första modell

Ny på 3D? På kortet {{ui:Börja modellera}} klickar du på {{ui:Guidad första modell}} (den finns också i {{ui:Vyer}}). Ett litet kort leder dig genom fyra steg, från en platt rektangel till en modell redo för en 3D-skrivare:

1. Rita en rektangel på marken.
2. Dra upp den till en låda.
3. Gör lådan till ett enda objekt (en grupp).
4. Kontrollera den för 3D-utskrift och ladda sedan ner en 3MF- eller STL-fil.

Kortet följer modellen, inte knapparna: det går vidare när steget är klart, hur du än gjorde det, och går tillbaka ett steg när du ångrar. {{ui:Välj verktyget}} väljer verktyget åt dig. Stäng det när som helst med {{ui:×}}.

## Rita din första låda

1. Tryck på {{key:R}} för verktyget {{ui:Rektangel}}, eller klicka på {{ui:Rektangel}} i gruppen {{ui:Rita}} i verktygsfältet.
2. Klicka en gång på marken nära mitten av vyn. Det är det första hörnet.
3. Flytta pekaren bort. En rektangel följer den, och värderutan längst ned (märkt {{ui:Mått}}) visar dess storlek.
4. Skriv storleken och tryck på {{key:Enter}}: till exempel `4m,3m`, eller `16',12'` i fot och tum. Du behöver inte klicka i värderutan först; när du skriver ett tal skickas det dit.

   Du får en platt rektangel på marken. Det är en **yta**: en yta med kanter runt om.

5. Tryck på {{key:P}} för {{ui:Tryck/dra}}.
6. Klicka på rektangeln, flytta pekaren uppåt och klicka igen. Eller klicka på rektangeln och skriv en höjd, till exempel `3m` eller `10'`, och tryck sedan på {{key:Enter}}.

   Rektangeln blir en låda med ovansida, undersida och fyra sidor.

7. Tryck på {{key:Space}} för att gå tillbaka till {{ui:Markera}} och klicka sedan på lådans ovansida. {{ui:Entitetsinfo}} till höger visar dess area.

:::tip
Du kan också dra i stället för att klicka två gånger: tryck på det första hörnet, dra och släpp på det andra. Båda sätten fungerar för varje ritverktyg.
:::

## Titta runt

- **Orbit:** dra med mittenknappen (hjulet), eller tryck på {{key:O}} och dra med vänsterknappen.
- **Panorera:** dra med högerknappen, eller med mittenknappen medan du håller {{key:Shift}}.
- **Zooma:** vrid hjulet. Det zoomar mot det som finns under pekaren.
- **Se allt:** tryck på {{key:Shift+Z}}, eller klicka på {{ui:Utsträckning}}.

På en styrplatta eller en pekskärm är gesterna annorlunda. Se [Orbit, panorera och zooma](topic:orbit-pan-zoom).

## Ångra

Tryck på {{key:Mod+Z}} för att ångra och {{key:Mod+Y}} för att göra om, eller använd {{ui:Ångra}} och {{ui:Gör om}} i verktygsfältet. ModelCraft minns de senaste 200 stegen medan modellen är öppen. Historiken sparas inte i filen.

## Spara din modell

1. Klicka på {{ui:Spara}} i gruppen {{ui:Fil}}, eller tryck på {{key:Mod+S}}.
2. Webbläsaren laddar ner en fil uppkallad efter din modell, till exempel `Untitled.modelcraft`. Statusfältet säger vart den tog vägen: ”Untitled.modelcraft sparades i dina nedladdningar.”

**Att spara är en nedladdning.** Varje sparande gör en ny kopia i din nedladdningsmapp; den skriver inte över filen du öppnade. För att hålla projektmappen ordnad flyttar eller döper du om filen där själv. [Öppna, spara, importera och exportera](topic:files) förklarar varför och vad mer du kan göra.

:::warning
ModelCraft sparar inte av sig självt. Om du stänger fliken med osparade ändringar frågar webbläsaren först (”Lämna webbplatsen?”). Välj att stanna och spara sedan.
:::

## Få hjälp

Tryck på {{key:F1}} eller klicka på {{ui:Hjälp}} i appfältet för att öppna den här hjälpen bredvid modellen. Den fungerar utan anslutning. Tryck på {{key:F1}} igen, eller {{key:Esc}} inne i hjälpen, för att stänga den. Se [Använda den här hjälpen](common:help).

## Vart du går härnäst

- [Rita ytor med linjer, rektanglar och cirklar](topic:draw-faces)
- [Tryck och dra ytor till solider](topic:push-pull)
- [Skriv exakta mått i värderutan](topic:value-box)
- [Varje tangent och musåtgärd](topic:keyboard)
