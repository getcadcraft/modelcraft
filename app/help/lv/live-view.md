---
title: Tiešraides skats
summary: Logs līdzās modelim, kas rāda to reāllaika izskatā ar sauli un ēnām un seko katrai jūsu izmaiņai; pastaigājieties pa to un iestatiet dienas laiku un mēnesi.
keywords: kopīgot, panorāma, 360, tūre, virtuālā tūre, patstāvīgs skatītājs, bezsaistes skatītājs, nosūtīt klientam, video, pastaigas video, izkaisīt, izkaisīšana, zāle, pļava, mežs, akmeņi, augi, koki, pūlis, krāsot augus, tiešraide, reāllaiks, reāllaika renderēšana, pastaiga, pastaigāties, pirmās personas, prezentācija, klients, otrs ekrāns, otrs logs, monitors, dienas laiks, saule, sezona, mēnesis, ēnas, apkārtējās vides aizēnojums, atspulgi, atstarota gaisma, globālais apgaismojums, webgpu, webgl
from: fca3b0d6
---

{{ui:Eksportēt}} › {{ui:Tiešraide}} atver paneli virs lietotnes, kas rāda modeli reāllaika izskatā: debesis un sauli no jūsu modeļa vietas un datuma, saules ēnas, sejām piešķirtos izskatus un materiālus, lampas un no sienām un grīdām atstaroto gaismu. Tas seko tam, ko darāt: pagriežat skatu, un tas pagriežas arī; maināt modeli, un izmaiņa parādās brīdi vēlāk. Nekas netiek augšupielādēts.

## Atvēršana

1. Izvēlieties {{ui:Eksportēt}} › {{ui:Tiešraide}}. Panelis atveras apakšējā labajā stūrī.
2. Velciet tā virsrakstjoslu, lai to pārvietotu, un velciet stūri, lai to palielinātu.
3. {{ui:Jauns logs}} pārvieto to atsevišķā logā otram ekrānam. {{ui:Eksportēt}} › {{ui:Tiešraide jaunā logā}} to uzreiz atver tur. Ja pārlūks bloķē uznirstošos logus, tas atveras kā panelis.
4. {{ui:Aizvērt}} to aizver.

## Vadība

| Vadība | Ko tā dara |
|---|---|
| {{ui:Sekot skatam}} | Ieslēgts: tiešraides skats seko ModelCraft skatam. Staigājot to izslēdz |
| {{ui:Staigāt}} | Staigā pa modeli (zemāk) |
| {{ui:Gravitācija}} | Staigājot: stāvēt uz grīdām un kāpt pa kāpnēm. Izslēgts: lidot |
| {{ui:Laiks}} | Dienas stunda, no 05:00 līdz 21:00. Saule pārvietojas, velkot |
| {{ui:Mēnesis}} | Mēnesis (tā 21. datums), lai redzētu sauli ziemā un vasarā |
| {{ui:Kvalitāte}} | {{ui:Šim datoram}} (ko saņem [jūsu dators](topic:your-machine)), vai {{ui:Zema}}, {{ui:Vidēja}} vai {{ui:Augsta}} |

Apakšējā rindā redzams, ar ko tiek zīmēts skats (WebGPU vai WebGL 2), kvalitāte un atstarotā gaisma.

## Staigāt pa modeli

1. Pagrieziet galveno skatu uz vietu, kur vēlaties stāvēt, un izvēlieties {{ui:Staigāt}}. Jūs stāvat uz grīdas zem skata acu punkta, 1.6 m augumā.
2. Noklikšķiniet tiešraides skatā un pēc tam izmantojiet {{key:W}} {{key:A}} {{key:S}} {{key:D}} vai bultiņu taustiņus. Turiet {{key:Shift}}, lai skrietu. Velciet, lai apskatītos apkārt.
3. Soļus līdz 40 cm var uzkāpt (kāpnes); viss augstāks ir siena. Sienas jūs aptur, un jūs slīdat pa tām.
4. Ja {{ui:Gravitācija}} ir izslēgta, lidojat: {{key:E}} kāpj augšup, {{key:Q}} lejup.
5. {{key:Esc}} aptur staigāšanu.

## Izkaisīt augus, akmeņus un cilvēkus

{{ui:Izkaisīt}} tiešraides skata joslā atver izkaisīšanas paneli līdzās attēlam. Izkaisīšanas kopa izkliedē vienumus no apkārtnes bibliotēkas (koki, krūmi, zāle, ziedi, akmeņi, cilvēki, automašīnas) pa daļu modeļa. Vienumi tiek zīmēti tikai tiešraides skatā: tie nav modeļa ģeometrija, un galvenais skats tos nerāda.

1. **Aizpildiet virsmas:** ModelCraft atlasiet virsmas (vai grupu, piemēram, reljefu) un pēc tam izvēlieties {{ui:Aizpildīt izvēli}}. Kopa tās pārklās.
2. **Krāsojiet:** izvēlieties {{ui:Krāsot}}, pēc tam velciet pāri tiešraides skatam. Ja virsmas ir atlasītas, krāsa nokļūst tikai uz tām; ja nekas nav atlasīts, tā nokļūst uz visa, kas atrodas zem otas, arī uz zemes. {{ui:Otiņas izmērs}} iestata otu; {{ui:Dzēšgumija}} noņem krāsotās vietas.
3. Atzīmējiet, ko izkaisīt. Blakus katram skaitlis ir tā svars: 3 un 1 nozīmē trīs pirmā veida vienumus uz katriem viena otrā veida vienumiem.

| Vadība | Ko tā dara |
|---|---|
| {{ui:Uz m²}} | Cik vienumu uz katra kvadrātmetra |
| {{ui:Attālums (m)}} | Neviens vienums nav tuvāk par šo attālumu citiem objektiem, un neviens nav zem jumta vai galda. 0 to izslēdz |
| {{ui:Pagrieziens (°)}} | Cik katrs vienums nejauši pagriezts ap vertikālo asi |
| {{ui:Stāvākais (°)}} | Nav vienumu tur, kur virsma ir stāvāka |
| {{ui:Izmērs}} | Mazākais un lielākais izmērs kā vienuma paša izmēra reizinātājs |
| {{ui:Augstums no, līdz (m)}} | Tikai starp šiem augstumiem (tukšs = jebkurš) |
| {{ui:Noliekt līdz ar virsmu}} | 0 patur vienumus taisnus; 1 novieto tos taisni pret nogāzi |
| {{ui:Sēkla}}, {{ui:Samaisīt}} | Viena un tā pati sēkla vienmēr dod vienu un to pašu izkaisījumu; {{ui:Samaisīt}} izvēlas citu |

Kopas tiek saglabātas failā .modelcraft un, mainot tās, seko virsmām, ko tās pārklāj. Cik vienumus tiešraides skats var zīmēt maksimāli, nosaka [jūsu datora](topic:your-machine) līmenis: 20 000 {{ui:Tikai procesors}}, 100 000 {{ui:Grafikas karte, pamata}}, miljons {{ui:Grafikas karte, augsts}}. Panelī rādīts, cik vienumu ir novietoti no cik, ko prasa blīvums: novietots mazāk, kad sasniegts budžets vai kad objekti tos izslēdz. Vienumi kameras tuvumā tiek zīmēti kā sevi; tālākie kā vienkāršas formas savās krāsās.

:::note
Izkaisītie vienumi ir tiešraides skatā (un tā staigāšanā, panorāmās un patstāvīgajā skatītājā). Attēla renderēšana tos vēl nezīmē.
:::

## Dalīties: panorāmas, tūres, skatītājs, video

{{ui:Kopīgot}} tiešraides skata joslā izveido failus no tiešraides skata. Viss tiek veidots šajā datorā; nekas netiek augšupielādēts.

| Izvēle | Ko iegūstat |
|---|---|
| {{ui:360° panorāma}} | 360° attēls no vietas, kur stāv skats (vai kur staigājat), kā ekvirektangulārs PNG, ko atver panorāmu skatītāji un vairums foto vietņu |
| {{ui:Pievienot šo punktu tūrei}}, pēc tam {{ui:Saglabāt tūri}} | Viena tīmekļa lapa ar panorāmu katrā punktā un bultiņām uz punktiem, ko katrs var redzēt (siena starp tiem paslēpj bultiņu) |
| {{ui:Saglabāt skatītāju}} | Viena tīmekļa lapa ar modeli šajā reāllaika izskatā: pagriezt, staigāt pa to, pārlēkt uz tā saglabātajām ainām. Tā atveras bezsaistē pārlūkā ar WebGPU vai WebGL 2 — no mapes, USB zibatmiņas vai e-pasta — bez instalēšanas un konta, un tā neielādē neko no interneta |
| {{ui:Ceļa video}} | Kameras ceļš (vai saglabātās ainas pēc kārtas) kā video šajā reāllaika izskatā, tiešraides skata izmērā: WebM vai MP4, ja pārlūks tos var veidot, citādi numurēti attēli ZIP failā |

Panorāmas platums ir 1024, 2048 vai 4096 pikseļi, atkarībā no kvalitātes: zemā, vidējā vai augstā. Skatītāja fails ir apmēram 5 MB plus pats modelis.

:::note
Tūre un skatītājs ir paredzēti rādīšanai, nevis rediģēšanai: tie saglabā modeli tādu, kāds tas ir saglabāšanas brīdī.
:::

## Kvalitāte

| | Zema | Vidēja | Augsta |
|---|---|---|---|
| Saules ēnas | viena ēnu karte | trīs kaskādes | četras kaskādes |
| Apkārtējās vides aizēnojums (kontaktēnas) | | ✓ | ✓, smalkāks |
| Atspulgi metālā | | | ✓ |
| Spīduma izplūšana (kad to iestata attēla renderēšana) | | ✓ | ✓ |
| Izlīdzinātas malas | FXAA | vairāku kadru laikā (TAA) | vairāku kadru laikā (TAA) |
| Atstarotā gaisma | rupja | smalkāka | vissmalkākā |

{{ui:Šim datoram}} izvēlas zemu kvalitāti datoram bez derīgas grafikas kartes, vidēju ar iebūvētu grafikas mikroshēmu un augstu ar atsevišķu grafikas karti. Zema kvalitāte ir paredzēta 8 GB klēpjdatoram bez grafikas kartes.

## Atstarotā gaisma

Gaisma, kas no saulē apgaismotas sienas atsitas uz grīdu, un telpas tumšāka iekšpuse tiek aprēķināta ar to pašu ceļu izsekotāju, kas veido [renderētus attēlus](topic:render): tas renderē nelielu panorāmu punktos caur modeli fonā uz katra procesora kodola. Kamēr tas strādā, apakšējā rindā redzams {{ui:Atstarotā gaisma: 40 %}}; kad tas ir gatavs, skats to ņem vērā. Pēc izmaiņas tas sākas no jauna.

:::note
Tas ir tuvinājums tiešraides skatam, nevis renderēts attēls: nelielas detaļas starp punktiem saņem tuvāko punktu atstaroto gaismu. Gatavam attēlam izmantojiet [Renderēt attēlu](topic:render).
:::

## Spilgtums un krāsas

Tiešraides skats izmanto to pašu spilgtumu, baltā balansu, kontrastu un skata pārveidi (ACES, AgX, filmic vai standarta) kā [Renderēt attēlu](topic:render): iestatiet tos tur, un tiešraides skats seko.

:::note
Pārlūki atšķiras. Tur, kur pārlūkā ir WebGPU (Chrome un Edge operētājsistēmās Windows, macOS un ChromeOS, Safari 26), tiešraides skats to izmanto; citur (vairums pārlūku Linux, vecākas Apple sistēmas) tiek izmantots WebGL 2 un izskats ir tāds pats.
:::
