---
title: Fur, kaydi, soo geli iyo soo saar
summary: Faylka ModelCraft, waxa aad soo geli karto iyo waxa aad dibadda u dir karto, meesha faylashu aadaan, iyo waxa isbeddela khadka ka baxsan iyo browser-yada kala duwan.
keywords: fur, kaydi, soo geli, soo saar, fayl, 3dm, skp, soo celi, kaydin toos ah, recent, desktop, fur 3d, wareejin, soo degso, faylka modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, qaabab, khadka ka baxsan, kaydi sida
from: 0b4896d1
---

ModelCraft wuxuu akhriyaa oo qoraa faylasha kombiyuutarkaaga. Waxba lama soo gudbin: faylka aad furto waxaa lagu akhriyaa browser-kaaga gudihiisa, faylka aad kaydiso waa soo dejin. Eeg [Halka faylashaadu aadaan](common:your-files).

## Qaababka oo la xiriiriyay

| Qaab | Fur | Soo geli | Soo saar | Waa maxay |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | haa | maya | {{ui:Kaydi}} | Faylkaaga shaqada. Wax walba wuu hayaa. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | haa | haa | {{ui:Kaydi sida}}, {{ui:Soo saar}} | Barnaamijyada rendarka iyo isku-dhafka muuqaalka. USD-ka ModelCraft wuxuu wax walba hayaa. Eeg [Kaydi, fur iyo soo saar USD](topic:usd). |
| SketchUp (`.skp`) | maya | haa | maya | Soo gelinta moodelada SketchUp. Waxay hayaan kooxaha, qaybaha, midabka, teexturada wejiyada, tag-yada iyo geesaha jilicsan. Eeg [Soo geli moodel SKP ah](topic:import-sketchup-files). |
| Collada (`.dae`) | maya | haa | haa | Is-beddelka moodelada dadka kale ee 3D. Wuxuu hayaa kooxaha, qaybaha iyo midabka. |
| OBJ (`.obj`) | maya | haa | haa | Barnaamijyada rendarka iyo muuqaalka. |
| glTF (`.glb`, `.gltf`) | maya | haa | `.glb` oo keliya | Muuqaallada browser-ka, injimada ciyaarta, AR. |
| STL (`.stl`) | maya | haa | haa | Daabacaadda 3D (millimitir). |
| PLY (`.ply`) | maya | haa | haa | Meshes leh midab: scans, daabacaadda midabka. |
| FBX (`.fbx`) | maya | haa | maya | Moodelada barnaamijyada xayawaanka iyo ciyaarta (FBX 2011 iyo kuwa cusub). |
| Alembic (`.abc`) | maya | haa | maya | Kaydinta joomitriga, tusaalaha ugu horreeya kaliya. |
| STEP (`.step`, `.stp`) | maya | haa | maya | Qaybaha barnaamijyada qaybaha iyo iibiyeyaasha, sida meshes xiran oo cabbirkooda dhabta ah. Eeg [Qaababka faylasha](topic:formats). |
| `.3dm` | maya | haa | maya | Moodelada NURBS: polysurfaces, meshes, curves, blocks iyo layers, sida meshes, geesood, qaybo iyo tag-yo. Eeg [Soo geli moodel `.3dm`](topic:import-3dm-files). |
| 3MF (`.3mf`) | maya | maya | haa | Daabacaadda 3D, midabyo ku jira (millimitir). Ka {{ui:Hubi daabacaadda 3D (STL ama 3MF)…}}: eeg [Moodelka u diyaari daabacaadda 3D](topic:print-3d). |
| IFC (`.ifc`) | maya | maya | haa | Barnaamijyada BIM, iyo BimCraft. |
| DWG (`.dwg`) | maya | haa | haa | Qorshe goob ama qorshe dabaq oo lagu moodelayo; moodelka loo diro barnaamij CAD. |
| DXF (`.dxf`) | maya | haa | haa | Isla sidaas, barnaamij CAD kasta. |

[Qaababka faylasha si faahfaahsan](topic:formats) wuxuu sheegayaa wixii qaab kasta hayo iyo wixii ka tago.

## Faylka ModelCraft

Fayl `.modelcraft` wuxuu hayaa moodelka oo dhan: joomitrigga, kooxaha, qaybaha, hagayaasha, muuqaallada, cutubyada, iyo kamaradda iyo habka aad isticmaalaysay markii aad kaydiyay. Ma hayo taariikhda ka noqoshada.

### Fur moodel

1. Guji {{ui:Fur}} kooxda {{ui:Fayl}}, ama taabo {{key:Mod+O}}.
2. Haddii moodelka shaashadda ku jira uu leeyahay isbeddello aan la kaydin, ModelCraft wuu weydiiyaa: "Moodelkan wuxuu leeyahay isbeddello aan la kaydin. Marka hore nuqul kaydi?" Dooro {{ui:Kaydi nuqul}}, {{ui:Tirtir isbeddellada}} ama {{ui:Jooji}}.
3. Dooro faylka `.modelcraft`.

Moodelku wuxuu furmaa cutubyada uu lagu kaydiyay, kamaradda uu lagu kaydiyay. Waxaad sidoo kale faylka `.modelcraft` ku ridi kartaa muuqaalka 3D, ama guji mid ka mid ah liiska faylasha dhowaan ee kaarka bilowga (browser-yada ka furi kara faylka, iyo app-ka desktop-ka).

:::desktop
App-ka desktop-ka, laba jeer guji faylka `.modelcraft` wuxuu ku furaa ModelCraft, sidaas oo kale **Fur ku** oo ku saabsan faylka Collada, OBJ, glTF, DWG ama DXF (wuxuu ku soo dhoofaa moodel cusub).
:::

### Kaydi moodel

Guji {{ui:Kaydi}} ama taabo {{key:Mod+S}}. Browser-ku wuxuu soo dejiyaa `<name>.modelcraft`, halkaas oo magacu yahay faylka aad furtay, ama "Untitled" moodel cusub.

:::desktop
App-ka desktop-ka, {{ui:Kaydi}} wuxuu qoraa faylkii aad furtay meeshiisii. Moodel cusub ayaa weydiiya meesha loo kaydinayo.
:::

- {{ui:Kaydi sida}} ({{key:Mod+Shift+S}}) wuxuu kaydiyaa nuqul sida fayl `.modelcraft` ama sida [USD](topic:usd); meesha browser-ku awoodo, wuxuu weydiiyaa magaca iyo meesha. Haddii kale, magacow faylka la soo dejiyay: kaydinta xigta markaad furto faylka magac cusub leh wuxuu isticmaalayaa magaca cusub.
- Kaydin kasta waa soo dejin cusub. Iyada oo ku xidhan dejinta browser-ka, waxay tagtaa galka soo dejinta si toos ah ama waxay weydiisaa meesha. Haddii fayl magacaas leh uu horey u jiro, browser-yada badankood waxay ku daraan lambar, sida `Untitled (1).modelcraft`.

:::chromium
Si aad u doorato galka mar kasta, fur dejinta browser-ka, raadi "downloads" oo shid "Ask where to save each file before downloading".
:::

:::firefox
Si aad u doorato galka mar kasta, fur **Settings**, kadibna **General**, oo hoosta "Downloads" dooro "Always ask you where to save files".
:::

:::safari
Si aad u beddesho meesha soo dejintu tagto, fur **Safari**, kadibna **Settings**, kadibna **General**, oo deji "File download location".
:::

### Bilow moodel cusub

Guji {{ui:Cusub}}. Haddii isbeddello aan la kaydin ka jiraan, ModelCraft marka hore wuu weydiiyaa. Moodel cusub wuxuu ka bilaabmaa madhan, cutubka luuqaddaada (feet iyo inch Maraykanka, millimitir meelaha kale), ma jiraan muuqaallo.

### Haddii browser-ku xirmo ka hor intaadan kaydin

ModelCraft wuxuu hayaa nuqul shaqada aan la kaydin browser-kaaga ilaa labo ilbiriqsi ka dib isbeddel kasta. Haddii tab-ka ama browser-ku xirmo ka hor intaadan kaydin, markii xigta ee aad furto ModelCraft wuxuu weydiin doonaa "Soo celi shaqadaada?". Soo celinta waxay furaysaa moodelka sidii uu ahaa, aan wali fayl loo kaydin: kaydi si aad u hayso. Eeg [Soo celi shaqadaada](common:recover).

### Ka CadCraft: Fur ModelCraft

App-ka sawirka CadCraft, **View**, kadibna **More**, kadibna **Open in ModelCraft** wuxuu sawirka furan u gudbiyaa ModelCraft tab cusub, sida DWG. Wuxuu u yimaadaa sida DWG la soo dhoofiyay: xariiqyo dhulka ku jira, kooxda ku jira, diyaar u ah in lagu moodelo. Waxba lama soo gudbin; faylku wuxuu mari doonaa kaydinta browser-kaaga gudihiisa.

## Soo geli

Soo gelinta wuxuu fayl ku daraa moodelka aad furan tahay; ma beddelo.

1. Guji {{ui:Soo dhoofi}} kooxda {{ui:Fayl}}, ama ku rid faylka muuqaalka 3D.
2. Dooro fayl SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ama DXF.

   Faylka wuxuu u yimaadaa **hal koox**, la doortay, muuqaalkuna wuu u weynaadaa si uu u muujiyo. Bar-ka xaaladda wuxuu sheegayaa waxa yimid, wuxuuna liistaa waxa aan la soo dhoofin karin, sida "Lama soo dhoofin: 2 texture".

3. Si aad joomitrigiisa si toos ah ugu shaqeysid, laba jeer guji kooxda si aad gudaha uga tafatirto, ama guji {{ui:Kala bax}}.

Waxyaabo aad ogaato:

- **Cabbirka iyo jihada sare:** faylasha Collada waxay sheegaan unitkooda iyo dhinaca sare, ModelCraft wuu beddelaa. glTF had iyo jeer waa meter. Faylasha OBJ ma sidi unit: ModelCraft wuxuu akhriyaa meters, Y sare. Haddii OBJ uu ka yimaado 1000 jeer oo weyn ama yar, isticmaal [Miisaan](topic:rotate-scale) oo leh factor sida `0.001` ama `1000`.
- **DWG iyo DXF** waxay yimaadaan sida geesood (edges) dhulka, ma aha wejiyo. Haddii qorshuhu aanu sheegin unitkiisa, wada-hadal cinwaankeedu yahay "Cabbirka qorshaha" ayaa weydiinaya waa maxay hal unit-ka qorshaha. Eeg [Moodel ku samee qorshe goob](topic:site-plan).
- **Xuduudo:** faylasha ka weyn 300 MB waa la diidaa soo dhoofinta, iyo kuwa ka weyn 200 MB furitaanka. Faylasha leh in ka badan 2 milyan vertices ama wejiyo waa la diidaa inay weyn yihiin.

## Soo saar

1. Guji {{ui:Soo saar}} kooxda {{ui:Fayl}}.
2. Dooro qaab: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL oo loo daabacayo (.stl, millimitir)}}, {{ui:PLY oo midab leh (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC oo loogu talagalay BimCraft (.ifc)}}, {{ui:DWG oo loogu talagalay CAD (.dwg, 2004)}} ama {{ui:DXF oo loogu talagalay CAD (.dxf, R12)}}.

Browser-ku wuxuu soo dejiyaa faylka, oo magacaa u eg moodelka. Moodelka oo dhan ayaa la soo saaraa, ma aha kaliya xulashada. Moodel madhan lama soo saaro: "Moodelku waa madhan yahay: marka hore wax sawir." Eeg [Soo saar moodel barnaamijyada kale](topic:export-model).

## Online iyo khadka ka baxsan

Wax kasta oo ModelCraft ah ayaa ku shaqeeya kombiyuutarkaaga, sidaas darteed sawirka, furitaanka, kaydinta, soo dhoofinta iyo soo saarista oo dhan way shaqeeyaan iyadoon xiriir lahayn marka app-ka la soo rido.

Si aad ModelCraft u furto iyadoon xiriir lahayn, u kaydi khadka ka baxsan intaad online tahay:

1. Guji {{ui:Kaydi khadka ka baxsan}} bar-ka app-ka ee sare.
2. Badhanku wuxuu tiriyaa ("Kaydinta 40 ka 212") intuu kaydinayo. ModelCraft wuxuu kaydiyaa faylashiisa (kuwa DWG-ga akhrinta ah ka mid ah), caawimaadan, iyo maktabadda 3D, sidaas darteed waxay qaadan kartaa wakhti.
3. Markii badhanku akhrinayo {{ui:Khadka ka baxsan diyaar}}, ModelCraft wuxuu ka furmaa isla cinwaankii iyadoon xiriir lahayn, soo dhoofinta DWG-na waxay sidoo kale shaqeysaa khadka ka baxsan.

Guji {{ui:Khadka ka baxsan diyaar}} mar dambe si aad u dhigto {{ui:Kaydi mar kale (hel nooca ugu dambeeya)}} ama {{ui:Ka saar nuqulka khadka ka baxsan}}. Haddii badhanku akhrinayo {{ui:Lama kaydin karin}}, faylal qaar ma soo dejin: hubi xiriirka oo guji mar kale. {{ui:Khadka ka baxsan lama heli karo}} wuxuu sheegayaa in daaqaddan browser-ku aanu nuqul hayn karin (daaqadaha gaarka ah iyo kombiyuutarrada la maamulo). Eeg [Shaqeynta khadka ka baxsan](common:offline).

Kaydinta cloud weli ma jirto. Moodel kasta wuxuu ku nool yahay meesha aad kaydiso.

:::offline
Khadka ka baxsan waad joogtaa. Waad sii samayn kartaa moodelka iyo kaydinta. Haddii bar-ka app-ka uusan muujin {{ui:Khadka ka baxsan diyaar}}, ha dib u soo rididin tab-kan ilaa aad online ku noqoto.
:::

## App-ka desktop-ka

:::desktop
Waxaad isticmaalaysaa ModelCraft gudaha CadCraft Studio, app-ka desktop-ka oo leh sideed app oo dhan. Faylashu waxay furmaan oo kaydsamaan meesha aad doorato.
:::

:::web
ModelCraft wuxuu ku shaqeeyaa browser-ka Mac, Windows iyo Linux, iyo CadCraft Studio, app-ka desktop-ka oo leh sideed app oo dhan hal rakibid, oo laga soo dejiyo getcadcraft.com/download.
:::
