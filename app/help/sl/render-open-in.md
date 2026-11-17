---
title: Odprite prizor v drugem programu
summary: Shranite prizor kot datoteko USD ali glTF za kateri koli program, ki ju bere, ali ga odprite iz Studia v programu na tem računalniku.
keywords: odpri v, usd, gltf, glb, izvoz, program za upodabljanje, archviz, studio, usdview, pošlji, predaja, paket, mapa Unreal
from: 812329d5
---

Izberite vnos **Odpri v** na seznamu Pogon v {{ui:Upodobi sliko…}}, da prizor odnesete v drug program. Nič se ne vrne v model.

## Datoteka za kateri koli program

- **Datoteka USD** shrani prizor kot `.usdc` (ali `.usdz`, kadar model vsebuje slike): [ista datoteka kot Shrani kot USD](topic:usd), z materiali, svetilkami in kamerami. Ohrani instanciranje in točne vrednosti materialov. Večina upodabljalnikov, pogonov za igre in pregledovalnikov bere USD.
- **Datoteka glTF (.glb)** shrani lažjo datoteko glTF 2.0 z materiali, teksturami in svetilkami; glejte [Izvozite model za druge programe](topic:export-model) za formate, ki jih zapiše ModelCraft.
- **Mapa projekta Unreal (.zip)** shrani mapo, ki jo zapiše [Pošljite prizor v pogon za igre](topic:render-unreal), za projekt na kateri koli računalnik.

Vse tri delujejo v brskalniku in v Studiu.

## V Studiu: odprite v programu

Studio našteje programe, ki jih najde na tem računalniku in ki lahko odprejo prizor: usdview, če je na vaši iskalni poti, in računalnikov lastni program za vrsto datoteke. Izberite enega, izberite USD ali glTF, kjer ga bere oba, in kliknite {{ui:Upodobi}}. Studio zapiše paket v novo mapo v Dokumentih (`CadCraft hand-off`; nič se ne prepiše, vsako pošiljanje dobi svojo mapo) ter zažene program nad njo, nato pove, kje so datoteke.

| Program | Najbolje bere |
|---|---|
| usdview | USD |
| Računalnikov lasten program | Kar ima računalnik za vrsto datoteke |

Studio zažene samo programe s tega fiksnega seznama; ne zažene ničesar, kar stran zahteva po imenu, in nikoli ne zažene programa pod licenco GNU GPL (glejte [Narišite sliko z drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Kateri koli program, ki bere USD ali glTF, odpre datoteko iz **Datoteka za kateri koli program** zgoraj.

:::note
Twinmotion, Enscape in drugi vizualizacijski programi niso na seznamu: CadCraft z njimi ni bil preverjen in o njih ne trdi ničesar. Datoteka glTF ali USD od tu je pot v njih.
:::
