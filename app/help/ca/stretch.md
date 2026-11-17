---
title: Components que s'estiren
summary: Feu un copia d'un component més ampla, més profunda o més alta mentre les seves parts conserven la mida: una taula més llarga amb les mateixes cames, una estanteria més alta amb els prestatges separats, una barana amb pilars que es repeteixen.
keywords: component dinàmic, estirar, redimensiona el component, paramètric, mides amb nom, repeteix, matriu, cames, prestatges, barana, regles, variables
from: b4c40f43
---

Escalar un component fa més gran tot el que hi ha dins, les cames i les llates incloses. **Estira aquesta còpia** canvia l'amplada, la profunditat o l'alçada d'un component, i cada part segueix una regla: el tauler d'una taula creix, les seves cames conserven el gruix i es mantenen als extrems.

Funciona amb components fets de parts, és a dir, grups o components dins del component, com passa amb tot element de la [biblioteca inicial](topic:starter).

## Estira una còpia

1. Seleccioneu el component.
2. A {{ui:Informació de l'entitat}}, feu clic a {{ui:Estira aquesta còpia…}}.
3. Escriviu la nova {{ui:Amplada (vermell)}}, {{ui:Profunditat (verd)}} i {{ui:Alçada (blau)}}, i feu clic a {{ui:Estirament}}.

Només canvia aquella còpia: esdevé un component propi, que recorda l'original del qual prové. Torneu-la a estirar quan vulgueu, i es recalcula a partir de l'original, de manera que res no es desvia. Les altres còpies de l'original no canvien.

## Les regles

Obriu el component (feu-hi doble clic) i seleccioneu una de les seves parts. {{ui:Informació de l'entitat}} mostra {{ui:Quan el component s'estira}}, amb una regla al llarg del vermell, el verd i el blau:

| Regla | Què fa la part | Per exemple |
|---|---|---|
| {{ui:Estirament}} | Creix amb el component; les seves distàncies als dos costats es mantenen | El tauler d'una taula |
| {{ui:Es queda a l'inici}} / {{ui:Es queda al final}} | Manté la seva mida i la seva distància a aquell costat | Les cames |
| {{ui:Mou en proporció}} | Manté la seva mida; el seu centre es mou en proporció | Prestatges, una maneta de porta |
| {{ui:Escala en proporció}} | La seva posició i la seva mida es fan en proporció | Els graons d'una escala |
| {{ui:Repeteix}} | Còpies seves, cada {{ui:Cada}} distància, des d'on comença fins al costat llunyà | Els pilars d'una barana |

{{ui:Automàtica}} (l'inici) en calcula una i mostra quina: {{ui:Estirament}} quan la part abraça tot el component, {{ui:Mou en proporció}} quan és més o menys al mig, i en cas contrari es queda al costat més proper.

## Coses a tenir en compte

- Les formes pròpies de les parts es comparteixen, de manera que una còpia estirada és lleugera. Editar una part la canvia a totes les còpies.
- Una còpia estirada no segueix els canvis posteriors de les regles o de la disposició de l'original: torneu-la a estirar per incorporar-los.
- Les cares dibuixades soltes dins del component (no dins d'una part) conserven la seva mida; feu-ne una part perquè en segueixin els canvis.
- Les regles i l'original del qual ha estat estirada cada còpia es desen al fitxer de ModelCraft.
