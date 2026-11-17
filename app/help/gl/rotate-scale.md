---
title: Xirar e escalar
summary: Xira elementos arredor dun punto facendo clic ou escribindo graos, e redimensionaos de xeito uniforme por un factor.
keywords: asas de escalado, estirar, non uniforme, por eixe, inverter, espello, copia en espello, inverter ao longo de, xirar, ángulo, graos, transportador, escalar, redimensionar, ampliar, reducir, factor, escalado uniforme
from: 45cdcb49
---

## Xirar

{{ui:Xirar}} ({{key:Q}}) xira a selección arredor dun punto central. Require tres clics: o centro, unha dirección inicial e a dirección final.

1. Selecciona o que queres xirar. Se non hai nada seleccionado, Xirar toma o elemento no que fas clic primeiro.
2. Prime {{key:Q}}. Un anel segue o punteiro, mostrando o plano no que vas xirar.
3. Fai clic no centro de xiro.
   - No chan ou en espazo baleiro, o anel queda plano (azul): o xiro é arredor dun eixe vertical, como cando xiras un edificio na súa parcela.
   - Sobre unha cara, o anel queda no plano desa cara: o xiro é arredor da dirección propia da cara. Fai clic nun muro para xirar algo arredor dun eixe horizontal.
4. Fai clic nun punto que fixe onde comeza o ángulo, por exemplo ao longo dun bordo do elemento que xiras.
5. Move o punteiro arredor do centro. O ángulo móstrase na punta e no cadro de valor ({{ui:Ángulo}}). Encaixa en pasos de 15° cando te achegas a un deles.
6. Fai clic para terminar, ou escribe o ángulo en graos e prime {{key:Enter}}: `90`, `45`, `-30`.

   Os ángulos positivos xiran en sentido antihorario, vistos desde o lado ao que mira o anel.

Prime {{key:Ctrl}} (ou {{key:Alt}}) mentres xiras para xirar unha **copia** e deixar o orixinal onde está, igual que con Mover; a punta indica se a copia está activa, e premer de novo a tecla desactívaa. Escribe `3x` xusto despois dunha copia xirada para obter máis copias arredor do mesmo centro.

Como con Mover, xirar unha parte dunha xeometría conectada retorce as caras unidas a ela. Agrupa primeiro os elementos para xiralos enteiros.

:::note
A punta indica que as teclas de frecha escollen o eixe de xiro, pero nesta versión orbitan a vista no seu lugar antes do primeiro clic. Para escoller o eixe, fai clic no centro sobre unha cara que mire na dirección que queres. Consulta [Aínda sen construír](topic:not-built-yet).
:::

## Escalar

{{ui:Escalar}} ({{key:S}}) redimensiona a selección. Selecciona primeiro o que queres redimensionar e despois prime {{key:S}}: aparecen pequenos cadrados (asas) nas esquinas, nos bordos e nos centros dos lados da súa caixa.

### Estirar ou escalar coas asas

- Unha asa de **esquina** escala de xeito uniforme en todas as direccións, arredor da esquina oposta.
- A asa do centro dun **lado** estira só nesa dirección, arredor do lado oposto: alonga unha caixa sen facela máis alta.
- A asa do centro dun **bordo** da caixa estira nas dúas direccións que o cruzan.
- Mantén {{key:Ctrl}} ao facer clic nunha asa para escalar arredor do centro da caixa.

Fai clic nunha asa, move o punteiro e fai clic de novo; ou fai clic na asa e escribe un factor (`2` duplica, `0.5` reduce á metade) e prime {{key:Enter}}. Para dar a cada dirección o seu propio factor, escribe tres, para vermello, verde e azul: `2,1,0.5`. Dentro dun grupo aberto, as direccións son as do propio grupo.

### Escalar arredor de calquera punto

Fai clic en calquera lugar que non sexa unha asa para escalar de xeito uniforme arredor dun punto propio. Require tres clics:

1. Selecciona o que queres redimensionar. Se non hai nada seleccionado, Escalar toma o elemento no que fas clic primeiro.
2. Prime {{key:S}}.
3. Fai clic no punto que permanece no sitio (non nunha asa), por exemplo unha esquina inferior.
4. Fai clic nun punto de referencia. A súa distancia ao primeiro punto conta como 1×.
5. Move o punteiro cara ao primeiro punto ou afastándote del. O factor móstrase na punta e no cadro de valor ({{ui:Escalar}}).
6. Fai clic para terminar, ou escribe un factor e prime {{key:Enter}}: `2` duplica o tamaño, `0.5` reduce á metade.

### Escalar a un tamaño exacto

Para que algo teña unha lonxitude exacta, calcula o factor: nova lonxitude dividida pola lonxitude actual. No modo de tres clics o cadro de valor fai aritmética, así que escribe `4.2/3.6` para facer un muro de 3,6 m de 4,2 m de longo. O cadro de valor dunha asa só admite números simples: calcula o factor antes (4,2 dividido por 3,6 é uns 1,1667). Selecciona o bordo primeiro para ler a súa lonxitude actual en {{ui:Información da entidade}}.

### Corrixir unha importación de tamaño incorrecto

Os ficheiros OBJ non teñen unidade, así que un modelo debuxado en milímetros chega 1000 veces máis grande. Selecciona o grupo importado, prime {{key:S}}, fai clic nunha asa de esquina e escribe `0.001` e prime {{key:Enter}}. Para un modelo debuxado en polgadas, escribe `0.0254`.

## Cousas que debes saber

- Escalar arredor dun punto cos tres clics é uniforme. Para estirar nunha soa dirección, usa unha asa de lado ou de bordo (ver enriba).
- Escalar un grupo ou un compoñente cambia a copia que escalaches; as outras copias dun compoñente conservan o seu tamaño.
- Prime {{key:Esc}} antes do último clic para cancelar.

## Inverter

{{ui:Editar}} › {{ui:Máis}} › {{ui:Inverter ao longo do vermello}}, {{ui:Inverter ao longo do verde}} ou {{ui:Inverter ao longo do azul}} reflicte a selección no sitio, a través do centro da súa caixa: unha escaleira de dereitos pasa a ser de esquerdos. As caras seguen mirando cara a fóra, e un grupo ou compoñente reflíctese enteiro (os seus interiores non se reescriben).

{{ui:Copia invertida ao longo do vermello}} (e o verde, e o azul) deixa o orixinal no sitio e pon unha copia reflectida ao lado, do outro lado da caixa da selección: a outra porta dun par, a outra ala dun edificio. A xeometría solta que toque ali únese ao orixinal, como sempre fai a xeometría tocante; fai primeiro o orixinal un grupo para mantelos separados.

Dentro dun grupo aberto, vermello, verde e azul son os eixes propios do grupo.
