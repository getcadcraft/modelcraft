---
title: Modeļa sagatavošana 3D drukai
summary: Pārbaudiet, vai modelis ir slēgts un vērsts pareizi, redziet tā izmēru, pamatni un nolieces, izlabojiet, kas nav kārtībā, un lejupielādējiet to kā STL vai 3MF savai slicer programmai.
keywords: 3D drukāšana, 3D druka, printeris, drukāt, slicer, stl, 3mf, ūdensnecaurlaidīgs, slēgts, manifold, ciets ķermenis, caurumi, uz iekšu, nolieces, atbalsti, pamatne, platforma, milimetri, eksportēt, labot, labošana, iedobums, platformas izmērs, iesācējs, sienas biezums, drukas rīki
from: 948e19af
---

3D printera slicer programmai nepieciešama slēgta forma: bez caurumiem, katra virsma vērsta uz āru, nekas neiet cauri pats sev. {{ui:Eksportēt}} › {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}} meklē tieši to, pirms lejupielādējat failu.

## Pārbaude un lejupielāde

1. Atlasiet, ko vēlaties drukāt: vienu vai vairākas grupas vai komponentus vai dažas virsmas. Ja nekas nav atlasīts, drukājas viss redzamais.
2. Noklikšķiniet {{ui:Eksportēt}} grupā {{ui:Fails}}, pēc tam {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}.

   Dialogs sākas ar vienu rindiņu: "Gatavs drukāšanai", cik lietas jālabo pirms drukāšanas, vai cik jāpārskata vispirms. Katrai problēmai ir trīs daļas: kas nav kārtībā, kāpēc tas ir svarīgi un ko darīt. Pēc tam seko izmērs milimetros, tilpums, trijstūru skaits un jūsu printera platforma.

3. Ja dialogā ir uzskaitīts, kas jālabo, noklikšķiniet {{ui:Labot, ko var salabot}} (skatiet tālāk). Pārbaude atkārtojas automātiski.
4. Noklikšķiniet {{ui:Lejupielādēt 3MF}} vai {{ui:Lejupielādēt STL}}.

Drukājas tas, ko redzat: paslēptās virsmas, paslēptās grupas un komponenti un viss, kas atrodas uz paslēptas birkas, tiek izlaists. Izmēri vienmēr ir milimetros, mērvienībā, ko slicer programmas sagaida, neatkarīgi no mērvienības, ko modelis rāda.

:::tip
Dodiet priekšroku 3MF, ja jūsu slicer to nolasa: tas saglabā krāsas un mērvienības. STL neatbalsta ne vienu, un slicer pieņem milimetrus.
:::

## Ko pārbauda

Šie apstājina drukāšanu vai to sabojā un liek dialogam rādīt "Nav gatavs drukāšanai":

| Problēma | Ko tas nozīmē | Ko darīt |
|---|---|---|
| Virsma tikai vienā pusē | Caurums: malai ir virsma vienā pusē un nekas otrā | Uzzīmējiet trūkstošo virsmu (līnija pāri spraugai bieži to aizver) vai izmantojiet {{ui:Labot}} (zemāk) |
| Kopīga trim vai vairāk virsmām | Virsmas saskaras spurā vai sienā cietā ķermenī | Izdzēsiet iekšējo virsmu |
| Virsmas vērstas pretējos virzienos | Dažas virsmas vērstas iekšā, dažas uz āru | Atlasiet virsmas, kas vērstas iekšā, un noklikšķiniet {{ui:Apgriezt virsmu}} logā {{ui:Objekta informācija}} |
| Uz iekšu | Viss slēgts gabals vērsts uz iekšu | Atlasiet tā virsmas un apgrieziet tās |
| Iet cauri pats sev | Viena daļa salocās cauri pati sev | {{ui:Rediģēšana}} › {{ui:Vairāk}} › {{ui:Krustot ar modeli}}, pēc tam izdzēsiet to, kas ir iekšpusē. Skatiet [Virsmu krustošana](topic:intersect) |

Šie ir brīdinājumi: modelis izdrukājas, bet vispirms paskatieties.

- **Atsevišķas daļas pārklājas** vai **saskaras virsma pret virsmu**: slicer parasti tās apvieno vienā. Tīrākam failam apvienojiet tās ar {{ui:Cietie ķermeņi}} › {{ui:Apvienot}}. Skatiet [Cieto ķermeņu rīki](topic:solids).
- **Apakšā nekas neguļ plakani**: pagrieziet modeli tā, lai virsma balstītos uz platformas, citādi slicer pievienos balstus vai plostu.
- **Noliecas vairāk nekā par 45° no vertikāles**: šīm virsmām nepieciešams atbalsts. Dialogs norāda, cik daudz virsmas laukuma to prasa.
- **Mazāk par 1 mm platumā**: iespējams, modelēts ar nepareizu mērvienību. Pārbaudiet mērvienību statusa joslā.

Dobs gabals (slēgts apvalks iekšā citam) ir kārtībā: tā virsmas vērstas uz dobumu, un tā tilpums tiek atņemts.

## Problēmu labošana

Zem **Kur ir problēmas** dialogs nosauc katru grupu vai komponentu, kurā kaut kas nav kārtībā (brīvas virsmas, kas nav grupā, tiek uzskaitītas kā "Virsmas, kas nav grupā"), ar to, kas tajā nav kārtībā. Komponents, kas novietots vairākas reizes, uzskaitīts vienu reizi: tā labošana labo katru kopiju.

- {{ui:Rādīt}} atver šo grupu un atlasa nepareizās malas un virsmas, lai tās būtu izceltas.
- {{ui:Labot, ko var salabot}} labo visu uzreiz: aizver caurumus, kuru malas guļ plakani, noņem virsmas formas iekšpusē un klaidīgās malas un pagriež virsmas pareizi uz āru. Tas ir viens solis: {{key:Mod+Z}} to atsauc. Pēc tam pārbaude atkārtojas un parāda, kas vēl paliek.

To, ko tas nevar salabot (caurums, kura malas neguļ plakani, gabals, kas iet cauri pats sev), paliek sarakstā kopā ar norādēm, ko darīt manuāli. {{ui:Labošana}} sadaļā **Drukas rīki** iet tālāk: tā aizver caurumus, kas nav plakani, noņem klaiņojošus gabalus un dubultās virsmas un uzskaita katru labojumu. Skatiet [Balsti, sienas biezums, dobināšana un labošana](topic:print-tools#repair). Varat labot arī pa vienai grupai: atlasiet to un pēc tam izmantojiet {{ui:Rādīt problēmas}} un {{ui:Labot}} logā {{ui:Objekta informācija}}. Skatiet [Cieto ķermeņu rīki](topic:solids).

## Dobs gabals

{{ui:Iedobums}} sadaļā **Drukas rīki** padara gabalu dobu līdz jūsu norādītajam sienas biezumam, ar drenāžas caurumiem tur, kur noklikšķināt. Skatiet [Iedobums](topic:print-tools#hollow).

Dobumu var arī uzzīmēt pats: slēgtu grupu gabala iekšpusē, kas to nepieskaras, ar visām virsmām apgrieztām, lai tās vērstos uz dobumu. Pārbaude to uzskata par dobumu un atņem tā tilpumu; tas nav uzskaitīts kā kaut kas labojams.

## Printera platforma

Izvēlieties printera platformas izmēru {{ui:Iestatījumi}} › {{ui:ModelCraft}} › {{ui:3D printera platforma}}. Pārbaude tad brīdina, ja modelis ir lielāks par platformu, pagriezts jebkurā virzienā. Skatiet [Iestatījumi](topic:settings#3d-printer-bed).

## Drukas rīki

Dialoga atradumu apakšā **Drukas rīki** atver {{ui:Balstu priekšskatījums}} (kur atrodas balsti un cik apmēram), {{ui:Sienas biezums}} (pārāk plānas sienas drukāšanai), {{ui:Iedobums}} un {{ui:Labošana}}. Skatiet [Balsti, sienas biezums, dobināšana un labošana](topic:print-tools). {{ui:Sadalīt drukāšanai}} sagriež modeli, kas pārāk liels platformai, gabalos ar savienotājiem un numurētiem savienojumiem: skatiet [Liela modeļa sadalīšana drukāšanai](topic:print-split).

## Netiek pārbaudīts

Pārbaude neveic griešanu: sīkas detaļas, ko jūsu sprausla nevar uzzīmēt, un īsti balsti ir jūsu slicer pārziņā. Skatiet [Vēl nav pieejams](topic:not-built-yet#3d-printing).
