---
title: ModelCraft iestatījumi
summary: Izvēlieties jums zināmo taustiņu stilu, ļaujiet skārienpaliktnim orbitēt un panoramēt bez kameras pogām un ieslēdziet vai izslēdziet piesaisti un cieto ķermeņu sadursmes.
keywords: iestatījumi, izvēles, vadība, taustiņu stils, taustiņu karte, īsinājumtaustiņi, blender, skārienpaliktnis, ritināšana, orbīta, savilkšana, piesaiste, sadursme, pārklāšanās, krustošanās, iziet cauri
from: caf77d5b
---

Atveriet {{ui:Iestatījumi}} ar zobrata ikonu lietotnes joslā vai ar {{key:Mod+,}}. Pirmajā cilnē {{ui:ModelCraft}} ir šai lietotnei piederošie iestatījumi, bet {{ui:Vispārīgi}} ir iestatījumi, ko visas CadCraft lietotnes kopīgi izmanto (motīvs, rīkjosla, paneļi). ModelCraft iestatījumi pastāv tikai šajā lietotnē: mainiet tos šeit, un šis pārlūks tos atceras.

## Vadība: kādi taustiņi un peles pogas

Ir divi taustiņu stili. Mainiet tos šeit, ar {{ui:Taustiņi: Stumt/vilkt}} / {{ui:Taustiņi: Modelētājs}} skata apakšējā labajā stūrī vai rīkjoslas izvēlnes {{ui:Vairāk}} beigās:

- **Stumt/vilkt stils** (sākums; burti no stumšanas/vilkšanas modelētājiem, piemēram, SketchUp): burts izvēlas rīku — {{key:L}} līnija, {{key:R}} taisnstūris, {{key:P}} stumt/vilkt, {{key:M}} pārvietot, {{key:Q}} pagriezt, {{key:S}} mērogot, {{key:G}} izveidot komponentu. Skat. [Taustiņi un peles darbības](topic:keyboard).
- **Modelētāja stils** (taustiņi no tīkla modelētājiem, piemēram, Blender): vispirms atlasiet, tad uzreiz veiciet darbību ar atlasi. {{key:G}} pārvieto to, {{key:R}} pagriež un {{key:S}} mērogo no vietas, kur atrodas rādītājs — pirmais klikšķis nav vajadzīgs. Kamēr tas tiek pārvietots, {{key:X}}, {{key:Y}} vai {{key:Z}} bloķē sarkano, zaļo vai zilo asi, ierakstīts skaitlis nosaka attālumu (vai grādus, vai koeficientu), un klikšķis vai {{key:Enter}} to nolika; {{key:Esc}} vai labais klikšķis to atgriež sākuma vietā. Pēc tam atkal esat rīkā {{ui:Atlasīt}}.

Taustiņu stils ir tā pati izvēle, kas izvēlnes stils: Modelētāja taustiņu stils ir {{ui:Modelētājs}} izvēlnes stils, un, izvēloties vienu, izvēlaties arī otru. Skat. [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse). Pilnais Modelētāja saraksts ir [Taustiņi un peles darbības](topic:keyboard#modeler-keys). Rīkjoslas un sākuma kartes rīkpadomi seko jūsu izvēlētajam stilam.

## Ritināšana: peles ritenītis vai skārienpaliktnis

- **Noteikt automātiski** (sākums): ModelCraft novēro ritināšanu. Sānu vai smalka ritināšana, kādu nosūta skārienpaliktnis, orbitē; veseli ritenīša soļi tālina.
- **Peles ritenītis**: ritināšana vienmēr tālina uz rādītāja pusi.
- **Skārienpaliktnis**: pavelciet ar diviem pirkstiem, lai orbitētu, turiet {{key:Shift}} un velciet, lai panoramētu, savelciet, lai tālinātu. Pogas {{ui:Orbit}}, {{ui:Pan}} vai {{ui:Zoom}} nekad nav vajadzīgas.

Savilkšana tālina visās izvēlēs. Ja "Noteikt automātiski" nepareizi nosaka jūsu peli vai skārienpaliktni, izvēlieties to, kāds jums ir.

:::tip
Modelētāja stilā var orbitēt arī, turot {{key:Alt}} un velkot, un panoramēt ar {{key:Alt+Shift}} un vilkšanu — ērti klēpjdatorā bez vidējās pogas.
:::

## Piesaiste

**Piesaistīt punktiem, malām un asīm** (sākumā ieslēgts) pievelk rādītāju pie galapunktiem, viduspunktiem, malām, palīgvadlīnijām un sarkanajām, zaļajām un zilajām asīm — skat. [Secināšana](topic:inference). Izslēdziet to, ja vēlaties brīvi novietot kaut ko tuvu citai ģeometrijai, lai tas nelēktu. Virsmas, zeme un asu bloķēšana darbojas arī ar izslēgtu piesaisti.

Poga {{ui:Piesaiste}} skata apakšējā labajā stūrī dara to pašu šīs sesijas darbam (tas tiek saglabāts arī). Modelētāja stilā to pārslēdz {{key:Shift+Tab}}.

## Cietie ķermeņi apstājas, kur saskaras

**Apturēt cietos ķermeņus, kur tie saskaras** (sākumā ieslēgts) neļauj sienai tikt vilktai cauri citai sienai. Ar {{ui:Pārvietot}} (un ar {{key:G}}, un ielīmēšanu ar pārvietošanu ar {{key:Mod+D}}) atlase noslīd līdz otram cietajam ķermenim un apstājas, saskaroties ar to; ar {{ui:Stumt/vilkt}} virsma apstājas, kur sastopas ar citu cietu ķermeni. Atbalstīšanās uz kaut kā un slīdēšana pa to ir atļauta — apstājas tikai iešana iekšā. Lietas, kas jau pārklājas, kad sākat, joprojām var atvilkt vienu no otras.

Lai tīšām kaut ko izspiestu cauri, noklikšķiniet uz {{ui:Sadursme}} apakšējā labajā stūrī (vai atceliet iestatījumu), veiciet pārvietošanu un noklikšķiniet vēlreiz.

:::note
Sadursmes tiek pārbaudītas pārvietošanai un stumšanai/vilkšanai. {{ui:Pagriezt}} un {{ui:Mērogot}} tās vēl nepārbauda, un vaļīga ģeometrija, kas saskaras, joprojām savienojas, kā vienmēr: glabājiet atsevišķus objektus [grupās](topic:groups-components), lai tie paliktu atsevišķi.
:::

## 3D printera platforma

Printera platformas izmērs: {{ui:Nav iestatīta}} (sākumā), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 vai 300 × 300 × 400 mm. Izvēlieties izmēru, kas vistuvāk jūsu printera drukas tilpumam. [Pārbaude 3D drukai](topic:print-3d) tad norāda, ja modelis ir lielāks par platformu; ar {{ui:Nav iestatīta}} izmērs netiek pārbaudīts.

## Orbītēšana un panoramēšana

**Orbitēt ap to, kas atrodas zem kursora** (sākumā ieslēgts): orbīta griežas ap modeļa daļu zem rādītāja, un panoramēšana tur šo punktu zem rādītāja; virs tukšas vietas abas izmanto skata centru. Izslēdziet to, lai vienmēr orbitētu ap skata centru. **Orbītas ātrums** un **Panoramēšanas ātrums** svārstās no 0,25× līdz 3× (sākumā 1×), un tie attiecas uz peli, skārienpaliktni, skārienekrānu un bultiņu taustiņiem. Skat. [Orbīta, panoramēšana un tālummaiņa](topic:orbit-pan-zoom).

## Stūra rādītājs

Kas tiek rādīts 3D skata stūrī: **Skata kubs** (sākumā; augšā pa labi — noklikšķiniet uz virsmas, malas vai stūra, lai skatītu no turienes, velciet to, lai orbitētu, velciet tā kompasa gredzenu, lai pagrieztu modeli), **Asu ikona** (neliels X, Y, Z marķieris apakšā pa kreisi, kas pagriežas kopā ar skatu: X sarkans, Y zaļš, Z zils) vai **Nav**. Skat. [Skata kubs](topic:view-cube).
