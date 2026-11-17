---
title: Vēl nav pieejams
summary: Ko šī ModelCraft versija vēl nedara un ko darīt tā vietā šodien.
keywords: trūkst, vēl nav, ierobežojumi, ceļvedis, materiāli, tekstūras, teksts, slāņi, apgriezt, sadalīt, mākonis, darbvirsma
from: 179fa5e4
---

ModelCraft ir agrīna versija. Šajā lapā uzskaitīts, ko tā vēl nedara, lai nemeklētu veltīgi, un tuvākais veids, kā šodien paveikt darbu.

## Zīmēšanas rīki

| Vēl nav | Šodien var |
|---|---|
| Brīvroku zīmēšana | Noklikšķiniet punktus ar {{ui:Līkne}} |
| Loka vai apļa segmentu skaita maiņa pēc tā zīmēšanas | Izdzēsiet to un zīmējiet vēlreiz pēc `24s` ierakstīšanas |
| Fonta izvēle [3D tekstam](topic:text3d) vai tā vārdu rediģēšana pēc novietošanas | Izdzēsiet to un pievienojiet tekstu vēlreiz |
| Leņķa maiņa, ierakstot leņķa izmēru, vai cilindra izmēra maiņa no tā apļa izmēra | Pagrieziet malas ar {{ui:Pagriezt}}; mērogojiet cilindru ar {{ui:Mērogot}} |
| Izmēri eksportētajos modeļa failos | Izmēri rādās skata attēlos, izdrukās un PDF failos; modeļa failos ir tikai ģeometrija |
| Apgriešana, sadalīšana un ārējais apvalks | Slēgtas grupas ar [Apvienot, Atņemt un Krustot](topic:solids), vai [krustot virsmas](topic:intersect) un izdzēsiet to, kas nav vajadzīgs |
| Rotācijas ass izvēle ar bultiņu taustiņiem | Noklikšķiniet {{ui:Pagriezt}} centru uz virsmas, kas vērsta tā, kā ass jānorāda |
| Fiksācijas vairāk nekā vienam virzienam vienlaikus | Fiksējiet vienu virzienu ar bultiņu taustiņu, tad piesaistieties punktam |
| Izmēru maiņa pa slīpumu vai no izmēra gala, kas nav stūrī | Novietojiet izmēru starp diviem stūriem, pa malu vai pa sarkano, zaļo vai zilo |

## Animācija

| Vēl nav | Šodien var |
|---|---|
| Virsmu, malu, saules diennakts laika, stila vai paslēptā satura animēšana | Padariet kustīgo daļu par grupu vai komponentu; citam diennakts laikam renderējiet atsevišķu video |
| Kamera, kas seko zīmētam ceļam vai skatās uz kustīgu objektu | Iestatiet vairāk kameras atslēgu pa ceļam ([Animēt](topic:animation)) |
| Skaņa video un augstas kvalitātes (path-traced) video bez WebGPU | Pievienojiet skaņu video redaktorā; bez WebGPU renderējiet video ar ātro renderētāju ([Renderēt video](topic:animation#render-the-video)) |
| Animētas lampas (spilgtums, izkliede, krāsa) renderētā video, objektīva leņķis, animēts bez kameras atslēgām video, materiālu vai renderēšanas iestatījumu animēšana | Lampas animējas skatā; video kamerai pievienojiet atslēgas tuvināšanai; renderējiet atsevišķus video dažādiem lampu iestatījumiem ([Animēt jebkuru īpašību](topic:animate)) |
| Svaru vai kaulu spoguļošana no vienas puses uz otru, redzamas kaulu aploksnes, svaru rādīšana punktu pa punktam ēnota (tie tiek rādīti pa virsmām), salocītā tīkla redzēšana svaru krāsošanas laikā | Nokrāsojiet abas puses vai izveidojiet vienu pusi un pirms skeleta pievienošanas izmantojiet Mirror modifikatoru; pārslēdzieties starp Krāsot svarus un Poza, lai pārbaudītu |
| Kauli, kas nolasīti no glTF, FBX vai USD failiem kā skelets, un skeleti, kas ierakstīti šajos failos | Ielādētie modeļi ienāk miera stāvoklī ar faila svariem; pievienojiet kaulus faila locītavu secībā, tad {{ui:Izmantot faila svarus}} ([Animēt](topic:animate)) |
| Kinemātiskā (IK) mērķa vai pola pārvietošana, velkot to skatā, līknes telpas (lokālās vai pasaules) izvēle, IK ķēžu stiepšana, IK pa līkni | Ierakstiet mērķa punktu vai uzmērķējiet uz objektu un pārvietojiet to; saglabājiet ķēdes to garumos |
| Audums, šķidrumi, mīkstie ķermeņi, locītavas un eņģes starp stingriem ķermeņiem, sadursme ar objekta precīzo formu (ap to ir tikai kastes un bumbas), dzīva simulācija atskaņošanas laikā, sākuma ātrums vai griešanās (ķermeņi sākas miera stāvoklī) | Iepriekš aprēķiniet stingros ķermeņus un atskaņojiet atslēgas; izveidojiet eņģi no atslēgām; sadaliet nestandarta formu kastēs (grupās) |
| Animācijas eksportēšana uz glTF vai citiem modeļa failiem | Renderējiet video; fails `.modelcraft` un [USD fails](topic:usd), ko ModelCraft saglabājis, paliek ModelCraft vajadzībām |
| Komentāra vai nosaukuma rakstīšana problēmai VR, balss piezīmes, sekcijas plaknes pārvietošana ar roku VR | Novietojiet problēmu VR, pēc tam pievienojiet tās tekstu BCF programmā; uzstādiet sekcijas plakni skatā, pirms ieejat: skatiet [Modeļa pārskatīšana VR brillēs](topic:vr-review) |
| Cilvēku redzēšana darba galdā VR (rādās tikai cilvēki VR), VR staigāšanas ierakstīšana | Lūdziet viņiem pievienoties VR vai izveidojiet [animāciju](topic:animation) staigāšanai |

## Tīkli

| Vēl nav | Šodien var |
|---|---|
| Skulptēšana pēc līmeņiem (daudzizšķirtspēja) un Detail, kas noņem trijstūrus, kas kļuva sīki | [Skulptēt](topic:sculpt) apakšdalītu tīklu; {{ui:Pārveidot tīklu}}, lai to atkal izlīdzinātu |
| Pārveidošana četrstūru virsmās, kas seko formai | {{ui:Pārveidot tīklu}} (vienādi trijstūri), tad pārveidojiet to ar [Retopoloģiju](topic:mesh-edit#retopology) |
| Svari, krāsoti uz virsotnēm modifikatoriem (Displace, Smooth un Shrinkwrap darbojas uz visu tīklu) | Lietojiet modifikatoru, tad skulptējiet vai rediģējiet daļas, kurām tas vajadzīgs |
| Virsotņu, malu vai virsmu kopēšana un ielīmēšana, nazja griezums, kas beidzas virsmas iekšpusē, vadu malas bez virsmas | Dublējiet tīklu sadaļā Modelis; griezieties ar nazi no malas līdz malai; [Izvilkt](topic:mesh-edit#change-the-shape) atvērtas malas virsmās |

## Kārtošana un skatīšana

| Vēl nav | Šodien var |
|---|---|
| DWG un DXF situācijas plānu slāņi kā birkas | Situācijas plāns ienāk kā viena grupa: izjauciet to un grupējiet daļas, kuras vēlaties apzīmēt ar birkām |
| Vairāki sekciju griezumi vienlaikus, sekciju kaste vai sekcijas kontūras eksportēšana kā rasējums | Viens [sekciju plakne](topic:sections) griež vienlaikus; eksportējiet skatu kā attēlu |
| Mīkstu malu rādīšana punktēti vai mīkstināšana, velkot slīdni | [Mīkstināt pēc leņķa](topic:soften) sadaļā Objekta informācija un atsaucieties, lai izmēģinātu citu leņķi |
| Tiešsaistes modeļu bibliotēka meklēšanai vai komponenti ar izvēlamām opcijām (krāsa, stils) | [Sākotnējā bibliotēka](topic:starter); importējiet Collada, OBJ vai glTF modeļus; [izstiepiet](topic:stretch) kopiju līdz izmēram |
| Augu ievietošana no augu bibliotēkas | [Izkliedēt](topic:live-view#scatter-plants-rocks-and-people) augus tiešraides skatā vai ievietojiet koku no sākotnējās bibliotēkas |
| Neatkarīgas grupas kopijas | Padariet to par komponentu un pēc tam {{ui:Padarīt unikālu}} (skatiet [Problēmu novēršana](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderēšana

| Vēl nav | Šodien var |
|---|---|
| Renderēšana skatā ({{ui:Renderēt}} darba vieta), renderēšanas rinda, kameras, debesu attēla, miglas un gaismas sajaukšanas opcijas bez WebGPU | {{ui:Renderēt attēlu…}} ar {{ui:Augstā kvalitāte}} izmanto tur WebGL ceļu izsekotāju bez šīm opcijām ([Renderēt attēlu](topic:render#high-quality)) |
| Cita programma zīmē renderēto attēlu bez renderētāja papildinājuma (CadCraft nekad nepalaiž programmu, kas darbojas ar GNU GPL licenci); panorāmas vai stereo kameras un debesu attēls caur citu programmu; Unreal Engine spraudnis (faili tiek rakstīti, spraudnis, kas tos atver, nav izlaists) | Mūsu pašu ātrais un izsekotāja dzinējs; papildinājuma dzinējs ([zīmēt attēlu ar citu programmu](topic:render-other-program)); USD, glTF vai Unreal mapes fails no dzinēju saraksta, ko var ņemt uz jebkuru programmu |
| Izkliedēti augi un akmeņi {{ui:Renderēt attēlu…}} | Tie rādās [tiešraides skatā](topic:live-view), tās panorāmās, skatītājā un video |

## Materiāli un krāsas

| Vēl nav | Šodien var |
|---|---|
| Ieejas, kas nav pamata krāsa, raupjums, metālisks, caurspīdīgums, normāls un emisija, mainās pa virsmu augstas kvalitātes attēlos (tie izmanto vidējo) | [Veidojiet materiālus ar mezgliem](topic:shading): savienojiet tos tik un tā, skats tos rādīs mainīgus |
| Pārvietojums uz stumšanas/vilkšanas virsmām | Pārvērtiet objektu par tīklu pārvietojumam |
| Savu materiālu kopīgošana bibliotēkā no lietotnes un iepakotas (ARM/ORM) vai EXR kartes importētā tekstūru komplektā | Saglabājiet tos failā; importējiet atsevišķas kartes kā PNG vai JPEG |
| Faila materiāli tiešraides TeamWork sesijās (tie paliek datorā, kurā tie izveidoti) | Saglabājiet failu un kopīgojiet to |
| Uzlīmes, kas liecas ap izliektām virsmām, uzlīmes atsaukšanā vai vairāku virsmu tekstūru krāsošana vienlaikus pāri šuvei | Novietojiet mazākas uzlīmes uz katras daļas; krāsojiet katru šuves pusi atsevišķi |
| Apdedzināšana uz stumšanas/vilkšanas virsmām, vairāku objektu apdedzināšana vienā attēlā, rokām veidojams karkass vai apgaismojums no lampām | Pārvērtiet par tīklu un izvērsiet; apdedziniet katru objektu; palieliniet meklēšanas attālumu; renderējiet attēlu lampu gaismai |
| Raupjuma, metālisma vai augstuma krāsošana, krāsošana ar attēliem (zīmogiem) un tekstūras krāsošana lielākai par 512 × 512 | Krāsojiet pamata krāsu šeit; veidojiet citas kartes attēlu redaktorā un importējiet tās kā tekstūru komplektu |
| Tekstūras Collada, STL, PLY, 3MF, IFC, DWG un DXF eksportos un failu paša materiālu mezglu grafi eksportētos modeļos | Šie formāti saņem katra materiāla krāsu; glTF un OBJ saglabā importētās tekstūras; eksportējiet materiālu atsevišķi kā [MaterialX](topic:shading#materialx); [USD](topic:usd) saglabā visu modeli ModelCraft vajadzībām |
| Tekstūras Collada failos | Tās tiek saskaitītas un izlaistas importējot; tekstūras `.skp` un `.glb` failos ienāk |

## Faili

| Vēl nav | Šodien var |
|---|---|
| SketchUp failu saglabāšana, un teksts un izmēri no tiem | [Importēt](topic:import-sketchup-files) saglabā virsmas, krāsas un tekstūras; eksportējiet Collada (`.dae`), lai atgrieztos SketchUp |
| Izmēri un palīglīnijas DWG un DXF eksportos | Pievienojiet tos CAD programmā pēc eksportēšanas |
| Punkti, tabulas un vairāklīniju norādes no DWG un DXF | Tās tiek saskaitītas un izlaistas; teksts ienāk kā vienlīniju burti, nevis rasējuma fonts |
| Virsmas, tīkli, tabulas un vairāklīniju norādes no DWG un DXF; 3D cieto ķermeņu virsmas uz izliektām, lofētām vai citādi brīvformas virsmām | Arī tās tiek saskaitītas un izlaistas (paši 3D cietie ķermeņi ienāk). Eksportējiet šīs daļas no CAD programmas kā OBJ vai Collada un importējiet to |
| IFC tipi, īpašības vai materiāli | IFC eksportā ir [stāvi](topic:formats#ifc-ifc) un vispārīgi elementi; pievienojiet pārējo BIM programmā |
| Modeļa tiešā nosūtīšana uz BimCraft | Eksportējiet {{ui:IFC BimCraft (.ifc)}} un atveriet to BimCraft |
| Brīvas malas glTF un STL | Līniju zīmējumiem izmantojiet OBJ vai Collada |
| glTF un FBX materiāli, izņemot pamata krāsu (metāls, raupjums, normālu kartes, stikls, skaidrais slānis, spīdums…) | Tie tiek nolasīti un uzskaitīti; ModelCraft saglabā pamata krāsu vai tekstūru. Atjaunojiet izskatu [Ēnojuma darba vietā](topic:shading) |
| glTF kauli, animācijas un morfa mērķi | Ielādētie modeļi ienāk miera stāvoklī; animējiet [laika līnijā](topic:animation) |
| Krāsas un montāžas daļu nosaukumi no STEP failiem | Daļas ienāk kā tīkli patiesajā izmērā; [krāsojiet](topic:paint) un nosauciet tās pēc importa |
| SubD objekti, teksts, izmēri un gaismas no `.3dm` failiem | Skatiet [kas tiek izlaists](topic:import-3dm-files#what-is-left-out-and-said); pārvērtiet SubD par tīkliem programmā, kas izveidoja failu |
| KTX2 tekstūras un materiālu variantas glTF | Eksportējiet ar PNG vai JPEG tekstūrām; tiek izmantots noklusējuma variants |
| glTF instancēšanas (EXT_mesh_gpu_instancing) rakstīšana | Komponenti tiek ierakstīti vienreiz un novietoti daudzkārt, ko nolasa jebkurš skatītājs |
| Alembic animācija (katrs kešatmiņas paraugs), Alembic punkti un līknes, Alembic rakstīšana | Ienāk pirmais paraugs; animējiet [laika līnijā](topic:animation); rakstiet glTF, USD vai OBJ |
| Reljefa un normālu kartes OBJ materiālos | Ienāk tikai krāsu attēls (`map_Kd`) |
| FBX kauli un animācija, FBX eksports, FBX 6 faili | Ielādētie modeļi ienāk miera stāvoklī; eksportējiet glTF; saglabājiet vecos failus kā FBX 2011 vai jaunākus |
| Collada ādas, morfi, kameras, gaismas, skatīšanās un slīpuma transformācijas, ārējās atsauces | Importējot tie tiek izlaisti un uzskaitīti ziņojumā |
| Dublējumfaili | {{ui:Saglabāt kā}} ({{key:Mod+Shift+S}}) saglabā citu kopiju. Pēc avārijas ModelCraft piedāvā atjaunot jūsu nesaglabāto darbu ("Atjaunot jūsu darbu?") |
| Mākoņa saglabāšana un sinhronizācija starp datoriem | Vēl nav pieejams. Saglabājiet failus datorā un kopējiet tos tur, kur vajag |

## 3D drukāšana

| Vēl nav | Šodien var |
|---|---|
| Īstie slicer atbalsti (saskarnes, plosts, precīzs atbalsta raksts) | [Balstu priekšskatījums](topic:print-tools#supports-preview) parāda, kur un cik apmēram; jūsu slicer priekšskatījums rāda īstos |
| Gabala, kas iet cauri pats sev, atšķetināšana vai malas, kur saskaras trīs vai vairāk virsmas | [Labošana](topic:print-tools#repair) uzskaita tās un norāda, kur tās atrodas; izmantojiet [Krustot virsmas](topic:intersect) un izdzēsiet to, kas ir iekšpusē |
| Pildījuma rakstus un režģi iekšā dobumā | [Iedobums](topic:print-tools#hollow) to atstāj tukšu; jūsu slicer pievieno pildījumu cietam gabalam |
| Detaļas, kas par mazām jūsu sprauslai (izņemot sienas) | [Sienas biezums](topic:print-tools#wall-thickness) atrod plānas sienas; jūsu slicer slāņu priekšskatījums rāda pārējo |

## Veiktspēja

Atsaukšana glabā modeļa kopiju katram solim ([tīkls](topic:meshes) glabā tikai to, kas mainījies), tāpēc ļoti lieli stumšanas/vilkšanas ģeometrijas importi padara katru rediģēšanu lēnāku. Turiet importus vieglus un saglabājiet un atveriet failu vēlreiz, lai notīrītu vēsturi.

## Lietotnes un platformas

- **Darbvirsma:** ModelCraft darbojas pārlūkprogrammā Mac, Windows un Linux, kā arī CadCraft Studio, darbvirsmas lietotnē ar visām astoņām lietotnēm vienā instalācijā. Android ierīcēs CadCraft Studio instalējas no APK getcadcraft.com/download. iPad vai iPhone versijas vēl nav.
- **Skārieni:** žestus ar pirkstiem skatiet [Orbīta, panoramēšana un tālummaiņa](topic:orbit-pan-zoom). Pildspalvas spiediens nosaka otu [Skulptēšanā](topic:sculpt); citur spiediens un pildspalvas slīpums netiek izmantoti.
- **Lapas:** ModelCraft [drukā vienu skatu uz lapas](topic:export-model#print-the-view-or-save-it-as-a-pdf); nav lapu izkārtojumu ar vairākiem skatiem un titulblokiem. Rasējumiem mērogā eksportējiet uz DWG/DXF, kas draudzīgi CadCraft.
