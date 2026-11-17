---
title: Animeeri kaamerat ja objekte ning renderda video
summary: Sea kaamera ning grupi ja komponendi võtmed ajajoonele, esita neid vaates ja renderda animatsioon WebM-videoks renderdaja taeva, päikese ja materjalidega.
keywords: animatsioon, animeeri, ajajoon, võtmekaader, võtmed, võtmekaadri, kaamera tee, lennu läbi, läbikõnd, läbi kõndimine, video, film, webm, renderda video, kaadrid, kaadrisagedus, fps, esitusjoon, automaatne võti, leevendamine, sujuv, hoia, stseenid, png-järjestus, liikumine
from: d3a58249
---

**Ajajoon** liigutab kaamerat ning mis tahes gruppi või komponenti aja jooksul. Sa sead **võtmed** (kus miski on antud hetkel); ModelCraft liigutab seda võtmelt võtmele sujuvalt. Esita see vaates ning renderda siis video samade taeva, päikese, materjalide ja lampidega nagu [renderdatud pilt](topic:render).

## Ava ajajoon

Klõpsa rühmas {{ui:Kaamera}} nupul {{ui:Vaated}}, siis {{ui:Animatsiooni ajajoon}}. Ajajoon avaneb vaate alla: ülal juhtnupud, siis rida {{ui:Kaamera}} ja rida iga liikuva grupi või komponendi kohta. Teemandid on võtmed; punane joon on **esitusjoon**, hetk, mida vaates näidatakse.

:::touch
Telefonis avaneb ajajoon samuti vaate alla. Selle juhtnupud on ühel real: pühi küljele, et jõuda ülejäänuni; ajajoone sulgemise nupp jääb selle lõppu.
:::

Lohista liugurit (või klõpsa reas), et liigutada esitusjoont. {{ui:Esita}} mängib esitusjoonelt ja muutub mängides {{ui:Peata}}-ks; klõpsa uuesti, et peatuda sinna, kus oled. {{key:Space}} teeb sama, kui ajajoon on avatud (suletud ajajoonega on Space endiselt Vali). {{ui:Eelmine võti}} ja {{ui:Järgmine võti}} hüppavad võtmete vahel. Oma stiil võib anda esitamisele ja peatamisele teise klahvi: {{ui:Sätted}}, siis menüüd, klahvid ja hiir, käsk *Esita või peata animatsioon*.

## Liiguta kaamerat

1. Liiguta esitusjoon sinna, kus kaader algab (0 s), seadista vaade ja klõpsa {{ui:Võti kaamerale}}.
2. Liiguta esitusjoont hiljemale hetkele (ütleme 4 s), orbiidi, nihuta või kõnni vaatega järgmisesse asendisse ja klõpsa uuesti {{ui:Võti kaamerale}}.
3. Lisa nii palju võtmeid, kui tahad, ja siis {{ui:Esita}}.

Kaamera läbib iga võtme sujuvalt ning alustab ja lõpetab puhkeasendis.

:::tip
Kas sul on juba [stseenid](topic:scenes)? {{ui:Stseenidest}} teeb kaamera tee nende järgi: ta peatub igal stseenil ja liigub siis järgmisele. Kui ajajoonel ei ole üldse võtmeid, teeb {{ui:Renderda video…}} selle ise, nii et kaks stseeni või rohkem on piisavad läbikõnnivideo jaoks.
:::

## Liiguta gruppi või komponenti

1. Vali grupp või komponent (liiguvad ainult terved grupid ja komponendid; [loo kõigepealt grupp](topic:groups-components)).
2. Kell 0 s klõpsa {{ui:Võti valitud}}.
3. Liiguta esitusjoont hiljemale, [liiguta, pööra või skaleeri](topic:move-copy) gruppi sinna, kuhu see peaks jõudma, ja klõpsa uuesti {{ui:Võti valitud}}.

See libiseb, pöördub ja kasvab oma võtmete vahel. Pöörded võtavad lühema tee.

**Automaatne võti** säästab sammu 3 klõpsu: kui {{ui:Automaatne võti}} on sisse lülitatud, saab valitud grupp või komponent, mida liigutad, pöörad või skaleerid, esitusjoonele võtme iseenesest (ja esimest korda ka võtme kohta 0 s, kus see oli).

:::note
Animeeritud grupi liigutamine ilma võtmeta kestab ainult seni, kuni esitusjoon liigub: järgmisel esitamisel või kerimisel läheb see tagasi sinna, kuhu tema võtmed selle paigutavad. Olekurida ütleb seda. Vajuta {{ui:Võti valitud}}, et see säiliks.
:::

## Muuda võtmeid

- **Vali võti**, klõpsates selle teemandil: esitusjoon läheb sinna.
- **Liiguta võtit**, lohistades selle teemandit mööda rida, või {{key:Left}} ja {{key:Right}} abil (üks kaader; {{key:Shift}}-ga kümme).
- **Kustuta** nupuga {{ui:Kustuta võti}} (valitud võti või iga võti esitusjoonel) või klahviga {{key:Delete}} valitud teemandil.
- **Kuidas see edasi liigub** valitud võtme puhul: {{ui:Sujuv}} (kõver läbi ümbritsevate võtmete), {{ui:Ühtlane}} (sirgjoon ühtlasel kiirusel), {{ui:Aeglane algus ja lõpp}} (jõuab selles võtmes puhkeasendisse) või {{ui:Hoia}} (jääb paigale kuni järgmise võtmeni).
- **{{ui:Pikkus (s)}}** seab, kui pikk animatsioon on; lõpu järel seatud võti pikendab seda. Lühendamiseks liiguta või kustuta kõigepealt võtmed uuest lõpust kaugemal.
- Grupi rea **×** lõpetab selle animeerimise.

Ajajoonel on oma {{ui:Võta tagasi}} ja {{ui:Tee uuesti}}: mudeli tagasivõtmine ({{key:Mod+Z}}) muudab mudelit, mitte võtmeid. Animatsioon salvestatakse faili `.modelcraft`. Ajajoone sulgemine viib liikuvad grupid tagasi nende esimesse poosi.

## Renderda video

1. Klõpsa ajajoonel {{ui:Renderda video}} (või {{ui:Ekspordi}} › {{ui:Renderda video…}}).
2. Vali {{ui:Suurus}}, {{ui:Kaadrisagedus}}, {{ui:Iga kaadri kvaliteet}} ja {{ui:Fail}}.
3. Klõpsa {{ui:Renderda video}}. Iga kaader kuvatakse valmimise ajal koos jäänud ajaga.
4. Kui see on valmis, klõpsa {{ui:Salvesta video}}.

{{ui:Peata}} (või {{key:Esc}}) lõpetab varem; {{ui:Salvesta video}} salvestab siis juba tehtud kaadrid lühema videona.

Taevas, päike, materjalid, lambid ja heledus on need, mis on seatud jaotises {{ui:Renderda pilt…}}: seadista need seal kõigepealt, kontrollides pilti. Iga kaader renderdatakse selles arvutis; midagi ei laadita üles.

| Seade | Mida see teeb |
|---|---|
| {{ui:Suurus}} | 480p, 720p HD, 1080p Full HD või vaate enda kuju (kuni 1920 pikslit laiuses) |
| {{ui:Kaadrisagedus}} | 24, 25, 30 või 60 kaadrit sekundis. Kaks korda rohkem kaadreid võtavad kaks korda kauem |
| {{ui:Iga kaadri kvaliteet}} | {{ui:Kiire}} (4 läbikäiku), {{ui:Mustand}} (16) või {{ui:Hea}} (64): rohkem läbikäike annab sujuvamad varjud ja servad |
| {{ui:Fail}} | {{ui:WebM-video}}, {{ui:MP4-video (H.264)}} seal, kus brauser seda kirjutada oskab, või {{ui:PNG-pildid, üks iga kaadri kohta (ZIP)}} videotöötlejatele (ja brauseritele, millel ei ole videokodeerijat) |

:::tip
10-sekundiline video 30 kaadriga sekundis on 301 kaadrit. Proovi kõigepealt {{ui:Kiire}} 480p-s, et kontrollida liikumist, ja renderda siis {{ui:Mustand}} või {{ui:Hea}} suuremas suuruses.
:::

WebM mängib brauserites ja VLC-s ning videotöötlejad teisendavad seda. {{ui:MP4-video (H.264)}} pakutakse seal, kus brauser seda kirjutada oskab. {{ui:Renderda video}} kasutab kiiret renderdajat; kui soovid iga kaadri jälgimisega renderdada, vali samas dialoogis {{ui:Lisa see animatsioon järjekorda}}: kaadrid renderdatakse [renderdusjärjekorras](topic:render#the-render-queue), mis vajab WebGPU-d.

:::firefox safari
Videoa renderdamiseks on vaja brauserit, mis kodeerib videot ise (WebCodecs): värsked Chrome, Edge, Firefox ja Safari 17 oskavad. Ilma selleta vali {{ui:PNG-pildid, üks iga kaadri kohta (ZIP)}}.
:::

## Mida tuleb teada

- Liiguvad ainult terved grupid ja komponendid. Tahud, servad, päikese aeg ja stiil ei muutu veel ajas.
- {{ui:Ekspordi animatsioon}} jaotises [Stseenid](topic:scenes) salvestab endiselt vaate sellisena, nagu see ekraanil on, reaalajas; {{ui:Renderda video}} renderdab iga kaadri koos taeva, varjude ja materjalidega.
