---
title: Menyer, tangenter och mus
summary: Välj en menystil som passar den modellerare du redan kan, ge valfritt kommando en egen tangent, flytta kommandon mellan menyer och ställ in vad hjulet samt mittenknappen och högerknappen gör.
keywords: menystil, menyer, menyrad, verktygsfält, tangentbordsgenvägar, snabbtangenter, tangenter, tangentstil, tangentkarta, anpassa, ommappa, mus, hjul, invertera, zoomriktning, mittenknapp, högerknapp, kretsa, panorera, exportera, importera, byta, bekant, tryck/dra, modellerare
from: e56fce3d
---

ModelCraft:s verktyg är desamma oavsett hur du når dem. En **menystil** avgör var de sitter på skärmen, vad de heter där och vilka tangenter som kör dem. Välj en i {{ui:Inställningar}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menyer, tangenter och mus}}; ändringen är omedelbar, och den här webbläsaren minns den.

## Stilarna

| Stil | Vad du får |
|---|---|
| {{ui:ModelCraft}} | ModelCrafts egen verktygsrad (Arkiv, Rita, Ändra, Ordna, Redigera, Kamera) och dess enbokstavstangenter: {{key:L}} linje, {{key:R}} rektangel, {{key:P}} tryck/dra, {{key:M}} flytta, {{key:Q}} rotera, {{key:S}} skala, {{key:E}} radergummi, {{key:O}} kretsa. Utgångsläget. |
| {{ui:Tryck/dra}} | En menyrad (Arkiv, Redigera, Visa, Kamera, Rita, Verktyg, Fönster) över en rad med huvudverktygen, med samma enbokstavstangenter. |
| {{ui:Modellerare}} | En menyrad i sidhuvudet (Arkiv, Redigera, Visa, Markera, Lägg till, Objekt, Nät) och tangenterna för nätmodellerare: {{key:W}} markera, {{key:G}} greppa, {{key:R}} rotera och {{key:S}} skala markeringen på en gång ({{key:X}}, {{key:Y}} eller {{key:Z}} låser en axel medan den rör sig), {{key:E}} tryck/dra, {{key:B}} rektangel, {{key:X}} ta bort, {{key:A}} markera allt, {{key:Alt+A}} inget, {{key:Shift+D}} duplicera, {{key:Mod+G}} grupp, {{key:H}} dölj. Mittenknappen kretsar; {{key:Shift}} och mittenknappen panorerar, {{key:Mod}} och mittenknappen zoomar; högerknappen avbryter det ett verktyg gör. |
| {{ui:Nybörjare}} | En menyflik där fliken {{ui:Skapa}} har några stora knappar: former att släppa, hål, flytta, vrid och storlek, justera, {{ui:Grupp}} (hål skurna i formerna) och kontrollen för 3D-utskrift; alla andra verktyg finns på fliken {{ui:Fler verktyg}}. Högerknappen kretsar, mittenknappen panorerar. Se [Nybörjarstilen](topic:beginner). |

Tangentstilen du kanske känner från {{ui:Nycklar}} längst ned till höger i vyn och från {{ui:Redigera}} › {{ui:Mer}} är samma val: att välja modellerartangenterna där väljer {{ui:Modellerare}}-stilen, och att välja tryck/dra-tangenterna lämnar den för {{ui:ModelCraft}}-stilen. Hade du valt modellerartangenterna i en äldre version, öppnas ModelCraft en gång i {{ui:Modellerare}}-stilen av sig självt.

:::tip
En tangent som hör till tryck/dra-tangenterna men som din stil ger ett annat kommando gör ingenting, och statusraden säger var dess kommando tog vägen ("I Modellerare är Tryck/dra E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} och piltangenterna behåller alltid sin betydelse, siffror går alltid till värderutan, och medan ett verktyg flyttar något vinner dess egna tangenter.
:::

## Gör den till din egen

1. Välj stilen som ligger närmast det du vill ha och klicka sedan på {{ui:Anpassa…}}.
2. Under {{ui:Tangenter och menyer}} hittar du ett kommando (sökrutan hjälper). Klicka på {{ui:Lägg till en tangent}} och tryck på tangenten. Klicka på en tangent för att ta bort den.
3. Med en menyrad flyttar {{ui:Var det sitter}} kommandot till en annan meny, eller till {{ui:Bara tangenter}}.
4. Under {{ui:Mus}} ställer du in hjulet och vad knapparna gör i 3D-vyn.
5. Ge den ett namn och klicka på {{ui:Spara}}.

Att spara en inbyggd stil gör en egen kopia ("Min Modellerare"); den inbyggda ändras aldrig. Din kopia läser tangenter på samma sätt som stilen den utgick från: en kopia gjord från {{ui:Modellerare}} låter greppa-, rotera- och skalatangenterna fungera på en gång.

## Mus

- **Mushjulet**: {{ui:Rulla uppåt zoomar in}} (utgångsläget) eller {{ui:Rulla uppåt zoomar ut}}, och hur snabbt. En nypning på styrplattan zoomar alltid åt det håll som dina fingrar rör sig.
- **Dra i 3D-vyn**: {{ui:Varje vys egen}} behåller ModelCrafts knappar (mittenknappen kretsar, högerknappen eller {{key:Shift}} och mittenknappen panorerar). Eller ställ mitten- och högerknappen på att kretsa, panorera, zooma eller inget; {{key:Shift}} med knappen byter kretsning och panorering. Vänsterknappen tillhör alltid det verktyg som används.
- **Styrplattor**: {{ui:Inställningar}} › {{ui:ModelCraft}} › {{ui:Rullning}} avgör fortfarande om två fingrar kretsar (styrplatta) eller zoomar (mus). Se [Kretsa, panorera och zooma](topic:orbit-pan-zoom).

## Ta den med dig

{{ui:Exportera}} sparar stilen som används i en liten `.ccinput.json`-fil; {{ui:Importera…}} lägger till en, från en annan dator eller från en kollega. En importerad fil kan bara peka på ModelCrafts egna kommandon: allt annat i den utelämnas och räknas i statusraden. {{ui:Ta bort den här stilen}} tar bort en av dina egna.

:::note
Inställningarna stannar i den här webbläsaren. {{ui:Använd den här stilen i alla appar}} under stilkorten gör att alla appar öppnas i sin motsvarande stil: {{ui:Tryck/dra}} hör ihop med de andra apparnas menyradsstilar. {{ui:Modellerare}} har ingen motsvarighet i de andra apparna, så den förblir ett ModelCraft-val.
:::

Se även: [Tangent- och musåtgärder](topic:keyboard) · [ModelCraft-inställningar](topic:settings) · [Från andra modellerare](topic:coming-from)
