---
title: Skaler med faktorer og krympetillegg
summary: Skaler et utvalg med en faktor for hver akse om et punkt du velger, eller gjør et mønster større med den prosenten en støpt del krymper.
keywords: skaler, ikke-jevn, faktor, prosent, strekk, krymping, krympe, støping, mønster, støperi, tillegg, endre størrelse
from: 37e1bbff
---

Skaleringsverktøyet ({{key:S}}) skalerer jevnt, eller drar et håndtak for å strekke én eller to retninger. **Skaler med faktorer…** (Verktøy-menyen, eller Endre-gruppen) er den skrevne formen: ett tall for hver av de tre aksene.

1. Velg kanter, flater, grupper eller komponenter.
2. Åpne {{ui:Skaler med faktorer…}}. Skriv en faktor for rød, grønn og blå. En faktor kan være `1.015`, `101.5%` eller `+1.5%` (og `-2%` for mindre). {{ui:Lik på alle tre akser}} kopierer den første til de to andre.
3. Velg hva som **blir stående**: midten av utvalget, det nederste hjørnet, midten av bunnen, eller origo.
4. Linjen under feltene viser størrelsen nå og etter. {{ui:Skaler}} gjør det i ett trinn i angre.

Aksene er de til gruppen du har åpen (modellens, på toppnivå). En gruppe eller komponent som er vridd, kommer ut skjev hvis faktorene er ulike; skaler gruppen som holder den i stedet. Innholdet i en komponent røres ikke, så de andre kopiene forblir som de er.

## Krympetillegg

En støpt del krymper når den kjøler seg ned, så mønsteret lages større. Under **Krympetillegg** skriver du prosenten for hver akse (støperiet eller mønstermakeren oppgir den for ditt metall; 1.5 % nedenfor er bare et eksempel), og trykker {{ui:Bruk som faktorer}}.

- **Prosenten selv** gjør faktoren til 1 pluss prosenten: 1.5 % gir 1.015, det en krympelinjal markerer.
- **Akkurat nok** gjør faktoren til 1 delt på én minus prosenten: 1.5 % gir 1.0152, slik at støpegodset kommer ut i delens størrelse etter at det har krympet så mye.

Dine siste prosenter huskes i denne nettleseren.

:::note
Prosenten er din å oppgi: ModelCraft vet ingenting om metallet, formen eller prosessen din.
:::
