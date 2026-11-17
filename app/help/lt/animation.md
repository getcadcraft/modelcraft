---
title: Animuoti kamerą ir objektus bei atvaizduoti vaizdo įrašą
summary: Nustatykite kameros ir grupių bei komponentų raktus laiko juostoje, paleiskite juos rodinyje ir atvaizduokite animaciją į WebM vaizdo įrašą su atvaizdavimo programos dangumi, saule ir medžiagomis.
keywords: animacija, animuoti, laiko juosta, raktai, raktinis kadras, kadras, kameros kelias, skrydis, apžiūra, pasivaikščiojimas, vaizdo įrašas, filmas, webm, atvaizduoti vaizdo įrašą, kadrai, kadrų dažnis, fps, grojimo galvutė, automatinis raktas, sklandumas, laikyti, scenos, PNG seka, judesys
from: d3a58249
---

**Laiko juosta** perkelia kamerą ir bet kurią grupę ar komponentą laikui bėgant. Nustatote **raktus** (kur kas nors yra tam tikru momentu); ModelCraft sklandžiai perkelia tai iš rakto į raktą. Paleiskite ją rodinyje, o tada atvaizduokite į vaizdo įrašą su tuo pačiu dangumi, saule, medžiagomis ir lempomis kaip [atvaizduotas paveikslėlis](topic:render).

## Laiko juostos atidarymas

Spustelėkite {{ui:Vaizdai}} grupėje {{ui:Kamera}}, tada {{ui:Animacijos laiko juosta}}. Laiko juosta atsidaro po vaizdu: valdikliai viršuje, tada eilutė **Kamera** ir po eilutę kiekvienai judančiai grupei ar komponentui. Rombai yra raktai; raudona linija yra **grojimo galvutė** – momentas, rodomas vaizde.

:::touch
Telefone laiko juosta taip pat atsidaro po vaizdu. Jos valdikliai – viena eilutė: braukite ją į šoną, kad pasiektumėte likusius; mygtukas, kuris uždaro laiko juostą, lieka jos gale.
:::

Vilkite slankiklį (arba spustelėkite eilutę), kad perkeltumėte grojimo galvutę. {{ui:Groti}} paleidžia nuo grojimo galvutės ir virsta į {{ui:Pristabdyti}}, kol groja; dar kartą spustelėkite, kad sustabdytumėte ten, kur esate. {{key:Space}} daro tą patį, kol laiko juosta atidaryta (su uždaryta laiko juosta Space vis dar yra {{ui:Pasirinkti}}). {{ui:Ankstesnis raktas}} ir {{ui:Kitas raktas}} peršoka tarp raktų. Savo stilius gali suteikti grojimui ir pristabdymui kitą klavišą: {{ui:Parametrai}}, tada meniu, klavišai ir pelė, komanda *Groti arba pristabdyti animaciją*.

## Kameros perkėlimas

1. Perkelkite grojimo galvutę į vietą, kur kadras prasideda (0 s), nustatykite rodinį ir spustelėkite {{ui:Raktas kamerai}}.
2. Perkelkite grojimo galvutę vėliau (pvz., 4 s), apsukite, pastumkite ar praeikite rodinį iki kitos padėties ir vėl spustelėkite {{ui:Raktas kamerai}}.
3. Pridėkite kiek norite raktų, tada spustelėkite {{ui:Groti}}.

Kamera sklandžiai praeina pro kiekvieną raktą ir prasideda bei baigiasi ramybės būsenoje.

:::tip
Jau turite [scenas](topic:scenes)? {{ui:Pagal scenas}} sukuria kameros kelią iš jų: ji sustoja ties kiekviena scena, tada pereina prie kitos. Jei laiko juostoje nėra jokių raktų, {{ui:Atvaizduoti vaizdo įrašą…}} tai padaro pati, todėl vaizdo įrašui su apžiūra pakanka dviejų ar daugiau scenų.
:::

## Grupės ar komponento perkėlimas

1. Pasirinkite grupę ar komponentą (judėti gali tik visos grupės ir komponentai; pirmiausia [sukurkite grupę](topic:groups-components)).
2. Ties 0 s spustelėkite {{ui:Pasirinktas raktas}}.
3. Perkelkite grojimo galvutę vėliau, [perkelkite, pasukite ar keiskite mastelį](topic:move-copy) grupę ten, kur ji turi būti, ir vėl spustelėkite {{ui:Pasirinktas raktas}}.

Tarp raktų ji slysta, sukasi ir didėja. Pasukimai eina trumpiausiu keliu.

**Automatinis raktas** sutaupo 3 žingsnio spustelėjimą: kol {{ui:Automatinis raktas}} įjungtas, pasirinkta grupė ar komponentas, kurį perkeliate, pasukate ar keičiate mastelį, pats gauna raktą grojimo galvutės vietoje (o pirmą kartą – raktą 0 s toje vietoje, kur jis buvo).

:::note
Animuotos grupės perkėlimas be rakto galioja tik tol, kol juda grojimo galvutė: kitą kartą paleidus ar slinkus grojimo galvutę, ji grįžta ten, kur ją nustato jos raktai. Būsenos juostoje tai nurodoma. Norėdami tai išsaugoti, paspauskite {{ui:Pasirinktas raktas}}.
:::

## Raktų keitimas

- **Pasirinkite raktą** spustelėdami jo rombą: grojimo galvutė nueina į jį.
- **Perkelkite raktą** vilkdami jo rombą palei eilutę arba su {{key:Left}} ir {{key:Right}} (vienas kadras; su {{key:Shift}} – dešimt).
- **Ištrinkite** su {{ui:Naikinti raktą}} (pasirinktą raktą arba visus raktus grojimo galvutės vietoje) arba {{key:Delete}} ant pasirinkto rombo.
- **Kaip pereina toliau** – pasirinktam raktui: {{ui:Lyginti}} (kreivė per aplinkinius raktus), {{ui:Pastovus}} (tiesi linija vienodu greičiu), {{ui:Lėtas įėjimas ir išėjimas}} (sustoja ties šiuo raktu) arba {{ui:Laikyti}} (lieka vietoje iki kito rakto).
- **Ilgis (s)** nustato, kiek ilga animacija; raktas, įrašytas už pabaigos, ją pailgina. Norėdami ją sutrumpinti, pirmiausia perkelkite arba ištrinkite raktus už naujos pabaigos.
- **×** grupės eilutėje sustabdo jos animavimą.

Laiko juosta turi savo {{ui:Anuliuoti}} ir {{ui:Perdaryti}}: modelio anuliavimas ({{key:Mod+Z}}) keičia modelį, o ne raktus. Animacija įrašoma į `.modelcraft` failą. Uždarius laiko juostą, judančios grupės grąžinamos į pirmąją padėtį.

## Vaizdo įrašo atvaizdavimas

1. Spustelėkite {{ui:Atvaizduoti vaizdo įrašą}} laiko juostoje (arba {{ui:Eksportuoti}} › {{ui:Atvaizduoti vaizdo įrašą…}}).
2. Pasirinkite {{ui:Dydis}}, {{ui:Kadrų dažnis}}, {{ui:Kiekvieno kadro kokybė}} ir {{ui:Failas}}.
3. Spustelėkite {{ui:Atvaizduoti vaizdo įrašą}}. Kiekvienas kadras rodomas, kai jis sukuriamas, kartu su likusiu laiku.
4. Baigus spustelėkite {{ui:Įrašyti vaizdo įrašą}}.

{{ui:Stabdyti}} (arba {{key:Esc}}) baigia anksčiau; {{ui:Įrašyti vaizdo įrašą}} tada išsaugo jau sukurtus kadrus kaip trumpesnį vaizdo įrašą.

Dangus, saulė, medžiagos, lempos ir ryškumas yra tokie, kokie nustatyti {{ui:Atvaizduoti paveikslėlį…}}: pirmiausia nustatykite juos ten, patikrindami nejudantį vaizdą. Kiekvienas kadras atvaizduojamas šiame kompiuteryje; nieko neįkeliama.

| Nustatymas | Ką daro |
|---|---|
| {{ui:Dydis}} | 480p, 720p HD, 1080p Full HD arba paties rodinio forma (iki 1920 pikselių pločio) |
| {{ui:Kadrų dažnis}} | 24, 25, 30 arba 60 kadrų per sekundę. Dvigubai daugiau kadrų užtrunka dvigubai ilgiau |
| {{ui:Kiekvieno kadro kokybė}} | {{ui:Greitas}} (4 perėjimai), {{ui:Juodraštis}} (16) arba {{ui:Geras}} (64): daugiau perėjimų duoda sklandesnius šešėlius ir kraštus |
| {{ui:Failas}} | {{ui:WebM vaizdo įrašas}}, {{ui:MP4 vaizdo įrašas (H.264)}} ten, kur naršyklė gali jį įrašyti, arba {{ui:PNG paveikslėliai, po vieną kiekvienam kadrui (ZIP)}} vaizdo redaktoriams (ir naršyklėms be vaizdo koduotuvo) |

:::tip
10 sekundžių vaizdo įrašas, 30 kadrų per sekundę, yra 301 kadras. Pirmiausia išbandykite {{ui:Greitas}} 480p, kad patikrintumėte judesį, tada atvaizduokite su {{ui:Juodraštis}} arba {{ui:Geras}} didesniu dydžiu.
:::

WebM atkuriamas naršyklėse ir VLC, o vaizdo redaktoriai jį konvertuoja. {{ui:MP4 vaizdo įrašas (H.264)}} siūlomas ten, kur naršyklė gali jį įrašyti. {{ui:Atvaizduoti vaizdo įrašą}} naudoja greitąjį atvaizdavimo variklį; norėdami kiekvieną kadrą atvaizduoti kelio sekimu, tame pačiame lange pasirinkite {{ui:Pridėti šią animaciją į eilę}}: kadrai atvaizduojami [atvaizdavimo eilėje](topic:render#the-render-queue), kuriai reikia WebGPU.

:::firefox safari
Vaizdo įrašo atvaizdavimui reikia naršyklės, kuri pati koduoja vaizdą (WebCodecs): naujausios Chrome, Edge, Firefox ir Safari 17 tai daro. Be jos pasirinkite {{ui:PNG paveikslėliai, po vieną kiekvienam kadrui (ZIP)}}.
:::

## Verta žinoti

- Judėti gali tik visos grupės ir komponentai. Paviršiai, briaunos, saulės laikas ir stilius kol kas laikui bėgant nekinta.
- {{ui:Eksportuoti animaciją}} skiltyje [Scenos](topic:scenes) vis dar įrašo rodinį taip, kaip jis matomas ekrane, realiuoju laiku; {{ui:Atvaizduoti vaizdo įrašą}} atvaizduoja kiekvieną kadrą su dangumi, šešėliais ir medžiagomis.
