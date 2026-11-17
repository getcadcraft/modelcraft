---
title: Gumawa ng butas sa pader
summary: Gumuhit ng bintana o pinto sa pader na may kapal at itulak ito, para magkaroon ng tunay na butas ang pader.
keywords: window, door, opening, hole, wall, cut, push through, void, thickness, facade, bintana, pinto, butas, pader
from: 6b22f32c
---

Kailangan ng butas ng pader na may dalawang gilid: isang box, o pader na ginawa mo sa pamamagitan ng paghila ng mahaba at manipis na rectangle pataas. Ang nakatayong mag-isang face ay walang maitutulak-hanggang-sa.

## Gumawa ng pader para sanayin

1. Pindutin ang {{key:R}}, i-click ang isang sulok sa lupa at i-type ang `6m,0.3m` (o `20',12"`), saka {{key:Enter}}.
2. Pindutin ang {{key:P}}, i-click ang rectangle at i-type ang `3m` (o `10'`), saka {{key:Enter}}.

Mayroon ka nang pader na 300 mm (12 in) ang kapal.

## Iguhit ang butas

1. Umikot sa view para makita ang mahabang gilid ng pader.
2. Pindutin ang {{key:R}}.
3. Ituro ang face ng pader, saka i-click kung saan pupunta ang ibabang sulok ng bintana. Sinasabi ng tip na "On face".
4. I-type ang lapad at taas ng bintana, gaya ng `1.2m,1.5m` (o `4',5'`), at pindutin ang {{key:Enter}}.

   Ang bintana ay sariling face sa loob ng face ng pader, na ngayon ay may butas sa paligid nito.

Para ilagay ito sa eksaktong distansya mula sa sulok at sa sahig, gumamit muna ng [guides](topic:guides-measure): gamit ang {{ui:Tape}}, i-drag ang mga guide line palabas mula sa ilalim at dulong gilid ng pader, saka simulan ang rectangle kung saan nagtatagpo ang dalawang guide (sinasabi ng tip na "On guide").

## Itulak ito

1. Pindutin ang {{key:P}}.
2. I-click ang face ng bintana at itulak ito papasok sa pader.
3. Galawin hanggang huminto ito sa back face, saka i-click. O i-type ang kapal ng pader, `300` (o `12`), at pindutin ang {{key:Enter}}.

   Hihinto ang ModelCraft sa face sa likod at bubuksan ito: magkakaroon ng butas na tuwid sa pader, na may apat na side face (jamb, head at sill) na nakalinya dito. Tinatawag pa rin ng {{ui:Entity info}} na saradong solid ang pader kapag naka-group ito.

Kapag itinulak mo nang mas kaunti sa buong kapal, uukit ka ng recess sa halip na butas.

## Pinto

Gumuhit ng rectangle na nagsisimula sa ibabang gilid ng face ng pader (sinasabi ng tip na "On edge" o "Endpoint"), para umabot ang butas sa sahig. Itulak ito sa parehong paraan.

## Maraming bintana na pareho ang laki

1. Gawin ang unang butas.
2. Para sa mga susunod, iguhit ang mga rectangle, saka i-double-click ang bawat isa gamit ang {{ui:Push/pull}}: inuulit ng double-click ang huling distansya. Tingnan ang [Push and pull](topic:push-pull#repeat-the-last-distance).

## Kung hindi ito tumagos

- Dapat **nasa** face ng pader ang rectangle. Kung iginuhit ito sa hangin sa harap nito, hiwalay itong face: i-undo at iguhit muli, simula sa face.
- Huminto ang pagtulak sa unang face sa likod ng butas. Kung may iba pang nakaharang sa loob ng pader (isang panloob na face na naiwan mula sa dating pagguhit), hihinto ito roon; burahin ang mga edge ng face na iyon at subukan muli.
- Hindi pinuputol ang geometry na nasa hiwalay na group. Buksan ang group na naglalaman ng pader at iguhit ang butas sa loob nito.
