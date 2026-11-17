---
title: Braižyti paviršius linijomis, stačiakampiais, apskritimais ir lankais
summary: Kurti plokščius paviršius ant žemės ar kitų paviršių, dalyti juos linijomis ir braižyti apskritimus bei daugiakampius su norimu kraštinių skaičiumi.
keywords: braižyti, linija, stačiakampis, apskritimas, daugiakampis, poslinkis, įtraukimas, rėmas, kraštas, lankas, kreivė, splainas, lygus, kabelis, kelias, išlinkimas, spindulys, paviršius, grindų planas, pėdsakas, dalyti, kraštinės, segmentai, kontūras, pieštukas
from: b6d7b7dd
---

Viskas ModelCraft pradedama nuo plokščio **paviršiaus**: kraštinių uždaro paviršiaus. Paviršių galite nubraižyti tiesiogiai su {{ui:Stačiakampis}}, {{ui:Apskritimas}} ar {{ui:Daugiakampis}}, arba braižyti kontūrą po vieną kraštinę su {{ui:Linija}}. Paviršiai yra tai, ką [Stumti/traukti](topic:push-pull) paverčia tūriniais kūnais.

## Stačiakampio braižymas

1. Paspauskite {{key:R}}.
2. Spustelėkite pirmąjį kampą: ant žemės arba ant bet kurio modelio paviršiaus.
3. Perkelkite žymeklį. Stačiakampis lieka ant žemės (arba ant paviršiaus, nuo kurio pradėjote), o reikšmių laukas ({{ui:Matmenys}}) rodo jo plotį ir gylį. Patarime rodoma „Kvadratas“, kai kraštinės lygios.

   Norėdami braižyti kitoje plokštumoje, nukreipkite žymeklį į ją: paviršius, einantis per pirmąjį kampą, perkelia stačiakampį į tą paviršių, o prisitraukimas prie taško ne tos plokštumos (galinio taško, kraštinės ar mėlynosios ašies) pastato stačiakampį stačią per abu kampus. Prisitraukus vėl prie taško pirmojoje plokštumoje, jis vėl guli plokščiai. Norėdami išlaikyti vieną plokštumą, paspauskite rodyklių klavišą: {{key:Up}} laiko stačiakampį lygiai (mėlynoje plokštumoje), {{key:Right}} – raudonoje plokštumoje, {{key:Left}} – žalioje plokštumoje. Tam pačiam klavišui paspaudus dar kartą, fiksavimas atleidžiamas.
4. Spustelėkite priešingą kampą arba įveskite dviejų dydžių skaičius, atskirtus kableliu, ir paspauskite {{key:Enter}}: `4m,3m`, `4000,3000` milimetrų modelyje arba `12',10'6"` pėdomis ir coliais.

   Atsiranda paviršius su keturiomis aplink jį supančiomis kraštinėmis.

Įvesti dydžiai eina ta kryptimi, kuria buvote nukreipę žymeklį: jei įvedant žymeklis buvo kairėje nuo pirmojo kampo, stačiakampis didėja į kairę.

:::warning
Kablelis skiria du dydžius, todėl jis negali būti dešimtainis skyriklis. Rašykite `2.5m,3m`, o ne `2,5m`.
:::

## Apskritimo ar daugiakampio braižymas

1. Apskritimui paspauskite {{key:C}}, daugiakampiui – {{key:N}}.
2. Norėdami pakeisti kraštinių skaičių, įveskite jį prieš spustelėdami: `12s` (arba tiesiog `12`) ir {{key:Enter}}. Apskritimas pradedamas su 24 kraštinėmis, daugiakampis – su 6. Patarime rodomas dabartinis skaičius; ModelCraft jį išsaugo kitam apskritimui, kol jo nepakeisite arba nepakeisite įrankio.
3. Spustelėkite centrą ant žemės arba paviršiaus. Norėdami centruoti ant paviršiaus, nukreipkite žymeklį į paviršiaus vidurį („Paviršiaus centras“) arba į vienos jo kraštinės vidurį („Vidurio taškas“), laikydami žymeklį tik tame paviršiuje: apskritimas nubraižomas ant to paviršiaus, net ir ant siauro ilgos dėžės galo.
4. Spustelėkite, kad nustatytumėte spindulį, arba įveskite jį ({{ui:Spindulys}} reikšmių lauke) ir paspauskite {{key:Enter}}.

Apskritimas yra daugiakampis su daugybe kraštinių. Kai apskritimą iškeliate su Stumti/traukti, jo kraštinės sušvelninamos, kad cilindras atrodytų kaip vienas lygus paviršius.

## Lanko braižymas

1. Paspauskite {{key:A}} ({{ui:Lankas}}).
2. Spustelėkite, kur lankas prasideda, tada – kur baigiasi (arba įveskite ilgį tarp jų).
3. Perkelkite žymeklį, kad lankas išsilenktų, ir spustelėkite. Patarime rodoma „Pusapskritimis“, kai išlinkimas lygus pusei atstumo tarp galų. Arba įveskite, kiek toli nuo tiesės stovi vidurys: `2` ir {{key:Enter}}.

Norėdami nubraižyti lanką aplink tašką, naudokite {{ui:Lankas iš centro}}: spustelėkite centrą, tada, kur lankas prasideda (arba įveskite spindulį), ir tada, kur jis baigiasi (arba įveskite kampą laipsniais, pavyzdžiui `90`). Prisitraukia po 15° žingsnius.

Lankas, pradėtas ant paviršiaus, nubraižomas ant to paviršiaus; kitu atveju jis guli ant žemės arba stovi statmenai, kai jo galai yra skirtinguose aukščiuose. Lankas turi 12 segmentų; braižydami įveskite `24s`, kad būtų daugiau. Lankai uždaro paviršius taip pat kaip linijos: lankas per stačiakampio kampą jį padalija.

## Lygios kreivės braižymas

{{ui:Kreivė}} nubraižo lygią liniją, einančią per kiekvieną spustelėtą tašką: kabelį, turėklo kelią, sodo kraštą. Ji gali išeiti iš žemės: taškai prisitraukia prie kampų, kraštinių ir paviršių bet kur, o rodyklių klavišai užfiksuoja raudoną, žalią ar mėlyną kryptį, kaip ir su {{ui:Linija}}.

1. Spustelėkite {{ui:Kreivė}} grupėje {{ui:Braižymas}}.
2. Spustelėkite taškus, per kuriuos eina kreivė. Įveskite `<0,0,1>` ir {{key:Enter}}, kad gautumėte tašką 1 virš paskutinio, `[x,y,z]` tiksliai vietai arba ilgį – tašką tiek toli link žymeklio.
3. Paspauskite {{key:Enter}} arba dukart spustelėkite, kad baigtumėte. Spustelėkite pirmąjį tašką dar kartą, kad uždarytumėte kreivę. {{key:Backspace}} pašalina paskutinį tašką.

Kreivė pasirenkama kaip vienas gabalas. Norėdami ją pakeisti, pasirinkite ją ir spustelėkite {{ui:Redaguoti taškus}} skydelyje {{ui:Objekto informacija}}: jos taškai rodomi kaip kvadratai. Spustelėkite vieną, tada spustelėkite, kur jis turi būti (arba įveskite `<dx,dy,dz>`). {{key:Esc}} grąžina tašką į vietą ir baigia redagavimą. Uždara plokščia kreivė sudaro paviršių; kreivė, apibrėžianti paviršių, nebegali būti redaguojama.

## Poslinkis: kraštas paviršiaus viduje ar išorėje

{{ui:Poslinkis}} nukopijuoja paviršiaus kontūrą nustatytu atstumu į vidų (arba į išorę) – rėmui, kraštui, palangei ar ekrano stiklui.

1. Paspauskite {{key:F}} ir spustelėkite paviršių arba pirmiausia pasirinkite paviršių, tada paspauskite {{key:F}}.
2. Perkelkite žymeklį į paviršių, jei norite vidinio kontūro, arba iš jo, jei išorinio. Naujas kontūras seka žymeklį, o patarime nurodoma, kiek toli.
3. Spustelėkite arba įveskite atstumą ir paspauskite {{key:Enter}}.

Paviršius perskiriamas į dvi dalis: vidinį paviršių ir aplink jį rėmą (arba naują žiedą išorėje). Bet kurį iš jų iš karto stumkite arba traukite: ekranui nubraižykite dėžę, nustumkite ją iki storio, poslinkį priekinį paviršių 30 mm į vidų ir šiek tiek įstumkite vidinį paviršių stiklui. Skylės paviršiuje taip pat perkeliamos poslinkiu, o lankas ar apskritimas lieka viena (mažesne ar didesne) kreive.

- **Dukart spustelėkite** paviršių įrankiu {{ui:Poslinkis}}, kad jis vėl būtų perkeltas paskutiniu atstumu.
- **Kraštinės:** pasirinkite sujungtų kraštinių grandinę vienoje plokštumoje (pavyzdžiui, dvi L raidės linijas), paspauskite {{key:F}}, perkelkite žymeklį į norimą pusę ir įveskite atstumą: nubraižoma lygiagreti kopija su įstrižai nupjautais kampais.
- Kai atstumas viršija tai, ką leidžia paviršius, ModelCraft apie tai praneša ir nieko nenubraižo.

## Lankai, apskritimai ir daugiakampiai yra kreivės

Spustelėkite bet kurį lanko, apskritimo ar daugiakampio segmentą, ir pasirenkama visa kreivė. Tada {{ui:Objekto informacija}} rodo jos spindulį, segmentus, kampą (lankams) ir ilgį. Įveskite naują spindulį, kad pakeistumėte dydį apie centrą; paviršiai, nubraižyti jos plokštumoje, seka. Kai kreivės paviršius jau buvo nustumtas arba ištrauktas, jo spindulys išlieka toks, koks yra.

## Braižymas linijomis

1. Paspauskite {{key:L}}.
2. Spustelėkite, kur linija prasideda.
3. Spustelėkite, kur ji baigiasi, arba įveskite ilgį ir paspauskite {{key:Enter}}. Įvestas ilgis eina ta kryptimi, kurią rodo žymeklis.
4. Toliau spustelėkite. Kiekvienas spustelėjimas pradeda kitą liniją nuo paskutinės pabaigos.
5. Uždarykite kontūrą spustelėdami pirmąjį tašką dar kartą. Kai linijos uždaro plokščią kilpą, ji užpildoma paviršiumi ir įrankis nustoja jungti linijas. Bet kada paspauskite {{key:Esc}}, kad sustotumėte.

Linijos seka raudoną, žalią ir mėlyną kryptis, kai prie jų priartėjate; linija nusidažo ta spalva, o patarime rašoma „Raudonoje ašyje“. Kaip užfiksuoti kryptį ir prisitraukti prie taškų, žr. [Krypčių nustatymas ir prisitraukimas](topic:inference).

### Kur eina linija, jei ji nieko nelietė

- Linija, prasidedanti ant paviršiaus, lieka tos paviršiaus plokštumoje.
- Linija, prasidedanti ant žemės arba tuščioje erdvėje, lieka lygiai su pradiniu tašku. Jei modelį žiūrite iš šono, ji eina vertikalioje plokštumoje, nukreiptoje į jus.
- Norėdami nubraižyti liniją į tikslią vietą, įveskite tašką: `[x,y,z]` – tašką modelyje arba `<dx,dy,dz>` – poslinkį nuo pradžios. Žr. [Tikslių dydžių įvedimas](topic:value-box).

## Paviršiaus dalijimas

Nubrėžkite liniją per paviršių, nuo vienos kraštinės iki kitos (arba nuo kraštinės iki kraštinės per kitas linijas). Paviršius pasidalija į du paviršius. Kiekvienas išlaiko savo pusę ir spalvą. Tas pats veikia ir su stačiakampiu ar apskritimu, nubraižytu ant paviršiaus: figūra tampa savarankišku paviršiumi didesniame, kuris dabar turi skylę.

Taip išdėstomos patalpos ant grindų perdangos, langas sienoje ar laiptų pakopa: nubraižykite kontūrą ant paviršiaus, tada stumkite arba traukite naują paviršių.

## Paviršiai nukreipti į ne tą pusę

Kiekvienas paviršius turi priekį ir galą. Galas rodomas mėlynai pilkas. Ant žemės nubraižyti paviršiai nukreipti aukštyn; ant kito paviršiaus nubraižyti paviršiai nukreipti į tą pačią pusę kaip ir tas paviršius.

Jei paviršius rodo galą ten, kur tikitės priekio, pasirinkite jį ir spustelėkite {{ui:Apversti paviršių}} skydelyje {{ui:Objekto informacija}}.

## Ką matote braižydami

- Spalvotas žymeklis ten, kur prisitraukia žymeklis, ir jo pavadinimas patarime apatiniame kairiajame kampe.
- Linijos ar figūros peržiūra.
- Gyvas dydis reikšmių lauke. Galite jį perrašyti bet kada.

## Jei figūra ne ten, kur tikėjotės

- Jutiklinio ekrano atveju žr. [Trikčių šalinimas](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Jei linija prisitraukė prie kažko toli už, šiek tiek pasukite vaizdą: taškai, paslėpti už paviršiaus, niekada neprisitraukia, bet taškai jo kraštinėje – prisitraukia.
- Paspauskite {{key:Mod+Z}}, kad anuliuotumėte paskutinę figūrą; vienas anuliavimas pašalina vieną liniją ar vieną figūrą.
