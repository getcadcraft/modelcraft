---
title: Podijeli brid ili krivulju na jednake dijelove
summary: Podijelite liniju na jednake dijelove ili dajte luku ili kružnici novi broj segmenata alatom Podijeli.
keywords: podijeli, podijeli brid, jednaki dijelovi, jednaki segmenti, podijeli rub, segmenti, podijeli bridove, segmenti luka, segmenti kružnice, točke duž linije
from: 5c3ce3ed
---

{{ui:Podijeli}} reže brid na jednake dijelove, s kutom na svakom rezu. Kutove koristite za hvatanje, za početak linija ili za potiskivanje i povlačenje dijelova plohe.

## Podijelite brid

1. Kliknite {{ui:Podijeli}} na alatnoj traci ili odaberite brid i kliknite {{ui:Podijeli…}} u {{ui:Informacije o entitetu}}.
2. Pokažite na brid. Oznake pokazuju gdje će biti rezovi: nad sredinom brida nastaju dva dijela; pomaknite se prema kraju za više dijelova.
3. Kliknite da ga podijelite na prikazane dijelove. Ili upišite broj, npr. `5` (ili `5s`, ili `/5`), i pritisnite {{key:Enter}}: podijeli se odmah.

Dijelovi ostaju odabrani i to je jedan korak poništavanja. Ploha kojoj brid pripada zadržava svoj oblik i dobiva nove kutove.

## Podijelite luk ili kružnicu

Pokažite na bilo koji segment luka ili kružnice: dijeli se kao cjelina.

- Luk ili kružnica čijim kutovima ništa drugo ne koristi, a leže ravno na svojoj plohi, **ponovno se crtaju s tolikim brojem segmenata** na stvarnom luku. Krajevi ostaju na mjestu, a ostaje jedna krivulja, pa je i dalje možete odabrati jednim klikom i promijeniti radijus u {{ui:Informacije o entitetu}}. Kružnica s 24 stranice podijeljena na 8 postaje osmerokut.
- Svaka druga krivulja (rub izvučenog valjka, krivulja nacrtana s {{ui:Krivulja}}, luk s linijama spojenima na kutove) dobiva nove kutove na jednakim duljinama duž sebe, a ništa se ne miče.

## S prečacima Modeler

Alat je isti s prečacima Modeler (Postavke › ModelCraft › Prečaci, ili stil izbornika Modeler), gdje je u izborniku {{ui:Mreža}} kao {{ui:Podijeli bridove}}.

## Napomene

- Upisani brojevi idu od 2 do 1000; pomicanje pokazivača daje do 100.
- Krivulja nacrtana s {{ui:Krivulja}} zadržava svoje točke: nakon {{ui:Uredi točke}} ponovno se crta iz njih, a novi kutovi nestaju.

Pogledajte također [Crtanje ploha linijama, pravokutnicima, kružnicama i lukovima](topic:draw-faces) i [Upisivanje točnih veličina u okvir za vrijednost](topic:value-box).
