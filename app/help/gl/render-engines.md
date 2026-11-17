---
title: Escoller que programa debuxa a imaxe
summary: A opción Motor do diálogo Renderizar: os nosos dous motores, outros programas en CadCraft Studio, e o que fai a web no seu lugar.
keywords: render, motor, renderizador, motor de render, complemento, studio, programa externo, debuxado por, cola, motor de complemento
from: be4b056a
---

{{ui:Renderizar unha imaxe…}} ten unha opción **Motor** por enriba de Modo. Os nosos dous motores están sempre e funcionan en todas partes; os complementos poden engadir máis, e en CadCraft Studio a lista tamén inclúe os programas que se fan cargo da escena.

| Motor | Que fai | Onde |
|---|---|---|
| Integrado: Rápido | A imaxe fixa rápida: luz de día, sombras suaves, aspecto de vidro e metal, en segundos | O navegador e Studio |
| Integrado: Trazador de camiños | A luz que rebota entre superficies na súa tarxeta gráfica ou procesador, a cola de render e os outros ordenadores da súa rede | O navegador e Studio |
| Motor dun complemento | Debuxa a imaxe e devólvea: vexa [Debuxar a imaxe con outro programa](topic:render-other-program) | O navegador (un motor escrito en JavaScript) ou Studio (un motor que executa un programa) |
| Un programa que se fai cargo da escena | Studio pon a escena no seu cartafol e mantena sincronizada | Studio |
| Abrir en … | Garda a escena e ábreaa nun programa; non volve nada: vexa [Abrir a escena noutro programa](topic:render-open-in) | A web garda o ficheiro |

## Como se comporta a escolla

- Escoller Rápido ou o Trazador de camiños cambia Modo con el, e á inversa. Nada máis do diálogo cambia para quen nunca usa outro motor.
- Un motor que non está dispoñible queda na lista co motivo («non atopado», «necesita unha versión máis nova»); non se pode escoller. No navegador, un motor que só funciona en Studio mostra «garda un ficheiro»: {{ui:Renderizar unha imaxe…}} entón garda a escena e os seus axustes nun ficheiro que lle leva a ese programa.
- A escolla gárdase cos axustes de render do ficheiro, e o último motor escollido é o motor inicial para os ficheiros que non teñen escolla propia.
- Unha imaxe doutro programa indica que programa a debuxou e a súa versión, no diálogo e na cola de render. As promesas da páxina [Renderizar](topic:render) cobren **os nosos** motores só: outro programa ilumina, tonifica e toma mostras á súa maneira, así que dúas imaxes dunha mesma escena son parecidas en cámara, sol, lámpadas e exposición, pero non píxel a píxel.

## Que recibe cada motor

A escena vai a outro programa como un **paquete**: o modelo como ficheiro USD (o mesmo ficheiro que escribe [Gardar como USD](topic:usd)), e un ficheiro de axustes que contén o que un importador de USD non pode manexar con seguridade: os valores exactos dos materiais, as lámpadas que están acesas coa súa potencia e perfís de luz, o sol, o ceo, a exposición e a cámara tal como a debuxaría o diálogo. Non se sobe nada a ningures.

## A cola de render

Unha imaxe ou unha animación para outro programa pode esperar na [cola de render](topic:render#the-render-queue) como as nosas; o seu traballo lembra a que motor é. Unha animación vai ao programa dunha soa vez.
