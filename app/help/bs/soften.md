---
title: Zaobljavanje i izglađivanje ivica
summary: Sakrijte ivice između površina koje se spajaju pod plitkim uglom, pa zakrivljeni oblici izgledaju kao jedna glatka površina, u ModelCraft-u i u izvezenim datotekama.
keywords: zaobljavanje, izglađivanje, meke ivice, glatko sjenčenje, sakrij ivice, fasete, fasetirano, zakrivljeno, normale, oštri, ugao
from: 52d32453
---

Zakrivljeni oblik u ModelCraft-u sastavljen je od ravnih površina. **Meke** ivice između tih površina se ne crtaju, a površine koje spajaju sjenče se kao jedna glatka površina, pa cilindar s 24 strane izgleda okrugao.

Kad podignete krug s {{ui:Gurni/povuci}}, njegove strane se za vas zaobljavaju. Za druge oblike zaobljavajte po uglu.

## Zaobljavanje po uglu

1. Odaberite šta zaobljavate: površine i ivice, ili grupu ili komponentu (sve njene ivice).
2. U {{ui:Podaci o entitetu}} upišite ugao u {{ui:Zaobli do}}, na primjer `20`, i kliknite {{ui:Zaobli}}.

Svaka ivica u odabiru čije dvije površine skrenu za taj ugao ili manje postaje meka; ivice s oštrijim skretanjem ostaju tvrde. Stranice prizme s 12 strana skreću za 30°, a njeni obodi za 90°, pa `31` zaobljava samo stranice.

{{ui:Oštri sve}} čini svaku ivicu u odabiru opet tvrdom. Svaka je jedan korak poništavanja.

## Šta treba znati

- Zaobljavaju se samo ivice između tačno dvije površine. Slobodne ivice ostaju kakve jesu.
- Glatko sjenčenje radi samo preko mekih ivica: površina bez meke ivice sjenči se ravno.
- Meke ivice se čuvaju u ModelCraft datoteci. Izvozi **glTF (.glb)** i **OBJ** nose glatko sjenčenje (normalu po uglu), pa drugi programi prikazuju istu površinu. Collada i STL izvoze ravne površine.
- Meke ivice su skrivene u svakom stilu površina, uključujući {{ui:Rendgen}} i {{ui:Žičani model}}. Da ih vidite, odaberite oblik i kliknite {{ui:Oštri sve}}; poništavanje vraća zaobljavanje.
