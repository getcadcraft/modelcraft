---
title: Renderēt modeļa attēlu
summary: Izveidojiet attēlu, kas izskatās pēc dienasgaismas: debesis, saule no modeļa vietas un datuma, mīkstas ēnas, stikla un metāla izskats, pēc tam saglabājiet to kā PNG.
keywords: renderēt, sagatave, ainu sagataves, iekštelpas, ārtelpas, griezuma skats, nakts, viens klikšķis, renderēšana, ceļa izsekošana, staru izsekošana, globālais apgaismojums, atspulgi, refrakcija, augsta kvalitāte, foto, fotoreāls, reālistisks, attēls, png, statisks, debesis, saule, dienasgaisma, ēnas, mīkstas ēnas, apkārtējā okluzija, stikls, metāls, spīdīgs, materiāli, ekspozīcija, spilgtums, mākoņains, krēsla, studija, prezentācija, migla, dūmaka, dūmi, mākonis, tilpums, gaismas stari, dievu stari, kaustikas, adaptīvā izlase, troksnis
from: 517ba4d3
---

{{ui:Renderēt attēlu…}} izveido skata attēlu, kas izskatās pēc dienasgaismas, nevis zīmējuma: debesis, saule tajā vietā un datumā, kur to novieto modeļa atrašanās vieta un datums, mīkstas ēnas, gaisma no visām debesīm, kas attumsta stūrus un spraugas, un krāsas, kas var izskatīties pēc stikla, metāla vai spīdīgas krāsas. Modelis netiek mainīts.

## Skata renderēšana

1. Iestatiet skatu tā, kā vēlaties attēlu: pagrieziet skatu, tuviniet, izvēlieties [ainu](topic:scenes), paslēpiet to, kam nevajadzētu redzēties. Attēlā tiek izmantota paša skata kamera.
2. Grupā {{ui:File}} noklikšķiniet uz {{ui:Eksportēt}}, pēc tam uz {{ui:Renderēt attēlu…}}.
3. Ja nospiestā {{ui:Aina}} nav tā, ko vēlaties, izvēlieties citu (skatiet [Ainu sagataves](topic:render#scene-presets-a-good-picture-in-one-click)), izvēlieties {{ui:Izmērs}} un pēc tam noklikšķiniet uz {{ui:Renderēt}}.

   Attēls veidojas renderēšanas laikā un katrā ciklā kļūst gludāks. {{ui:Apturēt}} (vai {{key:Esc}}) to pārtrauc agrāk un saglabā līdz tam izveidoto attēlu.

4. Noklikšķiniet uz {{ui:Saglabāt}}, lai to lejupielādētu (PNG, ja {{ui:Saglabāt kā}} nenorāda citādi).

:::tip
Sāciet ar {{ui:Melnraksts}} pie {{ui:Skata izmērs}}, lai pārbaudītu kameru un izskatu, pēc tam galīgajam attēlam renderējiet {{ui:Labs}} vai {{ui:Labākais}} lielākā izmērā.
:::

## Ainu sagataves: labs attēls ar vienu klikšķi

Dialoga augšdaļā ir četras pogas {{ui:Aina}}. Katra ar vienu klikšķi iestata debesis, spilgtumu, zemi, malu līnijas, kvalitāti un sauli, tāpēc pirms pirmā attēla nav nekas jāapgūst. Noklikšķiniet uz vienas, pēc tam uz {{ui:Renderēt}}.

| Aina | Ko tā iestata | Kam izmantot |
|---|---|---|
| {{ui:Ārpuse}} | Skaidras debesis, modeļa pašas saule, zeme ieslēgta | Ēka no ārpuses |
| {{ui:Iekšpuse}} | Mākoņains debess (vienmērīga gaisma, bez spilgtiem saules plankumiem), par pusi ekspozīcijas pakāpes spilgtāka | Skats no telpas iekšpuses |
| {{ui:Griezuma skats}} | Balta studija, bez zemes, malu līnijas ātrajā renderēšanā | Modelis, kas sagriezts ar griezumu |
| {{ui:Nakts}} | Saule zem horizonta (pusnakts ziemā objekta puslodē), par vienu ekspozīcijas pakāpi spilgtāka | Lampas, kas apgaismo modeli. Bez lampām attēls ir tumšs |

- {{ui:Izvēlēties šim skatam}} izvēlas jums: {{ui:Griezuma skats}}, ja ir ieslēgts griezums, {{ui:Iekšpuse}}, ja kamera atrodas modelī, pretējā gadījumā {{ui:Ārpuse}}. Pirmoreiz atverot dialogu, tas sākas tieši šādi.
- Katrs iestatījums paliek zemāk, un to var mainīt. Tiklīdz mainīsiet kādu no tiem, ko aina iestata, neviena poga vairs nebūs nospiesta, un rindā zem pogām būs teikts, ka iestatījumi ir jūsu paši. Noklikšķiniet uz ainas vēlreiz, lai atjaunotu tās vērtības.
- Aina neskar dzinēju, režīmu, izmēru, materiālus, kameru un lampas.

:::note
Ainas ModelCraft un BimCraft dod vienādas vērtības. Gala attēla izskats atkarīgs no jūsu modeļa un grafikas kartes.
:::

## Iestatījumi

| Iestatījums | Ko tas dara |
|---|---|
| {{ui:Izmērs}} | Skata izmērs, divkāršs skata izmērs, Full HD, 4K vai kvadrāts. Fiksēti izmēri saglabā skata kameru un vairāk vai mazāk parāda sānos |
| {{ui:Režīms}} | {{ui:Ātrais}} vai {{ui:Augsta kvalitāte (ceļa izsekošana)}} (zemāk) ar tā {{ui:Laika ierobežojums}} |
| {{ui:Kvalitāte}} | Cik daudz ciklu (vai augstas kvalitātes režīmā – paraugu) tiek vidēti: {{ui:Melnraksts}} 16, {{ui:Labs}} 64, {{ui:Labākais}} 256. Vairāk ciklu dod gludākas ēnas un malas, bet aizņem ilgāk |
| {{ui:Debesszila}} | {{ui:Skaidras debesis}}, {{ui:Mākoņains}} (mīksta gaisma, vājas ēnas), {{ui:Krēsla}} (zema, silta gaisma) vai {{ui:Balta studija}} (vienkāršs balts fons) |
| {{ui:Saule}} | Saule nāk no datuma, laika un vietas, kas norādīta {{ui:Stils}} › saule. Atzīmējiet {{ui:Šim attēlam izmantot citu datumu un laiku}}, lai izmēģinātu citu laiku, nemainot modeļa stilu |
| {{ui:Spilgtums}} | Gaišāks vai tumšāks, pa soļiem (pakāpēs) |
| {{ui:Zeme zem modeļa}} | Zeme, kas uzņem ēnas un saplūst ar horizontu. Izslēdziet to modelim, kas peld |
| {{ui:Zīmēt malas}} | Uzzīmē modeļa malas plānas līnijas pāri attēlam zīmējuma izskatam |

Ja izvēlētajā laikā saule atrodas zem horizonta, ir nakts: debesis kļūst tumšas un modeli apgaismo tā [lampas](topic:lights). Dialogs to norāda.

Iestatījumi tiek saglabāti failā `.modelcraft`, tāpēc nākamais tā paša modeļa attēls sākas tur, kur pametāt.

## Krāsas, kas izskatās pēc stikla vai metāla

Zem {{ui:Materiāli}} katrai ekrāna krāsai ir izskats: {{ui:Matēts}}, {{ui:Satīns}}, {{ui:Spīdīgs}}, {{ui:Metāls}}, {{ui:Pulēts metāls}}, {{ui:Stikls}} vai {{ui:Apledojis stikls}}. {{ui:Neapgleznotas virsmas}} ir virsmas bez savas krāsas.

Lai logi kļūtu par stiklu, [nokrāsojiet](topic:paint) logu rūtis vienā krāsā un pēc tam šai krāsai iestatiet {{ui:Stikls}}. Stikls ļauj caur sevi redzēt debesis un to, kas atrodas aiz tā, tonēts ar savu krāsu, un atstaro debesis.

:::note
Režīmā {{ui:Ātrais}} stikls un metāls atstaro debesis, nevis pārējo modeli, un gaisma caur stiklu nelūst. Zemāk aprakstītais režīms {{ui:Augsta kvalitāte (ceļa izsekošana)}} dara abus.
:::

## Augsta kvalitāte

Izvēlieties {{ui:Režīms}} › {{ui:Augsta kvalitāte (ceļa izsekošana)}}, lai iegūtu attēlu, kurā gaisma seko tam, kā to redz kamera:

- gaisma atstarojas starp virsmām, tāpēc telpa, ko apgaismo caur logu vai lampu, ir apgaismota visapkārt, un krāsas izplatās uz blakus esošajām virsmām;
- stikls ir īsts stikls: gaisma tajā lūst, un tas atspoguļo modeli;
- metāls un pulētas virsmas atspoguļo pārējo modeli;
- gaismas paneļi spīd kā paneļi ar mīkstām ēnām.

Tas ir daudz lēnāks nekā {{ui:Ātrais}}: katrā ciklā no jauna izseko katra pikseļa gaismu. Attēls sākumā ir graudains un kļūst skaidrs, kad paraugi sakrājas, tāpēc sāciet mazā izmērā ({{ui:Skata izmērs}}, {{ui:Melnraksts}}) un izvēlieties {{ui:Laika ierobežojums}}: kad tas beidzas, tiek saglabāts līdz tam izveidotais attēls. {{ui:Apturēt}} to arī saglabā. Pirmais cikls gaida, kamēr pārlūkprogramma sagatavo ceļa izsekotāju.

Ja pārlūkprogrammā ir WebGPU, ceļa izsekotājs ir CadCraft pašu un darbojas grafikas kartē; rindā zem attēla redzams {{ui:Ceļa izsekošana grafikas kartē (WebGPU)}}. Pēc {{ui:Apturēt}} vai laika ierobežojuma {{ui:Turpināt}} turpina ar to pašu attēlu, līdz tam ir visi paraugi; mainot iestatījumu vai vēlreiz nospiežot {{ui:Renderēt}}, sākas no jauna. Bez WebGPU attēls tiek izsekots ar WebGL (rindā tas norādīts), un {{ui:Turpināt}} netiek piedāvāts.

:::linux
Firefox un lielākajai daļai Chrome iestatījumu operētājsistēmā Linux vēl nav WebGPU, tāpēc augstā kvalitāte tur izmanto WebGL.
:::

Šajā režīmā malas netiek zīmētas, bibliotēku tekstūras rāda savu krāsu un raupjumu, bet ne reljefu (a [materiāls, kas veidots ar mezgliem](topic:shading#in-high-quality-pictures), rāda savu normāli un reljefu), un griezums modelī tiek izveidots pirms attēla sākuma.

{{ui:Trokšņu samazināšana (notīra graudiņus pēc paraugiem)}} pēc noklusējuma ir ieslēgta: kad attēls ir pabeigts vai apturēts, atlikušos graudiņus notīra šim paredzēts neironu tīkls (Intel Open Image Denoise publicētais tīkls, ko palaiž jūsu datorā: grafikas kartē, citādi procesorā). Attēls ar nelielu paraugu skaitu iznāk tīrs; {{ui:Rādīt}} › {{ui:Attēls pirms trokšņu samazināšanas}} parāda to tādu, kāds bija renderēts.

## Renderēšana skatā

Darbvieta {{ui:Renderēt}} palaiž ceļa izsekotāju pašā skatā: pagriežot skatu, rediģējot modeli vai mainot gaismu, tas uzreiz sākas no jauna. {{ui:Apgabals}}: velciet taisnstūri, un renderēts tiks tikai tas; {{ui:Viss skats}} atgriež. {{ui:Fokuss}}: noklikšķiniet uz tā, kam jābūt asam, un lauka dziļums fokusējas tur. {{ui:Detaļa}} nosaka, cik skata pikseļus tas renderē (mazāk nozīmē ātrāk). {{ui:Pauze}} aptur un turpina. Tam nepieciešams WebGPU: bez tā darbvieta to norāda, un {{ui:Eksportēt}} › {{ui:Renderēt attēlu…}} joprojām darbojas.

## Debesis un gaismas profili grafikas kartē

Ar WebGPU augstā kvalitātē ir vēl divas debesis:

- {{ui:Fiziskas debesis}} aprēķina dienasgaismu no saules augstuma: virs galvas dziļi zila, pie horizonta bāla josla, un saule kļūst siltāka un blāvāka, jo zemāk tā atrodas. {{ui:Miglainība}} svārstās no ļoti skaidras dienas (2) līdz miglainai (10).
- {{ui:Debesu attēls (HDRI)}} apgaismo modeli ar reālas vietas panorāmas attēlu. {{ui:Izvēlieties attēlu…}} pieņem ekvirektangulāru failu `.hdr` vai `.exr`; {{ui:Pagriezt}} pagriež to ap modeli, un {{ui:Attēla spilgtums}} padara to gaišāku vai tumšāku. Attēlam ir sava saule, tāpēc modeļa saule netiek pievienota. Tas tiek saglabāts tikai tik ilgi, kamēr lapa ir atvērta: pēc atkārtotas atvēršanas izvēlieties to vēlreiz.

Katra lampa sarakstā {{ui:Lampas}} var izmantot ražotāja gaismas profilu: {{ui:IES profils…}} nolasa IES (LM-63) failu, un lampa pēc tam izstaro gaismu tā, kā to dara attiecīgais gaismeklis (šaurs griestu gaismeklis, sienas apgaismotājs). Katra lampa ar šādu nosaukumu to izmanto, un lampa saglabā savu spilgtumu. Lai pārtrauktu profila izmantošanu, noklikšķiniet uz profila nosaukuma.

Skaidra stikla logi palīdz debesu gaismai atrast ceļu telpā, tāpēc iekštelpu attēli zem debesīm noskaidrojas ātrāk.

Režīms {{ui:Ātrais}} un WebGL ceļa izsekotājs rāda {{ui:Fiziskas debesis}} un {{ui:Debesu attēls (HDRI)}} kā skaidras debesis un ignorē gaismas profilus.

## Kamera

{{ui:Kamera}} iestata attēlu kā fotogrāfiju:

- {{ui:Ekspozīcija}}: paturiet {{ui:Spilgtuma slīdnis}} vai izvēlieties {{ui:Kameras iestatījumi}} un iestatiet {{ui:Diafragma (f-numurs)}}, {{ui:Slēdža ātrums}} un {{ui:ISO}} kā kamerā; blakus tiem redzamais EV ir parastā ekspozīcijas vērtība. f/16 ar 1/100 s un ISO 100 atbilst saulainai dienai; tumšākai ainai vajag platāku diafragmu, lēnāku slēdzi vai augstāku ISO. Tas darbojas visos režīmos.
- {{ui:Lauka dziļums}} izplūdina to, kas atrodas tuvāk vai tālāk par {{ui:Fokusa attālums (m)}}, tā, kā to darītu objektīvs ar šo f-numuru (atstājiet tukšu, lai fokusētos uz to, kas atrodas skata vidū); {{ui:Diafragmas forma}} nefokusētiem spīdumiem piešķir apaļu vai lāpstiņveida formu.
- {{ui:Divpunktu perspektīva (vertikālās līnijas paliek vertikālas)}} izlīdzina kameru un nobīda attēlu, kā to dara arhitektūras nobīdes objektīvs, tāpēc sienas nesliecas, kad skatāties uz augšu vai uz leju uz ēku.
- {{ui:Baltās krāsas balanss}} nosaka, kura gaismas krāsa tiek rādīta kā balta: zemāka (piemēram, 3000 K) siltai lampu gaismai, augstāka ēnai un mākoņainām dienām.
- {{ui:Projekcija}}: {{ui:360° panorāma}} veido 2:1 attēlu no visa, kas atrodas ap kameru, panorāmu skatītājiem; {{ui:360° stereo panorāma}} sakārto kreisās acs un labās acs panorāmu brillēm; {{ui:Kuba karte (6 virsmas)}} veido sešus kvadrātveida skatus 3 × 2 režģī. Platumu nosaka {{ui:Izmērs}}.

Projekcijai, lauka dziļumam, divpunktu perspektīvai un baltās krāsas balansam vajadzīgs ceļa izsekotājs grafikas kartē (WebGPU), tāpēc tie tiek rādīti tikai {{ui:Augsta kvalitāte}}.

## Attēla apstrāde

{{ui:Attēls}} apstrādā augstas kvalitātes attēlu kā fotogrāfiju, un katra vadība uzreiz maina gala attēlu, bez jaunas renderēšanas:

- {{ui:Izskats (skata pārveidošana)}}: {{ui:ACES filmiskais}} (attēls kā iepriekš), {{ui:AgX}} (mīkstāks, saglabā krāsu ļoti spilgtā gaismā), {{ui:Filmiskais}} (maiga filmas līkne) vai {{ui:Standarta}} (vienkāršs; spilgta gaisma kļūst balta).
- {{ui:Kontrasts}} un {{ui:Gaismas laukumu saspiešana}} (atgriež detaļas ļoti spilgtās vietās).
- {{ui:Mirdzums}} (maigs mirdzums ap spilgtu gaismu), {{ui:Atspulgs}} ar savām {{ui:Atspulgu svītras}} (zvaigžņu stari no spilgtākajiem punktiem) un {{ui:Vinjete}} (tumšāki stūri).
- {{ui:Krāsu tabula (.cube)…}} pielieto krāsu korekciju no `.cube` faila ar savu {{ui:Krāsu tabulas stiprums}}; tāpat kā debesu attēls, tas tiek saglabāts tikai tik ilgi, kamēr lapa ir atvērta.

## Attēla saglabāšana

Pogai {{ui:Saglabāt kā}}, kas atrodas blakus {{ui:Saglabāt}}, izvēlas failu: {{ui:PNG}}, {{ui:JPEG}} vai {{ui:WebP}} koplietošanai (JPEG un WebP tikai tur, kur pārlūkprogramma tos var rakstīt), un pēc augstas kvalitātes renderēšanas grafikas kartē arī:

- {{ui:PNG, 16 bitu}}: apstrādātais attēls ar smalkākām pakāpēm starp toņiem drukai vai tālākai rediģēšanai.
- {{ui:EXR, visi slāņi (32 bitu peldošais punkts)}}: attēls tādā veidā, kā renderēts (lineārā gaisma, bez korekcijas), katrs renderēšanas elements un gaismu grupa kā atsevišķs slānis salikšanas programmām.
- {{ui:Renderēšanas fails (.ccrender, vēlāk vēlreiz labošanai)}}: viss, kas dialogam nepieciešams, lai attēlu atkal sajauktu un apstrādātu. {{ui:Atvērt renderēšanas failu…}} to atgriež ar tā sajaukumu un apstrādi, bez renderēšanas.

## Gaismu sajaukšana pēc renderēšanas

Ieslēdziet {{ui:Gaismas sajaukšana (mainiet katras gaismas krāsu un spilgtumu pēc renderēšanas)}} pirms nospiežat {{ui:Renderēt}}. Kad attēls ir pabeigts (vai apturēts), {{ui:Sajaukt attēlu}} uzskaita tā gaismas grupās: debesis, saule un lampas pēc nosaukuma (katra lampa ar vienādu nosaukumu ir viena grupa). Izslēdziet grupu, piešķiriet tai krāsu vai padariet to gaišāku vai tumšāku, un attēls uzreiz mainās, bez jaunas renderēšanas. {{ui:Saglabāt sajaukumu}} saglabā sajaukumu ar nosaukumu, lai to vēlāk izvēlētos atkal; {{ui:Kā renderēts}} atgriež attēlu tādu, kāds tas tika izveidots. {{ui:Saglabāt}} saglabā sajaukto attēlu.

{{ui:Renderēšanas elementi (albedo, normāles, dziļums, difūzā, spīduma, caurlaidība, emisija, ID)}} arī saglabā attēla daļas. {{ui:Rādīt}} pārslēdz skatu uz vienu no tām: virsmu krāsas (albedo), normāles, dziļumu, difūzo, spīdumu un caurlaidīgo gaismu (katru tiešo un netiešo), emisiju (to, kas spīd), kā arī debesis un krāsu katram objektam vai materiālam maskām.

Abi glabā papildu slāņus grafikas kartē. Lielos izmēros grafikas kartē var nepietikt vietas; dialogs to norāda, un darbojas mazāks izmērs.

## Renderēšanas rinda

Pēc augstas kvalitātes iestatīšanas {{ui:Pievienot šo attēlu rindai}} zem {{ui:Renderēšanas rinda}} saglabā attēlu tādu, kāds tas ir iestatīts tagad; video dialoga {{ui:Pievienot šo animāciju rindai}} dara to pašu visai animācijai, ceļa izsekots kadru pēc kadra. {{ui:Sākt rindu}} renderē tos pēc kārtas šajā datorā, un blakus katram pabeigtajam {{ui:Saglabāt}} to lejupielādē. Lapas aizvēršana saglabā rindu: atveriet to pašu modeli, un tā turpinās tur, kur apstājās. Rindai vajadzīgs WebGPU.

## Migla, dūmi, troksnis un kaustikas

Tie atrodas {{ui:Migla, dūmi un troksnis}} un darbojas {{ui:Augsta kvalitāte}} grafikas kartē; citi dzinēji tos neiekļauj.

- {{ui:Migla un dūmaka}} piepilda gaisu līdz noteiktam augstumam ar miglu, ko apgaismo saule, debesis un lampas. {{ui:Cik tālu var redzēt, metros}} nosaka, cik biezs tas ir (apmēram 100 m ir viegla dūmaka, 20 m – biezu miglu), {{ui:Miglas augstums virs zemes, metros}} ir vieta, kur tā beidzas, un {{ui:Gaismas stari}} ir, cik lielā mērā migla spīd virzienā uz gaismu. Saules gaisma izplūst miglā tās augšdaļā, tāpēc, kur saule iespīd caur logu vai starp ēkām, to redzat kā gaismas staru.
- {{ui:Dūmi vai mākonis}} pievieno vienu dūmu vai mākoņa tilpumu, ko apgaismo kā miglu. {{ui:Veids}} ir {{ui:Mākonis}}, {{ui:Dūmu stabs}} vai {{ui:No tilpuma faila (.ccvol)}}, CadCraft savs režģa formāts. {{ui:Detaļa}} un {{ui:Variācija}} maina izveidotu mākoni vai stabu, {{ui:Garākās malas izmērs metros (0 = modeļa izmērs)}}, {{ui:Pārvietot X (m)}}, {{ui:Pārvietot Y (m)}}, {{ui:Pārvietot Z (m)}} un {{ui:Pagriezt}} novieto to (tas sākas modeļa vidū), {{ui:Biezums}} padara to blīvāku, {{ui:Uzspīdums uz priekšu}} padara to spilgtāku virzienā uz gaismu, un {{ui:Krāsa}} to tonē. Tilpuma fails tiek saglabāts tikai tik ilgi, kamēr lapa ir atvērta, tāpat kā debesu attēls.
- {{ui:Apturēt agrāk, kur attēls ir tīrs (adaptīvā izlase)}} vairs nedod paraugus pikseļiem, kas jau nostabilizējušies, tāpēc pārējais attēls pabeidzas ātrāk. {{ui:Pieļaujamais troksnis}} ir, cik daudz graudiņu paliek, kad pikselis apstājas. Rindā zem attēla redzams, cik paraugu pikselis vidēji ieguvis.
- {{ui:Kaustikas (gaisma, ko lūst stikls vai atstaro spoguļi)}} izseko gaismu no lampām un saules, tāpēc spilgtais plankums zem stikla bumbas vai spoguļa gaisma uz sienas iznāk tīrs, nevis graudains. Tas ir izslēgts, kamēr ieslēgta migla, dūmi, {{ui:Gaismu sajaukšana pēc renderēšanas}} vai renderēšanas elementi, un tas paredzēts attēliem, nevis 360° attēliem, animācijām vai darbvietai Renderēt.

## Cik ilgi tas aizņem

Attēls tiek veidots jūsu pašu datorā, ar tā grafikas karti; nekas netiek augšupielādēts. Cik ilgi tas aizņem, atkarīgs no šīs kartes. Laiks pieaug kopā ar cikliem un pikseļiem: {{ui:Labākais}} ir 16 reizes vairāk ciklu nekā {{ui:Melnraksts}}, un 4K attēlam ir aptuveni četras reizes vairāk pikseļu nekā Full HD. Dators bez grafikas kartes arī renderē, tikai lēnāk.

:::note
Ja dialogs norāda, ka pārlūkprogramma nevar renderēt attēlus, pārlūkprogrammai nav WebGL 2. Atjauniniet to vai ieslēdziet aparatūras paātrinājumu tās iestatījumos.
:::
