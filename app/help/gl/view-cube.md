---
title: O cubo de vista
summary: Prema nunha cara, aresta ou esquina do cubo na esquina da vista para mirar desde aí, arrástreo para orbitar, xire o anel da brúxula, pase a unha vista de fronte e volte á inicial.
keywords: cubo de vista, viewcube, cubo, brúxula, norte, vista inicial, vistas estándar, superior, frontal, dereita, isométrica, esquina, aresta, orbitar, xirar vista, icona de eixes, indicador de esquina, navegación
from: e1ec1347
---

O cubo de vista sitúase na parte superior dereita da vista 3D. Xira coa vista, así que sempre mostra cara a onde mira: {{ui:Superior}} está arriba, {{ui:Frontal}} mira ao sur (cando o mira, vostede mira ao norte, ao longo do eixe verde), {{ui:Dereita}} mira ao leste (eixe vermello). Mantense transparente ata que apunte a el.

## Mirar desde unha cara, unha aresta ou unha esquina

1. Sinale o cubo. A parte que está baixo o punteiro ilumínase: o centro dunha cara, unha aresta (ilumínase nas dúas caras que a comparten) ou unha esquina (nas tres caras).
2. Prema nela. A vista xira para mirar desde aí, mantendo o mesmo centro e zoom.

Hai 26 lugares onde premer: 6 caras ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Esquerda}}, {{ui:Dereita}}), 12 arestas e 8 esquinas. Unha esquina dá a clásica vista en tres cuartos; unha aresta mira a medio camiño entre dúas caras.

Premer {{ui:Frontal}} é o mesmo que {{ui:Vistas}}, {{ui:Frontal}} na barra de ferramentas, sen o zoom ao ajustar. {{ui:Vistas}} segue facendo zoom a todo o modelo.

## Orbitar arrastrando o cubo

Arrastre o cubo para xirar a vista, igual que orbitar na propia vista. Un arrastre nunca se toma como clic, así que pode agarrar o cubo en calquera punto.

## O anel da brúxula

O anel baixo o cubo leva N, L, S e O.

- **Arrastre o anel** para xirar o modelo arredor do eixe vertical, como se estivese nun xiradoiro. O anel segue o punteiro.
- **Prema unha letra** para mirar desde ese lado, mantendo canto mira cara abaixo. Nunha vista desde enriba, a letra que prema vai á parte inferior da pantalla.

## Vistas de fronte: frechas

Cando mira directamente a unha cara, aparecen pequenas frechas arredor do cubo:

- Os catro **triángulos** levan á fronte a cara dese lado: o triángulo enriba do cubo mostra a cara que estaba arriba, e así por diante.
- As dúas **frechas curvas** arriba á dereita xiran a imaxe un cuarto de volta no sentido horario ou antihorario, sen cambiar a cara da que mira. Úseas para xirar unha planta de xeito que un muro longo quede atravesado na pantalla.

## Inicio

O botón da casa na parte superior esquerda do cubo volve á vista {{ui:Iso}} en tres cuartos e ajusta todo o modelo. {{key:Home}} fai o mesmo mentres o cubo ten o foco do teclado.

## Co teclado

{{key:Tab}} ata o cubo, logo:

| Tecla | Fai |
|---|---|
| {{key:left}} / {{key:right}} | escolle unha cara, aresta ou esquina arredor do cubo, en pasos de oitavo de volta (os lectores de pantalla din cal) |
| {{key:up}} / {{key:down}} | escolle unha máis alta ou máis baixa, ata {{ui:Superior}} ou ata {{ui:Inferior}} |
| {{key:Enter}} ou {{key:Space}} | mira desde a escollida |
| {{key:Shift+left}} / {{key:Shift+right}} | xira a vista un cuarto de volta arredor do eixe vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sae do cubo |

As teclas premidas no cubo quédanse no cubo: non inician ferramentas de ModelCraft.

## Icona de eixes ou nada en troca

Abra {{ui:Configuración}} ({{key:Mod+,}}), a lapela {{ui:ModelCraft}}, e estableza **Indicador de esquina** a {{ui:Cubo de vista}} (o inicial), {{ui:Icona de eixes}} (unha pequena marca X, Y, Z abaixo á esquerda: X en vermello, Y en verde, Z en azul) ou {{ui:Ningún}}. Este navegador recorda a elección. Ver [Axustes de ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft non ten balance: fóra das vistas rectas cara abaixo e cara arriba, arriba na pantalla é sempre arriba no modelo. O cubo e as frechas curvas poden xirar unha vista en planta; non poden inclinar unha vista lateral sobre o seu bordo.
:::
