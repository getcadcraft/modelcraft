---
title: Materiālu veidošana ar mezgliem
summary: Veidojiet materiālu no tekstūrām, attēliem un matemātikas darba vietā Ēnojums, redzot to skatā, kamēr veidojat, un krāsojiet virsmas ar to.
keywords: ēnojums, cepšana, tekstūru cepšana, apkārtējā aizsegšana, ao, izliekums, normāļu cepšana, augsta poligonu skaita, zema poligonu skaita, gaismas karte, uzlīme, uzlīmes, etiķete, tekstūras krāsošana, krāsot tekstūru, ota, materiāls, materiāli, materialx, mtlx, openpbr, standard surface, materiālu bibliotēka, librarycraft, tekstūru kopa, pbr, tekstūru importēšana, zip, cc0, vilkt, mezgls, mezgli, mezglu redaktors, ēnotājs, tekstūra, procedūra, troksnis, šahs, voronoi, šūnas, viļņi, ķieģeļi, flīzes, koks, marmors, gradients, netīrumi, malu nodilums, krāsu rampa, sajaukt, reljefs, normāļu karte, raupjums, metāliskums, necaurredzamība, izgriezums, emisija, spīdums, pārvietojums, kastes kartēšana, triplanārs, uv, attēls, attēla tekstūra
from: d7368b21
---

Materiāls, kas izveidots darba vietā **Ēnojums**, pieder failam. Tas ir neliels grafs: **mezgli**, kas veido tekstūras, attēlus un skaitļus, saistīti ar **Materiāla izvadi**, kuras ieejas ir virsmas izskats — pamatkrāsa, raupjums, metāliskums, normāle, necaurredzamība, emisija un pārējais OpenPBR modelis. Virsmas krāsojat ar to kā ar jebkuru bibliotēkas materiālu, un katra izmaiņa uzreiz parādās skatā.

## Atvērt to

Darba vietu sarakstā izvēlieties {{ui:Ēnojums}}. 3D skats paliek ekrāna augšdaļā, bet **mezglu redaktors** aizņem apakšdaļu. Labajā panelī ir faila paša materiāli.

- {{ui:Jauns materiāls}} izveido pelēku materiālu tikai ar savu Materiāla izvadi.
- **Izveidot rediģējamu bibliotēkas materiāla kopiju** pārvērš ķieģeļus, koku, flīzes un pārējos par grafu, ko var mainīt: tā tekstūra nāk caur bibliotēkas tekstūras mezglu, bet reljefs — caur Reljefa mezglu.
- {{ui:Krāsot ar to}} nokrāso atlasītās virsmas vai grupas vai izvēlas materiālu krāsošanas rīkam. Krāsošanas rīka materiālos faila paši materiāli ir uzskaitīti zem **Šajā failā**.
- {{ui:Dublēt}} un {{ui:Dzēst}} darbojas ar materiālu, ko rediģējat. Dzēšanu nevar atsaukt: virsmas, kas nokrāsotas ar to, rāda noklusējuma krāsu, līdz tās atkal nokrāsojat.

## Materiāli no bibliotēkas

Paneļa **Materiālu bibliotēka (Bibliotēka)** saraksts rāda bibliotēkas materiālus, katru ar priekšskatījumu, ko veidojis CadCraft ceļu izsekotājs. Tās ir tekstūru kopas, kas izlaistas ar licenci CC0, ar norādītiem autoriem.

- Noklikšķiniet uz viena, lai to ievietotu failā (kopā ar tā attēliem), un, ja ir atlasītas virsmas vai grupas, nokrāsojiet tās.
- Velciet to uz virsmas vai grupas skatā, lai nokrāsotu tikai to.
- Tas kļūst par vienu no faila materiāliem: mainiet tā mezglus kā jebkuru citu. Tā autoru norāde parādās panelī un paliek failā.

## Tekstūru kopas importēšana

{{ui:Attēlus vai zip…}} vai {{ui:Mapi…}} zem **Tekstūru kopas importēšana** izveido materiālu no kopas kartēm. Kartes atrod pēc vārdiem to failu nosaukumos: color, albedo, diffuse vai basecolor; roughness (vai gloss, pārveidots par raupjumu); metalness vai metallic; normal (OpenGL vai DirectX, no `gl` / `dx` nosaukumā); height vai displacement; ambient occlusion; opacity; emission. Iepakotās kartes (ARM, ORM) netiek ņemtas vērā. Flīze sākas ar 1 × 1 m: iestatiet tās īsto izmēru Materiāla izvadē. Augstums tiek ievietots pārvietojumā ar mērogu 0 — palieliniet mērogu, lai to izmantotu uz tīkliem.

## MaterialX

MaterialX ir atvērts formāts, ko citas 3D un renderēšanas programmas izmanto materiālu nodošanai.

- {{ui:Eksportēt kā MaterialX…}} saglabā materiālu, ko rediģējat: tā vērtības un katru tekstūru kā PNG attēlu blakus `.mtlx` failam (zip arhīvā). Izvēlieties ēnotāju, kādā tas tiks rakstīts: **OpenPBR Surface** (MaterialX 1.39, tas pats modelis, ko izmanto ModelCraft) vai **Standard Surface** (MaterialX 1.38, ko šobrīd lasa vairāk programmu). Tekstūras tiek novietotas pēc UV koordinātēm metros; kastes un triplanārā novietošana tiek rakstīta kā UV.
- {{ui:Importēt MaterialX…}} (vai {{ui:No mapes…}}) lasa `.mtlx` failus ar OpenPBR, Standard Surface, UsdPreviewSurface vai glTF PBR ēnotājiem. Pievienojiet arī attēlus vai vienu zip arhīvu ar visu: attēlu atrod pēc ceļa, nosaukuma vai nosaukuma ar citu attēla tipu (fails `.exr` var būt nosaukts kā `.jpg` blakus). Tekstūras, normāļu kartes, aritmētika, sajaukumi un pārvietojums tiek ievietoti kā mezgli; viss pārējais saglabā savu vērtību, un statusa rindā norādīts, kas palika ārpusē.

## Uzlīmes

Uzlīme ir attēls, kas uzlikts uz virsmas — logotips, zīme, etiķete, traips — ar savu materiālu.

- Iestatiet **Jaunās uzlīmes platums**, tad {{ui:Novietot uzlīmi…}} (vai {{ui:Uzlīme}} rīkjoslā), izvēlieties PNG, JPEG vai WebP attēlu un noklikšķiniet uz virsmas. Attēls tiek projicēts uz virsmām tur, saglabājot savas proporcijas; PNG caurspīdīgās daļas paliek caurspīdīgas.
- Tā pieder grupai vai komponentam, uz kura noklikšķinājāt, un pārvietojas kopā ar to. Tā pārklāj virsmas savā rāmī, kas vērstas vienā virzienā, un apstājas pie malām, uz kurām tā atrodas.
- Katrai uzlīmei ir savs materiāls ar nosaukumu **Uzlīme: <attēls>** faila sarakstā: rediģējiet to kā jebkuru citu (raupjums, reljefs, spīdums). {{ui:Materiāls}} blakus uzlīmei to atver.
- Blakus katrai uzlīmei: tās platums (augstums seko attēlam), {{ui:Pagriezt}} (ceturtdaļapgrieziens) un {{ui:Dzēst}}. Uzlīmes tiek glabātas kopā ar faila materiāliem, ārpus atsaukšanas.

Tās redzamas nokrāsotajā skatā, ātrajos renderos un augstas kvalitātes attēlos.

## Krāsošana uz tekstūras

{{ui:Krāsot tekstūru}} (vai {{ui:Krāsot}} zem **Krāsošana uz tekstūras**) pārvērš rādītāju par apaļu otu. Velciet pa virsmu, kurai ir viens no šī faila materiāliem: ota krāso attēlu zem tā pamatkrāsas.

- Uz tīkla tā krāso pa tīkla UV (vispirms izklājiet to UV darba vietā); uz citām virsmām tā krāso pāri virsmai, tātad krāsojums atkārtojas kopā ar materiāla flīzi.
- Materiālam, kura pamatkrāsa ir vienkārša krāsa, pirmajā krāsošanas reizē tiek izveidots jauns 512 × 512 attēls ar šo krāsu. Materiālam, kura pamatkrāsa nāk no citiem mezgliem, jāpievieno Attēla mezgls, kas savienots ar Pamatkrāsu.
- Iestatiet otas krāsu, izmēru (attēla pikseļos), stiprumu un cietību panelī. {{ui:Atsaukt triepienu}} vai Ctrl+Z (krāsojot) atsauc triepienu, līdz 20 pēdējiem.
- Nokrāsotais attēls tiek saglabāts failā. Bibliotēkas materiālus nevar krāsot: vispirms izveidojiet rediģējamu kopiju.

## Tekstūru cepšana

**Tekstūru cepšana** ieraksta attēlos to, ko forma un apkārtne dod virsmai, pa tīkla UV.

- Atlasiet tīklu, kam ir UV (izklājiet to UV darba vietā), atzīmējiet kartes un nospiediet {{ui:Cept}}:
  - **Apkārtējā aizsegšana** — cik atvērts ir katrs punkts: stūri, krokas un vietas zem citiem objektiem kļūst tumšākas. Viss, kas redzams modelī, to ietekmē līdz aizsegšanas attālumam.
  - **Izliekums** — spilgts ārējās malās, tumšs iekšējos stūros, vidēji pelēks plakanās un viegli izliektās daļās, pāri malas platumam, ko iestatījāt.
  - **Normāles no augstas detalizācijas objekta** — atlasiet arī detalizētu kopiju: tās virsmas detaļas tiek ierakstītas kā normāļu karte vienkāršākam objektam (cepšana notiek uz objekta ar mazāk trijstūriem). Meklēšanas attālums ir tas, cik tālu divas virsmas drīkst atrasties viena no otras.
  - **Apgaismojums** — modeļa vietas un datuma saule (Stils) ar tās ēnām, kā arī debesis, kā gaismas karti.
- Attēli pievienojas failam un parādās Attēla mezglos. Ja materiālam, ko rediģējat, ir mezgls **Netīrumi un malu nodilums**, tas uzreiz nolasa jauno aizsegšanu un izliekumu.
- Vairāk stariem uz texeli dod gludāku aizsegšanu un apgaismojumu, bet aizņem ilgāk. Cepšana notiek datora procesora kodolos fonā; {{ui:Pārtraukt cepšanu}} to aptur.

## Grafa veidošana

1. {{ui:Pievienot mezglu…}} (vai {{key:Shift+A}} mezglu redaktorā) pievieno mezglu redaktora vidū.
2. Velciet no izejas punkta (mezgla labajā pusē) uz ieejas punktu (mezgla kreisajā pusē), lai tos savienotu. Otra saite uz ieeju aizstāj pirmo; velciet savienotu ieeju prom, lai to atsaistītu.
3. Ieejas, kas nav savienotas, rāda savu vērtību: ierakstiet skaitli vai izvēlieties krāsu. Iestatījumi atrodas katra mezgla apakšdaļā.

Velciet mezglu pēc tā virsraksta, lai to pārvietotu, velciet tukšu vietu, lai panoramētu, un izmantojiet ritenīti, lai tālinātu. {{key:Delete}} noņem izvēlētos mezglus vai saiti, {{key:Mod+Z}} atsauc, {{key:Mod+D}} dublē, {{key:F}} parāda visus mezglus. Katra izmaiņa ir viens atsaukšanas solis mezglu redaktorā. Modeļa paša atsaukšana materiālus nemaina.

| Mezgli | Ko tie veido |
|---|---|
| Tekstūras koordinātes | Kur punkts atrodas flīzē: atkārtot to, nobīdīt, pagriezt par ceturtdaļu. |
| Vērtība, Krāsa | Skaitlis, krāsa. |
| Attēls | Faila attēls (tāds, kas nācis ar importētu modeli, vai tāds, ko pievienojāt ar {{ui:Pievienot attēlu…}}). Izvēlieties **Colors** fotogrāfijai un **Data** raupjuma vai normāļu kartei. |
| Bibliotēkas tekstūra | Bibliotēkas materiāla tekstūra, raupjums un augstums. |
| Checker, Noise | Kvadrāti; vienmērīgs fraktālais troksnis ar tā detalizāciju, raupjumu un sēklu. |
| Voronoi cells, Waves, Gradient | Šūnas (attālums līdz tuvākajam punktam, malas starp šūnām, krāsa katrai šūnai); joslas šķērsām, uz augšu vai diagonāli, kā sinuss, zobs vai trīsstūris, saliektas ar troksni; lineāri, kvadrātiski, radiāli un sfēriski gradienti. |
| Bricks, Tiles | Ķieģeļu rindas ar nobīdi vai flīžu režģis: krāsas, java vai šuve, sprauga un fāze metros, augstums reljefiem, nejaušs skaitlis katram gabalam. |
| Wood, Marble | Gadskārtu gredzeni pa šķiedru ar smalkām šķiedrām; dzīslas, saliektas ar turbulenci. |
| Dirt and edge wear | Nodilina izliektas malas un notraipa dobumus, izmantojot tīkla izliekuma un aizsegšanas attēlus ([Tekstūru cepšana](topic:shading#bake-textures) tos izveido; vai iestatiet tā divus attēlu iestatījumus tīkla UV izkārtojumā: novietojiet materiālu pēc UV koordinātēm). Bez tiem tas neko nemaina. |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | Darbs ar krāsām. |
| Math, Map range | Aritmētika ar skaitļiem (saskaitīt, reizināt, pakāpe, vienmērīgs solis un citi). |
| Bump, Normal map | Normāle no augstuma (Reljefs) vai no normāļu kartes attēla (Normāļu karte: izvēlieties zaļā kanāla virzienu). |

## Materiāla izvade

Tās iestatījumi nosaka, kā tekstūra guļ uz virsmām:

- **Flīzes platums** un **Flīzes augstums**: cik metru aizņem viena tekstūras flīze. Viss, ko veido grafs, atkārtojas pa flīzi bez šuves.
- **Novietots pēc**: **UV koordinātes** seko virsmām (stumtām/vilktām virsmām: pa katru virsmu; tīkliem: to UV, viena UV vienība = viena flīze), **Kaste** projicē no tuvākās no trim asīm, **Triplanārs** sajauc trīs projekcijas uz slīpām virsmām (**Sajaukuma asums**: jo lielāks, jo cietāks sajaukums).
- **Normāles stiprums** mēro normāles ieeju. **Pārvietojuma mērogs** nosaka, cik tālu pārvietojuma ieeja pārvieto tīkla virsotnes.
- {{ui:Vairāk ieeju}} parāda pārējās OpenPBR ieejas: apvalku, pūkainību, zemvirsmas izkliedi, plānu plēvi, caurlaidību un to krāsas.

## Augstas kvalitātes attēlos

CadCraft ceļu izsekotājs nolasa pamatkrāsu, raupjumu, metāliskumu, necaurredzamību, normāli un emisiju no grafa, kad tās mainās pa virsmu. Jebkura cita ieeja, ko savienojat (piemēram, mainīgs apvalks), tiek izmantota ar savu vidējo vērtību; panelis norāda, kura. Izgriezums no necaurredzamības tekstūras rāda savu formu, un tā ēna ir vienmērīgi caurspīdīga. Mirdzoša tekstūra apgaismo to, ko tā skar, bet netiek uzņemta kā lampa.

**Pārvietojums** pārvieto tikai tīklu virsotnes, tāpēc detaļām pievienojiet Apakšdalīšanas modifikatoru ([Modifikatori](topic:modifiers)). Stumtās/vilktās virsmas saglabā savu formu un iegūst reljefus no normāles.

:::tip
Datorā ar WebGPU grafs tiek aprēķināts grafikas kartē; bez tā — procesorā. Rezultāts ir tāds pats.
:::
