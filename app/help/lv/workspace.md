---
title: ModelCraft ekrāns
summary: Ekrāna apskats ar rīkjoslu, katras puses paneļiem, 3D skatu un statusa joslu pēc to ekrānā redzamajiem nosaukumiem.
keywords: ekrāns, izkārtojums, rīkjosla, paneļi, struktūra, objekta informācija, stils, ainas, statusa josla, vērtību lauks, mērvienības, saskarne, apskats
from: 4a9a4516
---

No augšas uz leju: lietotņu josla, rīkjosla, trīs kolonnas (kreisie paneļi, 3D skats, labie paneļi) un statusa josla.

## Lietotņu josla

Šaurā josla augšā pieder katrai CadCraft lietotnei. Tajā ir lietotnes nosaukums un versija, {{ui:Par ModelCraft}}, ekrāna režīma poga un {{ui:Papīrs}} / {{ui:Modelis}} pārslēgs.

- {{ui:Papīrs}} ir gaišais motīvs, {{ui:Modelis}} — tumšais. 3D skats maina savas krāsas, lai atbilstu; jūsu modelis nemainās.
- Ekrāna režīma poga (sākumā tā rāda {{ui:Pilnekrāns}}) un {{key:Ctrl+Shift+F}} pārslēdz trīs režīmus: parasto, pilnekrānu un pilnekrānu ar paslēptām joslām. Ja joslas ir paslēptas, norādiet uz ekrāna augšējo malu (vai pieskarieties tai), lai tās atkal parādītu. {{key:Esc}} iziet no pilnekrāna.

:::note
{{key:Ctrl+Shift+F}} visos datoros izmanto taustiņu Control, arī Mac. iPhone, kur pārlūkprogrammās nav pilnekrāna, poga tikai paslēpj un parāda joslas.
:::

## Rīkjosla

Rīkjosla ir sadalīta ar nosaukumiem iezīmētās grupās. Uzvedot rādītāju virs pogas, redzams tās nosaukums un taustiņš.

Pa kreisi esošais saraksts {{ui:Darba vide}} pārslēdz to, kam paredzēta rīkjosla un labais panelis: {{ui:Modelis}} (stumšana un vilkšana modelēšanai, zemāk esošais apskats), {{ui:Tīkls}} ([rediģēt tīklu](topic:mesh-edit)), {{ui:Līkne}} ([līkņu objekti](topic:curves)), {{ui:UV}} ([izkārtot UV](topic:uv)), {{ui:Skulptēt}} ([skulptēt](topic:sculpt)), {{ui:Ēnojums}} ([materiāli, kas veidoti ar mezgliem](topic:shading)), {{ui:Animēt}} ([animēt](topic:animate)) un {{ui:Renderēt}} ([renderēt skatā](topic:render#render-in-the-view)).

| Grupa | Pogas |
|---|---|
| Fails | {{ui:Jauns}}, {{ui:Atvērt}}, {{ui:Saglabāt}}, {{ui:Importēt}}, {{ui:Eksportēt}} (formātu izvēlne) |
| Zīmēšana | {{ui:Līnija}} ({{key:L}}), {{ui:Taisnstūris}} ({{key:R}}), {{ui:Riņķis}} ({{key:C}}), {{ui:Daudzstūris}} ({{key:N}}) |
| Mainīšana | {{ui:Atlasīt}} ({{key:Space}}), {{ui:Stumt/vilkt}} ({{key:P}}), {{ui:Pārvietot}} ({{key:M}}), {{ui:Pagriezt}} ({{key:Q}}), {{ui:Mērogot}} ({{key:S}}), {{ui:Dzēšgumija}} ({{key:E}}), {{ui:Mērlente}} ({{key:T}}) |
| Organizēšana | {{ui:Komponents}} ({{key:G}}), {{ui:Grupa}} ({{key:Shift+G}}), {{ui:Sadalīt}} |
| Rediģēšana | {{ui:Atsaukt}} ({{key:Mod+Z}}), {{ui:Atkārtot}} ({{key:Mod+Y}}), {{ui:Kopēt}} ({{key:Mod+C}}), {{ui:Ielīmēt}} ({{key:Mod+V}}), {{ui:Vairāk}} (izvēlne: izgriezt, kopēt, ielīmēt, ielīmēt vietā {{key:Mod+Shift+V}}, dublēt {{key:Mod+D}}, dzēst, atlasīt visu, noņemt atlasi un taustiņu stils) |
| Kamera | {{ui:Orbīta}} ({{key:O}}), {{ui:Panoramēt}} ({{key:H}}), {{ui:Tālummaiņa}} ({{key:Z}}), {{ui:Robežas}} ({{key:Shift+Z}}), {{ui:Skati}} (izvēlne) |

Redzamie taustiņi ir stumšanas/vilkšanas taustiņi; ja [ModelCraft iestatījumos](topic:settings) izvēlēts stils {{ui:Taustiņi: Modelētājs}}, rīku uzvedinājumos tiek rādīti citi taustiņi. Izmantotais rīks ir redzams nospiests. Šaurā ekrānā rīkjosla ritina sānis.

Izvēlnē {{ui:Skati}} ir {{ui:Izometrija}}, {{ui:Augšskats}}, {{ui:Priekšskats}}, {{ui:Labais skats}}, {{ui:Aizmugures skats}}, {{ui:Kreisais skats}} un {{ui:Apakšskats}}, katrs pielāgots modelim, un {{ui:Perspektīva}}, kas pārslēdz starp perspektīvu un paralēlo projekciju.

## 3D skats

Ekrāna vidus. Sarkanās, zaļās un zilās līnijas ir asis: sarkanā un zaļā atrodas uz zemes, zilā rāda uz augšu, un **ziemeļi ir zaļā ass**. Krustpunkts ir sākumpunkts.

- Kad sākat, parādās karte ar nosaukumu „Sākt modelēšanu”, kurā uzskaitīti pirmie taustiņi. Tā pazūd, kad izvēlaties zīmēšanas rīku vai noklikšķināt skatā.
- Kamēr rīks strādā, skatā redzami **norādes marķieri**: mazas krāsainas formas, kur rādītājs piesaistās (zaļš aplis galapunktā, ciānzils — viduspunktā, sarkans kvadrāts uz malas, zils rombs uz virsmas). Skatiet [Norādes un piesaiste](topic:inference).
- Atlasītās lietas kļūst zilas. Virsma, kas redzama no aizmugures, ir zilpelēka.
- Kad atverat grupu rediģēšanai, viss ārpus tās izbalē, un asis pārvietojas uz grupas savām asīm.
- Kad modelim ir ainas, virs skata parādās ainu cilņu josla.
- Nometiet failu jebkur skatā, lai to atvērtu vai importētu.

## Kreisie paneļi

**{{ui:Struktūra}}** uzskaita modeļa grupas un komponentus, ieligzdotus tādā pašā veidā, kā tie ir ieligzdoti modelī. Komponents, kas izmantots vairāk nekā vienreiz, rāda, cik reizes, piemēram, „Logs (4)”.

- Noklikšķiniet uz nosaukuma, lai to atlasītu. Veiciet dubultklikšķi, lai to atvērtu rediģēšanai.
- **Meklēt pēc nosaukuma** (rāda, kad ir divas vai vairākas grupas) atstāj tikai tās rindas, kuru nosaukums atbilst, kopā ar grupām, kurās tās atrodas. {{key:Esc}} to notīra.
- **Acs** rindas beigās paslēpj vai parāda šo grupu vai komponentu (tāpat kā {{ui:Rediģēšana}} › {{ui:Vairāk}} › {{ui:Paslēpt}}). Birkas ikona nozīmē, ka tas ir paslēpts ar savu [birku](topic:tags).
- **Pārdēvēšana vietā:** noklikšķiniet uz rindas, pēc tam nospiediet {{key:F2}}, ierakstiet un nospiediet {{key:Enter}} ({{key:Esc}} paturēs veco nosaukumu).
- **Velciet rindu** uz citas grupas rindas vidu, lai pārvietotu to tajā iekšā; uz rindas augšējo vai apakšējo malu, lai ievietotu to tieši pirms vai pēc tās; vai uz {{ui:Struktūra}} virsrakstu, lai pārvietotu uz augšējo līmeni. Tā paliek savā vietā modelī un saglabā savu krāsu, birku un nosaukumu. Grupa nevar atrasties pati savā iekšienē. Katra pārvietošana ir viens atsaukšanas solis. Skatiet [Pārkārtošana struktūrā](topic:groups-components#rearrange-in-the-outliner).
- Kamēr rediģējat grupas iekšpusē, rinda rāda „Rediģē: Modelis › …”, un parādās poga {{ui:Aizvērt grupu}}. Tā aizver vienlaikus visus atvērtos līmeņus.

**{{ui:Komponenti}}** uzskaita katru komponenta definīciju ar to, cik eksemplāru ir novietoti („3×”), un pogu {{ui:Ievietot}}, kas pievieno vēl vienu eksemplāru tur, kur noklikšķināt.

## Labie paneļi

**{{ui:Objekta informācija}}** apraksta atlasīto. Tās virsraksts mainās, lai norādītu, kas tas ir:

| Virsraksts | Rāda | Pogas |
|---|---|---|
| Modelis (nekas nav atlasīts) | Virsmas, malas, grupas, komponenti un cik no tiem ir novietoti, vadlīnijas, kopējais izmērs | {{ui:Dzēst visas vadlīnijas}} (kad ir vadlīnijas) |
| Virsma | Laukums, caurumu skaits | {{ui:Apgriezt virsmu}} |
| Mala | Garums | nav |
| Grupa vai komponents | Nosaukums (rakstiet, lai pārdēvētu), cik reizes novietots, vai tas ir slēgts cietais ķermenis, tā tilpums, izmērs | {{ui:Rediģēšana}}, {{ui:Sadalīt}}, {{ui:Padarīt unikālu}} (komponents, kas novietots vairāk nekā vienreiz), {{ui:Izveidot komponentu}} (grupa) |
| Vadlīnijas punkts vai vadlīnijas līnija | nav | {{ui:Dzēst}} |
| Vairākas lietas | Cik virsmu, malu, grupu un vadlīniju, virsmu kopējais laukums | {{ui:Izveidot komponentu (G)}}, {{ui:Izveidot grupu (Shift+G)}} |

**{{ui:Stils}}** nosaka, kā modelis tiek attēlots: {{ui:Virsmas}} ({{ui:Ēnots}}, {{ui:Paslēptās līnijas}}, {{ui:Karkass}}, {{ui:Rentgens}}), {{ui:Rādīt malas}} un {{ui:Saules ēnas}} ar saules datumu, laiku un vietu. Skatiet [Stili un saules ēnas](topic:styles-shadows).

**{{ui:Ainas}}** saglabā skatus: {{ui:Pievienot ainu}}, ainu sarakstu un {{ui:Iepriekšējā}}, {{ui:Atskaņot}} un {{ui:Nākamā}}. Skatiet [Skatu saglabāšana kā ainas](topic:scenes).

## Statusa josla

Pa apakšu, no kreisās uz labo:

1. **Padoms**: ko rīks vēlas tālāk vai pie kā rādītājs piesaistās („Galapunkts”, „Uz sarkanās ass”).
2. **Ziņojumi**: kas tikko notika („Atsaukta stumšana/vilkšana.”, „Importēts site.dxf: 1697 malas uz zemes, grupā.”) vai kāpēc kaut kas nedarbojās.
3. **Vērtību lauks**: tā etiķete mainās atkarībā no rīka ({{ui:Garums}}, {{ui:Izmēri}}, {{ui:Rādiuss}}, {{ui:Malu skaits}}, {{ui:Attālums}}, {{ui:Leņķis}}, {{ui:Mērogot}}, {{ui:Nobīde}}). Tajā rādīts tiešais izmērs, kamēr strādājat, un tas pieņem to, ko ierakstāt. Skatiet [Precīzu izmēru ievadīšana vērtību laukā](topic:value-box).
4. **Taustiņu stils**: {{ui:Taustiņi: Stumt/vilkt}} vai {{ui:Taustiņi: Modelētājs}} pārslēdz saīsnes un peles pogas vienlaikus (tāpat kā [ModelCraft iestatījumos](topic:settings)).
5. **{{ui:Piesaiste}} un {{ui:Sadursme}}**: piesaiste punktiem, malām un asīm, un cietie ķermeņi apstājas, kur saskaras. Pārsvītrots nozīmē izslēgts. Noklikšķiniet, lai pārslēgtu. Skatiet [ModelCraft iestatījumi](topic:settings).
6. **Mērvienību izvēle**: mērvienības, kādās tiek rādīti garumi. Skatiet [Darba sākšana](topic:getting-started#check-the-units-first).

## Šaurs ekrāns

Zem aptuveni 760 pikseļu platuma (tālrunis vai šaurs logs) 3D skats aizņem visu ekrānu. Rīkjosla ir viena rinda, kas ritina sānis, un paneļi atveras kā lapas no apakšējās joslas.
