---
title: Modifikatori tīklam, grupai vai komponentei
summary: Mērogojiet, spoguļojiet, masīvojiet, izlīdziniet, nošķeliet, sagriezt un saliekt tīklu, nemainot to; atkārtojiet vai mērogojiet grupu vai komponenti ar to pašu steku; padariet to pastāvīgu, kad esat gatavs.
keywords: modifikators, modifikatori, steks, grupa, komponente, mērogot, fiksēt, rediģēt avotu, nedestruktīvs, spoguļot, masīvs, radiālais masīvs, apakšdalīšana, apakšdalīšanas virsma, izlīdzināt, nošķelt, sabiezināt, biezums, būla operācija, sagriezt, nobīdīt, troksnis, savienot, samazināt, vienkāršot, režģis, būris, līknes deformācija, saliekt, apvilkt
from: dd5ec1cb
---

**Modifikators** maina to, ko tīkls rāda, pats tīklu nemainot. Spoguļojiet vienu detaļas pusi un modelējiet tikai to; noapaļojiet kubu ar apakšdalīšanas virsmu un turpiniet rediģēt kubu. Modifikatori atrodas **stekā** un darbojas pēc kārtas no augšas uz leju. Ko redzat, eksportējat, drukājat un renderējat, ir tīkls ar visiem ieslēgtajiem modifikatoriem.

## Modifikatora pievienošana

1. Atlasiet tīklu. Modeļa darba vidē tā sadaļa **Modifikatori** atrodas {{ui:Objekta informācija}}; Tīkla darba vidē tā ir labajā panelī.
2. Izvēlieties vienu no {{ui:Pievienot modifikatoru…}}. Tas tiek ievietots steka apakšā.
3. Mainiet tā iestatījumus zem nosaukuma. Garumos tiek pieņemtas tādas pašas vērtības kā vērtību lodziņā, tādēļ `600mm`, `2'6"` un `(6m)/4` darbojas visi.

Katra izmaiņa ir viens atsaukšanas solis: {{key:Mod+Z}} to atsauc.

## Pogas katrā modifikatorā

- Atzīmes lodziņš to ieslēdz vai izslēdz.
- Ekrāna poga to rāda vai paslēpj skatā (tas paliek stekā).
- Kameras poga to rāda vai paslēpj renderētos attēlos un video, tādēļ modifikators var būt tikai renderēšanai (vai tikai skatam).
- Bultiņas pārvieto to augšup vai lejup stekā. Kārtībai ir nozīme: vispirms spoguļot un pēc tam apakšdalīt dod gludu šuvi, bet vispirms apakšdalīt un pēc tam spoguļot to nedod.
- {{ui:Lietot}} padara formu par tīkla daļu: modifikatori virs tā un šis pats tiek veikti uz paša tīkla un atstāj steku. Tas ir viens atsaukšanas solis.
- Krustiņš to noņem.

## Modifikatori

| Modifikators | Ko dara |
| --- | --- |
| Mērogot | Mērogo ap objekta sākumpunktu ar koeficientu sarkanajai, zaļajai un zilajai asij. Arī grupai vai komponentei. |
| Spoguļot | Pievieno spoguļattēlu pāri sarkanajai, zaļajai vai zilajai asij caur tīkla sākumpunktu un savieno pusītes to saskares vietā. |
| Masīvs | Kopē rindā (soļa lielums, kas reizināts ar ievadītajiem skaitļiem, plus fiksēts solis), ap asi vai pa līkni modelī. Grupa vai komponente iet rindā. |
| Apakšdalīšanas virsma | Izlīdzina tīklu ar Catmull-Clark apakšdalīšanu. Asās malas paliek šķautnes. Renderiem var izmantot vairāk līmeņu nekā skatam. |
| Nošķelt | Noapaļo katru malu, kas ir stāvāka par jūsu norādīto leņķi. |
| Sabiezināt | Piešķir virsmai biezumu un aizver malu. |
| Būla operācija | Izgriež, savieno vai saglabā pārklāšanos ar citu objektu modelī. Abiem jābūt slēgtiem cietiem ķermeņiem. |
| Nobīdīt | Pārvieto virsmu iekšā vai ārā ar vienmērīgu troksni. Viena un tā pati sēkla katru reizi dod tās pašas izciļņus. |
| Savienot | Savieno virsotnes, kas ir tuvāk par norādīto attālumu. |
| Samazināt | Saglabā noteiktu trīsstūru daļu, noņemot tos, kas vismazāk maina formu. |
| Izlīdzināt | Atslābina virsotnes uz to kaimiņiem. |
| Režģis | Saliec tīklu ar būri: pārvietojiet būra punktus, un tīkls seko. |
| Līknes deformācija | Saliec tīklu pa līkni modelī, pa sarkano, zaļo vai zilo asi. |
| Apvilkt | Pārvieto katru virsotni uz tuvāko punktu citā objektā. |

## Grupā vai komponentē

Arī grupa vai komponente var saglabāt recepti, tādēļ lampas abažūrs var būt **Mērogot** un viena abažūra **Masīvs**; mainot skaitli, mainās lampa.

1. Atlasiet grupu vai komponenti. Sadaļā {{ui:Objekta informācija}} tās sadaļā **Modifikatori** ir uzskaitīts steks (sākumā tukšs).
2. Izvēlieties {{ui:Mērogot}} vai {{ui:Masīvs}} no {{ui:Pievienot modifikatoru…}}. Grupa kļūst par komponenti, kas ir **oriģināls, ko novieto steks**. Oriģināls tiek saglabāts: rediģējiet to, un katra kopija uzreiz seko.
3. Mērogot ņem koeficientu sarkanajai, zaļajai un zilajai asij (`1, 1, 2` divkāršo augstumu). Masīvs ņem kopiju skaitu, soli kā daļu no rezultāta līdzšinējā izmēra un papildu soli garumos.

Steks darbojas no augšas uz leju pēc paša oriģināla asīm ap tā sākumpunktu, tādēļ kārtībai ir nozīme: masīvs ar trim kopijām 3 m attālumā, pēc tam Mērogot 2 sarkanajai, novieto kopijas 6 m attālumā; vispirms Mērogot un pēc tam masīvs tur tās 3 m attālumā. Atzīmes lodziņš, bultiņas un krustiņš darbojas kā uz tīkla; skata un kameras pogas un {{ui:Lietot}} uz viena modifikatora nedarbojas, jo steks uz grupas ir viena lieta.

- {{ui:Rediģēt avotu}} atver oriģinālu vietā. Izmaiņas redzamas katrā kopijā; to aizverot, atgriežaties, kur bijāt.
- {{ui:Fiksēt modifikatorus}} padara rezultātu par parastām malām un virsmām un noņem steku vienā atsaukšanas solī. Pārklājošās kopijas paliek kā atsevišķa ģeometrija: fiksēšana nav apvienošana.
- Komponentes kopijas dala recepti; {{ui:Padarīt unikālu}} to atdala (oriģināls paliek kopīgs).
- Steks tiek saglabāts failā, tas tiek pārnests ar kopēšanu un ielīmēšanu un atsaukšanu, un Tīrīt neizmantotos saglabā oriģinālu. Programma, kas nezina modifikatorus, joprojām rāda kopijas.
- Līdz fiksēšanai rezultātā nevar ieiet, to nevar sadalīt, mainīt izmēru vai izstiept: tas tiktu pārbūvēts pie nākamās izmaiņas. Katrs to norāda.
- Ierobežojumi ir 32 modifikatori un 1,000 kopijas. Komponente, kas veidota izstiepšanai, un steks vēl nevar dalīt vienu definīciju.

## Apakšdalīšanas virsma

Apakšdalīšana izlīdzina tīklu ar Catmull-Clark: katra virsma kļūst par četrstūru virsmām, un katrs līmenis dara to četras reizes vairāk. Kubs ar diviem vai trim līmeņiem jau izskatās noapaļots, un jūs turpināt rediģēt kubu.

- **Līmeņi skatā** iestata, cik gluds tas ir.
- **Līmeņi renderos** iestata, cik gludi ir renderētie attēli un video; renderiem var izmantot vairāk līmeņu nekā skatam.
- **Renderi uz patiesās gludās virsmas** novieto renderētā tīkla punktus uz robežvirsmas, uz kuru tiecas līmeņi, tādēļ pat divi līmeņi renderējas tikpat gludi kā daudzi.
- **Šķautnes** saglabā malas asas: Tīkla darba vidē atlasiet malas un izmantojiet {{ui:Šķautne}} (1 paliek ass, 0.5 mazliet noapaļo, 0 ir gluds). Skatiet [Tīkla rediģēšana](topic:mesh-edit).
- **Samaziniet skata līmeni lielam tīklam:** ja pieprasītie līmeņi dotu vairāk virsmu, nekā šis dators var labi apstrādāt, skats rāda zemāku līmeni un norāda, kuru. {{ui:Lietot}} vienmēr izmanto visus līmeņus. Cik virsmu ir atļauts, nosaka jūsu mašīnas klase sadaļā {{ui:Iestatījumi}} › Renderēšana › Jūsu dators.
- Atvērtas robežas saglabā savus stūrus un paliek uz savu malu līnijas.

## Saliekt ar režģa būri

1. Pievienojiet {{ui:Režģis}} modifikatoru un nospiediet {{ui:Pievienot režģa būri ap tīklu}}. Ap tīklu parādās būris ar 3 × 3 × 3 punktiem, zīmēts kā stieples.
2. Atveriet būri Tīkla darba vidē (veiciet dubultklikšķi uz tā) un pārvietojiet tā punktus. Tīkls seko vienmērīgi.

:::tip
Būris ir tīkls kā jebkurš cits: kad esat pabeidzis, paslēpiet to ar tā atzīmi.
:::

## Lieli tīkli

Mazie steki tiek aprēķināti uzreiz. Lielais tiek aprēķināts fonā uz katra jūsu datora kodola: skats joprojām rāda pēdējo rezultātu, līdz jaunais ir gatavs. Būla operācijas pirmajā reizē ielādē cieta ķermeņa modelētāju; skats to uz brīdi norāda.

## Ko modifikatori vēl nedara

- Svari katrai virsotnei (krāsota pakāpeniska izkrišana uz tīkla) priekš Nobīdīt, Izlīdzināt un Apvilkt.
- Modifikatori, kas nav Mērogot un lineārais Masīvs bīdīšanas/vilkšanas ģeometrijā (grupās un komponentēs): vispirms pārvērtiet to par tīklu ({{ui:Pārvērst par tīklu}}). Spoguļot, apaļais vai līknes Masīvs, Saliekt un Sašaurināt grupām pienāks vēlāk.
