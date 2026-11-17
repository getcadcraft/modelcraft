---
title: Weka vitu kwenye kitanda cha uchapishaji na vitume kwa printa
summary: Ongeza vipengee kutoka Maktaba au modeli yako mwenyewe kwenye kitanda cha printa yako, vipange, angalia tabaka zilizokatwa, kisha tuma uchapishaji kupitia USB au mtandao, au hifadhi G-code, bila kusafirisha STL kwanza.
keywords: hatua ya uchapishaji, uchapishaji wa 3d, printa, kitanda, tuma kwa printa ya 3d, kikata tabaka, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, maktaba, panga, weka vyote, hakiki tabaka, kujaza, misaada, filamenti, pla, petg, programu-jalizi, programu-jalizi ya uchapishaji wa 3d
from: abcf5d7e
---

{{ui:Hatua ya uchapishaji}} hupanga vitu kwenye kitanda cha printa yako, hukata tabaka na kuvituma kwa printa. Huhitaji kusafirisha faili kwanza. Ni sehemu ya programu-jalizi ya 3D Print, ambayo imewashwa kwa chaguo-msingi.

:::note
Bado hakuna kitu kilichochapishwa kwenye printa halisi kwa hili. Kikata tabaka ni kipya: angalia tabaka za kwanza za uchapishaji wako wa kwanza, na tumia onyesho la tabaka kabla ya kutuma.
:::

## Utakachofanya

Weka modeli kwenye kitanda, hakikisha inatoshea, angalia tabaka zilizokatwa, kisha uitume kwa printa au uhifadhi G-code.

## Hatua

1. Bofya {{ui:Hatua ya uchapishaji}} kwenye upau wa zana. Kadi inafunguka juu ya mwonekano, na mstari wenye vitone unaonyesha kitanda chako.
2. Chini ya **Ongeza kutoka Maktaba**, andika jina kwenye kisanduku cha utafutaji, bonyeza {{ui:Tafuta}}, kisha bonyeza {{ui:Ongeza}} kwenye matokeo. Kipengee kinatua kwenye kitanda kikiwa ukubwa kamili, au kimepunguzwa ili kitoshe. Chochote ulichokwisha chora au kuingiza na unachokiona kwenye mwonekano pia kiko kwenye kitanda.
3. Chini ya **Kwenye kitanda**, angalia ukubwa wa kila kipengee. Kipengee chenye alama ya **Nje ya kitanda** kinahitaji kuhamishwa. Sogeza, zungusha na ubadilishe ukubwa wa vitu kwenye mwonekano kwa zana za kawaida.
4. Bonyeza {{ui:Panga kwenye kitanda}} kueneza vipengee, au {{ui:Weka vyote kwenye kitanda}} kuvipunguza hadi vitoshee.
5. Chini ya **Printa yako**, chagua ukubwa wa **Kitanda** au mojawapo ya wasifu wa printa.
6. Chini ya **Mipangilio ya uchapishaji**, chagua **Nyenzo**, **Ubora** na **Kujaza %**, na weka alama kwenye **Ongeza misaada chini ya sehemu zinazoning'inia** ikiwa umbo linahitaji.
7. Bonyeza {{ui:Hakiki tabaka}} na usogeze kitelezi cha **Tabaka** kuangalia tabaka zilizokatwa. Ukibadilisha hatua au mipangilio baadaye, bonyeza {{ui:Hakiki tabaka}} tena.
8. Chini ya **Muunganisho**, chagua {{ui:Kebo ya USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} au {{ui:PrusaLink}}. Kwa USB bonyeza {{ui:Unganisha}}. Kwa printa ya mtandao, andika **Anwani** yake (na **API key** ikiuliza), kisha bonyeza {{ui:Jaribu muunganisho}}.
9. Bonyeza {{ui:Tuma kwa printa ya 3D}}. Kadi inauliza kama kitanda kiko wazi na nyenzo sahihi imepakiwa, na inaonyesha muda, nyenzo na joto. Thibitisha ili kutuma.

Utapata ujumbe kwamba printa inaanza. {{ui:Simamisha uchapishaji}} huzima hita, feni na injini. Ukitaka faili tu, bonyeza {{ui:Hifadhi G-code badala yake}}.

## Vidokezo

- USB inahitaji Chrome au Edge kwenye kompyuta, na ukurasa lazima ubaki wazi hadi uchapishaji umalizike. Kuufunga kunasimamisha mtiririko.
- Printa ya mtandao lazima iruhusu tovuti hii (katika Moonraker ongeza kwenye `cors_domains`; katika OctoPrint washa CORS na nakili API key). Kivinjari chako kinaweza kuomba kufikia vifaa vya mtandao wako.
- Hakuna kinachounganishwa wala kutumwa bila bonyeza yako.
- Orodha ya kikata tabaka iko chini ya **Kikata tabaka**. {{ui:CadCraft basic (imejumuishwa, ya haraka zaidi)}} imejengwa ndani. Kiri:Moto, PrusaSlicer, OrcaSlicer na Bambu Lab P2S ni programu-jalizi zao wenyewe unazoweza kuwasha kutoka kwenye kadi au chini ya {{ui:Mipangilio}} › {{ui:Programu-jalizi}}. PrusaSlicer na OrcaSlicer hutumia nakala yako wenyewe na hufanya kazi kutoka CadCraft Studio kwenye kompyuta.
- Vipande visivyo vigumu vilivyofungwa vinaachwa nje, na kadi inakuambia ni kiasi gani cha umbo hilo kinachohusika.
- Kwa printa za resin, tazama [Kata kwa printa ya resin](topic:resin-printing). Ili kukagua au kurekebisha modeli kwanza, tazama [Misaada, unene wa ukuta, kufanya tupu na kurekebisha](topic:print-tools).
