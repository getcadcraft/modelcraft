---
title: Omehčanje in glajenje robov
summary: Skrijte robove med ploskvami, ki se stikajo pod plitvim kotom, da ukrivljene oblike delujejo kot ena gladka površina, v ModelCraft in v izvoženih datotekah.
keywords: omehčaj, zgladi, mehki robovi, gladko senčenje, skrij robove, ploskve, fasetirano, ukrivljeno, normale, zaostri, kot
from: 52d32453
---

Ukrivljena oblika v ModelCraft je sestavljena iz ravnih ploskev. **Mehki** robovi med temi ploskvami se ne narišejo, ploskve, ki jih povezujejo, pa se senčijo kot ena gladka površina, tako da valj s 24 stranicami izgleda okrogel.

Ko z {{ui:Potisni/povleci}} dvignete krog, so njegove stranice za vas omehčane. Pri drugih oblikah omehčajte po kotu.

## Omehčanje po kotu

1. Izberite, kaj boste omehčali: ploskve in robove ali skupino ali komponento (vse njene robove).
2. V {{ui:Podatki o entiteti}} vtipkajte kot v {{ui:Omehčaj do}}, na primer `20`, in kliknite {{ui:Omehčaj}}.

Vsak rob v izboru, katerega dve ploskvi se obrneta za ta kot ali manj, postane mehek; robovi z ostrejšim zasukom ostanejo trdi. Prizma z 12 stranicami se obrne za 30° na stranicah in za 90° na robovih, zato `31` omehča samo stranice.

{{ui:Zaostri vse}} naredi vsak rob v izboru spet trd. Vsako dejanje je en korak razveljavitve.

## Pomembno vedeti

- Mehki so samo robovi med natanko dvema ploskvama. Prosti robovi ostanejo, kakršni so.
- Gladko senčenje deluje samo čez mehke robove: ploskev brez mehkega roba se senči ravno.
- Mehki robovi se shranijo v datoteko ModelCraft. Izvoza **glTF (.glb)** in **OBJ** nosita gladko senčenje (normalo na oglišče), tako da drugi programi prikažejo isto površino. Collada in STL izvozita ravne ploskve.
- Mehki robovi so skriti v vsakem slogu ploskev, tudi v {{ui:Rentgen}} in {{ui:Žični model}}. Da jih vidite, izberite obliko in kliknite {{ui:Zaostri vse}}; razveljavitev vrne omehčanje.
