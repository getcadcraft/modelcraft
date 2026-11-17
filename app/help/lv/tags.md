---
title: Tagi: lietu kopu rādīšana un slēpšana
summary: Piešķiriet grupām un komponentiem tagu, piemēram, Mēbeles vai Sienas, un slēpiet vai rādiet visu ar šo tagu uzreiz.
keywords: tagi, tags, slāņi, slānis, rādīt, slēpt, redzamība, organizēt, mēbeles, sienas, bez taga, pārdēvēt tagu, dzēst tagu
from: c1a95a05
---

Tags ir nosaukums, ko piešķiriet grupām un komponentiem, piemēram, **Mēbeles**, **Sienas** vai **Teritorija**, lai varētu uzreiz paslēpt vai parādīt visu ar šo tagu. Tagi CAD programmās sauc par slāņiem. Lai slēptu vienu lietu vienlaikus, skatiet [Paslēpt, izolēt un parādīt](topic:hide-isolate).

## Izveidot tagu

1. Sadaļā {{ui:Tagi}} pa labi noklikšķiniet uz {{ui:Pievienot tagu}}.
2. Ierakstiet tā nosaukumu un nospiediet {{key:Enter}}.

Lai pārdēvētu tagu, noklikšķiniet uz tā nosaukuma sadaļā {{ui:Tagi}}, ierakstiet jauno un nospiediet {{key:Enter}}. Diviem tagiem nevar būt vienāds nosaukums.

## Grupu un komponentu piešķiršana tagiem

1. Atlasiet vienu vai vairākas grupas vai komponentus.
2. Sadaļā {{ui:Objekta informācija}} izvēlieties tagu laukā {{ui:Tags}}. {{ui:Jauns tags…}} izveido jaunu tagu un piešķir to atlasei.

{{ui:Bez taga}} noņem tagu. Skaitlis blakus katram tagam sadaļā {{ui:Tagi}} parāda, cik grupām un komponentiem tas ir.

Piešķiriet tagus grupām un komponentiem, nevis brīvām virsmām un malām: vispirms zīmējiet lietas, kurām vēlaties piešķirt tagus, kā grupas (atlasiet tās un nospiediet {{key:Shift+G}}).

## Paslēpt un parādīt

Noklikšķiniet uz acs blakus tagam. Viss ar šo tagu pazūd no skata, lai kur tas atrastos modelī (arī citās grupās), un klikšķi un piesaistes to ignorē. Lai to parādītu, noklikšķiniet uz acs vēlreiz. {{ui:Bez taga}} lietas vienmēr ir redzamas.

Ja rediģējat grupas iekšpusi, kuras tagu paslēpjat, grupa aizveras.

## Dzēst tagu

Noklikšķiniet uz miskastes blakus tam. Lietas, kam bija šis tags, kļūst par {{ui:Bez taga}} un parādās.

## Svarīgi zināt

- Tagi, to nosaukumi un tas, kuri ir paslēpti, tiek saglabāti ModelCraft failā. Tagotas grupas kopēšana citā modelī pārnes arī tās tagu.
- Tagu paslēpšana un parādīšana, kā arī jebkura cita izmaiņa tagos, ir viens atsaukšanas solis.
- Eksportā ietilpst viss, arī paslēptie tagi, tāpat kā paslēptās lietas.
- Slāņi DWG un DXF teritorijas plānos pagaidām nekļūst par tagiem: viss rasējums tiek importēts kā viena grupa.
