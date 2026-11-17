---
title: 3D teksts
summary: Pievienojiet modelim burtus kā virsmas, plakanus vai cietus, novietotus uz jebkuras virsmas: zīme, mājas numurs, vārds uz durvīm.
keywords: 3d teksts, teksts, burti, burtojums, zīme, zīmes, mājas numurs, etiķete, iegravēt, fonts, vārdi
from: 923f5d93
---

{{ui:3D teksts}} grupā {{ui:Zīmēšana}} izveido burtus no virsmām, kurus var krāsot, stumt/vilkt vai iegriezt cietā ķermenī.

## Pievienot tekstu

1. Noklikšķiniet uz {{ui:3D teksts}}.
2. Ierakstiet tekstu. Lodziņā nospiediet {{key:Enter}}, lai ievadītu otru rindu.
3. Iestatiet {{ui:Burta augstums}} (lielā burta augstums, piemēram, `30cm` vai `1'`) un {{ui:Dziļums}}:
   - `0` veido **plakanus burtus**: virsmas, kas guļ uz tā, uz ko tos novietojat, gatavas krāsošanai vai stumšanai/vilkšanai.
   - Dziļums, piemēram, `5cm`, veido **cietus burtus**: slēgtus cietus ķermeņus, ar kuriem var strādāt ar [cietvielu rīkiem](topic:solids).
4. Noklikšķiniet uz {{ui:Ievietot}}, pēc tam noklikšķiniet, kur jābūt tekstam.

Uz virsmas teksts guļ uz šīs virsmas, lasāms no kreisās uz labo pusi: uz sienas tas stāv vertikāli; uz zemes vai galda tas guļ plakans gar sarkano asi. Ārpus jebkuras virsmas tas guļ uz zemes.

Teksts ir **komponents** ar tā nosaukumu, tāpēc, rediģējot vienu, mainās katra kopija, un tas parādās sarakstā {{ui:Komponenti}}, lai to varētu ievietot atkal.

## Svarīgi zināt

- Burti ir ModelCraft pašu vienas līnijas fonts, sabiezināts: tīrs un lasāms, bez fonta izvēles pagaidām.
- Burti, cipari un parastas zīmes (arī burti ar diakritiskajām zīmēm) tiek zīmēti; rakstzīme, kuras fontā nav, parādās kā maza kaste.
- Lai mainītu vārdus, izdzēsiet tekstu un pievienojiet to vēlreiz.
- Lai iegrieztu burtus virsmā, izveidojiet cietus burtus, novietojiet tos līdz pusei cietā grupā un [atņemiet](topic:solids) tos.
