---
title: Izmēru mērīšana un vadlīniju novietošana
summary: Nolasiet garumus un laukumus, mēriet starp diviem punktiem ar mērlenti un izvietojiet vadlīnijas un punktus, pret kuriem zīmēt.
keywords: mērīt, mērlente, leņķmērs, leņķis, leņķa vadlīnija, vadlīnija, konstrukcijas līnija, attālums, izmērs, garums, laukums, nobīde, izkārtojums, vadpunkts
from: de6d04d9
---

## Izmēru nolasīšana bez mērīšanas

Atlasiet kaut ko un skatiet sadaļu „{{ui:Entity info}}”:

- Malai rādās tās **garums**.
- Virsmai rādās tās **laukums** un caurumu skaits.
- Vairākām virsmām rādās to **kopējais laukums**.
- Grupai vai komponentam rādās tā **izmērs** (platums × dziļums × augstums kastei ap to) un, ja tā ir slēgta cietviela, tās **tilpums**.
- Ja nekas nav atlasīts, sadaļā „{{ui:Entity info}}” rādās visa modeļa izmērs.

Garumi un laukumi tiek rādīti vienībā, kas izvēlēta izvēlnē apakšējā labajā stūrī. Milimetru modelis rāda laukumus no 0.01 m² un lielākus kvadrātmetros (4 × 3 m istaba rādās "12 m²").

Zīmējot, vērtību lodziņā rādās tiešais garums, izmērs, rādiuss vai attālums, tāpēc pēc tam reti vajag mērīt.

Lai mainītu izmēru pēc zīmēšanas, atlasiet malu vai grupu un sadaļā „{{ui:Entity info}}” ierakstiet jaunu garumu vai izmēru. Vai novietojiet [izmēru](topic:dimensions) un ierakstiet tam jaunu garumu.

## Mērīšana starp diviem punktiem

1. Nospiediet {{key:T}}, lai izvēlētos rīku „{{ui:Tape}}”.
2. Noklikšķiniet punktu: stūri, vidu, punktu uz virsmas vai uz zemes. (Klikšķis uz malas dara ko citu; skatiet zemāk.)
3. Pārvietojiet uz otru punktu. Norāde un vērtību lodziņš („{{ui:Length}}”) rāda attālumu. Tas piesaistās punktiem un sarkanajam, zaļajam un zilajam virzienam.
4. Noklikšķiniet. Statusa joslā rādās "Izmērīts 4' 6"." un **vadpunkts** paliek otrajā punktā.

Lai vadpunktu novietotu precīzā attālumā, pēc pirmā klikšķa ierakstiet to un nospiediet {{key:Enter}}: tas tiek novietots virzienā, kurā rādāt.

## Vadlīnijas novietošana

Vadlīnija ir bezgalīga punktēta līnija, paralēla malai, izvēlētā attālumā. Izmantojiet vadlīnijas, lai izkārtotu atkāpi, stāva augstumu vai to, kur sākas logs.

1. Nospiediet {{key:T}}.
2. Noklikšķiniet uz **malas** (nevis tās gala). Norāde saka "Uz malas".
3. Pārvietojieties prom no malas, uz pusi, kurā jābūt vadlīnijai. Punktēta līnija seko, paralēla malai, un vērtību lodziņš („{{ui:Offset}}”) rāda attālumu.
4. Noklikšķiniet vai ierakstiet nobīdi un nospiediet {{key:Enter}}: `1.5m`, `5'`.

   Statusa joslā rādās "Vadlīnija 1.5 m no malas."

Sākot no esošas vadlīnijas, tiek izveidota cita vadlīnija paralēli tai, tātad režģi var izvilkt no vienas vadlīnijas.

Ja ierakstāt nobīdi, pirms neesat pārvietojies prom no malas, ModelCraft nevar saprast, kuru pusi domājat: "Vispirms pārvietojieties prom no malas, lai parādītu, kurā pusē."

## Vadlīnija leņķī: leņķmērs

1. Noklikšķiniet „{{ui:Protractor}}” grupā „{{ui:Modify}}”.
2. Noklikšķiniet centru: punktu, caur kuru iet vadlīnija. Uz virsmas leņķmērs guļ uz šīs virsmas; citur tas guļ plakani. Pēc šī klikšķa {{key:Right}}, {{key:Left}} vai {{key:Up}} novieto to taisni pret sarkano, zaļo vai zilo (nospiediet vēlreiz, lai atceltu).
3. Noklikšķiniet punktu, kas nosaka 0°, piemēram, gar malu.
4. Pārvietojiet līdz vēlamajam leņķim un noklikšķiniet: tas piesaistās 15° soļiem. Vai ierakstiet leņķi grādos, piemēram, `22.5`, un nospiediet {{key:Enter}}; vadlīnija iet tajā pusē, kur atrodas rādītājs.

Vadlīnija iet caur centru pie šī leņķa. Zīmējiet pa to ar „{{ui:Line}}” jumta slīpumam, nošķautnei vai slīpai sienai.

## Zīmēšana pret vadlīnijām

Zīmēšanas rīki piesaistās vadlīnijām ("Uz vadlīnijas") un vadpunktiem ("Vadpunkts"), kā arī vietai, kur vadlīnija krustojas ar ass virzienu. Sāciet taisnstūri tur, kur krustojas divas vadlīnijas, lai novietotu to precīzi.

## Vadlīniju noņemšana

- Viena vadlīnija: noklikšķiniet uz tās ar „{{ui:Select}}” un nospiediet {{key:Delete}}, vai noklikšķiniet to ar „{{ui:Eraser}}”.
- Visas vadlīnijas: kad nekas nav atlasīts, noklikšķiniet „{{ui:Delete all guides}}” sadaļā „{{ui:Entity info}}”.

Vadlīnijas tiek saglabātas failā `.modelcraft`. Tās netiek eksportētas citos formātos.
