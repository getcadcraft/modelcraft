---
title: Atvēršana, saglabāšana, importēšana un eksportēšana
summary: ModelCraft fails, ko var ievietot un nosūtīt, kur faili tiek glabāti un kas mainās bezsaistē un starp pārlūkprogrammām.
keywords: atvērt, saglabāt, importēt, eksportēt, fails, 3dm, skp, atjaunot, autosaglabāšana, nesen, darbvirsma, atvērt 3D, nodot, lejupielādēt, modelcraft fails, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formāti, bezsaiste, saglabāt kā
from: 0b4896d1
---

ModelCraft lasa un raksta failus jūsu datorā. Nekas netiek augšupielādēts: fails, ko atverat, tiek nolasīts jūsu pārlūkprogrammā, bet fails, ko saglabājat, ir lejupielāde. Skatiet [Kur glabājas jūsu faili](common:your-files).

## Formātu pārskats

| Formāts | Atvērt | Importēt | Eksportēt | Kam tas paredzēts |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | jā | nē | {{ui:Saglabāt}} | Jūsu darba fails. Glabā visu. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | jā | jā | {{ui:Saglabāt kā}}, {{ui:Eksportēt}} | Renderēšanas un ainu sastādīšanas programmas. ModelCraft savs USD glabā visu. Skatiet [USD saglabāšana, atvēršana un eksportēšana](topic:usd). |
| SketchUp (`.skp`) | nē | jā | nē | Modeļu ievietošana no SketchUp. Glabā grupas, komponentus, krāsas, tekstūras uz virsmām, birkas un mīkstās malas. Skatiet [SKP modeļa importēšana](topic:import-sketchup-files). |
| Collada (`.dae`) | nē | jā | jā | Modeļu apmaiņa ar citiem 3D modelētājiem. Glabā grupas, komponentus un krāsas. |
| OBJ (`.obj`) | nē | jā | jā | Renderēšanas un vizualizācijas programmas. |
| glTF (`.glb`, `.gltf`) | nē | jā | tikai `.glb` | Tīmekļa skatītāji, spēļu dzinēji, AR. |
| STL (`.stl`) | nē | jā | jā | 3D drukāšana (milimetros). |
| PLY (`.ply`) | nē | jā | jā | Tīkli ar krāsām: skenējumi, krāsu drukāšana. |
| FBX (`.fbx`) | nē | jā | nē | Modeļi no animācijas un spēļu programmām (FBX 2011 un jaunāks). |
| Alembic (`.abc`) | nē | jā | nē | Ģeometrijas kešatmiņas, pirmajā paraugā. |
| STEP (`.step`, `.stp`) | nē | jā | nē | Detaļas no detaļu modelētājiem un piegādātājiem kā slēgti tīkli to patiesajā izmērā. Skatiet [Failu formāti](topic:formats). |
| `.3dm` | nē | jā | nē | NURBS modeļi: politvirsmas, tīkli, līknes, bloki un slāņi kā tīkli, malas, komponenti un birkas. Skatiet [.3dm modeļa importēšana](topic:import-3dm-files). |
| 3MF (`.3mf`) | nē | nē | jā | 3D drukāšana ar krāsām (milimetros). No {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}: skatiet [Modeļa sagatavošana 3D drukāšanai](topic:print-3d). |
| IFC (`.ifc`) | nē | nē | jā | BIM programmas un BimCraft. |
| DWG (`.dwg`) | nē | jā | jā | Situācijas plāns vai stāva plāns, uz kura modelēt; modeļa nosūtīšana uz CAD programmu. |
| DXF (`.dxf`) | nē | jā | jā | Tas pats jebkurai CAD programmai. |

[Failu formāti sīkāk](topic:formats) precīzi uzskaita, ko katrs formāts glabā un ko neglabā.

## ModelCraft fails

Fails `.modelcraft` glabā visu modeli: ģeometriju, grupas, komponentus, vadlīnijas, ainas, mērvienības, kā arī kameru un stilu, ko izmantojāt saglabāšanas brīdī. Tas neglabā atsaukšanas vēsturi.

### Modeļa atvēršana

1. Noklikšķiniet uz {{ui:Atvērt}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+O}}.
2. Ja modelim ekrānā ir nesaglabātas izmaiņas, ModelCraft jautā: „Šim modelim ir izmaiņas, kas nav saglabātas. Vispirms saglabāt kopiju?” Izvēlieties {{ui:Saglabāt kopiju}}, {{ui:Atmest izmaiņas}} vai {{ui:Atcelt}}.
3. Izvēlieties `.modelcraft` failu.

Modelis tiek atvērts mērvienībās, kādās tas tika saglabāts, ar kameru, ar kuru tas tika saglabāts. Varat arī ievilkt `.modelcraft` failu 3D skatā vai noklikšķināt uz kāda no pēdējo failu saraksta sākuma kartē (pārlūkprogrammās, kas var atkārtoti atvērt failu, un darbvirsmas lietotnē).

:::desktop
Darbvirsmas lietotnē divreiz noklikšķinot uz `.modelcraft` faila, tas tiek atvērts ModelCraft, tāpat kā **Atvērt ar** failam Collada, OBJ, glTF, DWG vai DXF formātā (tas tiek importēts jaunā modelī).
:::

### Modeļa saglabāšana

Noklikšķiniet uz {{ui:Saglabāt}} vai nospiediet {{key:Mod+S}}. Pārlūkprogramma lejupielādē `<name>.modelcraft`, kur nosaukums ir atvērtā faila nosaukums vai „Untitled”, ja modelis ir jauns.

:::desktop
Darbvirsmas lietotnē {{ui:Saglabāt}} ieraksta atvērto failu tajā pašā vietā. Jaunam modelim tiek jautāts, kur to saglabāt.
:::

- {{ui:Saglabāt kā}} ({{key:Mod+Shift+S}}) saglabā kopiju kā `.modelcraft` failu vai kā [USD](topic:usd); kur pārlūkprogramma to atļauj, tā jautā nosaukumu un vietu. Citādi pārdēvējiet lejupielādēto failu: nākamā saglabāšana pēc pārdēvētā faila atvēršanas izmanto jauno nosaukumu.
- Katra saglabāšana ir jauna lejupielāde. Atkarībā no pārlūkprogrammas iestatījumiem tā nonāk tieši lejupielāžu mapē vai jautā, kur saglabāt. Ja fails ar šādu nosaukumu jau tur ir, lielākā daļa pārlūkprogrammu pievieno numuru, piemēram, `Untitled (1).modelcraft`.

:::chromium
Lai katru reizi izvēlētos mapi, atveriet pārlūkprogrammas iestatījumus, meklējiet „downloads” un ieslēdziet opciju, kas pirms lejupielādes jautā, kur saglabāt katru failu.
:::

:::firefox
Lai katru reizi izvēlētos mapi, atveriet **Iestatījumi**, pēc tam **Vispārīgi** un sadaļā par lejupielādēm izvēlieties opciju, kas vienmēr jautā, kur saglabāt failus.
:::

:::safari
Lai mainītu lejupielāžu vietu, atveriet **Safari**, pēc tam **Iestatījumi**, pēc tam **Vispārīgi**, un iestatiet lejupielādēto failu atrašanās vietu.
:::

### Jauna modeļa sākšana

Noklikšķiniet uz {{ui:Jauns}}. Ja ir nesaglabātas izmaiņas, ModelCraft vispirms jautā. Jauns modelis sākas tukšs, jūsu valodas mērvienībās (ASV — pēdās un collās, citur — milimetros), bez ainām.

### Ja pārlūkprogramma aizveras pirms saglabāšanas

ModelCraft pārlūkprogrammā dažas sekundes pēc katras izmaiņas glabā nesaglabātā darba kopiju. Ja cilne vai pārlūkprogramma aizveras, pirms saglabājat, nākamreiz atverot ModelCraft, tas jautā „Atjaunot jūsu darbu?”. Atjaunojot, modelis tiek atvērts tāds, kāds tas bija, bet vēl nav saglabāts failā: saglabājiet to, lai to paturētu. Skatiet [Darba atjaunošana](common:recover).

### No CadCraft: atvērt ModelCraft

CadCraft rasēšanas lietotnē **Skats**, pēc tam **Vairāk**, pēc tam **Atvērt ModelCraft** nodod atvērto rasējumu ModelCraft jaunā cilnē kā DWG. Tas nonāk tā, kā importēts DWG: līnijas uz zemes, grupā, gatavas modelēšanai. Nekas netiek augšupielādēts; fails iet caur jūsu pārlūkprogrammas pašu krātuvi.

## Importēšana

Importēšana pievieno failu atvērtajam modelim; tā neaizstāj to.

1. Noklikšķiniet uz {{ui:Importēt}} grupā {{ui:Fails}} vai nometiet failu 3D skatā.
2. Izvēlieties SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG vai DXF failu.

   Fails tiek ievietots kā **viena grupa**, tā tiek atlasīta, un skats tiek tuvināts, lai to parādītu. Statusa joslā parādīts, kas ir ienācis, un uzskaitīti visi neimportētie elementi, piemēram, „Nav importēts: 2 tekstūras”.

3. Lai strādātu tieši ar tā ģeometriju, veiciet dubultklikšķi uz grupas, lai rediģētu tās iekšpusē, vai noklikšķiniet uz {{ui:Sadalīt}}.

Dažas lietas, kas jāzina:

- **Izmērs un augšējais virziens:** Collada failos norādīta to mērvienība un tas, kura ass ir augšā, un ModelCraft tos pārvērš. glTF vienmēr ir metros. OBJ failos mērvienības nav: ModelCraft tos nolasa metros, ar Y uz augšu. Ja OBJ ienāk 1000 reizes lielāks vai mazāks, izmantojiet [Mērogot](topic:rotate-scale) ar koeficientu, piemēram, `0.001` vai `1000`.
- **DWG un DXF** ienāk kā līnijas (malas) uz zemes, nevis kā virsmas. Ja rasējumā nav norādīta tā mērvienība, dialogs ar nosaukumu „Rasējuma mērvienības” jautā, kas ir viena rasējuma vienība. Skatiet [Modelēšana uz situācijas plāna](topic:site-plan).
- **Ierobežojumi:** failus, kas lielāki par 300 MB, importēšanai noraida, bet failus, kas lielāki par 200 MB, atvēršanai. Failus ar vairāk nekā 2 miljoniem virsotņu vai virsmu noraida kā pārāk lielus.

## Eksportēšana

1. Noklikšķiniet uz {{ui:Eksportēt}} grupā {{ui:Fails}}.
2. Izvēlieties formātu: {{ui:glTF bināro (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL drukāšanai (.stl, milimetri)}}, {{ui:PLY ar krāsām (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC BimCraft (.ifc)}}, {{ui:DWG CAD (.dwg, 2004)}} vai {{ui:DXF CAD (.dxf, R12)}}.

Pārlūkprogramma lejupielādē failu ar tādu pašu nosaukumu kā modelis. Tiek eksportēts viss modelis, nevis tikai atlase. Tukšs modelis netiek eksportēts: „Modelis ir tukšs: vispirms uzzīmējiet kaut ko.” Skatiet [Modeļa eksportēšana citām programmām](topic:export-model).

## Tiešsaiste un bezsaiste

Viss ModelCraft darbojas jūsu datorā, tāpēc modelēšana, atvēršana, saglabāšana, importēšana un eksportēšana darbojas bez savienojuma, kad lietotne ir ielādēta.

Lai atvērtu ModelCraft bez jebkāda savienojuma, saglabājiet to lietošanai bezsaistē, kamēr esat tiešsaistē:

1. Noklikšķiniet uz {{ui:Saglabāt bezsaistei}} augšējā lietotņu joslā.
2. Poga skaita, kamēr saglabā (piemēram, „Saglabā 40 no 212”). ModelCraft saglabā savus failus (tostarp DWG lasītāju), šo palīdzību un 3D bibliotēku, tāpēc tas var aizņemt kādu laiku.
3. Kad poga rāda {{ui:Gatavs darbam bezsaistē}}, ModelCraft atveras no tās pašas adreses bez savienojuma, un DWG importēšana darbojas arī bezsaistē.

Vēlāk noklikšķiniet uz {{ui:Gatavs darbam bezsaistē}}, lai izvēlētos {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}}. Ja poga rāda {{ui:Neizdevās saglabāt}}, daži faili nav lejupielādēti: pārbaudiet savienojumu un noklikšķiniet, lai mēģinātu vēlreiz. {{ui:Bezsaiste nav pieejama}} nozīmē, ka šis pārlūkprogrammas logs nevar paturēt kopiju (privātie logi un dažas pārvaldītas ierīces). Skatiet [Darbs bezsaistē](common:offline).

Mākoņa saglabāšana vēl nav pieejama. Katrs modelis atrodas tur, kur to saglabājat.

:::offline
Jūs esat bezsaistē. Varat turpināt modelēt un saglabāt. Ja lietotņu joslā nav redzams {{ui:Gatavs darbam bezsaistē}}, neatjaunojiet šo cilni, līdz atkal esat tiešsaistē.
:::

## Darbvirsmas lietotne

:::desktop
Jūs izmantojat ModelCraft programmā CadCraft Studio, darbvirsmas lietotnē ar visām astoņām lietotnēm. Faili tiek atvērti un saglabāti tur, kur izvēlaties.
:::

:::web
ModelCraft darbojas pārlūkprogrammā Mac, Windows un Linux, kā arī programmā CadCraft Studio, darbvirsmas lietotnē ar visām astoņām lietotnēm vienā instalācijā, no getcadcraft.com/download.
:::
