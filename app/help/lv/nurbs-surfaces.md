---
title: Brīvformas virsmas (NURBS)
summary: Gludas līknes un virsmas izstrādājumu apvalkiem, automobiļu virsbūvēm un laivu korpusiem — lofts, sweep, līkņu režģi, četrmalu gabali, noapaļojumi, apgriešana — ar G0, G1 un G2 nepārtrauktību, kas mērīta precīzajās virsmās, cietiem ķermeņiem ar apvienošanu, atņemšanu un krustošanu, zebras un līkuma skatiem, virsmām, kas pielāgotas skenējumam ar mērītu kļūdu, un STEP vai IGES failiem.
keywords: nurbs, skenējums, reversais inženierijas, pielāgot, tīkls līdz virsmai, punktu mākonis, stl, apgriezt, apgriezts, caurums, izgriezt, ciets ķermenis, cietie ķermeņi, būla, apvienot, atņemt, krustot, starpība, sašūt, slēgts, brīvforma, freeform, virsma, virsmas, b-spline, bspline, līkne, spline, lofts, pārvilkšana, sliede, līkņu režģis, coons, gabals, noapaļojums, saskaņot, nepārtrauktība, g0, g1, g2, pieskare, līkums, zebra, kontrolpunkti, mezgli, pakāpe, step, iges, klase A
from: 09887405
---

Panelis **Virsmas** veido gludas līknes un virsmas tādā veidā, kā tiek veidoti izstrādājumu apvalki, automobiļu virsbūves un laivu korpusi: NURBS, tā pati matemātika, ko izmanto citi virsmu modelētāji. Viss tiek mērīts precīzajās virsmās, nekad trijstūros, ko redzat. Izmēri panelī ir **milimetros**, neatkarīgi no mērvienības, ko modelis rāda.

Atveriet to no labās puses paneļa: {{ui:Virsmas}} › {{ui:Atvērt virsmu paneli}}. Modelis, kuram jau ir virsmas, to atver pats.

## Kā darbojas komanda

1. Nospiediet komandu (piemēram, **Lofts**). Panelis rāda, kas tai vēl vajadzīgs: punkti, līknes, virsmas mala vai līknes gals.
2. Izvēlieties tos: noklikšķiniet tos 3D skatā vai nospiediet **Izvēlēties** (vai malas un gala pogas) blakus katram sarakstā. Malai noklikšķiniet tuvu tai virsmas malai.
3. Pārbaudiet opcijas (pakāpe, pielaide, nepārtrauktība, …) un nospiediet **Izveidot**.

Līknes no punktiem ņem punktus, ierakstītus pa vienam rindiņā (`x, y, z` mm), vai **Izvēlēties punktus skatā**: katrs klikšķis izmanto to pašu piesaisti kā zīmēšanas rīki; nospiediet {{key:Enter}} vai veiciet dubultklikšķi, lai pabeigtu, un {{key:Esc}}, lai apturētu.

## Līknes

- **Līkne caur punktiem** iet caur katru punktu. **Līkne pēc kontrolpunktiem** seko punktu režģim.
- **Ievietot mezglu**, **Paaugstināt pakāpi** un **Pazemināt pakāpi** maina līknes aprakstu, nepārvietojot to (pazemināšana tiek noraidīta, ja līkne pārvietotos vairāk par pielaidi). **Pārbūvēt līkni** dod tai jaunu kontrolpunktu skaitu un norāda, cik tālu tā pārvietojās.
- **Saskaņot līkni** liek vienas līknes galam saskarties ar citas galu ar G0 (pieskaras), G1 (vienāds virziens) vai G2 (vienāds arī līkums). **Noapaļot līkni** pievieno jaunu līkni starp diviem galiem.
- **Apvienot līknes** un **Sadalīt līkni**.

## Virsmas

- **Lofts** caur divām vai vairākām līknēm, **Lineāra virsma** starp divām, **Izvilkt līkni**, **Rotēt līkni**.
- **Pārvilkt pa vienu sliedi** pārvieto profilu pa ceļu bez vērpšanas; **Pārvilkt pa divām sliedēm** tur profila galus uz abām sliedēm. Pārvilkumi tiek pielāgoti: statusa rindā rādīts, cik tuvu tie palika īstajam pārvilkumam.
- **Virsma no līkņu režģa** iet caur līkņu režģi (pirmās izvēles ir profili, pārējās — vadlīnijas). **Gabals no četrām malām** aizpilda četras līknes, kas saskaras stūros.
- **Saskaņot virsmu** liek virsmas malai saskarties ar kaimiņu ar G0, G1 vai G2; **Noapaļot virsmu** pievieno virsmu starp divām malām.
- **Nobīdīt virsmu**, **Pagarināt virsmu** (virsma turpinās tā, kā tā gāja), **Pārbūvēt virsmu**, kā arī virsmu mezgli un pakāpe.

## Kvalitātes pārbaude

Tabulā **Kopīgās malas** uzskaitīta katra mala, ko divas virsmas kopīgo, ar atstarpi (mm), leņķi starp tām (°) un līkuma lēcienu (1/mm), un to, vai tas ir G0, G1 vai G2. Mala, kas ir sliktāka par pieprasīto, ir arī **Problēmās** (⚠ poga lietotnes joslā) ar labojumu **Saskaņot**.

**Rādīt kā** › **Zebras svītras** un **Līkums (Gausa)** nāk no precīzās virsmas: svītras, kas bez pārtraukuma iet pāri malai, nozīmē G1; svītras, kas arī saglabā savu platumu, nozīmē G2. Līkums ir zils, kur virsma ir sedlveida, sarkans, kur tā ir kupols, un balts, kur tā ir plakana. **Kontrolpunkti** zīmē kontrolu tīklus.

G0–G2 tiek mērīti 33 punktos katrā malā. **G3 un "klases A" kvalitāte netiek mērītas** un netiek apgalvotas.

## Virsmas apgriešana

Grupa **Apgriešana** apgriež virsmu, nemainot tās formu: virsma saglabā visus savus kontrolpunktus, un tiek rādīta, saskaitīta un ierakstīta tikai daļa, kas atrodas kontūras iekšpusē. **Apgriezt līdz taisnstūrim** un **Apgriezt ar apli** darbojas ar virsmas daļu (no 0 līdz 1) katrā virzienā, tāpēc tiem nav vajadzīga izvēle skatā; **Apgriezt ar līkni** pieņem slēgtu līkni, kas atrodas uz virsmas (tā tiek projicēta virsmā un noraidīta vārdiski, ja tā ir atvērta vai vairāk nekā pielaides attālumā). Atzīmējiet **Izgriezt caurumu**, lai noņemtu kontūras iekšpusi; atstājiet to neatzīmētu, lai paturētu tikai iekšpusi. Virsmai var būt viena paturēta kontūra un jebkāds skaits caurumu; kontūra, kas krustojas ar citu, tiek noraidīta. **Noņemt apgriešanu** parāda visu virsmu atkal. Izgrieztās malas precīzi seko kontūrai; paneļa **Atsaukt** atsauc apgriešanu kā jebkuru citu soli.

STEP saglabā apgriešanu kā sejas robežas, bet IGES — kā apgrieztu virsmu (entītija 144); abi to nolasa atpakaļ.

## Cietie ķermeņi un Būla operācijas

Grupa **Cietie ķermeņi** pārvērš virsmas slēgtos ķermeņos un apvieno tos. Šeit ciets ķermenis ir paneļa virsmu kopa, kas kopā noslēdz tilpumu; tā sejas paliek precīzas NURBS virsmas ar savām apgriešanām.

- **Kastes ciets ķermenis**, **Cilindra ciets ķermenis** un **Lodes ciets ķermenis** veido vienu no ievadītiem izmēriem (mm): kasti ar sešām plakanām virsmām, cilindru ar apaļu sānu virsmu un divām plakanām galvām, apgrieztu līdz aplim, lodi ar vienu rotētu virsmu.
- **Ciets ķermenis no virsmām** grupē virsmas, ko esat izveidojis pats. Izvēlieties tās vai neizvēlieties nevienu, lai izmantotu visas redzamās virsmas, kas vēl nav cietā ķermenī. Tās tiek sašūtas kopā ar pielaidi: ja tās neslēdzas, nekas nemainās, un panelis norāda, cik malas paliek atvērtas un cik tuvu tām jāsaskaras.
- **Apvienot**, **Atņemt** (otrais ciets ķermenis tiek atņemts no pirmā) un **Krustot** (tikai tas, ko abi kopīgi) ņem divus cietos ķermeņus: noklikšķiniet katra sejas skatā vai nospiediet **Izvēlēties** sarakstā **Cietie ķermeņi**. Atzīmējiet **Paturēt abus cietos ķermeņus**, lai tos atstātu blakus rezultātam.

Būla operācija paturē katru seju uz tās precīzās virsmas un to griež ar jaunām apgriešanas kontūrām pa krustošanās līniju. Rezultātu rindā ir izmērītie skaitļi: cik tālu cietā ķermeņa dzinēja punktiem bija jāpārvietojas, lai atrastos uz precīzajām virsmām (nekad vairāk par pielaidi), cik tuvu krustošanās punkti atrodas abām virsmām (parasti dažas miljondaļas milimetra), tilpums un vai jaunās sejas atkal slēdzas, ja tās no jauna sašūtas no savām precīzajām virsmām. Tilpumi tiek mērīti uz trijstūriem ar pielaidi (0,05 mm, ja neesat iestatījis citu), tāpēc sfēras vai cilindra tilpums rādās nedaudz zemāks par precīzo: mazāka pielaide tuvina to. Būla operācija, ko nevar izpildīt tīri (ciete ķermeņi nekā nedalās, kontūra krustotos pati ar sevi), tiek noraidīta vārdiski un nekas nemainās. Viena Būla operācija ir viens solis paneļa **Atsaukt**.

Sarakstā **Cietie ķermeņi** **Atgrupēt** paturē sejas kā parastas virsmas; atkritne noņem cietu ķermeni un tā sejas.

**Pievienot modelim** (sarakstā **Cietie ķermeņi**) ieliek cietā ķermeņa kopiju modelī kā vienu slēgtu grupu, tās sejas kā trijstūrus ar pielaidi 0,05 mm, vienā modeļa atsaukšanas solī. Tad tas darbojas ar modeļa paša **Apvienot**, **Atņemt** un **Krustot**, stumšanu/vilkšanu un 3D drukas pārbaudi; precīzais ciets ķermenis paliek panelī.

## Noapaļojumi un biezināšana

**Noapaļojums starp virsmām** noapaļo malu, kur divas viena cieta ķermeņa sejas saskaras: izvēlieties abas sejas (skatā vai ar **Izvēlēties** sarakstā), ierakstiet **rādiusu** un, ja rādiuss mainās pa malu, **rādiusu galā** (0 saglabā vienu rādiusu). Bumba ar šo rādiusu tiek ripināta pa malu, pieskaroties abām sejām; noapaļojums ir precīzais apļveida loks, ko tā atstāj katrā punktā, savienots vienā virsmā, un abas sejas tiek apgrieztas tur, kur bumba tās pieskaras. Ārējā mala zaudē materiālu, iekšējais stūris to iegūst. Rezultātu rindā ir izmērītais: cik tālu noapaļojuma virsma atrodas no ripinātās bumbas starp punktiem, no kuriem tā tika veidota (punkti tiek pievienoti, līdz tā ir četras reizes tuvāk par pielaides ceturtdaļu), lielākais leņķis starp noapaļojumu un katru seju pa pieskares līnijām un tie paši skaitļi kā Apvienošanai. Rādiuss, kas neder (bumba atstātu sejas, vai seja izliecas stingrāk nekā rādiuss), tiek noraidīts, nosaucot seju, un nekas nemainās.

**Noapaļot vairākas malas** noapaļo daudzas malas vienā solī: izvēlieties abas pirmās malas sejas, tad nākamās malas sejas un tā tālāk (seja var būt vairākos pāros, piemēram, kastes augšējā virsma četros no tiem); visām malām tiek piemērots ievadītais rādiuss. Katrs noapaļojums tiek aprēķināts uz cietā ķermeņa tādā, kāds tas bija, tad tie tiek griezti viens pēc otra, tāpēc secība nav svarīga. Kur divas noapaļotas malas saskaras stūrī, kura pārējās malas paliek asas, abi noapaļojumi saskaras pa savu krustošanās līniju (locījums). Kur trīs noapaļotas ārējās malas no trim plakanām sejām, kas ir taisnleņķī viena pret otru, saskaras ar vienu rādiusu, stūris ir viens **sfēras gabals**, kas pieskaras visiem trim noapaļojumiem (atzīmējiet **Stūri**, lai iegūtu locītu stūri); mala, kur abi gali ir šādi stūri, jābūt vismaz divreiz garākai par rādiusu. Rezultātu rindā norādīts, cik malas tika noapaļotas un kā izskatījās stūri. Iekšējās malas var noapaļot kopā, bet rezultāts, kas neslēdzas atpakaļ, tiek tikai ziņots (rindā par to ir teksts), tāpēc pārbaudiet to.

**Padarīt biezāku līdz cietam ķermenim** piešķir virsmai biezumu: izvēlieties to, ievadiet **biezumu** un atzīmējiet **Otra puse**, lai to augtu otrā virzienā. Nobīdītā seja tiek pielāgota virsmai un salīdzināta ar to (rezultātu rindā norādīta lielākā atšķirība no biezuma); sienas seko katrai malai un katrai apgriešanas kontūrai. Ja virsma šajā pusē izliecas stingrāk nekā biezums vai cita tās daļa atrodas tuvāk par biezumu, tā tiek noraidīta, nosaucot virsmu un vietu, un nekas nemainās.

## Atsaukšana, fails, STEP un IGES

Panelim ir savs **Atsaukt** un **Atkārtot** (viens solis katrai komandai). Virsmas tiek saglabātas `.modelcraft` failā kopā ar modeli; tās nav daļa no modeļa paša atsaukšanas, tāpat kā faila materiāli.

**STEP…** (AP242) un **IGES…** saglabā līknes un virsmas tieši tādas, kādas tās ir (B-spline līknes un virsmas, nekas nepārvērsts trijstūros). Katra virsma ir sava seja ar savu apgriešanu; cietais ķermenis tiek ierakstīts kā viens slēgts apvalks, katra mala kopīga starp abām sejām, kā to sagaida citas CAD programmas (statusa rindā rādīts, cik cietu ķermeņu tā aizgāja). IGES tas pats cietais ķermenis ir viens manifold cietā ķermeņa B-rep (entītija 186 pār slēgtu apvalku 514, sejas 510, cilpas 508, viens malu saraksts 504 un viens virsotņu saraksts 502); cietais ķermenis, kura sejas nesaskan mala pret malu, tiek ierakstīts kā atsevišķas sejas, un rindā tas tiek pateikts. **Importēt…** nolasa šādu cietu ķermeni atpakaļ kā cietu ķermeni, no STEP un no IGES. Tas nolasa šādi ierakstītas līknes un virsmas, un `.ccnurbs` gabalu kopas; citu programmu STEP cietie ķermeņi tiek atvērti ar Fails › Importēt kā tīkli.

## Virsmas no skenējuma (reversais inženierijas)

Izvēlieties skenēto tīklu modelī (ja nekas nav izvēlēts, tiek ņemts viss redzamais), atveriet **Virsmas** un grupā **Skenējums** izvēlieties **Pielāgot virsmas skenējumam**. Rīks meklē **plaknes**, **cilindrus**, **sfēras** un **konusus** (precīzās virsmas, no kurām veidota apstrādāta detaļa; katrā rindā rādīts atrastais rādiuss vai pusleņķis), atrod **noapaļojumus** (noapaļotas malas un stūri: mazs cilindrs vai sfēra, kas pieskaras tangenciāli divām vai vairāk citām sejām, rādot tā rādiusu un sejas, ko tas savieno), **malas noapaļojumus** (tors: noapaļota mala, kur plakana seja saskaras ar cilindru vai konusu, rādot tās rādiusu un gredzena rādiusu) un **mainīgā rādiusa noapaļojumus** (noapaļota mala, kuras rādiuss mainās pa to, rādot rādiusu katrā galā), pielāgo **vienu brīvformas gabalu** gludai, viegli izliektai daļai un apgriež katru seju līdz to skenējuma daļas kontūrai, no kuras tā nākusi, tāpēc caurumi un stūri paliek. Iespējas: **pielaide** (cik tālu milimetros skenējuma punkts drīkst būt no plaknes vai cilindra un vēl piederēt tam, un mērķis brīvformas gabalam), **mazākais gabals** (virsmas laukuma daļa) un **visvairāk virsmu**. Tas pats skenējums un tās pašas iespējas vienmēr dod tās pašas sejas.

Rezultāts ir tabula ar vienu rindu katrai sejai: tās veids, cik trijstūru tā nākusi, un kļūda, **izmērīta no skenējuma līdz sejai** (rms, lielākā un to punktu daļa, kas atrodas pielaidē). Mērītie punkti ir skenējuma virsotnes un katra trijstūra vidus. Kļūda netiek mērīta otrādi (no sejas līdz skenējumam), tāpēc seja, kas sniedzas pāri skenējumam, neparādītos. Zem tabulas esošā piezīme norāda arī, cik daudz laukuma bija par mazu, lai to pielāgotu. Skatā skenējuma punkti ir krāsoti pēc to **novirzes kartes**: zili uz virsmas, zaļi pusceļā līdz pielaidei, sarkani pielaidē vai virs tās (atzīmējiet **Rādīt novirzes karti**, lai to paslēptu). Gabali, kas salokās paši sevī (piemēram, slēgta caurule, pielāgota ar brīvformas gabaliem), tiek uzskaitīti kā nepielāgoti, nekad netiek piespiesti vienā virsmā.

**Sašūt virsmas cietā ķermenī** sašuj katru redzamo virsmu, kas vēl nav cietā ķermenī, vienā slēgtā cietā ķermenī. Skenējuma sejas saskaras tikai ar pašu skenējuma kļūdas robežām, tāpēc tas mēģina mazāko savienojuma attālumu, kas noslēdz (nekad vairāk par jūsu iestatīto **šūšanas attālumu**), un vārdiski atsakās, ja sejas neslēdzas. Tas nekad nelabo spraugu. Kaste ar noapaļotām malām tiek sašūta, ja tās noapaļojumi atrasti kā savas sejas; attālums, kas noslēdza, ir rezultātā. Pēc tam cietais ķermenis darbojas ar Apvienot, Atņemt, Krustot un **Pievienot modelim**.

Ko tas nedara: **malas noapaļojums** (tors) tiek meklēts tikai ap cilindra vai konusa asi, kas jau atrasts, un **mainīgā rādiusa noapaļojums** tikai gar samērā taisnu malu (tā griezumi tiek veikti taisni pret vienu virzienu); citur tie nāk ārā kā brīvformas gabali, ja pietiekami gludi, citādi tie tiek izlaisti. Sfēras, konusi un noapaļojumi tiek atrasti ar nejaušu paraugu ņemšanu, tāpēc ļoti mazu (dažu trijstūru) var palaist garām. Novirzes karte rāda attālumu no skenējuma līdz sejām, nevis otrādi. Ļoti lieli skenējumi (vairāk nekā 300 000 trijstūru) šeit tiek noraidīti. Pilna apgrieziena cilindra sejas tiek griezti ap caurumiem, un šuve tiek novietota tur, kur nav caurumu. Pirms paļaušanās pārbaudiet katru seju pret savu skenējumu.

## Vēl nav pieejams

Malu noapaļošana, kas saskaras stūrī izliektās virsmās vai ar dažādiem rādiusiem (virsotnes maisījums), noapaļojums starp sejām, kas nesaskaras, iekšējais noapaļojums, kas beidzas uz slīpas vai izliektas virsmas, un Būla operācijas un noapaļojumi, kas aprēķināti virsmās bez trijstūriem (šeit cietais ķermenis darbojas uz trijstūriem ar pielaidi, un katrs punkts pēc tam tiek atgriezts precīzajās virsmās).
