---
title: Atvērt, saglabāt, importēt un eksportēt
summary: ModelCraft fails, ko var ievietot un nosūtīt ārā, kur tiek saglabāti faili un kas mainās bezsaistē un starp pārlūkprogrammām.
keywords: atvērt, saglabāt, importēt, eksportēt, fails, 3dm, skp, atgūt, automātiskā saglabāšana, nesen atvērtie, darbvirsma, atvērt 3D, nodošana, lejupielāde, ModelCraft fails, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formāti, bezsaiste, saglabāt kā
from: 3f09ab72
---

ModelCraft nolasa un ieraksta failus jūsu datorā. Nekas netiek augšupielādēts: fails, ko atverat, tiek nolasīts jūsu pārlūkprogrammā, bet fails, ko saglabājat, ir lejupielāde. Skatiet [Kur tiek glabāti jūsu faili](common:your-files).

## Formātu pārskats

| Formāts | Atvērt | Importēt | Eksportēt | Kam tas paredzēts |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | jā | nē | {{ui:Saglabāt}} | Jūsu darba fails. Saglabā visu. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | jā | jā | {{ui:Saglabāt kā}}, {{ui:Eksportēt}} | Renderēšanas un ainu sastādīšanas programmas. ModelCraft pašas USD saglabā visu. Skatiet [Saglabāt, atvērt un eksportēt USD](topic:usd). |
| SketchUp (`.skp`) | nē | jā | nē | Modeļu ievietošana no SketchUp. Saglabā grupas, komponentus, krāsas, tekstūras uz virsmām, tagus un mīkstās šķautnes. Skatiet [Importēt SKP modeli](topic:import-sketchup-files). |
| Collada (`.dae`) | nē | jā | jā | Modeļu apmaiņa ar citiem 3D modelētājiem. Saglabā grupas, komponentus un krāsas. |
| OBJ (`.obj`) | nē | jā | jā | Renderēšanas un vizualizācijas programmas. |
| glTF (`.glb`, `.gltf`) | nē | jā | tikai `.glb` | Tīmekļa skatītāji, spēļu dzinēji, AR. |
| STL (`.stl`) | nē | jā | jā | 3D drukāšana (milimetros). |
| PLY (`.ply`) | nē | jā | jā | Tīkli ar krāsām: skenējumi, krāsu drukāšana. |
| FBX (`.fbx`) | nē | jā | nē | Modeļi no animācijas un spēļu programmām (FBX 2011 un jaunāks). |
| Alembic (`.abc`) | nē | jā | nē | Ģeometrijas kešatmiņa, pirmajā paraugā. |
| STEP (`.step`, `.stp`) | nē | jā | nē | Detaļas no detaļu modelētājiem un piegādātājiem kā slēgti tīkli to patiesajā izmērā. Skatiet [Failu formāti](topic:formats). |
| `.3dm` | nē | jā | nē | NURBS modeļi: politvirsmas, tīkli, līknes, bloki un slāņi kā tīkli, šķautnes, komponenti un tagi. Skatiet [Importēt .3dm modeli](topic:import-3dm-files). |
| 3MF (`.3mf`) | nē | nē | jā | 3D drukāšana ar krāsām (milimetros). No {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}: skatiet [Sagatavot modeli 3D drukāšanai](topic:print-3d). |
| IFC (`.ifc`) | nē | nē | jā | BIM programmas un BimCraft. |
| DWG (`.dwg`) | nē | jā | jā | Situācijas plāns vai stāva plāns, uz kura modelēt; modeļa sūtīšana uz CAD programmu. |
| DXF (`.dxf`) | nē | jā | jā | Tas pats jebkurai CAD programmai. |

[Failu formāti sīkāk](topic:formats) uzskaita, ko katrs formāts saglabā un ko neiekļauj.

## ModelCraft fails

`.modelcraft` fails saglabā visu modeli: ģeometriju, grupas, komponentus, vadlīnijas, ainas, mērvienības, kā arī kameru un stilu, ar kuriem strādājāt saglabāšanas brīdī. Tajā nav atsaukšanas vēstures.

### Modeļa atvēršana

1. Noklikšķiniet {{ui:Atvērt}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+O}}.
2. Ja ekrānā redzamajam modelim ir nesaglabātas izmaiņas, ModelCraft jautā: "Šim modelim ir nesaglabātas izmaiņas. Vispirms saglabāt kopiju?" Izvēlieties {{ui:Saglabāt kopiju}}, {{ui:Atmest izmaiņas}} vai {{ui:Atcelt}}.
3. Izvēlieties `.modelcraft` failu.

Modelis tiek atvērts mērvienībās, kādās tas tika saglabāts, ar kameru, ar kuru tas tika saglabāts. Varat arī ievilkt `.modelcraft` failu 3D skatā vai noklikšķināt uz tā sākuma kartītes sarakstā ar nesen atvērtajiem failiem (pārlūkprogrammās, kas var atkārtoti atvērt failu, un darbvirsmas lietotnē).

:::desktop
Darbvirsmas lietotnē divreiz noklikšķinot uz `.modelcraft` faila, tas tiek atvērts programmā ModelCraft, tāpat kā **Atvērt ar** Collada, OBJ, glTF, DWG vai DXF failam (tas tiek importēts jaunā modelī).
:::

### Modeļa saglabāšana

Noklikšķiniet {{ui:Saglabāt}} vai nospiediet {{key:Mod+S}}. Pārlūkprogramma lejupielādē `<name>.modelcraft`, kur nosaukums ir atvērtā faila nosaukums vai "Untitled" jaunam modelim.

:::desktop
Darbvirsmas lietotnē {{ui:Saglabāt}} ieraksta atvērto failu tajā pašā vietā. Jauns modelis jautā, kur to saglabāt.
:::

- {{ui:Saglabāt kā}} ({{key:Mod+Shift+S}}) saglabā kopiju kā `.modelcraft` failu vai kā [USD](topic:usd); ja pārlūkprogramma to spēj, tā jautā nosaukumu un vietu. Citādi pārdēvējiet lejupielādēto failu: nākamā saglabāšana pēc pārdēvētā faila atvēršanas izmanto jauno nosaukumu.
- Katra saglabāšana ir jauna lejupielāde. Atkarībā no pārlūkprogrammas iestatījumiem tā tiek saglabāta tieši lejupielāžu mapē vai jautā, kur saglabāt. Ja fails ar šādu nosaukumu jau ir, lielākā daļa pārlūkprogrammu pievieno numuru, piemēram, `Untitled (1).modelcraft`.

:::chromium
Lai katru reizi izvēlētos mapi, atveriet pārlūkprogrammas iestatījumus, meklējiet "lejupielādes" (angliskā saskarnē "downloads") un ieslēdziet "Jautāt, kur saglabāt katru failu pirms lejupielādes".
:::

:::firefox
Lai katru reizi izvēlētos mapi, atveriet **Iestatījumi**, pēc tam **Vispārīgi**, un sadaļā "Lejupielādes" izvēlieties "Vienmēr jautāt, kur saglabāt failus".
:::

:::safari
Lai mainītu, kur tiek lejupielādēts, atveriet **Safari**, pēc tam **Iestatījumi**, pēc tam **Vispārīgi**, un iestatiet "File download location".
:::

### Jauna modeļa sākšana

Noklikšķiniet {{ui:Jauns}}. Ja ir nesaglabātas izmaiņas, ModelCraft vispirms jautā. Jauns modelis sākas tukšs, jūsu lokalizācijas mērvienībās (ASV — pēdās un collās, citur — milimetros), bez ainām.

### Ja pārlūkprogramma aizveras pirms saglabāšanas

ModelCraft dažas sekundes pēc katras izmaiņas saglabā nesaglabātā darba kopiju pārlūkprogrammā. Kopija tiek ierakstīta fonā, tāpēc liels modelis neaizkavē jūs, kamēr tā tiek saglabāta. Ja cilne vai pārlūkprogramma aizveras pirms saglabāšanas, nākamreiz, kad atverat ModelCraft, tā jautā "Atgūt jūsu darbu?". Atgūstot, modelis tiek atvērts tāds, kāds tas bija, bet vēl nav saglabāts failā: saglabājiet to, lai to paturētu. Skatiet [Atgūt jūsu darbu](common:recover).

### No CadCraft: Atvērt programmā ModelCraft

CadCraft zīmēšanas lietotnē **Skats**, pēc tam **Vairāk**, pēc tam **Atvērt programmā ModelCraft** nodod atvērto rasējumu ModelCraft jaunā cilnē kā DWG. Tas ienāk tā, kā ienāk importēts DWG: līnijas uz zemes, grupā, gatavas modelēšanai. Nekas netiek augšupielādēts; fails iet caur jūsu pārlūkprogrammas pašu krātuvi.

## Importēt

Importēšana pievieno failu atvērtajam modelim; tā neaizstāj to.

1. Noklikšķiniet {{ui:Importēt}} grupā {{ui:Fails}} vai ievelciet failu 3D skatā.
2. Izvēlieties SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG vai DXF failu.

   Fails ienāk kā **viena grupa**, atlasīta, un skats tuvinās, lai to parādītu. Statusa joslā ir teikts, kas ienāca, un uzskaitīts viss, ko nevarēja importēt, piemēram, "Nav importēts: 2 tekstūras".

3. Lai tieši strādātu ar tā ģeometriju, divreiz noklikšķiniet uz grupas, lai rediģētu tās iekšpusi, vai noklikšķiniet {{ui:Sadalīt}}.

Dažas lietas, kas jāzina:

- **Izmērs un augšējais virziens:** Collada failos ir norādīta vienība un tas, kura ass ir augšā, un ModelCraft to pārvērš. glTF vienmēr ir metros. OBJ failos vienības nav norādītas: ModelCraft tos nolasa metros, ar Y augšup. Ja OBJ ienāk 1000 reizes par lielu vai par mazu, izmantojiet [Mērogot](topic:rotate-scale) ar koeficientu, piemēram, `0.001` vai `1000`.
- **DWG un DXF** ienāk kā līnijas (šķautnes) uz zemes, nevis kā virsmas. Ja rasējumā nav norādīta vienība, dialoglodziņš ar nosaukumu "Rasējuma vienības" jautā, kas ir viena rasējuma vienība. Skatiet [Modelēt uz situācijas plāna](topic:site-plan).
- **Ierobežojumi:** failus virs 300 MB importēt nevar, bet atvērt — virs 200 MB. Failus ar vairāk nekā 2 miljoniem virsotņu vai virsmu noraida kā pārāk lielus. OBJ virs 64 MB tiek noraidīts, pirms to nolasa. Teksta failus (Collada, OBJ, ASCII STL, USD teksts) nolasa pa daļām, apmēram pa 4 MB, tāpēc neviens teksta bloks neietur visu failu; 16 MB OBJ mūsu testā atvēršanas laikā aizņēma apmēram 0.5 GB atmiņas.

## Eksportēt

1. Noklikšķiniet {{ui:Eksportēt}} grupā {{ui:Fails}}.
2. Izvēlieties formātu: {{ui:glTF bināro (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL drukāšanai (.stl, milimetri)}}, {{ui:PLY ar krāsām (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC BimCraft (.ifc)}}, {{ui:DWG CAD (.dwg, 2004)}} vai {{ui:DXF CAD (.dxf, R12)}}.

Pārlūkprogramma lejupielādē failu, nosauktu kā modelis. Tiek eksportēts viss modelis, nevis tikai atlase. glTF, Collada un OBJ failus ieraksta fonā, tāpēc ModelCraft turpina darboties, kamēr liels modelis tiek eksportēts; lejupielāde sākas, kad fails ir gatavs. Tukšs modelis netiek eksportēts: "Modelis ir tukšs: vispirms uzzīmējiet kaut ko." Skatiet [Eksportēt modeli citām programmām](topic:export-model).

## Tiešsaiste un bezsaiste

ModelCraft darbojas jūsu datorā, tāpēc modelēšana, atvēršana, saglabāšana, importēšana un eksportēšana darbojas bez savienojuma, kad lietotne ir ielādēta.

Lai atvērtu ModelCraft bez jebkāda savienojuma, saglabājiet to lietošanai bezsaistē, kamēr esat tiešsaistē:

1. Noklikšķiniet {{ui:Saglabāt bezsaistei}} lietotnes augšējā joslā.
2. Poga skaita uz augšu ("Saglabā 40 no 212"), kamēr saglabā. ModelCraft saglabā savus failus (starp tiem arī DWG lasītāju), šo palīdzību un 3D bibliotēku, tāpēc tas var aizņemt laiku.
3. Kad poga rāda {{ui:Gatavs darbam bezsaistē}}, ModelCraft atveras no tās pašas adreses bez savienojuma, un DWG importēšana darbojas arī bezsaistē.

Vēlāk noklikšķiniet uz {{ui:Gatavs darbam bezsaistē}}, lai izvēlētos {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}}. Ja poga rāda {{ui:Neizdevās saglabāt}}, daži faili nav lejupielādēti: pārbaudiet savienojumu un noklikšķiniet uz pogas, lai mēģinātu vēlreiz. {{ui:Bezsaiste nav pieejama}} nozīmē, ka šis pārlūkprogrammas logs nevar paturēt kopiju (privātie logi un daži pārvaldīti datori). Skatiet [Darbs bezsaistē](common:offline).

Mākoņa saglabāšana vēl nav pieejama. Katrs modelis atrodas tur, kur to saglabājat.

:::offline
Jūs esat bezsaistē. Varat turpināt modelēt un saglabāt. Ja augšējā joslā nerāda {{ui:Gatavs darbam bezsaistē}}, nepārlādējiet šo cilni, kamēr atkal nebūsiet tiešsaistē.
:::

## Darbvirsmas lietotne

:::desktop
Jūs izmantojat ModelCraft CadCraft Studio, darbvirsmas lietotnē ar visām astoņām lietotnēm. Faili tiek atvērti un saglabāti tur, kur izvēlaties.
:::

:::web
ModelCraft darbojas pārlūkprogrammā Mac, Windows un Linux, kā arī CadCraft Studio, darbvirsmas lietotnē ar visām astoņām lietotnēm vienā instalācijā, no getcadcraft.com/download.
:::
