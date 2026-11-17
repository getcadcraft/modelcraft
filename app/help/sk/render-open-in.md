---
title: Otvorenie scény v inom programe
summary: Uložte scénu ako súbor USD alebo glTF pre ľubovoľný program, ktorý ich číta, alebo ju otvorte zo Studio v programe na tomto počítači.
keywords: otvoriť v, usd, gltf, glb, export, program na vykresľovanie, archviz, studio, usdview, odoslať, odovzdanie, balík, zložka unreal
from: 812329d5
---

Vyberte položku **Otvoriť v** v zozname Engine v {{ui:Vykresliť obrázok…}}, ak chcete scénu preniesť do iného programu. Do modelu sa nič nevráti.

## Súbor pre ľubovoľný program

- **Súbor USD** uloží scénu ako `.usdc` (alebo `.usdz`, keď model obsahuje obrázky): [rovnaký súbor ako Uložiť ako USD](topic:usd), s materiálmi, svetlami a kamerami. Zachováva inštancovanie a presné hodnoty materiálov. Väčšina rendererov, herných enginov a prehliadačov číta USD.
- **Súbor glTF (.glb)** uloží ľahší súbor glTF 2.0 s materiálmi, textúrami a svetlami; pozrite [Export modelu pre iné programy](topic:export-model) kvôli formátom, ktoré ModelCraft zapisuje.
- **Zložka projektu Unreal (.zip)** uloží zložku, ktorú zapíše [Odoslanie scény do herného enginu](topic:render-unreal), pre projekt na ľubovoľnom počítači.

Všetky tri fungujú v prehliadači aj v Studio.

## V Studio: otvorenie v programe

Studio vypíše programy, ktoré na tomto počítači nájde a ktoré dokážu scénu otvoriť: usdview, ak je v vašej vyhľadávacej ceste, a vlastný program počítača pre tento typ súboru. Vyberte jeden, pri ktorom číta oba formáty vyberte USD alebo glTF, a kliknite na {{ui:Vykresliť}}. Studio zapíše balík do novej zložky v Dokumentoch (`CadCraft hand-off`; nič sa neprepíše, každé odoslanie má vlastnú zložku), spustí na ňom program a potom povie, kde sú súbory.

| Program | Číta najlepšie |
|---|---|
| usdview | USD |
| Vlastný program počítača | Čokoľvek, čo má počítač pre daný typ súboru |

Studio spúšťa len programy z tohto pevného zoznamu; nespustí nič, o čo stránka požiada podľa názvu, a nikdy nespustí program pod licenciou GNU GPL (pozrite [Nakreslenie obrázka iným programom](topic:render-other-program#programs-cadcraft-never-runs)). Každý program, ktorý číta USD alebo glTF, otvorí súbor z **Súbor pre ľubovoľný program** vyššie.

:::note
Twinmotion, Enscape a ďalšie vizualizačné programy nie sú v zozname: CadCraft s nimi nebol overený a neuvádza o nich žiadne tvrdenia. Vstupnou cestou je súbor glTF alebo USD odtiaľto.
:::
