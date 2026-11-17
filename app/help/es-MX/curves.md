---
title: Objetos curva
summary: Dibuje curvas Bézier, NURBS y de segmentos rectos, dele grosor, ancho o afilado, rellene las planas, convierta texto en curva y conviértalas en mallas.
keywords: curva, curvas, bézier, nurbs, spline, splines, trayectoria, tubo, tubería, cable, cuerda, bisel, extruir, afilar, inclinación, radio, relleno, perfil, texto, letras, logotipo, curva a malla
from: 602bf077
---

Un **objeto curva** es una curva que genera una forma: un tubo a lo largo de ella (bisel), una banda (extruir), un cuerno que se afila (afilado) o, cuando es plana y cerrada, una placa rellena o letras. La forma sigue a la curva: si mueve un punto, el tubo se mueve con él. Cuando la forma sea la correcta, conviértala en malla.

## Agregar una curva

Elija {{ui:Curva}} en la lista de espacios de trabajo y pulse {{ui:Agregar}}:

| Tipo | Qué es |
| --- | --- |
| Curva Bézier, círculo Bézier | Pasa por sus puntos; cada punto tiene dos tiradores que definen la dirección de la curva |
| Curva NURBS, círculo NURBS, Trayectoria | Suave, dibujada hacia sus puntos (empieza y termina en sus puntos extremos); cada punto tiene un peso |
| Texto | Su texto como contornos de letras planos y rellenos |

Una curva nueva recibe un tubo delgado para que se vea y se pueda elegir; defina su profundidad de bisel en 0 para una curva sin grosor.

También puede partir de algo dibujado: seleccione un arco, un círculo, un polígono o una curva dibujada en el espacio de trabajo Modelo y pulse {{ui:Crear un objeto curva}} en {{ui:Información de entidad}}. Las líneas dibujadas se conservan.

## Editar los puntos

Haga doble clic en un objeto curva (o selecciónelo y elija {{ui:Curva}}) para editarlo.

- Haga clic en un punto o tirador (Shift agrega o quita); arrástrelo para moverlo. Arrastre sobre un espacio vacío para seleccionar con un recuadro.
- {{ui:Extender}} ({{key:E}}, o clic con {{key:Ctrl}}) agrega un punto después del extremo seleccionado, en el puntero.
- {{ui:Subdividir}} ({{key:W}}) coloca un punto entre cada par de vecinos seleccionados; una Bézier conserva su forma.
- {{ui:Desplazar}}, {{ui:Girar}} y {{ui:Escalar}} desplazan los puntos seleccionados con el puntero (teclas de modelador {{key:G}} {{key:R}} {{key:S}}, teclas de empujar/tirar {{key:M}} {{key:Q}} {{key:S}}); haga clic para conservar, {{key:Esc}} para cancelar.
- {{ui:Cerrar}} ({{key:C}}) cierra una spline abierta o abre una cerrada; {{ui:Invertir}} ({{key:Shift+R}}) la recorre en sentido contrario.
- Tiradores Bézier: {{ui:Suavizar}} ({{key:V}}) los coloca para una curva suave, {{ui:Esquina}} ({{key:Shift+V}}) los apunta hacia los vecinos, {{ui:Libre}} ({{key:Alt+V}}) los deja donde los puso. Al arrastrar un tirador, este queda libre.
- {{ui:Bézier}}, {{ui:NURBS}} y {{ui:Poligonal}} cambian el tipo de las splines seleccionadas, conservando los puntos.

Cada cambio es un paso de deshacer.

## Forma

Los ajustes están en el panel (y en {{ui:Información de entidad}} en el espacio de trabajo Modelo):

- **Forma:** las curvas 3D van en cualquier dirección; una curva plana se queda en su propio plano y puede rellenarse.
- **Rellenar splines cerradas** (plana): los contornos se convierten en una placa; un contorno dentro de otro es un agujero, así que las letras conservan sus agujeros.
- **Extruir:** la mitad del ancho de la banda (curvas abiertas o 3D), o la mitad del grosor de la placa (rellena).
- **Profundidad de bisel** y **redondez:** un tubo redondo a lo largo de la curva (con extruir: una banda redondeada); en una forma rellena, un borde redondeado.
- **Cerrar los extremos:** tapas en un tubo abierto.
- **Afilar a lo largo:** escala de manera uniforme a lo largo de cada spline, por ejemplo `1, 0.2` para un cuerno, `0, 1, 0` para un huso.
- **Suavidad** y, para NURBS, **orden**: qué tan fino se dibuja, y qué tan suave (2 recto … 6 lo más suave).
- Con puntos seleccionados: **radio** (el grosor del tubo ahí, por el bisel), **inclinación** (gira la banda alrededor de la curva) y, para NURBS, **peso**.

Los modificadores funcionan sobre un objeto curva igual que sobre una malla: una matriz a lo largo de ella, una simetría, una superficie de subdivisión. Vea [Modificadores en una malla](topic:modifiers).

## Convertirla en malla

{{ui:A malla}} (en el espacio de trabajo Curva o en {{ui:Información de entidad}}, {{ui:Curva a malla}}) convierte el objeto curva en la malla que muestra ahora; sus modificadores se conservan encima. Luego edítela en el espacio de trabajo Malla. Deshacer lo revierte.

Vea también [Mallas](topic:meshes) y [Editar una malla](topic:mesh-edit).
