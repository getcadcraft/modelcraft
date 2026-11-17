---
title: Groepen en componenten
summary: Voorkom dat objecten aan elkaar blijven plakken, bewerk één kopie om ze allemaal te wijzigen, en gebruik de deelvensters Overzicht en Componenten.
keywords: groep, component, groep maken, component maken, ontbinden, uniek maken, overzicht, instanties, kopieën, blok, genest, groep bewerken, plaatsen
from: 7cb925f3
---

Losse geometrie in ModelCraft blijft aan elkaar plakken: lijnen die elkaar raken, splitsen elkaar, en vlakken die een rand delen, bewegen samen. Dat maakt tekenen op vlakken mogelijk, maar het betekent ook dat een doos die tegen een andere doos wordt getekend ermee samensmelt. **Groepen** en **componenten** houden dingen gescheiden.

- Een **groep** omsluit geometrie zodat die als één object werkt. Niets buiten de groep kan eraan plakken.
- Een **component** is een groep die vaak geplaatst kan worden. Elke kopie deelt dezelfde inhoud: bewerk er één en ze veranderen allemaal. Gebruik componenten voor alles wat zich herhaalt: ramen, kolommen, bureaus, bomen.

## Een groep of component maken

1. Selecteer de geometrie. Een drievoudige klik op een vlak selecteert het hele verbonden object; een selectie door slepen selecteert alles in het kader.
2. Druk op {{key:Shift+G}} voor een groep, of op {{key:G}} voor een component. U kunt ook klikken op {{ui:Groep}} of {{ui:Component}} in de groep {{ui:Ordenen}} van de werkbalk, of op {{ui:Groep maken (Shift+G)}} of {{ui:Component maken (G)}} in {{ui:Entiteitsinformatie}}.

   De statusbalk meldt "Gegroepeerd als Group#1." of "Component Component#1 gemaakt.", het nieuwe object is geselecteerd en het verschijnt in het {{ui:Overzicht}}.

3. Om het een naam te geven, typt u een naam in het veld {{ui:Naam}} van {{ui:Entiteitsinformatie}} en drukt u op {{key:Enter}} of klikt u ergens anders.

Wanneer u een vlak selecteert, worden de randen ervan meegenomen. Als niets is geselecteerd, meldt de statusbalk: "Selecteer eerst geometrie (sleep een kader, of tik drievoudig om alles verbonden te selecteren)."

U kunt ook groepen groeperen: selecteer meerdere groepen en druk op {{key:Shift+G}}. Het {{ui:Overzicht}} toont de geneste structuur.

:::note
De letters van de sneltoetsen komen overeen met de standaard van SketchUp: {{key:G}} maakt een component, {{key:Shift+G}} een groep.
:::

## Bewerken binnen een groep of component

1. Dubbelklik erop (in het beeld of in het {{ui:Overzicht}}), of selecteer het en klik op {{ui:Bewerken}} in {{ui:Entiteitsinformatie}}.

   De rest van het model vervaagt, de assen verschuiven naar de eigen assen van de groep, en het {{ui:Overzicht}} toont "Bewerken: Model › Group#1". De statusbalk meldt "Bewerken Group#1. Esc of dubbelklikken buiten de groep sluit deze af."

2. Teken, duw/trek, verplaats en wis zoals gewoonlijk. Alles wat u doet blijft binnen de groep.
3. Sluit de groep: druk op {{key:Esc}} (twee keer als er iets is geselecteerd), dubbelklik op lege ruimte, of klik op {{ui:Groep sluiten}} in het {{ui:Overzicht}}.

Zolang een component open is, verandert elke kopie ervan terwijl u werkt.

## Meer kopieën van een component plaatsen

- Kopieer met {{ui:Verplaatsen}} en {{key:Ctrl}} (zie [Verplaatsen en kopiëren](topic:move-copy)). Elke kopie is een nieuwe plaatsing van dezelfde component.
- Of klik op {{ui:Plaatsen}} ernaast in het paneel {{ui:Componenten}}, en klik daarna waar hij moet komen. Het beginpunt, de laagste hoek van de doos rond wat u selecteerde toen u hem maakte, komt op de plek waar u klikt. Het gereedschap keert daarna terug naar {{ui:Selecteren}}.

{{ui:Componenten}} toont hoeveel kopieën er geplaatst zijn ("4×"), en het {{ui:Overzicht}} toont het aantal na de naam.

## Ordenen in het Overzicht

Sleep een rij in het {{ui:Overzicht}} om te veranderen waar die hoort. Er verandert niets in het beeld: een groep behoudt zijn plaats in het model.

- **In een groep:** zet hem op het midden van de rij van een groep (de rij krijgt een gestreepte omlijning). Hij gaat erin, als laatste.
- **In een andere volgorde:** zet hem op de boven- of onderrand van een rij (er verschijnt een lijn). Hij komt net vóór of na die rij, binnen dezelfde groep als die rij, dus zo komt hij ook op een gekozen plaats in een groep.
- **Naar het hoogste niveau:** zet hem op de kop {{ui:Overzicht}}. Hij gaat als laatste.

Elke verplaatsing is één stap: {{key:Mod+Z}} zet hem terug. {{key:Esc}} tijdens het slepen zet niets neer. Een groep kan niet in zichzelf of in een groep die hij bevat. Slepen is uitgeschakeld zolang er tekst in {{ui:Zoeken op naam}} staat.

:::touch
Houd een vinger een moment op een rij en sleep hem daarna. Een snelle veeg scrolt de lijst.
:::

## Eén kopie anders maken

Selecteer de kopie en klik op {{ui:Uniek maken}} in {{ui:Entiteitsinformatie}} (zichtbaar wanneer de component meer dan één keer is geplaatst). Die kopie krijgt een eigen definitie, met dezelfde naam als het origineel en een nieuw nummer. Bewerk die zonder de andere aan te raken.

## Een groep omzetten in een component

Selecteer de groep en klik op {{ui:Component maken}} in {{ui:Entiteitsinformatie}}. Hij krijgt een nieuwe naam, zoals Component#2, ook als u de groep al een naam had gegeven; typ de naam opnieuw in {{ui:Naam}}.

## Ontbinden

Selecteer een groep of component en klik op {{ui:Ontbinden}} (in de werkbalk of in {{ui:Entiteitsinformatie}}). De inhoud wordt losse geometrie op dezelfde plek, en plakt aan wat ze raken. Groepen erin blijven groepen.

## Solid en volume

Wanneer u een groep of component selecteert, toont {{ui:Entiteitsinformatie}} **Solid: ja** als de vlakken zonder openingen sluiten (elke rand wordt door precies twee vlakken gedeeld) en er geen groepen in genest zijn. Dan toont het ook het **volume**. Een doos, een wand met een raamopening erdoorheen, en een uitgetrokken cilinder zijn solids; een doos waarvan de bovenkant is gewist, niet.

## Wanneer de laatste kopie verdwijnt

Als u de laatste kopie van een component wist, wordt die ook uit het paneel {{ui:Componenten}} verwijderd. {{key:Mod+Z}} haalt hem terug.

## Wat u moet weten

- Kopieën van een **groep** die met Verplaatsen zijn gemaakt, delen in deze versie hun inhoud, net als componentkopieën: bewerken van de ene wijzigt de andere. Om er een onafhankelijk van te maken, klikt u op {{ui:Component maken}} en daarna op {{ui:Uniek maken}}. Zie [Problemen oplossen](topic:troubleshooting#editing-one-group-changed-another).
- Componenten snijden geen openingen in wanden en plakken niet aan vlakken, en er is geen bibliotheek met kant-en-klare componenten. U maakt ze zelf, of importeert ze.
- Geïmporteerde bestanden komen binnen als een groep. Collada-bestanden behouden hun eigen groepen en componenten erin.
