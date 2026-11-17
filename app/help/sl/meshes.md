---
title: Mreže
summary: Spremenite skupino ali komponento v mrežo, vrsto predmeta, s katero orodja za 3D vsebino modelirajo, in nazaj v geometrijo potisni/povleci.
keywords: mreža, mreže, poligon, poligoni, n-kotnik, štirikotnik, štirikotniki, oglišča, polrob, uv, pretvori, pretvori v mrežo, pretvori v geometrijo, podrazdelitev, kiparjenje, modeliranje, 3D vsebina
from: e32363e8
---

ModelCraft ima dve vrsti geometrije. **Geometrija potisni/povleci** je to, kar narišete: ravne ploskve, ki se držijo skupaj, sekajo druga drugo in se zacelijo. **Mreža** je vrsta predmeta, s katero orodja za 3D vsebino modelirajo: ploskve s poljubnim številom kotov, pri čemer ima vsak kot lahko svoje teksturne koordinate (UV), normale in barve, vsako oglišče pa vrednosti, kot so uteži. Mreža je postavljena kot skupina ali komponenta in stoji ob geometriji potisni/povleci v istem modelu.

## Pretvorba skupine ali komponente v mrežo

1. Izberite skupino ali komponento.
2. V {{ui:Podatki o entiteti}} kliknite {{ui:Pretvori v mrežo}}.

Njene ploskve postanejo ploskve mreže (ploskev z luknjami pride kot trikotniki), trdi robovi ostanejo ostri, mehki robovi se gladko senčijo, barvanje, materiali in uvožene teksture pa ostanejo na svojih ploskvah. Skupine in komponente znotraj nje se združijo v eno mrežo. Prosti robovi se izpustijo: mreža ohrani ploskve. Vsaka postavitev komponente prikazuje mrežo. To je en korak razveljavitve.

## Kaj prikazuje Podatki o entiteti

Izberite mrežo, da vidite njene ploskve, oglišča in robove, ali je zaprto telo (in njegovo prostornino) ter njeno velikost, kot je postavljena. Mreža z odprtimi robovi pove, koliko jih je.

## Pretvorba mreže nazaj v geometrijo potisni/povleci

Izberite mrežo in kliknite {{ui:Pretvori v geometrijo}}. Ravne ploskve se vrnejo, kot so bile; ploskev, katere koti niso v eni ravnini, se vrne kot trikotniki. Ostri robovi so trdi, ostali mehki. {{ui:Razstavi}} da ploskve mreže naravnost v skupino okoli nje.

## Kar morate vedeti

- Dvakrat kliknite mrežo, da [uredite njena oglišča, robove in ploskve](topic:mesh-edit) v delovnem okolju Mreža. Pretvorite jo v geometrijo, da jo urejate s potisni/povleci; premaknite, zasukajte, spremenite merilo, kopirajte, pobarvajte, skrijte in označite jo kot katero koli skupino.
- Izvozi, 3D-tiskanje, upodobitve in VR vidijo mrežo kot njene ploskve.
- Datoteka, ki hrani mrežo, se shrani kot novejša različica datoteke `.modelcraft`, zato je ModelCraft 0.6 in starejši ne more odpreti; datoteke brez mreže se v njih odprejo kot prej. Pretvorite mreže v geometrijo, da datoteko delite z nekom, ki ima starejšo različico.
- Razveljavitev na mreži hrani samo to, kar je vsak korak spremenil, zato se tudi zelo velika mreža razveljavi hitro.

Glejte tudi [Skupine in komponente](topic:groups-components) in [Še ni izdelano](topic:not-built-yet).
