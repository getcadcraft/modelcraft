---
title: Impordi .3dm-mudel
summary: Impordi .3dm-fail koos võrkude, pindade, kõverate, plokkide, kihtide ja värvidega; vaata, kust kolmnurgad tulevad ja mis jäetakse välja.
keywords: 3dm, impordi, nurbs, polüpind, brep, pinnad, renderdusvõrk, väljapressimine, kõverad, plokid, kihid, sildid, värvid, ühikud, üleminek, migreerimine
from: 3cf29879
---

ModelCraft loeb `.3dm`-faile oma lugejaga, lehel endal. Midagi ei laadita üles ja see töötab võrguta, nii alati kui ModelCraft ise. Versioonide 5, 6, 7 ja 8 paigutused on testitud; vanemad (versioonid 2 kuni 4) peaksid samuti avanema, kuid neid pole veel proovitud.

## Faili importimine

1. Klõpsa rühmas {{ui:Fail}} nuppu {{ui:Impordi}} (või lohista `.3dm`-fail 3D-vaatele).
2. Vali fail.

   Olekuriba ütleb „Loeb faili chair.3dm…“, seejärel, mis tuli sisse, näiteks „Imporditud chair.3dm: 14 võrku (8330 tahku), 8 kõverat, 5 plokipaigutust, 3 kihti siltidena. Pinnad: 7 tahku failis salvestatud võrkudest, 29 tükeldas CadCraft.“

Kogu mudel tuleb ühe grupina, mis on nimetatud faili järgi, valitud, ja vaade suumib sinna. Üks {{key:Mod+Z}} viib selle kõik uuesti ära, koos siltidega.

## Kust kolmnurgad tulevad

ModelCraft modelleerib tahkude ja võrkudega, seega tuleb iga pind failist sisse [võrguna](topic:meshes), mis koosneb väikestest tasastest kolmnurkadest. Iga polypinna (ja iga väljapressimise) tahu puhul võtab ModelCraft järgmises järjekorras:

1. **Failis salvestatud renderdusvõrk.** Enamik modelleerimisprogramme salvestab iga pinnaga võrgu, mida nad ekraanil näitasid; kui see on olemas, kasutab ModelCraft seda nagu on.
2. **Oma tükeldus**, kui failis pole salvestatud võrku: tasandid, NURBS-pinnad, pöördepinnad (sfäärid, koonused, toroidid, pööratud kujud), väljapressitud kõverad ja väljapressimised (koos nende aukude ja otsakorkidega), lõigatud oma servade järgi. Polypinna tahud jagavad oma servapunkte, nii et suletud polypind tuleb sisse suletud võrguna. Kõverad alad jaotatakse, kuni kolmnurgad jäävad umbes 0.15 % objekti suurusest tegelikust pinnast.
3. **Mitte midagi**, tahu puhul, mis on pinna liik, mida ModelCraft veel ei loe. Olekuriba ütleb, mitu tahku ja mis liiki.

Olekuriba osa „Pinnad:“ ütleb, mitu tahku tuli salvestatud võrkudest ja mitu ModelCraft tükeldas. Faili ühe tahu sees olevad servad on pehmed ja tahkude vahelised servad teravad, nii et kõver tahk varjutub sujuvalt.

:::tip
Kõige truuemate kujude saamiseks salvesta fail selle programmiga, mis selle tegi, koos renderdusvõrkudega (see on tavaliselt vaikimisi; valik „salvesta väike“ need välja jätab).
:::

## Mis tuleb sisse

- **Võrgud** koos oma tippude värvide ja tekstuuri koordinaatidega.
- **Polypinnad, pinnad ja väljapressimised**, nagu eespool kirjeldatud.
- **Kõverad** (jooned, murdjooned, kaared, ringid, NURBS-kõverad ja neist ühendatud kõverad) kui [servad](topic:curves), üks servagrupp kihi kohta.
- **Plokid** tulevad [komponentidena](topic:groups-components): iga ploki paigutus on ühe komponendi paigutus, nii et ühe koopia muutmine muudab kõiki. Plokid plokkide sees jäävad alles.
- **Kihid** muutuvad [siltideks](topic:tags) täieliku kihinimega („Furniture::Chairs“), peidetud, kui kiht oli välja lülitatud. Iga objekti paigutus kannab oma kihi silti.
- **Värvid.** Objekti värv tuleb sellest, kust fail seda ütleb: objekti enda, kihi või materjali põhivärvist. See muutub tema tahkude värviks.
- **Peidetud objektid tulevad peidetuna**; {{ui:Näita kõiki}} näitab need.
- **Ühikud:** fail ütleb oma ühiku; mudel tuleb sisse oma tõelises suuruses.

## Mis jäetakse välja (ja öeldakse)

Olekuriba osa „Märkused:“ nimetab kõik, mis sisse ei tulnud, koos arvuga:

- punktid ja punktipilved, tekst, tekstipunktid, mõõdud, viiktekstid, viirutused, valgustid, lõiketasandid ja paigutuse üksikasjad;
- SubD-objektid: muuda need enne võrkudeks või polypindadeks selles programmis, mis faili tegi;
- tahud nihutatud pindadel ja muud pinnaliigid, mida ModelCraft veel ei loe, kui failis ei ole nende jaoks võrku salvestatud;
- plokid, mis on seotud teistest failidest (loetakse ainult fail, mille impordid);
- väljapressimised kaldus (nurga all lõigatud) otstega tulevad sisse ristlõigatud otstega.

Materjali tekstuurid, renderdussätted, nimetatud vaated, grupid ja kasutajatekst ei lähe sisse; materjal annab ainult põhivärvi.

## Piirangud

Failid kuni 300 MB. Kahjustatud fail ütleb, mis on valesti, ja ei lisa midagi; objekt, mida ei saa lugeda, jäetakse välja ja loetakse, ülejäänud tuleb sisse.
