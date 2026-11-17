---
title: Manter um modelo .3dm em Live
summary: Altere um modelo no programa que o criou e veja-o mudar aqui, a partir do Rhino 8 ou de uma definição do Grasshopper, sem voltar a guardar e importar.
keywords: rhino, grasshopper, ligação Live, ligação em direto, 3dm, nurbs, paramétrico, ligação, sincronizar, script, modelo de referência, enviar
from: 331b0a7e
---

Continue a modelar no programa onde modela e use o resultado aqui: para o renderizar, iluminar ou compor uma cena à volta dele. Cada alteração no outro programa atualiza um grupo no ModelCraft.

:::note
A ligação precisa do **CadCraft Studio** no mesmo computador. Um separador do navegador não pode estabelecer a ligação. Nada passa pela internet: o script comunica com o Studio no endereço do próprio computador, com um token.
:::

:::warning
Esta ligação foi testada com o escritor de ficheiros do script e com um substituto do outro programa, ainda não dentro do próprio Rhino ou do Grasshopper. Se algo falhar aí, indique-nos a mensagem que apareceu.
:::

## Configurar

1. No Studio, abra o ModelCraft. Em {{ui:Definições}} › {{ui:ModelCraft}} › {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o ModelCraft** e depois **Editar**.
2. No Studio, escolha {{ui:Ligar um assistente}}. Mostra o endereço e o token que vai colar abaixo.
3. Transfira o script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## A partir do Rhino

1. Execute `cadcraft_link.py` no editor de scripts do Rhino (Python 3 no Rhino 8).
2. Na primeira vez, cole o endereço e o token. Ficam guardados em `.cadcraft-link.json` na pasta pessoal, nunca no modelo. O Studio cria um novo token sempre que arranca, por isso o script volta a pedi-lo nessa altura.

O modelo inteiro chega como um só grupo com o nome do documento, por exemplo "chair (linked)". Depois, cada alteração chega quando fizer uma pequena pausa, e só são enviados os objetos alterados. Execute outra vez o script para parar.

## A partir do Grasshopper

Execute primeiro o script uma vez no Rhino, para que o endereço e o token fiquem guardados.

1. Acrescente um componente Script (Python 3) e cole nele todo o conteúdo de `cadcraft_link.py`.
2. Dê-lhe estas entradas: `G` (a geometria, com acesso a listas), `N` (um nome, opcional), `On` (um interruptor booleano) e `Target` (opcional: `model` ou `part`, se as duas aplicações estiverem abertas).
3. Defina `On` como verdadeiro.

Cada cálculo envia `G` e substitui o que o componente enviou da última vez, por isso arrastar uma barra deslizante atualiza aqui o grupo. A saída `a` indica o que aconteceu. Cada componente tem o seu próprio grupo.

## O que pode fazer com o grupo

- **Mova-o, etiquete-o, construa à volta dele.** A posição do grupo e a respetiva etiqueta mantêm-se em cada atualização, e o mesmo acontece com tudo o que está ao lado.
- **Não edite dentro dele.** Cada atualização substitui o que está dentro do grupo. Esses objetos pertencem ao outro programa.
- **Anular.** Atualizações com menos de dois segundos entre si partilham um passo de anulação, por isso {{key:Mod+Z}} anula um arrasto completo. A atualização seguinte repõe o modelo em conformidade.
- **Guardar.** O ficheiro guardado mantém a ligação. Execute o script novamente depois de o reabrir, e o mesmo grupo é atualizado.

## O que chega

Malhas, polissuperfícies, superfícies e extrusões chegam como a malha que se vê no ecrã, SubD como a respetiva malha, curvas como arestas, blocos como objetos separados onde estão (não como componentes), camadas como etiquetas, cores e unidades. Veja [Importar um modelo .3dm](topic:import-3dm-files) para saber como estes aparecem aqui.

Ficam de fora, com uma contagem no outro programa: pontos, textos, cotas, luzes e semelhantes.

**Só num sentido.** As alterações feitas aqui não voltam ao outro programa.

## Se algo correr mal

- **«Nenhuma janela do ModelCraft ou do PartCraft o permite»:** faça o passo 1 da configuração.
- **«O Studio recusou o token»:** o Studio foi reiniciado. Copie o novo token e execute o script novamente. Para o Grasshopper, execute-o primeiro no Rhino.
- **«Não é possível contactar o CadCraft Studio»:** o Studio não está em execução, ou o endereço mudou.
