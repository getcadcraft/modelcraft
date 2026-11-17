---
title: Problēmu novēršana
summary: Simptomi, cēloņi un risinājumi, sākot ar tukšu 3D skatu līdz importiem nepareizā izmērā, ar ziņojumiem, ko rāda ModelCraft.
keywords: problēma, nepatikšanas, kļūda, nedarbojas, tukšs, webgl, grafika, lēns, ziņojums, imports neizdevās, nepareizs izmērs, nevar atlasīt, skārienekrāns, taustiņi nedarbojas, pazaudēts darbs
from: 6e7394be
---

## 3D skats ir tukšs

**Simptoms:** ekrāna vidus paliek tukšs vai rāda tikai fona krāsu, un rīku klikšķināšana neko nedara.

**Cēlonis:** ModelCraft zīmē ar WebGL 2, pārlūkprogrammas 3D grafiku. Tā nav pieejama, ja pārlūkprogramma ir veca, ja aparatūras paātrinājums ir izslēgts vai ja grafikas draiveris ir bloķēts.

**Risinājums:**

:::chromium
1. Atveriet pārlūkprogrammas iestatījumus un meklējiet "grafikas paātrinājums".
2. Ieslēdziet "Izmantot grafikas paātrinājumu, ja tas ir pieejams" un restartējiet pārlūkprogrammu.
3. Ja tas jau ir ieslēgts, adreses joslā ierakstiet `chrome://gpu` (Edge pārlūkā `edge://gpu`) un sarakstā atrodiet "WebGL2". Ja tur ir "Atspējots", atjauniniet grafikas draiveri.
:::

:::firefox
1. Atveriet **Iestatījumi**, pēc tam **Vispārīgi**, un ritiniet līdz "Performance" (veiktspēja).
2. Noņemiet atzīmi no "Izmantot ieteiktos veiktspējas iestatījumus", pēc tam atzīmējiet "Izmantot aparatūras paātrinājumu, ja tas ir pieejams". Restartējiet Firefox.
3. Ja joprojām nedarbojas, adreses joslā ierakstiet `about:support` un sadaļā "Graphics" (grafika) skatiet WebGL 2.
:::

:::safari
Atjauniniet macOS un Safari. Jaunākas Safari versijas vienmēr ietver WebGL 2. Ja esat mainījis eksperimentālās funkcijas sadaļā **Safari**, tad **Settings** (iestatījumi), tad **Advanced** (papildu) vai **Feature Flags**, atiestatiet tās.
:::

Darba datorā, attālinātajā darbvirsmā vai virtuālajā mašīnā 3D grafiku var bloķēt politika. Izmēģiniet citu datoru. Skatiet [Pārlūkprogrammas un datori](common:browsers).

## Taustiņi nedarbojas vai raksta lodziņā

**Cēlonis:** tastatūras fokuss ir paneļa laukā: sarakstā {{ui:Virsmas}} sadaļā {{ui:Stils}}, saules iestatījumā, laukā {{ui:Nosaukums}} sadaļā {{ui:Objekta informācija}} vai vienību izvēlnē. Burti un bultiņu taustiņi tad iet uz šo lauku.

**Risinājums:** noklikšķiniet 3D skatā un nospiediet taustiņu vēlreiz. Taustiņi arī nedarbojas, kamēr ir atvērts dialogs.

## Skaitļa ierakstīšana neko nedara

- **Vēl nav virziena.** Ierakstītais garums iet tajā virzienā, kurā rādītājs ir no pirmā klikšķa. Pavelciet rādītāju nedaudz vēlamajā virzienā un tad ierakstiet.
- **Nepareizs brīdis.** Vairums rīku pieņem ierakstītu vērtību tikai pēc pirmā klikšķa: vispirms noklikšķiniet pirmo stūri, virsmu vai punktu, no kura pārvietot. {{ui:Riņķis}} un {{ui:Daudzstūris}} pieņem malu skaitu pirms pirmā klikšķa.
- **"Ierakstiet garumu, piemēram, 3m, 10'6" vai 4m,3m."** ModelCraft to nevarēja nolasīt. Pārbaudiet, vai nav decimālkomata (`2,5`): lietojiet punktu.

## Forma sākas nepareizā vietā skārienekrānā

**Simptoms:** ar pirkstu pirmais taisnstūris ir kārtībā, bet nākamais taisnstūris, riņķis vai līnija sākas tur, kur beidzās iepriekšējais pieskāriens, nevis tur, kur pieskārāties.

**Cēlonis:** šajā versijā ir kļūda: skārienekrānā rīks atceras pēdējo piesaistes punktu no iepriekšējā žesta.

**Risinājums:** pirms katras jaunas formas vēlreiz pieskarieties rīka pogai rīkjoslā. Tas sāk rīku no jauna, un pirmais punkts nonāk tur, kur pieskaraties.

## Viena grupa mainīja citu

**Simptoms:** jūs nokopējājāt grupu ar {{ui:Pārvietot}} un {{key:Ctrl}}, atvērāt vienu kopiju un rediģējāt to, un otra kopija arī mainījās. {{ui:Struktūra}} rāda abas ar vienādu nosaukumu.

**Cēlonis:** šajā versijā grupas kopēšana izveido otru šīs grupas izvietojumu, kā komponentam. ModelCraft pogu {{ui:Padarīt unikālu}} piedāvā tikai komponentiem.

**Risinājums:** atlasiet kopiju, kuru vēlaties mainīt, noklikšķiniet uz {{ui:Izveidot komponentu}} sadaļā {{ui:Objekta informācija}}, pēc tam uz {{ui:Padarīt unikālu}}. Tad šai kopijai ir savs saturs. Vai arī {{ui:Sadalīt}} to.

## Stumšana/vilkšana nedara to, ko gaidīju

- **"Stumt/vilkt darbojas ar virsmu. Noklikšķiniet uz virsmas."** Noklikšķinājāt uz malas vai tukšas vietas. Virziet rādītāju, līdz virsma izceļas, un tad noklikšķiniet.
- **Virsma ir grupā.** Vispirms veiciet dubultklikšķi uz grupas, lai to atvērtu.
- **Logs nepārgrieza sienu.** Taisnstūrim jābūt zīmētam uz sienas virsmas, nevis tās priekšā, un sienai jābūt aizmugures virsmai. Skatiet [Izgriezt atvērumu sienā](topic:openings#if-it-did-not-cut-through).
- **Divi cietie ķermeņi pārklājas, bet nesapludina.** Cietie ķermeņi, kas iespiesti viens otrā, šajā versijā viens otru negriež un nesavieno.

## Līnija vai forma nav izveidojusi virsmu

Virsma aizpildās tikai tad, kad malas noslēdz plakanu cilpu. Pārbaudiet, vai pēdējais punkts piesaistījās pirmajam ("Galapunkts"), un vai visas malas atrodas vienā plaknē. Cilpa, kas ir nedaudz ārpus plaknes, paliek kā līnijas. Pievelciet vienu no tās malām vēlreiz, piesaistoties stūriem.

## Nevaru atlasīt vai dzēst virsmu

- Ar {{ui:Atlasīt}} klikšķis tuvu malai paņem malu. Noklikšķiniet tuvāk virsmas vidum.
- {{ui:Dzēšgumija}} neatlasa virsmas. Atlasiet virsmu un nospiediet {{key:Delete}}, vai dzēsiet vienu no tās malām.
- Ja virsma pieder grupai vai komponentam, klikšķis atlasa visu. Veiciet dubultklikšķi, lai atvērtu.

## "Vispirms atlasiet, ko pārvietot, vai noklikšķiniet uz tā."

{{ui:Pārvietot}}, {{ui:Pagriezt}} un {{ui:Mērogot}} vajag, ar ko strādāt: atlasiet to vispirms vai sāciet rīku, noklikšķinot uz paša objekta (nevis uz tukšas vietas vai palīglīnijas).

## "Vispirms atlasiet ģeometriju (velciet logu vai veiciet trīskāršu klikšķi, lai atlasītu visu saistīto)."

{{key:G}} un {{key:Shift+G}} vajag atlasi. Palīglīnijas nevar grupēt.

## Bultiņu taustiņi griež skatu, nevis bloķē

Bloķēšana darbojas tikai pēc pirmā klikšķa zīmēšanas vai rediģēšanas rīkā. {{ui:Stumt/vilkt}} bloķēšanas nav, un {{ui:Pagriezt}} tās nemaina pagriezienu. Citos brīžos bultiņu taustiņi griež skatu.

## Esc pilnekrāna režīmā

Pilnekrāna režīmā pārlūkprogramma var izmantot pirmo {{key:Esc}}, lai izietu no pilnekrāna. Nospiediet {{key:Esc}} vēlreiz, lai atceltu rīku.

## Nav vidējās pogas

Nospiediet {{key:O}} rīkam {{ui:Orbīta}} un velciet, vai izmantojiet bultiņu taustiņus. Skatiet [Orbīta, panoramēšana un tālummaiņa](topic:orbit-pan-zoom#without-a-middle-button).

## Importi

| Ziņojums | Ko darīt |
|---|---|
| "ModelCraft importē SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG un DXF. … nav neviens no šiem." | Eksportējiet modeli no citas programmas vienā no šiem formātiem |
| "Šis fails ir lielāks par 300 MB." | Vienkāršojiet vai sadaliet modeli citā programmā |
| "… ir par lielu, lai šeit modelētu (vairāk nekā 2 miljoni virsotņu)." | Tas pats |
| "Šim .gltf failam vajag "…"…" | Ievelciet `.gltf` kopā ar tā `.bin` un tekstūru failiem vai atveriet `.glb` versiju |
| "Šim glTF failam vajag … paplašinājumu, ko ModelCraft vēl nelasa." | Eksportējiet vēlreiz no citas programmas bez šā paplašinājuma (piemēram, KTX2 tekstūras) |
| OBJ tiek importēts bez savām krāsām vai tekstūrām | Ievelciet `.obj` kopā ar tā `.mtl` un attēliem |
| "Šis Alembic fails izmanto veco HDF5 izkārtojumu…" | Saglabājiet to vēlreiz no citas programmas kā Ogawa Alembic failu |
| FBX tiek importēts bez savām tekstūrām | Ievelciet `.fbx` kopā ar tā tekstūru attēliem vai eksportējot iekļaujiet medijus |
| "Šis FBX fails ir versijas …, ko ModelCraft nelasa" | Eksportējiet vēlreiz kā FBX 2011 vai jaunāku |
| STL vai PLY tiek importēts 1,000 reizes par lielu vai par mazu | STL tiek nolasīts milimetros, PLY metros: mērogojiet to (skatiet [Pagriezt un mērogot](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Šis nav Collada (.dae) fails…" vai "…nav pareizi veidots XML…" | Fails ir bojāts vai nav Collada. Eksportējiet to vēlreiz |
| "Šajā Collada failā nav ģeometrijas, ko ModelCraft var importēt." | Tajā ir tikai kameras, gaismas vai atsauces uz citiem failiem |
| "Šis ir binārs DXF. Saglabājiet to kā ASCII DXF un mēģiniet vēlreiz." | Saglabājiet to vēlreiz no CAD programmas kā ASCII |
| "Šis nav DWG rasējums…" | Fails nav DWG vai ir bojāts |
| "Rasējumu nevarēja nolasīt (…). Tas var būt bojāts vai saglabāts DWG versijā, ko lasītājs neapstrādā…" | Iekavās ir iemesls. Saglabājiet to kā DXF vai kā DWG no AutoCAD 2000 līdz 2018 no CAD programmas |
| "Šis rasējums sniedzas vairāk nekā 10,000 km no sava sākumpunkta…" | Pārvietojiet rasējumu tuvu 0,0 CAD programmā |

### Imports ir nepareizā izmērā vai guļ uz sāniem

- **OBJ:** OBJ nesatur mērvienību; ModelCraft nolasa metrus. Milimetru modelis tiek importēts 1000 reizes par lielu: [mērogojiet](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) to ar `0.001`; collu modeli ar `0.0254`.
- **OBJ guļ uz sāniem:** ModelCraft sagaida OBJ failus ar Y augšup. Fails, kas rakstīts ar Z augšup, tiek importēts guļus. Pagrieziet to par 90° ap sarkano asi: noklikšķiniet {{ui:Pagriezt}} centru uz virsmas, kas vērsta sarkanās ass virzienā, vai atveriet failu tā programmā un eksportējiet ar Y augšup.
- **DWG vai DXF:** dialogā "Rasējuma vienības" izvēlējāties nepareizu mērvienību. Atsaukt un importēt vēlreiz.

## Failu atvēršana

| Ziņojums | Ko darīt |
|---|---|
| "Šis fails nav ModelCraft modelis (tas nav JSON)." | Citiem formātiem izmantojiet {{ui:Importēt}} |
| "Šis nav ModelCraft fails, ko mēs varam atvērt: …" | Fails ir bojāts vai mainīts ar roku |
| "Šo modeli saglabāja jaunāks ModelCraft…" | Atveriet to jaunākā versijā |
| "Šis fails ir lielāks par 200 MB." | Modelis šeit ir pārāk liels, lai to atvērtu |

## Pazaudēts darbs

ModelCraft pats neglabā failā. Kad aizverat vai pārlādējat cilni ar nesaglabātām izmaiņām, pārlūkprogramma vispirms jautā ("Pamest vietni?" vai "Pārlādēt vietni?"); izvēlieties palikt un saglabāt. Arī {{ui:Jauns}} un {{ui:Atvērt}} jautā ("Nesaglabātas izmaiņas"). Ja pārlūkprogramma vai dators avarēja, atveriet ModelCraft vēlreiz tajā pašā pārlūkprogrammā: tas piedāvā atjaunot nesaglabāto darbu ("Atjaunot jūsu darbu?"; skatiet [Atjaunot jūsu darbu](common:recover)). Saglabājiet bieži ar {{key:Mod+S}}.

## Mana lejupielāžu mape piepildās ar kopijām

Katra saglabāšana ir jauns lejupielādes fails ar nosaukumu `Untitled (1).modelcraft`, `Untitled (2).modelcraft` un tā tālāk. Dzēsiet vecos vai iestatiet pārlūkprogrammu, lai tā jautātu, kur saglabāt katru failu, un pati pārrakstītu veco failu. Skatiet [Atvērt, saglabāt, importēt un eksportēt](topic:files#save-a-model).

## Tas kļūst lēns

- Katrs atsaukšanas solis glabā modeļa kopiju (un [tīkls](topic:meshes) glabā tikai to, kas mainījies), tāpēc ļoti lielā stumšanas/vilkšanas ģeometrijas importā katra rediģēšana aizņem ilgāk. Sadaliet vai dzēsiet to, kas nav vajadzīgs, saglabājiet un atveriet vēlreiz: atkārtota atvēršana arī notīra atsaukšanas vēsturi.
- Saules ēnas prasa visvairāk resursu. Modelējot, noņemiet atzīmi no {{ui:Saules ēnas}}.

## Nav ēnu

{{ui:Saules ēnas}} ir izslēgtas, saule ir zem horizonta izvēlētajā laikā ("Šajā laikā saule ir zem horizonta."), vai stils ir {{ui:Karkass}}, kas ēnas nezīmē.

## "Šī pārlūkprogramma neatļāva pilnekrāna režīmu."

Dažas pārlūkprogrammas un iegultie skati neļauj pilnekrānu. Izmantojiet pārlūkprogrammas pašu pilnekrāna režīmu ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft neatveras bez savienojuma

ModelCraft atveras bezsaistē tikai tad, ja tas pirms tam tajā pārlūkprogrammā ir saglabāts lietošanai bezsaistē: lietotnes joslas pogai jābūt ar uzrakstu {{ui:Gatavs darbam bezsaistē}}. Atveriet to tiešsaistē un noklikšķiniet uz {{ui:Saglabāt bezsaistei}}. Ja pogā ir {{ui:Neizdevās saglabāt}}, noklikšķiniet vēlreiz, kad savienojums ir labāks; {{ui:Bezsaiste nav pieejama}} nozīmē, ka šis logs (privātais logs vai pārvaldīts dators) nevar saglabāt kopiju. Skatiet [Darbs bezsaistē](common:offline).
