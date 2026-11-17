---
title: SKP modeļa importēšana
summary: Importējiet .skp failu ar tā grupām, komponentiem, krāsām, tekstūrām, tagiem un mīkstajām malām, skatiet, kas ienāca un kas ne, un turpiniet modelēt.
keywords: skp, importēt, atvērt skp, komponenti, grupas, tagi, slāņi, materiāli, krāsas, tekstūras, paslēpts, mīkstās malas, 3D Warehouse, migrēt, pārslēgšana
from: 325d3c81
---

ModelCraft nolasa SketchUp failus (`.skp`) ar savu lasītāju lapā. Nekas netiek augšupielādēts, un tas darbojas bezsaistē, kad darbojas ModelCraft. Ir pārbaudīti faili no SketchUp 3. līdz 2026. versijai.

## Faila importēšana

1. Noklikšķiniet „{{ui:Import}}” grupā „{{ui:File}}” (vai nometiet `.skp` failu uz 3D skata).
2. Izvēlieties failu.

   Kamēr fails tiek lasīts, statusa joslā rādās "Lasa house.skp…", pēc tam tas, kas ienāca, piemēram, "Importēts house.skp (SketchUp 25.0.575): 1240 virsmas, 6 komponenti, grupā."

Viss modelis ienāk kā viena grupa ar faila nosaukumu; tā ir atlasīta, un skats pietuvojas tai. Viens {{key:Mod+Z}} to visu atkal noņem, tostarp tagus.

:::tip
Sadaliet importa grupu ({{ui:Entity info}} › {{ui:Explode}}), kad vēlaties, lai tās saturs būtu brīvs jūsu modelī, nevis vienā grupā.
:::

## Kas ienāk

- **Virsmas** ar to caurumiem un **malas**, kas nav daļa no virsmas.
- **Grupas** ienāk kā grupas, un **komponenti** kā komponenti: katra komponenta kopija ir viena definīcijas novietojums, tāpēc, rediģējot vienu kopiju, mainās visas, kā SketchUp. Nosaukumi ienāk kopā ar tiem.
- **Krāsas.** Virsmas paša materiāls dod tai krāsu. Materiāls, kas uzkrāsots uz grupas vai komponenta, kļūst par šī novietojuma krāsojumu, tāpēc virsmas iekšpusē, kurām nav savas krāsas, to pārņem, kā SketchUp. Komponents, kas vienā vietā nokrāsots sarkans un citā zils, paliek viens komponents.
- **Tekstūras.** Virsma, nokrāsota ar tekstūras materiālu, ienāk ar savu tekstūru, uzlikta uz virsmas, kā failā, un to rāda stils „{{ui:Shaded}}”. Attēls tiek saglabāts ModelCraft failā, kad saglabājat, un arī [renderētais attēls](topic:render) to rāda. Tekstūras materiāls, kas uzkrāsots uz visas grupas vai komponenta, dod šai kopijai tikai materiāla krāsu.
- **Tagi.** Grupa vai komponents uz SketchUp taga iegūst ModelCraft tagu ar tādu pašu nosaukumu, kas redzams sarakstā „{{ui:Tags}}”, un tiek rādīts vai paslēpts tāpat kā SketchUp. Ja jūsu modelim jau ir tags ar tādu nosaukumu, tiek izmantots tas.
- **Paslēpti objekti ienāk paslēpti:** virsmas, malas, grupas un komponenti, kā arī virsmas un malas uz paslēpta taga. Redzat to, ko rādīja SketchUp, un nekas nepazūd: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} tos parāda. Skatiet [Paslēpšana, izolēšana un atklāšana](topic:hide-isolate).
- **Mīkstās un gludās malas** paliek mīkstas, tāpēc izliektas virsmas joprojām izskatās gludas.
- **Izmēri** ir pareizi jebkurā vienībā: SketchUp failos iekšēji tiek izmantotas collas, un ModelCraft tās pārvērš.

## Kas netiek importēts

Statusa josla saka, kas tika izlaists, ar skaitiem.

- **Dažas tekstūras** saglabā tikai sava materiāla krāsu: tekstūra, kas trūkst failā; attēls formātā, ko pārlūkprogrammas nerāda (piemēram, Photoshop fails); vai tekstūra bez izmēra. Virsmas ar projicētu tekstūru ienāk, un tekstūra ir novietota aptuveni.
- **Tagi uz brīvām virsmām un malām.** ModelCraft piešķir tagus tikai grupām un komponentiem, tāpēc virsma vai mala ar savu tagu ienāk bez taga, un statusa josla tās saskaita. Pārveidojiet šādas virsmas grupā ({{key:Shift+G}}) un piešķiriet grupai tagu.
- **Attēli**, kas ievietoti modelī, teksts, izmēri, vadlīnijas, griezuma plaknes, ainas un stili.

## Problēmas

- "Šis nav SketchUp fails." vai "Šis SketchUp fails ir bojāts: …": fails ir nepilnīgs vai kaut kas cits ar `.skp` nosaukumu. Saglabājiet to vēlreiz no SketchUp vai pieprasiet jaunu kopiju.
- Fails no SketchUp versijas, kas ir jaunāka par ModelCraft zināmo, tiek noraidīts, un tiek norādīta atrastā versija.
- Modelis, kas sastāv tikai no attēliem, teksta vai izmēriem, paziņo, ka nav, ko rādīt.

## Atgriezt modeli

ModelCraft nevar saglabāt `.skp` failus. Eksportējiet Collada ({{ui:Export}} › `.dae`) un importējiet to SketchUp: grupas, komponenti un krāsas pāriet; tekstūras pāriet kā to materiāla krāsa. Skatiet [Modeļa eksportēšana](topic:export-model).
