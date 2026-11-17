---
title: Atvaizduoti modelio paveikslėlį
summary: Sukurkite paveikslėlį, panašų į dienos šviesą: dangų, saulę pagal modelio vietą ir datą, minkštus šešėlius, stiklo ir metalo išvaizdą, tada įrašykite jį kaip PNG.
keywords: atvaizdavimas, išankstinis nustatymas, scenos nustatymas, interjeras, eksterjeras, pjūvio vaizdas, naktis, vienu paspaudimu, atvaizdavimas, kelio sekimas, spindulių sekimas, spindulių trajektorija, globalus apšvietimas, atspindžiai, lūžis, aukšta kokybė, nuotrauka, fotorealistiškas, realistiškas, paveikslėlis, vaizdas, png, nejudantis, dangus, saulė, dienos šviesa, šešėliai, minkšti šešėliai, aplinkos okliuzija, stiklas, metalas, blizgus, medžiagos, ekspozicija, ryškumas, debesuota, prieblanda, studija, pristatymas, rūkas, migla, dūmai, debesis, tūris, šviesos spinduliai, dievo spinduliai, kaustikos, adaptyvus mėginių ėmimas, triukšmas
from: 517ba4d3
---

{{ui:Atvaizduoti paveikslėlį…}} sukuria vaizdo paveikslėlį, panašų į dienos šviesą, o ne į brėžinį: dangų, saulę, kuri stovi ten, kur ją nustato modelio vieta ir data, minkštus šešėlius, šviesą iš viso dangaus, kuri patamsina kampus ir tarpus, ir spalvas, kurios gali atrodyti kaip stiklas, metalas ar blizgūs dažai. Modelis nekeičiamas.

## Atvaizduoti vaizdą

1. Nustatykite vaizdą taip, kaip norite paveikslėlio: pasukite, keiskite mastelį, pasirinkite [sceną](topic:scenes), paslėpkite tai, ko neturi būti. Paveikslėlis naudoja paties vaizdo kamerą.
2. Spustelėkite {{ui:Eksportuoti}} grupėje {{ui:Failas}}, tada {{ui:Atvaizduoti paveikslėlį…}}.
3. Jei nuspaustas {{ui:Scena}} jums netinka, pasirinkite kitą (žr. [Scenų išankstiniai nustatymai](topic:render#scene-presets-a-good-picture-in-one-click)), pasirinkite {{ui:Dydis}}, tada spustelėkite {{ui:Atvaizduoti}}.

   Paveikslėlis pildosi atvaizduojant ir kiekvienu etapu tampa glotnesnis. {{ui:Stabdyti}} (arba {{key:Esc}}) nutraukia anksčiau ir palieka iki tol atvaizduotą paveikslėlį.

4. Spustelėkite {{ui:Įrašyti}}, kad jį atsisiųstumėte (PNG, nebent {{ui:Įrašyti kaip}} nurodo kitaip).

:::tip
Pradėkite nuo {{ui:Juodraštis}} su {{ui:Vaizdo dydis}}, kad patikrintumėte kamerą ir išvaizdą, tada galutiniam paveikslėliui atvaizduokite {{ui:Gera}} arba {{ui:Geriausia}} didesniu dydžiu.
:::

## Scenų išankstiniai nustatymai: geras paveikslėlis vienu paspaudimu

Viršuje dialogo lange yra keturi {{ui:Scena}} mygtukai. Kiekvienas vienu paspaudimu nustato dangų, ryškumą, žemę, briaunų linijas, kokybę ir saulę, todėl prieš pirmąjį paveikslėlį nieko mokytis nereikia. Spustelėkite vieną, tada {{ui:Atvaizduoti}}.

| Scena | Ką nustato | Kam naudoti |
|---|---|---|
| {{ui:Eksterjeras}} | Giedras dangus, paties modelio saulė, žemė įjungta | Pastatas iš išorės |
| {{ui:Interjeras}} | Debesuotas dangus (tolygi šviesa, be ryškių saulės dėmių), pusę pakopos ryškesnis | Vaizdas iš kambario vidaus |
| {{ui:Pjūvio vaizdas}} | Balta studija, be žemės, briaunų linijos greitame atvaizdavime | Modelis, perpjautas pjūviu |
| {{ui:Naktis}} | Saulė nusileidusi (vidurnaktis žiemos viduryje vietovės pusrutulyje), viena pakopa ryškesnis | Šviestuvai apšviečia modelį. Be šviestuvų paveikslėlis tamsus |

- {{ui:Parinkti šiam vaizdui}} parenka už jus: {{ui:Pjūvio vaizdas}}, kai pjūvis įjungtas, {{ui:Interjeras}}, kai kamera yra modelio viduje, kitu atveju {{ui:Eksterjeras}}. Pirmą kartą atidarius dialogą jis pradeda taip pats.
- Visi nustatymai liko žemiau ir gali būti keičiami. Pakeitus bet kurį, nė vienas scenos mygtukas nebelieka nuspaustas, o eilutė po mygtukais sako, kad nustatymai yra jūsų. Spustelėkite sceną dar kartą, kad grąžintumėte jos reikšmes.
- Scena nekeičia variklio, režimo, dydžio, medžiagų, kameros ar šviestuvų.

:::note
Scenos ModelCraft ir BimCraft suteikia tas pačias reikšmes. Galutinis paveikslėlis priklauso nuo jūsų modelio ir vaizdo plokštės.
:::

## Parametrai

| Parametras | Ką daro |
|---|---|
| {{ui:Dydis}} | Vaizdo dydis, dvigubas vaizdo dydis, Full HD, 4K arba kvadratas. Fiksuoti dydžiai palieka vaizdo kamerą ir rodo daugiau ar mažiau šonuose |
| {{ui:Režimas}} | {{ui:Greitas}} arba {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} (žemiau) su savo {{ui:Laiko riba}} |
| {{ui:Kokybė}} | Kiek etapų (arba, aukštos kokybės režime, mėginių) vidurkinama: {{ui:Juodraštis}} 16, {{ui:Gera}} 64, {{ui:Geriausia}} 256. Daugiau etapų duoda glotnesnius šešėlius ir kraštus, bet trunka ilgiau |
| {{ui:Dangaus mėlyna}} | {{ui:Giedras dangus}}, {{ui:Debesuota}} (minkšta šviesa, silpni šešėliai), {{ui:Prieblanda}} (žema, šilta šviesa) arba {{ui:Balta studija}} (paprastas baltas fonas) |
| {{ui:Saulė}} | Saulė ateina iš datos, laiko ir vietos, nustatytų {{ui:Stilius}} › saulė. Pažymėkite {{ui:Šiam paveikslėliui naudoti kitą datą ir laiką}}, kad išbandytumėte kitą laiką nekeisdami modelio stiliaus |
| {{ui:Ryškumas}} | Šviesesnis arba tamsesnis, pakopomis (ekspozicijos pakopomis) |
| {{ui:Modelio pagrindas}} | Žemė, kuri priima šešėlius ir susilieja su horizontu. Išjunkite ją modeliui, kuris kabo ore |
| {{ui:Rodyti briaunas}} | Piešia modelio briaunas plonai virš paveikslėlio, kad atrodytų nubrėžtas |

Kai pasirinktu laiku saulė yra žemiau horizonto, yra naktis: dangus tamsėja, o modelį apšviečia jo [šviestuvai](topic:lights). Dialogas tai nurodo.

Nustatymai įrašomi `.modelcraft` faile, todėl kitas to paties modelio paveikslėlis prasideda ten, kur baigėte.

## Spalvos, atrodančios kaip stiklas ar metalas

Skiltyje {{ui:Medžiagos}} kiekviena ekrane esanti spalva turi išvaizdą: {{ui:Matinė}}, {{ui:Atlasinė}}, {{ui:Blizgi}}, {{ui:Metalas}}, {{ui:Poliruotas metalas}}, {{ui:Stiklas}} arba {{ui:Matinis stiklas}}. {{ui:Nenudažyti paviršiai}} yra paviršiai, neturintys savos spalvos.

Kad langai taptų stiklu, [nudažykite](topic:paint) langų plokštes viena spalva, tada tai spalvai nustatykite {{ui:Stiklas}}. Stiklas leidžia matyti dangų ir tai, kas už jo, nuspalvintą jo spalva, ir atspindi dangų.

:::note
{{ui:Greitas}} režime stiklas ir metalas atspindi dangų, o ne likusį modelį, ir šviesa per stiklą nelūžta. Žemiau esantis režimas {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} atlieka abu.
:::

## Aukšta kokybė

Pasirinkite {{ui:Režimas}} › {{ui:Aukšta kokybė (sekama spindulių trajektorija)}}, kad gautumėte paveikslėlį, kuriame šviesa sekama taip, kaip ją mato kamera:

- šviesa atsimuša tarp paviršių, todėl kambarys, apšviestas per langą ar šviestuvu, yra apšviestas visomis pusėmis, o spalvos nusidažo ant gretimų paviršių;
- stiklas yra tikras stiklas: šviesa per jį lūžta, o jis atspindi modelį;
- metalas ir poliruoti paviršiai atspindi likusį modelį;
- šviesos plokštės šviečia kaip plokštės, su minkštais šešėliais.

Tai daug lėčiau nei {{ui:Greitas}}: kiekvienas etapas iš naujo seka kiekvieno taško šviesą. Paveikslėlis iš pradžių grūdėtas ir valosi, kai susikaupia mėginiai, todėl pradėkite nuo mažo ({{ui:Vaizdo dydis}}, {{ui:Juodraštis}}) ir pasirinkite {{ui:Laiko riba}}: jai pasibaigus, lieka iki tol atvaizduotas paveikslėlis. {{ui:Stabdyti}} jį taip pat palieka. Pirmas etapas laukia, kol naršyklė paruoš spindulių sekiklį.

Kur naršyklė turi WebGPU, spindulių sekiklis yra CadCraft savas ir veikia vaizdo plokštėje; eilutė po paveikslėliu sako {{ui:Sekama spindulių trajektorija vaizdo plokštėje (WebGPU)}}. Po {{ui:Stabdyti}} arba laiko ribos {{ui:Tęsti}} tęsia tą patį paveikslėlį, kol jis gauna visus mėginius; pakeitus nustatymą arba dar kartą paspaudus {{ui:Atvaizduoti}}, pradedama iš naujo. Be WebGPU paveikslėlis sekamas WebGL (eilutė tai nurodo), o {{ui:Tęsti}} nesiūloma.

:::linux
Firefox ir dauguma Chrome nustatymų Linux sistemoje dar neturi WebGPU, todėl aukšta kokybė ten naudoja WebGL.
:::

Šiame režime briaunos nepiešiamos, bibliotekos tekstūros rodo savo spalvą ir šiurkštumą, bet ne reljefą ([medžiaga, sukurta mazgais](topic:shading#in-high-quality-pictures), rodo savo normales ir reljefą), o pjūvis modelyje daromas prieš paveikslėliui prasidedant.

{{ui:Triukšmo mažinimas (pašalina grūdėtumą, likusį po imčių)}} įjungtas pagal numatytuosius nustatymus: kai paveikslėlis baigtas arba sustabdytas, likusį grūdėtumą pašalina šiam tikslui sukurtas neuroninis tinklas (Intel Open Image Denoise paskelbtas tinklas, veikiantis jūsų kompiuteryje: vaizdo plokštėje, o jei jos nėra – procesoriuje). Paveikslėlis su nedaug mėginių išeina švarus; {{ui:Rodyti}} › {{ui:Vaizdas prieš triukšmo mažinimą}} rodo jį taip, kaip buvo atvaizduota.

## Atvaizdavimas vaizde

Darbo sritis {{ui:Atvaizduoti}} paleidžia spindulių sekiklį pačiame vaizde: sukite, redaguokite modelį ar keiskite šviestuvą, ir jis iš karto prasideda iš naujo. {{ui:Sritis}}: nutempkite stačiakampį, ir atvaizduojamas tik jis; {{ui:Visas vaizdas}} grąžina atgal. {{ui:Fokusas}}: spustelėkite, ką reikia padaryti ryškų, ir lauko gylis sufokusuojamas ten. {{ui:Detalė}} nustato, kiek vaizdo taškų atvaizduojama (mažiau – greičiau). {{ui:Pristabdyti}} sustabdo ir tęsia. Jam reikia WebGPU: be jo darbo sritis tai pasako, o {{ui:Eksportuoti}} › {{ui:Atvaizduoti paveikslėlį…}} vis tiek veikia.

## Dangūs ir šviesos profiliai vaizdo plokštėje

Su WebGPU aukšta kokybė turi dar du dangus:

- {{ui:Fizikinis dangus}} apskaičiuoja dienos šviesą pagal saulės aukštį: giliai mėlynas virš galvos, blyški juosta prie horizonto ir saulė, kuri šiltėja ir silpnėja, kai nusileidžia žemai. {{ui:Migla}} keičiasi nuo labai giedros dienos (2) iki miglotos (10).
- {{ui:Dangaus paveikslėlis (HDRI)}} apšviečia modelį tikros vietos panoramos paveikslėliu. {{ui:Pasirinkite paveikslėlį…}} priima ekvirektangulinį `.hdr` arba `.exr` failą; {{ui:Pasukti}} pasuka jį aplink modelį, o {{ui:Paveikslėlio ryškumas}} daro jį ryškesnį arba tamsesnį. Paveikslėlis turi savo saulę, todėl modelio saulė nepridedama. Jis išsaugomas tik tol, kol atidarytas puslapis: iš naujo atidarius, pasirinkite jį dar kartą.

Kiekvienas sąrašo {{ui:Šviestuvai}} šviestuvas gali naudoti gamintojo šviesos profilį: {{ui:IES profilis…}} nuskaito IES (LM-63) failą, ir šviestuvas skleidžia šviesą taip, kaip ją skleidžia tas šviestuvas (siaura lubų šviesa, sienos apšvietimas). Visi šviestuvai su tuo pavadinimu jį naudoja, o šviestuvas išlaiko savo ryškumą. Spustelėkite profilio pavadinimą, kad nustotumėte jį naudoti.

Skaidraus stiklo langai padeda dangaus šviesai patekti į kambarį, todėl patalpų paveikslėliai dangaus šviesoje greičiau išsivalo.

{{ui:Greitas}} režimas ir WebGL spindulių sekiklis rodo {{ui:Fizikinis dangus}} ir {{ui:Dangaus paveikslėlis (HDRI)}} kaip giedrą dangų ir ignoruoja šviesos profilius.

## Kamera

{{ui:Kamera}} nustato paveikslėlį kaip fotografiją:

- {{ui:Ekspozicija}}: palikite {{ui:Ryškumo slankiklis}}, arba pasirinkite {{ui:Kameros parametrai}} ir nustatykite {{ui:Diafragma (f-skaičius)}}, {{ui:Užrakto greitis}} ir {{ui:ISO}}, kaip fotoaparate; šalia jų esanti EV yra įprasta ekspozicijos vertė. f/16 esant 1/100 s ir ISO 100 atitinka saulėtą dieną; tamsesnei scenai reikia platesnės diafragmos, lėtesnio užrakto ar didesnio ISO. Tai veikia visuose režimuose.
- {{ui:Lauko gylis}} išblukina tai, kas yra arčiau ar toliau nei {{ui:Fokusavimo atstumas (m)}}, kaip tai darytų to f-skaičiaus objektyvas (palikite tuščią, kad fokusuotųsi į tai, kas vaizdo viduryje); {{ui:Diafragmos forma}} suteikia nefokusuotiems akcentams apvalią arba lamelėtą formą.
- {{ui:Dviejų taškų perspektyva (vertikalios linijos lieka vertikalios)}} išlygina kamerą ir perstumia paveikslėlį, kaip daro architektūrinis poslinkio (tilt-shift) objektyvas, todėl sienos nepasvyra, kai žiūrite aukštyn ar žemyn į pastatą.
- {{ui:Baltos spalvos balansas}} nustato, kuri šviesos spalva rodoma kaip balta: žemesnė (pavyzdžiui, 3000 K) šiltai šviestuvų šviesai, aukštesnė šešėliui ir debesuotoms dienoms.
- {{ui:Projekcija}}: {{ui:360° panorama}} sukuria 2:1 paveikslėlį viso, kas aplink kamerą, panoramų žiūryklėms; {{ui:360° stereo panorama}} sudeda kairės ir dešinės akies panoramas VR akiniams; {{ui:Kubo žemėlapis (6 paviršiai)}} sukuria šešis kvadratinius vaizdus 3 × 2 tinklelyje. Plotis priklauso nuo {{ui:Dydis}}.

Projekcijai, lauko gyliui, dviejų taškų perspektyvai ir baltos spalvos balansui reikalingas spindulių sekiklis vaizdo plokštėje (WebGPU), todėl jie rodomi tik {{ui:Aukšta kokybė}} režime.

## Paveikslėlio apdaila

{{ui:Vaizdas}} apdoroja aukštos kokybės paveikslėlį kaip fotografiją, o kiekvienas valdiklis iš karto keičia baigtą paveikslėlį, be naujo atvaizdavimo:

- {{ui:Išvaizda (vaizdo transformacija)}}: {{ui:ACES filmic}} (paveikslėlis kaip anksčiau), {{ui:AgX}} (švelnesnis, išlaiko spalvą labai ryškioje šviesoje), {{ui:Filmic}} (švelni filmo kreivė) arba {{ui:Standartinė}} (paprastas; ryški šviesa nukerpama iki baltos).
- {{ui:Kontrastas}} ir {{ui:Šviesių sričių suspaudimas}} (grąžina detales labai ryškiose vietose).
- {{ui:Švytėjimas}} (švelnus spindesys aplink ryškią šviesą), {{ui:Akinimas}} su {{ui:Akinimo spinduliai}} (žvaigždiniai spinduliai nuo ryškiausių taškų) ir {{ui:Vinjetė}} (tamsesni kampai).
- {{ui:Spalvų lentelė (.cube)…}} taiko spalvų apdorojimą iš `.cube` failo su savo {{ui:Spalvų lentelės stiprumas}}; kaip dangaus paveikslėlis, jis išsaugomas tik tol, kol atidarytas puslapis.

## Įrašyti paveikslėlį

Šalia {{ui:Įrašyti}} esantis {{ui:Įrašyti kaip}} pasirenka failą: {{ui:PNG}}, {{ui:JPEG}} arba {{ui:WebP}} dalijimuisi (JPEG ir WebP tik ten, kur naršyklė gali juos įrašyti), o po aukštos kokybės atvaizdavimo vaizdo plokštėje dar:

- {{ui:PNG, 16 bitų}}: apdorotas paveikslėlis su smulkesniais tonų perėjimais, spausdinimui ar tolesniam redagavimui.
- {{ui:EXR, visi sluoksniai (32 bitų slankusis kablelis)}}: paveikslėlis kaip atvaizduota (tiesinė šviesa, be apdorojimo), kiekvienas atvaizdavimo elementas ir šviesų grupė kaip atskiras sluoksnis, skirtas kompozicijos programoms.
- {{ui:Atvaizdavimo failas (.ccrender, vėliau vėl apdoroti)}}: viskas, ko dialogui reikia paveikslėliui vėl sumaišyti ir apdoroti. {{ui:Atidaryti atvaizdavimo failą…}} jį grąžina su mišiniu ir apdorojimu, be atvaizdavimo.

## Šviesų maišymas po atvaizdavimo

Įjunkite {{ui:Šviesų maišymas (pakeiskite kiekvieno šviestuvo spalvą ir ryškumą po atvaizdavimo)}} prieš spausdami {{ui:Atvaizduoti}}. Kai paveikslėlis baigtas (arba sustabdytas), {{ui:Maišyti vaizdą}} išvardija jo šviesas grupėmis: dangų, saulę ir šviestuvus pagal pavadinimą (kiekvienas šviestuvas su tuo pačiu pavadinimu yra viena grupė). Išjunkite grupę, suteikite jai spalvą arba padarykite ją ryškesnę ar tamsesnę, ir paveikslėlis iš karto pasikeis, be naujo atvaizdavimo. {{ui:Įrašyti maišinį}} išsaugo mišinį pavadinimu, kad vėliau galėtumėte jį pasirinkti; {{ui:Kaip atvaizduota}} grąžina paveikslėlį, koks jis buvo sukurtas. {{ui:Įrašyti}} įrašo sumaišytą paveikslėlį.

{{ui:Atvaizdavimo elementai (albedo, normalės, gylis, difuzinė, spekuliarinė, perdavimas, emisija, ID)}} taip pat išsaugo paveikslėlio dalis. {{ui:Rodyti}} perjungia vaizdą į vieną iš jų: paviršių spalvas (albedo), normales, gylį, difuzinę, spekuliarinę ir perduodamą šviesą (tiesioginę ir netiesioginę), tai, kas spinduliuoja, ir dangų, bei spalvą kiekvienam objektui ar medžiagai kaukėms kurti.

Abu šie režimai laiko papildomus sluoksnius vaizdo plokštėje. Dideliais dydžiais vaizdo plokštėje gali nepakakti vietos; dialogas tai nurodo, ir veikia mažesnis dydis.

## Atvaizdavimo eilė

Po aukštos kokybės nustatymo {{ui:Pridėti šį vaizdą į eilę}} skiltyje {{ui:Atvaizdavimo eilė}} išsaugo paveikslėlį tokį, koks nustatytas dabar; vaizdo įrašo dialogo {{ui:Pridėti šią animaciją į eilę}} tą patį daro visai animacijai, sekant spindulius kiekvienam kadrui. {{ui:Pradėti eilę}} atvaizduoja juos vieną po kito šiame kompiuteryje, o šalia kiekvieno baigto esantis {{ui:Įrašyti}} jį atsisiunčia. Uždarius puslapį eilė išsaugoma: atidarę tą patį modelį, ji tęsiasi ten, kur sustojo. Eilei reikia WebGPU.

## Rūkas, dūmai, triukšmas ir kaustikos

Jie yra skiltyje {{ui:Rūkas, dūmai ir triukšmas}} ir veikia {{ui:Aukšta kokybė}} režime vaizdo plokštėje; kiti varikliai jų nepalaiko.

- {{ui:Rūkas ir migla}} užpildo orą migla iki nurodyto aukščio; ją apšviečia saulė, dangus ir šviestuvai. {{ui:Kiek matoma, metrais}} nustato, koks ji tanki (apie 100 m – lengva migla, 20 m – tirštas rūkas), {{ui:Rūko aukštis virš žemės, metrais}} yra vieta, kur ji baigiasi, o {{ui:Šviesos spinduliai}} nusako, kiek migla švyti link šviesos. Saulės šviesa išeina iš rūko viršuje, todėl ten, kur saulė prasiskverbia per langą ar tarp pastatų, matote ją kaip šviesos spindulius.
- {{ui:Dūmai arba debesis}} prideda vieną dūmų ar debesies tūrį, apšviestą kaip rūkas. {{ui:Rūšis}} – {{ui:Debesis}}, {{ui:Dūmų stulpas}} arba {{ui:Iš tūrio failo (.ccvol)}}, CadCraft savas tinklelio formatas. {{ui:Detalė}} ir {{ui:Variacija}} keičia sukurtą debesį ar stulpą, {{ui:Ilgiausios pusės dydis, metrais (0 = modelio dydis)}}, {{ui:Perkelti X (m)}}, {{ui:Perkelti Y (m)}}, {{ui:Perkelti Z (m)}} ir {{ui:Pasukti}} jį padeda į vietą (jis pradeda modelio viduryje), {{ui:Storis}} padaro jį tankesnį, {{ui:Priekinis švytėjimas}} padaro jį ryškesnį link šviesos, o {{ui:Spalva}} jį nudažo. Tūrio failas išsaugomas tik tol, kol atidarytas puslapis, kaip ir dangaus paveikslėlis.
- {{ui:Sustoti anksčiau, kai vaizdas švarus (adaptyvus mėginių ėmimas)}} nebeskiria papildomų mėginių jau nusistovėjusiems taškams, todėl likusi paveikslėlio dalis baigiama anksčiau. {{ui:Priimtinas triukšmas}} yra tai, kiek grūdėtumo lieka, kai taškas sustoja. Eilutė po paveikslėliu parodo, kiek mėginių vidutiniškai gavo taškas.
- {{ui:Kaustikos (šviesa, lūžusi per stiklą ar atspindėta veidrodžiais)}} seka šviesą iš šviestuvų ir saulės, todėl ryški dėmė po stiklo rutuliu ar veidrodžio šviesa ant sienos išeina švari, o ne grūdėta. Ji išjungta, kai įjungti rūkas, dūmai, {{ui:Šviesų maišymas po atvaizdavimo}} ar atvaizdavimo elementai, ir ji skirta paveikslėliams, o ne 360° paveikslėliams, animacijoms ar atvaizdavimo darbo sričiai.

## Kiek laiko tai trunka

Paveikslėlis kuriamas jūsų kompiuteryje, jo vaizdo plokštės pagalba; nieko neįkeliama. Trukmė priklauso nuo tos plokštės. Laikas auga kartu su etapais ir taškais: {{ui:Geriausia}} turi 16 kartų daugiau etapų nei {{ui:Juodraštis}}, o 4K paveikslėlyje yra apie keturis kartus daugiau taškų nei Full HD. Kompiuteris be vaizdo plokštės vis tiek atvaizduoja, tik lėčiau.

:::note
Jei dialogas sako, kad naršyklė negali atvaizduoti paveikslėlių, naršyklėje nėra WebGL 2. Atnaujinkite ją arba įjunkite aparatinį pagreitinimą jos nustatymuose.
:::
