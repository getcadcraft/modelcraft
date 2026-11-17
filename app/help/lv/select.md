---
title: Objektu atlase
summary: Klikšķis, dubultklikšķis un trīskāršs klikšķis, rāmja vilkšana loga vai šķērsatlasei, pievienošana un noņemšana ar palīgtaustiņiem un dzēšana.
keywords: atlasīt, atlase, logs, šķērsatlase, pievienot atlasei, noņemt no atlases, atlasīt visu, trīskāršs klikšķis, dubultklikšķis, dzēst, izdzēst
from: d56d1f89
---

{{ui:Atlasīt}} ({{key:Space}}) ir rīks, ar kuru ModelCraft sākas, un uz kuru {{key:Esc}} jūs atgriež. Atlasītie objekti kļūst zili, un labajā pusē {{ui:Objekta informācija}} parāda, kas tie ir.

## Klikšķis

| Dariet šo | Atlasa |
|---|---|
| Noklikšķiniet uz virsmas vai malas | Šo virsmu vai malu |
| Noklikšķiniet uz grupas vai komponenta | Visu grupu vai komponentu |
| Veiciet dubultklikšķi uz virsmas | Virsmu un tās malas |
| Veiciet dubultklikšķi uz malas | Malu un virsmas abās pusēs |
| Veiciet dubultklikšķi uz grupas vai komponenta | Atver to rediģēšanai (skat. [Grupas un komponenti](topic:groups-components)) |
| Veiciet trīskāršu klikšķi uz virsmas vai malas | Visu, kas ar to saistīts: visu objektu |
| Noklikšķiniet uz tukšas vietas | Neko (notīra atlasi) |
| Veiciet dubultklikšķi uz tukšas vietas, rediģējot grupu | Aizver grupu |

Malas ir vieglāk trāpīt nekā virsmas: ja rādītājs atrodas dažu pikseļu attālumā no malas, klikšķis atlasa malu.

## Rāmja vilkšana

- **No kreisās uz labo** velk cietu rāmi: **loga** atlase. Atlasīti tiek tikai tie objekti, kas ir pilnībā tā iekšpusē.
- **No labās uz kreiso** velk punktētu rāmi: **šķērsatlase**. Atlasīts tiek viss, ko rāmis skar, un virsma tiek atlasīta, kad rāmis atrodas pilnībā tās iekšpusē.

Grupa vai komponents tiek skaitīts kā viens objekts: loga atlasē tam jābūt pilnībā rāmī, šķērsatlasē pietiek, ka rāmis to skar.

## Pievienošana un noņemšana

Turiet nospiestu taustiņu, kamēr noklikšķināt vai velkat:

| Taustiņš | Darbība |
|---|---|
| {{key:Shift}} | Pārslēdz: pievieno to, kas nav atlasīts, un noņem to, kas ir atlasīts |
| {{key:Mod}} | Pievieno |
| {{key:Shift}} un {{key:Mod}} kopā | Noņem |

Lai atlasītu visu modelī (vai visu grupā, kuru rediģējat), nospiediet {{key:Mod+A}}.

## Atlases notīrīšana

Nospiediet {{key:Esc}} (ar rīku {{ui:Atlasīt}}) vai noklikšķiniet uz tukšas vietas.

## Atlasīto objektu dzēšana

Nospiediet {{key:Delete}} vai {{key:Backspace}}. Atlasītās virsmas, malas, grupas un palīglīnijas tiek noņemtas vienā solī; {{key:Mod+Z}} tās atjauno.

Malas dzēšana noņem virsmas, kurām tā ir nepieciešama, ja vien mala tikai nedalīja divas virsmas vienā plaknē: tad abas virsmas apvienojas vienā. Virsmas dzēšana atstāj tās malas. Skat. [Dzēšana un tīrīšana](topic:erase).

## Atlase grupas iekšpusē

Noklikšķinot uz grupas, tiek atlasīta visa grupa. Lai atlasītu tās iekšpusē esošu virsmu, veiciet dubultklikšķi uz grupas, lai to atvērtu, un pēc tam noklikšķiniet. Kamēr grupa ir atvērta, klikšķi attiecas tikai uz tās iekšpusē esošo; viss pārējais ir izbalināts. Lai to aizvērtu, nospiediet {{key:Esc}}, kad nekas nav atlasīts, vai veiciet dubultklikšķi uz tukšas vietas.

Kreisajā pusē esošā {{ui:Struktūra}} atlasa grupas un komponentus pēc nosaukuma, kas noder, ja tie ir paslēpti aiz citiem objektiem.
