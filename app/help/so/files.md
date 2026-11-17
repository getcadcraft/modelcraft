---
title: Fur, kaydi, soo dhoofi iyo soo saar
summary: Faylka ModelCraft, waxa aad soo geli kartid iyo dibadda u dirtid, meesha faylasha tagaan, iyo waxa isbeddela markii khadka ka baxsan iyo browserrada ka dhexeeya.
keywords: fur, kaydi, soo dhoofi, soo saar, fayl, 3dm, skp, soo celi, kaydi toos ah, dhowaan, desktop, fur 3D, gudbin, soo degso, fayl ModelCraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, qaababka, khadka ka baxsan, u kaydi sida
from: 3f09ab72
---

ModelCraft wuxuu akhrisaa oo qoraa faylasha kombiyuutarkaaga. Wax lagu soo raro ma jiro: faylka aad furto waxa lagu akhriyaa browserkaaga gudihiisa, faylka aad kaydiso waa soo dejin. Eeg [Meesha faylashaadu tagaan](common:your-files).

## Qaababka marlabaad

| Qaab | Fur | Soo dhoofi | Soo saar | Waxa loogu talagalay |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | haa | maya | {{ui:Kaydi}} | Faylkaaga shaqada. Wax walba wuu hayaa. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | haa | haa | {{ui:U kaydi sida}}, {{ui:Soo saar}} | Barnaamijyada rendarka iyo isku-dhiska muuqaalka. USD-ga ModelCraft wuxuu hayaa wax walba. Eeg [Kaydi, fur iyo soo saar USD](topic:usd). |
| SketchUp (`.skp`) | maya | haa | maya | Soo dhoofinta moodelada SketchUp. Waxay hayaan kooxaha, komponentiyada, midabyada, tekstuurada wejiyada, tagaha iyo geesaha jilicsan. Eeg [Soo dhoofi moodel SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | maya | haa | haa | Is-weydaarsiga moodelada la yeelan karo kuwa kale ee 3D. Waxay hayaan kooxaha, komponentiyada iyo midabyada. |
| OBJ (`.obj`) | maya | haa | haa | Barnaamijyada rendarka iyo muuqaalka. |
| glTF (`.glb`, `.gltf`) | maya | haa | `.glb` oo keliya | Muuqaallada webka, injiinnada ciyaaraha, AR. |
| STL (`.stl`) | maya | haa | haa | Daabacaadda 3D (millimitir). |
| PLY (`.ply`) | maya | haa | haa | Meshyo midab leh: iskaanka, daabacaadda midabka. |
| FBX (`.fbx`) | maya | haa | maya | Moodelada barnaamijyada xoogsiga iyo ciyaaraha (FBX 2011 iyo kuwa cusub). |
| Alembic (`.abc`) | maya | haa | maya | Kaydka joomatriga, muunadkiisa ugu horreeya. |
| STEP (`.step`, `.stp`) | maya | haa | maya | Qaybaha barnaamijyada qaybaha iyo kuwa bixiyaha, sida meshyo xidhan oo cabbirkooda run ah. Eeg [Qaababka faylasha](topic:formats). |
| `.3dm` | maya | haa | maya | Moodelada NURBS: polysurfaces, meshyo, curves, blocks iyo layers, sida meshyo, geesaha, komponentiyada iyo tagaha. Eeg [Soo dhoofi moodel .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | maya | maya | haa | Daabacaadda 3D, midabada leh (millimitir). Ka yimid {{ui:Hubi daabacaadda 3D (STL ama 3MF)…}}: eeg [Diyaari moodelka daabacaadda 3D](topic:print-3d). |
| IFC (`.ifc`) | maya | maya | haa | Barnaamijyada BIM, iyo BimCraft. |
| DWG (`.dwg`) | maya | haa | haa | Khariidada goobta ama qorshaha dabaqa si loo moodelo; u dirida moodelka barnaamij CAD. |
| DXF (`.dxf`) | maya | haa | haa | Isku mid, barnaamij CAD kasta. |

[Qaababka faylasha si faahfaahsan](topic:formats) waxa ay si sax ah u liistaa waxa qaab kasta hayo iyo waxa ka tago.

## Faylka ModelCraft

Fayl `.modelcraft` wuxuu hayaa moodelka oo dhan: joomatriga, kooxaha, komponentiyada, hagayaasha, mashaadyada, cabbirrada, iyo kaamarada iyo qaabka aad isticmaalayay markaad kaydisay. Ma hayo taariikhda ka noqoshada.

### Fur moodel

1. Guji {{ui:Fur}} kooxda {{ui:Fayl}}, ama riix {{key:Mod+O}}.
2. Haddii moodelka shaashadda ku jira uu leeyahay isbeddello aan la kaydin, ModelCraft wuxuu weydiiyaa: "Moodelkan wuxuu leeyahay isbeddello aan la kaydin. Marka hore nuqul kaydi?" Dooro {{ui:Kaydi nuqul}}, {{ui:Tirtir isbeddellada}} ama {{ui:Jooji}}.
3. Dooro faylka `.modelcraft`.

Moodelka wuxuu ku furmaa cabbirrada uu lagu kaydiyay, kaamarada uu lagu kaydiyay. Waxaad sidoo kale ku rididi kartaa fayl `.modelcraft` muuqaalka 3D, ama guji mid ka mid ah liiska faylasha dhowaan ee kaarta bilowga (browserrada ku furi kara fayl, iyo app-ka desktopka).

:::desktop
App-ka desktopka, laba jeer ku dhufo fayl `.modelcraft` wuxuu ku furaa ModelCraft, sidaas oo kalena wuxuu sameeyaa **Fur ku** fayl Collada, OBJ, glTF, DWG ama DXF (waxaa loo soo dhoofiyaa moodel cusub).
:::

### Kaydi moodel

Guji {{ui:Kaydi}} ama riix {{key:Mod+S}}. Browserku wuxuu soo dejiyaa `<name>.modelcraft`, halkaas oo magaca yahay faylka aad furtay, ama "Untitled" moodel cusub.

:::desktop
App-ka desktopka, {{ui:Kaydi}} wuxuu qoraa faylka aad furtay isla meeshiisii. Moodel cusub wuxuu weydiiyaa meesha loo kaydinayo.
:::

- {{ui:U kaydi sida}} ({{key:Mod+Shift+S}}) wuxuu kaydiyaa nuqul ahaan fayl `.modelcraft` ama [USD](topic:usd); meel ay browserku ku kari karto, wuxuu weydiiyaa magaca iyo meesha. Haddii kale, magacii soo dejisay beddel: kaydinta xigta ee ka dib markaad furto faylka magaca cusub leh waxay isticmaalaysaa magaca cusub.
- Kaydin kasta waa soo dejin cusub. Iyadoo la eegayo dejinta browserka, waxay toos ugu aadaa folder-ka soo dejinta ama way weydiisaa meesha ay kaydinta ku tahay. Haddii fayl magacaas leh horay u jiro, browserka intiisa badan wuxuu ku daraa tiro, sida `Untitled (1).modelcraft`.

:::chromium
Si aad folder kasta u doorato, fur dejinta browserka, ka raadi "downloads" oo shid "Ask where to save each file before downloading".
:::

:::firefox
Si aad folder kasta u doorato, fur **Settings**, kadibna **General**, oo hoosta "Downloads" dooro "Always ask you where to save files".
:::

:::safari
Si aad u beddesho meesha soo dejintu tagto, fur **Safari**, kadibna **Settings**, kadibna **General**, oo deji "File download location".
:::

### Bilow moodel cusub

Guji {{ui:Cusub}}. Haddii ay jiraan isbeddello aan la kaydin, ModelCraft marka hore wuu weydiiyaa. Moodel cusub wuxuu bilaabmaa madhan, cabbirka dalkaaga (feet iyo inches Maraykanka, millimitir meelo kale), mana leh mashaadyo.

### Haddii browserku xirmo ka hor intaadan kaydin

ModelCraft wuxuu hayaa nuqul shaqada aan la kaydin browserkaaga, laba ilbiriqsi kadib isbeddel kasta. Nuqulka waxa lagu qoraa asal ahaan, sidaas darteed moodel weyn ma sugo adiga markii la hayo. Haddii tab-ka ama browserku xirmo ka hor intaadan kaydin, markii xigta ee aad furto ModelCraft wuxuu weydiinayaa "Soo celi shaqadaada?". Soo celinta waxa ay furaa moodelka sidii uu ahaa, oo aan wali fayl loo kaydin: kaydi si aad u hayso. Eeg [Soo celi shaqadaada](common:recover).

### Laga bilaabo CadCraft: Fur gudaha ModelCraft

Barnaamijka naqshadaynta CadCraft, **Muuqaal**, kadibna **Dheeraad**, kadibna **Fur gudaha ModelCraft** wuxuu naqshadda furan u gudbiyaa ModelCraft tab cusub, sida DWG. Waxa ay yimaadaa sida DWG la soo dhoofiyay oo kale: khadad dhulka saaran, kooxda ku jira, diyaar u ah in lagu moodelo. Waxba lama soo rarin; faylku wuxuu maraa kaydinta browserkaaga gudihiisa.

## Soo dhoofi

Soo dhoofintu waxa ay ku darta fayl moodelka aad furan tahay; ma beddesho.

1. Guji {{ui:Soo dhoofi}} kooxda {{ui:Fayl}}, ama dhig faylka muuqaalka 3D.
2. Dooro fayl SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ama DXF.

   Faylku wuxuu yimaadaa **hal kooxood**, la doortay, muuqaalkuna wuu soo fogaadaa si uu u muujiyo. Xaaladda (status bar) waxa ay sheegaysaa waxa soo galay, waxana ay liistaa waxa aan la soo dhoofin karin, sida "Lama soo dhoofin: 2 texture".

3. Si aad joomatriga si toos ah u shaqeyso, guji laba jeer kooxda si aad uga tafatirto gudaheeda, ama guji {{ui:Kala bax}}.

Waxyaabo aad ogaato:

- **Cabbirka iyo dhinaca sare:** Faylasha Collada waxay sheegaan cabbirkooda iyo dhinaca sare, ModelCraft-na way beddelaa. glTF had iyo jeer mitir buu yahay. Faylasha OBJ ma lahaan cabbir: ModelCraft wuxuu u akhriyaa mitir, Y oo sare. Haddii OBJ uu yimaado 1000 jeer oo weyn ama yar, isticmaal [Miisaan](topic:rotate-scale) iyo qaybiye sida `0.001` ama `1000`.
- **DWG iyo DXF** waxay yimaadaan khadad (geesaha) dhulka saaran, ma aha wejiyo. Haddii naqshaddu aysan sheegin cabbirkeeda, daaqad magaceedu yahay "Cabbirka naqshadda" ayaa weydiinaysa inta ay tahay hal unug naqshadeed. Eeg [Moodel khariidada goobta](topic:site-plan).
- **Xaddidaadyada:** faylasha ka weyn 300 MB looma soo dhoofin, iyo kuwa ka weyn 200 MB looma furo. Faylasha leh in ka badan 2 milyan oo vertex ama wejiyo waa la diidaa inay weyn yihiin. OBJ ka weyn 64 MB waa la diidaa ka hor inta aan la akhrin. Faylasha qoraalka (Collada, OBJ, ASCII STL, USD text) waxa lagu akhriyaa qayb mar, qiyaastii 4 MB, sidaas darteed ma jiro block qoraal oo keliya oo hayo fayl oo dhan; OBJ 16 MB ah wuxuu isticmaalay qiyaastii 0.5 GB xusuus markii uu furmay tijaabadeenna.

## Soo saar

1. Guji {{ui:Soo saar}} kooxda {{ui:Fayl}}.
2. Dooro qaab: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL oo loo daabacayo (.stl, millimitir)}}, {{ui:PLY oo midab leh (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC oo loogu talagalay BimCraft (.ifc)}}, {{ui:DWG oo loogu talagalay CAD (.dwg, 2004)}} ama {{ui:DXF oo loogu talagalay CAD (.dxf, R12)}}.

Browserku wuxuu soo dejiyaa faylka, magaciisu wuxuu sida moodelka oo kale yahay. Moodelka oo dhan ayaa la soo saaraa, ma aha xulashada keliya. Faylasha glTF, Collada iyo OBJ waxa lagu qoraa asalka (background), sidaas darteed ModelCraft wuu sii shaqeeyaa intii moodel weyn la soo saarayo; soo dejintu waxay bilaabataa markii faylku diyaar yahay. Moodel madhan lama soo saaro: "Moodelku waa madhan yahay: marka hore wax sawir." Eeg [Soo saar moodel barnaamijyo kale](topic:export-model).

## Khadka ku jira iyo khadka ka baxsan

Wax walba oo ModelCraft ah waxa uu ku shaqeeyaa kombiyuutarkaaga, sidaas darteed moodelinta, furista, kaydinta, soo dhoofinta iyo soo saarista oo dhan way shaqeeyaan xidhiidh la'aan markii app-ka la soo rido.

Si aad ModelCraft u furto xidhiidh la'aan oo dhan, u kaydi isticmaalka khadka ka baxsan intaad khadka ku jirto:

1. Guji {{ui:Kaydi khadka ka baxsan}} bar-ka app-ka ee sare.
2. Badanku wuxuu tirinayaa ("Kaydinaya 40 ka 212") intuu kaydinayo. ModelCraft wuxuu kaydiyaa faylashiisa (dhexdooda akhriyaha DWG), caawiskan, iyo maktabadda 3D, sidaas darteed waxay qaadan kartaa waqti.
3. Markii badanku akhriyo {{ui:Khadka ka baxsan diyaar}}, ModelCraft wuxuu ka furaa isla cinwaankii xidhiidh la'aan, soo dhoofinta DWG ayaa sidoo kale khadka ka baxsan shaqeysa.

Mar dambe guji {{ui:Khadka ka baxsan diyaar}} si aad u hesho {{ui:Mar kale kaydi (hel nooca ugu dambeeya)}} ama {{ui:Ka saar nuqulka khadka ka baxsan}}. Haddii badanku akhriyo {{ui:Lama kaydin karin}}, qaar ka mid ah faylasha lama soo dejin: hubi xidhiidhka oo guji mar kale si aad isku daydo. {{ui:Khadka ka baxsan lama heli karo}} waxa ay macnaheedu tahay daaqaddan browserka ma hayn karto nuqul (daaqadaha gaarka ah iyo kombiyuutarada la maamulo qaarkood). Eeg [Shaqaynta khadka ka baxsan](common:offline).

Kaydinta daruurta weli ma diyaar. Moodel kasta wuxuu ku nool yahay meesha aad ku kaydiso.

:::offline
Khadka ka baxsan baad tahay. Waad sii moodeli kartaa oo kaydin kartaa. Haddii bar-ka app-ka uusan tusin {{ui:Khadka ka baxsan diyaar}}, ha dib u soo rarin tab-kan ilaa aad mar kale khadka ku jirto.
:::

## App-ka desktopka

:::desktop
ModelCraft waxaad ku isticmaalaysaa CadCraft Studio, app-ka desktopka oo leh siddeedda app oo dhan. Faylasha way furmaan oo way kaydsamaan meesha aad doorato.
:::

:::web
ModelCraft wuxuu ku shaqeeyaa browserka Mac, Windows iyo Linux, iyo CadCraft Studio, app-ka desktopka oo leh siddeedda app hal rakib ah, oo laga soo dejiyo getcadcraft.com/download.
:::
