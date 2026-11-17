---
title: Animēt jebkuru īpašību, veidot to ar līknēm un sajaukt klipus
summary: Darbvieta Animēt atslēgo objekta novietojumu, pagriezienu un izmēru, lampas spilgtumu, izkliedi un krāsu, objektīvu un tīkla formu atslēgas; skeleti liek tīklam liekties ar kauliem un nokrāsotiem svariem; IK un ierobežojumi liek kauliem un objektiem sasniegt, skatīties uz, kopēt, palikt robežās, karāties no vai sekot citiem; stingri ķermeņi krīt, sakraujas un saduras un tiek aprēķināti par atslēgām; draiveri iestata vērtību no citām; laika līnijas skats Līknes veido katru izmaiņu ar Bézier rokturiem un cikliem, bet skats Klipi saglabā animācijas kā darbības, kuras var atkal novietot un sajaukt.
keywords: fizika, stingrs ķermenis, stingri ķermeņi, simulācija, simulēt, krišana, krist, gravitācija, sadurties, sadursme, sakraut, atsitiens, berze, aprēķināt, aprēķināts, ik, inversā kinemātika, ierobežojums, ierobežojumi, skatīties uz, izsekot, mērķēt, kopēt transformācijas, kopēt novietojumu, kopēt rotāciju, ierobežot rotāciju, robežas, pakārtots, vecāks, sekot ceļam, ceļš, pols, fabrik, ķēde, skelets, skeleti, kauls, kauli, karkass, āda, ādošana, svari, svaru krāsošana, svaru krāsošana, virsotņu grupas, automātiski svari, poza, pozas režīms, duālie kvaternioni, lineārs sajaukums, formu atslēgas, forma, morfs, morfi, mērķa formas, formu sajaukšana, sejas, izteiksme, draiveris, draiveri, izteiksmes, animēt darbvieta, animēt, animācija, atslēgkadrs, atslēga, atslēgas, īpašība, īpašības, pārveidošana, novietojums, rotācija, mērogs, lampa, gaisma, spilgtums, krāsa, objektīvs, redzes lauks, fov, grafiku redaktors, līknes, līkne, bezier, rokturi, tangente, interpolācija, cikls, cikli, atkārtot, cilpa, pingpong, nobīde, atslēgu lapa, atlasīt atslēgas, kastes atlase, kopēt atslēgas, ielīmēt atslēgas, stiept atslēgas, mērogot atslēgas, klipi, darbības, nla, sajaukt, sajaukšana, ietekme, glabāt
from: 16d8e12f
---

Laika [līnija](topic:animation) pārvieto kameru un veselas grupas un komponentes. Darbvieta **Animēt** atslēgo vairāk nekā tas, un laika līnijai ir divi papildu skati, lai veidotu un atkārtoti izmantotu to, ko atslēgojāt.

## Atvēršana

Izvēlieties {{ui:Animēt}} darbvietu sarakstā rīkjoslā. Laika līnija atveras zem skata, rīkjoslā rādās Animēt grupas ({{ui:Atslēgas}}, {{ui:Atskaņot}}, {{ui:Laika līnija}}), un panelis pa labi uzskaita, ko var atslēgot atskaņošanas galvas pozīcijā.

## Īpašības atslēgošana

Panelis atskaņošanas galvas pozīcijā uzskaita:

- **Izvēlētais objekts**: tā {{ui:Novietojums}}, {{ui:Pagrieziens (°)}} un {{ui:Izmērs}}, katrs pa trim skaitļiem. Ierakstiet skaitli un nospiediet {{key:Enter}}: tas tiek atslēgots atskaņošanas galvā, un objekts tur pārvietojas. Rombs blakus rindai atslēgo vērtību tādu, kāda tā ir tagad; piepildīts rombs nozīmē, ka atskaņošanas galvā jau ir atslēga.
- **Lampas**: katras lampas {{ui:Spilgtums (lm)}}, {{ui:Izkliede (°)}} (prožektora lampām) un {{ui:Krāsa}}.
- **Kamera**: {{ui:Objektīva leņķis (°)}}, lai tuvinātu, kamēr kamera kustas.

{{ui:Atslēgot pārveidi}} (vai {{key:I}}) atslēgo katras izvēlētās grupas vai komponentes novietojumu, pagriezienu un izmēru vienlaikus; {{ui:Atslēgas kamera}} (vai {{key:K}}) atslēgo kameru. Ja ir ieslēgta {{ui:Automātiska atslēga}}, grupa, kuras novietojums, pagrieziens un izmērs ir atslēgoti šādi, saņem jaunu atslēgu katru reizi, kad to pārvietojat.

Pagriezieni ir trīs leņķi: ap X, tad ap Y, tad ap Z. Pagrieziens, kas atslēgots pāri 180°, turpina to pašu virzienu (190° paliek 190°, nevis −170°), tāpēc ritenis var griezties vairākas reizes.

:::tip
Grupai, kas atslēgota ar {{ui:Atlasīta atslēga}} laika līnijā, ir atslēgas visam novietojumam. Līknes poga tās rindā pārvērš tās par novietojuma, pagrieziena un izmēra līknēm (tas pats novietojums katrā atslēgā), lai tās varētu veidot skatā {{ui:Līknes}}.
:::

## Formu atslēgas (morfi)

**Formu atslēga** ir cits tā paša [tīkla](topic:meshes) formas variants: smaids sejā, durvju izliekums, saliekta lapa. Tās slīdnis sajauc no tīkla tā pašreizējo formu (0) līdz šai formai (1); vairākas atslēgas summējas.

1. Izvēlieties tīklu darbvietā Animēt: panelis rāda tā {{ui:Formu atslēgas}}.
2. Noklikšķiniet {{ui:Pievienot formas atslēgu}}. ModelCraft pāriet uz [Tīkla darbvietu](topic:mesh-edit) ar jauno atslēgu rediģēšanai: pārvietojiet punktus, izspiediet, veidojiet — pārveidojiet tīklu par vajadzīgo formu.
3. Atgriezieties {{ui:Animēt}} un noklikšķiniet {{ui:Gatavs}}. Tīkls atgriežas kā bija, un atslēga saglabā jūsu izmaiņu.

Pēc tam velciet atslēgas slīdni (vai ierakstiet vērtību), lai to sajauktu. Rombs atslēgo vērtību atskaņošanas galvā, tāpēc atslēga var pieaugt un izzust laika gaitā; kad tai ir celiņš, jauna vērtība tiek atslēgota atskaņošanas galvā. Zīmuls atkal rediģē atslēgas formu (tīkls to rāda pilnībā līdz {{ui:Gatavs}}; {{ui:Atcelt}} atstāj atslēgu tādu, kāda tā bija), acs izslēdz atslēgu, miskaste to noņem.

Punkts, ko pievienojat, rediģējot atslēgu, pieder pašam tīklam: tas paliek tur, kur to novietojāt, katrā formā.

:::note
Formu atslēgas pārvieto tīklu pirms tā [modifikatoriem](topic:modifiers): Subdivision modifikators izlīdzina sajaukto formu. Renderētie attēli un videoklipi rāda atslēgas katrā kadrā.
:::

## Skeleti: kauli, kas liec tīklu

**Skelets** ir kaulu kopums tīkla [iekšpusē](topic:meshes). Pozējiet kaulus, un tīkls seko, katrs punkts tik, cik to norāda tā **svari**.

1. Izvēlieties tīklu darbvietā Animēt un noklikšķiniet {{ui:Pievienot skeletu}} panelī (vai {{ui:Pievienot kaulu}} grupā {{ui:Skelets}}): pirmais kauls iet pa tīkla vidu no tā pamatnes.
2. Ar izvēlētu kaulu {{ui:Pievienot pakārtotu kaulu}} pievieno nākamo no tā gala. Panelī iestatiet jebkura kaula {{ui:Galvgalis}}, {{ui:Gals}}, {{ui:Pagriezums (°)}} un to, no kā tas {{ui:Karājas no}}; kauls, kas karājas no cita, kustas kopā ar to. Noņemiet atzīmi no {{ui:Pārvieto tīklu}} kaulam, kas tikai vada citus.
3. Noklikšķiniet {{ui:Automātiski svari}}: katrs kauls paņem punktus, kas atrodas tam tuvāk, un ietekme vienmērīgi izplatās pa tīklu, tāpēc punkti starp diviem kauliem dalās ar tiem. {{ui:Tikai tuvākie kauli}} ir ātrāks un cietāks sadalījums.

**Pozējiet** kaulus ar {{ui:Poza}} ({{key:P}}): noklikšķiniet uz kaula, lai to izvēlētos, velciet, lai pagrieztu to ap skata asi, un {{key:Shift}}+velciet, lai to pārvietotu. Vai ierakstiet tā {{ui:Novietojums}}, {{ui:Pagrieziens (°)}} un {{ui:Izmērs}} zem {{ui:Poza}}; pagriezieni ir kaula pašu asīs, no tā atpūtas stāvokļa. Rombi un {{ui:Atslēgot visu pozu}} atslēgo pozu atskaņošanas galvā; kad kaulam ir atslēgas, tā pozēšana to atslēgo tur. {{ui:Atiestatīt šo kaulu}} un {{ui:Atiestatīt pozu}} atgriež kaulus atpūtas stāvoklī.

**Krāsojiet svarus** ({{key:W}}) izvēlētajam kaulam: tīkls rādās atpūtas stāvoklī, katra virsma nokrāsota atbilstoši tam, cik lielu ietekmi kauls uz to dod — sarkana visai, zila nekam. Krāsojiet, lai pievienotu ietekmi ({{key:Mod}} to noņem, {{key:Shift}} izlīdzina); {{ui:Izmērs (px)}} un {{ui:Stiprums}} iestata otu. Ar {{ui:Saglabāt katra punkta svaru summu vienādu ar 1}}, ja vienam kaulam piešķir vairāk, tāpat tas paņem no pārējiem. Katrs otas vilciens ir viens modeļa atsaukšanas solis.

{{ui:Āda}} nosaka, kā punkts starp kauliem pārvietojas: {{ui:Lineārs (ātrs)}} sajauc kaulu kustības un nedaudz saspiež saliektu locītavu; {{ui:Duālie kvaternioni (saglabā apjomu locītavās)}} pagriež punktu ap locītavu, tāpēc elkonis vai ceļgals saglabā savu biezumu (tad kaula {{ui:Izmērs}} neizstiepj ādu).

:::note
Vispirms nāk formu atslēgas, tad skelets, tad [modifikatori]. Skats, attēli un videoklipi visi rāda pozēto tīklu; tīkla svari tiek saglabāti kopā ar to, kauli un to poza — kopā ar animāciju.
:::

## IK un ierobežojumi

**Ierobežojums** pārvieto kaulu vai objektu pēc tā atslēgām saskaņā ar noteikumu. Izvēlieties objektu (vai skeletā — kaulu) un pievienojiet vienu zem {{ui:Ierobežojumi: …}}; vairāki darbojas sarakstā norādītajā secībā (bultiņas to maina), un katram ir {{ui:Cik daudz}} (no 0 līdz 1, atslēgojams ar savu rombu kā jebkura īpašība) un ieslēgšanas/izslēgšanas slēdzis.

| Ierobežojums | Priekš | Ko tas dara |
|---|---|---|
| {{ui:Sasniegšana (IK)}} | Kauliem | Kauls un kauli, no kuriem tas karājas ({{ui:Kauli ķēdē}}), saliecas tā, lai tā gals sasniegtu mērķi. Ar diviem kauliem un {{ui:Pols (līkums vērsts uz to)}} elkonis vai ceļgals vēršas uz polu; garākas ķēdes liecas vienmērīgi. Ja mērķis ir ārpus sasniedzamības, ķēde vēršas taisni uz mērķi. |
| {{ui:Skatīties uz}} | Abiem | Pagriežas tā, lai {{ui:Ass, kas vēršas}} būtu vērsta pret mērķi, turot {{ui:Ass, kas paliek augšā}} pēc iespējas tuvu augšai. |
| {{ui:Kopēt transformācijas}} | Abiem | Pārņem mērķa novietojumu, pagriezienu vai izmēru — tos, kas atzīmēti. |
| {{ui:Robežas}} | Abiem | Notur savu novietojumu, pagriezienu (grādos) vai izmēru starp {{ui:min}} un {{ui:max}} katrā asī; atstājiet pāri tukšu, lai ass paliktu brīva. |
| {{ui:Pakārtots}} | Abiem | Kustas kopā ar mērķi, it kā karātos no tā, sākot no vietas, kur abi atradās, kad izvēlējāties mērķi. |
| {{ui:Sekot ceļam}} | Objektiem | Atrodas uz [līkņu objekta](topic:curves) pozīcijā {{ui:Pa līkni}} (0 — tā sākums, 1 — beigas; atslēgojiet, lai tas ceļotu), un ar {{ui:Pagriezt pa līkni}} vēršas pa to. |

Mērķis ir cits objekts atvērtajā grupā, tā paša skeleta kauls vai ierakstīts {{ui:Punkts}} (objekta punkts ir modeļa koordinātēs, kaula punkts — tā tīkla koordinātēs). Kājai ar IK novietojiet mērķi tur, kur jābūt pēdai, un atslēgojiet mērķi, vai atslēgojiet {{ui:Cik daudz}}, lai nodotu kāju starp atslēgām un IK.

:::tip
Objekts, kas skatās uz kādu, kas seko ceļam, to redz uz ceļa: ModelCraft vispirms aprēķina mērķus neatkarīgi no objektu secības.
:::

## Fizika: krišana, kraušana un sadursmes

Ļaujiet objektiem krist un atsisties viens pret otru, tad saglabājiet rezultātu kā atslēgas.

1. Izvēlieties grupu, komponenti vai tīklu un iestatiet tā {{ui:Stingrs ķermenis}} zem {{ui:Fizika}}: {{ui:Krīt un saduras}} (tas kustas) vai {{ui:Paliek vietā, traucē}} (galds, siena, rampa). Krītošajam dodiet {{ui:Forma}} — {{ui:Kaste (tās robežas)}} vai {{ui:Bumba (apaļa pēc robežām)}} —, tā {{ui:Masa (kg)}}, {{ui:Berze}} un {{ui:Atsitiens}} (0 — noklusi nodunas, 1 — atlec atpakaļ tikpat augstu).
2. Zem {{ui:Viss modelis}} iestatiet {{ui:No (s)}} un {{ui:Līdz (s)}}, {{ui:Gravitācija (m/s², uz leju)}} un to, vai ir {{ui:Zeme, uz kuras nolaisties}} (un tās augstums).
3. Noklikšķiniet {{ui:Aprēķināt fiziku}} (panelī vai grupā {{ui:Fizika}}). Katrs krītošais objekts saņem novietojuma, pagrieziena un izmēra atslēgu katrā kadrā starp abiem laikiem; atskaņojiet to kā jebkuru animāciju.

Atkārtota aprēķināšana aizstāj šīs atslēgas; {{ui:Noņemt aprēķinātos kadrus}} tās noņem. Objekti sāk stāvot, kur tos novieto to atslēgas, līknes un ierobežojumi laikā {{ui:No (s)}} (atslēgota kustība pirms tā neturpinās krišanā). Vairāk {{ui:Soļi kadrā}} padara augstas kaudzes stabilākas; statusa josla norāda, kad kaut kas beigās vēl kustas.

:::note
Formas ir kastes un bumbas ap katra objekta robežām; kaste pieskaras ar saviem stūriem, malu vidus punktiem un virsmu vidus punktiem, tāpēc kastes kraujas un apgāžas, kā gaidāms. Auduma, šķidrumu, savienojumu starp objektiem un precīzu formu nav.
:::

## Draiveri

**Draiveris** iestata formas atslēgu no citām lietām, nevis ar roku: atveriet atslēgas draiveri (kalkulatora poga), uzrakstiet **izteiksmi** un katram tajā minētajam vārdam norādiet, ko tas nolasa ({{ui:Nolasa}}): laiku sekundēs, kadru, novietojuma, pagrieziena vai izmēra vērtību pa X, Y vai Z, lampas spilgtumu vai citu formas atslēgu. Piemēram, ar `v`, kas nolasa durvju pagriezienu ap Z, `clamp(v / 90, 0, 1)` atver formu, kamēr durvis atveras.

Izteiksmēs izmantojiet skaitļus, vārdus, `+ - * / % ^` un iekavas, kā arī funkcijas `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` ar `pi` un `e`. Kļūda tiek norādīta, un nekas nemainās. Draivētās atslēgas slīdnis rāda draivera vērtību; draiveris ir pāri atslēgas celiņam, līdz to noņemat.

## Atslēgu izvēle un maiņa (Atslēgu skats)

{{ui:Atslēgas}} rāda vienu rindu katram celiņam: kameru, katru kustīgo grupu un katru īpašību ("Lampa 2 · Spilgtums (lm)"; īpašību atslēgas ir apaļas).

- Noklikšķiniet uz atslēgas, lai to izvēlētos; {{key:Shift}}+klikšķis vai {{key:Mod}}+klikšķis pievieno atslēgas izvēlei vai noņem tās. {{key:Shift}}+velciet pār rindām, lai zīmētu kasti, kas pievieno visas tajā esošās atslēgas.
- Velciet izvēlētu atslēgu, lai pārvietotu visas; {{key:Left}} / {{key:Right}} pārvieto tās par kadru ({{key:Shift}}: par desmit).
- {{key:Mod+C}} kopē izvēlētās atslēgas, {{key:Mod+V}} ielīmē tās no atskaņošanas galvas uz tiem pašiem celiņiem (arī cits ModelCraft cilnes logs var tās ielīmēt).
- {{ui:Stiepums}} izkliedē izvēlētās atslēgas prom no atskaņošanas galvas par blakus esošo skaitli (2 = divreiz tālāk; 0.5 tās savelk).
- Pārejas saraksts iestata, kā katra izvēlētā atslēga pāriet uz nākamo.

## Līkņu veidošana (Līkņu skats)

{{ui:Līknes}} ir katra skaitļa grafiks laika gaitā: laiks pa horizontāli, vērtība uz augšu. Atzīmējiet līknes, ko rādīt, sarakstā pa kreisi (X, Y un Z ir sarkana, zaļa un zila).

- Noklikšķiniet uz atslēgas (kvadrāts), lai to izvēlētos, {{key:Shift}}+klikšķis — vairākām, vai velciet kasti. Velciet izvēlētu atslēgu, lai mainītu tās laiku un vērtību; ja izvēlētas vairākas, velkot tās pārvietojas laikā kopā.
- Izvēlētā atslēga rāda savus divus **rokturus**. Velciet vienu, lai veidotu līkni tajā pusē. {{ui:Rokturi}} norāda, kā tie uzvedas: {{ui:Automātiski}} (gluda līkne caur apkārtējām atslēgām), {{ui:Vērsti uz nākamo atslēgu}}, {{ui:Izlīdzināti}} (abi paliek taisnā līnijā, tāpēc līknei nav stūra) vai {{ui:Brīvs}}.
- {{ui:No izvēlētajām atslēgām}} nosaka, kā katra izvēlētā atslēga pāriet uz nākamo: {{ui:Līkne (rokturi)}}, {{ui:Izlīdzināt}}, {{ui:Vienmērīgs ātrums}}, {{ui:Lēni sākot un beidzot}} vai {{ui:Turēt}}.
- {{ui:Pirms}} un {{ui:Pēc}} nosaka, ko līkne dara ārpus savām atslēgām: {{ui:Turēt}} (paliek pie pirmās vai pēdējās vērtības), {{ui:Atkārtot}}, {{ui:Uz priekšu un atpakaļ}} vai {{ui:Atkārtot un turpināt}} (katrs atkārtojums sākas tur, kur beidzās iepriekšējais: ritenis turpina ripot, gājējs turpina iet).
- Ritenis tuvina ({{key:Mod}}: tikai vērtības; {{key:Shift}}: tikai laiks); velciet ar vidējo pogu vai ar {{key:Alt}}, lai panoramētu; {{ui:Rādīt visu}} vai {{key:Home}} ietilpina visas rādītās līknes. Noklikšķiniet tukšā vietā, lai pārvietotu tur atskaņošanas galvu. {{key:Delete}} dzēš izvēlētās atslēgas.

Rokturi tiek turēti tā, lai laikā nešķērsotos, tāpēc līkne nekad neiet atpakaļ.

## Animāciju atkārtota izmantošana (Klipu skats)

**Klips** atskaņo saglabātu animāciju (**darbību**) laika līnijā. Klipi tiek sajaukti secībā: zemākās rindas pārklāj augstākās; laika līnijas paši celiņi atrodas virs visiem klipiem.

1. Atslēgojiet grupas un lampas kā parasti, tad noklikšķiniet {{ui:Izveidot klipu}} sadaļā {{ui:Klipi}} un nosauciet darbību. Celiņi kļūst par darbību, un klips to atskaņo tur, kur tie bija (kamera paliek laika līnijā).
2. Lai izmantotu atkal, izvēlieties darbību un noklikšķiniet {{ui:Pievienot klipu}}: jauns klips sākas atskaņošanas galvā.
3. Velciet klipu pa tā rindu, lai to pārvietotu; noklikšķiniet uz tā, lai iestatītu {{ui:Sākums (s)}}, {{ui:Ātrums}} (2 = divreiz ātrāk), {{ui:Atkārtojumi}}, {{ui:Cik daudz}} (no 0 līdz 1), {{ui:Sajaukšana}} ({{ui:Aizstāt}} vai {{ui:Pielikt virsū}} pirms tā esošajiem klipiem), {{ui:Ārpus klipa}} (nekas, turēt tā beigas vai turēt abus galus) un {{ui:Apklusināt}}. Bultiņas maina secību; miskaste to noņem (darbība, ko neviens klips vairs neizmanto, aiziet kopā ar to).

Klips ar mazāku par pilnu {{ui:Cik daudz}} sajaucas ar to, kas zem tā: iepriekšējo klipu vai lampu vai novietojumu tādu, kāds tas ir bez animācijas.

## Kas kur atskaņojas

| Kas | Skatā | Renderētā videoklipā |
|---|---|---|
| Kameras atslēgas, objektīva leņķis ar kameras atslēgām | Jā | Jā |
| Novietojums, pagrieziens un izmērs (atslēgas, līknes, klipi) | Jā | Jā |
| Lampas spilgtums, izkliede un krāsa | Jā | Vēl nav: video izmanto lampas tādas, kādas tās ir, sākoties (skatiet [kas vēl nav izveidots](topic:not-built-yet)) |
| Objektīva leņķis bez kameras atslēgām | Jā | Vēl nav: atslēgojiet arī kameru |
| Formu atslēgas un draiveri | Jā | Jā |
| Skeleti (pozēti tīkli) | Jā | Jā |
| IK un ierobežojumi | Jā | Jā |
| Aprēķinātā fizika (atslēgas) | Jā | Jā |

Viss tiek saglabāts `.modelcraft` failā kopā ar pārējo animāciju, un laika līnijas {{ui:Atsaukt}} un {{ui:Atkārtot}} atsauc jebkuru no tā.
