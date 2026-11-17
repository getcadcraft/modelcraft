---
title: ModelCraft parametrai
summary: Pasirinkite jums žinomą klavišų stilių, padarykite, kad jutiklinė plokštė sukiotų ir slinktų vaizdą be kameros mygtukų, ir įjunkite arba išjunkite prisegimą bei objektų susidūrimus.
keywords: parametrai, nuostatos, valdymas, klavišų stilius, klavišų sąrašas, spartieji klavišai, blender, jutiklinė plokštė, trackpad, touchpad, slinkimas, sukti vaizdą, gniaužimas, prisegimas, prisegti, susidūrimas, persidengimas, susikirtimas, prasiskverbti
from: caf77d5b
---

Atidarykite {{ui:Parametrai}} krumpliaračio piktograma programos juostoje arba spauskite {{key:Mod+,}}. Pirmasis skirtukas, {{ui:ModelCraft}}, talpina šios programos parametrus, o {{ui:Bendra}} – parametrus, kuriuos bendrai naudoja visos CadCraft programos (tema, įrankių juosta, skydeliai). ModelCraft parametrai galioja tik šiai programai: keičiate juos čia, o ši naršyklė juos prisimena.

## Valdymas: kurie klavišai ir pelės mygtukai

Yra du klavišų stiliai. Perjunkite juos čia, su {{ui:Klavišai: stūmimas–traukimas}} / {{ui:Klavišai: Modeliuotojas}} apatiniame dešiniajame vaizdo kampe arba meniu {{ui:Daugiau}} juostos pabaigoje:

- **Stūmimo–traukimo stilius** (pradžioje; raidės kaip stūmimo–traukimo modeliavimo programose, pvz., SketchUp): raidė pasirenka įrankį – {{key:L}} linija, {{key:R}} stačiakampis, {{key:P}} stumti/traukti, {{key:M}} perkelti, {{key:Q}} sukti, {{key:S}} mastelis, {{key:G}} sukurti komponentą. Žr. [Klavišai ir pelės veiksmai](topic:keyboard).
- **Modeliuotojo stilius** (tinklelių modeliavimo programų, pvz., Blender, klavišai): pirmiausia pasirinkite, tada iš karto veikite pasirinkimą. {{key:G}} jį perkelia, {{key:R}} pasuka, o {{key:S}} keičia jo mastelį nuo žymeklio vietos – be pirmojo spustelėjimo. Kol jis juda, {{key:X}}, {{key:Y}} arba {{key:Z}} užfiksuoja raudoną, žalią arba mėlyną ašį, įvestas skaičius nustato atstumą (arba laipsnius, arba koeficientą), o spustelėjimas arba {{key:Enter}} jį padeda; {{key:Esc}} arba dešinysis spustelėjimas grąžina į pradinę vietą. Tada grįžtama į {{ui:Pasirinkti}}.

Klavišų stilius yra tas pats pasirinkimas, kaip ir meniu stilius: {{ui:Modeliuotojas}} klavišų stilius yra {{ui:Modeler}} meniu stilius, ir pasirinkus vieną, pasirenkamas ir kitas. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse). Visas Modeliuotojo sąrašas pateiktas [Klavišai ir pelės veiksmai](topic:keyboard#modeler-keys). Įrankių juostos ir pradžios kortelės patarimai seka jūsų pasirinktą stilių.

## Slinkimas: pelės ratukas arba jutiklinė plokštė

- **Nustatyti automatiškai** (pradžioje): ModelCraft stebi slinkimą. Šoninis arba smulkus slinkimas, kaip jį siunčia jutiklinė plokštė, sukioja vaizdą; visi ratuko žingsneliai priartina.
- **Pelės ratukas**: slinkimas visada priartina link žymeklio.
- **Jutiklinė plokštė**: braukite dviem pirštais, kad sukiotumėte vaizdą; laikykite {{key:Shift}} ir braukite, kad slinktumėte; gniaužkite, kad priartintumėte. Jums niekada nereikia mygtukų {{ui:Sukti vaizdą}}, {{ui:Slinkti}} ar {{ui:Keisti mastelį}}.

Gniaužimo gestas priartina visuose pasirinkimuose. Jei „Nustatyti automatiškai“ neatspėja jūsų pelės ar jutiklinės plokštės, pasirinkite tą, kurią turite.

:::tip
Modeliuotojo stiliuje vaizdą taip pat galite sukti laikydami {{key:Alt}} ir vilkdami, o slinkti – su {{key:Alt+Shift}} ir vilkimu. Tai patogu nešiojamajame kompiuteryje be vidurinio mygtuko.
:::

## Prisegimas

**Prisegti prie taškų, briaunų ir ašių** (pradžioje įjungta) patraukia žymeklį prie galinių taškų, vidurio taškų, briaunų, vedlių bei raudonos, žalios ir mėlynos ašių – žr. [Išvedimas](topic:inference). Išjunkite, kai norite laisvai padėti ką nors šalia kitos geometrijos, kad jis nešokinėtų. Paviršiai, žemė ir ašių užfiksavimai veikia ir išjungus prisegimą.

Mygtukas {{ui:Prisegimas}} apatiniame dešiniajame vaizdo kampe daro tą patį šio seanso darbui (jis taip pat įrašomas). Modeliuotojo stiliuje {{key:Shift+Tab}} jį perjungia.

## Kietieji kūnai sustoja, kai liečiasi

**Sustabdyti kietuosius kūnus, kai jie liečiasi** (pradžioje įjungta) neleidžia sienai būti vilkiamai per kitą sieną. Su {{ui:Perkelti}} (taip pat su {{key:G}} ir įklijavimu-tada-perkėlimu su {{key:Mod+D}}) pasirinkimas slysta iki kito kieto kūno ir sustoja jį liesdamas; su {{ui:Stumti/traukti}} paviršius sustoja, kai susitinka su kitu kietu kūnu. Būti ant kažko ir slysti išilgai jo yra leidžiama – stabdomas tik įsiskverbimas į vidų. Objektai, kurie jau persidengia pradedant, vis dar gali būti atitraukti.

Norėdami tyčia perstumti ką nors per kitą, spustelėkite {{ui:Susidūrimas}} apatiniame dešiniajame kampe (arba išjunkite šį parametrą), atlikite perkėlimą ir spustelėkite dar kartą.

:::note
Susidūrimai tikrinami perkeliant ir stumiant/traukiant. {{ui:Sukti}} ir {{ui:Mastelis}} jų dar netikrina, o laisva geometrija, kuri liečiasi, vis dar susijungia, kaip visada: atskirus objektus laikykite [grupėse](topic:groups-components), kad jie liktų atskiri.
:::

## 3D spausdintuvo stalas

Jūsų spausdintuvo stalo dydis: {{ui:Nenustatyta}} (pradžioje), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 arba 300 × 300 × 400 mm. Pasirinkite dydį, artimiausią jūsų spausdintuvo spausdinimo tūriui. [Tikrinimas 3D spausdinimui](topic:print-3d) tada praneša, kai modelis didesnis už stalą; su {{ui:Nenustatyta}} dydis netikrinamas.

## Sukimas ir slinkimas

**Sukti apie tai, kas po žymekliu** (pradžioje įjungta): sukimas vyksta aplink modelio dalį po žymekliu, o slinkimas išlaiko tą tašką po žymekliu; virš tuščios erdvės abu naudoja vaizdo centrą. Išjunkite, kad visada suktumėte aplink vaizdo centrą. **Sukimo greitis** ir **Slinkimo greitis** svyruoja nuo 0.25× iki 3× (1× yra pradinė reikšmė) ir taikomi pelei, jutiklinei plokštei, jutikliniam ekranui ir rodyklių klavišams. Žr. [Sukimas, slinkimas ir mastelis](topic:orbit-pan-zoom).

## Kampo indikatorius

Kas rodoma 3D vaizdo kampe: **Vaizdo kubas** (pradžioje; viršutiniame dešiniajame kampe – spustelėkite paviršių, briauną ar kampą, kad žiūrėtumėte iš ten; vilkite jį, kad suktumėte; vilkite jo kompaso žiedą, kad pasuktumėte modelį), **Ašies piktograma** (mažas X, Y, Z žymeklis apatiniame kairiajame kampe, kuris sukasi kartu su vaizdu: X raudona, Y žalia, Z mėlyna) arba **Nėra**. Žr. [Vaizdo kubas](topic:view-cube).
