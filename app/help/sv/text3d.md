---
title: 3D-text
summary: Lägg till skrift i en modell som ytor, platta eller solida, stående på vilken yta som helst: en skylt, ett husnummer, ett namn på en dörr.
keywords: 3d-text, text, bokstäver, skrift, skylt, skyltning, husnummer, etikett, gravera, typsnitt, ord
from: 923f5d93
---

{{ui:3D-text}} i gruppen {{ui:Rita}} gör skrift av ytor, som du kan måla, tryck/dra eller skära in i en solid.

## Lägg till text

1. Klicka på {{ui:3D-text}}.
2. Skriv texten. Tryck på {{key:Enter}} i rutan för en andra rad.
3. Ange {{ui:Bokstavshöjd}} (höjden på en versal, till exempel `30cm` eller `1'`) och {{ui:Djup}}:
   - `0` ger **platta bokstäver**: ytor som ligger på det du placerar dem på, redo att målas eller tryckas/dras.
   - Ett djup som `5cm` ger **solida bokstäver**, slutna solider som du kan använda med [solidverktygen](topic:solids).
4. Klicka på {{ui:Placera}} och klicka sedan där texten ska stå.

På en yta ligger texten på den ytan och läses från vänster till höger: på en vägg står den upprätt; på marken eller ett bord ligger den plant längs rött. Om den inte är på någon yta ligger den på marken.

Texten är en **komponent** som heter efter sig själv, så varje kopia ändras om du redigerar en, och den visas i listan {{ui:Komponenter}} så att du kan placera den igen.

## Att tänka på

- Bokstäverna är ModelCrafts egna enkelstreckade typsnitt, förtjockat: rent och läsbart, men utan något val av typsnitt ännu.
- Bokstäver, siffror och vanliga tecken (inklusive accenterade bokstäver) ritas; ett tecken som typsnittet saknar visas som en liten ruta.
- För att ändra orden tar du bort texten och lägger till den igen.
- För att skära in skrift i en yta gör du solida bokstäver, placerar dem halvvägs in i en solidgrupp och [subtraherar](topic:solids) dem.
