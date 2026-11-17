---
title: Guardar, abrir y exportar USD
summary: Opa modelo USD-pe (.usda, .usdc térã .usdz) guardá mba'e ndojepoíva, jey ojeporu, ambue 3D programa-gui USD escena importá.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, guardar como, exportar, importar, ensamblado de escena, archviz, openpbr, materialx, paquete
from: 73d299f9
---

USD ha'e escena formato heta 3D, render ha archviz programa oiporúva. ModelCraft oguarda ha oñeʼẽ. `.modelcraft` ha'e {{ui:Guardar}} oguardava formato; USD ha'e {{ui:Guardar como}}-pe ojeporavo.

## USD-pe guardar

1. {{ui:Guardar como}} ojeheja {{ui:Archivo}} grupo-pe (térã {{key:Mod+Shift+S}}).
2. Formato ojeporavo: {{ui:Texto (.usda)}} (ehai porã, versión control-pe porã), {{ui:Binario (.usdc)}} (iti ha rápido) térã {{ui:Paquete (.usdz)}} (peteĩ archivo textura ndive).
3. Archivo descarga (escritorio aplicación-pe eligí dónde).

Ikatu {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}} avei.

## Ojejapo'ỹ

ModelCraft guardá USD ojeporu jave, modelo ojeikuaa ojekuaa: caras hyapu ndive, bordes blando ha oculto, curvas, grupos ha componentes, etiquetas, escenas, cotas, guías, sección planos, lámparas, importá textura ha vista. Ambue programa-pe modelo malla, grupo, componente prototipo, material, lámpara ha cámara ojehecha.

:::note
Ambue programa-pe grupo térã componente geometría ojekambia jave, ModelCraft ojeporu parte malla rupi cambio ndive, ha heta parte ojeporu ohechauka. Ambue programa-pe ojeheja térã borrado colocación ojeguerekóva.
:::

## Ambue USD ojeporu térã importá

- {{ui:Abrir}} `.usd`, `.usda`, `.usdc` térã `.usdz` archivo modelo ojepyrũ hag̃ua.
- {{ui:Importar}} ojeporu modelo abierto-pe ojapo hag̃ua. Archivo referencia-kuéra (capa, textura) ndive emoĩ.

Malla ojeguerekóva normal, UV coordenadas ha colores ndive ojeporu; componentes compartidos ojapo; materiales pintura colores haguéicha; lámparas lámpara haguéicha; cámaras escena haguéicha, metros-pe, Z arriba archivo unidad ha eje ndaipórirõ.

## Ndaipóri jey

Animación, esqueleto ha MaterialX nodo gráfico ndojeporu, ndojapo USD-pe jey. ModelCraft animación ha nodo material ojeguardava USD archivo ojapo ModelCraft-pe jey ojeporu hag̃ua, ambue programa ndohecha. ModelCraft ndoikuaái archivo referencia capa (peteĩ MaterialX documento, ehemplo) ndojeporuhaicha, ojepe'a nota ndive.
