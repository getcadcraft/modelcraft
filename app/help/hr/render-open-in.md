---
title: Otvaranje scene u drugom programu
summary: Spremite scenu kao USD ili glTF datoteku za bilo koji program koji ih čita ili je otvorite iz Studija u programu na ovom računalu.
keywords: otvori u, usd, gltf, glb, izvoz, program za renderiranje, archviz, studio, usdview, pošalji, predaja, paket, mapa za Unreal
from: 812329d5
---

Odaberite stavku **Otvori u** na popisu Motor od {{ui:Renderiraj sliku…}} da odnesete scenu u drugi program. Ništa se ne vraća u model.

## Datoteka za bilo koji program

- **USD datoteka** sprema scenu kao `.usdc` (ili `.usdz` kad model nosi slike): [ista datoteka kao pri Spremi kao USD](topic:usd), s materijalima, svjetiljkama i kamerama. Zadržava ponavljanje instanci i točne vrijednosti materijala. Većina renderera, pogonskih motora za igre i preglednika čita USD.
- **glTF datoteka (.glb)** sprema lakšu glTF 2.0 datoteku s materijalima, teksturama i svjetiljkama; vidi [Izvoz modela za druge programe](topic:export-model) za formate koje ModelCraft piše.

- **Mapa Unreal projekta (.zip)** sprema mapu koju piše [Slanje scene u pogonski motor za igre](topic:render-unreal), za projekt na bilo kojem računalu.

Sva tri rade u pregledniku i u Studiju.

## U Studiju: otvorite je u programu

Studio popisuje programe koje pronađe na ovom računalu, a mogu otvoriti scenu: usdview ako je na vašem putu pretrage, i izvorni program računala za tu vrstu datoteke. Odaberite jedan, odaberite USD ili glTF gdje čita oba, i kliknite {{ui:Renderiraj}}. Studio piše paket u novu mapu unutar Dokumenata (`CadCraft hand-off`; ništa se ne prepisuje, svako slanje dobiva svoju mapu) i pokreće program na njoj, zatim kaže gdje su datoteke.

| Program | Najbolje čita |
|---|---|
| usdview | USD |
| Izvorni program računala | Što god računalo ima za tu vrstu datoteke |

Studio pokreće samo programe s ovog fiksnog popisa; ne pokreće ništa što stranica zatraži po nazivu, i nikad ne pokreće program pod licencom GNU GPL (vidi [Crtanje slike drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Svaki program koji čita USD ili glTF otvara datoteku iz **Datoteka za bilo koji program** iznad.

:::note
Twinmotion, Enscape i drugi programi za vizualizaciju nisu na popisu: CadCraft s njima nije provjeren i ne tvrdi ništa o njima. Ulaz je datoteka glTF ili USD odavde.
:::
