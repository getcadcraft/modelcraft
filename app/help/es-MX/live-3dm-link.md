---
title: Mantener un modelo .3dm en vivo
summary: Cambie un modelo en el programa que lo creó y vea el cambio aquí, desde Rhino 8 o una definición de Grasshopper, sin guardar ni importar de nuevo.
keywords: rhino, grasshopper, enlace en vivo, conexión en vivo, 3dm, nurbs, paramétrico, enlace, sincronizar, script, modelo de referencia, enviar
from: 331b0a7e
---

Siga modelando donde modela, y use el resultado aquí: para renderizarlo, iluminarlo o armar una escena a su alrededor. Cada cambio en el otro programa actualiza un grupo en ModelCraft.

:::note
El enlace necesita **CadCraft Studio** en la misma computadora. Una pestaña del navegador no puede mantener la conexión. Nada viaja por internet: el script se comunica con Studio en la dirección de esta computadora, con un token.
:::

:::warning
Este enlace se probó con el escritor de archivos del script y con un sustituto del otro programa, todavía no dentro de Rhino o Grasshopper. Si algo falla ahí, avísenos qué decía el mensaje.
:::

## Configurarlo

1. En Studio, abra ModelCraft. En {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, marque **Permitir que los asistentes de IA y los scripts usen ModelCraft**, y luego **Editar**.
2. En Studio, elija {{ui:Connect an assistant}}. Muestra la dirección y el token que pegará más abajo.
3. Descargue el script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Desde Rhino

1. Ejecute `cadcraft_link.py` en el editor de scripts de Rhino (Python 3 en Rhino 8).
2. La primera vez, pegue la dirección y el token. Se guardan en `.cadcraft-link.json` en su carpeta personal, nunca en el modelo. Studio genera un token nuevo cada vez que se inicia, así que el script vuelve a pedirlo en ese caso.

El modelo completo llega como un solo grupo con el nombre del documento, por ejemplo "chair (linked)". Después, cada cambio llega cuando hace una pausa breve, y solo se envían los objetos que cambiaron. Ejecute el script de nuevo para detenerlo.

## Desde Grasshopper

Ejecute primero el script una vez en Rhino, para que se guarden la dirección y el token.

1. Agregue un componente Script (Python 3) y pegue todo el contenido de `cadcraft_link.py` en él.
2. Asígnele estas entradas: `G` (la geometría, con acceso a lista), `N` (un nombre, opcional), `On` (un interruptor booleano) y `Target` (opcional: `model` o `part`, si ambas apps están abiertas).
3. Ponga `On` en verdadero.

Cada cálculo envía `G` y reemplaza lo que el componente envió la vez anterior, así que al arrastrar un control deslizante se actualiza el grupo aquí. Su salida `a` indica qué pasó. Cada componente tiene su propio grupo.

## Qué puede hacer con el grupo

- **Muévalo, etiquételo, arme alrededor de él.** La posición del grupo y su etiqueta se mantienen en cada actualización, y también todo lo que esté a su lado.
- **No edite dentro.** Cada actualización reemplaza lo que hay dentro del grupo. Esos objetos pertenecen al otro programa.
- **Deshacer.** Las actualizaciones que ocurren con menos de dos segundos de diferencia comparten un solo paso de deshacer, así que {{key:Mod+Z}} revierte un arrastre completo. La siguiente actualización vuelve a igualar el modelo.
- **Guardar.** El archivo guardado conserva el enlace. Ejecute el script de nuevo después de reabrirlo, y el mismo grupo se actualiza.

## Qué llega

Mallas, polisuperficies, superficies y extrusiones llegan como la malla que se ve en pantalla; SubD llega como su malla; las curvas como aristas; los bloques como objetos separados en su lugar (no como componentes); las capas como etiquetas, y también los colores y las unidades. Vea [Importar un modelo .3dm](topic:import-3dm-files) para saber cómo aparecen aquí.

Se omiten, con un conteo en el otro programa: puntos, texto, cotas, luces y similares.

**Una sola vía.** Los cambios aquí no regresan al otro programa.

## Si algo sale mal

- **"Ninguna ventana de ModelCraft o PartCraft lo permite":** haga el paso 1 de la configuración.
- **"Studio rechazó el token":** Studio se reinició. Copie el token nuevo y ejecute el script de nuevo. Para Grasshopper, ejecútelo primero en Rhino.
- **"No se puede conectar con CadCraft Studio":** Studio no está en ejecución, o la dirección cambió.
