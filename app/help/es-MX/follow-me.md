---
title: Sígueme: barrido de una cara a lo largo de una trayectoria
summary: Cree tubos, cables, pasamanos, molduras y anillos haciendo un barrido de una cara a lo largo de aristas, arcos o una curva.
keywords: sígueme, barrido, trayectoria, tubo, cable, tubería, pasamanos, moldura, canaleta, anillo, toro, torno, extruir a lo largo
from: ec7b3839
---

{{ui:Sígueme}} mueve una cara a lo largo de una trayectoria y construye el sólido que atraviesa. La cara conserva su forma y se mantiene perpendicular a la trayectoria, y en cada esquina de la trayectoria las piezas se unen en un inglete limpio.

## Crear un cable

1. Dibuje la trayectoria: una curva ({{ui:Curva}}) que pase por los puntos por donde pasa el cable (puede subir y bajar), o líneas ({{ui:Línea}}) y arcos ({{ui:Arco}}) unidos de extremo a extremo.
2. Al inicio de la trayectoria, dibuje la sección del cable: un {{ui:Círculo}} pequeño que cruce la trayectoria. Empiece el círculo en el punto final de la trayectoria y gírelo para que quede orientado a lo largo de ella; o dibújelo sobre una cara que cruce la trayectoria en ese punto.
3. Seleccione la trayectoria (un clic selecciona una curva o arco completo; {{key:Ctrl}}+clic agrega más aristas).
4. Haga clic en {{ui:Sígueme}} en el grupo {{ui:Modificar}} y luego haga clic en el círculo.

El tubo es un sólido cerrado, con lados suaves.

## Sin seleccionar la trayectoria primero

Haga clic en {{ui:Sígueme}}, haga clic en la cara y luego en cualquier arista de la trayectoria. La trayectoria es la cadena de aristas que pasa por esa arista, hasta donde se encuentren tres o más aristas.

## Qué debe saber

- **Trayectorias cerradas** (un círculo, una curva cerrada, el contorno de un rectángulo) forman un anillo: la cara se consume y el anillo se cierra sobre sí mismo. Dibuje un círculo en el suelo para la trayectoria y un círculo pequeño de pie que la cruce para una dona.
- **Fuera de la trayectoria:** la cara no tiene que tocar la trayectoria. Un perfil dibujado al lado de una trayectoria se barre junto a ella, como una moldura a lo largo de la parte superior de un muro.
- **La trayectoria no debe bifurcarse**, y debe ser una sola cadena conectada. ModelCraft lo indica cuando no lo es.
- **Una cara que yace a lo largo de la trayectoria** (en el mismo plano que la primera arista de la trayectoria) no se puede barrer: gírela para que cruce la trayectoria.
- Es un solo paso para deshacer.
