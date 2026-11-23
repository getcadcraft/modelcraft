---
title: Cortar para unha impresora de resina
summary: Cortar a mesa de impresión da etapa de impresión para unha impresora de resina, ocar e reforzar a peza, revisar as capas, gardar o ficheiro da impresora e atopar a súa exposición coa proba de exposición.
keywords: resina, suxerir inclinación, ventosa, forza de desprendemento, reforzos, impresión en resina, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, oco, orificio de ventilación, balsa, soportes, proba de exposición, escaleira de exposición, calibración, capas, complemento
from: 8cc12858
---

Os complementos de resina cortan o que hai na mesa de impresión en imaxes de capas para a pantalla da súa impresora, e gardan o ficheiro que a impresora le. Son gratuítos, sen nada bloqueado, e están desactivados ata que os active.

:::note
Aínda non se cargou ningún ficheiro nunha impresora real. Os ficheiros foron lidos só polos lectores propios de CadCraft, e os soportes son novos. Revise as capas e faga a primeira impresión a man.
:::

## O que vai facer

Cortar unha peza para resina, revisar as capas, gardar o ficheiro e copialo á súa impresora.

## Pasos

1. Abra {{ui:Configuración}} › {{ui:Complementos}} e active o complemento de corte para resina e o complemento do formato de ficheiro da súa impresora (Elegoo GOO, SL1, Chitubox ou Anycubic). Tamén pode premer {{ui:Engadir impresión en resina}} na tarxeta da etapa de impresión.
2. Coloque a peza na mesa como en [Colocar cousas na mesa de impresión](topic:print-stage), e logo escolla {{ui:Resina}} xunto a **Imprimir con**.
3. Baixo **Configuración da impresión en resina**, escolla a súa **Impresora** e a súa **Resina**. A tarxeta mostra o tamaño da pantalla en píxeles. Son os tamaños publicados polo fabricante, así que comprobe o seu; pode editalos en Personalizado.
4. Estableza **Altura de capa (mm)**, **Exposición (s)** e **Exposición da base (s)**. Os números de cada resina son só un punto de partida.
5. Marque **Ocar, cun orificio de ventilación** se quere unha peza oca, e estableza a **Parede (mm)** e a **Largura do orificio (mm)**.
6. Marque **Soportes e balsa** e escolla a **Densidade dos soportes**: Leve, Media ou Alta.
7. Escolla o **Formato de ficheiro**. Se a tarxeta indica que aínda non se engadiu ningún, prema o botón que di Engadir e o nome do formato.
8. Prema {{ui:Vista previa das capas}} e mova o control **Capa**. As pezas flotantes marcanse cun anel. A liña debaixo indica as capas, o tempo e a resina en mL, gramos e custo.
9. Prema {{ui:Gardar o ficheiro de impresión}}, revise o resumo e prema {{ui:Gardar}}. Copie o ficheiro á súa impresora.

## Inclinación, ventosas, reforzos e cifra de desprendemento

Estes catro son estimacións a partir da forma da peza. Ningún se probou nunha impresora real, así que trátese cada un como unha indicación e revise as capas.

1. Prema {{ui:Suxerir unha inclinación}} baixo **Inclinación (graos)**. CadCraft proba inclinacións de 0 a 60 graos e escolle a que ten a capa máis grande máis pequena, a menor superficie en voadizo e ningunha ventosa. Establece **Inclinación (graos)** e indica o que atopou. As ponderacións do cálculo son nosas, non do fabricante da impresora.
2. Despois de {{ui:Vista previa das capas}}, un aviso indica as cavidades que só se abren cara á película. Unha cavidade así pode reter succión cando unha capa se despega. Incline a peza ou engada un orificio. Os recunchos máis estreitos que o tamaño de celda do aviso non se detectan.
3. Con **Soportes e balsa** activado, marque **Reforzar soportes altos** para engadir reforzos transversais entre piares finos e altos.
4. A liña debaixo da vista previa indica a capa máis grande en cm². Só mostra unha forza se introduce unha **Tensión de desprendemento medida** en **Capas inferiores, elevación e velocidades**. Sen un valor medido por vostede, mostra só a superficie.

## Atope a súa exposición

1. Active o complemento de proba de exposición en {{ui:Configuración}} › {{ui:Complementos}}.
2. Prema {{ui:Colocar a peza de proba na mesa}}.
3. Prema {{ui:Gardar a escaleira de exposición}}. Obterá un ficheiro por cada exposición, nun zip.
4. Imprima cada ficheiro coa mesma resina e conserve a exposición cos piares finos e os orificios abertos máis nítidos.

## Notas

- O corte faise en segundo plano, así que a páxina segue usable cunha mesa grande.
- As pezas que non son sólidos pechados déixanse fóra, e a tarxeta indícao.
- Se a impresora rexeita un ficheiro, a tarxeta do formato ofrece opcións para o que o formato deixa aberto. Cambie unha, gárdeo de novo e díganos cal funcionou.
- As versións 517 e 518 de Anycubic non se escriben.
