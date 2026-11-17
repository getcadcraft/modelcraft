---
title: Skaleeri teguritega ja kahanemisvaru
summary: Skaleeri valikut teguri kaupa iga telje jaoks valitud punkti ümber või suurenda mustrit sel protsendi võrra, mille võrra valatud detail kahaneb.
keywords: skaleerimine, mittühtlane, tegur, protsent, venitamine, kahanemine, kahanemisvaru, valamine, muster, valukoda, varu, suuruse muutmine
from: 37e1bbff
---

Mõõtkava tööriist ({{key:S}}) skaleerib ühtlaselt või lohistab käepidet, et venitada ühes või kahes suunas. **{{ui:Skaleeri teguritega…}}** (menüü Tööriistad või rühm Muuda) on kirjutatud vorm: arv iga kolme telje jaoks.

1. Vali servad, tahud, grupid või komponendid.
2. Ava {{ui:Skaleeri teguritega…}}. Sisesta tegur punase, rohelise ja sinise jaoks. Tegur võib olla `1.015`, `101.5%` või `+1.5%` (ja `-2%`, väiksemaks). {{ui:Sama kõigil kolmel teljel}} kopeerib esimese kahele teisele.
3. Vali, mis **jääb paigale**: valiku keskpunkt, madalaim nurk, selle põhja keskpunkt või päritolu.
4. Väljade all olev rida näitab praegust ja tulevast suurust. {{ui:Mõõtkava}} teeb muudatuse ühe tagasivõtmise sammuna.

Telgede suunad on avatud grupi omad (mudeli omad ülemisel tasandil). Pööratud grupp või komponent tuleb moonutatud, kui tegurid erinevad; skaleeri hoopis seda hoidvat gruppi. Komponendi sisu ei puututa, seega jäävad selle teised koopiad samaks.

## Kahanemisvaru

Valatud detail kahaneb jahtudes, seega tehakse selle muster suuremaks. Jaotises **Kahanemisvaru** sisesta protsent iga telje jaoks (sinu valukoda või mustrimeister annab selle sinu metalli jaoks; allpool olev 1.5 % on ainult näide) ja vajuta {{ui:Kasuta teguritena}}.

- **Protsent ise** teeb teguriks 1 pluss protsent: 1.5 % annab 1.015, mida kahanemisjoonlaud märgib.
- **Täpselt piisav** teeb teguriks 1 jagatud ühega miinus protsent: 1.5 % annab 1.0152, nii et valu tuleb välja detaili suuruses pärast seda, kui see nii palju kahaneb.

Viimased protsendid jäävad sellesse brauserisse meelde.

:::note
Protsent on sinu anda: ModelCraft ei tea midagi sinu metallist, vormist ega protsessist.
:::
