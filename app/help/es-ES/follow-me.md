---
title: Sígueme: barrer una cara a lo largo de una trayectoria
summary: Cree tuberías, cables, pasamanos, molduras y anillos barriendo una cara a lo largo de aristas, arcos o una curva.
keywords: sígueme, barrer, barrido, trayectoria, tubería, cable, tubo, pasamanos, moldura, canalón, anillo, toro, revolución, extruir a lo largo de
from: ec7b3839
---

{{ui:Sígueme}} mueve una cara a lo largo de una trayectoria y construye el sólido por el que pasa. La cara mantiene su forma y permanece perpendicular a la trayectoria, y en cada esquina de la trayectoria las piezas se unen en un inglete limpio.

## Hacer un cable

1. Dibuje la trayectoria: una {{ui:Curva}} por los puntos por los que pasa el cable (puede subir y bajar), o {{ui:Línea}} y {{ui:Arco}} unidos de extremo a extremo.
2. Al inicio de la trayectoria, dibuje la sección del cable: un {{ui:Círculo}} pequeño que atraviese la trayectoria. Empiece el círculo en el punto final de la trayectoria y gírelo para que mire a lo largo de ella; o dibújelo sobre una cara que cruce la trayectoria en ese punto.
3. Seleccione la trayectoria (un clic selecciona una curva o un arco entero; {{key:Ctrl}}+clic añade más aristas).
4. Haga clic en {{ui:Sígueme}} en el grupo {{ui:Modificar}} y, después, en el círculo.

El tubo es un sólido cerrado, con lados suaves.

## Sin seleccionar antes la trayectoria

Haga clic en {{ui:Sígueme}}, haga clic en la cara y, después, en cualquier arista de la trayectoria. La trayectoria es la cadena de aristas que pasa por esa arista, hasta el punto en que se encuentran tres o más aristas.

## Lo que debe saber

- **Las trayectorias cerradas** (un círculo, una curva cerrada, el contorno de un rectángulo) forman un anillo: la cara se consume y el anillo se cierra sobre sí mismo. Dibuje un círculo en el suelo como trayectoria y un círculo pequeño de pie que la atraviese para obtener una rosquilla.
- **Fuera de la trayectoria:** la cara no tiene que tocar la trayectoria. Un perfil dibujado al lado de una trayectoria barre a lo largo de ella, como una moldura en la parte superior de un muro.
- **La trayectoria no puede bifurcarse** y debe ser una sola cadena conectada. ModelCraft lo indica cuando no es así.
- **Una cara tendida a lo largo de la trayectoria** (en el mismo plano que la primera arista de la trayectoria) no se puede barrer: gírela para que cruce la trayectoria.
- Es un solo paso de deshacer.
