---
title: ModelCraft lietošana ar MI asistentu
summary: Ļaujiet savam MI asistentam vai skriptam aplūkot modeli un izveidot vienkāršus cietos ķermeņus, atļaujas, savienošana caur CadCraft Studio un aktivitātes žurnāls.
keywords: mi, asistents, aģents, mcp, modeļa konteksta protokols, skripts, automatizācija, modelēšana, kaste, cilindrs, renderēt, renderēšanas rinda, atļaujas, atvienot, aktivitāte
from: 629cd0b7
---

## Ko jūs uzzināsiet

Kā ļaut MI asistentam (vai jūsu rakstītam skriptam) strādāt ar ModelCraft un kā izlemt, ko tas drīkst mainīt.

ModelCraft **pati nesatur MI** un nekur neko nesūta. Asistentu pievienojat jūs: jebkuru programmu, kas runā Modeļa konteksta protokolā (MCP). ModelCraft tikai dod tam rīkus, bet izvēlaties, kurus.

## Ieslēgt

1. Atveriet {{ui:Iestatījumi}} (zobrata ikona lietotnes joslā vai {{key:Mod+,}}) un dodieties uz cilni {{ui:ModelCraft}}.
2. Sadaļā {{ui:Asistenti}} atzīmējiet **Ļaut MI asistentiem un skriptiem izmantot ModelCraft**. Līdz tam tas ir izslēgts.
3. Izvēlieties, ko tas drīkst darīt: **Lasīt** ir atzīmēts sākumā; atzīmējiet **Rediģēt**, **Saglabāt** vai **Eksportēt** tikai tad, kad tas nepieciešams.

Rīki, kas neietilpst atzīmētajās atļaujās, asistentam netiek piedāvāti, un, ja tas tomēr pieprasa kādu no tiem, ModelCraft to noraida un ieraksta aktivitāšu žurnālā. Izslēdzot slēdzi, uzreiz tiek pārtraukti visi savienojumi; {{ui:Atiestatīt ModelCraft iestatījumus}} to izslēdz arī.

## Savienot asistentu

Asistenti savienojas caur **CadCraft Studio** jūsu datorā: Studio palaiž nelielu serveri, kuram var piekļūt tikai šis dators, un to aizsargā pilnvara, ko Studio izveido katru reizi, kad sāk darboties. Programmā Studio izvēlieties {{ui:Savienot asistentu}} un nokopējiet adresi un pilnvaru savā asistentā (Studio parāda precīzus iestatījumus, ko ielīmēt). Nekad nekopīgojiet pilnvaru.

:::note
Pārlūkprogrammas cilne nevar atvērt savienojumu asistentam: pārlūkprogrammas lietotnēs slēdzim nav nekādas ietekmes, kamēr neizmantojat CadCraft Studio savā datorā.
:::

## Jūs paliekat vadībā

- **Katra izmaiņa ir viens atsaukšanas solis**, un tā nosaukta ar asistenta doto nosaukumu (piemēram, "Assistant: box"). {{key:Mod+Z}} atsauc asistenta pēdējo izmaiņu kopumā.
- **Jūs redzat, kad asistents ir savienots.** Lietotnes joslā poga nosauc asistentu, kamēr tas ir savienots; noklikšķiniet uz tās, lai redzētu, ko tas drīkst darīt, vai lai to **Atvienot**.
- **Aktivitāte.** {{ui:Iestatījumi}} › {{ui:ModelCraft}} › {{ui:Asistenti}} › {{ui:Aktivitāte}} uzskaita katru izsaukumu: kad, kurš rīks, izpildīts vai noraidīts. {{ui:Saglabāt žurnālu}} saglabā kopiju.

## Ko asistents var pieprasīt

| Rīks | Atļauja | Ko tas dara |
|---|---|---|
| `app_info`, `model_describe` | Lasīt | Modeļa mērvienība, izmērs un katra grupa un komponents ar atrašanās vietu, vai tas ir slēgts cietais ķermenis un tā tilpums |
| `view_screenshot` | Lasīt | Attēls no 3D skata, kāds tas ir redzams |
| `box_add`, `cylinder_add` | Rediģēt | Kaste vai cilindrs kā jauna grupa vietā un izmērā, ko norādāt jūs vai asistents ("3m", "10'" vai skaitlis modeļa mērvienībā) |
| `instance_move`, `instances_erase` | Rediģēt | Pārvieto vai dzēš grupas un komponentus |
| `faces_list`, `materials_list` | Lasīt | Grupas vai brīvās ģeometrijas virsmas (katras virziens, laukums un centrs); materiāli un krāsas, ar ko tas var krāsot |
| `push_pull` | Rediģēt | Stumj vai velk virsmu, kā to dara {{ui:Stumt/vilkt}} |
| `paint` | Rediģēt | Krāso virsmas vai visu grupu ar krāsu vai materiālu |
| `group_make` | Rediģēt | Izveido grupu vai komponentu no brīvām virsmām un grupām |
| `scene_add`, `scene_show` | Rediģēt | Saglabā skatu kā ainu; pāriet uz saglabātu ainu |
| `mesh_add` | Rediģēt | Tīkla objekts, no kura sākt (kubs, sfēra, cilindrs …), kā to pievieno Tīkla darba vide |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Lasīt / Rediģēt | Tīkla modifikatoru kaudze: spoguļošana, masīvs, sadalīšana, nolaušana un pārējie; nekas netiek pastāvīgi lietots |
| `usd_export` | Eksportēt | Modelis kā OpenUSD (.usda, .usdc vai .usdz), tāds, kādu to saglabā kā USD ([USD](topic:usd)); uz mapi, ko atļāvāt Studio, citādi lejupielāde |
| `render_still` | Eksportēt | Renderēts skata vai saglabātas ainas attēls, tāds, kādu to veido dialoga {{ui:Renderēt}} poga {{ui:Renderēt}}, ar jūsu renderēšanas iestatījumiem, ja vien tas nepieprasa citus (ainas iepriekšiestatījums: ārpuse, iekšpuse, griezums, nakts vai automātiski; ātri vai augsta kvalitāte, izmērs, paraugi, debesis); PNG, ko tas var apskatīt, vai PNG, EXR vai renderēšanas fails mapē, ko atļāvāt Studio ([Renderēt attēlu](topic:render)) |
| `render_queue` | Eksportēt | Pievieno augstas kvalitātes attēlus dialoga {{ui:Renderēt}} rindai (skatu vai saglabātas ainas) un palaiž rindu; gatavie attēli tiek ievietoti mapē, ko atļāvāt, vai paliek dialoga {{ui:Renderēšanas rinda}} jums. Nepieciešams WebGPU |
| `link_push` | Rediģēt | Atjaunina modeli, kas saistīts no citas programmas (skat. [Uzturēt .3dm modeli aktuālu](topic:live-3dm-link)) |
| `link_status` | Lasīt | Parāda, vai saistītais modelis joprojām ir un kad tas pēdējoreiz atjaunināts |
| `undo` | Rediģēt | Atsauc paša soļus |

Cietie ķermeņi, ko izveido asistents, ienāk kā grupas, tāpēc tie nekad nesapludina ar to, ko esat zīmējis. Nav neviena rīka, kas saglabā modeli: saglabāšana paliek jums, un eksportēšanai vai renderēšanai nepieciešams atzīmēts **Eksportēt**. Renderēšana neko nemaina modelī; saglabātas ainas renderēšana pārvieto skatu uz to, kā to dara {{ui:Ainas}}.

## Ja kaut kas nedarbojas

- **Asistents neredz nevienu ModelCraft rīku:** pārbaudiet, vai šajā logā slēdzis ir ieslēgts un vai logs ir atvērts programmā Studio.
- **"nepieciešama rediģēšanas atļauja":** atzīmējiet **Rediģēt** sadaļā {{ui:Asistenti}} un pajautājiet vēlreiz.
- **Kļūdas "401" vai "token":** pilnvara mainījās (Studio tika restartēta vai {{ui:Jauna pilnvara}}). Nokopējiet jauno pilnvaru asistenta iestatījumos.

## Skatīt arī

- [Ieteikumi MI asistentiem](common:assistants-recipes): darba piemēri, katrs ar rīkiem, ko tas izsauc.
