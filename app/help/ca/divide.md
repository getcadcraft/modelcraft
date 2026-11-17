---
title: Divideix una aresta o una corba en parts iguals
summary: Parteix una línia en trossos iguals, o dona a un arc o a un cercle un nou nombre de segments, amb l'eina Divideix.
keywords: divideix, divideix aresta, parts iguals, segments iguals, parteix aresta, segments, subdivideix, subdivideix les arestes, segments d'arc, segments de cercle, punts al llarg d'una línia
from: 5c3ce3ed
---

{{ui:Divideix}} talla una aresta en trossos iguals, amb una cantonada a cada tall. Useu les cantonades per ajustar-hi, per començar línies des d'allà, o per empènyer i estirar parts d'una cara.

## Divideix una aresta

1. Feu clic a {{ui:Divideix}} de la barra d'eines, o seleccioneu una aresta i feu clic a {{ui:Divideix…}} dins de {{ui:Informació de l'entitat}}.
2. Apunteu a l'aresta. Les marques mostren on aniran els talls: al mig de l'aresta són dues parts; apropeu-vos a un extrem per obtenir-ne més.
3. Feu clic per dividir-la en les parts que es mostren. O escriviu un número, com ara `5` (o `5s`, o `/5`), i premeu {{key:Enter}}: la divideix a l'instant.

Les parts queden seleccionades, i és un sol pas per desfer. Una cara a la qual pertany l'aresta conserva la seva forma i guanya les cantonades noves.

## Divideix un arc o un cercle

Apunteu a qualsevol segment d'un arc o d'un cercle: es divideix tot l'objecte.

- Un arc o un cercle les cantonades del qual no fa servir res més, i que està estès sobre la seva cara, es **torna a dibuixar amb aquest nombre de segments** sobre l'arc real. Els seus extrems es mantenen on són, i continua essent una sola corba, de manera que encara la podeu seleccionar amb un clic i canviar-ne el radi a {{ui:Informació de l'entitat}}. Un cercle de 24 costats dividit en 8 esdevé un octàgon.
- Qualsevol altra corba —la vora d'un cilindre estirat, una corba dibuixada amb {{ui:Corba}}, un arc amb línies unides a les seves cantonades— rep cantonades noves a longituds iguals al llarg seu, i no es mou res.

## Amb les tecles del modelador

L'eina és la mateixa amb les tecles del modelador (Configuració › ModelCraft › Tecles, o l'estil de menú Modeler), on és al menú {{ui:Malla}} com a {{ui:Subdivideix les arestes}}.

## Coses a tenir en compte

- Els números escrits van de 2 a 1000; en moure el punter es poden obtenir fins a 100.
- Una corba dibuixada amb {{ui:Corba}} conserva els seus punts: després de {{ui:Edita els punts}}, es torna a dibuixar a partir d'ells i les cantonades noves desapareixen.

Vegeu també [Dibuixa cares amb línies, rectangles, cercles i arcs](topic:draw-faces) i [Escriu mides exactes a la caixa de valors](topic:value-box).
