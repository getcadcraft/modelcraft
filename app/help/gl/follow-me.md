---
title: Seguirme: barrer unha cara ao longo dunha traxectoria
summary: Crear tubaxes, cables, pasamáns, molduras e aros barrendo unha cara ao longo de arestas, arcos ou unha curva.
keywords: seguirme, barrer, traxectoria, tubaxe, cable, tubo, pasamán, moldura, canleta, aro, toro, torneado, extrudir ao longo de
from: ec7b3839
---

{{ui:Follow me}} move unha cara ao longo dunha traxectoria e constrúe o sólido polo que pasa. A cara conserva a súa forma e mantense perpendicular á traxectoria, e en cada esquina da traxectoria as pezas xúntanse nun inglete limpo.

## Facer un cable

1. Debuxe a traxectoria: unha {{ui:Curve}} que pase polos puntos que atravesa o cable (pode subir e baixar), ou {{ui:Line}}s e {{ui:Arc}}s unidos extremo con extremo.
2. No inicio da traxectoria, debuxe a sección do cable: un {{ui:Circle}} pequeno atravesado sobre a traxectoria. Comece o círculo no punto final da traxectoria e xírelo para que mire ao longo dela; ou debúxeo sobre unha cara que cruce a traxectoria alí.
3. Seleccione a traxectoria (un clic selecciona unha curva ou arco completos; {{key:Ctrl}}+clic engade máis arestas).
4. Prema {{ui:Follow me}} no grupo {{ui:Modify}}, e logo prema o círculo.

O tubo é un sólido pechado, con lados suaves.

## Sen seleccionar antes a traxectoria

Prema {{ui:Follow me}}, prema a cara, e logo prema calquera aresta da traxectoria. A traxectoria é a cadea de arestas que pasa por esa aresta, ata o punto onde se xuntan tres ou máis arestas.

## Que cumpre saber

- **Traxectorias pechadas** (un círculo, unha curva pechada, o contorno dun rectángulo) fan un aro: a cara gástase e o aro péchase sobre si mesmo. Debuxe un círculo no chan como traxectoria e un círculo pequeno de pé atravesado sobre ela para unha rosca.
- **Fóra da traxectoria:** a cara non ten que tocar a traxectoria. Un perfil debuxado ao lado dunha traxectoria barre ao seu lado, como unha moldura ao longo da parte superior dun muro.
- **A traxectoria non pode ramificarse** e ten que ser unha cadea conectada. ModelCraft avísao cando non o é.
- **Unha cara tendida ao longo da traxectoria** (no mesmo plano que a primeira aresta da traxectoria) non se pode barrer: xírea para que cruce a traxectoria.
- Trátase dun único paso de desfacer.
