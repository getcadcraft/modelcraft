---
title: Del en kant eller kurve i lige dele
summary: Del en linje i lige stykker, eller giv en bue eller cirkel et nyt antal segmenter, med værktøjet Del.
keywords: del, del kant, lige dele, lige segmenter, opdel kant, segmenter, underdel, underdel kanter, buesegmenter, cirkelsegmenter, punkter langs en linje
from: 5c3ce3ed
---

{{ui:Del}} deler en kant i lige dele, med et hjørne ved hver deling. Brug hjørnerne til at fange til, til at starte linjer fra, eller til at skubbe og trække dele af en flade.

## Del en kant

1. Klik på {{ui:Del}} i værktøjslinjen, eller vælg en kant og klik på {{ui:Del…}} i {{ui:Objektinfo}}.
2. Peg på kanten. Markeringer viser, hvor delingerne kommer: over midten af kanten er der to dele; flyt mod en ende for flere.
3. Klik for at dele den i de viste dele. Eller skriv et tal, fx `5` (eller `5s`, eller `/5`), og tryk {{key:Enter}}: den deles med det samme.

Delene forbliver markeret, og det er ét trin i fortryd. En flade, som kanten hører til, bevarer sin form og får de nye hjørner.

## Del en bue eller en cirkel

Peg på et hvilket som helst segment af en bue eller cirkel: den deles som helhed.

- En bue eller cirkel, hvis hjørner intet andet bruger, og som ligger fladt på sin flade, **tegnes igen med så mange segmenter** på den sande bue. Dens ender bliver, hvor de er, og den forbliver én kurve, så du stadig kan vælge den med ét klik og ændre dens radius i {{ui:Objektinfo}}. En 24-sidet cirkel delt i 8 bliver til en ottekant.
- Enhver anden kurve — kanten på en trukket cylinder, en kurve tegnet med {{ui:Kurve}}, en bue med linjer forbundet til sine hjørner — får nye hjørner i lige lange afstande langs den, og intet flyttes.

## Med modelleringstaster

Værktøjet er det samme med modelleringstasterne (Indstillinger › ModelCraft › Taster, eller menustilen Modeler), hvor det står i menuen {{ui:Net}} som {{ui:Underdel kanter}}.

## Ting at vide

- Skrevne tal går fra 2 til 1000; flytning af markøren går op til 100.
- En kurve tegnet med {{ui:Kurve}} beholder sine punkter: efter {{ui:Rediger punkter}} tegnes den igen ud fra dem, og de nye hjørner er væk.

Se også [Tegn flader med linjer, rektangler, cirkler og buer](topic:draw-faces) og [Skriv præcise mål i værdifeltet](topic:value-box).
