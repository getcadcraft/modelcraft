---
title: Podijeli ivicu ili krivu na jednake dijelove
summary: Podijeli liniju na jednake dijelove ili daj luku ili krugu novi broj segmenata alatom Podijeli.
keywords: podijeli, podijeli ivicu, jednaki dijelovi, jednaki segmenti, razdvoji ivicu, segmenti, podijeli ivice, segmenti luka, segmenti kruga, tačke duž linije
from: 5c3ce3ed
---

{{ui:Podijeli}} presijeca ivicu na jednake dijelove, s uglom na svakom mjestu presjeka. Koristi uglove za hvatanje, za početak linija ili za guranje i povlačenje dijelova plohe.

## Podijeli ivicu

1. Klikni {{ui:Podijeli}} na alatnoj traci, ili odaberi ivicu i klikni {{ui:Podijeli…}} u {{ui:Podaci o entitetu}}.
2. Pokaži na ivicu. Oznake pokazuju gdje će biti presjeci: nad sredinom ivice dijele se na dva dijela; pomjeri prema kraju za više dijelova.
3. Klikni da je podijeliš na prikazane dijelove. Ili unesi broj, kao `5` (ili `5s`, ili `/5`), i pritisni {{key:Enter}}: odmah se dijeli.

Dijelovi ostaju odabrani, i to je jedan korak poništavanja. Ploha kojoj ivica pripada zadržava svoj oblik i dobija nove uglove.

## Podijeli luk ili krug

Pokaži na bilo koji segment luka ili kruga: dijeli se kao cjelina.

- Luk ili krug čiji uglove nijedna druga stvar ne koristi, a leži ravno na svojoj plohi, **ponovo se crta sa tolikim brojem segmenata** na pravom luku. Krajevi ostaju gdje jesu, i dalje je jedna kriva, pa je još uvijek možeš odabrati jednim klikom i promijeniti poluprečnik u {{ui:Podaci o entitetu}}. Krug sa 24 strane podijeljen na 8 postaje osmougao.
- Svaka druga kriva — obod izvučenog cilindra, kriva nacrtana alatom {{ui:Kriva}}, luk sa linijama spojenim na svoje uglove — dobija nove uglove na jednakim dužinama duž sebe, a ništa se ne pomjera.

## Sa tipkama modelera

Alat je isti i sa tipkama modelera (Postavke › ModelCraft › Tipke, ili stil menija Modeler), gdje se nalazi u meniju {{ui:Mreža}} kao {{ui:Podijeli ivice}}.

## Šta treba znati

- Upisani brojevi idu od 2 do 1000; pomjeranje pokazivača daje do 100.
- Kriva nacrtana alatom {{ui:Kriva}} zadržava svoje tačke: nakon {{ui:Uredi tačke}}, ponovo se crta iz njih, a novi uglovi nestaju.

Vidi i [Crtanje ploha linijama, pravougaonicima, krugovima i lukovima](topic:draw-faces) i [Unesi tačne dimenzije u polje za vrijednost](topic:value-box).
