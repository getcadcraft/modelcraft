---
title: Menús, teclas e rato
summary: Escolla un estilo de menú que coincida co modelador que xa coñece, dé a calquera comando a súa propia tecla, mova comandos entre menús e defina o que fan a roda e os botóns central e dereito do rato.
keywords: estilo de menú, menús, barra de menús, barra de ferramentas, atallos de teclado, teclas rápidas, teclas, estilo de teclas, mapa de teclas, personalizar, reasignar, rato, roda, invertir, dirección do zoom, botón central, botón dereito, orbitar, desprazar, exportar, importar, cambiar, coñecido, empurrar e tirar, modelador
from: e56fce3d
---

As ferramentas de ModelCraft son as mesmas por onde se chegue a elas. Un **estilo de menú** decide onde se sitúan na pantalla, como se chaman alí e que teclas as executan. Escólloa en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menús, teclas e rato}}; o cambio é inmediato, e este navegador o recorda.

## Os estilos

| Estilo | Que obtén |
|---|---|
| {{ui:ModelCraft}} | A barra de ferramentas propia de ModelCraft (Ficheiro, Debuxar, Modificar, Organizar, Editar, Cámara) e as súas teclas dunha letra: {{key:L}} liña, {{key:R}} rectángulo, {{key:P}} empurrar e tirar, {{key:M}} mover, {{key:Q}} xirar, {{key:S}} escalar, {{key:E}} goma, {{key:O}} orbitar. O punto de partida. |
| {{ui:Empurrar e tirar}} | Unha barra de menús (Ficheiro, Editar, Vista, Cámara, Debuxar, Ferramentas, Xanela) sobre unha fila das ferramentas principais, coas mesmas teclas dunha letra. |
| {{ui:Modelador}} | Unha barra de menús no encabezado (Ficheiro, Editar, Vista, Seleccionar, Engadir, Obxecto, Malla) e as teclas dos modeladores de malla: {{key:W}} seleccionar, {{key:G}} agarrar, {{key:R}} xirar e {{key:S}} escalar a selección á vez ({{key:X}}, {{key:Y}} ou {{key:Z}} bloquean un eixo mentres se move), {{key:E}} empurrar e tirar, {{key:B}} rectángulo, {{key:X}} eliminar, {{key:A}} seleccionar todo, {{key:Alt+A}} ningún, {{key:Shift+D}} duplicar, {{key:Mod+G}} grupo, {{key:H}} ocultar. O botón central orbita; {{key:Shift}} e o botón central desprazan, e {{key:Mod}} e o botón central fan zoom; o botón dereito cancela o que fai unha ferramenta. |
| {{ui:Principiante}} | Unha cinta cuxa lapela {{ui:Crear}} ten uns poucos botóns grandes: formas para soltar, buratos, mover, xirar e cambiar o tamaño, aliñar, {{ui:Grupo}} (buratos cortados nas formas) e a comprobación para impresión 3D; todas as outras ferramentas, na lapela {{ui:Máis ferramentas}}. O botón dereito orbita, o central desprazan. Vexa [O estilo Principiante](topic:beginner). |

O estilo de teclas que lle pode resultar coñecido de {{ui:Chaves}}, na parte inferior dereita da vista, e de {{ui:Editar}} › {{ui:Máis}} é a mesma escolla: elixir as teclas de modelador alí elixe o estilo {{ui:Modelador}}, e elixir as teclas de empurrar e tirar deixa o estilo {{ui:ModelCraft}}. Se escolleu as teclas de modelador nunha versión anterior, ModelCraft abre unha vez no estilo {{ui:Modelador}}, por si mesmo.

:::tip
Unha tecla que pertence ás teclas de empurrar e tirar pero que o seu estilo lle dá a outro comando non fai nada, e a liña de estado indica onde foi o seu comando ("En Modelador, Empurrar/tirar é E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as frechas conservan sempre o seu significado, os números van sempre ao cadro de valor, e mentres unha ferramenta move algo, as súas propias teclas ganan.
:::

## Facelo seu

1. Escolla o estilo máis próximo ao que quere e logo prema {{ui:Personalizar…}}.
2. En {{ui:Teclas e menús}}, busque un comando (o cadro de busca axuda). Prema {{ui:Engadir unha chave}} e pulse a tecla. Prema unha tecla para a quitar.
3. Coa barra de menús, {{ui:Onde está}} move o comando a outro menú, ou a {{ui:Só teclas}}.
4. En {{ui:Rato}}, defina a roda e o que fan os botóns na vista 3D.
5. Póñalle un nome e prema {{ui:Gardar}}.

Gardar un estilo integrado crea a súa propia copia («O meu Modelador»); o integrado nunca cambia. A súa copia lé as teclas do mesmo xeito que o estilo do que parte: unha feita desde {{ui:Modelador}} mantén en funcionamento a vez as teclas de agarrar, xirar e escalar.

## Rato

- **Roda do rato**: {{ui:Desprazar cara arriba aumenta o zoom}} (o inicio) ou {{ui:Desprazar cara arriba reduce o zoom}}, e a velocidade. Un pinzamento no trackpad sempre fai zoom no sentido en que se moven os dedos.
- **Arrastre na vista 3D**: {{ui:Propio de cada vista}} mantén os botóns de ModelCraft (o botón central orbita, o botón dereito ou {{key:Shift}} e o botón central desprazan). Ou ponga os botóns central e dereito a orbitar, desprazar, facer zoom ou a nada; {{key:Shift}} co botón intercambia orbitar e desprazar. O botón esquerdo sempre pertence á ferramenta en uso.
- **Trackpads**: {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Desprazamento}} segue decidindo se dous dedos orbitan (trackpad) ou fan zoom (rato). Vexa [Orbitar, desprazar e facer zoom](topic:orbit-pan-zoom).

## Lévao consigo

{{ui:Exportar}} garda o estilo en uso como un pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} engade un, desde outro ordenador ou dun compañeiro. Un ficheiro importado só pode apuntar aos comandos propios de ModelCraft: o resto queda fóra e cóntase na liña de estado. {{ui:Eliminar este estilo}} quita un dos seus.

:::note
Estes axustes quedan neste navegador. {{ui:Usar este estilo en todas as aplicacións}}, baixo as tarxetas de estilo, fai que todas as aplicacións se abran no estilo correspondente: {{ui:Empurrar e tirar}} vai coas outras aplicacións de estilos de barra de menús. {{ui:Modelador}} non ten equivalente nas outras aplicacións, así que segue sendo unha escolla de ModelCraft.
:::

Vexa tamén: [Teclas e accións do rato](topic:keyboard) · [Configuración de ModelCraft](topic:settings) · [Chegar desde outros modeladores](topic:coming-from)
