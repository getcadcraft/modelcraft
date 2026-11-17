---
title: Åpne scenen i et annet program
summary: Lagre scenen som en USD-fil eller en glTF-fil for ethvert program som leser dem, eller åpne den fra Studio i et program på denne datamaskinen.
keywords: åpne i, usd, gltf, glb, eksporter, renderingsprogram, archviz, studio, usdview, send, overlevering, pakke, unreal-mappe
from: 812329d5
---

Velg et punkt **Åpne i** i motorlisten til {{ui:Render et bilde…}} for å ta scenen med til et annet program. Ingenting kommer tilbake til modellen.

## En fil for ethvert program

- **USD-fil** lagrer scenen som `.usdc` (eller `.usdz` når modellen har bilder): [samme fil som Lagre som USD](topic:usd), med materialer, lamper og kameraer. Den beholder instansiering og de eksakte materialverdiene. De fleste renderere, spillmotorer og visningsprogrammer leser USD.
- **glTF-fil (.glb)** lagrer den lettere glTF 2.0-filen med materialer, teksturer og lamper; se [Eksporter en modell til andre programmer](topic:export-model) for formatene ModelCraft skriver.

- **Unreal-prosjektmappe (.zip)** lagrer mappen som [Send scenen til en spillmotor](topic:render-unreal) skriver, for et prosjekt på en hvilken som helst datamaskin.

Alle tre virker i nettleseren og i Studio.

## I Studio: åpne den i et program

Studio lister programmene den finner på denne datamaskinen som kan åpne scenen: usdview hvis det er på søkebanen din, og datamaskinens eget program for filtypen. Velg ett, velg USD eller glTF der det leser begge, og klikk {{ui:Render}}. Studio skriver pakken i en ny mappe under **Dokumenter** (`CadCraft hand-off`; ingenting overskrives, hver sending får sin egen mappe) og starter programmet på den, og sier så hvor filene er.

| Program | Leser best |
|---|---|
| usdview | USD |
| Datamaskinens eget program | Det datamaskinen har for filtypen |

Studio starter bare programmer fra denne faste listen; den kjører ikke noe siden ber om med navn, og den starter aldri et program under GNU GPL-lisensen (se [Tegn bildet med et annet program](topic:render-other-program#programs-cadcraft-never-runs)). Ethvert program som leser USD eller glTF åpner filen fra **En fil for ethvert program** over.

:::note
Twinmotion, Enscape og andre visualiseringsprogrammer er ikke i listen: CadCraft er ikke testet med dem og gir ingen påstander om dem. En glTF- eller USD-fil herfra er veien inn.
:::
