---
title: No citiem modelētājiem
summary: Kā push/pull modelēšanas paradumi atbilst ModelCraft taustiņš pēc taustiņa un kādas atšķirības pārsteidz cilvēkus.
keywords: pāreja, migrēt, pazīstams, atšķirības, push pull modelētājs, skp, īsinājumtaustiņi, paradumi, salīdzināt, mērījumu lodziņš, struktūras koks, objekta informācija
from: 74ffd4ac
---

Ja esat modelējis SketchUp, ModelCraft jums šķitīs pazīstams: tā pati ideja par virsmām un stumt/vilkt, tie paši rīku burti, vērtību lodziņš, kurā rakstāt, neklikšķinot, secinājums pēc sarkanās, zaļās un zilās ass, grupas, komponentes, struktūras koks, {{ui:Objekta informācija}} un ainas. Šī lapa uzskaita, kas tieši pārnesas, un, vēl svarīgāk, kas nepārnesas.

## Paradumi, kas pārnesas

| Jums ierasts | ModelCraft |
|---|---|
| Nospiest Space atlasei, L līnijai, R taisnstūrim, C riņķim | Tas pats: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Nospiest P Stumt/vilkt, M Pārvietot, Q Pagriezt, S Mērogot, E Dzēšgumija, T Mērlente | Tas pats: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Nospiest O Orbīta, H Panoramēt, Z Tālummaiņa, Shift+Z Tālummaiņa uz visu | Tas pats: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Nospiest G, lai izveidotu komponenti | Tas pats: {{key:G}}. {{key:Shift+G}} izveido grupu |
| Ierakstīt mērījumu lodziņā, neklikšķinot uz tā | Tas pats, vērtību lodziņā apakšā. Nospiediet {{key:Enter}} |
| Ierakstīt `4m,3m` taisnstūrim, `12s` malām | Tas pats |
| Ierakstīt `3x` vai `/3` pēc kopēšanas ar Pārvietot | Tas pats; `*3` arī darbojas |
| Ierakstīt `[x,y,z]` vai `<dx,dy,dz>` punktam vai nobīdei | Tas pats |
| Ierakstīt vienkāršu skaitli modelī collās un saņemt collas | Tas pats |
| Vidējā poga velkot orbitē; Shift+vidējā poga panoramē; ritenis tuvina pie kursora | Tas pats |
| Dubultklikšķis ar Stumt/vilkt, lai atkārtotu attālumu | Tas pats |
| Bultiņu taustiņi, lai piefiksētu sarkano, zaļo, zilo un paralēlo | Tas pats: {{key:Right}} sarkanā, {{key:Left}} zaļā, {{key:Up}} zilā, {{key:Down}} paralēlā |
| Turēt Shift, lai piefiksētu piesaisti | Tas pats |
| Ctrl (Option uz Mac), lai kopētu pārvietošanas laikā | {{key:Ctrl}}, {{key:Mod}} vai {{key:Alt}}, jebkurā datorā |
| Shift, lai pārslēgtu; Ctrl, lai pievienotu; Shift+Ctrl, lai noņemtu no atlases | Tie paši taustiņi; uz Mac izmantojiet {{key:Mod}} tur, kur rakstīts Ctrl |
| Logs no kreisās uz labo; krustojums no labās uz kreiso | Tas pats |
| Izmēru rīks garumu atzīmēšanai | {{key:D}}, un vairāk: ierakstiet jaunu garumu izmērā, un modelis mainās līdz tam. Skatiet [Izmērs un izmēra maiņa](topic:dimensions) |
| Dubultklikšķis uz virsmas virsmai plus malām; trīskāršais klikšķis visam savienotajam | Tas pats |
| Dubultklikšķis uz grupas, lai to rediģētu; Esc, lai aizvērtu | Tas pats |
| Novilkt līniju pāri virsmai, lai to sadalītu; dzēst malu starp vienā plaknē esošām virsmām, lai tās saplūst | Tas pats |
| Pabīdīt logu taisnstūri caur sienu, lai to izgrieztu | Tas pats |
| Aizmugurējās virsmas pelēkzilas; Apgriezt virsmas | Tā pati krāsa; {{ui:Apgriezt virsmu}} {{ui:Objekta informācija}} |
| Ainas kā cilnes virs skata, Page Up un Page Down | Tas pats, ar {{ui:Atskaņot}} panelī {{ui:Ainas}} |
| Ēnas no datuma, laika, platuma un garuma, ziemeļi zaļā | Tas pats, panelī {{ui:Stils}} |

## Atšķirības, kas pārsteidz cilvēkus

### Saglabāšana ir lejupielāde

Nav {{ui:Saglabāt}}, kas pārraksta atvērto failu, nav dialoga {{ui:Saglabāt kā}} ar nosaukumu, nav automātiskās saglabāšanas un nav dublējuma faila. {{ui:Saglabāt}} ({{key:Mod+S}}) katru reizi lejupielādē jaunu `.modelcraft` failu, parasti jūsu lejupielāžu mapē. Saglabājiet bieži un pārdēvējiet vai pārvietojiet failus paši. Skatiet [Atvēršana, saglabāšana, importēšana un eksportēšana](topic:files).

### Importē .skp failus, bet nesaglabā tos

{{ui:Importēt}} lasa SketchUp failus ar ModelCraft pašu lasītāju lapā: grupas, komponentes, krāsas, tekstūras uz virsmām, tagi un mīkstās malas tiek pārņemti. Skatiet [Failu formāti sīkāk](topic:formats#skp-files). ModelCraft nevar saglabāt `.skp`: lai atgrieztos, eksportējiet Collada no ModelCraft un importējiet to SketchUp.

### Nav konteksta izvēlnes ar peles labo pogu

Labā poga velkot panoramē; labais klikšķis nedara neko. Komandas, ko meklētu konteksta izvēlnē, atrodas {{ui:Objekta informācija}} ({{ui:Apgriezt virsmu}}, {{ui:Rediģēšana}}, {{ui:Sadalīt}}, {{ui:Padarīt unikālu}}, {{ui:Izveidot komponentu}}) un rīkjoslas grupā {{ui:Kārtošana}}.

### Mērvienības ir statusa joslā

Nav modeļa informācijas vai veidnes izvēles. Mērvienību izvēlne ir apakšā pa labi. Jauns modelis sākas pēdās un collās ASV un milimetros citur, pēc jūsu pārlūka valodas iestatījuma. Decimāldaļas vienmēr raksta ar punktu: `2.5m`, nekad `2,5m`, jo komats vienmēr atdala vērtības.

### Krāsai ir savi materiāli

{{ui:Krāsot}} ({{key:B}}) krāso vienkāršas krāsas un materiālus sadaļā {{ui:Materiāli}}: ķieģeli, apšuvumu, jumta segumu, koku, akmeni un citus, ko zīmē ModelCraft. Savu attēlu kā materiālu vēl nevar ielādēt; tekstūras, kas nāk ar importētiem failiem, tiek saglabātas. Skatiet [Krāsot ar krāsām un materiāliem](topic:paint).

### Mērogs ir vienmērīgs, bez rokturiem

Mērogošanai nav kastes ar rokturiem. Noklikšķiniet punktu, kas paliek vietā — atsauces punktu —, tad jauno izmēru vai ierakstītu koeficientu. Tas vienmēr mērogo vienmērīgi visos virzienos. Lai stieptu vienā virzienā, stumiet/velciet vai pārvietojiet virsmu, vai pārrakstiet grupas platumu, dziļumu vai augstumu {{ui:Objekta informācija}}, vai [mainiet izmēru ar izmēru](topic:dimensions).

### Pagriešana izvēlas plakni no vietas, kur noklikšķiniet

Nav transportiera, kas pielīp virsmām, kad ar bultiņu taustiņiem virzāt kursoru, lai izvēlētos plakni. Noklikšķiniet centrā uz virsmas, lai pagrieztu tās plaknē, vai uz zemes, lai pagrieztu ap vertikāli. Bultiņu taustiņi pirms pirmā klikšķa pagriež skatu orbītā.

### Piesaiste no punktiem, pār kuriem ejat

ModelCraft piesaistās ass virzieniem no **jūsu sākumpunkta** un punktiem, malām un virsmām zem kursora. Tas neseko virzienam no punkta, pār kuru tikai pārvilkāt kursoru (punktētā "no punkta" piesaiste). Lai izlīdzinātos ar tālu stūri, piefiksējiet asi ar bultiņu taustiņu un pārvelciet kursoru pāri šim stūrim: fiksētais punkts pārvietojas, lai izlīdzinātos ar to. Vai novietojiet [palīglīniju](topic:guides-measure).

### Paralēlā izmanto malu, pār kuru pārgājāt pirms sākuma

Paralēlā un perpendikulārā piesaiste izmanto pēdējo malu, pār kuru kursors pārgāja **pirms pirmā klikšķa**, nevis malas, pār kurām virzāties zīmēšanas laikā. Skatiet [Piesaiste un pieķeršana](topic:inference#parallel-and-perpendicular).

### Grupu kopijas ir saistītas

Grupas kopēšana ar {{ui:Pārvietot}} izveido otru tās pašas grupas novietojumu, tāpēc viena rediģēšana maina abas, tāpat kā komponentēm. SketchUp grupas ir neatkarīgas. Skatiet [Problēmu novēršana](topic:troubleshooting#editing-one-group-changed-another).

### Atstarpe nepanoramē

{{key:Space}} izvēlas {{ui:Atlasīt}}, kā SketchUp. Dažās citās tīmekļa lietotnēs, turot atstarpi, panoramē; šeit nē. Panoramēšanai velciet ar labo pogu.

### Divu pirkstu ritināšana tuvina

Skārienpaliktnī iestatiet {{ui:Iestatījumi}} › {{ui:ModelCraft}} › Ritināšana uz Skārienpaliktnis: divi pirksti orbitē, {{key:Shift}} un divi pirksti panoramē, saspiešana tuvina. Skatiet [Orbitēšana, panoramēšana un tālummaiņa](topic:orbit-pan-zoom#on-a-trackpad).

Ja jūsu rokas zina Blender taustiņus, nevis SketchUp, izvēlieties izvēlnes stilu {{ui:Modelētājs}}: {{key:G}}, {{key:R}} un {{key:S}} uzreiz darbojas ar atlasi, {{key:E}} izspiež (stumt/vilkt), {{key:Shift+D}} dublē, un galvenes izvēlnes josla (Fails, Rediģēšana, Skats, Atlasīt, Pievienot, Objekts, Tīkls) aizstāj rīkjoslu. No SketchUp nāk {{ui:Bīdīt-vilkt}} stils: tas dod izvēlnes joslu, līdzīgu savējai, pār tiem pašiem rīku burtiem. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).

### Cieti korpusi, kas iespiesti viens otrā, nesagriežas

Stumt/vilkt izgriež caur virsmu aiz tā tajā pašā objektā, bet divi atsevišķi cieti korpusi, kas iespiesti viens otrā, nekrustojas. Nav Intersect Faces un nav Solid Tools.

### Kas trūkst

Brīvroku zīmēšana, Trim, Split un Outer Shell, jūsu attēlu materiāli, paplašinājumi un izkārtojuma rīks lapām šajā versijā nav. [Vēl nav izveidots](topic:not-built-yet) uzskaita, ko darīt tā vietā.

## Taustiņi, ko patur pārlūks

ModelCraft darbojas pārlūkā, tāpēc dažus taustiņus izmanto pārlūks, nevis lietotne. {{key:Mod+N}} atver pārlūka logu (izmantojiet {{ui:Jauns}}), un {{key:Mod+W}} aizver cilni. Ja ir nesaglabātas izmaiņas, pārlūks pirms aizvēršanas jautā. Skatiet [Taustiņi, peles un skārienpaliktņi](common:keys#shortcuts-the-browser-keeps).
