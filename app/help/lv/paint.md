---
title: Krāsot ar krāsām un materiāliem
summary: Piešķiriet virsmām, grupām un komponentiem vienmērīgu krāsu vai materiālu, piemēram, ķieģeli, apšuvumu, jumta dakstiņus vai koku, un saglabājiet to eksportējot.
keywords: krāsot, krāsa, krāsas, materiāls, materiāli, tekstūra, tekstūras, ķieģelis, apšuvums, jumta segums, dakstiņi, koks, akmens, flīzes, betons, apmetums, zāle, grants, stikls, metāls, krāsas spainis, aizpildīt, paraugs, pipete, noklusējums, glb, obj, mtl, collada
from: b1500523
---

Krāsas palīdz atšķirt modeļa daļas, un **materiāli** (ķieģeļi, apšuvums, jumta segums, koks, akmens, flīzes, betons, apmetums, zāle, stikls, metāls) padara modeli līdzīgu tam, no kā tas ir veidots. Abi tiek uzklāti vienādi.

## Krāsas izvēle

Sadaļa {{ui:Krāsas}} pa labi rāda rindu ar vienmērīgām krāsām, {{ui:Noklusējums}} (to, kas ir svītrots: nav krāsas) un {{ui:+}} paraugu jebkurai citai krāsai. Noklikšķiniet uz vienas, lai to padarītu par pašreizējo krāsu. Krāsošanas rīks sākas ar to.

## Krāsošana

1. Nospiediet {{key:B}} ({{ui:Krāsot}}) vai, ja nekas nav atlasīts, noklikšķiniet uz krāsas. (Ja kaut kas ir atlasīts, noklikšķinot uz krāsas, atlase uzreiz tiek nokrāsota.)
2. Noklikšķiniet uz virsmas, lai to nokrāsotu.
3. Noklikšķiniet uz grupas vai komponenta, lai nokrāsotu šo kopiju: tās virsmas, kurām nav savas krāsas, pārņem šo krāsu. Virsmas, kuras nokrāsojāt tajā, paturēs savu.

Lai nokrāsotu vairākas lietas vienlaikus, vispirms tās atlasiet un pēc tam noklikšķiniet uz krāsas, vai noklikšķiniet uz jebkuras no tām ar {{ui:Krāsot}}. Tas ir viens atsaukšanas solis.

| Turiet | Un noklikšķiniet uz virsmas | Kas tiek nokrāsots |
|---|---|---|
| — | | Šī virsma |
| {{key:Ctrl}} | | Katra virsma, kas ar to savienota un kurai ir tā pati krāsa |
| {{key:Shift}} | | Katra šīs krāsas virsma grupā, ar kuru strādājat |
| {{key:Alt}} | | Nekas: jūs paņemat šo krāsu |

Lai virsmu atgrieztu bez krāsas, izvēlieties {{ui:Noklusējums}} un noklikšķiniet uz tās.

## Krāsošana ar materiālu

Sadaļa {{ui:Materiāli}} zem {{ui:Krāsas}} uzskaita materiālu bibliotēku pēc veida: ķieģeļi un bloki, apšuvums, jumta segums, koks, akmens, flīzes, betons, apmetums, zeme, stikls un metāls. Novietojiet peli virs paraugu, lai redzētu tā nosaukumu. Noklikšķiniet uz viena, pēc tam krāsojiet ar to tieši kā ar krāsu: {{key:B}}, noklikšķiniet uz virsmām, grupām vai komponentiem; vai vispirms atlasiet un pēc tam noklikšķiniet uz materiāla.

- **Ēnotā** stilā virsmas rāda materiāla tekstūru. Paslēptās līnijas, karkass un rentgens rāda tā krāsu.
- Tekstūras ir **horizontālas pa katru virsmu** un **augšup pa to**: ķieģeļu rindas paliek horizontālas uz katras sienas, dakstiņi iet lejup pa jumta slīpumu, dēļi uz grīdas seko sarkanajai asij. Tās ir īstajā izmērā (ķieģelis ir apmēram 215 mm garš), tāpēc izskatās pareizi jebkurā attālumā.
- [Renderētā attēlā](topic:render) materiāli saglabā savu tekstūru, raupjumu un, stiklam un metālam, savu spīdumu.
- {{key:Alt}} + klikšķis ar {{ui:Krāsot}} paņem arī virsmas materiālu.

Tekstūras ModelCraft zīmē pati, tāpēc tās darbojas bezsaistē un ir brīvi izmantojamas jebkam (CC0).

## Komponenti un krāsas

Krāsa, kas nokrāsota virsmai **komponenta iekšpusē**, parādās katrā kopijā, jo kopijas dala vienu definīciju. Krāsa, kas nokrāsota **kopijai** no ārpuses (ar komponentu aizvērtu), pieder tikai šai kopijai, tāpēc divām vienas komponenta kopijām var būt dažādas krāsas. {{ui:Objekta informācija}} rāda atlasītās virsmas, grupas vai komponenta krāsu.

## Krāsas failos

- ModelCraft fails saglabā katru krāsu un katru materiālu.
- Citi formāti materiāla **krāsu** (tā izskatu no attāluma) saņem tekstūras vietā: glTF, Collada, OBJ, DWG un DXF, kā arī 3D drukas pārbaudē. glTF, Collada un OBJ materiāls saglabā savu nosaukumu, piemēram, `Material_brick-red`.
- **glTF (.glb)** un **Collada (.dae)**: katra krāsa kļūst par materiālu. Komponents, kas rādīts dažādās krāsās, tiek ierakstīts vienreiz katrai krāsai. glTF arī ieraksta importētās tekstūras kā tekstūras.
- **OBJ**: eksportēšana lejupielādē divus failus: `.obj` un `.mtl` materiālu failu ar krāsām. Glabājiet tos vienā mapē. Ja ir importētas tekstūras, `.obj`, `.mtl` un attēli nāk kā viens `.zip`.
- **DWG** saglabā precīzas krāsas; **DXF** izmanto tuvāko no 255 standarta CAD krāsām.
- **STL** un **PLY** pārnes krāsas: STL VisCAM / SolidView konvencijā (programmas, kas to nelasa, to ignorē), PLY kā krāsu katrā punktā. Skatiet [Failu formāti sīkāk](topic:formats).

:::tip
Lai modelētu ekrānu, nokrāsojiet rāmi ogļu pelēkā krāsā un stiklu zilā pēc tam, kad [nobīdāt](topic:draw-faces) priekšējo virsmu.
:::
