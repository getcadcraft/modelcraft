---
title: Spremenite merilo s faktorji in dodatek za krčenje
summary: Spremenite merilo izbora s faktorjem za vsako os okoli točke, ki jo izberete, ali povečajte model za odstotek, za katerega se odlitek skrči.
keywords: merilo, neenakomerno, faktor, odstotek, raztegni, krčenje, odlivanje, model, livarna, dodatek, spremeni velikost
from: 37e1bbff
---

Orodje Merilo ({{key:S}}) spremeni merilo enakomerno ali povleče ročico, da raztegne eno ali dve smeri. **Spremeni merilo s faktorji …** (meni Orodja ali skupina Spreminjanje) je vpisana oblika: število za vsako od treh osi.

1. Izberite robove, ploskve, skupine ali komponente.
2. Odprite {{ui:Spremeni merilo s faktorji …}}. Vpišite faktor za rdečo, zeleno in modro. Faktor je lahko `1.015`, `101.5%` ali `+1.5%` (in `-2%` za manjšega). {{ui:Enako na vseh treh oseh}} prenese prvega na drugi dve.
3. Izberite, kaj **ostane na mestu**: sredino izbora, njegov najnižji kot, sredino njegovega dna ali izhodišče.
4. Vrstica pod polji prikaže velikost zdaj in po spremembi. {{ui:Merilo (S)}} to izvede v enem koraku razveljavitve.

Osi so osi skupine, ki jo imate odprto (osi modela na najvišji ravni). Skupina ali komponenta, ki je zasukana, se ob različnih faktorjih strižno deformira; namesto tega spremenite merilo skupine, v kateri je. Vsebina komponente se ne spreminja, zato ostanejo njene druge kopije take, kakršne so.

## Dodatek za krčenje

Ulit del se med hlajenjem skrči, zato je njegov model narejen večji. Pod **Dodatek za krčenje** vpišite odstotek za vsako os (vam ga za vašo kovino pove livarna ali izdelovalec modelov; 1.5 % spodaj je samo primer) in pritisnite {{ui:Uporabi kot faktorje}}.

- **Sam odstotek** naredi faktor 1 plus odstotek: 1.5 % da 1.015, kar označi krčilno merilo.
- **Natančno dovolj** naredi faktor 1 deljeno z ena minus odstotek: 1.5 % da 1.0152, zato odlitek po tolikšnem skrčenju pride v velikosti dela.

Vaši zadnji odstotki se zapomnijo v tem brskalniku.

:::note
Odstotek določite vi: ModelCraft ne ve ničesar o vaši kovini, kalupu ali postopku.
:::
