---
title: Weka modeli ya .3dm hai
summary: Badilisha modeli kwenye programu iliyoitengeneza na uone mabadiliko hapa, kutoka Rhino 8 au ufafanuzi wa Grasshopper, bila kuhifadhi na kuingiza tena.
keywords: rhino, grasshopper, kiungo hai, muunganisho hai, 3dm, nurbs, parametric, kiungo, sawazisha, hati, modeli ya rejeleo, sukuma
from: 331b0a7e
---

Endelea kumodeli pale unapomodeli, na utumie matokeo hapa: kuitengeneza kama picha, kuiwashia taa, au kupanga onyesho kuizunguka. Kila mabadiliko kwenye programu nyingine husasisha kikundi kimoja kwenye ModelCraft.

:::note
Kiungo kinahitaji **CadCraft Studio** kwenye kompyuta hiyo hiyo. Kichupo cha kivinjari hakiwezi kushikilia muunganisho. Hakuna kinachopitia mtandaoni: hati huzungumza na Studio kwenye anwani ya kompyuta hii yenyewe, kwa tokeni.
:::

:::warning
Kiungo hiki kimejaribiwa kwa kiandishi cha faili cha hati na mbadala wa programu nyingine, bado si ndani ya Rhino au Grasshopper wenyewe. Ikiwa kitu kitashindwa hapo, tuambie kilichosema.
:::

## Sanidi

1. Kwenye Studio, fungua ModelCraft. Katika {{ui:Mipangilio}} › {{ui:ModelCraft}} › {{ui:Wasaidizi}}, weka alama kwenye **Ruhusu wasaidizi wa AI na hati kutumia ModelCraft**, kisha **{{ui:Hariri}}**.
2. Kwenye Studio, chagua {{ui:Unganisha msaidizi}}. Inaonyesha anwani na tokeni utakayobandika hapa chini.
3. Pakua hati: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Kutoka Rhino

1. Endesha `cadcraft_link.py` kwenye kihariri cha hati cha Rhino (Python 3 katika Rhino 8).
2. Mara ya kwanza, bandika anwani na tokeni. Zinahifadhiwa kwenye `.cadcraft-link.json` kwenye folda yako ya nyumbani, kamwe si kwenye modeli. Studio hutengeneza tokeni mpya kila inapoanza, kwa hivyo hati itauliza tena hapo.

Modeli nzima huingia kama kikundi kimoja kinachopewa jina la hati, kwa mfano "chair (linked)". Baada ya hapo, kila mabadiliko huingia unaposimama kwa muda mfupi, na vitu vilivyobadilika tu ndivyo vinavyotumwa. Endesha hati tena ili kusimamisha.

## Kutoka Grasshopper

Endesha hati mara moja kwenye Rhino kwanza, ili anwani na tokeni zihifadhiwe.

1. Ongeza kijenzi cha Script (Python 3) na ubandike `cadcraft_link.py` yote ndani yake.
2. Kiwe na ingizo hizi: `G` (jiometri, yenye ufikiaji wa orodha), `N` (jina, hiari), `On` (kitufe cha boolean), na `Target` (hiari: `model` au `part`, ikiwa programu zote mbili zimefunguliwa).
3. Weka `On` iwe true.

Kila hesabu hutuma `G` na kubadilisha kile kijenzi kilichotuma mara ya mwisho, kwa hivyo kuburuta kitelezi husasisha kikundi hapa. Matokeo yake `a` yanaonyesha kilichotokea. Kila kijenzi kina kikundi chake.

## Unachoweza kufanya na kikundi

- **Kisogeze, kiwekee lebo, jenga karibu nacho.** Mahali unapokiweka kikundi na lebo yake hubaki kupitia kila usasishaji, na vilevile kila kilicho karibu nacho.
- **Usihariri ndani yake.** Kila usasishaji hubadilisha kilichomo ndani ya kikundi. Programu nyingine ndiyo inamiliki vitu hivyo.
- **Tendua.** Masasisho yaliyo ndani ya sekunde mbili kutoka kwa kila moja hushiriki hatua moja ya kutendua, kwa hivyo {{key:Mod+Z}} huondoa kuburuta kizima. Sasisho lijalo huirudisha modeli ilingane.
- **Hifadhi.** Faili iliyohifadhiwa huhifadhi kiungo. Endesha hati tena baada ya kuifungua, na kikundi kile kile kitasasishwa.

## Kinachoingia

Matundu, poliuso, nyuso na extrusion kama matundu unayoyaona kwenye skrini, SubD kama matundu yake, mikunjo kama kingo, bloku kama vitu tofauti mahali zilipo (si kama komponenti), tabaka kama lebo, rangi na vipimo. Tazama [Ingiza faili ya .3dm](topic:import-3dm-files) kuona jinsi hivyo vinavyoonekana hapa.

Vinavyoachwa, pamoja na idadi katika programu nyingine: nukta, maandishi, vipimo, taa na vinginevyo.

**Njia moja pekee.** Mabadiliko hapa hayarudi kwenye programu nyingine.

## Ikiwa kitu kitaenda vibaya

- **"Hakuna dirisha la ModelCraft wala PartCraft linaloruhusu hili":** fanya hatua ya 1 ya usanidi.
- **"Studio imekataa tokeni":** Studio imeanzishwa upya. Nakili tokeni mpya na endesha hati tena. Kwa Grasshopper, iendeshe kwenye Rhino kwanza.
- **"Imeshindwa kufikia CadCraft Studio":** Studio haiendeshwi, au anwani imebadilika.
