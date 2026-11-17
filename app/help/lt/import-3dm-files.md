---
title: Įkelti .3dm modelį
summary: Importuokite .3dm failą su jo tinkleliais, paviršiais, kreivėmis, blokais, sluoksniais ir spalvomis; iš kur atsiranda trikampiai ir kas praleidžiama.
keywords: 3dm, importuoti, nurbs, daugiapaviršis, brep, paviršiai, atvaizdavimo tinklelis, ištraukimas, kreivės, blokai, sluoksniai, žymės, spalvos, vienetai, perjungimas, migruoti
from: 3cf29879
---

ModelCraft skaito `.3dm` failus savo skaitytuvu, puslapyje. Nieko neįkeliama į serverį, ir failas veikia neprisijungus, kai veikia ir ModelCraft. Failai, išsaugoti 5, 6, 7 ir 8 versijų formatais, buvo išbandyti; senesni (2–4 versijų) turėtų atsidaryti, bet dar nebandyti.

## Importuokite failą

1. Spustelėkite {{ui:Importuoti}} grupėje {{ui:Failas}} (arba įmeskite `.3dm` failą į 3D vaizdą).
2. Pasirinkite failą.

   Būsenos juostoje rašoma „Skaitomas chair.3dm…“, kol skaitoma, o paskui – kas atkeliavo, pavyzdžiui: „Importuota chair.3dm: 14 tinklelių (8330 paviršių), 8 kreivių, 5 blokų vietos, 3 sluoksniai kaip žymės. Paviršiai: 7 paviršiai iš failo išsaugotų tinklelių, 29 suskaidyti CadCraft.“

Visas modelis atkeliauja kaip viena grupė, pavadinta pagal failą, pasirinkta, o vaizdas priartėja prie jos. Vienas {{key:Mod+Z}} viską pašalina, įskaitant žymes.

## Iš kur atsiranda trikampiai

ModelCraft modeliuoja paviršiais ir tinkleliais, todėl kiekvienas failo paviršius atkeliauja kaip [tinklelis](topic:meshes) iš mažų plokščių trikampių. Kiekvienam daugiapaviršio (ir kiekvieno ištraukimo) paviršiui ModelCraft ima šia tvarka:

1. **Failo išsaugotą atvaizdavimo tinklelį.** Dauguma modeliavimo programų išsaugo tinklelį, kurį rodė ekrane kartu su kiekvienu paviršiumi; jei jis yra, ModelCraft naudoja jį tokį, koks yra.
2. **Savo trianguliaciją**, kai faile nėra išsaugoto tinklelio: plokštumos, NURBS paviršiai, sukimo paviršiai (sferos, kūgiai, toroidai, tekinimo formos), ištrauktos kreivės ir ištraukimai (su jų skylėmis ir galiniais dangteliais), apkarpyti pagal savo briaunas. Daugiapaviršio paviršiai dalijasi savo briaunų taškais, todėl uždaras daugiapaviršis atkeliauja kaip uždaras tinklelis. Kreivi plotai dalijami, kol trikampiai atsiduria maždaug 0.15 % objekto dydžio atstumu nuo tikro paviršiaus.
3. **Nieko**, jei paviršius yra tokio tipo, kurio ModelCraft dar nemoka skaityti. Būsenos juostoje rašoma, kiek paviršių ir kokio tipo.

Būsenos juostos dalis „Paviršiai:“ nurodo, kiek paviršių atkeliavo iš išsaugotų tinklelių ir kiek ModelCraft suskaidė. Briaunos viename failo paviršiuje yra minkštos, o tarp dviejų paviršių – aštrios, todėl kreivas paviršius šešėliuojamas sklandžiai.

:::tip
Norėdami kuo tikslesnių formų, išsaugokite failą su atvaizdavimo tinkleliais programoje, kuri jį sukūrė (paprastai tai numatytoji reikšmė; parinktis „išsaugoti mažą“ juos praleidžia).
:::

## Kas atkeliauja

- **Tinkleliai** su jų viršūnių spalvomis ir tekstūrų koordinatėmis.
- **Daugiapaviršiai, paviršiai ir ištraukimai**, kaip aprašyta aukščiau.
- **Kreivės** (linijos, polilinijos, lankai, apskritimai, NURBS kreivės ir iš jų sujungtos kreivės) kaip [briaunos](topic:curves), po vieną briaunų grupę kiekviename sluoksnyje.
- **Blokai** tampa [komponentais](topic:groups-components): kiekviena bloko vieta yra vieno komponento vieta, todėl redaguojant vieną kopiją pasikeičia visos. Blokai blokų viduje išlieka.
- **Sluoksniai** tampa [žymėmis](topic:tags) su visu sluoksnio pavadinimu („Furniture::Chairs“), paslėptomis, kai sluoksnis buvo išjungtas. Kiekvieno objekto vieta turi savo sluoksnio žymę.
- **Spalvos.** Objekto spalva ateina iš to, ką nurodo failas: jo paties spalvos, jo sluoksnio arba jo medžiagos pagrindinės spalvos. Ji tampa jo paviršių dažu.
- **Paslėpti objektai atkeliauja paslėpti**; {{ui:Rodyti visus}} juos parodo.
- **Vienetai:** failas nurodo savo vienetą; modelis atkeliauja tikru dydžiu.

## Kas praleidžiama (ir apie tai pranešama)

Būsenos juostos dalis „Pastabos:“ nurodo viską, kas neatkeliavo, su kiekiu:

- taškus ir taškų debesis, tekstą, teksto taškus, matmenis, nuorodas, brūkšniuotes, šviesas, pjūvio plokštumas ir išdėstymo detales;
- SubD objektus: pirmiausia paverskite juos tinkleliais arba daugiapaviršiais programoje, kuri sukūrė failą;
- paviršius ant poslinkio paviršių ir kitų paviršių tipų, kurių ModelCraft dar neskaito, kai failas jiems nebuvo išsaugojęs tinklelio;
- blokus, susietus iš kitų failų (skaitomas tik importuojamas failas);
- ištraukimus su įstrižais (suplakamais) galais, kurie atkeliauja su statmenais galais.

Medžiagų tekstūros, atvaizdavimo nustatymai, pavadinti vaizdai, grupės ir naudotojo tekstas nenuskaitomi; medžiaga suteikia tik pagrindinę spalvą.

## Ribos

Failai iki 300 MB. Sugadintas failas parodo, kas negerai, ir nieko nepridės; vienas objektas, kurio nepavyksta nuskaityti, praleidžiamas ir suskaičiuojamas, o likusieji įkeliami.
