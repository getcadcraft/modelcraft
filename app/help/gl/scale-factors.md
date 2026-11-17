---
title: Escalar por factores e marxe de contracción
summary: Escale unha selección por un factor para cada eixe arredor dun punto que escolla, ou faga un patrón máis grande segundo a porcentaxe que encolle unha peza fundida.
keywords: escalar, non uniforme, factor, porcentaxe, estirar, contracción, encoller, patrón, fundición, marxe, redimensionar
from: 37e1bbff
---

A ferramenta Escalar ({{key:S}}) escala por igual ou arrastra un agarradeiro para estirar unha ou dúas direccións. **{{ui:Escalar por factores…}}** (menú Ferramentas, ou o grupo Modificar) é a forma escrita: un número para cada un dos tres eixes.

1. Seleccione arestas, caras, grupos ou compoñentes.
2. Abra {{ui:Escalar por factores…}}. Escriba un factor para o vermello, o verde e o azul. Un factor pode ser `1.015`, `101.5%` ou `+1.5%` (e `-2%` para reducir). {{ui:O mesmo nos tres eixos}} copia o primeiro nos outros dous.
3. Escolla o que **non se move**: o centro da selección, a súa esquina máis baixa, o centro da súa base ou a orixe.
4. A liña debaixo dos campos amosa o tamaño agora e despois. {{ui:Escalar}} fai a operación nun só paso de desfacer.

Os eixes son os do grupo que ten aberto (os do modelo, no nivel superior). Un grupo ou compoñente que está xirado sae cizallado se os seus factores difiren; escale no seu lugar o grupo que o contén. O contido dun compoñente non se toca, así que as súas outras copias quedan como están.

## Marxe de contracción

Unha peza fundida encolle ao arrefriar, así que o seu patrón faise máis grande. Baixo **Marxe de contracción** escriba a porcentaxe para cada eixe (a súa fundición ou o seu fabricante de patróns dáa para o seu metal; o 1.5 % de abaixo é só un exemplo) e prema {{ui:Usar como factores}}.

- **A propia porcentaxe** fai o factor 1 máis a porcentaxe: 1.5 % dá 1.015, o que marca unha regra de contracción.
- **Xusto o necesario** fai o factor 1 dividido por (1 menos a porcentaxe): 1.5 % dá 1.0152, así que a fundición sae co tamaño da peza despois de encoller esa cantidade.

As súas últimas porcentaxes recórdanse neste navegador.

:::note
A porcentaxe é cousa súa: ModelCraft non sabe nada do seu metal, do molde nin do proceso.
:::
