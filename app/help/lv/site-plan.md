---
title: Modelēšana uz situācijas plāna no DWG vai DXF
summary: Ievietojiet CAD situācijas vai stāvu plānu kā līnijas uz zemes, atbildiet uz mērvienību jautājumu un pārzīmējiet to virsmās un masās.
keywords: situācijas plāns, dwg, dxf, cad, importēšana, skice, skices fotogrāfija, roku skice, salvetes skice, fotogrāfija, papīrs, pildspalvu krāsas, dinamiskie bloki, redzamības stāvokļi, teksts, svītrojums, spline, elipse, 3D virsma, izsekot, stāvu plāns, zemesgabals, īpašuma robeža, mērvienības, pamatne, konteksts
from: 3415dc96
---

ModelCraft var importēt 2D CAD rasējuma, situācijas plāna vai stāvu plāna līnijas un novietot tās uz zemes, lai varētu modelēt virs tām.

## Rasējuma importēšana

1. Noklikšķiniet uz {{ui:Importēt}} grupā {{ui:Fails}} (vai nometiet failu 3D skatā).
2. Izvēlieties `.dwg` vai `.dxf` failu.

   Liels DWG aizņem brīdi: statusa josla rāda "Lasa plan.dwg…", līdz tas ir ielādēts.

3. Ja rasējumā nav norādīts, kādas tā mērvienības, dialogs ar nosaukumu "Rasējuma mērvienības" jautā: "Kāda ir viena rasējuma vienība?" Izvēlieties {{ui:Collas}}, {{ui:Pēdas}}, {{ui:Milimetri}} vai {{ui:Metri}}. Lielākā daļa ASV situācijas plānu ir zīmēti pēdās, arhitektūras plāni — collās, bet metriskie plāni — milimetros.

   Rasējums tiek ievietots kā malu grupa uz zemes, atlasīts, un skats tiek tuvināts. Statusa joslā norādīts, cik malu ienāca, piemēram: "Importēts site.dwg: 1697 malas uz zemes, grupā. Sadaliet to, lai zīmētu tieši uz tā."

## Kas tiek ievietots

- Līnijas, polilīnijas (ieskaitot to lokus), loki un riņķi, kā arī bloki ar visu, kas tajos ir, tikai no **modeļa telpas**. Līknes kļūst par īsiem taisniem gabaliem.
- Līnijas, polilīnijas, loki, riņķi, elipses un splaini nolaižas plakani uz zemes kā malas.
- **Svītrojumi** kļūst par virsmām uz zemes, ar saviem salām kā caurumiem, lai varētu uzreiz stumt/vilkt svītrotu laukumu.
- **3D virsmas** un cieti aizpildījumi kļūst par virsmām; 3D virsmas saglabā savus augstumus.
- **Teksts** (vienrindas teksts, daudzrindu teksts un atribūtu vērtības) tiek zīmēts kā malas vienkāršā vienlīnijas burtu formā, tekstam piederīgajā augstumā, leņķī un izlīdzinājumā. Tā fonts nav rasējuma fonts, tāpēc vārdi var būt nedaudz garāki vai īsāki. Rakstzīmes, kurām burtu formā nav formas, tiek zīmētas kā mazas kastītes un tiek saskaitītas.
- **Izmēri** tiek zīmēti tā, kā rasējums tos parāda (to līnijas, bultiņas un teksts kā malas un virsmas).
- **Dinamiskie bloki** tiek ievietoti tā, kā rasējums tos parāda: katrs novietotais bloks tajā redzamības stāvoklī, kādā tas tika saglabāts, un tikai šā stāvokļa līnijas. Statusa josla tos uzskaita ar parādītajiem stāvokļiem un citiem stāvokļiem, ko katram ir, piemēram: "Receptacle parādīts kā Duplex ×38, GFI ×7 (stāvokļi: Duplex, GFI)". ModelCraft stāvokļus nemaina.
- **3D cietie ķermeņi, reģioni un korpusi** (rasējuma ACIS dati) tiek ievietoti kā savas grupas: slēgts cietais ķermenis kā ciets ķermenis, reģions vai atvērts korpuss kā virsmas. Plakanas virsmas tiek ievietotas pilnībā; izliektas virsmas (cilindri, konusi, sfēras, tori, vienkāršas splaina virsmas) — kā mazi trijstūri ar maigām malām starp tiem, tāpēc redzamas tikai paša ķermeņa malas. Virsma uz citāda veida virsmas tiek atstāta ārpus un uzskaitīta: "Vēl nav zīmēts (3D cietie ķermeņi): …".
- Nav importēts: punkti, tabulas, daudzvirzienu norādes, attēli un citi objektu tipi. Statusa josla tos uzskaita pēc tipa, piemēram: "Nav importēts: 12 POINT." Viss izkārtojumā (papīra telpā) arī tiek atstāts ārpus, bez uzskaitījuma.
- Slāņi netiek saglabāti: visas līnijas tiek ievietotas vienādi.

Ja rasējums atrodas tālu no sava sākumpunkta (piemēram, valsts plaknes koordinātes), tas tomēr tiek importēts, bet var nonākt tālu no ModelCraft sākumpunkta. Rasējumi, kas sniedzas vairāk nekā 10,000 km no sava sākumpunkta, tiek noraidīti: vispirms CAD programmā pārvietojiet rasējumu tuvāk 0,0.

## Pārzīmēšana virsmās

Importētās līnijas reti pašas par sevi veido tīras virsmas. Ir divi veidi:

**Turiet plānu kā pamatni (ieteicams)**

1. Atstājiet plānu kā tā paša grupu.
2. Zīmējiet savu ēku virsū ar {{ui:Taisnstūris}} un {{ui:Līnija}}, piesaistot plāna stūriem ("Galapunkts") un malām ("Uz malas").
3. Izstumiet/izvelciet savas virsmas augšup. Plāns paliek neskarts apakšā, un visu grupu vēlāk var izdzēst ar vienu klikšķi.

Piesaistīšana darbojas arī starp grupām: var piesaistīt plāna stūriem, neatverot to.

**Zīmēt uz paša plāna līnijām**

1. Atlasiet plāna grupu un noklikšķiniet uz {{ui:Sadalīt}}. Tās līnijas kļūst par brīvām malām.
2. Kur slēgtam kontūram jābūt virsmai, ar {{ui:Līnija}} uzzīmējiet vienu līniju pāri kādai no tā malām, no stūra līdz stūrim. Kad kontūrs ir slēgts un plakans, virsma parasti aizpildās. Ja nē, meklējiet spraugu vai pārklāšanos kontūrā un uzzīmējiet pāri tai.
3. Izstumiet/izvelciet to.

Tas labi darbojas uz tīra plāna. Uz sarežģīta uzmērījuma plāna ātrāk ir zīmēt virsū.

## Problēmas

- "Šis ir binārs DXF fails. Saglabājiet to kā ASCII DXF un mēģiniet vēlreiz." Saglabājiet DXF vēlreiz no CAD programmas kā ASCII (tekstu).
- "…modeļa telpā nav līniju, loku vai riņķu, ko importēt." Rasējums, iespējams, ir pilnībā izkārtojumos vai sastāv tikai no teksta un svītrojumiem.
- "Šo rasējumu nevarēja nolasīt (…). Tas var būt bojāts vai saglabāts DWG versijā, ko lasītājs neapstrādā…" Iekavās ir paskaidrots iemesls, piemēram, "DWG versija AC1009 netiek atbalstīta". Saglabājiet to kā DXF vai kā DWG no AutoCAD 2000 līdz 2018 no CAD programmas.
- Plāns ir nepareizā izmērā: izvēlējāties nepareizu vienību. Atsaukt ({{key:Mod+Z}}) un importējiet vēlreiz, vai [mērogojiet](topic:rotate-scale) grupu ar pareizu koeficientu (12 starp pēdām un collām, 25.4 starp collām un milimetriem).

Lai pārvērstu horizontāles līnijas par zemi, ko var veidot, skat. [Reljefs](topic:terrain).

## No rokas skices fotogrāfijas

**Fails › Importēt skices fotogrāfiju…** uzņem papīra skices fotogrāfiju (JPEG, PNG vai TIFF, tieši no tālruņa ir labi) un izveido tādas pašas malas uz zemes. Norādiet, kāds papīrs tas ir (vai ļaujiet atrast lapu, pieņemot A4), un skices mērogu, piemēram, 1 : 100. Papīra mala tiek atrasta, fotogrāfija iztaisnota, tinte pārzīmēta līnijās un lokos, un katra pildspalvas krāsa (melna, sarkana, zila, zaļa) kļūst par atsevišķu grupu ar birku (**Skice melna**, **Skice sarkana**, …), visas vienā grupā ar fotogrāfijas nosaukumu. Tas ir viens atsaukšanas solis, un viss notiek šajā datorā: nekas nekur netiek sūtīts.

Ja papīra malu nevar atrast, visa fotogrāfija tiek uzskatīta par lapu, un statusa rindā tas tiek norādīts: izmēriet kaut ko, ko zināt, un mērogojiet grupu, ja tā ir nepareiza. Pārzīmējiet līnijas virsmās, kā iepriekš.
