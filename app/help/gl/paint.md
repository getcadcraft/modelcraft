---
title: Pintar con cores e materiais
summary: Dá a caras, grupos e compoñentes unha cor sólida ou un material como ladrillo, revestimento, tellas ou madeira, e consérvaos ao exportar.
keywords: pintar, cor, cores, material, materiais, textura, texturas, ladrillo, revestimento, tellas, cuberta, madeira, pedra, azulexo, formigón, estuco, herba, cascallo, cristal, metal, cubo de pintura, recheo, mostra, conta-gotas, predeterminada, glb, obj, mtl, collada
from: b1500523
---

As cores axúdanche a distinguir partes dun modelo, e os **materiais** (ladrillo, revestimento, cuberta, madeira, pedra, azulexo, formigón, estuco, herba, cristal, metal) fano parecer ao que está construído. Ambos pintan do mesmo xeito.

## Escoller unha cor

A sección {{ui:Cores}} da dereita mostra unha fila de cores sólidas, {{ui:Predeterminada}} (a cruzada por unha liña: sen cor) e unha mostra {{ui:+}} para calquera outra cor. Fai clic nunha para convertela na cor actual. A ferramenta Pintar comeza con ela.

## Pintar

1. Prime {{key:B}} ({{ui:Pintar}}), ou, sen nada seleccionado, fai clic nunha cor. (Con algo seleccionado, facer clic nunha cor pinta a selección ao momento.)
2. Fai clic nunha cara para pintala.
3. Fai clic nun grupo ou nun compoñente para pintar esa copia: as súas caras que non teñen cor propia toman esta cor. As caras que pintaches dentro conservan a súa.

Para pintar varias cousas á vez, selecciónaas primeiro e despois fai clic nunha cor, ou fai clic en calquera delas con {{ui:Pintar}}. É un só paso de desfacer.

| Mantén | E fai clic nunha cara | O que se pinta |
|---|---|---|
| — | | Esa cara |
| {{key:Ctrl}} | | Cada cara conectada a ela que teña a mesma cor |
| {{key:Shift}} | | Cada cara desa cor no grupo no que traballas |
| {{key:Alt}} | | Nada: en cambio tomas esa cor |

Para devolver unha cara a sen cor, escolle {{ui:Predeterminada}} e fai clic nela.

## Pintar con un material

A sección {{ui:Materiais}}, debaixo de {{ui:Cores}}, enumera a biblioteca de materiais por tipo: ladrillo e bloque, revestimento, cubertas, madeira, pedra, azulexo, formigón, estuco, terreo, cristal e metal. Pasa o cursor por unha mostra para ver o seu nome. Fai clic nunha e despois pinta igual que cunha cor: {{key:B}}, fai clic en caras, grupos ou compoñentes; ou selecciona primeiro e fai clic no material.

- No estilo **Sombreado** as caras mostran a textura do material. Liña oculta, alambre e raios X mostran a súa cor.
- As texturas corren **niveladas ao longo de cada cara** e **cara arriba**: as fiadas de ladrillo quedan niveladas en cada muro, as tellas corren polo declive dunha cuberta, e as táboas dun chan seguen o eixe vermello. Están no seu tamaño real (un ladrillo mide uns 215 mm de longo), así que se ven ben a calquera distancia.
- Nunha [imaxe renderizada](topic:render) os materiais conservan a súa textura, a súa rugosidade e, no caso do cristal e do metal, o seu brillo.
- Alt+clic con {{ui:Pintar}} tamén toma o material dunha cara.

As texturas son debuxadas por ModelCraft mesmo, así que funcionan sen conexión e son de uso libre para calquera fin (CC0).

## Compoñentes e cores

Unha cor pintada nunha cara **dentro** dun compoñente aparece en cada copia, porque as copias comparten unha mesma definición. Unha cor pintada nunha **copia** desde fóra (co compoñente pechado) pertence só a esa copia, así que dúas copias dun mesmo compoñente poden ter cores distintas. {{ui:Información da entidade}} mostra a cor dunha cara, grupo ou compoñente seleccionado.

## Cores nos ficheiros

- O ficheiro ModelCraft conserva todas as cores e todos os materiais.
- Os outros formatos reciben a **cor do material** (o seu aspecto desde lonxe) no lugar da textura: glTF, Collada, OBJ, DWG e DXF, e a comprobación de impresión 3D. En glTF, Collada e OBJ o material conserva o seu nome, como `Material_brick-red`.
- **glTF (.glb)** e **Collada (.dae)**: cada cor convértese nun material. Un compoñente mostrado en cores distintas escríbese unha vez por cor. glTF tamén escribe as texturas importadas como texturas.
- **OBJ**: exportar descarga dous ficheiros, o `.obj` e un ficheiro de materiais `.mtl` coas cores. Gárdaos na mesma cartafol. Con texturas importadas, o `.obj`, o `.mtl` e as imaxes chegan nun único `.zip`.
- **DWG** conserva as cores exactas; **DXF** usa a máis próxima das 255 cores CAD estándar.
- **STL** e **PLY** levan cores: STL na convención VisCAM / SolidView (os programas que non a len ignórana), e PLY como unha cor en cada punto. Consulta [Formatos de ficheiro en detalle](topic:formats).

:::tip
Para modelar unha pantalla, pinta o marco de carbón e o cristal de azul despois de [desfasar](topic:draw-faces) a cara frontal.
:::
