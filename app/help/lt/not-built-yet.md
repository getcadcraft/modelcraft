---
title: Dar neįgyvendinta
summary: Ko šis ModelCraft leidimas dar nedaro ir ką daryti vietoj to šiandien.
keywords: trūksta, dar ne, apribojimai, planas, medžiagos, tekstūros, tekstas, sluoksniai, apkarpyti, skaidyti, debesis, darbalaukis
from: 179fa5e4
---

ModelCraft yra ankstyvas leidimas. Šis puslapis išvardija, ko jis dar nedaro, kad nieko nebeieškotumėte, ir artimiausią būdą, kaip atlikti darbą šiandien.

## Brėžinimo įrankiai

| Dar ne | Vietoj to, šiandien |
|---|---|
| Laisvas piešimas | Spustelėkite taškus su {{ui:Kreivė}} |
| Lanko ar apskritimo segmentų skaičiaus keitimas po nubrėžimo | Ištrinkite ir nubrėžkite iš naujo, įvedę `24s` |
| Šrifto pasirinkimas [3D tekstui](topic:text3d) arba jo žodžių redagavimas po įdėjimo | Naikinkite ir pridėkite tekstą iš naujo |
| Kampo keitimas įvedant į kampo matmenį arba cilindro dydžio keitimas iš jo apskritimo matmens | Pasukite kraštines su {{ui:Sukti}}; keiskite cilindro mastelį su {{ui:Mastelis}} |
| Matmenys eksportuotuose modelio failuose | Matmenys rodomi vaizdo paveikslėliuose, spaudiniuose ir PDF; modelio failuose – tik geometrija |
| Apkarpyti, Skaidyti ir Išorinis apvalkalas | Uždarų grupių [Sujungti, Atimti ir Susikirtimas](topic:solids) arba [susikertančių paviršių](topic:intersect) ir ištrinkite, ko nereikia |
| Sukimo ašies pasirinkimas rodyklių klavišais | Spustelėkite {{ui:Sukti}} centrą ant paviršiaus, kuris nukreiptas ta kryptimi, kuria turi rodyti ašis |
| Fiksavimas kelioms kryptims vienu metu | Užfiksuokite vieną kryptį rodyklių klavišu, tada prisitraukite prie taško |
| Keitimas įstrižai arba nuo matmens galo, kuris nėra kampe | Padėkite matmenį ant dviejų kampų, palei kraštinę arba palei raudoną, žalią ar mėlyną |

## Animacija

| Dar ne | Vietoj to, šiandien |
|---|---|
| Paviršių, kraštinių, saulės paros laiko, stiliaus ar paslėptų objektų animavimas | Judančią dalį paverskite grupe arba komponentu; kitam paros laikui atvaizduokite atskirą vaizdo įrašą |
| Kamera, sekanti nubrėžtą kelią arba žiūrinti į judantį objektą | Nustatykite daugiau kameros raktų kelyje ([Animuoti](topic:animation)) |
| Garsas vaizdo įrašuose ir aukštos kokybės (kelio sekimo) vaizdo įrašai be WebGPU | Pridėkite garsą vaizdo redaktoriuje; be WebGPU atvaizduokite vaizdo įrašą greitu atvaizdavimo įrankiu ([Atvaizduoti vaizdo įrašą](topic:animation#render-the-video)) |
| Lempos (ryškumas, sklaida, spalva), animuojamos atvaizduotame vaizdo įraše, objektyvo kampas be kameros raktų vaizdo įraše, medžiagų ar atvaizdavimo parametrų animavimas | Lempos animuojasi rodinyje; vaizdo įrašui kamerai taip pat nustatykite raktus priartinimui; skirtingiems lempų parametrams atvaizduokite atskirus vaizdo įrašus ([Animuoti bet kurią savybę](topic:animate)) |
| Svorių arba kaulų veidrodinis atspindėjimas iš vienos pusės į kitą, matomos kaulų apvalkalai, svorių šešėliavimas taškas po taško (rodoma pagal paviršių), pozuojamo tinklo matymas dažant svorius | Dažykite abi puses arba padarykite vieną pusę ir prieš pridedant kaulų karkasą naudokite Veidrodžio modifikatorių; tikrinti perjunkite tarp Dažyti svorius ir Poza |
| Kaulai, nuskaitomi iš glTF, FBX ar USD failų kaip kaulų karkasas, ir kaulų karkasai, įrašomi į tuos failus | Modeliai su susietu paviršiumi įeina ramybės padėtyje su failo svoriais; pridėkite kaulus pagal failo sąnarių tvarką, tada {{ui:Naudoti failo svorius}} ([Animuoti](topic:animate)) |
| IK taikinio ar poliaus perkėlimas tempiant rodinyje, apribojimo erdvės (vietinė ar pasaulinė) pasirinkimas, IK grandinių tempimas, IK palei kreivę | Įveskite taikinio tašką arba nukreipkite į objektą ir perkelkite jį; grandines palikite jų ilgiais |
| Audiniai, skysčiai, minkšti kūnai, sąnariai ir vyriai tarp standžiųjų kūnų, susidūrimas su tiksliu objekto forma (aplink jį tik dėžės ir rutuliai), gyva simuliacija grojant, pradinis greitis ar sukimasis (kūnai pradeda ramybės būsenoje) | Įrašykite standžiuosius kūnus ir paleiskite raktus; vyrį sukurkite iš raktų; keistą formą suskaidykite į dėžes (grupes) |
| Animacijos eksportas į glTF ar kitus modelių failus | Atvaizduokite vaizdo įrašą; `.modelcraft` failas ir ModelCraft įrašytas [USD failas](topic:usd) animaciją saugo tik ModelCraft viduje |
| Komentaro ar pavadinimo rašymas problemai VR, balso užrašai, pjūvio plokštumos perkėlimas rankomis VR | Problemą padėkite VR, tada jos žodžius pridėkite BCF programoje; pjūvio plokštumą nustatykite rodinyje prieš įeidami: žr. [Peržiūrėkite modelį VR ausinėse](topic:vr-review) |
| Žmonių prie stalo matymas VR (rodomi tik VR esantys žmonės), VR pasivaikščiojimo įrašymas | Paprašykite jų prisijungti VR arba sukurkite [animaciją](topic:animation) su ėjimu |

## Tinklai

| Dar ne | Vietoj to, šiandien |
|---|---|
| Lygių skulptūravimas (kelių skiriamųjų gebų) ir Detalė, pašalinanti tapusius mažais trikampius | [Skulptuokite](topic:sculpt) padalytą tinklą; {{ui:Perkurti tinklą}}, kad vėl jį išlygintumėte |
| Perkūrimas į keturkampius paviršius, sekančius formą | {{ui:Perkurti tinklą}} (lygūs trikampiai), tada atkurkite jį su [Retopologija](topic:mesh-edit#retopology) |
| Svoriai, dažyti viršūnėse modifikatoriams (Displace, Smooth ir Shrinkwrap veikia visam tinklui) | Pritaikykite modifikatorių, tada skulptuokite ar redaguokite dalis, kurioms to reikia |
| Viršūnių, kraštinių ar paviršių kopijavimas ir įklijavimas, peilio pjūvis, kuris baigiasi paviršiaus viduje, vielinės kraštinės be paviršiaus | Dubliuokite tinklą Modelyje; peiliu pjaukite nuo kraštinės iki kraštinės; [Ištraukite](topic:mesh-edit#change-the-shape) atviras kraštines į paviršius |

## Tvarkymas ir peržiūra

| Dar ne | Vietoj to, šiandien |
|---|---|
| DWG ir DXF situacijos planų sluoksniai kaip žymos | Situacijos planas įkeliamas kaip viena grupė: suskaidykite jį ir sugrupuokite dalis, kurias norite pažymėti |
| Keli pjūviai vienu metu, pjūvio dėžė ar pjūvio kontūras, eksportuojamas kaip brėžinys | Vienu metu pjauna vienas [pjūvio plokštuma](topic:sections); rodinį eksportuokite kaip paveikslėlį |
| Minkštųjų kraštinių rodymas brūkšniuotai arba minkštinimas vilkiant slankiklį | [Suminkštinkite pagal kampą](topic:soften) Objekto informacijoje, o norėdami išbandyti kitą kampą – anuliuokite |
| Internetinė modelių biblioteka su paieška arba komponentai su pasirenkamomis parinktimis (spalva, stilius) | [Pradinė biblioteka](topic:starter); importuokite Collada, OBJ ar glTF modelius; kopiją [ištempkite](topic:stretch) iki dydžio |
| Augalų dėjimas iš augalų bibliotekos | [Išbarstykite](topic:live-view#scatter-plants-rocks-and-people) augalus gyvajame rodinyje arba įdėkite medį iš pradinės bibliotekos |
| Nepriklausomos grupės kopijos | Paverskite ją komponentu, tada {{ui:Padaryti unikalų}} (žr. [Trikčių šalinimas](topic:troubleshooting#editing-one-group-changed-another)) |

## Atvaizdavimas

| Dar ne | Vietoj to, šiandien |
|---|---|
| Atvaizdavimas rodinyje ({{ui:Atvaizduoti}} darbo sritis), atvaizdavimo eilė, kameros, dangaus paveikslėlio, rūko ir šviesų maišymo parinktys be WebGPU | {{ui:Atvaizduoti paveikslėlį…}} su {{ui:Aukšta kokybė}} ten naudoja WebGL kelio sekimo variklį be šių parinkčių ([Atvaizduoti paveikslėlį](topic:render#high-quality)) |
| Kita programa piešia atvaizdavimo paveikslėlį be atvaizdavimo variklio priedo (CadCraft niekada nevykdo programos pagal GNU GPL licenciją); panoraminės ar stereo kameros ir dangaus paveikslėlis per kitą programą; Unreal Engine papildinys (failai įrašomi, papildinys, kuris juos atidaro, neišleistas) | Mūsų Fast ir Path tracer varikliai; priedo variklis ([piešti paveikslėlį kita programa](topic:render-other-program)); USD, glTF ar Unreal aplanko failas iš variklių sąrašo, kurį galima atsinešti į bet kurią programą |
| Išbarstyti augalai ir uolos {{ui:Atvaizduoti paveikslėlį…}} | Jie rodomi [gyvajame rodinyje](topic:live-view), jo panoramose, žiūryklėje ir vaizdo įraše |

## Medžiagos ir spalvos

| Dar ne | Vietoj to, šiandien |
|---|---|
| Įvestys, išskyrus pagrindinę spalvą, šiurkštumą, metališkumą, nepermatomumą, normalę ir emisiją, kintančios per paviršių aukštos kokybės paveikslėliuose (jos naudoja vidurkį) | [Kurkite medžiagas mazgais](topic:shading): vis tiek jas susiekite, rodinys parodys, kad jos kinta |
| Poslinkis ant stumiamų ir traukiamų paviršių | Objektą paverskite tinklu poslinkiui |
| Savų medžiagų bendrinimas į Biblioteką iš programos ir supakuoti (ARM/ORM) ar EXR žemėlapiai importuotame tekstūrų rinkinyje | Laikykite juos faile; atskirus žemėlapius importuokite kaip PNG ar JPEG |
| Failo medžiagos gyvose TeamWork sesijose (jos lieka kompiuteryje, kuris jas sukūrė) | Įrašykite failą ir bendrinkite jį |
| Lipdukai, lenkiami aplink kreivus paviršius, lipdukai {{ui:Anuliuoti}} atšaukime, arba kelių paviršių tekstūrų dažymas vienu metu per siūlę | Dėkite mažesnius lipdukus ant kiekvienos dalies; dažykite kiekvieną siūlės pusę atskirai |
| Įrašymas ant stumiamų ir traukiamų paviršių, kelių objektų įrašymas į vieną paveikslėlį, rankiniu būdu formuojamas narvas arba įrašytas lempų apšvietimas | Paverskite tinklu ir išskleiskite; įrašykite kiekvieną objektą; padidinkite paieškos atstumą; lempų šviesai atvaizduokite paveikslėlį |
| Šiurkštumo, metališkumo ar aukščio dažymas, dažymas paveikslėliais (antspaudais) ir tekstūrų dažymas didesniu nei 512 × 512 | Pagrindinę spalvą dažykite čia; kitus žemėlapius kurkite paveikslėlių redaktoriuje ir importuokite kaip tekstūrų rinkinį |
| Tekstūros eksportuose Collada, STL, PLY, 3MF, IFC, DWG ir DXF, bei failo medžiagų mazgų grafai eksportuotuose modeliuose | Tiems formatams atitenka kiekvienos medžiagos spalva; glTF ir OBJ perneša importuotas tekstūras; medžiagą atskirai eksportuokite kaip [MaterialX](topic:shading#materialx); [USD](topic:usd) išsaugo visą modelį ModelCraft |
| Tekstūros Collada failuose | Importuojant jos suskaičiuojamos ir praleidžiamos; `.skp` ir `.glb` failų tekstūros įkeliamos |

## Failai

| Dar ne | Vietoj to, šiandien |
|---|---|
| SketchUp failų įrašymas ir jų tekstas bei matmenys | [Importuokite](topic:import-sketchup-files) išsaugo paviršius, spalvas ir tekstūras; norėdami grįžti į SketchUp, eksportuokite Collada (`.dae`) |
| Matmenys ir vadovai DWG ir DXF eksportuose | Pridėkite juos CAD programoje po eksportavimo |
| Taškai, lentelės ir daugiašakės nuorodos iš DWG ir DXF | Jie suskaičiuojami ir praleidžiami; tekstas įkeliamas kaip vienos linijos raidės, o ne brėžinio šriftu |
| Paviršiai, tinklai, lentelės ir daugiašakės nuorodos iš DWG ir DXF; 3D kietųjų kūnų paviršiai ant išlenktų, lofo ar kitų laisvosios formos paviršių | Jie taip pat suskaičiuojami ir praleidžiami (patys 3D kietieji kūnai įkeliami). Tas dalis eksportuokite iš CAD programos kaip OBJ ar Collada ir importuokite tai |
| IFC tipai, savybės ar medžiagos | IFC eksportas turi [aukštus](topic:formats#ifc-ifc) ir bendruosius elementus; likusius pridėkite BIM programoje |
| Modelio siuntimas tiesiai į BimCraft | Eksportuokite {{ui:IFC BimCraft (.ifc)}} ir atidarykite jį BimCraft |
| Laisvos kraštinės glTF ir STL | Linijiniam darbui naudokite OBJ arba Collada |
| glTF ir FBX medžiagos be pagrindinės spalvos (metalas, šiurkštumas, normalių žemėlapiai, stiklas, skaidrioji danga, blizgesys…) | Jos nuskaitomos ir išvardijamos; ModelCraft išsaugo pagrindinę spalvą ar tekstūrą. Išvaizdą atkurkite [Šešėliavimo darbo srityje](topic:shading) |
| glTF kaulai, animacijos ir formos taikiniai | Modeliai su susietu paviršiumi įeina ramybės padėtyje; animuokite [laiko juostoje](topic:animation) |
| Spalvos ir surinkimo detalių pavadinimai iš STEP failų | Detalės įkeliamos kaip tinklai tikru dydžiu; [dažykite](topic:paint) ir pavadinkite jas po importavimo |
| SubD objektai, tekstas, matmenys ir šviesos iš `.3dm` failų | Žr. [kas praleidžiama](topic:import-3dm-files#what-is-left-out-and-said); SubD paverskite tinklais programoje, kuri sukūrė failą |
| KTX2 tekstūros ir medžiagų variantai glTF | Eksportuokite su PNG ar JPEG tekstūromis; naudojamas numatytasis variantas |
| glTF egzempliarų įrašymas (EXT_mesh_gpu_instancing) | Komponentai įrašomi vieną kartą ir dedami daug kartų, ką perskaito kiekviena peržiūros programa |
| Alembic animacija (kiekvienas talpyklos pavyzdys), Alembic taškai ir kreivės, Alembic įrašymas | Įkeliamas pirmas pavyzdys; animuokite [laiko juostoje](topic:animation); įrašykite glTF, USD ar OBJ |
| Reljefo ir normalių žemėlapiai OBJ medžiagose | Įkeliamas tik spalvos paveikslėlis (`map_Kd`) |
| FBX kaulai ir animacija, FBX eksportas, FBX 6 failai | Modeliai su susietu paviršiumi įeina ramybės padėtyje; eksportuokite glTF; senus failus įrašykite kaip FBX 2011 ar naujesnį |
| Collada susieti paviršiai, formos, kameros, šviesos, „look-at“ ir iškreipimo transformacijos, išoriniai nuorodos | Importuojant praleidžiama ir nurodoma pranešime |
| Atsarginės kopijos | {{ui:Įrašyti kaip}} ({{key:Mod+Shift+S}}) įrašo dar vieną kopiją. Po avarijos ModelCraft pasiūlo grąžinti jūsų neįrašytą darbą („Atkurti jūsų darbą?“) |
| Įrašymas debesyje ir sinchronizavimas tarp kompiuterių | Dar nepasiekiama. Įrašykite failus savo kompiuteryje ir kopijuokite juos ten, kur reikia |

## 3D spausdinimas

| Dar ne | Vietoj to, šiandien |
|---|---|
| Tikros pjaustyklės atramos (sąsajos, pagrindas, tikslus atramų raštas) | [Atramų peržiūra](topic:print-tools#supports-preview) parodo, kur ir kiek maždaug; jūsų pjaustyklės peržiūra rodo tikras |
| Dalies, kertančios pati save, išvėlimas arba kraštinės, kur susitinka trys ar daugiau paviršių | [Taisyti](topic:print-tools#repair) išvardija jas ir nurodo, kur jos yra; naudokite [Susikertantys paviršiai](topic:intersect) ir ištrinkite, kas viduje |
| Užpildymo raštai ir grotelės tuštumos viduje | [Ištuštinti](topic:print-tools#hollow) palieka ją tuščią; jūsų pjaustyklė prideda užpildymą pilnam kūnui |
| Detalės, per mažos jūsų antgaliui (išskyrus sienas) | [Sienelės storis](topic:print-tools#wall-thickness) randa plonas sienas; pjaustyklės sluoksnių peržiūra rodo likusias |

## Našumas

{{ui:Anuliuoti}} kiekvienam žingsniui saugo modelio kopiją ([tinklas](topic:meshes) saugo tik tai, kas pakito), todėl labai dideli stumiamos ir traukiamos geometrijos importai kiekvieną keitimą daro lėtesnį. Importuokite kuo kompaktiškiau, o istoriją išvalykite įrašę ir vėl atidarę failą.

## Programos ir platformos

- **Darbalaukis:** ModelCraft veikia naršyklėje Mac, Windows ir Linux sistemose bei CadCraft Studio – darbalaukio programoje, kurioje visos aštuonios programos įdiegiamos vienu kartu. Android sistemoje CadCraft Studio diegiamas iš APK failo adresu getcadcraft.com/download. iPad ar iPhone versijos dar nėra.
- **Jutiklinis ekranas:** žr. [Sukti vaizdą, slinkti ir keisti mastelį](topic:orbit-pan-zoom) apie pirštų gestus. Rašiklio spaudimas nustato teptuką [Skulptūravime](topic:sculpt); kitur spaudimas ir rašiklio pasvirimas nenaudojami.
- **Lapai:** ModelCraft [spausdina po vieną rodinį puslapyje](topic:export-model#print-the-view-or-save-it-as-a-pdf); lapų maketų su keliais rodiniais ar antraštės bloku nėra. Brėžiniams mastelyje eksportuokite į CadCraft suderinamus DWG/DXF.
