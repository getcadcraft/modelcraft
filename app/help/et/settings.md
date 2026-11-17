---
title: ModelCraft'i sätted
summary: Vali klahvistiil, mida tunned, tee puuteplaadiga orbiit ja nihutus ilma kaamera nuppudeta ning lülita haakimine ja tahkiste põrkumine sisse või välja.
keywords: sätted, eelistused, juhtimine, klahvistiil, klahvikaart, kiirklahvid, blender, puuteplaat, kerimine, orbiit, näpistamine, haakimine, põrkumine, kattumine, lõikumine, läbi minemine
from: caf77d5b
---

Ava {{ui:Sätted}} rakenduse tööribal oleva hammasrattaga või {{key:Mod+,}}. Esimene kaart, {{ui:ModelCraft}}, sisaldab selle rakenduse sätteid; {{ui:Üldine}} sisaldab neid, mida jagavad kõik CadCraft'i rakendused (teema, tööriistariba, paneelid). ModelCraft'i sätted kehtivad ainult selles rakenduses: muudad neid siin ja see brauser mäletab neid.

## Juhtimine: millised klahvid ja hiirenupud

Kaks klahvistiili. Vaheta neid siin, vaate all paremas nurgas olevate {{ui:Klahvid: Lükka/tõmba}} / {{ui:Klahvid: Modelleerija}} abil või tööriistariba menüü {{ui:Rohkem}} lõpus:

- **Lükka/tõmba stiil** (algus; lükka/tõmba modelleerijate, nagu SketchUp, tähed): täht valib tööriista: {{key:L}} joon, {{key:R}} ristkülik, {{key:P}} lükka/tõmba, {{key:M}} teisalda, {{key:Q}} pööra, {{key:S}} mõõtkava, {{key:G}} tee komponent. Vt [Klahvid ja hiireteod](topic:keyboard).
- **Modelleerija stiil** (võrkmodelleerijate, nagu Blender, klahvid): vali kõigepealt ja tegutse valikuga kohe. {{key:G}} teisaldab selle, {{key:R}} pöörab ja {{key:S}} muudab mõõtkava sellest kohast, kus kursor on, esimest klõpsu pole vaja. Teisaldamise ajal lukustab {{key:X}}, {{key:Y}} või {{key:Z}} punase, rohelise või sinise telje, trükitud number määrab kauguse (või kraadid või teguri) ja klõps või {{key:Enter}} paneb asja maha; {{key:Esc}} või parem klõps paneb tagasi. Seejärel oled jälle tööriistas {{ui:Vali}}.

Klahvistiil on sama valik, mis menüü stiil: Modelleerija klahvistiil on menüü {{ui:Modelleerija}} stiil ja ühe valimine valib teise. Vt [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse). Täieliku Modelleerija loendi leiad [Klahvid ja hiireteod](topic:keyboard#modeler-keys). Tööriistariba ja alustuskaardi vihjed järgivad valitud stiili.

## Kerimine: hiireratas või puuteplaat

- **Tuvasta ise** (algus): ModelCraft jälgib kerimist. Külgsuunaline või peen kerimine, nagu puuteplaat seda saadab, orbiidib; hiireratta terved sakid suumivad.
- **Hiireratas**: kerimine suumib alati kursori suunas.
- **Puuteplaat**: pühi kahe sõrmega, et orbiidida; hoia all {{key:Shift}} ja pühi, et nihutada; nipista, et suumida. Nuppe {{ui:Orbiit}}, {{ui:Nihuta vaadet}} ja {{ui:Suumi}} pole sul kunagi vaja.

Nipistamine suumib igal valikul. Kui "Tuvasta ise" arvab sinu hiire või puuteplaadi jaoks valesti, vali see, mis sul on.

:::tip
Modelleerija stiilis saad orbiidida ka hoides all {{key:Alt}} ja lohistades ning nihutada {{key:Alt+Shift}} ja lohistamisega. See on mugav sülearvutil, millel pole keskmist nuppu.
:::

## Haakimine

**Haakimine punktidele, servadele ja telgedele** (algselt sees) tõmbab kursori lõpp-punktidesse, keskpunktidesse, servadesse, abijoontesse ning punasesse, rohelisse ja sinisesse telge. Vt [Järeldamine](topic:inference). Lülita see välja, kui tahad midagi vabalt paigutada teiste geomeetriate lähedale, ilma et see hüppaks. Tahud, maapind ja telglukud töötavad ka siis, kui haakimine on väljas.

Vaate all paremas nurgas olev nupp {{ui:Haakimine}} teeb sama selle seansi töö jaoks (see salvestatakse ka). Modelleerija stiilis lülitab haakimist {{key:Shift+Tab}}.

## Tahkised peatuvad, kui nad puudutavad

**Peata tahkised, kui nad puudutavad** (algselt sees) hoiab seina ära lohistamast läbi teise seina. Käsuga {{ui:Teisalda}} (ja {{key:G}}, ning kleebi-ja-teisalda {{key:Mod+D}}) libiseb valik teise tahkise juurde ja peatub, kui seda puudutab; {{ui:Lükka/tõmba}}-ga peatub tahk, kui see jõuab teise tahkiseni. Millegi peal toetumine ja mööda libisemine on lubatud. Peatatakse ainult sisse minek. Juba alguses kattuvaid asju saab siiski lahti tõmmata.

Teise tahkise läbi tahtlikult lükkamiseks klõpsa paremas all olevat {{ui:Põrkumine}}-nuppu (või tühista säte), tee teisaldus ja klõpsa uuesti.

:::note
Põrkumisi kontrollitakse teisaldamisel ja lükka/tõmba puhul. {{ui:Pööra}} ja {{ui:Mõõtkava}} neid veel ei kontrolli. Lahtine geomeetria, mis puudutab, ühineb endiselt, nagu alati: hoia eraldi asju [gruppides](topic:groups-components), et need jääksid eraldi.
:::

## 3D-printeri alus

Sinu printeri aluse suurus: {{ui:Määramata}} (algus), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 või 300 × 300 × 400 mm. Vali suurus, mis on kõige lähemal sinu printeri ehitusmahule. [Kontrolli 3D-printimist](topic:print-3d) ütleb siis, kui mudel on alusest suurem; valikuga {{ui:Määramata}} suurust ei kontrollita.

## Orbiit ja nihutus

**Orbiteeri selle ümber, mis on kursori all** (algselt sees): orbiit pöörleb ümber mudeli osa, mis on kursori all, ja nihutus hoiab seda punkti kursori all. Tühjal alal kasutavad mõlemad vaate keskpunkti. Lülita see välja, et alati orbiteerida vaate keskpunkti ümber. **Orbiidi kiirus** ja **Nihutuse kiirus** ulatuvad 0.25×-st 3×-ni (1× on algus) ja kehtivad hiirele, puuteplaadile, puutele ja nooleklahvidele. Vt [Orbiit, nihutus ja suum](topic:orbit-pan-zoom).

## Nurgaindikaator

Mis kuvatakse 3D-vaate nurgas: **Vaatekuup** (algus; paremal üleval: klõpsa tahku, serva või nurka, et sealt vaadata, lohista seda orbiidimiseks, lohista selle kompassirõngast, et mudelit pöörata), **Telje ikoon** (väike X, Y, Z märk vasakul all, mis pöördub koos vaatega: X punane, Y roheline, Z sinine) või **Puudub**. Vt [Vaatekuup](topic:view-cube).
