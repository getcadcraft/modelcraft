---
title: Kas naujo 0.9 versijoje
summary: Spausdinimo etapas su mūsų pjaustykle ir siuntimu per USB, Klipper, OctoPrint ir PrusaLink, dervos pjaustymas ir failų priedai, medžiagų srautas, skaitmeninio dvynio ir gamybos aikštelės priedai, NURBS suapvalinimai, sustorinimas ir skenavimo pritaikymas, AR vietoje ir dešimt lankų metodų.
keywords: kas naujo, kas naujo 0.9, išleidimo pastabos, pakeitimai, 0.9, spausdinimo etapas, 3d spausdinimas, siųsti į 3d spausdintuvą, pjaustyklė, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, derva, dervos spausdinimas, goo, sl1, ctb, anycubic, ekspozicijos testas, medžiagų srautas, skaitmeninis dvynys, gamybos aikštelė, plc, konvejeris, nurbs, suapvalinimas, sustorinimas, skenavimo pritaikymas, ar, vietoje, lankų metodai, vienetai, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, atvaizdavimo variklis, variklis, atidaryti kitoje programoje, usd, gltf, unreal, priedo variklis, nurbs, paviršiai, apkrova, tęstinumas, g0, g1, g2, zebra, step, iges, pasakyti sceną, scena, oras, paros laikas, sezonas, asistentas, medžiaga iš nuotraukos, nuotrauka, eskizo nuotrauka, įrengti, įrengti patalpą, įstrižas, įstrižas pjūvis, padalyti, spausdinimo patikra, problemos, savybių lentelė, lempos, kalbos, įvesties įrenginiai, įrankių juostų eilutės, dwg, gyvai
from: 169048a2
---

Tai, kas pasikeitė ModelCraft 0.9 versijoje, lyginant su 0.8.1. ModelCraft dabar pasiekia spausdintuvą ir gamybos aikštelę: galite dėti daiktus ant spausdinimo stalo ir siųsti juos neeksportuodami, pjaustyti filamentui ar dervai bei išdėstyti medžiagų tvarkymo liniją. Tai CadCraft Studio 0.9 ir jos aštuonios programos; dauguma naujų funkcijų žemiau yra priedai.

## Naujovės

### 3D spausdinimas

- **Spausdinimo etapas.** Spustelėkite {{ui:Spausdinimo etapas}} įrankių juostoje. Pridėkite bibliotekos daiktus į spausdintuvo stalą, sutvarkykite juos, peržiūrėkite supjaustytus sluoksnius ir paspauskite {{ui:Siųsti į 3D spausdintuvą}}, be jokio STL eksportavimo. Jis priklauso 3D spausdinimo priedui, kuris įjungtas pagal numatytuosius nustatymus ir gali būti pašalintas kaip bet kuris priedas. Žr. [Dėkite daiktus ant spausdinimo stalo ir siųskite juos spausdintuvui](topic:print-stage).
- **Mūsų filamento pjaustyklė.** {{ui:CadCraft basic (įtrauktas, greičiausias)}} yra pjaustyklė kortelės **Pjaustyklė** sąraše: sienelės, apvalkalai, užpildas, atramos ir pagrindas, veikiantys fone, kad puslapis liktų naudojamas. {{ui:Peržiūrėti sluoksnius}} su **Sluoksnis** slankikliu rodo sluoksnius prieš siunčiant. Spausdintuvo profiliai, pavyzdžiui, Ender-3 ir Prusa MK4 stiliai, turi savo pradžios G-kodą.
- **Siuntimas.** Per USB (Chrome ar Edge kompiuteryje, su atvirai palikta puslapiu) arba į Klipper (Moonraker), OctoPrint ar PrusaLink jūsų tinkle. Nieko nesijungia ir nesiunčia be paspaudimo, o siunčiant pirmiausia klausiama.
- **Kitos pjaustyklės.** Kiri:Moto, PrusaSlicer ir OrcaSlicer yra atskiri priedai, pagal numatytuosius nustatymus išjungti; pridėkite juos iš kortelės arba iš {{ui:Parametrai}} › {{ui:Priedai}}. PrusaSlicer ir OrcaSlicer naudoja jūsų įdiegtą kopiją iš CadCraft Studio. Bambu Lab spausdintuvų priedas pjausto su jūsų OrcaSlicer ir jo P2S profiliais ir reikalauja Studio kompiuteryje.
- **Dervos spausdinimas.** Dervos priedai (pagal numatytuosius nustatymus išjungti) kuria sluoksnių paveikslėlius jūsų spausdintuvo ekranui, su išdroskimu ir ventiliacijos skylutėmis, pagrindu ir atramomis, sluoksnių peržiūra bei laiku, derva ir kaina. Failų formatų priedai įrašo Elegoo GOO, SL1, Chitubox (CBDDLP ir CTB 2–5) bei Anycubic (PWMX ir PWS). Dervos ekspozicijos testas sukuria penkių ekspozicijų kopėčias. Žr. [Pjaustykite dervos spausdintuvui](topic:resin-printing).
- **Nepakitę.** {{ui:Eksportuoti}} › {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}, spausdinimo įrankiai ir {{ui:Padalyti spausdinimui}} veikia kaip 0.8 versijoje. Žr. [Paruoškite modelį 3D spausdinimui](topic:print-3d).

### Medžiagų srautas, skaitmeninis dvynys ir gamybos aikštelė

Šie trys yra priedai, neįjungti, kol jų neįjungsite {{ui:Parametrai}} › {{ui:Priedai}}, ir kiekvienas turi savo pagalbą, kai įjungtas.

- **Medžiagų srautas.** Skydelis, pavadintas Medžiagų srautas, išdėsto konvejerius, stotis, buferius ir AGV kelius 3D vaizde, paleidžia sėklinį modeliavimą, jį atkuria ir rodo pralaidumą, tiekimo trukmes ir eiles, o rezultatai išsaugomi kaip CSV. Užsakymai gali ateiti iš CSV failo. Robotų ląstelės gali būti patikrintos ir eksportuotos. PLC ryšys turi švelnųjį ir tikrąjį režimus per Modbus TCP, o tikrasis veikia tik CadCraft Studio.
- **Skaitmeninis dvynys.** Nuskaito Medžiagų srauto išdėstymą ir paleidžia švelnųjį PLC su gedimais, kuriuos galima priverstinai sukelti, sandėlio bandymais, išdėstymų palyginimu ir medžiagų sąrašu.
- **Gamybos aikštelė.** Paverčia stotis mašinomis ir ląstelėmis, nuskaito jas gyvai arba iš imitatoriaus ir laiko darbų eilę bei paprastą OEE. Ji tik skaito: ši versija negali rašyti į mašiną ar PLC.

### Paviršiai, modeliai ir brėžiniai

- **Suapvalinimai, sustorinimas ir logikos operacijos NURBS.** {{ui:Paviršiai}} skydelyje yra {{ui:Suapvalinimas tarp paviršių}}, {{ui:Suapvalinti kelias briaunas}}, {{ui:Sustorinti į kietąjį kūną}} ir Sujungti, Atimti bei Susikirtimas, kiekvienas su išmatuotu nuokrypiu. Žr. [Laisvieji paviršiai (NURBS)](topic:nurbs-surfaces).
- **Pritaikyti paviršius prie skenavimo.** Pasirinkite skenuotą tinklelį ir naudokite {{ui:Pritaikyti paviršius prie skenavimo}} grupėje **Skenavimas**, tada {{ui:Susiūti paviršius į kietąjį kūną}}. Tai pirmasis pritaikymas, o ne pilnas atvirkštinio inžinerijos paketas.
- **Tiesioginis ryšys su .3dm modeliuotoju.** Vienpusis, iš Rhino 8 ar Grasshopper, ir jam reikia CadCraft Studio tame pačiame kompiuteryje. Žr. [Laikyti .3dm modelį gyvą](topic:live-3dm-link).
- **Modelio peržiūra vietoje.** {{ui:Peržiūrėti vietoje (AR, telefonas)}} {{ui:Vaizdai}} meniu veikia Android telefone su Chrome. Žr. [Peržiūrėkite modelį vietoje su Android telefonu (AR)](topic:ar-on-site).
- **Lankų metodai.** Išskleidžiamasis sąrašas {{ui:Lankų metodai}} siūlo dešimt būdų nubrėžti lanką, įskaitant {{ui:3 taškai}} ir {{ui:Pradžia, centras, pabaiga}}.
- **Daugiau vienetų.** Svoriai (kg, lb, t, ton) ir temperatūros (laipsniai C, F, K ir R) suprantami, kur įvedate reikšmes su vienetais.

## Visose programose

- **Pagalbiniai patarimai.** Mygtukų tekstas, rodomas užvedus pelę, ir nukirstos etiketės yra Bootstrap patarimai.
- **Uždaromas pradžios patarimas.** Patarimo kortelė tuščioje brėžinio srityje turi mažą uždarymo x. Ji lieka uždaryta, o komandų paletė gali ją parodyti vėl.
- **Slenkamos skirtukų juostos.** Skydelio skirtukų juosta, kuri netelpa, slenka, o ne nukerpama.
- **Skirtukų pavadinimai.** Atidarius dokumentą, naršyklės skirtukas prasideda dokumento pavadinimu, tada ModelCraft ir CadCraft. Prieš pavadinimą rodomas taškas, kol dokumentas neįrašytas.
- **Išdėstymas.** {{ui:Parametrai}} › {{ui:Bendra}} › Išdėstymas laiko išdėstymus išskleidžiamajame sąraše, su pasirinkimu naudoti išdėstymą tik šiai programai ir mygtuku atstatyti išdėstymą.
- **Kalbos.** Kalbų sąrašas Parametruose seka kalbų failus, esančius kompiliacijoje. Kalbos, išskyrus anglų, yra mašininiai juodraščiai.
- **Gyvai ir biblioteka.** Live TeamWork rodo gyvus žymeklius ir vardus, o bibliotekos kolekcijos suteikia kiekvienai programai numatytąją kolekciją.

## Ištaisyta

- {{ui:Groti}} virsta {{ui:Pristabdyti}}, kai animacija groja, o {{key:Space}} groja ir pristabdo, kai atidaryta laiko juosta.
- Nuotrauka atvaizduojama WebGL, kai grafikos plokštė negali paleisti kelio sekimo variklio. Gyvasis atvaizdavimo vaizdas dar gali rodyti klaidą; tai nebuvo patikrinta Windows kompiuteryje su tuo tvarkyklės.
- Medžiagų srauto tikrasis režimas vėl prisijungia po to, kai ryšys nutrūko dėl PLC išimčių atsakymų.

## Sąžiningos ribos

- Nieko nespausdinta tikru spausdintuvu: nei filamentu, nei derva, nei per Bambu Connect. Dervos failai perskaityti tik CadCraft savo skaitytojais.
- Skaitmeninis dvynys ir Gamybos aikštelė išbandyti tik su imitatoriais ir žinomais atsakymais, be tikro PLC, linijos ar protokolo. Tai patikros priemonės, o ne saugos patvirtinimas. Fizika apima tik dėžes, iki aštuonių apkrovų.
- Rhino ir Grasshopper ryšys dar niekada neveikė tikrose programose.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai.

## Ankstesnė: 0.8 ir 0.8.1

Tai, kas pasikeitė ModelCraft 0.8 (2026-11-01) ir 0.8.1 (2026-11-02) versijose, lyginant su 0.7. Dialogas {{ui:Atvaizduoti nuotrauką…}} dabar gali siųsti sceną kitai programai, {{ui:Paviršiai}} skydelis kuria lygius laisvuosius paviršius, o prijungtas asistentas gali nustatyti visą sceną vienu sakiniu.

### Naujovės

**Atvaizdavimas**

- **Variklio pasirinkimas.** Dialogas {{ui:Atvaizduoti nuotrauką…}} turi sąrašą **Variklis** virš režimo. Mūsų du variklai, Greitas ir Kelio sekiklis, yra numatyti ir veikia visur. Kiti įrašai išsaugo sceną kaip paketą (modelis kaip USD failas, plus nustatymų failas su tiksliomis medžiagų reikšmėmis, įjungtomis lempomis, saule, dangumi, ekspozicija ir kamera), kad ją nuvežtumėte į kitą programą. Kitos programos nupiešta nuotrauka nurodo, kuri programa ir versija ją sukūrė. Žr. [Pasirinkite, kuri programa piešia nuotrauką](topic:render-engines).
- **Atidaryti kitoje programoje.** Variklių sąrašas gali išsaugoti sceną kaip USD failą, glTF failą (`.glb`) ar Unreal projekto aplanką (`.zip`), naršyklėje ir CadCraft Studio. Studio taip pat gali paleisti usdview ar kompiuterio programą failui. Žr. [Atidarykite sceną kitoje programoje](topic:render-open-in).
- **Siųsti į žaidimų variklį iš Studio.** Studio įrašo sceną į Unreal Engine projektą ir kiekvieno siuntimo metu ją atnaujina, tik viena kryptimi. Jūsų pakeitimai gyvena sluoksnyje, kurio CadCraft niekada nerašo. Žr. [Siųskite sceną į žaidimų variklį](topic:render-unreal).
- **Varikliai iš priedų.** Priedas gali pridėti variklį į sąrašą. JavaScript parašytas piešia naršyklėje ir Studio; tas, kuris paleidžia programą, reikalauja jūsų sutikimo Studio. Žr. [Piešti nuotrauką kita programa](topic:render-other-program) ir [Pridėkite atvaizdavimo variklį su priedu](topic:render-engine-addons).
- **Pasakykite sceną.** Pasakykite prijungtam asistentui „saulėlydis, lengvas lietus, rudens medžiai, žmonės aikštėje“, ir ModelCraft nustato ją vienu žingsniu: saulė persikelia į datą ir laiką, kad šešėliai sektų, dangus keičiasi, atsiranda šlapi paviršiai, o medžiai ir žmonės įdedami kaip tikri objektai ant žymų, kurias galima paslėpti, perkelti ar ištrinti. Paros laikas, data ar sezonas ir oras (giedra, apsiniaukę, rūkas, lengvas lietus, lietus, audra) veikia ir patys, o vėlesnė užklausa keičia tą pačią sceną. Rūkas rodomas aukštos kokybės nuotraukoje grafikos plokštėje; kiti varikliai rodo dangų, šviesą ir šlapius paviršius. Lietus nepiešiamas kaip krentančios linijos.

**Medžiagos**

- **Medžiaga iš vienos nuotraukos.** Duokite ModelCraft paviršiaus nuotrauką (sieną, grindis, akmenį), ir ji sukuria plytelių medžiagą: apšvietimas per nuotrauką išlyginamas, kraštai sujungiami, o spalvų, šiurkštumo ir normalių žemėlapiai apskaičiuojami iš paveikslėlio. Tai paprastas vaizdo apdorojimas jūsų paveikslėlyje, be mokyto modelio. Šiurkštumas yra įvertinimas. Paprasta, kvadratinė, tiesi nuotrauka duoda geriausią plytelę; stiprus raštas, pavyzdžiui, plytos, gali parodyti minkštą vaiduoklį ten, kur sujungimas susimaišo.

**Paviršiai**

- **Laisvieji paviršiai.** Skydelis {{ui:Paviršiai}} kuria NURBS kreives ir neapkarpytus paviršius: kreives per taškus, lofting, linijinius, ištraukimą, sukimą, sruogas palei vieną ar dvi bėgius, paviršius iš kreivių tinklo, lopus iš keturių kraštinių, atitikimą ir susiliejimą. Kiekviena bendra kraštinė matuojama kaip G0, G1 ar G2 (tarpas, kampas, kreivumo šuolis) tiksliuose paviršiuose, o kraštinė, blogesnė nei prašėte, pasirodo skydelyje Problemos su pataisa **Atitikti**. Zebros dryžiai ir kreivumo spalvos braižomi iš tikslių paviršių. STEP ir IGES failai išeina ir įeina. Žr. [Laisvieji paviršiai (NURBS)](topic:nurbs-surfaces).

**Vietovė ir patalpos**

- **Eskizo nuotrauka ant žemės.** {{ui:File}} › {{ui:Importuoti eskizo nuotrauką…}} paverčia telefono nuotrauką, padarytą iš rankinio eskizo, į kraštines ant žemės jūsų nurodytu mastelių: viena grupė, su žyma kiekvienai pieštuko spalvai. Lapas randamas ir ištiesinamas jūsų kompiuteryje, o nieko niekur neišsiunčiama. Žr. [Modelis ant situacijos plano](topic:site-plan).
- **Įrengti patalpą.** Pasirinkite grindis ir naudokite {{ui:Tvarkymas}} › {{ui:Įrengti patalpą…}}. Miegamojo, svetainės, valgomojo, virtuvės, vonios ar biuro baldai išdėstomi pagal taisykles, prie sienų ir be durų bei langų, vienoje grupėje, kurią galite pašalinti vienu žingsniu. Tai numatytasis išdėstymas, kurį turite peržiūrėti, o ne projektas. Žr. [Pradinė biblioteka](topic:starter).

**3D spausdinimas**

- **Įstrižos pjūviai.** Padalyti spausdinimui gali nupjauti įstrižai iki 60 laipsnių, o tai suteikia daugiau klijavimo ploto. Jungtys stovi statmenai pjūviui. Žr. [Padalinkite modelį spausdinimui](topic:print-split).
- **Spausdinimo patikra skydelyje Problemos.** 3D spausdinimo patikros rezultatai rodomi skydelyje Problemos su žymėmis ant modelio, o taisymas juos pataiso iš ten. Žr. [Atramos, sienelės storis, ištuštinimas ir taisymas](topic:print-tools).

**Visose programose**

- **Kalbos.** Pagalba ir programos pateikiamos 54 kalbomis. Dešimt yra naujos: lietuvių, latvių, bosnių, marathi, telugu, albanų, afrikaansų, filipiniečių, svahili ir uzbekų. Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol gimtakalbis jų neperskaitė, o pagalbos temos gali būti dar anglų kalba.
- **Įvesties įrenginiai.** Jutiklinė dalelė, rašiklis, 3D pelė, žaidimų valdiklis ir MIDI valdikliai gali valdyti programas – visas ar vieną.
- **Įrankių juostų eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › Įrankių juostų eilutės nustato Vynioti (kaip anksčiau), 2 eilutes ar 1 eilutę. Juosta, kuri netelpa, slenka į šoną, o ne atima vietą iš brėžinio. Vynioti lieka numatytasis.
- **Savybių lentelė.** ModelCraft lempų laukai naudoja bendrą lentelę: sutraukiamos kategorijos, žymės ir reikšmių stulpeliai bei Kompaktiškas tankis. Įvestos aritmetikos, pavyzdžiui, `2*450`, veikimas išlieka.
- **Problemos.** Skydelis Problemos (įspėjimo mygtukas programos juostoje) bendras visoms programoms. ModelCraft jame yra spausdinimo patikra ir paviršių tęstinumo įspėjimai.
- **Gyvai.** Live TeamWork sesija rodo, kas kur yra. Žr. [Modeliuokite kartu su Live TeamWork](topic:work-live).
- **Priedai.** Priedai gali pridėti atvaizdavimo variklių, kaip aukščiau.
- **Prijunkite savo DI.** Įrankių sutartis ir aštuonių programų patikros praeina, iš viso 454 įrankiai. Prisijungimas vienu paspaudimu Studio viduje, talpinamas jungtis naršyklės asistentams, jūsų raktas Studio viduje ir paskelbtas paketas dar neobjektyvūs. Programose nėra jokio DI. Žr. [Naudoti ModelCraft su DI asistentais](topic:use-with-ai-assistants).

### Ištaisyta 0.8.1

- **DWG klasių skyrius.** DWG failo klasių skyrius buvo nuskaitytas kaip klaidingas tipas, dėl ko importuojant failas galėjo sugesti. Dabar jis nuskaitomas teisingai, ModelCraft ir kitose programose, kurios skaito DWG.
- **Planšetės vertikaliai.** Laisva tinklelio aukštis atitenka drobei, o lapo išdėstymas prasideda nuo 760 pikselių pločio ar mažiau. ModelCraft stiliaus lapas taip pat turi šį pakeitimą.
- **Kalba Studio.** CadCraft Studio ir supakuoti leidimai gali keisti kalbą veikiant; anksčiau buvo tik anglų. Tai dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.

### Dar nėra šioje versijoje

- **Nepasirašyta kodu.** Windows gali rodyti SmartScreen: pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje dešiniuoju pelės klavišu spustelėkite ir pasirinkite {{ui:Atidaryti}}. Parduotuvių versijos sulaikytos, o iPad ir iPhone versija nebuvo perkurta 0.8.1 versijai.
- Kita programa piešia nuotrauką be atvaizdavimo variklio priedo, panoraminių ar stereo kamerų ir dangaus paveikslėlio per kitą programą, o įskiepis, kuris atidaro Unreal sceną, dar nėra. Failai įrašomi; įskiepis neišleistas ir nebuvo paleistas Unreal.
- Laisvieji paviršiai: G3 ir A klasė nematuojami ir nežadami; kirpimas ir kietieji kūnai bus vėliau.
- Nuotraukos iš kitų programų nėra tiksliai tokios pačios pikselis po pikselio kaip mūsų: sutampa tik kamera, saulė, lempos ir ekspozicija.
- 0.8.1 kalbos keitimo Studio pataisa nėra išbandyta visose platformose.

Viskas kita yra [Dar nesukurta](topic:not-built-yet). Ankstesnei versijai žr. [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
