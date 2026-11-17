---
title: Måla med färger och material
summary: Ge ytor, grupper och komponenter en enhetlig färg eller ett material som tegel, fasadpanel, takbeklädnad eller trä, och behåll dem när du exporterar.
keywords: måla, färg, färger, material, textur, texturer, tegel, fasadpanel, takbeklädnad, trä, sten, kakel, betong, bruk, gräs, grus, glas, metall, färghink, fyllning, prov, pipett, standard, glb, obj, mtl, collada
from: b1500523
---

Färger hjälper dig skilja delar av en modell åt, och **material** (tegel, fasadpanel, takbeklädnad, trä, sten, kakel, betong, bruk, gräs, glas, metall) gör att den ser ut som det den är byggd av. Båda målas på samma sätt.

## Välj en färg

Avsnittet {{ui:Färger}} till höger visar en rad med enhetliga färger, {{ui:Standard}} (den som är genomstruken: ingen färg) och en {{ui:+}}-ruta för valfri annan färg. Klicka på en för att göra den till aktuell färg. Målarverktyget startar med den.

## Måla

1. Tryck på {{key:B}} ({{ui:Måla}}), eller klicka på en färg när inget är markerat. (Med något markerat målar ett klick på en färg markeringen direkt.)
2. Klicka på en yta för att måla den.
3. Klicka på en grupp eller en komponent för att måla just den kopian: dess ytor som inte har någon egen färg får den här färgen. Ytor du målat inuti den behåller sina.

För att måla flera saker samtidigt, markera dem först och klicka sedan på en färg, eller klicka på någon av dem med {{ui:Måla}}. Det är ett enda steg att ångra.

| Håll | Och klicka på en yta | Vad som målas |
|---|---|---|
| — | | Den ytan |
| {{key:Ctrl}} | | Varje yta ansluten till den som har samma färg |
| {{key:Shift}} | | Varje yta med den färgen i gruppen du arbetar i |
| {{key:Alt}} | | Ingenting: du plockar i stället upp den färgen |

För att ta tillbaka en yta till ingen färg, välj {{ui:Standard}} och klicka på den.

## Måla med ett material

Avsnittet {{ui:Material}}, under {{ui:Färger}}, listar materialbiblioteket efter typ: tegel och block, fasadpanel, takbeklädnad, trä, sten, kakel, betong, bruk, mark, glas och metall. Håll muspekaren över en ruta för dess namn. Klicka på en och måla sedan precis som med en färg: {{key:B}}, klicka på ytor, grupper eller komponenter; eller markera först och klicka på materialet.

- I stilen **Skuggad** visar ytorna materialets textur. Dold linje, trådmodell och röntgen visar dess färg.
- Texturer går **vågrätt längs varje yta** och **upp längs den**: tegelskift ligger vågrätt på varje vägg, takpannor löper nedför takets lutning, brädor på ett golv följer den röda axeln. De har sin verkliga storlek (ett tegel är cirka 215 mm långt), så de ser rätt ut på alla avstånd.
- I en [renderad bild](topic:render) behåller material sin textur, sin grovhet och, för glas och metall, sin glans.
- {{key:Alt}}-klick med {{ui:Måla}} plockar upp även en ytas material.

Texturerna ritas av ModelCraft själv, så de fungerar offline och är fria att använda för vad som helst (CC0).

## Komponenter och färger

En färg som målats på en yta **inuti** en komponent visas på varje kopia, eftersom kopiorna delar en gemensam definition. En färg som målats på en **kopia** utifrån (med komponenten stängd) hör bara till den kopian, så två kopior av samma komponent kan ha olika färger. {{ui:Entitetsinfo}} visar färgen för en markerad yta, grupp eller komponent.

## Färger i filer

- ModelCraft-filen behåller varje färg och varje material.
- Andra format får en **materialfärg** (dess utseende på avstånd) i stället för texturen: glTF, Collada, OBJ, DWG och DXF, samt kontrollen för 3D-utskrift. I glTF, Collada och OBJ behåller materialet sitt namn, till exempel `Material_brick-red`.
- **glTF (.glb)** och **Collada (.dae)**: varje färg blir ett material. En komponent som visas i olika färger skrivs en gång per färg. glTF skriver även importerade texturer som texturer.
- **OBJ**: export laddar ner två filer, `.obj` och en `.mtl`-materialfil med färgerna. Spara dem i samma mapp. Med importerade texturer kommer `.obj`, `.mtl` och bilderna som en enda `.zip`.
- **DWG** behåller de exakta färgerna; **DXF** använder den närmaste av de 255 standardfärgerna i CAD.
- **STL** och **PLY** bär färger: STL i VisCAM/SolidView-konventionen (program som inte läser den ignorerar den), PLY som en färg på varje punkt. Se [Filformat i detalj](topic:formats).

:::tip
För att modellera en skärm: måla ramen antracit och glaset blått efter att du har [förskjutit](topic:draw-faces) framsidan.
:::
