---
title: 3dm modeļa importēšana
summary: Importējiet 3dm failu ar tā tīkliem, virsmām, līknēm, blokiem, slāņiem un krāsām; skatiet, no kurienes nāk trijstūri un kas tiek izlaists.
keywords: 3dm, importēt, nurbs, daudzvirsma, brep, virsmas, renderēšanas tīkls, ekstrūzija, līknes, bloki, slāņi, tagi, krāsas, vienības, pārslēgšana, migrēt
from: 3cf29879
---

ModelCraft nolasa `.3dm` failus ar savu lasītāju lapā. Nekas netiek augšupielādēts, un tas darbojas bezsaistē, kad darbojas arī ModelCraft. Ir pārbaudīti faili, kas saglabāti 5., 6., 7. un 8. versijas formātā; vecākiem (2. līdz 4. versijai) vajadzētu atvērties, bet tie vēl nav izmēģināti.

## Faila importēšana

1. Noklikšķiniet „{{ui:Import}}” grupā „{{ui:File}}” (vai nometiet `.3dm` failu uz 3D skata).
2. Izvēlieties failu.

   Kamēr fails tiek lasīts, statusa joslā rādās "Lasa chair.3dm…", pēc tam tas, kas ienāca, piemēram, "Importēts chair.3dm: 14 tīkli (8330 virsmas), 8 līknes, 5 bloku novietojumi, 3 slāņi kā tagi. Virsmas: 7 no faila saglabātajiem tīkliem, 29 sadalītas ar CadCraft."

Viss modelis ienāk kā viena grupa ar faila nosaukumu; tā ir atlasīta, un skats pietuvojas tai. Viens {{key:Mod+Z}} to visu atkal noņem, tostarp tagus.

## No kurienes nāk trijstūri

ModelCraft strādā ar virsmām un tīkliem, tāpēc katra faila virsma ienāk kā [tīkls](topic:meshes) no maziem plakaniem trijstūriem. Katrai daudzvirsmas (un katrai ekstrūzijas) virsmai ModelCraft ņem šādā secībā:

1. **Failā saglabāto renderēšanas tīklu.** Lielākā daļa modelēšanas programmu saglabā tīklu, ko rādīja ekrānā, kopā ar katru virsmu; ja tas ir, ModelCraft to izmanto tādu, kāds tas ir.
2. **Savu sadalījumu**, ja failā nav saglabāta tīkla: plaknes, NURBS virsmas, rotācijas virsmas (sfēras, konusi, tori, virpotas formas), ekstrudētas līknes un ekstrūzijas (ar to caurumiem un galiem), apgrieztas pēc savām malām. Vienas daudzvirsmas virsmas dala savus malu punktus, tāpēc slēgta daudzvirsma ienāk kā slēgts tīkls. Izliektās vietas tiek dalītas, līdz trijstūri atrodas ne tālāk par aptuveni 0.15 % no objekta izmēra attālumā no patiesās virsmas.
3. **Neko**, ja virsma ir veida, ko ModelCraft vēl nelasa. Statusa josla saka, cik virsmu un kāda veida.

Statusa joslas daļa "Virsmas:" saka, cik virsmu nāca no saglabātiem tīkliem un cik ModelCraft sadalīja. Malas vienas faila virsmas iekšienē ir mīkstas, bet malas starp divām virsmām — asas, tāpēc izliekta virsma nokrāsojas vienmērīgi.

:::tip
Lai iegūtu visprecīzākās formas, saglabājiet failu ar renderēšanas tīkliem programmā, kurā tas veidots (parasti tas ir noklusējums; opcija "saglabāt mazu" tos izlaiž).
:::

## Kas ienāk

- **Tīkli** ar to virsotņu krāsām un tekstūru koordinātēm.
- **Daudzvirsmas, virsmas un ekstrūzijas**, kā aprakstīts iepriekš.
- **Līknes** (līnijas, polilīnijas, lokus, riņķus, NURBS līknes un no tām savienotas līknes) kā [malas](topic:curves), viena malu grupa katram slānim.
- **Bloki** kļūst par [komponentiem](topic:groups-components): katrs bloka novietojums ir viena komponenta novietojums, tāpēc, rediģējot vienu kopiju, mainās visas. Bloki blokos tiek saglabāti.
- **Slāņi** kļūst par [tagiem](topic:tags) ar pilnu slāņa nosaukumu ("Furniture::Chairs"), paslēpti, ja slānis bija izslēgts. Katra objekta novietojums nes sava slāņa tagu.
- **Krāsas.** Objekta krāsa nāk no tā, ko fails norāda: tā pašas krāsas, slāņa vai materiāla pamatkrāsas. Tā kļūst par virsmu krāsojumu.
- **Paslēptie objekti ienāk paslēpti**; „{{ui:Unhide all}}” tos parāda.
- **Vienības:** fails norāda savu vienību; modelis ienāk patiesajā izmērā.

## Kas tiek izlaists (un par to tiek paziņots)

Statusa joslas daļa "Piezīmes:" nosauc visu, kas neienāca, un to skaitu:

- punktus un punktu mākoņus, tekstu, teksta punktus, izmērus, izvedes līnijas, šrafējumus, gaismas, griezuma plaknes un izkārtojuma detaļas;
- SubD objektus: vispirms pārvērtiet tos tīklos vai daudzvirsmās programmā, kurā fails veidots;
- virsmas uz nobīdītām virsmām un citus virsmu veidus, ko ModelCraft vēl nelasa, ja failā tām nav saglabāts tīkls;
- blokus, kas saistīti ar citiem failiem (tiek nolasīts tikai importētais fails);
- ekstrūzijas ar slīpiem (saslīpētiem) galiem, kas ienāk ar taisniem galiem.

Materiālu tekstūras, renderēšanas iestatījumi, nosauktie skati, grupas un lietotāja teksts netiek nolasīti; materiāls dod tikai pamatkrāsu.

## Ierobežojumi

Faili līdz 300 MB. Bojāts fails norāda, kas nav kārtībā, un nepievieno nekā; viens objekts, ko nevar nolasīt, tiek izlaists un saskaitīts, pārējie ienāk.
