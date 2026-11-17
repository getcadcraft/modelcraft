---
title: Balsti, sienas biezums, iedobšana un labošana
summary: Skatiet, kur drukai nepieciešami balsti un aptuveni cik tiem, atrodiet pārāk plānas sienas, iedobiet detaļu līdz sienas biezumam ar drenāžas caurumiem un labojiet tīklu ar katru uzskaitītu labojumu.
keywords: 3d drukāšana, balsti, balstu priekšskatījums, izvirzījums, koka balsti, kolonnu balsti, sienas biezums, plānas sienas, pārāk plāns, sprausla, iedobums, iedobšana, apvalks, drenāžas caurums, sveķi, labošana, tīkla labošana, non-manifold, apgrieztas virsmas, caurumi, mazi apvalki, pašsakrustošanās, pārklāšanās, savienot
from: 286bde26
---

Četri rīki, lai sagatavotu modeli 3D printerim. Atveriet {{ui:Eksportēt}} › {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}; dialoga rindā **Drukas rīki** ir {{ui:Balstu priekšskatījums}}, {{ui:Sienas biezums}}, {{ui:Iedobums}} un {{ui:Labošana}}. Katrs atveras kā kartīte virs skata; {{ui:Aizvērt}} (krustiņš) to un tās atzīmes noņem. Vienlaikus redzama viena kartīte.

Katrs rīks darbojas ar to, kas tiks drukāts: atlasi vai, ja nekas nav atlasīts, ar visu redzamo. {{ui:Iedobums}} un {{ui:Labošana}} prasa atlasīt vienu grupu, komponenti vai tīklu, jo tie to maina.

## Balstu priekšskatījums

Virsmas, kas no vertikāles noslīpst vairāk par **izvirzījuma leņķi**, tiek nokrāsotas sarkanas, un no tām līdz platformai vai līdz modeļa daļai zem tām tiek zīmēti vienkārši balsti (oranži).

- **Izvirzījuma leņķis**: 45° ir tas, ko vairums printeru spēj bez balsta. Palieliniet to printerim, kas labi veido tiltus.
- **Kolonnas**: taisna kolonna ik pēc 3 mm zem katra izvirzījuma. Aprēķinā tās tiek skaitītas kā 15% balstu raksts.
- **Koks**: tuvumā esošie punkti savienojas vienā stumbrā zem to vidus; neviens zars nenoslīpst vairāk par 45°. Koki parasti prasa mazāk materiāla un pieskaras platformai mazākās vietās.

Kartīte norāda, cik lielai virsmai nepieciešams balsts, cik ir balsta punktu un aptuveni cik materiāla tie prasa. Balsti, kas stāv uz modeļa (nevis uz platformas), tiek ieskaitīti: tie tur atstāj atzīmes. Ja {{ui:Iestatījumi}} ir izvēlēta printera platforma, platforma tiek zīmēta zem modeļa.

:::note
Šis ir priekšskatījums, nevis slicer: reālos balstus izvēlas jūsu slicer. Ļoti liela izvirzījuma gadījumā balsta punkti tiek izkliedēti plašāk, lai priekšskatījums paliktu ātrs; kartīte to norāda.
:::

## Sienas biezums

Katra virsma tiek izmērīta taisni caur ķermeni līdz otrai pusei. Sienas, kas plānākas par **mazāko pieļaujamo sienas biezumu**, ir sarkanas, un sienas, kas plānākas par pusotru reizi lielākas, ir oranžas: tās tiek izdrukātas, bet var iznākt vājas.

Plānās vietas tiek uzskaitītas, sākot ar plānākajām, ar to biezumu un izmēru. {{ui:Rādīt}} pagriež kameru uz to.

Printeris nespēj izveidot sienu, kas ir plānāka par aptuveni divām sprauslas platumiem: 0.8 mm parastai 0.4 mm sprauslai (sākuma vērtība). Sveķu printeri spēj mazāk; pārbaudiet sava printera rokasgrāmatu.

Ļoti lielam modelim tikai dažas virsmas met staru, bet pārējās pārņem kaimiņu biezumu; kartīte norāda, cik tika izmērītas.

## Iedobums

Iedobšana saglabā ārpusi kā tā ir un izņem iekšpusi, atstājot sienas tik biezas, cik pieprasāt. Sveķu izdrukas izmanto mazāk sveķu un mazāk velk drukas platformu; filamenta izdrukas izmanto mazāk plastmasas nekā aizpildījums.

1. Atlasiet grupu, komponenti vai tīklu un atveriet {{ui:Iedobums}}.
2. Iestatiet **sienu** (sākotnēji 2 mm) un to, cik platiem jābūt **drenāžas caurumiem**.
3. Sveķu izdrukai noklikšķiniet {{ui:Novietot drenāžas caurumu}}, tad noklikšķiniet uz modeļa ārpuses vietā, kur tam jābūt: zemu, tuvu drukas platformai, lai šķidrie sveķi notecētu. Novietojiet tik, cik vajadzīgs; katrs tiek rādīts kā zils aplis un uzskaitīts ar {{ui:Noņemt}}.
4. {{ui:Priekšskatījums}} parāda, cik daudz iedobšana izņem.
5. {{ui:Iedobt to}} veic izmaiņu: viens solis, ko atsauc {{key:Mod+Z}}.

Rezultāts ir viens slēgts ciets ķermenis, ko 3D drukas pārbaude pieņem: ModelCraft to vispirms pārbauda un neko nemaina, ja tas neizietu pārbaudi. Ja modelis ir plānāks par divām sienām, tas paliek ciets. Rezultāts ir grupa, kuras plakanās virsmas ir atsevišķas virsmas, tāpēc varat to turpināt modelēt ar {{ui:Stumt/vilkt}}; līkna detaļa, iedobta smalkā režģī, parasti satur pārāk daudz virsmu tam un kļūst par tīklu, un statusa rindā tiek norādīts, kurš.

:::tip
Vairumam formu iekšpuse ir ārpuse, pārvietota iekšā tieši par sienas biezumu. Tur, kur stūri vai plāni elementi to padara neiespējamu, ModelCraft tā vietā seko ārpusei sienas attālumā smalkā režģī; kartīte tad norāda, cik tuvu tas ir (līdz daļai milimetra).
:::

## Labošana

{{ui:Labošana}} pārbauda atlasīto detaļu tā, kā to darītu printera slicer, droši izlabo to, ko var izlabot, un uzskaita katru labojumu:

| Labo | Ko tas nozīmē |
|---|---|
| Trīsstūri bez laukuma | izlaisti |
| Trīsstūris zīmēts divreiz | paturēta viena kopija; virsma, kas zīmēta ar sevi pārī (bez biezuma), tiek noņemta |
| Brīvi gabali zem 0.5 mm | noņemti |
| Nepareizi orientēti trīsstūri | pagriezti, lai atbilstu kaimiņiem |
| Caurumi, plakani vai ne | aizvērti ar jaunu trīsstūru kopu no katra cauruma vidus |
| Gabals ar iekšpusi uz āru | pagriezts uz āru (dobums citā gabalā tiek atstāts kā ir: tam paredzēts būt vērstam iekšā) |

{{ui:Salabot drošos}} veic visus šos vienā solī, ko atsauc {{key:Mod+Z}}, un statusa rindā uzskaitīts katrs labojums. Labotā detaļa kļūst par grupu, kuras plakanās virsmas ir atsevišķas virsmas. Ja tā joprojām nav aizvērta (paliek kaut kas zem **Atstāts jums**), vai tai būtu pārāk daudz virsmu grupai, tā tā vietā kļūst par tīklu: tās virsmas paliek trīsstūri, un plakanas virsmas joprojām izskatās plakanas. Statusa rindā tiek norādīts, kurš. {{ui:Savienot pārklājošās daļas}} darbojas tāpat.

Ko nevar droši izlabot, tiek uzskaitīts zem **Atstāts jums** un atzīmēts violeti skatā ar {{ui:Rādīt}}:

- **Malas, kur saskaras trīs vai vairāk virsmas**: izlemiet, kura virsma pieder, un dzēsiet pārējās.
- **Gabals, kas iet caur pats sevi**: pārvietojiet vai pārzīmējiet šo daļu. Skatiet [Virsmu krustošana](topic:intersect).
- **Caurumi, kas ir pārāk lieli vai pārāk sapinušies, lai tos aizvērtu**: zīmējiet virsmas pāri tiem.
- **Atsevišķi gabali, kas pārklājas**: slicer tos tik un tā apvieno. {{ui:Savienot pārklājošās daļas}} padara tos par vienu slēgtu korpusu (tas pārbūvē virsmas, kur tās saskaras, tāpēc tā ir atsevišķa poga, un tas nekad netiek darīts jūsu vietā).

Grupām, kas veidotas ar stumšanu/vilkšanu, varat labot arī pa vienai: {{ui:Objekta informācija}} › {{ui:Rādīt problēmas}} / {{ui:Labot}}, kas saglabā virsmas, ko jūs zīmējāt. Skatiet [Cietie rīki](topic:solids).

Saistīts: [Sagatavot modeli 3D drukai](topic:print-3d) · [Iesācēju stils](topic:beginner) · [Vēl nav izveidots](topic:not-built-yet#3d-printing)
