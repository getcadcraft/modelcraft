---
title: Saglabāt skatus kā ainas
summary: Saglabājiet kameru un stilu kā ainu, atjauniniet un pārdēvējiet to, un pārslēdzieties starp ainām vai atskaņojiet tās, lai prezentētu dizainu.
keywords: aina, skats, saglabāts skats, kamera, prezentācija, animācija, atskaņot, slaidrāde, page up, page down, cilnes, pastaiga
from: 38680d6e
---

**Aina** atceras kameras pozīciju, stilu un to, kas ir paslēpts: no kurienes skatāties, perspektīvu vai paralēlo projekciju, virsmu stilu, malas, saules iestatījumus, paslēptās grupas, izslēgtās birkas un griezumu. Ainas tiek saglabātas failā `.modelcraft`.

## Pievienot ainu

1. Iestatiet skatu: pagrieziet, tuviniet, izvēlieties stilu, iestatiet sauli.
2. Labajā pusē esošajā panelī {{ui:Ainas}} noklikšķiniet uz {{ui:Pievienot ainu}}.

   Aina parādās sarakstā ar nosaukumu "Aina 1", "Aina 2" un tā tālāk, kā cilne virs 3D skata. Statusa joslā rakstīts "Aina 1 saglabāta: šī kamera, stils un paslēptais."

## Pāriet uz ainu

- Noklikšķiniet uz tās cilnes virs 3D skata vai uz tās nosaukuma sarakstā {{ui:Ainas}}.
- Vai nospiediet {{key:PageDown}}, lai pārietu uz nākamo ainu, un {{key:PageUp}}, lai pārietu uz iepriekšējo. {{ui:Nākamā}} un {{ui:Iepriekšējā}} zem saraksta dara to pašu.

Kamera uz ainu pārslīd nedaudz vairāk nekā pusi sekundes. Ja jūsu dators ir iestatīts samazināt kustību, kamera uz turieni vienkārši pārlec.

## Mainīt, pārdēvēt vai dzēst ainu

Katrai ainai sarakstā aiz tās nosaukuma ir trīs mazas pogas:

- **Atjaunināt** (apļveida bultiņas): saglabā pašreizējo kameru, stilu un paslēpto šajā ainā. "Aina 2 atjaunināta."
- **Pārdēvēt** (zīmuls): atver dialogu "Pārdēvēt ainu". Ierakstiet jauno nosaukumu un noklikšķiniet uz {{ui:Saglabāt}}.
- **Dzēst** (miskastīte): noņem ainu. "Aina 2 dzēsta. Ctrl+Z to atgriež."

Ainu pievienošana, atjaunināšana, pārdēvēšana un dzēšana ir atsaukšanas soļi, tāpat kā izmaiņas modelī.

## Bloķēt ainas kameru

Kad vienu un to pašu skatu renderējat atkārtoti, kamēr mainās dizains, bloķējiet šīs ainas kameru, lai skats nekad nepāriet nejauši.

1. Sarakstā {{ui:Ainas}} noklikšķiniet uz **bloķēšanas** pogas (atvērtā atslēdziņa) aiz ainas nosaukuma. Tā aizveras, un ainas cilne virs 3D skata parāda mazu atslēdziņu. Statusa joslā rakstīts "Aina 2: kamera bloķēta."
2. Pārejiet uz ainu, kad vēlaties renderēt: kamera atgriežas tieši saglabātajā skatā, tāpēc no tā veidotie attēli sakrīt ar iepriekšējiem.

Kamēr kamera ir bloķēta, **Atjaunināt** joprojām saglabā ainā stilu un paslēpto, bet kamera paliek tur, kur bija, pat ja esat pagriezis skatu. Vēlreiz noklikšķiniet uz atslēdziņas, lai atbloķētu; tad Atjaunināt atkal saglabā pašreizējo skatu. Bloķēšana un atbloķēšana ir atsaukšanas soļi, un bloķējums tiek saglabāts failā `.modelcraft`.

## Prezentēt

1. Pievienojiet divas vai vairākas ainas.
2. Noklikšķiniet uz {{ui:Atskaņot}} zem saraksta. ModelCraft pāriet uz nākamo ainu ik pēc dažām sekundēm un pēc pēdējās atgriežas pie pirmās.
3. Noklikšķiniet uz {{ui:Apturēt}} (tā pati poga) vai nospiediet {{key:Esc}}, lai apturētu.

Saules pētījumam pievienojiet vienu ainu katrai stundai, mainot tikai {{ui:Laiks}}, un pēc tam tās atskaņojiet. Skatiet [Stili un saules ēnas](topic:styles-shadows#a-sun-study).

Lai prezentētu bez joslām, divreiz nospiediet {{key:Ctrl+Shift+F}}: pilnekrāns, pēc tam pilnekrāns ar paslēptām joslām. Ainu cilnes paliek virs skata.

## Ko aina parāda

Aina atceras, kas bija paslēpts, kad to saglabājāt: grupas un komponentus, ko esat [paslēpis](topic:hide-isolate), [birkas](topic:tags), ko izslēdzāt, un to, kuras [griezuma plaknes](topic:sections) griež. Pārejot uz ainu, tie atkal tiek paslēpti vai parādīti. Tātad viena aina var rādīt visu māju, nākamā māju ar izslēgtu jumta birku, nākamā griezumu caur to.

Paslēptas brīvas virsmas un malas nav ainu daļa. Pāriet uz ainu neizveido atsaukšanas soli. Ainas, kas saglabātas ar agrāku ModelCraft versiju, atstāj paslēpto tādu, kāds tas ir; noklikšķiniet uz Atjaunināt, lai to tajās saglabātu.

## Eksportēt animāciju

{{ui:Eksportēt animāciju}} zem saraksta atskaņo ainas no pirmās līdz pēdējai, kamera vienmērīgi pāriet starp tām, un saglabā filmu kā **WebM** video (divas sekundes pārejas un īsa pauze katrai ainai). Tas ieraksta skatu tādu, kā to redzat, tā izmērā ekrānā, [prezentācijas skatā](topic:styles-shadows#presentation-view) (bez asīm, vadlīnijām vai atlases). Lai apturētu bez saglabāšanas, nospiediet {{key:Esc}} vai vēlreiz noklikšķiniet uz pogas. WebM atskaņojas pārlūkprogrammās un VLC, un video redaktori to var pārveidot.

Renderētai pastaigai (debesis, saule, ēnas, materiāli) izvēlētā izmērā izmantojiet {{ui:Renderēt video…}}: bez animācijas kadriem tas ņem ainas pēc kārtas kā kameras ceļu. Skatiet [Animēt kameru un objektus](topic:animation).

## Lietderīgi zināt

- Stila mainīšana vai kameras pārvietošana pēc pārejas uz ainu nemaina ainu, kamēr nenoklikšķināt uz Atjaunināt.
- Ainas netiek eksportētas uz Collada, OBJ, glTF, STL vai IFC.
