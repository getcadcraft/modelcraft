---
title: Lielas modeļa sadalīšana drukāšanai
summary: Sagrieziet modeli, kas ir pārāk liels jūsu printerim, gabalos, kas ietilpst platformā, ar tapām, atslēgām, astesveida savienojumiem, dībeļu vai magnētu caurumiem un savienojuma numuru uz abām virsmām; lejupielādējiet visus gabalus un montāžas lapu vienā zip failā.
keywords: 3d drukāšana, sadalīt, slīpums, slīps griezums, leņķa griezums, slīps, sadalītājs, griezums, pārāk liels, platformas izmērs, drukas tilpums, gabali, detaļas, savienotāji, tapas, atslēgas, astesveida savienojums, dībelis, magnēts, atstarpe, pielaide, detaļu numuri, montāža, izvērsts skats, zip, stl, 3mf, licence, license, USB atslēga, dongle
from: ee96ba77
---

Kad modelis ir lielāks par jūsu printera platformu, **Sadalīt drukāšanai** sagriež to gabalos, kas ietilpst, pievieno savienotājus, lai gabali sakristu, kad tos saliek kopā, un katra savienojuma abās virsmās iegravē vienu un to pašu numuru. Atveriet {{ui:Eksportēt}} › {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}; dialoga rindā **Drukas rīki** ir {{ui:Sadalīt drukāšanai}}. Tā atveras kā kartīte virs skata.

Tas darbojas ar to, kas tiks drukāts: atlasi vai, ja nekas nav atlasīts, ar visu redzamo. Tam, kas tiks drukāts, jābūt slēgtam cietam ķermenim; ja pārbaude atrod caurumus, vispirms izmantojiet [Labošana](topic:print-tools#repair).

Tas darbojas programmā ModelCraft jūsu datorā: nav licenču servera, nav USB atslēgas, nekas netiek augšupielādēts.

## Griešana

- **Ietilpst platformā, vismazāk gabalu**: norādiet platformas platumu, dziļumu un augstumu (tie sākotnēji tiek ņemti no {{ui:Iestatījumi}} › ModelCraft › 3D printeris). Kartīte parāda, cik gabalu tas prasa un cik liels ir katrs; tā sagriež modeli vienāda izmēra gabalos, cik mazāk, cik iespējams ietilpst. Gabals failos var atrasties uz sāna, ja tas padara to ietilpstošu. Savienotāji, kas izvirzās no gabala, tiek ieskaitīti tā izmērā.
- **Norādītās vietās**: izvēlieties asi, pa kuru griezt, un ierakstiet vietas milimetros no modeļa zemākā gala, atdalot ar komatiem (`100, 200` veido trīs gabalus).
  **Slīpums** pagriež griezumus līdz 60° ap vienu no pārējām divām asīm (piemēram, griezums pa Z asi, slīps ap X): katrs slīpais griezums iet cauri modeļa viduslīnijai savā vietā, dod gabaliem lielāku saskares laukumu un labāk slēpj savienojumu uz slīpas virsmas. Savienotāji ir perpendikulāri griezumam.

Kamēr kartīte ir atvērta, griezumu plaknes ap modeli tiek attēlotas kā punktētas līnijas.

## Savienotāji

Katrā vietā, kur divi gabali saskaras, tiek ievietoti savienotāji. Tie tiek novietoti tur, kur ir visvairāk vietas: vismaz **mazākais pieļaujamais sienas biezums** plus **atstarpe** plus to paša izmērs attālumā no ārējās malas un pietiekami tālu no katra cita griezuma, lai divi caurumi nekad nesaskartos. Garā virsmā divi savienotāji tiek izvietoti gar to, lai gabali nevarētu griezties.

- **Apaļas tapas**: tapa uz vienā gabalā (uzgalī nošķelta), caurums otrā.
- **Kvadrātveida atslēgas**: tas pats, bet kvadrātveida, tāpēc gabalu var uzlikt tikai vienā pozīcijā.
- **Astesveida savienojumi**: izcilnis, kas iebīdās spraugā no sāna. Ja spraugas viens gals saskartos ar citu griezumu, astesveida savienojums apstājas īsāk un iebīdās no atvērtā gala. Astesveida savienojumi der griezumiem vienā virzienā (gabalu rinda); režģī izmantojiet tapas vai dībeļus.
- **Dībeļu caurumi**: caurums katrā pusē; tapas arī tiek izdrukātas (zip failā).
- **Magnētu ieliktņi**: ieliktnis katrā pusē apaļam magnētam ar norādīto diametru un biezumu. Pirms ielīmēšanas pārbaudiet polus.
- **Nav (līme)**.

**Atstarpe** ir sprauga katrā pusē starp tapu un tās caurumu (sākotnēji 0.2 mm). Tā atbilst jūsu norādītajam skaitlim: apaļie caurumi tiek veidoti nedaudz lielāki, lai atstarpi saglabātu to plakanās malas, nevis stūri. Palieliniet to, ja jūsu printera detaļas iznāk pārāk cieši.

Ja savienojumā nav vietas savienotājam (plāna siena, neliels saskares laukums), kartīte to norāda: šim savienojumam izmantojiet līmi.

## Detaļu numuri

Ja ieslēgts **Iegravēt savienojumu numurus abās virsmās**, katram savienojumam tiek piešķirts tā divu gabalu numurs, piemēram, `3-4`, iegravēts 0.6 mm dziļumā abās virsmās, katrā pareizi lasāms. Numuri sākas 5 mm augsti un kļūst mazāki, lai ietilptu, līdz 2.5 mm; savienojums bez vietas numuram tiek uzskaitīts. Gabali tiek numurēti no apakšējā slāņa uz augšu.

## Priekšskatījums, lejupielāde un modeļa sadalīšana

1. {{ui:Priekšskatījums}} sagriež modeli un parāda, cik ir gabalu, savienojumu un savienotāju, vai katrs gabals iztur 3D drukas pārbaudi un ietilpst platformā, un uzskaita katra gabala izmēru. Skatā katru savienotāju un numuru atzīmē riņķis.
2. {{ui:Lejupielādēt gabalus (.zip)}} saglabā vienu zip failu: failu katram gabalam (STL vai 3MF, kā izvēlaties sadaļā **Faili**), katrs stāv uz platformas; dībeļu tapas; un **montāžas lapu** — gabalu attēlu, kas izvērsts ar to numuriem (`assembly.svg` un `assembly.png`), un gabalu un savienojumu sarakstu (`assembly.txt`).
3. {{ui:Sadalīt modeli}} modelī ievieto gabalus atlasīto grupu vai komponentu vietā, nosaukti kā montāžas lapā, vienā solī: {{ui:Atsaukt}} atjauno oriģinālu. Tam nepieciešams, lai būtu atlasītas grupas vai komponenti, ko sadalīt; lejupielāde darbojas ar visu, kas ir drukājams.

## Savienotāju pārvietošana pašrocīgi

Pēc priekšskatījuma **Savienotāji ar roku** ļauj labot to, kur savienotāji tiek novietoti:

- {{ui:Pārvietot vienu}}: noklikšķiniet uz sarkana riņķa skatā (tas kļūst zaļš), pēc tam noklikšķiniet, kur tam jābūt uz griezuma.
- {{ui:Pievienot vienu}}: noklikšķiniet skatā, kur jāatrodas savienotājam. Tas tiek novietots uz griezuma plaknes, ko sasniedz jūsu klikšķis, starp abiem gabaliem tur.
- {{ui:Noņemt vienu}}: noklikšķiniet uz sarkana riņķa, lai noņemtu šo savienotāju.

Katra izmaiņa tiek pārbaudīta atkārtoti tāpat kā automātiskās: vieta, kas pārāk tuva kontūrai, cits griezums vai cits savienotājs netiek veidots, un kartīte to norāda. {{ui:Atkal automātiski}} aizmirst jūsu vietas. Tās tiek saglabātas, kamēr modelis, atlase un griezumi paliek nemainīgi.

Priekšskatījums paliek spēkā, līdz mainās modelis, atlase vai iestatījums; tad kartīte pieprasa priekšskatījumu atkārtot.

:::note
Katrs gabals tiek pārbaudīts tāpat kā 3D drukas pārbaudē, pirms to lejupielādējat. Jūsu slicer joprojām nosaka, kā katrs gabals tiek drukāts: apskatiet katru tur un vispirms izdrukājiet vienu savienojumu, lai redzētu, kā jūsu printeris apstrādā atstarpi.
:::
