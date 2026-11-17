---
title: Animeeri mis tahes omadust, vormi kõveratena ja sega klippe
summary: Animeeri töölaud võtmestab objekti asukoha, pöörde ja suuruse, lambi heleduse, laotuse ja värvi, objektiivi ning võrgu kujuvõtmed; armatuurid painutavad võrku luude ja maalitud kaaludega; IK ja piirangud panevad luud ja objektid ulatuma, vaatama, kopeerima, jääma piiridesse, rippuma või järgima teisi; jäigad kehad langevad, kuhjuvad ja põrkavad ning arvutatakse võtmeteks; juhikud määravad väärtuse teistest; ajajoone kõverate vaade vormib iga muutust Bézier-käepidemete ja tsüklitega ning klippide vaade salvestab animatsioonid toimingutena, mida saab uuesti paigutada ja segada.
keywords: füüsika, jäik keha, jäigad kehad, simulatsioon, simuleeri, langemine, kukkumine, gravitatsioon, põrge, põrkub, kuhjamine, põrkumine, hõõrdumine, arvutamine, arvutatud, ik, pöördkinemaatika, piirang, piirangud, vaata suunas, jälgi, sihi, kopeeri teisendused, kopeeri asukoht, kopeeri pööre, piira pööret, alamobjekt, vanem, järgi teed, tee, poolus, fabrik, ahel, armatuur, armatuurid, skelett, luu, luud, nahk, nahastamine, kaalud, kaalude maalimine, tipurühmad, automaatsed kaalud, luude soojus, poos, poosirežiim, kahekordne kvaternioon, lineaarne segu, kujuvõtmed, kujuvõti, morf, morfid, morfi sihtmärgid, segakujud, näoilme, väljend, juhik, juhikud, avaldis, avaldised, animeeri, animatsioonitöölaud, animatsioon, võtmekaader, võti, võtmed, omadus, omadused, teisendus, asukoht, pööre, mõõtkava, lamp, valgusti, heledus, värv, objektiiv, vaateväli, fov, graafikaredaktor, kõverad, kõver, bezier, käepidemed, puutuja, interpoleerimine, tsükkel, tsüklid, kordus, silmus, edasi-tagasi, nihe, lehtkava, vali võtmed, kasti valik, kopeeri võtmed, kleebi võtmed, venita võtmeid, skaleeri võtmeid, klipid, toimingud, nla, sega, segamine, mõju, varu
from: 16d8e12f
---

[Ajajoon](topic:animation) liigutab kaamerat ning terveid gruppe ja komponente. Töölaud **Animeeri** võtmestab rohkem kui see, ning ajajoonel on kaks lisavaadet, et vormida ja uuesti kasutada seda, mida võtmestasid.

## Ava see

Vali tööriistaribal tööruumide loendist {{ui:Animeeri}}. Vaate alla avaneb ajajoon, tööriistaribal on animatsiooni rühmad ({{ui:Võtmed}}, {{ui:Esita}}, {{ui:Ajajoon}}) ning paremal paneel loetleb, mida saab esitusjoonel võtmestada.

## Võtmesta omadus

Paneel loetleb esitusjoonel:

- **Valitud objekt**: selle {{ui:Asend}}, {{ui:Pööre (°)}} ja {{ui:Suurus}}, igaühel kolm arvu. Sisesta arv ja vajuta {{key:Enter}}: see võtmestatakse esitusjoonel ning objekt liigub sinna. Rea kõrval olev teemant võtmestab väärtuse sellisena, nagu see praegu on; täidetud teemant tähendab, et esitusjoonel on juba võti.
- **Lambid**: iga lambi {{ui:Heledus (lm)}}, {{ui:Laotus (°)}} (prožektorlambid) ja {{ui:Värv}}.
- **Kaamera**: {{ui:Objektiivi nurk (°)}}, zoomimiseks kaamera liikumise ajal.

{{ui:Võti teisendus}} (või {{key:I}}) võtmestab kõigi valitud gruppide või komponentide asukoha, pöörde ja suuruse korraga; {{ui:Võti kaamerale}} (või {{key:K}}) võtmestab kaamera. Kui {{ui:Automaatne võti}} on sisse lülitatud, saab grupp, mille asukoht, pööre ja suurus on nii võtmestatud, uue võtme iga kord, kui seda liigutad.

Pöörded on kolm nurka: ümber X, siis Y, siis Z. Üle 180° võtmestatud pööre läheb samas suunas edasi (190° jääb 190°-ks, mitte −170°-ks), nii et ratas võib pöörelda mitu korda.

:::tip
Grupp, mis on võtmestatud ajajoonel {{ui:Võti valitud}} abil, saab terve paigutuse võtmed. Selle rea nupp kõverate joonistamiseks muudab need asukoha, pöörde ja suuruse kõveraks (sama paigutus igal võtmel), nii et saad neid vormida vaates {{ui:Kõverad}}.
:::

## Kujuvõtmed (morfid)

**Kujuvõti** on sama [võrgu](topic:meshes) teine kuju: naeratus näol, ukse ülespuhumine, painduv leht. Selle liugur segab võrgu sellisena, nagu see on (0), ja selle kujuga (1); mitu võtit liituvad.

1. Vali animatsioonitöölaual võrk: paneel näitab selle {{ui:Kujuvõtmed}}.
2. Klõpsa {{ui:Lisa kujuvõti}}. ModelCraft läheb [võrgutöölauale](topic:mesh-edit) uue võtmega, mida muudetakse: liiguta punkte, tõmba välja, skulpti — muuda võrk soovitud kujuks.
3. Tule tagasi {{ui:Animeeri}}-sse ja klõpsa {{ui:Valmis}}. Võrk läheb tagasi nagu varem ning võti jääb muudatusse.

Seejärel lohista võtme liugurit (või sisesta väärtus), et see segada sisse. Teemant võtmestab väärtuse esitusjoonel, nii et võti võib aja jooksul kasvada ja kaduda; kui sellel on rada, salvestatakse uus väärtus esitusjoonel. Pliiats muudab võtme kuju uuesti (võrk näitab seda täielikult kuni {{ui:Valmis}}; {{ui:Loobu}} jätab võtme nii, nagu see oli), silm lülitab võtme välja, prügikast eemaldab selle.

Tipp, mille lisad võtme muutmise ajal, kuulub võrgule endale: see jääb sinna, kuhu paigutasid, igas kujus.

:::note
Kujuvõtmed liigutavad võrku enne selle [modifikaatoreid](topic:modifiers): alamjaotuse modifikaator silub segatud kuju. Renderdatud pildid ja videod näitavad võtmeid igal kaadril.
:::

## Armatuurid: luud, mis painutavad võrku

**Armatuur** on [võrgu](topic:meshes) sees olev luude kogum. Pane luud poosi ja võrk järgib, iga punkt nii palju, kui selle **kaalud** ütlevad.

1. Vali võrk animatsioonitöölaual ja klõpsa paneelil {{ui:Lisa armatuur}} (või {{ui:Lisa luu}} rühmas {{ui:Skelett}}): esimene luu kulgeb võrgu keskelt selle jalast üles.
2. Kui luu on valitud, lisab {{ui:Lisa alamluu}} järgmise selle otsast. Määra mis tahes luu {{ui:Pea}}, {{ui:Ots}}, {{ui:Veeremine (°)}} ja {{ui:Rippub}} paneelil; luu, mis rippub teisest, liigub sellega kaasa. Eemalda linnuke {{ui:Liigutab võrku}} luu puhul, mis ainult juhib teisi.
3. Klõpsa {{ui:Automaatsed kaalud}}: iga luu haarab lähimad punktid ning haare levib võrgus sujuvalt, nii et kahe luu vahelised punktid jagavad neid. {{ui:Ainult lähimad luud}} on kiirem ja kõvem jaotus.

**Pooside** seadmiseks luud kasuta {{ui:Poos}} ({{key:P}}): klõpsa luul, et see valida, lohista, et seda vaate telje ümber pöörata, {{key:Shift}}-lohistus liigutab seda. Või sisesta selle {{ui:Asend}}, {{ui:Pööre (°)}} ja {{ui:Suurus}} rubriigi {{ui:Poos}} all; pöörded on luu enda telgedes, lähtudes puhkeasendist. Teemandid ja {{ui:Võti kogu poos}} võtmestavad poosi esitusjoonel; kui luul on võtmed, salvestatakse selle poos seal. {{ui:Lähtesta see luu}} ja {{ui:Lähtesta poos}} viivad luud tagasi puhkeasendisse.

**Maali kaalud** ({{key:W}}) valitud luu jaoks: võrk on puhkeasendis, iga tahk on värvitud selle järgi, kui palju luu seda haarab — punane kõik, sinine mitte midagi. Maali, et haaret lisada ({{key:Mod}} eemaldab selle, {{key:Shift}} silub); {{ui:Suurus (px)}} ja {{ui:Tugevus}} seavad pintsli. Kui {{ui:Hoia iga punkti kaalude summa võrdne 1-ga}} on sisse lülitatud, võtab ühele luule rohkem andmine sama palju teistelt. Iga löök on mudeli tagasivõtmise üks samm.

{{ui:Nahk}} valib, kuidas liigub kahe luu vahel olev punkt: {{ui:Lineaarne (kiire)}} segab luude liigutused ning natuke kitsendab painutatud liigest; {{ui:Kahekordne kvaternioon (säilitab mahu liigestes)}} pöörab punkti hoopis liigese ümber, nii et küünarnukk või põlv säilitab paksuse (luu {{ui:Suurus}} siis nahka ei venita).

:::note
Esmalt tulevad kujuvõtmed, siis armatuur, siis [modifikaatorid]. Vaade, pildid ja videod näitavad kõik poosis võrku; võrgu kaalud salvestatakse koos sellega, luud ja nende poos animatsiooniga.
:::

## IK ja piirangud

**Piirang** liigutab luud või objekti pärast selle võtmeid reegli järgi. Vali objekt (või armatuuris luu) ja lisa piirang rubriigi {{ui:Objekti piirangud …}} all; mitu piirangut töötavad nimekirjas toodud järjekorras (nooled muudavad seda), ning igal on {{ui:Kui palju}} (0 kuni 1, võtmestatud oma teemandiga nagu iga omadus) ja sisse-välja lüliti.

| Piirang | Kellele | Mida teeb |
|---|---|---|
| {{ui:Ulatumine (IK)}} | Luud | Luu ja luud, millest see rippub ({{ui:Ahela luud}}), painduvad nii, et selle ots ulatub sihtmärgini. Kahe luu ja {{ui:Poolus (painutus osutab sinna)}} korral osutab küünarnukk või põlv poolusele; pikemad ahelad painduvad sujuvalt. Kui ulatust ei ole, osutab ahel otse sihtmärgile. |
| {{ui:Vaata suunas}} | Mõlemad | Pöördub nii, et {{ui:Telg, mis osutab}} jääb sihtmärgi poole, hoides {{ui:Telg, mis jääb üles}} nii lähedal ülesse, kui võimalik. |
| {{ui:Kopeeri teisendused}} | Mõlemad | Võtab sihtmärgi asukoha, pöörde või suuruse — need, mis on märgitud. |
| {{ui:Piirangud}} | Mõlemad | Hoiab selle enda asukoha, pöörde (kraadides) või suuruse {{ui:min}} ja {{ui:max}} vahel teljel; jäta paar tühjaks, et see telg oleks vaba. |
| {{ui:Alamobjekt}} | Mõlemad | Liigub sihtmärgiga kaasa, nagu rippuks sellest, lähtudes asendist, kus mõlemad olid, kui sihtmärgi valisid. |
| {{ui:Järgi teed}} | Objektid | Istub [kõveraobjektil](topic:curves) kohal {{ui:Mööda kõverat}} (0 algus, 1 lõpp; võtmesta, et liikuda) ja {{ui:Pööra mööda kõverat}} korral on nägu kõvera suunas. |

Sihtmärk on teine objekt avatud grupis, sama armatuuri luu või sinu sisestatud {{ui:Punkt}} (objekti punkt on mudeli koordinaatides, luu oma võrgu koordinaatides). IK jala jaoks aseta sihtmärk sinna, kuhu jalg peaks jõudma, ja võtmesta sihtmärk, või võtmesta {{ui:Kui palju}}, et anda jalg võtmete vahel üle võtmete ja IK vahel.

:::tip
Objekt, mis vaatab objekti, mis järgib teed, näeb seda teel: ModelCraft arvutab sihtmärgid enne, olenemata objektide järjekorrast.
:::

## Füüsika: langeda, kuhjuda ja põrkuda

Lase objektidel kukkuda ja üksteist lüüa, siis hoia tulemus võtmetena.

1. Vali grupp, komponent või võrk ja määra selle {{ui:Jäik keha}} rubriigi {{ui:Füüsika}} all: {{ui:Langeb ja põrkab}} (liigub) või {{ui:Jääb paigale, on teel}} (laud, sein, rambi). Langevale anna {{ui:Kuju}} — {{ui:Kast (tema piirjooned)}} või {{ui:Kuul (ümardatud piirjoonte järgi)}} — ning selle {{ui:Mass (kg)}}, {{ui:Hõõrdumine}} ja {{ui:Põrkumine}} (0 kukub maha, 1 põrkab sama kõrgele tagasi).
2. Rubriigi {{ui:Kogu mudel}} all määra {{ui:Algus (s)}} ja {{ui:Lõpp (s)}}, {{ui:Raskuskiirendus (m/s², allapoole)}} ning kas on {{ui:Maapind, millele maanduda}} (ja selle kõrgus).
3. Klõpsa {{ui:Arvuta füüsika}} (paneelil või rühmas {{ui:Füüsika}}). Iga langev objekt saab asukoha, pöörde ja suuruse võtme igal kaadril kahe aja vahel; mängi seda nagu iga animatsiooni.

Uuesti arvutamine asendab need võtmed; {{ui:Eemalda arvutatud võtmed}} võtab need ära. Objektid alustavad puhkeasendis, kus nende võtmed, kõverad ja piirangud need paigutavad {{ui:Algus (s)}} hetkel (enne seda olev võtmestatud liikumine ei jätku langemisel). Rohkem {{ui:Samme kaadri kohta}} hoiab kõrged virnad stabiilsemana; olekurida ütleb, kui miski liigub veel lõpus.

:::note
Kujud on kastid ja kuulid iga objekti piirjoonte ümber; kast puutub nurkade, servade keskpunktide ja tahkude keskpunktidega, nii et kastid kuhjuvad ja kukuvad ümber, nagu eeldaksid. Kangast, vedelikke, liigendeid objektide vahel ja täpseid kujusid ei ole veel loodud.
:::

## Juhikud

**Juhik** seab kujuvõtme teistest asjadest, mitte käsitsi: ava võtme juhik (kalkulaatori nupp), kirjuta **avaldis** ja anna igale selles nimetatud nimele, mida see loeb ({{ui:Loeb}}): aeg sekundites, kaader, paigutuse asukoht, pööre või suurus X, Y või Z suunas, lambi heledus või teine kujuvõti. Näiteks kui `v` loeb ukse pööret ümber Z, avab `clamp(v / 90, 0, 1)` kuju, kui uks avaneb.

Avaldistes kasutatakse arve, nimesid, `+ - * / % ^` ja sulge ning funktsioone `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg`, samuti `pi` ja `e`. Viga märgitakse ära ega muuda midagi. Juhitud võtme liugur näitab juhiku väärtust; juhik on võtme raja ees, kuni eemaldad juhiku.

## Võtmete valimine ja muutmine (Võtmete vaade)

{{ui:Võtmed}} näitab rea iga raja kohta: kaamera, iga liikuv grupp ning iga omadus („Lamp 2 · Heledus (lm)“; omaduste võtmed on ümarad).

- Võtme valimiseks klõpsa sellel; {{key:Shift}}-klõps või {{key:Mod}}-klõps lisab valikusse või eemaldab sealt võtmeid. {{key:Shift}}-lohistus üle ridade joonistab kasti, mis lisab kõik selles olevad võtmed.
- Lohista valitud võtit, et liigutada neid kõiki; {{key:Left}} / {{key:Right}} liigutavad kaadri võrra ({{key:Shift}}: kümme).
- {{key:Mod+C}} kopeerib valitud võtmed, {{key:Mod+V}} kleebib need esitusjoonelt samadele radadele (teine ModelCraft-kaart saab neid samuti kleepida).
- {{ui:Venita}} laiali valitud võtmed esitusjoone suhtes selle kõrval oleva arvu võrra (2 = kaks korda kaugemale; 0,5 tõmbab need kokku).
- Leevendamise loend seab, kuidas iga valitud võti edasi liigub.

## Kõverate vormimine (Kõverate vaade)

{{ui:Kõverad}} on graafik iga arvu kohta ajas: aeg piki telge, väärtus üles. Märgi kõverad, mida näidata vasakul loendis (X, Y ja Z on punane, roheline ja sinine).

- Klõpsa võtmel (ruut), et see valida, {{key:Shift}}-klõps lisab veel, või lohista kasti. Lohista valitud võtit, et muuta selle aega ja väärtust; kui on valitud mitu, liigutab lohistamine neid ajas.
- Valitud võti näitab oma kahte **käepidet**. Lohista üht, et vormida kõver selle poole. {{ui:Käepidemed}} ütleb, kuidas need käituvad: {{ui:Automaatne}} (sujuv kõver läbi ümbritsevate võtmete), {{ui:Osutab järgmisele võtmele}}, {{ui:Joondatud}} (kaks püsivad sirgjoonel, nii et kõveral ei ole nurka) või {{ui:Vaba}}.
- {{ui:Valitud võtmetest}} seab, kuidas iga valitud võti järgmiseni liigub: {{ui:Kõver (käepidemed)}}, {{ui:Sujuv}}, {{ui:Ühtlane}}, {{ui:Aeglane algus ja lõpp}} või {{ui:Hoia}}.
- {{ui:Enne}} ja {{ui:Pärast}} seavad, mida kõver teeb väljaspool oma võtmeid: {{ui:Hoia}} (jääb esimese või viimase väärtuse juurde), {{ui:Kordus}}, {{ui:Edasi-tagasi}} või {{ui:Korda ja jätka}} (iga kordus algab sealt, kus eelmine lõppes: ratas veereb edasi, kõndija kõnnib edasi).
- Ratas suumib ({{key:Mod}}: ainult väärtused; {{key:Shift}}: ainult aeg); lohista keskmise nupuga või {{key:Alt}}-iga, et nihutada; {{ui:Näita kõiki}} või {{key:Home}} mahutab kõik näidatud kõverad. Klõps tühjal alal viib esitusjoone sinna. {{key:Delete}} kustutab valitud võtmed.

Käepidemeid hoitakse ajas teineteisest eemal, nii et kõver ei lähe kunagi tagasi.

## Animatsioonide taaskasutamine (Klippide vaade)

**Klipp** esitab salvestatud animatsiooni (**toimingu**) ajajoonel. Klippe segatakse järjekorras, alumised read ülemiste peal; ajajoone enda rajad on iga klipi peal.

1. Võtmesta grupid ja lambid tavapäraselt, siis klõpsa {{ui:Tee klipp}} vaates {{ui:Klipid}} ja anna toimingule nimi. Rajad muutuvad toiminguks ning klipp esitab seda seal, kus rajad olid (kaamera jääb ajajoonele).
2. Kasutamiseks uuesti vali toiming ja klõpsa {{ui:Lisa klipp}}: uus klipp algab esitusjoonel.
3. Lohista klippi mööda selle rida, et seda liigutada; klõpsa sellel, et seada {{ui:Algus (s)}}, {{ui:Kiirus}} (2 = kaks korda kiiremini), {{ui:Kordused}}, {{ui:Kui palju}} (0 kuni 1), {{ui:Segamine}} ({{ui:Asenda}} või {{ui:Lisa peale}} eelnevatele klippidele), {{ui:Klipi väljaspool}} (mitte midagi, hoia lõpp või hoia mõlemad otsad) ja {{ui:Vaigista}}. Nooled muudavad järjekorda; prügikast eemaldab selle (toiming, mida ükski klipp enam ei kasuta, läheb koos sellega).

Klipp, mille {{ui:Kui palju}} on alla täieliku, segab sisse selle, mis on tema all: eelnev klipp või lamp või paigutus sellisena, nagu see on ilma animatsioonita.

## Mis kus mängib

| Mis | Vaates | Renderdatud videos |
|---|---|---|
| Kaamera võtmed, objektiivi nurk kaamera võtmetega | Jah | Jah |
| Asend, pööre ja suurus (võtmed, kõverad, klipid) | Jah | Jah |
| Lambi heledus, laotus ja värv | Jah | Veel mitte: video kasutab lampe sellisena, nagu need on alguses (vt [mis veel valmis ei ole](topic:not-built-yet)) |
| Objektiivi nurk ilma kaamera võtmeteta | Jah | Veel mitte: võtmesta ka kaamera |
| Kujuvõtmed ja juhikud | Jah | Jah |
| Armatuurid (poosis võrgud) | Jah | Jah |
| IK ja piirangud | Jah | Jah |
| Arvutatud füüsika (võtmed) | Jah | Jah |

Kõik salvestatakse faili `.modelcraft` koos ülejäänud animatsiooniga ning ajajoone {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} võtavad tagasi mis tahes neist.

## Mida tuleb teada

- Liiguvad ainult terved grupid ja komponendid. Tahud, servad, päikese aeg ja stiil ei muutu ajas veel.
- {{ui:Ekspordi animatsioon}} jaotises [Stseenid](topic:scenes) salvestab endiselt vaate sellisena, nagu see ekraanil on, reaalajas; {{ui:Renderda video}} renderdab iga kaadri koos taeva, varjude ja materjalidega.
