---
title: Dividir un modelo grande para imprimir
summary: Cortar un modelo demasiado grande para a súa impresora en pezas que caben na plataforma, con pivotes, chavetas, colas de milano, buratos para cavillas ou imáns e o número da unión en ambas as caras, e descargar todas as pezas e unha folla de montaxe nun só zip.
keywords: impresión 3D, dividir, inclinado, corte inclinado, corte en ángulo, oblicuo, divisor, cortar, demasiado grande, tamaño da plataforma, volume de impresión, pezas, conectores, pivotes, chavetas, cola de milano, cavilla, imán, folga, tolerancia, números de pezas, montaxe, vista explosionada, zip, stl, 3mf, licenza, chave USB, dongle
from: ee96ba77
---

Cando un modelo é máis grande que a plataforma da súa impresora, **Dividir para imprimir** córtao en pezas que caben, engade conectores para que as pezas se alineen ao unilas, e grava o mesmo número en ambas as caras de cada unión. Abra {{ui:Exportar}} › {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}; a liña **Ferramentas de impresión** do diálogo ten {{ui:Dividir para imprimir}}. Ábrese como unha tarxeta sobre a vista.

Traballa sobre o que se imprime: a selección, ou todo o visible cando non hai nada seleccionado. O que se imprime ten que ser un sólido pechado; se a comprobación atopa buratos, use primeiro [Reparar](topic:print-tools#repair).

Funciona en ModelCraft, no seu ordenador: sen servidor de licenzas, sen chave USB, sen subir nada.

## Como cortar

- **Ancho da plataforma, menos pezas**: indique o ancho, o fondo e a altura da plataforma (parten de {{ui:Configuración}} › ModelCraft › Impresora 3D). A tarxeta indica cantas pezas hacen falta e o tamaño de cada unha; corta o modelo en pezas iguais, as menos que caben. Unha peza pode quedar deitada de lado nos ficheiros se iso a fai caber. Os conectores que sobresaen dunha peza contan para o seu tamaño.
- **Nos lugares que indico**: escolla o eixe no que cortar e escriba onde, en milímetros desde o extremo baixo do modelo, separados por comas (`100, 200` fai tres pezas).
  **Inclinado** xira os cortes ata 60° arredor dun dos outros dous eixes (por exemplo, un corte en Z inclinado arredor de X): cada corte inclinado pasa pola liña media do modelo no seu lugar, dá ás pezas máis superficie de unión e oculta mellor a unión nunha superficie inclinada. Os conectores quedan perpendiculares ao corte.

Os planos de corte debúxanse ao redor do modelo como liñas tracejadas mentres a tarxeta está aberta.

## Conectores

Cada lugar onde dúas pezas se tocan recibe conectores, colocados por si mesmos onde hai máis espazo: polo menos o **grosor mínimo do muro** máis a **folga** máis o seu propio tamaño lonxe do exterior, e o bastante lonxe de cada outro corte para que dous buratos nunca se atopen. Nunha cara longa colócanse dous conectores repartidos ao longo dela, para que as pezas non poidan xirar.

- **Pivotes redondos**: un pivote nunha peza (con chafrán na punta), un burato na outra.
- **Chavetas cadradas**: o mesmo, cadrado, para que unha peza só poida encaixar dun xeito.
- **Colas de milano**: unha lingüeta que desliza nunha ranura desde o lateral. Onde un extremo da ranura se atoparía con outro corte, a cola de milano para antes e desliza desde o extremo aberto. As colas de milano adoitan encaixar en cortes nunha soa dirección (unha fila de rodajas); nunha cuadrícula, use pivotes ou cavillas.
- **Buratos para cavillas**: un burato en cada lado; os pasadores tamén se imprimen (no zip).
- **Aloxamentos para imáns**: un aloxamento en cada lado para un imán redondo do diámetro e grosor que indique. Comprobe os polos antes de pegalos.
- **Ningún (cola)**.

A **folga** é o xogo en cada lado entre un pivote e o seu burato (0,2 mm para comezar). Respecta o número que indique: os buratos redondos fanse un pouco máis grandes para que as súas caras planas, e non as súas esquinas, conserven esa folga. Auméntea se as pezas da súa impresora saen axustadas.

Cando unha unión non ten espazo para un conector (unha parede fina, unha área de contacto pequena), a tarxeta dío: pegue esa unión.

## Números de pezas

Con **Gravar os números das uniones en ambas as caras** activado, cada unión recibe o número das súas dúas pezas, como `3-4`, gravado 0,6 mm de profundidade en ambas as caras, lido no sentido correcto en cada unha. Os números comezan con 5 mm de altura e vanse facendo máis pequenos para caber, ata 2,5 mm; unha unión sen espazo para o seu número aparece listada. As pezas numéranse desde a capa inferior cara arriba.

## Vista previa, descarga, dividir o modelo

1. {{ui:Vista previa}} corta o modelo e indica cantas pezas, uniones e conectores hai, se cada peza supera a comprobación de impresión 3D e cabe na plataforma, e lista o tamaño de cada peza. Un anel marca cada conector e número na vista.
2. {{ui:Descargar as pezas (.zip)}} garda un único zip: un ficheiro por peza (STL ou 3MF, segundo escolla en **Ficheiros**), cada unha de pé sobre a plataforma; os pasadores das cavillas; e a **folla de montaxe**: unha imaxe das pezas separadas cos seus números (`assembly.svg` e `assembly.png`) e unha lista das pezas e uniones (`assembly.txt`).
3. {{ui:Dividir o modelo}} coloca as pezas no modelo no lugar dos grupos ou compoñentes seleccionados, co nome que teñen na folla de montaxe, nun só paso: {{ui:Desfacer}} restaura o orixinal. Precisa que os grupos ou compoñentes a dividir estean seleccionados; a descarga funciona con calquera cousa que se imprima.

## Mova vostede os conectores

Despois dunha vista previa, **Conectores a man** permítelle corrixir onde van os conectores:

- {{ui:Mover un}}: faga clic nun anel vermello na vista (volve verde) e logo faga clic onde debe ir, no corte.
- {{ui:Engadir un}}: faga clic na vista onde debe ir un conector. Vai no plano de corte que alcanza o seu clic, entre as dúas pezas alí.
- {{ui:Quitar un}}: faga clic nun anel vermello para retirar ese conector.

Cada cambio compróbase de novo como os automáticos: un punto demasiado preto do contorno, outro corte ou outro conector non se fai, e a tarxeta dío. {{ui:Automático de novo}} olvida os seus lugares. Gárdanse mentres o modelo, a selección e os cortes sigan igual.

Unha vista previa mantense ata que cambie o modelo, a selección ou un axuste; entón a tarxeta pídelle que volva facer a vista previa.

:::note
Cada peza compróbase como a comprobación de impresión 3D a comprobaría antes da descarga. O seu fatiador segue decidindo como se imprime cada peza: mírea alí, e imprima primeiro unha unión para ver como a súa impresora trata a folga.
:::
