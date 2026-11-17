---
title: Zaglađivanje i izglađivanje bridova
summary: Sakrijte bridove između ploha koje se spajaju pod malim kutom, pa zakrivljeni oblici izgledaju kao jedna glatka površina, u ModelCraftu i u izvezenim datotekama.
keywords: zagladi, izglađi, meki bridovi, glatko sjenčanje, sakrij bridove, facete, facetirano, zakrivljeno, normale, zaoštri, kut
from: 52d32453
---

Zakrivljeni oblik u ModelCraftu sastavljen je od ravnih ploha. **Meki** bridovi između tih ploha se ne crtaju, a plohe koje spajaju sjenčaju se kao jedna glatka površina, pa 24-strani cilindar izgleda okruglo.

Kad krug izvučete s {{ui:Potisni/povuci}}, njegove strane se automatski zaglade. Za ostale oblike zaglađujte prema kutu.

## Zaglađivanje prema kutu

1. Odaberite što zaglađujete: plohe i bridove, ili grupu ili komponentu (svi njezini bridovi).
2. U {{ui:Informacije o entitetu}} upišite kut u {{ui:Zagladi do}}, primjerice `20`, i kliknite {{ui:Zagladi}}.

Svaki brid u odabiru čije se dvije plohe zakreću za taj kut ili manje postaje mekan; bridovi s oštrijim zakretom postaju tvrdi. Bočne strane prizme s 12 stranica zakreću se za 30°, a njezini rubovi za 90°, pa `31` zagladi samo bočne strane.

{{ui:Zaoštri sve}} ponovno čini svaki brid u odabiru tvrdim. Svako je jedan korak poništavanja.

## Što treba znati

- Zaglađuju se samo bridovi između točno dviju ploha. Slobodni bridovi ostaju kakvi jesu.
- Glatko sjenčanje radi samo preko mekih bridova: ploha bez mekog brida sjenča se ravno.
- Meki bridovi čuvaju se u datoteci ModelCraft. Izvozi **glTF (.glb)** i **OBJ** nose glatko sjenčanje (normalu po kutu), pa drugi programi prikazuju istu površinu. Collada i STL izvoze ravne plohe.
- Meki bridovi skriveni su u svakom stilu ploha, a također i u {{ui:Rendgen}} i {{ui:Žičani model}}. Da ih vidite, odaberite oblik i kliknite {{ui:Zaoštri sve}}; poništavanje vraća zaglađivanje.
