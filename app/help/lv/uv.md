---
title: Izkārtot tīkla UV
summary: Atzīmējiet šuves, izvērsiet, projicējiet un sakārtojiet tīkla tekstūras koordinātes UV darba vidē un pārbaudiet tās ar šaha rakstu un stiepuma krāsām.
keywords: uv, uv koordinātes, izvērst, izvēršana, šuve, šuves, tekstūra, tekstūras koordinātes, atlants, sakārtot, sakārtošana, sala, salas, šaha raksts, stiepums, deformācija, kastes projekcija, cilindra projekcija, sfēras projekcija, konforms, leņķiem balstīts, lscm, abf
from: 00028f20
---

Tekstūra ir plakans attēls; tīkls nav plakans. Tā **UV** nosaka, kur katrs katras virsmas stūris atrodas attēlā. UV darba vide tās izveido: tīklu pārgriežat gar **šuvēm**, izklājat gabalus plakanu (**izvērst**) un ieguļat tos kvadrātā (**sakārtot**).

## Atvēršana

Atlasiet tīklu un izvēlieties {{ui:UV}} sarakstā Darba vides saraksts. Grupa vai komponents vispirms kļūst par tīklu, kā tīkla darba vidē. 3D skats pārvietojas uz kreiso pusi; labajā pusē **UV redaktors** rāda tīkla virsmas, izklātas uz tekstūras kvadrāta. Atlase darbojas kā tīkla darba vidē, un tas, ko atlasāt vienā skatā, tiek atlasīts arī otrā.

## Šuvju atzīmēšana

Šuves ir vietas, kur tīklu drīkst pārgriezt; tās abos skatos rādās sarkanas.

- Atlasiet malas ({{ui:Mala}}, vai {{key:2}}) un nospiediet {{ui:Atzīmēt šuvi}} ({{key:Ctrl+E}}). {{ui:Notīrīt šuvi}} ({{key:Ctrl+Shift+E}}) tās noņem.
- {{ui:Šuves pie asajām}} atzīmē katru asu malu un katru malu, kur virsmas saiet ar leņķi virs 60°: kaste sadalās savās sešās virsmās.
- {{ui:Šuves no UV}} atzīmē šuves, kur UV jau pārtrūkst, piemēram, pēc projekcijas.

Slēgtam gabalam, lai tas gulētu plakans, vajadzīgas šuves: bumbai vismaz viens griezums, caurulei griezums visā garumā.

## Izvēršana

Atlasiet virsmas, ko izklāt (vai nevienu, lai izklātu visu tīklu), un nospiediet {{ui:Izvērst}} ({{key:U}}). Katrs gabals starp šuvēm tiek izklāts plakans, cik vien iespējams saglabājot tā leņķus (leņķiem balstīta izlīdzināšana), pēc tam gabali tiek sakārtoti kvadrātā. {{ui:Konforms}} vietā izvērš ar mazāko kvadrātu konformajām kartēm: ātrāk, bet nedaudz mazāk precīzi stipri izliektiem gabaliem. Forma, ko var izveidot no plakanas lapas, piemēram, cilindra sānus, pārgriežot vienu reizi, izvēršas bez jebkāda izstiepuma.

## Projicēšana

Vienkāršām formām bieži pietiek ar projekciju:

| Projekcija | Ko tā dara |
| --- | --- |
| {{ui:Kaste}} | Katra virsma uz to kastes pusi, ar kuru tā visvairāk vērsta |
| {{ui:Cilindrs}} | Ap zilo asi: šķērsām ir leņķis apkārt, augšup ir augstums |
| {{ui:Sfēra}} | No centra: šķērsām ir leņķis apkārt, augšup ir platuma grāds |
| {{ui:No skata}} | Tā, kā virsmas redzamas 3D skatā tagad |

Virsma pāri cilindra vai sfēras savienojumam tiek saglabāta kā viens gabals, tāpēc tās UV var nedaudz pārsniegt kvadrāta labo malu; tur tekstūras atkārtojas.

## Sakārtošana

- {{ui:Sakārtot}} ieliek gabalus (salas) kvadrātā vienā tekseļa izmērā, katru pagriežot tā, lai aizņemtu vismazāk vietas. Panelis nosaka atstarpi starp tiem.
- {{ui:Pagriezt par 90°}} un {{ui:Spoguļot}} pagriež vai spoguļo atlasīto virsmu UV.
- UV redaktorā velciet atlasīto virsmu, lai pārvietotu atlases UV, vai norādiet uz redaktoru un nospiediet {{key:R}} vai {{key:S}}, pēc tam pārvietojiet, lai tos pagrieztu vai mērogotu (klikšķis to saglabā, {{key:Esc}} atceļ). {{key:G}} pārvieto bez vilkšanas. Veiciet dubultklikšķi uz virsmas (vai {{key:L}}), lai atlasītu visu tās salu. Ritenītis veic tālummaiņu; velciet ar vidējo vai labo pogu, lai panoramētu; {{key:F}} atkal ietilpina kvadrātu.

Katra izmaiņa ir viens atsaukšanas solis.

## Pārbaude

- {{ui:Šaha raksts}} uz tīkla rāda iezīmētu šaha rakstu tā UV: vienmērīgi, kvadrātveida laukumi nozīmē, ka tekstūra guļ vienmērīgi; iezīmes rāda, kurā virzienā tā iet.
- {{ui:Stiepums}} iekrāso katru virsmu atkarībā no tā, cik stipri to izstiep UV: zilā nozīmē nav, caur zaļo līdz sarkanam, kas nozīmē daudz. Panelis izvēlas, vai to mēra **saliektie leņķi** vai **mainītais izmērs**, un rāda vidējo.

Skatīt arī [Tīkla rediģēšana](topic:mesh-edit), [Tīkli](topic:meshes) un [Tīkla modifikatori](topic:modifiers).
