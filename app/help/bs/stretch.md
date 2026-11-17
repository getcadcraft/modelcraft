---
title: Komponente koje se rastežu
summary: Napravi jednu kopiju komponente širu, dublju ili višu, dok njeni dijelovi zadržavaju svoje veličine: duži sto sa istim nogama, višu policu za knjige s razmaknutim policama, ogradu čiji se stubovi ponavljaju.
keywords: dinamička komponenta, rastezanje, promjena veličine komponente, parametarski, imenovane veličine, ponavljanje, niz, noge, police, ograda, pravila, varijable
from: b4c40f43
---

Skaliranje komponente čini sve u njoj većim, uključujući noge i letve. **Rastegni ovu kopiju** mijenja širinu, dubinu ili visinu komponente, dok se svaki dio pridržava pravila: ploča stola se produžava, a njene noge zadržavaju debljinu i ostaju na krajevima.

Radi na komponentama sastavljenim od dijelova, odnosno grupa ili komponenti unutar komponente, kao i svaka stvar iz [početne biblioteke](topic:starter).

## Rastegni kopiju

1. Odaberi komponentu.
2. U {{ui:Podaci o entitetu}} klikni {{ui:Rastegni ovu kopiju…}}.
3. Upiši nove vrijednosti za {{ui:Širina (crvena)}}, {{ui:Dubina (zelena)}} i {{ui:Visina (plava)}}, pa klikni {{ui:Rastegni}}.

Mijenja se samo ta kopija: postaje vlastita komponenta koja pamti original iz kojeg je nastala. Rastegni je ponovo u bilo kojem trenutku, i ona se iznova izračunava iz originala, pa ništa ne odstupa. Ostale kopije originala ostaju kakve su bile.

## Pravila

Otvori komponentu (dvaput klikni na nju) i odaberi jedan od njenih dijelova. {{ui:Podaci o entitetu}} prikazuje {{ui:Kad se komponenta rasteže}}, s pravilom duž crvene, zelene i plave ose:

| Pravilo | Šta dio radi | Primjer |
|---|---|---|
| {{ui:Rastegni}} | Raste s komponentom; udaljenosti do obje strane ostaju iste | Ploča stola |
| {{ui:Ostani na početku}} / {{ui:Ostani na kraju}} | Zadržava veličinu i udaljenost do te strane | Noge |
| {{ui:Pomjeri proporcionalno}} | Zadržava veličinu; sredina joj se pomjera proporcionalno | Police, kvaka na vratima |
| {{ui:Skaliraj proporcionalno}} | I njegovo mjesto i veličina se mijenjaju proporcionalno | Stepenice |
| {{ui:Ponavljanje}} | Kopije njega, na razmacima ({{ui:Svaki}}), od mjesta gdje počinje do suprotne strane | Stubovi ograde |

{{ui:Automatski}} (početna vrijednost) sam odredi i prikaže koje: {{ui:Rastegni}} kad dio obuhvata komponentu, {{ui:Pomjeri proporcionalno}} kad je otprilike u sredini, inače ostaje uz stranu kojoj je bliži.

## Šta treba znati

- Oblici dijelova se dijele, pa je rastegnuta kopija laka. Izmjena dijela mijenja ga u svakoj kopiji.
- Rastegnuta kopija ne prati kasnije izmjene pravila ili rasporeda originala: rastegni je ponovo da ih uvrsti.
- Površine nacrtane slobodno u komponenti (a ne u dijelu) zadržavaju veličinu; napravi od njih dio da ih prate.
- Pravila i to iz čega je svaka kopija rastegnuta čuvaju se u ModelCraft datoteci.
