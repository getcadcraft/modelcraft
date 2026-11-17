---
title: Failivormingud üksikasjalikult
summary: Täpselt see, mida iga ModelCraftis avatav, imporditav ja eksporditav vorming säilitab, teisendab ja jätab välja.
keywords: vormingud, failitüübid, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, vahemälu, fbx, 3mf, ifc, dwg, dxf, ühikud, teljed, Y üles, Z üles, millimeetrid, piirangud
from: c47d2d28
---

ModelCraft mudel on meetrites, Z (sinine) üles. Iga allpool olev vorming teisendatakse selle poole või selle pealt.

## ModelCraft (.modelcraft)

| Mis | Üksikasjad |
|---|---|
| Ava | {{ui:Ava}} ({{key:Mod+O}}) või lohista vaatele. Faile lõpuga `.json` aktsepteeritakse samuti |
| Salvesta | {{ui:Salvesta}} ({{key:Mod+S}}), allalaadimisena |
| Säilitab | Kõik: geomeetria, tahud ja nende värvid, materjalid ja imporditud tekstuurid, lambid, pehmed servad, grupid, komponendid, nimed, abijooned, stseenid, ühikud ning viimane kaamera ja stiil |
| Jätab välja | Tagasivõtmise ajaloo |
| Piirang | 200 MB |

Uuema ModelCraftiga salvestatud fail lükatakse tagasi: „See mudel on salvestatud uuema ModelCraftiga (failiversioon …). Uuenda ModelCraft, et see avada.“ Fail, mis ei ole ModelCraft-i mudel, ütleb „See fail ei ole ModelCraft-i mudel (see ei ole JSON).“ või „See ei ole ModelCraft-i fail, mida suudame avada: …“.

## USD (.usd, .usda, .usdc, .usdz)

Ava, impordi ning {{ui:Salvesta kui}} või {{ui:Ekspordi}} › {{ui:USD (.usda, .usdc, .usdz)…}}. ModelCraft-i salvestatud USD-fail avaneb uuesti ilma kadudeta; teiste programmide USD-failid avanevad võrkudena, gruppidena, komponentidena, lampidena ja kaameratena. Vaata [USD-faili salvestamine, avamine ja eksportimine](topic:usd).

## Collada (.dae)

Import ja eksport. Parim vorming mudelite vahetamiseks teiste 3D-modelleerijatega.

- **Eksport:** Collada 1.4.1, Z üles, meetrid. Üks geomeetria iga grupi või komponendi definitsiooni kohta; komponendid kirjutatakse üks kord ja paigutatakse viitega, nii et jäävad jagatuks. Aukudega või kumerate kontuuridega tahud jaotatakse kolmnurkadeks. Värvid muutuvad materjalideks. Lahtised servad kirjutatakse joontena. Vormingus kehtetud nimed kohandatakse ning täpne nimi jäetakse nende kõrvale alles.
- **Import:** kolmnurgad, hulknurgad (aukudega), kolmnurksed viftid ja ribad muutuvad tahkudeks; read muutuvad servadeks. Sõlmede teisendused, faili üles-telg ja selle ühik rakendatakse. Sõlm, mis on paigutatud mitmesse kohta, või geomeetria, mida kasutab mitu sõlme, tuleb sisse komponendina; muud sõlmed tulevad gruppidena. Materjalide hajusvärvid (diffuse) muutuvad tahkude värvideks.
- **Ei impordita:** tekstuurid, nahad ja morfid, kaamerad, valgustid, mõned teisendustüübid (look-at ja skew) ning viited teistele failidele. Olekuriba loeb need kokku.
- **Eksport kaotab:** millised servad on pehmed. **Impordil** jäävad kolmnurkadeks triangulatsioonitud pinnad kolmnurkadeks, diagonaalid pehmendatakse, nii et lamedad alad näivad endiselt ühe pinnana.

## OBJ (.obj, .mtl)

Import ja eksport.

- **Import:** lohista `.obj` koos selle `.mtl` ja tekstuuripiltidega (või impordi ainult `.obj`: see tuleb sisse ilma materjalideta ja olekuriba nimetab `.mtl`-faili, mida see soovis). Loetakse meetrites, Y üles. Iga objekt (`o`, muidu `g`) muutub [võrguks](topic:meshes), tahud säilitatakse nagu on (nelinurgad jäävad nelinurkadeks). Tekstuurikoordinaadid, normaalid ja tipu värvid säilitatakse. Materjali värvipilt (`map_Kd`, PNG, JPEG või WebP) tuleb sisse tekstuurina oma mõõtkava ja nihke valikutega; muidu selle värv (`Kd`). Servad, kus faili normaalid katkevad, on kõvad; kui normaale pole, otsustavad faili siluumigrupid. Teised kaardid (bump, normal), punktid, jooned ja kõverad loetakse ja jäetakse välja. OBJ-l ei ole ühikut, seega millimeetrites või tollides tehtud mudel tuleb sisse vales suuruses: skaleeri see pärast importi (vaata [Pööra ja skaleeri](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Eksport:** meetrid, Y üles, maailmakoordinaadid. Üks objekt iga grupi paigutuse kohta; komponendid kirjutatakse igas paigutuses täielikult välja. Võrgud säilitavad oma tahud, tekstuurikoordinaadid ja normaalid; [pehmete servadega](topic:soften) ühendatud tahkudel on iga nurga kohta normaal. Kui mudelil on värvid, laaditakse `.obj` kõrvale alla `.mtl`. Kui on imporditud tekstuure, laaditakse `.obj`, `.mtl` ja pildid alla koos ühe `.zip`-failina.
- **Piirang:** 2 miljonit tippu või tahku; 64 MB teksti.

## glTF (.glb, .gltf)

Import ja eksport, glTF 2.0.

- **Import:** `.glb`, või `.gltf` koos oma `.bin` ja tekstuurifailidega: lohista need kõik korraga vaatele (või vali `.glb`). Üksi antud `.gltf` nimetab faili, mida ta vajab: „See .gltf-fail vajab „…“: ava .glb-versioon või lohista .gltf koos selle failidega.“
  - **Võrgud** tulevad sisse [võrkudena](topic:meshes), üks iga faili võrgu kohta, säilitades faili normaalid, tekstuurikoordinaadid ja tipu värvid. Servad, kus faili normaalid katkevad, on kõvad; ülejäänud on pehmed. Mitmes kohas kasutatud võrk jääb jagatuks.
  - **Sõlmed** muutuvad gruppideks, nimed nagu failis. Instantseeritud võrgud (EXT_mesh_gpu_instancing) tulevad sisse ühe võrguna, mis on paigutatud mitu korda.
  - **Materjalid:** põhivärvi tekstuur (PNG, JPEG või WebP) tuleb sisse tekstuurina, paigutatuna faili tekstuurikoordinaatide järgi (koos mis tahes tekstuuri teisendusega), ja säilib salvestamisel; muidu põhivärv. Metall, karedus, normaalkaardid, klaas, lakikiht, kiudlaik ja muud materjalilaiendid loetakse, kuid neid ei säilitata veel: olekuriba ütleb seda.
  - **Valgustid** (KHR_lights_punctual): punkt- ja prožektorvalgustid muutuvad [lampideks](topic:lights). Suunatud valgustid loetakse: päike valgustab mudelit.
  - **Kaamerad** muutuvad [stseenideks](topic:scenes).
  - **Luustikuga tegelased** tulevad sisse seisvana nii, nagu fail neid paigutab; nende luustikud, animatsioonid ja morfi sihtmärgid loetakse ja neid veel ei säilitata.
  - **Tihendatud failid** (Draco, meshopt) ja kvantiseeritud andmed loetakse. Dekoodrid laaditakse ainult faili jaoks, mis neid vajab.
  - Punktid ja jooned loetakse ja jäetakse välja (võrk koosneb tahkudest). KTX2-tekstuurid jäetakse välja; tahud säilitavad oma värvi.
- **Eksport** (`.glb`): glTF 2.0 binaarne, meetrid, Y üles. Üks võrk iga definitsiooni kohta, nii et komponendid jäävad jagatuks. Võrgud säilitavad oma normaalid, tekstuurikoordinaadid ja tipu värvid; [pehmete servadega](topic:soften) ühendatud tahud kannavad siledaid normaale. Värvid ja materjalid muutuvad materjalideks (materjal oma värvina); imporditud tekstuurid kirjutatakse tekstuuridena. Sisselülitatud lambid muutuvad punkt- ja prožektorvalgusteks (pindalalambid ei ole glTF-is vastet ja jäetakse välja); stseenid muutuvad kaameratena. Lahtised servad jäetakse välja.
- **Piirang:** failid kuni 300 MB; umbes 130 miljonit geomeetria arvu.

## STL (.stl)

Import ja eksport.

- **Import:** binaarne või ASCII. STL-il ei ole ühikut: see loetakse **millimeetritena**, nagu printerid ja ModelCraft-i enda eksport seda kirjutavad. Sama punkti tipud ühendatakse, nii et suletud detail tuleb sisse suletud [võrguna](topic:meshes). Failis olevad värvid (VisCAM / SolidView ja Materialise konventsioonid) värvivad tahud.
- **Eksport** 3D-printimiseks: binaarne STL, **millimeetrites**, Z üles. Ainult kolmnurgad: grupid ja lahtised servad jäetakse välja. Värvitud tahud kannavad oma värvi VisCAM / SolidView konventsioonis, mida teised programmid ignoreerivad, kui seda ei loe. Puhta printimise jaoks ekspordi suletud tahketeks kehadeks.

## STEP (.step, .stp)

Ainult import. STEP on see, mida detailimodelleerijad ja tarnijad saadavad: AP203, AP214 ja AP242 failid.

- **Import:** ModelCraft loeb faili ise, lehel, ja muudab iga tahke suletud [võrguks](topic:meshes) kolmnurkadest: lamedad tahud jäävad lamedaks, kõverad tahud (silindrid, koonused, sfäärid, toorused, B-spline-pinnad) muutuvad paljudeks väikesteks lamedateks, servad ühe kõvera tahu sees on pehmed ja kahe tahu vahel teravad. STEP-failid ütlevad oma ühiku; mudel tuleb sisse oma tõelises suuruses. Koost tuleb sisse iga osaga sellel kohal, kuhu fail selle paigutab; iga osa on oma võrk grupis, mis on nimetatud faili järgi. Värve, koostepuu osade nimesid ja toleranse (PMI) ei loeta.
- **Teated:** mida vahele jäeti või mis joonistati jämedamalt, lisatakse olekuritta („Märkused: …“); fail ilma tahketa, vigane fail või piiridest suurem fail ütleb, miks, ega lisa midagi.
- **Piirang:** failid kuni 300 MB; 400 000 tahku ja 8 miljonit kolmnurka.

## .3dm

Ainult import. `.3dm`-failid hoiavad NURBS-mudeleid: polypinnad, pinnad, võrgud, kõverad ja plokid.

- **Import:** ModelCraft loeb faili ise, lehel. Võrgud tulevad sisse nagu nad on; iga polypinna või ekstrusiooni tahk tuleb renderdusvõrgust, mis on failiga koos salvestatud, muidu arvutab ModelCraft selle ise (tasandid, NURBS-pinnad, pöördepinnad, ekstrueeritud kõverad, ekstrusioonid; piiratud oma servadega, suletud polypinnad suletud võrkudena). Kõverad muutuvad servadeks, plokid komponentideks (plokid plokkides säilitatakse), kihid sildiks (peidetud, kui väljas). Objekti värv (oma, tema kihi või materjali oma) värvib tema tahud. Fail ütleb oma ühiku; mudel tuleb sisse oma tõelises suuruses. Samm-sammult: [3dm-mudeli importimine](topic:import-3dm-files).
- **Teated:** olekurida ütleb, mitu tahku tuli salvestatud võrkudest ja mitu arvutati ümber, ning nimetab, mis jäeti välja: punktid, punktipilved, tekst, mõõtmed, viirutused, valgustid, SubD-objektid, tahud pinnatüüpidel, mida pole veel loetud, lingitud plokid.
- **Piirang:** failid kuni 300 MB.

## PLY (.ply)

Import ja eksport, värvidega võrkude jaoks (skännid, värviline 3D-printimine, teised modelleerijad).

- **Import:** ASCII ja binaarne. Tahud muutuvad [võrguks](topic:meshes), mille normaalid, tekstuurikoordinaadid ja tipu värvid säilivad; iga tahk värvitakse 4096 värvi lähima järgi, nii et näed värve kohe. PLY-l ei ole ühikut ega telje kokkulepet: koordinaadid tulevad sisse nagu nad on (meetrites, Z üles). PLY, millel on ainult punktid, on punktipilv: ava see BimCrafti või CivilCrafti.
- **Eksport:** binaarne PLY positsioonide, normaalide ja värvidega (ja tekstuurikoordinaatidega, kui mudelil need on), meetrites, Z üles.

## FBX (.fbx)

Ainult import. FBX 7 failid (alates 2011), binaarsed või ASCII, loetakse ModelCraft-i enda lugejaga.

- Võrgud tulevad sisse [võrkudena](topic:meshes) oma normaalide, tekstuurikoordinaatide (iga UV-komplekt) ja tipu värvidega; võrk, mida kasutavad mitu objekti, jääb jagatuks. Objektid muutuvad gruppideks oma teisendustega (kaasa arvatud pöördekeskmed, nihked ja eelpöörded).
- Materjalid: hajus tekstuur (failisse põimitud või koos `.fbx`-iga kaasa lohistatud pilt) tuleb sisse tekstuurina (TGA-pildid säilitatakse PNG-na); muidu hajusvärv. Muud materjaliseaded ootavad uut materjalimudelit.
- Faili üles-telg ja ühik rakendatakse: kõik tuleb sisse Z üles, meetrites.
- Punkt- ja prožektorvalgustid muutuvad [lampideks](topic:lights) (FBX-i intensiivsus 100 on ModelCraft-i vaikimisi lamp, 800 luumenit; FBX-i intensiivsustel ei ole ühikut). Kaamerad muutuvad [stseenideks](topic:scenes).
- Luustikuga tegelased tulevad sisse puhkeasendis; luustikud ja animatsioonid loetakse ja neid ei säilitata veel. Suunatud ja pindalavalgustid ning muu geomeetria kui võrgud (NURBS, kõverad) loetakse ja jäetakse välja.
- FBX 6 ja vanemad failid lükatakse tagasi: salvesta need uuesti FBX 2011 või uuemana.

## Alembic (.abc)

Ainult import: geomeetria vahemälud animatsiooni- ja efektiprogrammidest.

- Võrgud (polügoon- ja subdivisioonivõrgud) tulevad sisse [võrkudena](topic:meshes) koos oma tekstuurikoordinaatide ja normaalidega; teisendused muutuvad gruppideks. Alembic on Y üles ja pööratakse Z üles; meetrites.
- Palju näidiseid sisaldav vahemälu (animatsioon) tuleb sisse oma esimese näidisega; olekuriba ütleb, mitu neid on.
- Punktid, kõverad, NURBS-pinnad, kaamerad ja valgustid loetakse ja jäetakse välja. Vanas HDF5 paigutuses failid lükatakse tagasi: salvesta need uuesti Ogawa Alembic-failina.

{{ui:Kontrolli 3D-printimist (STL või 3MF)…}} kontrollib kuju esmalt ja kirjutab valiku või kogu nähtava. Vaata [Mudeli ettevalmistamine 3D-printimiseks](topic:print-3d).

## 3MF (.3mf)

Ainult eksport, tööriistast {{ui:Kontrolli 3D-printimist (STL või 3MF)…}}. 3MF põhi: üks võrk **millimeetrites**, Z üles, koos värvidega materjalidena. Enamik viilutajaid loeb seda ning erinevalt STL-ist ütleb see oma ühiku. Peidetud asjad jäetakse välja. Vaata [Mudeli ettevalmistamine 3D-printimiseks](topic:print-3d).

## DWG ja DXF eksport (.dwg, .dxf)

CAD-programmidele. Mudel kirjutatakse oma ühikus: tollides jalgade ja tollide mudelite puhul, muidu millimeetrites, sentimeetrites või meetrites (olekuriba nimetab selle).

- **Tahud** muutuvad 3D-tahkudeks (kolmnurkadeks). Jooned tahu sees ja pehmed servad kirjutatakse nähtamatuna, nii et tahud näevad välja nagu ModelCraft-is.
- **Lahtised servad** muutuvad joonteks.
- **Grupid ja komponendid** muutuvad plokkideks: komponent kirjutatakse üks kord ja paigutatakse nii sageli, kui seda kasutatakse, sealhulgas pööratud ja peegeldatud koopiad. Grupp, mida venitati pärast pööramist (nii et ta on kaldus), kirjutatakse hoopis paigas välja.
- **Värvid:** DWG säilitab iga tahu värvi täpselt; DXF kasutab 255 standardse CAD-värvi lähimat.
- **Versioonid:** DWG kirjutatakse AutoCAD 2004 (AC1018) versioonis, mida avavad alates 2004 CAD-programmid. DXF on R12 (AC1009), versioon, mida kõik CAD-programmid loevad; R12-l ei ole ühikuvälja, seega ütle CAD-programmile, millist ühikut kasutada.
- **Ei kirjutata:** abijooned, mõõtmed, stseenid ja kaamera.

## IFC (.ifc)

Ainult eksport, BimCrafti ja muude BIM-programmide jaoks. IFC4 projekti, asukoha, ehitise ja selle korrustega. Iga kõige ülemise taseme grupp või komponent muutub üheks ehitiselemendi asendajaks koos oma nimega; suletud kirjutatakse tahketa kujudena (faceted breps), avatud pinnamudelitena; tahkude augud säilivad. Lahtine geomeetria kõige ülemisel tasemel muutub üheks elemendiks nimega „Lahtine geomeetria“. Tüüpe, omadusi ega materjale ei ole.

**Korrused:** {{ui:Ekspordi}} › {{ui:IFC korrused…}} loetleb need, igaühele nimi ja kõrgus ({{ui:Lisa korrus}} või {{ui:Arva mudelist}}, mis teeb ühe korruse iga kõrguse kohta, millel kõige ülemise taseme grupid seisavad). Ekspordil läheb iga grupp või komponent korrusele, mis asub tema madalaimast punktist või sellest allpool, ja jääb oma kohale. Ilma korrusteta läheb kõik ühele korrusele „Level 1“ kõrgusel 0. Korrused salvestatakse ModelCraft-i faili.

## DWG (.dwg) ja DXF (.dxf)

Import joontena maapinnal (heledused ja 3D-tahud tahkudena); eksport nagu eespool kirjeldatud. Vaata [Mudeli paigutamine asukohaplaanile](topic:site-plan).

- **Lugemine:** jooned, polyjooned (kaartega), 3D-polyjooned, ringid, kaared ja plokkviited koos massiividega, mudeliruumist. Nähtamatud objektid (nagu dünaamilise ploki peidetud olekud) jäetakse välja. Kõverad muutuvad 48 sirgeks tükiks täisringi kohta.
- **Loetud alates 0.4:** splainid ja ellipsid (servadena), tekst, mitmerealine tekst ja atribuudi väärtused (servadena ühejoonelises kirjas), viirutused (aukudega tahud), 3D-tahud ja tahked täidised (tahkudena) ning mõõtmed (joonistatud joonise enda mõõtmeplokkide järgi).
- **Loetud alates 0.7:** 3D-tahked kehad, regioonid ja kehad (nende ACIS-andmed, DWG ja DXF iga versioonist), igaüks oma grupina, suletud tahketena. Tahud pindadel, mis ei ole tasandid, silindrid, koonused, sfäärid, toorused ega lihtsad splainpinnad, jäetakse välja ja loetletakse.
- **Ei loeta:** punktid, tabelid, mitmeosalised juhised, pildid ja kõik paberiruumis.
- **Ühikud:** võetakse joonisest, kui see ütleb. Kui ei, küsib ModelCraft.
- **DXF** peab olema ASCII. Binaarne DXF lükatakse tagasi.
- **DWG** failid AutoCAD R13-st kuni praeguse vormingu (AutoCAD 2018 ja hilisem; AC1012 kuni AC1032) loetakse ModelCraft-i enda DWG-lugejaga, lehel; see on osa ModelCraft-ist, seega töötab võrguühenduseta alati, kui ModelCraft töötab. Vanemad versioonid (R12 ja varem) ning tugevalt kahjustatud failid ei ole loetavad; salvesta need DXF-ina.
- **Piirangud:** koordinaadid rohkem kui 10 000 km kaugusel alguspunktist või rohkem kui 2 miljonit joonelõiku lükatakse tagasi.

## SKP-failid

{{ui:Impordi}} (või lohista fail vaatele) loeb SketchUp-faile ModelCraft-i enda lugejaga, lehel: midagi ei laadita üles ja see töötab võrguühenduseta alati, kui ModelCraft töötab. Testitud failidega SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 ja 2026; muud versioonid peaksid avanema, kuid neid pole veel proovitud. Mudel tuleb sisse ühe failinimest tuletatud nimega grupina. Üks {{key:Mod+Z}} eemaldab selle uuesti. Samm-sammult: [SKP-mudeli importimine](topic:import-sketchup-files).

- **Säilitab:** tahud koos aukudega, grupid (grupina) ja komponendid (komponentidena, jagatult), nende nimed ja paigutused, värvid, grupi ja komponendi sildid, servad, mis ei ole tahu osa, ning pehmed ja siledad servad, nii et kumerad pinnad jäävad siledaks.
- **Värvid:** tahu oma materjal annab värvi. Grupile või komponendile määratud materjal muutub selle paigutuse värviks, nii et sees olevad tahud, millel pole oma värvi, võtavad selle üle, nagu SketchUp-is; komponent, mis on värvitud kahte värvi, jääb üheks komponendiks.
- **Sildid** grupidel ja komponentidel muutuvad ModelCraft-i siltideks, näidatud või peidetud nagu need olid. Lahtiste tahkude ja servade sildid ei säilitata (ModelCraft märgib ainult gruppe ja komponente); olekuriba loeb need.
- **Peidetud asjad tulevad sisse peidetult** (tahud, servad, grupid, komponendid ning tahud ja servad peidetud sildil), nii et näed seda, mida SketchUp näitas; {{ui:Näita kõiki}} näitab need.
- **Tekstuurid:** tekstuurmaterjaliga värvitud tahk säilitab oma tekstuuri, paigutatuna nagu failis, ja ModelCraft-i fail säilitab pildi. Tekstuur kogu grupil või komponendil, failist puuduv tekstuur või pilt, mida brauserid ei suuda näidata (nagu Photoshopi fail), säilitab ainult oma materjali värvi.
- **Jäetakse välja ja loetakse olekuribas:** mudelisse paigutatud pildid. Tekst, mõõtmed, abijooned, lõikejooned, stseenid ja stiilid ei ole loetud.
- **Ühikud:** SketchUp-failid on seest tollides; ModelCraft teisendab need, nii et suurused tulevad õigesti välja iga ühiku puhul.
- **`.skp` salvestamine** ei ole loodud. Mudeli tagasi SketchUp-i viimiseks ekspordi Collada (`.dae`).

## Ei ole toetatud

ModelCraft ei saa avada 3DS- ega IFC-faile ning ei saa salvestada 3DS-, FBX-, STEP-, `.3dm`- ega SketchUp (`.skp`) faile.
