---
title: Skala med faktorer och krympmån
summary: Skala ett markerat område med en faktor för varje axel kring en punkt du väljer, eller gör ett mönster större med den procent som en gjuten del krymper.
keywords: skala, icke-enhetlig, faktor, procent, töj, krympning, krympmån, gjutning, mönster, gjuteri, tillägg, ändra storlek
from: 37e1bbff
---

Skalverktyget ({{key:S}}) skalar jämnt eller drar i ett handtag för att töja en eller två riktningar. **Skala med faktorer…** (menyn Verktyg, eller gruppen Ändra) är den inskrivna formen: ett tal för var och en av de tre axlarna.

1. Markera kanter, ytor, grupper eller komponenter.
2. Öppna {{ui:Skala med faktorer…}}. Skriv en faktor för röd, grön och blå. En faktor kan vara `1.015`, `101.5%` eller `+1.5%` (och `-2%` för mindre). {{ui:Samma på alla tre axlarna}} kopierar den första till de två andra.
3. Välj vad som **står kvar**: mitten av markeringen, dess lägsta hörn, mitten av dess botten, eller origo.
4. Raden under fälten visar storleken nu och efter. {{ui:Skala}} gör det i ett steg för Ångra.

Axlarna är de för gruppen du har öppen (modellens, på översta nivån). En grupp eller komponent som är vriden blir sned om faktorerna skiljer sig; skala gruppen som innehåller den i stället. Innehållet i en komponent rörs inte, så dess andra kopior förblir som de är.

## Krympmån

En gjuten del krymper när den svalnar, så dess mönster görs större. Under **Krympmån** skriver du procenten för varje axel (ditt gjuteri eller din mönstertillverkare anger den för ditt metall; 1.5 % nedan är bara ett exempel) och trycker på {{ui:Använd som faktorer}}.

- **Procenten själv** gör faktorn till 1 plus procenten: 1.5 % ger 1.015, vad en krympregel markerar.
- **Exakt tillräckligt** gör faktorn till 1 delat med ett minus procenten: 1.5 % ger 1.0152, så gjutgodset blir i delens storlek efter att den krympt så mycket.

Dina senaste procent kommer ihåg i den här webbläsaren.

:::note
Procenten är din att ange: ModelCraft vet inget om ditt metall, din form eller din process.
:::
