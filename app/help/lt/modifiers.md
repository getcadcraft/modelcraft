---
title: Modifikatoriai tinklelyje, grupėje ar komponente
summary: Mastelį keiskite, veidrodžiu atspindėkite, masyvuokite, lyginkite, nuskelkite, pjaukite ir lenkite tinklelį nekeisdami jo; kartokite ar keiskite grupės ar komponento mastelį su ta pačia seka ir padarykite pakeitimą nuolatinį, kai būsite pasiruošę.
keywords: modifikatorius, modifikatoriai, seka, grupė, komponentas, mastelis, užfiksuoti, redaguoti šaltinį, nedestruktyvus, veidrodis, masyvas, radialinis masyvas, padalijimas, padalijimo paviršius, lyginti, nuskelti, sukietinti, storis, logika, pjūvis, poslinkis, triukšmas, sujungti, supaprastinti, gardelė, narvas, kreivės deformavimas, lenkti, apvyniojimas, taikyti
from: dd5ec1cb
---

**Modifikatorius** keičia tai, ką tinklelis rodo, pats tinklelio nekeisdamas. Veidrodžiu atspindėkite vieną detalės pusę ir modeliuokite tik ją; suapvalinkite dėžutę padalijimo paviršiumi ir toliau redaguokite dėžutę. Modifikatoriai stovi **sekoje** ir veikia tvarka, iš viršaus žemyn. Tai, ką matote, eksportuojate, spausdinate ir atvaizduojate, yra tinklelis su visais įjungtais modifikatoriais.

## Pridėti modifikatorių

1. Pasirinkite tinklelį. Modelio darbo srityje jo skiltis **Modifikatoriai** yra {{ui:Objekto informacija}}; Tinklelio darbo srityje ji yra dešinėje esančiame skydelyje.
2. Pasirinkite vieną iš {{ui:Pridėti modifikatorių…}}. Jis įdedamas į sekos apačią.
3. Pakeiskite jo nustatymus po pavadinimu. Ilgiai priima tas pačias reikšmes kaip reikšmės laukas, todėl veikia `600mm`, `2'6"` ir `(6m)/4`.

Kiekvienas pakeitimas yra vienas anuliavimo žingsnis: {{key:Mod+Z}} jį atšaukia.

## Kiekvieno modifikatoriaus mygtukai

- Žymimasis langelis jį įjungia arba išjungia.
- Ekrano mygtukas jį rodo arba slepia vaizde (lieka sekoje).
- Kameros mygtukas jį rodo arba slepia atvaizduotuose paveikslėliuose ir vaizdo įrašuose, todėl modifikatorius gali būti skirtas tik atvaizdavimams (arba tik vaizdui).
- Rodyklės perkelia jį aukštyn arba žemyn sekoje. Tvarka svarbi: pirmiausia veidrodis, po to padalijimas duoda lygią siūlę, o pirmiausia padalijimas, po to veidrodis – ne.
- {{ui:Taikyti}} padaro formą tinklelio dalimi: modifikatoriai virš jo ir šis pats atliekami tinkleliui ir išeina iš sekos. Tai vienas anuliavimo žingsnis.
- Kryželis jį pašalina.

## Modifikatoriai

| Modifikatorius | Ką daro |
| --- | --- |
| {{ui:Mastelis}} | Keičia mastelį apie objekto pradžios tašką, koeficientas raudonai, žaliai ir mėlynai. Taip pat grupei ar komponentui. |
| Veidrodis | Prideda veidrodinę kopiją per raudoną, žalią ar mėlyną ašį per tinklelio pradžios tašką ir sujungia puses ten, kur jos susitinka. |
| {{ui:Masyvas}} | Kopijuoja eilute (žingsnis – jo paties dydis, padaugintas iš jūsų nurodytų skaičių, plius fiksuotas žingsnis), apie ašį arba palei kreivę modelyje. Grupė ar komponentas naudoja eilutę. |
| Padalijimo paviršius | Lygina tinklelį Catmull-Clark padalijimu. Aštrios briaunos lieka raukšlėtos. Atvaizdavimai gali naudoti daugiau lygių nei vaizdas. |
| Nuskelti | Suapvalina kiekvieną briauną, aštresnę už jūsų nurodytą kampą. |
| Sukietinti | Paviršiui suteikia storį ir uždaro kraštą. |
| Logika | Pašalina, sujungia arba palieka persidengimą su kitu modelio objektu. Abu turi būti uždarti kieti kūnai. |
| Poslinkis | Perkelia paviršių į vidų arba išorę glotniu triukšmu. Ta pati sėkla kiekvieną kartą duoda tuos pačius iškilimus. |
| Sujungti viršūnes | Sujungia viršūnes, esančias arčiau nei nurodytas atstumas. |
| Supaprastinti | Palieka dalį trikampių, pašalindama tuos, kurie mažiausiai keičia formą. |
| {{ui:Lyginti}} | Atpalaiduoja viršūnes link kaimynių. |
| Gardelė | Lenkia tinklelį narve: perkelkite narvo taškus, o tinklelis seka. |
| Kreivės deformavimas | Lenkia tinklelį palei kreivę modelyje, palei raudoną, žalią ar mėlyną ašį. |
| Apvyniojimas | Perkelia kiekvieną viršūnę į artimiausią kito objekto tašką. |

## Grupėje ar komponente

Grupė ar komponentas taip pat gali išlaikyti receptą, todėl lempos gaubtas gali būti **Mastelis** ir vieno gaubto **Masyvas**, o pakeitus skaičių, pakinta ir lempa.

1. Pasirinkite grupę ar komponentą. {{ui:Objekto informacija}} jo skiltis **Modifikatoriai** rodo seką (iš pradžių tuščia).
2. Iš {{ui:Pridėti modifikatorių…}} pasirinkite {{ui:Mastelis}} arba {{ui:Masyvas}}. Grupė tampa komponentu, kuris yra **originalas, išdėstytas sekos**. Originalas išlaikomas: pakeiskite jį, ir visos kopijos seka iš karto.
3. Mastelis priima koeficientą raudonai, žaliai ir mėlynai (`1, 1, 2` dvigubina aukštį). Masyvas priima kopijų skaičių, žingsnį kaip dalį iki šiol gauto rezultato dydžio ir papildomą žingsnį ilgio vienetais.

Seka veikia iš viršaus žemyn pagal originalo paties ašis apie jo pradžios tašką, todėl tvarka svarbi: masyvas iš trijų kopijų, išdėstytų 3 m atstumu, o paskui Mastelis 2 raudonai, išdėsto kopijas 6 m atstumu; pirmiausia Mastelis, o paskui Masyvas, jas palieka 3 m atstumu. Žymimasis langelis, rodyklės ir kryželis veikia kaip tinklelyje; vaizdo ir kameros mygtukai bei {{ui:Taikyti}} viename modifikatoriuje neveikia, nes grupės seka – vienas dalykas.

- {{ui:Redaguoti šaltinį}} atidaro originalą vietoje. Pakeitimai matomi kiekvienoje kopijoje; uždarius grįžtama ten, kur buvote.
- {{ui:Užfiksuoti modifikatorius}} paverčia rezultatą paprastomis briaunomis ir paviršiais ir pašalina seką, vienu anuliavimo žingsniu. Persidengiančios kopijos lieka atskira geometrija: užfiksavimas nėra sąjunga.
- Komponento kopijos naudoja tą patį receptą; {{ui:Padaryti unikalų}} jį atskiria (originalas lieka bendras).
- Seka išsaugoma faile, perkeliama kopijuojant ir įklijuojant bei anuliuojant, o Išvalyti nenaudojamus išsaugo originalą. Programa, kuri nežino modifikatorių, vis tiek rodo kopijas.
- Iki užfiksavimo į rezultatą negalima įeiti, suskaidyti, keisti dydžio ar tempti: jis būtų perkurtas kito pakeitimo metu. Kiekvienas tai nurodo.
- Ribos: 32 modifikatoriai ir 1,000 kopijų. Tempimui sukurtas komponentas (Stretch) ir seka dar negali dalytis apibrėžimu.

## Padalijimo paviršius

Padalijimas lygina tinklelį Catmull-Clark būdu: kiekvienas paviršius tampa keturkampiais paviršiais, o kiekvienas lygis sukuria keturis kartus daugiau. Dėžutė su dviem ar trimis lygiais jau atrodo kaip suapvalinta forma, o dėžutę toliau redaguojate.

- **Lygiai vaizde** nustato, kiek lygi forma.
- **Lygiai atvaizdavimuose** nustato, kiek lygūs atvaizduoti paveikslėliai ir vaizdo įrašai; atvaizdavimai gali naudoti daugiau lygių nei vaizdas.
- **Atvaizdavimai ties tikru lygiu paviršiumi** atvaizduojamo tinklelio taškus perkelia į ribinį paviršių, į kurį linkę lygiai, todėl net du lygiai atrodo taip pat lygūs kaip daugelis.
- **Raukšlės** išlaiko briaunas aštrias: Tinklelio darbo srityje pasirinkite briaunas ir naudokite {{ui:Raukšlė}} (1 lieka aštri, 0.5 šiek tiek suapvalina, 0 – lygi). Žr. [Redaguoti tinklelį](topic:mesh-edit).
- **Sumažinkite vaizdo lygį dideliame tinklelyje:** kai prašomi lygiai duotų daugiau paviršių, nei šis kompiuteris gerai valdo, vaizde rodomas žemesnis lygis ir nurodoma, koks. {{ui:Taikyti}} visada naudoja visus lygius. Kiek paviršių leidžiama, nustato jūsų kompiuterio klasė skiltyje {{ui:Parametrai}} › Atvaizdavimas › Jūsų kompiuteris.
- Atviri kraštai išlaiko savo kampus ir lieka ant savo briaunų linijos.

## Lenkti gardelės narvu

1. Pridėkite {{ui:Gardelė}} modifikatorių ir spauskite {{ui:Pridėti gardelės narvą aplink tinklą}}. Aplink tinklelį atsiranda 3 × 3 × 3 taškų narvas, nupieštas linijomis.
2. Atidarykite narvą Tinklelio darbo srityje (dukart spustelėkite jį) ir perkelkite jo taškus. Tinklelis seka sklandžiai.

:::tip
Narvas yra toks pat tinklelis kaip ir kiti: baigę paslėpkite jį su jo žyme.
:::

## Dideli tinkleliai

Mažos sekos apskaičiuojamos iš karto. Didelė skaičiuojama fone visuose jūsų kompiuterio branduoliuose: vaizde ir toliau rodomas paskutinis rezultatas, kol paruošiamas naujas. Logikos operacijos pirmą kartą įkelia kietųjų kūnų modeliuotoją; vaizde tai trumpam pasakoma.

## Ko modifikatoriai dar nedaro

- Svoriai kiekvienai viršūnei (ant tinklelio nudažytas slopinimas) Poslinkiui, Lyginimui ir Apvyniojimui.
- Modifikatoriai, išskyrus Mastelis ir tiesinį Masyvą, stumiamo-traukiamo modeliavimo geometrijai (grupėms ir komponentams): pirmiausia paverskite tinkleliu ({{ui:Konvertuoti į tinklelį}}). Veidrodis, apskritiminis ar kreivės Masyvas, Lenkimas ir Susiaurinimas grupėms bus vėliau.
