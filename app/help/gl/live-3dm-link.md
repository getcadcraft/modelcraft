---
title: Manter un modelo .3dm en directo
summary: Cambie un modelo no programa que o creou e vexa o cambio aquí, desde Rhino 8 ou unha definición de Grasshopper, sen gardar e importar de novo.
keywords: rhino, grasshopper, ligazón en directo, conexión en directo, 3dm, nurbs, paramétrico, ligazón, sincronizar, script, modelo de referencia, enviar
from: 331b0a7e
---

Siga modelando onde modela e use o resultado aquí: para renderizalo, iluminalo ou dispor unha escena ao seu redor. Cada cambio no outro programa actualiza un grupo en ModelCraft.

:::note
A ligazón necesita **CadCraft Studio** no mesmo ordenador. Unha lapela do navegador non pode establecer a conexión. Nada pasa pola internet: o script fala con Studio no enderezo propio deste ordenador, cun token.
:::

:::warning
Esta ligazón probouse co escritor de ficheiros do script e cun substituto do outro programa, pero aínda non dentro de Rhino ou Grasshopper. Se algo falla alí, díganos o que dicía.
:::

## Configuración

1. En Studio, abra ModelCraft. En {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Asistentes}}, marque **Permitir que os asistentes de IA e os scripts usen ModelCraft** e logo **Editar**.
2. En Studio, escolla {{ui:Conectar un asistente}}. Mostra o enderezo e o token que pegará máis abaixo.
3. Descargue o script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Desde Rhino

1. Execute `cadcraft_link.py` no editor de scripts de Rhino (Python 3 en Rhino 8).
2. A primeira vez, pegue o enderezo e o token. Gárdanse en `.cadcraft-link.json` no seu cartafol de inicio, nunca no modelo. Studio crea un token novo cada vez que arranca, así que o script pregunta de novo entón.

O modelo completo chega como un grupo co nome do documento, por exemplo "cadeira (ligada)". Despois, cada cambio chega cando se detén un momento, e só se envían os obxectos que cambiaron. Execute o script de novo para parar.

## Desde Grasshopper

Execute primeiro o script unha vez en Rhino, para que se garden o enderezo e o token.

1. Engada un compoñente Script (Python 3) e pegue nel todo o `cadcraft_link.py`.
2. Déalle estas entradas: `G` (a xeometría, con acceso a listas), `N` (un nome, opcional), `On` (un interruptor booleano) e `Target` (opcional: `model` ou `part`, se as dúas aplicacións están abertas).
3. Poña `On` en verdadeiro.

Cada resolución envía `G` e substitúe o que enviou a última vez, así que arrastrar un control deslizante actualiza o grupo aquí. A súa saída `a` indica o que pasou. Cada compoñente ten o seu propio grupo.

## Que pode facer co grupo

- **Móvao, etiquételo, constrúa ao seu redor.** A posición do grupo e a súa etiqueta mantéñense en cada actualización, e tamén todo o que hai ao seu lado.
- **Non edite dentro del.** Cada actualización substitúe o que hai dentro do grupo. Eses obxectos son do outro programa.
- **Desfacer.** As actualizacións feitas a menos de dous segundos unhas das outras comparten un paso de desfacer, así que {{key:Mod+Z}} desfai un arrastre completo. A seguinte actualización devolve o modelo ao que lle corresponde.
- **Gardar.** O ficheiro gardado conserva a ligazón. Execute o script de novo despois de reabrilo, e o mesmo grupo actualízase.

## Que chega

Mallas, polisuperficies, superficies e extrusións como a malla que se ve en pantalla; SubD como a súa malla; curvas como bordos; bloques como obxectos separados no seu sitio (non como compoñentes); capas como etiquetas, e tamén cores e unidades. Vexa [Importar un modelo .3dm](topic:import-3dm-files) para saber como aparecen aquí.

Quedan fóra, co número no outro programa: puntos, texto, cotas, luces e similares.

**Só nunha dirección.** Os cambios feitos aquí non volven ao outro programa.

## Se algo sae mal

- **"Ningunha xanela de ModelCraft ou PartCraft o permite":** faga o paso 1 da configuración.
- **"Studio rexeitou o token":** Studio reiniciouse. Copie o token novo e execute o script de novo. Para Grasshopper, execútao primeiro en Rhino.
- **"Non se pode conectar con CadCraft Studio":** Studio non está en execución, ou o enderezo cambiou.
