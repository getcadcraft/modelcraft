---
title: Mantener un modelo .3dm en vivo
summary: Cambie un modelo en el programa que lo creó y vea aquí cómo cambia, desde Rhino 8 o una definición de Grasshopper, sin guardar ni importar de nuevo.
keywords: rhino, grasshopper, enlace en vivo, conexión en vivo, 3dm, nurbs, paramétrico, enlace, sincronizar, script, modelo de referencia, enviar
from: 331b0a7e
---

Siga modelando donde modela y use el resultado aquí: para renderizarlo, iluminarlo o montar una escena a su alrededor. Cada cambio en el otro programa actualiza un grupo en ModelCraft.

:::note
El enlace necesita **CadCraft Studio** en el mismo equipo. Una pestaña del navegador no puede establecer la conexión. Nada pasa por internet: el script se comunica con Studio en la propia dirección de este equipo, con un token.
:::

:::warning
Este enlace se ha probado con el escritor de archivos del script y con un sustituto del otro programa, pero aún no dentro de Rhino ni de Grasshopper. Si algo falla allí, cuéntenos qué mensaje mostró.
:::

## Configurarlo

1. En Studio, abra ModelCraft. En {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen ModelCraft**, y después **Editar**.
2. En Studio, elija {{ui:Conectar un asistente}}. Muestra la dirección y el token que pegará más abajo.
3. Descargue el script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Desde Rhino

1. Ejecute `cadcraft_link.py` en el editor de scripts de Rhino (Python 3 en Rhino 8).
2. La primera vez, pegue la dirección y el token. Se guardan en `.cadcraft-link.json` en su carpeta personal, nunca en el modelo. Studio genera un token nuevo cada vez que se inicia, así que el script vuelve a pedirlos entonces.

El modelo completo llega como un grupo con el nombre del documento, por ejemplo "chair (linked)". Después, cada cambio llega cuando hace una breve pausa, y solo se envían los objetos que cambiaron. Vuelva a ejecutar el script para detenerlo.

## Desde Grasshopper

Ejecute antes el script una vez en Rhino, para que se guarden la dirección y el token.

1. Añada un componente Script (Python 3) y pegue en él todo el contenido de `cadcraft_link.py`.
2. Asígnele estas entradas: `G` (la geometría, con acceso de lista), `N` (un nombre, opcional), `On` (un interruptor booleano) y `Target` (opcional: `model` o `part`, si ambas aplicaciones están abiertas).
3. Ponga `On` en verdadero.

En cada cálculo se envía `G` y sustituye lo que el componente envió la vez anterior, así que arrastrar un deslizador actualiza el grupo aquí. Su salida `a` indica lo que ocurrió. Cada componente tiene su propio grupo.

## Qué puede hacer con el grupo

- **Muévalo, etiquételo y construya alrededor.** La posición del grupo y su etiqueta se mantienen en cada actualización, y también lo que haya junto a él.
- **No edite dentro.** Cada actualización sustituye lo que hay dentro del grupo. Esos objetos pertenecen al otro programa.
- **Deshacer.** Las actualizaciones que se producen con menos de dos segundos de diferencia comparten un paso de deshacer, así que {{key:Mod+Z}} revierte un arrastre completo. La siguiente actualización vuelve a ajustar el modelo.
- **Guardar.** El archivo guardado conserva el enlace. Vuelva a ejecutar el script después de reabrirlo, y el mismo grupo se actualizará.

## Qué llega

Mallas, polisuperficies, superficies y extrusiones como la malla que ve en pantalla; SubD como su malla; curvas como aristas; bloques como objetos separados en su sitio (no como componentes); capas como etiquetas, y también colores y unidades. Vea [Importar un modelo .3dm](topic:import-3dm-files) para saber cómo aparecen aquí.

Se omiten, con un recuento en el otro programa: puntos, texto, cotas, luces y similares.

**Un solo sentido.** Los cambios aquí no vuelven al otro programa.

## Si algo sale mal

- **"Ninguna ventana de ModelCraft o PartCraft lo permite":** siga el paso 1 de la configuración.
- **"Studio rechazó el token":** Studio se ha reiniciado. Copie el token nuevo y vuelva a ejecutar el script. En Grasshopper, ejecútelo antes en Rhino.
- **"No se puede conectar con CadCraft Studio":** Studio no está en ejecución, o la dirección ha cambiado.
