---
title: Modeļa eksportēšana citām programmām
summary: Izvēlieties pareizo eksportu renderēšanai, tīmeklim, 3D drukāšanai, BIM un BimCraft un pārbaudiet, ko katrs saglabā.
keywords: drukāt, 3mf, pdf, papīrs, attēls, png, bilde, ekrānuzņēmums, renderēt, saglabāt skatu, eksportēt, kopīgot, renderēšana, gltf, glb, collada, dae, obj, stl, 3D drukāšana, ifc, bim, bimcraft, nosūtīt, citas programmas
from: 9e13e80d
---

Eksportēšana izveido modeļa kopiju citā formātā. Saglabājiet arī savu `.modelcraft` failu: tas ir vienīgais fails, kurā viss tiek saglabāts, un vienīgais, ko ModelCraft atver tieši.

## Eksportēšana

1. Vispirms saglabājiet ({{key:Mod+S}}), lai darba fails ir drošs.
2. Noklikšķiniet {{ui:Eksportēt}} grupā {{ui:Fails}}.
3. Izvēlieties formātu. Pārlūkprogramma lejupielādē failu ar nosaukumu kā modelim.

Tiek eksportēts viss modelis. Lai eksportētu vienu daļu, saglabājiet, izdzēsiet pārējo, eksportējiet un tad atsaucieties vai atkārtoti atveriet.

## Kāds formāts

| Jūs vēlaties | Izvēlieties | Piezīmes |
|---|---|---|
| Atvērt to citā 3D modelētājā | {{ui:Collada (.dae)}} | Saglabā grupas, ligzdotas grupas, komponentus (kopīgus, nevis kopētus), nosaukumus un krāsas. Z uz augšu, metri. |
| Renderēt to vai izmantot vizualizācijas programmā | {{ui:OBJ (.obj)}} vai {{ui:glTF bināro (.glb)}} | OBJ ir visplašāk lasāms; tas raksta katru grupas novietojumu kā atsevišķu objektu, bet nesaglabā krāsas un kopīgus komponentus. glTF saglabā komponentus un krāsas. |
| Ievietot tīmeklī, spēļu dzinējā vai AR | {{ui:glTF bināro (.glb)}} | Viens fails ar visu iekšā. |
| Drukāt 3D | {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}} | Pārbauda, vai modelis ir slēgts un vērsts pareizi, tad raksta STL vai 3MF milimetros. Skatiet [Sagatavot modeli 3D drukāšanai](topic:print-3d). {{ui:STL drukāšanai (.stl, milimetri)}} raksta visu modeli bez pārbaudes. |
| Atvērt to BimCraft vai citā BIM programmā | {{ui:IFC BimCraft (.ifc)}} | Katra augšējā līmeņa grupa vai komponents kļūst par vienu ēkas elementu. |

Statusa josla apstiprina katru eksportu, piemēram, "Eksportēts House.stl (milimetri)." vai "Eksportēts House.dae (Collada 1.4.1, Z uz augšu, metri; komponenti paliek kopīgi)."

## Pirms eksportēšanas

- **Grupējiet savus objektus.** Collada, glTF un IFC saglabā grupas un komponentus kā atsevišķus objektus. Brīvā ģeometrija tiek izvadīta kā viens gabals; IFC tā kļūst par vienu elementu ar nosaukumu "Loose geometry".
- **Dodiet tiem nosaukumus.** Grupu un komponentu nosaukumi nonāk Collada un IFC, tāpēc siena, kas nosaukta "North wall", tiek saņemta kā "North wall".
- **Pārbaudiet virsmu virzienu.** Virsmas, kas ārpusē rāda zilpelēku, eksportā vērsīsies uz iekšu. Labojiet tās ar {{ui:Apgriezt virsmu}} (skatiet [Dzēšana un tīrīšana](topic:erase#a-face-facing-the-wrong-way)).
- **Drukāšanai** pārliecinieties, ka detaļas ir slēgti cieti ķermeņi: atlasiet katru grupu un pārbaudiet, vai {{ui:Objekta informācija}} saka "Ciets: Jā". Pēc tam mērogojiet modeli uz drukājamo izmēru vai mērogojiet to drukas programmatūrā.

## Modeļa nosūtīšana uz BimCraft

1. Katru ēkas daļu padariet par grupu vai komponentu un nosaukiet to.
2. Izvēlieties {{ui:Eksportēt}}, tad {{ui:IFC BimCraft (.ifc)}}.
3. Atveriet lejupielādēto `.ifc` failu BimCraft.

Konceptuālam apjomam izmantojiet {{ui:Eksportēt}} › {{ui:Apjoma modelis uz BimCraft…}}: katra grupa tiek nosūtīta kā apjoma variants ar stāviem, stāvu platībām un tilpumu. Skatiet [Apjoma modeļa nosūtīšana uz BimCraft](topic:massing-to-bimcraft).

Parastajam IFC eksportam nav tiešas saites starp abām lietotnēm. IFC ir viens stāvs, un katrs elements ir vispārīgs ēkas elementa vietturis bez tipa un īpašībām: tam ir tikai forma un nosaukums. Slēgtās grupas kļūst par cietām formām; atvērtās — par virsmām.

## Līnijas bez virsmām

Malas, kas nav nevienas virsmas daļa (palīglīnijām līdzīgas līnijas, importēts situācijas plāns), tiek eksportētas OBJ un Collada formātā kā līnijas. glTF un STL tām nav vietas, tāpēc tās tiek izlaistas. Palīglīnijas un ainas netiek eksportētas nevienā formātā.

## Skata saglabāšana kā attēls

{{ui:Eksportēt}} › {{ui:Skata attēls (.png)}} saglabā tieši to, ko rāda 3D skats, tā ekrāna izmērā. {{ui:Attēls divkāršā izmērā (.png)}} saglabā to divreiz platāku un divreiz augstāku (drukai vai asai prezentācijai), ar izmēriem un atzīmēm, kas pārzīmētas šajā izmērā, nevis izstieptas.

Dienasgaismai līdzīgam attēlam (debesis, saule, mīkstas ēnas, stikls) izmantojiet {{ui:Eksportēt}} › {{ui:Renderēt attēlu…}}: skatiet [Attēla renderēšana](topic:render).

Tīram attēlam vispirms ieslēdziet [prezentācijas skatu](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): asis, palīglīnijas, griezumu kontūras un atlase tiek izlaisti. Iestatiet kameru, stilu un ēnas, kā vēlaties, vai dodieties uz [ainu](topic:scenes); lai saglabātu kustīgu filmu no savām ainām, izmantojiet {{ui:Eksportēt animāciju}} panelī {{ui:Ainas}}.

## Skata drukāšana vai saglabāšana kā PDF

- {{ui:Eksportēt}} › {{ui:PDF no skata (.pdf)}} saglabā vienas lapas PDF: skatu divreiz lielākā izmērā nekā ekrānā, ar tā izmēriem, A4 lapā (Letter, ja modelis ir pēdās un collās), ainavas orientācijā, ar līniju apakšā, kurā ir faila nosaukums, datums un mērvienība.
- {{ui:Eksportēt}} › {{ui:Drukāt skatu…}} parāda to pašu lapu pārlūkprogrammas drukas dialogā. Izvēlieties printeri vai "Saglabāt kā PDF".

Lapa rāda skatu tādu, kāds tas ir: perspektīvam skatam mēroga nav. Lai iegūtu mērogā zīmētu rasējumu, izslēdziet {{ui:Perspektīva}} un skatieties no {{ui:Augšskats}} vai {{ui:Priekšskats}}, un pievienojiet [izmērus](topic:dimensions) svarīgajiem izmēriem. [Prezentācijas skats](topic:styles-shadows#presentation-view) izlaiž asis, palīglīnijas un atlasi; izmēri paliek.
