---
title: Komponente koje se istežu
summary: Napravi jednu kopiju komponente širu, dublju ili višu, dok njeni delovi zadržavaju svoje veličine: duži sto sa istim nogama, viša polica sa razmaknutim policama, ograda čiji se stubovi ponavljaju.
keywords: dinamička komponenta, istezanje, promena veličine komponente, parametarski, imenovane veličine, ponavljanje, niz, noge, police, ograda, pravila, promenljive
from: b4c40f43
---

Skaliranje komponente čini sve u njoj većim, uključujući noge i letve. **Istegni ovu kopiju** menja širinu, dubinu ili visinu komponente, a svaki deo se ravna prema pravilu: ploča stola raste, a noge zadržavaju svoju debljinu i ostaju na krajevima.

Ovo radi na komponentama sastavljenim od delova, to jest na grupama ili komponentama unutar komponente, kao što je svaka stvar iz [početne biblioteke](topic:starter).

## Istegni kopiju

1. Izaberi komponentu.
2. U {{ui:Podaci o entitetu}} klikni {{ui:Istegni ovu kopiju…}}.
3. Unesi novu {{ui:Širinu (crvena)}}, {{ui:Dubinu (zelena)}} i {{ui:Visinu (plava)}}, pa klikni {{ui:Istezanje}}.

Menja se samo ta kopija: ona postaje komponenta za sebe, koja pamti original iz kog je nastala. Istegni je ponovo kad god želiš, i računa se iz originala, pa ništa ne odstupa. Ostale kopije originala ostaju kakve su bile.

## Pravila

Otvori komponentu (dvaput klikni na nju) i izaberi jedan od njenih delova. {{ui:Podaci o entitetu}} prikazuje {{ui:Kada se komponenta istegne}}, sa pravilom duž crvene, zelene i plave ose:

| Pravilo | Šta deo radi | Primer |
|---|---|---|
| {{ui:Istezanje}} | Raste zajedno sa komponentom; njegova rastojanja do obe strane ostaju | Ploča stola |
| {{ui:Ostani na početku}} / {{ui:Ostani na kraju}} | Zadržava svoju veličinu i rastojanje do te strane | Noge |
| {{ui:Pomeri srazmerno}} | Zadržava veličinu; njegova sredina se pomera srazmerno | Police, ručka vrata |
| {{ui:Razmeri srazmerno}} | I mesto i veličina se srazmerno menjaju | Stepenice stepeništa |
| {{ui:Ponavljanje}} | Kopije njega, na svakih {{ui:Svaki}}, od mesta gde počinje do dalje strane | Stubovi ograde |

{{ui:Automatski}} (početno) sam izračuna i pokaže koje pravilo važi: {{ui:Istezanje}} kad deo prelazi preko cele komponente, {{ui:Pomeri srazmerno}} kad je otprilike u sredini, a inače ostaje uz stranu kojoj je bliži.

## Na šta treba paziti

- Oblici delova su zajednički, pa je istegnuta kopija laka. Izmena dela menja ga u svakoj kopiji.
- Istegnuta kopija ne prati kasnije promene pravila ili rasporeda originala: istegni je ponovo da bi ih uključila.
- Površi nacrtane slobodno u komponenti (a ne u delu) zadržavaju veličinu; napravi ih delom da bi ih pratile.
- Pravila i to iz čega je svaka kopija istegnuta čuvaju se u ModelCraft datoteci.
