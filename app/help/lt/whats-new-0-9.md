---
title: Kas naujo 0.9 versijoje (ankstesnė)
summary: Spausdinimo etapas su mūsų pjaustykle ir siuntimas per USB, Klipper, OctoPrint ir PrusaLink, dervos pjaustymas ir failų formatų priedai, medžiagų srautas, skaitmeninio dvynio ir gamyklos aikštelės priedai, NURBS suapvalinimai, sustorinimas ir skenavimo prigavimas, AR vietoje ir dešimt lankų braižymo metodų.
keywords: kas naujo 0.9, ankstesnis leidimas, kas naujo, išleidimo pastabos, keitimų žurnalas, 0.9, spausdinimo etapas, 3d spausdinimas, siųsti į 3D spausdintuvą, pjaustyklė, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, derva, dervos spausdinimas, goo, sl1, ctb, anycubic, ekspozicijos bandymas, medžiagų srautas, skaitmeninis dvynys, gamyklos aikštelė, plc, konvejeris, nurbs, suapvalinimas, sustorinimas, skenavimo prigavimas, ar, vietoje, lankų metodai, vienetai, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, atvaizdavimo variklis, variklis, atidaryti, usd, gltf, unreal, priedo variklis, paviršiai, loft, sweep, tęstinumas, g0, g1, g2, zebra, step, iges, pasakyti scena, scena, oras, paros laikas, sezonas, asistentas, medžiaga iš nuotraukos, nuotrauka, eskizo nuotrauka, apstatyti, apstatyti patalpą, įstrižas pjūvis, padalinti, spausdinimo patikra, problemos, savybių lentelė, lempos, kalbos, įvesties įrenginiai, įrankių juostos eilutės, dwg, tiesioginis
from: 2717d1b1
---

Tai, kas pasikeitė ModelCraft 0.9 versijoje, palyginti su 0.8.1. ModelCraft dabar pasiekia spausdintuvą ir gamyklos aikštelę: galite padėti daiktus ant spausdinimo stalo ir siųsti juos nieko neeksportuodami, pjaustyti filamentui arba derva bei sudaryti medžiagų tvarkymo liniją. Tai CadCraft Studio 0.9 ir jo aštuonios programos; dauguma toliau aprašytų naujų funkcijų yra priedai.

## Nauja

### 3D spausdinimas

- **Spausdinimo etapas.** Spauskite {{ui:Spausdinimo etapas}} įrankių juostoje. Įdėkite bibliotekos elementus į spausdintuvo stalą, sutvarkykite juos, peržiūrėkite pjaustytus sluoksnius ir spauskite {{ui:Siųsti į 3D spausdintuvą}}, be jokio STL eksportavimo. Jis priklauso 3D spausdinimo priedui, kuris įjungtas pagal numatymą ir gali būti pašalintas kaip bet kuris kitas priedas. Žr. [Padėkite daiktus ant spausdinimo stalo ir siųskite spausdintuvui](topic:print-stage).
- **Mūsų pačių gijų pjaustyklė.** {{ui:CadCraft basic (įtrauktas, greičiausias)}} yra pjaustyklė kortelės sąraše **Pjaustyklė**: sienelės, odelės, užpildas, atramos ir apvadinė linija, veikiantys darbininke, kad puslapis lieka naudojamas. {{ui:Peržiūrėti sluoksnius}} su slankikliu **Sluoksnis** rodo sluoksnius prieš siunčiant. Spausdintuvų profiliai, pavyzdžiui, Ender-3 ir Prusa MK4 stiliaus, turi savo pradžios G-kodą.
- **Siuntimas.** Per USB (Chrome arba Edge kompiuteryje, su atvira puslapio kopija) arba į Klipper (Moonraker), OctoPrint ar PrusaLink jūsų tinkle. Niekas nesijungia ir nesiunčia be paspaudimo, o siunčiant pirma klausiama.
- **Kitos pjaustyklės.** Kiri:Moto, PrusaSlicer ir OrcaSlicer yra atskiri priedai, išjungti pagal numatymą; pridėkite juos iš kortelės arba iš {{ui:Parametrai}} › {{ui:Priedai}}. PrusaSlicer ir OrcaSlicer naudoja jūsų įdiegtą kopiją iš CadCraft Studio. Bambu Lab spausdintuvų priedas pjausto su jūsų OrcaSlicer ir jo P2S išankstiniais nustatymais ir reikalauja Studio kompiuteryje.
- **Dervos spausdinimas.** Dervos priedai (išjungti pagal numatymą) sukuria sluoksnių paveikslėlius jūsų spausdintuvo ekranui, su tuščiavidurumu ir ventiliacijos skylėmis, pagrindu ir atramomis, sluoksnių peržiūra, laiku, derva ir kaina. Failų formatų priedai įrašo Elegoo GOO, SL1, Chitubox (CBDDLP ir CTB 2–5) bei Anycubic (PWMX ir PWS). Dervos ekspozicijos bandymas sukuria penkių ekspozicijų kopėčias. Žr. [Pjaustymas derviniam spausdintuvui](topic:resin-printing).
- **Nepakito.** {{ui:Eksportuoti}} › {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}, spausdinimo įrankiai ir Padalinti spausdinimui veikia kaip 0.8 versijoje. Žr. [Paruoškite modelį 3D spausdinimui](topic:print-3d).

### Medžiagų srautas, skaitmeninis dvynys ir gamyklos aikštelė

Tai trys priedai, išjungti tol, kol juos įjungsite {{ui:Parametrai}} › {{ui:Priedai}}, ir kiekvienas turi savo žinyną, kai tik įjungtas.

- **Medžiagų srautas.** Skydelis Medžiagų srautas išdėsto konvejerius, stotis, buferius ir AGV kelius 3D vaizde, paleidžia sėklinį modeliavimą, jį atkuria ir rodo pralaidumą, pristatymo laikus bei eiles; rezultatai įrašomi kaip CSV. Užsakymai gali ateiti iš CSV failo. Robotų ląstelės gali būti patikrintos ir eksportuotos. PLC ryšys turi švelniąjį režimą ir tikrąjį režimą per Modbus TCP, kuris veikia tik CadCraft Studio.
- **Skaitmeninis dvynys.** Skaito medžiagų srauto išdėstymą ir paleidžia švelnųjį PLC su priverstinai įjungiamais gedimais, atsargų bandymais, išdėstymų palyginimu ir medžiagų sąrašu.
- **Gamyklos aikštelė.** Paverčia stotis mašinomis ir ląstelėmis, skaito jas tiesiogiai arba iš imitatoriaus, laiko darbų eilę ir paprastą OEE. Tik skaito: ši versija negali rašyti į mašiną ar PLC.

### Paviršiai, modeliai ir brėžiniai

- **Suapvalinimai, sustorinimas ir logines operacijos su NURBS.** Skydelyje {{ui:Paviršiai}} yra {{ui:Suapvalinimas tarp paviršių}}, {{ui:Suapvalinti kelias briaunas}}, {{ui:Sustorinti į kietąjį kūną}} ir Sąjunga, Atimtis bei Sankirta; kiekviena su išmatuotu nuokrypiu. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).
- **Paviršių prigavimas prie skenavimo.** Pažymėkite nuskenuotą tinklelį ir naudokite {{ui:Prigauti paviršius prie skenavimo}} grupėje **Skenavimas**, tada {{ui:Susiūti paviršius į kietąjį kūną}}. Tai pirmasis prigavimas, o ne pilnas atvirkštinio projektavimo paketas.
- **Tiesioginis ryšys su .3dm modeliavimo programa.** Vienpusis, iš Rhino 8 arba Grasshopper, ir reikalauja, kad CadCraft Studio veiktų tame pačiame kompiuteryje. Žr. [Laikykite .3dm modelį tiesioginiu](topic:live-3dm-link).
- **Modelio žiūrėjimas vietoje.** {{ui:Rodinys vietovėje (AR, telefonas)}} meniu {{ui:Vaizdai}} veikia Android telefone su Chrome. Žr. [Žiūrėkite modelį vietovėje Android telefonu (AR)](topic:ar-on-site).
- **Lankų metodai.** Išskleidžiamasis sąrašas {{ui:Lanko metodai}} siūlo dešimt būdų braižyti lanką, įskaitant {{ui:3 taškai}} ir {{ui:Pradžia, centras, pabaiga}}.
- **Daugiau vienetų.** Svoriai (kg, lb, t, ton) ir temperatūros (laipsniai C, F, K ir R) suprantami ten, kur įvedate reikšmes su vienetais.

## Visose programose

- **Įrankių patarimai.** Mygtukų tekstas, rodomas užvedus pelę, ir nukirstos etiketės yra Bootstrap įrankių patarimai.
- **Uždaromas pradžios patarimas.** Patarimo kortelė tuščioje brėžinio srityje turi mažą uždarymo x. Ji lieka uždaryta, o komandų paletė gali ją vėl parodyti.
- **Slenkamos skirtukų juostos.** Skydelio skirtukų juosta, kuri netelpa, slenka, o ne būna nukirsta.
- **Skirtukų pavadinimai.** Atidarius dokumentą, naršyklės skirtukas prasideda dokumento pavadinimu, po to ModelCraft ir CadCraft. Pirmas ateina taškas, kol dokumentas neįrašytas.
- **Išdėstymas.** {{ui:Parametrai}} › {{ui:Bendra}} › Išdėstymas laiko išdėstymus išskleidžiamajame sąraše, su pasirinkimu naudoti išdėstymą tik šiai programai ir mygtuku atstatyti išdėstymą.
- **Kalbos.** Kalbų sąrašas Parametruose seka kalbų failus, esančius versijoje. Kalbos, kitos nei anglų, yra mašininiai juodraščiai.
- **Tiesioginis ir biblioteka.** Tiesioginė TeamWork sesija rodo tiesioginius žymeklius ir vardus, o bibliotekos kolekcijos suteikia kiekvienai programai numatytąją kolekciją.

## Ištaisyta

- {{ui:Groti}} virsta {{ui:Pristabdyti}}, kai veikia animacija, o {{key:Space}} groja ir pristabdo, kai atidaryta laiko juosta.
- Statinis atvaizdavimas grįžta prie WebGL, kai grafikos plokštė negali paleisti kelio sekiklio. Tiesioginio atvaizdavimo vaizde klaida gali vis dar rodytis; to nepatikrinome Windows kompiuteryje su ta tvarkykle.
- Medžiagų srauto tikrasis režimas vėl prisijungia po to, kai ryšys nutrūko dėl PLC išimčių atsakymų.

## Sąžiningi apribojimai

- Niekas nebuvo atspausdinta realiu spausdintuvu: nei filamentu, nei derva, nei per Bambu Connect. Dervos failus nuskaitė tik pačių CadCraft skaitytuvai.
- Skaitmeninis dvynys ir Gamyklos aikštelė buvo išbandyti tik su imitatoriais ir žinomais atsakymais, be realaus PLC, linijos ar protokolo. Tai patikros priemonės, o ne saugumo patvirtinimas. Fizika apima tik dėžes, iki aštuonių apkrovų.
- Rhino ir Grasshopper ryšys niekada nebuvo paleistas tikrose programose.
- Kalbos, kitos nei anglų, yra mašininiai juodraščiai.

## Ankstesnės: 0.8 ir 0.8.1

Tai, kas pasikeitė ModelCraft 0.8 (2026-11-01) ir 0.8.1 (2026-11-02) versijose, palyginti su 0.7. Dialogas {{ui:Atvaizduoti paveikslėlį…}} dabar gali siųsti sceną kitai programai, skydelis Paviršiai kuria sklandžius laisvos formos paviršius, o prijungtas asistentas gali nustatyti visą sceną vienu sakiniu.

### Nauja

**Atvaizdavimas**

- **Variklio pasirinkimas.** {{ui:Atvaizduoti paveikslėlį…}} turi sąrašą **Variklis** virš **Režimas**. Mūsų du varikliai, Greitas ir Kelio sekiklis, yra numatyti ir veikia visur. Kiti įrašai išsaugo sceną kaip paketą (modelis kaip USD failas, plius nustatymų failas su tiksliomis medžiagų reikšmėmis, įjungtomis lempomis, saule, dangumi, ekspozicija ir kamera), kad galėtumėte ją nešti į kitą programą. Kitos programos nupiešta nuotrauka nurodo, kuri programa ir versija ją sukūrė. Žr. [Pasirinkite, kuri programa piešia paveikslėlį](topic:render-engines).
- **Atidaryti kitoje programoje.** Variklių sąrašas gali išsaugoti sceną kaip USD failą, glTF failą (`.glb`) ar Unreal projekto aplanką (`.zip`), naršyklėje ir CadCraft Studio. Studio gali dar paleisti usdview ar kompiuterio programą failui. Žr. [Atidarykite sceną kitoje programoje](topic:render-open-in).
- **Siųsti į žaidimų variklį iš Studio.** Studio įrašo sceną į Unreal Engine projektą ir kiekvieno siuntimo metu ją atnaujina, tik viena kryptimi. Jūsų redagavimai gyvena sluoksnyje, kurio CadCraft niekada neįrašo. Žr. [Siųskite sceną į žaidimų variklį](topic:render-unreal).
- **Varikliai iš priedų.** Priedas gali pridėti variklį į sąrašą. Vienas, parašytas JavaScript, piešia naršyklėje ir Studio; tas, kuris paleidžia programą, reikalauja jūsų sutikimo Studio. Žr. [Nupieškite paveikslėlį kita programa](topic:render-other-program) ir [Pridėkite atvaizdavimo variklį su priedu](topic:render-engine-addons).
- **Pasakykite scenos.** Pasakykite prijungtam asistentui „sutemos, lengvas lietus, rudeniniai medžiai, žmonės aikštėje“, ir ModelCraft ją nustato vienu žingsniu: saulė pasislenka pagal datą ir laiką, kad šešėliai sektų, dangus pasikeičia, atsiranda šlapi paviršiai, o medžiai ir žmonės pastatomi kaip tikri objektai ant žymų, kurias galite paslėpti, perkelti ar ištrinti. Paros laikas, data ar sezonas, taip pat oras (giedra, debesuota, rūkas, lengvas lietus, lietus, audra) veikia ir atskirai, o vėlesnis prašymas pakeičia tą pačią sceną. Rūkas rodomas aukštos kokybės paveikslėlyje grafikos plokštėje; kiti varikliai rodo dangų, šviesą ir šlapius paviršius. Lietus nepiešiamas kaip krentančios linijos.

**Medžiagos**

- **Medžiaga iš vienos nuotraukos.** Duokite ModelCraft paviršiaus nuotrauką (sieną, grindis, akmenį), ir ji sukurs išklotinę medžiagą: apšvietimas per nuotrauką išlyginamas, kraštai suderinami, o spalvų žemėlapis, šiurkštumo žemėlapis ir normalių žemėlapis apskaičiuojami iš paveikslėlio. Tai paprastas vaizdo apdorojimas jūsų paveikslėlyje, be apmokyto modelio. Šiurkštumas yra įvertis. Paprasta, kvadratinė, tiesi nuotrauka duoda geriausią plytelę; ryškus raštas, pavyzdžiui, plytos, gali parodyti švelnų šešėlį ten, kur sujungimas sumaišytas.

**Paviršiai**

- **Laisvos formos paviršiai.** Skydelis {{ui:Paviršiai}} kuria NURBS kreives ir neapkirptus paviršius: kreives per taškus, loft, linijinius, ištrauktus, apsuktus, tempimus išilgai vieno ar dviejų bėgių, paviršius iš kreivių tinklo, lopus iš keturių briaunų, suderinimą ir susiliejimą. Kiekviena bendra briauna išmatuojama kaip G0, G1 ar G2 (tarpas, kampas, kreivumo šuolis) tiksliuose paviršiuose, o briauna, blogesnė nei prašėte, atsiranda skydelyje Problemos su pataisymu **Suderinti**. Zebros dryžiai ir kreivumo spalvos piešiami iš tiksliųjų paviršių. STEP ir IGES failai išeina ir įeina. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).

**Vietovė ir patalpos**

- **Eskizo nuotrauka ant žemės.** {{ui:Failas}} › {{ui:Importuoti eskizo nuotrauką…}} paverčia telefono nuotrauką, padarytą iš rankinio eskizo, kraštais ant žemės nurodytu mastelių: viena grupė, su žyma kiekvienai pieštuko spalvai. Popierius surandamas ir ištiesinamas jūsų kompiuteryje, ir niekur nieko nesiunčiama. Žr. [Modeliavimas ant situacijos plano](topic:site-plan).
- **Apstatyti patalpą.** Pažymėkite grindis ir naudokite {{ui:Tvarkymas}} › {{ui:Įrengti patalpą…}}. Miegamojo, svetainės, valgomojo, virtuvės, vonios ar biuro baldai išdėstomi pagal taisykles, prie sienų ir be kliūčių durims bei langams, vienoje grupėje, kurią galite pašalinti vienu žingsniu. Tai numatytasis išdėstymas, kurį turite peržiūrėti; tai ne projektas. Žr. [Pradinė biblioteka](topic:starter).

**3D spausdinimas**

- **Įstrižos pjūviai.** Padalinti spausdinimui gali įstrižai pjauti iki 60 laipsnių, todėl gabalai turi daugiau klijavimo ploto. Jungtys stovi statmenai pjūviui. Žr. [Padalinkite modelį spausdinimui](topic:print-split).
- **Spausdinimo patikra Problemose.** 3D spausdinimo patikros rezultatai rodomi skydelyje Problemos su žymėmis ant modelio, o Taisyti juos ištaiso iš ten. Žr. [Atramos, sienelių storis, tuščiavidurumas ir taisymas](topic:print-tools).

**Visose programose**

- **Kalbos.** Žinynas ir programos pateikiami 54 kalbomis. Dešimt yra naujos: lietuvių, latvių, bosnių, marathi, telugu, albanų, afrikaans, filipiniečių, svahili ir uzbekų. Kalbos, kitos nei anglų, yra mašininiai juodraščiai, kol gimtoji kalba jų neperskaitė, o žinyno temos gali dar būti anglų kalba.
- **Įvesties įrenginiai.** Jutiklinė dalis, rašiklis, 3D pelė, žaidimų valdiklis ir MIDI valdikliai gali valdyti programas, visas arba vieną.
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › Įrankių juostos eilutės nustato Lūžis (kaip anksčiau), 2 eilutės arba 1 eilutė. Juosta, kuri netelpa, slenka į šalis, o ne atima vietą iš brėžinio. Lūžis lieka numatytasis.
- **Savybių lentelė.** ModelCraft lempų laukai naudoja bendrą lentelę: sutraukiamos kategorijos, pavadinimų ir reikšmių stulpeliai bei Kompaktiškas tankis. Įvesti aritmetiniai veiksmai, pavyzdžiui `2*450`, toliau veikia.
- **Problemos.** Skydelis Problemos (įspėjimo mygtukas programos juostoje) bendras visoms programoms. ModelCraft jame yra spausdinimo patikra ir paviršių tęstinumo įspėjimai.
- **Tiesioginis.** Tiesioginės TeamWork sesijos metu matyti, kas kur yra. Žr. [Modeliuokite kartu su Tiesioginiu TeamWork](topic:work-live).
- **Priedai.** Priedai gali pridėti atvaizdavimo variklių, kaip minėta aukščiau.
- **Prijunkite savo DI.** Įrankių sutartis ir aštuonių programų patikros praėjo, iš viso su 454 įrankiais. Vieno paspaudimo prijungimas Studio viduje, hostinamas jungtis naršyklės asistentams, jūsų pačių raktas Studio viduje ir paskelbtas paketas dar nėra pažadėti. Programose nėra jokio savo DI. Žr. [Naudokite ModelCraft su DI asistentais](topic:use-with-ai-assistants).

### Ištaisyta 0.8.1 versijoje

- **DWG klasių skyrius.** DWG failo klasių skyrius buvo nuskaitomas kaip neteisingas tipas, dėl to importuojant failas galėjo sugesti. Dabar jis nuskaitomas teisingai ModelCraft ir kitose DWG skaitančiose programose.
- **Planšetės stačiai.** Laisvas tinklelio aukštis atitenka drobei, o lapo išdėstymas prasideda, kai plotis yra 760 pikselių ar mažesnis. ModelCraft stilių lapas taip pat turi šį pakeitimą.
- **Kalba Studio.** CadCraft Studio ir supakuoti leidimai gali keisti kalbą veikiant; anksčiau buvo tik anglų. Tai dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.

### Dar neįtraukta šioje versijoje

- **Nepasirašytas kodas.** Windows gali rodyti SmartScreen: pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje dešiniuoju pelės klavišu spauskite ir pasirinkite {{ui:Atidaryti}}. Store versijos sustabdytos, o iPad ir iPhone versija 0.8.1 neperkurta.
- Kita programa piešia paveikslėlį be atvaizdavimo variklio priedo, panoraminių ar stereo kamerų ir dangaus paveikslėlio per kitą programą dar nėra; Unreal etapą atidarantis įskiepis taip pat dar nėra. Failai įrašomi; įskiepis nepaskelbtas ir nebuvo paleistas Unreal.
- Laisvos formos paviršiai: G3 ir klasė A nėra matuojami ar teigiami, o apkirtimas ir kietieji kūnai bus vėliau.
- Nuotraukos iš kitų programų nėra tokios pat pikselis po pikselio kaip mūsų: sutampa tik kamera, saulė, lempos ir ekspozicija.
- 0.8.1 kalbos keitimo Studio pataisa nėra išbandyta visose platformose.

Viskas kita yra [Dar nepadaryta](topic:not-built-yet). Ankstesniam leidimui žr. [Kas naujo 0.7](topic:whats-new-0-7).
