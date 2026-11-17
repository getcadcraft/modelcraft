---
title: Merjenje in postavljanje vodil
summary: Preberite dolžine in površine, izmerite razdaljo med dvema točkama z merilnim trakom ter postavite vodilne črte in točke, na katere lahko rišete.
keywords: meri, merilni trak, kotomer, kot, vodilo s kotom, vodilo, vodilna črta, konstrukcijska črta, razdalja, kota, dolžina, površina, odmik, postavitev, točka vodila
from: de6d04d9
---

## Preberite velikosti brez merjenja

Izberite nekaj in si oglejte {{ui:Entity info}}:

- Rob prikaže svojo **dolžino**.
- Ploskev prikaže svojo **površino** in koliko lukenj ima.
- Več ploskev prikaže njihovo **skupno površino**.
- Skupina ali komponenta prikaže svojo **velikost** (širina × globina × višina kvadra okoli nje) in, če je zaprto telo, njeno **prostornino**.
- Ko nič ni izbrano, {{ui:Entity info}} prikaže velikost celotnega modela.

Dolžine in površine uporabljajo enoto v izbirniku spodaj desno. Model v milimetrih prikaže površine od 0.01 m² naprej v kvadratnih metrih (soba 4 × 3 m se prikaže kot „12 m²“).

Med risanjem polje za vrednost sproti prikazuje dolžino, velikost, polmer ali razdaljo, zato redko kaj merite naknadno.

Če želite velikost spremeniti po risanju, izberite rob ali skupino in v {{ui:Entity info}} znova vpišite dolžino ali velikost. Ali postavite [koto](topic:dimensions) in vanjo vpišite novo dolžino.

## Izmerite med dvema točkama

1. Pritisnite {{key:T}} za merjenje z {{ui:Tape}}.
2. Kliknite točko: vogal, razpolovišče, točko na ploskvi ali tla. (Klik na rob naredi nekaj drugega; glejte spodaj.)
3. Premaknite se na drugo točko. Konica in polje za vrednost ({{ui:Length}}) prikažeta razdaljo. Lovi se na točke in na rdečo, zeleno ter modro smer.
4. Kliknite. Vrstica stanja pokaže „Izmerjeno: 4' 6"“, na drugi točki pa ostane **točka vodila**.

Če želite točko vodila postaviti na natančno razdaljo, po prvem kliku vpišite razdaljo in pritisnite {{key:Enter}}: gre v smer, v katero kažete.

## Postavite vodilno črto

Vodilna črta je neskončna črtkana črta, vzporedna z robom, na razdalji, ki jo izberete. Vodila uporabite za zamik, višino etaže ali začetek okna.

1. Pritisnite {{key:T}}.
2. Kliknite na **rob** (ne na njegov konec). Konica pove „Na robu“.
3. Premaknite se stran od roba, na stran, kamor naj gre vodilo. Sledi črtkana črta, vzporedna z robom, polje za vrednost ({{ui:Offset}}) pa prikaže razdaljo.
4. Kliknite ali vpišite odmik in pritisnite {{key:Enter}}: `1.5m`, `5'`.

   Vrstica stanja pokaže „Vodilna črta 1.5 m od roba.“

Začetek na obstoječi vodilni črti naredi drugo vodilo, vzporedno z njo, tako da lahko mrežo razširite od enega vodila.

Če vpišete odmik, ne da bi se prej premaknili stran od roba, ModelCraft ne ve, na katero stran mislite: „Najprej se premaknite stran od roba, da pokažete, na katero stran.“

## Vodilo pod kotom: kotomer

1. Kliknite {{ui:Protractor}} v skupini {{ui:Modify}}.
2. Kliknite središče: točko, skozi katero gre vodilo. Na ploskvi leži kotomer na tej ploskvi, drugje leži ravno. Po tem kliku {{key:Right}}, {{key:Left}} ali {{key:Up}} postavi kotomer pravokotno na rdečo, zeleno ali modro (ponovno pritisnite za razveljavitev).
3. Kliknite točko, ki določa 0°, na primer vzdolž roba.
4. Premaknite se na želeni kot in kliknite: lovi se v korakih po 15°. Ali vpišite kot v stopinjah, na primer `22.5`, in pritisnite {{key:Enter}}; vodilo gre na stran, na kateri je kazalka.

Vodilna črta gre skozi središče pod tem kotom. Vzdolž nje rišite z {{ui:Line}} za naklon strehe, posnetek roba ali poševno steno.

## Rišite glede na vodila

Orodja za risanje se lovijo na vodilne črte („Na vodilu“) in točke vodila („Točka vodila“) ter na mesto, kjer vodilna črta seka smer osi. Pravokotnik začnite tam, kjer se sekata dve vodili, da ga postavite natančno.

## Odstranjevanje vodil

- Eno vodilo: kliknite ga z {{ui:Select}} in pritisnite {{key:Delete}}, ali ga kliknite z {{ui:Eraser}}.
- Vsa vodila: ko nič ni izbrano, kliknite {{ui:Delete all guides}} v {{ui:Entity info}}.

Vodila se shranijo v datoteko `.modelcraft`. Ne izvažajo se v druge formate.
