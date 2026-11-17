---
title: Tīkli
summary: Pārvērst grupu vai komponenti par tīklu — objekta veidu, ar ko modelē 3D satura rīki — un atpakaļ par bīdīšanas/vilkšanas ģeometriju.
keywords: tīkls, tīkli, daudzstūris, daudzstūri, n-stūris, četrstūris, četrstūri, virsotnes, pusmala, uv, uv koordinātes, pārvērst, pārvērst par tīklu, pārvērst par ģeometriju, apakšdalīšana, skulptēšana, modelēšana, 3D saturs
from: e32363e8
---

ModelCraft ir divi ģeometrijas veidi. **Bīdīšanas/vilkšanas ģeometrija** ir tā, ko zīmējat: plakanas virsmas, kas savienojas, sagriež viena otru un sadzīst. **Tīkls** ir objekta veids, ar ko modelē 3D satura rīki: virsmas ar jebkuru stūru skaitu, katrs stūris var nest savas tekstūras koordinātes (UV), normāles un krāsas, un katrai virsotnei ir tādas vērtības kā svari. Tīkls novietojas kā grupa vai komponente un atrodas līdzās bīdīšanas/vilkšanas ģeometrijai tajā pašā modelī.

## Grupas vai komponentes pārvēršana par tīklu

1. Atlasiet grupu vai komponenti.
2. Sadaļā {{ui:Objekta informācija}} noklikšķiniet uz {{ui:Pārvērst par tīklu}}.

Tās virsmas kļūst par tīkla virsmām (virsma ar caurumiem ienāk kā trīsstūri), cietās malas paliek asas, mīkstās malas tiek vienmērīgi ēnotas, un krāsa, materiāli un importētās tekstūras paliek uz savām virsmām. Grupas un komponentes tajā tiek apvienotas vienā tīklā. Brīvās malas tiek izlaistas: tīkls patur virsmas. Katrs komponentes novietojums rāda tīklu. Tas ir viens atsaukšanas solis.

## Ko rāda Objekta informācija

Atlasiet tīklu, lai redzētu tā virsmas, virsotnes un malas, vai tas ir slēgts ciets ķermenis (un tā tilpums) un tā izmēru kā novietotam. Tīkls ar atvērtām malām norāda, cik to ir.

## Tīkla pārvēršana atpakaļ par bīdīšanas/vilkšanas ģeometriju

Atlasiet tīklu un noklikšķiniet uz {{ui:Pārvērst par ģeometriju}}. Plakanas virsmas atgriežas tādas, kādas bija; virsma, kuras stūri nav vienā plaknē, atgriežas kā trīsstūri. Asās malas paliek cietas, pārējās mīkstas. {{ui:Sadalīt}} ievieto tīkla virsmas tieši grupā, kas to ieskauj.

## Vērā ņemamās lietas

- Veiciet dubultklikšķi uz tīkla, lai [rediģētu tā virsotnes, malas un virsmas](topic:mesh-edit) Tīkla darba vidē. Pārvērtiet to par ģeometriju, lai rediģētu ar bīdīšanu/vilkšanu; pārvietojiet, pagriežiet, mērogojiet, kopējiet, krāsojiet, paslēpiet un atzīmējiet to kā jebkuru grupu.
- Eksporti, 3D drukāšana, renderēšana un VR tīklu redz kā tā virsmas.
- Fails, kas satur tīklu, tiek saglabāts kā jaunāka `.modelcraft` faila versija, tāpēc ModelCraft 0.6 un vecākas versijas to nevar atvērt; faili bez tīkla tajās atveras kā agrāk. Vispirms pārvērtiet tīklus par ģeometriju, lai kopīgotu failu ar kādu vecākā versijā.
- Atsaukšana uz tīkla saglabā tikai to, ko mainīja katrs solis, tādēļ pat ļoti liels tīkls tiek atsaukts ātri.

Skatiet arī [Grupas un komponentes](topic:groups-components) un [Vēl nav izstrādāts](topic:not-built-yet).
