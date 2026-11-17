---
title: Mazgai: kurkite modelį jungdami
summary: Junkite skaičius į taškus, taškus į kreives, kreives į paviršius. Pakeitus skaičių, viskas po jo perstatoma. Kiekvienas mazgas yra ir CraftScript eilutė, o grafas įrašomas faile.
keywords: mazgai, mazgų redaktorius, vizualinis programavimas, parametrinis, grafas, laidai, jungtys, laisvoji forma, freeform, nurbs, loft, ištraukti, sukti, apskritimas, kreivė, paviršius, serija, intervalas, atsitiktinis, sąrašas, scenarijus, craftscript, grasshopper
from: 9c8e254f
---

**Mazgų redaktorius** kuria geometriją jungdamas dėžutes. Kiekviena dėžutė (mazgas) atlieka vieną mažą darbą: sukuria skaičių, tašką, apskritimą, lofo paviršių. Rezultatą vieno mazgo įvedate į kito įvestį, o modelis seka paskui, kai pakeičiate skaičių pradžioje.

Atidarykite jį iš dešiniojo skydelio: {{ui:Mazgai}} › {{ui:Mazgai…}}. Failas, kuriame jau yra grafas, jį atidaro pats. Tai langas virš 3D vaizdo: vilkite jo antraštės juostą, kad perkeltumėte, ir kampą, kad pakeistumėte dydį.

## Jungimas

1. Pasirinkite mazgą iš sąrašo kairėje (įveskite į paieškos laukelį, kad susiaurintumėte; <kbd>Enter</kbd> prideda pirmą atitikimą). Jis atsiranda kanvos viduryje.
2. Vilkite nuo apvalaus **išvesties** taško vieno mazgo dešinėje iki apvalaus **įvesties** taško kito mazgo kairėje. Taškas tampa žalias, kai tinka, ir raudonas, kai netinka; užvedus žymeklį ant jo, matoma priežastis.
3. Įvestis be prijungimo rodo langelį įvestai reikšmei. Įveskite skaičių ir paspauskite <kbd>Tab</kbd>: rezultatas perskaičiuojamas.
4. Mažas apskritimas mazgo antraštės juostoje yra jo **akis**. Mazgas su įjungta akimi piešiamas 3D vaizde: kreivės – linijomis, paviršiai – šešėliuoti, taškai – taškais.

Vilkite mazgą už antraštės juostos. Vilkite foną, kad slinktumėte, sukite ratuką, kad keistumėte mastelį. <kbd>Delete</kbd> pašalina pažymėtą mazgą. {{ui:Sutvarkyti}} išdėsto mazgus stulpeliais, {{ui:Pritaikyti}} visus sutalpina į rodinį, {{ui:Anuliuoti}} ir {{ui:Perdaryti}} žingsniuoja per jūsų pakeitimus.

## Tipai ir vienetai

Jungtys turi tipą: skaičius, taip/ne, taškas, vektorius, kreivė, paviršius, tinklas, kietasis kūnas arba „geometrija“ bet kuriam iš jų. Taškas gali tiekti vektoriaus įvestį ir atvirkščiai. Skaičiai turi vienetą: **ilgis** matuojamas milimetrais, o **kampas** – laipsniais. Ilgis negali tiekti kampo, o ilgis, padaugintas iš ilgio (plotas), atmetamas, todėl neteisingas laidas sustabdomas jį sujungiant.

Kvadratinis taškas yra **sąrašas**. Kai sąrašas patenka į vienos reikšmės įvestį, mazgas paleidžiamas kiekvienam elementui atskirai, o jo rezultatas tampa sąrašu. Trumpesnis sąrašas kartoja savo paskutinį elementą. Pavyzdžiui, **Serija** aukščių, paduota į **Perkelti**, sukuria kopijų krūvą.

## Kietieji kūnai ir Bulio operacijos kaip mazgai

Grupė **Kietieji kūnai** sukuria uždarus kūnus iš tų pačių tikslių paviršių kaip ir Paviršių skydelyje: **Dėžės kietasis kūnas**, **Cilindro kietasis kūnas** ir **Sferos kietasis kūnas** (dydžiai mm), **Sujungti**, **Atimti** ir **Susikirtimas** (antrasis kietasis kūnas paimamas iš pirmojo; tolerancija yra tai, kiek gali nukrypti kietųjų kūnų variklio trikampiai nuo tikslių paviršių), **Suapvalinimas tarp paviršių** (paviršiai pagal jų numerį kietajame kūne, 1 – pirmasis; spindulys ir, jei didesnis už 0, spindulys gale), **Kietojo kūno tūris** (mm³) ir **Kietasis kūnas į tinklą** (norint jį pamatyti arba įrašyti). Kietasis kūnas turi savo jungties tipą: taško ar skaičiaus negalima prijungti prie kietojo kūno įvesties, ir taškas lieka raudonas. Bulio ir suapvalinimo mazgai naudoja programos pačios kietųjų kūnų variklį, kuris įkeliamas, kai redaktorius atidaromas pirmą kartą.

## Klaidos

Mazgas, kuris negali atlikti savo darbo, pasako priežastį po savo pavadinimu raudonai („Spindulys turi būti didesnis už nulį.“), o vėliau einantys mazgai laukia. Tas pats pranešimas yra ir Problemų skydelyje, todėl jį galite rasti ten.

## Kiekvienas mazgas – tai scenarijaus eilutė

Paspauskite {{ui:Scenarijus}}, kad pamatytumėte grafą kaip CraftScript: po vieną eilutę kiekvienam mazgui, pavyzdžiui `n3 = nd_circle(n2, n1, [0 0 1]);`. Redaguokite tekstą ir paspauskite {{ui:Sukurti grafą pagal šį scenarijų}}, kad jis vėl taptų grafu. Tos pačios `nd_` funkcijos veikia ir CraftScript scenarijuje PartCraft, todėl grafą galima paleisti, kartoti ar testuoti ten. Atsitiktiniai skaičiai visada gauna **sėklą**, todėl tas pats grafas duoda tą patį rezultatą kiekviename kompiuteryje.

## Įrašoma kartu su failu

Grafas įrašomas modelio faile. Mazgai sukuria savo kreives, paviršius ir tinklus: jie nekeičia modelio paviršių, kol to neprašote.

## Įrašyti į modelį

Įjunkite mazgo, kuris sukuria paviršių ar tinklą, akį, tada Mazgų lange paspauskite {{ui:Įrašyti į modelį}}. Kiekvienas rodomas paviršius ar tinklas tampa paviršių grupe modelyje, metrais, kurią galima redaguoti kaip bet kurį kitą objektą. Tai vienas anuliavimo žingsnis. Grafas lieka, bet kopija jo nebeseka: pakeiskite skaičių ir įrašykite iš naujo, kad gautumėte naują. Taškai ir kreivės nėra kietieji kūnai, todėl jie praleidžiami, o pranešime nurodoma, kiek jų buvo.
