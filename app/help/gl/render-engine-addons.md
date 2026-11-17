---
title: Engadir un motor de render cun complemento
summary: O que un complemento pode engadir á lista Motor do diálogo Renderizar, o permiso que necesita para executar un programa, e o que Studio comproba e pregunta.
keywords: complemento, addon, motor, motor de render, desenvolvedor, engine.run, permiso, programa, script, asinado, studio, api
from: cd7a39ba
---

Un complemento (Configuración › Complementos) pode engadir un motor á lista Motor de {{ui:Renderizar unha imaxe…}}. O texto completo para autores de complementos é a sección 16 da especificación de complementos; en resumo:

- O complemento rexistra un motor cun identificador que comeza co seu propio, un nome, axustes opcionais e **ou** un programa para executar **ou** unha función en JavaScript que debuxa a imaxe.
- Un motor que executa un programa necesita o permiso **`engine.run`**, que se mostra antes da instalación e en Configuración. Só se executa en Studio; no navegador aparece como un ficheiro para gardar.
- O complemento indica o programa (un nome de ficheiro simple, nunca unha shell), un script que está **dentro do complemento asinado**, e argumentos formados por marcadores e palabras simples. Studio atopa o programa ou pídelle que o localice unha vez.
- A primeira vez que un complemento executa un programa, **Studio pregúntalle no seu propio diálogo**: que complemento, que programa, e que un script pode facer calquera cousa que o programa poida. Permítao só nun complemento en que confíe. A súa resposta recórdase para ese complemento e programa.
- O paquete (a escena en USD e un ficheiro de axustes, co ficheiro glTF cando o complemento o pide) e o script do complemento van a un cartafol temporal novo, o programa execútase alí, e a imaxe volve marcada co nome do motor do complemento.

:::note
Os complementos só poden engadir motores de render desde a API de complementos 1.4. Un exemplo traballado dun renderizador de liña de comandos de código aberto está no seu propio repositorio; aínda non se executou nese renderizador.
:::
