---
title: Hap, ruaj, importo dhe eksporto
summary: Skedari ModelCraft, çfarë mund të sjellësh dhe të dërgosh, ku shkojnë skedarët, dhe çfarë ndryshon jashtë linje dhe midis shfletuesve.
keywords: hap, ruaj, importo, eksporto, skedar, 3dm, skp, rikthe, ruajtje automatike, të fundit, desktop, hap në 3D, dorëzim, shkarko, skedar modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formate, jashtë linje, ruaj si
from: 0b4896d1
---

ModelCraft lexon dhe shkruan skedarë në kompjuterin tënd. Asgjë nuk ngarkohet: një skedar që hap lexohet brenda shfletuesit tënd, dhe një skedar që ruan është një shkarkim. Shih [Ku shkojnë skedarët e tu](common:your-files).

## Formatet me një vështrim

| Formati | Hap | Importo | Eksporto | Për çfarë shërben |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | po | jo | {{ui:Ruaj}} | Skedari yt i punës. Ruan gjithçka. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | po | po | {{ui:Ruaj si}}, {{ui:Eksporto}} | Programe renderimi dhe montimi skenash. USD-ja e vetë ModelCraft ruan gjithçka. Shih [Ruaj, hap dhe eksporto USD](topic:usd). |
| SketchUp (`.skp`) | jo | po | jo | Sjellja e modeleve nga SketchUp. Ruan grupet, komponentët, ngjyrat, teksturat në faqe, etiketat dhe skajet e butë. Shih [Sill një model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | jo | po | po | Shkëmbimi i modeleve me modelues të tjerë 3D. Ruan grupet, komponentët dhe ngjyrat. |
| OBJ (`.obj`) | jo | po | po | Programe renderimi dhe vizualizimi. |
| glTF (`.glb`, `.gltf`) | jo | po | vetëm `.glb` | Shfaqës uebi, motorë lojërash, AR. |
| STL (`.stl`) | jo | po | po | Printim 3D (në milimetra). |
| PLY (`.ply`) | jo | po | po | Rrjeta me ngjyra: skanime, printim me ngjyra. |
| FBX (`.fbx`) | jo | po | jo | Modele nga programet e animacionit dhe lojërave (FBX 2011 e më të rejat). |
| Alembic (`.abc`) | jo | po | jo | Memorie gjeometrie, në kornizën e tyre të parë. |
| STEP (`.step`, `.stp`) | jo | po | jo | Pjesë nga modelues pjesësh dhe furnizues, si rrjeta të mbyllura në madhësinë e tyre reale. Shih [Formatet e skedarëve](topic:formats). |
| `.3dm` | jo | po | jo | Modele NURBS: poliseciona, rrjeta, kurba, blloqe dhe shtresa, si rrjeta, skaje, komponentë dhe etiketa. Shih [Sill një model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | jo | jo | po | Printim 3D, me ngjyra (në milimetra). Nga {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}: shih [Përgatit një model për printim 3D](topic:print-3d). |
| IFC (`.ifc`) | jo | jo | po | Programe BIM, dhe BimCraft. |
| DWG (`.dwg`) | jo | po | po | Një plan lokacioni ose planimetri për të modeluar mbi të; dërgimi i modelit te një program CAD. |
| DXF (`.dxf`) | jo | po | po | E njëjta, për çdo program CAD. |

[Formatet e skedarëve në detaje](topic:formats) liston saktësisht çfarë ruan secili format dhe çfarë lë jashtë.

## Skedari ModelCraft

Një skedar `.modelcraft` ruan gjithë modelin: gjeometrinë, grupet, komponentët, udhëzuesit, skenat, njësitë, si dhe kamerën dhe stilin që përdorje kur ruajte. Nuk ruan historikun e zhbërjes.

### Hap një model

1. Kliko {{ui:Hap}} në grupin {{ui:Skedar}}, ose shtyp {{key:Mod+O}}.
2. Nëse modeli në ekran ka ndryshime të paruajtura, ModelCraft pyet: "Ky model ka ndryshime që nuk janë ruajtur. Të ruhet një kopje më parë?" Zgjidh {{ui:Ruaj një kopje}}, {{ui:Hidh ndryshimet}} ose {{ui:Anulo}}.
3. Zgjidh skedarin `.modelcraft`.

Modeli hapet në njësitë me të cilat u ruajt, me kamerën me të cilën u ruajt. Mund edhe të lëshosh një skedar `.modelcraft` mbi pamjen 3D, ose të klikosh një nga listat e skedarëve të fundit në kartelën e nisjes (shfletuesit që mund të rihapin një skedar, dhe aplikacioni desktop).

:::desktop
Në aplikacionin desktop, klikimi dy herë te një skedar `.modelcraft` e hap atë në ModelCraft, dhe po ashtu **Hap me** te një skedar Collada, OBJ, glTF, DWG ose DXF (importohet në një model të ri).
:::

### Ruaj një model

Kliko {{ui:Ruaj}} ose shtyp {{key:Mod+S}}. Shfletuesi shkarkon `<emri>.modelcraft`, ku emri është skedari që hape, ose "Untitled" për një model të ri.

:::desktop
Në aplikacionin desktop, {{ui:Ruaj}} shkruan skedarin që hape në vend. Një model i ri pyet ku të ruhet.
:::

- {{ui:Ruaj si}} ({{key:Mod+Shift+S}}) ruan një kopje si skedar `.modelcraft` ose si [USD](topic:usd); aty ku shfletuesi e lejon, pyet për emrin dhe vendin. Ndryshe riemëro skedarin e shkarkuar: ruajtja tjetër pasi hap skedarin e riemërtuar përdor emrin e ri.
- Çdo ruajtje është një shkarkim i ri. Varësisht nga cilësimet e shfletuesit, shkon drejt e në dosjen e shkarkimeve ose pyet ku të ruhet. Nëse një skedar me atë emër është tashmë aty, shumica e shfletuesve shtojnë një numër, si `Untitled (1).modelcraft`.

:::chromium
Për të zgjedhur dosjen çdo herë, hap cilësimet e shfletuesit, kërko "downloads" dhe ndiz "Ask where to save each file before downloading".
:::

:::firefox
Për të zgjedhur dosjen çdo herë, hap **Cilësimet**, pastaj **Të përgjithshme**, dhe te "Downloads" zgjidh "Always ask you where to save files".
:::

:::safari
Për të ndryshuar ku shkojnë shkarkimet, hap **Safari**, pastaj **Cilësimet**, pastaj **Të përgjithshme**, dhe vendos "File download location".
:::

### Fillo një model të ri

Kliko {{ui:E re}}. Nëse ka ndryshime të paruajtura, ModelCraft pyet së pari. Një model i ri nis bosh, në njësinë e gjuhës tënde (këmbë dhe inç në Shtetet e Bashkuara, milimetra kudo tjetër), pa skena.

### Nëse shfletuesi mbyllet përpara se të ruash

ModelCraft mban një kopje të punës së paruajtur në shfletuesin tënd disa sekonda pas çdo ndryshimi. Nëse skeda ose shfletuesi mbyllet përpara se të ruash, herën tjetër që hap ModelCraft pyet "Rikthe punën tënde?". Rikthimi hap modelin ashtu siç ishte, pa u ruajtur ende në skedar: ruaje për ta mbajtur. Shih [Rikthe punën tënde](common:recover).

### Nga CadCraft: Hap në ModelCraft

Në aplikacionin e hartimit CadCraft, **Pamje**, pastaj **Më shumë**, pastaj **Hap në ModelCraft** e jep vizatimin e hapur te ModelCraft në një skedë të re, si DWG. Arrin ashtu si një DWG i importuar: vija në tokë, në një grup, gati për modelim mbi të. Asgjë nuk ngarkohet; skedari kalon nëpër hapësirën e ruajtjes së shfletuesit tënd.

## Importo

Importimi shton një skedar te modeli që ke hapur; nuk e zëvendëson.

1. Kliko {{ui:Importo}} në grupin {{ui:Skedar}}, ose lësho skedarin mbi pamjen 3D.
2. Zgjidh një skedar SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ose DXF.

   Skedari arrin si **një grup**, i përzgjedhur, dhe pamja zmadhohet për ta shfaqur. Shiriti i statusit thotë çfarë hyri, dhe liston çfarë nuk u importua, si "Not imported: 2 texture".

3. Për të punuar drejtpërdrejt me gjeometrinë e tij, kliko dy herë grupin për ta redaktuar brenda, ose kliko {{ui:Çmonto}}.

Disa gjëra që duhet të dish:

- **Madhësia dhe drejtimi lart:** skedarët Collada thonë njësinë e tyre dhe cila bosht është lart, dhe ModelCraft i konverton. glTF është gjithmonë në metra. Skedarët OBJ nuk mbajnë njësi: ModelCraft i lexon si metra, me Y lart. Nëse një OBJ hyn 1000 herë më i madh ose më i vogël, përdor [Shkallë](topic:rotate-scale) me një faktor si `0.001` ose `1000`.
- **DWG dhe DXF** hyjnë si vija (skaje) në tokë, jo si faqe. Nëse vizatimi nuk e thotë njësinë e vet, një dialog me titull "Drawing units" pyet se sa është një njësi vizatimi. Shih [Modelo mbi një plan lokacioni](topic:site-plan).
- **Kufijtë:** skedarët mbi 300 MB refuzohen për import, dhe mbi 200 MB për hapje. Skedarët me më shumë se 2 milion kulme ose faqe refuzohen si shumë të mëdhenj.

## Eksporto

1. Kliko {{ui:Eksporto}} në grupin {{ui:Skedar}}.
2. Zgjidh një format: {{ui:glTF binar (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL për printim (.stl, milimetra)}}, {{ui:PLY me ngjyra (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC për BimCraft (.ifc)}}, {{ui:DWG për CAD (.dwg, 2004)}} ose {{ui:DXF për CAD (.dxf, R12)}}.

Shfletuesi shkarkon skedarin, me emrin si modeli. Eksportohet i gjithë modeli, jo vetëm përzgjedhja. Një model bosh nuk eksportohet: "The model is empty: draw something first." Shih [Eksporto një model për programe të tjera](topic:export-model).

## Online dhe jashtë linje

Gjithçka në ModelCraft punon në kompjuterin tënd, kështu që modelimi, hapja, ruajtja, importimi dhe eksportimi funksionojnë pa lidhje sapo aplikacioni të jetë ngarkuar.

Për ta hapur ModelCraft pa asnjë lidhje, ruaje për përdorim jashtë linje ndërsa je në linjë:

1. Kliko {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit lart.
2. Butoni numëron ("Saving 40 of 212") ndërsa ruan. ModelCraft ruan skedarët e vet (ndër to lexuesin e DWG), këtë ndihmë dhe bibliotekën 3D, prandaj mund të zgjasë.
3. Kur butoni thotë {{ui:Gati jashtë linje}}, ModelCraft hapet nga e njëjta adresë pa asnjë lidhje, dhe importi DWG funksionon edhe jashtë linje.

Kliko {{ui:Gati jashtë linje}} më vonë për {{ui:Ruaje përsëri (merr versionin më të ri)}} ose {{ui:Hiq kopjen jashtë linje}}. Nëse butoni thotë {{ui:Nuk u ruajt}}, disa skedarë nuk u shkarkuan: kontrollo lidhjen dhe kliko për ta provuar përsëri. {{ui:Modaliteti jashtë linje nuk është i disponueshëm}} do të thotë që kjo dritare shfletuesi nuk mund të mbajë një kopje (dritaret private dhe disa kompjuterë të menaxhuar). Shih [Puna jashtë linje](common:offline).

Ruajtja në re nuk është e disponueshme ende. Çdo model qëndron aty ku e ruan.

:::offline
Je jashtë linje. Mund të vazhdosh modelimin dhe ruajtjen. Përveç nëse shiriti i aplikacionit tregon {{ui:Gati jashtë linje}}, mos e rifresko këtë skedë derisa të jesh përsëri në linjë.
:::

## Aplikacioni desktop

:::desktop
Po e përdor ModelCraft në CadCraft Studio, aplikacioni desktop me të tetë aplikacionet. Skedarët hapen dhe ruhen aty ku zgjedh ti.
:::

:::web
ModelCraft punon në shfletues në Mac, Windows dhe Linux, dhe në CadCraft Studio, aplikacioni desktop me të tetë aplikacionet në një instalim, nga getcadcraft.com/download.
:::
