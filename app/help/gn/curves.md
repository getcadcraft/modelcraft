---
title: Objetos curva
summary: Dibujá curvas Bézier, NURBS y de segmentos rectos, dales un grosor, un ancho o un afinamiento, rellená las planas, poné texto como curva y convertilas en mallas.
keywords: curva, curvas, bezier, nurbs, spline, splines, trayectoria, tubo, caño, cable, soga, bisel, extruir, afinamiento, inclinación, radio, relleno, perfil, texto, letras, logo, curva a malla
from: 602bf077
---

Un **objeto curva** es una curva que hace una forma: un tubo a lo largo de ella (bisel), una banda (extrusión), un cuerno que se afina (afinamiento) o, cuando es plana y cerrada, una placa rellena o letras. La forma sigue a la curva: movés un punto y el tubo se mueve con él. Cuando la forma está bien, convertila en malla.

## Agregar una curva

Elegí {{ui:Curva}} en la lista de espacios de trabajo y apretá {{ui:Agregar}}:

| Tipo | Qué es |
| --- | --- |
| Curva Bézier, círculo Bézier | Pasa por sus puntos; cada punto tiene dos manijas que fijan la dirección de la curva |
| Curva NURBS, círculo NURBS, Trayectoria | Suave, dibujada hacia sus puntos (empieza y termina en sus puntos extremos); cada punto tiene un peso |
| Texto | Tu texto como contornos de letras planos y rellenos |

Una curva nueva recibe un tubo fino para que se vea y se pueda elegir; fijá su profundidad de bisel en 0 para una curva sin tubo.

También podés partir de algo ya dibujado: elegí un arco, un círculo, un polígono o una curva dibujada en el espacio Modelo y apretá {{ui:Crear un objeto curva}} en Información de entidad. Las líneas dibujadas se mantienen.

## Editar los puntos

Hacé doble clic en un objeto curva (o seleccionalo y elegí {{ui:Curva}}) para editarlo.

- Hacé clic en un punto o manija ({{key:Shift}} agrega o quita); arrastralo para moverlo. Arrastrá sobre un espacio vacío para seleccionar con una caja.
- {{ui:Extender}} ({{key:E}}, o {{key:Ctrl}} + clic) agrega un punto después del extremo seleccionado, en el puntero.
- {{ui:Subdividir}} ({{key:W}}) pone un punto entre cada par de vecinos seleccionados; una Bézier mantiene su forma.
- {{ui:Mover}}, {{ui:Girar}}, {{ui:Escalar}} mueven los puntos seleccionados con el puntero (teclas de modelador {{key:G}} {{key:R}} {{key:S}}, teclas de empujar/tirar {{key:M}} {{key:Q}} {{key:S}}); hacé clic para confirmar, {{key:Esc}} para cancelar.
- {{ui:Cerrar}} ({{key:C}}) cierra una spline abierta o abre una cerrada; {{ui:Invertir}} ({{key:Shift+R}}) la recorre al revés.
- Manijas Bézier: {{ui:Suavizar}} ({{key:V}}) las ubica para una curva suave, {{ui:Esquina}} ({{key:Shift+V}}) las apunta hacia los vecinos, {{ui:Libre}} ({{key:Alt+V}}) las deja donde las pusiste. Arrastrar una manija la vuelve libre.
- {{ui:Bézier}}, {{ui:NURBS}} y {{ui:Poly}} cambian el tipo de las splines seleccionadas, manteniendo los puntos.

Cada cambio es un paso de deshacer.

## Forma

Los ajustes están en el panel (y en Información de entidad en el espacio Modelo):

- **Forma:** las curvas 3D van para cualquier lado; una curva plana queda en su propio plano y se puede rellenar.
- **Rellenar splines cerradas** (plana): los contornos se vuelven una placa; un contorno dentro de otro es un agujero, así las letras mantienen sus agujeros.
- **Extrusión:** la mitad del ancho de la banda (curvas abiertas o 3D), o la mitad del grosor de la placa (rellena).
- **Profundidad de bisel** y **redondez:** un tubo redondo a lo largo de la curva (con extrusión: una banda redondeada); en una forma rellena, un borde redondeado.
- **Cerrar los extremos:** tapas en un tubo abierto.
- **Afinar a lo largo:** escala parejo a lo largo de cada spline, por ejemplo `1, 0.2` para un cuerno, `0, 1, 0` para un huso.
- **Suavidad** y, para NURBS, **orden**: qué tan fino se dibuja, y qué tan suave (2 recto … 6 lo más suave).
- Con puntos seleccionados: **radio** (el grosor del tubo ahí, por el bisel), **inclinación** (gira la banda alrededor de la curva) y, para NURBS, **peso**.

Los modificadores funcionan sobre un objeto curva como sobre una malla: un Arreglo a lo largo, un Espejo, una superficie de Subdivisión. Ver [Modificadores en una malla](topic:modifiers).

## Convertir en malla

{{ui:A malla}} (en el espacio Curva o en Información de entidad, {{ui:Curva a malla}}) convierte el objeto curva en la malla que muestra ahora; sus modificadores se mantienen encima. Después editalo en el espacio Malla. Deshacer lo vuelve a convertir en curva.

Ver también [Mallas](topic:meshes) y [Editar una malla](topic:mesh-edit).
