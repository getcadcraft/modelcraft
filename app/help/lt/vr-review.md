---
title: Modelio peržiūra VR akiniuose
summary: Vaikščiokite po modelį natūraliu dydžiu VR akiniuose: šokinėkite, sukitės, matuokite, perpjaukite, dėkite problemas su paveikslėliu, žiūrėkite kaip stalviršio modelį ir susitikite su kitais gyvosios sesijos dalyviais.
keywords: vr, virtuali realybė, akiniai, webxr, xr, įtraukiantis, quest, oculus, vive, index, pico, vaikščiojimas, perėjimas, teleportacija, projekto peržiūra, peržiūra, matuoti, pjūvis, pjauti, problema, problemos, bcf, stalviršis, mastelio modelis, buvimas, avatarai, gyvai, kartu
from: fa2f591a
---

{{ui:Peržiūrėti VR akiniais}} perkelia jus į modelį su VR akiniais, natūraliu dydžiu. Atsidursite ten, kur yra vaizdo kamera, ant grindų po ja, žiūrėdami ta pačia kryptimi. Niekas neįkeliama: akiniuose rodoma tai, ką naršyklė piešia šiame kompiuteryje (arba pačių akinių naršyklėje).

## Ko jums reikia

- Akiniai, kuriuos naršyklė gali valdyti (WebXR): savarankiškų akinių pačių naršyklė arba Chrome ar Edge kompiuteryje su prijungtais akiniais.
- ModelCraft atidarytas saugiame puslapyje (https), kaip ir šioje svetainėje.

Kai akinių nėra, {{ui:Peržiūrėti VR akiniais}} būna pilkas ir nurodo priežastį.

## Paleidimas

1. Nustatykite vaizdą, nuo kurio norite pradėti: kambaryje arba lauke, žiūrint į pastatą.
2. Spustelėkite {{ui:Vaizdai}} grupėje {{ui:Kamera}}, tada {{ui:Peržiūrėti VR akiniais}}.
3. Užsidėkite akinius.

Meniu yra ant kairės rankos nugarėlės. Nukreipkite į jį dešiniuoju valdikliu ir paspauskite gaiduką, kad pasirinktumėte mygtuką. (Turint tik vieną ranką, meniu plaukioja priešais tą vietą, kur pradėjote.)

## Kaip tai atrodo

Akiniai modelį rodo [gyvojo vaizdo](topic:live-view) išvaizda: paviršiams suteiktos išvaizdos ir medžiagos, dangus ir saulė pagal modelio vietą ir datą su jos šešėliu, lempos, išbarstyti augalai ir akmenys bei šviesa, atsispindinti nuo sienų ir grindų (skaičiuojama šiame kompiuteryje, kol žiūrite aplink, ir seka jus judant). Ryškumą ir vaizdo transformaciją (ACES ar AgX) lemia tos, kurios naudojamos [Atvaizduoti nuotrauką](topic:render). Kiek jis piešia, priklauso nuo to, ką turi akinių naršyklė, kaip ir kompiuteryje; aplinkinis užtemdymas (ambient occlusion), atspindžiai ir švytėjimas lieka kompiuteryje.

## Judėjimas

- **Šuolis:** {{ui:Perkelti}} režime nukreipkite į grindis ir paspauskite gaiduką; nusileisite ten. Arba stumkite valdymo lazdelę pirmyn, kad nukreiptumėte, ir paleiskite, kad šoktumėte. Nusileisti galima tik ant grindų ir žemės (paviršių, nukreiptų aukštyn), niekada ant sienos.
- **Sukimasis:** stumkite lazdelę į kairę ar dešinę: kiekvieną kartą pasisukate 30°.
- **Ėjimas:** savo žaidimo zonoje tiesiog vaikščiokite.

## Matavimas

Pasirinkite {{ui:Matuoti}}, tada paspauskite gaiduką ant dviejų taškų. Atstumas rodomas tarp jų, modelio vienetais. Taškas šalia kampo prisitraukia prie kampo.

## Perpjovimas

Pasirinkite {{ui:Pjūvis}} ir paspauskite gaiduką ant paviršiaus:

- ant sienos (ar bet ko, kas nėra grindys): viskas tarp jūsų ir to paviršiaus nukerpama, kad matytumėte vidų. Tai geriausiai veikia iš lauko arba per kambarį;
- ant grindų, iš viršaus: plano pjūvis 1.2 m virš tų grindų, todėl sienos rodo savo apatinę dalį.

{{ui:Valyti}} pašalina pjūvį ir matavimus. Jei pradedant pjūvio plokštuma kerta modelį vaizde, akiniai pradeda su ja.

## Problemos įdėjimas

Pasirinkite {{ui:Problema}} ir paspauskite gaiduką ten, kur yra problema. Numeruotas smeigtukas ją pažymi, o ModelCraft išsaugo problemą kartu su tuo, ką matėte, ir kur stovėjote. Išėję iš VR, problemos yra dešinėje esančiame sąraše {{ui:Problemos}}:

- akies mygtukas parodo problemą iš tos vietos, kur ji buvo padėta;
- {{ui:Įrašyti kaip BCF}} atsisiunčia visas jas kaip BCF failą, kurį atidaro BIM peržiūros programos (įskaitant kamerą ir paveikslėlį);
- jos taip pat išsaugomos `.modelcraft` faile.

Komentarą problemai pridėkite išėję iš VR, BCF programoje: rašymas akiniuose dar nesukurtas.

## Žiūrėjimas kaip stalviršio modelį

{{ui:Stalviršis}} sumažina modelį, kad tilptų ant stalo priešais jus; vaikščiokite aplink jį arba pasukite lazdele. {{ui:Pilnas dydis}} grąžina jus ten, kur buvote.

## Su kitais, gyvai

[Gyvojoje sesijoje](topic:work-live) visi VR akiniuose mato kitus kaip galvą ir dvi rankas savo spalva, su vardu ir tašku, kur kiekvienas nukreipia. Visi pakeitimai pasiekia jūsų akinius per akimirką. Prie stalo sėdintys žmonės akiniuose dar nerodomi.

## Išėjimas

Pasirinkite {{ui:Išeiti iš VR}} (arba nusiimkite akinius ir baikite ten). Ekrano vaizdas persikelia į vietą, kur buvo jūsų galva.

:::note
Bandyta tik su akinių emuliatoriumi, dar ne su tikrais akiniais. Didelis modelis gali sukelti akinių trikčiojimą: pirmiausia paslėpkite tai, ko nereikia ([slėpti ir izoliuoti](topic:hide-isolate)).
:::
