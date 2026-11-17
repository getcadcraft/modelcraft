---
title: Tulemine teistelt modelleerijatelt
summary: Kuidas lükka/tõmba modelleerimise harjumused vastavad ModelCraftile klahv-klahvilt ning erinevused, mis inimesi vahel üllatavad.
keywords: üleminek, üle viia, tuttav, erinevused, lükka tõmba modelleerija, skp, kiirklahvid, harjumused, võrdle, mõõtmiste kast, struktuur, objekti teave
from: 74ffd4ac
---

Kui oled modelleerinud SketchUpis, tundub ModelCraft tuttav: sama mõte tahkudest ja lükkamisest/tõmbamisest, samad tööriistatähed, väärtuse kast, kuhu saad sisestada ilma klõpsamata, sisestamine punase, rohelise ja sinise telje abil, grupid, komponendid, struktuur, objekti teave ja stseenid. See leht loetleb, mis kandub otse üle ja, mis veelgi olulisem, mis ei kandu.

## Harjumused, mis kanduvad üle

| Oled harjunud | ModelCraftis |
|---|---|
| Vajuta Space valimiseks, L Joon, R Ristkülik, C Ring | Sama: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Vajuta P Lükka/tõmba, M Teisalda, Q Pööra, S Mõõtkava, E Kustutaja, T Mõõdulint | Sama: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Vajuta O Orbiit, H Nihuta, Z Suumi, Shift+Z Suumi ulatusse | Sama: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Vajuta G, et teha komponent | Sama: {{key:G}}. {{key:Shift+G}} teeb grupi |
| Sisesta mõõtmiste kasti ilma klõpsamata | Sama, väärtuse kastis allservas. Vajuta {{key:Enter}} |
| Kirjuta `4m,3m` ristkülikule, `12s` külgedele | Sama |
| Kirjuta `3x` või `/3` pärast koopiat teisaldamisel | Sama; toimib ka `*3` |
| Kirjuta `[x,y,z]` või `<dx,dy,dz>` punktile või nihkele | Sama |
| Kirjuta paljas arv tollimudelis ja saad tolli | Sama |
| Keskmise nupuga lohistamine orbiidib, Shift+keskmise nupuga lohistamine nihutab, ratas suumib kursori juures | Sama |
| Topeltklõps lükkamise/tõmbamise tööriistaga kordab kaugust | Sama |
| Nooleklahvid lukustavad punase, rohelise, sinise ja paralleelsuse | Sama: {{key:Right}} punane, {{key:Left}} roheline, {{key:Up}} sinine, {{key:Down}} paralleelne |
| Hoia Shift all, et lukustada haakimine | Sama |
| Ctrl (Option Macil) kopeerimiseks liigutamise ajal | {{key:Ctrl}}, {{key:Mod}} või {{key:Alt}}, igal arvutil |
| Shift lülitab, Ctrl lisab, Shift+Ctrl eemaldab valikust | Samad klahvid; Macis kasuta {{key:Mod}} seal, kus on öeldud Ctrl |
| Vasakult paremale aken, paremalt vasakule ristumine | Sama |
| Mõõtmistööriist pikkuste märkimiseks | {{key:D}}, ja veel: sisesta mõõdule uus pikkus ja mudel muutub selle järgi. Vt [Mõõt ja muutmine](topic:dimensions) |
| Topeltklõps tahul tahu ja servad; kolmikklõps kõik ühendatud | Sama |
| Joonista joon üle tahu, et see jagada; kustuta serv koplanaarsete tahkude vahelt, et need ühendada | Sama |
| Lükka akna ristkülik seina läbi, et see lõigata | Sama |
| Tahud tagasipoolelt sinakashallid; Pööra tahud ümber | Sama värv; {{ui:Pööra tahk ümber}} jaotises {{ui:Objekti teave}} |
| Stseenid vaate kohal sakkidena, Page Up ja Page Down | Sama, koos {{ui:Esita}} paneelis {{ui:Stseenid}} |
| Varjud kuupäevast, kellaajast, laiuskraadist ja pikkuskraadist, põhi rohelisena | Sama, paneelis {{ui:Stiil}} |

## Erinevused, mis üllatavad

### Salvestamine on allalaadimine

Ei ole Salvesta, mis kirjutab avatud faili üle, ei ole nimega Salvesta nimega -dialoogi, ei ole automaatset salvestust ega varukoopiat. {{ui:Salvesta}} ({{key:Mod+S}}) laadib iga kord alla uue faili `.modelcraft`, tavaliselt sinu allalaadimiste kausta. Salvesta sageli ning nimeta ja teisalda failid ise ümber. Vt [Faili avamine, salvestamine, import ja eksport](topic:files).

### Impordib .skp-faile, aga ei salvesta neid

{{ui:Impordi}} loeb SketchUpi faile ModelCraftile endale omase lugejaga, lehel: grupid, komponendid, värvid, tahkude tekstuurid, sildid ja pehmed servad tulevad kaasa. Vt [Failivormingud põhjalikult](topic:formats#skp-files). ModelCraft ei saa salvestada `.skp`-d: tagasi minemiseks ekspordi ModelCraftist Collada ja impordi see SketchUpi.

### Parempoolset hiireklõpsu menüüd ei ole

Parema nupuga lohistamine nihutab; parem klõps ei tee midagi. Käsud, mida leiaksid kontekstmenüüst, on {{ui:Objekti teave}} all ({{ui:Pööra tahk ümber}}, {{ui:Redigeeri}}, {{ui:Lahuta}}, {{ui:Tee unikaalseks}}, {{ui:Loo komponent}}) ja tööriistariba rühmas {{ui:Korrastamine}}.

### Ühikud elavad olekuribal

Mudeli teavet ega mallivalikut ei ole. Ühikute valija on paremal all. Uus mudel algab USA-s tollides ja jalgades ning mujal millimeetrites, sinu brauseri keelesätte järgi. Komakohad kirjutatakse alati punktiga: `2.5m`, mitte kunagi `2,5m`, sest koma eraldab alati väärtusi.

### Värvidel on oma materjalid

{{ui:Värvi}} ({{key:B}}) värvib tahkvärve ja jaotise {{ui:Materjalid}} materjale: tellis, vooder, katus, puit, kivi ja veel, mille joonistab ModelCraft. Oma pilti materjalina laadida veel ei saa; imporditud failidega tulevad tekstuurid säilivad. Vt [Värvimine värvide ja materjalidega](topic:paint).

### Skaala on ühtlane, ilma käepidemeteta

Mõõtkava ei näita kasti käepidemetega. Klõpsa punktil, mis jääb paigale, võrdluspunktil, siis uuel suurusel või sisestatud teguril. See skaleerib alati ühtlaselt kõigis suundades. Ühes suunas venitamiseks lükka/tõmba või teisalda tahku, või sisesta grupi laius, sügavus või kõrgus uuesti jaotises {{ui:Objekti teave}}, või [muuda suurust mõõdu abil](topic:dimensions).

### Pööramine valib oma tasandi sellest, kuhu klõpsad

Ei ole nurgamõõdikut, mis kleepuks tahkude külge, kui liigutad kursorit nooleklahvidega tasandi valimiseks. Klõpsa tahul keskpunkti, et pöörata selle tahu tasandis, või maapinnal, et pöörata vertikaali ümber. Nooleklahvid orbiidivad vaadet enne esimest klõpsu.

### Haakimine punktidest, millest üle lähed

ModelCraft haakub telgede suundadega **sinu algpunktist** ning punktidesse, servadesse ja tahkudesse, mis on kursori all. See ei jälgi suunda punktist, mille peale ainult hoiad (punktiirjoonega „punktist“ haakimine). Et joonduda kaugel asuva nurgaga, lukusta telg nooleklahviga ja hoia kursorit selle nurga peal: lukustatud punkt libiseb, et sellega joonduda. Või aseta [juhik](topic:guides-measure).

### Paralleelne kasutab serva, mille üle enne alustamist liikusid

Paralleelne ja risti haakimine kasutab viimast serva, mille kursor ületas **enne esimest klõpsu**, mitte servi, mille peal joonistamise ajal hoiad. Vt [Haakimine ja haakumine](topic:inference#parallel-and-perpendicular).

### Grupi koopiad on seotud

Grupi kopeerimine {{ui:Teisalda}} abil teeb sama grupi teise paigutuse, nii et ühe muutmine muudab mõlemat, nagu komponentidega. SketchUp teeb grupid sõltumatuks. Vt [Tõrkeotsing](topic:troubleshooting#editing-one-group-changed-another).

### Tühik ei nihuta

{{key:Space}} valib {{ui:Vali}}, nagu SketchUpis. Mõnes teises veebirakenduses nihutab tühiku hoidmine; siin ei nihuta. Nihutamiseks lohista parema nupuga.

### Kahe sõrmega kerimine suumib

Trackpadil sea {{ui:Sätted}} › {{ui:ModelCraft}} › Kerimine väärtuseks Trackpad: kaks sõrme orbiidivad, {{key:Shift}} ja kaks sõrme nihutavad, nipsuga suumid. Vt [Orbiit, nihutamine ja suumimine](topic:orbit-pan-zoom#on-a-trackpad).

Kui su käed tunnevad Blenderi klahve, mitte SketchUpi omi, vali menüülaadiks {{ui:Modeler}}: {{key:G}}, {{key:R}} ja {{key:S}} mõjutavad valikut korraga, {{key:E}} tõmbab välja (lükkamine/tõmbamine), {{key:Shift+D}} dubleerib ning päisemenüü (Fail, Redigeeri, Vaade, Vali, Lisa, Objekt, Võrk) asendab tööriistariba. Kui tuled SketchUpist, annab menüülaad {{ui:Tõmba-lükka}} oma menüüriba samade tööriistatähtedega. Vt [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).

### Üksteisesse surutud tahked ei lõigata

Lükka/tõmba lõikab läbi selle taga oleva tahu samas objektis, aga kaks eraldi tahket, mis on üksteisesse surutud, ei lõiku. Tahkude lõikumist ega tahke tööriistu ei ole.

### Mis puudub

Vabakäe-joonistus, Lõika, Jaga ja Välimine kest, sinu enda pildimaterjalid, laiendused ning lehtede paigutustööriist ei ole selles versioonis. [Veel mitte valmis](topic:not-built-yet) loetleb, mida selle asemel teha.

## Kiirklahvid, mis jäävad brauserisse

ModelCraft töötab brauseris, nii et mõned kiirklahvid kuuluvad brauserile, mitte rakendusele. {{key:Mod+N}} avab brauseriakna (kasuta {{ui:Uus}}), ja {{key:Mod+W}} sulgeb vahelehe. Kui on salvestamata muudatusi, küsib brauser enne sulgemist. Vt [Klahvid, hiired ja trackpadid](common:keys#shortcuts-the-browser-keeps).
