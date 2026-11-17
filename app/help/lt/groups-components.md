---
title: Grupės ir komponentai
summary: Neleiskite objektams susilieti, redaguokite vieną kopiją, kad pakeistumėte visas, ir naudokite skydelius Struktūra bei Komponentai.
keywords: grupė, komponentas, sukurti grupę, sukurti komponentą, suskaidyti, padaryti unikalų, struktūra, egzemplioriai, kopijos, blokas, įdėtas, redaguoti grupę, dėti
from: 7cb925f3
---

Laisva geometrija ModelCraft programoje susilimpa: linijos, kurios liečiasi, dalija viena kitą, o paviršiai, turintys bendrą briauną, juda kartu. Dėl to piešimas ant paviršių veikia, bet taip pat reiškia, kad dėžė, nubrėžta prie kitos dėžės, susilieja su ja. **Grupės** ir **komponentai** laiko daiktus atskirai.

- **Grupė** apgaubia tam tikrą geometriją, kad ji veiktų kaip vienas objektas. Niekas iš išorės su ja nesusilieja.
- **Komponentas** yra grupė, kurią galima išdėstyti daug kartų. Kiekviena kopija turi tą patį turinį: pakeitus vieną, pasikeičia visos. Komponentus naudokite viskam, kas kartojasi: langams, kolonoms, stalams, medžiams.

## Sukurti grupę arba komponentą

1. Pasirinkite geometriją. Trigubas spustelėjimas ant paviršiaus pasirenka visą susijusį objektą; langu nuvilkta pele pasirenka viską dėžėje.
2. Paspauskite {{key:Shift+G}} grupei arba {{key:G}} komponentui. Taip pat galite spustelėti {{ui:Grupė}} arba {{ui:Komponentas}} įrankių juostos grupėje {{ui:Tvarkymas}}, arba {{ui:Sukurti grupę (Shift+G)}} ar {{ui:Sukurti komponentą (G)}} skydelyje {{ui:Objekto informacija}}.

   Būsenos juostoje rašoma „Sugrupuota kaip Group#1.“ arba „Sukurtas komponentas Component#1.“, naujas objektas pasirenkamas ir atsiranda sąraše {{ui:Struktūra}}.

3. Norėdami pavadinti, įveskite pavadinimą laukelyje {{ui:Pavadinimas}} skydelyje {{ui:Objekto informacija}} ir paspauskite {{key:Enter}} arba spustelėkite kitur.

Pasirinkus paviršių, pasirenkamos ir jo briaunos. Jei nieko nepasirinkta, būsenos juostoje rašoma: „Pirmiausia pasirinkite geometriją (nubrėžkite langą arba trigubai spustelėkite, kad pasirinktumėte visa, kas susiję).“

Galite grupuoti ir grupes: pasirinkite kelias grupes ir paspauskite {{key:Shift+G}}. Sąrašas {{ui:Struktūra}} rodo įdėjimą.

:::note
Klavišų raidės sutampa su SketchUp numatytosiomis: {{key:G}} sukuria komponentą, {{key:Shift+G}} – grupę.
:::

## Redaguoti grupės ar komponento viduje

1. Dukart spustelėkite jį (vaizde arba sąraše {{ui:Struktūra}}), arba pasirinkite ir spustelėkite {{ui:Redagavimas}} skydelyje {{ui:Objekto informacija}}.

   Likusi modelio dalis išblunka, ašys persikelia į grupės savas ašis, o sąrašas {{ui:Struktūra}} rodo „Redaguojama: Modelis › Group#1“. Būsenos juostoje rašoma „Redaguojama Group#1. Esc arba dukart spustelėjus už jos ribų ją uždarys.“

2. Piešite, stumiate, perkeliate ir trinate įprastai. Viskas, ką darote, lieka grupės viduje.
3. Uždarykite: paspauskite {{key:Esc}} (du kartus, jei kas nors pasirinkta), dukart spustelėkite tuščią erdvę arba spustelėkite {{ui:Uždaryti grupę}} sąraše {{ui:Struktūra}}.

Kol komponentas atidarytas, kiekviena jo kopija keičiasi kartu su jumis.

## Išdėstyti daugiau komponento kopijų

- Nukopijuokite jį su {{ui:Perkelti}} ir {{key:Ctrl}} (žr. [Perkėlimas ir kopijavimas](topic:move-copy)). Kiekviena kopija yra dar viena to paties komponento vieta.
- Arba spustelėkite {{ui:Dėti}} šalia jo skydelyje {{ui:Komponentai}}, tada spustelėkite, kur jį dėti. Jo pradžios taškas – žemiausias dėžės, apibrėžiančios pasirinktą objektą kuriant, kampas – atsidurs ten, kur spustelėjote. Tada įrankis grįžta prie {{ui:Pasirinkti}}.

{{ui:Komponentai}} rodo, kiek kopijų išdėstyta („4×“), o sąrašas {{ui:Struktūra}} rodo kopijų skaičių po pavadinimu.

## Perkelti eilutes sąraše {{ui:Struktūra}}

Vilkite eilutę sąraše {{ui:Struktūra}}, kad pakeistumėte, kam ji priklauso. Vaizde nieko nejuda: grupė išlaiko savo vietą modelyje.

- **Į grupę:** numeskite ant grupės eilutės vidurio (eilutė gauna brūkšninį kontūrą). Ji patenka į vidų, į pabaigą.
- **Kita tvarka:** numeskite ant viršutinio arba apatinio eilutės krašto (ten rodoma linija). Ji patenka prieš tą eilutę arba po jos, toje pačioje grupėje kaip ta eilutė, todėl taip ji taip pat gali patekti į grupę pasirinktoje vietoje.
- **Į aukščiausią lygį:** numeskite ant {{ui:Struktūra}} antraštės. Ji patenka į pabaigą.

Kiekvienas numetimas yra vienas žingsnis: {{key:Mod+Z}} grąžina atgal. {{key:Esc}} vilkimo metu nieko nenumeta. Grupė negali patekti į pati save arba į grupę, kurią ji pati turi. Vilkimas išjungtas, kai laukelyje {{ui:Ieškoti pagal pavadinimą}} yra tekstas.

:::touch
Trumpam laikykite pirštą ant eilutės, tada ją vilkite. Greitas perbraukimas slenka sąrašą.
:::

## Padaryti vieną kopiją kitokią

Pasirinkite kopiją ir spustelėkite {{ui:Padaryti unikalų}} skydelyje {{ui:Objekto informacija}} (rodoma, kai komponentas išdėstytas daugiau nei vieną kartą). Ta kopija gauna savo apibrėžimą, pavadintą kaip originalas su nauju numeriu. Redaguokite ją nepaliesdami kitų.

## Paversti grupę komponentu

Pasirinkite grupę ir spustelėkite {{ui:Sukurti komponentą}} skydelyje {{ui:Objekto informacija}}. Ji gauna naują pavadinimą, pavyzdžiui, Component#2, net jei grupę buvote pavadinę; pavadinimą įveskite iš naujo laukelyje {{ui:Pavadinimas}}.

## Suskaidyti

Pasirinkite grupę arba komponentą ir spustelėkite {{ui:Suskaidyti}} (įrankių juostoje arba skydelyje {{ui:Objekto informacija}}). Jo turinys tampa laisva geometrija toje vietoje, kur buvo, ir susilimpa su tuo, prie ko liečiasi. Jame esančios grupės lieka grupėmis.

## Vientisas kūnas ir tūris

Pasirinkus grupę arba komponentą, {{ui:Objekto informacija}} rodo **Vientisas: Taip**, jei jo paviršiai užsidaro be tarpų (kiekviena briauna priklauso lygiai dviem paviršiams) ir jame nėra įdėtų grupių. Tada rodomas ir **tūris**. Dėžė, siena su per ją išpjautu langu ir ištemptas cilindras yra vientisi kūnai; dėžė, kurios viršus ištrintas, – ne.

## Kai paskutinė kopija dingsta

Ištrynus paskutinę komponento kopiją, jis pašalinamas ir iš skydelio {{ui:Komponentai}}. {{key:Mod+Z}} jį grąžina.

## Ką žinoti

- Grupių kopijos, padarytos su {{ui:Perkelti}}, šioje versijoje dalijasi turiniu, kaip ir komponentų kopijos: redaguojant vieną, pasikeičia kitos. Kad padarytumėte vieną nepriklausomą, spustelėkite {{ui:Sukurti komponentą}}, tada {{ui:Padaryti unikalų}}. Žr. [Trikčių šalinimas](topic:troubleshooting#editing-one-group-changed-another).
- Komponentai neišpjauna angų sienose ir neprisijungia prie paviršių, be to, paruoštų komponentų bibliotekos nėra. Kuriate savo arba juos importuojate.
- Importuoti failai atkeliauja kaip grupė. Collada failai išlaiko savo grupes ir komponentus jos viduje.
