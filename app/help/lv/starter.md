---
title: Sākuma bibliotēka
summary: Apmēram trīsdesmit gatavi objekti, ko ievietot modelī: durvis un logi, mēbeles, virtuve un vannas istaba, kolonnas un kāpnes, koki, cilvēki un automašīna.
keywords: iekārtot, iekārtot telpu, mēbeļu izkārtojums, guļamistaba, dzīvojamā istaba, virtuve, vannas istaba, birojs, renderēšana, bibliotēka, sākuma, apkārtnes objekti, koki, cilvēki, automašīnas, augi, krūmi, dzīvžogs, komponenti, mēbeles, durvis, logs, krēsls, galds, dīvāns, gulta, tualete, kāpnes, kolonna, koks, cilvēks, automašīna, noliktava, gatavs
from: 3c06b69c
---

{{ui:Sākuma bibliotēka}} sniedz ikdienas objektus reālos izmēros, lai modelis uzreiz būtu saprotams: durvis, kas parāda telpas mērogu, automašīna piebraucamajā ceļā, cilvēki un koki ap ēku.

## Vienas ievietošana

1. Kreisajā pusē {{ui:Komponenti}} noklikšķiniet uz {{ui:Sākuma bibliotēka}}.
2. Izvēlieties objektu, piemēram, {{ui:Krēsls}}.
3. Noklikšķiniet, kur tam jāatrodas.

Uz stāva, galda vai zemes tas stāv uz tā. **Durvis un logi** ir veidoti, lai ietilptu sienās: noklikšķiniet uz sienas, un tie stāv tajā, vērsti uz āru. (Tie atrodas uz sienas virsmas; tie neveido atvērumu. Lai to izveidotu, uzzīmējiet taisnstūri uz sienas, kur būs logs, un izstumiet to cauri.)

Katrs objekts ir **komponents**: izvēloties to pašu vēlreiz, tiek novietota cita kopija, un, rediģējot vienu, mainās visas kopijas. Tas arī parādās sarakstā {{ui:Komponenti}} ar {{ui:Ievietot}}, lai pievienotu vēl.

## Kas tajā ir

| Grupa | Objekti |
|---|---|
| Durvis un logi | Durvis, divviru durvis, logs, plats logs, garāžas durvis |
| Mēbeles | Ēdamgalds, apaļais galds, krēsls, bāra krēsls, dīvāns, atzveltnes krēsls, divguļamā un vienguļamā gulta, rakstāmgalds, grāmatplaukts, skapis |
| Virtuve un vannas istaba | Apakšējais un sienas skapītis, virtuves darba virsma, ledusskapis, plīts, izlietnes skapītis, tualete, vanna, dušas kabīne, izlietne |
| Ēka | Taisnas kāpnes (15 pakāpieni pa 18 cm), apaļa un kvadrāta kolonna, sija |
| Teritorija un cilvēki | Koks, krūms, cilvēks (1.75 m), automašīna |
| Apkārtnes objekti: koki, cilvēki un automašīnas | Lapu koki (4, 6 un 10 m), skujkoks, kolonveida koks, apaļi un mazi krūmi, dzīvžogs, podā stādīts augs, stāvoši un ejoši cilvēki, bērns, sedans un SUV: apaļākas formas savās krāsās, [renderētiem attēliem](topic:render) un situācijas plāniem |

Tie ir vienkāršas formas, veidotas no cietiem ķermeņiem, ko var krāsot, mērogot vai [padarīt unikālus](topic:groups-components) un mainīt. Sienas skapītis karājas 1.45 m virs vietas, kur noklikšķināt.

Apkārtnes objekti ir zīmēti ar CadCraft un ir brīvi lietojami jebkam (CC0); tie paši koki, cilvēki un automašīnas ir bibliotēkā Library, kas paredzēta BimCraft un CadCraft. Automašīnas logi ir nokrāsoti ar materiālu {{ui:Tonēts stikls}}, tāpēc tie ir caurspīdīgi attēlos.

## Telpas iekārtošana renderēšanai

Atlasiet telpas grīdu (vienu līmeņa virsmu, kas skatās uz augšu, modelī vai grupā) un izmantojiet **Kārtošana › Iekārtot telpu…** (poga **Iekārtot**). Izvēlieties, kāda telpa tā ir — guļamistaba, dzīvojamā istaba, ēdamistaba, virtuve, vannas istaba vai birojs — vai ļaujiet pēc izmēra uzminēt. Sākuma mēbeles tiek novietotas pie sienām, sākot no garākās sienas apkārt, nekas nepārklājas, un jebkuras sākuma durvju atvēršanās zona telpas sienās (un logu platums aiz augstām mēbelēm) paliek brīva. Tas ir noklusējuma izkārtojums pēc noteikumiem, ko jūs pārskatāt, nevis dizains: tā pati telpa vienmēr saņem to pašu izkārtojumu.

Viss nonāk **vienā grupā** ar birku **Mēbeles**, kā viens atsaukšanas solis: atsaukt, dzēst grupu vai paslēpt birku, lai to noņemtu. Objekts, kas neietilpst, tiek nosaukts statusa rindā un uzskaitīts sadaļā **Problēmas** kā piezīme. BimCraft **Iekārtot telpu** izmanto tos pašus noteikumus.
