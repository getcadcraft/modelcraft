---
title: Gardar, abrir e exportar USD
summary: Gardar o modelo completo como USD (.usda, .usdc ou .usdz) sen perder nada, volvelo abrir e importar escenas USD doutros programas 3D.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, gardar como, exportar, importar, montaxe de escenas, archviz, openpbr, materialx, paquete
from: 73d299f9
---

USD é un formato de escenas que comparten moitos programas de 3D, renderizado e archviz. ModelCraft escribe e le USD. `.modelcraft` segue sendo o formato que escribe {{ui:Save}}; USD é unha opción en {{ui:Save as}}.

## Gardar como USD

1. Escolla {{ui:Save as}} no grupo {{ui:File}} (ou prema {{key:Mod+Shift+S}}).
2. Escolla o formato: {{ui:Text (.usda)}} (lexible, bo para o control de versións), {{ui:Binary (.usdc)}} (o máis pequeno e o máis rápido) ou {{ui:Package (.usdz)}} (un só ficheiro coas texturas dentro).
3. O ficheiro descárgase (na aplicación de escritorio escolle onde se garda).

As mesmas opcións están en {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Non se perde nada

Abra un ficheiro USD que ModelCraft gardou e recupera o modelo exactamente: caras cos seus buratos, bordos suaves e ocultos, curvas, grupos e compoñentes, etiquetas, escenas, cotas, guías, planos de corte, lámpadas, texturas importadas e a vista. Outros programas ven o mesmo modelo como mallas, grupos, prototipos para os compoñentes, materiais, lámpadas e cámaras.

:::note
Se outro programa cambia a xeometría dun grupo ou compoñente, ModelCraft abre esa parte como malla co cambio conservado, e indica cantas partes leu así. Unha colocación movida ou eliminada noutro programa queda movida ou eliminada.
:::

## Abrir ou importar un USD doutra persoa

- {{ui:Open}} un ficheiro `.usd`, `.usda`, `.usdc` ou `.usdz` para empezar un modelo a partir del.
- {{ui:Import}} un para engadilo ao modelo aberto. Solte os ficheiros aos que fai referencia (outras capas, texturas) xunto con el.

As mallas entran coas súas normais, coordenadas UV e cores; a xeometría compartida, como compoñentes; os materiais, como cores de pintura; as lámpadas, como lámpadas; e as cámaras, como escenas. Todo en metros e con Z cara arriba, sexan cales sexan as unidades e o eixe vertical do ficheiro.

## Aínda non

A animación, os esqueletos e os grafos de nodos de MaterialX aínda non se leen nin se escriben como USD. As animacións e os materiais de nodos propios de ModelCraft consérvanse nun ficheiro USD que gardou, para que ModelCraft o volva abrir, pero os outros programas non os ven. As capas ás que un ficheiro fai referencia e que ModelCraft non pode ler (por exemplo, un documento MaterialX) déixanse fóra, con unha nota.
