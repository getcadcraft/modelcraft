---
title: Skalér efter faktorer og krympningstillæg
summary: Skalér et valg efter en faktor for hver akse om et punkt, du vælger, eller gør et mønster større med den procent, en støbt del krymper.
keywords: skalér, ikke-ensartet, faktor, procent, stræk, krympning, krympe, støbning, mønster, støberi, tillæg, ændr størrelse
from: 37e1bbff
---

Skaleringsværktøjet ({{key:S}}) skalerer jævnt eller trækker i et greb for at strække en eller to retninger. **Skalér efter faktorer…** (menuen Værktøjer, eller gruppen Ændr) er den skrevne form: et tal for hver af de tre akser.

1. Vælg kanter, flader, grupper eller komponenter.
2. Åbn {{ui:Skalér efter faktorer…}}. Skriv en faktor for rød, grøn og blå. En faktor kan være `1.015`, `101.5%` eller `+1.5%` (og `-2%` for mindre). {{ui:Ens på alle tre akser}} kopierer den første til de to andre.
3. Vælg hvad der **bliver stående**: midten af valget, dets nederste hjørne, midten af dets bund eller origo.
4. Linjen under felterne viser størrelsen nu og efter. {{ui:Skalér}} udfører det i ét fortrydelsestrin.

Akserne er dem for den gruppe, du har åben (modellens, på øverste niveau). En gruppe eller komponent, der er drejet, bliver skævvredet, hvis faktorerne er forskellige; skalér i stedet den gruppe, der holder den. Indholdet af en komponent røres ikke, så dens andre kopier forbliver, som de er.

## Krympningstillæg

En støbt del krymper, når den køler af, så dens mønster laves større. Under **Krympningstillæg** skriv procenten for hver akse (dit støberi eller din mønstermager oplyser den for dit metal; 1.5 % nedenfor er kun et eksempel) og tryk på {{ui:Brug som faktorerne}}.

- **Procenten selv** gør faktoren til 1 plus procenten: 1.5 % giver 1.015, hvad en krympelineal markerer.
- **Præcis nok** gør faktoren til 1 divideret med én minus procenten: 1.5 % giver 1.0152, så støbningen kommer ud i delens størrelse, efter den har krympet så meget.

Dine sidste procenter huskes i denne browser.

:::note
Procenten er din at angive: ModelCraft kender intet til dit metal, din form eller din proces.
:::
