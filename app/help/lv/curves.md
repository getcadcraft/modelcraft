---
title: Līkņu objekti
summary: Zīmējiet Bézier, NURBS un taisnu segmentu līknes, piešķiriet tām biezumu, platumu vai sašaurinājumu, aizpildiet plakanās, iestatiet tekstu kā līkni un pārvērtiet tās tīklos.
keywords: līkne, līknes, bezier, nurbs, splains, splaini, ceļš, caurule, kabelis, virve, fasēšana, izspiešana, sašaurināšana, sasvēršana, rādiuss, aizpildījums, profils, teksts, burti, logotips, līkne uz tīklu
from: 602bf077
---

**Līkņu objekts** ir līkne, kas veido formu: caurule pa to (fasēšana), josla (izspiešana), sašaurinošs rags (sašaurināšana) vai — ja tā ir plakana un slēgta — aizpildīta plāksne vai burti. Forma seko līknei: pārvietojiet punktu, un caurule pārvietojas kopā ar to. Kad forma ir pareiza, pārvērtiet to tīklā.

## Līknes pievienošana

Darbvietu sarakstā izvēlieties {{ui:Līkne}} un nospiediet {{ui:Pievienot}}:

| Veids | Ko tas ir |
| --- | --- |
| Bézier līkne, Bézier riņķis | Iet caur saviem punktiem; katram punktam ir divi rokturi, kas iestata līknes virzienu |
| NURBS līkne, NURBS riņķis, Ceļš | Gluda, vilkta uz saviem punktiem (sākas un beidzas savos galapunktos); katram punktam ir svars |
| Teksts | Jūsu teksts kā plakanas, aizpildītas burtu kontūras |

Jaunai līknei ir plāna caurule, lai to varētu redzēt un atlasīt; iestatiet tās fasēšanas dziļumu uz 0 tīrai līknei.

Varat arī sākt no kaut kā zīmēta: atlasiet loku, riņķi, daudzstūri vai zīmētu līkni darbvietā {{ui:Modelēšanas darbvieta}} un nospiediet {{ui:Izveidot līknes objektu}} sadaļā {{ui:Objekta informācija}}. Zīmētās līnijas paliek.

## Punktu rediģēšana

Veiciet dubultklikšķi uz līkņu objekta (vai atlasiet to un izvēlieties {{ui:Līkne}}), lai to rediģētu.

- Noklikšķiniet punktu vai rokturi ({{key:Shift}} pievieno vai noņem); velciet, lai pārvietotu. Velciet tukšā vietā, lai atlasītu ar kasti.
- {{ui:Pagarināt}} ({{key:E}}, vai {{key:Ctrl}}+klikšķis) pievieno punktu aiz atlasītā gala, kursora vietā.
- {{ui:Sadalīt}} ({{key:W}}) ievieto punktu starp katru atlasīto kaimiņu pāri; Bézier saglabā savu formu.
- {{ui:Pārvietot}}, {{ui:Pagriezt}} un {{ui:Mērogot}} pārvieto atlasītos punktus ar kursoru (modelētāja taustiņi {{key:G}} {{key:R}} {{key:S}}, stumt/vilkt taustiņi {{key:M}} {{key:Q}} {{key:S}}); noklikšķiniet, lai paturētu, {{key:Esc}}, lai atceltu.
- {{ui:Aizvērt}} ({{key:C}}) aizver atvērtu splainu vai atver slēgtu; {{ui:Apgriezt}} ({{key:Shift+R}}) iet otrādi.
- Bézier rokturi: {{ui:Izlīdzināt}} ({{key:V}}) novieto tos gludai līknei, {{ui:Stūris}} ({{key:Shift+V}}) vērš tos uz kaimiņiem, {{ui:Brīvs}} ({{key:Alt+V}}) atstāj tos, kur novietojāt. Velkot rokturi, tas kļūst brīvs.
- {{ui:Bézier}}, {{ui:NURBS}} un {{ui:Poli}} maina atlasīto splainu tipu, saglabājot punktus.

Katra izmaiņa ir viens atsaukšanas solis.

## Forma

Iestatījumi ir panelī (un {{ui:Objekta informācija}} darbvietā Modelēšana):

- **Forma:** 3D līknes iet jebkurā virzienā; plakana līkne paliek savā plaknē un var tikt aizpildīta.
- **Aizpildīt slēgtos splainus** (plakanas): kontūras kļūst par plāksni; kontūra iekšā citai ir caurums, tāpēc burtiem paliek to caurumi.
- **Izspiešana:** puse no joslas platuma (atvērtas vai 3D līknes) vai puse no plāksnes biezuma (aizpildītas).
- **Fasēšanas dziļums** un **noapaļojums:** apaļa caurule pa līkni (ar izspiešanu: noapaļota josla); aizpildītai formai — noapaļota mala.
- **Aizvērt galus:** vāciņi atvērtai caurulei.
- **Sašaurināt pa to:** vienmērīgi mērogo pa katru splainu, piemēram, `1, 0.2` ragam, `0, 1, 0` vārpstiņai.
- **Gludums** un, NURBS gadījumā, **kārtība:** cik smalki tā tiek zīmēta un cik gluda (2 — taisna … 6 — vislīdzenākā).
- Ar atlasītiem punktiem: **rādiuss** (caurules biezums tajā vietā, reizināts ar fasēšanu), **sasvēršana** (pagriež joslu ap līkni) un NURBS gadījumā **svars**.

Modifikatori darbojas virs līkņu objekta kā uz tīkla: Masīvs pa to, Spogulis, Subdivision virsma. Skatiet [Modifikatori uz tīkla](topic:modifiers).

## Pārvēršana tīklā

{{ui:Par tīklu}} (darbvietā {{ui:Līkne}} vai {{ui:Objekta informācija}}, {{ui:Līkne par tīklu}}) pārvērš līkņu objektu par tīklu, kādu tas rāda tagad; tā modifikatori paliek virsū. Pēc tam rediģējiet to darbvietā Tīkls. Atsaukšana to atgriež.

Skatiet arī [Tīkli](topic:meshes) un [Tīkla rediģēšana](topic:mesh-edit).
