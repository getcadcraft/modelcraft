---
title: Manter um modelo .3dm conectado
summary: Altere um modelo no programa que o criou e veja a mudança aqui, a partir do Rhino 8 ou de uma definição do Grasshopper, sem salvar e importar de novo.
keywords: rhino, grasshopper, link ao vivo, conexão ao vivo, 3dm, nurbs, paramétrico, link, sincronizar, script, modelo de referência, enviar
from: 331b0a7e
---

Continue modelando onde você costuma modelar e use o resultado aqui: para renderizar, iluminar ou montar uma cena ao redor dele. Cada alteração feita no outro programa atualiza um grupo no ModelCraft.

:::note
A conexão precisa do **CadCraft Studio** no mesmo computador. Uma aba do navegador não consegue fazer a conexão. Nada passa pela internet: o script se comunica com o Studio pelo endereço deste próprio computador, com um token.
:::

:::warning
Esta conexão foi testada com o gravador de arquivos do script e com um substituto do outro programa, ainda não dentro do Rhino ou do Grasshopper em si. Se algo falhar lá, informe a mensagem exibida.
:::

## Configurar

1. No Studio, abra o ModelCraft. Em {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, marque **Permitir que assistentes de IA e scripts usem o ModelCraft** e depois clique em **Editar**.
2. No Studio, escolha {{ui:Conectar um assistente}}. Ele mostra o endereço e o token que você colará abaixo.
3. Baixe o script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## No Rhino

1. Execute `cadcraft_link.py` no editor de scripts do Rhino (Python 3 no Rhino 8).
2. Na primeira vez, cole o endereço e o token. Eles ficam guardados em `.cadcraft-link.json` na sua pasta pessoal, nunca no modelo. O Studio gera um novo token toda vez que é iniciado, então o script pedirá de novo nessa ocasião.

O modelo inteiro chega como um só grupo com o nome do documento, por exemplo "cadeira (conectado)". Depois disso, cada alteração chega quando você faz uma pausa, e só os objetos alterados são enviados. Execute o script de novo para parar.

## No Grasshopper

Execute o script uma vez no Rhino primeiro, para que o endereço e o token fiquem salvos.

1. Adicione um componente Script (Python 3) e cole nele todo o conteúdo de `cadcraft_link.py`.
2. Defina estas entradas: `G` (a geometria, com acesso a lista), `N` (um nome, opcional), `On` (um alternador booleano) e `Target` (opcional: `model` ou `part`, se os dois aplicativos estiverem abertos).
3. Defina `On` como verdadeiro.

Cada resolução do componente envia `G` e substitui o que o componente enviou da última vez, então arrastar um controle deslizante atualiza o grupo aqui. Sua saída `a` informa o que aconteceu. Cada componente tem seu próprio grupo.

## O que fazer com o grupo

- **Mova, marque e construa ao redor dele.** A posição do grupo e a sua etiqueta permanecem em cada atualização, assim como tudo ao lado dele.
- **Não edite dentro dele.** Cada atualização substitui o que está dentro do grupo. Os objetos pertencem ao outro programa.
- **Desfazer.** Atualizações feitas com menos de dois segundos de diferença compartilham uma só etapa de desfazer, então {{key:Mod+Z}} desfaz um arraste inteiro. A atualização seguinte faz o modelo voltar a corresponder ao original.
- **Salvar.** O arquivo salvo mantém a conexão. Execute o script de novo depois de reabrir o arquivo, e o mesmo grupo será atualizado.

## O que chega

Malhas, polissuperfícies, superfícies e extrusões como a malha que você vê na tela, SubD como a sua malha, curvas como arestas, blocos como objetos separados onde estão (não como componentes), camadas como etiquetas, cores e unidades. Veja [Trazer um modelo .3dm](topic:import-3dm-files) para saber como eles aparecem aqui.

Ficam de fora, com a contagem no outro programa: pontos, textos, cotas, luzes e similares.

**Somente em um sentido.** Alterações feitas aqui não voltam para o outro programa.

## Se algo der errado

- **"Nenhuma janela do ModelCraft ou do PartCraft permite isso":** faça o passo 1 da configuração.
- **"O Studio recusou o token":** o Studio foi reiniciado. Copie o novo token e execute o script de novo. Para o Grasshopper, execute-o primeiro no Rhino.
- **"Não foi possível acessar o CadCraft Studio":** o Studio não está em execução, ou o endereço mudou.
