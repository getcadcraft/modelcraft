---
title: Ublažavanje i glačanje ivica
summary: Sakrij ivice između površina koje se sastaju pod plitkim uglom, da zakrivljeni oblici izgledaju kao jedna glatka površina, u ModelCraft-u i u izvezenim datotekama.
keywords: ublaži, uglačaj, meke ivice, glatko senčenje, sakrij ivice, fasete, sa fasetama, zakrivljeno, normale, učvrsti, ugao
from: 52d32453
---

Zakrivljeni oblik u ModelCraft-u sastavljen je od ravnih površina. **Meke** ivice između tih površina se ne crtaju, a površine koje spajaju senče se kao jedna glatka površina, pa 24-strani valjak izgleda okrugao.

Kad podižeš krug sa {{ui:Guraj/vuci}}, njegove strane se automatski ublažavaju. Za druge oblike ublaži po uglu.

## Ublaži po uglu

1. Izaberi šta da ublažiš: površine i ivice, ili grupu ili komponentu (sve njene ivice).
2. U {{ui:Podaci o entitetu}} upiši ugao u {{ui:Ublaži do}}, na primer `20`, i klikni {{ui:Ublaži}}.

Svaka ivica u izboru čije dve površine skreću za taj ugao ili manje postaje meka; ivice sa oštrijim skretanjem ostaju tvrde. Strane prizme sa 12 strana skreću za 30°, a njeni obodi za 90°, pa `31` ublažava samo strane.

{{ui:Učvrsti sve}} čini svaku ivicu u izboru ponovo tvrdom. Svaka je jedan korak opozivanja.

## Važno znati

- Ublažavaju se samo ivice između tačno dve površine. Slobodne ivice ostaju kakve jesu.
- Glatko senčenje radi samo preko mekih ivica: površina bez meke ivice senči se ravno.
- Meke ivice se čuvaju u ModelCraft datoteci. Izvozi **glTF (.glb)** i **OBJ** nose glatko senčenje (normalu po uglu), pa drugi programi prikazuju istu površinu. Izvozi Collada i STL pišu ravne površine.
- Meke ivice su skrivene u svakom stilu površine, pa i u {{ui:Rendgen}} i u {{ui:Žičani model}}. Da ih vidiš, izaberi oblik i klikni {{ui:Učvrsti sve}}; opozivanje vraća ublažavanje.
