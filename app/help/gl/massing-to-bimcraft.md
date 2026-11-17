---
title: Enviar a masa a BimCraft
summary: Envíe masas de empurrar e tirar a BimCraft como opcións de masa, con plantas, pegada, superficie bruta de planta e volume calculados a partir de cada sólido.
keywords: masa, masas, concepto, opcións, bimcraft, ifc, bim, empurrar e tirar, plantas, pisos, superficie bruta, pegada, volume, enviar, entregar, masa do edificio, etapa 2
from: 73c51f3f
---

## Que vai facer

Converta os bloques que modelou con empurrar e tirar en opcións de masa que BimCraft entende, para que o concepto siga como modelo de edificio.

## Antes de comezar

Faga de cada masa un **grupo** ou **compoñente** e póñalle nome. Cada un convértese nunha opción. A xeometría solta non se envía.

## Enviala

1. Seleccione os grupos a enviar. Sen nada seleccionado, envíanse todos os grupos e compoñentes de primeiro nivel.
2. Escolla {{ui:Exportar}}, e logo {{ui:Masa para BimCraft…}}.
3. Escriba o {{ui:Nome do conxunto de opcións}} e a {{ui:Altura do piso}}.
4. Revise a lista: as plantas, a pegada, a superficie bruta de planta e o volume de cada opción.
5. Escolla **Enviar a BimCraft** para abrir BimCraft nunha lapela nova coas opcións, ou {{ui:Gardar como IFC}} para descargar o ficheiro e abrilo alí vostede mesmo.

En BimCraft as opcións aparecen listadas en "Opcións de masa no modelo", onde unha pode facerse a opción actual e desenvolverse en muros e chans.

## Como un sólido se converte en masa

- **As plantas** son a altura do sólido dividida pola altura do piso, redondeada, e polo menos unha. As plantas reparten logo a altura do sólido por igual: un bloque de 10 m con plantas de 3 m ten 3 plantas de 3,33 m.
- **A superficie dunha planta** é a superficie da sección horizontal propia do sólido ao nivel desa planta. Un bloque que retrocede ten plantas superiores máis pequenas, e a superficie bruta de planta é a súa suma.
- **A pegada** é o contorno da sección xusto enriba da base do sólido.
- **O volume** é o propio do sólido.

No ficheiro IFC cada opción é un proxy de elemento de edificio (a pegada elevada á altura do sólido), con un espazo por planta que leva a superficie bruta desa planta. Todas as opcións comparten un edificio, con tantos pisos como a opción máis alta.

## Formas simplificadas

Un bloque vertical simple pasa tal como se modelou. Calquera outra forma tamén se envía, e a lista indica por que a súa forma se simplifica:

- **As súas plantas non teñen todas o tamaño da base** (retrocede ou se inclina): a masa en BimCraft é o contorno da base elevado á altura total, pero as superficies das plantas e o volume son os propios do sólido.
- **O sólido non está pechado**: as plantas cuxa sección non se pode pechar non se miden e contan como nada. Peche o sólido ({{ui:Información da entidade}} indica "Sólido: Sí") para obter cifras completas.
- **A súa base ten máis dun contorno**: úsase o maior como pegada.

## Bo saber

- {{ui:IFC para BimCraft (.ifc)}} é outra exportación: envía só formas e nomes, sen plantas nin superficies.
- Non se envía nada á internet. O ficheiro entrégase á lapela de BimCraft deste ordenador.
