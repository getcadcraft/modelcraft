---
title: Mantener un modelo .3dm en vivo
summary: Ojecambia peteĩ modelo mba'e programa-pe ojapóvape ha ohecha upe ojecambia aquí, Rhino 8 térã Grasshopper definición-gui, archivo ojeporu ndoikói ha ojeminyiʼa jey.
keywords: rhino, grasshopper, enlace en vivo, conexión en vivo, 3dm, nurbs, paramétrico, enlace, sincronizar, script, modelo de referencia, empujar
from: 331b0a7e
---

Ejapo ha ejapóvape, ha upe resultado ko'ápe ojeporu: render hag̃ua, iluminar hag̃ua, térã escena peteĩ ojapo hag̃ua upe rehe. Mba'e ojecambiáva programa ambue-pe ojehechauka peteĩ grupo ModelCraft-pe.

:::note
Enlace ohaʼaseha **CadCraft Studio** ko computadora-pe. Peteĩ pestaña navegador ndaikatúi ohupyty conexión. Mba'e ndoguerúi internet-pe: script oñe'ẽ Studio-ndive ko computadora ijeheʼa address-pe, peteĩ token ndive.
:::

:::warning
Enlace ko oñemoiporã script archivo escritor ha peteĩ mba'e reemplazo programa ambue-pe rehe, ndaha'éi aún Rhino térã Grasshopper-pe. Mba'e oñemboykéva upépe, emoñe'ẽ mba'épa ojehai.
:::

## Emoĩ

1. Studio-pe, ejepe'a ModelCraft. {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}-pe, ejepe'a **Let AI assistants and scripts use ModelCraft**, upéi **Edit**.
2. Studio-pe, ejepe'a {{ui:Connect an assistant}}. Ohechauka address ha token ejeipe'a hag̃ua ko'ápe.
3. Ejapukuaa script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino-gui

1. Emoaʼẽ `cadcraft_link.py` Rhino script editor-pe (Python 3 Rhino 8-pe).
2. Peteĩha jey, emoĩ address ha token. Ojeñongatu `.cadcraft-link.json` archivo-pe ne tapyʼa pe, modelo-pe ndojeñongatúi. Studio ojapo peteĩ token pyahu cada ojepuruʼa jey, upévare script ojerelee jey upépe.

Modelo entero ojeguerahaʼa peteĩ grupo-pe, ojeréva upe documento réra-gui, peteĩ "chair (linked)" ichupe. Upe rire, cada ojecambia ojeguerahaʼa peteĩ pyʼaguapy rire, ha ojeguerahaʼa avei mba'e ojecambiáva. Script jey ojepuruʼa ojepysäsa hag̃ua.

## Grasshopper-gui

Emoaʼẽ peteĩha script Rhino-pe, upéi address ha token ojeñongatu hag̃ua.

1. Emoĩ peteĩ Script componente (Python 3) ha emoʼõ `cadcraft_link.py` tuichaiterei-pe.
2. Emoĩ ko entrada-kuéra: `G` (geometría, lista acceso ndive), `N` (peteĩ nombre, opcional), `On` (peteĩ boolean toggle) ha `Target` (opcional: `model` térã `part`, mokõi aplicación ojeguerypy jave).
3. Emoĩ `On` true-pe.

Cada solve oñemoĩ `G`-pe ha ojejoka ohasa mbovy jey omboʼeva rehe, upévare peteĩ control deslizante ojecambia grupo aquí. Salida `a` ohechauka mba'épa ojehai. Cada componente oguereko peteĩ grupo hopeʼỹ.

## Mba'épa ikatu ejapo grupo ndive

- **Emoñeñandu, emoĩ marca, ejapo ambue ipype.** Grupo ojehaʼa ha ipu'aka ohoʼo ojecambia jey guare, ha opa mba'e chugui oiko upéicha avei.
- **Ndeporomoambue grupo ryepýpe.** Cada ojecambia omboguejy grupo-pe oĩva. Upe mba'ekuéra oñeko programa ambue-pe.
- **Pasómbe.** Ojecambia mokõi segundo peteĩha ambuegui ojeporu peteĩ pasómbe. Upévare {{key:Mod+Z}} omboguejy peteĩ arrastre tuichaiterei. Ojecambia upe rire modelo oservi jeýtava.
- **Ñongatu.** Archivo ojeñongatu enlace. Ejuhu jey guare script ojerelee, ha upe grupo mismo ojecambia.

## Mba'e ojeguerahaʼa

Malla-kuéra, polisuperficie-kuéra, superficie-kuéra ha extrusión-kuéra pantalla-pe ohechaukáva malla-kuéra-pe; SubD malla-pe; curva-kuéra borde-pe; bloque-kuéra objeto apartádo-pe ojehaʼa umi tuichaveve iñapychy; capa-kuéra etiqueta-pe; color ha unidad-kuéra avei. Ohechakuaa [Emoĩ peteĩ .3dm modelo](topic:import-3dm-files) upépe oñehechauka ko'ápe.

Ndojeguerahaʼái, ha ambue programa-pe conteo ohechauka: punto-kuéra, texto, cota-kuéra, luz-kuéra ha upe ambue.

**Peteĩ tape añoite.** Ko'ápe ojecambia ndaikatúi oguerta ambue programa-pe.

## Mba'e ojehai ramo

- **"No ModelCraft or PartCraft window allows it":** emoĩ setup-pe peteĩ mbohapy.
- **"Studio refused the token":** Studio oñepyrũ jey. Emoʼã token pyahu ha eñeporandu script jey. Grasshopper-pe, emoĩ Rhino-pe mboyve.
- **"Cannot reach CadCraft Studio":** Studio ndoguejýi, térã address ojecambia.
