---
title: Kas naujo 0.8 ir 0.8.1 versijose
summary: Atvaizdavimo variklio pasirinkimas su failais kitoms programoms, laisvos formos NURBS paviršiai su išmatuotu tolygumu, scena, kurią aprašote savo asistentui, medžiaga iš vienos nuotraukos, eskizo nuotrauka ant žemės, įrengtos patalpos, įstrižiniai pjūviai 3D spausdinimui ir spausdinimo patikra Problemų skydelyje.
keywords: kas naujo, what's new, išleidimo pastabos, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, atvaizdavimo variklis, variklis, atidaryti kitoje programoje, usd, gltf, unreal, priedo variklis, nurbs, paviršiai, loft, sweep, tolygumas, g0, g1, g2, zebra, step, iges, aprašyti sceną, scena, orai, paros laikas, metų laikas, asistentas, medžiaga iš nuotraukos, nuotrauka, eskizo nuotrauka, įrengti, įrengti patalpą, įstrižas pjūvis, padalijimas, spausdinimo patikra, problemos, savybių lentelė, lempos, kalbos, įvesties įrenginiai, įrankių juostų eilutės, dwg, live
from: e4989b17
---

Tai, kas pasikeitė ModelCraft 0.8 (2026-11-01) ir 0.8.1 (2026-11-02) versijose, palyginti su 0.7. Dialogas {{ui:Atvaizduoti paveikslėlį…}} dabar gali siųsti sceną kitai programai, skydelis {{ui:Paviršiai}} kuria lygius laisvos formos paviršius, o prijungtas asistentas gali nustatyti visą sceną vienu sakiniu.

## Naujovės

### Atvaizdavimas

- **Variklio pasirinkimas.** Dialoge {{ui:Atvaizduoti paveikslėlį…}} virš lauko **Režimas** yra sąrašas **Variklis**. Mūsų du savieji varikliai, Fast ir Path tracer, yra numatytieji ir veikia visur. Kiti pasirinkimai išsaugo sceną kaip paketą (modelį kaip USD failą ir nustatymų failą su tiksliomis medžiagų reikšmėmis, įjungtomis lempomis, saule, dangumi, ekspozicija ir kamera), kad būtų galima perkelti į kitą programą. Kitos programos nupiešta nuotrauka nurodo, kuri programa ir kokia versija ją sukūrė. Žr. [Pasirinkite, kuri programa piešia paveikslėlį](topic:render-engines).
- **Atidaryti kitoje programoje.** Sąraše **Variklis** galima išsaugoti sceną kaip USD failą, glTF failą (`.glb`) arba Unreal projekto aplanką (`.zip`) naršyklėje ir CadCraft Studio. Studio programoje dar galima paleisti usdview arba kompiuterio programą, skirtą failui atidaryti. Žr. [Atidarykite sceną kitoje programoje](topic:render-open-in).
- **Siųsti į žaidimų variklį iš Studio.** Studio įrašo sceną į Unreal Engine projektą ir kiekvieno siuntimo metu ją atnaujina, tik viena kryptimi. Jūsų paties pakeitimai laikomi sluoksnyje, kurio CadCraft niekada nerašo. Žr. [Siųskite sceną į žaidimų variklį](topic:render-unreal).
- **Varikliai iš priedų.** Priedas gali pridėti variklį į sąrašą. Priedas, parašytas JavaScript kalba, piešia naršyklėje ir Studio programoje; tas, kuris paleidžia kitą programą, Studio programoje reikalauja jūsų sutikimo. Žr. [Paveikslėlį nupieškite su kita programa](topic:render-other-program) ir [Pridėkite atvaizdavimo variklį su priedu](topic:render-engine-addons).
- **Aprašykite sceną.** Pasakykite prijungtam asistentui „prieblanda, smulkus lietus, rudeniniai medžiai, žmonės aikštėje“, ir ModelCraft ją sukonfigūruoja vienu žingsniu: saulė perkeliama pagal datą ir laiką, kad šešėliai sektų, keičiasi dangus, atsiranda šlapi paviršiai, o medžiai ir žmonės įdedami kaip tikri objektai, pažymėti žymomis, kurias galima paslėpti, perkelti ar ištrinti. Paros laikas, data ar metų laikas, taip pat orai (giedra, debesuota, rūkas, smulkus lietus, lietus, audra) veikia ir atskirai, o vėlesnė užklausa keičia tą pačią sceną. Rūkas matomas aukštos kokybės paveikslėlyje grafikos plokštėje; kiti varikliai rodo dangų, šviesą ir šlapius paviršius. Lietus nepiešiamas krentančių brūkšnių pavidalu.

### Medžiagos

- **Medžiaga iš vienos nuotraukos.** Duokite ModelCraft paviršiaus nuotrauką (sieną, grindis, akmenį), ir ji sukuria plytelių medžiagą: nuotraukos apšvietimas išlyginamas, kraštai sujungiami, o spalvų žemėlapis, šiurkštumo žemėlapis ir normalių žemėlapis apskaičiuojami iš paveikslėlio. Tai paprastas vaizdo apdorojimas jūsų paties nuotraukoje, be apmokyto modelio. Šiurkštumas yra įvertis. Paprasta, kvadratinė, tiesiai priešais nufotografuota nuotrauka duoda geriausią plytelę; stiprus raštas, pavyzdžiui, plytos, gali rodyti švelnų šešėlį ten, kur sujungimas susimaišo.

### Paviršiai

- **Laisvos formos paviršiai.** Skydelis {{ui:Paviršiai}} kuria NURBS kreives ir neapkarpytus paviršius: kreives per taškus, loft, ruled, extrude, revolve, sweep išilgai vieno ar dviejų bėgelių, paviršius iš kreivių tinklo, lopus iš keturių kraštinių, match ir blend. Kiekvienas bendras kraštas matuojamas kaip G0, G1 arba G2 (tarpas, kampas, kreivumo šuolis) tiksliuose paviršiuose; kraštas, prastesnis nei prašėte, rodomas Problemų skydelyje su taisymu **Suderinti**. Zebros juostos ir kreivumo spalvos piešiamos iš tikslių paviršių. STEP ir IGES failai išsiunčiami ir įkeliami. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).

### Vietovė ir patalpos

- **Eskizo nuotrauka ant žemės.** {{ui:Failas}} › {{ui:Importuoti eskizo nuotrauką…}} paverčia telefono nuotrauką, padarytą iš ranka nupiešto eskizo, briaunomis ant žemės jūsų nurodytu mastelių: viena grupė, su žyma kiekvienai rašiklio spalvai. Popierius surandamas ir ištiesinamas jūsų kompiuteryje, ir niekas niekur neišsiunčiama. Žr. [Modeliavimas ant situacijos plano](topic:site-plan).
- **Įrengti patalpą.** Pasirinkite grindis ir naudokite {{ui:Tvarkymas}} › {{ui:Įrengti patalpą…}}. Miegamojo, svetainės, valgomojo, virtuvės, vonios ar biuro baldai išdėstomi pagal taisykles, prie sienų ir laisvai nuo durų bei langų, vienoje grupėje, kurią galite pašalinti vienu žingsniu. Tai numatytasis išdėstymas, kurį jūs peržiūrite, o ne projektas. Žr. [Pradinė biblioteka](topic:starter).

### 3D spausdinimas

- **Įstrižiniai pjūviai.** Padalijimas spausdinimui gali pasvirti pjūvius iki 60 laipsnių, todėl dalims atsiranda daugiau klijavimo ploto. Jungtys statomos statmenai pjūviui. Žr. [Padalinkite modelį spausdinimui](topic:print-split).
- **Spausdinimo patikra Problemų skydelyje.** 3D spausdinimo patikros rezultatai rodomi Problemų skydelyje su žymekliais ant modelio, o **Taisyti** juos ištaiso iš ten. Žr. [Atramos, sienelių storis, tuštumos ir taisymas](topic:print-tools).

### Visose programose

- **Kalbos.** Pagalba ir programos pateikiamos 54 kalbomis. Dešimt iš jų naujos: lietuvių, latvių, bosnių, maratių, telugu, albanų, afrikaansų, filipiniečių, svahili ir uzbekų. Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol jas perskaitys gimtoji kalba, o pagalbos temos gali likti anglų kalba.
- **Įvesties įrenginiai.** Jutiklinė sritis, rašiklis, 3D pelė, žaidimų valdiklis ir MIDI valdikliai gali valdyti programas – visas arba vieną.
- **Įrankių juostų eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › Įrankių juostų eilutės nustato Wrap (kaip anksčiau), 2 eilutes arba 1 eilutę. Juosta, kuri netelpa, slenka į šonus, o ne atima vietą brėžiniui. Wrap lieka numatytasis.
- **Savybių lentelė.** ModelCraft lempų laukuose naudojama bendra lentelė: ji turi sutraukiamas kategorijas, pavadinimų ir reikšmių stulpelius ir tankį Kompaktiškas. Įvesta aritmetika, pavyzdžiui `2*450`, ir toliau veikia.
- **Problemos.** Problemų skydelis (įspėjimo mygtukas programos juostoje) yra bendras visoms programoms. ModelCraft jame yra spausdinimo patikra ir paviršių tolygumo įspėjimai.
- **Live.** Live TeamWork sesija rodo, kas kur yra. Žr. [Modeliuokite kartu su Live TeamWork](topic:work-live).
- **Priedai.** Priedai gali pridėti atvaizdavimo variklių, kaip minėta aukščiau.
- **Prijunkite savo DI.** Įrankių sutartis ir aštuonių programų patikros praeina; iš viso yra 454 įrankiai. Vieno spustelėjimo prijungimas Studio programoje, talpinama jungtis naršyklės asistentams, jūsų paties raktas Studio programoje ir paskelbtas paketas dar nežadami. Programose nėra jokio savo DI. Žr. [Naudokite ModelCraft su DI asistentais](topic:use-with-ai-assistants).

## Ištaisyta 0.8.1 versijoje

- **DWG klasių skyrius.** DWG failo klasių skyrius buvo skaitomas kaip netinkamo tipo, todėl importuojant failas galėjo sugesti. Dabar jis skaitomas teisingai – ModelCraft ir kitose programose, kurios skaito DWG.
- **Planšetės stačiu ekranu.** Laisvas tinklelio aukštis atitenka darbo sričiai, o lapo išdėstymas įsijungia, kai plotis yra 760 pikselių ar mažesnis. ModelCraft stilių lape taip pat yra šis pakeitimas.
- **Kalba Studio programoje.** CadCraft Studio ir supakuoti leidimai gali keisti kalbą veikiant; anksčiau jie buvo tik anglų kalba. Dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.

## Dar nėra šioje versijoje

- **Nepasirašytas kodu.** Windows gali rodyti SmartScreen: pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje spustelėkite dešiniuoju pelės klavišu ir pasirinkite {{ui:Atidaryti}}. Parduotuvių versijos sustabdytos, o iPad ir iPhone versija 0.8.1 neperkurta.
- Kitos programos piešimas be atvaizdavimo variklio priedo, panoraminės ar stereo kameros ir dangaus paveikslėlis per kitą programą bei įskiepis, atveriantis Unreal sceną, dar nėra. Failai įrašomi; įskiepis neišleistas ir Unreal programoje neišbandytas.
- Laisvos formos paviršiai: G3 ir A klasė nematuojami ir neskelbiami, o apkarpymas ir tūriniai kūnai bus vėliau.
- Kitų programų paveikslėliai nėra tokie patys pikselis po pikselio kaip mūsiškiai: sutampa tik kamera, saulė, lempos ir ekspozicija.
- Kalbos keitimo Studio programoje taisymas 0.8.1 versijoje dar neišbandytas visose platformose.

Visa kita – [Dar nesukurta](topic:not-built-yet). Ankstesnei versijai žr. [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
