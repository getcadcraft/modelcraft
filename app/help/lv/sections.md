---
title: Griezuma plaknes: atveriet modeli griezumā
summary: Novietojiet griezuma plakni, lai redzētu modeļa iekšpusi, pabīdiet to cauri, apgrieziet to vai izslēdziet griezumu.
keywords: griezums, griezuma plakne, griezuma šķēlums, griezt, izgriezums, apgriešana, iekšpuse, stāva plāns, šķēle, šķērsgriezums
from: 28c3a645
---

Griezuma plakne atver modeli griezumā, lai varētu redzēt un strādāt tā iekšpusē: mājas stāva plānu, skapja iekšpusi. Modelis netiek mainīts; griezums ir tikai skats.

## Novietot vienu

1. Grupā {{ui:Kamera}} noklikšķiniet uz {{ui:Griezums}}.
2. Noklikšķiniet uz virsmas. Plakne tiek novietota uz šīs virsmas, ar četrām bultiņām, kas vērstas pret jums.

   Noklikšķiniet ārpus jebkuras virsmas, lai plakne būtu taisni pret virzienu, kurā skatāties visvairāk. Vispirms nospiediet bultiņu taustiņu, lai to novietotu taisni pret sarkano ({{key:Right}}), zaļo ({{key:Left}}) vai zilo ({{key:Up}}).

Puse, uz kuru vērstas bultiņas, ir **nogriezta**. Plakne, kas novietota uz virsmas, pagaidām neko negriež: pabīdiet to modelī.

## Bīdīt, apgriezt, izslēgt

Noklikšķiniet uz plaknes kontūras, lai to atlasītu. Sadaļā {{ui:Objekta informācija}}:

- {{ui:Pa tās bultiņām}} norāda, kur tā atrodas. Ierakstiet jaunu attālumu un nospiediet {{key:Enter}}, lai pabīdītu to cauri modelim; ierakstot `-1m` plaknei, ko novietojāt uz priekšējas virsmas, tā pārvietojas 1 m modeļa iekšienē.
- {{ui:Apgriezt}} pagriež bultiņas apkārt, tātad nogriezta ir otra puse.
- {{ui:Aktīvs (griež modeli)}}: vienlaikus griež viena plakne. Atzīmējiet citas plaknes lodziņu vai novietojiet jaunu, un griezīs tā.
- Pārdēvējiet to laukā {{ui:Nosaukums}}; dzēsiet to ar {{key:Delete}} vai {{ui:Dzēšgumija}}.

Tur, kur plakne iet caur slēgtu cietķermeni, griezums tiek aizpildīts tumšā krāsā. Ģeometrija, kas nav slēgta (viena virsma, atvērta kaste), tiek nogriezta, bet nav aizpildīta.

## Rādīt un paslēpt

Sadaļā {{ui:Skati}}:

- {{ui:Rādīt griezuma plaknes}} paslēpj plakņu kontūras un bultiņas (griezums paliek).
- {{ui:Rādīt griezumus}} izslēdz griezumu un parāda visu modeli, neizdzēšot plaknes.

[Prezentācijas skats](topic:styles-shadows#presentation-view) paslēpj arī kontūras.

## Lietderīgi zināt

- To, kas ir nogriezts, nevar noklikšķināt vai piesaistīt, tāpēc varat zīmēt uz tā, ko rāda griezums.
- Griezuma plaknes, tas, kura ir aktīva, un abi slēdži tiek saglabāti ModelCraft failā. Katra izmaiņa ir viens atsaukšanas solis.
- Eksporti vienmēr satur visu modeli: griezums ir skats, nevis rediģēšana.
