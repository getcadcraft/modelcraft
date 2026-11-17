---
title: Deschiderea scenei într-un alt program
summary: Salvați scena ca fișier USD sau glTF pentru orice program care le citește sau o deschideți din Studio într-un program de pe acest computer.
keywords: deschide în, usd, gltf, glb, export, program de randare, archviz, studio, usdview, trimitere, transfer, pachet, dosar unreal
from: 812329d5
---

Alegeți o intrare **Deschide în** din lista Motor a {{ui:Randare imagine…}} ca să duceți scena la alt program. Nimic nu se întoarce în model.

## Un fișier pentru orice program

- **Fișier USD** salvează scena ca `.usdc` (sau `.usdz`, când modelul are imagini): [același fișier ca Salvare ca USD](topic:usd), cu materiale, lămpi și camere. Păstrează instanțierea și valorile exacte ale materialelor. Majoritatea programelor de randare, motoarelor de jocuri și vizualizatoarelor citesc USD.
- **Fișier glTF (.glb)** salvează fișierul glTF 2.0, mai ușor, cu materiale, texturi și lămpi; vedeți [Exportul unui model pentru alte programe](topic:export-model) pentru formatele pe care le scrie ModelCraft.
- **Dosar de proiect Unreal (.zip)** salvează dosarul pe care îl scrie [Trimiterea scenei către un motor de joc](topic:render-unreal), pentru un proiect de pe orice computer.

Toate trei funcționează în browser și în Studio.

## În Studio: deschideți-o într-un program

Studio listează programele pe care le găsește pe acest computer și care pot deschide scena: usdview, dacă este în calea de căutare, și programul propriu al computerului pentru tipul fișierului. Alegeți unul, alegeți USD sau glTF acolo unde citește ambele, și faceți clic pe {{ui:Randare}}. Studio scrie pachetul într-un dosar nou din Documente (`CadCraft hand-off`; nimic nu se suprascrie, fiecare trimitere are dosarul ei) și pornește programul pe el, apoi spune unde sunt fișierele.

| Program | Citește cel mai bine |
|---|---|
| usdview | USD |
| Programul propriu al computerului | Ce are computerul pentru tipul fișierului |

Studio pornește doar programe din această listă fixă; nu rulează nimic ce cere pagina pe nume și nu pornește niciodată un program sub licența GNU GPL (vedeți [Desenarea imaginii cu un alt program](topic:render-other-program#programs-cadcraft-never-runs)). Orice program care citește USD sau glTF deschide fișierul din **Un fișier pentru orice program** de mai sus.

:::note
Twinmotion, Enscape și alte programe de vizualizare nu sunt în listă: CadCraft nu a fost verificat cu ele și nu face nicio afirmație despre ele. Un fișier glTF sau USD de aici este calea de acces.
:::
