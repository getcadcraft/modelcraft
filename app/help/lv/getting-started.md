---
title: Darba sākšana ar ModelCraft
summary: Kas ir ModelCraft un kam tas paredzēts, kā to atvērt un kā no pirmās kastes izveidot saglabātu modeli.
keywords: sākt, pirmais modelis, sākums, apmācība, ievads, kaste, masas, 3D, stumt/vilkt, ātrais sākums, vadīts, vadība, iesācējs, jauns 3D
from: d47ad719
---

ModelCraft ir 3D modelētājs agrīnai projektēšanai: masas pētījumiem, telpu izkārtojumiem, ātrām ēku formām un ēnām, ko tās met. Jūs zīmējat plakanas formas, pārvelkat tās augšup līdz cietiem ķermeņiem un turpināt strādāt, zīmējot uz to virsmām. Tas darbojas jūsu tīmekļa pārlūkprogrammā, un jūsu modeļi paliek jūsu datorā.

Ja esat lietojis SketchUp, lielāko daļu zināšanu varat izmantot arī šeit: tie paši rīku burti, stumšana un vilkšana, vērtību lauks precīziem izmēriem, grupas un komponenti. [Pārcelšanās no citiem modelētājiem](topic:coming-from) uzskaita atšķirības.

## ModelCraft atvēršana

1. Atveriet ModelCraft jaunākajā Chrome, Edge, Firefox vai Safari versijā. Skatiet [Pārlūkprogrammas un datori](common:browsers).
2. Pagaidiet, līdz parādās 3D skats: gaišs (vai tumšs) laukums vidū ar karti ar nosaukumu „Sākt modelēšanu”.

Ekrānā augšā ir rīkjosla, kreisajā pusē {{ui:Struktūra}} un {{ui:Komponenti}}, vidū 3D skats, labajā pusē {{ui:Objekta informācija}}, {{ui:Stils}} un {{ui:Ainas}}, bet apakšā statusa josla ar vērtību lauku un mērvienībām. [ModelCraft ekrāns](topic:workspace) izskaidro katru daļu.

:::note
ModelCraft nepieciešams WebGL, jūsu pārlūkprogrammas 3D zīmēšanas funkcija. Ja ekrāna vidus paliek tukšs un rīki nedarbojas, skatiet [Problēmu novēršana](topic:troubleshooting#the-3d-view-is-blank).
:::

## Vispirms pārbaudiet mērvienības

Paskatieties apakšējā labajā stūrī. Mērvienību izvēle rāda, kādās vienībās tiek mērīti garumi.

- Jauns modelis sākas **pēdās un collās**, kad pārlūkprogramma ir iestatīta uz Amerikas Savienotajām Valstīm (kā arī Libērijā un Mjanmā), un **milimetros** visur citur.
- Lai mainītu, izvēlieties citu vienību izvēlnē: {{ui:ft and in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} vai {{ui:mm}}. Pats modelis nemainās; mainās tikai garumu attēlojums un tas, kā tiek nolasīti skaitļi bez vienības.

Skaitlis, ko ierakstāt bez vienības, izmanto modeļa vienību. Modelī pēdās un collās skaitlis bez vienības ir **collas**, tātad `120` nozīmē 10 pēdas.

## Ļaujiet ModelCraft vadīt jūsu pirmo modeli

Jauns 3D modelēšanā? Kartē {{ui:Sākt modelēšanu}} noklikšķiniet uz {{ui:Vadīta pirmā modeļa izveide}} (tā atrodama arī izvēlnē {{ui:Skats}}). Neliela karte vada jūs cauri četriem soļiem, no plakana taisnstūra līdz modelim, kas gatavs 3D printerim:

1. Uzzīmējiet taisnstūri uz zemes.
2. Pavelciet to augšup kastē.
3. Padariet kasti par vienu objektu (grupu).
4. Pārbaudiet 3D drukāšanai, pēc tam lejupielādējiet 3MF vai STL failu.

Karte seko modelim, nevis pogām: tā pāriet tālāk, kad solis ir izpildīts, neatkarīgi no tā, kā to izdarījāt, un atgriežas soli atpakaļ, kad atsaucat. {{ui:Izvēlieties rīku}} izvēlas rīku jūsu vietā. Aizveriet to jebkurā brīdī ar {{ui:×}}.

## Uzzīmējiet savu pirmo kasti

1. Nospiediet {{key:R}} rīkam {{ui:Taisnstūris}} vai noklikšķiniet uz {{ui:Taisnstūris}} grupā {{ui:Zīmēšana}} rīkjoslā.
2. Noklikšķiniet vienreiz uz zemes tuvu skata vidum. Tas ir pirmais stūris.
3. Pārvietojiet rādītāju prom. Taisnstūris seko tam, un apakšējā vērtību laukā (ar etiķeti {{ui:Izmēri}}) redzams tā izmērs.
4. Ierakstiet izmēru un nospiediet {{key:Enter}}: piemēram, `4m,3m` vai `16',12'` pēdās un collās. Vērtību laukā nav jānoklikšķina, pirms ierakstāt; skaitļa ierakstīšana to nosūta tur.

   Jūs iegūstat plakanu taisnstūri uz zemes. Tā ir **virsma**: ap to ir malas.

5. Nospiediet {{key:P}} rīkam {{ui:Stumt/vilkt}}.
6. Noklikšķiniet uz taisnstūra, pavelciet rādītāju augšup un noklikšķiniet vēlreiz. Vai noklikšķiniet uz taisnstūra un ierakstiet augstumu, piemēram, `3m` vai `10'`, un nospiediet {{key:Enter}}.

   Taisnstūris kļūst par kasti ar augšu, apakšu un četrām malām.

7. Nospiediet {{key:Space}}, lai atgrieztos pie {{ui:Atlasīt}}, un noklikšķiniet uz kastes augšas. Labajā pusē {{ui:Objekta informācija}} rāda tās laukumu.

:::tip
Varat arī vilkt, nevis noklikšķināt divreiz: nospiediet pirmajā stūrī, velciet un atlaidiet otrajā. Abi veidi darbojas katram zīmēšanas rīkam.
:::

## Apskatīt apkārt

- **Orbīta:** velciet ar vidējo peles pogu (ritenīti) vai nospiediet {{key:O}} un velciet ar kreiso pogu.
- **Panoramēt:** velciet ar labo pogu vai ar vidējo pogu, turot {{key:Shift}}.
- **Tālummaiņa:** pagriezt ritenīti. Tā tuvina uz to, kas atrodas zem rādītāja.
- **Redzēt visu:** nospiediet {{key:Shift+Z}} vai noklikšķiniet uz {{ui:Robežas}}.

Skārienpaliktnī vai skārienekrānā žesti ir citi. Skatiet [Orbīta, panoramēšana un tālummaiņa](topic:orbit-pan-zoom).

## Atsaukšana

Nospiediet {{key:Mod+Z}}, lai atsauktu, un {{key:Mod+Y}}, lai atkārtotu, vai izmantojiet {{ui:Atsaukt}} un {{ui:Atkārtot}} rīkjoslā. ModelCraft atceras pēdējos 200 soļus, kamēr modelis ir atvērts. Vēsture netiek saglabāta failā.

## Modeļa saglabāšana

1. Noklikšķiniet uz {{ui:Saglabāt}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+S}}.
2. Pārlūkprogramma lejupielādē failu ar jūsu modeļa nosaukumu, piemēram, `Untitled.modelcraft`. Statusa joslā norādīts, kur tas nonāca: „Saglabāts Untitled.modelcraft jūsu lejupielādēs.”

**Saglabāšana ir lejupielāde.** Katra saglabāšana izveido jaunu kopiju lejupielāžu mapē; tā nepārraksta atvērto failu. Lai uzturētu kārtīgu projekta mapi, failu tajā pārvietojiet vai pārdēvējiet paši. [Atvēršana, saglabāšana, importēšana un eksportēšana](topic:files) izskaidro, kāpēc un ko vēl varat darīt.

:::warning
ModelCraft nesaglabā pats. Ja aizverat cilni ar nesaglabātām izmaiņām, pārlūkprogramma vispirms jautā („Atstāt vietni?”). Izvēlieties palikt un pēc tam saglabājiet.
:::

## Palīdzības saņemšana

Nospiediet {{key:F1}} vai noklikšķiniet uz {{ui:Palīdzība}} lietotņu joslā, lai atvērtu šo palīdzību blakus modelim. Tā darbojas bez savienojuma. Nospiediet {{key:F1}} vēlreiz vai {{key:Esc}} palīdzības logā, lai to aizvērtu. Skatiet [Šīs palīdzības izmantošana](common:help).

## Kur doties tālāk

- [Zīmēt virsmas ar līnijām, taisnstūriem un riņķiem](topic:draw-faces)
- [Stumt un vilkt virsmas līdz cietiem ķermeņiem](topic:push-pull)
- [Ierakstīt precīzus izmērus vērtību laukā](topic:value-box)
- [Katrs taustiņš un peles darbība](topic:keyboard)
