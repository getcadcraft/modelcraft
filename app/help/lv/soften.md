---
title: Malu noslīpēšana un nogludināšana
summary: Paslēpiet malas starp virsmām, kas saskaras nelielā leņķī, lai izliektas formas izskatītos kā viena gluda virsma ModelCraft un eksportētos failos.
keywords: noslīpēt, gluds, maigas malas, gluda ēnošana, paslēpt malas, facetes, facetēts, izliekts, normāles, cietināt, leņķis, soften, smooth
from: 52d32453
---

Izliekta forma ModelCraft sastāv no plakanām virsmām. **Maigas** malas starp šīm virsmām netiek zīmētas, un virsmas, ko tās savieno, tiek ēnotas kā viena gluda virsma, tāpēc 24 malu cilindrs izskatās apaļš.

Kad velkat riņķi ar {{ui:Stumt/vilkt}}, tā malas tiek noslīpētas jums. Citām formām noslīpējiet pēc leņķa.

## Noslīpēšana pēc leņķa

1. Atlasiet, ko noslīpēt: virsmas un malas vai grupu vai komponentu (visas tās malas).
2. {{ui:Objekta informācija}} ievadiet leņķi laukā {{ui:Noslīpēt līdz}}, piemēram, `20`, un noklikšķiniet uz {{ui:Noslīpēt}}.

Katra mala atlasē, kuras divas virsmas pagriežas par šādu leņķi vai mazāk, kļūst maiga; malas ar asāku pagriezienu paliek cietas. 12 malu prizmas sāni pagriežas par 30°, bet tās malas — par 90°, tātad `31` noslīpē tikai sānus.

{{ui:Visu cietināt}} visas atlasē esošās malas atkal padara cietas. Katra ir viens atsaukšanas solis.

## Jāzina

- Noslīpē tikai malas starp tieši divām virsmām. Vaļīgās malas paliek kā ir.
- Gluda ēnošana darbojas tikai pāri maigām malām: virsma bez maigas malas ēnojas plakani.
- Maigās malas tiek saglabātas ModelCraft failā. **glTF (.glb)** un **OBJ** eksporti nes gludo ēnojumu (normāle katrā stūrī), tāpēc citas programmas rāda to pašu virsmu. Collada un STL eksportē plakanas virsmas.
- Maigās malas ir paslēptas katrā virsmas stilā, arī {{ui:Rentgens}} un {{ui:Karkass}}. Lai tās redzētu, atlasiet formu un noklikšķiniet uz {{ui:Visu cietināt}}; atsaukšana atjauno noslīpējumu.
