---
title: Komponente koje se rastežu
summary: Napravite jednu kopiju komponente širom, dubljom ili višom, dok njezini dijelovi zadržavaju svoje veličine: duži stol s istim nogama, viši policni ormar s razmaknutim policama, ograda čiji se stupovi ponavljaju.
keywords: dinamička komponenta, rastegni, promjena veličine komponente, parametarski, imenovane veličine, ponavljanje, niz, noge, police, ograda, pravila, varijable
from: b4c40f43
---

Skaliranje komponente povećava sve u njoj, uključujući noge i prečke. **Rastegni ovu kopiju** mijenja širinu, dubinu ili visinu komponente, dok svaki dio slijedi pravilo: gornja ploča stola raste, a njezine noge zadržavaju debljinu i ostaju na krajevima.

Radi na komponentama sastavljenima od dijelova, odnosno grupama ili komponentama unutar komponente, kao što je svaka stavka u [početnoj knjižnici](topic:starter).

## Rastezanje kopije

1. Odaberite komponentu.
2. U {{ui:Informacije o entitetu}} kliknite {{ui:Rastegni ovu kopiju…}}.
3. Upišite novu {{ui:Širina (crvena)}}, {{ui:Dubina (zelena)}} i {{ui:Visina (plava)}} te kliknite {{ui:Razvlačenje}}.

Mijenja se samo ta kopija: ona postaje zasebna komponenta koja pamti izvornik iz kojeg je nastala. Možete je ponovno rastegnuti u bilo kojem trenutku, a ona se tada izračunava iz izvornika, pa ništa ne odstupa. Ostale kopije izvornika ostaju kakve su bile.

## Pravila

Otvorite komponentu (dvaput kliknite na nju) i odaberite jedan od njezinih dijelova. {{ui:Informacije o entitetu}} prikazuje {{ui:Kad se komponenta rasteže}}, s pravilom duž crvene, zelene i plave osi:

| Pravilo | Što dio radi | Primjer |
|---|---|---|
| {{ui:Razvlačenje}} | Raste zajedno s komponentom; udaljenosti do obiju strana ostaju iste | Gornja ploča stola |
| {{ui:Ostani na početku}} / {{ui:Ostani na kraju}} | Zadržava svoju veličinu i udaljenost do te strane | Noge |
| {{ui:Pomakni proporcionalno}} | Zadržava veličinu; njezina sredina pomiče se proporcionalno | Police, kvaka za vrata |
| {{ui:Skaliraj proporcionalno}} | Proporcionalno se mijenjaju i njezin položaj i veličina | Stepenice stubišta |
| {{ui:Ponavljanje}} | Kopije se ponavljaju, svakih ({{ui:Svakih}}), od mjesta gdje dio počinje do suprotne strane | Stupovi ograde |

{{ui:Automatski}} (zadano) sam izračunava pravilo i prikazuje koje je: {{ui:Razvlačenje}} kad dio obuhvaća komponentu, {{ui:Pomakni proporcionalno}} kad je otprilike u sredini, inače ostaje uz stranu kojoj je bliži.

## Što treba znati

- Oblici dijelova su zajednički, pa je rastegnuta kopija lagana. Uređivanje dijela mijenja ga u svakoj kopiji.
- Rastegnuta kopija ne prati kasnije promjene pravila ili rasporeda izvornika: ponovno je rastegnite da ih uključi.
- Slobodno nacrtane plohe unutar komponente (a ne u dijelu) zadržavaju svoju veličinu; napravite ih dijelom da ih slijede.
- Pravila i izvor iz kojeg je svaka kopija rastegnuta spremaju se u datoteku ModelCraft.
