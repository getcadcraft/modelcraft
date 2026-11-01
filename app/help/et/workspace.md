---
title: ModelCraft'i ekraan
summary: Ekskursioon tööriistaribast, igal küljel olevatest paneelidest, 3D-vaatest ja olekuribast nende ekraanil nähtavate nimede järgi.
keywords: ekraan, paigutus, tööriistariba, paneelid, struktuur, objekti teave, stiil, stseenid, olekuriba, väärtusväli, ühikud, liides, ekskursioon
from: 4a9a4516
---

Ülevalt alla: rakenduse riba, tööriistariba, kolm veergu (vasak paneelid, 3D-vaade, parem paneelid) ja olekuriba.

## Rakenduse riba

Kõige ülemine õhuke riba kuulub kõigile CadCraft'i rakendustele. Seal on rakenduse nimi ja versioon, {{ui:Teave ModelCraft'i kohta}}, ekraanirežiimi nupp ning {{ui:Paber}} / {{ui:Mudel}} lüliti.

- {{ui:Paber}} on hele teema ja {{ui:Mudel}} tume. 3D-vaade muudab oma värve, et sobida; sinu mudel ei muutu.
- Ekraanirežiimi nupp (esialgu näitab see {{ui:Täisekraan}}) ja {{key:Ctrl+Shift+F}} vahetavad kolme režiimi: tavaline, täisekraan ning täisekraan koos peidetud ribadega. Peidetud ribade korral too need tagasi, viies hiire ekraani ülaservale (või puutes seda). {{key:Esc}} väljub täisekraanist.

:::note
{{key:Ctrl+Shift+F}} kasutab igal arvutil Control-klahvi, ka Macis. iPhone'is, kus brauseritel täisekraani ei ole, peidab ja näitab nupp ainult ribasid.
:::

## Tööriistariba

Tööriistariba on jaotatud märgistatud gruppideks. Hoia nupu kohal, et näha selle nimi ja klahv.

Selle vasakus servas määrab nimekiri {{ui:Tööruum}}, milleks tööriistariba ja parem paneel on mõeldud: {{ui:Mudel}} (lükka/tõmba modelleerimine, allpool olev ekskursioon), {{ui:Võrk}} ([võrgu muutmine](topic:mesh-edit)), {{ui:Kõver}} ([kõveraobjektid](topic:curves)), {{ui:UV}} ([UV-de paigutamine](topic:uv)), {{ui:Skulptuur}} ([skulptuur](topic:sculpt)), {{ui:Varjutus}} ([sõlmedega tehtud materjalid](topic:shading)), {{ui:Animeeri}} ([animeerimine](topic:animate)) ja {{ui:Renderda}} ([renderdamine vaates](topic:render#render-in-the-view)).

| Rühm | Nupud |
|---|---|
| Fail | {{ui:Uus}}, {{ui:Ava}}, {{ui:Salvesta}}, {{ui:Impordi}}, {{ui:Ekspordi}} (vormingute menüü) |
| Joonista | {{ui:Joon}} ({{key:L}}), {{ui:Ristkülik}} ({{key:R}}), {{ui:Ring}} ({{key:C}}), {{ui:Hulknurk}} ({{key:N}}) |
| Muuda | {{ui:Vali}} ({{key:Space}}), {{ui:Lükka/tõmba}} ({{key:P}}), {{ui:Teisalda}} ({{key:M}}), {{ui:Pööra}} ({{key:Q}}), {{ui:Mõõtkava}} ({{key:S}}), {{ui:Kustutaja}} ({{key:E}}), {{ui:Mõõdulint}} ({{key:T}}) |
| Korrasta | {{ui:Komponent}} ({{key:G}}), {{ui:Grupp}} ({{key:Shift+G}}), {{ui:Lahuta}} |
| Redigeeri | {{ui:Võta tagasi}} ({{key:Mod+Z}}), {{ui:Tee uuesti}} ({{key:Mod+Y}}), {{ui:Kopeeri}} ({{key:Mod+C}}), {{ui:Kleebi}} ({{key:Mod+V}}), {{ui:Rohkem}} (menüü: lõika, kopeeri, kleebi, kleebi samale kohale {{key:Mod+Shift+V}}, dubleeri {{key:Mod+D}}, kustuta, vali kõik, tühista valik ja klahvistiil) |
| Kaamera | {{ui:Orbiit}} ({{key:O}}), {{ui:Nihuta vaadet}} ({{key:H}}), {{ui:Suumi}} ({{key:Z}}), {{ui:Ulatus}} ({{key:Shift+Z}}), {{ui:Vaated}} (menüü) |

Näidatud klahvid on lükka/tõmba omad; kui valid [ModelCraft'i sätetes](topic:settings) modelleerija stiili, näitavad tööriistavihjed selle asemel neid klahve. Kasutatav tööriist on näidatud vajutatuna. Kitsal ekraanil kerib tööriistariba küljelt küljele.

Menüüs {{ui:Vaated}} on {{ui:Iso}}, {{ui:Ülavaade}}, {{ui:Eest}}, {{ui:Paremalt}}, {{ui:Tagant}}, {{ui:Vasakult}} ja {{ui:Altpoolt}}, igaüks mudelile sobitatud, ning {{ui:Perspektiiv}}, mis vahetab perspektiivi ja paralleelprojektsiooni vahel.

## 3D-vaade

Ekraani keskosa. Punased, rohelised ja sinised jooned on teljed: punane ja roheline on maapinnal, sinine näitab üles, ning **põhi on roheline telg**. Seal, kus need kohtuvad, on alguspunkt.

- Alguses kuvatakse kaart pealkirjaga „Alusta modelleerimist“, mis loetleb esimesed mõned klahvid. See kaob, kui valid joonistamistööriista või klõpsad vaates.
- Tööriista töötamise ajal näitab vaade **järgimismärke**: väikesed värvilised kujundid kohtades, kuhu hiir kinnitub (roheline ring otspunktis, tsüaan keskpunktis, punane ruut servas, sinine teemant tahul). Vaata [Järgimine ja kinnitamine](topic:inference).
- Valitud asjad muutuvad siniseks. Tahk, mida vaadatakse tagant, on sinakashall.
- Kui avad grupi muutmiseks, tuhmuvad kõik selle väljaspool olevad asjad ning teljed liiguvad grupi enda telgedele.
- Kui mudelil on stseene, ilmub vaate ülaservale stseenide vahekaartide rida.
- Lohista fail kuhu tahes vaatesse, et see avada või importida.

## Vasakud paneelid

**{{ui:Struktuur}}** loetleb mudeli grupid ja komponendid täpselt nii, nagu need mudelis on pesastatud. Komponent, mida on kasutatud rohkem kui üks kord, näitab, mitu korda, näiteks „Aken (4)“.

- Klõpsa nime, et see valida. Topeltklõps avab selle muutmiseks.
- **Otsi nime järgi** (näidatakse siis, kui on kaks või rohkem gruppi) jätab alles ainult read, mille nimi sobib, koos gruppidega, milles need on. {{key:Esc}} tühjendab selle.
- Rea lõpus olev **silm** peidab või näitab seda gruppi või komponenti (nagu {{ui:Redigeeri}} › {{ui:Rohkem}} › {{ui:Peida}} teeb). Sildi ikoon tähendab, et see on peidetud oma [sildi](topic:tags) järgi.
- **Nime muutmine kohapeal:** klõpsa rida, vajuta {{key:F2}}, kirjuta ja vajuta {{key:Enter}} ({{key:Esc}} jätab vana nime).
- **Lohista rida** teise grupi rea keskele, et see liigutada selle sisse; rea ülemisele või alumisele servale, et see asetada vahetult enne või pärast seda rida; või struktuuri pealkirjale, et see liigutada kõige ülemisele tasemele. See jääb mudelis oma kohale ja säilitab oma värvi, sildi ja nime. Grupp ei saa minna iseendasse. Iga liigutus on üks tagasivõtmise samm. Vaata [Ümberpaigutamine struktuuris](topic:groups-components#rearrange-in-the-outliner).
- Kui muudad grupi sees, ütleb rida „Muudad: Mudel › …“ ja ilmub nupp {{ui:Sulge grupp}}. See sulgeb korraga kõik avatud tasemed.

**{{ui:Komponendid}}** loetleb iga komponendi definitsiooni ja selle, kui mitu koopiat on paigutatud („3×“), ning nupu {{ui:Aseta}}, mis lisab veel ühe koopia sinna, kuhu klõpsad.

## Parempoolsed paneelid

**{{ui:Objekti teave}}** kirjeldab valitut. Selle pealkiri muutub, et öelda, mis see on:

| Pealkiri | Näitab | Nupud |
|---|---|---|
| Mudel (midagi pole valitud) | Tahud, servad, grupid, komponendid ja kui mitu on paigutatud, abijooned, üldine suurus | {{ui:Kustuta kõik abijooned}} (kui abijooni on) |
| Tahk | Pindala, aukude arv | {{ui:Pööra tahk ümber}} |
| Serv | Pikkus | puuduvad |
| Grupp või komponent | Nimi (kirjuta, et ümber nimetada), mitu korda on paigutatud, kas see on suletud tahkis, selle ruumala, suurus | {{ui:Redigeeri}}, {{ui:Lahuta}}, {{ui:Tee unikaalseks}} (komponent, mis on paigutatud rohkem kui üks kord), {{ui:Loo komponent}} (grupp) |
| Juhtpunkt või juhtjoon | ei midagi | {{ui:Kustuta}} |
| Mitu asja | Mitu tahku, serva, gruppi ja abijoont, tahkude koguala | {{ui:Loo komponent (G)}}, {{ui:Loo grupp (Shift+G)}} |

**{{ui:Stiil}}** määrab, kuidas mudel joonistatakse: {{ui:Tahud}} ({{ui:Varjutatud}}, {{ui:Peidetud jooned}}, {{ui:Traatmudel}}, {{ui:Röntgen}}), {{ui:Näita servi}} ja {{ui:Päikesevarjud}}, mis kasutavad päikese kuupäeva, kellaaega ja asukohta. Vaata [Stiilid ja päikesevarjud](topic:styles-shadows).

**{{ui:Stseenid}}** salvestab vaated: {{ui:Lisa stseen}}, stseenide loendi ning {{ui:Eelmine}}, {{ui:Esita}} ja {{ui:Järgmine}}. Vaata [Salvesta vaated stseenidena](topic:scenes).

## Olekuriba

Allservas vasakult paremale:

1. **Vihje**: mida tööriist järgmiseks vajab või millele hiir kinnitub („Endpoint“, „On red axis“).
2. **Teated**: mis just juhtus („Undid push/pull.“, „Imported site.dxf: 1697 edges on the ground, in a group.“) või miks midagi ei töötanud.
3. **Väärtusväli**: selle silt muutub tööriista järgi ({{ui:Pikkus}}, {{ui:Mõõdud}}, {{ui:Raadius}}, {{ui:Küljed}}, {{ui:Vahemaa}}, {{ui:Nurk}}, {{ui:Mõõtkava}}, {{ui:Nihe}}). See näitab elavat suurust, kui töötad, ning võtab vastu selle, mida kirjutad. Vaata [Sisesta täpsed suurused väärtusväljale](topic:value-box).
4. **Klahvistiil**: {{ui:Klahvid: Lükka/tõmba}} või {{ui:Klahvid: Modelleerija}} vahetab klaviatuurikiirteed ja hiireklahvid korraga (sama mis [ModelCraft'i sätetes](topic:settings)).
5. **{{ui:Haakimine}} ja {{ui:Põrkumine}}**: kinnitumine punktidele, servadele ja telgedele ning tahkised, mis peatuvad, kui puutuvad kokku. Ristiga läbikriipsutatud = väljas. Klõpsa, et lülitada. Vaata [ModelCraft'i sätted](topic:settings).
6. **Ühikuvalija**: ühikud, milles pikkused kuvatakse. Vaata [Alusta: kontrolli ühikuid](topic:getting-started#check-the-units-first).

## Kitsal ekraanil

Alla umbes 760 pikslit laiuse ekraani korral (telefon või kitsas aken) jätab 3D-vaade ekraani enda. Tööriistariba on üks rida, mis kerib küljelt küljele, ning paneelid avanevad lehtedena ekraani alumisest ribast.
