---
title: Suportes, espessura da parede, esvaziamento e reparação
summary: Veja onde uma impressão precisa de suportes e quantos, aproximadamente, encontre paredes demasiado finas para imprimir, esvazie uma peça até uma espessura de parede com furos de drenagem e repare uma malha com todas as correções listadas.
keywords: impressão 3d, suportes, pré-visualização de suportes, saliência, suportes em árvore, suportes em coluna, espessura da parede, paredes finas, demasiado fina, bico, esvaziar, esvaziamento, casca, furo de drenagem, resina, reparar, corrigir malha, não variedade, faces invertidas, furos, pequenas cascas, auto-interseção, sobreposição, unir
from: 286bde26
---

Quatro ferramentas para preparar um modelo para uma impressora 3D. Abra {{ui:Exportar}} › {{ui:Verificar para impressão 3D (STL ou 3MF)…}}; a linha **Ferramentas de impressão** da caixa tem {{ui:Pré-visualização dos suportes}}, {{ui:Espessura das paredes}}, {{ui:Esvaziar}} e {{ui:Reparar}}. Cada uma abre-se como um cartão sobre a vista; {{ui:Fechar}} (a cruz) fecha-o e retira as suas marcas. Só um cartão é mostrado de cada vez.

Cada ferramenta trabalha sobre o que é impresso: a seleção ou tudo o que está visível quando não há nada selecionado. {{ui:Esvaziar}} e {{ui:Reparar}} precisam de um grupo, componente ou malha selecionado, porque o alteram.

## Pré-visualização dos suportes

As faces que se inclinam para fora mais do que o **ângulo da saliência** em relação à vertical são sombreadas a vermelho, e suportes simples são desenhados a partir delas (a laranja) até à mesa, ou até à parte do modelo que fica por baixo.

- **Ângulo da saliência**: 45° é o que a maioria das impressoras consegue sem suporte. Aumente-o para uma impressora que faz bem pontes.
- **Colunas**: uma coluna reta a cada 3 mm sob cada saliência. A estimativa conta-as como um padrão de suporte de 15%.
- **Árvore**: pontos próximos juntam-se num só tronco sob o seu meio; nenhum ramo se inclina mais de 45°. As árvores costumam gastar menos material e tocam a mesa em menos sítios.

O cartão indica quanta superfície precisa de suporte, quantos pontos de suporte há e, aproximadamente, quanto material gastam. Os suportes que assentam no modelo (e não na mesa) são contados: deixam marcas nele. Com uma mesa de impressora escolhida em {{ui:Definições}}, a mesa é desenhada por baixo do modelo.

:::note
Isto é uma pré-visualização, não um fatiador: o seu fatiador decide os suportes reais. Numa saliência muito grande, os pontos de suporte são espalhados por uma área maior para que a pré-visualização se mantenha rápida; o cartão indica-o.
:::

## Espessura da parede

Cada face é medida em linha reta através do sólido até ao lado oposto. As paredes abaixo da **espessura mínima da parede a permitir** ficam a vermelho, e as que estão abaixo de uma vez e meia esse valor ficam a laranja: imprimem-se, mas podem sair fracas.

As zonas finas são listadas, a mais fina primeiro, com a espessura e a dimensão de cada uma. {{ui:Mostrar}} vira a câmara para ela.

Uma impressora não consegue fazer uma parede mais fina do que cerca de duas larguras do seu bico: 0.8 mm para o bico comum de 0.4 mm (o ponto de partida). As impressoras de resina conseguem menos; consulte o guia da sua impressora.

Num modelo muito grande, só algumas faces lançam um raio, e as outras assumem a espessura das vizinhas; o cartão indica quantas foram medidas.

## Esvaziar

Esvaziar mantém o exterior como está e retira o interior, deixando as paredes tão espessas quanto pedir. As impressões em resina gastam menos resina e puxam menos pela plataforma de impressão; as impressões em filamento gastam menos plástico do que o preenchimento gastaria.

1. Selecione o grupo, componente ou malha e depois abra {{ui:Esvaziar}}.
2. Defina a **parede** (2 mm para começar) e a largura dos **furos de drenagem**.
3. Numa impressão em resina, clique em {{ui:Colocar um furo de drenagem}} e depois clique no exterior do modelo onde deve ficar: em baixo, perto da plataforma de impressão, para que a resina líquida escorra. Coloque tantos quantos precisar; cada um aparece como um círculo azul e fica listado, com {{ui:Remover}}.
4. {{ui:Pré-visualizar}} indica quanto o esvaziamento retira.
5. {{ui:Esvaziá-lo}} faz a alteração: um passo que {{key:Mod+Z}} desfaz.

O resultado é um sólido fechado que a verificação para impressão 3D aceita: o ModelCraft verifica-o primeiro e não altera nada se não passar. Onde o modelo for mais fino do que duas paredes, fica sólido. O resultado é um grupo cujas faces planas são faces únicas, por isso pode continuar a modelá-lo com {{ui:Empurrar/puxar}}; uma peça curva esvaziada na grelha fina costuma ter faces a mais para isso e passa a malha, e a linha de estado indica-o.

:::tip
Para a maioria das formas, o interior é o exterior deslocado para dentro exatamente da espessura da parede. Onde cantos ou partes finas tornam isso impossível, o ModelCraft segue o exterior à distância da parede numa grelha fina; o cartão indica então a proximidade (com uma precisão de uma fração de milímetro).
:::

## Reparar

{{ui:Reparar}} analisa a peça selecionada como o fatiador de uma impressora a analisaria, corrige com segurança o que pode corrigir e lista cada correção:

| Corrige | O que isso significa |
|---|---|
| Triângulos sem área | são retirados |
| Um triângulo desenhado duas vezes | fica uma cópia; uma face desenhada em sentidos opostos sobre si própria (sem espessura) é removida |
| Peças soltas com menos de 0.5 mm | removidas |
| Triângulos virados para o lado errado | rodados para acompanhar os vizinhos |
| Furos, planos ou não | fechados com um leque de triângulos novos a partir do centro de cada furo |
| Uma peça do avesso | virada para fora (um interior oco dentro de outra peça fica como está: é para estar virado para dentro) |

{{ui:Corrigir as seguras}} faz todas num só passo que {{key:Mod+Z}} desfaz, e a linha de estado lista cada correção. A peça corrigida passa a ser um grupo cujas faces planas são faces únicas. Se ainda não fechar (fica algo em **Por resolver**), ou tiver faces a mais para um grupo, passa a malha: as faces continuam a ser triângulos, e as faces planas continuam a parecer planas. A linha de estado indica qual. {{ui:Unir partes sobrepostas}} funciona da mesma forma.

O que não pode ser corrigido com segurança fica listado em **Por resolver** e marcado a roxo na vista, com {{ui:Mostrar}}:

- **Arestas onde se encontram três ou mais faces**: decida qual face pertence e apague as outras.
- **Uma peça que atravessa a si própria**: mova ou redesenhe essa parte. Veja [Intersetar faces](topic:intersect).
- **Furos grandes ou emaranhados demais para fechar**: desenhe faces sobre eles.
- **Peças separadas que se sobrepõem**: os fatiadores juntam-nas de qualquer forma. {{ui:Unir partes sobrepostas}} faz delas um só corpo fechado (reconstrói as faces onde se encontram, por isso é um botão à parte, que nunca é feito automaticamente).

Nos grupos de empurrar/puxar, também pode corrigir um de cada vez em {{ui:Informações da entidade}} › {{ui:Mostrar problemas}} / {{ui:Corrigir}}, o que mantém as faces que desenhou. Veja [Ferramentas de sólidos](topic:solids).

Relacionado: [Preparar um modelo para impressão 3D](topic:print-3d) · [O estilo Iniciante](topic:beginner) · [Ainda não implementado](topic:not-built-yet#3d-printing)
