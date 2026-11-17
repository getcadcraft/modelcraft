---
title: Objetos de curva
summary: Dibuje curvas Bézier, NURBS y de segmentos rectos, dé un grosor, una anchura o un afilado, rellene las planas, convierta el texto en una curva y transfórmelas en mallas.
keywords: curva, curvas, bezier, nurbs, spline, splines, trayectoria, tubo, tubería, cable, cuerda, bisel, extruir, afilado, inclinación, radio, relleno, perfil, texto, letras, logotipo, curva a malla
from: 602bf077
---

Un **objeto de curva** es una curva que genera una forma: un tubo a lo largo de ella (bisel), una banda (extrusión), un cuerno que se afila (afilado) o, cuando es plana y cerrada, una placa rellena o letras. La forma sigue a la curva: mueva un punto y el tubo se mueve con él. Cuando la forma es la correcta, conviértala en malla.

## Añadir una curva

Elija {{ui:Curva}} en la lista de espacios de trabajo y pulse {{ui:Añadir}}:

| Tipo | Qué es |
| --- | --- |
| Curva Bézier, círculo Bézier | Pasa por sus puntos; cada punto tiene dos tiradores que fijan la dirección de la curva |
| Curva NURBS, círculo NURBS, Trayectoria | Suave, se dibuja hacia sus puntos (empieza y termina en sus puntos extremos); cada punto tiene un peso |
| Texto | Su texto como contornos de letras planos y rellenos |

Una curva nueva recibe un tubo delgado para que se vea y pueda seleccionarse; defina su profundidad de bisel en 0 para una curva sin grosor.

También puede partir de algo dibujado: seleccione un arco, un círculo, un polígono o una curva dibujada en el espacio de trabajo Modelo y pulse {{ui:Crear un objeto de curva}} en Información de entidad. Las líneas dibujadas se conservan.

## Editar los puntos

Haga doble clic en un objeto de curva (o selecciónelo y elija {{ui:Curva}}) para editarlo.

- Haga clic en un punto o tirador ({{key:Shift}} añade o quita) y arrástrelo para moverlo. Arrastre sobre un espacio vacío para seleccionar con un recuadro.
- {{ui:Prolongar}} ({{key:E}}, o {{key:Ctrl}}+clic) añade un punto después del extremo seleccionado, en el puntero.
- {{ui:Subdividir}} ({{key:W}}) pone un punto entre cada par de vecinos seleccionados; una Bézier conserva su forma.
- {{ui:Desplazar}}, {{ui:Girar}}, {{ui:Escalar}} mueven los puntos seleccionados con el puntero (teclas de modelador {{key:G}} {{key:R}} {{key:S}}, teclas de empujar/tirar {{key:M}} {{key:Q}} {{key:S}}); haga clic para confirmar, {{key:Esc}} para cancelar.
- {{ui:Cerrar}} ({{key:C}}) cierra una spline abierta o abre una cerrada; {{ui:Invertir}} ({{key:Shift+R}}) la recorre en sentido contrario.
- Tiradores Bézier: {{ui:Suavizar}} ({{key:V}}) los coloca para una curva suave, {{ui:Esquina}} ({{key:Shift+V}}) los orienta hacia los vecinos, {{ui:Libre}} ({{key:Alt+V}}) los deja donde los puso. Arrastrar un tirador lo hace libre.
- {{ui:Bézier}}, {{ui:NURBS}} y {{ui:Poli}} cambian el tipo de las splines seleccionadas, conservando los puntos.

Cada cambio es un paso de deshacer.

## Forma

Los ajustes están en el panel (y en Información de entidad, en el espacio de trabajo Modelo):

- **Forma:** las curvas 3D van en cualquier dirección; una curva plana se mantiene en su plano y puede rellenarse.
- **Rellenar splines cerradas** (planas): los contornos se convierten en una placa; un contorno dentro de otro es un agujero, así que las letras conservan sus agujeros.
- **Extrusión:** la mitad de la anchura de la banda (curvas abiertas o 3D), o la mitad del grosor de la placa (rellenas).
- **Profundidad de bisel** y **redondez:** un tubo redondo a lo largo de la curva (con extrusión: una banda redondeada); en una forma rellena, un borde redondeado.
- **Cerrar los extremos:** tapas en un tubo abierto.
- **Afilado a lo largo:** escala uniformemente a lo largo de cada spline, por ejemplo `1, 0.2` para un cuerno, `0, 1, 0` para un huso.
- **Suavidad** y, en NURBS, **orden**: qué tan fina es la curva y qué tan suave (2 recta … 6 la más suave).
- Con puntos seleccionados: **radio** (el grosor del tubo en ese punto, multiplicado por el bisel), **inclinación** (gira la banda alrededor de la curva) y, en NURBS, **peso**.

Los modificadores funcionan sobre un objeto de curva igual que sobre una malla: una matriz a lo largo, un espejo, una superficie de subdivisión. Véase [Modificadores en una malla](topic:modifiers).

## Convertirla en malla

{{ui:A malla}} (en el espacio de trabajo Curva o en Información de entidad, {{ui:Curva a malla}}) convierte el objeto de curva en la malla que muestra ahora; sus modificadores se mantienen encima. Después edítela en el espacio de trabajo Malla. Deshacer la devuelve a curva.

Véase también [Mallas](topic:meshes) y [Editar una malla](topic:mesh-edit).
