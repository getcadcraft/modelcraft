---
title: Gardar vistas como escenas
summary: Garde unha cámara e un estilo como escena, actualícea e cámbielle o nome, e avance ou reproduza escenas para presentar un deseño.
keywords: escena, vista, vista gardada, cámara, presentación, animación, reproducir, diapositivas, páxina arriba, páxina abaixo, lapelas, percorrido
from: 38680d6e
---

Unha **escena** lembra unha posición da cámara, un estilo e o que está oculto: desde onde mira, perspectiva ou paralela, o estilo das caras, as arestas, os axustes do sol, os grupos ocultos, as etiquetas desactivadas e o corte de sección. As escenas gárdanse no ficheiro `.modelcraft`.

## Engadir unha escena

1. Prepare a vista: oriente, faga zoom, escolla un estilo e fixe o sol.
2. No panel {{ui:Escenas}} da dereita, faga clic en {{ui:Engadir escena}}.

   A escena aparece na lista, co nome «Escena 1», «Escena 2» e así en diante, e como lapela na parte superior da vista 3D. A barra de estado di «Escena 1 gardada: esta cámara, estilo e o que está oculto».

## Ir a unha escena

- Faga clic na súa lapela sobre a vista 3D, ou no seu nome na lista {{ui:Escenas}}.
- Ou prema {{key:PageDown}} para a seguinte escena e {{key:PageUp}} para a anterior. {{ui:Seguinte}} e {{ui:Anterior}} debaixo da lista fan o mesmo.

A cámara desprázase á escena en algo máis de medio segundo. Se o seu ordenador está configurado para reducir o movemento, vai alí de salto.

## Cambiar, renomear ou eliminar unha escena

Cada escena da lista ten tres botóns pequenos despois do seu nome:

- **Actualizar** (as frechas circulares): garda a cámara, o estilo e o que está oculto actuais nesa escena. «Escena 2 actualizada».
- **Renomear** (o lapis): abre un diálogo «Renomear escena». Escriba o novo nome e faga clic en {{ui:Gardar}}.
- **Eliminar** (a papeleira): elimina a escena. «Escena 2 eliminada. Ctrl+Z recupéraa».

Engadir, actualizar, renomear e eliminar escenas son pasos que se poden desfacer, como os cambios no modelo.

## Bloquear a cámara dunha escena

Cando renderiza a mesma vista unha e outra vez mentres cambia o deseño, bloquee a cámara desa escena para que a vista nunca se mova por accidente.

1. Na lista {{ui:Escenas}}, faga clic no botón **bloquear** (o cadeado aberto) despois do nome da escena. Pecha, e a lapela da escena sobre a vista 3D amosa un pequeno cadeado. A barra de estado di «Escena 2: cámara bloqueada».
2. Vaia á escena cando queira renderizar: a cámara volve exactamente á vista gardada, así que as imaxes feitas desde ela aliñan coas anteriores.

Mentres a cámara está bloqueada, **Actualizar** segue gardando o estilo e o que está oculto na escena, pero a cámara queda onde estaba, aínda que vostede movese a vista. Faga clic de novo no cadeado para desbloquealo; despois, Actualizar garda de novo a vista actual. Bloquear e desbloquear son pasos que se poden desfacer, e o bloqueo gárdase no ficheiro `.modelcraft`.

## Presentar

1. Engada dúas ou máis escenas.
2. Faga clic en {{ui:Reproducir}} debaixo da lista. ModelCraft pasa á seguinte escena cada poucos segundos e volve á primeira despois da última.
3. Faga clic en {{ui:Parar}} (o mesmo botón) ou prema {{key:Esc}} para deter.

Para un estudo do sol, engada unha escena por hora cambiando só a {{ui:Hora}} e despois reprodúzaas. Vexa [Estilos e sombras do sol](topic:styles-shadows#a-sun-study).

Para presentar sen as barras, prema {{key:Ctrl+Shift+F}} dúas veces: pantalla completa e despois pantalla completa coas barras ocultas. As lapelas das escenas quedan sobre a vista.

## O que mostra unha escena

Unha escena lembra o que estaba oculto cando a gardou: os grupos e compoñentes que [ocultou](topic:hide-isolate), as [etiquetas](topic:tags) que desactivou e os [planos de sección](topic:sections) que cortan. Ir a unha escena oculta e amosa de novo estes elementos. Así, unha escena pode amosar a casa enteira, a seguinte a casa coa etiqueta do tellado desactivada, e a seguinte unha sección a través dela.

As caras e arestas soltas ocultas non forman parte das escenas. Ir a unha escena non crea un paso de desfacer. As escenas gardadas por unha versión anterior de ModelCraft deixan o que está oculto como está; faga clic en Actualizar para gardalo nelas.

## Exportar unha animación

{{ui:Exportar animación}}, debaixo da lista, reproduce as escenas da primeira á última, movendo a cámara suavemente entre elas, e garda a película como vídeo **WebM** (dous segundos de movemento e unha pausa curta por escena). Captura a vista tal como a ve, co seu tamaño en pantalla, en [vista de presentación](topic:styles-shadows#presentation-view) (sen eixes, guías nin selección). Prema {{key:Esc}} ou faga clic de novo no botón para deter sen gardar. WebM reprodúcese en navegadores e en VLC, e os editores de vídeo convírtenno.

Para un percorrido renderizado (ceo, sol, sombras, materiais) nun tamaño que escolla, use {{ui:Renderizar vídeo…}} no seu lugar: sen claves de animación toma as escenas, en orde, como percorrido da cámara. Vexa [Animar a cámara e os obxectos](topic:animation).

## Cousas que hai que saber

- Cambiar o estilo ou mover a cámara despois de ir a unha escena non cambia a escena ata que faga clic en Actualizar.
- As escenas non se exportan a Collada, OBJ, glTF, STL nin IFC.
