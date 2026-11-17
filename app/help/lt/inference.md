---
title: Krypčių nustatymas ir prisitraukimas
summary: Ką reiškia spalvoti žymekliai, kuris prisitraukimas laimi ir kaip užfiksuoti kryptį rodyklių klavišais arba Shift.
keywords: krypčių nustatymas, prisitraukimas, galinis taškas, vidurio taškas, paviršiaus centras, centras, ant briaunos, ant paviršiaus, ašis, raudona ašis, žalia ašis, mėlyna ašis, lygiagretus, statmenas, užfiksuoti, shift, osnap
from: e78984e9
---

Kol veikia piešimo ar redagavimo įrankis, ModelCraft žiūri, kas yra po žymekliu, ir prisitraukia prie naudingiausio daikto netoliese. Žymeklis parodo, ką rado, o užuomina apatiniame kairiajame kampe jį įvardija.

## Žymekliai ir užuominos

| Užuomina | Žymeklis | Prisitraukia prie |
|---|---|---|
| Galinis taškas | Žalias apskritimas | Briaunos galas |
| Vidurio taškas | Ciano apskritimas | Briaunos vidurys |
| Paviršiaus centras | Mėlynas apskritimas | Paviršiaus, esančio po žymekliu, vidurys |
| Pagalbinis taškas | Pilka | Pagalbinis taškas, paliktas matavimo juostos |
| Pradžia | Ochros spalvos | Ten, kur susitinka raudona, žalia ir mėlyna ašys |
| Ant raudonos ašies / Ant žalios ašies / Ant mėlynos ašies | Linija tos spalvos | Linija nuo pradžios taško ta kryptimi |
| Lygiagrečiai briaunai / Statmenai briaunai | Purpurinė linija | Linija nuo pradžios taško, lygiagreti arba statmena prisimintai briaunai (žr. žemiau) |
| Užfiksuota | Purpurinė linija | Kryptis, kurią užfiksavote rodyklės klavišu arba {{key:Shift}} |
| Ant briaunos | Raudonas kvadratas | Bet kur palei briauną |
| Ant pagalbinės linijos | Pilka | Bet kur palei pagalbinę liniją |
| Ant paviršiaus | Mėlynas rombas | Bet kur ant paviršiaus |
| Ant plokštumos | nėra | Plokštuma, kurioje pradėjote, kai žymeklis virš tuščios erdvės |
| Ant žemės | nėra | Žemė (raudona–žalia plokštuma), kai nieko kito nėra |

Kai ašies linija nuo pradžios taško kerta briauną ar pagalbinę liniją, ModelCraft prisitraukia prie susikirtimo, o užuomina nurodo abu, pavyzdžiui: „Ant raudonos ašies, ant briaunos“.

## Kuris prisitraukimas laimi

1. **Taškai** maždaug 12 pikselių spinduliu: pirmiausia galiniai taškai, tada pagalbiniai taškai, vidurio taškai, paviršiaus, esančio po žymekliu, centras ir pradžia.
2. **Kryptys** nuo pradžios taško: raudona, žalia ir mėlyna ašys bei lygiagrečiai ar statmenai prisimintai briaunai.
3. **Ant briaunos** arba pagalbinės linijos.
4. **Ant paviršiaus.**
5. **Brėžimo plokštuma** arba žemė.

Daiktai, paslėpti už paviršiaus, niekada nepritraukia. Pasukite vaizdą ({{ui:Sukti vaizdą}}), kad matytumėte norimą tašką.

## Piešimas ant paviršiaus nuo taško

{{ui:Stačiakampis}}, {{ui:Apskritimas}} arba {{ui:Daugiakampis}}, pradėtas nuo kampo, vidurio taško, briaunos ar paviršiaus centro, nubrėžiamas **po žymekliu esančio paviršiaus plokštumoje** ir perpjauna tą paviršių. Briauna priklauso dviem paviršiams, todėl sprendžia, kurioje briaunos pusėje yra žymeklis: norėdami piešti ant ilgos dėžės galo, pradėkite nuo vienos briaunos vidurio, o žymeklį laikykite tik galo paviršiaus viduje.

## Lygiagretumas ir statmenumas

ModelCraft prisimena **paskutinę briauną, per kurią žymeklis perėjo prieš pirmą spustelėjimą**. Pradėjus nuo kampo ar briaunos, laikoma, kad perėjote per tą briauną. Kai įrankis veikia, kitos briaunos, per kurias užvedate, to neperrašo.

Norėdami nubrėžti liniją lygiagrečiai esamai briaunai:

1. Paspauskite {{key:L}} ir užveskite žymeklį ant briaunos, kurią norite atitikti.
2. Perkelkite į pradžios tašką, jei galite, nekirsdami kitų briaunų, ir spustelėkite.
3. Judėkite lygiagrečiai tai briaunai. Linija tampa purpurinė, o užuomina sako „Lygiagrečiai briaunai“. Statmenumas veikia panašiai, plokštumoje, kurioje piešiate.

Jei prisimintas netinkamas briaunos, paspauskite {{key:Esc}}, užveskite ant teisingos briaunos ir pradėkite iš naujo.

## Užfiksuoti kryptį

Po pirmo įrankio spustelėjimo galite laikyti kitą tašką vienoje linijoje:

| Klavišas | Užfiksuoja į |
|---|---|
| {{key:Right}} | Raudoną ašį |
| {{key:Left}} | Žalią ašį |
| {{key:Up}} | Mėlyną ašį (tiesiai aukštyn) |
| {{key:Down}} | Lygiagrečiai prisimintai briaunai (žr. aukščiau) |

Paspauskite tą pačią rodyklę dar kartą, kad atrakintumėte. Būsenos juostoje rašoma: „Užfiksuota į raudoną ašį. Paspauskite tą pačią rodyklę, kad atrakintumėte.“

Užfiksavus, taškas slysta linija link to, kur yra žymeklis, ir vis tiek suderinamas su taškais, virš kurių užvedate: užveskite ant kito dėžės kampo, kad nubrėžtumėte liniją išilgai raudonos ašies tiek, kiek tas kampas.

{{key:Shift}} užfiksuoja tą kryptį, prie kurios dabar esate prisitraukę (ašį arba lygiagretumą), tol, kol laikote klavišą. Atleiskite, kad atrakintumėte.

Užraktai veikia {{ui:Linija}}, {{ui:Stačiakampis}}, {{ui:Apskritimas}}, {{ui:Daugiakampis}}, {{ui:Perkelti}}, {{ui:Mastelis}} ir {{ui:Matavimo juosta}}. Prieš pirmą spustelėjimą rodyklių klavišai vietoj to pasuka vaizdą.

## Grupės viduje

Redaguodami grupės ar komponento viduje, naudojate grupės savąsias ašis (jos juda kartu su grupe ir pasisuka, jei ji buvo pasukta). Prisitraukimai vis tiek randa taškus ir briaunas už grupės ribų, todėl galite suderinti daiktus su likusiu modeliu.
