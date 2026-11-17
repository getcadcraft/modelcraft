---
title: Pārvietošana, kopēšana un masīvi
summary: Pārvietojiet objektus, noklikšķinot vai norādot precīzu attālumu, kopējiet tos ar modifikatora taustiņu un izveidojiet rindu ar vienmērīgi izvietotām kopijām.
keywords: pārvietot, kopēt, dublēt, masīvs, rinda, atstarpe, dalīt, nobīde, stiept, kolonnas, atkārtot, vairākkārtēja kopēšana
from: 280245fc
---

{{ui:Pārvietot}} ({{key:M}}) pārvieto atlasīto no viena punkta uz otru. Turot nospiestu modifikatora taustiņu, tas kļūst par kopiju, un pēc kopēšanas varat ierakstīt, cik vēl kopiju vēlaties.

## Objekta pārvietošana

1. Atlasiet to, ko vēlaties pārvietot (skatiet [Objektu atlase](topic:select)). Ja nekas nav atlasīts, {{ui:Pārvietot}} izmanto to, uz ko noklikšķināt.
2. Nospiediet {{key:M}}.
3. Noklikšķiniet punktu, no kura pārvietot. Izvēlieties kaut ko nozīmīgu, piemēram, stūri: šis punkts nonāks tieši tur, kur noklikšķināsiet nākamreiz.
4. Pārvietojiet rādītāju. Atlasītais seko tam. Tas piesaistās punktiem, malām un sarkanajiem, zaļajiem un zilajiem virzieniem, tāpat kā līnija.
5. Noklikšķiniet vietu, kur jānonāk punktam, vai ierakstiet attālumu un nospiediet {{key:Enter}}.

   Statusa joslas padoms atkal rāda "Noklikšķiniet punktu, no kura pārvietot…" nākamajai pārvietošanai.

Ierakstītais attālums iet rādītāja norādītajā virzienā. Varat arī ierakstīt precīzu nobīdi, `<2m,0,0>` (2 m pa sarkano), vai precīzu galamērķi izvēlētajam punktam, `[0,0,0]` (sākumpunkts). Skatiet [Precīzu izmēru ievadīšana](topic:value-box).

Lai pārvietotos tikai pa vienu asi, pēc pirmā klikšķa nospiediet bultiņu: {{key:Right}} fiksē uz sarkano, {{key:Left}} uz zaļo, {{key:Up}} uz zilo. Nospiediet to pašu bultiņu vēlreiz, lai atbloķētu.

## Daļas pārvietošana izstiepj formu

Negrupēta ģeometrija ir savienota. Ja atlasāt vienu virsmu vai dažas malas un tās pārvietojat, pie tām piestiprinātās virsmas izstiepjas, lai sekotu. Ja pārvietojat kastes augšējo virsmu uz sānu pusi, kaste noliecas; ja pārvietojat jumta vienu malu, jumta slīpums mainās. Virsmas, kas vairs nevar palikt plakanas, saliecas trijstūros.

Lai pārvietotu visu objektu, neizstiepjot to, vispirms atlasiet visu (trīskārt noklikšķiniet uz tā) vai, labāk, izveidojiet grupu vai komponentu (skatiet [Grupas un komponenti](topic:groups-components)).

## Objekta kopēšana

1. Atlasiet to, ko vēlaties kopēt.
2. Nospiediet {{key:M}}.
3. Turiet {{key:Ctrl}} (vai {{key:Alt}}) un noklikšķiniet punktu, no kura pārvietot. Mac datorā to pašu dara {{key:Mod}} vai {{key:Alt}}. Padoms rāda "Ctrl tā vietā pārvieto", kas nozīmē, ka kopējat.

   Varat arī nospiest un atlaist {{key:Ctrl}} vai {{key:Alt}} pēc pirmā klikšķa, lai pārslēgtos starp pārvietošanu un kopēšanu.

4. Noklikšķiniet vietu, kur jānonāk kopijai, vai ierakstiet attālumu un nospiediet {{key:Enter}}.

   Oriģināls paliek savā vietā, un kopija ir atlasīta.

## Kopēt, izgriezt, ielīmēt un dublēt

- {{key:Mod+C}} kopē atlasīto, {{key:Mod+X}} izgriež to (kopē un pēc tam dzēš). {{ui:Kopēt}} un {{ui:Ielīmēt}} ir arī pogas rīkjoslas grupā {{ui:Rediģēšana}}, un blakus esošā poga {{ui:Vairāk}} satur izgriešanu, ielīmēšanu tajā pašā vietā un dublēšanu.
- {{key:Mod+V}} ielīmē: kopijas kontūra seko rādītājam, piesaistoties kā jebkurš rīks, un klikšķis to nolika ar apakšējo kreiso stūri šajā vietā. {{key:Esc}} atceļ.
- {{key:Mod+Shift+V}} ielīmē tajā pašā vietā, tieši tur, no kurienes kopija nākusi, kas noder, lai pārvietotu kaut ko atvērtā grupā.
- {{key:Mod+D}} ({{key:Shift+D}} Modeler stilā) dublē: kopija tiek izveidota un uzreiz seko rādītājam. Noklikšķiniet, lai to noliktu, ierakstiet attālumu vai nospiediet {{key:Esc}}, lai to atmestu. Tūlīt pēc tam ierakstiet `3x`, lai iegūtu vairāk kopiju pēc kārtas.

Ielīmēta grupa kļūst par jaunu grupu. Ielīmēts komponents ir vēl viens tā paša komponenta novietojums, tāpēc, rediģējot vienu, mainās visi. Kopijas var ielīmēt arī citā ModelCraft cilnē šajā pārlūkprogrammā (tajā tās tiek ievietotas kā jaunas definīcijas).

## Kopiju rinda

Tūlīt pēc kopēšanas, kamēr {{ui:Pārvietot}} joprojām ir aktīvais rīks:

- Ierakstiet `3x` (vai `*3`) un nospiediet {{key:Enter}}, lai izveidotu trīs kopijas pēc kārtas, katru ar tādu pašu atstarpi kā pirmā kopija. Jūs iegūstat trīs jaunas kopijas papildus oriģinālam.
- Ierakstiet `/3` un nospiediet {{key:Enter}}, lai dalītu: trīs kopijas vienmērīgi izvietotas no oriģināla līdz vietai, kur nolikāt pirmo kopiju, pēdējā ir tieši šajā vietā. Izmantojiet to, lai aizpildītu attālumu: nolieciet vienu kopiju tālākajā galā un pēc tam dalīt.

Varat uzreiz ierakstīt citu skaitli: `5x` aizstāj `3x` rindu. Padoms atgādina: "Nokopēts. Ierakstiet 3x, lai iegūtu vairāk kopiju pēc kārtas, vai /3, lai dalītu attālumu."

### Piemērs: kolonnas ik pēc 6 metriem

1. Izveidojiet kolonnu un padariet to par komponentu ({{key:G}}), lai visas kopijas vēlāk mainītos kopā.
2. Nospiediet {{key:M}}, turiet {{key:Ctrl}} un noklikšķiniet kolonnas pamatnes stūri.
3. Pārvietojiet pa sarkano asi un ierakstiet `6m`, pēc tam {{key:Enter}}.
4. Ierakstiet `4x` un {{key:Enter}}. Jums būs piecas kolonnas, 6 m attālumā viena no otras.

## Ko vērts zināt

- Pirms otrā klikšķa nospiediet {{key:Esc}}, lai atceltu; viss atgriežas savā vietā.
- {{ui:Pārvietot}} darbojas grupā, kuru rediģējat. Lai pārvietotu visu grupu, vispirms to aizveriet un atlasiet no ārpuses.
- Ja ieslēgts {{ui:Sadursme}} (apakšā labajā pusē un [ModelCraft iestatījumos](topic:settings#solids-stop-where-they-touch)), pārvietošana apstājas tur, kur atlasītais pieskaras citam cietajam ķermenim, tā vietā, lai ietu cauri. Noklikšķiniet {{ui:Sadursme}}, lai to izslēgtu pārvietošanai, kuras laikā jāiet cauri.
- Lai ievietotu kopiju citā grupā: nokopējiet to, atveriet otru grupu un ielīmējiet ({{key:Mod+Shift+V}} saglabā to tajā pašā vietā).
