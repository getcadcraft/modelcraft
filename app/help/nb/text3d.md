---
title: 3D-tekst
summary: Legg til skrift i en modell som flater, enten flate eller som volumlegemer, stående på en hvilken som helst flate: et skilt, et husnummer, et navn på en dør.
keywords: 3D-tekst, tekst, bokstaver, skrift, skilt, skilting, husnummer, etikett, gravere, skrifttype, ord
from: 923f5d93
---

{{ui:3D-tekst}} i gruppen {{ui:Tegn}} lager skrift av flater, som du kan male, trykke/trekke eller kutte inn i et volumlegeme.

## Legg til tekst

1. Klikk {{ui:3D-tekst}}.
2. Skriv teksten. Trykk {{key:Enter}} i boksen for en ny linje.
3. Sett {{ui:Bokstavhøyde}} (høyden på en stor bokstav, for eksempel `30cm` eller `1'`) og {{ui:Dybde}}:
   - `0` gir **flate bokstaver**: flater som ligger på det de plasseres på, klare til å males eller trykkes/trekkes.
   - En dybde som `5cm` gir **fulle bokstaver**: lukkede volumlegemer som kan brukes med [volumverktøyene](topic:solids).
4. Klikk {{ui:Plasser}}, og klikk deretter der teksten skal være.

På en flate ligger teksten på den flaten og leses fra venstre mot høyre; på en vegg står den oppreist; på bakken eller et bord ligger den flat langs rød. Uten noen flate ligger den på bakken.

Teksten er en **komponent** oppkalt etter seg selv, så alle kopier endres når én redigeres, og den vises i listen {{ui:Komponenter}} for å plasseres på nytt.

## Ting å vite

- Bokstavene er ModelCrafts egen enkeltstrøkskrift, fortykket: klar og lesbar, uten valg av skrifttype ennå.
- Bokstaver, siffer og vanlige tegn (inkludert aksenter) tegnes; et tegn som skrifttypen mangler, vises som en liten boks.
- For å endre ordene, slett teksten og legg den til på nytt.
- For å kutte skrift inn i en overflate: lag fulle bokstaver, plasser dem halvveis inn i en volumgruppe, og [trekk dem fra](topic:solids).
