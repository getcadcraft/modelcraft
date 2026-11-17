---
title: Hap, ruaj, importo dhe eksporto
summary: Skedari ModelCraft, çfarë mund të sjellësh dhe të dërgosh, ku shkojnë skedarët, dhe çfarë ndryshon jashtë linje dhe midis shfletuesve.
keywords: hap, ruaj, importo, eksporto, skedar, 3dm, skp, rikthe, ruajtje automatike, e fundit, desktop, hap në 3D, dorëzim, shkarko, skedar modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formate, jashtë linje, ruaj si
from: 3f09ab72
---

ModelCraft lexon dhe shkruan skedarë në kompjuterin tënd. Asgjë nuk ngarkohet: një skedar që hap lexohet brenda shfletuesit tënd, dhe një skedar që ruan është një shkarkim. Shih [Ku shkojnë skedarët e tu](common:your-files).

## Formatet në pamje të shpejtë

| Format | Hap | Importo | Eksporto | Për çfarë shërben |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | po | jo | {{ui:Ruaj}} | Skedari yt i punës. Ruan çdo gjë. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | po | po | {{ui:Ruaj si}}, {{ui:Eksporto}} | Programe renderimi dhe montimi skenash. USD-i i vetë ModelCraft ruan çdo gjë. Shih [Ruaj, hap dhe eksporto USD](topic:usd). |
| SketchUp (`.skp`) | jo | po | jo | Sjellja e modeleve nga SketchUp. Ruan grupet, komponentët, ngjyrat, teksturat mbi sipërfaqe, etiketat dhe skajet e butë. Shih [Sill një model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | jo | po | po | Shkëmbim modelesh me modelues të tjerë 3D. Ruan grupet, komponentët dhe ngjyrat. |
| OBJ (`.obj`) | jo | po | po | Programe renderimi dhe vizualizimi. |
| glTF (`.glb`, `.gltf`) | jo | po | vetëm `.glb` | Shfletues web, motorë lojërash, AR. |
| STL (`.stl`) | jo | po | po | Printim 3D (në milimetra). |
| PLY (`.ply`) | jo | po | po | Rrjeta me ngjyra: skanime, printim me ngjyra. |
| FBX (`.fbx`) | jo | po | jo | Modele nga programe animacioni dhe lojërash (FBX 2011 e më të reja). |
| Alembic (`.abc`) | jo | po | jo | Memorie gjeometrie, në mostrën e tyre të parë. |
| STEP (`.step`, `.stp`) | jo | po | jo | Pjesë nga modelues pjesësh dhe furnizues, si rrjeta të mbyllura në madhësinë e tyre reale. Shih [Formatet e skedarëve](topic:formats). |
| `.3dm` | jo | po | jo | Modele NURBS: poliszipa, rrjeta, kurba, blloqe dhe shtresa, si rrjeta, skaje, komponentë dhe etiketa. Shih [Sill një model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | jo | jo | po | Printim 3D, me ngjyra (në milimetra). Nga {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}: shih [Përgatit një model për printim 3D](topic:print-3d). |
| IFC (`.ifc`) | jo | jo | po | Programe BIM, dhe BimCraft. |
| DWG (`.dwg`) | jo | po | po | Një plan lokacioni ose planimetri ku të modelosh; dërgimi i modelit te një program CAD. |
| DXF (`.dxf`) | jo | po | po | I njëjti qëllim, për çdo program CAD. |

[Formatet e skedarëve në detaj](topic:formats) liston saktësisht çfarë ruan secili format dhe çfarë lë jashtë.

## Skedari ModelCraft

Një skedar `.modelcraft` ruan të gjithë modelin: gjeometrinë, grupet, komponentët, udhëzuesit, skenat, njësitë, si dhe kamerën dhe stilin që përdorje kur ruajte. Nuk ruan historikun e zhbërjes.

### Hap një model

1. Kliko {{ui:Hap}} te grupi {{ui:Skedar}}, ose shtyp {{key:Mod+O}}.
2. Nëse modeli në ekran ka ndryshime të pa ruajtura, ModelCraft pyet: "Ky model ka ndryshime që nuk janë ruajtur. Të ruhet një kopje më parë?" Zgjidh {{ui:Ruaj një kopje}}, {{ui:Hidh ndryshimet}} ose {{ui:Anulo}}.
3. Zgjidh skedarin `.modelcraft`.

Modeli hapet në njësitë me të cilat u ruajt, me kamerën me të cilën u ruajt. Mund ta lëshosh edhe një skedar `.modelcraft` mbi pamjen 3D, ose ta klikosh nga lista e skedarëve të fundit në kartën e fillimit (shfletuesit që mund të rihapin një skedar, dhe aplikacioni desktop).

:::desktop
Në aplikacionin desktop, klikimi dy herë mbi një skedar `.modelcraft` e hap atë në ModelCraft, dhe po kështu bën **Hap me** mbi një skedar Collada, OBJ, glTF, DWG ose DXF (importohet në një model të ri).
:::

### Ruaj një model

Kliko {{ui:Ruaj}} ose shtyp {{key:Mod+S}}. Shfletuesi shkarkon `<name>.modelcraft`, ku emri është skedari që hape, ose "Untitled" për një model të ri.

:::desktop
Në aplikacionin desktop, {{ui:Ruaj}} shkruan skedarin që hape në vend. Një model i ri pyet ku të ruhet.
:::

- {{ui:Ruaj si}} ({{key:Mod+Shift+S}}) ruan një kopje si skedar `.modelcraft` ose si [USD](topic:usd); aty ku e lejon shfletuesi, pyet për emrin dhe vendin. Ndryshe riemërto skedarin e shkarkuar: ruajtja tjetër pasi hap skedarin e riemëruar përdor emrin e ri.
- Çdo ruajtje është një shkarkim i ri. Varësisht nga cilësimet e shfletuesit, shkon drejt dosjes së shkarkimeve ose pyet ku ta ruash. Nëse një skedar me atë emër është tashmë aty, shumica e shfletuesve shtojnë një numër, si `Untitled (1).modelcraft`.

:::chromium
Për të zgjedhur dosjen çdo herë, hap cilësimet e shfletuesit, kërko "downloads" dhe ndiz "Ask where to save each file before downloading".
:::

:::firefox
Për të zgjedhur dosjen çdo herë, hap **Cilësimet**, pastaj **General**, dhe te "Downloads" zgjidh "Always ask you where to save files".
:::

:::safari
Për të ndryshuar ku shkojnë shkarkimet, hap **Safari**, pastaj **Cilësimet**, pastaj **General**, dhe vendos "File download location".
:::

### Fillo një model të ri

Kliko {{ui:Të re}}. Nëse ka ndryshime të pa ruajtura, ModelCraft pyet së pari. Një model i ri nis bosh, në njësinë e vendit tënd (këmbë dhe inç në Shtetet e Bashkuara, milimetra gjetkë), pa skena.

### Nëse shfletuesi mbyllet përpara se të ruash

ModelCraft mban një kopje të punës së pa ruajtur në shfletuesin tënd disa sekonda pas çdo ndryshimi. Kopja shkruhet në sfond, kështu që një model i madh nuk të ngadalëson ndërkohë që ruhet. Nëse skeda ose shfletuesi mbyllet përpara se të ruash, herën tjetër që hap ModelCraft pyet "Rikthe punën tënde?". Rikthimi hap modelin ashtu siç ishte, i pa ruajtur ende në një skedar: ruaje që ta mbash. Shih [Rikthe punën tënde](common:recover).

### Nga CadCraft: Hap në ModelCraft

Në aplikacionin e vizatimit CadCraft, **Pamje**, pastaj **Më shumë**, pastaj **Hap në ModelCraft** e dorëzon vizatimin e hapur te ModelCraft në një skedë të re, si DWG. Mbërrin ashtu si një DWG i importuar: vija mbi tokë, në një grup, gati për modelim. Asgjë nuk ngarkohet; skedari kalon nëpër hapësirën e ruajtjes së shfletuesit.

## Importo

Importimi shton një skedar te modeli që ke hapur; nuk e zëvendëson.

1. Kliko {{ui:Importo}} te grupi {{ui:Skedar}}, ose lësho skedarin mbi pamjen 3D.
2. Zgjidh një skedar SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ose DXF.

   Skedari mbërrin si **një grup**, i zgjedhur, dhe pamja zmadhohet për ta shfaqur. Shiriti i statusit thotë çfarë hyri, dhe liston çdo gjë që nuk mund të importohej, si "Nuk u importua: 2 tekstura".

3. Për të punuar direkt me gjeometrinë e tij, kliko dy herë mbi grupin për ta redaktuar brenda, ose kliko {{ui:Çmonto}}.

Disa gjëra që duhet të dish:

- **Madhësia dhe drejtimi lart:** skedarët Collada thonë njësinë e tyre dhe cili bosht është lart, dhe ModelCraft i konverton. glTF është gjithmonë në metra. Skedarët OBJ nuk mbartin njësi: ModelCraft i lexon si metra, me Y lart. Nëse një OBJ hyn 1000 herë më i madh ose më i vogël, përdor [Shkallë](topic:rotate-scale) me një faktor si `0.001` ose `1000`.
- **DWG dhe DXF** hyjnë si vija (skaje) mbi tokë, jo si sipërfaqe. Nëse vizatimi nuk e thotë njësinë e tij, një dialog me titull "Njësitë e vizatimit" pyet se çfarë është një njësi vizatimi. Shih [Modelo mbi një plan lokacioni](topic:site-plan).
- **Kufijtë:** skedarët mbi 300 MB refuzohen për import, dhe mbi 200 MB për hapje. Skedarët me më shumë se 2 milionë kulme ose faqe refuzohen si shumë të mëdhenj. Një OBJ mbi 64 MB refuzohet përpara se të lexohet. Skedarët tekst (Collada, OBJ, ASCII STL, USD tekst) lexohen pjesë-pjesë, rreth 4 MB, kështu që asnjë bllok tekst nuk mban një skedar të tërë; një OBJ 16 MB përdori rreth 0.5 GB memorie kur u hap në testin tonë.

## Eksporto

1. Kliko {{ui:Eksporto}} te grupi {{ui:Skedar}}.
2. Zgjidh një format: {{ui:glTF binar (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL për printim (.stl, milimetra)}}, {{ui:PLY me ngjyra (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC për BimCraft (.ifc)}}, {{ui:DWG për CAD (.dwg, 2004)}} ose {{ui:DXF për CAD (.dxf, R12)}}.

Shfletuesi shkarkon skedarin, i emërtuar si modeli. Eksportohet i gjithë modeli, jo vetëm përzgjedhja. Skedarët glTF, Collada dhe OBJ shkruhen në sfond, kështu që ModelCraft vazhdon të punojë ndërkohë që një model i madh eksportohet; shkarkimi nis kur skedari është gati. Një model bosh nuk eksportohet: "Modeli është bosh: vizato diçka së pari." Shih [Eksporto një model për programe të tjera](topic:export-model).

## Online dhe jashtë linje

Çdo gjë në ModelCraft funksionon në kompjuterin tënd, kështu që modelimi, hapja, ruajtja, importimi dhe eksportimi funksionojnë pa lidhje sapo aplikacioni të jetë ngarkuar.

Për të hapur ModelCraft pa asnjë lidhje, ruaje për përdorim jashtë linje ndërsa je në linjë:

1. Kliko {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit lart.
2. Butoni numëron ("Duke ruajtur 40 nga 212") ndërsa ruan. ModelCraft ruan skedarët e vet (lexuesin e tij DWG mes tyre), këtë ndihmë dhe bibliotekën 3D, kështu që mund të zgjasë pak.
3. Kur butoni thotë {{ui:Gati jashtë linje}}, ModelCraft hapet nga e njëjta adresë pa lidhje, dhe importimi DWG funksionon gjithashtu jashtë linje.

Kliko {{ui:Gati jashtë linje}} më vonë për {{ui:Ruaje përsëri (merr versionin më të ri)}} ose {{ui:Hiq kopjen jashtë linje}}. Nëse butoni thotë {{ui:Nuk u ruajt}}, disa skedarë nuk u shkarkuan: kontrollo lidhjen dhe kliko për ta provuar përsëri. {{ui:Modaliteti jashtë linje nuk është i disponueshëm}} do të thotë se kjo dritare shfletuesi nuk mund të mbajë një kopje (dritare private dhe disa kompjuterë të menaxhuar). Shih [Puna jashtë linje](common:offline).

Ruajtja në re nuk është e disponueshme ende. Çdo model qëndron aty ku e ruan.

:::offline
Je jashtë linje. Mund të vazhdosh modelimin dhe ruajtjen. Përveç nëse shiriti i aplikacionit shfaq {{ui:Gati jashtë linje}}, mos e rifresko këtë skedë derisa të jesh përsëri në linjë.
:::

## Aplikacioni desktop

:::desktop
Po e përdor ModelCraft në CadCraft Studio, aplikacionin desktop me të tetë aplikacionet. Skedarët hapen dhe ruhen aty ku zgjedh ti.
:::

:::web
ModelCraft funksionon në shfletues në Mac, Windows dhe Linux, dhe në CadCraft Studio, aplikacionin desktop me të tetë aplikacionet në një instalim, nga getcadcraft.com/download.
:::
