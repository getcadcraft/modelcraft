---
title: Tõrkeotsing
summary: Sümptomid, põhjused ja lahendused tühjast 3D-vaatest kuni vales suuruses importideni, koos ModelCraft-i kuvatavate teadetega.
keywords: probleem, tõrge, viga, ei tööta, tühi, webgl, graafika, aeglane, teade, impordi tõrge, vale suurus, ei saa valida, puuteekraan, klahvid ei tööta, kadunud töö
from: 6e7394be
---

## 3D-vaade on tühi

**Sümptom:** ekraani keskel on tühi või näidatakse ainult taustavärvi ning tööriistade klõpsamine ei tee midagi.

**Põhjus:** ModelCraft joonistab WebGL 2-ga, brauseri 3D-graafikaga. See puudub, kui brauser on vana, graafikakiirendus on välja lülitatud või graafikadraiver on blokeeritud.

**Lahendus:**

:::chromium
1. Ava brauseri sätted ja otsi "graafikakiirendus".
2. Lülita sisse "Kasuta graafikakiirendust, kui see on saadaval" ja käivita brauser uuesti.
3. Kui see on juba sees, kirjuta aadressiribale `chrome://gpu` (Edge-is `edge://gpu`) ja otsi loendist "WebGL2". Kui seal on „disabled“, uuenda graafikadraiverit.
:::

:::firefox
1. Ava **Sätted**, siis **Üldine**, ja keri jaotiseni „Jõudlus“.
2. Eemalda linnuke „Kasuta soovitatud jõudluse sätteid“, seejärel märgi „Kasuta riistvarakiirendust, kui see on saadaval“. Taaskäivita Firefox.
3. Kui see ikka ebaõnnestub, kirjuta aadressiribale `about:support` ja vaata jaotisest „Graafika“ WebGL 2 olekut.
:::

:::safari
Uuenda macOS ja Safari. Viimased Safari versioonid on WebGL 2 alati sisse lülitatud. Kui muutsid katsefunktsioone jaotises **Safari**, siis **Sätted**, siis **Täpsem** (või **Funktsioonilipud**), lähtesta need.
:::

Tööarvutis, kaugtöölaual või virtuaalmasinas võib 3D-graafika olla poliitikaga blokeeritud. Proovi teist arvutit. Vt [Brauserid ja arvutid](common:browsers).

## Klahvid ei tee midagi või kirjutavad kasti

**Põhjus:** klaviatuuri fookus on paneeli väljal: loend {{ui:Tahud}} jaotises {{ui:Stiil}}, päikeseseade, väli {{ui:Nimi}} jaotises {{ui:Objekti teave}} või ühikuvalija. Tähed ja nooleklahvid lähevad siis sellele väljale.

**Lahendus:** klõpsa 3D-vaates ja vajuta klahvi uuesti. Klahvid ei tee midagi ka siis, kui dialoogi aken on lahti.

## Numbri sisestamine ei tee midagi

- **Suunda veel pole.** Sisestatud pikkus läheb sinna, kuhu osuti viitab esimesest klõpsust. Liiguta osutit natuke soovitud suunas ja sisesta siis.
- **Vale hetk.** Enamik tööriistu võtab sisestatud väärtuse alles pärast esimest klõpsu: klõpsa esimene nurk, tahk või punkt, millest liigutada. {{ui:Ring}} ja {{ui:Hulknurk}} võtavad küljete arvu enne esimest klõpsu.
- **„Sisesta pikkus, nagu 3m, 10'6" või 4m,3m.“** ModelCraft ei suutnud seda lugeda. Kontrolli, kas koma on kümnendkohana (`2,5`): kasuta punkti.

## Lohistatud kuju algab puuteekraanil vales kohas

**Sümptom:** sõrmega on esimene ristkülik korras, kuid järgmine ristkülik, ring või joon algab sealt, kus eelmine puudutus lõppes, mitte sealt, kus puudutasid.

**Põhjus:** selle versiooni viga: puuteekraanil mäletab tööriist eelmise žesti viimast haakumispunkti.

**Lahendus:** puuduta tööriista nuppu tööriistaribal enne iga uut kuju. See alustab tööriista uuesti ja esimene punkt tuleb sinna, kuhu puudutad.

## Ühe grupi muutmine muutis teist

**Sümptom:** kopeerisid grupi {{ui:Teisalda}} ja {{key:Ctrl}} abil, avasid ühe koopia ja muutsid seda, ning ka teine koopia muutus. {{ui:Struktuur}} näitab mõlemat sama nimega.

**Põhjus:** selles versioonis teeb grupi kopeerimine teise paigutuse samast grupist, nagu komponendi puhul. ModelCraft-i nupp {{ui:Tee unikaalseks}} on pakutud ainult komponentidele.

**Lahendus:** vali koopia, mida soovid muuta, klõpsa paneelis {{ui:Objekti teave}} nuppu {{ui:Loo komponent}} ja seejärel {{ui:Tee unikaalseks}}. Sellel koopial on nüüd oma sisu. Või {{ui:Lahuta}} see.

## Lükka/tõmba ei tee seda, mida ootasin

- **„Lükka/tõmba töötab tahul. Klõpsa tahul.“** Klõpsasid serva või tühja ruumi. Liiguta osutit, kuni tahk esile tõstetakse, ja klõpsa siis.
- **Tahk on grupi sees.** Topeltklõpsa grupil, et see enne avada.
- **Aken ei lõiganud seina läbi.** Ristkülik peab olema joonistatud seina tahule, mitte selle ette, ja seinal peab olema tagatahk. Vt [Lõika seina ava](topic:openings#if-it-did-not-cut-through).
- **Kaks kasti kattuvad, kuid ei ühine.** Üksteisesse lükatud tahked kehad selles versioonis ei lõigata ega ühendata.

## Joon või kuju ei moodustanud tahku

Tahk täitub ainult siis, kui servad sulguvad lamedaks ahelaks. Kontrolli, et viimane punkt haakus esimesega („Lõpp-punkt“), ja et kõik servad asuvad ühel tasapinnal. Veidi tasapinnast väljas olev ahel jääb joonteks. Joonista üks selle servadest uuesti, haakudes nurkadele.

## Ma ei saa tahku valida ega kustutada

- {{ui:Vali}}-ga võtab klõps serva lähedal serva. Klõpsa tahu keskmise lähedal.
- {{ui:Kustutaja}} ei võta tahke. Vali tahk ja vajuta {{key:Delete}}, või kustuta üks selle servadest.
- Kui see kuulub gruppi või komponenti, valib klõps kogu asja. Topeltklõpsa, et avada.

## „Vali esmalt, mida teisaldada, või klõpsa sellel.“

{{ui:Teisalda}}, {{ui:Pööra}} ja {{ui:Mõõtkava}} vajavad midagi, millega töötada: vali see enne või alusta tööriista, klõpsates asjal endal (mitte tühjal alal ega abijoonel).

## „Vali esmalt mõni geomeetria (lohista aken või kolmikklõps, et valida kõik ühendatud).“

{{key:G}} ja {{key:Shift+G}} vajavad valikut. Abijooni ei saa grupeerida.

## Nooleklahvid pöörlevad vaadet, selle asemel et lukustada

Lukud töötavad ainult pärast joonistus- või muutmistööriista esimest klõpsu. {{ui:Lükka/tõmba}}-l lukke ei ole ja {{ui:Pööra}}-s need pööret ei muuda. Muul ajal pöörlevad nooleklahvid vaadet.

## Esc täisekraanil

Täisekraanil võib brauser esimest {{key:Esc}} kasutada täisekraanilt väljumiseks. Vajuta {{key:Esc}} uuesti, et tööriist tühistada.

## Keskmist nuppu pole

Vajuta {{key:O}} ({{ui:Orbiit}}) ja lohista või kasuta nooleklahve. Vt [Orbiit, nihe ja suum](topic:orbit-pan-zoom#without-a-middle-button).

## Impordid

| Teade | Mida teha |
|---|---|
| "ModelCraft impordib SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG ja DXF. … ei ole ükski neist." | Ekspordi mudel teisest programmist ühes neist formaatidest |
| "See fail on üle 300 MB." | Lihtsusta või jaga mudelit teises programmis |
| "…liiga suur, et siin modelleerida (üle 2 miljoni tipu)." | Sama |
| "See .gltf-fail vajab „…“…" | Lohista `.gltf` koos selle `.bin`- ja tekstuurifailidega või ava `.glb` versioon |
| "See glTF-fail vajab laiendust …, mida ModelCraft veel ei loe." | Ekspordi uuesti teisest programmist ilma selle laienduseta (näiteks KTX2-tekstuurid) |
| OBJ tuleb sisse ilma oma värvideta või tekstuurideta | Lohista `.obj` koos selle `.mtl`- ja pildifailidega |
| "See Alembic-fail kasutab vana HDF5-paigutust…" | Salvesta see uuesti teisest programmist Ogawa Alembic-failina |
| FBX tuleb sisse ilma oma tekstuurideta | Lohista `.fbx` koos tekstuurippiltidega või lisa meedia eksportimisel |
| "See FBX-fail on versioon …, mida ModelCraft ei loe" | Ekspordi uuesti FBX 2011 või uuemana |
| STL või PLY tuleb sisse 1000 korda liiga suurena või väikesena | STL loetakse millimeetrites ja PLY meetrites: skaleeri see (vt [Pööra ja skaleeri](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "See ei ole Collada (.dae) fail…" või "…ei ole korrektne XML…" | Fail on rikutud või ei ole Collada. Ekspordi uuesti |
| "See Collada-fail ei sisalda geomeetriat, mida ModelCraft saab importida." | See sisaldab ainult kaameraid, valgusteid või viiteid teistele failidele |
| "See on binaarne DXF. Salvesta see ASCII DXF-ina ja proovi uuesti." | Salvesta see CAD-programmist uuesti ASCII-na |
| "See ei ole DWG-joonis…" | Fail ei ole DWG või on rikutud |
| "Seda joonist ei saanud lugeda (…). See võib olla rikutud või salvestatud DWG-versioonis, mida lugeja ei käsitle…" | Sulgudes on põhjus. Salvesta see CAD-programmist DXF-ina või DWG-na AutoCAD 2000 kuni 2018 |
| "See joonis ulatub üle 10 000 km oma algpunktist…" | Liiguta joonis CAD-programmis punkti 0,0 lähedale |

### Import on vale suurusega või lamab külili

- **OBJ:** OBJ-l ei ole ühikut; ModelCraft loeb meetrites. Millimeetrites mudel tuleb 1000 korda liiga suurena: [skaleeri](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) see `0.001`-ga; tollides mudel `0.0254`-ga.
- **OBJ külili:** ModelCraft eeldab OBJ-faile, kus Y on üleval. Z-üles kirjutatud fail tuleb lamavana. Pööra seda 90° punase telje ümber: klõpsa {{ui:Pööra}} keskpunkt tahul, mis on punase suunaga, või ava fail selle programmis ja ekspordi Y-üles.
- **DWG või DXF:** valisid dialoogis „Joonise ühikud“ vale ühiku. Võta tagasi ja impordi uuesti.

## Failide avamine

| Teade | Mida teha |
|---|---|
| "See fail ei ole ModelCraft-i mudel (see ei ole JSON)." | Teiste formaatide jaoks kasuta {{ui:Impordi}} |
| "See ei ole ModelCraft-i fail, mida saame avada: …" | Fail on rikutud või muudetud käsitsi |
| "Selle mudeli salvestas uuem ModelCraft…" | Ava see uuemas versioonis |
| "See fail on üle 200 MB." | Mudel on siin avamiseks liiga suur |

## Kadunud töö

ModelCraft ei salvesta faili ise. Kui sulged või laadid uuesti vahekaardi salvestamata muudatustega, küsib brauser esmalt („Kas lahkud saidilt?“ või „Kas laadin saidi uuesti?“): jää siia ja salvesta. Uus ja Ava küsivad samuti („Salvestamata muudatused“). Kui brauser või arvuti jooksis kokku, ava ModelCraft samas brauseris uuesti: see pakub salvestamata töö tagasi („Kas taastada sinu töö?“; vt [Taasta oma töö](common:recover)). Salvesta sageli klahviga {{key:Mod+S}}.

## Minu allalaadimiste kaust täitub koopiatega

Iga salvestus on uus allalaadimine, nimega `Untitled (1).modelcraft`, `Untitled (2).modelcraft` jne. Kustuta vanad või sea brauser küsima, kuhu iga fail salvestada, ja kirjuta vana fail ise üle. Vt [Ava, salvesta, impordi ja ekspordi](topic:files#save-a-model).

## See läheb aeglaseks

- Iga tagasivõtmise samm hoiab mudeli koopiat (a [võrk](topic:meshes) hoiab ainult muutunud osa), nii et väga suure lükkamise/tõmbamise geomeetriaga impordi korral võtab iga muutmine kauem aega. Lahuta või kustuta, mida ei vaja, salvesta ja ava uuesti: uuesti avamine tühjendab ka tagasivõtmise ajaloo.
- Päikesevarjud on kõige raskemad. Eemalda linnuke {{ui:Päikesevarjud}}, kui modelleerid.

## Varjusid pole

{{ui:Päikesevarjud}} on välja lülitatud, või päike on valitud ajal allas („Päike on sel ajal allas.“), või stiil on {{ui:Traatmudel}}, mis varje ei joonista.

## „See brauser ei lubanud täisekraani.“

Mõned brauserid ja mõned sisseehitatud vaated keelduvad täisekraanist. Kasuta selle asemel brauseri enda täisekraani ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft ei avane ilma ühenduseta

ModelCraft avaneb võrguta ainult siis, kui seda on selles brauseris võrguta kasutamiseks salvestatud: rakenduse ribal olev nupp peab ütlema {{ui:Valmis ka võrguta}}. Ava see võrgus ja klõpsa {{ui:Salvesta võrguks}}. Kui nupp ütleb {{ui:Salvestamine ebaõnnestus}}, klõpsa uuesti paremal ühendusel; {{ui:Võrguta kasutamine pole saadaval}} tähendab, et see aken (privaatne aken või hallatud arvuti) ei saa koopiat hoida. Vt [Töö võrguta](common:offline).
