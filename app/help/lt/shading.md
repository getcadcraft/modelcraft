---
title: Medžiagų kūrimas su mazgais
summary: Sukurkite medžiagą iš tekstūrų, paveikslėlių ir matematikos Šešėliavimo darbo srityje, matykite ją vaizde kaip dirbate ir dažykite paviršius.
keywords: šešėliavimas, kepimas, tekstūros kepimas, aplinkinis užtemimas, ao, kreivumas, normalių kepimas, aukštas tinklas, žemas tinklas, šviesos žemėlapis, lipdukas, decal, logotipas, etiketė, tekstūros dažymas, dažyti tekstūrą, teptukas, medžiaga, medžiagos, materialx, mtlx, openpbr, standartinis paviršius, medžiagų biblioteka, librarycraft, tekstūrų rinkinys, pbr, tekstūrų importas, zip, cc0, vilkimas, mazgas, mazgai, mazgų redaktorius, šeideris, tekstūra, procedūrinis, triukšmas, šachmatinis, voronoi, ląstelės, bangos, plytos, plytelės, medis, marmuras, gradientas, purvas, briaunų nusidėvėjimas, spalvų rampa, mišinys, reljefas, normalė, šiurkštumas, metališkumas, nepermatomumas, iškirpimas, emisija, švytėjimas, poslinkis, dėžės atvaizdavimas, triplanarinis, uv, paveikslėlis, paveikslėlio tekstūra, openpbr
from: d7368b21
---

Medžiaga, sukurta **Šešėliavimo** darbo srityje, priklauso failui. Tai nedidelis grafas: **mazgai**, kurie kuria tekstūras, paveikslėlius ir skaičius, sujungti į **Medžiagos išvestį**, kurios įvestys nusako paviršiaus išvaizdą – bazinę spalvą, šiurkštumą, metališkumą, normalę, nepermatomumą, emisiją ir kitas OpenPBR modelio savybes. Paviršius dažote su ja, kaip ir su bet kuria bibliotekos medžiaga, o kiekvienas pakeitimas iš karto matomas vaizde.

## Atidarymas

Pasirinkite {{ui:Šešėliavimas}} darbo sričių sąraše. 3D vaizdas užima viršutinę ekrano dalį, o **mazgų redaktorius** – apatinę. Dešinėje esantis skydelis išvardija failo medžiagas.

- {{ui:Nauja medžiaga}} sukuria pilką medžiagą, turinčią tik Medžiagos išvestį.
- **Sukurti redaguojamą bibliotekos medžiagos kopiją** paverčia plytas, medieną, plyteles ir kitas medžiagas grafu, kurį galima keisti: jų tekstūra ateina per Bibliotekos tekstūros mazgą, o reljefas – per Reljefo mazgą.
- {{ui:Dažyti ja}} dažo pasirinktus paviršius arba grupes, arba parenka medžiagą dažymo įrankiui. Dažymo įrankio medžiagos taip pat rodo failo medžiagas skyriuje **Šiame faile**.
- {{ui:Dubliuoti}} ir {{ui:Naikinti}} veikia su medžiaga, kurią redaguojate. Ištrynimo nebeįmanoma anuliuoti: paviršiai, nudažyti ja, rodys numatytąją spalvą, kol juos vėl nedažysite.

## Medžiagos iš bibliotekos

Skydelio **Medžiagų biblioteka (Library)** sąraše rodomos bibliotekos medžiagos, kiekviena su peržiūra, atvaizduota CadCraft kelio sekiklu. Tai tekstūrų rinkiniai, išleisti pagal CC0, ir jų autoriai nurodyti.

- Spustelėkite vieną, kad ją įkeltumėte į failą (kartu ateina ir jos paveikslėliai) ir, pasirinkus paviršius arba grupes, juos nudažytumėte.
- Vilkite ją ant paviršiaus arba grupės vaizde, kad nudažytumėte tik tai.
- Ji tampa viena iš failo medžiagų: keiskite jos mazgus kaip ir bet kurios kitos. Jos nuoroda rodoma skydelyje ir išlieka faile.

## Tekstūrų rinkinio importas

{{ui:Paveikslėliai ar zip…}} arba {{ui:Aplankas…}} skyriuje **Tekstūrų rinkinio importas** sukuria medžiagą iš rinkinio žemėlapių. Žemėlapiai atpažįstami pagal žodžius failo pavadinimuose: color, albedo, diffuse arba basecolor; roughness (arba gloss, paverstas į šiurkštumą); metalness arba metallic; normal (OpenGL arba DirectX, pagal `gl` / `dx` pavadinime); height arba displacement; ambient occlusion; opacity; emission. Supakuoti žemėlapiai (ARM, ORM) praleidžiami. Plytelė pradeda nuo 1 × 1 m: jos tikrąjį dydį nustatykite Medžiagos išvestyje. Aukštis eina į poslinkį, kurio mastelis yra 0 – padidinkite mastelį, kad jį naudotumėte tinkluose.

## MaterialX

MaterialX yra atviras formatas, kurį kiti 3D ir atvaizdavimo programos naudoja medžiagoms perduoti.

- {{ui:Eksportuoti kaip MaterialX…}} įrašo medžiagą, kurią redaguojate: jos reikšmes ir kiekvieną tekstūrą kaip PNG paveikslėlį šalia `.mtlx` failo (zip archyve). Pasirinkite šešeliuoklį, kuriuo ji užrašoma: **OpenPBR Surface** (MaterialX 1.39, tas pats modelis, kurį naudoja ModelCraft) arba **Standard Surface** (MaterialX 1.38, kurį šiandien skaito daugiau programų). Tekstūros išdėstomos pagal UV koordinates metrais; dėžės ir triplanarinis išdėstymas įrašomi kaip UV.
- {{ui:Importuoti MaterialX…}} (arba {{ui:Iš aplanko…}}) nuskaito `.mtlx` failus su OpenPBR, Standard Surface, UsdPreviewSurface arba glTF PBR šeideriais. Pridėkite ir paveikslėlius arba visa ko zip archyvą: paveikslėlis surandamas pagal kelią, pavadinimą arba pavadinimą su kitu paveikslėlio tipu (failuose nurodytas `.exr` gali ateiti kaip `.jpg` šalia jo). Tekstūros, normalių žemėlapiai, aritmetika, mišiniai ir poslinkis ateina kaip mazgai; kita lieka su savo reikšme, o būsenos eilutėje nurodoma, kas nepatekę.

## Lipdukai

Lipdukas yra paveikslėlis, uždėtas ant paviršiaus – logotipas, ženklas, etiketė, dėmė – su savo medžiaga.

- Nustatykite **Naujo lipduko plotis**, tada {{ui:Uždėti lipduką…}} (arba {{ui:Lipdukas}} įrankių juostoje), pasirinkite PNG, JPEG arba WebP paveikslėlį ir spustelėkite paviršių. Paveikslėlis projektuojamas ant ten esančių paviršių, išlaikant proporcijas; permatomos PNG dalys lieka permatomos.
- Lipdukas priklauso grupei arba komponentui, į kurį spustelėjote, ir juda kartu su juo. Jis dengia paviršius savo rėmelio viduje, kurie žiūri ta pačia kryptimi, ir sustoja ties kraštais to, ant ko guli.
- Kiekvienas lipdukas gauna savo medžiagą, pavadintą **Lipdukas: <paveikslėlis>**, failo sąraše: redaguokite ją kaip bet kurią kitą (šiurkštumą, reljefą, švytėjimą). Šalia lipduko esantis {{ui:Medžiaga}} ją atveria.
- Šalia kiekvieno lipduko: jo plotis (aukštis seka paveikslėlį), {{ui:Pasukti}} (ketvirtis apsisukimo) ir {{ui:Naikinti}}. Lipdukai laikomi kartu su failo medžiagomis, už anuliavimo ribų.
- Jie matomi šešeliuotame vaizde, greituosiuose atvaizdavimuose ir aukštos kokybės paveikslėliuose.

## Piešimas ant tekstūros

{{ui:Dažyti tekstūrą}} (arba {{ui:Dažyti}} skyriuje **Dažymas ant tekstūros**) žymeklį paverčia apvaliu teptuku. Vilkite ant paviršiaus, turinčio vieną iš šio failo medžiagų: teptukas nudažo paveikslėlį, esantį už bazinės spalvos.

- Ant tinklo jis dažo pagal tinklo UV (pirmiausia jį išvyniokite UV darbo srityje); kitus paviršius dažo per visą paviršių, todėl dažymas kartojasi pagal medžiagos plytelę.
- Medžiaga, kurios bazinė spalva yra paprasta spalva, pirmą kartą nudažius gauna naują 512 × 512 spalvos paveikslėlį. Medžiagai, kurios bazinė spalva ateina iš kitų mazgų, reikia Paveikslėlio mazgo, sujungto su Baziniu spalva.
- Teptuko spalvą, dydį (paveikslėlio pikseliais), stiprumą ir kietumą nustatykite skydelyje. {{ui:Anuliuoti brūkšnį}} arba Ctrl+Z (dažant) atšaukia brūkšnį, iki paskutinių 20.
- Nudažytas paveikslėlis įrašomas į failą. Bibliotekos medžiagų dažyti negalima: pirmiausia padarykite redaguojamą kopiją.

## Tekstūrų kepimas

**Kepti tekstūras** įrašo į paveikslėlius, ką forma ir scena suteikia paviršiui, išdėstytus pagal tinklo UV.

- Pasirinkite tinklą, turintį UV (pirmiausia jį išvyniokite UV darbo srityje), pažymėkite žemėlapius ir paspauskite {{ui:Kepti}}:
  - **Aplinkinis užtemimas** – kiek atviras kiekvienas taškas: kampai, raukšlės ir vietos po kitais objektais tampa tamsesni. Viskas, rodoma modelyje, jį šešeliuoja iki užtemimo atstumo.
  - **Kreivumas** – šviesu išorinėse briaunose, tamsu vidiniuose kampuose, vidutiniškai pilka plokščiose ir švelniai išlinkusiose vietose, per nustatytą briaunos plotį.
  - **Normalės iš didelio detalumo objekto** – pasirinkite ir detalizuotą kopiją: jos paviršiaus detalės įrašomos kaip normalių žemėlapis paprastesniam objektui (objektui su mažiau trikampių, ant kurio kepama). Paieškos atstumas – tai, kiek gali būti nutolę du paviršiai.
  - **Apšvietimas** – modelio vietos ir datos saulė (Stilius) su šešėliais bei dangus kaip šviesos žemėlapis.
- Paveikslėliai prisijungia prie failo ir atsiranda Paveikslėlių mazguose. Jei redaguojamoje medžiagoje yra mazgas **Purvas ir briaunų nusidėvėjimas**, jis iš karto nuskaito naujus aplinkinio užtemimo ir kreivumo duomenis.
- Daugiau spindulių vienam tekseliui duoda glotnesnį užtemimą ir apšvietimą, bet ilgiau trunka. Kepimas vykdomas kompiuterio procesoriaus branduoliais fone; {{ui:Sustabdyti kepimą}} jį sustabdo.

## Grafo kūrimas

1. {{ui:Pridėti mazgą…}} (arba {{key:Shift+A}} mazgų redaktoriuje) prideda mazgą redaktoriaus viduryje.
2. Vilkite nuo išvesties taško (mazgo dešinėje) iki įvesties taško (mazgo kairėje), kad juos sujungtumėte. Antra jungtis į įvestį pakeičia pirmąją; kad atjungtumėte, nutempkite sujungtą įvestį.
3. Nesujungtos įvestys rodo savo reikšmę: įveskite skaičių arba pasirinkite spalvą. Parametrai yra kiekvieno mazgo apačioje.

Mazgą perkelkite vilkdami už pavadinimo, tuščią erdvę vilkite slinkimui, o ratuku priartinkite. {{key:Delete}} pašalina pasirinktus mazgus ar jungtį, {{key:Mod+Z}} anuliuoja, {{key:Mod+D}} dubliuoja, {{key:F}} parodo visus mazgus. Kiekvienas pakeitimas yra vienas mazgų redaktoriaus anuliavimo žingsnis. Modelio anuliavimas medžiagų nekeičia.

| Mazgai | Ką jie sukuria |
|---|---|
| Tekstūros koordinatės | Kur plytelėje yra taškas: kartoti, paslinkti, pasukti ketvirtį. |
| Reikšmė, Spalva | Skaičius, spalva. |
| Paveikslėlis | Failo paveikslėlis (vienas, atėjęs su importuotu modeliu, arba pridėtas su {{ui:Pridėti paveikslėlį…}}). Nuotraukai pasirinkite **Spalvos**, o šiurkštumo ar normalių žemėlapiui – **Duomenys**. |
| Bibliotekos tekstūra | Bibliotekos medžiagos tekstūra, šiurkštumas ir aukštis. |
| Šachmatinis, Triukšmas | Kvadratai; sklandus fraktalinis triukšmas su jo detale, šiurkštumu ir sėkla. |
| Voronoi ląstelės, Bangos, Gradientas | Ląstelės (atstumas iki artimiausio taško, ribos tarp ląstelių, spalva kiekvienai ląstelei); juostos skersai, aukštyn ar įstrižai, kaip sinusas, pjūklas ar trikampis, sulenktos triukšmu; tiesiniai, kvadratiniai, radialiniai ir sferiniai gradientai. |
| Plytos, Plytelės | Plytų eilės su poslinkiu arba plytelių tinklelis: spalvos, skiedinys ar glaistas, tarpas ir nuožulnumas metrais, aukštis reljefui, atsitiktinis skaičius kiekvienam gabalui. |
| Medis, Marmuras | Žiedai išilgai rašto su smulkiomis skaidulomis; gyslos, išlenktos turbulencija. |
| Purvas ir briaunų nusidėvėjimas | Nudilina iškilusias briaunas ir užteršia įdubas pagal tinklo kreivumo ir užtemimo paveikslėlius ([Kepti tekstūras](topic:shading#bake-textures) juos sukuria; arba nustatykite jo dvi paveikslėlių nuostatas tinklo UV išdėstyme: medžiagą išdėstykite pagal UV koordinates). Be jų nieko nekeičia. |
| Spalvų mišinys, Spalvų rampa, Atspalvis/sodrumas/ryškumas, Ryškumas ir kontrastas, Invertuoti, Gama, RGB atskyrimas ir sujungimas | Spalvų darbas. |
| Matematika, Reikšmių intervalo keitimas | Aritmetika su skaičiais (sudėtis, daugyba, laipsnis, sklandusis žingsnis ir kiti). |
| Reljefas, Normalių žemėlapis | Normalė iš aukščio (Reljefas) arba iš normalių žemėlapio paveikslėlio (Normalių žemėlapis: pasirinkite žaliojo kanalo kryptį). |

## Medžiagos išvestis

Jos parametrai nusako, kaip tekstūra guli ant paviršių:

- **Plytelės plotis** ir **Plytelės aukštis**: kiek metrų vienos tekstūros plytelė apima. Viskas, ką sukuria grafas, kartojasi per plytelę be siūlės.
- **Išdėstymas**: **UV koordinatės** seka paviršius (stumiami–traukiami paviršiai: išilgai kiekvieno paviršiaus; tinkluose: jų UV, vienas UV vienetas = viena plytelė), **Dėžė** projektuoja iš artimiausios iš trijų ašių, **Triplanarinis** sumaišo tris projekcijas nuožulniuose paviršiuose (**Mišinio ryškumas**: didesnis – kietesnis mišinys).
- **Normalės stiprumas** keičia normalės įvestį. **Poslinkio mastelis** nustato, kiek poslinkio įvestis perkelia tinklo viršūnes.
- {{ui:Daugiau įvesčių}} rodo likusias OpenPBR įvestis: dangą, pūkuotumą, subpaviršių, plonąją plėvelę, pralaidumą ir jų spalvas.

## Aukštos kokybės paveikslėliuose

Kelio sekiklis nuskaito bazinę spalvą, šiurkštumą, metališkumą, nepermatomumą, normalę ir emisiją iš grafo, kai jos keičiasi per paviršių. Bet kuri kita įvestis, kurią sujungiate (pavyzdžiui, kintanti danga), naudojama su savo vidurkiu; skydelis nurodo, kurios. Iškirpimas iš nepermatomumo tekstūros rodo savo formą, o jo šešėlis yra tolygiai permatomas. Švytinti tekstūra apšviečia tai, į ką nukreipta, neįvertinama kaip šviestuvas.

**Poslinkis** perkelia tik tinklų viršūnes, todėl detalėms pridėkite Subdivision modifikatorių ([Modifikatoriai](topic:modifiers)). Stumiami–traukiami paviršiai išlaiko savo formą ir gauna reljefą iš normalės.

:::tip
Kompiuteryje su WebGPU grafas apskaičiuojamas grafikos kortele; be jos – procesoriumi. Rezultatas tas pats.
:::
