---
title: Kotiraj i promijeni veličinu onoga što si nacrtao
summary: Postavi kote između uglova, na lukovima i krugovima ili između dvije ivice; upiši novu dužinu da promijeniš veličinu modela. Ponovo upiši dužinu ivice ili širinu, dubinu i visinu grupe u Podaci o entitetu.
keywords: kota, kote, promjena veličine, promijeni veličinu, uredi veličinu, dužina, širina, dubina, visina, rastezanje, kota koja upravlja, označavanje, mjerenje, naknadno, poluprečnik, prečnik, ugao, kutni, luk, krug, R, Ø
from: a1f815ec
---

Veličine u ModelCraft-u nisu fiksne kad je nešto nacrtano. Kota prikazuje dužinu na modelu, a upisivanje nove dužine u nju mijenja veličinu modela da se poklopi. Takođe možeš ponovo upisati dužinu ivice, ili širinu, dubinu i visinu grupe, u {{ui:Podaci o entitetu}}.

## Postavi kotu

1. Pritisni {{key:D}}, ili klikni {{ui:Kota}} na traci sa alatima.
2. Klikni ugao od kojeg mjeriš. Hvata se za uglove, sredine i ivice, kao i pri crtanju.
3. Klikni drugi ugao.

   Ili klikni jednom na **ivicu** (savjet kaže "Na ivici") da kotiraš cijelu ivicu jednim klikom.
4. Pomjeri pokazivač do mjesta gdje treba da ide linija kote, pa klikni. Možeš i upisati pomak, npr. `0.5m`, i pritisnuti {{key:Enter}}.

   Linija kote ostaje vodoravna za vodoravnu ivicu, osim ako gledaš s bočne strane. Za uspravnu ivicu ostaje u uspravnoj ravni koja ti najbolje odgovara.

Statusna traka kaže "Kota 4 m." Kote prikazuju dužinu u jedinici modela i ažuriraju se kad promijeniš jedinicu na biraču.

## Poluprečnik, prečnik i ugao

Ista alatka {{ui:Kota}} kotira zaobljene stvari i uglove:

- **Luk:** klikni luk. Savjet kaže {{ui:Poluprečnik}}. Pomjeri pokazivač gdje treba da ide tekst i klikni: kota glasi **R 1.5 m**.
- **Krug:** klikni krug. Dobijaš **prečnik** (**Ø 3 m**) s linijom preko kruga kroz njegov centar. Poligoni rade isto, s uglovima na krugu.
- **Ugao između dvije ivice:** klikni jednu ivicu, zatim klikni drugu ivicu koja je spaja u uglu (dok si iznad nje, savjet kaže {{ui:Ugao između ivica}}). Zatim pomjeri unutar ugla koji želiš i klikni. Unutar ugla dobijaš ugao između ivica; pomjeri na jednu stranu i dobijaš ugao pored njega (npr. 150° umjesto 30°). Koliko daleko od ugla klikneš određuje gdje ide luk; ili upiši to rastojanje.

Da prebaciš poluprečnik u prečnik ili nazad, odaberi kotu i izaberi u {{ui:Prikaži kao}} u {{ui:Podaci o entitetu}}.

**Promjena veličine pomoću njih:** upiši novi poluprečnik ili prečnik odmah nakon postavljanja, ili ga kasnije odaberi i upiši. Luk ili krug zadržava svoj centar i mijenja veličinu; lice koje omeđuje (disk, kraj utora) mijenja se s njim. Dvije stvari samo mjere:

- **Kota ugla** nikad ne mijenja model. Da promijeniš ugao, rotiraj ivice pomoću {{ui:Rotiraj}}.
- **Krug na kraju cilindra** (krug koji si povukao pomoću {{ui:Gurni/povuci}}) ne može se promijeniti iz svoje kote, jer bi se i njegove strane morale promijeniti. Umjesto toga skaliraj cilindar, oko njegove ose.

## Promijeni veličinu modela pomoću kote

Odmah nakon postavljanja kote, upiši novu dužinu i pritisni {{key:Enter}}: `6m`, `12'`, `3500` u modelu u milimetrima. Model se mijenja na tu veličinu.

Kasnije, u bilo kojem trenutku:

1. S {{ui:Odaberi}} klikni tekst ili liniju kote. {{ui:Podaci o entitetu}} kaže **Kota** i prikazuje njenu {{ui:Dužinu}}.
2. Upiši novu dužinu i pritisni {{key:Enter}}. Možeš upisati direktno u polje vrijednosti ili u polje {{ui:Dužina}} u {{ui:Podaci o entitetu}}.

### Šta se pomjera

Drugi ugao na koji si kliknuo se pomjera, i sve iza njega:

- **Oba ugla na jednom dijelu** (širina kutije, visina zida): strana na pokretnom uglu klizi van ili unutra, a lica spojena s njom se rastežu. Kutija ostaje zatvoreno tijelo, a sve što stoji u cijelosti s te strane, npr. komponenta prozora, pomjera se s njom.
- **Uglovi na dva odvojena dijela** (razmak između dvije kutije): dio pokretnog ugla se pomjera cijeli, a razmak se mijenja.
- **Pokretni ugao unutar grupe ili komponente** u kojoj drugi ugao nije: cijela grupa se pomjera.
- **Oba ugla unutar iste grupe ili komponente**: ona se rasteže unutra. Komponenta se mijenja svuda gdje je postavljena, kao što se uvijek mijenja kad je uređuješ.

Da promijeniš koji kraj se pomjera, odaberi kotu i izaberi u {{ui:Pomjera se}} u {{ui:Podaci o entitetu}}:

| Izbor | Šta se dešava |
|---|---|
| {{ui:Drugi kraj}} (podrazumijevano) | Kraj na koji si kliknuo drugi put se pomjera |
| {{ui:Prvi kraj}} | Kraj na koji si kliknuo prvi put se pomjera |
| {{ui:Oba kraja (centrirano)}} | Svaki kraj pomjera polovinu promjene, pa sredina ostaje na mjestu |

### Kad se promjena veličine odbije

ModelCraft ništa ne mijenja i kaže zašto u statusnoj traci:

- "lice bi se savilo iz svoje ravni": kota ide koso kroz oblik. Kotiraj duž ivice, ili duž crvene, zelene ili plave.
- "lice bi se smanjilo na ništa ili bi se okrenulo naopako": nova dužina je prekratka za oblik.
- "kraj koji se pomjera nije na uglu modela": taj kraj je postavljen u prazan prostor ili na sredinu ivice. Odaberi drugi kraj u {{ui:Pomjera se}}, ili postavi kotu na dva ugla.
- "dužina mora biti veća od nule".

Svaka promjena veličine je jedan korak: {{key:Mod+Z}} je poništava.

## Ponovo upiši veličinu u Podaci o entitetu

Ne treba ti uvijek kota:

- **Ivica:** odaberi je. Njena {{ui:Dužina}} u {{ui:Podaci o entitetu}} je polje u koje možeš upisati. Upisivanje dužine u polje vrijednosti također radi. Kraj koji je dalje duž crvene, zatim zelene, zatim plave se pomjera, a ono što je s njim spojeno se rasteže. Na primjer, ponovno upisivanje prednje donje ivice kutije čini kutiju širom udesno.
- **Grupa ili komponenta:** odaberi je. {{ui:Širina (crvena)}}, {{ui:Dubina (zelena)}} i {{ui:Visina (plava)}} su polja. Njena udaljena strana (desno, pozadi, gore) se pomjera. Ovo su sopstvene ose grupe, prije bilo kakve rotacije koju si joj dao.

Pritisni {{key:Enter}} da primijeniš, ili {{key:Esc}} da vratiš staru vrijednost.

## Kote prate model

Kota je vezana za dva ugla na koja je postavljena (ugao: za njen ugao i daleke krajeve njegove dvije ivice; poluprečnik ili prečnik: za njegov luk ili krug). Pomjeri, gurni/povuci ili promijeni veličinu geometrije, a kota prati i prikazuje novu dužinu. Ostaje vezana kad geometriju pretvoriš u grupu ili komponentu.

Ako je kraj postavljen na mjestu koje nije ugao (na površini ili u praznom prostoru), ili je njegov ugao obrisan, taj kraj ostaje gdje je bio. Kota i dalje mjeri, ali može mijenjati veličinu samo od drugog kraja.

## Ukloni kote

- Jednu kotu: odaberi je i pritisni {{key:Delete}}, ili je klikni {{ui:Gumica}}.
- Sve kote: kad ništa nije odabrano, klikni {{ui:Obriši sve kote}} u {{ui:Podaci o entitetu}}.

Kote se čuvaju u datoteci `.modelcraft`. Ne izvoze se u druge formate, koji nose samo 3D model. Datoteka s kotama se i dalje otvara u starijem ModelCraft-u, bez njih.
