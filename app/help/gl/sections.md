---
title: "Planos de sección: abrir o modelo por un corte"
summary: Coloque un plano de sección para ver o interior do modelo, deslíceo, inviértao ou desactive o corte.
keywords: sección, plano de sección, corte de sección, corte, recorte, interior, planta, rebanada, sección transversal
from: 28c3a645
---

Un plano de sección corta o modelo para que poida ver e traballar dentro del: a planta dunha casa, o interior dun armario. O modelo non se cambia; o corte é só unha vista.

## Colocar un

1. Faga clic en {{ui:Sección}} no grupo {{ui:Cámara}}.
2. Faga clic nunha cara. O plano colócase nesa cara, con catro frechas que apuntan cara a vostede.

   Faga clic lonxe de calquera cara para un plano perpendicular á dirección na que mira máis. Prema antes unha tecla de frecha para poñelo perpendicular ao vermello ({{key:Right}}), ao verde ({{key:Left}}) ou ao azul ({{key:Up}}).

O lado ao que apuntan as frechas é o que se **retírase**. Un plano colocado nunha cara non corta nada aínda: deslíceo cara ao interior do modelo.

## Deslizalo, inverterlo, desactivalo

Faga clic no contorno do plano para seleccionalo. En {{ui:Información da entidade}}:

- {{ui:Ao longo das súas frechas}} indica onde está. Escriba unha nova distancia e prema {{key:Enter}} para deslizalo polo modelo; escribir `-1m` nun plano colocado nunha cara frontal desprázao 1 m cara ao interior do modelo.
- {{ui:Inverter}} xira as frechas, así que se retira o outro lado.
- {{ui:Activo (corta o modelo)}}: só un plano corta á vez. Marque a caixa doutro plano, ou coloque un novo, e ese será o que corte.
- Cambie o nome en {{ui:Nome}}; elimíneo con {{key:Delete}} ou coa {{ui:Goma}}.

Onde o plano atravesa un sólido pechado, o corte énchese dunha cor escura. A xeometría que non está pechada (unha soa cara, unha caixa aberta) córtase pero non se enche.

## Mostrar e ocultar

En {{ui:Vistas}}:

- {{ui:Mostrar planos de sección}} oculta os contornos e as frechas dos planos (o corte queda).
- {{ui:Mostrar cortes de sección}} desactiva o corte e amosa o modelo completo, sen eliminar os planos.

A [vista de presentación](topic:styles-shadows#presentation-view) tamén oculta os contornos.

## Cousas que hai que saber

- O que se retira co corte non se pode facer clic nin encaixar, así que pode debuxar sobre o que mostra o corte.
- Os planos de sección, cal está activo e os dous interruptores gárdanse no ficheiro ModelCraft. Cada cambio é un paso de desfacer.
- As exportacións conteñen sempre o modelo completo: unha sección é unha vista, non unha edición.
