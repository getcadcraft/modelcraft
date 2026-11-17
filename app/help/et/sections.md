---
title: Lõiketasandid: lõika mudel lahti
summary: Aseta lõiketasand, et näha mudeli sisse, libista seda läbi, pööra ümber või lülita lõige välja.
keywords: lõige, lõiketasand, lõike, lõikamine, lõikeläbivaade, klipp, sisemine, korruseplaan, viil, ristlõige
from: 28c3a645
---

Lõiketasand lõikab mudeli lahti, nii et näed ja töötad selle sees: maja korruseplaan, kapi sisemus. Mudelit ei muudeta; lõige on ainult vaade.

## Aseta see

1. Klõpsa rühmas {{ui:Kaamera}} nupul {{ui:Lõige}}.
2. Klõpsa tahku. Tasand asetatakse sellele tahule, neli noolt osutavad sinu poole.

   Klõpsa mõnda tahust eemale, et panna ruudukujuline tasand sinna suunda, kuhu enim vaatad. Vajuta esmalt nooleklahvi, et seada tasand ruudukujuliselt punase ({{key:Right}}), rohelise ({{key:Left}}) või sinise ({{key:Up}}) suhtes.

Noolte suunas olev pool on **lõigatud ära**. Tahule asetatud tasand ei lõika veel midagi: libista see mudelisse.

## Libista, pööra ümber, lülita välja

Klõpsa tasandi kontuuril, et see valida. Jaotises {{ui:Objekti teave}}:

- {{ui:Noolte suunas}} ütleb, kus see asub. Sisesta uus kaugus ja vajuta {{key:Enter}}, et libistada see läbi mudeli; `-1m` tasandil, mille panid esitahule, viib selle 1 m mudelisse.
- {{ui:Pööra ümber}} pöörab noolte suuna, nii et teine pool lõigatakse ära.
- {{ui:Aktiivne (lõikab mudelit)}}: korraga lõikab üks tasand. Märgi teise tasandi kast või aseta uus ja see lõikab hoopis.
- Nimeta ümber väljal {{ui:Nimi}}; kustuta klahviga {{key:Delete}} või {{ui:Kustutaja}}.

Kohas, kus tasand läbib suletud tahkist, täidetakse lõige tumeda värviga. Mitte suletud geomeetria (üksik tahk, avatud kast) lõigatakse, aga ei täideta.

## Näita ja peida

Jaotises {{ui:Vaated}}:

- {{ui:Näita lõiketasandeid}} peidab tasandite kontuurid ja noolte (lõige jääb alles).
- {{ui:Näita lõikeid}} lülitab lõike välja ja näitab kogu mudelit, kustutamata tasandeid.

[Esitlusvaade](topic:styles-shadows#presentation-view) peidab ka kontuurid.

## Asjad, mida teada

- Lõigatud ära jäävat ei saa klõpsata ega haakida, nii et saad joonistada sellele, mida lõige näitab.
- Lõiketasandid, see, milline on aktiivne, ja kaks lülitit salvestatakse ModelCraft-faili. Iga muudatus on üks tagasivõtmise samm.
- Eksport sisaldab alati kogu mudelit: lõige on vaade, mitte muudatus.
