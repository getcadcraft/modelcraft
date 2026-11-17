---
title: Otvaranje scene u drugom programu
summary: Sačuvajte scenu kao USD ili glTF datoteku za bilo koji program koji ih čita, ili je otvorite iz Studio-a u programu na ovom računaru.
keywords: otvori u, usd, gltf, glb, izvoz, program za renderovanje, archviz, studio, usdview, slanje, predaja, paket, fascikla unreal
from: 812329d5
---

Izaberite stavku **Otvori u** na listi Engine u {{ui:Renderuj sliku…}} da odnesete scenu drugom programu. Ništa se ne vraća u model.

## Datoteka za bilo koji program

- **USD datoteka** čuva scenu kao `.usdc` (ili `.usdz` kad model nosi slike): [ista datoteka kao Sačuvaj kao USD](topic:usd), sa materijalima, lampama i kamerama. Zadržava ponavljanje instanci i tačne vrednosti materijala. Većina renderera, engine-a za igre i pregledača čita USD.
- **glTF datoteka (.glb)** čuva lakšu glTF 2.0 datoteku sa materijalima, teksturama i lampama; pogledajte [Izvoz modela za druge programe](topic:export-model) za formate koje ModelCraft piše.
- **Fascikla Unreal projekta (.zip)** čuva fasciklu koju piše [Slanje scene u engine za igre](topic:render-unreal), za projekat na bilo kom računaru.

Sve tri rade u pregledaču i u Studio-u.

## U Studio-u: otvaranje u programu

Studio navodi programe koje pronađe na ovom računaru, a koji mogu da otvore scenu: usdview ako je na vašoj putanji za pretragu, i sopstveni program računara za tip datoteke. Izaberite jedan, izaberite USD ili glTF gde čita oba, i kliknite {{ui:Renderuj}}. Studio piše paket u novu fasciklu u Dokumentima (`CadCraft hand-off`; ništa se ne prepisuje, svako slanje dobija svoju fasciklu) i pokreće program nad njom, pa kaže gde su datoteke.

| Program | Najbolje čita |
|---|---|
| usdview | USD |
| Sopstveni program računara | Šta god računar ima za taj tip datoteke |

Studio pokreće samo programe sa ove fiksne liste; ne pokreće ništa što stranica traži po imenu, i nikad ne pokreće program pod licencom GNU GPL (pogledajte [Crtanje slike drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Svaki program koji čita USD ili glTF otvara datoteku iz **Datoteka za bilo koji program** iznad.

:::note
Twinmotion, Enscape i drugi programi za vizualizaciju nisu na listi: CadCraft nije proveren s njima i ne tvrdi ništa o njima. Ulaz je glTF ili USD datoteka odavde.
:::
