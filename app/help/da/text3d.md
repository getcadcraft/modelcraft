---
title: 3D-tekst
summary: Tilføj skrift til en model som flader, flade eller massive, stående på en hvilken som helst flade: et skilt, et husnummer, et navn på en dør.
keywords: 3d-tekst, tekst, bogstaver, skrift, skilt, skiltning, husnummer, etiket, gravér, skrifttype, ord
from: 923f5d93
---

{{ui:3D-tekst}} i gruppen {{ui:Tegn}} laver skrift af flader, som du kan male, skubbe/trække eller skære ind i et massivt legeme.

## Tilføj tekst

1. Klik på {{ui:3D-tekst}}.
2. Skriv teksten. Tryk på {{key:Enter}} i feltet for en ny linje.
3. Indstil {{ui:Bogstavhøjde}} (højden på et stort bogstav, fx `30cm` eller `1'`) og {{ui:Dybde}}:
   - `0` giver **flade bogstaver**: flader, der ligger på det, du placerer dem på, klar til at male eller skubbe/trække.
   - En dybde som `5cm` giver **massive bogstaver**: lukkede massive legemer, som du kan bruge med [værktøjerne til massive legemer](topic:solids).
4. Klik på {{ui:Placér}}, og klik derefter, hvor teksten skal stå.

På en flade ligger teksten på den flade og læses fra venstre mod højre: på en væg står den lodret; på jorden eller et bord ligger den fladt langs rød. Væk fra en flade ligger den på jorden.

Teksten er en **komponent**, opkaldt efter sig selv, så alle kopier ændres, hvis du redigerer én, og den vises i listen {{ui:Komponenter}}, så du kan placere den igen.

## Ting at vide

- Bogstaverne er ModelCraft's egen enkeltstregskrift, fortykket: rene og læselige, uden valg af skrifttype endnu.
- Bogstaver, cifre og almindelige tegn (inklusive accenterede bogstaver) tegnes; et tegn, skriften ikke har, vises som en lille firkant.
- For at ændre ordene, slet teksten og tilføj den igen.
- For at skære skrift ind i en flade laver du massive bogstaver, placerer dem halvt inde i en massiv gruppe og [subtrahérer](topic:solids) dem.
