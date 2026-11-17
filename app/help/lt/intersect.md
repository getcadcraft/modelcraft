---
title: Paviršių susikirtimai
summary: Nubrėžkite linijas, kur paviršiai kerta vienas kitą, kad galėtumėte stumti, trinti ar dažyti gabalus.
keywords: susikirtimas, susikirtimas su modeliu, susikirtimas su pasirinkimu, pjūvis, anga, skylė, sujungti, linijos, kur paviršiai kertasi, boolean
from: 6bc58526
---

Kai viena forma eina per kitą, ModelCraft nenubrėžia linijos, kur jų paviršiai susitinka: jie tiesiog persidengia. **Susikirtimas** nubrėžia tas linijas kaip briaunas, todėl paviršiai ten susiskaldo. Tada galite stumti/traukti, trinti ar dažyti gabalus.

Abi komandos yra {{ui:Redagavimas}} › {{ui:Daugiau}}.

## Susikirtimas su modeliu

Pjauna pasirinktus daiktus pagal **kiekvieną ekrane esantį paviršių**.

Pavyzdžiui, sija (grupė) eina per sieną (kita grupė), ir norite angos sienoje:

1. Dukart spustelėkite sieną, kad ją atidarytumėte, ir pasirinkite visus jos paviršius ({{key:Ctrl+A}}).
2. {{ui:Redagavimas}} › {{ui:Daugiau}} › {{ui:Susikirtimas su modeliu}}.

Sijos kontūras nubrėžiamas ant abiejų sienos paviršių kaip du nauji paviršiai. Vieną jų stumkite per sieną, kad padarytumėte angą, tada uždarykite sieną.

## Susikirtimas su pasirinkimu

Pjauna pasirinktus paviršius, grupes ir komponentus **tik tarpusavyje**. Pasirinkite bent du.

## Kur eina linijos

Linijos visada nubrėžiamos **atidarytame kontekste**: modelyje, kai nėra atidarytos grupės, arba grupėje, kurią redaguojate. Grupės ir komponentai, kurie nėra atidaryti, nekeičiami. Taigi norėdami supjaustyti grupės paviršius, pirmiausia ją atidarykite, kaip pavyzdyje aukščiau.

## Ką žinoti

- Paviršiai, esantys toje pačioje plokštumoje, nesusikerta.
- Linijos, uždarančios kilpą paviršiuje, sudaro naują paviršių, kaip ir nubrėžtos linijos.
- Kiekvienas susikirtimas yra vienas anuliavimo žingsnis. Jei nieko nekerta, niekas nepasikeičia.
- Uždarų formų atveju [vientisų kūnų įrankiai](topic:solids) (Union, Subtract) atlieka visą darbą viename žingsnyje.
