---
title: Modeliavimas ant situacijos plano iš DWG arba DXF
summary: Įkelkite CAD situacijos ar aukšto planą kaip linijas ant žemės, atsakykite į vienetų klausimą ir perbrėžkite jį į paviršius bei mases.
keywords: situacijos planas, dwg, dxf, cad, importas, eskizas, eskizo nuotrauka, ranka piešta nuotrauka, servetėlės eskizas, nuotrauka, popierius, pieštuko spalvos, dinaminiai blokai, matomumo būsenos, tekstas, brūkšniavimas, splainas, elipsė, 3d paviršius, perbrėžimas, aukšto planas, sklypas, nuosavybės riba, vienetai, pagrindas, kontekstas
from: 3415dc96
---

ModelCraft gali įkelti 2D CAD brėžinio, situacijos plano ar aukšto plano linijas ir padėti jas ant žemės, kad galėtumėte modeliuoti jų viršuje.

## Brėžinio importas

1. Spustelėkite {{ui:Importuoti}} grupėje {{ui:Failas}} (arba įmeskite failą į 3D vaizdą).
2. Pasirinkite `.dwg` arba `.dxf` failą.

   Didelis DWG užtrunka: būsenos juostoje rodoma „Skaitomas plan.dwg…“, kol jis įkeliamas.

3. Jei brėžinys nenurodo savo vienetų, dialogo langas pavadinimu „Brėžinio vienetai“ klausia: „Koks yra vienas brėžinio vienetas?“ Pasirinkite {{ui:Coliai}}, {{ui:Pėdos}}, {{ui:Milimetrai}} arba {{ui:Metrai}}. Dauguma JAV situacijos planų braižomi pėdomis, architektūriniai planai – coliais, o metriniai planai – milimetrais.

   Brėžinys atkeliauja kaip briaunų grupė ant žemės, pasirinkta, o vaizdas priartėja prie jos. Būsenos juostoje nurodoma, kiek briaunų atkeliavo, pavyzdžiui: „Importuota site.dwg: 1697 briaunos ant žemės, grupėje. Suskaidykite ją, kad galėtumėte piešti tiesiai ant jos.“

## Kas įkeliama

- Linijos, polilinijos (įskaitant jų lankus), apskritimai ir lankai bei blokai su visu turiniu – tik iš **modelio erdvės**. Kreivės tampa trumpomis tiesiomis atkarpomis.
- Linijos, polilinijos, lankai, apskritimai, elipsės ir splainai nusileidžia plokščiai ant žemės kaip briaunos.
- **Užpildymai** tampa paviršiais ant žemės, su savo salelėmis kaip skylėmis, todėl užbrūkšniuotą plotą galite iš karto stumti–traukti.
- **3D paviršiai** ir kietųjų kūnų užpildai tampa paviršiais; 3D paviršiai išlaiko savo aukščius.
- **Tekstas** (vienos eilutės tekstas, kelių eilučių tekstas ir atributų reikšmės) nubraižomas kaip briaunos paprastu vienos linijos šriftu, tuo pačiu aukščiu, kampu ir lygiavimu, kaip tekstas. Jo šriftas nėra brėžinio šriftas, todėl žodžiai gali būti šiek tiek ilgesni ar trumpesni. Simboliai, kuriems šriftas neturi formos, nubraižomi kaip maži kvadratėliai ir suskaičiuojami.
- **Matmenys** nubraižomi taip, kaip rodo brėžinys (jų linijos, rodyklių galai ir tekstas – kaip briaunos ir paviršiai).
- **Dinaminiai blokai** atkeliauja taip, kaip rodo brėžinys: kiekvienas įdėtas blokas su matomumo būsena, kurioje jis buvo įrašytas, ir tik tos būsenos linijos. Būsenos juostoje jie išvardijami su rodomomis būsenomis ir kitomis kiekvieno būsenomis, pavyzdžiui: „Receptacle rodoma kaip Duplex ×38, GFI ×7 (būsenos: Duplex, GFI)“. ModelCraft būsenų nekeičia.
- **3D kietieji kūnai, sritys ir kūnai** (brėžinio ACIS duomenys) atkeliauja kaip savos grupės: uždaras kietas kūnas kaip kietasis kūnas, sritis ar atvira kūno dalis kaip paviršiai. Plokšti paviršiai atkeliauja vientisi; kreivi paviršiai (cilindrai, kūgiai, sferos, toroidai, paprasti splaininiai paviršiai) – kaip maži trikampiai su švelniomis briaunomis tarp jų, todėl matosi tik paties kieto kūno briaunos. Paviršius kitokio tipo paviršiuje praleidžiamas ir įrašomas sąraše: „Dar nenubraižyta (3D kietieji kūnai): …“.
- Neimportuojama: taškai, lentelės, daugiasluoksnės nuorodos, paveikslėliai ir kiti objektų tipai. Būsenos juostoje jie išvardijami pagal tipą, pavyzdžiui: „Neimportuota: 12 POINT.“ Viskas maketo (popieriaus erdvėje) taip pat praleidžiama, be sąrašo.
- Sluoksniai neišsaugomi: visos linijos atkeliauja vienodos.

Jei brėžinys toli nuo savo pradžios taško (pavyzdžiui, valstybinės plokštumos koordinatės), jis vis tiek įkeliamas, bet gali atsidurti toli nuo ModelCraft pradžios taško. Brėžiniai, nutolę daugiau nei 10 000 km nuo savo pradžios taško, atmetami: pirmiausia CAD programoje perkelkite brėžinį arčiau 0,0.

## Perbrėžimas į paviršius

Importuotos linijos retai savaime tvarkingai susijungia į paviršius. Yra du būdai dirbti:

**Palikite planą kaip pagrindą (rekomenduojama)**

1. Palikite planą kaip atskirą grupę.
2. Pieškite savo pastatą viršuje su {{ui:Stačiakampis}} ir {{ui:Linija}}, prisegdami prie plano kampų („Endpoint“) ir briaunų („On edge“).
3. Pastumkite–patraukite savo paviršius aukštyn. Planas lieka nepaliestas apačioje, o visą grupę vėliau galite ištrinti vienu spustelėjimu.

Prisegimas veikia tarp grupių: galite prisegti prie plano kampų, neatidarydami jo.

**Piešimas ant paties plano linijų**

1. Pasirinkite plano grupę ir spustelėkite {{ui:Suskaidyti}}. Jos linijos tampa laisvomis briaunomis.
2. Ten, kur uždaras kontūras turėtų būti paviršius, nubrėžkite liniją per bet kurią jo briauną su {{ui:Linija}}, nuo kampo iki kampo. Kai kontūras uždaras ir plokščias, paviršius paprastai užsipildo. Jei ne, ieškokite tarpo ar persidengimo kontūre ir nubrėžkite per jį.
3. Pastumkite–patraukite jį.

Tai geriausiai veikia švariame plane. Sudėtingame topografiniame plane greičiau perbrėžti viršuje.

## Problemos

- „Tai dvejetainis DXF. Įrašykite jį kaip ASCII DXF ir bandykite dar kartą.“ Iš CAD programos įrašykite DXF iš naujo kaip ASCII (tekstą).
- „…neturi linijų, lankų ar apskritimų modelio erdvėje, kad būtų įkelta.“ Brėžinys greičiausiai visas yra maketuose arba sudarytas tik iš teksto ir užbrūkšniavimų.
- „Šis brėžinys negali būti nuskaitytas (…). Jis gali būti sugadintas arba įrašytas DWG versija, kurios skaitytuvas nepalaiko…“ Skliaustuose nurodoma priežastis, pavyzdžiui, „DWG versija AC1009 nepalaikoma“. Iš CAD programos įrašykite jį kaip DXF arba kaip DWG nuo AutoCAD 2000 iki 2018.
- Planas netinkamo dydžio: pasirinkote neteisingą vienetą. Anuliuokite ({{key:Mod+Z}}) ir importuokite iš naujo arba [pakeiskite grupės mastelį](topic:rotate-scale) teisingu koeficientu (12 tarp pėdų ir coliių, 25.4 tarp coliių ir milimetrų).

Kad horizontales paverstumėte žeme, kurią galite formuoti, žr. [Reljefas](topic:terrain).

## Iš ranka piešto eskizo nuotraukos

**Failas › Importuoti eskizo nuotrauką…** priima ant popieriaus padarytą eskizo nuotrauką (JPEG, PNG arba TIFF; tiesiai iš telefono tinka) ir sukuria tokio pat tipo briaunas ant žemės. Nurodykite, koks popierius yra (arba leiskite jį surasti, laikant lapą A4), ir eskizo mastelį, pavyzdžiui, 1 : 100. Popieriaus kraštas surandamas ir nuotrauka ištiesinama, rašalas perbrėžiamas į linijas ir lankus, o kiekviena pieštuko spalva (juoda, raudona, mėlyna, žalia) tampa atskira grupe su žyme (**Eskizas juodas**, **Eskizas raudonas**, …), visos sudėtos į vieną grupę, pavadintą pagal nuotrauką. Tai vienas anuliavimo žingsnis, ir viskas vyksta šiame kompiuteryje: niekur nieko nesiunčiama.

Jei popieriaus krašto nerandama, visa nuotrauka laikoma lapu, o būsenos eilutėje tai nurodoma: išmatuokite ką nors, ką žinote, ir pakeiskite grupės mastelį, jei ji neteisinga. Perbrėžkite linijas į paviršius, kaip aprašyta aukščiau.
