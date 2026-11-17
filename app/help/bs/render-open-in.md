---
title: Otvori scenu u drugom programu
summary: Snimi scenu kao USD datoteku ili glTF datoteku za bilo koji program koji ih čita, ili je otvori iz Studija u programu na ovom računaru.
keywords: otvori u, usd, gltf, glb, izvoz, program za renderovanje, archviz, studio, usdview, pošalji, predaja, paket, mapa za unreal
from: 812329d5
---

Izaberi unos **Otvori u** u listi Motor u {{ui:Renderuj sliku…}} da odneseš scenu drugom programu. Ništa se ne vraća u model.

## Datoteka za bilo koji program

- **USD datoteka** snima scenu kao `.usdc` (ili `.usdz` kad model nosi slike): [ista datoteka kao Snimi kao USD](topic:usd), sa materijalima, lampama i kamerama. Zadržava instanciranje i tačne vrijednosti materijala. Većina renderera, motora za igre i pregledača čita USD.
- **glTF datoteka (.glb)** snima lakšu glTF 2.0 datoteku sa materijalima, teksturama i lampama; vidi [Izvoz modela za druge programe](topic:export-model) za formate koje ModelCraft piše.
- **Mapa Unreal projekta (.zip)** snima mapu koju piše [Pošalji scenu motoru za igre](topic:render-unreal), za projekat na bilo kojem računaru.

Sve tri rade u pregledniku i u Studiju.

## U Studiju: otvori u programu

Studio navodi programe koje nađe na ovom računaru, a koji mogu otvoriti scenu: usdview ako je na tvojoj putanji za pretragu, i računarov vlastiti program za taj tip datoteke. Izaberi jedan, izaberi USD ili glTF gdje oba čita, i klikni {{ui:Renderuj}}. Studio piše paket u novu mapu unutar Dokumenata (`CadCraft hand-off`; ništa se ne prepisuje, svako slanje dobija svoju mapu) i pokreće program nad njom, zatim kaže gdje su datoteke.

| Program | Najbolje čita |
|---|---|
| usdview | USD |
| Računarov vlastiti program | Šta god računar ima za taj tip datoteke |

Studio pokreće samo programe sa ove fiksne liste; ne pokreće ništa što stranica zatraži po imenu, i nikad ne pokreće program pod licencom GNU GPL (vidi [Nacrtaj sliku drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Svaki program koji čita USD ili glTF otvara datoteku iz **Datoteka za bilo koji program** iznad.

:::note
Twinmotion, Enscape i drugi programi za vizualizaciju nisu na listi: CadCraft nije provjeren s njima i ne tvrdi ništa o njima. GlTF ili USD datoteka odavde je put da ih uvedeš.
:::
