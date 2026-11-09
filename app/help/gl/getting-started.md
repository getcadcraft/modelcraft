---
title: Primeiros pasos con ModelCraft
summary: Para que serve ModelCraft, como abrilo, e a súa primeira caixa, desde un rectángulo ata un modelo gardado.
keywords: comezar, primeiro modelo, empezar, tutorial, introdución, caixa, volumetría, 3d, empurrar tirar, inicio rápido, guiado, guía, principiante, novo en 3D
from: d47ad719
---

ModelCraft é un modelador 3D para o deseño inicial: estudos de volumetría, distribucións de habitacións, formas construtivas rápidas e as sombras que proxectan. Debuxa formas planas, érgueas ata convertelas en sólidos, e segue traballando sobre elas debuxando nas súas caras. Funciona no seu navegador web, e os seus modelos quedan no seu ordenador.

Se xa usou SketchUp, a maior parte do que sabe serve: as mesmas letras das ferramentas, empurrar/tirar, unha caixa de valor para tamaños exactos, grupos e compoñentes. [Vir doutros modeladores](topic:coming-from) indica o que é diferente.

## Abrir ModelCraft

1. Abra ModelCraft nunha versión actual de Chrome, Edge, Firefox ou Safari. Consulte [Navegadores e ordenadores](common:browsers).
2. Agarde a que apareza a vista 3D: unha área clara (ou escura) no centro cunha tarxeta titulada «Comece a modelar».

A pantalla ten unha barra de ferramentas arriba, {{ui:Esquema}} e {{ui:Compoñentes}} á esquerda, a vista 3D no centro, {{ui:Información da entidade}}, {{ui:Estilo}} e {{ui:Escenas}} á dereita, e unha barra de estado abaixo coa caixa de valor e as unidades. [A pantalla de ModelCraft](topic:workspace) explica cada parte.

:::note
ModelCraft precisa de WebGL, a función de debuxo 3D do seu navegador. Se o centro da pantalla queda baleiro e as ferramentas non fan nada, consulte [Solución de problemas](topic:troubleshooting#the-3d-view-is-blank).
:::

## Comprobe primeiro as unidades

Mire a esquina inferior dereita. O selector de unidades indica en que unidades se miden as lonxitudes.

- Un modelo novo comeza en **pés e polgadas** cando o navegador está configurado para Estados Unidos (tamén Liberia e Myanmar), e en **milímetros** no resto dos países.
- Para cambialas, escolla outra unidade no selector: {{ui:pés e polgadas}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ou {{ui:mm}}. O modelo en si non cambia de tamaño; só cambia como se amosan as lonxitudes e como se len os números sen unidade.

Un número que escribe sen unidade usa a unidade do modelo. Nun modelo en pés e polgadas un número sen unidade son **polgadas**, así que `120` significa 10 pés.

## Deixe que ModelCraft guíe o seu primeiro modelo

Novo en 3D? Na tarxeta {{ui:Comece a modelar}}, prema {{ui:Primeiro modelo guiado}} (tamén está en {{ui:Vistas}}). Unha tarxeta pequena guíao en catro pasos, desde un rectángulo plano ata un modelo listo para unha impresora 3D:

1. Debuxe un rectángulo sobre o chan.
2. Érgao ata converterlo nunha caixa.
3. Faga da caixa un único obxecto (un grupo).
4. Comprobe a impresión 3D e despois descargue un ficheiro 3MF ou STL.

A tarxeta observa o modelo, non os botóns: avanza cando o paso está feito, sexa como sexa que o fixo, e retrocede un paso cando desfai. {{ui:Escolla a ferramenta}} escolle a ferramenta por vostede. Péchea en calquera momento co {{ui:×}}.

## Debuxe a súa primeira caixa

1. Prema {{key:R}} para a ferramenta {{ui:Rectángulo}}, ou prema {{ui:Rectángulo}} no grupo {{ui:Debuxo}} da barra de ferramentas.
2. Prema unha vez sobre o chan preto do centro da vista. Esa é a primeira esquina.
3. Afaste o punteiro. Un rectángulo segueo, e a caixa de valor da parte inferior (etiquetada como {{ui:Cotas}}) amosa o seu tamaño.
4. Escriba o tamaño e prema {{key:Enter}}: por exemplo `4m,3m`, ou `16',12'` en pés e polgadas. Non precisa premer antes na caixa de valor; ao escribir un número énviase alí.

   Obtén un rectángulo plano sobre o chan. É unha **cara**: unha superficie con bordos ao seu redor.

5. Prema {{key:P}} para {{ui:Empurrar/tirar}}.
6. Prema o rectángulo, mova o punteiro cara arriba, e prema de novo. Ou prema o rectángulo e escriba unha altura, como `3m` ou `10'`, e logo prema {{key:Enter}}.

   O rectángulo convértese nunha caixa cunha parte superior, unha inferior e catro lados.

7. Prema {{key:Space}} para volver a {{ui:Seleccionar}}, e logo prema a parte superior da caixa. {{ui:Información da entidade}} da dereita amosa a súa superficie.

:::tip
Tamén pode arrastrar en vez de premer dúas veces: prema na primeira esquina, arrastre e solte na segunda. Os dous xeitos funcionan con todas as ferramentas de debuxo.
:::

## Mirar ao redor

- **Orbitar:** arrastre co botón central do rato (a roda), ou prema {{key:O}} e arrastre co botón esquerdo.
- **Desprazar:** arrastre co botón dereito, ou co botón central mantendo {{key:Shift}}.
- **Zoom:** xire a roda. Fai zoom cara ao que hai baixo o punteiro.
- **Ver todo:** prema {{key:Shift+Z}}, ou prema {{ui:Extensións}}.

Nun trackpad ou nunha pantalla táctil os xestos son diferentes. Consulte [Orbitar, desprazar e facer zoom](topic:orbit-pan-zoom).

## Desfacer

Prema {{key:Mod+Z}} para desfacer e {{key:Mod+Y}} para refacer, ou use {{ui:Desfacer}} e {{ui:Refacer}} na barra de ferramentas. ModelCraft lembra os últimos 200 pasos mentres o modelo está aberto. O historial non se garda no ficheiro.

## Gardar o seu modelo

1. Prema {{ui:Gardar}} no grupo {{ui:Ficheiro}}, ou prema {{key:Mod+S}}.
2. O navegador descarga un ficheiro co nome do modelo, como `Untitled.modelcraft`. A barra de estado indica onde foi: «Gardado Untitled.modelcraft nas descargas.»

**Gardar é unha descarga.** Cada gardado crea unha copia nova no cartafol de descargas; non sobrescribe o ficheiro que abriu. Para manter ordenado o cartafol do proxecto, mova ou renomee alí o ficheiro vostede mesmo. [Abrir, gardar, importar e exportar](topic:files) explica o motivo e o que máis pode facer.

:::warning
ModelCraft non garda por si mesmo. Se pecha a lapela con cambios sen gardar, o navegador pregunta primeiro («¿Saír do sitio?»). Escolla quedar e logo garde.
:::

## Obter axuda

Prema {{key:F1}} ou prema {{ui:Axuda}} na barra de aplicación para abrir esta axuda xunto ao modelo. Funciona sen conexión. Prema {{key:F1}} de novo, ou {{key:Esc}} dentro da axuda, para pechala. Consulte [Usar esta axuda](common:help).

## Onde ir despois

- [Debuxar caras con liñas, rectángulos e círculos](topic:draw-faces)
- [Empurrar e tirar de caras para formar sólidos](topic:push-pull)
- [Escribir tamaños exactos na caixa de valor](topic:value-box)
- [Todas as teclas e accións do rato](topic:keyboard)
