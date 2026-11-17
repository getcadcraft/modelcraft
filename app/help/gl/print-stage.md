---
title: Colocar cousas na plataforma de impresión e enviarlas a unha impresora
summary: Engada elementos da Biblioteca ou o seu propio modelo á plataforma da impresora, dispóñaos, mire as capas fatiadas e envíe a impresión por USB ou pola rede, ou grave o G-code, sen exportar antes un STL.
keywords: fase de impresión, impresión 3D, impresora, plataforma, enviar á impresora 3D, fatiador, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteca, dispoñer, axustar todo, vista previa de capas, recheo, soportes, filamento, pla, petg, complemento, complemento de impresión 3D
from: abcf5d7e
---

{{ui:Fase de impresión}} dispón as cousas na plataforma da súa impresora, fatíaas e envíaas á impresora. Non exporta antes un ficheiro. Pertence ao complemento de impresión 3D, que está activado por defecto.

:::note
Aínda non se imprimiu nada nunha impresora real con isto. O fatiador é novo: vixíe as primeiras capas da súa primeira impresión e use a vista previa de capas antes de enviar.
:::

## O que vai facer

Poña un modelo na plataforma, comprobe que cabe, mire as capas fatiadas e envíeo a unha impresora ou grave o G-code.

## Pasos

1. Prema {{ui:Fase de impresión}} na barra de ferramentas. Abrirase unha tarxeta sobre a vista e un contorno tracexado mostrará a súa plataforma.
2. Baixo **Engadir desde a Biblioteca**, escriba un nome na caixa de busca, prema {{ui:Buscar}} e prema {{ui:Engadir}} nun resultado. O elemento cae na plataforma a tamaño completo, ou reducido para caber. Calquera cousa que xa debuxase ou importase e que se vexa na vista tamén está na plataforma.
3. Baixo **Na plataforma**, comprobe o tamaño de cada elemento. Un elemento marcado **Fóra da plataforma** hai que movelo. Mova, xire e escale as cousas na vista coas ferramentas habituais.
4. Prema {{ui:Organizar na plataforma}} para espallar os elementos, ou {{ui:Axustar todo á plataforma}} para reducilos ata que caban.
5. Baixo **A súa impresora**, escolla o tamaño da **Plataforma** ou un dos perfís de impresora.
6. Baixo **Axustes de impresión**, escolla o **Material**, a **Calidade** e o **Recheo %**, e marque **Engadir soportes baixo os voos** se a forma os precisa.
7. Prema {{ui:Vista previa das capas}} e mova o control **Capa** para mirar as capas fatiadas. Se cambia despois a fase ou os axustes, prema {{ui:Vista previa das capas}} de novo.
8. Baixo **Conexión**, escolla {{ui:Cable USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ou {{ui:PrusaLink}}. Para USB prema {{ui:Conectar}}. Para unha impresora de rede escriba o seu **Enderezo** (e a **chave da API** se a pide) e prema {{ui:Probar a conexión}}.
9. Prema {{ui:Enviar á impresora 3D}}. A tarxeta pregunta se a plataforma está libre e se o material axeitado está cargado, e mostra o tempo, o material e as temperaturas. Confirme para enviar.

Recibirá unha mensaxe de que a impresora está arrancando. {{ui:Parar a impresión}} apaga as resistencias, o ventilador e os motores. Se só quere un ficheiro, prema {{ui:Gardar o G-code no seu lugar}}.

## Notas

- USB necesita Chrome ou Edge nun ordenador, e a páxina debe quedar aberta ata que remate a impresión. Pechala detén o fluxo.
- Unha impresora de rede ten que permitir este sitio (en Moonraker engádao en `cors_domains`; en OctoPrint active CORS e copie unha chave da API). O seu navegador pode pedir acceso aos dispositivos da súa rede.
- Nada se conecta nin envía sen o seu clic.
- A lista de fatiadores está en **Fatiador**. {{ui:CadCraft básico (incluído, o máis rápido)}} está integrado. Kiri:Moto, PrusaSlicer, OrcaSlicer e a Bambu Lab P2S son complementos propios que activa desde a tarxeta ou en {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer e OrcaSlicer usan a súa propia copia e traballan desde CadCraft Studio nun ordenador.
- As pezas que non son sólidos pechados quedan fóra, e a tarxeta indícalle canta parte da forma é.
- Para impresoras de resina, vexa [Fatiar para unha impresora de resina](topic:resin-printing). Para comprobar ou reparar antes un modelo, vexa [Soportes, grosor do muro, ocado e reparación](topic:print-tools).
