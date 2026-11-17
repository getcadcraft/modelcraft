---
title: Tahkude lükkamine ja tõmbamine tahkisteks
summary: Muuda tahk kastiks, tee hoone kõrgemaks või madalamaks, lisa erker või süvend ning korda distantsi topeltklõpsuga.
keywords: lükka tõmba, väljapressimine, kõrgus, tahkis, kast, mass, kõrgem, süvend, välja lükkamine, korda, topeltklõps, maht, tase, tahul, tasa, sama kõrgus
from: dc093c91
---

{{ui:Lükka/tõmba}} ({{key:P}}) liigutab tahku mööda selle enda suunda: üles ja alla põranda puhul, sisse ja välja seina puhul. Mis juhtub, sõltub tahust.

## Tahkise tegemine tahust

1. Joonista tahk, näiteks ristkülik maapinnale ([Joonista tahud](topic:draw-faces)).
2. Vajuta {{key:P}}.
3. Liiguta kursor tahu kohale. See värvub esile.
4. Klõpsa tahul ja liiguta siis kursorit. Tahk tõuseb (või vajub) ja küljed kasvavad selle servadest. Väärtuse kast ({{ui:Vahemaa}}) ja vihje näitavad distantsi.
5. Klõpsa lõpetamiseks või sisesta distants ja vajuta {{key:Enter}}: `3m`, `10'`, `2700` millimeetermudelis.

   Nüüd on sul suletud tahkis. Vali see kõik ja rühmita see (vaata [Rühmad ja komponendid](topic:groups-components)): seejärel näitab {{ui:Objekti teave}} „Tahkis: Jah“ ja selle mahtu.

Üksik tahk võib minna kumbamoodi: tõmba see üles maapinnast kõrgemale massiks, lükka alla kaevuks või vundamendiks.

:::tip
Kahe klõpsu asemel vajuta tahule, lohista ja vabasta. Puuteekraanil on see loomulik viis: vajuta, lohista, tõsta.
:::

## Tõmba teise asja kõrgusele

Tõmbamise ajal liiguta kursor mudeli muu osa nurga, keskpunkti, serva või juhtjoone kohale. Tahk haakub selle kõrgusele ja märgis näitab punkti. Kasuta seda selleks, et teha kaks plokki võrdse kõrgusega, või et peatuda juhtjoonel, mille panid [mõõdulindiga](topic:guides-measure).

Samuti saad liikuda tahu kohale, mis on lükatava tahuga paralleelne, näiteks teise ploki ülaosa või kasti ülaosa, millel post seisab. Vihjes on „Tahul“ ning lükatav tahk lõpeb sellega tasa. Näiteks lükka toru sisemine tahk alla, kuni see on toru all oleva kastiga tasa.

Tahk, mis on lükatava tahu suhtes nurga all, ei määra tasapinda. Distants järgib kursorit. Nii käitub ka tahk lükatava tahu taga.

Kui lükatav tahk jõuab jälle ümbritsevate tahkudega tasa, kaovad selle küljed. Nullkõrgusega külgi ei jää alles ning joonistatud kontuur jääb tahule, nii et saad seda hiljem uuesti lükata. Et sellest jälle üks tahk teha, kustuta kontuuri servad tööriistaga {{ui:Kustutaja}}: kaks tahku ühinevad.

## Tee kast kõrgemaks või madalamaks

Lükka/tõmba kasti ülaosa. Kuna küljed kulgevad juba sellest otse üles, liigub ülaosa lihtsalt: kast muutub kõrgemaks või madalamaks ega tekita uusi servi.

- Kui lükata ülaosa kogu tee alla põhjani, kustub kast. ModelCraft peatub nullkõrgusel; ta ei pööra kasti kunagi pahupidi.
- Sama kehtib iga tahu kohta, mille kõik naabrid kulgevad mööda selle suunda, näiteks seina otsa kohta.

## Lisa erker või süvend

1. Joonista ristkülik kasti küljele (alusta tahul; see jääb tahu tasapinda).
2. Vajuta {{key:P}} ja tõmba uus ristkülik **välja**. See lisab materjali: erkeri, korstna, varikatuse.
3. Või lükka see **sisse**. See lõikab süvendi: verandat, nišši või tagasi nihutatud sissepääsu.

Kui uue osa küljed joonduvad juba olemasolevate tahkudega, ühinevad need üheks tahuks, nii et lamedal seinal ei teki eksinud jooni.

## Lükka läbi

Tahu lükkamine tahkisesse peatub esimese tahu taga. Kui see jõuab selle tahuni, lõikab see läbi ava. Nii teed paksu seina sisse aknad ja uksed. Vaata [Lõika ava läbi seina](topic:openings).

## Sisesta distants

Pärast tahu klõpsamist sisesta distants ja vajuta {{key:Enter}}.

- Sisestatud distants läheb sinu liikumise suunas. Kui sa pole veel liikunud, läheb see tahu esiosa poole (tahkisest välja, maapinnast üles).
- Vastassuunas minemiseks sisesta negatiivne arv, näiteks `-500`.
- Kui muudad enne klõpsamist meelt, vajuta {{key:Esc}}. Tahk läheb tagasi.

## Korda viimast distantsi

Pärast ühte lükkamist/tõmbamist topeltklõpsa teisel tahul, kui {{ui:Lükka/tõmba}} on endiselt valitud. See liigub sama distantsi võrra. See on kiire viis anda mitmele seinale või mitmele põrandale sama paksus või kõrgus.

ModelCraft mäletab distantsi, kuni lülitad teisele tööriistale.

## Hea teada

- Lükka/tõmba töötab korraga ühe tahuga. Kui klõpsad millelgi, mis ei ole tahk, ütleb olekuriba: „Lükka/tõmba töötab tahuga. Klõpsa tahul.“
- Et lükata/tõmmata tahku rühma või komponendi sees, ava see kõigepealt (topeltklõpsa sellel).
- Kui **Põrkumine** on sisse lülitatud, peatub lükkamine või tõmbamine, mis läheb teise tahkisega kokku, sinnamaani, kus puutub, ning vihjes öeldakse, mida see puudutab (objekti nimi või „lahtine geomeetria selles rühmas“), ja tõstetakse esile tahud, millega ta kohtus. Süvend, mille lükkad oma tahkisesse (näiteks nihutatud tahk, mis lükatakse tagasi alla), on selle tahkise osa ja selle seinad ei peata seda kunagi.
- Kaks tahkist, mis lükatakse teineteisesse, ei lõika ega ühenda teineteist: nende tahud lihtsalt läbivad teineteist. Vaata [Veel valmis pole](topic:not-built-yet).
