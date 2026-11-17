---
title: Podeli ivicu ili krivu na jednake delove
summary: Podeli liniju na jednake delove ili dodeli luku ili krugu novi broj segmenata alatkom Podeli.
keywords: podeli, podeli ivicu, jednaki delovi, jednaki segmenti, razdvoji ivicu, segmenti, podeli ivice, segmenti luka, segmenti kruga, tačke duž linije
from: 5c3ce3ed
---

{{ui:Podeli}} seče ivicu na jednake delove, pri čemu se na svakom mestu reza nalazi ugao. Uglove koristi za hvatanje, za početak linija ili za guranje i vučenje delova površine.

## Podela ivice

1. Klikni {{ui:Podeli}} na traci sa alatkama ili izaberi ivicu i klikni {{ui:Podeli…}} u {{ui:Podaci o entitetu}}.
2. Pokaži pokazivačem na ivicu. Oznake pokazuju gde će biti rezovi: nad sredinom ivice to su dva dela; pomeri ka kraju za više delova.
3. Klikni da bi je podelio na prikazane delove. Ili ukucaj broj, na primer `5` (ili `5s`, ili `/5`), i pritisni {{key:Enter}}: podela se odmah izvršava.

Delovi ostaju izabrani, i to je jedan korak opozivanja. Površina kojoj ivica pripada zadržava svoj oblik i dobija nove uglove.

## Podela luka ili kruga

Pokaži na bilo koji segment luka ili kruga: podeli se kao celina.

- Luk ili krug čiji uglovi ništa drugo ne koristi, koji leži ravno na svojoj površini, **ponovo se crta sa tolikim brojem segmenata** na pravom luku. Krajevi ostaju na mestu, i ostaje jedna kriva, pa ga i dalje možeš izabrati jednim klikom i promeniti mu poluprečnik u {{ui:Podaci o entitetu}}. Krug sa 24 strane podeljen na 8 postaje osmougao.
- Svaka druga kriva (obod izvučenog cilindra, kriva nacrtana alatkom {{ui:Kriva}}, luk sa linijama spojenim na svoje uglove) dobija nove uglove na jednakim dužinama duž sebe, a ništa se ne pomera.

## Sa tasterima za modelovanje

Alat je isti i sa tasterima za modelovanje (Podešavanja › ModelCraft › Tasteri, ili stil menija Modeler), gde se nalazi u meniju {{ui:Mreža}} kao {{ui:Podeli ivice}}.

## Stvari koje treba znati

- Brojevi uneseni kucanjem idu od 2 do 1000; pomeranje pokazivača daje do 100.
- Kriva nacrtana alatkom {{ui:Kriva}} zadržava svoje tačke: posle {{ui:Uredi tačke}} ponovo se crta iz njih, a novi uglovi nestaju.

Pogledaj i [Crtanje površina linijama, pravougaonicima, krugovima i lukovima](topic:draw-faces) i [Ukucaj tačne dimenzije u polju za vrednost](topic:value-box).
