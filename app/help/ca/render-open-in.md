---
title: Obre l'escena en un altre programa
summary: Desa l'escena com a fitxer USD o glTF per a qualsevol programa que els llegeixi, o obre-la des de Studio en un programa d'aquest ordinador.
keywords: obre a, usd, gltf, glb, exporta, programa de renderitzat, archviz, studio, usdview, envia, transferència, paquet, carpeta unreal
from: 812329d5
---

Trieu una entrada **Obre a** a la llista Motor de {{ui:Renderitza una imatge…}} per portar l'escena a un altre programa. Res no torna al model.

## Un fitxer per a qualsevol programa

- **Fitxer USD** desa l'escena com a `.usdc` (o `.usdz` quan el model porta imatges): el [mateix fitxer que Anomena i desa com a USD](topic:usd), amb materials, llums i càmeres. Manté les instàncies i els valors exactes dels materials. La majoria de renderitzadors, motors de joc i visualitzadors llegeixen USD.
- **Fitxer glTF (.glb)** desa el fitxer glTF 2.0, més lleuger, amb materials, textures i llums; vegeu [Exporta un model per a altres programes](topic:export-model) per als formats que escriu ModelCraft.

- **Carpeta de projecte Unreal (.zip)** desa la carpeta que escriu [Envia l'escena a un motor de joc](topic:render-unreal), per a un projecte en qualsevol ordinador.

Els tres funcionen al navegador i a Studio.

## A Studio: obre-la en un programa

Studio llista els programes que troba en aquest ordinador que poden obrir l'escena: usdview si és al vostre camí de cerca, i el programa propi de l'ordinador per al tipus de fitxer. Trieu-ne un, trieu USD o glTF quan en llegeix els dos, i feu clic a {{ui:Renderitza}}. Studio escriu el paquet en una carpeta nova dins de Documents (`CadCraft hand-off`; no se sobreescriu res, cada enviament té la seva pròpia carpeta), engega el programa sobre aquesta carpeta i després indica on són els fitxers.

| Programa | Llegeix millor |
|---|---|
| usdview | USD |
| El programa propi de l'ordinador | Allò que l'ordinador tingui per al tipus de fitxer |

Studio només inicia programes d'aquesta llista fixa; no executa res que la pàgina demani pel nom, i mai no inicia un programa amb llicència GNU GPL (vegeu [Dibuixa la imatge amb un altre programa](topic:render-other-program#programs-cadcraft-never-runs)). Qualsevol programa que llegeixi USD o glTF obre el fitxer de **Un fitxer per a qualsevol programa** de dalt.

:::note
Twinmotion, Enscape i altres programes de visualització no són a la llista: CadCraft no les ha comprovat i no fa cap afirmació sobre elles. Un fitxer glTF o USD des d'aquí és la via d'entrada.
:::
