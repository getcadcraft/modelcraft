---
title: Send masse til BimCraft
summary: Send trykk/trekk-masser til BimCraft som massealternativer, med etasjer, fotavtrykk, bruttoareal og volum beregnet fra hvert volumlegeme.
keywords: masse, konsept, alternativer, bimcraft, ifc, bim, trykk trekk, etasjer, bruttoareal, fotavtrykk, volum, send, overfør, bygningsmasse, trinn 2
from: 73c51f3f
---

## Formål

Gjør blokkene du har modellert med trykk/trekk om til massealternativer som BimCraft forstår, slik at konseptet fortsetter som en bygningsmodell.

## Før du starter

Gjør hver masse til en **gruppe** eller **komponent**, og gi den et navn. Hver blir ett alternativ. Løs geometri sendes ikke.

## Send den

1. Velg gruppene som skal sendes. Uten valg sendes alle grupper og komponenter på øverste nivå.
2. Velg {{ui:Export}}, og deretter {{ui:Massing to BimCraft…}}.
3. Skriv inn {{ui:Name of the option set}} og {{ui:Floor height}}.
4. Kontroller listen: etasjer, fotavtrykk, bruttoareal og volum for hvert alternativ.
5. Velg **Send til BimCraft** for å åpne BimCraft i en ny fane med alternativene, eller {{ui:Save as IFC}} for å laste ned filen og åpne den der selv.

I BimCraft listes alternativene under «Massealternativer i modellen», der ett kan gjøres til gjeldende alternativ og utvikles til vegger og dekker.

## Hvordan et volumlegeme blir til en masse

- **Etasjer** er volumlegemets høyde delt på etasjehøyden, avrundet, og minst én. Etasjene deler deretter volumlegemets høyde likt, så en 10 m blokk med 3 m etasjer får 3 etasjer på 3.33 m.
- **Arealet til en etasje** er arealet av volumlegemets egne horisontale snitt på den etasjens nivå. En blokk som trekker seg inn, har mindre øvre etasjer, og bruttoarealet er summen av dem.
- **Fotavtrykket** er konturen av snittet rett over volumlegemets base.
- **Volumet** er volumlegemets eget.

I IFC-filen er hvert alternativ et bygningselement-proxy (fotavtrykket hevet til volumlegemets høyde) med ett rom per etasje, som bærer etasjens bruttoareal. Alle alternativene deler én bygning, med så mange etasjer som det høyeste alternativet har.

## Forenklede former

En enkel rett blokk sendes akkurat som modellert. Alt annet sendes også, og listen sier hvorfor formen er forenklet:

- **Ikke alle etasjene er like store som basen** (den trekker seg inn eller skråner): massen i BimCraft er basekonturen hevet til full høyde, men etasjearealene og volumet er volumlegemets egne.
- **Volumlegemet er ikke lukket**: etasjer der snittet ikke kan lukkes, måles ikke og teller som ingenting. Lukk volumlegemet ({{ui:Entity info}} sier «Volumlegeme: Ja») for fulle tall.
- **Basen har mer enn én kontur**: den største brukes som fotavtrykk.

## Greit å vite

- {{ui:IFC for BimCraft (.ifc)}} er en annen eksport: den sender bare former og navn, uten etasjer eller arealer.
- Ingenting lastes opp. Filen overleveres til BimCraft-fanen på denne datamaskinen.
