---
title: Dhaqdhaqaaqa kamaradda iyo shayada, oo fiidiyo rendar garee
summary: Dheji furayaal kamaradda, kooxaha iyo qaybaha jadwal, ku ciyaar aragga, oo rendar dhaqdhaqaaqa fiidiyow WebM ah iyada oo leh sanbaadhka, qorraxda iyo alaabta rendar-ka.
keywords: dhaqdhaqaaq, dhaqdhaqaaq, jadwal, furaha fraamka, furayaal, furayaasha, jid kamaradda, socod kamaradda, fiidiyo, filim, webm, rendar fiidiyo, fraamyo, xawaaraha sawirka, fps, jeexda ciyaarta, furaha otomaatig, ease, siilin, hay, goobaha, taxane PNG, dhaqdhaqaaq
from: d3a58249
---

**Jadwalku** wuxuu dhaqaajiyaa kamaradda iyo kooxda kasta ama qayb waqti ku jirta. Waxaad dejisaa **furayaal** (meesha wax ku sugan yihiin waqti gaar ah); ModelCraft wuxuu si nabad leh ugu dhaqaajiyaa furayaal ilaa furayaal. Ku ciyaar aragga, kadibna rendar fiidiyow isla sanbaadhka, qorraxda, alaabta iyo laydhadka sida [sawirka la rendaray](topic:render).

## Fur jadwalka

Riix {{ui:Views}} kooxda {{ui:Camera}}, kadibna {{ui:Animation timeline}}. Jadwalku wuxuu furmaa hoosta aragga: xakameynta sare, kadibna safka **Camera** iyo safka kasta oo kooxda ama qaybta dhaqaaqda. Calaamadaha waa furayaal; jeexda casaanka ah waa **jeexda ciyaarta**, waqtiga ay aragga muujinayso.

:::touch
Telefoonka jadwalku wuxuu sidoo kale hoosta aragga furmaa. Xakamaynta waa hal safaf: u jiid si aad u gaadho kuwa kale; badhanka xidhaya jadwalka wuxuu ku sii jiraa dhamaadkiisa.
:::

Jiid slider-ka (ama guji safka) si aad u guurisid jeexda ciyaarta. {{ui:Play}} wuxuu ciyaaraa jeexda ciyaarta ka bilaabmaya wuxuuna noqdaa {{ui:Pause}} markuu ciyaarayo; mar kale guji si aad joogsato meesha uu joogo. {{key:Space}} wuxuu sameeyaa isla shaqada markii jadwalku furan yahay (jadwalka xidhan, Space wuxuu weli yahay Select). {{ui:Previous key}} iyo {{ui:Next key}} waxay u boodaan furayaasha. Style-kaaga ayaa ka dhigi kara ciyaar/joogso fure kale: {{ui:Settings}}, kadibna menus, keys iyo mouse, amarka *Play or pause the animation*.

## Kamaradda dhaqaaqi

1. Geeso jeexda ciyaarta bilowga muuqaalka (0 s), dejiso aragga, kadibna guji {{ui:Key camera}}.
2. Geeso jeexda ciyaarta dambe (tusaale 4 s), wareeji, rari ama socod aragga booska xiga, kadibna mar kale guji {{ui:Key camera}}.
3. Ku dar furayaal inta aad rabto, kadibna {{ui:Play}}.

Kamaraddu waxay si nabad leh uga gudubtaa fur kasta, waxayna ka bilaabataa oo ku dhammaataa nasasho.

:::tip
Horey ma haysaa [goobaha](topic:scenes)? {{ui:From scenes}} wuxuu jidka kamaradda ka dhigaa iyaga: wuxuu joogsadaa goob kasta, kadibna wuxuu u guurayaa midka xiga. Haddii jadwalku aan furayaal lahayn, {{ui:Render video…}} wuu sameeyaa isaga keligiis, sidaas darteed laba goob ama ka badan waa ku filan fiidiyow socod.
:::

## Dhaqaajiso kooxda ama qaybta

1. Dooro kooxda ama qaybta (kooxaha oo dhan iyo qaybaha oo kaliya ayaa dhaqaaqa; [samee kooxda](topic:groups-components) marka hore).
2. Bilowga 0 s, guji {{ui:Key selected}}.
3. Geeso jeexda ciyaarta dambe, [guuri, wareeji ama miisaan](topic:move-copy) kooxda meesha ay ku qasan tahay, kadibna mar kale guji {{ui:Key selected}}.

Waa siibtaa, wareegtaa, weynaataa inta u dhaxaysa furayaashiisa. Wareegyadu waxay qaataan jid gaaban.

**Auto key** wuxuu qaadaa guji-ga tallaabada 3: markii {{ui:Auto key}} la shido, kooxda ama qaybta la doortay ee aad guurisid, wareegtid ama weynaysid waxay helaysaa fur jeexda ciyaarta (iyo, markii ugu horeysay, fur 0 s meeshii ay ahayd).

:::note
Kooxda dhaqaajiska ah ee aan fur lahayn waxay sii jirtaa ilaa jeexda ciyaarta dhaqaaqo: markii aad ciyaarto ama dhaqaajiso, waxay ku noqonaysaa meeshii furayaashu ku dhigeen. Status bar-ku wuu sheegaa. Riix {{ui:Key selected}} si aad u hayso.
:::

## Beddel furayaasha

- **Dooro fur** isagoo guji calaamaddeeda: jeexda ciyaarta ayaa u gudubta.
- **Guuri fur** isagoo jiidaya calaamaddeeda safkeeda, ama {{key:Left}} iyo {{key:Right}} (hal fraam; {{key:Shift}} ka dib, toban).
- **Tirtir** {{ui:Delete key}} (furta la doortay, ama furayaasha oo dhan ee jeexda ciyaarta) ama {{key:Delete}} calaamada la doortay.
- **Sidee u dhaqaaqa**, furta la doortay: {{ui:Smooth}} (khad mari furayaasha ku xeeran), {{ui:Steady}} (khad toosan oo hal xawaare), {{ui:Slow in and out}} (wuxuu ku nasanayaa furtan) ama {{ui:Hold}} (wuu joogaa ilaa fur xiga).
- **Length (s)** wuxuu dejinayaa intee dheer ee dhaqdhaqaaqu yahay; fur la dhigo ka dambeeya dhammaadka wuu dheereeyaa. Si aad u gaabiso, guuri ama tirtir furayaasha ka dambeeya dhammaadka cusub marka hore.
- Calaamadda **×** ee safka kooxda wuxuu joojiyaa dhaqdhaqaaqeeda.

Jadwalku wuxuu leeyahay {{ui:Undo}} iyo {{ui:Redo}} gaar ah: undo-ga moodelka ({{key:Mod+Z}}) wuxuu beddelaa moodelka, ma aha furayaasha. Dhaqdhaqaaqu waxaa lagu kaydiyaa faylka `.modelcraft`. Xidhidda jadwalka wuxuu kooxaha dhaqaaqa ku celiyaa jihadooda ugu horeysay.

## Rendar fiidiyowga

1. Guji {{ui:Render video}} jadwalka (ama {{ui:Export}} › {{ui:Render video…}}).
2. Dooro {{ui:Size}}, {{ui:Frame rate}}, {{ui:Quality of each frame}} iyo {{ui:File}}.
3. Guji {{ui:Render video}}. Fraam kasta wuu muuqdaa markii la sameynayo, iyo waqtiga harsan.
4. Markii uu dhammaado, guji {{ui:Save video}}.

{{ui:Stop}} (ama {{key:Esc}}) wuxuu dhammeeyaa hore; {{ui:Save video}} markaas wuxuu kaydinayaa fraamyada la sameeyay fiidiyow gaaban.

Sanbaadhka, qorraxda, alaabta, laydhadka iyo iftiinka waa kuwa lagu dejiyay {{ui:Render a picture…}}: halkaas hore ku deji, adigoo hubinaya sawir hal taagan. Fraam kasta kombuyuutarkan ayaa lagu rendaraa; waxba lama soo rarayo.

| Dejinta | Waxa ay sameyso |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, ama qaabka aragga (ilaa 1920 pixel ballac) |
| {{ui:Frame rate}} | 24, 25, 30 ama 60 fraam ilbiriqsi kasta. Fraam laba jeer ah waxay qaadataa laba jeer waqti |
| {{ui:Quality of each frame}} | {{ui:Quick}} (4 marxaladood), {{ui:Draft}} (16) ama {{ui:Good}} (64): marxaladaha badan waxay siiyaan hooska iyo geesaha sooyaal fiican |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} meesha browser-ku qori karo, ama {{ui:PNG pictures, one per frame (ZIP)}} tafatiraha fiidiyowga (iyo browsers aan encoder fiidiyow lahayn) |

:::tip
Fiidiyow 10 ilbiriqsi ah oo 30 fraam ilbiriqsi kasta ah waa 301 fraam. Isku day {{ui:Quick}} 480p marka hore si aad u hubiso dhaqdhaqaaqa, kadibna rendar {{ui:Draft}} ama {{ui:Good}} cabbir weyn.
:::

WebM waxay ku ciyaartaa browser-yada iyo VLC, tafatiraha fiidiyowga ayaa beddela. {{ui:MP4 video (H.264)}} waa la siiyaa meesha browser-ku qori karo. {{ui:Render video}} wuxuu isticmaalaa rendar degdeg ah; si aad fraam kasta u path trace-gareyso, dooro {{ui:Add this animation to the queue}} isla wada-hadalka: fraamyada waxay ku rendaraan [safka rendar-ka](topic:render#the-render-queue), taas oo u baahan WebGPU.

:::firefox safari
Rendar fiidiyo wuxuu u baahan yahay browser ku qori kara fiidiyow laftiisa (WebCodecs): Chrome cusub, Edge, Firefox iyo Safari 17 ayaa sidaas sameeya. Haddii aanu jirin, dooro {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Waxa la ogaado

- Kooxaha iyo qaybaha oo kaliya ayaa dhaqaaqa. Wejiyada, geesaha, waqtiga qorraxda iyo style-ku weli waxba kuma beddelmaan waqtiga.
- {{ui:Export animation}} hoosta [Goobaha](topic:scenes) wuxuu weli duubaa aragga sida uu shaashadda ku yahay, wakhtiga dhabta ah; {{ui:Render video}} wuxuu rendaraa fraam kasta oo leh sanbaadhka, hooska iyo alaabta.
