---
title: Dhaqdhaqaaqi hanti kasta, u qaabee khadad qalloocan, oo isku dar clips
summary: Workspace-ka Animate wuxuu furaa goobta, wareegga iyo cabbirka shay, iftiinka, faafinta iyo midabka laydh, lensiga iyo furayaasha qaabka mesh; armatures waxay mesh ku foorarsadaan lafo iyo miisaan la rinjiyeeyay; IK iyo xaddidaadyadu waxay ka dhigaan lafaha iyo shayada inay gaadhaan, eegaan, nuqulaan, ku sii jiraan xadadka, ku xirmaan ama raacaan kuwa kale; jidhka adag wuxuu hoos u dhacaa, isku rari karaa oo isku dhacaa, kadibna furayaal ayuu noqdaa; darawallada ayaa qiimaha ka dhigaya wax kale; aragga Curves ee jadwalka wuxuu isbeddel kasta u qaabeeyaa gacmo Bézier iyo wareeg, aragga Clips wuxuu dhaqdhaqaaqyada u kaydiyaa sida falal aad mar kale dhigto oo isku darto.
keywords: fiisigis, jidh adag, jidho adag, simulashan, simulee, hoos u dhac, dhac, culeyska dhulka, isku dhac, isku rar, dib u dhac, isku-xoqid, dubbee, la dubbay, ik, kinemaatig rogan, xaddidaad, xaddidaadyo, eeg, raac, beeg, koobiyee wareegyada, koobiyee goobta, koobiyee wareegga, xaddid wareegga, xadadka, ilmaha, waalid, raac jid, jid, dhinac, fabrik, silsilad, qaab-lafeed, qaab-lafeedyo, rig, rigging, lafo, laf, qalfoof, maqaar, maqaarka, miisaanno, rinjiga miisaanka, kooxaha barta, miisaanka toosan, kulaylka lafta, qaab, habka qaabka, dual quaternion, isku dar toosan, furayaasha qaabka, furaha qaabka, beddel qaab, qaababka isku dhafan, wajiga, tilmaan, darawal, darawallo, tilmaamo, goobta dhaqdhaqaaqa, dhaqdhaqaaq, furaha, furayaasha, hanti, hantiyo, beddel, goob, wareeg, miisaan, laydh, iftiin, midab, lens, aaga aragga, fov, tafatiraha grafka, khadadka qalloocan, qallooc, bézier, gacmo, taangent, isku-xidhka, wareeg, wareegyo, ku celi, dhinac-dhinac, kala-sooc, xaashida furaha, dooro furayaasha, dooro sanduuq, koobiyee furayaasha, dhaji furayaasha, ballaadhi furayaasha, miisaan furayaasha, clips, falal, nla, isku dar, saameyn, kaydi
from: 16d8e12f
---

[Jadwalku](topic:animation) wuxuu kamaradda iyo kooxaha oo dhan iyo qaybaha u dhaqaajiyaa. Goobta **Animate** wuxuu wax ka badan furaa, jadwalkuna laba aragga oo dheeraad ah helaa si aad u qaabeysid oo aad dib u isticmaasho waxa aad furtay.

## Furo

Dooro {{ui:Animate}} liiska workspace-ka ee toolbar-ka. Jadwalku wuxuu furmaa hoosta aragga, toolbar-ku wuxuu muujinayaa kooxaha Animate ({{ui:Keys}}, {{ui:Play}}, {{ui:Timeline}}), panel-ka midigna wuxuu liistaa waxa aad furi karto jeexda ciyaarta.

## Fur hanti

Panel-ku wuxuu liistaa, jeexda ciyaarta:

- **Shayga la doortay**: {{ui:Place}}, {{ui:Turn (°)}} iyo {{ui:Size}}, saddex tiro mid kasta. Qor tiro oo taabo {{key:Enter}}: waxaa lagu furayaa jeexda ciyaarta, shayguna halkaas ayuu u guurayaa. Calaamadda ku taal safka wuxuu furaa qiimaha sida uu hadda yahay; calaamad buuxa waxay muujinaysaa in furaha jeexda ciyaarta uu horeba u jiro.
- **Laydhadka**: {{ui:Brightness (lm)}} kasta, {{ui:Spread (°)}} (laydhadka spot) iyo {{ui:Colour}}.
- **Kamaradda**: {{ui:Lens angle (°)}}, zoom marka kamaraddu dhaqaaqayso.

{{ui:Key transform}} (ama {{key:I}}) wuxuu furaa dhigga, wareegga iyo cabbirka kooxda ama qaybta kasta oo la doortay isla mar; {{ui:Key camera}} (ama {{key:K}}) wuxuu furaa kamaraddda. Marka {{ui:Auto key}} la shido, kooxda oo goobteeda, wareegteeda iyo cabbirkeeda si kan loo furay ayaa fur cusub helaysa mar kasta oo aad u dhaqaajiso.

Wareegyadu waa saddex xagal, oo ku saabsan X, kadibna Y, kadibna Z. Wareeg la furay ka badan 180° wuxuu sii socdaa isla jihadii hore (190° wuxuu weli yahay 190°, ma aha −170°), sidaas darteed gurigu wuu wareegi karaa dhowr jeer.

:::tip
Kooxda lagu furay {{ui:Key selected}} jadwalka wuxuu leeyahay furayaal dhigo oo dhan. Badhanka qalloocan ee safkeeda wuxuu u beddelaa furayaashaas dhig, wareeg iyo cabbir khadad ah (isla dhigga fur kasta) si aad ugu qaabeyn karto {{ui:Curves}}.
:::

## Furayaasha qaabka (morphs)

**Furaha qaabka** waa qaab kale oo isla [mesh](topic:meshes)-ka ah: wajiga oo qoslaya, albaabka oo bararsan, caleen qallooc. Siilkiisu wuxuu ka dhex-dhalaa mesh-ka sida uu yahay (0) ilaa qaabkaas (1); furayaal dhowr ah ayaa wada isku daraya.

1. Dooro mesh-ka goobta Animate: panel-ku wuxuu muujinayaa {{ui:Shape keys}}-kiisa.
2. Guji {{ui:Add shape key}}. ModelCraft wuxuu kugu tagayaa [Mesh workspace](topic:mesh-edit) furaha cusub ee la tafatirayo: qodob dhaqaajin, soo saar, sawir — beddel mesh-ka qaabka aad rabto.
3. Ku noqo {{ui:Animate}} oo guji {{ui:Done}}. Mesh-ku wuxuu dib ugu noqdaa sidii uu ahaa, furuhuna wuxuu haysaa isbeddelkaaga.

Kadibna jiid siilka furaha (ama qor qiime) si aad u isku darto. Calaamaddu wuxuu qiimaha ku furaa jeexda ciyaarta, sidaas darteed furuhu wuu kori karaa oo wuu dhiman karaa wakhti ka dib; markii uu raad yeesho, qiime cusub ayaa jeexda ciyaarta lagu furaa. Qalinku wuxuu mar kale tafatiraa qaabka furaha (mesh-ku wuxuu si buuxda u muujiyaa ilaa {{ui:Done}}; {{ui:Cancel}} wuxuu furaha ka tagaa sidii ay ahayd), indhuhu wuxuu damiyaa furaha, qashinku wuxuu ka saaraa.

Qodob aad ku darto markii aad furaha tafatireyso wuxuu dhigan yahay mesh-ka laftiisa: wuxuu ku sii jiraa meeshii aad geliyey, qaab kasta.

:::note
Furayaasha qaabka waxay mesh-ka dhaqdhaqaajiyaan ka hor [modifiers](topic:modifiers): Subdivision modifier wuxuu jilciyaa qaabka isku dhafan. Sawirrada la rendaray iyo fiidiyowyada waxay muujinayaan furayaasha fraam kasta.
:::

## Armatures: lafo mesh-ka foorarsada

**Armature** waa tiro lafo ku jirta [mesh](topic:meshes). Lafaha ku qaabee, mesh-kuna wuu raacaa, barta kasta sida ay **miisaankeedu** u sheegayo.

1. Dooro mesh-ka goobta Animate oo guji {{ui:Add an armature}} panel-ka (ama {{ui:Add bone}} kooxda {{ui:Rig}}): lafta koowaad waxay ka sii kacaysaa badhka mesh-ka laga bilaabo cagta.
2. Marka laf la doortay, {{ui:Add a child bone}} wuxuu ku daraa midka xiga gacanta ka bilaabmaya. Deji {{ui:Head}}, {{ui:Tip}}, {{ui:Roll (°)}} iyo waxa uu {{ui:Hangs from}} panel-ka; laf ku xiran mid kale wuu la socdaa. Ka saar {{ui:Moves the mesh}} laf kaliya inay kuwa kale hagto.
3. Guji {{ui:Automatic weights}}: laf kasta wuxuu qabsadaa barta ugu dhow, qabsashadaduna si nabad ah ayay mesh-ka ugu faafaysaa, sidaas darteed barta ka dhexaysa laba laf way wadaagaan. {{ui:Nearest bones only}} waa kala-qaybin degdeg ah oo adag.

**Pose** lafaha {{ui:Pose}} ({{key:P}}): guji laf si aad u doorato, jiid si aad u wareejiso aragga, {{key:Shift}}-jiid si aad u guurisid. Ama qor {{ui:Place}}, {{ui:Turn (°)}} iyo {{ui:Size}} hoosta {{ui:Pose}}; wareegyadu waxay ku jiraan jihooyinka lafta laftiisa, laga bilaabo meesha ay ku nasatay. Calaamadaha iyo {{ui:Key the whole pose}} waxay furaan qaabka jeexda ciyaarta; laf leh furayaal markii la pose-ayo halkaas ayay ku furaysaa. {{ui:Reset this bone}} iyo {{ui:Reset the pose}} waxay lafaha dib ugu celiyaan nasashada.

**Rinji miisaanka** ({{key:W}}) laf la doortay: mesh-ku wuxuu muujinayaa nasashada, wejiga kastaa midab buu leeyahay sida laftaasi u qabsato — casaan oo dhan, buluug waxba. Rinji si aad u darto qabsashada ({{key:Mod}} way ka qaadaa, {{key:Shift}} way siibtaa); {{ui:Size (px)}} iyo {{ui:Strength}} ayaa dejinaya burushka. Marka {{ui:Keep each point's weights adding up to 1}} la shido, laf wax badan oo la siiyo, wax la mid ahna laga qaadaa kuwa kale. Mid kasta oo rinji ah waa hal tallaabo oo undo-ga moodelka.

{{ui:Skin}} wuxuu doortaa sida barta u dhaxaysa lafaha u dhaqaajiso: {{ui:Linear (fast)}} wuxuu isku daraa dhaqdhaqaaqa lafaha, wuxuuna xidhiidh qallooc ku ruxaa shaqsi yar; {{ui:Dual quaternion (keeps volume at joints)}} wuxuu barta ku wareejiyaa xidhiidhka, sidaas darteed qoorta ama bararka waxay ilaalisaa dhumucdeeda (markaasna {{ui:Size}} ee laf ma sii fidinayo maqaarka).

:::note
Furayaasha qaabka ayaa marka hore yimaadda, kadibna armature-ka, kadibna [modifiers](topic:modifiers). Aragga, sawirrada iyo fiidiyowyada oo dhan waxay muujinayaan mesh-ka la foorarsaday; miisaanka mesh-ka waxaa lagu kaydiyaa, lafaha iyo pose-kooda waxay ku jiraan dhaqdhaqaaqa.
:::

## IK iyo xaddidaadyo

**Xaddidaad** wuxuu dhaqaajiyaa laf ama shay kadib furayaashiisa, si uu xeerkiisa u raaco. Dooro shayga (ama laf armature gudaha) oo ku dar mid hoosta {{ui:Constraints of …}}; kuwa badan ayaa socda amarka la liistay (falaarihu way beddelaan), mid kastana wuxuu leeyahay {{ui:How much}} (0 ilaa 1, oo la furay calaamaddeeda sida hanti kasta) iyo badhanka on/off.

| Xaddidaad | Waxa loo isticmaalo | Waxa ay sameyso |
|---|---|---|
| {{ui:Reach (IK)}} | Lafaha | Laf iyo lafaha uu ka xiran yahay ({{ui:Bones in the chain}}) way qallooc si ay gacantooda u gaarto bartilmaameedka. Laba laf iyo {{ui:Pole (the bend points to it)}}, qoorta ama bararka wuxuu u jeedaa dhinaca dhinaca; silsiladaha dheer ayaa si nabad ah u qallooca. Haddii aan la gaari karin, silsiladdu waxay si toos ah ugu toosaysaa bartilmaameedka. |
| {{ui:Look at}} | Labadaba | Wuu wareegaa si {{ui:Axis that points}} u eego bartilmaameedka, {{ui:Axis kept up}} wuxuu ilaalinayaa sidii u dhow sare. |
| {{ui:Copy transforms}} | Labadaba | Wuxuu qaadaa goobta, wareegga ama cabbirka bartilmaameedka — kuwa calaamadeeyey. |
| {{ui:Limits}} | Labadaba | Wuxuu ilaalinayaa goobtiisa, wareegga (darajooyin) ama cabbirka inta u dhaxaysa {{ui:min}} iyo {{ui:max}} jiho kasta; ka tag labo madhan si aad jihadaas u xorowdo. |
| {{ui:Child of}} | Labadaba | Wuxuu la socdaa bartilmaameedka sidii inuu ka xiran yahay, laga bilaabo meeshii ay labaduba joogeen markii bartilmaameedka la doortay. |
| {{ui:Follow path}} | Shayaadka | Wuxuu saaraa [curve object](topic:curves) meesha {{ui:Along the curve}} (0 bilowgiisa, 1 dhamaadkiisa; fur si uu u safro), {{ui:Turn along the curve}} markaana wuxuu u eegaa jihada uu ku socdo. |

Bartilmaameedku waa shay kale oo kooxda furan ku jirta, laf isla armature-ka ka mid ah, ama {{ui:A point}} aad qortay (barta shay waxay ku jirtaa isku-xidhka moodelka, barta laf waxay ku jirtaa mesh-kiisa). Lugta IK, dhig bartilmaameedka meesha cagta u baahan tahay oo fur bartilmaameedka, ama fur {{ui:How much}} si gacantu u dhex maro furayaasha iyo IK.

:::tip
Shay u eegaya mid raacaya jid wuxuu ku arkaa jidka: ModelCraft wuxuu marka hore xisaabiyaa bartilmaameedyada, iyada oo aan loo eegin amarka shayada.
:::

## Fiisigis: hoos u dhac, isku rar iyo isku dhac

Ka dhig shayada inay hoos u dhacaan oo isku dhacaan, kadibna natiijada ku hay furayaal.

1. Dooro kooxda, qaybta ama mesh-ka, oo deji {{ui:Rigid body}} hoosta {{ui:Physics}}: {{ui:Falls and collides}} (wuu dhaqaajaa) ama {{ui:Stays put, gets in the way}} (miis, darbi, jiiman). Shayga dhacaya ku sii {{ui:Shape}}-ka — {{ui:Box (its bounds)}} ama {{ui:Ball (round its bounds)}} — iyo {{ui:Mass (kg)}}, {{ui:Friction}} iyo {{ui:Bounce}} (0 wuxuu dhacaa si aan dib u boodin, 1 wuxuu dib ugu boodaa sida sare).
2. Hoosta {{ui:The whole model}}, deji {{ui:From (s)}} iyo {{ui:To (s)}}, {{ui:Gravity (m/s², down)}}, iyo haddii ay jirto {{ui:A ground to land on}} (iyo dherer kiisa).
3. Guji {{ui:Bake physics}} (panel-ka ama kooxda {{ui:Physics}}). Shay kasta oo dhacaya wuxuu helaa fur goob, wareeg iyo cabbir fraam kasta oo ka dhexeeya labada waqti; ciyaar sida dhaqdhaqaaq kasta.

Dib u dubbeynta waxay beddeshaa furayaashaas; {{ui:Remove baked keys}} way ka saaraa. Shayadu waxay ku bilaabaan nasasho, meesha ay furayaashoodu, qalloocyadoodu iyo xaddidaadyadoodu ku dhigaan {{ui:From (s)}} (dhaqdhaqaaq fur leh oo ka horreeya ma sii wado dhacii). {{ui:Steps a frame}} badan wuxuu ilaalinayaa xidhmooyinka dheer; status bar-ku wuxuu sheegaa marka wax weli dhaqaaqayo dhamaadka.

:::note
Qaabadu waa sanduuqyo iyo kubbado ku wareegsan xuddunta shay kasta; sanduuqu wuxuu taabanayaa geesaha, dhexda cidhifyada iyo dhexda dhinacyada, sidaas darteed sanduuqyadu way isku rari karaan oo way ku foorari karaan sida loo filayo. Dharka, dareeraha, isku-xidhka shayada iyo qaabab sax ah lama dhisin.
:::

## Darawallo

**Darawal** wuxuu furaha qaabka ka dhigaa mid ka yimaadda waxyaabo kale oo aan gacanta lagu samayn: fur darawalkiisa (badhanka xisaabiyaha), qor **tilmaan**, oo magac kasta ku jira siiyo waxa uu akhrinayo ({{ui:Reads}}): waqtiga ilbiriqsiyada, fraamka, goobta, wareegga ama cabbirka shay ee X, Y ama Z, iftiinka laydh, ama furaha qaabka kale. Tusaale ahaan, markii `v` akhrinayo wareegga albaabka ee Z, `clamp(v / 90, 0, 1)` wuxuu qaabka furayaa sida albaabku u furmo.

Tilmaamuhu wuxuu isticmaalaa tirooyin, magacyada, `+ - * / % ^` iyo qawska, iyo shaqooyinka `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` oo leh `pi` iyo `e`. Qalad waa la sheegaa oo waxba ma beddelo. Siilka furaha la darawalay wuxuu muujinayaa qiimaha darawalka; darawalku wuxuu ka sarreeyaa jeexda furaha ilaa aad ka saarto.

## Dooro oo beddel furayaasha (aragga Keys)

{{ui:Keys}} wuxuu muujinayaa safaf mid kasta jeexda: kamaradda, kooxda kasta oo dhaqaaqda, iyo hanti kasta ("Lamp 2 · Brightness (lm)"; furayaasha hantida waa wareegsan yihiin).

- Guji fur si aad u doorato; {{key:Shift}}-guji ama {{key:Mod}}-guji wuxuu ku daraa ama ka saaraa furayaasha la doortay. {{key:Shift}}-jiid safafka dhexdooda wuxuu sameeyaa sanduuq ku daraya dhammaan furayaasha ku jira.
- Jiid fur la doortay si ay dhammaantood u socdaan; {{key:Left}} / {{key:Right}} waxay u dhaqaajiyaan hal fraam ({{key:Shift}}: toban).
- {{key:Mod+C}} wuxuu nuqulaa furayaasha la doortay, {{key:Mod+V}} wuxuu ka dhajiyaa jeexda ciyaarta safaflaha isku mid ah (tab ModelCraft kale ayaa sidoo kale dhajin karta).
- {{ui:Stretch}} wuxuu furayaasha la doortay ka fidiyaa jeexda ciyaarta, tirada ku xigta ku saabsan (2 = laba jeer ka fog; 0.5 wuxuu isku soo ururiyaa).
- Liiska ease wuxuu dejinayaa sida furayaasha la doortay u dhaqaaqaan.

## Qaabee khadadka (aragga Curves)

{{ui:Curves}} waa grafik qiime kasta oo waqti ku saabsan: waqtiga dhererka, qiimaha kor. Calaamadee khadadka ku muuqda liiska bidix (X, Y iyo Z waa casaan, cagaar iyo buluug).

- Guji fur (laba-jibbaaran) si aad u doorato, {{key:Shift}}-guji wax dheeraad ah, ama jiid sanduuq. Jiid fur la doortay si aad u beddesho waqtigeeda iyo qiimaha; markii dhowr la doortay, jiidista waxay ku guurisaa waqtiga.
- Fur la doortay wuxuu muujinayaa laba **gacmo**. Jiid mid si aad u qaabeyso khadka dhinacaas. {{ui:Handles}} wuxuu sheegaa sida ay u dhaqmaan: {{ui:Automatic}} (khad siilan oo mari furayaasha ku xeeran), {{ui:Pointing at the next key}}, {{ui:Aligned}} (labadaba waxay ku jiraan khad toosan, sidaas darteed khadku ma leh geesi), ama {{ui:Free}}.
- {{ui:From the chosen keys}} wuxuu dejinayaa sida fur kasta oo la doortay ugu dhaqaaqo ilaa xiga: {{ui:Curve (handles)}}, {{ui:Smooth}}, {{ui:Steady}}, {{ui:Slow in and out}} ama {{ui:Hold}}.
- {{ui:Before}} iyo {{ui:After}} waxay dejinayaan waxa khadku sameeyo furayaashiisa dibadda: {{ui:Hold}} (wuxuu joogaa qiimaha hore ama dambe), {{ui:Repeat}}, {{ui:Back and forth}}, ama {{ui:Repeat and carry on}} (ku celin kasta wuxuu ka bilaabmaa meeshii kii hore ku dhammaaday: cajalad wuu sii wareegaa, socod wuu sii socdaa).
- Wheel-ku wuxuu zoom-ka sameeyaa ({{key:Mod}}: qiimaha kaliya, {{key:Shift}}: waqtiga kaliya); jiid badhanka dhexe ama isticmaal {{key:Alt}} si aad u guurisid aragga; {{ui:Show all}} ama {{key:Home}} wuxuu soo buuxiyaa dhammaan khadadka muuqda. Guji meel bannaan si aad jeexda ciyaarta halkaas ugu dhaqaajiso. {{key:Delete}} wuxuu tirtiraa furayaasha la doortay.

Gacmaha lama oggola inay waqtiga isku gudbaan, sidaas darteed khadku waligiis ma dib u socdo.

## Dib u isticmaal dhaqdhaqaaqyada (aragga Clips)

**Clip** wuxuu ciyaaraa dhaqdhaqaaq la kaydiyay (**action**) jadwalka. Clips-ka waxaa lagu isku daraa tartiib, safafka hoose ayaa ka sareeya kuwa sare; furayaasha jadwalka keligood ayaa ka sareeya clips kasta.

1. Fur kooxaha iyo laydhadka sida caadiga, kadibna guji {{ui:Make a clip}} gudaha {{ui:Clips}} oo magacee action-ka. Safafka waxay noqdaan action, clip-na wuxuu ciyaaraa meesha ay ku taalla (kamaraddu waxay sii jirtaa jadwalka).
2. Si aad mar kale u isticmaasho, dooro action-ka oo guji {{ui:Add clip}}: clip cusub ayaa ka bilaabmaya jeexda ciyaarta.
3. Jiid clip safkiisa si aad u guurisid; guji si aad u dejisid {{ui:Start (s)}}, {{ui:Speed}} (2 = laba jeer degdeg), {{ui:Repeats}}, {{ui:How much}} (0 ilaa 1), {{ui:Mix}} ({{ui:Replace}}, ama {{ui:Add on top}} clips-ka ka horreeya), {{ui:Outside the clip}} (waxba, dhamaadkiisa hay, ama labada dhamaadba hay) iyo {{ui:Mute}}. Falaarihu wuxuu beddelaa amarka; qashinku wuu ka saaraa (action aan clip isticmaalin ayaa la socda).

Clip ka yar {{ui:How much}} buuxa wuxuu isku dhafaa waxa ka hooseeya: clip-ka ka horreeya, ama laydhka ama goobta sida ay tahay iyada oo aan dhaqdhaqaaq lahayn.

## Waxa ciyaara meesha

| Waxa | Aragga | Fiidiyow la rendaray |
|---|---|---|
| Furayaasha kamaradda, lens angle oo leh furayaasha kamaradda | Haa | Haa |
| Goob, wareeg iyo cabbir (furayaal, khadad, clips) | Haa | Haa |
| Iftiinka laydh, faafinta iyo midabka | Haa | Weli ma jiro: fiidiyowgu wuxuu isticmaalaa laydhadka sida ay tahay markii uu bilaabo (eeg [waxa weli aan la dhisin](topic:not-built-yet)) |
| Lens angle aan furayaal kamaradda lahayn | Haa | Weli ma jiro: fur kamaraddana |
| Furayaasha qaabka iyo darawallada | Haa | Haa |
| Armatures (mesh-ka la foorarsaday) | Haa | Haa |
| IK iyo xaddidaadyo | Haa | Haa |
| Fiisigiska la dubbay (furayaal) | Haa | Haa |

Waxa oo dhan waxaa lagu kaydiyaa faylka `.modelcraft` oo wata inta kale ee dhaqdhaqaaqa, {{ui:Undo}} iyo {{ui:Redo}} ee jadwalka ayaa dib u qaada mid kasta.
