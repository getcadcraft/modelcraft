---
title: Gyvasis vaizdas
summary: Langas šalia modelio, rodantis jį realaus laiko vaizdu su saule ir šešėliais, sekantis kiekvieną jūsų pakeitimą; vaikščiokite po jį ir nustatykite paros laiką bei mėnesį.
keywords: bendrinti, panorama, 360, turas, virtualus turas, savarankiška peržiūros priemonė, peržiūros priemonė be ryšio, siųsti klientui, vaizdo įrašas, apžiūros vaizdo įrašas, barstymas, barstyti, žolė, pieva, miškas, uolos, augalai, medžiai, minia, dažyti augalus, gyvasis vaizdas, realus laikas, realiuoju laiku, atvaizdavimas realiuoju laiku, apžiūra, vaikščioti, praeiti, pirmasis asmuo, pristatymas, klientas, antras ekranas, antras langas, monitorius, paros laikas, saulė, sezonas, mėnuo, šešėliai, aplinkinis užtemdymas, atspindžiai, atšokusi šviesa, bendrasis apšvietimas, webgpu, webgl
from: fca3b0d6
---

{{ui:Eksportuoti}} › {{ui:Gyvasis vaizdas}} atidaro programos viršuje skydelį, rodantį modelį realaus laiko vaizdu: dangų ir saulę pagal modelio vietą ir datą, saulės šešėlius, paviršiams priskirtas išvaizdas ir medžiagas, lempas bei nuo sienų ir grindų atšokusią šviesą. Jis seka jūsų veiksmus: pasukus vaizdą, jis taip pat pasisuka, pakeitus modelį, pokytis parodomas po akimirkos. Niekas neįkeliama į internetą.

## Atidarymas

1. Pasirinkite {{ui:Eksportuoti}} › {{ui:Gyvasis vaizdas}}. Skydelis atsidaro apatiniame dešiniajame kampe.
2. Vilkite jo antraštės juostą, kad perkeltumėte, arba tempkite kampą, kad padidintumėte.
3. {{ui:Naujas langas}} perkelia jį į atskirą langą antram ekranui. {{ui:Eksportuoti}} › {{ui:Gyvasis vaizdas naujame lange}} atidaro jį iš karto ten. Jei naršyklė blokuoja iškylančiuosius langus, jis atsidaro kaip skydelis.
4. {{ui:Uždaryti}} jį uždaro.

## Valdikliai

| Valdiklis | Ką daro |
|---|---|
| {{ui:Sekti vaizdą}} | Įjungta: gyvasis vaizdas žiūri ten, kur žiūri ModelCraft vaizdas. Vaikščiojimas jį išjungia |
| {{ui:Vaikščioti}} | Vaikščioti po modelį (žemiau) |
| {{ui:Gravitacija}} | Vaikštant: stovėti ant grindų ir lipti laiptais. Išjungta: skristi |
| {{ui:Laikas}} | Valanda nuo 05:00 iki 21:00. Saulė juda jums vilkant |
| {{ui:Mėnuo}} | Mėnuo (jo 21-oji diena), kad matytumėte saulę žiemą ir vasarą |
| {{ui:Kokybė}} | {{ui:Šiam kompiuteriui}} (ką gauna [jūsų kompiuteris](topic:your-machine)) arba {{ui:Žema}}, {{ui:Vidutinė}} ar {{ui:Aukšta}} |

Apatinėje eilutėje nurodoma, kas piešia vaizdą (WebGPU arba WebGL 2), kokybė ir atšokusi šviesa.

## Vaikščiokite po modelį

1. Pasukite pagrindinį vaizdą į vietą, kurioje norite stovėti, ir pasirinkite {{ui:Vaikščioti}}. Stovite ant grindų, žemiau vaizdo akies taško, 1.6 m aukštyje.
2. Spustelėkite gyvąjį vaizdą, tada naudokite {{key:W}} {{key:A}} {{key:S}} {{key:D}} arba rodyklių klavišus. Laikykite {{key:Shift}}, kad bėgtumėte. Vilkite, kad apsižvalgytumėte.
3. Laiptelius iki 40 cm įveikiate (laiptai); viskas aukščiau yra siena. Sienos sustabdo ir jūs slystate palei jas.
4. Kai {{ui:Gravitacija}} išjungta, skrendate: {{key:E}} – aukštyn, {{key:Q}} – žemyn.
5. {{key:Esc}} sustabdo vaikščiojimą.

## Barstyti augalus, uolas ir žmones

{{ui:Barstymas}} gyvojo vaizdo juostoje atveria barstymo skydelį šalia paveikslo. Barstymo rinkinys išbarsto elementus iš aplinkos bibliotekos (medžiai, krūmai, žolė, gėlės, uolos, žmonės, automobiliai) dalyje modelio. Elementai piešiami tik gyvajame vaizde: jie nėra modelio geometrija, ir pagrindinis vaizdas jų nerodo.

1. **Užpildyti paviršius:** ModelCraft pasirinkite paviršius (arba grupę, pavyzdžiui, reljefą), tada pasirinkite {{ui:Užpildyti pasirinkimą}}. Rinkinys juos padengia.
2. **Dažyti:** pasirinkite {{ui:Dažyti}} ir vilkite per gyvąjį vaizdą. Jei paviršiai pasirinkti, dažai patenka tik ant jų; jei nieko nepasirinkta, dažai patenka ant visko, kas yra po teptuku, įskaitant žemę. {{ui:Teptuko dydis}} nustato teptuką; {{ui:Trintukas}} pašalina nudažytas vietas.
3. Pažymėkite, ką barstyti. Šalia kiekvieno skaičius yra jo svoris: 3 ir 1 reiškia: trys pirmojo už kiekvieną antrojo.

| Valdiklis | Ką daro |
|---|---|
| {{ui:Vienam m²}} | Kiek elementų kiekviename kvadratiniame metre |
| {{ui:Laikytis atstumo (m)}} | Nė vieno elemento arčiau šio atstumo prie kitų objektų ir nė vieno po stogu ar stalu. 0 jį išjungia |
| {{ui:Pasukimas (°)}} | Kiek kiekvienas elementas atsitiktinai pasukamas apie vertikalią ašį |
| {{ui:Stačiausias (°)}} | Jokių elementų ten, kur paviršius statesnis |
| {{ui:Dydis}} | Mažiausias ir didžiausias dydis, kaip elemento paties dydžio koeficientas |
| {{ui:Aukštis nuo, iki (m)}} | Tik tarp šių aukščių (tuščias = bet koks) |
| {{ui:Pasvirti kartu su paviršiumi}} | 0 elementus laiko vertikaliai; 1 – statmenai nuolydžiui |
| {{ui:Sėkla}}, {{ui:Sumaišyti}} | Ta pati sėkla visada duoda tą patį barstymą; {{ui:Sumaišyti}} parenka kitą |

Rinkiniai įrašomi `.modelcraft` faile ir, keičiant modelį, seka paviršius, kuriuos dengia. Daugiausia elementų, kiek gyvasis vaizdas gali nupiešti, nustato [jūsų kompiuterio](topic:your-machine) lygis: 20 000 – {{ui:Tik procesorius}}, 100 000 – {{ui:Grafikos plokštė, pagrindinis}}, milijonas – {{ui:Grafikos plokštė, aukštas}}. Skydelyje nurodoma, kiek elementų išdėstyta iš kiek tankis reikalauja: išdėstoma mažiau, kai pasiekiamas biudžetas arba kai objektai juos atstumia. Elementai arti kameros piešiami kaip patys savimi; tolimi – kaip paprastos formos jų spalvomis.

:::note
Barstomi elementai rodomi gyvajame vaizde (ir jo vaikščiojime, panoramose bei savarankiškoje peržiūros priemonėje). Atvaizduoti paveikslėlį jų dar nepiešia.
:::

## Bendrinti: panoramos, turai, peržiūros priemonė, vaizdo įrašas

{{ui:Bendrinti}} gyvojo vaizdo juostoje kuria failus iš gyvojo vaizdo. Viskas sukuriama šiame kompiuteryje; į internetą nieko neįkeliama.

| Pasirinkimas | Ką gaunate |
|---|---|
| {{ui:360° panorama}} | 360° paveikslėlis iš vietos, kur stovi vaizdas (arba kur vaikštote), kaip ekvirektangulinis PNG, kurį atidaro panoramų žiūryklės ir dauguma nuotraukų svetainių |
| {{ui:Įtraukti šią vietą į turą}}, tada {{ui:Išsaugoti turą}} | Vienas tinklalapis su panorama kiekvienoje vietoje ir rodyklėmis į vietas, kurias kiekviena mato (siena tarp jų paslepia rodyklę) |
| {{ui:Išsaugoti peržiūros priemonę}} | Vienas tinklalapis su modeliu šiame realaus laiko vaizde: jį galima sukti, po jį vaikščioti, pereiti į jo išsaugotas scenas. Jis atidaromas be ryšio naršyklėje su WebGPU arba WebGL 2, iš aplanko, USB laikmenos ar el. laiško, be diegimo ir paskyros, ir iš interneto nieko nekrauna |
| {{ui:Kelio vaizdo įrašas}} | Laiko juostos kameros kelias (arba išsaugotos scenos eilės tvarka) kaip vaizdo įrašas šiame realaus laiko vaizde, gyvojo vaizdo dydžiu: WebM arba MP4, kur naršyklė gali jį sukurti, kitu atveju – sunumeruoti paveikslėliai ZIP archyve |

Panoramos dydis priklauso nuo kokybės: 1024, 2048 arba 4096 pikselių pločio esant žemai, vidutinei ir aukštai kokybei. Peržiūros priemonės failas yra apie 5 MB plius modelis.

:::note
Turas ir peržiūros priemonė skirti rodymui, o ne redagavimui: išsaugoję jie palieka modelį tokį, koks jis buvo.
:::

## Kokybė

| | Žema | Vidutinė | Aukšta |
|---|---|---|---|
| Saulės šešėliai | vienas šešėlių žemėlapis | trys kaskados | keturios kaskados |
| Aplinkinis užtemdymas (kontaktiniai šešėliai) | | ✓ | ✓, smulkesnis |
| Atspindžiai metale | | | ✓ |
| Švytėjimas (kai nustato Atvaizduoti paveikslėlį) | | ✓ | ✓ |
| Išlygintos briaunos | FXAA | per kelis kadrus (TAA) | per kelis kadrus (TAA) |
| Atšokusi šviesa | šiurkšti | smulkesnė | smulkiausia |

{{ui:Šiam kompiuteriui}} parenka žemą kokybę kompiuteryje be tinkamos grafikos plokštės, vidutinę – su integruotu grafikos lustu, aukštą – su atskira grafikos plokšte. Žema kokybė skirta 8 GB nešiojamajam kompiuteriui be grafikos plokštės.

## Atšokusi šviesa

Šviesa, atsimušusi nuo saulėtos sienos ant grindų, ir tamsesnis kambario vidus apskaičiuojami tuo pačiu kelio sekimo varikliu, kuris kuria [atvaizduotus paveikslėlius](topic:render): jis atvaizduoja mažas panoramas taškuose per modelį fone, visuose procesoriaus branduoliuose. Kol jis dirba, apatinėje eilutėje rodoma {{ui:Atšokusi šviesa: 40 %}}; kai jis paruoštas, vaizdas ją perima. Po pakeitimo jis pradedamas iš naujo.

:::note
Tai gyvojo vaizdo apytiksliai skaičiavimai, ne atvaizduotas paveikslėlis: smulkios detalės tarp taškų gauna arti esančių taškų atšokusią šviesą. Baigtam paveikslėliui naudokite [Atvaizduoti paveikslėlį](topic:render).
:::

## Ryškumas ir spalvos

Gyvasis vaizdas naudoja tą patį ryškumą, baltos spalvos balansą, kontrastą ir vaizdo transformaciją (ACES, AgX, filmic arba standartinę) kaip [Atvaizduoti paveikslėlį](topic:render): nustatykite juos ten, ir gyvasis vaizdas seks.

:::note
Naršyklės skiriasi. Ten, kur naršyklė turi WebGPU (Chrome ir Edge Windows, macOS ir ChromeOS, Safari 26), gyvasis vaizdas jį naudoja; kitur (dauguma naršyklių Linux, senesnės Apple sistemos) naudojamas WebGL 2 ir vaizdas atrodo tas pats.
:::
