---
title: Orbiit, nihutamine ja suumimine
summary: Liigu mudeli ümber hiire, puuteplaadi, puuteekraani või klaviatuuriga ning hüppa standardvaadetesse.
keywords: orbiit, nihuta, suumi, pikk vajutus, kolm sõrme, kaks sõrme, klõps, navigeeri, kaamera, vaade, pööra vaadet, puuteplaat, puuteekraan, nipsutus, keskmine nupp, suumi ulatus, perspektiiv, paralleelne, ülevaade, iso
from: 10d4d33a
---

Kaamerat saab liigutada igal ajal, isegi joone joonistamise või tahu lükkamise keskel: tööriist ootab seal, kus see oli.

## Kolmenupulise hiirega

| Tegevus | Kuidas |
|---|---|
| Orbiit | Lohista keskmise nupuga (vajuta ratast) |
| Nihuta | Lohista parema nupuga või hoia all {{key:Shift}} ja lohista keskmise nupuga. {{key:Shift}} vajutamine või vabastamine lohistamise ajal vahetab orbiidi ja nihutamise vahel |
| Suumi | Keera ratast. See suumib tahu poole, mis on kursori all, või punkti poole, mis on selle all vaate keskme sügavusel |
| Näita kogu mudelit | {{key:Shift+Z}} või {{ui:Extents}} |

Orbiit pöörab vaadet mudeli osa ümber, mis on kursori all, nii et see punkt jääb paigale, kui kõik selle ümber pöördub. Tühja ruumi kohal pöörab see vaate keskme ümber. Nihutamine hoiab punkti, mille haarasid, kursori all.

Et alati orbiteerida vaate keskme ümber või muuta orbiidi ja nihutamise kiirust, ava {{ui:Settings}} ({{key:Mod+,}}), vaheleht {{ui:ModelCraft}}, **Orbit and pan**. Kiirused kehtivad hiirele, puuteplaadile, puutele ja nooleklahvidele.

Parema nupu klõps ilma lohistamata ei tee midagi; ModelCraft-il pole paremklõpsu menüüd.

## Ilma keskmise nuputa

Kasuta tööriistariba kaamera tööriistu või klaviatuuri:

1. Vajuta {{key:O}} (või klõpsa {{ui:Orbit}}) ja lohista vasaku nupuga, et orbiteerida. Lohistamise ajal hoia all {{key:Shift}}, et nihutada.
2. Vajuta {{key:H}} (või klõpsa {{ui:Pan}}) ja lohista, et nihutada.
3. Vajuta {{key:Z}} (või klõpsa {{ui:Zoom}}) ja lohista üles, et suumida sisse, alla, et suumida välja.
4. Vajuta {{key:Space}}, et naasta tööriista {{ui:Select}} juurde, või vajuta järgmise tööriista klahvi.

Kaamera tööriistad asendavad tööriista, mida kasutasid. Et vaadata ringi toimingu keskel ilma seda kaotamata, kasuta klaviatuuri:

- Nooleklahvid orbiteerivad.
- {{key:Shift}} koos nooleklahvidega nihutab.

Kui joonistamistööriist on toimingu keskel (pärast esimest klõpsu), lukustavad nooleklahvid suunad orbiteerimise asemel. Vt [Haakumine ja lukustamine](topic:inference#lock-a-direction).

## Puuteplaadil

Kõige lihtsam viis: ava {{ui:Settings}} ({{key:Mod+,}}), vaheleht {{ui:ModelCraft}}, ja sea Scrolling väärtuseks **Trackpad** (või jäta see väärtusele „Work it out“). Siis orbiteeri kahe sõrmega pühkides, hoia {{key:Shift}} all ja pühi, et nihutada, ning suumi näpitsaga, ilma kaamera nuppudeta. Vt [ModelCraft-i sätted](topic:settings#scrolling-mouse-wheel-or-trackpad).

Kui Scrolling on seatud **Mouse wheel**:

:::mac
- **Suumi:** keri kahe sõrmega või näpi. Mõlemad suumivad kursori poole.
- **Nihuta:** vajuta kahe sõrmega (teisene klõps) ja hoia sõrmed all, kui lohistad. Lülita **Süsteemi sätetes** ja seejärel **Trackpad** sisse „Secondary click“, kui kahe sõrmega klõps ei tee midagi.
- **Orbiit:** vajuta {{key:O}} ja lohista ühe sõrmega või kasuta nooleklahve.
- Ctrl all klõpsamine ei pruugi ModelCraft-is loeda paremklõpsuna, sõltuvalt brauserist: see võib toimida klõpsuna koos all oleva {{key:Ctrl}}-ga. Nihutamiseks kasuta kahe sõrmega vajutamist.
:::

:::windows linux
- **Suumi:** keri kahe sõrmega. Näpitsa suumib ka seal, kus puuteplaadi draiver saadab selle kerimisena koos {{key:Ctrl}}-ga.
- **Nihuta:** lohista parema nupuga (paljudel puuteplaatidel vajuta alumist parempoolset nurka ja lohista) või vajuta {{key:H}} ja lohista.
- **Orbiit:** vajuta {{key:O}} ja lohista või kasuta nooleklahve.
:::

Režiimis Mouse wheel suumib kahe sõrmega kerimine; see ei nihuta. See on vastupidine paljudele veebilehtedele ja nii töötab hiireratas enamikus 3D-modelleerijates.

:::tip
{{key:Space}} valib ModelCraft-is tööriista {{ui:Select}}. Tühikuklahvi all hoidmine ja lohistamine ei nihuta, nagu see teeb mõnes muus rakenduses.
:::

## Puuteekraanil

:::touch
- **Üks sõrm** kasutab praegust tööriista: **puuduta**, et klõpsata, **vajuta ja lohista**, et joonistada või lohistada.
- Kui joonistamistööriista sõrm on all, näitab selle kohal olev **luup**, mis sõrme all on, et näed lõpp-punkti, keskpunkti või serva, mille külge haakud, enne kui tõstad sõrme.
- **Hoia paigal** pool sekundit, et lõpetada tööriista tegevus, nagu teeb {{key:Enter}}: kõver või joonteahel. Kui midagi ei toimu, orbiteerib paigal hoidmine ja seejärel sama sõrme lohistamine **orbiteerib**, kuni tõstad sõrme.
- **Kaks sõrme**, lohistatud koos, **nihutavad**; **näpi**, et suumida. Mõlemad töötavad ühes žestis.
- **Kolm sõrme**, lohistatud koos, **orbiteerivad**.
- Et need vahetada (kaks sõrme orbiteerivad, kolm nihutavad), ava {{ui:Settings}}, vaheleht {{ui:ModelCraft}}, Touch screen.
- Teise sõrme panemine alla **tühistab** selle, mida esimene sõrm alustas (pooleli ristkülik, pooleli lükkamine). Tõsta sõrmed üles ja alusta uuesti.
- Vaate allservas on väike riba nuppudega **Valmis** ({{key:Enter}}), **Tühista** ({{key:Esc}}) ja **Võta tagasi**, kui klaviatuuri pole.
- Haakumine ja valimine ulatuvad hiirega võrreldes veidi kaugemale ning nupud on suuremad, et sõrm neid tabaks.
:::

:::mouse
Puuteekraanil kasutab üks sõrm praegust tööriista (klõps puudutusega, lõpetamine hoides paigal või orbiteerimine paigal hoides ja lohistades), kaks sõrme nihutavad ja näpitsaga suumivad, kolm sõrme orbiteerivad ning väike riba pakub Valmis, Tühista ja Võta tagasi.
:::

## Standardvaated

1. Klõpsa {{ui:Views}} tööriistariba paremas servas.
2. Vali {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} või {{ui:Bottom}}.

Vaade pöördub selle suunda ja mahutab kogu mudeli. {{ui:Front}} vaatab põhja poole, mööda rohelist telge; {{ui:Top}} vaatab otse alla, põhi üleval.

Vaatekuubik vaate paremas ülanurgas teeb sama ühe klõpsuga, lisaks servad ja nurgad, kompassirõnga mudeli pööramiseks ja kodunupu. Vt [Vaatekuubik](topic:view-cube).

## Perspektiiv ja paralleelprojektsioon

Vali {{ui:Views}}, seejärel {{ui:Perspective}}. Linnuke tähendab, et perspektiiv on sisse lülitatud. Kui see on välja lülitatud, on vaade paralleelprojektsioon (ortograafiline): mudelis paralleelsed jooned jäävad ekraanil paralleelseks, mida tahad fassaadivaadete jaoks {{ui:Front}} või {{ui:Right}} alt. Olekuriba ütleb „Perspective.“ või „Parallel projection.“

Iga stseen mäletab, kas see oli perspektiivis. Vt [Vaadete salvestamine stseenidena](topic:scenes).
