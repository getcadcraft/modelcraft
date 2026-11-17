---
title: Seguirme: barrer una cara a lo largo de un trayecto
summary: Hacé caños, cables, pasamanos, molduras y anillos barriendo una cara a lo largo de bordes, arcos o una curva.
keywords: seguirme, barrer, trayecto, caño, cable, tubo, pasamanos, moldura, canaleta, anillo, toroide, torno, extruir a lo largo
from: ec7b3839
---

{{ui:Seguirme}} mueve una cara a lo largo de un trayecto y construye el sólido por donde pasa. La cara mantiene su forma y queda en escuadra con el trayecto, y en cada esquina del trayecto las piezas se unen en un inglete limpio.

## Hacer un cable

1. Dibujá el trayecto: una {{ui:Curva}} por los puntos por donde pasa el cable (puede subir y bajar), o {{ui:Línea}}s y {{ui:Arco}}s unidos de extremo a extremo.
2. Al inicio del trayecto, dibujá la sección del cable: un {{ui:Círculo}} chico cruzando el trayecto. Empezá el círculo en el punto final del trayecto y giralo para que quede en la dirección del trayecto; o dibujalo sobre una cara que cruce el trayecto en ese lugar.
3. Seleccioná el trayecto (un clic selecciona una curva o arco completo; {{key:Ctrl}}+clic agrega más bordes).
4. Ojapo clic en {{ui:Seguirme}} en el grupo {{ui:Modificar}}, después ojapo clic en el círculo.

El tubo es un sólido cerrado, con lados suaves.

## Sin seleccionar primero el trayecto

Ojapo clic en {{ui:Seguirme}}, ojapo clic en la cara, después ojapo clic en cualquier borde del trayecto. El trayecto es la cadena de bordes que pasa por ese borde, hasta donde se encuentran tres o más bordes.

## Lo que hay que saber

- **Trayectos cerrados** (un círculo, una curva cerrada, el contorno de un rectángulo) hacen un anillo: la cara se gasta y el anillo se cierra sobre sí mismo. Dibujá un círculo en el suelo como trayecto y un círculo chico de canto cruzándolo para una rosquilla.
- **Fuera del trayecto:** la cara no tiene que tocar el trayecto. Un perfil dibujado al lado de un trayecto barre a lo largo de él, como una moldura sobre la parte alta de un muro.
- **El trayecto no puede bifurcarse**, y tiene que ser una sola cadena conectada. ModelCraft lo dice cuando no es así.
- **Una cara apoyada a lo largo del trayecto** (en el mismo plano que el primer borde del trayecto) no puede barrerse: giránla para que cruce el trayecto.
- Es un solo paso para deshacer.
