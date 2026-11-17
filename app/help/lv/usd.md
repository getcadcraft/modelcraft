---
title: Saglabāt, atvērt un eksportēt USD
summary: Saglabājiet visu modeli kā USD (.usda, .usdc vai .usdz) bez zaudējumiem, atveriet to atkal un importējiet USD ainas no citām 3D programmām.
keywords: usd, usda, usdc, usdz, openusd, universālais ainas apraksts, saglabāt kā, eksportēt, ainas salikšana, arhitektūras vizualizācija, openpbr, materialx, pakotne
from: 73d299f9
---

USD ir ainas formāts, ko daudzas 3D, renderēšanas un arhitektūras vizualizācijas programmas kopīgi lieto. ModelCraft to raksta un lasa. `.modelcraft` paliek formāts, ko raksta {{ui:Saglabāt}}; USD ir izvēle sadaļā {{ui:Saglabāt kā}}.

## Saglabāt kā USD

1. Izvēlieties {{ui:Saglabāt kā}} grupā {{ui:Fails}} (vai nospiediet {{key:Mod+Shift+S}}).
2. Izvēlieties formātu: {{ui:Teksts (.usda)}} (lasāms, labi piemērots versiju kontrolei), {{ui:Binārs (.usdc)}} (vismazākais un ātrākais) vai {{ui:Pakotne (.usdz)}} (viens fails ar iekļautām tekstūrām).
3. Fails tiek lejupielādēts (darbvirsmas lietotnē izvēlaties, kur tas tiks saglabāts).

Tās pašas izvēles ir {{ui:Eksportēt}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nekas nepazūd

Atveriet USD failu, ko ModelCraft saglabāja, un jūs saņemat modeli atpakaļ precīzi: virsmas ar to caurumiem, mīkstās un paslēptās malas, līknes, grupas un komponentus, tagus, ainas, izmērus, palīglīnijas, griezuma plaknes, lampas, importētās tekstūras un skatu. Citas programmas redz to pašu modeli kā tīklus, grupas, komponentu prototipus, materiālus, lampas un kameras.

:::note
Ja cita programma maina grupas vai komponenta ģeometriju, ModelCraft atver šo daļu kā tīklu ar saglabātām izmaiņām un norāda, cik daļas tā nolasīja šādi. Daļa, ko cita programma pārvietojusi vai dzēsusi, paliek pārvietota vai dzēsta.
:::

## Atvērt vai importēt cita USD

- {{ui:Atvērt}} `.usd`, `.usda`, `.usdc` vai `.usdz` failu, lai sāktu modeli no tā.
- {{ui:Importēt}} vienu, lai pievienotu to atvērtajam modelim. Ievelciet kopā ar to failus, uz kuriem tas atsaucas (citus slāņus, tekstūras).

Tīkli tiek importēti ar savām normālēm, UV koordinātēm un krāsām, kopīgā ģeometrija kā komponenti, materiāli kā krāsas, lampas kā lampas un kameras kā ainas, metros ar Z augšup neatkarīgi no faila vienībām un augšējās ass.

## Vēl nē

Animācija, skeleti un MaterialX mezglu grafi pagaidām netiek nolasīti vai rakstīti USD formātā. ModelCraft pašas animācijas un mezglu materiāli tiek saglabāti USD failā, ko tas pats saglabāja, lai ModelCraft varētu to atkal atvērt, bet citas programmas tos neredz. Slāņi, uz kuriem fails atsaucas un ModelCraft nevar tos nolasīt (piemēram, MaterialX dokuments), tiek izlaisti ar piezīmi.
