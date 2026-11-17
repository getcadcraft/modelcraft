---
title: Virsmu stumšana un vilkšana cietos ķermeņos
summary: Pārvērst virsmu kastē, padarīt ēku augstāku vai zemāku, pievienot izbūvi vai nišu un atkārtot attālumu ar dubultklikšķi.
keywords: stumt vilkt, ekstrudēt, augstums, ciets ķermenis, kaste, masa, augstāks, niša, izvirzīt, atkārtot, dubultklikšķis, tilpums, līmenis, uz virsmas, līdzens, tāds pats augstums
from: dc093c91
---

{{ui:Stumt/vilkt}} ({{key:P}}) pārvieto virsmu pa tās pašas virzienu: uz augšu un uz leju grīdai, iekšā un ārā sienai. Tas, kas notiek, ir atkarīgs no virsmas.

## Ciets ķermenis no virsmas

1. Uzzīmējiet virsmu, piemēram, taisnstūri uz zemes ([Zīmēt virsmas](topic:draw-faces)).
2. Nospiediet {{key:P}}.
3. Novietojiet kursoru virs virsmas. Tā izceļas.
4. Noklikšķiniet uz virsmas un tad pārvietojiet rādītāju. Virsma paceļas (vai nogrimst), un sāni izaug no tās malām. Vērtību lodziņš ({{ui:Attālums}}) un padoms rāda attālumu.
5. Noklikšķiniet, lai pabeigtu, vai ierakstiet attālumu un nospiediet {{key:Enter}}: `3m`, `10'`, `2700` milimetru modelī.

   Tagad jums ir slēgts ciets ķermenis. Atlasiet to visu un grupējiet (skatiet [Grupas un komponenti](topic:groups-components)): tad {{ui:Objekta informācija}} rāda "Ciets: Jā" un tā tilpumu.

Atsevišķa virsma var iet abos virzienos: velciet to augšup, lai iegūtu masu virs zemes, vai stumiet to lejup bedrei vai pamatiem.

:::tip
Tā vietā, lai klikšķinātu divreiz, nospiediet uz virsmas, velciet un atlaidiet. Skārienekrānā tas ir dabiskākais veids: nospiediet, velciet, paceliet.
:::

## Vilkšana līdz citas daļas augstumam

Kamēr velkat, novietojiet kursoru virs stūra, viduspunkta, malas vai palīglīnijas citā modeļa daļā. Virsma piestiprinās šim augstumam, un marķieris parāda punktu. Izmantojiet to, lai padarītu divus blokus vienāda augstuma vai lai apstātos pie palīglīnijas, ko novietojāt ar [mērlenti](topic:guides-measure).

Varat arī novietot kursoru virs virsmas, kas ir paralēla tai, ko stumjat, piemēram, cita bloka augšdaļas vai kastes augšdaļas, uz kuras stāv stabs. Padoms rāda "Uz virsmas", un virsma, ko stumjat, beidzas līdzeni ar to. Piemēram, nospiediet caurules iekšējo virsmu lejup, līdz tā ir līdzena ar kasti zem caurules.

Virsma leņķī pret to, ko stumjat, neuzstāda līmeni. Attālums seko rādītājam. Tāpat rīkojas virsma aiz virsmas, ko stumjat.

Kad stumtā virsma atkal beidzas līdzeni ar apkārtējām virsmām, tās sāni pazūd. Nepaliek nekādi nulles augstuma sāni, un zīmētais kontūra paliek uz virsmas, tāpēc vēlāk varat to stumt atkal. Lai atkal padarītu to par vienu virsmu, dzēsiet kontūras malas ar {{ui:Dzēšgumija}}: abas virsmas savienojas.

## Kastes padarīšana augstākas vai zemākas

Stumiet/velciet kastes augšdaļu. Tā kā sāni jau iet taisni uz augšu no tās, augšdaļa vienkārši pārvietojas: kaste kļūst augstāka vai zemāka, un nav izveidotas jaunas malas.

- Ja augšdaļu nospiež līdz apakšai, kaste tiek noņemta. ModelCraft apstājas nulles augstumā; tas nekad nepagriež kasti ar iekšpusi uz āru.
- Tas pats attiecas uz jebkuru virsmu, kuras kaimiņi visi iet pa tās virzienu, piemēram, sienas galu.

## Izbūves vai nišas pievienošana

1. Uzzīmējiet taisnstūri uz kastes sāna (sāciet to uz virsmas; tas paliek virsmas plaknē).
2. Nospiediet {{key:P}} un velciet jauno taisnstūri **uz āru**. Tas pievieno materiālu: izbūvi, dūmeni, nojumi.
3. Vai stumiet to **iekšā**. Tas izgriež nišu: lievenīti, nišu, ieejas atkāpi.

Kad jaunās daļas sāni sakrīt ar jau esošām virsmām, tie apvienojas vienā virsmā, tāpēc uz līdzenas sienas nerodas nevajadzīgas līnijas.

## Stumšana cauri

Virsmas stumšana cietā ķermenī apstājas pie pirmās virsmas aiz tās. Kad tā sasniedz šo virsmu, tā izgriež atvērumu cauri. Tā jūs veidojat logus un durvis biezā sienā. Skatiet [Izgriezt atvērumu caur sienu](topic:openings).

## Attāluma ierakstīšana

Pēc virsmas noklikšķināšanas ierakstiet attālumu un nospiediet {{key:Enter}}.

- Ierakstītais attālums iet tajā virzienā, kurā kustējāties. Ja vēl neesat pakustējies, tas iet uz virsmas priekšpusi (ārā no ciets ķermeņa, augšup no zemes).
- Ierakstiet negatīvu skaitli, piemēram, `-500`, lai ietu pretējā virzienā.
- Ja pārdomājat pirms klikšķināšanas, nospiediet {{key:Esc}}. Virsma atgriežas.

## Pēdējā attāluma atkārtošana

Pēc viena stumšanas/vilkšanas dubultklikšķiniet uz citas virsmas, kamēr {{ui:Stumt/vilkt}} vēl ir atlasīts. Tā pārvietojas par to pašu attālumu. Tas ir ātrais veids, kā dot vairākām sienām vai vairākiem stāviem vienādu biezumu vai augstumu.

ModelCraft atceras attālumu, līdz pārslēdzaties uz citu rīku.

## Svarīgi zināt

- Stumt/vilkt darbojas ar vienu virsmu vienlaikus. Ja noklikšķināt uz kaut kā, kas nav virsma, statusa josla saka "Stumt/vilkt darbojas ar virsmu. Noklikšķiniet uz virsmas."
- Lai stumtu/vilktu virsmu grupā vai komponentā, vispirms atveriet to (dubultklikšķis).
- Ar ieslēgtu **Sadursme**, stumšana vai vilkšana, kas ietriecas citā cietā ķermenī, apstājas, kur tas pieskaras, un padoms saka, ko tas skar (objekta nosaukums vai "brīva ģeometrija šajā grupā"), un izceļ virsmas, kuras tas satika. Ieliktnis, ko stumjat savā pašā cietajā ķermenī (piemēram, nobīdīta virsma, kas nospiesta atpakaļ lejup), ir daļa no šī cietā ķermeņa un nekad netiek apturēts ar tā sienām.
- Divi cieti ķermeņi, kas iespiesti viens otrā, neizgriež un nesavienojas: to virsmas vienkārši iet cauri. Skatiet [Vēl nav izveidots](topic:not-built-yet).
